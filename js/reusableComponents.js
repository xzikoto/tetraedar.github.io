import languageAbreviations from './constants.js';

$(document).ready(function () {
    
    loadFooterByLanguage();
    
});


function loadFooterByLanguage() {

    var fileName = location.href.split("/").slice(-2); 
    
    languageAbreviations.forEach(language => {
        if(fileName.first().contains(language)){
            $('#footer').load('../'+ language +'footer.html');
            return;
        }
    });
    $('#footer').load('../'+ languageAbreviations[bgLanguage] +'footer.html');
  }