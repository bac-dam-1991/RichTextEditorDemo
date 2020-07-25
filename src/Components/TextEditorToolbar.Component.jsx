import React from "react";

// Icons
import FormatBoldRoundedIcon from "@material-ui/icons/FormatBoldRounded";
import FormatItalicRoundedIcon from "@material-ui/icons/FormatItalicRounded";
import FormatUnderlinedRoundedIcon from "@material-ui/icons/FormatUnderlinedRounded";
import FormatQuoteRoundedIcon from "@material-ui/icons/FormatQuoteRounded";
import FormatListBulletedRoundedIcon from "@material-ui/icons/FormatListBulletedRounded";
import FormatListNumberedRoundedIcon from "@material-ui/icons/FormatListNumberedRounded";

// MUI
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Components
import MarkButton from "./MarkButton.Component";
import BlockButton from "./BlockButton.Component";

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: theme.spacing(2),
	},
}));

const TextEditorToolbar = () => {
	const classes = useStyles();

	return (
		<AppBar position="relative" className={classes.root}>
			<Toolbar variant="dense">
				<MarkButton format="bold">
					<FormatBoldRoundedIcon fontSize="small" />
				</MarkButton>
				<MarkButton format="italic">
					<FormatItalicRoundedIcon fontSize="small" />
				</MarkButton>
				<MarkButton format="underline">
					<FormatUnderlinedRoundedIcon fontSize="small" />
				</MarkButton>
				<BlockButton format="blockquote">
					<FormatQuoteRoundedIcon fontSize="small" />
				</BlockButton>
				<BlockButton format="heading-one">H1</BlockButton>
				<BlockButton format="heading-two">H2</BlockButton>
				<BlockButton format="heading-three">H3</BlockButton>
				<BlockButton format="heading-four">H4</BlockButton>
				<BlockButton format="heading-five">H5</BlockButton>
				<BlockButton format="heading-six">H6</BlockButton>
				<BlockButton format="numbered-list">
					<FormatListNumberedRoundedIcon fontSize="small" />
				</BlockButton>
				<BlockButton format="unordered-list">
					<FormatListBulletedRoundedIcon fontSize="small" />
				</BlockButton>
			</Toolbar>
		</AppBar>
	);
};

export default TextEditorToolbar;
