import React from 'react';
import Spinner from '@atlaskit/spinner';

import { SpinnerContainer } from './styled';


export const CenteredSpinner = () => (
    <SpinnerContainer><Spinner size="large"/></SpinnerContainer>
);
