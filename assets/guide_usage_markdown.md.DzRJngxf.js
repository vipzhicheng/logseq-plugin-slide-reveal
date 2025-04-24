import{_ as a,c as n,o as e,ag as p}from"./chunks/framework.3H72gWKR.js";const u=JSON.parse('{"title":"Markdown","description":"","frontmatter":{},"headers":[],"relativePath":"guide/usage/markdown.md","filePath":"guide/usage/markdown.md"}'),i={name:"guide/usage/markdown.md"};function t(l,s,o,c,d,r){return e(),n("div",null,s[0]||(s[0]=[p(`<h1 id="markdown" tabindex="-1">Markdown <a class="header-anchor" href="#markdown" aria-label="Permalink to &quot;Markdown&quot;">​</a></h1><p>Just as you&#39;d expect, the plugin will render the Markdown syntax you write within Blocks into HTML and display it on the slides. Like Logseq, it&#39;s not recommended to include too much Markdown syntax within a single Block; instead, keep it simple with basic text formatting. However, even with that restriction, we can still achieve many practical effects.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Here, I showcase some Markdown syntax in code snippets. You can paste these into Logseq to see the effects or check out the demonstration videos in the documentation for various effects I&#39;ve prepared for you.</p></div><h2 id="different-sized-headings" tabindex="-1">Different Sized Headings <a class="header-anchor" href="#different-sized-headings" aria-label="Permalink to &quot;Different Sized Headings&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- # H1 ~ H6</span></span>
<span class="line"><span>	- # H1</span></span>
<span class="line"><span>	- ## H2</span></span>
<span class="line"><span>	- ### H3</span></span>
<span class="line"><span>	- #### H4</span></span>
<span class="line"><span>	- ##### h5</span></span>
<span class="line"><span>	- ###### h6</span></span>
<span class="line"><span>	- no h tag</span></span></code></pre></div><h2 id="unordered-lists" tabindex="-1">Unordered Lists <a class="header-anchor" href="#unordered-lists" aria-label="Permalink to &quot;Unordered Lists&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- ## List</span></span>
<span class="line"><span>	- - Topic 1</span></span>
<span class="line"><span>	- - Topic 2</span></span>
<span class="line"><span>	- - Topic 3</span></span>
<span class="line"><span>	- - Topic 4</span></span></code></pre></div><h2 id="ordered-lists" tabindex="-1">Ordered Lists <a class="header-anchor" href="#ordered-lists" aria-label="Permalink to &quot;Ordered Lists&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- ## Ordered List</span></span>
<span class="line"><span>	- 1. Topic 1</span></span>
<span class="line"><span>	- 2. Topic 2</span></span>
<span class="line"><span>	- 3. Topic 3</span></span>
<span class="line"><span>	- 4. Topic 4</span></span></code></pre></div><h2 id="blockquotes" tabindex="-1">Blockquotes <a class="header-anchor" href="#blockquotes" aria-label="Permalink to &quot;Blockquotes&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></span></code></pre></div><h2 id="links" tabindex="-1">Links <a class="header-anchor" href="#links" aria-label="Permalink to &quot;Links&quot;">​</a></h2><p>Will be opened in the browser</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- [Link](https://www.logseq.com)</span></span></code></pre></div><h2 id="tables" tabindex="-1">Tables <a class="header-anchor" href="#tables" aria-label="Permalink to &quot;Tables&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- ## Table</span></span>
<span class="line"><span>	-</span></span>
<span class="line"><span>	  | Name | Age | Height |</span></span>
<span class="line"><span>	  |---|---|---|</span></span>
<span class="line"><span>	  | Leo | 39 | 179cm |</span></span>
<span class="line"><span>	  | Sam | 39 | 168cm |</span></span>
<span class="line"><span>	  | Lily | 39 | 184cm |</span></span>
<span class="line"><span>	  | Bob | 39 | 193cm |</span></span></code></pre></div><h2 id="images" tabindex="-1">Images <a class="header-anchor" href="#images" aria-label="Permalink to &quot;Images&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- # Local Image</span></span>
<span class="line"><span>	- ![BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg](../assets/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873_1711730103239_0.jpg)</span></span>
<span class="line"><span>	- Support local image rendering.</span></span></code></pre></div><h2 id="videos" tabindex="-1">Videos <a class="header-anchor" href="#videos" aria-label="Permalink to &quot;Videos&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- # Local Video</span></span>
<span class="line"><span>	- ![Watch- OpenAI Tool Creates Realistic AI Videos - WSJ News.mp4](../assets/Watch-_OpenAI_Tool_Creates_Realistic_AI_Videos_-_WSJ_News_1711740427761_0.mp4)</span></span></code></pre></div><h2 id="code-snippets" tabindex="-1">Code Snippets <a class="header-anchor" href="#code-snippets" aria-label="Permalink to &quot;Code Snippets&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- # Programming Languages</span></span>
<span class="line"><span>	-</span></span>
<span class="line"><span>	  \`\`\`js</span></span>
<span class="line"><span>	  const msg = &#39;Hello World&#39;</span></span>
<span class="line"><span>	  console.log(msg)</span></span>
<span class="line"><span>	  \`\`\`</span></span></code></pre></div><p>The slides also support advanced features like line numbering, line offset, step-by-step display, etc.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\`\`\`ts 7:5,9,14|6,10,15|7,11,16</span></span>
<span class="line"><span>// The public reveal.js API</span></span>
<span class="line"><span>const API = {</span></span>
<span class="line"><span>  VERSION,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  initialize,</span></span>
<span class="line"><span>  configure,</span></span>
<span class="line"><span>  destroy,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  sync,</span></span>
<span class="line"><span>  syncSlide,</span></span>
<span class="line"><span>  syncFragments: fragments.sync.bind( fragments ),</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Navigation methods</span></span>
<span class="line"><span>  slide,</span></span>
<span class="line"><span>  left: navigateLeft,</span></span>
<span class="line"><span>  right: navigateRight,</span></span>
<span class="line"><span>  up: navigateUp,</span></span>
<span class="line"><span>  down: navigateDown,</span></span>
<span class="line"><span>  prev: navigatePrev,</span></span>
<span class="line"><span>  next: navigateNext,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`\`</span></span></code></pre></div><h2 id="mermaid" tabindex="-1">Mermaid <a class="header-anchor" href="#mermaid" aria-label="Permalink to &quot;Mermaid&quot;">​</a></h2><p>The plugin supports some commonly used Mermaid syntax.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- # Mermaid: Sequence diagrams</span></span>
<span class="line"><span>	-</span></span>
<span class="line"><span>	  \`\`\`mermaid</span></span>
<span class="line"><span>	  sequenceDiagram</span></span>
<span class="line"><span>	      Alice-&gt;&gt;John: Hello John, how are you?</span></span>
<span class="line"><span>	      John--&gt;&gt;Alice: Great!</span></span>
<span class="line"><span>	      lice-)John: See you later!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	  \`\`\`</span></span></code></pre></div>`,27)]))}const g=a(i,[["render",t]]);export{u as __pageData,g as default};
