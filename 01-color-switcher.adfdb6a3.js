const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");o.disabled=!0,e.addEventListener("click",(function(d){e.setAttribute("disabled",!0),o.removeAttribute("disabled"),bodyHexColor=setInterval((()=>{t.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),o.addEventListener("click",(function(t){o.setAttribute("disabled",!0),e.removeAttribute("disabled"),clearInterval(bodyHexColor)}));
//# sourceMappingURL=01-color-switcher.adfdb6a3.js.map
