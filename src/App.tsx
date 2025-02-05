
import LoginPage from './pages/auth/loginPage';
import TweetsPage from './pages/tweets/TweetsPage';
import {  useAuth } from './pages/auth/context';



function App() {
	const { isLogged}= useAuth();
	
	return isLogged ? <TweetsPage /> : <LoginPage />;
		
}

export default App;
