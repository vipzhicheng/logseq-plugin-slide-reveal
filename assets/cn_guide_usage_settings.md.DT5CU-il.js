import{_ as i,c as l,o as e,a5 as a}from"./chunks/framework.BQYjBzur.js";const b=JSON.parse('{"title":"插件配置","description":"","frontmatter":{},"headers":[],"relativePath":"cn/guide/usage/settings.md","filePath":"cn/guide/usage/settings.md"}'),o={name:"cn/guide/usage/settings.md"},t=a('<h1 id="插件配置" tabindex="-1">插件配置 <a class="header-anchor" href="#插件配置" aria-label="Permalink to &quot;插件配置&quot;">​</a></h1><p>插件支持几项公共配置</p><h2 id="幻灯片主题" tabindex="-1">幻灯片主题 <a class="header-anchor" href="#幻灯片主题" aria-label="Permalink to &quot;幻灯片主题&quot;">​</a></h2><p>如下主题是特定的主题样式，默认是 black 主题</p><ul><li>black</li><li>moon</li><li>white</li><li>night</li><li>league</li><li>beige</li><li>serif</li><li>simple</li><li>dracula</li><li>sky</li><li>blood</li><li>solarized</li></ul><p>还有一类特别的主题名</p><ul><li>random, 意思是每次打开幻灯片都使用随机主题</li><li>random-slide, 意思是每次切换幻灯片都使用随机主题</li><li>inherit，意思是每次切换幻灯片都继承上一次幻灯片的主题</li></ul><h2 id="幻灯片代码主题" tabindex="-1">幻灯片代码主题 <a class="header-anchor" href="#幻灯片代码主题" aria-label="Permalink to &quot;幻灯片代码主题&quot;">​</a></h2><p>目前支持如下代码主题：</p><ul><li>atom-one-light</li><li>atom-one-dark</li><li>github</li><li>github-dark</li><li>xcode</li><li>idea</li><li>monokai</li><li>nord</li><li>stackoverflow-light</li><li>stackoverflow-dark</li><li>androidstudio</li><li>base16-material</li><li>base16-dracula</li><li>hybrid</li><li>docco</li><li>far</li></ul><h2 id="幻灯片翻页过渡效果" tabindex="-1">幻灯片翻页过渡效果 <a class="header-anchor" href="#幻灯片翻页过渡效果" aria-label="Permalink to &quot;幻灯片翻页过渡效果&quot;">​</a></h2><p>默认值是 slide</p><p>可选值如下：</p><ul><li>none</li><li>fade</li><li>slide</li><li>convex</li><li>concave</li><li>zoom</li></ul><h2 id="幻灯片背景过渡效果" tabindex="-1">幻灯片背景过渡效果 <a class="header-anchor" href="#幻灯片背景过渡效果" aria-label="Permalink to &quot;幻灯片背景过渡效果&quot;">​</a></h2><p>默认值是 slide，跟上面的过渡效果配合使用，可以选相同的值，也可以选不同的值。</p><p>可选值如下：</p><ul><li>none</li><li>fade</li><li>slide</li><li>convex</li><li>concave</li><li>zoom</li></ul><h2 id="幻灯片默认布局" tabindex="-1">幻灯片默认布局 <a class="header-anchor" href="#幻灯片默认布局" aria-label="Permalink to &quot;幻灯片默认布局&quot;">​</a></h2><p>设置幻灯片的默认布局，可以通过幻灯片属性来覆盖。</p><p>可选值如下：</p><ul><li>center</li><li>left</li><li>right</li><li>top</li><li>top-left</li><li>top-right</li><li>bottom</li><li>bottom-left</li><li>bottom-right</li></ul><h2 id="改变幻灯片属性前缀" tabindex="-1">改变幻灯片属性前缀 <a class="header-anchor" href="#改变幻灯片属性前缀" aria-label="Permalink to &quot;改变幻灯片属性前缀&quot;">​</a></h2><p>默认使用 <code>data-</code> 作为所有属性的前缀，如果与其他插件冲突，可以在这里修改，例如：<code>slide-</code>。</p><h2 id="过滤区块内容" tabindex="-1">过滤区块内容 <a class="header-anchor" href="#过滤区块内容" aria-label="Permalink to &quot;过滤区块内容&quot;">​</a></h2><p>为了安全的考虑，默认情况下，插件会过滤掉一些 HTML 标签，比如 script、style、iframe 等。你可以关闭此功能，通过使用脚本，获得更多的可能性。</p><h2 id="改变幻灯片字体" tabindex="-1">改变幻灯片字体 <a class="header-anchor" href="#改变幻灯片字体" aria-label="Permalink to &quot;改变幻灯片字体&quot;">​</a></h2><p>通过选择主题，主题内置了字体，如果不改变主题想改变字体可以在这里设置。字体分成三类，标题字体、正文字体和代码字体。字体来源也分成三类，Google 字体， CDN 字体，以及 CSS 字体。这些字体都是 Webfont。Google 字体支持同时加载多个字体，所以这里的字体设置可以支持分别设置英文字体，Emoji 字体和中文字体。</p><p>字体名称用<code>|</code>分割， 例如：<code>Jersey 15|Noto Emoji|LXGW WenKai</code>。</p><p>这里的 <code>Jersey 15|Noto Emoji</code> 来自 Google 字体，后面的 <code>LXGW WenKai</code> 来自 CDN 字体。所以需要在 CDN 字体的地方配置 CDN 字体地址：<code>https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1.1.0/style.css</code>。CSS 字体也是同理。</p><p>基于这种思路，实际上可以同时加载很多字体到幻灯片，但是没有必要，如果需要的字体已经加载，则后面的字体地址可以留空，如果对当前主题的字体满意，则所以字体设置留空即可。</p><h2 id="主题样式微调" tabindex="-1">主题样式微调 <a class="header-anchor" href="#主题样式微调" aria-label="Permalink to &quot;主题样式微调&quot;">​</a></h2><p>除了字体，还有一些设置可能需要调整，这里提供了 3 个可能会需要的配置。</p><ul><li>代码片段宽度，默认是 90%。</li><li>标题行行高，默认是 1.2。</li><li>无序列表类型，默认是 disc，可以改成其他支持的值，或者表情符号，或者 none 禁用，表情符号需要包含在引号中。</li></ul>',34),r=[t];function d(n,s,c,h,p,u){return e(),l("div",null,r)}const f=i(o,[["render",d]]);export{b as __pageData,f as default};
