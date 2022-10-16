var keys = ["bglanguage", "enlanguage"]
var values = ["bg", "en"]
var languageAbreviations = values.reduce((acc, value, i) => {
    acc[keys[i]] = value;
    return acc
}, {})

var parrentPathPrefix = '../'

$(document).ready(function () {
    LoadFooterByLanguage();
    LoadCompanyVisitComponent();
    LoadSevicesVisitComponent();
    LoadTopNavBarComponent();
    LoadNavBarComponent();
    LoadServiceTypesComponent();
});


function LoadFooterByLanguage() {
    var fileName = location.href.split("/").slice(-2);

    for (const key in languageAbreviations) {
        if (fileName[0].includes(languageAbreviations[key])) {
            CheckFileExist('footer.html')
            return;
        }
    }

    CheckFileExist('footer.html')
}

function LoadCompanyVisitComponent() {
    var companyVisitFileName = 'companyVisit.html'

    CheckFileExist(companyVisitFileName)
}

function LoadSevicesVisitComponent() {
    var servicesFileName = 'services.html'
    
    CheckFileExist(servicesFileName);
}

function LoadTopNavBarComponent() {
    var topNavBarFileName = 'topNavBar.html'

    CheckFileExist(topNavBarFileName)
}

function LoadNavBarComponent() {
    var navBarFileName = 'navBar.html'

    CheckFileExist(navBarFileName)
}

function LoadServiceTypesComponent() {
    var navBarFileName = 'serviceTypes.html'

    CheckFileExist(navBarFileName)
}

function CheckFileExist(urlToFile) {
    $.get(urlToFile)
    .done(function() { 
        $('#'+urlToFile.substring(0, urlToFile.lastIndexOf("."))).load(urlToFile)
    }).fail(function() { 
        $('#'+urlToFile.substring(0, urlToFile.lastIndexOf("."))).load(parrentPathPrefix + urlToFile)
    })
}