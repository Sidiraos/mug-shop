import CartItem from './CartItem';
import { useSelector , shallowEqual } from 'react-redux';
import React from 'react';

const Items = () => {
	const items = useSelector((state) => state.cart.items , shallowEqual);
	// console.log(items);
	const showNoItems = <p className="mt-4">Add some items to your cart...</p>;
	return (
		<>
			{items.length > 0
				? items.map((item) => <CartItem key={item.id} item={item} />)
				: showNoItems}
		</>
	);
};
export default Items;
