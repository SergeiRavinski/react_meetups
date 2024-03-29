import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './variables.css';
import './reset.css';
import './index.css';
import App from './App';
import { FavoritesContextProvider } from './store/favorites_content';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<FavoritesContextProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</FavoritesContextProvider>
);
