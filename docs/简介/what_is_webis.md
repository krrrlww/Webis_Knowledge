# What is Webis

::: info
Webis is an efficient, lightweight **multimodal data cleaning and extraction tool** designed for developers to process and extract structured data from diverse file formats. With simplicity and modularity as its core design principles, it supports automatic file type recognition and integrates specialized processors for webpages, documents, PDFs, images, and more. Webis provides intuitive APIs and a Command Line Interface (CLI) to meet diverse data processing scenarios, enabling seamless integration into data analysis, content aggregation, and multimodal data pipelines.
:::

## Core Features

Webis automatically identifies file types and dispatches them to dedicated processing modules, filtering out noise and irrelevant information to output clean, structured content in JSON or plain text formats. Built with Python, it maintains minimal dependencies while ensuring high performance and portability across modern development environments.

### Key Capabilities

- **Multimodal Support**: Handles diverse formats including HTML webpages, PDF documents, Word files (.docx), plain text (.txt), Markdown (.md), and images (.png, .jpg, .jpeg, .bmp, .tiff) with OCR capabilities.
  
- **Unified Interface**: Provides consistent API endpoints for all file types, simplifying integration into existing workflows. Whether using individual processors or the unified handler, the output format remains consistent.

- **Flexible Access**: 
  - Programmatic access via concise APIs for seamless integration into applications
  - Command-line tools for batch processing and quick operations
  - Convenience functions for single-file and bulk processing tasks

- **Intelligent Processing**: 
  - Webis_HTML (a proprietary component) uses AI-powered extraction for web content
  - OCR for image text recognition with support for Chinese characters
  - Structured output preserving document structure (e.g., page numbers in PDFs)

- **Extensible Architecture**: Modular design allows easy addition of new file type processors, adapting to evolving data processing needs.

- **Robust Error Handling**: Comprehensive error reporting and logging ensure reliability in production environments.

## Supported File Types

| Type       | Extensions                              | Processor    | Description                                          |
|------------|-----------------------------------------|--------------|------------------------------------------------------|
| Documents  | `.txt`, `.md`, `.docx`                  | LangChain    | Direct text extraction with structure preservation    |
| PDFs       | `.pdf`                                  | PyPDF        | Page-aware extraction with pagination information     |
| Images     | `.png`, `.jpg`, `.jpeg`, `.bmp`, `.tiff`| EasyOCR      | Optical character recognition with multi-language support |
| Webpages   | `.html`                                 | Webis_HTML   | AI-optimized extraction of valuable content from web pages |

Whether processing static web content, office documents, or image-based text, Webis delivers consistent, high-quality results through its specialized processing modules. Its adaptability makes it suitable for applications ranging from content aggregation to data mining and multimodal data pipeline construction.