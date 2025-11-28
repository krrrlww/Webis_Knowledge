# 故障排除指南

本文档列出了使用 Webis 时的常见错误和解决方案。

## 安装依赖时出现错误

### 原因：
- 使用了不兼容的 Python 版本，或包管理器配置问题。

### 解决方案：
- 确保您使用的是兼容的 Python 版本（3.8+）。
- 您可能需要使用 `pip3` 而不是 `pip`。

---

## EasyOCR 首次启动运行非常慢

### 原因：
- EasyOCR 在首次使用时需要下载模型文件。

### 解决方案：
- 请耐心等待模型文件下载完成。下载完成后，后续使用会更快。

---

## 图像识别准确率低

### 原因：
- 图像分辨率过低、文本不清晰，或置信度阈值设置不当。

### 解决方案：
- 提高图像分辨率
- 确保文本清晰
- 调整置信度阈值（在代码中设置 `confidence > 0.5`）

---

## 无法从 PDF 提取文本

### 原因：
- PDF 可能是扫描版本，不包含可提取的文本层。

### 解决方案：
- 建议先将其转换为图像，然后使用 OCR 处理。

---

## 无法访问 API：401 未授权

### 原因：
- 未提供有效的 API 密钥，或服务器已启用身份验证。

### 解决方案：
- 检查项目根目录中的 `api_keys.json` 文件并复制有效密钥。
- 调用 API 时添加 `api_key` 参数。示例：
```bash
curl -X POST http://localhost:8000/generate   -H "Content-Type: application/json"   -d '{"prompt": "hello", "api_key": "your-key"}'
```

---

## 模型加载失败：GPU 内存不足

### 错误信息：
```text
ValueError: Free memory on device (...) is less than desired GPU memory utilization (...)
```

### 原因：
- 剩余的 GPU 内存少于模型所需的内存限制。

### 解决方案：
- 降低 `GPU_MEMORY_UTILIZATION` 设置：
```bash
export GPU_MEMORY_UTILIZATION=0.6
```

---

## 错误：找不到 libcudart.so

### 错误信息：
```text
ImportError: libcudart.so.11.0: cannot open shared object file: No such file or directory
```

### 原因：
- 未安装 CUDA 动态库，或库版本不兼容。

### 解决方案：
- 通过 conda 安装对应 CUDA 版本的 PyTorch：
```bash
conda install pytorch-cuda=12.1 -c pytorch -c nvidia
```

---

## 构建失败：找不到 C 编译器

### 错误信息：
```text
RuntimeError: Failed to find C compiler.
```

### 原因：
- 缺少编译工具（如 `gcc`），导致 Triton 编译模型内核时失败。

### 解决方案：
```bash
sudo apt update
sudo apt install build-essential
```

---

## 无模型输出 / API 返回空字符串

### 原因：
- `prompt` 内容不完整或缺乏上下文。
- `max_tokens`（要生成的最大 token 数）设置过低，导致生成的内容被截断。

### 解决方案：
- 适当增加 `max_tokens` 参数（例如，256 → 512）。
- 使用清晰的提示。示例：
```text
请从以下 HTML 中提取联系人姓名和电话号码：<html>...</html>
```

---

## 包管理器锁定错误（dpkg/apt）

### 错误信息：
```text
Waiting for cache lock: Could not get lock /var/lib/dpkg/lock-frontend. It is held by process
```

### 原因：
- 另一个包管理进程（apt、apt-get、dpkg 或系统更新）正在运行。
- 之前的安装过程被中断，留下残留的锁定文件。

### 解决方案：
1. 如果合法的更新进程正在运行，请等待其完成。
2. 如果没有其他更新进程在运行，检查哪个进程持有锁定：
```bash
ps aux | grep -i apt
```
3. 如有必要，删除锁定文件（谨慎使用）：
```bash
sudo rm /var/lib/apt/lists/lock
sudo rm /var/lib/dpkg/lock 
sudo rm /var/lib/dpkg/lock-frontend
sudo dpkg --configure -a
```
