# Webis 快速入门指南

## 概述
Webis是一条从网络数据爬取、多模态清洗到专题知识库构建的全链路高效流水线，该框架集成**文档、PDF、图片、HTML网页**等多模态数据的清洗工具，可以自动识别文件类型并快速调用不同工具，批量清洗各类文件并提供**结构化输出**。当前Webis已集成四种模态数据处理工具，其中**Webis_HTML**工具为我们独立开发的网页数据提取工具，使用 AI 技术自动识别网页上的有价值信息。Webis_HTML已作为一个独立依赖包同步上传至PyPi。


## 基本使用

### 激活环境
```bash
conda activate webis
```

### 快速使用

```
# 激活环境
conda activate webis

# 处理单个文件
python process_file.py tools/data/pdf/example.pdf

# 运行完整演示
python examples/demo.py

# 运行爬虫知识库演示
python examples/crawler_demo.py "关键词" --limit 5

```

### 详细使用示例

#### 命令行使用

```
# 处理单个文件
python3 file_processor.py document.pdf

# 查看支持的文件类型
python3 file_processor.py
```

#### Python脚本使用

```
#!/usr/bin/env python3
from file_processor import extract_text_from_file

def main():
    # 处理不同类型的文件
    files = [
        "pdf/示例.pdf",
        "Doc/demo.pdf", 
        "Pic/demo.pdf"
    ]
    
    for file_path in files:
        print(f"\n处理文件: {file_path}")
        result = extract_text_from_file(file_path)
        
        if result["success"]:
            print(f"文件类型: {result['file_type']}")
            print(f"文本长度: {len(result['text'])} 字符")
            print("文本预览:")
            print(result["text"][:300] + "...")
        else:
            print(f"处理失败: {result['error']}")

if __name__ == "__main__":
    main()
```

#### 代码中集成使用

```
# 添加工具路径
import sys
sys.path.append('tools')

from file_processor import extract_text_from_file

# 处理文件
result = extract_text_from_file('your_file.pdf')
if result['success']:
    print(result['text'])
```

#### 爬虫知识库演示

`crawler_demo.py` 是一个完整的网络爬虫示例，可以自动搜索、下载并处理网络上的文档材料，生成知识库。

**功能特点**：

- 使用 DuckDuckGo 搜索引擎自动搜索相关材料（PDF、DOC、DOCX、PPT、PPTX、HTML等）
- 自动下载找到的文件到本地
- 使用 Webis UnifiedFileProcessor 自动处理下载的文件
- 生成结构化的知识库 JSON 文件

**使用方法**：

```
# 基本用法：搜索关键词并下载处理前5个结果
python examples/crawler_demo.py "Python教程" --limit 5

# 搜索更多结果
python examples/crawler_demo.py "机器学习" --limit 10

# 指定文件类型搜索（在关键词中包含 filetype:）
python examples/crawler_demo.py "深度学习 filetype:pdf" --limit 3
```

**输出结果**：

- 下载的文件保存在 `examples/outputs/downloaded_materials/` 目录
- 知识库文件保存在 `examples/outputs/knowledge_base.json`
- 知识库包含每个文件的处理结果、提取的文本内容、文件类型等信息

**知识库格式**：

```json
[
  {
    "source_file": "example.pdf",
    "file_type": "pdf",
    "processed_time": "2025-11-27 14:00:00",
    "content": "提取的文本内容...",
    "status": "success",
    "error": ""
  }
]
```

**注意事项**：

- 需要配置 `DEEPSEEK_API_KEY` 环境变量，请从 [SiliconFlow](https://www.siliconflow.com/) 获取 API 密钥（用于 HTML 处理优化）
- 搜索功能依赖网络连接，某些网站可能无法访问
- 下载的文件会保存在 `examples/outputs/downloaded_materials/` 目录
- 建议使用 `--limit` 参数限制结果数量，避免下载过多文件
