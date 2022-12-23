// Carousel.stories.stories.js
import React from 'react';
import Carousel from "./Carousel";
import CarouselArgs from "./Carousel.Args";
 
//👇 We create a “template” of how args map to rendering
const Template = (args) => <Carousel {...args} />;

//👇 Each story then reuses that template
export const CarouselComponent = Template.bind({});

CarouselComponent.args = {
   ...CarouselArgs
};

export default {
  title: 'resources/Components/Carousel',
  component: Carousel,
};