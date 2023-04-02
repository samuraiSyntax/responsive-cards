(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const c=[{title:"Basic",price:"99",description:"Best for small business owners, startups who needs landing page for their business.",listItems:["130+ Coded Blocks","Best for Developers, Freelancers","Made with TailwindCSS"]},{title:"Premium",price:"199",description:"Best for medium business owners, startups who needs landing page for their business.",listItems:["130+ Coded Blocks","Best for Developers, Freelancers","Made with TailwindCSS","Premium Support","Future Updates"]},{title:"Enterprise",price:"399",description:"Best for large companies, business owners who needs landing page for their business",listItems:["130+ Coded Blocks","Best for Developers, Freelancers","Made with TailwindCSS","Premium Support","Future Updates"]}],l=document.getElementById("card-container");l.innerHTML=c.map(({title:n,description:t,price:i,listItems:r},e)=>`
  <div class="card ${e===1?"card-black":"card-white"}">
  <div class="flex flex-col gap-6 mb-6">
    <h2 class="card-title">${n}</h2>
    <span class="card-price">$${i}</span>
    <p class="card-desc">
      ${t}
    </p>
  </div>
  <button class="mb-6  ${e===1?"black-btn":"white-btn"}">Get Started</button>

  <div class="flex flex-col">
    <h3 class="md:text-base mb-5 capitalize">What is included?</h3>
    <ul class="card-list">
      ${r.map(s=>`
          <li>${s}</li>
        `).join("")}
    </ul>
  </div>
</div>
  `).join(" ");
