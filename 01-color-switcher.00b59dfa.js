!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");o.disabled=!0,console.log("hello");o.addEventListener("click",(function(){clearInterval(timerId),o.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){timerId=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),o.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.00b59dfa.js.map
