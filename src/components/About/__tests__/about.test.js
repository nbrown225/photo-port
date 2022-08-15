import React from "react";
import { render, cleanup } from "@testing-library/react";

// import jest-dom extend-expect 
import '@testing-library/jest-dom/extend-expect';
// import component being tested 'About'
import About from "../about";

// call cleanup function / ensure no leftover memory / no false results
afterEach(cleanup);

// call describe function, to declare component being tested
describe('About component', () =>{
    //renders About test
    // first test / verifies if component is rendering
    it('renders', () =>{ //it can me used in place of test
        render(<About></About>)
    })

    // second test
    it('matches snapshot DOM node structure', () =>{
        // render about
        const { asFragment } = render(<About></About>)
        expect(asFragment()).toMatchSnapshot();
    })
})

