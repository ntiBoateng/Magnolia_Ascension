import Model, { LogoImageBuilder } from "./LogoImage.model";
import { withMgnlProps } from "../WithMgnlProps/withMgnlProps";
import { UxfCard, UxfCardBody, UxfCardHeader, UxfButton } from '@magnolia-ea/uxf-react';

const LogoImage = (props: Model) => {
    return <section>
      <a href={props.pageLinks}>  <img src={process.env.NEXT_PUBLIC_MGNL_HOST + props.image["link"]} className="img-fluid"  alt="" /></a>
    </section>
}

export default withMgnlProps(LogoImage, LogoImageBuilder);
