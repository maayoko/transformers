# Gallery Component

<!-- STORY -->

## Props

| Name        | Type           | Required  | Dascription |
| ------------- |:-------------:| -----| ----- |
| `className`     | String | false | Class applied to the upmost element of the component
| `children`    | Node or String or Array      |   **true** | Elements to be displayed in the gallery component. All children get passed `activeContent` (true/false whether the item is currently selected) and `index`|
| `hasArrows`| Boolean      |   false  | Defaults to true. Controls whether the gallery should display arrows or not. |
| `isDisabled`| Boolean      |   false  | - |
| `visibleChildren`| Object |   false  | Settings that handle visible children display. Described below.

*Note:* the component does not differentiate between large desktops and desktops.

### `visibleChildren` property
| Name        | Type           | Required  | Dascription |
| ------------- |:-------------:| -----| ----- |
| `mobile`     | Number | **true** | Number of children that needs to be displayed on mobile screen.
| `mobileMaxWidth`    | Number |  false | Overriding the default value of the mobile screen width. The component defaultly uses sass defined values (see media query mixin) if this value isn't specified. |
| `tabletPortrait`     | Number | **true** | Number of children that needs to be displayed on tablet (portrait) screen.
| `tabletPortraitMinWidth`    | Number |  false | Overriding the default value of the tablet (portrait) screen width. The component defaultly uses sass defined values (see media query mixin) if this value isn't specified. |
| `tabletLandscape`     | Number | **true** | Number of children that needs to be displayed on tablet (landscape) screen.
| `tabletLandscapeMinWidth`    | Number |  false | Overriding the default value of the tablet (landscape) screen width. The component defaultly uses sass defined values (see media query mixin) if this value isn't specified. |
| `desktop`     | Number | **true** | Number of children that needs to be displayed on desktop.
| `desktopMinWidth`    | Number |  false | Overriding the default value of the desktop screen width. The component defaultly uses sass defined values (see media query mixin) if this value isn't specified. |