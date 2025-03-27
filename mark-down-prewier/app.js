const input = document.getElementById("markdownInput");
const preview = document.getElementById("preview");
const btn = document.querySelector("button");

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  },
});

function updatePreview() {
  preview.innerHTML = marked.parse(input.value);
}

function clearMarkdown() {
  input.value = "";
  preview.innerHTML = "";
}

btn.addEventListener("click", clearMarkdown);

input.addEventListener("input", updatePreview);
updatePreview();
