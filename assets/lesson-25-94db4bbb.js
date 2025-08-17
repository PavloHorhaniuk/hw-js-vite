import"./modulepreload-polyfill-3cfb730f.js";const l=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];let o,e,p,s,i=0,n=[];function m(t,a){n=a,i=n.findIndex(c=>c.original===t),o||u(),e.src=t,o.style.display="flex",requestAnimationFrame(()=>{e.style.opacity="1",p.style.opacity="1",s.style.opacity="1"})}function u(){o=document.createElement("div"),o.style.cssText=`
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 999;
  `,e=document.createElement("img"),e.style.cssText=`
    max-width: 90%;
    max-height: 90%;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    position: relative;
    z-index: 2;
  `,p=document.createElement("button"),p.textContent="←",p.style.cssText=`
    position: absolute;
    left: 40px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 40px;
    background: transparent;
    color: white;
    border: none;
    cursor: pointer;
    z-index: 3;
    opacity: 0;
    transition: opacity 0.3s;
  `,s=document.createElement("button"),s.textContent="→",s.style.cssText=`
    position: absolute;
    right: 40px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 40px;
    background: transparent;
    color: white;
    border: none;
    cursor: pointer;
    z-index: 3;
    opacity: 0;
    transition: opacity 0.3s;
  `,o.append(e,p,s),document.body.appendChild(o),o.addEventListener("click",t=>{t.target===o&&y()}),document.addEventListener("keydown",x),p.addEventListener("click",d),s.addEventListener("click",g)}function x(t){!o||o.style.display!=="flex"||(t.key==="Escape"?y():t.key==="ArrowRight"?g():t.key==="ArrowLeft"&&d())}function d(){i=(i-1+n.length)%n.length,e.style.opacity="0",setTimeout(()=>{e.src=n[i].original,e.style.opacity="1"},150)}function g(){i=(i+1)%n.length,e.style.opacity="0",setTimeout(()=>{e.src=n[i].original,e.style.opacity="1"},150)}function y(){o.style.display="none",e.src=""}const r=document.querySelector(".gallery");console.log(r);function b(t){return t.map(({preview:a,original:c,description:h})=>`
      <li class="gallery__item">
        <a class="gallery__link" href="${c}">
          <img
            class="gallery__image"
            src="${a}"
            data-source="${c}"
            alt="${h}"
          />
        </a>
      </li>
        `).join("")}const _=b(l);r.innerHTML=_;r.addEventListener("click",t=>{t.preventDefault();const a=t.target.closest(".gallery__image");a&&m(a.dataset.source,l)});
