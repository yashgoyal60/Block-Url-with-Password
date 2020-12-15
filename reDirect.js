function reDirect()
{
//	check if already not opened
	if(window.location.href != browser.runtime.getURL("popup/reDirected.html")){window.location.href = browser.runtime.getURL("popup/reDirected.html")}
	var password = document.getElementById('Pass');
	var submit = document.getElementById('Submit');
	console.log(`${submit}`);
	submit.addEventListener("click", ()=>{console.log("In lister and working");browser.storage.local.get("toBlock").then(gotItem, onError);});

function gotItem(item) 
{
//	clear the entry 
console.log(`URL ${item.toBlock.name} has ${item.toBlock.pass} pass and now will clear this`);
	
	var urlToRedirect = "";
	urlToRedirect=urlToRedirect.concat("https://",item.toBlock.name);
	var passToValidate = item.toBlock.pass;
	//console.log(`urlToRedirect: ${urlToRedirect}`);
	function onRemoved() 
	{//console.log("OK");
	window.location.href = urlToRedirect;
	}
	function onError(e) {console.log(e);}
//	console.log(`${password.value} and ${passToValidate}`);
	if(password.value == passToValidate)
	{browser.storage.local.remove("toBlock").then(onRemoved, onError);}
	else
	{
		document.getElementById("div2").innerHTML = "Invalid Credentials";
	}
}
function onError(error) {console.error(`InError ${error}`);}
}

// To call upper function
reDirect();


	