import { useEffect, useMemo, useState } from 'react';

import {
    STATUS_ERROR,
    STATUS_INITIALIZING,
    STATUS_LOADING_GREETINGS,
    STATUS_READY,
    URL_PATH_GREETINGS
} from '../../common/services/constants';
import { getGreetings } from '../../common/services/api';
import { STRINGS_GREETINGS } from '../../common/services/strings';


function useGreetings() {
    const [status, setStatus] = useState(STATUS_INITIALIZING);
    const [errorMessage, setErrorMessage] = useState(null);

    const [allGreetings, setAllGreetings] = useState([]);

    const isLoading = [
        STATUS_INITIALIZING,
        STATUS_LOADING_GREETINGS
    ].includes(status);


    useEffect(() => {
        init().catch((err) => {
            console.log('err', err);
            setStatus(STATUS_ERROR);
            setErrorMessage({ message: STRINGS_GREETINGS.LOAD_ERORR });
        });
    }, []);


    const greetings = useMemo(() => {
        const updatedGreetings = allGreetings.map((item) => ({
            id: item.id,
            value: item.personalGreet
        }));


        return updatedGreetings || [];
    }, [allGreetings]);


    const init = async() => {
        setStatus(STATUS_INITIALIZING);
        const greetingsData = await getGreetings(URL_PATH_GREETINGS);
        setAllGreetings(greetingsData.data.data);
        setStatus(STATUS_READY);
    };


    return {
        status,
        isLoading,
        errorMessage,

        greetings
    };
}

export default useGreetings;
