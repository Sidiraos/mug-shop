import Products from './components/Products';
import Cart from './components/Cart';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './components/layout/Loading';
import Error from './components/layout/Error';
import { useEffect } from 'react';
import { getInventoryData } from './features/redux/slices/products';

function App() {
	const loading = useSelector((state) => state.products.loading);
	const error = useSelector((state) => state.products.error);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getInventoryData());
	}, []);

	const dislayUI = loading ? (
		<Loading />
	) : error ? (
		<Error errMsg={error} />
	) : (
		<>
			<Products />
			<Cart />
		</>
	);

	return <div className="min-h-screen bg-slate-800 p-5">{dislayUI}</div>;
}

export default App;
