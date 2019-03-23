# NumberPicker component


<!-- STORY -->


## Props

| Name        | Type           | Required  | Description
| ------------- |:-------------:| -----| ----------|
|`allowDisable`| Boolean | False | Defaults to false. If set to true, when generator functions return `null`, up/down buttons are disabled inside of the [NumberSelector](../NumberSelector/README.md) component. |
| `className`     | String | false | Class applied to the topmost div of the NumberPicker component  |
| `formatFunc`      | Function     |   false |  Value format function passed to NumberSelector component. |
| `isDisabled`     | Boolean | false | Disables the [Input](../Input/README.md) component and disables opening of selector. Defaults to `false`.|
|`icon`| String | **True** | Icon displayed inside of Input. |
|`label`| String | **True** | Label displayed on top of Input. |
|`nextGenerator`| Function | False | Defaults to a function that adds one to the current value. Needs to return `null` if the value should not change. When using `allowDisable`, the up button will be disabled uppon returning `null`.|
| `onChange` | Function     |   false | Happens after the local state has been updated after up/down buttons clicked. |
|`previousGenerator`| Function | False | Defaults to a function that subtracts one to the current value. Needs to return `null` if the value should not change.  When using `allowDisable`, the down button will be disabled uppon returning `null`. |
|`value`| Number | False | Value of the number picker.|
|`valueClassName`| String | False | Custom class applied to the value display inside of the number selector. |
