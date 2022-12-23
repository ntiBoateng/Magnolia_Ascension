// ExternalLink.stories.stories.js
import React from 'react';
import ExternalLink from "./ExternalLink";
import ExternalLinkArgs from "./ExternalLink.Args";
 
//👇 We create a “template” of how args map to rendering
const Template = (args) => <ExternalLink {...args} />;

//👇 Each story then reuses that template
export const ExternalLinkComponent = Template.bind({});

ExternalLinkComponent.args = {
   ...ExternalLinkArgs
};

export default {
  title: 'resources/Components/ExternalLink',
  component: ExternalLink,
};