# HourPicker component


<!-- STORY -->


## Props

| Name        | Type           | Required  | Description
| ------------- |:-------------:| -----| ----------|
| `className`     | String | false | Class applied to the topmost div of the HourPicker component  |
|`hour`| Number | False | Initial value of the hour for the HourPicker. Defaults to 0.|
|`icon`| String | false | Icon displayed inside of Input. Defaults to 'clock'. |
| `isDisabled`     | Boolean | false | Disables the [Input](../Input/README.md) component and disables opening of selectors. Defaults to `false`.|
|`label`| String | false | Label displayed on top of Input. Defaults to 'time'. |
|`minute`| Number | False | Initial value of the minute for the HourPicker. Defaults to 0.|
| `onChange` | Function     |   false | Happens after the local state has been updated with the new hour/minute value |
|`step`| Number | False | Step value for minutes. Defaults to `5`.|
