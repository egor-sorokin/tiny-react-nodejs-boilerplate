import { shallow, render, mount } from 'enzyme';
import * as React from 'react'
import { CenteredSpinner } from '../../../common/components/loader/Loader';


describe('<CenteredSpinner />', () => {
    let component;

    describe('base tests', () => {
        beforeEach(() => {
            component = shallow(<CenteredSpinner />);
        });


        it('renders without crashing', () => {
            expect(component).toBeDefined();
        });


        it('matches snapshot', () => {
            expect(component).toMatchSnapshot();
        });


        it('renders 1 component', () => {
            expect(component.children()).toHaveLength(1);
        });
    });
});
