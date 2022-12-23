// TourList.stories.stories.js
import React from 'react';
import TourList from "./TourList";
import TourListArgs from "./TourList.Args";
 
//👇 We create a “template” of how args map to rendering
const Template = (args) => <TourList {...args} />;

//👇 Each story then reuses that template
export const TourListComponent = Template.bind({});

TourListComponent.args = {
   ...TourListArgs
};

export default {
  title: 'resources/Components/TourList',
  component: TourList,
};