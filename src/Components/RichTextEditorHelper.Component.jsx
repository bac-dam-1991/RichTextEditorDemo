import { Editor, Transforms } from "slate";

// NPMs
import isUrl from "is-url";
import imageExtensions from "image-extensions";

const RichTextEditorHelper = {
	LIST_TYPES: ["numbered-list", "unordered-list"],
	isMarkActive: (editor, format) => {
		const marks = Editor.marks(editor);
		return marks ? marks[format] === true : false;
	},
	toggleMark: (editor, format) => {
		const isActive = RichTextEditorHelper.isMarkActive(editor, format);
		if (isActive) {
			Editor.removeMark(editor, format);
		} else {
			Editor.addMark(editor, format, true);
		}
	},
	isBlockActive: (editor, format) => {
		const [match] = Editor.nodes(editor, {
			match: (n) => n.type === format,
		});
		return !!match;
	},
	toggleBlock: (editor, format) => {
		const isActive = RichTextEditorHelper.isBlockActive(editor, format);
		const isList = RichTextEditorHelper.LIST_TYPES.includes(format);

		Transforms.unwrapNodes(editor, {
			match: (n) => RichTextEditorHelper.LIST_TYPES.includes(n.type),
			split: true,
		});

		Transforms.setNodes(editor, {
			type: isActive ? "paragraph" : isList ? "list-item" : format,
		});

		if (!isActive && isList) {
			const block = { type: format, children: [] };
			Transforms.wrapNodes(editor, block);
		}
	},
	isImageUrl: (url) => {
		if (!url) return false;
		if (!isUrl(url)) return false;
		const ext = new URL(url).pathname.split(".").pop();
		return imageExtensions.includes(ext);
	},
	insertImage: (editor, url) => {
		const image = { type: "image", url, children: [{ text: "" }] };
		Transforms.insertNodes(editor, image);
	},
	isVideoUrl: (url) => {
		return !!url.match(/^https:\/\/www\.youtube\.com\/embed\//g);
	},
	insertVideo: (editor, url) => {
		const video = { type: "video", url, children: [{ text: "" }] };
		Transforms.insertNodes(editor, video);
	},
};

export default RichTextEditorHelper;
