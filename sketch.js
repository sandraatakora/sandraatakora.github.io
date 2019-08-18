// P_1_0_01
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * changing colors and size by moving the mouse
 *
 * MOUSE
 * position x          : size
 * position y          : color
 *
 * KEYS
 * s                   : save png
 */
'use strict';

function setup() {
  var canvasDiv = document.getElementById('myCanvas');
  var width = canvasDiv.offsetWidth;
  var sketchCanvas = createCanvas(width,windowHeight);
  console.log(sketchCanvas);
  sketchCanvas.parent("myCanvas");
  
  noCursor();
  colorMode(HSB, 360, 100, 100);
  noStroke();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(mouseY / 2, mouseY/10, 100); // This is background color. 720/2 = 360 which is the color wheel. Only Hue changes originally. 

  fill(360 - mouseY / 2, 100, 100);
  rect(0, 0, width, mouseY + 1); //This is the rect position/size – (x,y,w,h) – x,y is the starting point (top left unless rectMode is defined otherwise). w,h, is widht and height in px.
  // Why + 1? Must be some sort of best practice?? Works fine without it in this example.
}

// function keyPressed() {
//   if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
// }


// let project = $('.project');
// let listitem = $('#perch');

// console.log(project, listitem);

// listitem.on('click', function() {
//   project.removeClass('hidden');
// })

