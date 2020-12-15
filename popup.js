// background-script.js
"use strict";
var submit_button = document.getElementById('submit_button');
var url = document.getElementById('text1');
var pass = document.getElementById('pass');


submit_button.addEventListener('click',()=>{
var sourceString = url.value.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0];
console.log(`sourceString ${sourceString}`);

function setItem() { console.log("OK");}

function gotKitten(item) {console.log(`${item.kitten.name} has ${item.kitten.eyeCount} eyes`);}

function gotMonster(item) { console.log(`${item.toBlock.name} has ${item.toBlock.pass} eyes`);}

function onError(error) { console.log(error)}

let toBlock = {
  name: sourceString,
  tentacles: true,
  pass: pass.value
}

let kitten = {
  name: "Moggy",
  tentacles: false,
  eyeCount: 2
}

// store the objects

browser.storage.local.get("toBlock").then(checkExisting,onError);
function checkExisting(item)
{if(sourceString === item.toBlock.name){document.getElementById("div2").innerHTML  = "Already Saved";}
  
else
{browser.storage.local.set({kitten, toBlock});//.then(setItem, onError);
document.getElementById("div2").innerHTML  = "Saved";
}
}  

browser.storage.local.set({kitten, toBlock})//.then(setItem, onError);

browser.storage.local.get("kitten")//.then(gotKitten, onError);
browser.storage.local.get("toBlock")//.then(gotMonster, onError);




})








