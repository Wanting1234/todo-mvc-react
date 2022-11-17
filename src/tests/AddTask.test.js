import { render, screen } from '@testing-library/react';
import AddTask from "../components/AddTask";

describe('add task input box', () => {
    test('should render input box', () => {
        // arrange
        // act
        render(<AddTask />);
        // assert
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
})
