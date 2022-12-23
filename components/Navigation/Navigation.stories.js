// Navigation.stories.stories.js
import React from 'react';
import Navigation from "./Navigation";
import NavigationArgs from "./Navigation.Args";
 
//👇 We create a “template” of how args map to rendering
const Template = (args) => <Navigation {...args} />;

//👇 Each story then reuses that template
export const NavigationComponent = Template.bind({});

NavigationComponent.args = {
   ...NavigationArgs
};

export default {
  title: 'resources/Components/Navigation',
  component: Navigation,
};