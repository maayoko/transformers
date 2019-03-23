# Dropdown component

<!-- STORY -->


## Props

| Name        | Type           | Required  | Description |
| ------------- |:-------------:| :-----| ---------|
| `className`     | String | false | Name of class applied to the top-most container element. |
| `controlledOpen` | Boolean | false | Defaults to false. States whether the dropdown should locally keep track of `open` property. |
| `currentLabel`    | String      |   **true** | Label currently being displayed. |
| `currentIcon` | String | false | Icon currently being displayed. |
|`customButton`| Node, String or Array | false  | Custom button that will be displayed for toggling of dropdown. |
|`elements`| Array of ({ label: String, icon: String }) | **true** | Elements that need to be displayed in the dropdown list. Each element must have the `label` property defined.  |
|`isDisabled`| Boolean | False | - |
|`onBlur`| Function | False | Function triggered on the blur event of the dropdown list (not the whole component itself). |
|`onChange`| Function | False | Called when an item from the dropdown list is selected. |
|`onFocus`| Function | False | Triggered on the focus event of the whole component (container element). |
|`open`| Boolean | false (defaults to false) | Indicates whether the dropdown should be shown. Works **only** if `controlledOpen` is set to `true` |
|`refFunc`| Function | false. | Sets ref for the dropdown list (*example* when opening to focus it). |
