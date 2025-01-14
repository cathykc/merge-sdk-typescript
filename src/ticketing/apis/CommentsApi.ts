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


import * as runtime from '../../runtime';
import {
    Comment,
    CommentFromJSON,
    CommentToJSON,
    CommentEndpointRequest,
    CommentEndpointRequestFromJSON,
    CommentEndpointRequestToJSON,
    CommentResponse,
    CommentResponseFromJSON,
    CommentResponseToJSON,
    MetaResponse,
    MetaResponseFromJSON,
    MetaResponseToJSON,
    
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

export interface CommentsCreateRequest {
    commentEndpointRequest: CommentEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface CommentsListRequest {
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    expand?: CommentsListExpandEnum;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    remoteId?: string | null;
    ticketId?: string;
}

export interface CommentsRetrieveRequest {
    id: string;
    expand?: CommentsRetrieveExpandEnum;
    includeRemoteData?: boolean;
}

/**
 * 
 */
export class CommentsApi extends runtime.BaseAPI {

    /**
     * Creates a `Comment` object with the given values.
     */
    async commentsCreateRaw(requestParameters: CommentsCreateRequest): Promise<runtime.ApiResponse<CommentResponse | undefined>> {
        if (requestParameters.commentEndpointRequest === null || requestParameters.commentEndpointRequest === undefined) {
            throw new runtime.RequiredError('commentEndpointRequest','Required parameter requestParameters.commentEndpointRequest was null or undefined when calling commentsCreate.');
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
            path: `/ticketing/v1/comments`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CommentEndpointRequestToJSON(requestParameters.commentEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CommentResponseFromJSON(jsonValue));
    }

    /**
     * Creates a `Comment` object with the given values.
     */
    async commentsCreate(requestParameters: CommentsCreateRequest): Promise<CommentResponse | undefined> {
        const response = await this.commentsCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `Comment` objects.
     */
    async commentsListRaw(requestParameters: CommentsListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Comment> | undefined>> {
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

        if (requestParameters.ticketId !== undefined) {
            queryParameters['ticket_id'] = requestParameters.ticketId;
        }

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/ticketing/v1/comments`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of `Comment` objects.
     */
    async commentsList(requestParameters: CommentsListRequest): Promise<MergePaginatedResponse<Comment> | undefined> {
        const response = await this.commentsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `Comment` POSTs.
     */
    async commentsMetaPostRetrieveRaw(): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/ticketing/v1/comments/meta/post`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `Comment` POSTs.
     */
    async commentsMetaPostRetrieve(): Promise<MetaResponse | undefined> {
        const response = await this.commentsMetaPostRetrieveRaw();
        return await response.value();
    }

    /**
     * Returns a `Comment` object with the given `id`.
     */
    async commentsRetrieveRaw(requestParameters: CommentsRetrieveRequest): Promise<runtime.ApiResponse<Comment | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling commentsRetrieve.');
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
            path: `/ticketing/v1/comments/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CommentFromJSON(jsonValue));
    }

    /**
     * Returns a `Comment` object with the given `id`.
     */
    async commentsRetrieve(requestParameters: CommentsRetrieveRequest): Promise<Comment | undefined> {
        const response = await this.commentsRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum CommentsListExpandEnum {
    Contact = 'contact',
    Contactticket = 'contact,ticket',
    Ticket = 'ticket',
    User = 'user',
    Usercontact = 'user,contact',
    Usercontactticket = 'user,contact,ticket',
    Userticket = 'user,ticket'
}
/**
* @export
* @enum {string}
*/
export enum CommentsRetrieveExpandEnum {
    Contact = 'contact',
    Contactticket = 'contact,ticket',
    Ticket = 'ticket',
    User = 'user',
    Usercontact = 'user,contact',
    Usercontactticket = 'user,contact,ticket',
    Userticket = 'user,ticket'
}
