# 区块属性

区块属性是 Logseq 里的重要组成部分。Slide Reveal 插件也大量的使用了这个概念来定制幻灯片。支持的各类属性比较多，不同的属性的作用目标和范围也是不一样的。下面我们来分类一一介绍。

大家可以看到下面的属性有的是有值的，有的是 Bool 类型的，如果没有值需要写成 `true`，代表应用这个属性。

## 设置主题

```
data-theme:: black
```

支持如下可选主题：

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

我们可以在插件设置里设置主题，但是用属性来设置的优先级更高。并且只作用于单页，当翻到下一页时主题会恢复到插件设置的主题。如果插件设置的主题是 `inherit` ，表示继承前一个主题，则会保持应用上一页属性设置的主题。

## 设置代码主题

```
data-code-theme:: github
```

插件内置了数十种代码主题，你可以在通过属性的方式设置，也可以使用默认设置中选择的默认代码主题。

支持如下主题，以后会根据需要和反馈来增加更多：

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

## 设置过渡效果

过渡效果就是翻页时的动画效果。分为页面主体文字和背景两部分分别控制。

```
data-transition:: slide
data-background-transition:: slide
```

可选值如下：

- none
- fade
- slide
- convex
- concave
- zoom

## 设置列表

这个不同于基于 Markdown 实现的列表，虽然视觉上差不多。

### 无序列表

```
- ## List
  data-list:: true
	- Topic 1
	- Topic 2
	- Topic 3
	- Topic 4
```

### 有序列表

```
- ## Ordered List
  data-ordered-list:: true
	- Topic 1
	- Topic 2
	- Topic 3
	- Topic 4
```

### 双栏布局

```
- # Two Column List
  data-two-column:: true
	- Item 1
	- Item 2
	- Item 3
	- Item 4
	- Item 5
	- Item 6
	- Item 7
	- Item 8
```

这个属性也可以配合其他属性一起使用。

## 设置 ID

设置 ID 的主要目的是为了实现跳转。还有一个用途是在动画效果中标识不同幻灯片里的相同元素。

```
- ## Slide Link To
  data-id:: aa
	- I'am aa, let's go to cc
	- [Go to cc](#/cc)
- ## Slide Link Back
  data-id:: cc
	- I'am cc, let's go back to aa
	- [Go back to aa](#/aa)
```

## 动画

动画是一个比较复杂的概念，这里只介绍最常用的一种。

```
- ## Auto Animation
  data-auto-animate:: true
	- ## A
	- ## B
	  collapsed:: true
	- ## C
	  collapsed:: true
	- ## D
- ## Auto Animation
  data-auto-animate:: true
	- ## B
	- ## D
	- ## A
	- ## C
```

一些其他属性也可以配合使用。

