import { EthProvider } from './contexts/EthContext';
import Body from './components/Body';
import './App.css';

function App() {
	return (
		<EthProvider>
			<div id='App'>
				<div className='container'>
					<h1 style={{ textAlign: 'center' }}>PetShop</h1>
					<div className='petcontainer'>
						<Body />
					</div>
				</div>
			</div>
		</EthProvider>
	);
}

export default App;
