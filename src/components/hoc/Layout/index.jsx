import React from 'react';
// import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';

import Aux from '../Aux';
import ResultsLists from '../../../containers/ResultsLists';
import VideoDetails from '../../../containers/VideoDetails';

const layout = () => (
    <Aux>
        <Switch>
            <Route
                exact
                path="/"
                component={ResultsLists}
            />
            <Route
                path="/:videoID"
                component={VideoDetails}
            />
        </Switch>
    </Aux>
);

export default withRouter(layout);
