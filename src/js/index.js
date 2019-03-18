import '../scss/styles.scss';
import $ from 'jquery';
import {Environment} from './backend.js';

$(document).ready(function(){
  $("#userPlantSelection").submit(function(event){
    event.preventDefault();
    let input = $(".userInput").val();
    const userEnvironment = new Environment(input);
    const newGrid = userEnvironment.buildGrid(input)
    newGrid.forEach(function(plant){
      $(".output-grid").append(`<img class='plant' id='${plant.id}' src='../img/plant.png'>`)
    });
    console.log(newGrid);
  })
});
