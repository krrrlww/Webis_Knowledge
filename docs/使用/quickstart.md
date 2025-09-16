# Webis使用步骤

Webis 提供三种使用方式：**API 调用、GUI 图形界面、CLI 命令行**。  
::: tip
使用前请先启动模型服务和 Web API 服务（见下文）
:::


## 快速指南

快速上手 Webis，只需以下简单几步：

```bash
# 1. 创建和激活 Python 环境
conda create -n webis python=3.10 -y
conda activate webis

# 2. 安装 Webis
pip install webis-llm

# 3. 启动模型服务（端口 8000）
python scripts/start_model_server.py

# 4. 启动 Web API 服务（端口 8002）
python scripts/start_web_server.py

# 5. 接下来，你可以通过 API、GUI 或 CLI 使用 Webis 执行抽取任务
```


## API方法 

**同步模式（适合小文件）**

```python
# 提交 HTML 文件处理请求
response = requests.post(
    "http://localhost:8002/extract/process-html",
    files=files,
    data=data
)

# 下载处理结果
response = requests.get(f"http://localhost:8002/tasks/{task_id}/download", stream=True)
```

**异步模式（适合大任务）**

```python
# 提交异步任务
response = requests.post(
    "http://localhost:8002/extract/process-async",
    files=files,
    data=data
)

# 查询任务状态
status = requests.get(f"http://localhost:8002/tasks/{async_task_id}")

# 下载结果
download = requests.get(f"http://localhost:8002/tasks/{async_task_id}/download", stream=True)
```

**运行示例：**

```bash
# 运行基础示例脚本
python samples/api_usage.py

# 启用 DeepSeek 集成（需 API key）
python samples/api_usage.py --use-deepseek --api-key YOUR_API_KEY_HERE
```

> 输入文件目录：`input_html/`
> 输出文件：
>
> * 同步 → `{task_id}_results.zip`
> * 异步 → `{async_task_id}_async_results.zip`



## GUI方法

通过 Web 浏览器使用 Webis：

1. 启动 Web API 服务（参见快速指南第 4 步）。
2. 打开浏览器，访问：`http://localhost:8002`
3. 在界面上传 HTML 文件，点击 **Extract** 开始处理
4. 下载生成的 ZIP 结果文件

!!! tip "建议"
GUI 方式友好易用，适合对命令行不熟悉的用户快速体验功能。



## CLI方法

**基础用法**

```bash
./samples/cli_usage.sh
```

结果将保存到 `output_basic/` 目录。

**常用命令：**

```bash
# 查看版本号
$PROJECT_ROOT/bin/webis version

# 检查 API 是否可用（需 API key）
$PROJECT_ROOT/bin/webis check-api --api-key YOUR_API_KEY

# 查看帮助信息
$PROJECT_ROOT/bin/webis --help
$PROJECT_ROOT/bin/webis extract --help
```



