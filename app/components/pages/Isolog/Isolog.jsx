import React, {Component, PropTypes} from 'react';
import isOnClient from '../../../utils/isOnClient.js';

import MarkDown from '../../MarkDown/MarkDown.jsx';
import PageWrapper from '../../PageWrapper/PageWrapper.jsx';

if (isOnClient) {
    require('./isolog.scss');
}

class Isolog extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PageWrapper className="isolog">
                <section className="isolog__demo">
                    <h1 className="heading-1">Isolog demo</h1>

                    <div className="isolog__column">
                        <button className="button">Log something</button>
                    </div>

                    <div className="isolog__column">
                        <button className="button">Cause an error</button>
                    </div>

                    <div className="isolog__column">
                        <button className="button">Information</button>
                    </div>
                </section>

                <hr />

                <section>
                    <h1 className="heading-2">Read some words about it</h1>

                    <MarkDown url="https://raw.githubusercontent.com/davidgilbertson/isolog/master/README.md" />
                </section>
            </PageWrapper>
        );
    }
}

export default Isolog;