'use strict';

const { mockTHREE, mockDataStore } = require('ebabel-mocks');
const { updatePlayerPositionRotation, keyboardControls } = require('../src/ebabel-keyboard-controls.js');

let THREE;
let camera;
let dataStore;

beforeEach(() => {
  THREE = mockTHREE;
  camera = new THREE.PerspectiveCamera();
  dataStore = mockDataStore;
});

test('keyboardControls returns something other than undefined.', () => {
  const result = keyboardControls(dataStore);
  expect(result !== undefined).toBe(true);
});

test('updatePlayerPositionRotation returns something other than undefined.', () => {
  const result = updatePlayerPositionRotation(camera, dataStore);
  expect(result !== undefined).toBe(true);
});

