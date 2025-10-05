# Troubleshooting Guide

This article lists common errors and solutions when using Webis.

## Cannot Access API: 401 Unauthorized

**Reasons**:

- No valid API Key provided, or server has authentication enabled.

**Solutions**:

- Check `api_keys.json` in the project root directory and copy a valid key.
- Add `api_key` parameter when calling the API, for example:

```bash
curl -X POST http://localhost:8000/generate   -H "Content-Type: application/json"   -d '{"prompt": "hello", "api_key": "your-key"}'
```

---

## Model Loading Failed: Insufficient GPU Memory

**Error**:

```text
ValueError: Free memory on device (...) is less than desired GPU memory utilization (...)
```

**Reason**:

- Remaining GPU memory is less than the memory limit required by the model.

**Solution**:

- Set lower `GPU_MEMORY_UTILIZATION`:

```bash
export GPU_MEMORY_UTILIZATION=0.6
```

---

## Cannot Find libcudart.so Error

```text
ImportError: libcudart.so.11.0: cannot open shared object file: No such file or directory
```

**Reason**:

- CUDA dynamic library not installed or version incompatible.

**Solution**:

- Install PyTorch with corresponding CUDA via conda:

```bash
conda install pytorch-cuda=12.1 -c pytorch -c nvidia
```

---

## Build Failure: C Compiler Not Found

```text
RuntimeError: Failed to find C compiler.
```

**Reason**:

- Missing compilation tools like `gcc`, Triton failed when compiling model kernels.

**Solution**:

```bash
sudo apt update
sudo apt install build-essential
```

---

## HuggingFace Model Download Failure (WSL Network Issue)

**Symptoms**:

- Model download stuck or prompts `ConnectionError`, `Failed to establish new connection`

**Solution**:

1. Run in Windows CMD:

```cmd
ipconfig
```

2. Find the machine's IPv4 address, for example `192.168.0.123`

3. Set proxy in WSL:

```bash
export http_proxy=http://192.168.0.123:7890
export https_proxy=http://192.168.0.123:7890
```

---

## No Model Output / API Returns Empty String

**Possible Reasons**:

- `prompt` content is incomplete or lacks context.
- `max_tokens` set too low, causing generation to be truncated.

**Suggestions**:

- Appropriately increase the `max_tokens` parameter (e.g., 256 → 512)
- Use clear prompts, for example:

```text
Please extract contact name and phone number from the following HTML: <html>...</html>
```

---

## Package Manager Lock Error (dpkg/apt)

**Error**:

```text
Waiting for cache lock: Could not get lock /var/lib/dpkg/lock-frontend. It is held by process
```

**Reason**:

- Another package management process (apt, apt-get, dpkg, or system update) is running
- Previous installation was interrupted, leaving lock files

**Solution**:

1. If a legitimate update is running, wait for it to complete
2. If no other updates are present, check which process is holding the lock:

```bash
ps aux | grep -i apt
```

3. If necessary, delete lock files (use with caution):

```bash
sudo rm /var/lib/apt/lists/lock
sudo rm /var/lib/dpkg/lock 
sudo rm /var/lib/dpkg/lock-frontend
sudo dpkg --configure -a
```