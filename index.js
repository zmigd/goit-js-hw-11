import{a as h,S as d,i as c}from"./assets/vendor-DqB7j7Ix.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="51403222-4fbdc3af82d89be9b055ca0a4",g="https://pixabay.com/api/";async function y(i){return(await h.get(g,{params:{key:f,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}const m=document.querySelector(".gallery"),s=document.querySelector(".loader"),L=new d(".gallery a",{captionsData:"alt",captionDelay:250});function w(i){const r=b(i);m.innerHTML=r,L.refresh()}function b(i){return i.map(({webformatURL:r,largeImageURL:o,tags:a,likes:e,views:t,comments:n,downloads:p})=>`
        <a class="gallery-item" href="${o}">
          <img src="${r}" alt="${a}" width="360" height="200" />
          <div class="gallery-info">
            <ul class="info-list">
              <li><h3>Likes</h3><p>${e}</p></li>
              <li><h3>Views</h3><p>${t}</p></li>
              <li><h3>Comments</h3><p>${n}</p></li>
              <li><h3>Downloads</h3><p>${p}</p></li>
            </ul>
          </div>
        </a>
      `).join("")}function S(){m.innerHTML=""}function v(){s==null||s.classList.remove("is-hidden")}function l(){s==null||s.classList.add("is-hidden")}const u=document.querySelector(".form");u.addEventListener("submit",async i=>{i.preventDefault();const r=u.elements["search-text"].value.trim();if(!r){c.warning({title:"Warning",message:"Please enter a search term!",position:"topRight",timeout:3e3,color:"orange"});return}S(),v();try{const o=await y(r);if(l(),!o.length){c.error({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight",timeout:5e3,color:"red"});return}w(o),c.success({title:"Success",message:`Found ${o.length} images!`,position:"topRight",timeout:3e3,color:"green"})}catch(o){l(),c.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight",timeout:5e3,color:"red"}),console.error("Fetch error:",o)}});
//# sourceMappingURL=index.js.map
