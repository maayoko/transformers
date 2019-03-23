# Selection component

Component for creating radio button selections and checkbox selections.

<!-- STORY -->


## Props

| Name        | Type           | Required  | Description
| ------------- |:-------------:| -----| ----------|
| `className`     | String | false | - |
| `isDisabled`     | Boolean | false | - |
| `isActive`     | Boolean | false | Determines whether the checkbox is selected. |
| `onClick`  | Function     |   false | - |
|`onKeyDown`| Function     |   false | - |
|`selection`| String or Node | False | Custom element displayed next to the checkbox |
|`type`| ['radio', 'checkbox']| False | Defaults to 'checkbox'. Sets the type of display.|