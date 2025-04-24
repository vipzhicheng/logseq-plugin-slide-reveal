import{_ as s,c as n,o as p,ag as e}from"./chunks/framework.3H72gWKR.js";const g=JSON.parse('{"title":"Markdown","description":"","frontmatter":{},"headers":[],"relativePath":"cn/guide/usage/markdown.md","filePath":"cn/guide/usage/markdown.md"}'),i={name:"cn/guide/usage/markdown.md"};function l(t,a,c,o,d,r){return p(),n("div",null,a[0]||(a[0]=[e(`<h1 id="markdown" tabindex="-1">Markdown <a class="header-anchor" href="#markdown" aria-label="Permalink to &quot;Markdown&quot;">​</a></h1><p>跟你想的一样，插件会将你写在 Block 里的 Markdown 语法渲染成 HTML，并展示在幻灯片中。和 Logseq 一样，这里同样不建议在一个 Block 里写很多的 Markdown 语法，而只是写简单的文本修饰。但即使是这样，我们仍然能实现很多实用的效果。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这里我以代码片段的形式展示一些 Markdown 语法。大家可以粘贴到 Logseq 中看效果，也可以到文档的演示视频部分看看我给大家准备的各种效果演示。</p></div><h2 id="不同大小的标题" tabindex="-1">不同大小的标题 <a class="header-anchor" href="#不同大小的标题" aria-label="Permalink to &quot;不同大小的标题&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- # H1 ~ H6</span></span>
<span class="line"><span>	- # H1</span></span>
<span class="line"><span>	- ## H2</span></span>
<span class="line"><span>	- ### H3</span></span>
<span class="line"><span>	- #### H4</span></span>
<span class="line"><span>	- ##### h5</span></span>
<span class="line"><span>	- ###### h6</span></span>
<span class="line"><span>	- no h tag</span></span></code></pre></div><h2 id="无序列表" tabindex="-1">无序列表 <a class="header-anchor" href="#无序列表" aria-label="Permalink to &quot;无序列表&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- ## List</span></span>
<span class="line"><span>	- - Topic 1</span></span>
<span class="line"><span>	- - Topic 2</span></span>
<span class="line"><span>	- - Topic 3</span></span>
<span class="line"><span>	- - Topic 4</span></span></code></pre></div><h2 id="有序列表" tabindex="-1">有序列表 <a class="header-anchor" href="#有序列表" aria-label="Permalink to &quot;有序列表&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- ## Ordered List</span></span>
<span class="line"><span>	- 1. Topic 1</span></span>
<span class="line"><span>	- 2. Topic 2</span></span>
<span class="line"><span>	- 3. Topic 3</span></span>
<span class="line"><span>	- 4. Topic 4</span></span></code></pre></div><h2 id="引用" tabindex="-1">引用 <a class="header-anchor" href="#引用" aria-label="Permalink to &quot;引用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; aboris id laboris fugiat ut adipisicing anim non et ullamco reprehenderit magna dolor.aboris id laboris fugiat ut adipisicing anim non et ullamco reprehenderit magna dolor.aboris id laboris fugiat ut adipisicing anim non et ullamco reprehenderit magna dolor.aboris id laboris fugiat ut adipisicing anim non et ullamco reprehenderit magna dolor.aboris id laboris fugiat ut adipisicing anim non et ullamco reprehenderit magna dolor.</span></span></code></pre></div><h2 id="链接" tabindex="-1">链接 <a class="header-anchor" href="#链接" aria-label="Permalink to &quot;链接&quot;">​</a></h2><p>将会在浏览器中打开链接</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- [Link](https://www.logseq.com)</span></span></code></pre></div><h2 id="表格" tabindex="-1">表格 <a class="header-anchor" href="#表格" aria-label="Permalink to &quot;表格&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- ## Table</span></span>
<span class="line"><span>	-</span></span>
<span class="line"><span>	  | Name | Age | Height |</span></span>
<span class="line"><span>	  |---|---|---|</span></span>
<span class="line"><span>	  | Leo | 39 | 179cm |</span></span>
<span class="line"><span>	  | Sam | 39 | 168cm |</span></span>
<span class="line"><span>	  | Lily | 39 | 184cm |</span></span>
<span class="line"><span>	  | Bob | 39 | 193cm |</span></span></code></pre></div><h2 id="图片" tabindex="-1">图片 <a class="header-anchor" href="#图片" aria-label="Permalink to &quot;图片&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- # Local Image</span></span>
<span class="line"><span>	- ![BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg](../assets/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873_1711730103239_0.jpg)</span></span>
<span class="line"><span>	- Support local image rendering.</span></span></code></pre></div><h2 id="视频" tabindex="-1">视频 <a class="header-anchor" href="#视频" aria-label="Permalink to &quot;视频&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- # Local Video</span></span>
<span class="line"><span>	- ![Watch- OpenAI Tool Creates Realistic AI Videos - WSJ News.mp4](../assets/Watch-_OpenAI_Tool_Creates_Realistic_AI_Videos_-_WSJ_News_1711740427761_0.mp4)</span></span></code></pre></div><h2 id="代码片段" tabindex="-1">代码片段 <a class="header-anchor" href="#代码片段" aria-label="Permalink to &quot;代码片段&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- # Programming Languages</span></span>
<span class="line"><span>	-</span></span>
<span class="line"><span>	  \`\`\`js</span></span>
<span class="line"><span>	  const msg = &#39;Hello World&#39;</span></span>
<span class="line"><span>	  console.log(msg)</span></span>
<span class="line"><span>	  \`\`\`</span></span></code></pre></div><p>幻灯片还支持更高级的行号显示，行号偏移，分步显示等。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\`\`\`ts 7:5,9,14|6,10,15|7,11,16</span></span>
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
<span class="line"><span>\`\`\`</span></span></code></pre></div><h2 id="marmaid" tabindex="-1">Marmaid <a class="header-anchor" href="#marmaid" aria-label="Permalink to &quot;Marmaid&quot;">​</a></h2><p>插件支持部分常用的 Mermaid 语法。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- # Mermaid: Sequence diagrams</span></span>
<span class="line"><span>	-</span></span>
<span class="line"><span>	  \`\`\`mermaid</span></span>
<span class="line"><span>	  sequenceDiagram</span></span>
<span class="line"><span>	      Alice-&gt;&gt;John: Hello John, how are you?</span></span>
<span class="line"><span>	      John--&gt;&gt;Alice: Great!</span></span>
<span class="line"><span>	      lice-)John: See you later!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	  \`\`\`</span></span></code></pre></div>`,27)]))}const u=s(i,[["render",l]]);export{g as __pageData,u as default};
