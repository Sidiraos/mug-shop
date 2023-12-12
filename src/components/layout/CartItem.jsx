import React from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { setQty, removeItemFromCart } from '../../features/redux/slices/cart';
const CartItem = ({ item }) => {
	// console.log("render item in cart" , item);
	const dispatch = useDispatch();

	const changeQty = (e) => {
		dispatch(
			setQty({
				id: item.id,
				qty: Number(e.target.value),
				price: item.price,
			})
		);
	};

	const handleClick = (e) => {
		dispatch(removeItemFromCart(item.id));
	};

	return (
		<div className="flex max-[540px]:flex-col max-[540px]:gap-2 max-[540px]:border max-[540px]:border-slate-500/40 max-[540px]:p-4 justify-between">
			<div className="flex gap-1 items-center">
				<img
					src={`/mug-shop/images/${item.img}.png`}
					alt={item.title}
					className="w-16 rounded-sm"
				/>
				<p className="font-bold text-lg">{item.title}</p>
			</div>

			<div className="flex gap-2 items-center max-[540px]:justify-between">
				<select
					name=""
					id=""
					className="h-12 rounded-md px-6 outline-none"
					value={item.qty}
					onChange={changeQty}
				>
					<option className="outline-none border-none" value="1">
						1
					</option>
					<option className="outline-none border-none" value="2">
						2
					</option>
					<option className="outline-none border-none" value="3">
						3
					</option>
					<option className="outline-none border-none" value="4">
						4
					</option>
					<option className="outline-none border-none" value="5">
						5
					</option>
					<option className="outline-none border-none" value="6">
						6
					</option>
				</select>
				<Button text="remove from cart" handleClick={handleClick} specialClass={'max-[356px]:text-xs'} />
			</div>
		</div>
	);
};
export default React.memo(CartItem);
