# Markdown

Just as you'd expect, the plugin will render the Markdown syntax you write within Blocks into HTML and display it on the slides. Like Logseq, it's not recommended to include too much Markdown syntax within a single Block; instead, keep it simple with basic text formatting. However, even with that restriction, we can still achieve many practical effects.

::: tip
Here, I showcase some Markdown syntax in code snippets. You can paste these into Logseq to see the effects or check out the demonstration videos in the documentation for various effects I've prepared for you.
:::

## Different Sized Headings

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

## Unordered Lists

```
- ## List
	- - Topic 1
	- - Topic 2
	- - Topic 3
	- - Topic 4
```

## Ordered Lists

```
- ## Ordered List
	- 1. Topic 1
	- 2. Topic 2
	- 3. Topic 3
	- 4. Topic 4
```

## Blockquotes

```
> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
```

## Links

Will be opened in the browser

```
- [Link](https://www.logseq.com)
```

## Tables

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

## Images

```
- # Local Image
	- ![BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg](../assets/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873_1711730103239_0.jpg)
	- Support local image rendering.
```

## Videos

```
- # Local Video
	- ![Watch- OpenAI Tool Creates Realistic AI Videos - WSJ News.mp4](../assets/Watch-_OpenAI_Tool_Creates_Realistic_AI_Videos_-_WSJ_News_1711740427761_0.mp4)
```

## Code Snippets

````
- # Programming Languages
	-
	  ```js
	  const msg = 'Hello World'
	  console.log(msg)
	  ```
````

The slides also support advanced features like line numbering, line offset, step-by-step display, etc.

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

## Mermaid

The plugin supports some commonly used Mermaid syntax.

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
