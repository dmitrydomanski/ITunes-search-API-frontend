import React from 'react';
// import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';

import Aux from '../Aux';
import ScreenOne from '../../../containers/ScreenOne';
import ScreenTwo from '../../../containers/ScreenTwo';

const layout = () => (
    <Aux>
        <Switch>
            <Route
                exact
                path="/"
                component={ScreenOne}
            />
            <Route
                path="/screen"
                component={ScreenTwo}
            />
            {/* <Route
                path="/gallery"
                component={DisclaimerPage}
            />
            <Route
                path="/documents"
                component={DisclaimerPage}
            /> */}
        </Switch>
    </Aux>
);

// layout.propTypes = {
//     location: PropTypes.shape({
//         pathname: PropTypes.string.isRequired,
//     }),
// };

// layout.defaultProps = {
//     location: {
//         pathname: '',
//     },
// };

export default withRouter(layout);
