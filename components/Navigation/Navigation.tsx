import Model, { NavigationBuilder } from "./Navigation.model";
import { withMgnlProps } from "../WithMgnlProps/withMgnlProps";
import { EditableArea } from "@magnolia/react-editor";


const Navigation = (props: Model) => {
  const {color} = props;
  console.log(props);
  
  return (


    <nav style={{backgroundColor: color}} >
      <div className="d-flex flex-row gap-5">
        <div className="col-2"></div>
        <div className="col-1">
          {props["logoArea"] && (
            <EditableArea key="Area" content={props["logoArea"]} />
          )}
        </div>

        <div className="col-1"></div>

      <div className="d-flex flex-row gap-5">
        <div className="py-2">
          {props["homeArea"] && (
            <EditableArea key="Area" content={props["homeArea"]} />
          )}
        </div>
        <div className="py-2">
          {props["aboutArea"] && (
            <EditableArea key="Area" content={props["aboutArea"]} />
          )}
        </div>
        <div className="py-2">
          {props["institutionArea"] && (
            <EditableArea key="Area" content={props["institutionArea"]} />
          )}
        </div>
        <div className="py-2">
          {props["contactArea"] && (
            <EditableArea key="Area" content={props["contactArea"]} />
          )}
        </div>
      </div>
        
      </div>




    </nav>
  );
};

export default withMgnlProps(Navigation, NavigationBuilder);



{/* <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#044945"}}>
    <a className="navbar-brand d-lg-none" href="#">Coding Yaar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbarToggler2"
        aria-controls="myNavbarToggler2" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="myNavbarToggler2">
        <ul className="navbar-nav mx-auto">
            <a className="navbar-brand d-none d-lg-block" href="#">Coding Yaar</a>
            <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
            </li>
        </ul>
    </div>
</nav>
 */}
