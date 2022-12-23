// @ts-nocheck
/**
 * This file Copyright (c) 2010-2021 Magnolia International
 * Ltd.  (http://www.magnolia-cms.com). All rights reserved.
 *
 *
 * This program and the accompanying materials are made
 * available under the terms of the Magnolia Network Agreement
 * which accompanies this distribution, and is available at
 * http://www.magnolia-cms.com/mna.html
 *
 * Any modifications to this file must keep this entire header
 * intact.
 *
 */
// Auto generated file, don't change manually
import Asset, { Rendition } from '../../lib/MagnoliaAsset';
import { transformNode, transformResults } from '../../lib/MagnoliaPropertyHelper';


export default interface Carousel {
  image1:Asset;
  image2:Asset;
  image3:Asset;
  slideLabel:string;
  slideDes:string;
  slideLabel2:string;
  slideDes2:string;
  slideLabel3:string;
  slideDes3:string;
}
export class CarouselBuilder{
  static build(props:any) {
    props = transformNode({...props});
    class CarouselInstance implements Carousel {
      image1:Asset;
      image2:Asset;
      image3:Asset;
      slideLabel:string;
      slideDes:string;
      slideLabel2:string;
      slideDes2:string;
      slideLabel3:string;
      slideDes3:string;

      constructor(props:any) {
        Object.assign(this, props);

              if(this.image1) {
                this.image1 = {
                  ...this.image1,
                  link: this.image1['@link'],
                  name: this.image1['@name'],
                  path: this.image1['@path'],
                };
              } else {
                this.image1 = null as any;
              }
              if(this.image2) {
                this.image2 = {
                  ...this.image2,
                  link: this.image2['@link'],
                  name: this.image2['@name'],
                  path: this.image2['@path'],
                };
              } else {
                this.image2 = null as any;
              }
              if(this.image3) {
                this.image3 = {
                  ...this.image3,
                  link: this.image3['@link'],
                  name: this.image3['@name'],
                  path: this.image3['@path'],
                };
              } else {
                this.image3 = null as any;
              }
      }
    }
    return new CarouselInstance(props);
  }
}
