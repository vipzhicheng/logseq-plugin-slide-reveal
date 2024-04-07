import{_ as a,a as s}from"./chunks/grid.OYd5DVE8.js";import{_ as n}from"./chunks/left.ltwaqo1Q.js";import{_ as t}from"./chunks/anothertwocolumnlist.CaiPw9N2.js";import{_ as e,c as p,o as l,a5 as i}from"./chunks/framework.B-2EAuIc.js";const w=JSON.parse('{"title":"Layout","description":"","frontmatter":{},"headers":[],"relativePath":"guide/usage/layout.md","filePath":"guide/usage/layout.md"}'),o={name:"guide/usage/layout.md"},c=i(`<h1 id="layout" tabindex="-1">Layout <a class="header-anchor" href="#layout" aria-label="Permalink to &quot;Layout&quot;">​</a></h1><p>The default layout for slides is a centered presentation on the page, which is suitable for most cases and natively supports special layouts such as semi-backgrounds and dual-column arrangements. For more flexible layouts, some knowledge of CSS and Tailwind CSS is required within this plugin.</p><h2 id="absolute-positioning" tabindex="-1">Absolute Positioning <a class="header-anchor" href="#absolute-positioning" aria-label="Permalink to &quot;Absolute Positioning&quot;">​</a></h2><p>A common requirement is to have a specific node displayed at any arbitrary position on the page. This is achieved through the use of absolute positioning, which involves a CSS technique combined with implementation using Tailwind CSS. For example:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>- # Absolute Position</span></span>
<span class="line"><span>  data-section-class:: !relative</span></span>
<span class="line"><span>  data-child-class:: !w-fit !absolute</span></span>
<span class="line"><span>	- A</span></span>
<span class="line"><span>	  data-class:: !top-20 !left-20</span></span>
<span class="line"><span>	- B</span></span>
<span class="line"><span>	  data-class:: !top-20 !right-20</span></span>
<span class="line"><span>	- C</span></span>
<span class="line"><span>	  data-class:: !bottom-20 !left-20</span></span>
<span class="line"><span>	- D</span></span>
<span class="line"><span>	  data-class:: !bottom-20 !right-20</span></span></code></pre></div><p>It will be rendered as:</p><p><img src="`+a+`" alt=""></p><h2 id="flex-layout" tabindex="-1">Flex Layout <a class="header-anchor" href="#flex-layout" aria-label="Permalink to &quot;Flex Layout&quot;">​</a></h2><p>Flex layout is a prevalent approach to organizing content, and each <code>&lt;section&gt;</code> in the slides constitutes a flex container, making it relatively straightforward to implement Flex-based arrangements. Consider the case of left alignment:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>- # On Left</span></span>
<span class="line"><span>  data-section-class:: !items-start</span></span>
<span class="line"><span>  data-child-class:: !text-left</span></span>
<span class="line"><span>  data-class:: !text-left</span></span>
<span class="line"><span>	- ## Topic 1</span></span>
<span class="line"><span>	- ## Topic 2</span></span>
<span class="line"><span>	- ## Topic 3</span></span></code></pre></div><p>It will be rendered as:</p><p><img src="`+n+`" alt=""></p><p>Guess what the layout of the following slide is?</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>- # On Bottom Right</span></span>
<span class="line"><span>  data-section-class:: !justify-end !items-end</span></span>
<span class="line"><span>  data-child-class:: !text-right</span></span>
<span class="line"><span>  data-class:: !text-right</span></span>
<span class="line"><span>	- ## Topic 1</span></span>
<span class="line"><span>	- ## Topic 2</span></span>
<span class="line"><span>	- ## Topic 3</span></span></code></pre></div><h2 id="grid-layout" tabindex="-1">Grid Layout <a class="header-anchor" href="#grid-layout" aria-label="Permalink to &quot;Grid Layout&quot;">​</a></h2><p>Grid layout is not native to the plugin, but can be achieved through Tailwind CSS classes.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>- # Grid Layout</span></span>
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
<span class="line"><span>	- 12</span></span></code></pre></div><p>It will be rendered as:</p><p><img src="`+s+`" alt=""></p><h3 id="implementing-a-two-column-layout-with-grid" tabindex="-1">Implementing a Two-Column Layout with Grid <a class="header-anchor" href="#implementing-a-two-column-layout-with-grid" aria-label="Permalink to &quot;Implementing a Two-Column Layout with Grid&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>- # Another Two Column List</span></span>
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
<span class="line"><span>	- Item 8</span></span></code></pre></div><p><img src="`+t+'" alt=""></p>',22),d=[c];function r(u,h,m,g,b,y){return l(),p("div",null,d)}const k=e(o,[["render",r]]);export{w as __pageData,k as default};
