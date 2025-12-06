import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

// export function remarkReadingTime() {
//   return function (tree, { data }) {
//     const text = toString(tree);
//     const readingTime = getReadingTime(text);
//     data.astro.frontmatter.minutes = Math.round(readingTime.minutes);
//   };
// }

export function remarkReadingTime() {
	return function (tree, { data }) {
		// Create a deep clone
		const readingTree = structuredClone(tree);
		// Remove ESM statements
		readingTree.children = readingTree.children.filter(
			(node) => node.type !== "mdxjsEsm"
		);
		readingTree.children.forEach((node) => {
			// Add a space if it's a value node
			if ("value" in node) {
				node.value += " ";
			} else if ("children" in node) {
				// Traverse to the last child and add a space
				let parent = node;
				let child = node.children.at(-1);
				while (child) {
					parent = child;
					child = child.children?.at(-1);
				}
				if (parent && "value" in parent) {
					parent.value += " ";
				}
			}
		});
		const textOnPage = toString(readingTree);
		const readingTime = getReadingTime(textOnPage);
		data.astro.frontmatter.minutes = Math.round(readingTime.minutes);
	};
}
