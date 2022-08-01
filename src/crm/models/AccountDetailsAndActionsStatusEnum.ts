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

/**
 * 
 * @export
 * @enum {string}
 */
export enum AccountDetailsAndActionsStatusEnum {
    Complete = 'COMPLETE',
    Incomplete = 'INCOMPLETE',
    RelinkNeeded = 'RELINK_NEEDED'
}

export function AccountDetailsAndActionsStatusEnumFromJSON(json: any): AccountDetailsAndActionsStatusEnum {
    return AccountDetailsAndActionsStatusEnumFromJSONTyped(json, false);
}

export function AccountDetailsAndActionsStatusEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountDetailsAndActionsStatusEnum {
    return json as AccountDetailsAndActionsStatusEnum;
}

export function AccountDetailsAndActionsStatusEnumToJSON(value?: AccountDetailsAndActionsStatusEnum | null): any {
    return value as any;
}
