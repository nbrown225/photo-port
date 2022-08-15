import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from "../nav";

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () =>{
        render(<Nav></Nav>)
    });
    
    // stapshot test
    it('matches snapshot', ()=>{
        const { asFragment } = render(<Nav></Nav>);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot()
    })

})

// test camera emoji visibility
describe('emoji showing', ()=>{
    it('inserts emoji into the h2', () =>{
        // arrange
        const { getByLabelText } = render(<Nav></Nav>)
        // assert
        expect(getByLabelText('camera')).toHaveTextContent('📸')
    })
})

// test link visibility
describe('links visible', ()=>{
    it('inserts text into links', () =>{
        //arrange
        const { getByTestId } = render(<Nav />);
        //assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    })
})