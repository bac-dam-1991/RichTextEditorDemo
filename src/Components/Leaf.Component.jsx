import React from "react";

const Leaf = (props) => {
	let { attributes, children, leaf } = props;

	if (leaf.bold) {
		children = <strong>{children}</strong>;
	}

	return <span {...attributes}>{children}</span>;
};

export default Leaf;
