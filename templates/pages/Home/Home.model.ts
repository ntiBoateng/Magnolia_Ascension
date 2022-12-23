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
import Asset, { Rendition } from '../../../lib/MagnoliaAsset';
import { transformNode, transformResults } from '../../../lib/MagnoliaPropertyHelper';


export default interface Home {
  navigation: any;
  main: any;
  footer: any;
  title:string;
}
export class HomeBuilder{
  static build(props:any) {
    props = transformNode({...props});
    class HomeInstance implements Home {
      title:string;
        navigation: any;
        main: any;
        footer: any;

      constructor(props:any) {
        Object.assign(this, props);

      }
    }
    return new HomeInstance(props);
  }
}
