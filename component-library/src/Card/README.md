# Card component

<!-- STORY -->

A simple container component. When grouped together, dashed lines are automatically added.
Children displayed in flexbox column.

*Note: parent container needs to have flex flow enabled in order for the cards to switch between columns and rows properly*



## Props

| Name        | Type           | Required  |
| ------------- |:-------------:| -----:|
| `className`     | String | false |
| `children`    | Node or String or Array      |   true |


##### Example code
```javascript
  <Group removeGap>
    <Card>
      <LabeledIcon icon="car" label="2" />
      <LabeledIcon icon="luggage" label="1" />
      <Button color="primary">Hello Button</Button>
    </Card>
    <Card>
      <Button>OPA hello Button</Button>
    </Card>
  </Group>
```