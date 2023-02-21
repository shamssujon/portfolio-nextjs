import React from "react";
import { ImSpinner9 } from "react-icons/im";

const Spinner = () => {
	return (
		<div className="grid gap-2 h-full w-full items-center justify-center text-center transition">
			<ImSpinner9 className="animate-spin text-5xl text-emerald-400 mx-auto" />
			<p>Loading...</p>
		</div>
	);
};

export default Spinner;
