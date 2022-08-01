/* tslint:disable */
/* eslint-disable */
/**
 * Merge Accounting API
 * The unified API for building rich integrations with multiple Accounting & Finance platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../../runtime';
import { JSONValue } from '../../merge_json';
import {
    AddressTypeEnum,
    AddressTypeEnumFromJSON,
    AddressTypeEnumFromJSONTyped,
    AddressTypeEnumToJSON,
    CountryEnum,
    CountryEnumFromJSON,
    CountryEnumFromJSONTyped,
    CountryEnumToJSON,
    StateEnum,
    StateEnumFromJSON,
    StateEnumFromJSONTyped,
    StateEnumToJSON,
} from './';


/**
 * # The Address Object
 * ### Description
 * The `Address` object is used to represent a contact's or company's address.
 * 
 * ### Usage Example
 * Fetch from the `GET CompanyInfo` endpoint and view the company's addresses.
 * @export
 * @interface Address
 */
export interface Address {
    /**
     * The address type.
     * @type {AddressTypeEnum}
     * @memberof Address
     */
    type?: AddressTypeEnum | null;
    /**
     * Line 1 of the address's street.
     * @type {string}
     * @memberof Address
     */
    street_1?: string | null;
    /**
     * Line 2 of the address's street.
     * @type {string}
     * @memberof Address
     */
    street_2?: string | null;
    /**
     * The address's city.
     * @type {string}
     * @memberof Address
     */
    city?: string | null;
    /**
     * The address's state.
     * @type {StateEnum}
     * @memberof Address
     */
    state?: StateEnum | null;
    /**
     * The address's country.
     * @type {CountryEnum}
     * @memberof Address
     */
    country?: CountryEnum | null;
    /**
     * The address's zip code.
     * @type {string}
     * @memberof Address
     */
    zip_code?: string | null;
}

export function AddressFromJSON(json: JSONValue): Address | undefined {
    return AddressFromJSONTyped(json);
}

export function AddressFromJSONTyped(json: JSONValue): Address | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'type': !exists(json, 'type') ? undefined : AddressTypeEnumFromJSON(json['type']) as AddressTypeEnum,
        'street_1': !exists(json, 'street_1') ? undefined : json['street_1'],
        'street_2': !exists(json, 'street_2') ? undefined : json['street_2'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'state': !exists(json, 'state') ? undefined : StateEnumFromJSON(json['state']) as StateEnum,
        'country': !exists(json, 'country') ? undefined : CountryEnumFromJSON(json['country']) as CountryEnum,
        'zip_code': !exists(json, 'zip_code') ? undefined : json['zip_code'],
    };
}

export function AddressToJSON(value?: Address): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'type': AddressTypeEnumToJSON(value.type),
        'street_1': value.street_1,
        'street_2': value.street_2,
        'city': value.city,
        'state': StateEnumToJSON(value.state),
        'country': CountryEnumToJSON(value.country),
        'zip_code': value.zip_code,
    };
}
