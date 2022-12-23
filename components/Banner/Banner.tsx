import Model, { BannerBuilder } from "./Banner.model";
import { withMgnlProps } from "../WithMgnlProps/withMgnlProps";
import { UxfCard, UxfCardBody, UxfCardHeader, UxfButton } from '@magnolia-ea/uxf-react';

const Banner = (props: Model) => {
    return <section>
        <h1>{props.title}</h1>
    </section>
}

export default withMgnlProps(Banner, BannerBuilder);
