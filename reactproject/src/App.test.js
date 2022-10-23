import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

test('renders learn ojo', () => {
    render(<App />);
    const linkElement = screen.getByText(/Keep Numbers/i);
    expect(linkElement).toBeInTheDocument();
})