(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();var p=' <div class="trending-searches"><div id="divide-line"></div><a href="searches-about.html"><div class="trending-search"><img class="trending-icon" src="search.jpg"><p >About Me</p></div></a><a href="searches-projects.html"><div class="trending-search"><img class="trending-icon"  src="search.jpg"><p>My Projects</p></div></a><a href="searches-experience.html"><div class="trending-search"><img class="trending-icon"  src="search.jpg"><p>My Experience</p></div></a><a href="cv.pdf" download><div class="trending-search"><img class="trending-icon"  src="search.jpg"><p>My CV </p></div></a></div>',o=document.querySelector(".search-box"),a=document.querySelector("#search-text");function u(){o.classList.toggle("trending-show"),o.insertAdjacentHTML("afterend",p),a.innerHTML="Victoria Paterson"}let t=0;const c="Victoria Paterson",f=50;function d(){t<c.length?(a.innerHTML+=c.charAt(t),t++,setTimeout(d,f)):t===c.length&&u()}d();
