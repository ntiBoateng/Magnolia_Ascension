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

import axios from 'axios';
import Asset, { Rendition } from '../../lib/MagnoliaAsset';
import { transformNode, transformResults } from '../../lib/MagnoliaPropertyHelper';
import {getAPIBasePath} from "../../helpers/AppHelpers";


export class contactDataModel {
  email: string;
  phoneNumber: string;
  addresses: Array<addressModel>;

  constructor(props: any) {
    this.email = props.email;
    this.phoneNumber = props.phoneNumber;
    this.addresses = props.addresses;
  }
}
export class addressModel {
  street: string;
  city: string;
  postalCode: string;
  country: string;

  constructor(props: any) {
    this.street = props.street;
    this.city = props.city;
    this.postalCode = props.postalCode;
    this.country = props.country;
  }
}

export enum exampleDropdownEnum {
  zoomin = 'zoomin',
  cinematic = 'cinematic',
}

export class ToursModel {
  id: any;
  path: any;
  title: string;
  images: Array<Asset>;
  text: Array<string>;
  exampleDropdown: exampleDropdownEnum;
  contact: contactDataModel;

  constructor(props: any) {
    this.title = props.title;
    this.images = props.images;
    this.text = props.text;
    this.exampleDropdown = props.exampleDropdown;
    this.contact = props.contact;
  }
}

export default {
  listAll: async (limit = 10): Promise<Array<ToursModel>> => {
    const baseApi = getAPIBasePath();
    const response = await axios.get(`${baseApi}/.rest/delivery/tours/?limit=${limit}`);
    const results = transformResults(response?.data?.results || []);

    // @ts-ignore
    results.forEach((result) => {
    });
    return results;
  },

  list: async (query = ''): Promise<Array<ToursModel>> => {
    const baseApi = getAPIBasePath();
    const response = await axios.get(`${baseApi}/.rest/delivery/tours/?${query}`);
    const results = transformResults(response?.data?.results || []);

    // @ts-ignore
    results.forEach((result) => {
    });
    return results;
  }
}

