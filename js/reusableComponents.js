var keys = ["bglanguage", "enlanguage"]
var values = ["bg", "en"]
var languageAbreviations = values.reduce((acc, value, i) => {
    acc[keys[i]] = value;
    return acc
}, {})

$(document).ready(function () {
    
    LoadFooterByLanguage();
    
});


function LoadFooterByLanguage() {

    //getting parrentFolder
    var fileName = location.href.split("/").slice(-2); 
    // for(i=0; i<= languageAbreviations.length; i++){
    //     if(fileName.first().contains(languageAbreviations.[i])){
    //         $('#footer').load('../'+ languageAbreviations.values[i] +'footer.html');
    //         return;
    //     }
    // }
        for(const key in languageAbreviations) {
            if(fileName[0].includes(languageAbreviations[key])){
                $('#footer').load(languageAbreviations[key] +'footer.html');
            return;
        }
        }
    
    // $('#footer').load('../'+ languageAbreviations.keys["bgLanguage"] +'footer.html');
  }