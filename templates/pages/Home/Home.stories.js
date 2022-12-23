// Home.stories.stories.js
import Home from "./Home";
import HomeArgs from "./Home.Args";
 
//👇 We create a “template” of how args map to rendering
const Template = (args) => <Home {...args} />;

//👇 Each story then reuses that template
export const HomeComponent = Template.bind({});

HomeComponent.args = {
   ...HomeArgs
};

export default {
  title: 'resources/Pages/Home',
  component: Home,
  
};