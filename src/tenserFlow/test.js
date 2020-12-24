import * as tf from '@tensorflow/tfjs';
import * as speechCommands from '@tensorflow-models/speech-commands';

import VoiceModel from './audio-model/model.json';
import VoiceModelMetadata from './audio-model/metadata.json';

export default class Voice{
    constructor() {
        this.options = {
            includeSpectogram: true,
            overlapFactor: 0.5,
            invokeCallbackOnNoiseAndUnkown: false,
            probabilityThershold: 0.90,
          };
    }

    async buildModel() {
        const recognizer = speechCommands.create(
            'BROWSER_FFT',
            // 'directional4w',
            null,
            VoiceModel,
            VoiceModelMetadata
        );
        await recognizer.ensureModelLoaded()

        return recognizer
    }

    async startListening(callback) {
        this.recognizer = await this.buildModel();

        const classLabels = this.recognizer.wordLabels();

        this.recognizer.listen((result) => {
            const scores = result.scores;

            const wordScore = scores.reduce((previousValue, value) => {
                if (previousValue) {
                if (previousValue > value) return previousValue;
                }
                return value;
            });

            const wordIdx = scores.findIndex((v) => v === wordScore);
            const word = classLabels[wordIdx];

            callback(word)
        })
    }
}
