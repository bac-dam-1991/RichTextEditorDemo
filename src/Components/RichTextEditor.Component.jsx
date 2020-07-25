import React, { useState, useMemo, useCallback } from "react";

// Slate
import { Slate, Editable, withReact } from "slate-react";
import { createEditor } from "slate";

// MUI
import { AppBar, Toolbar } from "@material-ui/core";

// Components
import Leaf from "./Leaf.Component";
import MarkButton from "./MarkButton.Component";

// Icons
import FormatBoldRoundedIcon from "@material-ui/icons/FormatBoldRounded";
import FormatItalicRoundedIcon from "@material-ui/icons/FormatItalicRounded";
import FormatUnderlinedRoundedIcon from "@material-ui/icons/FormatUnderlinedRounded";

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
					<MarkButton format="italic">
						<FormatItalicRoundedIcon />
					</MarkButton>
					<MarkButton format="underline">
						<FormatUnderlinedRoundedIcon />
					</MarkButton>
				</Toolbar>
			</AppBar>
			<Editable renderLeaf={renderLeaf} />
		</Slate>
	);
};

export default RichTextEditor;
