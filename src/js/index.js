// Geeft errors!
//import { Sidenavigation } from '@govflanders/vl-ui-side-navigation';
//import {EqualHeight} from '@govflanders/vl-ui-equal-height';
//import { Select } from '@govflanders/vl-ui-select';

var URL;
var API;

window.onload = function(){
    document.getElementById('demo_button').onclick = function(){getHypermediaControls};
    document.getElementById('demo_button').addEventListener("click", getHypermediaControls);

    document.getElementById('test-url-button').onclick = function(){getTestURL};
    document.getElementById('test-url-button').addEventListener("click", getTestURL);

    document.getElementById('language-comment').style.visibility = "hidden";

    document.getElementById("api-selector").onchange = function(){showLanguageComment};
    document.getElementById("api-selector").addEventListener("change", showLanguageComment);
}

function showLanguageComment(){
    if(document.getElementById('api-selector').value === 'language'){
        document.getElementById('language-comment').style.visibility = "visible";
    } else {
        document.getElementById('language-comment').style.visibility = "hidden";
    }
}

// Function to get URL and chosen API
function getDemoValues() {
    API = document.getElementById('api-selector').value;
    URL = document.getElementById('input-field-url').value;
}

// Function that returns test URL for user (in case he has no URL himself)
function getTestURL(){
    let value = document.getElementById("api-selector").value;
    if(value === 'pagination'){
        document.getElementById('input-field-url').value = 'http://tw06v036.ugent.be/api/pagination';
    } else if(value === 'crud'){
        document.getElementById('input-field-url').value = 'http://tw06v036.ugent.be/api/crud/1';
    } else {
        document.getElementById('input-field-url').value = 'http://tw06v036.ugent.be/api/language';
    }
}

// Function to be executed when button was clicked
async function getHypermediaControls() {
    //document.getElementById('textarea-result').value = "";
    getDemoValues();

    if(!URL){
        document.getElementById('url-comment').style.display = "inline";
    }

    if(API && URL){
        document.getElementById('url-comment').style.display = "none";
        let controls;
        switch (API) {
            case 'pagination':
                controls = await getPaginationControls();
                controls = clickableLinks(controls, 'pagination');
                break;
            case 'crud':
                controls = await getCRUDControls();
                controls = clickableLinks(controls, 'crud');
                break;
            case 'language':
                controls = await getLanguageControls();
                controls = clickableLinks(controls, 'language');
                break;
        }
        //document.getElementById('info_tile_text').text = JSON.stringify(controls, null, 4);
        //document.getElementById('result_text').innerHTML = JSON.stringify(controls,null,'\t');
        document.getElementById('result_text').innerHTML = JSON.stringify(controls, null, 4).replace(/\\"/g, '"')
    }
}


// Test URL: http://beta.metadata.vlaanderen.be/srv/api/0.1/records?from=1&hitsPerPage=10&facet.q=sourceCatalog%2F006f665b-339b-44ac-88ff-c892437221a3
// In the project itself it works, but here we get an empty result
function getPaginationControls(){
    return new Promise(resolve => {
        let client = new window.ghaclient.ApiClient(null);
        const paginationHandler = new window.ghaclient.PaginationHandler({
           pagedataCallback: (pagedata) => {
               resolve(pagedata)
           },
           subjectStream: client.subjectStream
        });
        //client.fetch("http://beta.metadata.vlaanderen.be/srv/api/0.1/records?from=1&hitsPerPage=10&facet.q=sourceCatalog%2F006f665b-339b-44ac-88ff-c892437221a3",[paginationHandler]);
        client.fetch(URL,[paginationHandler]);
    });
}

function getCRUDControls(){
    return new Promise(resolve => {
        const client = new window.ghaclient.ApiClient(null);
        const crudHandler = new window.ghaclient.CRUDHandler({
           crudCallback: (crud) => resolve(crud)
        });
        client.fetch(URL, [crudHandler]);
    });
}

// Important //
/*
* Via de acceptLanguageHeader geven we aan in welke taal we onze data verwachten (quads).
* Deze taal wordt dan meegegeven in de 'Accept-Language' header van het request
* Echter deze header wordt overschreven door deze van de browser, waardoor niet de gevraagde taal wordt teruggegeven
* De header van de browser hangt af van de talen die ingesteld staan, bij mij is dat Nederlands, Amerikaans-Engels en Engels
* De header heeft als waarde dan altijd: nl-NL;q=0.9,nl;q=0.8,en-US;q=0.7,en;q=0.6
*
* De testserver zelf heeft enkel de tag 'nl-be' waardoor geen Nederlands wordt teruggegeven.
* Lokaal heb ik aanpassing gemaakt zodat tag 'nl-NL' er ook in zit en dit werkt.
* */

function getLanguageControls(){
    return new Promise(resolve => {
        const client = new window.ghaclient.ApiClient(null);
        const languageHandler = new window.ghaclient.LanguageHandler(
            {
                languageCallback: (language) => {
                    language.stream.on('data', (data) => {
                        if (typeof data === 'object') {
                            resolve(data.object);
                        }
                    });
                },
                acceptLanguageHeader: 2  //The Accept-Language header string    (supported languages on the server are nl, fr and en)
            }
        );
        client.fetch(URL, [ languageHandler ]);
    });
}

function clickableLinks(controls, handler){
    if(handler === 'pagination'){
        for(let prop in controls){
            if(controls[prop]){
                controls[prop] = controls[prop].link(controls[prop]);
            }
        }
    } else if(handler === 'crud'){
        for(let index in controls){
            if(controls[index].expects){
                controls[index].expects = controls[index].expects.link(controls[index].expects);
            }
        }
    } else {
        // Ok for now, may fix this in the future
        for(let prop in controls){
            if(controls[prop] && typeof controls[prop] === "object"){
                for(let p in controls[prop]){
                    let value = String(controls[prop][p]);
                    if(value.indexOf('http') >= 0){
                        controls[prop][p] = controls[prop][p].link(controls[prop][p]);
                    }
                }
            }
        }
    }

    return controls;
}















