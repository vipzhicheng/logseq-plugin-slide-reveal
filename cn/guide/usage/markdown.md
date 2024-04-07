# Markdown

跟你想的一样，插件会将你写在 Block 里的 Markdown 语法渲染成 HTML，并展示在幻灯片中。和 Logseq 一样，这里同样不建议在一个 Block 里写很多的 Markdown 语法，而只是写简单的文本修饰。但即使是这样，我们仍然能实现很多实用的效果。

::: tip
这里我以代码片段的形式展示一些 Markdown 语法。大家可以粘贴到 Logseq 中看效果，也可以到文档的演示视频部分看看我给大家准备的各种效果演示。
:::

## 不同大小的标题

```
- # H1 ~ H6
	- # H1
	- ## H2
	- ### H3
	- #### H4
	- ##### h5
	- ###### h6
	- no h tag
```

## 无序列表

```
- ## List
	- - Topic 1
	- - Topic 2
	- - Topic 3
	- - Topic 4
```

## 有序列表

```
- ## Ordered List
	- 1. Topic 1
	- 2. Topic 2
	- 3. Topic 3
	- 4. Topic 4
```

## 引用

```
> aboris id laboris fugiat ut adipisicing anim non et ullamco reprehenderit magna dolor.aboris id laboris fugiat ut adipisicing anim non et ullamco reprehenderit magna dolor.aboris id laboris fugiat ut adipisicing anim non et ullamco reprehenderit magna dolor.aboris id laboris fugiat ut adipisicing anim non et ullamco reprehenderit magna dolor.aboris id laboris fugiat ut adipisicing anim non et ullamco reprehenderit magna dolor.
```

## 链接

将会在浏览器中打开链接

```
- [Link](https://www.logseq.com)
```

## 表格

```
- ## Table
	-
	  | Name | Age | Height |
	  |---|---|---|
	  | Leo | 39 | 179cm |
	  | Sam | 39 | 168cm |
	  | Lily | 39 | 184cm |
	  | Bob | 39 | 193cm |
```

## 图片

```
- # Local Image
	- ![BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg](../assets/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873_1711730103239_0.jpg)
	- Support local image rendering.
```

## 视频

```
- # Local Video
	- ![Watch- OpenAI Tool Creates Realistic AI Videos - WSJ News.mp4](../assets/Watch-_OpenAI_Tool_Creates_Realistic_AI_Videos_-_WSJ_News_1711740427761_0.mp4)
```

## 代码片段

````
- # Programming Languages
	-
	  ```js
	  const msg = 'Hello World'
	  console.log(msg)
	  ```
````

幻灯片还支持更高级的行号显示，行号偏移，分步显示等。

````
```ts 7:5,9,14|6,10,15|7,11,16
// The public reveal.js API
const API = {
  VERSION,

  initialize,
  configure,
  destroy,

  sync,
  syncSlide,
  syncFragments: fragments.sync.bind( fragments ),

  // Navigation methods
  slide,
  left: navigateLeft,
  right: navigateRight,
  up: navigateUp,
  down: navigateDown,
  prev: navigatePrev,
  next: navigateNext,
}
```
````

## Marmaid

插件支持部分常用的 Mermaid 语法。

````
- # Mermaid: Sequence diagrams
	-
	  ```mermaid
	  sequenceDiagram
	      Alice->>John: Hello John, how are you?
	      John-->>Alice: Great!
	      lice-)John: See you later!

	  ```
````
