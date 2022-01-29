import './App.css';
import HomePage from './pages/home/home.page.jsx';
import Header from './components/header/header.component.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
			</Routes>
		</div>
	);
}

export default App;
