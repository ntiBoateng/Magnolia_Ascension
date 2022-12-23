// MenuItem.stories.stories.js
import React from 'react';
import MenuItem from "./MenuItem";
import MenuItemArgs from "./MenuItem.Args";
 
//👇 We create a “template” of how args map to rendering
const Template = (args) => <MenuItem {...args} />;

//👇 Each story then reuses that template
export const MenuItemComponent = Template.bind({});

MenuItemComponent.args = {
   ...MenuItemArgs
};

export default {
  title: 'resources/Components/MenuItem',
  component: MenuItem,
};