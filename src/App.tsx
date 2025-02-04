import { useState } from 'react';
import LoginPage from './pages/auth/loginPage';
import TweetsPage from './pages/tweets/TweetsPage';
import storage from './utils/storage';


interface Props {
	defaultIsLogged: boolean;
}

function App({defaultIsLogged}: Props) {
	const [isLogged, setIsLogged] = useState(defaultIsLogged);

	const handleLogin = () => {
		setIsLogged(true);
	};

	const handleLogout = () => {
		setIsLogged(false);
	}

	return isLogged ? <TweetsPage onLogout=
	{handleLogout}/> : <LoginPage  onLogin=
	{handleLogin}/>;
	
}

export default App;
