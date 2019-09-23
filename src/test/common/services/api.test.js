import axios from 'axios';
import React from 'react';
import { getGreetings } from '../../../common/services/api';
import { URL_PATH_GREETINGS } from '../../../common/services/constants';

jest.mock('axios', () => ({
    get: jest.fn(
        () => Promise.resolve(),
        () => Promise.reject()
    ),
}));


describe('getGreetings tests', () => {
    const response = {
        status: 200,
        data: {
            greetings: [{
                id: 1,
                name: 'John Doe'
            }]
        }
    };
    const error = {
        status: 404,
        message: 'Something went wrong'
    };


    it('checks that axios get request was called only once', async() => {
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({
                status: response.status,
                data: response.data
            })
        );

        await getGreetings(URL_PATH_GREETINGS);
        expect(axios.get).toHaveBeenCalledTimes(1);
    });


    it('should fetch greetings', async() => {
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({
                status: response.status,
                data: response.data
            }));

        const result = await getGreetings(URL_PATH_GREETINGS);
        expect(result.data.greetings[0]).toEqual(response.data.greetings[0]);
        expect(result.status).toEqual(response.status);
    });


    it('should handle response error', async() => {
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({
                status: error.status,
                message: error.message
            }));

        try {
            await getGreetings(URL_PATH_GREETINGS);
        } catch (e) {
            expect(e.message).toEqual(error.message);
        }
    });

    afterEach(() => {
        axios.get.mockClear();
    });
});
