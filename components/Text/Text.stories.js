// Text.stories.stories.js
import React from 'react';
import Text from "./Text";
import TextArgs from "./Text.Args";
 
//👇 We create a “template” of how args map to rendering
const Template = (args) => <Text {...args} />;

//👇 Each story then reuses that template
export const TextComponent = Template.bind({});

TextComponent.args = {
   ...TextArgs
};

export default {
  title: 'resources/Components/Text',
  component: Text,
};