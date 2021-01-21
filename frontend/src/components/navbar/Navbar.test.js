import React from 'react';
import "babel-polyfill";
import {render, mount, configure} from 'enzyme';
import configureMockStore from "redux-mock-store";
import Navbar from "./Navbar";
import Adapter from 'enzyme-adapter-react-16';
import {GET_TEXT_REVERT} from "../../sagas/IEcho";

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();

test('Navbar check input and button exits', () => {
    const store = mockStore({});
    const wrapper = render(<Navbar store={store}/>);
    expect(wrapper.find("input").length).toBe(1);
    expect(wrapper.find(".btn-primary").length).toBe(1);
});

test('Navbar check not sent event', () => {
    const store = mockStore({});
    const wrapper = mount(<Navbar store={store}/>);
    wrapper.find('.btn-primary').simulate("click");
    const actions = store.getActions();
    expect(actions.length).toBe(0);
});

test('Navbar check send event and text', () => {
    const store = mockStore({});
    const event = {
        target: { value: 'the-value', name: 'text' }
    };
    const wrapper = mount(<Navbar store={store}/>);
    wrapper.find('input').simulate('change', event);
    wrapper.find('.btn-primary').simulate("click");
    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe(GET_TEXT_REVERT);
    expect(actions[0].payload.text).toBe('the-value');
});