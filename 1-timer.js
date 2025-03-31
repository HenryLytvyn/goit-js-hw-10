import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as c,i as u}from"./assets/vendor-BbSUbo7J.js";const e=document.querySelector("button[data-start]"),s=document.querySelector("#datetime-picker"),p=document.querySelector(".timer");e.disabled=!0;e.style.cursor="default";let r,n;c("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]>Date.now()?(r=t[0],e.disabled=!1,e.style.cursor="pointer"):(u.show({title:"Error",message:"Please choose a date in the future",backgroundColor:"#B51B1B",image:"../img/error.svg",timeout:"3000"}),e.disabled=!0,e.style.cursor="default"),r&&(n=r.getTime()-Date.now())}});e.addEventListener("click",f);function f(){e.style.cursor="default",s.style.cursor="default";const t=setInterval(()=>{if(n>999){e.disabled=!0,s.disabled=!0,n-=1e3;const a=m(n);console.log(a),p.innerHTML=`<div class="field">
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
</div>`}else e.disabled=!1,s.disabled=!1,e.style.cursor="pointer",s.style.cursor="pointer",clearInterval(t)},1e3)}function m(t){const o=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),i=Math.floor(t%864e5%36e5%6e4/1e3);return{days:o,hours:l,minutes:d,seconds:i}}
//# sourceMappingURL=1-timer.js.map
