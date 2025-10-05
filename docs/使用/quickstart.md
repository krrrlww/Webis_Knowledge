# Webis Usage Guide

Webis provides three usage methods: **API calling, GUI graphical interface, CLI command line**.
::: tip
Please start the model service and Web API service first before using (see below)
:::

## Quick Start Guide

To get started with Webis quickly, follow these simple steps:

```bash
# 1. Create and activate Python environment
conda create -n webis python=3.10 -y
conda activate webis

# 2. Install Webis
pip install webis-llm

# 3. Start model service (port 8000)
python scripts/start_model_server.py

# 4. Start Web API service (port 8002)
python scripts/start_web_server.py

# 5. Next, you can use Webis to perform extraction tasks via API, GUI, or CLI
```

## API Method

**Synchronous Mode (suitable for small files)**

```python
# Submit HTML file processing request
response = requests.post(
    "http://localhost:8002/extract/process-html",
    files=files,
    data=data
)

# Download processing results
response = requests.get(f"http://localhost:8002/tasks/{task_id}/download", stream=True)
```

**Asynchronous Mode (suitable for large tasks)**

```python
# Submit asynchronous task
response = requests.post(
    "http://localhost:8002/extract/process-async",
    files=files,
    data=data
)

# Query task status
status = requests.get(f"http://localhost:8002/tasks/{async_task_id}")

# Download results
download = requests.get(f"http://localhost:8002/tasks/{async_task_id}/download", stream=True)
```

**Running Examples:**

```bash
# Run basic example script
python samples/api_usage.py

# Enable DeepSeek integration (requires API key)
python samples/api_usage.py --use-deepseek --api-key YOUR_API_KEY_HERE
```

> Input file directory: `input_html/`
> Output files:
> 
> * Synchronous → `{task_id}_results.zip`
> * Asynchronous → `{async_task_id}_async_results.zip`

## GUI Method

Using Webis through a web browser:

1. Start the Web API service (see step 4 of the quick guide).
2. Open a browser and visit: `http://localhost:8002`
3. Upload HTML files in the interface and click **Extract** to start processing
4. Download the generated ZIP result file

!!! tip "Recommendation"
The GUI method is user-friendly and suitable for users who are not familiar with command line to quickly experience the functionality.

## CLI Method

**Basic Usage**

```bash
./samples/cli_usage.sh
```

Results will be saved to the `output_basic/` directory.

**Common Commands:**

```bash
# View version
$PROJECT_ROOT/bin/webis version

# Check if API is available (requires API key)
$PROJECT_ROOT/bin/webis check-api --api-key YOUR_API_KEY

# View help information
$PROJECT_ROOT/bin/webis --help
$PROJECT_ROOT/bin/webis extract --help
```