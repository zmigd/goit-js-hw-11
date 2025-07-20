import{S as f,a as h,i as l}from"./assets/vendor-D8_O3--j.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const m=document.querySelector(".gallery"),n=document.querySelector(".loader"),p=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(o){const t=y(o);m.innerHTML=t,p.refresh()}function y(o){return o.map(({webformatURL:t,largeImageURL:i,tags:a,likes:e,views:r,comments:s,downloads:d})=>`
        <a class="gallery-item" href="${i}">
          <img src="${t}" alt="${a}" width="360" height="200" />
          <div class="gallery-info">
            <ul class="info-list">
              <li><h3>Likes</h3><p>${e}</p></li>
              <li><h3>Views</h3><p>${r}</p></li>
              <li><h3>Comments</h3><p>${s}</p></li>
              <li><h3>Downloads</h3><p>${d}</p></li>
            </ul>
          </div>
        </a>
      `).join("")}function L(){m.innerHTML=""}function b(){n==null||n.classList.remove("is-hidden")}function c(){n==null||n.classList.add("is-hidden")}const w="51403222-4fbdc3af82d89be9b055ca0a4",S="https://pixabay.com/api/";function v(o){return b(),h.get(S,{params:{key:w,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>{c();const i=t.data.hits;if(i.length===0){document.querySelector(".gallery").innerHTML="",l.error({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight",timeout:5e3,color:"red"});return}return g(i),i}).catch(t=>{throw c(),l.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight",timeout:5e3,color:"red"}),console.error(t),t})}const u=document.querySelector(".form");u.addEventListener("submit",o=>{o.preventDefault();const t=u.elements["search-text"].value.trim();t!==""?(L(),v(t)):l.warning({title:"Warning",message:"Please enter a search term!",position:"topRight",timeout:3e3,color:"orange"})});
//# sourceMappingURL=index.js.map
