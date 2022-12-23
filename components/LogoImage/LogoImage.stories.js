// LogoImage.stories.stories.js
import React from 'react';
import LogoImage from "./LogoImage";
import LogoImageArgs from "./LogoImage.Args";
 
//👇 We create a “template” of how args map to rendering
const Template = (args) => <LogoImage {...args} />;

//👇 Each story then reuses that template
export const LogoImageComponent = Template.bind({});

LogoImageComponent.args = {
   ...LogoImageArgs
};

export default {
  title: 'resources/Components/LogoImage',
  component: LogoImage,
};