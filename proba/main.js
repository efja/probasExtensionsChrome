"use strict";
/**
 * Engadense os menús para seleccionar as opcións e os seus listeners.
 */

// https://stackoverflow.com/questions/19758028/chrome-extension-get-dom-content
chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        id: "autoOcultarBarraGMeet",
        title: "Auto-ocultar barra Google Meet",
        type: "normal",
        onclick: autoOcultarBarraGMeet,
    });
    chrome.contextMenus.create({
        id: "autoOcultar",
        title: "Quitar barra Google Meet",
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
`;

/**
 * @javierGonzález
 * Elimina a barra inferior de Google Meet.
 */
let eliminarBarraGMeetString = `
    let divBarra = document.querySelector(".rG0ybd.LCXT6");
    divBarra.remove();
`;

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(
        null, {
            code: eliminarBarraGMeetString,
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
            code: eliminarBarraGMeetString,
        },
        (resultado) => {
            console.log(resultado);
        }
    );
}