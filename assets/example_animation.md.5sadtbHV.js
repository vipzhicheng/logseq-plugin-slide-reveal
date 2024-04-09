import{_ as a,c as t,o as n,a5 as s}from"./chunks/framework.BQYjBzur.js";const m=JSON.parse('{"title":"Animation","description":"","frontmatter":{},"headers":[],"relativePath":"example/animation.md","filePath":"example/animation.md"}'),i={name:"example/animation.md"},p=s(`<h1 id="animation" tabindex="-1">Animation <a class="header-anchor" href="#animation" aria-label="Permalink to &quot;Animation&quot;">​</a></h1><h2 id="simple-animation" tabindex="-1">Simple Animation <a class="header-anchor" href="#simple-animation" aria-label="Permalink to &quot;Simple Animation&quot;">​</a></h2><p>If there is no <code>data-id</code>, the content is used to identify what to animate.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>- ## Auto Animation</span></span>
<span class="line"><span>  data-theme:: white</span></span>
<span class="line"><span>  data-auto-animate:: true</span></span>
<span class="line"><span>	- ## A</span></span>
<span class="line"><span>	- ## B</span></span>
<span class="line"><span>	  collapsed:: true</span></span>
<span class="line"><span>	- ## C</span></span>
<span class="line"><span>	  collapsed:: true</span></span>
<span class="line"><span>	- ## D</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>- ## Auto Animation</span></span>
<span class="line"><span>  data-theme:: white</span></span>
<span class="line"><span>  data-auto-animate:: true</span></span>
<span class="line"><span>	- ## B</span></span>
<span class="line"><span>	- ## D</span></span>
<span class="line"><span>	- ## A</span></span>
<span class="line"><span>	- ## C</span></span></code></pre></div><h2 id="animation-based-on-data-id" tabindex="-1">Animation based on <code>data-id</code> <a class="header-anchor" href="#animation-based-on-data-id" aria-label="Permalink to &quot;Animation based on \`data-id\`&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>- Another Animation</span></span>
<span class="line"><span>  data-theme:: white</span></span>
<span class="line"><span>  data-auto-animate:: true</span></span>
<span class="line"><span>  data-auto-animate-easing:: cubic-bezier(0.770, 0.000, 0.175, 1.000)</span></span>
<span class="line"><span>	-</span></span>
<span class="line"><span>	  &lt;div class=&quot;r-hstack justify-center&quot;&gt;</span></span>
<span class="line"><span>	  						&lt;div data-id=&quot;box1&quot; style=&quot;background: #999; width: 50px; height: 50px; margin: 10px; border-radius: 5px;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>	  						&lt;div data-id=&quot;box2&quot; style=&quot;background: #999; width: 50px; height: 50px; margin: 10px; border-radius: 5px;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>	  						&lt;div data-id=&quot;box3&quot; style=&quot;background: #999; width: 50px; height: 50px; margin: 10px; border-radius: 5px;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>	  					&lt;/div&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>- Another Animation</span></span>
<span class="line"><span>  data-theme:: white</span></span>
<span class="line"><span>  data-auto-animate:: true</span></span>
<span class="line"><span>  data-auto-animate-easing:: cubic-bezier(0.770, 0.000, 0.175, 1.000)</span></span>
<span class="line"><span>	-</span></span>
<span class="line"><span>	  &lt;div class=&quot;r-hstack justify-center&quot;&gt;</span></span>
<span class="line"><span>	  						&lt;div data-id=&quot;box1&quot; data-auto-animate-delay=&quot;0&quot; style=&quot;background: cyan; width: 150px; height: 100px; margin: 10px;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>	  						&lt;div data-id=&quot;box2&quot; data-auto-animate-delay=&quot;0.1&quot; style=&quot;background: magenta; width: 150px; height: 100px; margin: 10px;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>	  						&lt;div data-id=&quot;box3&quot; data-auto-animate-delay=&quot;0.2&quot; style=&quot;background: yellow; width: 150px; height: 100px; margin: 10px;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>	  					&lt;/div&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>- Another Animation</span></span>
<span class="line"><span>  data-theme:: white</span></span>
<span class="line"><span>  data-auto-animate:: true</span></span>
<span class="line"><span>  data-auto-animate-easing:: cubic-bezier(0.770, 0.000, 0.175, 1.000)</span></span>
<span class="line"><span>	-</span></span>
<span class="line"><span>	  &lt;div class=&quot;r-stack&quot;&gt;</span></span>
<span class="line"><span>	  						&lt;div data-id=&quot;box1&quot; style=&quot;background: cyan; width: 300px; height: 300px;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>	  						&lt;div data-id=&quot;box2&quot; style=&quot;background: magenta; width: 200px; height: 200px;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>	  						&lt;div data-id=&quot;box3&quot; style=&quot;background: yellow; width: 100px; height: 100px;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>	  					&lt;/div&gt;</span></span></code></pre></div><h2 id="zoom-in" tabindex="-1">Zoom In <a class="header-anchor" href="#zoom-in" aria-label="Permalink to &quot;Zoom In&quot;">​</a></h2><p>Hold the <code>alt</code> key and click with your mouse to zoom in on a specific area.</p>`,11),e=[p];function o(l,d,c,u,h,r){return n(),t("div",null,e)}const b=a(i,[["render",o]]);export{m as __pageData,b as default};
