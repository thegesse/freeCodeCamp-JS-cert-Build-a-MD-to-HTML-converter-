# Build a Markdown to HTML Converter


## Context
Markdown is a markup language used to add formatting elements to plain-text documents. For this lab, all the HTML and CSS has been provided to you. You will use JavaScript to complete the Markdown to HTML Converter app so that it can handle the conversion of basic Markdown constructs into HTML elements.

## Objectives
- You should have a function named convertMarkdown that takes no parameters.
- The convertMarkdown function should use regular expressions to convert the markdown input from #markdown-input into HTML and should return a string containing the HTML code.
- The convertMarkdown function should convert headings of level one, two, and three into the corresponding h1, h2, and h3 elements. A heading in markdown is indicated by as many # character as its level followed by a space and the heading text. # characters should be placed at the beginning of the line: there can be spaces but no other characters before it.
- The convertMarkdown function should convert bold text into strong elements. Bold text in markdown is indicated either by a pair of double asterisks or a pair of double underscores enclosing the text.
- The convertMarkdown function should convert italic text into em elements. Italic text in markdown is indicated either by a pair of asterisks or a pair of underscores enclosing the text.
- The convertMarkdown function should convert images into img elements. An image in markdown is indicated by `![alt-text](image-source)`, where alt-text is the value of the alt attribute and image-source is the value of the src attribute.
- The convertMarkdown function should convert links into anchor elements. A link in markdown is indicated by `[link text](URL)`, where link text is the text to enclosed within the anchor tags and URL is the value of href attribute.
- The convertMarkdown function should convert quotes into blockquote elements. A quote in markdown is indicated by a > followed by a space and the quote text. The > character should be placed at the beginning of the line: there can be spaces but no other characters before it.
- When you input text inside #markdown-input, the raw HTML code returned by convertMarkdown should be displayed inside #html-output.
- When you input text inside #markdown-input, the HTML code returned by convertMarkdown should be rendered inside #preview.
