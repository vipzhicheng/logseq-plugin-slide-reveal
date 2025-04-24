# Export

Starting from v1.2.0, the Slide Reveal plugin finally supports exporting to PDF format. To implement this feature, it is first necessary to implement a print rendering mode.

## Print Rendering Mode

A setting for the rendering mode has been added to the settings page, with only two values available: normal and print. When set to print, the Slide Reveal plugin will display all the Slides tiled on a single page.

## Enable via Page Attributes

If you modify the configuration file, all Logseq pages will be affected. Therefore, I have also added a page attribute. Through this attribute, you can enable the print rendering mode for a single page.

```
data-page-view:: print
```

> The flexibility of the Slide Reveal plugin lies in its support for various block attributes, and most block attributes can be configured at the page level, meaning they take effect on all Blocks within the page. Additionally, support for Tailwind CSS is integrated through the `data-class` attribute, enabling various beautification operations on the page.

## Manual Switching within the Slide is Also Possible

If you find it troublesome to write page attributes, you can manually switch the rendering mode within the Slide. In the Reveal mode, open the control panel in the lower left corner, where there is a menu item for switching the print mode. After clicking it, you can switch to the print rendering mode. Then, click the control panel in the lower left corner again, and you will notice that the menu has changed, with an additional menu item for exporting to PDF. Click it to start the export. Here, the export is implemented using the function of converting print to PDF based on the browser kernel.

After the export is completed, you can open it to check the effect. If you are satisfied, you can click the control panel in the lower left corner again to switch back to the Reveal mode. If you are not satisfied, you may need to adjust the content or the print size. When I exported on a 1920x1080 screen, the size I used was 223 mm x 397 mm.

## Shortcut Keys

Whether it is to switch the rendering mode or trigger the export pop-up window, there are shortcuts, which are `p` and `cmd+p` respectively.

## Frequently Asked Questions

### 1. Why is there no vertical scrollbar?

I found that if the scrollbar is displayed, the exported PDF will have an annoying white margin, so I completely hid the scrollbar.

### 2. Why does the exported PDF still have a white margin?

This problem does exist. Currently, the only way is to select a good print size to reduce the white margin, and it seems impossible to completely eliminate it.

<video controls="controls" src="/assets/screencast/export.mp4" />
