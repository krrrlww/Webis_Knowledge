import{_ as s,c as n,o as e,af as i}from"./chunks/framework.Cm3tdt7z.js";const b=JSON.parse('{"title":"Webis 安装步骤","description":"","frontmatter":{},"headers":[],"relativePath":"安装/install.md","filePath":"安装/install.md"}'),l={name:"安装/install.md"};function p(t,a,r,h,c,o){return e(),n("div",null,[...a[0]||(a[0]=[i(`<h1 id="webis-安装步骤" tabindex="-1">Webis 安装步骤 <a class="header-anchor" href="#webis-安装步骤" aria-label="Permalink to “Webis 安装步骤”">​</a></h1><h2 id="前置要求" tabindex="-1">前置要求 <a class="header-anchor" href="#前置要求" aria-label="Permalink to “前置要求”">​</a></h2><ul><li>Python 3.9+</li><li>Conda 环境或 uv 环境</li></ul><h2 id="环境配置" tabindex="-1">环境配置 <a class="header-anchor" href="#环境配置" aria-label="Permalink to “环境配置”">​</a></h2><h4 id="方式一-自动配置脚本-推荐" tabindex="-1">方式一：自动配置脚本（推荐） <a class="header-anchor" href="#方式一-自动配置脚本-推荐" aria-label="Permalink to “方式一：自动配置脚本（推荐）”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 运行自动配置脚本</span></span>
<span class="line"><span>bash setup/conda_setup.sh</span></span>
<span class="line"><span># 如果是uv环境</span></span>
<span class="line"><span>bash setup/uv_setup.sh</span></span></code></pre></div><h4 id="方式二-手动配置" tabindex="-1">方式二：手动配置 <a class="header-anchor" href="#方式二-手动配置" aria-label="Permalink to “方式二：手动配置”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 创建并激活Conda环境</span></span>
<span class="line"><span>conda create -n webis python=3.9 -y</span></span>
<span class="line"><span>conda activate webis</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装依赖包</span></span>
<span class="line"><span>pip install -r setup/requirements.txt</span></span></code></pre></div><h4 id="方式三-使用-homebrew-macos" tabindex="-1">方式三：使用 Homebrew (macOS) <a class="header-anchor" href="#方式三-使用-homebrew-macos" aria-label="Permalink to “方式三：使用 Homebrew (macOS)”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 安装 Homebrew</span></span>
<span class="line"><span>/bin/bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装 Python</span></span>
<span class="line"><span>brew install python</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 验证安装</span></span>
<span class="line"><span>python3 --version</span></span>
<span class="line"><span>pip3 --version</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装依赖</span></span>
<span class="line"><span>pip install -r setup/requirements.txt</span></span></code></pre></div>`,10)])])}const u=s(l,[["render",p]]);export{b as __pageData,u as default};
