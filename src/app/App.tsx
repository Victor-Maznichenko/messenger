import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Router } from '@/pages';

import "@/shared/styles/index.scss"

const App = () => (
	<div className="app">
		<Provider store={store}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</Provider>
	</div>
);

export default App;
