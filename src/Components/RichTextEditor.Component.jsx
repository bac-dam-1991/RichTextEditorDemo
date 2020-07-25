import React, { useState, useMemo, useCallback } from "react";
import { Slate, Editable, withReact } from "slate-react";
import { createEditor } from "slate";
import { AppBar, Toolbar } from "@material-ui/core";
import Leaf from "./Leaf.Component";
import MarkButton from "./MarkButton.Component";
import FormatBoldRoundedIcon from "@material-ui/icons/FormatBoldRounded";

const RichTextEditor = () => {
	const editor = useMemo(() => withReact(createEditor()), []);
	const [content, setContent] = useState([
		{
			type: "paragraph",
			children: [{ text: "A paragraph." }],
		},
	]);

	const handleContentChange = (newValue) => {
		setContent(newValue);
	};

	const renderLeaf = useCallback((props) => {
		return <Leaf {...props} />;
	}, []);

	return (
		<Slate editor={editor} value={content} onChange={handleContentChange}>
			<AppBar position="relative">
				<Toolbar variant="dense">
					<MarkButton format="bold">
						<FormatBoldRoundedIcon />
					</MarkButton>
				</Toolbar>
			</AppBar>
			<Editable renderLeaf={renderLeaf} />
		</Slate>
	);
};

export default RichTextEditor;
