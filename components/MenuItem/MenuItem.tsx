import Model, { MenuItemBuilder } from "./MenuItem.model";
import { withMgnlProps } from "../WithMgnlProps/withMgnlProps";
import { UxfCard, UxfCardBody, UxfCardHeader, UxfButton, UxfCardTitle } from '@magnolia-ea/uxf-react';

const MenuItem = (props: Model) => {
    
    
  
    return <section className="py-2">
        
       <a href={props.pageLinks} style={{textDecoration: 'none'}} className="text-white h5"><span>{props.title}</span></a>
    </section>
}

export default withMgnlProps(MenuItem, MenuItemBuilder);
