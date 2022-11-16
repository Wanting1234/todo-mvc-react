import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('render hello world', () => {
  render(<App />);
  const text = screen.getByText('Hello, world!');
  expect(text).toBeInTheDocument();
});
