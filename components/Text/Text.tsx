import Model, { TextBuilder } from "./Text.model";
import { withMgnlProps } from "../WithMgnlProps/withMgnlProps";
import { UxfCard, UxfCardBody, UxfCardHeader, UxfButton } from '@magnolia-ea/uxf-react';

const Text = (props: Model) => {
    return <section>
        <p className="text-white py-3">{props.title}</p>
    </section>
}

export default withMgnlProps(Text, TextBuilder);
