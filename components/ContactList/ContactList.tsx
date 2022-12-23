import Model, { ContactListBuilder } from "./ContactList.model";
import React, { useEffect, useState } from "react";
import { withMgnlProps } from "../WithMgnlProps/withMgnlProps";
import Contact, { ContactModel } from "../../mgnl-apps/Contact";
import {
  UxfCard,
  UxfCardBody,
  UxfCardHeader,
  UxfButton,
  UxfCardImage,
} from "@magnolia-ea/uxf-react";

const ContactList = (props: Model) => {
  const [data, setData] = useState<Array<ContactModel>>([]);
  useEffect(() => {
    Contact.listAll().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <section className="px-5 item-center">
      <div className="d-flex flex-row gap-5">
        {data &&
          data.map((tour) => (
            <div key={tour.id} >
              <UxfCard>
                <UxfCardImage
                zoomin
                  slot="top"
                  src="https://source.unsplash.com/random/286x180"
                ></UxfCardImage>
                <UxfCardBody>
                  <h2>{tour.title}</h2>
                </UxfCardBody>
              </UxfCard>
            </div>
          ))}
      </div>
    </section>
  );
};

export default withMgnlProps(ContactList, ContactListBuilder);
