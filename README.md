# glsl-pipeline-SpookySkull 💀 🎃
**A mesmerizing Halloween experience brought to life with 3D graphics, voice recognition, and facial landmarks.**

![Spooky Skull Demo 2](output2.gif)
[Watch the video](https://drive.google.com/file/d/1gV0pnI1ukSJzpyJ7PxZScj2ur26YBPNL/view?usp=drive_link)

## Features ⭐️

### Striking 3D Skull
- Utilizes Three.js for 3D graphics rendering.
- Applies custom GLSL shaders to bring life-like appearance and animations to the skull.
- Incorporates a surreal animation effect inspired by examples from [glsl-pipeline](http://github.com/patriciogonzalezvivo/glsl-pipeline).

### Voice Recognition
- Utilizes browser's native Speech Recognition API.
- Ask the spooky skull questions with just a click.
- Backend integration with Local LLMv2 Endpoint for speech processing and analytics.

### MediaPipe Facial Landmarking
- Real-time facial landmark detection with head tracking using MediaPipe.
- The skull in the scene mimics the user's head orientation, bringing a personalized interactive experience.
- GPU accelerated for a seamless experience.

### Spooky Soundtracks
- Background music to keep the spooky vibes. 
- ♪ Music used: Spook by PeriTune | Licensed under Creative Commons Attribution 3.0

### Local LLMv2 Endpoint
- A locally running endpoint to handle speech-to-text analytics and provide real-time outputs.
- Custom prompt enginnering for SpookySkull character. 
- powerd by [Llama-2](https://huggingface.co/TheBloke/Llama-2-7b-Chat-GGUF) & [text-generation-webui](https://github.com/oobabooga/text-generation-webui)

### GLSL Pipeline
- Advanced GLSL pipelining for efficient graphical rendering.
- Custom shader logic incorporated via Lygia library.  

## Technologies Used :gear:
- [Three.js](https://threejs.org/)
- [MediaPipe](https://github.com/google/mediapipe)
- [glsl-pipeline](http://github.com/patriciogonzalezvivo/glsl-pipeline)
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- [lygia.xyz](https://github.com/patriciogonzalezvivo/lygia)
- [Node.js](https://nodejs.org/)
- [text-generation-webui](https://github.com/oobabooga/text-generation-webui)

🚀 Run and play with interactive demo on github pages (LLM endpoint will be active 72h): 
- [github.io/glsl-pipe-cambuffer](https://furmanlukasz.github.io/glsl-pipe-SpookySkull/)
- tested on Google Chrome browser

#### Acknowledgements
Thanks to:
- [Patricio Gonzalez Vivo](https://github.com/patriciogonzalezvivo) for the [glsl-pipeline](http://github.com/patriciogonzalezvivo/glsl-pipeline) & [lygia.xyz](https://github.com/patriciogonzalezvivo/lygia) libraries.
- [oobabooga](https://github.com/oobabooga) for [text-generation-webui](https://github.com/oobabooga/text-generation-webui).
- [open source community](https://huggingface.co/TheBloke/Llama-2-7b-Chat-GGUF) for quantified language models.
- [META](https://ai.meta.com/llama/) for open sourcing Llama-2.
- [Node.js](https://nodejs.org/)
- [Three.js](https://threejs.org/)
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)


#### Happy Hallowen 🎃 👻
