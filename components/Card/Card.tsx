import Model, { CardBuilder } from "./Card.model";
import { withMgnlProps } from "../WithMgnlProps/withMgnlProps";
import React, { useEffect, useState } from "react";
import {
  UxfCard,
  UxfCardBody,
  UxfCardHeader,
  UxfButton,
  UxfCardImage,
} from "@magnolia-ea/uxf-react";
import AdultMembers, { AdultMembersModel } from "../../mgnl-apps/AdultMembers";

const Card = (props: Model) => {
  const [data, setData] = useState<Array<AdultMembersModel>>([]);
  console.log(data);
  
  useEffect(() => {
    AdultMembers.listAll().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <section className="px-5 item-center">
    <div className="">
      {data &&
        data.map((tour) => (
          <div key={tour.id} >
           	<div className="col-md-4 mt-4 d-flex flex-row gap-3">
    		    <div className="card profile-card-5">
    		        <div className="card-img-block">
    		            <img className="card-img-top" src="https://images.unsplash.com/photo-1517832207067-4db24a2ae47c" alt="Card image cap" />
    		        </div>
                    <div className="card-body pt-2">
                    <h5 className="card-title text-center">{tour.firstName}{" "}{tour.surname}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                  </div>
                </div>

    		</div>
          </div>
        ))}
    </div>
  </section>
  );
};

export default withMgnlProps(Card, CardBuilder);
