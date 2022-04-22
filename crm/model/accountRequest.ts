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

import { RequestFile } from './models';

/**
* # The Account Object ### Description The `Account` object is used to represent an account in the remote system. ### Usage Example TODO
*/
export class AccountRequest {
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    'owner'?: string | null;
    /**
    * The account\'s name.
    */
    'name'?: string | null;
    /**
    * The account\'s description.
    */
    'description'?: string | null;
    /**
    * The account\'s industry.
    */
    'industry'?: string | null;
    /**
    * The account\'s website.
    */
    'website'?: string | null;
    /**
    * The account\'s number of employees.
    */
    'number_of_employees'?: number | null;
    /**
    * When the account\'s last activity  occurred.
    */
    'last_activity_at'?: Date | null;
    /**
    * When the third party\'s account was updated.
    */
    'remote_updated_at'?: Date | null;
    /**
    * When the third party\'s account was created.
    */
    'remote_created_at'?: Date | null;
    'integration_params'?: { [key: string]: any; } | null;
    'linked_account_params'?: { [key: string]: any; } | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "remote_id",
            "baseName": "remote_id",
            "type": "string"
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "industry",
            "baseName": "industry",
            "type": "string"
        },
        {
            "name": "website",
            "baseName": "website",
            "type": "string"
        },
        {
            "name": "number_of_employees",
            "baseName": "number_of_employees",
            "type": "number"
        },
        {
            "name": "last_activity_at",
            "baseName": "last_activity_at",
            "type": "Date"
        },
        {
            "name": "remote_updated_at",
            "baseName": "remote_updated_at",
            "type": "Date"
        },
        {
            "name": "remote_created_at",
            "baseName": "remote_created_at",
            "type": "Date"
        },
        {
            "name": "integration_params",
            "baseName": "integration_params",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "linked_account_params",
            "baseName": "linked_account_params",
            "type": "{ [key: string]: any; }"
        }    ];

    static getAttributeTypeMap() {
        return AccountRequest.attributeTypeMap;
    }
}
