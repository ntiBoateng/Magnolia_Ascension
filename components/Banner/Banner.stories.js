// Banner.stories.stories.js
import React from 'react';
import Banner from "./Banner";
import BannerArgs from "./Banner.Args";
 
//👇 We create a “template” of how args map to rendering
const Template = (args) => <Banner {...args} />;

//👇 Each story then reuses that template
export const BannerComponent = Template.bind({});

BannerComponent.args = {
   ...BannerArgs
};

export default {
  title: 'resources/Components/Banner',
  component: Banner,
};