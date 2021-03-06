﻿import React from "react";
import {GetServerSideProps, NextPage} from "next";
import textStyle from "../../pageStyles/text-classes.module.scss"
import Layout from "../../components/Layout/layout";
import {TestSubmissionsList} from "../../components/TestSubmissionsList/TestSubmissionsList";
import {CandidateGuid} from "../../components/CandidateGuid/CandidateGuid";
import {Candidate, getCandidateById} from "../../api/candidatesApiClient";
import cookie from 'cookie';

interface CandidateProps {
    candidate: Candidate;
}

//previously known as test submissions page, changed for proper Next JS routing
const CandidateId: NextPage<CandidateProps> = ({candidate}) => {
    return (
        <Layout>
            <h1 className={textStyle.pageHeader}>Test Submissions</h1>
            <h2 className={textStyle.subHeader}>{candidate.firstName} {candidate.lastName}</h2>
            <hr className={textStyle.lineBreak}/>
            <h2 className={textStyle.subHeader}>Candidate Test Link</h2>
            <CandidateGuid guid={candidate.guid}/>
            <hr className={textStyle.lineBreak}/>
            <h2 className={textStyle.subHeader}>Submissions</h2>
            <TestSubmissionsList tests={candidate.testSubmissions}/>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async context => {
    const candidateId = context.query.candidateId as string;
    const cookies = cookie.parse(context.req.headers.cookie || '');
    const sessionId = cookies.sessionId
    if (!sessionId) {
        context.res.writeHead(302, {Location: "/login"});
        context.res.end();
        return {props: {}};
    }
    const candidateData = getCandidateById(parseInt(candidateId), sessionId);

    return {
        props: {
            candidate: await candidateData,
        }
    }
};


export default CandidateId;