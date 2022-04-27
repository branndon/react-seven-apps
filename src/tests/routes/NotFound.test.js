import * as React from "react";
import {render, screen} from '@testing-library/react';

import NotFound from "../../routes/NotFound";

describe("NotFound page tests", () => {
    it('should render the page', () => {
        render(<NotFound />);
        const pageHeader = screen.getByText(/Não foi possível encontrar essa página/i);
        const pageDescription = screen.getByText(/A página que você está procurando foi movida ou morta como um prego./i);

        expect(pageHeader).toBeInTheDocument();
        expect(pageDescription).toBeInTheDocument();
    });
});
  