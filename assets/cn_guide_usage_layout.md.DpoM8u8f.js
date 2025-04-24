import{_ as s,a as n}from"./chunks/grid.OYd5DVE8.js";import{_ as p}from"./chunks/left.ltwaqo1Q.js";import{_ as t}from"./chunks/anothertwocolumnlist.CaiPw9N2.js";import{_ as e,c as l,o as i,ag as c}from"./chunks/framework.3H72gWKR.js";const x=JSON.parse('{"title":"布局","description":"","frontmatter":{},"headers":[],"relativePath":"cn/guide/usage/layout.md","filePath":"cn/guide/usage/layout.md"}'),o={name:"cn/guide/usage/layout.md"};function d(r,a,h,u,g,m){return i(),l("div",null,a[0]||(a[0]=[c(`<h1 id="布局" tabindex="-1">布局 <a class="header-anchor" href="#布局" aria-label="Permalink to &quot;布局&quot;">​</a></h1><p>默认幻灯片的布局是页面居中展示，这在大多数情况下是适用的，并且还默认支持了半屏背景和两栏布局等特殊布局。如果想要更灵活的布局，在本插件中需要了解一些 CSS 的知识和一些 Tailwind CSS 的知识。</p><h2 id="绝对定位" tabindex="-1">绝对定位 <a class="header-anchor" href="#绝对定位" aria-label="Permalink to &quot;绝对定位&quot;">​</a></h2><p>这是一种常见的需求，就是希望指定的节点，显示在页面的任意位置上，这个需要使用绝对定位来实现。这是一种 CSS 技巧和配合 Tailwind CSS 的实现。例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- # Absolute Position</span></span>
<span class="line"><span>  data-section-class:: !relative</span></span>
<span class="line"><span>  data-child-class:: !w-fit !absolute</span></span>
<span class="line"><span>	- A</span></span>
<span class="line"><span>	  data-class:: !top-20 !left-20</span></span>
<span class="line"><span>	- B</span></span>
<span class="line"><span>	  data-class:: !top-20 !right-20</span></span>
<span class="line"><span>	- C</span></span>
<span class="line"><span>	  data-class:: !bottom-20 !left-20</span></span>
<span class="line"><span>	- D</span></span>
<span class="line"><span>	  data-class:: !bottom-20 !right-20</span></span></code></pre></div><p>会被渲染成</p><p><img src="`+s+`" alt=""></p><h2 id="flex-布局" tabindex="-1">Flex 布局 <a class="header-anchor" href="#flex-布局" aria-label="Permalink to &quot;Flex 布局&quot;">​</a></h2><p>Flex 布局是一种常见的布局方式，幻灯片每个 <code>&lt;section&gt;</code> 都是一个 <code>flex</code> 容器，因此我们比较容易的实现 Flex 布局。插件提供了默认布局设置，用户也可以为每个幻灯片通过属性来设置不同的布局。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- # On Left</span></span>
<span class="line"><span>  data-layout:: left</span></span>
<span class="line"><span>	- ## Topic 1</span></span>
<span class="line"><span>	- ## Topic 2</span></span>
<span class="line"><span>	- ## Topic 3</span></span></code></pre></div><p>会被渲染成</p><p><img src="`+p+`" alt=""></p><p>那么猜猜下面的幻灯片是什么布局？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- # On Bottom Right</span></span>
<span class="line"><span>  data-section-class:: !justify-end !items-end</span></span>
<span class="line"><span>  data-child-class:: !text-right</span></span>
<span class="line"><span>  data-class:: !text-right</span></span>
<span class="line"><span>	- ## Topic 1</span></span>
<span class="line"><span>	- ## Topic 2</span></span>
<span class="line"><span>	- ## Topic 3</span></span></code></pre></div><h2 id="网格布局" tabindex="-1">网格布局 <a class="header-anchor" href="#网格布局" aria-label="Permalink to &quot;网格布局&quot;">​</a></h2><p>网格布局不是默认原生支持的，但是借助 Tailwind CSS 的 类，是可以实现的。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- # Grid Layout</span></span>
<span class="line"><span>  data-class:: !absolute !left-1/2 !-translate-x-1/2</span></span>
<span class="line"><span>  data-section-class:: !grid !grid-cols-4 !gap-4</span></span>
<span class="line"><span>  data-child-class:: !bg-red-500 !rounded-md !text-gray-200 !w-40 !h-20 !mx-auto !flex !justify-center !items-center</span></span>
<span class="line"><span>	- 1</span></span>
<span class="line"><span>	- 2</span></span>
<span class="line"><span>	- 3</span></span>
<span class="line"><span>	- 4</span></span>
<span class="line"><span>	- 5</span></span>
<span class="line"><span>	- 6</span></span>
<span class="line"><span>	- 7</span></span>
<span class="line"><span>	- 8</span></span>
<span class="line"><span>	- 9</span></span>
<span class="line"><span>	- 10</span></span>
<span class="line"><span>	- 11</span></span>
<span class="line"><span>	- 12</span></span></code></pre></div><p>会被渲染成</p><p><img src="`+n+`" alt=""></p><h3 id="使用网格布局实现双栏布局" tabindex="-1">使用网格布局实现双栏布局 <a class="header-anchor" href="#使用网格布局实现双栏布局" aria-label="Permalink to &quot;使用网格布局实现双栏布局&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- # Another Two Column List</span></span>
<span class="line"><span>  data-list-class:: !grid !grid-cols-2 !gap-2 !w-full !px-4</span></span>
<span class="line"><span>  data-child-class:: !ml-4</span></span>
<span class="line"><span>  data-class:: !text-left</span></span>
<span class="line"><span>  data-list:: true</span></span>
<span class="line"><span>	- Item 1</span></span>
<span class="line"><span>	- Item 2</span></span>
<span class="line"><span>	- Item 3</span></span>
<span class="line"><span>	  collapsed:: true</span></span>
<span class="line"><span>	- Item 4</span></span>
<span class="line"><span>	- Item 5</span></span>
<span class="line"><span>	- Item 6</span></span>
<span class="line"><span>	- Item 7</span></span>
<span class="line"><span>	- Item 8</span></span></code></pre></div><p><img src="`+t+'" alt=""></p>',22)]))}const k=e(o,[["render",d]]);export{x as __pageData,k as default};
