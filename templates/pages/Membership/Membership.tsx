import Head from 'next/head';
import Model from "./Membership.model";
import { EditableArea } from '@magnolia/react-editor';

const Membership = (props: Model) => {
    const { main, title, navigation, footer } = props;
    return <div>
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title} />
        </Head>
        <div className="">{navigation && <EditableArea className="Area" content={navigation} />}</div>
        <div> {main && <EditableArea className="Area" content={main} />}</div>
        <div style={{backgroundColor: "#64686b"}} > {footer && <EditableArea className="Area" content={footer} />}</div>
    </div>
}

export default Membership;
