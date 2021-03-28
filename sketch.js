var canvas, backgroundImage;
var cars=[];
var car1, car2, car3, car4;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;

function setup(){
  canvas = createCanvas(displayWidth-220,displayHeight-230);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}