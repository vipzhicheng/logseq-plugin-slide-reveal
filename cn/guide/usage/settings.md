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

## 过滤区块内容

为了安全的考虑，默认情况下，插件会过滤掉一些 HTML 标签，比如 script、style、iframe 等。对于付费用于而言，可以关闭此功能，通过使用脚本，获得更多的可能性。
