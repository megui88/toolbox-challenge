import React from 'react';
import "babel-polyfill";
import {render, configure} from 'enzyme';
import configureMockStore from "redux-mock-store";
import Result from "./Result";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();

test('Result check init state', () => {
    const store = mockStore({textResults:[]});
    const wrapper = render(<Result store={store}/>);
    expect(wrapper.find("button").length).toBe(0);
});

test('Result check render a result', () => {
    const store = mockStore({textResults:[{text:'ola', palindrome: false}]});
    const wrapper = render(<Result store={store}/>);
    expect(wrapper.find("button").length).toBe(1);
    expect(wrapper.find("button.bg-warning").length).toBe(0);
});

test('Result check render a result when palindrome is true', () => {
    const store = mockStore({textResults:[{text:'ana', palindrome: true}]});
    const wrapper = render(<Result store={store}/>);
    expect(wrapper.find("button").length).toBe(1);
    expect(wrapper.find("button.bg-warning").length).toBe(1);
});