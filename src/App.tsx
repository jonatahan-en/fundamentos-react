import { useState } from 'react';
import LoginPage from './pages/auth/loginPage';
import TweetsPage from './pages/tweets/TweetsPage';

function App() {
	const [isLogged, setIsLogged] = useState(false);

	const handleLogin = () => {
		setIsLogged(true);
	};

	// const handleLogout = () => {
	// 	setIsLogged(false);
	// }

	return isLogged ? <TweetsPage /> : <LoginPage  onLogin={handleLogin}/>;
	
}

export default App;
