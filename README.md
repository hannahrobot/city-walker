## Midnight Train

A voice command driven 3D interactive simulation

A live version of this app is available at https://city-walker.web.app/

## Gameplay Mechanics

Midnight Train is a 3D driving simulation in which the player's movement is controlled not by keyboard commands, but by voice commands. The player's goal is to navigate through a 3D representation of a Train to get to the last car. The voice recognition model accepts several concise commands [stop, go, left, right] to traverse the world. Course completion is timed and saved when player has reached the goal.

## Technologies

Midnight Train is developed with Node.JS, three.js wrapper, react-three-fiber for 3D world rendering, react-three/cannon for 3d physics engine, TensorFlow.js' speech recognition mode, Google Firebase as a database and deployment provider, React for modular front end stately rendering and Redux for application and game state management.

## How to Play

Use the following voice commands to move your player

- Go: Begin movement
- Stop: Stop
- Right: Move right
- Left: Move left

Make it to the end of the train

## Installation

To install Midnight Train, you will need to be running Node.JS with NPM
Install all dependencies with

### `npm install`

Then start the app with the command

### `npm start`

The game will be available at http://localhost:3000
