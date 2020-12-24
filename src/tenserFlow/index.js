import * as tf from '@tensorflow/tfjs';
import * as speechCommands from '@tensorflow-models/speech-commands'

let recognizer;
let words;
const wordList = [];

export async function loadModel() {
  recognizer = speechCommands.create('BROWSER_FFT', '18w');
  // directional4w
  await recognizer.ensureModelLoaded();
  // Make sure that the underlying model and metadata are loaded via HTTPS
  // requests.
  words = recognizer.wordLabels();
  console.log(recognizer.wordLabels());
  // See the array of words that the recognizer is trained to recognize.
}

// `listen()` takes two arguments:
// 1. A callback function that is invoked anytime a word is recognized.
// 2. A configuration object with adjustable fields such a
//    - includeSpectrogram
//    - probabilityThreshold
//    - includeEmbedding
export function startListening(callback) {
  recognizer.listen(({scores}) => {
    scores = Array.from(scores).map((s, i) => ({score: s, word: words[i]}));

    // After that we sort the array by scode descending
    scores.sort((s1, s2) => s2.score - s1.score);

    let command = scores[0].word
    callback(command)
    // - result.scores contains the probability scores that correspond to
    //   recognizer.wordLabels().
    // - result.spectrogram contains the spectrogram of the recognized word.
  }, {
    includeSpectrogram: true,
    probabilityThreshold: 0.9
  });
}

export function stopListening(){
  recognizer.stopListening();
}

export default recognizer
