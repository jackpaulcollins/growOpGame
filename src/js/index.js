import '../scss/styles.scss';
import $ from 'jquery';
import {Environment} from './backend.js';
import plantImg from '../assets/img/plant.png';

$(document).ready(function(){
  const userEnvironment = new Environment();
    $("#time").text(userEnvironment.time);
    //purchase submit
  const addPlants=()=>{
    userEnvironment.plantArray.forEach(function(plant){
      $(".grow-area").append(`<img class='plant' id='${plant.id}' src='${plantImg}'>`)
      //click listener for plants
      $(`#${plant.id}`).click(function(){
        console.log(plant)
        plant.water++;
        userEnvironment.waterTank-=10;
      })
    });
  };
  $("#userPlantSelection").submit(function(event){
    event.preventDefault();
    let input = $("#numPlants").val();
    userEnvironment.addPlants(input);
    addPlants();
    // newPurchase.forEach(function(plant){
    //   $(".grow-area").append(`<img class='plant' id='${plant.id}' src='${plantImg}'>`)
    //   //click listener for plants
    //   $(`#${plant.id}`).click(function(){
    //     console.log(plant)
    //     plant.water++;
    //     userEnvironment.waterTank-=10;
    //   })
    // });
  });
  //end purchase submit
  $('#harvest').click(function(){
    console.log(userEnvironment);
    userEnvironment.harvest();
    $('.grow-area').html("");
    console.log(userEnvironment);
  });

  setInterval(function(){
    userEnvironment.day();
  }, 1000)

  setInterval(function(){
    userEnvironment.plantArray.forEach(function(plant){
      plant.grow();
      $(`#${plant.id}`).css('width',`${plant.size * 50}`);
    });
    $('.water').css("width",`${userEnvironment.waterTank}`);
    $("#budget").text(userEnvironment.budget);
    $("#time").text(userEnvironment.time);
  }, 500);

  $("#more-water").submit(function(event){
    event.preventDefault();
    userEnvironment.addWater();
  })



});
