# 插件配置

插件支持几项公共配置

## 幻灯片主题

如下主题是特定的主题样式，默认是 black 主题

- black
- moon
- white
- night
- league
- beige
- serif
- simple
- dracula
- sky
- blood
- solarized

还有一类特别的主题名

- random, 意思是每次打开幻灯片都使用随机主题
- random-slide, 意思是每次切换幻灯片都使用随机主题
- inherit，意思是每次切换幻灯片都继承上一次幻灯片的主题

## 幻灯片代码主题

目前支持如下代码主题：

- atom-one-light
- atom-one-dark
- github
- github-dark
- xcode
- idea
- monokai
- nord
- stackoverflow-light
- stackoverflow-dark
- androidstudio
- base16-material
- base16-dracula
- hybrid
- docco
- far

## 幻灯片翻页过渡效果

默认值是 slide

可选值如下：

- none
- fade
- slide
- convex
- concave
- zoom

## 幻灯片背景过渡效果

默认值是 slide，跟上面的过渡效果配合使用，可以选相同的值，也可以选不同的值。

可选值如下：

- none
- fade
- slide
- convex
- concave
- zoom

## 幻灯片默认布局

设置幻灯片的默认布局，可以通过幻灯片属性来覆盖。

可选值如下：

- center
- left
- right
- top
- top-left
- top-right
- bottom
- bottom-left
- bottom-right

## 改变幻灯片属性前缀

默认使用 `data-` 作为所有属性的前缀，如果与其他插件冲突，可以在这里修改，例如：`slide-`。

## 过滤区块内容

为了安全的考虑，默认情况下，插件会过滤掉一些 HTML 标签，比如 script、style、iframe 等。你可以关闭此功能，通过使用脚本，获得更多的可能性。

## 改变幻灯片字体

通过选择主题，主题内置了字体，如果不改变主题想改变字体可以在这里设置。字体分成三类，标题字体、正文字体和代码字体。字体来源也分成三类，Google 字体， CDN 字体，以及 CSS 字体。这些字体都是 Webfont。Google 字体支持同时加载多个字体，所以这里的字体设置可以支持分别设置英文字体，Emoji 字体和中文字体。

字体名称用`|`分割， 例如：`Jersey 15|Noto Emoji|LXGW WenKai`。

这里的 `Jersey 15|Noto Emoji` 来自 Google 字体，后面的 `LXGW WenKai` 来自 CDN 字体。所以需要在 CDN 字体的地方配置 CDN 字体地址：`https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1.1.0/style.css`。CSS 字体也是同理。

基于这种思路，实际上可以同时加载很多字体到幻灯片，但是没有必要，如果需要的字体已经加载，则后面的字体地址可以留空，如果对当前主题的字体满意，则所以字体设置留空即可。

## 主题样式微调

除了字体，还有一些设置可能需要调整，这里提供了 3 个可能会需要的配置。

- 代码片段宽度，默认是 90%。
- 标题行行高，默认是 1.2。
- 无序列表类型，默认是 disc，可以改成其他支持的值，或者表情符号，或者 none 禁用，表情符号需要包含在引号中。
