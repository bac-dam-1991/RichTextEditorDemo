import { Editor } from "slate";

const RichTextEditorHelper = {
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
};

export default RichTextEditorHelper;
