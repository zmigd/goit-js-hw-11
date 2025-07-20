import{S as m,a as f,i as a}from"./assets/vendor-D8_O3--j.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const u=document.querySelector(".gallery"),p=new m(".gallery a",{captionsData:"alt",captionDelay:250});function h(t){const r=y(t);u.innerHTML=r,p.refresh()}function y(t){return t.map(({webformatURL:r,largeImageURL:i,tags:s,likes:e,views:o,comments:n,downloads:d})=>`
        <a class="gallery-item" href="${i}">
          <img src="${r}" alt="${s}" width="360" height="200" />
          <div class="gallery-info">
            <ul class="info-list">
              <li><h3>Likes</h3><p>${e}</p></li>
              <li><h3>Views</h3><p>${o}</p></li>
              <li><h3>Comments</h3><p>${n}</p></li>
              <li><h3>Downloads</h3><p>${d}</p></li>
            </ul>
          </div>
        </a>
      `).join("")}function g(){u.innerHTML=""}function L(){var t;(t=document.querySelector(".loader"))==null||t.classList.remove("is-hidden")}function l(){var t;(t=document.querySelector(".loader"))==null||t.classList.add("is-hidden")}const S="51403222-4fbdc3af82d89be9b055ca0a4",b="https://pixabay.com/api/";document.querySelector(".loader");function q(t){return L(),f.get(b,{params:{key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>{l();const i=r.data.hits;if(i.length===0){document.querySelector(".gallery").innerHTML="",a.error({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight",timeout:5e3,color:"red"});return}h(i)}).catch(r=>{l(),a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight",timeout:5e3,color:"red"}),console.error(r)})}const c=document.querySelector(".form");c.addEventListener("submit",t=>{t.preventDefault();const r=c.elements["search-text"].value.trim();r!==""?(g(),q(r)):console.warn("Введіть слово для пошуку!")});
//# sourceMappingURL=index.js.map
