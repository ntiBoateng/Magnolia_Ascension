import Model, { TextAndImageBuilder } from "./TextAndImage.model";
import { withMgnlProps } from "../WithMgnlProps/withMgnlProps";
import { UxfCard, UxfCardBody, UxfCardHeader, UxfButton } from '@magnolia-ea/uxf-react';
import Asset from "../../lib/MagnoliaAsset";

const Image = (props : Asset) => {

    return <>
        {((props.renditions && props.renditions.large && props.renditions.large.link) ?
            <img style={{width:'100%'}} src={ (props.renditions.large.link.startsWith("http") ? props.renditions.large.link : process.env.NEXT_PUBLIC_MGNL_HOST + props.renditions.large.link)} alt="" /> : null)}
    </>
}

const TextAndImage = (props: Model) => {

    return <section>

        {(props.image && props.imagePosition === 'above') ?
            (<Image {...props.image} />) : null
        }

        {(props.headline ?
            (props.headlineLevel==='big' ?
                <h1>{props.headline}</h1> :
                (props.headlineLevel==='medium' ?
                    <h3>{props.headline}</h3> :
                    <h6>{props.headline}</h6>)) : null)}
        {props.text ?
            <div dangerouslySetInnerHTML={{__html: props.text}} /> : null}

        {(props.image && props.imagePosition === 'below') ?
            (<Image {...props.image} />) : null
        }

    </section>
}

export default withMgnlProps(TextAndImage, TextAndImageBuilder);
