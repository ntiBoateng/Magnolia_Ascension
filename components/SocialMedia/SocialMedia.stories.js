// SocialMedia.stories.stories.js
import React from 'react';
import SocialMedia from "./SocialMedia";
import SocialMediaArgs from "./SocialMedia.Args";
 
//👇 We create a “template” of how args map to rendering
const Template = (args) => <SocialMedia {...args} />;

//👇 Each story then reuses that template
export const SocialMediaComponent = Template.bind({});

SocialMediaComponent.args = {
   ...SocialMediaArgs
};

export default {
  title: 'resources/Components/SocialMedia',
  component: SocialMedia,
};