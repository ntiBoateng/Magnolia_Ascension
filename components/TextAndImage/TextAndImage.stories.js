// TextAndImage.stories.stories.js
import React from 'react';
import TextAndImage from "./TextAndImage";
import TextAndImageArgs from "./TextAndImage.Args";

//👇 We create a “template” of how args map to rendering
const Template = (args) => <TextAndImage {...args} />;

//👇 Each story then reuses that template
export const TextAndImageComponent = Template.bind({});

TextAndImageComponent.args = {
   ...TextAndImageArgs,
};

export default {
  title: 'resources/Components/TextAndImage',
  component: TextAndImage,
};
