import Button from './Button';
import CloseBtn from './CloseBtn';
import Price from './Price';
import Items from './Items';
import { useEffect } from 'react';

const Modal = ({ onClose }) => {
	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, []);
	return (
		<div
			className="fixed top-0 left-0 bg-slate-700/50 h-screen w-full p-5 flex justify-center items-center"
			onClick={onClose}
		>
			<div
				className="grid grid-cols-1 bg-slate-300 p-5 w-full sm:w-[75%] gap-8 min-h-[200px] max-h-[80vh] relative rounded-md overflow-x-hidden overflow-y-auto"
				onClick={(e) => e.stopPropagation()}
			>
				<CloseBtn onClose={onClose} />
				<Items />
				<Price />
				<Button
					text={'Proceed to checkout'}
					specialClass={'self-center'}
				/>
			</div>
		</div>
	);
};
export default Modal;
