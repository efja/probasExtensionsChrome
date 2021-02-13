//@jorgePicon
//Función que auto oculta la barra inferior de botones de Google Meet.
//Pegar el código en la consola del navegador (F12) de la sesión de Meet.

var timeout = null;
var body = document.querySelector(".EIlDfe.T3F3Rd");
var div1 = document.querySelector(".rG0ybd.LCXT6");
var div2 = document.querySelector(".zWfAib.Z319Jd.QhPhw.n9oEIb.a1pVef");

div2.addEventListener("mousemove", function () {
  if (timeout !== null) {
    div2.style.inset = "0px 0px 88px";
    div1.style.transform = "translateY(0px)";
    clearTimeout(timeout);
  }

  timeout = setTimeout(function () {
    div2.style.inset = "0px 0px 0px";
    div1.style.transform = "translateY(88px)";
  }, 3000);
});
