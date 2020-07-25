import React, { useState, useMemo, useCallback } from "react";

// Slate
import { Slate, Editable, withReact } from "slate-react";
import { createEditor } from "slate";

// Components
import Leaf from "./Leaf.Component";
import CustomElement from "./CustomElement.Component";
import TextEditorToolbar from "./TextEditorToolbar.Component";
import { withImages } from "./ImageElement.Component";
import { withVideo } from "./VideoElement.Component";

const RichTextEditor = () => {
	const editor = useMemo(
		() => withVideo(withImages(withReact(createEditor()))),
		[]
	);
	const [content, setContent] = useState([
		{
			type: "paragraph",
			children: [{ text: "" }],
		},
	]);

	const handleContentChange = (newValue) => {
		setContent(newValue);
	};

	const renderLeaf = useCallback((props) => {
		return <Leaf {...props} />;
	}, []);

	const renderElement = useCallback((props) => {
		return <CustomElement {...props} />;
	}, []);

	return (
		<Slate editor={editor} value={content} onChange={handleContentChange}>
			<TextEditorToolbar />
			<Editable
				renderLeaf={renderLeaf}
				renderElement={renderElement}
				placeholder="Enter some text..."
				autoFocus
			/>
		</Slate>
	);
};

export default RichTextEditor;
