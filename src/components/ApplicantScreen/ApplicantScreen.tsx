import React from 'react';
import styled from 'styled-components';

import Screen from '../Screen';
import PersonCard from '../PersonCard';
import ApplicantScreenForm from './Form';

const ApplicantScreenWrapper = styled(Screen)`
    max-width: 600px;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 1rem;
`;

const ApplicantScreenTitle = styled.h1`
    margin: 1.75rem 0 1rem;
    color: ${(props) => props.theme.primaryTextColor};
`;

const ApplicantContactPerson = styled(PersonCard)`
    margin: 1.25rem 0;
`;

const ApplicantScreen = () => {
    return (
        <ApplicantScreenWrapper>
            <ApplicantScreenTitle>Interested in this job?</ApplicantScreenTitle>
            <ApplicantContactPerson
                name="Dominik Schmidt"
                title="CONTACT PERSON:"
                subtitle="CTO"
                image="https://randomuser.me/api/portraits/men/37.jpg"
            />
            <ApplicantScreenForm onSubmit={console.log} />
        </ApplicantScreenWrapper>
    );
};

export default ApplicantScreen;
