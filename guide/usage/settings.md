# Plugin Configuration

The plugin supports several common configurations.

## Slide Themes

The following themes are specific theme styles, with the default being the black theme.

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

There's also a special category of theme names:

- `random`: This means that a random theme is used every time the slideshow is opened.
- `random-slide`: This means that a random theme is used every time a slide is switched.
- `inherit`: This means that the theme of each slide inherits from the theme of the previous slide every time a slide is switched.

## Slide transition

Default is `slide`

Options are:

- none
- fade
- slide
- convex
- concave
- zoom

## Slide background transition

Default is `slide`. It can be combined with the slide transition. It can use the same value, or use different values.

可选值如下：

- none
- fade
- slide
- convex
- concave
- zoom

## Sanitize Block

For security reasons, the plugin will filter out some HTML tags by default, such as script, style, iframe, etc. For paid user, you can disable this feature and use scripts to get more possibilities.
