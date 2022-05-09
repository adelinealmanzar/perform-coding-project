import { render, screen } from '@testing-library/react';
import NavBar from '../components/NavBar'

test('renders navigation bar without crashing', () => {
  render(<NavBar />)
  expect(screen.getByText('Spotify')).toBeInTheDocument()
})