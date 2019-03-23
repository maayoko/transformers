# Input component

<!-- STORY -->


## Props

| Name        | Type           | Required  | Description
| ------------- |:-------------:| -----| ----------|
| `className`     | String | false | - |
| `enableFocus`| Boolean | false | Defaults to true. Disables or enables focus of input when other elements are clicked (for example, should input focus on it's label being clicked).
| `hasError`     | Boolean | false | - |
| `icon`    | String    |   false | - |
| `isDisabled`     | Boolean | false | - |
| `label`    | String     |   false | - |
| `name`     | String | false | Name of input element |
| `onBlur`   | Function     |   false | - |
| `onChange` | Function     |   false | - |
| `onClick`  | Function     |   false | - |
| `onFocus`  | Function     |   false | - |
| `onKeyDown` | Function     |   false | - |
| `onSelect` | Function     |   false | - |
|`prefixElement`| Node or String or Array | false | Defaults to `null`. Element displayed inline with the input on it's left side. Useful for creating more complex inputs (such as the ones with dropdown inside).
|`placeholder`| String | false | |
|`readOnly`| Boolean| false | Defaults to false|
| `refFunc`      | Function     |   false | Function used to pass down the ref value of the input to parent|
|`sufixElement`| Node or String or Array | false | Defaults to `null`. Element displayed inline with the input on it's right side. Useful for creating more complex inputs (such as the ones with dropdown inside).
|`value`| String | False | - |
| `type` | String | False | Defaults to 'text' |
