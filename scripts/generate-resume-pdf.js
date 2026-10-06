/* eslint-disable @typescript-eslint/no-require-imports */
const puppeteer = require('puppeteer');
const path = require('path');

async function generateResumePDF() {
  const outputPath = path.join(__dirname, '..', 'public', 'resume.pdf');

  // Read the markdown content

  // Convert markdown to HTML with ATS-friendly styling
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Kishan Ramesha - Resume</title>
  <style>
    @page {
      size: A4;
      margin: 0.75in;
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
      font-size: 10.5pt;
      line-height: 1.5;
      color: #000;
      background: #fff;
    }
    h1 {
      font-size: 24pt;
      font-weight: 700;
      margin-bottom: 4pt;
      color: #000;
    }
    h2 {
      font-size: 13pt;
      font-weight: 700;
      margin-top: 16pt;
      margin-bottom: 8pt;
      padding-bottom: 4pt;
      border-bottom: 1.5pt solid #000;
      color: #000;
    }
    h3 {
      font-size: 11pt;
      font-weight: 700;
      margin-top: 10pt;
      margin-bottom: 4pt;
      color: #000;
    }
    p {
      margin-bottom: 6pt;
    }
    strong {
      font-weight: 700;
      color: #000;
    }
    ul {
      margin-left: 18pt;
      margin-bottom: 8pt;
    }
    li {
      margin-bottom: 4pt;
    }
    a {
      color: #0066cc;
      text-decoration: none;
    }
    .header {
      text-align: center;
      margin-bottom: 16pt;
    }
    .contact {
      font-size: 10pt;
      margin-top: 6pt;
    }
    .section {
      margin-bottom: 14pt;
    }
    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 4pt;
    }
    .job-title {
      font-weight: 600;
      font-size: 11pt;
    }
    .company {
      font-weight: 600;
      font-size: 10.5pt;
    }
    .date {
      font-style: italic;
      color: #333;
      font-size: 10pt;
    }
    hr {
      border: none;
      border-top: 1pt solid #333;
      margin: 12pt 0;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Kishan Ramesha</h1>
    <div class="contact">
      <strong>Contact:</strong> <a href="tel:+916361151894">+91 63611 51894</a> | <a href="mailto:kishanramesha@outlook.com">kishanramesha@outlook.com</a><br>
      <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/k4nr">linkedin.com/in/k4nr</a> |
      <strong>GitHub:</strong> <a href="https://github.com/KishanR-dev">github.com/KishanR-dev</a><br>
      <strong>Portfolio:</strong> <a href="https://kishan-portfolio-gamma-steel.vercel.app/">https://kishan-portfolio-gamma-steel.vercel.app/</a>
    </div>
  </div>

  <hr>

  <div class="section">
    <h2>Professional Summary</h2>
    <p>
      Engineering professional with demonstrated capability in build quality, system transformation, CI/CD automation, and observability.
      Delivered +40% code generation efficiency improvements, +25% throughput gains through concurrency optimization, and -30% manual effort
      reduction via automation. Hands-on experience across the full engineering lifecycle: build pipelines, quality automation, transformation
      workflows, requirements traceability, and monitoring infrastructure. Background spans AI evaluation, LLM engineering, and manufacturing
      systems with focus on RLHF workflows, statistical analysis, and cross-functional collaboration.
    </p>
  </div>

  <div class="section">
    <h2>Core Skills &amp; Technologies</h2>
    <p>
      <strong>Languages:</strong> Python, Swift (code-level), C++, SQL, JavaScript<br>
      <strong>AI/ML:</strong> LangChain, LLM APIs (Gemini, OpenAI), RLHF, Code Generation, Model Evaluation<br>
      <strong>Automation &amp; Quality:</strong> CI/CD, GitHub Actions, Pytest, Ruff, Bandit, pip-audit, Statistical Analysis<br>
      <strong>Engineering:</strong> Build Pipelines, Quality Engineering, System Transformation, Concurrency Management, Performance Optimization<br>
      <strong>Observability:</strong> Monitoring Infrastructure, Dashboards, Requirements Traceability, Logging, Instrumentation<br>
      <strong>Tools:</strong> Git, FastAPI, Asyncio, REST APIs, State Machines, React, Node.js
    </p>
  </div>

  <div class="section">
    <h2>Professional Experience</h2>

    <div style="margin-bottom: 14pt;">
      <div class="job-header">
        <div>
          <div class="job-title">Business Analyst - AI Evaluation</div>
          <div class="company">Turing</div>
        </div>
        <div class="date">Jan. 2026 - Apr. 2026 | Remote</div>
      </div>
      <ul>
        <li>Conducted RLHF evaluations for code generation and translation tasks, improving model alignment through systematic feedback loops and comparative analysis</li>
        <li>Analyzed algorithmic performance across multiple LLM architectures, identifying optimization opportunities through statistical validation and quality metrics</li>
        <li>Collaborated cross-functionally with engineering and product teams to refine evaluation criteria and validation frameworks for AI-assisted development workflows</li>
        <li>Contributed to expanding evaluation datasets by 55% through structured data collection and quality assurance processes</li>
      </ul>
    </div>

    <div style="margin-bottom: 14pt;">
      <div class="job-header">
        <div>
          <div class="job-title">LLM Engineer</div>
          <div class="company">Turing Enterprises Inc.</div>
        </div>
        <div class="date">Sep. 2024 - Mar. 2025 | Remote</div>
      </div>
      <p style="margin-bottom: 6pt;"><strong>Project: Code Generation &amp; Translation</strong></p>
      <ul style="margin-bottom: 10pt;">
        <li>Reviewed, validated, and translated Swift code responses as part of large-scale code generation workflows</li>
        <li>Generated Python sample data and evaluated multilingual code outputs, expanding training datasets by 55%</li>
        <li>Optimized code generation pipelines achieving +40% efficiency improvement through algorithmic refinements</li>
      </ul>
      <p style="margin-bottom: 6pt;"><strong>Project: RLHF Algorithm Development &amp; Optimization</strong></p>
      <ul>
        <li>Developed and optimized reinforcement learning workflows using Python and C++</li>
        <li>Refactored codebases to remove performance bottlenecks, improving throughput by 25%</li>
        <li>Authored structured datasets that improved model accuracy through systematic quality validation</li>
      </ul>
    </div>

    <div style="margin-bottom: 14pt;">
      <div class="job-header">
        <div>
          <div class="job-title">Graduate Engineering Trainee</div>
          <div class="company">Tata Electronics Pvt. Ltd.</div>
        </div>
        <div class="date">Jan. 2024 - Sep. 2024 | Bengaluru, KA</div>
      </div>
      <ul>
        <li>Built centralized monitoring systems and automation tools, reducing manual effort by 30%</li>
        <li>Applied statistical analysis to production data, reducing downtime and defect rates</li>
        <li>Executed root-cause analysis and standardized manufacturing processes</li>
        <li>Developed monitoring dashboards providing visibility into system health and operational metrics</li>
      </ul>
    </div>

    <div style="margin-bottom: 14pt;">
      <div class="job-header">
        <div>
          <div class="job-title">Operations Intern</div>
          <div class="company">Kirloskar Electric Company Ltd.</div>
        </div>
        <div class="date">Aug. 2023 - Sep. 2023 | Nelamangala, KA</div>
      </div>
      <ul>
        <li>Optimized motor assembly workflows, reducing cycle time by 25% and downtime by 10%</li>
      </ul>
    </div>
  </div>

  <div class="section">
    <h2>Featured Engineering Projects</h2>

    <div style="margin-bottom: 12pt;">
      <h3>Engineering Quality &amp; CI/CD Framework</h3>
      <p><strong>GitHub:</strong> <a href="https://github.com/KishanR-dev/engineering-quality-cicd">github.com/KishanR-dev/engineering-quality-cicd</a><br>
      <strong>Technologies:</strong> Python, Pytest, GitHub Actions, Ruff, Bandit, pip-audit</p>
      <ul>
        <li>Designed and implemented comprehensive quality automation framework with <strong>83 tests</strong> achieving <strong>94.62% code coverage</strong></li>
        <li>Built CI/CD pipeline with automated linting (Ruff), security scanning (Bandit), and dependency auditing (pip-audit) for continuous validation</li>
        <li>Established quality gates ensuring <strong>zero critical issues</strong> (Ruff/Bandit/pip-audit clean) before deployment</li>
        <li>Created reusable testing infrastructure supporting rapid iteration and reliable system transformation workflows</li>
      </ul>
    </div>

    <div style="margin-bottom: 12pt;">
      <h3>ServicePulse - Production Operations Platform</h3>
      <p><strong>GitHub:</strong> <a href="https://github.com/KishanR-dev/servicepulse">github.com/KishanR-dev/servicepulse</a><br>
      <strong>Technologies:</strong> Python, FastAPI, State Machines, RESTful APIs</p>
      <ul>
        <li>Built foundational REST API with robust state machine implementation for incident management workflows</li>
        <li>Engineered performance optimization reducing ID generation time from <strong>10.62s to 5.5206s</strong> through concurrency management</li>
        <li>Transformed success rate from <strong>2/98 (baseline) to 50/0 (failures eliminated)</strong> via async/await patterns</li>
        <li>Implemented API instrumentation, logging infrastructure, and requirements traceability framework supporting system observability</li>
      </ul>
    </div>

    <div style="margin-bottom: 12pt;">
      <h3>Command Center - Engineering Dashboard</h3>
      <p><strong>Technologies:</strong> Python, Gradio, Hugging Face Spaces</p>
      <ul>
        <li>Developed visual Engineering &amp; Operations Command Center providing real-time monitoring of transformation metrics</li>
        <li>Built observability dashboard aggregating quality gates, performance benchmarks, and traceability validation</li>
        <li>Designed executive view of full engineering lifecycle (BUILD → QUALITY → TRANSFORM → TRACE → OBSERVE)</li>
      </ul>
    </div>
  </div>

  <div class="section">
    <h2>Education</h2>
    <div style="margin-bottom: 6pt;">
      <strong>REVA University</strong><br>
      <strong>B.Tech in Mechatronics Engineering</strong> | Bengaluru, KA<br>
      <strong>CGPA:</strong> 8.4 / 10
    </div>
  </div>

  <div class="section">
    <h2>Additional Information</h2>
    <ul>
      <li><strong>GitHub Portfolio:</strong> 6 public repositories demonstrating full-stack engineering capability</li>
      <li><strong>Certifications/Projects:</strong> Resume ranking system (LangChain, Gemini API), Chrome extension for RLHF workflows, embedded systems (ESP32 Bluetooth HID)</li>
    </ul>
  </div>
</body>
</html>
  `.trim();

  // Launch Puppeteer and generate PDF
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });

    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: false,
      margin: {
        top: '0.75in',
        right: '0.75in',
        bottom: '0.75in',
        left: '0.75in'
      }
    });

    console.log(`✓ PDF generated successfully: ${outputPath}`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

generateResumePDF().catch(console.error);
