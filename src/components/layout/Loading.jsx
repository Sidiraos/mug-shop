const Loading = () => {
	return (
		<div>
			<div className="flex flex-col items-center justify-center">
				<div
					className="border text-slate-700 p-4 space-y-6 bg-white shadow-md rounded-md"
					data-v0-t="card"
				>
					<div className="flex-col space-y-1.5 p-6 flex items-center justify-center">
						<h2 className="text-2xl font-bold">Fetching Data</h2>
					</div>
					<div className="p-6 flex flex-col items-center justify-center space-y-4">
						<div className="flex items-center space-x-4">
							<div className="animate-pulse bg-gray-300 h-12 w-12 rounded-full"></div>
							<div className="space-y-2">
								<div className="animate-pulse rounded-md bg-gray-300 h-4 w-[250px]"></div>
								<div className="animate-pulse rounded-md bg-gray-300 h-4 w-[200px]"></div>
							</div>
						</div>
						<button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								className="h-4 w-4 animate-spin"
							>
								<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
								<path d="M21 3v5h-5"></path>
								<path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
								<path d="M8 16H3v5"></path>
							</svg>
							<span className="sr-only">Refresh</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Loading;
