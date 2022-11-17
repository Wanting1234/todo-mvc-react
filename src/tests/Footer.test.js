import { render, screen } from '@testing-library/react';
import Footer from "../components/Footer";

describe('footer', () => {
    test('should render footer and show message about app', () => {

        render(<Footer />);

        expect(screen.getByText('Double-click to edit a todo')).toBeInTheDocument();
        expect(screen.getByText('Created by Ting Wang')).toBeInTheDocument();
        expect(screen.getByText('Part of TodoMvc')).toBeInTheDocument();
    });
});
