# Labeled icon component

<!-- STORY -->

Component for displaying custom TransferHero icons with labels.

## Props

| Name        | Type           | Required  | Description |
| ------------- |:-------------:| :-----| ---------|
| `className`     | String | false | - |
|`icon`| String | **true** | The name of the icon that needs to be displayed (example - 'user', 'luggage') |
|`isReverse`| Boolean | false | The icon is by default displayed on the left. To change order, `isReverse` needs to be set to `true`.|
|`label`| String | **true** | The label that needs to be displayed on next to the icon |
|`onClick`| Function | false | - |