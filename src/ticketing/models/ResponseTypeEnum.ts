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

/**
 * 
 * @export
 * @enum {string}
 */
export enum ResponseTypeEnum {
    Json = 'JSON',
    Base64Gzip = 'BASE64_GZIP'
}

export function ResponseTypeEnumFromJSON(json: any): ResponseTypeEnum {
    return ResponseTypeEnumFromJSONTyped(json, false);
}

export function ResponseTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseTypeEnum {
    return json as ResponseTypeEnum;
}

export function ResponseTypeEnumToJSON(value?: ResponseTypeEnum | null): any {
    return value as any;
}

