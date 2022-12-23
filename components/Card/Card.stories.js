// Card.stories.stories.js
import React from 'react';
import Card from "./Card";
import CardArgs from "./Card.Args";
 
//👇 We create a “template” of how args map to rendering
const Template = (args) => <Card {...args} />;

//👇 Each story then reuses that template
export const CardComponent = Template.bind({});

CardComponent.args = {
   ...CardArgs
};

export default {
  title: 'resources/Components/Card',
  component: Card,
};