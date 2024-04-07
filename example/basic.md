# Basic

## Different Font Sizes

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

![](../assets/screenshot/basic/fontsize.png)

## Non Ordered List

```
- ## List
  data-list:: true
	- Topic 1
	- Topic 2
	- Topic 3
	- Topic 4
```

![](../assets/screenshot/basic/list.png)

## Ordered List

```
- ## Ordered List
  data-ordered-list:: true
	- Topic 1
	- Topic 2
	- Topic 3
	- Topic 4
```

![](../assets/screenshot/basic/orderedlist.png)

## Two Column List

```
- # Two Column List
  data-class:: !text-left
  data-two-column:: true
  data-ordered-list:: true
	- Item 1
	- Item 2
	- Item 3
	- Item 4
	- Item 5
	- Item 6
	- Item 7
	- Item 8
```

![](../assets/screenshot/basic/twocolumnlist.png)

## Another Two Column List

```
- # Another Two Column List
  data-list-class:: !grid !grid-cols-2 !gap-2 !w-full !px-4
  data-child-class:: !ml-4
  data-class:: !text-left
  data-list:: true
	- Item 1
	- Item 2
	- Item 3
	- Item 4
	- Item 5
	- Item 6
	- Item 7
	- Item 8
```

![](../assets/screenshot/basic/anothertwocolumnlist.png)

## Not List

```
- # Not List
	- Reprehenderit in cupidatat ut laboris esse.
	- ulla mollit velit sunt sit sit excepteur non
	- aboris id laboris fugiat ut adipisic
```

![](../assets/screenshot/basic/notlist.png)

## Link Jump

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

## Table

```
- ## Table
	-
	  | Name | Age | Height |
	  |---|---|---|
	  | Leo | 39 | 39 |
	  | Sam | 39 | 39 |
	  | Lily | 39 | 39 |
	  | Bob | 39 | 39 |
```

![](../assets/screenshot/basic/table.png)

## Quote

```
- ## Quote
	-
	  > aboris id laboris fugiat ut adipisicing anim non et ullamco reprehenderit magna dolor.aboris id laboris fugiat ut adipisicing anim non et ullamco reprehenderit magna dolor.aboris id laboris fugiat ut adipisicing anim non et ullamco reprehenderit magna dolor.aboris id laboris fugiat ut adipisicing anim non et ullamco reprehenderit magna dolor.aboris id laboris fugiat ut adipisicing anim non et ullamco reprehenderit magna dolor.
```

![](../assets/screenshot/basic/quote.png)

## Local Image

```
- # Local Image
	- ![BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg](../assets/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873_1711730103239_0.jpg)
	- Support local image rendering.
```

![](../assets/screenshot/basic/localimage.png)

## Local Video

```
- # Local Video
	- ![Watch- OpenAI Tool Creates Realistic AI Videos - WSJ News.mp4](../assets/Watch-_OpenAI_Tool_Creates_Realistic_AI_Videos_-_WSJ_News_1711740427761_0.mp4)
```

![](../assets/screenshot/basic/localvideo.png)

## Hide Slide

```
- # Hidden Slide
  data-visibility:: hidden
```
