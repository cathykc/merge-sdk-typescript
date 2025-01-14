/* tslint:disable */
/* eslint-disable */
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


import * as runtime from '../../runtime';
import {
    Job,
    JobFromJSON,
    JobToJSON,
    
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

export interface JobsListRequest {
    code?: string | null;
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    expand?: JobsListExpandEnum;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    remoteFields?: JobsListRemoteFieldsEnum;
    remoteId?: string | null;
    status?: JobsListStatusEnum;
}

export interface JobsRetrieveRequest {
    id: string;
    expand?: JobsRetrieveExpandEnum;
    includeRemoteData?: boolean;
    remoteFields?: JobsRetrieveRemoteFieldsEnum;
}

/**
 * 
 */
export class JobsApi extends runtime.BaseAPI {

    /**
     * Returns a list of `Job` objects.
     */
    async jobsListRaw(requestParameters: JobsListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Job> | undefined>> {
        const queryParameters: any = {};

        if (requestParameters.code !== undefined) {
            queryParameters['code'] = requestParameters.code;
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

        if (requestParameters.remoteFields !== undefined) {
            queryParameters['remote_fields'] = requestParameters.remoteFields;
        }

        if (requestParameters.remoteId !== undefined) {
            queryParameters['remote_id'] = requestParameters.remoteId;
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
            path: `/ats/v1/jobs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of `Job` objects.
     */
    async jobsList(requestParameters: JobsListRequest): Promise<MergePaginatedResponse<Job> | undefined> {
        const response = await this.jobsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a `Job` object with the given `id`.
     */
    async jobsRetrieveRaw(requestParameters: JobsRetrieveRequest): Promise<runtime.ApiResponse<Job | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling jobsRetrieve.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand !== undefined) {
            queryParameters['expand'] = requestParameters.expand;
        }

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
            path: `/ats/v1/jobs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => JobFromJSON(jsonValue));
    }

    /**
     * Returns a `Job` object with the given `id`.
     */
    async jobsRetrieve(requestParameters: JobsRetrieveRequest): Promise<Job | undefined> {
        const response = await this.jobsRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum JobsListExpandEnum {
    Departments = 'departments',
    DepartmentshiringManagers = 'departments,hiring_managers',
    DepartmentshiringManagersrecruiters = 'departments,hiring_managers,recruiters',
    Departmentsoffices = 'departments,offices',
    DepartmentsofficeshiringManagers = 'departments,offices,hiring_managers',
    DepartmentsofficeshiringManagersrecruiters = 'departments,offices,hiring_managers,recruiters',
    Departmentsofficesrecruiters = 'departments,offices,recruiters',
    Departmentsrecruiters = 'departments,recruiters',
    HiringManagers = 'hiring_managers',
    HiringManagersrecruiters = 'hiring_managers,recruiters',
    Offices = 'offices',
    OfficeshiringManagers = 'offices,hiring_managers',
    OfficeshiringManagersrecruiters = 'offices,hiring_managers,recruiters',
    Officesrecruiters = 'offices,recruiters',
    Recruiters = 'recruiters'
}
/**
* @export
* @enum {string}
*/
export enum JobsListRemoteFieldsEnum {
    Status = 'status'
}
/**
* @export
* @enum {string}
*/
export enum JobsListStatusEnum {
    Archived = 'ARCHIVED',
    Closed = 'CLOSED',
    Draft = 'DRAFT',
    Open = 'OPEN',
    Pending = 'PENDING'
}
/**
* @export
* @enum {string}
*/
export enum JobsRetrieveExpandEnum {
    Departments = 'departments',
    DepartmentshiringManagers = 'departments,hiring_managers',
    DepartmentshiringManagersrecruiters = 'departments,hiring_managers,recruiters',
    Departmentsoffices = 'departments,offices',
    DepartmentsofficeshiringManagers = 'departments,offices,hiring_managers',
    DepartmentsofficeshiringManagersrecruiters = 'departments,offices,hiring_managers,recruiters',
    Departmentsofficesrecruiters = 'departments,offices,recruiters',
    Departmentsrecruiters = 'departments,recruiters',
    HiringManagers = 'hiring_managers',
    HiringManagersrecruiters = 'hiring_managers,recruiters',
    Offices = 'offices',
    OfficeshiringManagers = 'offices,hiring_managers',
    OfficeshiringManagersrecruiters = 'offices,hiring_managers,recruiters',
    Officesrecruiters = 'offices,recruiters',
    Recruiters = 'recruiters'
}
/**
* @export
* @enum {string}
*/
export enum JobsRetrieveRemoteFieldsEnum {
    Status = 'status'
}
