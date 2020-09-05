import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeScreen from '../../HomeScreen';
import ApplicantScreen from '../../ApplicantScreen';
import CandidatesScreen from '../../CandidatesScreen';

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/applicant" component={ApplicantScreen} />
            <Route path="/candidates" component={CandidatesScreen} />
        </Switch>
    );
};

export default AppRouter;
