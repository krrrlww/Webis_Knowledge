# Webis Installation Steps

## Prerequisites
- Python 3.9+
- Conda environment or uv environment

## Environment Configuration

### Method 1: Automatic Configuration Script (Recommended)
```bash
# Run the automatic configuration script (for Conda environment)
bash setup/conda_setup.sh

# If using uv environment
bash setup/uv_setup.sh
```

### Method 2: Manual Configuration
```bash
# Create and activate a Conda environment
conda create -n webis python=3.9 -y
conda activate webis

# Install dependency packages
pip install -r setup/requirements.txt
```

### Method 3: Using Homebrew (macOS)
```bash
# Install Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Python
brew install python

# Verify installation
python3 --version
pip3 --version

# Install dependencies
pip install -r setup/requirements.txt
```
