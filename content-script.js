// content-script.js
"use strict";




browser.runtime.onMessage.addListener(request => {
	var i=0;
  console.log("Message from the script:");
  console.log(request.greeting);
  var arr = request.greeting.split("\n");


  window.addEventListener('keydown',function(event){
	if (event.key === 'Enter') {
		document.getElementById('page-chat-input-textarea-textarea').value = arr[i]; //change " page-chat-input-textarea-textarea" with your element
		i =i+1;
		console.log(arr[0]);



}});
  
});

