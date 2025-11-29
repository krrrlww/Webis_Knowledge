# 接口说明

## 1. 单独处理器接口

#### DocumentProcessor - 文档处理器

```
from file_processor import DocumentProcessor

processor = DocumentProcessor()

# 检查是否支持文件类型
if processor.can_process("test.docx"):
    # 提取文本
    result = processor.extract_text("test.docx")
    if result["success"]:
        print(result["text"])
    else:
        print(f"错误: {result['error']}")
```

#### PDFProcessor - PDF处理器

```
from file_processor import PDFProcessor

processor = PDFProcessor()

# 提取PDF文本
result = processor.extract_text("document.pdf")
if result["success"]:
    print(result["text"])  # 包含分页信息
```

#### ImageProcessor - 图片OCR处理器

```
from file_processor import ImageProcessor

processor = ImageProcessor()

# OCR识别图片
result = processor.extract_text("image.png")
if result["success"]:
    print(result["text"])
```

> **提示**: 第一次使用图片处理器时，会自动下载 EasyOCR 开源模型，会耗费一些时间，请耐心等待，后续使用将直接加载已下载的模型。如果下载失败，建议尝试使用科学上网工具。

#### HTMLProcessor - HTML处理器

**Webis_HTML** 是一个为 Webis 开发的独立的 HTML 网页数据提取工具，`html_processor.py`通过直接调用 `webis-html`Python 库实现。

- **安装方式**: 通过 `pip install webis-html`安装，已包含在 `requirements.txt`中
- **无需启动服务器**: `webis-html`库会自动处理 HTML 内容提取，无需启动额外的服务器

**使用示例**:

```
from file_processor import HTMLProcessor

processor = HTMLProcessor()

# 提取HTML文本
result = processor.extract_text("example.html")
if result["success"]:
    print(result["text"])
```

**API 密钥配置**（HTML处理必需）:

- **获取 API Key**: 请访问 [SiliconFlow](https://www.siliconflow.com/) 注册账号并获取 API 密钥

- **配置环境变量**: 

  ```bash
  export DEEPSEEK_API_KEY="your-siliconflow-api-key"
  # 或
  export LLM_PREDICTOR_API_KEY="your-siliconflow-api-key"
  ```

- **Conda 环境配置**（推荐）:

  ```bash
  conda env config vars set DEEPSEEK_API_KEY="your-siliconflow-api-key" -n webis
  conda activate webis  # 重新激活环境使配置生效
  ```

> **注意**: HTML 处理功能需要通过 SiliconFlow API 进行内容过滤优化，需要配置相应的 API 密钥。请从 [SiliconFlow](https://www.siliconflow.com/) 获取 API 密钥。不配置 API 密钥则无法使用 HTML 处理功能。

## 2. 统一处理器接口

#### UnifiedFileProcessor - 统一处理器

```
from file_processor import UnifiedFileProcessor

processor = UnifiedFileProcessor()

# 自动判断文件类型并处理
result = processor.extract_text("any_file.pdf")
print(f"文件类型: {result['file_type']}")
print(f"文本内容: {result['text']}")
```

## 3. 便捷函数接口

#### 单文件处理

```
from file_processor import extract_text_from_file

# 最简单的使用方式
result = extract_text_from_file("file.pdf")
if result["success"]:
    print(f"文件类型: {result['file_type']}")
    print(f"文本长度: {len(result['text'])}")
    print(result["text"])
```

#### 批量文件处理

```
from file_processor import batch_extract_text

# 批量处理多个文件
file_paths = ["doc1.pdf", "doc2.docx", "image1.png"]
results = batch_extract_text(file_paths)

for file_path, result in results.items():
    if result["success"]:
        print(f"{file_path}: {len(result['text'])} 字符")
    else:
        print(f"{file_path}: {result['error']}")
```