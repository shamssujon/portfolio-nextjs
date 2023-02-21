import React from "react";

const Backdrop = ({ variant, handler }) => {
	return (
		<div
			className={`fixed inset-0 z-30 h-full w-full origin-top transform backdrop-blur transition ${
				handler ? "visible scale-y-100 opacity-100" : "invisible scale-y-95 opacity-0"
			} ${variant === "light" ? "bg-slate-100/90" : "bg-slate-800/90"}`}></div>
	);
};

export default Backdrop;
