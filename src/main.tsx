import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './Router'
import store from './state/store.ts'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <Provider store={store}>
      <AppRouter />
    </Provider>

  </StrictMode>,
)
