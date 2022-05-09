import { render, screen } from '@testing-library/react';
import App from '../components/App'

test('renders app without crashing', () => {
  render(<App />)
  expect(screen.getByAltText('marketing-image')).toBeInTheDocument()
})
