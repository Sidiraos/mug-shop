
import {useDispatch , useSelector , shallowEqual} from 'react-redux';
import { isPicked } from '../features/redux/slices/products';
import { addItem } from '../features/redux/slices/cart';
import  React  , {useCallback} from 'react'
const Product = ({ product }) => {
    const dispatch = useDispatch()
	const { title, price, img, picked, id } = product;
    // console.log("le composant " + title + " est rendu" , product)

    const pickItem = useCallback(() => {
        if(picked) return
        // console.log('added to cart')
        dispatch(isPicked({id, picked: true}))
		dispatch(addItem({
			title,
			price,
			img,
			id,
			qty: 1,
			totalItemPrice : price,
		}))
    } , [dispatch , id , picked]) 


	return (
		<div className="bg-slate-200 rounded p-4 flex flex-col gap-4 justify-between text-black">
			<div className="card-img h-64 bg-white">
				<img
					src={`/images/${img}.png`}
					className="h-full w-full object-cover"
					alt={title}
				/>
			</div>
			<div className="card-content flex items-center justify-between">
				<p className="text-lg opacity-80">{title}</p>
				<p className="font-bold">${price}</p>
			</div>
			<button className={`${picked ? 'bg-green-700' : 'bg-slate-600 hover:bg-green-700'}  rounded-md text-white px-4 py-2 text-center transition-colors ease-in-out duration-100`} onClick={pickItem}>
				{
                    picked ? 'Item picked ✔' : 'Add to cart'
                }
			</button>
		</div>
	);
};
export default React.memo(Product);
