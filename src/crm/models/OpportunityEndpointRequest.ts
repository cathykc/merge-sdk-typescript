/* tslint:disable */
/* eslint-disable */
/**
 * Merge CRM API
 * The unified API for building rich integrations with multiple CRM platforms.
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
    OpportunityRequest,
    OpportunityRequestFromJSON,
    OpportunityRequestFromJSONTyped,
    OpportunityRequestToJSON,
} from './';


/**
 * 
 * @export
 * @interface OpportunityEndpointRequest
 */
export interface OpportunityEndpointRequest {
    /**
     * 
     * @type {OpportunityRequest}
     * @memberof OpportunityEndpointRequest
     */
    model: OpportunityRequest;
}

export function OpportunityEndpointRequestFromJSON(json: JSONValue): OpportunityEndpointRequest | undefined {
    return OpportunityEndpointRequestFromJSONTyped(json);
}

export function OpportunityEndpointRequestFromJSONTyped(json: JSONValue): OpportunityEndpointRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'model': OpportunityRequestFromJSON(json['model']) as OpportunityRequest,
    };
}

export function OpportunityEndpointRequestToJSON(value?: OpportunityEndpointRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'model': OpportunityRequestToJSON(value.model),
    };
}
