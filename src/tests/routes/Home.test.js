import * as React from "react";
import { render } from '@testing-library/react';
import MockAdapter from "axios-mock-adapter";

import Home from "../../routes/Home";
import API from "../../services";

// const mockAPI = new MockAdapter(API);

describe("Home page tests", () => {
    // it("should fetch data from API", async () => {
    //     mockAPI.onGet("/users").reply(200, {
    //       data: [
    //         { name: "Test1", age: 20 },
    //         { name: "Test2", age: 33 },
    //         { name: "Test3", age: 57 },
    //       ],
    //     });
    // });

    it('should render the page', () => {
        render(<Home />);
        const pageTitle = document.getElementById('page-title');
    
        expect(pageTitle.textContent).toEqual('Filtrar usuários');
    });
});