"use strict";

let encrypt = require("./src/app/encrypt");
let plaintext = {'file': './static/logins.csv','password':'mypassword4'};
let content = encrypt(plaintext);


function doSomething(nom) {
  console.log(nom + "()" + nom + "[")
  let decrypt = require("./src/app/decrypt");
  


  let decipheredtext = decrypt({
	dc_file: '../../static/logins.csv.enc',
	password: 'mypassword4'
  })
}

(function loop() {
    var rand = Math.round(Math.random() * (3000 - 500)) + 500;
    let om = Math.round(Math.random() * (3000 - 500)) + 500;
    setTimeout(function() {
            doSomething(om);
            loop();  
    }, rand);
}());


