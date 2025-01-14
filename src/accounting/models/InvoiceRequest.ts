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
    CurrencyEnum,
    CurrencyEnumFromJSON,
    CurrencyEnumFromJSONTyped,
    CurrencyEnumToJSON,
    InvoiceTypeEnum,
    InvoiceTypeEnumFromJSON,
    InvoiceTypeEnumFromJSONTyped,
    InvoiceTypeEnumToJSON,
} from './';


/**
 * # The Invoice Object
 * ### Description
 * The `Invoice` object is used to represent a company's invoices.
 * 
 * ### Usage Example
 * Fetch from the `LIST Invoices` endpoint and view a company's invoices.
 * @export
 * @interface InvoiceRequest
 */
export interface InvoiceRequest {
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof InvoiceRequest
     */
    remote_id?: string | null;
    /**
     * The invoice's type.
     * @type {InvoiceTypeEnum}
     * @memberof InvoiceRequest
     */
    type?: InvoiceTypeEnum | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceRequest
     */
    contact?: string | null;
    /**
     * The invoice's number.
     * @type {string}
     * @memberof InvoiceRequest
     */
    number?: string | null;
    /**
     * The invoice's issue date.
     * @type {Date}
     * @memberof InvoiceRequest
     */
    issue_date?: Date | null;
    /**
     * The invoice's due date.
     * @type {Date}
     * @memberof InvoiceRequest
     */
    due_date?: Date | null;
    /**
     * The invoice's paid date.
     * @type {Date}
     * @memberof InvoiceRequest
     */
    paid_on_date?: Date | null;
    /**
     * The invoice's private note.
     * @type {string}
     * @memberof InvoiceRequest
     */
    memo?: string | null;
    /**
     * The invoice's currency.
     * @type {CurrencyEnum}
     * @memberof InvoiceRequest
     */
    currency?: CurrencyEnum | null;
    /**
     * The invoice's total discount.
     * @type {number}
     * @memberof InvoiceRequest
     */
    total_discount?: number | null;
    /**
     * The invoice's sub-total.
     * @type {number}
     * @memberof InvoiceRequest
     */
    sub_total?: number | null;
    /**
     * The invoice's total tax amount.
     * @type {number}
     * @memberof InvoiceRequest
     */
    total_tax_amount?: number | null;
    /**
     * The invoice's total amount.
     * @type {number}
     * @memberof InvoiceRequest
     */
    total_amount?: number | null;
    /**
     * The invoice's remaining balance.
     * @type {number}
     * @memberof InvoiceRequest
     */
    balance?: number | null;
    /**
     * When the third party's invoice entry was updated.
     * @type {Date}
     * @memberof InvoiceRequest
     */
    remote_updated_at?: Date | null;
    /**
     * Array of `Payment` object IDs.
     * @type {Array<string>}
     * @memberof InvoiceRequest
     */
    payments?: Array<string>;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof InvoiceRequest
     */
    integration_params?: { [key: string]: any; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof InvoiceRequest
     */
    linked_account_params?: { [key: string]: any; } | null;
}

export function InvoiceRequestFromJSON(json: JSONValue): InvoiceRequest | undefined {
    return InvoiceRequestFromJSONTyped(json);
}

export function InvoiceRequestFromJSONTyped(json: JSONValue): InvoiceRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'type': !exists(json, 'type') ? undefined : InvoiceTypeEnumFromJSON(json['type']) as InvoiceTypeEnum,
        'contact': !exists(json, 'contact') ? undefined : json['contact'],
        'number': !exists(json, 'number') ? undefined : json['number'],
        'issue_date': !exists(json, 'issue_date') ? undefined : (json['issue_date'] === null ? null : new Date(json['issue_date'])),
        'due_date': !exists(json, 'due_date') ? undefined : (json['due_date'] === null ? null : new Date(json['due_date'])),
        'paid_on_date': !exists(json, 'paid_on_date') ? undefined : (json['paid_on_date'] === null ? null : new Date(json['paid_on_date'])),
        'memo': !exists(json, 'memo') ? undefined : json['memo'],
        'currency': !exists(json, 'currency') ? undefined : CurrencyEnumFromJSON(json['currency']) as CurrencyEnum,
        'total_discount': !exists(json, 'total_discount') ? undefined : json['total_discount'],
        'sub_total': !exists(json, 'sub_total') ? undefined : json['sub_total'],
        'total_tax_amount': !exists(json, 'total_tax_amount') ? undefined : json['total_tax_amount'],
        'total_amount': !exists(json, 'total_amount') ? undefined : json['total_amount'],
        'balance': !exists(json, 'balance') ? undefined : json['balance'],
        'remote_updated_at': !exists(json, 'remote_updated_at') ? undefined : (json['remote_updated_at'] === null ? null : new Date(json['remote_updated_at'])),
        'payments': !exists(json, 'payments') ? undefined : json['payments'],
        'integration_params': !exists(json, 'integration_params') ? undefined : json['integration_params'],
        'linked_account_params': !exists(json, 'linked_account_params') ? undefined : json['linked_account_params'],
    };
}

export function InvoiceRequestToJSON(value?: InvoiceRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'type': InvoiceTypeEnumToJSON(value.type),
        'contact': value.contact,
        'number': value.number,
        'issue_date': value.issue_date === undefined ? undefined : (value.issue_date === null ? null : value.issue_date.toISOString()),
        'due_date': value.due_date === undefined ? undefined : (value.due_date === null ? null : value.due_date.toISOString()),
        'paid_on_date': value.paid_on_date === undefined ? undefined : (value.paid_on_date === null ? null : value.paid_on_date.toISOString()),
        'memo': value.memo,
        'currency': CurrencyEnumToJSON(value.currency),
        'total_discount': value.total_discount,
        'sub_total': value.sub_total,
        'total_tax_amount': value.total_tax_amount,
        'total_amount': value.total_amount,
        'balance': value.balance,
        'remote_updated_at': value.remote_updated_at === undefined ? undefined : (value.remote_updated_at === null ? null : value.remote_updated_at.toISOString()),
        'payments': value.payments,
        'integration_params': value.integration_params,
        'linked_account_params': value.linked_account_params,
    };
}

