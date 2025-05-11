import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '@/store/store.ts'

import App from './App.tsx'

import './index.css'
import '@/styles/_global.scss'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

const loader = document.getElementById('initial-loader');
if (loader && loader.parentNode) {
  loader.parentNode.removeChild(loader);
}