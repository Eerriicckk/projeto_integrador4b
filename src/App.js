import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Error from './pages/Error';
import About from './pages/About';
import Cadastro from './pages/Cadastro';
import Locais from './pages/Locais';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Header />
			<div className="App">
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/sobre' element={<About />} />
					<Route path='/cadastro' element={<Cadastro />} />
					<Route path='/locais' element={<Locais />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;
