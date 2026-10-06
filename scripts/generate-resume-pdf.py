import re
import os
import sys
from markdown import markdown
from xhtml2pdf import pisa

def convert_md_to_pdf(md_file_path, pdf_file_path):
    # Read Markdown content
    with open(md_file_path, 'r', encoding='utf-8') as f:
        md_text = f.read()

    # Convert MD to HTML
    # Use extensions for better rendering (tables, fenced code, etc.)
    html_body = markdown(md_text, extensions=['extra', 'sane_lists'])

    # Wrap with HTML and elegant CSS styling
    # Note: xhtml2pdf has specific CSS support limitations, we keep it simple but professional
    html_template = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            @page {{
                size: a4;
                margin: 0.7in;
            }}
            body {{
                font-family: Helvetica, Arial, sans-serif;
                font-size: 10.5pt;
                line-height: 1.4;
                color: #222222;
            }}
            h1 {{
                font-size: 24pt;
                color: #111111;
                margin-bottom: 2px;
                padding-bottom: 0px;
                text-align: center;
                font-weight: bold;
            }}
            h2 {{
                font-size: 13pt;
                color: #111111;
                border-bottom: 1.5px solid #111111;
                margin-top: 14pt;
                margin-bottom: 8pt;
                padding-bottom: 4pt;
                font-weight: bold;
            }}
            h3 {{
                font-size: 11pt;
                color: #111111;
                margin-top: 10pt;
                margin-bottom: 2pt;
                font-weight: bold;
            }}
            p {{
                margin-bottom: 6pt;
                margin-top: 2pt;
            }}
            ul {{
                margin-top: 2pt;
                margin-bottom: 6pt;
                margin-left: 14pt;
            }}
            li {{
                margin-bottom: 2pt;
                line-height: 1.35;
            }}
            a {{
                color: #000000;
                text-decoration: none;
            }}
            strong {{
                font-weight: bold;
                color: #111111;
            }}
            .contact-info {{
                text-align: center;
                font-size: 10pt;
                margin-bottom: 12pt;
            }}
            hr {{
                display: none;
            }}
        </style>
    </head>
    <body>
        <div class="content">
            {html_body}
        </div>
    </body>
    </html>
    """

    # We need to manually adjust the header part since standard markdown conversion
    # creates standard h1/p tags which we want specially styled

    # Simple replacement to center the header and style the contact info
    html_template = re.sub(
        r'<h1>Kishan Ramesha</h1>\s*<p><strong>Contact:</strong>[\s\S]*?</p>',
        '''
        <h1>Kishan Ramesha</h1>
        <div class="contact-info">
            <strong>Contact:</strong> <a href="tel:+916361151894">+91 63611 51894</a> &nbsp;|&nbsp; <a href="mailto:kishanramesha@outlook.com">kishanramesha@outlook.com</a><br/>
            <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/k4nr">linkedin.com/in/k4nr</a> &nbsp;|&nbsp; <strong>GitHub:</strong> <a href="https://github.com/KishanR-dev">github.com/KishanR-dev</a><br/>
            <strong>Portfolio:</strong> <a href="https://kishan-portfolio-gamma-steel.vercel.app/">https://kishan-portfolio-gamma-steel.vercel.app/</a>
        </div>
        ''', html_template)

    # Fix strong bolding for company names and Job titles on the same line
    html_template = html_template.replace(
        '<h3>Business Analyst - AI Evaluation</h3>\n<p><strong>Turing</strong> | Jan. 2026 - Apr. 2026 | Remote</p>',
        '<div><h3>Business Analyst - AI Evaluation</h3><p><strong>Turing</strong> <span style="color:#444">| Jan. 2026 - Apr. 2026 | Remote</span></p></div>'
    )

    html_template = html_template.replace(
        '<h3>LLM Engineer</h3>\n<p><strong>Turing Enterprises Inc.</strong> | Sep. 2024 - Mar. 2025 | Remote</p>',
        '<div><h3>LLM Engineer</h3><p><strong>Turing Enterprises Inc.</strong> <span style="color:#444">| Sep. 2024 - Mar. 2025 | Remote</span></p></div>'
    )

    html_template = html_template.replace(
        '<h3>Graduate Engineering Trainee</h3>\n<p><strong>Tata Electronics Pvt. Ltd.</strong> | Jan. 2024 - Sep. 2024 | Bengaluru, KA</p>',
        '<div><h3>Graduate Engineering Trainee</h3><p><strong>Tata Electronics Pvt. Ltd.</strong> <span style="color:#444">| Jan. 2024 - Sep. 2024 | Bengaluru, KA</span></p></div>'
    )

    html_template = html_template.replace(
        '<h3>Operations Intern</h3>\n<p><strong>Kirloskar Electric Company Ltd.</strong> | Aug. 2023 - Sep. 2023 | Nelamangala, KA</p>',
        '<div><h3>Operations Intern</h3><p><strong>Kirloskar Electric Company Ltd.</strong> <span style="color:#444">| Aug. 2023 - Sep. 2023 | Nelamangala, KA</span></p></div>'
    )

    # Project alignment
    html_template = html_template.replace(
        '<h3>Engineering Quality &amp; CI/CD Framework</h3>\n<p><strong>GitHub:</strong> github.com/KishanR-dev/engineering-quality-cicd<br />\n<strong>Technologies:</strong> Python, Pytest, GitHub Actions, Ruff, Bandit, pip-audit</p>',
        '<div><h3>Engineering Quality &amp; CI/CD Framework</h3><p style="font-size: 10pt; color: #444; margin-bottom: 4pt"><strong>GitHub:</strong> github.com/KishanR-dev/engineering-quality-cicd &nbsp;|&nbsp; <strong>Tech:</strong> Python, Pytest, GitHub Actions, Ruff, Bandit, pip-audit</p></div>'
    )

    html_template = html_template.replace(
        '<h3>ServicePulse - Production Operations Platform</h3>\n<p><strong>GitHub:</strong> github.com/KishanR-dev/servicepulse<br />\n<strong>Technologies:</strong> Python, FastAPI, State Machines, RESTful APIs</p>',
        '<div><h3>ServicePulse - Production Operations Platform</h3><p style="font-size: 10pt; color: #444; margin-bottom: 4pt"><strong>GitHub:</strong> github.com/KishanR-dev/servicepulse &nbsp;|&nbsp; <strong>Tech:</strong> Python, FastAPI, State Machines, RESTful APIs</p></div>'
    )

    html_template = html_template.replace(
        '<h3>Command Center - Engineering Dashboard</h3>\n<p><strong>Technologies:</strong> Python, Gradio, Hugging Face Spaces</p>',
        '<div><h3>Command Center - Engineering Dashboard</h3><p style="font-size: 10pt; color: #444; margin-bottom: 4pt"><strong>Tech:</strong> Python, Gradio, Hugging Face Spaces</p></div>'
    )

    # Save debug HTML
    with open(pdf_file_path.replace('.pdf', '_debug.html'), 'w', encoding='utf-8') as f:
        f.write(html_template)

    # Generate PDF
    with open(pdf_file_path, "w+b") as result_file:
        # Convert HTML to PDF
        pisa_status = pisa.CreatePDF(
            html_template,
            dest=result_file
        )

    return not pisa_status.err

if __name__ == "__main__":
    md_path = os.path.join(os.path.dirname(__file__), '..', 'FINAL_RESUME_CONTENT.md')
    pdf_path = os.path.join(os.path.dirname(__file__), '..', 'public', 'resume.pdf')

    print(f"Generating PDF from {md_path} to {pdf_path}...")
    success = convert_md_to_pdf(md_path, pdf_path)
    if success:
        print(f"PDF generated successfully at {pdf_path}")
    else:
        print("✗ Error generating PDF")
        sys.exit(1)
