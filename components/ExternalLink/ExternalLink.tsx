import Model, { ExternalLinkBuilder } from "./ExternalLink.model";
import { withMgnlProps } from "../WithMgnlProps/withMgnlProps";
import { UxfCard, UxfCardBody, UxfCardHeader, UxfButton } from '@magnolia-ea/uxf-react';

const ExternalLink = (props: Model) => {
    return <section className="py-2">
          <a href={"https://"+props.pageLinks} style={{textDecoration: 'none'}} className="text-white h"><p>{props.title}</p></a>
    </section>
}

export default withMgnlProps(ExternalLink, ExternalLinkBuilder);
