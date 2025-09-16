# 性能优化指南

> 本指南提供在本地或云服务器运行 **Webis** 时的性能优化技巧。  
> 由于 Webis 基于 vLLM 和大语言模型，**GPU 显存**和 **CPU 吞吐量** 对性能影响很大。


## 硬件推荐

- **GPU**：支持 CUDA 的 NVIDIA GPU  
  - 推荐：≥ 8GB 显存  
  - 最低：6GB 显存（需降低 ``--memory-limit`` 和精度）  
- **CPU**：≥ 4 个物理核心  
- **内存**：≥ 16GB  
- **硬盘**：SSD（加快模型加载速度）  


## GPU 显存优化

1. **调整显存利用率**  
   - 默认 vLLM 使用 90% 可用显存  
   - 显存不足时可降低：  

```bash
python scripts/start_model_server.py --memory-limit 0.6
```

2. **使用低精度**  

   - ``float16``：显著减少显存占用，精度损失较小  
   - ``int8`` 量化：进一步减少显存，但可能影响效果  

   示例（在 ``start_model_server.py`` 中修改模型加载）：  

```python
model = LLM(
    model=model_path,
    tensor_parallel_size=1,
    gpu_memory_utilization=gpu_memory_utilization,
    trust_remote_code=True,
    dtype="float16"
)
```

3. **释放显存后再启动**  

```bash
nvidia-smi
kill -9 <PID>
```


## CPU 与并发优化

1. **提升并发请求数**  

```bash
uvicorn scripts.start_model_server:app --host 0.0.0.0 --port 8000 --workers 2
```

2. **请求批处理**  
   - vLLM 支持批量处理多条 prompt  
   - 建议合并小请求为一次 API 调用  


## 磁盘与模型加载

1. **缓存模型**  
   HuggingFace 缓存目录：

```bash
~/.cache/huggingface/hub
```

2. **使用 SSD 存储**  
   模型加载速度远快于 HDD  


## 网络优化

1. 云服务器选择离用户最近的区域  
2. 使用 Nginx 等反向代理，启用 HTTP keep-alive  
3. 启用响应压缩（gzip）  


## 常见优化场景

- **低显存 GPU (6GB)**：  
  - ``--memory-limit 0.6``  
  - ``dtype="float16"``  
  - 降低 API 请求中的 ``max_tokens``  

- **高并发 API**：  
  - 增加 ``uvicorn`` workers  
  - 使用批处理  

- **模型加载慢**：  
  - 保持服务持续运行，避免频繁重启  
  - 模型放在 SSD 上  


## 故障排查

- **"No available memory for cache blocks"**：降低 ``--memory-limit`` 或释放显存  
- **"Free memory on device ... less than desired"**：减少显存利用率或关闭其他 GPU 进程  
- **"CUDA not found"**：安装 NVIDIA 驱动和 CUDA 工具包  