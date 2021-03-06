﻿import fetch from "node-fetch";
import getConfig from 'next/config';

export interface ListResponse<T> {
    items: T[];
    totalNumberOfItems: number;
    page: number;
    nextPage: string;
    previousPage: string;
}

export interface Candidate {
    id: number;
    firstName: string;
    lastName: string;
    guid: string;
    testSubmissions: Test [];
}

interface Test {
    testId: number;
    testResult: string;
    testAnswer: string;
}

export async function getCandidates(page: number, pageSize: number, sessionId: string): Promise<ListResponse<Candidate>> {
    
    const {publicRuntimeConfig} = getConfig();
    const apiURL = publicRuntimeConfig.API_URL;
    const response = await fetch(
        `${apiURL}/candidates?page=${page}&pageSize=${pageSize}`,
        {headers: {"Session-Id": sessionId}});

    if (response.ok) {
        return await response.json();
    } else {
        throw Error;
    }
}

export async function getCandidateById(cid: number, sessionId: string): Promise<Candidate> {
    const {publicRuntimeConfig} = getConfig();
    const apiURL = publicRuntimeConfig.API_URL;
    const response = await fetch(
        `${apiURL}/candidates/${cid}`,
        {headers: {"Session-Id": sessionId}});
    if (response.ok) {
        return await response.json();
    } else {
        throw "there was an error"
    }
}

