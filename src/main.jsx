import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserProvider from './lib/context/UserProvider';

import App from './App';
import './styles/index.css';

import Login from './pages/Login';
import Account from './pages/Account';
import Protected from './pages/Protected';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<UserProvider>
				<Routes>
					<Route path='/' element={<App />} />
					<Route path='Login' element={<Login />} />
					<Route
						path='/account'
						element={
							<Protected>
								<Account />
							</Protected>
						}
					/>
				</Routes>
			</UserProvider>
		</BrowserRouter>
	</React.StrictMode>
);
