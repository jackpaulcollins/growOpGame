import '../scss/styles.scss';
import $ from 'jquery';
import {Environment} from './backend.js';
import plantImg from '../assets/img/plant.png';

$(document).ready(function(){
  const userEnvironment = new Environment();
  $("#userPlantSelection").submit(function(event){
    event.preventDefault();
    let input = $("#numPlants").val();

    const newPurchase = userEnvironment.addPlants(input);
    newPurchase.forEach(function(plant){
      $(".grow-area").append(`<img class='plant' id='${plant.id}' src='${plantImg}'>`)
      $(`#${plant.id}`).click(function(){
        console.log(plant)
        plant.water++;
        userEnvironment.waterTank-=10;
        $('.water').css("width",`${userEnvironment.waterTank}`);
      })
s    });
    console.log(userEnvironment)

    setInterval(function(){
      userEnvironment.plantArray.forEach(function(plant){
        plant.grow();
        $(`#${plant.id}`).css('transform',`scale(${plant.size}`);
      });
    }, 1000);
  });

});
