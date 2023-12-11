const CloseBtn = ({onClose}) => {
	return (
		<div className="flex justify-end">
			<button
				className="bg-red-600 text-slate-50 h-8 w-8 rounded-md flex justify-center items-center "
				onClick={onClose}
			>
				X
			</button>
		</div>
	);
};
export default CloseBtn;
