import {BrowserRouter, Route} from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';

import Auth from './pages/Auth';
import NewRoom from './pages/NewRoom';

function App() {
  return (
   <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Auth} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
   </BrowserRouter>
  );
}

export default App;

