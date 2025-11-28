# Webis Quick Start Guide

## Overview
Webis is a multimodal data cleaning tool that supports **documents, PDFs, images, HTML webpages**, and other data types. It can automatically identify file types, quickly call different tools to batch clean various files, and provide **structured output**. Currently, Webis has integrated four modal data processing tools, among which the **Webis_HTML** tool is an independently developed webpage data extraction tool that uses AI technology to automatically identify valuable information on webpages. Webis_HTML has also been uploaded to PyPi as a separate dependency package.


## Basic Usage

### Activate the Environment
```bash
conda activate webis
```

### Basic Operations
```bash
# Process a single file
python process_file.py tools/data/pdf/example.pdf

# Run the full demo
python examples/demo.py

# View supported file types
python3 file_processor.py
```

## Interface Usage Examples

### 1. Individual Processor Interfaces

#### DocumentProcessor
```python
from file_processor import DocumentProcessor

processor = DocumentProcessor()

# Check if the file type is supported
if processor.can_process("test.docx"):
    # Extract text
    result = processor.extract_text("test.docx")
    if result["success"]:
        print(result["text"])
    else:
        print(f"Error: {result['error']}")
```

#### PDFProcessor
```python
from file_processor import PDFProcessor

processor = PDFProcessor()

# Extract text from PDF
result = processor.extract_text("document.pdf")
if result["success"]:
    print(result["text"])  # Includes page number information
```

#### ImageProcessor (OCR)
```python
from file_processor import ImageProcessor

processor = ImageProcessor()

# Perform OCR on the image
result = processor.extract_text("image.png")
if result["success"]:
    print(result["text"])
```

#### HTMLProcessor
```python
from file_processor import HTMLProcessor

processor = HTMLProcessor()

# Extract text from HTML
result = processor.extract_text("example.html")
if result["success"]:
    print(result["text"])
```

**API Key Configuration** (optional, for AI optimization features):
- Environment variable: `export DEEPSEEK_API_KEY="your-key"` or `export LLM_PREDICTOR_API_KEY="your-key"`
- In code: `HTMLProcessor(api_key="your-key")`

> Note: To use the DeepSeek API for content filtering optimization, you need to configure the corresponding API key. Basic functions can be used normally without configuring an API key.

### 2. Unified Processor Interface
```python
from file_processor import UnifiedFileProcessor

processor = UnifiedFileProcessor()

# Automatically determine the file type and process it
result = processor.extract_text("any_file.pdf")
print(f"File Type: {result['file_type']}")
print(f"Text Content: {result['text']}")
```

### 3. Convenient Function Interfaces

#### Single File Processing
```python
from file_processor import extract_text_from_file

# Simplest usage
result = extract_text_from_file("file.pdf")
if result["success"]:
    print(f"File Type: {result['file_type']}")
    print(f"Text Length: {len(result['text'])}")
    print(result["text"])
```

#### Batch File Processing
```python
from file_processor import batch_extract_text

# Batch process multiple files
file_paths = ["doc1.pdf", "doc2.docx", "image1.png"]
results = batch_extract_text(file_paths)

for file_path, result in results.items():
    if result["success"]:
        print(f"✓ {file_path}: {len(result['text'])} characters")
    else:
        print(f"✗✗ {file_path}: {result['error']}")
```

## Python Script Usage Example
```python
#!/usr/bin/env python3
from file_processor import extract_text_from_file

def main():
    # Process different types of files
    files = [
        "pdf/sample.pdf",
        "Doc/demo.pdf", 
        "Pic/demo.pdf"
    ]
    
    for file_path in files:
        print(f"\nProcessing file: {file_path}")
        result = extract_text_from_file(file_path)
        
        if result["success"]:
            print(f"File Type: {result['file_type']}")
            print(f"Text Length: {len(result['text'])} characters")
            print("Text Preview:")
            print(result["text"][:300] + "...")
        else:
            print(f"Processing failed: {result['error']}")

if __name__ == "__main__":
    main()
```

## Integration in Code
```python
# Add tool path
import sys
sys.path.append('tools')

from file_processor import extract_text_from_file

# Process file
result = extract_text_from_file('your_file.pdf')
if result['success']:
    print(result['text'])
```

## Result Format Explanation
All processors return a unified result format:
```python
{
    "success": bool,        # Whether processing was successful
    "text": str,           # Extracted text content
    "error": str,          # Error message (if failed)
    "file_type": str       # File type (only for unified interface)
}
```

