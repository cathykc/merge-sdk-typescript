/**
 * Merge ATS API
 * The unified API for building rich integrations with multiple Applicant Tracking System platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class LinkedAccountStatus {
    'linked_account_status': string;
    'can_make_request': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "linked_account_status",
            "baseName": "linked_account_status",
            "type": "string"
        },
        {
            "name": "can_make_request",
            "baseName": "can_make_request",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return LinkedAccountStatus.attributeTypeMap;
    }
}
