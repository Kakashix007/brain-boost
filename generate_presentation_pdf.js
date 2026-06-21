const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  try {
    console.log('Launching browser for Client Presentation...');
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
    const filePath = path.join(__dirname, 'context', 'marketing', 'presentation_clients_infc.html');
    console.log('Loading file:', filePath);
    await page.goto('file://' + filePath, { waitUntil: 'networkidle0' });
    
    const pdfPath = path.join(__dirname, 'context', 'marketing', 'presentation_clients_infc.pdf');
    console.log('Generating PDF...');
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '10mm',
        right: '10mm',
        bottom: '10mm',
        left: '10mm'
      }
    });
    
    console.log('PDF saved to:', pdfPath);
    await browser.close();
    process.exit(0);
  } catch (error) {
    console.error('Error generating PDF:', error);
    process.exit(1);
  }
})();
