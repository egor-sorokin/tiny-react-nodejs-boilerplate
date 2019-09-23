import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Before using Jest in React@16 and React@15 Adapter has to be installed
configure({ adapter: new Adapter() });

console.error = message => {
    throw new Error(message);
};

export * from 'enzyme';
