# Shortcuts

The plugin supports some shortcuts to enhance the slideshow experience.

## Navigation

- `j`, `k`, `h`, `l`: Navigate up, down, left, right, similar to `Vim`.
- Arrow keys: Same as above.
- Spacebar: Next slide.
- `n`, `p`: Next slide, previous slide.

## Zoom

Hold `Alt` key and click on the area to zoom in on a specific part of the slide; click again to restore original size.

## Overview

Press `ESC` to enter overview mode, press `ESC` again to exit overview.

## Pause

- `b`: Blackout pause, press again to resume.

## Drawing Mode

- `t`: Enter drawing mode, press again to exit drawing mode.
- `d`: Toggle select mode, drawing mode is not exited but drawing is halted.
- `1`~`9`: Choose color in drawing mode.
- `ctrl+z`: Undo.

## Exit

`q`: Exit the slideshow.

## Launching Slideshow

To avoid conflicts with shortcuts from other plugins, no shortcut is bound by default, but you can edit the configuration file to bind a shortcut.

`logseq-slide-reveal.json`

```
{
  "keyBindings": {
    "openSlideReveal": "mod+shift+l"
  }
}
```

### Other Launch Methods

- Click on the icon in the top right corner of the page to launch.
- Type `Slide Reveal` in the command palette to launch.

### Launching Local Slides

:::tip
This is a feature for Pro users.
:::

- Type `/Slide Reveal` in a block to launch local slides.
- Choose `Slide Reveal` from the context menu of a block to launch local slides.

### Previewing Slides

:::tip
This is a feature for Pro users.
:::

- Type `/Slide Preview` in a block to preview slides.
- Choose `Slide Preview` from the context menu of a block to preview slides.
