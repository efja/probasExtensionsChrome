//@jorgePicon
//Función que auto oculta la barra inferior de botones de Google Meet.
//Pegar el código en la consola del navegador (F12) de la sesión de Meet.

let hideBar = null;
let active = false;
let fullScreen;
let body = document.querySelector(".EIlDfe.T3F3Rd");
let div1 = document.querySelector(".rG0ybd.LCXT6"); //div barra inferior botones
let div2 = document.querySelector(".zWfAib.Z319Jd"); //div pantalla principal
//let div3 = document.querySelector(".p2hjYe.TPpRNe"); //div presentacion
let div3 = document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.loWbp > div.zWfAib.Z319Jd.PvRhvb.nrxduf.a1pVef.CUJC3 > div:nth-child(2) > div.koV58.Zi94Db.S7urwe > div.p2hjYe.TPpRNe");
let div4 = document.querySelector(".gV3Svc"); //div de usuarios conectados
let numUsers = document.querySelector(".gV3Svc").lastElementChild.innerText; //num de usuarios conectados

div2.addEventListener('mousemove', function() {
    fullScreen = (window.innerHeight+1 == screen.height)? true:false;
    if (hideBar !== null) {
        div1.style.transform= "translateY(0px)";
        div2.style.inset= "0px 0px 88px";
        if(fullScreen) {
            if(div3.offsetWidth == 1279){    
                div3.style.width= "1122px";
                div3.style.height= "631px";
            }
        }
        clearTimeout(hideBar);
        active = false;
    }

    hideBar = setTimeout(function() {
        fullScreen = (window.innerHeight+1 == screen.height)? true:false;
        div2.style.inset= "0px 0px 0px";
        div1.style.transform= "translateY(88px)";
        if(fullScreen) {
            if(div3.offsetWidth == 1122){
                div3.style.width= "1279px";
                div3.style.height= "719px";
            }
        }
        active = true;
    }, 3000);
    
});
div4.addEventListener('onchange', function() {
    if (active == true) {
        div2.style.inset= "0px 0px 0px";
        div1.style.transform= "translateY(88px)";
        console.log(numUsers)
    }
});