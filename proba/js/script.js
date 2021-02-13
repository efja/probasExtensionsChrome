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

function autoOcultarBarraGMeet() {
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

/**
 * @javierGonzález
 * Elimina a barra inferior de Google Meet.
 */
function eliminarBarraGMeet() {
    let divBarra = document.querySelector(".rG0ybd.LCXT6");
    divBarra.remove();
}
