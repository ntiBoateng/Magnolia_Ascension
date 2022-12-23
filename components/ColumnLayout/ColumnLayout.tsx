import React, {useEffect, useState} from "react";
import Model, { ColumnLayoutBuilder } from "./ColumnLayout.model";
import { EditableArea } from '@magnolia/react-editor';
import { withMgnlProps } from "../WithMgnlProps/withMgnlProps";

const ColumnLayout = (props: Model) => {
    const [columns, setColumns] = useState(['']);
    useEffect(() => {
        setColumns(props.comboSelect.split(':'));
    }, []);

    return (
        <section className="row">
            {columns[0] && <EditableArea className={columns[0]} content={props.column1}/>}
            {columns[1] && <EditableArea className={columns[1]} content={props.column2}/>}
            {columns[2] && <EditableArea className={columns[2]} content={props.column3}/>}
            {columns[3] && <EditableArea className={columns[3]} content={props.column4}/>}
        </section>
    );
}

export default withMgnlProps(ColumnLayout, ColumnLayoutBuilder);
