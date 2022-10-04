/* tslint:disable */
/* eslint-disable */
/**
 * Merge Ticketing API
 * The unified API for building rich integrations with multiple Ticketing platforms.
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
    PatchedTicketRequest,
    PatchedTicketRequestFromJSON,
    PatchedTicketRequestFromJSONTyped,
    PatchedTicketRequestToJSON,
} from './';


/**
 * 
 * @export
 * @interface PatchedTicketEndpointRequest
 */
export interface PatchedTicketEndpointRequest {
    /**
     * 
     * @type {PatchedTicketRequest}
     * @memberof PatchedTicketEndpointRequest
     */
    model: PatchedTicketRequest;
}

export function PatchedTicketEndpointRequestFromJSON(json: JSONValue): PatchedTicketEndpointRequest | undefined {
    return PatchedTicketEndpointRequestFromJSONTyped(json);
}

export function PatchedTicketEndpointRequestFromJSONTyped(json: JSONValue): PatchedTicketEndpointRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'model': PatchedTicketRequestFromJSON(json['model']) as PatchedTicketRequest,
    };
}

export function PatchedTicketEndpointRequestToJSON(value?: PatchedTicketEndpointRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'model': PatchedTicketRequestToJSON(value.model),
    };
}
