import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../constants/routes';

const HomeScreen = () => {
    return (
        <>
            <NavLink to={routes.APPLICANT}>Applicant screen</NavLink>
            <NavLink to={routes.CANDIDATES}>Candidate screen</NavLink>
        </>
    );
};

export default HomeScreen;
