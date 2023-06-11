import $ from "jquery";
// var $ = require( "jquery" );

const speech = new SpeechSynthesisUtterance();

const speak = (e) => {
  e.preventDefault();
  //   var msg = 'hello'
  const msg = $("#message").val();
  //   const msg = document.getElementById('message').value || null;
  speech.lang = "en";
  speech.text = msg;
  window.speechSynthesis.speak(speech);
};

speak();
