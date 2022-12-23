import Model, { LogoBuilder } from "./Logo.model";
import { withMgnlProps } from "../WithMgnlProps/withMgnlProps";
import { UxfCard, UxfCardBody, UxfCardHeader, UxfButton } from '@magnolia-ea/uxf-react';

const Logo = (props: Model) => {
    return <section>
        <a className="text-white text-uppercase" style={{ textDecoration: "none" }} href={props.pageLinks}><p style={{fontWeight: "bold", color: props.color}}>{props.title}</p></a>
        
    </section>
}

export default withMgnlProps(Logo, LogoBuilder);
