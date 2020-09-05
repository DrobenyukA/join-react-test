import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import routes from '../../constants/routes';
import Screen from '../Screen';

const ScreenLink = styled(NavLink)`
    display: block;
    margin: 3rem 0;
    font-size: 1.5rem;
    text-align: center;

    @media screen and (min-width: 768px) {
        margin: 1rem 3rem;
        font-size: 2.5rem;
    }
`;

const HomeScreenWrapper = styled(Screen)`
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

const HomeScreen = () => {
    return (
        <HomeScreenWrapper>
            <ScreenLink to={routes.APPLICANT}>Applicant screen</ScreenLink>
            <ScreenLink to={routes.CANDIDATES}>Candidate screen</ScreenLink>
        </HomeScreenWrapper>
    );
};

export default HomeScreen;
