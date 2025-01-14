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


import * as runtime from '../../runtime';
import {
    Account,
    AccountFromJSON,
    AccountToJSON,
    CRMAccountEndpointRequest,
    CRMAccountEndpointRequestFromJSON,
    CRMAccountEndpointRequestToJSON,
    CRMAccountResponse,
    CRMAccountResponseFromJSON,
    CRMAccountResponseToJSON,
    MetaResponse,
    MetaResponseFromJSON,
    MetaResponseToJSON,
    
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

export interface AccountsCreateRequest {
    cRMAccountEndpointRequest: CRMAccountEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface AccountsListRequest {
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    expand?: AccountsListExpandEnum;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    ownerId?: string;
    pageSize?: number;
    remoteId?: string | null;
}

export interface AccountsRetrieveRequest {
    id: string;
    expand?: AccountsRetrieveExpandEnum;
    includeRemoteData?: boolean;
}

/**
 * 
 */
export class AccountsApi extends runtime.BaseAPI {

    /**
     * Creates an `Account` object with the given values.
     */
    async accountsCreateRaw(requestParameters: AccountsCreateRequest): Promise<runtime.ApiResponse<CRMAccountResponse | undefined>> {
        if (requestParameters.cRMAccountEndpointRequest === null || requestParameters.cRMAccountEndpointRequest === undefined) {
            throw new runtime.RequiredError('cRMAccountEndpointRequest','Required parameter requestParameters.cRMAccountEndpointRequest was null or undefined when calling accountsCreate.');
        }

        const queryParameters: any = {};

        if (requestParameters.isDebugMode !== undefined) {
            queryParameters['is_debug_mode'] = requestParameters.isDebugMode;
        }

        if (requestParameters.runAsync !== undefined) {
            queryParameters['run_async'] = requestParameters.runAsync;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/crm/v1/accounts`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CRMAccountEndpointRequestToJSON(requestParameters.cRMAccountEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CRMAccountResponseFromJSON(jsonValue));
    }

    /**
     * Creates an `Account` object with the given values.
     */
    async accountsCreate(requestParameters: AccountsCreateRequest): Promise<CRMAccountResponse | undefined> {
        const response = await this.accountsCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `Account` objects.
     */
    async accountsListRaw(requestParameters: AccountsListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Account> | undefined>> {
        const queryParameters: any = {};

        if (requestParameters.createdAfter !== undefined) {
            queryParameters['created_after'] = (requestParameters.createdAfter as any).toISOString();
        }

        if (requestParameters.createdBefore !== undefined) {
            queryParameters['created_before'] = (requestParameters.createdBefore as any).toISOString();
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.expand !== undefined) {
            queryParameters['expand'] = requestParameters.expand;
        }

        if (requestParameters.includeDeletedData !== undefined) {
            queryParameters['include_deleted_data'] = requestParameters.includeDeletedData;
        }

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }

        if (requestParameters.modifiedAfter !== undefined) {
            queryParameters['modified_after'] = (requestParameters.modifiedAfter as any).toISOString();
        }

        if (requestParameters.modifiedBefore !== undefined) {
            queryParameters['modified_before'] = (requestParameters.modifiedBefore as any).toISOString();
        }

        if (requestParameters.ownerId !== undefined) {
            queryParameters['owner_id'] = requestParameters.ownerId;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page_size'] = requestParameters.pageSize;
        }

        if (requestParameters.remoteId !== undefined) {
            queryParameters['remote_id'] = requestParameters.remoteId;
        }

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/crm/v1/accounts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of `Account` objects.
     */
    async accountsList(requestParameters: AccountsListRequest): Promise<MergePaginatedResponse<Account> | undefined> {
        const response = await this.accountsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `CRMAccount` POSTs.
     */
    async accountsMetaPostRetrieveRaw(): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/crm/v1/accounts/meta/post`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `CRMAccount` POSTs.
     */
    async accountsMetaPostRetrieve(): Promise<MetaResponse | undefined> {
        const response = await this.accountsMetaPostRetrieveRaw();
        return await response.value();
    }

    /**
     * Returns an `Account` object with the given `id`.
     */
    async accountsRetrieveRaw(requestParameters: AccountsRetrieveRequest): Promise<runtime.ApiResponse<Account | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling accountsRetrieve.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand !== undefined) {
            queryParameters['expand'] = requestParameters.expand;
        }

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/crm/v1/accounts/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountFromJSON(jsonValue));
    }

    /**
     * Returns an `Account` object with the given `id`.
     */
    async accountsRetrieve(requestParameters: AccountsRetrieveRequest): Promise<Account | undefined> {
        const response = await this.accountsRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum AccountsListExpandEnum {
    Owner = 'owner'
}
/**
* @export
* @enum {string}
*/
export enum AccountsRetrieveExpandEnum {
    Owner = 'owner'
}
