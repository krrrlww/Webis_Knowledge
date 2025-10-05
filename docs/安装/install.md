# Webis Installation Steps

## Prerequisites
::: warning
Before installing Webis, please ensure you have the following dependencies:
:::

- **Python 3.10**
- Recommended: **Conda** for environment management
- **NVIDIA GPU** (optional, for CUDA acceleration)

## Method 1: Installation via pip (Recommended)
Webis
```bash
conda create -n webis python=3.10 -y
conda activate webis

pip install webis-llm
```

## Method 2: Installation from Source

```bash
git clone https://github.com/TheBinKing/Webis.git
cd Webis

pip install -e .

# Add bin directory to PATH
export PATH="$PATH:$(pwd)/bin"
echo 'export PATH="$PATH:$(pwd)/bin"' >> ~/.bashrc
source ~/.bashrc
```