import { render, screen } from '@testing-library/react';
import Principal from '../components/Principal.tsx';

test('go button renders', () => {
      render(<Principal />);
      const linkElement = screen.getByText(/go/i);
      expect(linkElement).toBeInTheDocument();
});



