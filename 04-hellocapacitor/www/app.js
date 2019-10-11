'use strict';


const dataUrl = "https://devfest-nantes-2018-api.cleverapps.io/blog";

const content = document.querySelector('ion-content');


const options = {
    resultType: "CameraResultType.base64"
};

const btnCamera = document.getElementById('btnCamera');
btnCamera.addEventListener("click", () => {
    capacitorExports.Plugins.Camera.getPhoto(options).then(
        (photo) => {

            content.insertAdjacentHTML('beforeend', `<ion-card-content class='ion-margin-vertical-50'><img src="data:image/png;base64, ${photo.base64String}"></ion-card-content>`);


            console.log(photo);
        }, (err) => {
            console.log(err);

        }
    );
});



const urlImages = "https://devfest2018.gdgnantes.com/";


fetch(dataUrl)
    .then(function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        // lecture du corps de la réponse en tant que JSON.



        return response.json();
    })
    .then(function (responseAsJson) {
        // traitement de l'objet

        responseAsJson.forEach(element => {

            let text = "<ion-card class='ion-margin-vertical-50'><img src='" + urlImages + element.image + "'/><ion-card-header><ion-text color='dark'><h1>" + element.title + "</h1></ion-text></ion-card-header><ion-card-content>" + element.brief + "</ion-card-content></ion-card><br><br>"
            content.innerHTML += text;



        });
    })
    .catch(function (error) {
        console.log('Une erreur est survenue : ', error);
    });



