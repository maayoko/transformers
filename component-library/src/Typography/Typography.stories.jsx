import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import Typography from './Typography';
import docs from './README.md';

storiesOf('Typography', module)
  .addDecorator(withDocs(docs))
  .add('default', () => <Typography>Transformers</Typography>)
  .add('black text', () => <Typography color="black">Transformers</Typography>)
  .add('primary text', () => <Typography color="primary">Transformers</Typography>)
  .add('primary text uppercased', () => <Typography uppercase color="primary">Transformers</Typography>)
  .add('primary text with mid opacity', () => <Typography opacity="mid" uppercase color="primary">Transformers</Typography>)
  .add('primary text with low opacity', () => <Typography opacity="low" uppercase color="primary">Transformers</Typography>)
  .add('primary text hidden', () => 
    <Typography opacity="hidden" uppercase color="primary">Transformers</Typography>)
  .add('primary text as big header', () => 
    <Typography size="header-big" uppercase color="primary">Transformers</Typography>)
  .add('primary text with size as big header', () => 
    <Typography opacity="high" size="header-big" uppercase color="black">Optimus Prime</Typography>)
  .add('primary text size as body big', () => 
    <Typography size="body-big" uppercase color="black">Optimus Prime</Typography>)
  .add('primary text size as body mid', () => 
    <Typography size="body-mid" uppercase color="black">Optimus Prime</Typography>)
  .add('primary text size as body small', () => 
    <Typography size="body-small" uppercase color="black">Optimus Prime</Typography>)