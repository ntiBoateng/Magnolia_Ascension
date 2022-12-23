import Model, { HeadlineBuilder } from "./Headline.model";
import { withMgnlProps } from "../WithMgnlProps/withMgnlProps";

const Headline = (props: Model) => {
    return (
        <>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            {props.description && <div dangerouslySetInnerHTML={{__html: props.description}} />}
        </>
    );
}

export default withMgnlProps(Headline, HeadlineBuilder);
