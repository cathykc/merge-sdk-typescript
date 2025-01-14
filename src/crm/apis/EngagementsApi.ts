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
    Engagement,
    EngagementFromJSON,
    EngagementToJSON,
    EngagementEndpointRequest,
    EngagementEndpointRequestFromJSON,
    EngagementEndpointRequestToJSON,
    EngagementResponse,
    EngagementResponseFromJSON,
    EngagementResponseToJSON,
    MetaResponse,
    MetaResponseFromJSON,
    MetaResponseToJSON,
    
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

export interface EngagementsCreateRequest {
    engagementEndpointRequest: EngagementEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface EngagementsListRequest {
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    expand?: EngagementsListExpandEnum;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    remoteId?: string | null;
}

export interface EngagementsRetrieveRequest {
    id: string;
    expand?: EngagementsRetrieveExpandEnum;
    includeRemoteData?: boolean;
}

/**
 * 
 */
export class EngagementsApi extends runtime.BaseAPI {

    /**
     * Creates an `Engagement` object with the given values.
     */
    async engagementsCreateRaw(requestParameters: EngagementsCreateRequest): Promise<runtime.ApiResponse<EngagementResponse | undefined>> {
        if (requestParameters.engagementEndpointRequest === null || requestParameters.engagementEndpointRequest === undefined) {
            throw new runtime.RequiredError('engagementEndpointRequest','Required parameter requestParameters.engagementEndpointRequest was null or undefined when calling engagementsCreate.');
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
            path: `/crm/v1/engagements`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EngagementEndpointRequestToJSON(requestParameters.engagementEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EngagementResponseFromJSON(jsonValue));
    }

    /**
     * Creates an `Engagement` object with the given values.
     */
    async engagementsCreate(requestParameters: EngagementsCreateRequest): Promise<EngagementResponse | undefined> {
        const response = await this.engagementsCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `Engagement` objects.
     */
    async engagementsListRaw(requestParameters: EngagementsListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Engagement> | undefined>> {
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
            path: `/crm/v1/engagements`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of `Engagement` objects.
     */
    async engagementsList(requestParameters: EngagementsListRequest): Promise<MergePaginatedResponse<Engagement> | undefined> {
        const response = await this.engagementsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `Engagement` POSTs.
     */
    async engagementsMetaPostRetrieveRaw(): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/crm/v1/engagements/meta/post`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `Engagement` POSTs.
     */
    async engagementsMetaPostRetrieve(): Promise<MetaResponse | undefined> {
        const response = await this.engagementsMetaPostRetrieveRaw();
        return await response.value();
    }

    /**
     * Returns an `Engagement` object with the given `id`.
     */
    async engagementsRetrieveRaw(requestParameters: EngagementsRetrieveRequest): Promise<runtime.ApiResponse<Engagement | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling engagementsRetrieve.');
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
            path: `/crm/v1/engagements/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EngagementFromJSON(jsonValue));
    }

    /**
     * Returns an `Engagement` object with the given `id`.
     */
    async engagementsRetrieve(requestParameters: EngagementsRetrieveRequest): Promise<Engagement | undefined> {
        const response = await this.engagementsRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum EngagementsListExpandEnum {
    Account = 'account',
    AccountengagementType = 'account,engagement_type',
    EngagementType = 'engagement_type',
    Owner = 'owner',
    Owneraccount = 'owner,account',
    OwneraccountengagementType = 'owner,account,engagement_type',
    OwnerengagementType = 'owner,engagement_type'
}
/**
* @export
* @enum {string}
*/
export enum EngagementsRetrieveExpandEnum {
    Account = 'account',
    AccountengagementType = 'account,engagement_type',
    EngagementType = 'engagement_type',
    Owner = 'owner',
    Owneraccount = 'owner,account',
    OwneraccountengagementType = 'owner,account,engagement_type',
    OwnerengagementType = 'owner,engagement_type'
}
