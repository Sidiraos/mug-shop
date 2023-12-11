import Product from './Product';
import { useSelector , shallowEqual} from 'react-redux';
import React from 'react';

const Products = () => {
	const products = useSelector((state) => state.products.products, shallowEqual);
	return (
		<div className="pt-16 max-w-4xl mx-auto text-slate-50 flex flex-col gap-4">
			<h1 className="text-xl sm:text-3xl">Here are our products</h1>
			<div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 gap-4">
				{products &&
					products.map((product) => {
						return <Product key={product.id} product={product} />;
					})}
			</div>
		</div>
	);
};
export default React.memo(Products);
