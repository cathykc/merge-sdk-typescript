/* tslint:disable */
/* eslint-disable */
/**
 * Merge HRIS API
 * The unified API for building rich integrations with multiple HR Information System platforms.
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
export enum MaritalStatusEnum {
    Single = 'SINGLE',
    MarriedFilingJointly = 'MARRIED_FILING_JOINTLY',
    MarriedFilingSeparately = 'MARRIED_FILING_SEPARATELY',
    HeadOfHousehold = 'HEAD_OF_HOUSEHOLD',
    QualifyingWidowOrWidowerWithDependentChild = 'QUALIFYING_WIDOW_OR_WIDOWER_WITH_DEPENDENT_CHILD'
}

export function MaritalStatusEnumFromJSON(json: any): MaritalStatusEnum {
    return MaritalStatusEnumFromJSONTyped(json, false);
}

export function MaritalStatusEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): MaritalStatusEnum {
    return json as MaritalStatusEnum;
}

export function MaritalStatusEnumToJSON(value?: MaritalStatusEnum | null): any {
    return value as any;
}
