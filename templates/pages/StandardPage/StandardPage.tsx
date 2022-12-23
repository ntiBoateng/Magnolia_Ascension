import React from 'react';
import Model from "./StandardPage.model";
import { EditableArea } from '@magnolia/react-editor';

const StandardPage = (props:Model) => {
const { main } = props;

    return main && <EditableArea className="Area" content={main} />
}

export default StandardPage;
