browser.runtime.onMessage.addListener(verify);

function verify(message)
{
	console.log(`${message.url} In message`);
	browser.storage.local.get("toBlock").then(gotItem, onErrr);
	
function gotItem(item) {
	browser.tabs.query({currentWindow: true, active: true}).then((tabs) => {
    var tab_cur = tabs[0]; // Safe to assume there will only be one result
    // console.log(`Current url: ${tab_cur.url}`);
    // console.log(`Now checking ${message.url} with ${item.toBlock.name}`);
    var sourceString = message.url.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0];
	console.log(`${sourceString}`);

	 if(sourceString === item.toBlock.name ) // url match
	 {
	 	browser.tabs.executeScript({file: "/popup/reDirect.js"}).then(onExecuted, onError);	
	 	return;
	}
});
 //console.log(`The url ${item.toBlock.name} has ${item.toBlock.pass} as password`);
}
}
function onExecuted(result) {console.log(`We executed in all subframes`);}
function onErrr(error) {console.error(`InErrr ${error}`);}
function onError(error) {console.error(`InError ${error}`);}



