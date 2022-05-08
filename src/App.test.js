import { render, screen } from '@testing-library/react';
import App from './App';

test('go button renders', () => {
      render(<App />);
      const linkElement = screen.getByText(/go/i);
      expect(linkElement).toBeInTheDocument();
    });