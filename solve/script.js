function convertMarkdown() {

  const paragraph = document.getElementById('markdown-input').value;
  const lines = paragraph.split(/\r?\n/)
  const output = document.getElementById('html-output');
  const preview = document.getElementById('preview')

  output.replaceChildren();
  preview.replaceChildren();
  
  let htmlResult = '';

  for(let line of lines) {
    line = line.trim();
    if(!line) continue;
    let convertedLine = line;

    //images
    convertedLine = convertedLine.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, '<img alt="$1" src="$2">');
    //links
    convertedLine = convertedLine.replace(/\[([^\]]*)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>');
    //boldness
    convertedLine = convertedLine.replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>');
    //italic
    convertedLine = convertedLine.replace(/(\*|_)(.*?)\1/g, '<em>$2</em>');

    const size = convertedLine.match(/^(#{1,3})\s+(.*)/);
    const quote = convertedLine.match(/^>\s*(.*)/);


    if (size) {
      const level = size[1].length;
      const content = size[2];
      convertedLine = `<h${level}>${content}</h${level}>`;
    } else if (quote) {
      const content = quote[1];
      convertedLine = `<blockquote>${content}</blockquote>`;
    } else {
        const isHtmlTag = /^<([a-z1-6]+)([^>]*)>.*<\/([a-z1-6]+)>$/i.test(convertedLine) || /^<img[^>]*>$/i.test(convertedLine);       

      if (!isHtmlTag) {
        convertedLine = `<p>${convertedLine}</p>`;
      }
    }
    // should have a + '\n' but tests hate that for some reason
    htmlResult += convertedLine;
  }
  if (output) output.textContent = htmlResult;
  if(preview) preview.innerHTML = htmlResult;
  return htmlResult;
}

document.getElementById('markdown-input').addEventListener('input', convertMarkdown);
