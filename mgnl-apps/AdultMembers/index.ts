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



export enum genderEnum {
  Male = 'Male',
  Female = 'Female',
}

export enum regionEnum {
  Ahafo = 'Ahafo',
  Ashanti = 'Ashanti',
  Central = 'Central',
  Northern = 'Northern',
  GreaterAccra = 'GreaterAccra',
  WesternNorth = 'WesternNorth',
  UpperEast = 'UpperEast',
  UpperWest = 'UpperWest',
  Western = 'Western',
  Volta = 'Volta',
  NorthEast = 'NorthEast',
  Savannah = 'Savannah',
  Oti = 'Oti',
  Eastern = 'Eastern',
  BonoAhafo = 'BonoAhafo',
}

export class AdultMembersModel {
  id: any;
  path: any;
  formNumber: string;
  firstName: string;
  surname: string;
  dob: string;
  gender: genderEnum;
  homeTown: string;
  region: regionEnum;

  constructor(props: any) {
    this.formNumber = props.formNumber;
    this.firstName = props.firstName;
    this.surname = props.surname;
    this.dob = props.dob;
    this.gender = props.gender;
    this.homeTown = props.homeTown;
    this.region = props.region;
  }
}

export default {
  listAll: async (limit = 10): Promise<Array<AdultMembersModel>> => {
    const baseApi = getAPIBasePath();
    const response = await axios.get(`${baseApi}/.rest/delivery/adultmembers/?limit=${limit}`);
    const results = transformResults(response?.data?.results || []);

    // @ts-ignore
    results.forEach((result) => {
    });
    return results;
  },

  list: async (query = ''): Promise<Array<AdultMembersModel>> => {
    const baseApi = getAPIBasePath();
    const response = await axios.get(`${baseApi}/.rest/delivery/adultmembers/?${query}`);
    const results = transformResults(response?.data?.results || []);

    // @ts-ignore
    results.forEach((result) => {
    });
    return results;
  }
}

