const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Ensure output directory exists
const outDir = path.join(__dirname, 'assets', 'pdfs');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const doc = new PDFDocument({ size: 'A4', margin: 50 });
const outPath = path.join(outDir, 'guide_neuro_sensible.pdf');
const stream = fs.createWriteStream(outPath);

doc.pipe(stream);

// Styling variables matching site CSS
const colors = {
  navy: '#0A1628',
  gold: '#D4AF37',
  creme: '#F8F5F0',
  text: '#6B7280'
};

// Helper to write a heading
function heading(text, level) {
  const sizeMap = {1: 24, 2: 20, 3: 16};
  const size = sizeMap[level] || 14;
  doc.moveDown(0.7);
  doc.fillColor(colors.gold)
     .font('Helvetica-Bold')
     .fontSize(size)
     .text(text, {align: 'left'});
  doc.moveDown(0.4);
  doc.fillColor(colors.text).font('Helvetica').fontSize(12);
}

// Helper for paragraph
function paragraph(txt) {
  doc.moveDown(0.2);
  doc.text(txt, {align: 'justify', lineGap: 2});
}

// Title page background
doc.rect(0,0,doc.page.width,doc.page.height).fill(colors.creme);

doc.fillColor(colors.navy).fontSize(26).font('Helvetica-Bold').text('Le Guide d’Accompagnement Neuro‑Sensible des Examens', {align: 'center'});

doc.moveDown(1);
// Add a page break after the intro page
doc.addPage();
paragraph('Ce guide propose des outils concrets pour aider votre enfant à traverser les périodes d’examens avec sérénité, s’appuyant sur le cadre neuroscientifique d’INFC et la vision du Dr Chadia Chakib.');

// Sections
heading('1. Introduction', 2);
// After this section, start a new page for clean layout

paragraph('Les exigences des examens peuvent générer une surcharge cognitive qui perturbe la concentration, le sommeil et l’humeur. Ce guide décrit comment reconnaître les signes de fatigue cognitive et proposer des stratégies d’accompagnement non‑médicamenteuses.');

heading('2. Comprendre la fatigue cognitive', 2);
// Page break after this section

paragraph('La fatigue cognitive correspond à un état où le cerveau consomme plus d’énergie que d’habitude, ce qui entraîne un ralentissement du traitement de l’information. Elle se manifeste par :');
paragraph('- Difficulté à se concentrer pendant de longues périodes\n- Irritabilité ou anxiété accrue\n- Besoin de pauses fréquentes et de sommeil perturbé');
paragraph('Ces symptômes résultent d’un déséquilibre entre les besoins d’information du cerveau et son niveau actuel de régulation neuro‑sensible.');

heading('3. 3 routines simples', 2);
// Page break after this section

paragraph('Instaurer des rituels courts mais réguliers aide le système nerveux à retrouver un état d’équilibre avant et pendant les périodes d’examens.');
paragraph('• **Respiration consciente (2 min)** – Asseyez‑vous, fermez les yeux, inspirez 4 sec, retenez 4 sec, expirez 4 sec. Répétez 5 fois.\n• **Micro‑pause de 5 min** – Toutes les 45 min d’étude, levez‑vous, bougez, hydratez‑vous.\n• **Routine de coucher** – Éteignez les écrans 30 min avant le sommeil, pratiquez une courte visualisation de réussite.');

heading('4. Protocole d’urgence', 2);
// Final page – add footer after content

paragraph('Lorsque l’anxiété devient envahissante, appliquez ce protocole d’urgence en moins de 3 min :');
paragraph('1. **Ancrage tactile** – Touchez fermement un objet familier (ex. un stylo) et concentrez‑vous sur sa texture.\n2. **Cadrage cognitif** – Formulez mentalement : « Je fais de mon mieux, le résultat n’est qu’une étape ».\n3. **Respiration régulée** – 30 respirations lentes (inhale 4 sec, exhale 6 sec).\n4. **Activation du réseau de soutien** – Envoyez un message court à un proche ou un enseignant pour obtenir un retour rassurant.');

doc.moveDown(2);
doc.fontSize(10).fillColor(colors.text).text('© INFC – International Neurofeedback Center – Tous droits réservés', {align: 'center'});

doc.end();

stream.on('finish', () => {
  console.log('PDF generated at', outPath);
});
