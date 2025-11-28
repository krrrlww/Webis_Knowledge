# Webis 安装步骤

## 前置要求
- Python 3.9+
- Conda 环境或 uv 环境

## 环境配置

### 方法一：自动配置脚本（推荐）
```bash
# 运行自动配置脚本（适用于 Conda 环境）
bash setup/conda_setup.sh

# 如果使用 uv 环境
bash setup/uv_setup.sh
```

### 方法二：手动配置
```bash
# 创建并激活 Conda 环境
conda create -n webis python=3.9 -y
conda activate webis

# 安装依赖包
pip install -r setup/requirements.txt
```

### 方法三：使用 Homebrew（macOS）
```bash
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
