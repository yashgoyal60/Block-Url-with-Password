var URL = window.location.href; 

window.addEventListener("load", notifyExtension());

function notifyExtension() {
console.log("in load")
browser.runtime.sendMessage({"url": URL});
}

