# DropdownInput component

<!-- STORY -->


## Props

| Name        | Type           | Required  | Description |
| ------------- |:-------------:| :-----| ---------|
| `className`     | String | false | Name of class applied to the top-most container element. |
| `currentLabel`    | String      |   **true** | Label currently being displayed. |
| `currentIcon` | String | false | Icon currently being displayed. |
|`elements`| Array of ({ label: String, icon: String }) | **true** | Elements that need to be displayed in the dropdown list. Each element must have the `label` property defined.  |
|`format`| String | false | Format in which to display the input value |
|`icon`| String | false | Icon of Input component |
| `isDisabled` | Boolean | false | Defaults to false |
|`label`| String | False | Label of the Input component |
|`onInputChange`| Function | False | - |
|`onDropdownChange`| Function | False | - |
|`position`| ['left', 'right' ] | False | Defautls to 'left'. Indicates dropdown's position. |

|`value`| String |  false | Currently displayed value of Input (without dropdown prefix/sufix).|
