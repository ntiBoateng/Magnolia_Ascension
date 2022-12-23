import Model, { FooterBuilder } from "./Footer.model";
import { withMgnlProps } from "../WithMgnlProps/withMgnlProps";
import {
  UxfCard,
  UxfCardBody,
  UxfCardHeader,
  UxfButton,
} from "@magnolia-ea/uxf-react";
import { EditableArea } from "@magnolia/react-editor";

const Footer = (props: Model) => {
  const { footer1, footer2, footer3, footer4 } = props;
  return (
    <section>
      <div className="d-flex flex-row px-5 py-5">
        <div className="col-3">
          <div>
            {" "}
            {footer1 && <EditableArea className="Area" content={footer1} />}
          </div>
        </div>
        <div className="col-3">
          <div>
            {" "}
            {footer2 && <EditableArea className="Area" content={footer2} />}
          </div>
        </div>
        <div className="col-3">
          <div className="py-4">
            <p className="h3 text-white">MAIN MENU</p>
            {footer3 && <EditableArea className="Area py-4" content={footer3} />}
          </div>
        </div>
        <div className="col-3">
          <div className="py-4">
          <p className="h3 text-white">QUICK LINKS</p>
            {footer4 && <EditableArea className="Area" content={footer4} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default withMgnlProps(Footer, FooterBuilder);
