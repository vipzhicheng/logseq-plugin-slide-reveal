import{_ as a,c as t,o as s,a5 as n}from"./chunks/framework.BQYjBzur.js";const m=JSON.parse('{"title":"动画","description":"","frontmatter":{},"headers":[],"relativePath":"cn/example/animation.md","filePath":"cn/example/animation.md"}'),p={name:"cn/example/animation.md"},e=n(`<h1 id="动画" tabindex="-1">动画 <a class="header-anchor" href="#动画" aria-label="Permalink to &quot;动画&quot;">​</a></h1><h2 id="简单的动画" tabindex="-1">简单的动画 <a class="header-anchor" href="#简单的动画" aria-label="Permalink to &quot;简单的动画&quot;">​</a></h2><p>如果没有 <code>data-id</code>，则使用内容来识别进行动画。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>- ## Auto Animation</span></span>
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
<span class="line"><span>	- ## C</span></span></code></pre></div><h2 id="基于-data-id-的动画" tabindex="-1">基于 <code>data-id</code> 的动画 <a class="header-anchor" href="#基于-data-id-的动画" aria-label="Permalink to &quot;基于 \`data-id\` 的动画&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>- Another Animation</span></span>
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
<span class="line"><span>	  					&lt;/div&gt;</span></span></code></pre></div><h2 id="局部放大" tabindex="-1">局部放大 <a class="header-anchor" href="#局部放大" aria-label="Permalink to &quot;局部放大&quot;">​</a></h2><p>按住 <code>alt</code> 键，鼠标单击，可以放大局部。</p>`,11),i=[e];function l(o,d,c,u,h,r){return s(),t("div",null,i)}const q=a(p,[["render",l]]);export{m as __pageData,q as default};
