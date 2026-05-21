const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'assets', 'pdfs');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const doc = new PDFDocument({ size: 'A4', margin: 50 });
const outPath = path.join(outDir, 'rapport_creatives_ads.pdf');
const stream = fs.createWriteStream(outPath);

doc.pipe(stream);

const colors = {
  navy: '#0A1628',
  gold: '#D4AF37',
  creme: '#F8F5F0',
  text: '#333333'
};

function addFooter() {
  const footerY = doc.page.height - 40;
  doc.fontSize(9).fillColor(colors.text).text('Rapport Créatif Ads - NeuroMaroc', 50, footerY, {align: 'center'});
}

function heading(text, level) {
  const sizeMap = {1: 22, 2: 18, 3: 14, 4: 12};
  const size = sizeMap[level] || 12;
  doc.moveDown(1);
  doc.fillColor(level === 1 ? colors.navy : colors.gold)
     .font('Helvetica-Bold')
     .fontSize(size)
     .text(text, {align: 'left'});
  doc.moveDown(0.5);
  doc.fillColor(colors.text).font('Helvetica').fontSize(10);
}

function paragraph(txt) {
  doc.font('Helvetica')
     .fillColor(colors.text)
     .fontSize(10)
     .text(txt, {align: 'left', lineGap: 2});
  doc.moveDown(0.3);
}

function listItem(label, value) {
  doc.font('Helvetica-Bold').text(label + ': ', {continued: true})
     .font('Helvetica').text(value);
  doc.moveDown(0.2);
}

// Background
doc.rect(0,0,doc.page.width,doc.page.height).fill(colors.creme);

// Page 1
heading('Rapport Créatif : Campagnes Google & Meta', 1);
paragraph('Ce document contient les guidelines et les textes (copywriting) pour les campagnes publicitaires NeuroMaroc (Google Search, Maps, et Meta), alignés avec la vision premium du Dr Chadia Chakib.');

heading('1. Google Search Ads (Text-Only)', 2);
listItem('Headline 1', 'Guide Neuro-Sensible examen 2026');
listItem('Headline 2', 'Téléchargez le Guide & préparez votre enfant');
listItem('Headline 3', 'Testez votre fatigue cognitive en 1 min');
listItem('Description 1', 'Un PDF premium – routines simples, protocoles d’urgence, tout pour gérer le stress des examens.');
listItem('Description 2', 'Envie d’un accompagnement neuro-sensible ? Cliquez et recevez le guide immédiatement.');
listItem('URL de destination', 'https://neuro-maroc.com/brain-boost#lead-magnet');

heading('2. Google Maps Local Pack', 2);
listItem('Business Name', 'NeuroMaroc – Centre INFC');
listItem('Catégorie', 'Centre de neuro-feedback & accompagnement scolaire');
listItem('Short Description', 'Guide Neuro-Sensible examen – Stratégies pratiques pour réduire la fatigue cognitive.');
paragraph('Highlights :');
paragraph('• PDF premium + design premium');
paragraph('• 3 routines simples et un protocole d’urgence');
paragraph('• Téléchargement instantané via site web');
listItem('Bouton CTA', 'Télécharger le guide (Lien vers /brain-boost#lead-magnet)');

addFooter();
doc.addPage();
doc.rect(0,0,doc.page.width,doc.page.height).fill(colors.creme);

// Page 2
heading('3. Meta (Facebook/Instagram) Ads', 2);

heading('Format : Carousel (4 cartes)', 3);
paragraph('Primary Text : Les examens approchent et le stress monte ? Découvrez le Guide d\'Accompagnement Neuro-Sensible conçu par INFC. 3 routines simples et un protocole d\'urgence pour aider votre enfant à retrouver sérénité et concentration, sans approche agressive.');
doc.moveDown(0.5);
listItem('Carte 1', 'Image: Cover eBook 3D. Titre: Guide Neuro-Sensible: Examens 2026');
listItem('Carte 2', 'Image: Icône Cerveau. Titre: La Fatigue Cognitive ?');
listItem('Carte 3', 'Image: Icône Respiration. Titre: 3 Routines Simples');
listItem('Carte 4', 'Image: Icône Bouclier. Titre: Protocole d\'Urgence');

heading('Format : Image Unique', 3);
paragraph('Primary Text : Fatigue cognitive, perte de concentration... Recevez le Guide d\'Accompagnement Neuro-Sensible des Examens. Des outils concrets et un protocole d\'urgence, basés sur l\'expertise d\'INFC.');
listItem('Titre (Headline)', 'Guide Neuro-Sensible: Examens Sans Stress');
listItem('Visuel Feed', 'Fond Navy, Typo Gold. Mockup eBook 3D avec bullet points.');
listItem('Visuel Story', 'Mockup centré. Flèche vers le bas: "Swipe pour télécharger le Guide".');

heading('4. Notes d\'Implémentation (Media Buyer)', 2);
paragraph('1. Destination : Tout le trafic doit aller vers l\'ancre #lead-magnet-section sur la landing page Brain Boost.');
paragraph('2. Tracking : Configurer le Pixel Meta et les tags Google pour traquer l\'évènement "Lead" sur la soumission du formulaire.');
paragraph('3. Audience Meta : Cibler les parents (35-55 ans) intéressés par l\'éducation, la psychologie et les écoles privées (Casablanca, Rabat, Marrakech).');
paragraph('4. Mots-clés Google : "stress examen enfant", "gérer fatigue cognitive", "préparation neurofeedback".');

addFooter();
doc.end();

stream.on('finish', () => {
  console.log('PDF Ads Report generated at', outPath);
});
