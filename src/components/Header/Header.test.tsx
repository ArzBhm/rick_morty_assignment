import { render, screen } from "@testing-library/react";
import Header from './Header'

test('Should render the header', () => {
  render(<Header />);

  screen.getByAltText(/Rick and Morty/i);
  screen.getByRole('heading', { level: 1 });
});