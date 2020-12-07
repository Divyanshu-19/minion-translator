var inputText = document.querySelector('#inputtext');
var outputText = document.querySelector('#outputtext');
var btn = document.querySelector('#txtbutton');

var url = "https://api.funtranslations.com/translate/minion.json";

function urlstring(input){
    return url + "?" + "text=" + input;
}

function errorHandler(error){
    console.log("error:"+error);
    alert("Error! Please try again later");
}

function clickHandler(){
    var input = inputText.value;
    
    fetch(urlstring(input))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputText.innerHTML = translatedText;
    })
    .catch(errorHandler);
}

btn.addEventListener('click', clickHandler);