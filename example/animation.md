# Animation

## Simple Animation

If there is no `data-id`, the content is used to identify what to animate.

```
- ## Auto Animation
  data-theme:: white
  data-auto-animate:: true
	- ## A
	- ## B
	  collapsed:: true
	- ## C
	  collapsed:: true
	- ## D
```

```
- ## Auto Animation
  data-theme:: white
  data-auto-animate:: true
	- ## B
	- ## D
	- ## A
	- ## C
```

## Animation based on `data-id`

```
- Another Animation
  data-theme:: white
  data-auto-animate:: true
  data-auto-animate-easing:: cubic-bezier(0.770, 0.000, 0.175, 1.000)
	-
	  <div class="r-hstack justify-center">
	  						<div data-id="box1" style="background: #999; width: 50px; height: 50px; margin: 10px; border-radius: 5px;"></div>
	  						<div data-id="box2" style="background: #999; width: 50px; height: 50px; margin: 10px; border-radius: 5px;"></div>
	  						<div data-id="box3" style="background: #999; width: 50px; height: 50px; margin: 10px; border-radius: 5px;"></div>
	  					</div>
```

```
- Another Animation
  data-theme:: white
  data-auto-animate:: true
  data-auto-animate-easing:: cubic-bezier(0.770, 0.000, 0.175, 1.000)
	-
	  <div class="r-hstack justify-center">
	  						<div data-id="box1" data-auto-animate-delay="0" style="background: cyan; width: 150px; height: 100px; margin: 10px;"></div>
	  						<div data-id="box2" data-auto-animate-delay="0.1" style="background: magenta; width: 150px; height: 100px; margin: 10px;"></div>
	  						<div data-id="box3" data-auto-animate-delay="0.2" style="background: yellow; width: 150px; height: 100px; margin: 10px;"></div>
	  					</div>
```

```
- Another Animation
  data-theme:: white
  data-auto-animate:: true
  data-auto-animate-easing:: cubic-bezier(0.770, 0.000, 0.175, 1.000)
	-
	  <div class="r-stack">
	  						<div data-id="box1" style="background: cyan; width: 300px; height: 300px;"></div>
	  						<div data-id="box2" style="background: magenta; width: 200px; height: 200px;"></div>
	  						<div data-id="box3" style="background: yellow; width: 100px; height: 100px;"></div>
	  					</div>
```

## Zoom In

Hold the `alt` key and click with your mouse to zoom in on a specific area.
