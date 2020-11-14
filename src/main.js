import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../src/css/styles.css';
import Galactic_Age from './../src/js/galactic-age.js';

// $(document).ready(() => {
  $("#user-info").on( "submit", $(".sumbit"), (event) => {
    event.preventDefault();
    
    const name = $("#name").val();
    const age = parseInt($("#age").val());
    const exercise = parseInt($("#exercise").find(":selected").val());
    const water = parseInt($("#water").find(":selected").val());
    const stress = parseInt($("#stress").find(":selected").val());
    const changeBy = exercise + water + stress;
    const showResults = $("#showResults");
    let you = new Galactic_Age(name, age, changeBy);
    let results = you.checkLifeExpectancy();
    console.log(you, results);

    $("#user-info").hide();
    showResults.append(`<h2>${you.name} is currently ${you.age} on Earth</h2>
    <h3>${you.mercuryAge} on Mercury</h3>
    <h3>${you.venusAge} on Venus</h3>
    <h3>${you.marsAge} on Mars</h3>
    <h3>${you.jupiterAge} on Jupiter</h3>
    `)
    results.forEach( result => {
      showResults.append(`<div>${result}</div>`)
    })
  }) 
// })


