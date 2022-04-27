import * as React from "react";
import { render } from '@testing-library/react';
import MockAdapter from "axios-mock-adapter";

import Home from "../../routes/Home";

describe("Home page tests", () => {
    it('should render the page', () => {
        render(<Home />);
        const pageTitle = document.getElementById('page-title');
    
        expect(pageTitle.textContent).toEqual('Filtrar usuários');
    });
});