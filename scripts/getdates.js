// seleccionar los elementos del DOM
const currentYearSpan = document.querySelector("#currentyear");
const lastModifiedParagraph = document.querySelector("#lastModified");

// usar objeto Date
const today = new Date();

// poner año actual
if (currentYearSpan) {
	currentYearSpan.textContent = today.getFullYear();
}

// poner última modificación con formato legible
if (lastModifiedParagraph) {
	const modified = new Date(document.lastModified);

	const formatted = new Intl.DateTimeFormat("en-US", {
		dateStyle: "full",
		timeStyle: "medium"
	}).format(modified);

	lastModifiedParagraph.innerHTML = `Last Modified: <span class="highlight">${formatted}</span>`;
}
