# Group component

<!-- STORY -->

Generic component for displaying multiple components in a flexbox row.

*Note: if using to display cards that need to switch between vertical and horizontal lines, pass the appropriate
class name (`column_on_vertical` imported from Card.module.scss)*

## Props

| Name        | Type           | Required  | Description |
| ------------- |:-------------:| :-----| ---------|
| `className`     | String | false | - |
| `centerContent` | String | false | Defines whether the align-items property should be set to center |
| `children`    | Node or String or Array      |   true | - |
| `fullWidth` | Boolean | false (defaults to false) | Indicates if group should take up the whole width of parent |
|`isVertical`| Boolean | false (defaults to false) | Defines whether the group is vertical  (i.e. children displayed in a column rather than a row) |
|`onBlur`| Function | False | - |
|`onClick`| Function | False | - |
|`onFocus`| Function | False | - |
|`onKeyDown`| Function | False | - |
|`removeGap`| Boolean | false (defaults to false) | indicates whether the child components should have margins between them. If set to true, the default margins on children are removed. |
|`stretchContent`| Boolean | false (defaults to false ) | Indicates whether the align items should be set to 'stretch' or 'baseline'. If set to true, 'stretch' is set. |

##### Example code
```javascript
  <Group removeGap>
    <LabeledIcon icon="luggage" label="1" />
    <LabeledIcon icon="user" label="2" />
    <LabeledIcon icon="tree" label="3" />
  </Group>
```