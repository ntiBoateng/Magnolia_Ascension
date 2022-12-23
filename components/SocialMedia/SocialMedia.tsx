import Model, { SocialMediaBuilder } from "./SocialMedia.model";
import { withMgnlProps } from "../WithMgnlProps/withMgnlProps";
import { UxfCard, UxfCardBody, UxfCardHeader, UxfButton } from '@magnolia-ea/uxf-react';
import {ReactSocialMediaIcons} from 'react-social-media-icons';

const SocialMedia = (props: Model) => {
    const {fb, ig, tw, yt}=props;
    return <section>
        <div className="d-flex flex-row gap-3">
        <ReactSocialMediaIcons borderColor="rgba(0,0,0,0.25)" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" url={"https://"+fb} size="48" />
        <ReactSocialMediaIcons borderColor="rgba(0,0,0,0.25)" icon="instagram" iconColor="red" backgroundColor="black" url={"https://"+ig} size="48" />
        <ReactSocialMediaIcons borderColor="rgba(0,0,0,0.25)" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" url={"https://"+tw} size="48" />
        <ReactSocialMediaIcons borderColor="rgba(0,0,0,0.25)" icon="youtube" iconColor="red" backgroundColor="black" url={"https://"+yt} size="48" />
        </div>
    </section>
}

export default withMgnlProps(SocialMedia, SocialMediaBuilder);
