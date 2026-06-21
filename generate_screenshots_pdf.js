const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const pages = [
  { name: "Accueil (Page principale)", file: "index.html" },
  { name: "Découverte du Neurofeedback", file: "decouverte-neurofeedback.html" },
  { name: "La Science", file: "neurofeedback.html" },
  { name: "Programmes d'entraînement", file: "programmes.html" },
  { name: "Notre Vision", file: "vision.html" },
  { name: "Nos Centres", file: "centres.html" },
  { name: "B2B & Entreprises", file: "b2b.html" },
  { name: "Modèle Franchise", file: "franchise.html" },
  { name: "Portail Patient", file: "portal-patient.html" },
  { name: "Les Réponses du Dr. Chadia", file: "les-reponses-du-dr-chadia.html" },
  { name: "Contact & Orientation", file: "contact.html" },
  { name: "Success Stories", file: "success-stories.html" },
  { name: "Tarifs & Formules", file: "tarifs.html" },
  { name: "Brain Boost", file: "brain-boost.html" },
  { name: "Forum de discussion", file: "forum.html" },
  { name: "Blog d'actualités", file: "blog.html" },
  { name: "Packs & Formules", file: "pack.html" },
  { name: "Recherche", file: "recherche.html" }
];

(async () => {
  try {
    const screenshotDir = path.join(__dirname, 'screenshots_temp');
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir);
    }

    console.log('Launching browser to capture screenshots...');
    const browser = await puppeteer.launch({
      executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu'
      ]
    });

    const page = await browser.newPage();

    for (const pageInfo of pages) {
      console.log(`\n--- Page: ${pageInfo.name} (${pageInfo.file}) ---`);
      const pageKey = pageInfo.file.replace('.html', '');
      const desktopPath = path.join(screenshotDir, `${pageKey}_desktop.jpg`);
      const mobilePath = path.join(screenshotDir, `${pageKey}_mobile.jpg`);

      const hasDesktop = fs.existsSync(desktopPath);
      const hasMobile = fs.existsSync(mobilePath);

      if (hasDesktop && hasMobile) {
        console.log(`Screenshots already exist for ${pageInfo.name}. Skipping capture.`);
        continue;
      }

      // 1. Capture Desktop Viewport (1440 x 960)
      if (!hasDesktop) {
        console.log(`Setting viewport for Desktop...`);
        await page.setViewport({ width: 1440, height: 960, deviceScaleFactor: 1 });
        const url = `http://localhost:8000/${pageInfo.file}`;
        console.log(`Navigating to ${url}`);
        
        try {
          await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
        } catch (err) {
          console.log(`Waiting with networkidle2 fallback...`);
          await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
        }

        // Add a slight delay to ensure dynamic animations finish rendering
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log(`Capturing Desktop full-page screenshot...`);
        await page.screenshot({ path: desktopPath, fullPage: true, type: 'jpeg', quality: 85 });
        console.log(`Saved desktop: ${desktopPath}`);
      } else {
        console.log(`Desktop screenshot exists: ${desktopPath}`);
      }

      // 2. Capture Mobile Viewport (375 x 812)
      if (!hasMobile) {
        console.log(`Setting viewport for Mobile...`);
        await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
        const url = `http://localhost:8000/${pageInfo.file}`;
        console.log(`Navigating to ${url} (Mobile)`);
        try {
          await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
        } catch (err) {
          console.log(`Fallback load...`);
          await page.goto(url, { waitUntil: 'load', timeout: 30000 });
        }
        
        // Wait for animations
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log(`Capturing Mobile full-page screenshot...`);
        await page.screenshot({ path: mobilePath, fullPage: true, type: 'jpeg', quality: 85 });
        console.log(`Saved mobile: ${mobilePath}`);
      } else {
        console.log(`Mobile screenshot exists: ${mobilePath}`);
      }
    }

    // Generate the HTML report that displays them side-by-side
    console.log('\nGenerating HTML wrapper for screenshots...');
    let htmlContent = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Rapport de Captures d'Écran - NeuroMaroc</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&family=Inter:wght@400;500&display=swap');
            
            body {
                font-family: 'Inter', sans-serif;
                margin: 0;
                padding: 0;
                background-color: #fcfbfa;
                color: #0b1a2d;
            }
            
            .header-page {
                height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                background: linear-gradient(135deg, #072a5a 0%, #0a1628 100%);
                color: #ffffff;
                page-break-after: always;
                box-sizing: border-box;
                padding: 40px;
            }
            
            .header-page h1 {
                font-family: 'Outfit', sans-serif;
                font-size: 4rem;
                margin-top: 1.5rem;
                margin-bottom: 0.5rem;
                color: #d4af37;
                letter-spacing: -0.5px;
            }
            
            .header-page p {
                font-size: 1.8rem;
                opacity: 0.9;
                max-width: 800px;
                margin-bottom: 3rem;
                font-weight: 300;
                line-height: 1.4;
            }

            .header-page .meta {
                font-size: 1.1rem;
                opacity: 0.6;
                line-height: 1.6;
                border-top: 1px solid rgba(255,255,255,0.15);
                padding-top: 2rem;
                width: 300px;
            }
            
            .page-section {
                padding: 40px;
                page-break-after: always;
                box-sizing: border-box;
            }
            
            .page-title {
                font-family: 'Outfit', sans-serif;
                font-size: 2.5rem;
                border-bottom: 3px solid #d4af37;
                padding-bottom: 15px;
                margin-bottom: 40px;
                color: #072a5a;
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
            }

            .page-title span {
                font-size: 1.1rem;
                font-family: 'Inter', sans-serif;
                color: #6c7a89;
                font-weight: 500;
                background: #f1f5f9;
                padding: 6px 16px;
                border-radius: 20px;
            }
            
            .screenshot-grid {
                display: flex;
                gap: 50px;
                align-items: flex-start;
            }
            
            .desktop-col {
                flex: 2.2;
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            
            .mobile-col {
                flex: 1;
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            
            .col-title {
                font-family: 'Outfit', sans-serif;
                font-size: 1.4rem;
                font-weight: 600;
                color: #072a5a;
                margin: 0;
                border-left: 4px solid #d4af37;
                padding-left: 12px;
            }
            
            .device-frame {
                border-radius: 12px;
                box-shadow: 0 15px 50px rgba(7,42,90,0.08);
                border: 1px solid #e2e8f0;
                background-color: #fff;
                overflow: hidden;
                width: 100%;
            }

            .desktop-frame {
                border-top: 30px solid #edf2f7;
                position: relative;
            }

            .desktop-frame::before {
                content: '';
                position: absolute;
                top: -20px;
                left: 14px;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: #fc8181;
                box-shadow: 20px 0 0 #f6e05e, 40px 0 0 #68d391;
            }
            
            .device-frame img {
                width: 100%;
                display: block;
                height: auto;
            }

            .mobile-frame {
                border: 14px solid #1a202c;
                border-radius: 40px;
                box-sizing: border-box;
            }
        </style>
    </head>
    <body>
        <div class="header-page">
            <div style="font-family: 'Outfit', sans-serif; font-size: 1.2rem; font-weight: 700; color: #d4af37; letter-spacing: 4px; text-transform: uppercase;">International Neurofeedback Center</div>
            <h1>NeuroMaroc</h1>
            <p>Maquette Visuelle Interactive & Plan de Site<br>Rapport de Captures d'Écran Desktop & Mobile</p>
            <div class="meta">
                Date de Génération : 21 Juin 2026<br>
                Format de Page : A3 Paysage<br>
                Statut : Prêt pour Revue Client
            </div>
        </div>
    `;

    for (const pageInfo of pages) {
      const pageKey = pageInfo.file.replace('.html', '');
      const desktopImg = path.join('screenshots_temp', `${pageKey}_desktop.jpg`);
      const mobileImg = path.join('screenshots_temp', `${pageKey}_mobile.jpg`);

      htmlContent += `
        <div class="page-section">
            <div class="page-title">
                ${pageInfo.name}
                <span>Fichier : site/${pageInfo.file}</span>
            </div>
            <div class="screenshot-grid">
                <div class="desktop-col">
                    <h3 class="col-title">🖥️ Aperçu Ordinateur (Desktop)</h3>
                    <div class="device-frame desktop-frame">
                        <img src="${desktopImg}" alt="${pageInfo.name} Desktop">
                    </div>
                </div>
                <div class="mobile-col">
                    <h3 class="col-title">📱 Aperçu Téléphone (Mobile)</h3>
                    <div class="device-frame mobile-frame">
                        <img src="${mobileImg}" alt="${pageInfo.name} Mobile">
                    </div>
                </div>
            </div>
        </div>
      `;
    }

    htmlContent += `
    </body>
    </html>
    `;

    const reportHtmlPath = path.join(__dirname, 'screenshots_report.html');
    fs.writeFileSync(reportHtmlPath, htmlContent);
    console.log(`HTML wrapper template saved: ${reportHtmlPath}`);

    // Print wrapper HTML into PDF
    console.log('Rendering HTML report into PDF...');
    const reportPage = await browser.newPage();
    // Increase page timeout to 10 minutes (600,000 ms) for handling heavy image rendering
    await reportPage.setDefaultTimeout(600000);
    await reportPage.goto('file://' + reportHtmlPath, { waitUntil: 'load', timeout: 120000 });
    console.log('Waiting for font rendering...');
    await new Promise(resolve => setTimeout(resolve, 5000));

    const pdfPath = path.join(__dirname, 'Rapport_Visuel_NeuroMaroc.pdf');
    console.log('Printing PDF (this can take a moment due to heavy full-page screenshot decoding)...');
    await reportPage.pdf({
      path: pdfPath,
      format: 'A3',
      landscape: true,
      printBackground: true,
      margin: {
        top: '10mm',
        right: '10mm',
        bottom: '10mm',
        left: '10mm'
      }
    });

    console.log(`\nSuccess! Visual report generated: ${pdfPath}`);
    
    // Clean up temp screenshots directory if wanted, or leave it. We will leave it for reference.
    await browser.close();
    process.exit(0);
  } catch (error) {
    console.error('Error generating screenshots PDF:', error);
    process.exit(1);
  }
})();
