# Performance Optimization Guide

> This guide provides performance optimization tips for running **Webis** on local or cloud servers.
> Since Webis is based on vLLM and large language models, **GPU memory** and **CPU throughput** greatly affect performance.

## Hardware Recommendations

- **GPU**: NVIDIA GPU supporting CUDA
  - Recommended: ≥ 8GB memory
  - Minimum: 6GB memory (need to reduce `--memory-limit` and precision)
- **CPU**: ≥ 4 physical cores
- **Memory**: ≥ 16GB
- **Hard Drive**: SSD (speeds up model loading)

## GPU Memory Optimization

1. **Adjust Memory Utilization**
   - By default, vLLM uses 90% of available memory
   - Can be reduced when memory is insufficient:

```bash
python scripts/start_model_server.py --memory-limit 0.6
```

2. **Use Low Precision**

   - `float16`: Significantly reduces memory usage with minimal precision loss
   - `int8` quantization: Further reduces memory but may affect results

   Example (modify model loading in `start_model_server.py`):

```python
model = LLM(
    model=model_path,
    tensor_parallel_size=1,
    gpu_memory_utilization=gpu_memory_utilization,
    trust_remote_code=True,
    dtype="float16"
)
```

3. **Release Memory Before Starting**

```bash
nvidia-smi
kill -9 <PID>
```

## CPU and Concurrency Optimization

1. **Increase Concurrent Requests**

```bash
uvicorn scripts.start_model_server:app --host 0.0.0.0 --port 8000 --workers 2
```

2. **Request Batching**
   - vLLM supports batch processing of multiple prompts
   - Recommend merging small requests into one API call

3. **Batch Processing**
   - Use `batch_extract_text()` to process multiple files

4. **Parallel Processing**
   - For large numbers of files, consider multi-process parallel processing

## Disk and Model Loading

1. **Cache Models**
   HuggingFace cache directory:

```bash
~/.cache/huggingface/hub
```

2. **Use SSD Storage**
   Model loading speed is much faster than HDD

3. **Cache Results**
   - For repeatedly processed files, it is recommended to cache the results

4. **Lazy Loading**
   - The image processor adopts lazy loading to avoid unnecessary model initialization

## Network Optimization

1. Choose cloud servers in regions closest to users
2. Use reverse proxies like Nginx and enable HTTP keep-alive
3. Enable response compression (gzip)

## Common Optimization Scenarios

- **Low Memory GPU (6GB)**:
  - `--memory-limit 0.6`
  - `dtype="float16"`
  - Reduce `max_tokens` in API requests

- **High Concurrency API**:
  - Increase `uvicorn` workers
  - Use batching

- **Slow Model Loading**:
  - Keep service running continuously, avoid frequent restarts
  - Put models on SSD

## Troubleshooting

- **"No available memory for cache blocks"**: Reduce `--memory-limit` or free up memory
- **"Free memory on device ... less than desired"**: Reduce memory utilization or close other GPU processes
- **"CUDA not found"**: Install NVIDIA drivers and CUDA toolkit