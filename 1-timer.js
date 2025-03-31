import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as c,i as u}from"./assets/vendor-BbbuE1sJ.js";const t=document.querySelector("button[data-start]"),s=document.querySelector("#datetime-picker"),p=document.querySelector(".timer");t.disabled=!0;let r,n;c("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]>Date.now()?(r=e[0],t.disabled=!1,t.classList.add("start-active")):(u.show({title:"Error",message:"Please choose a date in the future",backgroundColor:"#B51B1B",image:"../img/error.svg",timeout:"3000"}),t.disabled=!0,t.classList.remove("start-active")),r&&(n=r.getTime()-Date.now())}});t.addEventListener("click",m);function m(){s.style.cursor="default",t.classList.remove("start-active");const e=setInterval(()=>{if(n>999){t.disabled=!0,s.disabled=!0,n-=1e3;const a=v(n);p.innerHTML=`<div class="field">
  <span class="value" data-days>${String(a.days).padStart(2,"0")}</span>
  <span class="label">Days</span>
</div>
<div class="field">
  <span class="value" data-hours>${String(a.hours).padStart(2,"0")}</span>
  <span class="label">Hours</span>
</div>
<div class="field">
  <span class="value" data-minutes>${String(a.minutes).padStart(2,"0")}</span>
  <span class="label">Minutes</span>
</div>
<div class="field">
  <span class="value" data-seconds>${String(a.seconds).padStart(2,"0")}</span>
  <span class="label">Seconds</span>
</div>`}else s.disabled=!1,s.style.cursor="pointer",clearInterval(e)},1e3)}function v(e){const o=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),d=Math.floor(e%864e5%36e5%6e4/1e3);return{days:o,hours:i,minutes:l,seconds:d}}
//# sourceMappingURL=1-timer.js.map
