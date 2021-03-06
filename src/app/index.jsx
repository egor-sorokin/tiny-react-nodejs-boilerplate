import * as React from 'react';
import SectionMessage from '@atlaskit/section-message';

import useGreetings from './hooks/greetings';
import { CenteredSpinner } from '../common/components/loader/Loader';
import { CenteredSpinnerContainer } from '../common/components/loader/styled';
import { PageContainer } from './styled';
import { STRINGS_PAGE } from '../common/services/strings';
import Greetings from './components/Greetings';


const Page = () => {
    const {
        isLoading,
        error,

        greetings
    } = useGreetings();

    return (
        <PageContainer>
            {isLoading && (
                <CenteredSpinnerContainer>
                    <CenteredSpinner/>
                </CenteredSpinnerContainer>
            )}
            {error && (
                <SectionMessage appearance="error">{error.message}</SectionMessage>
            )}
            {!isLoading && !error && (
                <React.Fragment>
                    <h1>{STRINGS_PAGE.GREETINGS}</h1>
                    <Greetings greetings={greetings}/>
                </React.Fragment>
            )}
        </PageContainer>
    );
};

export default Page;
