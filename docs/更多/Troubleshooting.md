# 疑难解答指南

本文列出了使用 Webis 时常见的错误及解决方法。


## 无法访问 API：401 Unauthorized

**原因**：

- 没有提供有效的 API Key，或服务器开启了认证。

**解决方法**：

- 检查项目根目录下的 ``api_keys.json`` 并复制一个有效的 key。
- 调用 API 时添加 ``api_key`` 参数，例如：

```bash
curl -X POST http://localhost:8000/generate   -H "Content-Type: application/json"   -d '{"prompt": "hello", "api_key": "your-key"}'
```

---

## 模型加载失败：GPU 显存不足

**报错**：

```text
ValueError: Free memory on device (...) is less than desired GPU memory utilization (...)
```

**原因**：

- 剩余 GPU 显存小于模型所需的显存限制。

**解决方法**：

- 设置更低的 ``GPU_MEMORY_UTILIZATION``：

```bash
export GPU_MEMORY_UTILIZATION=0.6
```

---

## 找不到 libcudart.so 错误

```text
ImportError: libcudart.so.11.0: cannot open shared object file: No such file or directory
```

**原因**：

- CUDA 动态库未安装或版本不兼容。

**解决方法**：

- 通过 conda 安装带对应 CUDA 的 PyTorch：

```bash
conda install pytorch-cuda=12.1 -c pytorch -c nvidia
```

---

## 构建失败：未找到 C 编译器

```text
RuntimeError: Failed to find C compiler.
```

**原因**：

- 缺少 ``gcc`` 等编译工具，Triton 在编译模型内核时失败。

**解决方法**：

```bash
sudo apt update
sudo apt install build-essential
```

---

## HuggingFace 模型下载失败（WSL 网络问题）

**现象**：

- 模型下载卡住或提示 `ConnectionError`, `Failed to establish new connection`

**解决方法**：

1. 在 Windows CMD 中运行：

```cmd
ipconfig
```

2. 找到机器的 IPv4 地址，例如 `192.168.0.123`

3. 在 WSL 中设置代理：

```bash
export http_proxy=http://192.168.0.123:7890
export https_proxy=http://192.168.0.123:7890
```

---

## 无模型输出 / API 返回空字符串

**可能原因**：

- ``prompt`` 内容不完整或缺乏上下文。
- ``max_tokens`` 设置过低，导致生成被截断。

**建议**：

- 适当增加 ``max_tokens`` 参数（如 256 → 512）
- 使用清晰的 prompt，例如：

```text
Please extract contact name and phone number from the following HTML: <html>...</html>
```

---

## 包管理器锁错误（dpkg/apt）

**报错**：

```text
Waiting for cache lock: Could not get lock /var/lib/dpkg/lock-frontend. It is held by process
```

**原因**：

- 另一个软件包管理进程（apt, apt-get, dpkg 或系统更新）正在运行  
- 上一次安装被中断，遗留了锁文件

**解决方法**：

1. 如果有合法更新在运行，等待完成  
2. 如果没有其他更新，检查哪个进程占用锁：

```bash
ps aux | grep -i apt
```

3. 如有必要，删除锁文件（谨慎使用）：

```bash
sudo rm /var/lib/apt/lists/lock
sudo rm /var/lib/dpkg/lock 
sudo rm /var/lib/dpkg/lock-frontend
sudo dpkg --configure -a
```
