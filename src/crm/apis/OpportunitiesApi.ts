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
    MetaResponse,
    MetaResponseFromJSON,
    MetaResponseToJSON,
    Opportunity,
    OpportunityFromJSON,
    OpportunityToJSON,
    OpportunityEndpointRequest,
    OpportunityEndpointRequestFromJSON,
    OpportunityEndpointRequestToJSON,
    OpportunityResponse,
    OpportunityResponseFromJSON,
    OpportunityResponseToJSON,
    
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

export interface OpportunitiesCreateRequest {
    opportunityEndpointRequest: OpportunityEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface OpportunitiesListRequest {
    accountId?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    ownerId?: string;
    pageSize?: number;
    remoteFields?: OpportunitiesListRemoteFieldsEnum;
    remoteId?: string | null;
    stageId?: string;
    status?: OpportunitiesListStatusEnum;
}

export interface OpportunitiesRetrieveRequest {
    id: string;
    includeRemoteData?: boolean;
    remoteFields?: OpportunitiesRetrieveRemoteFieldsEnum;
}

/**
 * 
 */
export class OpportunitiesApi extends runtime.BaseAPI {

    /**
     * Creates an `Opportunity` object with the given values.
     */
    async opportunitiesCreateRaw(requestParameters: OpportunitiesCreateRequest): Promise<runtime.ApiResponse<OpportunityResponse | undefined>> {
        if (requestParameters.opportunityEndpointRequest === null || requestParameters.opportunityEndpointRequest === undefined) {
            throw new runtime.RequiredError('opportunityEndpointRequest','Required parameter requestParameters.opportunityEndpointRequest was null or undefined when calling opportunitiesCreate.');
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
            path: `/crm/v1/opportunities`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OpportunityEndpointRequestToJSON(requestParameters.opportunityEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OpportunityResponseFromJSON(jsonValue));
    }

    /**
     * Creates an `Opportunity` object with the given values.
     */
    async opportunitiesCreate(requestParameters: OpportunitiesCreateRequest): Promise<OpportunityResponse | undefined> {
        const response = await this.opportunitiesCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `Opportunity` objects.
     */
    async opportunitiesListRaw(requestParameters: OpportunitiesListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Opportunity> | undefined>> {
        const queryParameters: any = {};

        if (requestParameters.accountId !== undefined) {
            queryParameters['account_id'] = requestParameters.accountId;
        }

        if (requestParameters.createdAfter !== undefined) {
            queryParameters['created_after'] = (requestParameters.createdAfter as any).toISOString();
        }

        if (requestParameters.createdBefore !== undefined) {
            queryParameters['created_before'] = (requestParameters.createdBefore as any).toISOString();
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
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

        if (requestParameters.remoteFields !== undefined) {
            queryParameters['remote_fields'] = requestParameters.remoteFields;
        }

        if (requestParameters.remoteId !== undefined) {
            queryParameters['remote_id'] = requestParameters.remoteId;
        }

        if (requestParameters.stageId !== undefined) {
            queryParameters['stage_id'] = requestParameters.stageId;
        }

        if (requestParameters.status !== undefined) {
            queryParameters['status'] = requestParameters.status;
        }

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/crm/v1/opportunities`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of `Opportunity` objects.
     */
    async opportunitiesList(requestParameters: OpportunitiesListRequest): Promise<MergePaginatedResponse<Opportunity> | undefined> {
        const response = await this.opportunitiesListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `Opportunity` POSTs.
     */
    async opportunitiesMetaPostRetrieveRaw(): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/crm/v1/opportunities/meta/post`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `Opportunity` POSTs.
     */
    async opportunitiesMetaPostRetrieve(): Promise<MetaResponse | undefined> {
        const response = await this.opportunitiesMetaPostRetrieveRaw();
        return await response.value();
    }

    /**
     * Returns an `Opportunity` object with the given `id`.
     */
    async opportunitiesRetrieveRaw(requestParameters: OpportunitiesRetrieveRequest): Promise<runtime.ApiResponse<Opportunity | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling opportunitiesRetrieve.');
        }

        const queryParameters: any = {};

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }

        if (requestParameters.remoteFields !== undefined) {
            queryParameters['remote_fields'] = requestParameters.remoteFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/crm/v1/opportunities/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OpportunityFromJSON(jsonValue));
    }

    /**
     * Returns an `Opportunity` object with the given `id`.
     */
    async opportunitiesRetrieve(requestParameters: OpportunitiesRetrieveRequest): Promise<Opportunity | undefined> {
        const response = await this.opportunitiesRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum OpportunitiesListRemoteFieldsEnum {
    Status = 'status'
}
/**
    * @export
    * @enum {string}
    */
export enum OpportunitiesListStatusEnum {
    Lost = 'LOST',
    Open = 'OPEN',
    Won = 'WON'
}
/**
    * @export
    * @enum {string}
    */
export enum OpportunitiesRetrieveRemoteFieldsEnum {
    Status = 'status'
}