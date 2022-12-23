// Footer.stories.stories.js
import React from 'react';
import Footer from "./Footer";
import FooterArgs from "./Footer.Args";
 
//👇 We create a “template” of how args map to rendering
const Template = (args) => <Footer {...args} />;

//👇 Each story then reuses that template
export const FooterComponent = Template.bind({});

FooterComponent.args = {
   ...FooterArgs
};

export default {
  title: 'resources/Components/Footer',
  component: Footer,
};