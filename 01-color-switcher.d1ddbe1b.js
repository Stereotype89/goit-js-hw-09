const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");d.disabled=!0,e.addEventListener("click",r);const r=()=>{timerId=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),e.disabled=!0,d.disabled=!1};d.addEventListener("click",(()=>{clearInterval(timerId)}));
//# sourceMappingURL=01-color-switcher.d1ddbe1b.js.map
