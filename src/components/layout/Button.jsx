const Button = ({ text, specialClass, handleClick }) => {
	return (
		<button
			className={`bg-slate-800 max-w-[208px] h-12 px-4 flex justify-center items-center text-slate-50 rounded-md shadow-md ${specialClass}`}
			onClick={handleClick}
		>
			{text}
		</button>
	);
};
export default Button;
