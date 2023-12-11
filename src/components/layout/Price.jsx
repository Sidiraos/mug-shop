import { useSelector ,shallowEqual } from 'react-redux';
const Price = () => {
	const items = useSelector((state) => state.cart.items, shallowEqual);
    const allPrices = items.length > 0 && items.map((item) => item.totalItemPrice).reduce((acc, sum) => acc + sum, 0)
    const totalPrice = items.length === 0 ? '0.00' : allPrices.toFixed(2)
    // console.log(allPrices)

	return (
		<h1 className="text-xl">
			<span>Your total : </span> <span className="font-bold">${totalPrice}</span>
		</h1>
	);
};
export default Price;
