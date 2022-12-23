// Headline.stories.stories.js
import React from 'react';
import Headline from "./Headline";
import HeadlineArgs from "./Headline.Args";

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Headline {...args} />;

//👇 Each story then reuses that template
export const HeadlineComponent = Template.bind({});

HeadlineComponent.args = {
   ...HeadlineArgs,
};

export default {
  title: 'resources/Components/Headline',
  component: Headline,
};
