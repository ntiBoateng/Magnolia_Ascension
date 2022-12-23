// Logo.stories.stories.js
import React from 'react';
import Logo from "./Logo";
import LogoArgs from "./Logo.Args";
 
//👇 We create a “template” of how args map to rendering
const Template = (args) => <Logo {...args} />;

//👇 Each story then reuses that template
export const LogoComponent = Template.bind({});

LogoComponent.args = {
   ...LogoArgs
};

export default {
  title: 'resources/Components/Logo',
  component: Logo,
};