| 属性                        | 默认值 | 描述                                                                                                                     |
| --------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------ |
| data-auto-animate-easing    | ease   | 一个 CSS [缓动函数](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function)。                                  |
| data-auto-animate-unmatched | true   | 决定没有匹配的自动动画目标的元素是否应该淡入。设置为 false 使它们立即出现。                                              |
| data-auto-animate-duration  | 1.0    | 动画持续时间，以秒为单位。                                                                                               |
| data-auto-animate-delay     | 0      | 动画延迟时间，以秒为单位（只能针对特定元素设置，不能在幻灯片级别设置）。                                                 |
| data-auto-animate-id        | 无     | 连接自动动画幻灯片的 [id](https://revealjs.com/auto-animate/#auto-animate-id-%26-restart)。                              |
| data-auto-animate-restart   | 无     | [分离](https://revealjs.com/auto-animate/#auto-animate-id-%26-restart) 两个相邻的自动动画幻灯片（即使它们有相同的 id）。 |

更详细的介绍可以参考 Reveal.js 的[官方文档](https://revealjs.com/auto-animate/)。

## 垂直幻灯片

:::tip
这个特性仅对付费用户开放。
:::

垂直幻灯片是 Reveal.js 的一个核心功能，在插件里也支持。

```
- Slide 2, `Vertical Mode will not render this block`
  data-vertical:: true
	- Vertical 1
		- a
		- b
		- c
	- Vertical 2
		- d
		- e
		- f
```

可以配合其他水平幻灯片一起构成网格式幻灯片。

## 设置背景

设置背景是一大类，下面分别介绍

### 纯色背景

```
- # Colorful Background
  data-background-color:: aquamarine
```

这里的颜色名称可以参考[这个文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/named-color)。如果你了解前端技术，这里也可以写其他格式的合法颜色，比如 `#fff`，`rgb(255, 255, 255)`，`rgba(255, 255, 255, 0.5)` 等。

### 渐变背景

```
- # Gradient Background
  data-background-gradient:: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)
```

这里的渐变规则可以参考[这个文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient/linear-gradient) 和 [这个文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient/radial-gradient)。

### 图片背景

```
- # Image Background
  data-background-image:: https://source.unsplash.com/random?1
  data-background-opacity:: 0.5
```

| 属性                     | 默认值    | 描述                                                                                                  |
| ------------------------ | --------- | ----------------------------------------------------------------------------------------------------- |
| data-background-image    |           | 要显示的图片的 URL，支持远程图片和本地图片。GIF 在幻灯片打开时重新开始播放。                          |
| data-background-size     | cover     | 参见 MDN 上的 [background-size](https://developer.mozilla.org/docs/Web/CSS/background-size)。         |
| data-background-position | center    | 参见 MDN 上的 [background-position](https://developer.mozilla.org/docs/Web/CSS/background-position)。 |
| data-background-repeat   | no-repeat | 参见 MDN 上的 [background-repeat](https://developer.mozilla.org/docs/Web/CSS/background-repeat)。     |
| data-background-opacity  | 1         | 背景图片的不透明度，范围从 0 到 1。0 表示完全透明，1 表示完全不透明。                                 |

### 半图背景

```
- ## Half background to right
  data-list:: true
  data-half-background-to:: right
  data-half-background-image:: https://source.unsplash.com/random?2
	- ### I'm on the left
	- ### I'm on the left
	  collapsed:: true
	- ### I'm on the left
```

也支持图片方左边，文字放右边。

### 视频背景

```
- # Remote Video Background
  data-background-video:: `https://static.slid.es/site/homepage/v1/homepage-video-editor.mp4`
  data-background-video-loop:: true
  data-background-video-muted:: true
  data-background-opacity:: 0.5
```

| 属性                        | 默认值 | 描述                                                                           |
| --------------------------- | ------ | ------------------------------------------------------------------------------ |
| data-background-video       |        | 视频地址表。                                                                   |
| data-background-video-loop  | false  | 如果视频应该循环播放，则标记。                                                 |
| data-background-video-muted | false  | 如果音频应该静音，则标记。                                                     |
| data-background-size        | cover  | 使用 `cover` 以全屏显示并进行适当裁剪，或者使用 `contain` 以适应屏幕而不裁剪。 |
| data-background-opacity     | 1      | 背景视频的不透明度，范围从 0 到 1。0 表示完全透明，1 表示完全不透明。          |

### iframe 背景

```
- # Youtube Background
  data-background-iframe:: https://www.youtube.com/embed/anmuklFtu8U?si=j9wRINS3buG3ZN2n
  data-background-interactive:: true
  data-preload:: true
  data-background-opacity:: 0.5
```

| 属性                        | 默认值 | 描述                                                                           |
| --------------------------- | ------ | ------------------------------------------------------------------------------ |
| data-background-iframe      |        | 加载 iframe 的 URL                                                             |
| data-background-interactive | false  | 包含此属性以使与 iframe 内容交互成为可能。启用此选项将阻止与幻灯片内容的交互。 |
| data-preload                | false  | 预先加载 iframe                                                                |

## 设置样式

### 基于 CSS

这里需要熟悉 CSS 样式的语法。支持如下几种属性，作用和范围不同

- `data-style`，只作用于当前区块。
- `data-child-style`，作用于当前区块的所有下级子区块。
- `data-section-style`，作用于当前幻灯片最外层标签。
- `data-list-style`，作用于列表标签，配合 `data-list` 使用。

### 基于 `Tailwind CSS`

插件内置了大量的 `Tailwind CSS` 样式，所以需要支持设置 CSS 类名。

- `data-class`，只作用于当前区块。
- `data-child-class`，作用于当前区块的所有下级子区块。
- `data-section-class`，作用于当前幻灯片最外层标签。
- `data-list-class`，作用于列表标签，配合 `data-list` 使用。

这里要注意所有的 `Tailwind CSS` 类名都是以 `!` 开头的，为了提高样式的优先级。

## 公共头尾

```
data-header:: true
```

或

```
data-footer:: true
```

标识为公共头尾的区块不会被当作当前幻灯片的内容，而是每一页幻灯片都会显示。为了满足需要还需要配合其他属性进行定位和美化。

例如：

```
- Slide Reveal Demo
  data-header:: true
  data-class:: !absolute !top-0 !left-0 !text-left !p-8 !font-bold  !text-2xl !bg-gradient-to-r !from-rose-400 !via-fuchsia-500 !to-indigo-500 !text-transparent  !bg-clip-text !w-auto
- Name@Company
  data-footer:: true
  data-class:: !absolute !bottom-8 !text-center !p-2 !w-full !text-xl !text-gray-500
- # Slide 1
```

将被渲染成

![](../../../assets/screenshot/header_footer/demo.png)

## 分段

分段让一页幻灯片可以分成多段，每段可以依次显示出来。通过属性设置可以实现一些变化。

- `data-fragment` 设置当前区块的分段效果。
- `data-child-fragment` 设置当前区块的所有下级子区块的分段效果。
- `data-fragment-index` 设置当前区块的分段索引。

分段效果可以有如下选择

| 名称                    | 效果                                   |
| ----------------------- | -------------------------------------- |
| fade-out                | 开始可见，然后淡出                     |
| fade-up                 | 向上滑动同时淡入                       |
| fade-down               | 向下滑动同时淡入                       |
| fade-left               | 向左滑动同时淡入                       |
| fade-right              | 向右滑动同时淡入                       |
| fade-in-then-out        | 先淡入，然后在下一个步骤淡出           |
| current-visible         | 淡入，然后在下一个步骤淡出             |
| fade-in-then-semi-out   | 淡入，然后在下一个步骤变为半透明       |
| grow                    | 放大                                   |
| semi-fade-out           | 淡出至 50% 的透明度                    |
| shrink                  | 缩小                                   |
| strike                  | 删除线                                 |
| highlight-red           | 文本变为红色                           |
| highlight-green         | 文本变为绿色                           |
| highlight-blue          | 文本变为蓝色                           |
| highlight-current-red   | 文本变为红色，然后在下一个步骤恢复原色 |
| highlight-current-green | 文本变为绿色，然后在下一个步骤恢复原色 |
| highlight-current-blue  | 文本变为蓝色，然后在下一个步骤恢复原色 |

## 布局

你可以在插件设置中设置默认布局，你也可以给特定幻灯片设置 `data-layout` 属性。

一共支持 9 种布局，如下：

- center
- left
- right
- top
- bottom
- top-left
- top-right
- bottom-left
- bottom-right

## 隐藏幻灯片

```
data-visibility:: hidden
```

标识了这个属性的幻灯片不会被渲染

## 神奇的页面级属性

大多数属性都可以在页面级别上设置，通过在属性名称前添加 `page-` 前缀，例如 `data-page-layout:: left`。你可以使用这种方式为每个幻灯片提供共同的属性。

一些属性在页面级别上不支持，或者没有意义。

- `data-header`
- `data-footer`
- `data-id`
- `data-fragment-index`

### 只支持页面级别的属性

- `data-page-view`: 这个用于切换页面的渲染模式，用于导出 PDF。
