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

## Slide code theme

Supported code themes:

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

## Default slide layout

Set the default layout of each slide. Can be overridden by each slide.

Supported layouts:

- center
- left
- right
- top
- top-left
- top-right
- bottom
- bottom-left
- bottom-right

## Change slide properties prefix

By default, all properties are prefixed with `data-`. If there is a conflict with another plugin, you can change the prefix here, for example: `slide-`.

## Sanitize Block

For security reasons, the plugin will filter out some HTML tags by default, such as script, style, iframe, etc. You can disable this feature and use scripts to get more possibilities.

## Change Slide Font

By theme settings, the theme has built-in fonts, if you want to change the font, you can change it here. There are three types of fonts, title font, body font and code font. The font source also has three types, Google font, CDN font, and CSS font. These fonts are all Webfonts. Google font supports loading multiple fonts at the same time, so the font settings here can support separately setting English font, Emoji font and Chinese font.

Fonts can be separated by `|`, for example: `Jersey 15|Noto Emoji|LXGW WenKai`.

Here `Jersey 15|Noto Emoji` is from Google font, and `LXGW WenKai` is from CDN font. So you need to configure the CDN font address: `https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1.1.0/style.css`. CSS font is also the same.

Base on this idea, you can actually load many fonts into the slide, but it is not necessary. If the font you need has already been loaded, then the font address after the font name can be left empty. If you are satisfied with the font of the current theme, then all the font settings can be left empty.

## Theme Style Tuning

Beside font, there are also some settings that may need to be adjusted.

- Code width, default is 90%.
- Title line height, default is 1.2.
- Unordered list type, default is disc, can be changed to other supported values, or emoji, or none to disable, emoji needs to be enclosed in quotes.
