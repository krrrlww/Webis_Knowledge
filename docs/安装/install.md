# Webis 安装步骤

## 前置要求
- Python 3.9+
- Conda 环境或 uv 环境

## 环境配置

#### 方式一：自动配置脚本（推荐）

```
# 运行自动配置脚本
bash setup/conda_setup.sh
# 如果是uv环境
bash setup/uv_setup.sh
```

#### 方式二：手动配置

```
# 创建并激活Conda环境
conda create -n webis python=3.9 -y
conda activate webis

# 安装依赖包
pip install -r setup/requirements.txt
```

#### 方式三：使用 Homebrew (macOS)

```
# 安装 Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 安装 Python
brew install python

# 验证安装
python3 --version
pip3 --version

# 安装依赖
pip install -r setup/requirements.txt
```
