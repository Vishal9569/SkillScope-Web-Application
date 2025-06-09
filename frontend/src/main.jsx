import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './cssbody/Body-three.css'
import './cssbody/bodyone.css'
import './cssbody/bodyfour.css';
import './cssbody/assement.css';
import './cssbody/coding-panel.css';
import './cssbody/project-panel.css'
import './cssbody/bodytwo.css'
import './cssbody/footer.css'
import './cssbody/model.css'
import './cssbody/feedback.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
