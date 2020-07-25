import React from "react";
import { Typography } from "@material-ui/core";
import VideoElement from "./VideoElement.Component";
import ImageElement from "./ImageElement.Component";

const CustomElement = (props) => {
	const { attributes, children, element } = props;

	switch (element.type) {
		case "numbered-list":
			return <ol {...attributes}>{children}</ol>;
		case "unordered-list":
			return <ul {...attributes}>{children}</ul>;
		case "list-item":
			return (
				<li {...attributes}>
					<Typography variant="body1">{children}</Typography>
				</li>
			);
		case "heading-one":
			return (
				<Typography {...attributes} variant="h1">
					{children}
				</Typography>
			);
		case "heading-two":
			return (
				<Typography {...attributes} variant="h2">
					{children}
				</Typography>
			);
		case "heading-three":
			return (
				<Typography {...attributes} variant="h3">
					{children}
				</Typography>
			);
		case "heading-four":
			return (
				<Typography {...attributes} variant="h4">
					{children}
				</Typography>
			);
		case "heading-five":
			return (
				<Typography {...attributes} variant="h5">
					{children}
				</Typography>
			);
		case "heading-six":
			return (
				<Typography {...attributes} variant="h6">
					{children}
				</Typography>
			);
		case "blockquote":
			return <blockquote {...attributes}>{children}</blockquote>;
		case "video":
			return <VideoElement {...props} />;
		case "image":
			return <ImageElement {...props} />;
		default:
			return (
				<Typography variant="body1" paragraph {...attributes}>
					{children}
				</Typography>
			);
	}
};

export default CustomElement;
