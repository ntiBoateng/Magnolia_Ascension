import Model, { TourListBuilder } from "./TourList.model";
import React, { useEffect, useState } from 'react';
import { withMgnlProps } from "../WithMgnlProps/withMgnlProps";
import Tours, { ToursModel } from "../../mgnl-apps/Tours"
import { UxfCard, UxfCardBody, UxfCardHeader, UxfButton } from '@magnolia-ea/uxf-react';

const TourList = (props: Model) => {

    const [data, setData] = useState<Array<ToursModel>>([]);
    useEffect(()=>{
        Tours.listAll().then(res=>{
            setData(res)
        })
    },[])

    return <section>
        <div>
            {data && data.map(tour =>
               <div key={tour.id}>
                    <h2>{tour.title}</h2>
               </div> 
                )}
        </div>
    </section>
}

export default withMgnlProps(TourList, TourListBuilder);
