# Webis 快速入门指南

## 概述
Webis 是一个支持**文档、PDF、图片、HTML 网页**等多种模态的数据清洗工具。它可以自动识别文件类型，快速调用不同工具批量清洗各种文件，并提供**结构化输出**。目前，Webis 已集成四种模态的数据处理工具，其中 **Webis_HTML** 工具是独立开发的网页数据提取工具，使用 AI 技术自动识别网页上的有价值信息。Webis_HTML 也已作为独立依赖包上传到 PyPi。


## 基本使用

### 激活环境
```bash
conda activate webis
```

### 基本操作
```bash
# 处理单个文件
python process_file.py tools/data/pdf/example.pdf

# 运行完整演示
python examples/demo.py

# 查看支持的文件类型
python3 file_processor.py
```

## 接口使用示例

### 1. 独立处理器接口

#### DocumentProcessor
```python
from file_processor import DocumentProcessor

processor = DocumentProcessor()

# 检查文件类型是否支持
if processor.can_process("test.docx"):
    # 提取文本
    result = processor.extract_text("test.docx")
    if result["success"]:
        print(result["text"])
    else:
        print(f"错误: {result['error']}")
```

#### PDFProcessor
```python
from file_processor import PDFProcessor

processor = PDFProcessor()

# 从 PDF 提取文本
result = processor.extract_text("document.pdf")
if result["success"]:
    print(result["text"])  # 包含页码信息
```

#### ImageProcessor (OCR)
```python
from file_processor import ImageProcessor

processor = ImageProcessor()

# 对图片进行 OCR
result = processor.extract_text("image.png")
if result["success"]:
    print(result["text"])
```

#### HTMLProcessor
```python
from file_processor import HTMLProcessor

processor = HTMLProcessor()

# 从 HTML 提取文本
result = processor.extract_text("example.html")
if result["success"]:
    print(result["text"])
```

**API 密钥配置**（可选，用于 AI 优化功能）：
- 环境变量：`export DEEPSEEK_API_KEY="your-key"` 或 `export LLM_PREDICTOR_API_KEY="your-key"`
- 在代码中：`HTMLProcessor(api_key="your-key")`

> 注意：要使用 DeepSeek API 进行内容过滤优化，需要配置相应的 API 密钥。不配置 API 密钥也可以正常使用基本功能。

### 2. 统一处理器接口
```python
from file_processor import UnifiedFileProcessor

processor = UnifiedFileProcessor()

# 自动判断文件类型并处理
result = processor.extract_text("any_file.pdf")
print(f"文件类型: {result['file_type']}")
print(f"文本内容: {result['text']}")
```

### 3. 便捷函数接口

#### 单文件处理
```python
from file_processor import extract_text_from_file

# 最简单的用法
result = extract_text_from_file("file.pdf")
if result["success"]:
    print(f"文件类型: {result['file_type']}")
    print(f"文本长度: {len(result['text'])}")
    print(result["text"])
```

#### 批量文件处理
```python
from file_processor import batch_extract_text

# 批量处理多个文件
file_paths = ["doc1.pdf", "doc2.docx", "image1.png"]
results = batch_extract_text(file_paths)

for file_path, result in results.items():
    if result["success"]:
        print(f"✓ {file_path}: {len(result['text'])} 个字符")
    else:
        print(f"✗✗ {file_path}: {result['error']}")
```

## Python 脚本使用示例
```python
#!/usr/bin/env python3
from file_processor import extract_text_from_file

def main():
    # 处理不同类型的文件
    files = [
        "pdf/sample.pdf",
        "Doc/demo.pdf", 
        "Pic/demo.pdf"
    ]
    
    for file_path in files:
        print(f"\n处理文件: {file_path}")
        result = extract_text_from_file(file_path)
        
        if result["success"]:
            print(f"文件类型: {result['file_type']}")
            print(f"文本长度: {len(result['text'])} 个字符")
            print("文本预览:")
            print(result["text"][:300] + "...")
        else:
            print(f"处理失败: {result['error']}")

if __name__ == "__main__":
    main()
```

## 代码集成
```python
# 添加工具路径
import sys
sys.path.append('tools')

from file_processor import extract_text_from_file

# 处理文件
result = extract_text_from_file('your_file.pdf')
if result['success']:
    print(result['text'])
```

## 结果格式说明
所有处理器返回统一的结果格式：
```python
{
    "success": bool,        # 处理是否成功
    "text": str,           # 提取的文本内容
    "error": str,          # 错误信息（如果失败）
    "file_type": str       # 文件类型（仅统一接口返回）
}
```
