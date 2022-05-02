import React from 'react';
//import{ render } from '@testing-library/react';

import {shallow} from 'enzyme';

import CounterApp from "../CounterApp";

describe ('Pruebas en <CounterApp />',  () => {

    let wrapper =  shallow(<CounterApp />);

    beforeEach( () => {
        wrapper = shallow(<CounterApp />);
    });

    test('debe de mostrar <CounterApp /> correctamente', () => {
  
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el contador enviado por props', () => {
        const cont = 100;

        const wrapper = shallow(<CounterApp value={cont} />);

        const textoh2 = wrapper.find('h2').text();
        console.log(textoh2);

        expect(textoh2).toBe(cont.toString());

    });

    test('debe de incrementar con el botón +1', () => {

        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text();

        expect(counterText).toBe('11');

    });

    test('debe de decrementar con el botón -1', () => {

        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text();

        expect(counterText).toBe('9');

    });

    test('debe de resetear el botón ', () => {
        const cont = 105;

        const wrapper = shallow(<CounterApp value={cont} />);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text();

        expect(counterText).toBe(cont.toString());

    });
})