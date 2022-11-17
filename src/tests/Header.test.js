import { render, screen } from '@testing-library/react';
import Header from "../components/Header";

describe('header', () => {
    test('should render header', () => {

        render(<Header />);
        expect(screen.getByText('todos')).toBeInTheDocument();
    });
});
