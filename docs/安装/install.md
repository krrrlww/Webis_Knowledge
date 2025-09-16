# Webis安装步骤

## 前置条件
::: warning
在安装 Webis 之前，请确保已满足如下依赖：
:::

- **Python 3.10**
- 推荐使用 **Conda** 管理环境
- **NVIDIA GPU**（可选，用于启用 CUDA 加速）


## 方法一：通过 pip 安装（推荐）
Webis
```bash
conda create -n webis python=3.10 -y
conda activate webis

pip install webis-llm
```


## 方法二：源码安装

```bash
git clone https://github.com/TheBinKing/Webis.git
cd Webis

pip install -e .

# 将 bin 目录加入 PATH
export PATH="$PATH:$(pwd)/bin"
echo 'export PATH="$PATH:$(pwd)/bin"' >> ~/.bashrc
source ~/.bashrc
```
