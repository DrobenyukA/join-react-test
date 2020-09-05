import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import routes from '../../constants/routes';
import Screen from '../Screen';

const ScreenLink = styled(NavLink)`
    display: inline-block;
    margin: 1rem 3rem;
    font-size: 2.75rem;
`;

const HomeScreenWrapper = styled(Screen)`
    align-items: center;
    justify-content: center;
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
