// ContactList.stories.stories.js
import React from 'react';
import ContactList from "./ContactList";
import ContactListArgs from "./ContactList.Args";
 
//👇 We create a “template” of how args map to rendering
const Template = (args) => <ContactList {...args} />;

//👇 Each story then reuses that template
export const ContactListComponent = Template.bind({});

ContactListComponent.args = {
   ...ContactListArgs
};

export default {
  title: 'resources/Components/ContactList',
  component: ContactList,
};