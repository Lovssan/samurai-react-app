import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/redux.store'

test('renders learn react link', () => {
  render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
