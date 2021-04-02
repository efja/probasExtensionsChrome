"use strict";
/**
 * Engadense os menús para seleccionar as opcións e os seus listeners.
 */

// https://stackoverflow.com/questions/19758028/chrome-extension-get-dom-content
chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        id: "autoOcultarBarraGMeet",
        title: "Auto-ocultar barra inferior de Google Meet",
        type: "normal",
        onclick: autoOcultarBarraGMeet,
    });
    chrome.contextMenus.create({
        id: "ocultarBarraGMeet",
        title: "Ocultar a barra superior e inferior Google Meet",
        type: "normal",
        onclick: eliminarBarraGMeet,
    });
});

/**
 * @jorgePicon
 * Función que auto oculta la barra inferior de botones de Google Meet.
 * Pegar el código en la consola del navegador (F12) de la sesión de Meet.
 *
 * Función original en el script: /js/original_script.js
 *
 * @javierGonzález
 * Simplemente encapsulei o script orixinal nunha función e renomei as variables,
 */

let autoOcultarBarraGMeetString = `
    function autoOcultarBarra() {
        let timeout = null;
        let body = document.getElementsByTagName("body");
        let divBarra = document.querySelector(".rG0ybd.LCXT6");
        let divPresentacion = document.querySelector(
        ".zWfAib.Z319Jd.QhPhw.n9oEIb.a1pVef"
        );

        divPresentacion.addEventListener("mousemove", function () {
        if (timeout !== null) {
            divPresentacion.style.inset = "0px 0px 88px";
            divBarra.style.transform = "translateY(0px)";
            clearTimeout(timeout);
        }

        timeout = setTimeout(function () {
            divPresentacion.style.inset = "0px 0px 0px";
            divBarra.style.transform = "translateY(88px)";
        }, 3000);
        });
    }
    autoOcultarBarra();
`;

/**
 * @javierGonzález
 * Oculta a barra inferior de Google Meet.
 */
let ocultarBarrasGMeetString = `
    function ocultarBarra() {
        let barraSuperior =  document.querySelector("div[class='pHsCke']");
        let barraInferior =  document.querySelector("div[jsname='EaZ7Cc']");

        let contenedorPresentacion =  document.querySelector("div[jscontroller='MJfjyf']");
        let contenedorPresentacion2 =  document.querySelector("div[data-ssrc='4169222102']");

        let display = barraInferior.style.display;

        // Ó redimensionar a pantalla recalculase automáticamete
        contenedorPresentacion2.style.width = "100%";
        contenedorPresentacion2.style.height = "100%";
        contenedorPresentacion2.style.left = "0px";
        contenedorPresentacion2.style.top = "0px";

        // Mostra ou oculta as barras
        if (display === "none") {
            barraSuperior.style.display = "flex";
            barraInferior.style.display = "flex";
            divBarraInferior.style.display = "flex";
            contenedorPresentacion.style.inset = "48px 0px 88px";
        } else {
            barraSuperior.style.display = "none";
            barraInferior.style.display = "none";
            divBarraInferior.style.display = "none";
            contenedorPresentacion.style.inset = "0px 0px 0px";
        }
    }
    ocultarBarra();
`;

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(
        null, {
            code: ocultarBarrasGMeetString,
        },
        (resultado) => {
            console.log(resultado);
        }
    );
});

function autoOcultarBarraGMeet() {
    chrome.tabs.executeScript(
        null, {
            code: autoOcultarBarraGMeetString,
        },
        (resultado) => {
            console.log(resultado);
        }
    );
}

function eliminarBarraGMeet() {
    chrome.tabs.executeScript(
        null, {
            code: ocultarBarrasGMeetString,
        },
        (resultado) => {
            console.log(resultado);
        }
    );
}