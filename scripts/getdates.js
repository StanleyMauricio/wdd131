const currentYearSpan = document.querySelector("#currentyear");
const lastModifiedParagraph = document.querySelector("#lastModified");


const today = new Date();

if (currentYearSpan) {
	currentYearSpan.textContent = today.getFullYear();
}


if (lastModifiedParagraph) {
	const modified = new Date(document.lastModified);

	const formatted = new Intl.DateTimeFormat("en-US", {
		dateStyle: "full",
		timeStyle: "medium"
	}).format(modified);

	lastModifiedParagraph.innerHTML = `Last Modified: <span class="highlight">${formatted}</span>`;
}
