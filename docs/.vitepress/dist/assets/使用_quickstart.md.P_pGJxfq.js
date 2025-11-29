import{_ as a,c as n,o as i,af as p}from"./chunks/framework.Cm3tdt7z.js";const k=JSON.parse('{"title":"Webis 快速入门指南","description":"","frontmatter":{},"headers":[],"relativePath":"使用/quickstart.md","filePath":"使用/quickstart.md"}'),e={name:"使用/quickstart.md"};function l(t,s,h,o,r,c){return i(),n("div",null,[...s[0]||(s[0]=[p(`<h1 id="webis-快速入门指南" tabindex="-1">Webis 快速入门指南 <a class="header-anchor" href="#webis-快速入门指南" aria-label="Permalink to “Webis 快速入门指南”">​</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to “概述”">​</a></h2><p>Webis是一条从网络数据爬取、多模态清洗到专题知识库构建的全链路高效流水线，该框架集成<strong>文档、PDF、图片、HTML网页</strong>等多模态数据的清洗工具，可以自动识别文件类型并快速调用不同工具，批量清洗各类文件并提供<strong>结构化输出</strong>。当前Webis已集成四种模态数据处理工具，其中<strong>Webis_HTML</strong>工具为我们独立开发的网页数据提取工具，使用 AI 技术自动识别网页上的有价值信息。Webis_HTML已作为一个独立依赖包同步上传至PyPi。</p><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to “基本使用”">​</a></h2><h3 id="激活环境" tabindex="-1">激活环境 <a class="header-anchor" href="#激活环境" aria-label="Permalink to “激活环境”">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> activate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> webis</span></span></code></pre></div><h3 id="快速使用" tabindex="-1">快速使用 <a class="header-anchor" href="#快速使用" aria-label="Permalink to “快速使用”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 激活环境</span></span>
<span class="line"><span>conda activate webis</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 处理单个文件</span></span>
<span class="line"><span>python process_file.py tools/data/pdf/example.pdf</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 运行完整演示</span></span>
<span class="line"><span>python examples/demo.py</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 运行爬虫知识库演示</span></span>
<span class="line"><span>python examples/crawler_demo.py &quot;关键词&quot; --limit 5</span></span></code></pre></div><h3 id="详细使用示例" tabindex="-1">详细使用示例 <a class="header-anchor" href="#详细使用示例" aria-label="Permalink to “详细使用示例”">​</a></h3><h4 id="命令行使用" tabindex="-1">命令行使用 <a class="header-anchor" href="#命令行使用" aria-label="Permalink to “命令行使用”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 处理单个文件</span></span>
<span class="line"><span>python3 file_processor.py document.pdf</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看支持的文件类型</span></span>
<span class="line"><span>python3 file_processor.py</span></span></code></pre></div><h4 id="python脚本使用" tabindex="-1">Python脚本使用 <a class="header-anchor" href="#python脚本使用" aria-label="Permalink to “Python脚本使用”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span>from file_processor import extract_text_from_file</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def main():</span></span>
<span class="line"><span>    # 处理不同类型的文件</span></span>
<span class="line"><span>    files = [</span></span>
<span class="line"><span>        &quot;pdf/示例.pdf&quot;,</span></span>
<span class="line"><span>        &quot;Doc/demo.pdf&quot;, </span></span>
<span class="line"><span>        &quot;Pic/demo.pdf&quot;</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    for file_path in files:</span></span>
<span class="line"><span>        print(f&quot;\\n处理文件: {file_path}&quot;)</span></span>
<span class="line"><span>        result = extract_text_from_file(file_path)</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        if result[&quot;success&quot;]:</span></span>
<span class="line"><span>            print(f&quot;文件类型: {result[&#39;file_type&#39;]}&quot;)</span></span>
<span class="line"><span>            print(f&quot;文本长度: {len(result[&#39;text&#39;])} 字符&quot;)</span></span>
<span class="line"><span>            print(&quot;文本预览:&quot;)</span></span>
<span class="line"><span>            print(result[&quot;text&quot;][:300] + &quot;...&quot;)</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            print(f&quot;处理失败: {result[&#39;error&#39;]}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &quot;__main__&quot;:</span></span>
<span class="line"><span>    main()</span></span></code></pre></div><h4 id="代码中集成使用" tabindex="-1">代码中集成使用 <a class="header-anchor" href="#代码中集成使用" aria-label="Permalink to “代码中集成使用”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 添加工具路径</span></span>
<span class="line"><span>import sys</span></span>
<span class="line"><span>sys.path.append(&#39;tools&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from file_processor import extract_text_from_file</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 处理文件</span></span>
<span class="line"><span>result = extract_text_from_file(&#39;your_file.pdf&#39;)</span></span>
<span class="line"><span>if result[&#39;success&#39;]:</span></span>
<span class="line"><span>    print(result[&#39;text&#39;])</span></span></code></pre></div><h4 id="爬虫知识库演示" tabindex="-1">爬虫知识库演示 <a class="header-anchor" href="#爬虫知识库演示" aria-label="Permalink to “爬虫知识库演示”">​</a></h4><p><code>crawler_demo.py</code> 是一个完整的网络爬虫示例，可以自动搜索、下载并处理网络上的文档材料，生成知识库。</p><p><strong>功能特点</strong>：</p><ul><li>使用 DuckDuckGo 搜索引擎自动搜索相关材料（PDF、DOC、DOCX、PPT、PPTX、HTML等）</li><li>自动下载找到的文件到本地</li><li>使用 Webis UnifiedFileProcessor 自动处理下载的文件</li><li>生成结构化的知识库 JSON 文件</li></ul><p><strong>使用方法</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 基本用法：搜索关键词并下载处理前5个结果</span></span>
<span class="line"><span>python examples/crawler_demo.py &quot;Python教程&quot; --limit 5</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 搜索更多结果</span></span>
<span class="line"><span>python examples/crawler_demo.py &quot;机器学习&quot; --limit 10</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 指定文件类型搜索（在关键词中包含 filetype:）</span></span>
<span class="line"><span>python examples/crawler_demo.py &quot;深度学习 filetype:pdf&quot; --limit 3</span></span></code></pre></div><p><strong>输出结果</strong>：</p><ul><li>下载的文件保存在 <code>examples/outputs/downloaded_materials/</code> 目录</li><li>知识库文件保存在 <code>examples/outputs/knowledge_base.json</code></li><li>知识库包含每个文件的处理结果、提取的文本内容、文件类型等信息</li></ul><p><strong>知识库格式</strong>：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;source_file&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example.pdf&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;file_type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pdf&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;processed_time&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2025-11-27 14:00:00&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;content&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;提取的文本内容...&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;status&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;success&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p><strong>注意事项</strong>：</p><ul><li>需要配置 <code>DEEPSEEK_API_KEY</code> 环境变量，请从 <a href="https://www.siliconflow.com/" target="_blank" rel="noreferrer">SiliconFlow</a> 获取 API 密钥（用于 HTML 处理优化）</li><li>搜索功能依赖网络连接，某些网站可能无法访问</li><li>下载的文件会保存在 <code>examples/outputs/downloaded_materials/</code> 目录</li><li>建议使用 <code>--limit</code> 参数限制结果数量，避免下载过多文件</li></ul>`,27)])])}const u=a(e,[["render",l]]);export{k as __pageData,u as default};
