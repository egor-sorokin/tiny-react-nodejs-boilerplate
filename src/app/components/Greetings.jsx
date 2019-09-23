import * as React from 'react';
import PropTypes from 'prop-types';

import { GreetingsContainer } from './styled';
import { TextTruncated } from '../../common/styled';


const Greetings = ({
    greetings
}) => (
    <GreetingsContainer>
        {greetings.map(({ value, id }) => <div key={id && id.toString()}><TextTruncated>{value}</TextTruncated></div>)}
    </GreetingsContainer>
);

Greetings.propTypes = {
    greetings: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};


export default Greetings;
