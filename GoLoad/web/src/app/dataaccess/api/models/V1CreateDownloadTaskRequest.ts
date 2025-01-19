/* tslint:disable */
/* eslint-disable */
/**
 * go_load/v1/go_load.proto
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1DownloadType } from './V1DownloadType';
import {
    V1DownloadTypeFromJSON,
    V1DownloadTypeFromJSONTyped,
    V1DownloadTypeToJSON,
} from './V1DownloadType';

/**
 * 
 * @export
 * @interface V1CreateDownloadTaskRequest
 */
export interface V1CreateDownloadTaskRequest {
    /**
     * 
     * @type {V1DownloadType}
     * @memberof V1CreateDownloadTaskRequest
     */
    downloadType?: V1DownloadType;
    /**
     * 
     * @type {string}
     * @memberof V1CreateDownloadTaskRequest
     */
    url?: string;
}

/**
 * Check if a given object implements the V1CreateDownloadTaskRequest interface.
 */
export function instanceOfV1CreateDownloadTaskRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1CreateDownloadTaskRequestFromJSON(json: any): V1CreateDownloadTaskRequest {
    return V1CreateDownloadTaskRequestFromJSONTyped(json, false);
}

export function V1CreateDownloadTaskRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CreateDownloadTaskRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'downloadType': !exists(json, 'downloadType') ? undefined : V1DownloadTypeFromJSON(json['downloadType']),
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function V1CreateDownloadTaskRequestToJSON(value?: V1CreateDownloadTaskRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'downloadType': V1DownloadTypeToJSON(value.downloadType),
        'url': value.url,
    };
}

