import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as t}from"./assets/vendor-BbbuE1sJ.js";const r=document.querySelector(".form"),l=document.querySelector(".input-fulfilled"),f=document.querySelector(".input-rejected");r.addEventListener("submit",u);let e;function u(o){o.preventDefault(),e=Number(o.target.elements.delay.value);const s=new Promise((c,m)=>{l.checked&&setTimeout(()=>{c()},e),f.checked&&setTimeout(()=>{m()},e)}),i={title:"OK",message:`Fulfilled promise in ${e}ms`,messageColor:"#ffffff",backgroundColor:"#59a10d",position:"bottomCenter",iconUrl:"./img/ok.svg"},n={title:"Error",message:`Rejected promise in ${e}ms`,messageColor:"#ffffff",backgroundColor:"#ef4040",position:"bottomCenter",iconUrl:"./img/error.svg"};s.then(()=>{t.show(i)}).catch(()=>{t.show(n)}),r.reset()}
//# sourceMappingURL=2-snackbar.js.map
