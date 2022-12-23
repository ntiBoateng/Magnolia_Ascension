// Membership.stories.stories.js
import Membership from "./Membership";
import MembershipArgs from "./Membership.Args";
 
//👇 We create a “template” of how args map to rendering
const Template = (args) => <Membership {...args} />;

//👇 Each story then reuses that template
export const MembershipComponent = Template.bind({});

MembershipComponent.args = {
   ...MembershipArgs
};

export default {
  title: 'resources/Pages/Membership',
  component: Membership,
  
};