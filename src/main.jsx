import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CandyProvider from './Store/CandyProvider.jsx'

ReactDOM.createRoot ( document.getElementById ( 'root' ) )
.render(
  <CandyProvider>
    <App />
  </CandyProvider>,
)
