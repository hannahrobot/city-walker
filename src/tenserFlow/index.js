import * as tf from "@tensorflow/tfjs";
import * as speechCommands from "@tensorflow-models/speech-commands";

let recognizer;
let words;
// One frame is ~23ms of audio.
const NUM_FRAMES = 3;
let examples = [];
const INPUT_SHAPE = [NUM_FRAMES, 232, 1];
let model;

export async function loadModel() {
  try {
    recognizer = speechCommands.create("BROWSER_FFT");
    // Make sure that the underlying model and metadata are loaded via HTTPS requests
    await recognizer.ensureModelLoaded();
    // words = recognizer.wordLabels();
    // See the array of words that the recognizer is trained to recognize.
    // console.log(recognizer.wordLabels());
    buildModel();
  } catch (err) {
    console.log(err);
  }
}
loadModel();

export function collect(label) {
  if (recognizer.isListening()) {
    return recognizer.stopListening();
  }
  if (label == null) {
    return;
  }

  recognizer.listen(
    async ({ spectrogram: { frameSize, data } }) => {
      let vals = normalize(data.subarray(-frameSize * NUM_FRAMES));
      examples.push({ vals, label });
      document.querySelector(
        "#console"
      ).textContent = `${examples.length} examples collected`;
      console.log("examples", examples);
    },
    {
      overlapFactor: 0.999,
      includeSpectrogram: true,
      invokeCallbackOnNoiseAndUnknown: true,
    }
  );
}

export function normalize(x) {
  const mean = -100;
  const std = 10;
  return x.map((x) => (x - mean) / std);
}

export async function train() {
  try {
    // toggleButtons(false);
    const ys = tf.oneHot(
      examples.map((e) => e.label),
      3
    );
    const xsShape = [examples.length, ...INPUT_SHAPE];
    const xs = tf.tensor(flatten(examples.map((e) => e.vals)), xsShape);
    //this is the issue \/
    console.log("model", model);
    await model.fit(xs, ys, {
      batchSize: 16,
      epochs: 10,
      callbacks: {
        onEpochEnd: (epoch, logs) => {
          document.querySelector("#console").textContent = `Accuracy: ${(
            logs.acc * 100
          ).toFixed(1)}% Epoch: ${epoch + 1}`;
        },
      },
    });
    tf.dispose([xs, ys]);
    // toggleButtons(true);
  } catch (err) {
    console.log(err);
  }
}

export function buildModel() {
  model = tf.sequential();
  model.add(
    tf.layers.depthwiseConv2d({
      depthMultiplier: 8,
      kernelSize: [NUM_FRAMES, 3],
      activation: "relu",
      inputShape: INPUT_SHAPE,
    })
  );
  model.add(tf.layers.maxPooling2d({ poolSize: [1, 2], strides: [2, 2] }));
  model.add(tf.layers.flatten());
  model.add(tf.layers.dense({ units: 3, activation: "softmax" }));
  const optimizer = tf.train.adam(0.01);
  model.compile({
    optimizer,
    loss: "categoricalCrossentropy",
    metrics: ["accuracy"],
  });
}

export function toggleButtons(enable) {
  document.querySelectorAll("button").forEach((b) => (b.disabled = !enable));
}

export function flatten(tensors) {
  const size = tensors[0].length;
  const result = new Float32Array(tensors.length * size);
  tensors.forEach((arr, i) => result.set(arr, i * size));
  return result;
}

async function moveSlider(labelTensor) {
  try {
    const label = (await labelTensor.data())[0];
    document.getElementById("console").textContent = label;
    if (label === 2) {
      return;
    }
    let delta = 0.1;
    const prevValue = +document.getElementById("output").value;
    document.getElementById("output").value =
      prevValue + (label === 0 ? -delta : delta);
  } catch (err) {
    console.log(err);
  }
}

export function listen() {
  if (recognizer.isListening()) {
    recognizer.stopListening();
    toggleButtons(true);
    document.getElementById("listen").textContent = "Listen";
    return;
  }
  toggleButtons(false);
  document.getElementById("listen").textContent = "Stop";
  document.getElementById("listen").disabled = false;

  recognizer.listen(
    async ({ spectrogram: { frameSize, data } }) => {
      const vals = normalize(data.subarray(-frameSize * NUM_FRAMES));
      const input = tf.tensor(vals, [1, ...INPUT_SHAPE]);
      const probs = model.predict(input);
      const predLabel = probs.argMax(1);
      await moveSlider(predLabel);
      tf.dispose([input, probs, predLabel]);
    },
    {
      overlapFactor: 0.999,
      includeSpectrogram: true,
      invokeCallbackOnNoiseAndUnknown: true,
    }
  );
}

////////////////////////////////////

// `listen()` takes two arguments:
// 1. A callback function that is invoked anytime a word is recognized.
// 2. A configuration object with adjustable fields such as
//    - includeSpectrogram
//    - probabilityThreshold
//    - includeEmbedding
export function startListening(callback) {
  recognizer.listen(
    ({ scores }) => {
      // turn scores into a list of (score, word) pairs
      scores = Array.from(scores).map((s, i) => ({ score: s, word: words[i] }));
      // Find the most probable word
      scores.sort((s1, s2) => s2.score - s1.score);

      let command = scores[0].word;
      callback(command);
      // - result.scores contains the probability scores that correspond to recognizer.wordLabels().
      // - result.spectrogram contains the spectrogram of the recognized word.
    },
    {
      includeSpectrogram: true,
      probabilityThreshold: 0.9,
    }
  );
}

export function stopListening() {
  recognizer.stopListening();
}

export default recognizer;

//plan: take console log model and copy it into a file, call the file and reference it for listening when the game starts
