# Troubleshooting Guide
This document lists common errors and solutions when using Webis.

### Q: Error occurs while installing dependencies?
A: Ensure you are using a compatible Python version (3.8+). You may need to use `pip3` instead of `pip`.

### Q: EasyOCR runs very slowly on the first launch?
A: EasyOCR downloads model files during the first use. Please wait patiently.

### Q: Low accuracy in image recognition?
A: Try the following:
- Improve image resolution
- Ensure text clarity
- Adjust the confidence threshold (set `confidence > 0.5` in the code)

### Q: Failed to extract text from PDF?
A: The PDF may be a scanned version. It is recommended to convert it to an image first and then process it with OCR.

---

## Unable to Access API: 401 Unauthorized
### Cause:
- No valid API key provided, or the server has enabled authentication.

### Solution:
- Check the `api_keys.json` file in the project root directory and copy a valid key.
- Add the `api_key` parameter when calling the API. Example:
```bash
curl -X POST http://localhost:8000/generate   -H "Content-Type: application/json"   -d '{"prompt": "hello", "api_key": "your-key"}'
```

---

## Model Loading Failed: Insufficient GPU Memory
### Error Message:
```text
ValueError: Free memory on device (...) is less than desired GPU memory utilization (...)
```

### Cause:
- The remaining GPU memory is less than the memory limit required by the model.

### Solution:
- Reduce the `GPU_MEMORY_UTILIZATION` setting:
```bash
export GPU_MEMORY_UTILIZATION=0.6
```

---

## Error: libcudart.so Not Found
### Error Message:
```text
ImportError: libcudart.so.11.0: cannot open shared object file: No such file or directory
```

### Cause:
- CUDA dynamic library is not installed, or the library version is incompatible.

### Solution:
- Install PyTorch with the corresponding CUDA version via conda:
```bash
conda install pytorch-cuda=12.1 -c pytorch -c nvidia
```

---

## Build Failed: C Compiler Not Found
### Error Message:
```text
RuntimeError: Failed to find C compiler.
```

### Cause:
- Missing compilation tools such as `gcc`, leading to failure when Triton compiles model kernels.

### Solution:
```bash
sudo apt update
sudo apt install build-essential
```

---

## HuggingFace Model Download Failed (WSL Network Issue)
### Symptom:
- Model download gets stuck, or errors like `ConnectionError` or `Failed to establish new connection` are displayed.

### Solution:
1. Run the following command in Windows Command Prompt (CMD):
```cmd
ipconfig
```
2. Find the device's IPv4 address (e.g., `192.168.0.123`).
3. Set up a proxy in WSL:
```bash
export http_proxy=http://192.168.0.123:7890
export https_proxy=http://192.168.0.123:7890
```

---

## No Model Output / API Returns Empty String
### Possible Causes:
- The `prompt` content is incomplete or lacks context.
- The `max_tokens` (maximum number of tokens to generate) is set too low, causing the generated content to be truncated.

### Recommendations:
- Appropriately increase the `max_tokens` parameter (e.g., 256 → 512).
- Use clear prompts. Example:
```text
Please extract contact names and phone numbers from the following HTML: <html>...</html>
```

---

## Package Manager Lock Error (dpkg/apt)
### Error Message:
```text
Waiting for cache lock: Could not get lock /var/lib/dpkg/lock-frontend. It is held by process
```

### Cause:
- Another package management process (apt, apt-get, dpkg, or system update) is running.
- The previous installation process was interrupted, leaving residual lock files.

### Solution:
1. If a legitimate update process is running, wait for it to complete.
2. If no other update processes are running, check which process is holding the lock:
```bash
ps aux | grep -i apt
```
3. Delete lock files if necessary (use with caution):
```bash
sudo rm /var/lib/apt/lists/lock
sudo rm /var/lib/dpkg/lock 
sudo rm /var/lib/dpkg/lock-frontend
sudo dpkg --configure -a
```