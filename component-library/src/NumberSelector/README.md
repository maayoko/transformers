# NumberSelector component

<!-- STORY -->


## Props

| Name        | Type           | Required  | Description
| ------------- |:-------------:| -----| ----------|
|`allowDisable`| Boolean | False | Defaults to false. If set to true, when generator functions return `null`, up/down buttons are disabled. |
| `className`     | String | false | - |
| `formatFunc`      | Function     |   false |  Value format function |
| `isDisabled`     | Boolean | false | - |
|`label`| String | false | - |
|`nextGenerator`| Function | False | Defaults to a function that adds one to the current value. Needs to return `null` if the value should not change.|
|`onBlur`| Function | False | - |
|`onClick`| Function | False | - |
| `onChange` | Function     |   false | - |
|`onFocus`| Function | False | - |
|`onKeyDown`| Function | False | - |
|`previousGenerator`| Function | False | Defaults to a function that subtracts one to the current value. Needs to return `null` if the value should not change. |
|`value`| Number | False | Value of the picker. |
|`valueClassName`| String | False | - |
