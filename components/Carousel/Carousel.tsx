import Model, { CarouselBuilder } from "./Carousel.model";
import { withMgnlProps } from "../WithMgnlProps/withMgnlProps";
import { UxfCard, UxfCardBody, UxfCardHeader, UxfButton, UxfCarouselItem, UxfCarousel } from '@magnolia-ea/uxf-react';

const Carousel = (props: Model) => {
    console.log(props);
    
    return <section>
        <UxfCarousel controls indicators>
  <UxfCarouselItem active>
    <img src={process.env.NEXT_PUBLIC_MGNL_HOST + props.image1["link"]} className="d-block w-100 img-responsive" alt="..." style={{height: "730px"}} />
    <div className="carousel-caption d-none d-md-block">
    <h5 className="h1">{props.slideLabel}</h5>
      <p>{props.slideDes}</p>
    </div>
  </UxfCarouselItem>
  
  <UxfCarouselItem>
    <img src={process.env.NEXT_PUBLIC_MGNL_HOST + props.image2["link"]} className="d-block w-100 img-responsive" alt="..."  style={{height: "730px"}} />
    <div className="carousel-caption d-none d-md-block">
      <h5 className="h1">{props.slideLabel2}</h5>
      <p className="h3">{props.slideDes2}</p>
    </div>
  </UxfCarouselItem>
  
  <UxfCarouselItem>
    <img src={process.env.NEXT_PUBLIC_MGNL_HOST + props.image3["link"]} className="d-block w-100 img-responsive" alt="..." style={{height: "730px"}} />
    <div className="carousel-caption d-none d-md-block">
    <h5 className="h1">{props.slideLabel3}</h5>
      <p>{props.slideDes3}</p>
    </div>
  </UxfCarouselItem>
</UxfCarousel>

    </section>
}

export default withMgnlProps(Carousel, CarouselBuilder);
