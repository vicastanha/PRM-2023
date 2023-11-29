
import ReactDOM from 'react-dom/client'
import App from './App'
import { TopicContextProvider } from './contexts/TopicContext';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AuthContextProvider>
    <TopicContextProvider>
        <App />
      </TopicContextProvider>  
    </AuthContextProvider>
  </BrowserRouter>,
)
