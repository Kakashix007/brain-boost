# INFC — Google Stitch Design Handoff
## International Neurofeedback Center · Full Website Content & Structure

---

> **How to use this document**
> Copy the **Master Stitch Prompt** (at the bottom) into Google Stitch.
> Then use the page-by-page content below to populate each screen.

---

## 🎨 DESIGN SYSTEM

### Brand Identity
- **Name:** International Neurofeedback Center (INFC)
- **Tone:** Premium · Scientific · Human · Reassuring — NOT cold medical, NOT aggressive marketing
- **Language:** French (Morocco)
- **Market Position:** First structured clinical neurofeedback network in Morocco

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Bleu Nuit | `#072A5A` | Primary brand, footer, premium buttons |
| Bleu Profond | `#0B3A78` | Subtitles, UI emphasis, patient portal |
| Or INFC | `#C9962D` | CTAs, keywords, icons, accents |
| Or Hover | `#b07d20` | Button hover state |
| Crème | `#F7F1E5` | Main page background |
| Blanc Chaud | `#FFFCF6` | Cards, reading zones |
| Gris Texte | `#4A5568` | Body paragraphs |
| Gris Muted | `#718096` | Secondary text |

### Typography

| Role | Font | Weight |
|------|------|--------|
| Hero / Emotional Headlines | Playfair Display | 400, 600, 700 |
| Section Headings (h2) | Playfair Display | 600 |
| Sub-headings (h3, h4) | Montserrat | 600 |
| Body text | Montserrat | 400 |
| CTAs & Labels | Montserrat | 600–700 |
| Eyebrow labels | Montserrat | 700, uppercase, 2.5px letter-spacing |

### Spacing Scale
- `xs` 0.5rem · `sm` 1rem · `md` 2rem · `lg` 4rem · `xl` 7rem
- Sections: `padding: 7rem 0` (desktop), `4rem 0` (mobile)
- Max container: `1200px`; Narrow container: `860px`

### Components

**Buttons:**
- `.btn-gold` → background `#C9962D`, white text, rounded-full, shadow
- `.btn-navy` → background `#072A5A`, white text
- `.btn-ghost` → transparent, white border, white text (for dark backgrounds)

**Cards:**
- Background `#FFFCF6`, border-radius `24px`, shadow `0 12px 40px rgba(7,42,90,0.10)`
- Hover: `translateY(-6px)` + gold top-border accent (3px)

**Eyebrow Labels:** Small uppercase gold text above every section title

**Gold Divider Line:** `border-bottom: 2px solid rgba(201,150,45,0.3)`

---

## 🗺 SITE ARCHITECTURE

```
Homepage (index.html)
├── La Science (neurofeedback.html)
├── Programmes (programmes.html)
├── Vision (vision.html)
├── Nos Centres (centres.html)
├── Contact (contact.html)
├── B2B (b2b.html)
└── Franchise (franchise.html)
```

**Navigation (sticky, glassmorphism):**
Accueil · La Science · Programmes · Vision · Nos Centres · Contact · B2B · Franchise
+ CTA button: **"Bilan découverte"** (gold)

---

## 📄 PAGE 1 — HOMEPAGE (index.html)

### Meta
- **Title:** INFC — International Neurofeedback Center Maroc
- **Description:** Centre de régulation cérébrale et d'accompagnement psychologique au Maroc. 4 centres d'excellence : Casablanca, Marrakech, Kénitra, Tanger.

### SECTION 1 — Hero Banner
**Layout:** Full-width, navy-to-navy-deep gradient, centered, radial gold glow at top-right

**Eyebrow:** `4 Centres au Maroc · Régulation cérébrale · Accompagnement psychologique`

**H1:**
> Votre cerveau sait retrouver son équilibre.
> Nous l'aidons à mieux s'écouter.

**Body:**
> À l'International Neurofeedback Center, nous accompagnons le cerveau dans sa capacité naturelle d'autorégulation, grâce à une approche de régulation cérébrale et à un encadrement psychologique humain.

**Bullet chips (pill tags with ✓):**
- Une approche non invasive
- Un accompagnement humain à chaque étape
- Des parcours structurés selon vos besoins
- 4 centres au Maroc

**CTAs:**
- 🟡 `Réserver un bilan découverte` → contact.html
- ⬜ `Comprendre notre approche` → neurofeedback.html

---

### SECTION 2 — Notre Approche
**Background:** Blanc Chaud · Centered text block

**Eyebrow:** `Notre Approche`

**H2:** Le cerveau n'a pas besoin d'être forcé.
Il a besoin d'être écouté.

**Body (2 paras):**
> Notre approche est un entraînement cérébral non invasif. Elle s'appuie sur les principes de neuroplasticité et d'autorégulation : le cerveau reçoit une information en temps réel sur sa propre activité, ce qui peut l'aider progressivement à retrouver davantage de stabilité, de souplesse et d'équilibre.

> À l'INFC, la technologie ne remplace jamais l'humain. Elle mesure, elle informe, elle reflète. L'accompagnement psychologique donne du sens au parcours, oriente les étapes et permet d'adapter l'approche à chaque personne.

**Process Flow (horizontal pill chain):**
`Écouter` → `Refléter` → `Accompagner` → `Réguler`

---

### SECTION 3 — Déroulement
**Background:** Crème · 3-column card grid

**Eyebrow:** `Déroulement`
**H2:** Un accompagnement simple et naturel

**Cards:**
1. **`01` Mesurer** — Tout commence par une écoute. Nous mesurons l'activité de votre cerveau en temps réel, sans rien lui imposer.
2. **`02` Refléter** — Pendant que vous regardez un film ou écoutez de la musique, le retour s'ajuste à votre activité. Le cerveau reçoit un miroir fidèle de lui-même.
3. **`03` Réguler** — Au fil du parcours, le cerveau retrouve ses propres repères. Une régulation organique, progressive, durable.

**Quote block:**
> « À chaque étape, un clinicien interprète, oriente et accompagne - c'est ce qui fait la différence. »

---

### SECTION 4 — Pour Qui ?
**Background:** Blanc Chaud · 3-column then 3-column card grid (6 cards)

**Eyebrow:** `Profils`
**H2:** Un accompagnement adapté à chaque âge, chaque rythme et chaque parcours de vie

**Body:** Notre approche peut accompagner des profils très différents : elle ne demande ni effort conscient, ni performance, ni capacité particulière, et se déroule dans un cadre calme, confortable et non invasif.

**Profile Cards (icon + title + desc):**
1. 👶 **Enfants & adolescents** — Difficultés d'attention, d'agitation, de concentration, de sommeil, de confiance, de gestion émotionnelle ou d'adaptation scolaire.
2. 👩 **Adultes** — Surcharge mentale, stress, anxiété persistante, difficultés de sommeil, fatigue nerveuse, baisse de clarté mentale.
3. 🌸 **Femmes & étapes de vie** — Fatigue, charge mentale, variations émotionnelles, transition de vie.
4. 👴 **Seniors** — Équilibre, sommeil, attention, récupération, confort émotionnel, vitalité cognitive.
5. 💼 **Cadres, dirigeants & entrepreneurs** — Forte pression mentale, responsabilités, stress chronique, charge cognitive élevée.
6. 🏆 **Sportifs & profils de performance** — Focus, régulation du stress, récupération, stabilité intérieure.

**Situations tag cloud (pill tags):**
Stress & surcharge mentale · Anxiété & hypervigilance · Sommeil & récupération · Attention & concentration · TDA/H & agitation cognitive · Hypersensibilité & surcharge sensorielle · Fatigue nerveuse & burnout · Équilibre émotionnel · Traumatismes & chocs émotionnels · Difficultés d'apprentissage · Brouillard mental · Performance cognitive · Santé féminine & étapes de vie · Vieillissement & vitalité cognitive

---

### SECTION 5 — Une Séance Simple
**Background:** Crème · Narrow centered card

**Eyebrow:** `Le Déroulé`
**H2:** Une séance simple, confortable et non invasive

**Body (3 paragraphs):**
> Une séance se déroule dans un cadre calme. Vous êtes confortablement installé, sans effort à fournir. Des capteurs passifs sont placés sur le cuir chevelu et les oreilles : ils lisent l'activité électrique naturelle du cerveau en temps réel, mais n'envoient aucun courant.

> La méthode est non invasive, indolore, sans stimulation électrique et sans effort conscient. Pendant la séance, vous pouvez regarder un film ou écouter de la musique ; le système renvoie une information discrète sous forme de micro-interruptions sonores. Le cerveau reçoit simplement une information sur sa propre activité, comme un miroir.

> Chaque séance dure environ 33 minutes. L'accompagnement est suivi par l'équipe INFC, qui observe votre évolution, recueille votre ressenti et ajuste le parcours selon vos besoins.

**Medical disclaimer note:** ⚠️ En cas de pathologie médicale, de grossesse à risque, d'épilepsie suivie, de traitement lourd ou de situation particulière, un avis médical peut être recommandé avant de commencer.

---

### SECTION 6 — Nos Parcours
**Background:** Blanc Chaud · 3-col card grid

**Eyebrow:** `Nos Parcours`
**H2:** Des parcours conçus, pas des forfaits

**Body:** À l'INFC, nous ne proposons pas uniquement des séances : nous construisons des parcours d'accompagnement autour de besoins réels.

**Program Cards:**
1. **Brain Boost™** — Clarté mentale & préparation neurocognitive intensive.
2. **Calm Reset™** — Stress & anxiété latente, retour vers le calme intérieur.
3. **Sleep Reset™** — Restauration de la qualité du sommeil et récupération nerveuse.
4. **NeuroKids™** — Attention, concentration et régulation de l'agitation chez l'enfant.
5. **NeuroSensible Adulte™** — Hypersensibilité, charge sensorielle et surcharge émotionnelle.
6. **Burnout Reset™** — Épuisement professionnel, fatigue nerveuse et recharge d'élan.
7. **Femme Harmony™** — Équilibre féminin, charge mentale, variations émotionnelles, post-partum.

**Highlighted note:** Vous préférez un accompagnement plus libre ? Nos packs de 10 ou 20 séances comprennent les séances, les contrôles, la cartographie cérébrale (qEEG) et la consultation psychologique.

**CTA:** 🟡 `Découvrir nos programmes` → programmes.html

---

### SECTION 7 — Notre Différence (Dark Band)
**Background:** Bleu Nuit (#072A5A) · Centered

**Eyebrow:** `Notre Différence`
**H2:** La technologie mesure. L'humain accompagne.

**Body:**
> Ce qui distingue l'INFC, ce n'est pas l'appareil - c'est ce qu'il y a autour. Nous n'accompagnons pas seulement une activité cérébrale, mais une personne, avec son histoire, son rythme, ses besoins et ses objectifs.

**Gold italic quote:**
> « La mesure donne une information au cerveau. L'accompagnement humain donne du sens au parcours. »

---

### SECTION 8 — Notre Mission
**Eyebrow:** `Notre Mission`
**H2:** Soutenir le potentiel de chacun

> Ensemble, nous allumons la flamme de l'espoir, révélant la force intérieure de chaque cerveau. Votre voyage vers le bien-être commence ici, et nous sommes là pour vous guider à chaque étape.

---

### SECTION 9 — Notre Histoire
**Eyebrow:** `Notre Histoire`
**H2:** Une vision née d'une conviction

> L'International Neurofeedback Center est né d'une conviction simple : le cerveau possède une capacité naturelle d'adaptation, de régulation et de transformation. Depuis l'ouverture du premier centre, notre mission est de rendre l'accompagnement neurocognitif plus accessible, plus structuré et plus humain au Maroc.

> Nous avons construit une approche qui associe la précision de la mesure, la rigueur du suivi et la qualité de l'accompagnement psychologique. Aujourd'hui, l'INFC regroupe plusieurs centres au Maroc et poursuit son développement autour d'une même exigence : accompagner le cerveau sans jamais oublier la personne.

**CTA:** 🟡 `Découvrir notre vision` → vision.html

---

### SECTION 10 — Témoignages
**Eyebrow:** `Témoignages`
**H2:** Des parcours, des personnes

3 testimonial cards (left gold border):
1. *"Mon fils de 9 ans avait d'importantes difficultés de concentration à l'école. En quelques semaines de parcours NeuroKids, nous avons observé un réel retour au calme et une bien meilleure écoute à la maison et en classe."* — **Mouna S.** (Maman d'enfant accompagné)
2. *"Face à une surcharge de stress intense liée à mes responsabilités professionnelles, le parcours Calm Reset m'a permis de retrouver une clarté d'esprit et de restaurer la qualité de mes nuits."* — **Youssef B.** (Dirigeant d'entreprise)
3. *"J'accompagne mes patients seniors dans le maintien de leur vitalité cognitive. L'approche d'INFC, rigoureuse et humaine, s'inscrit en parfaite harmonie avec nos protocoles de suivi."* — **Pr. Mehdi K.** (Praticien de santé)

---

### SECTION 11 — Corps Médical
**Eyebrow:** `Pour le corps médical`
**H2:** Un espace dédié aux professionnels

> Vous êtes médecin, psychologue, orthophoniste, professionnel de santé ou praticien de l'accompagnement ? L'INFC met à disposition un espace pour mieux comprendre notre approche, notre cadre d'intervention et les possibilités d'orientation.

**Features:** 📊 Documentation scientifique · 👥 Rencontres d'information · 📄 Protocoles d'orientation · 🤝 Échanges avec notre équipe

**CTA:** 🟡 `Accéder à l'espace professionnel`

---

### SECTION 12 — Notre Équipe
**Eyebrow:** `Notre Équipe`
**H2:** Des experts à votre écoute

> L'INFC réunit une équipe pluridisciplinaire composée de psychologues, de neurothérapeutes certifiés, d'assistantes de centre et d'une équipe back-office dédiée au bon déroulement de chaque parcours.
> Derrière chaque accompagnement, il n'y a jamais seulement une machine ni une séance isolée. Il y a une équipe qui écoute, observe, oriente, organise et suit l'évolution de chaque personne avec sérieux et humanité.

---

### SECTION 13 — Nos Centres (Preview)
**Eyebrow:** `Réseau`
**H2:** Un centre près de chez vous
**Sub:** L'INFC vous accueille à Casablanca, Marrakech, Kénitra et Tanger.

**4 city cards (gold top border):**
1. **Casablanca** — Siège du réseau, Oasis — Tél: 05.22.99.17.83 — Lun-Sam 9h-19h
2. **Marrakech** — Le centre historique, Guéliz — Tél: 05.24.20.72.63 — Lun-Sam 9h-19h
3. **Kénitra** — Régulation de proximité, Centre — Tél: 06.22.60.60.33 — Lun-Sam 9h-19h
4. **Tanger** — Nord du Maroc, Route Abattoirs — Tél: 05.39.36.75.19 — Lun-Sam 9h-19h

---

### SECTION 14 — Final CTA Banner
**Background:** Bleu Nuit gradient · Rounded XXL card

**H2:** Faites le premier pas

> Vous souhaitez savoir si notre approche peut correspondre à votre situation ? Le bilan découverte permet de comprendre vos besoins, d'échanger avec notre équipe et de vous orienter vers le parcours le plus adapté.

**CTAs:**
- 🟡 `Réserver mon bilan découverte`
- 🟢 `WhatsApp Direct` (+212522991783)

**Disclaimer:** * Il ne s'agit pas d'un diagnostic médical, mais d'un premier temps d'écoute et d'orientation.

---

### SECTION 15 — Newsletter
**Eyebrow:** `La Lettre Neuro-Sensible`
**H2:** Comprendre le cerveau, autrement

> Recevez des repères simples et concrets pour mieux comprendre le cerveau, le stress, l'attention, le sommeil, les émotions et l'autorégulation.

**Form:** Email input + `S'abonner` button (navy)

---

## 📄 PAGE 2 — LA SCIENCE (neurofeedback.html)

### Meta
- **Title:** La Science · Neurofeedback Dynamique INFC
- **Description:** Comprendre le neurofeedback dynamique : principes, méthode et application clinique au Maroc.

### HERO
**Eyebrow:** `La Science`
**H1:** Le neurofeedback dynamique — comment ça fonctionne ?
**Sub:** Une approche d'autorégulation cérébrale, non invasive et sans stimulation électrique.

### KEY SECTIONS

**H2:** Qu'est-ce que le neurofeedback dynamique ?
> Le neurofeedback dynamique est une méthode d'entraînement cérébral basée sur la neuroplasticité. Le cerveau reçoit en temps réel une information sur sa propre activité électrique. Cette rétroaction (feedback) peut progressivement l'aider à ajuster ses propres schémas de fonctionnement.

> Il ne s'agit pas de le forcer, ni de le stimuler électriquement. Il s'agit de lui donner un miroir fidèle et de créer les conditions de sa propre régulation.

---

**H2:** Ce que le neurofeedback EST — et ce qu'il n'est PAS

*IS:* Entraînement cérébral d'autorégulation · Approche non invasive & indolore · Méthode basée sur la neuroplasticité · Accompagnement clinique structuré · Outil complémentaire aux approches psychologiques

*IS NOT:* Un traitement médical · Un diagnostic · Un substitut à la médecine · Stimulation électrique · Efficace de façon garantie ou universelle

---

**H2:** Les principes scientifiques

**Neuroplasticité:** Le cerveau est capable de se transformer tout au long de la vie. De nouvelles connexions neuronales peuvent se créer et se renforcer grâce à des expériences répétées.

**Autorégulation:** Le cerveau possède une capacité naturelle à ajuster son propre fonctionnement. Le neurofeedback dynamique s'appuie sur cette capacité — sans la forcer, en la stimulant.

**Rétroaction en temps réel:** En recevant une information sur sa propre activité, le cerveau peut progressivement ajuster ses patterns de fonctionnement de manière autonome.

---

**H2:** Comment se déroule une séance ?
4 step cards:
1. **Installation** — Capteurs passifs posés sur cuir chevelu et oreilles. Aucun courant envoyé.
2. **Lecture** — Le logiciel lit l'activité électrique cérébrale en temps réel (EEG).
3. **Rétroaction** — Micro-interruptions sonores/visuelles pendant que vous regardez un film ou écoutez de la musique.
4. **Intégration** — Le cerveau reçoit l'information et peut progressivement ajuster ses schémas.

**Duration:** ~33 minutes/séance

---

**H2:** Questions fréquentes (Q&A grid)

- **Est-ce que ça fait mal ?** Non. La méthode est non invasive, indolore et sans stimulation électrique.
- **Est-ce que ça fonctionne pour tout le monde ?** Les résultats varient d'une personne à l'autre. Le neurofeedback ne garantit aucun résultat spécifique.
- **Combien de séances sont nécessaires ?** Cela dépend du profil, des objectifs et de la réponse individuelle. En général, les parcours commencent à 10 séances.
- **Est-ce que c'est compatible avec un traitement médical ?** Le neurofeedback n'interfère pas avec les traitements médicaux. En cas de doute, l'avis du médecin est recommandé.
- **C'est quoi la différence avec d'autres méthodes ?** Le neurofeedback dynamique est non invasif, ne pose aucun diagnostic et ne prescrit aucun traitement. Il travaille avec le cerveau, pas sur lui.
- **Est-ce reconnu scientifiquement ?** Le neurofeedback est l'objet d'un volume croissant de recherches scientifiques. Nous communiquons de façon transparente sur ce que la science valide et ce qui reste en cours d'étude.

---

**Final CTA:** Faites le premier pas — Réserver mon bilan découverte

---

## 📄 PAGE 3 — PROGRAMMES (programmes.html)

### HERO
**H1:** Des programmes d'accompagnement structurés
**Sub:** Chaque programme est conçu à partir d'une situation réelle et d'un objectif clair. Ce ne sont pas des forfaits — ce sont des parcours.

### 7 Program Cards (detail format)

**1. Brain Boost™** `PERFORMANCE NEUROCOGNITIVE`
> Pour les personnes cherchant à optimiser leurs capacités mentales : clarté d'esprit, concentration, rapidité de traitement, disponibilité mentale et résistance à la fatigue cognitive.
> *Idéal pour :* Cadres, étudiants en période d'examens, sportifs, entrepreneurs, personnes en reconversion.
> *Inclus :* qEEG · Séances de neurofeedback · Suivi psychologique · Rapport de fin de parcours

**2. Calm Reset™** `STRESS & ANXIÉTÉ`
> Pour les personnes vivant un stress persistant, une anxiété latente ou une tension intérieure difficile à relâcher.
> *Idéal pour :* Adultes en surcharge, personnes anxieuses, profils hypervigilants.
> *Inclus :* qEEG · Séances · Suivi psychologique · Consultation de fin

**3. Sleep Reset™** `SOMMEIL & RÉCUPÉRATION`
> Pour les personnes souffrant de difficultés d'endormissement, de réveils nocturnes, de sommeil non réparateur ou de fatigue chronique.
> *Idéal pour :* Adultes & seniors avec troubles du sommeil.
> *Inclus :* qEEG · Séances · Consultation psychologique · Protocole spécifique sommeil

**4. NeuroKids™** `ENFANTS & ADOLESCENTS`
> Pour les enfants et adolescents présentant des difficultés d'attention, d'agitation, de concentration, de comportement ou d'adaptation scolaire.
> *Idéal pour :* Enfants 6-17 ans, TDA/H, difficultés scolaires.
> *Inclus :* Évaluation initiale · Séances adaptées · Suivi parents · Rapport scolaire si besoin

**5. NeuroSensible Adulte™** `HYPERSENSIBILITÉ`
> Pour les personnes hypersensibles, à haut potentiel émotionnel ou vivant une surcharge sensorielle régulière.
> *Idéal pour :* Adultes hypersensibles, profils HPI, personnes en surcharge sensorielle.
> *Inclus :* qEEG · Séances · Suivi psychologique spécialisé

**6. Burnout Reset™** `ÉPUISEMENT PROFESSIONNEL`
> Pour les personnes en état d'épuisement professionnel, de vide émotionnel ou de perte de sens.
> *Idéal pour :* Personnes en burnout ou post-burnout, cadres épuisés.
> *Inclus :* qEEG · Séances intensives · Soutien psychologique · Protocole spécifique

**7. Femme Harmony™** `SANTÉ FÉMININE`
> Programme doux conçu pour accompagner les femmes dans leurs transitions de vie : charge mentale intense, variations hormonales, post-partum, péri-ménopause.
> *Inclus :* qEEG · Séances · Consultation psychologique spécialisée

### Pack Sessions (free choice)
**H2:** Préférez-vous un accompagnement à votre rythme ?

**Pack 10 séances** — Inclus : 10 séances neurofeedback · 1 qEEG · 1 consultation psychologique · Suivi d'évolution

**Pack 20 séances** — Inclus : 20 séances neurofeedback · 2 qEEG · 2 consultations psychologiques · Rapport complet de parcours

*Tarifs disponibles sur demande. Contactez votre centre INFC.*

**CTA:** 🟡 `Réserver un bilan découverte`

---

## 📄 PAGE 4 — VISION (vision.html)

### HERO
**H1:** Notre vision : rendre la santé cérébrale accessible à tous
**Sub:** Nous croyons en un Maroc où la santé mentale est reconnue, accompagnée et déstigmatisée.

### SECTIONS

**H2:** Notre raison d'être
> INFC est né d'une conviction : le cerveau humain possède une capacité naturelle d'adaptation, de régulation et de transformation. Cette capacité mérite d'être soutenue — avec rigueur, éthique et humanité.

**H2:** Nos valeurs fondamentales
1. **Rigueur scientifique** — Nous ne communiquons que ce que nous pouvons honnêtement affirmer. Nous distinguons ce qui est validé de ce qui est en cours d'étude.
2. **Éthique absolue** — Aucun diagnostic automatique. Aucune promesse de guérison. Aucun marketing agressif.
3. **Humanité d'abord** — La technologie est un outil. L'humain reste au centre.
4. **Accessibilité** — Nous croyons que l'accompagnement neurocognitif doit être accessible au plus grand nombre.
5. **Transparence** — Nous disons ce que nous faisons, et nous faisons ce que nous disons.

**H2:** Notre histoire en dates
- **2016** — Premier centre INFC à Marrakech. L'idée : rendre le neurofeedback clinique accessible.
- **2019** — Ouverture du centre de Casablanca. Siège du réseau.
- **2021** — Kénitra rejoint le réseau. INFC devient le premier réseau structuré de neurofeedback au Maroc.
- **2023** — Ouverture à Tanger. 4 centres actifs, des centaines de parcours accompagnés.
- **2024+** — Développement B2B, franchise et formation professionnelle.

**H2:** Notre équipe de direction / Notre fondatrice
> [Foundress bio placeholder — premium layout with photo]
> Une conviction, une mission, une méthode. L'INFC a été fondé pour répondre à un vide réel dans l'accompagnement de la santé mentale au Maroc.

**H2:** Ce que nous ne sommes pas
> L'INFC n'est pas une clinique psychiatrique. Nous n'établissons aucun diagnostic. Nous ne prescrivons rien. Nous ne remplaçons aucun médecin, psychiatre ou psychologue.

---

## 📄 PAGE 5 — NOS CENTRES (centres.html)

### HERO
**H1:** Nos centres au Maroc
**Sub:** 4 espaces pensés pour le calme, l'écoute et l'accompagnement.

### 4 Center Detail Cards

**Casablanca** `SIÈGE DU RÉSEAU`
- Adresse: Oasis, Casablanca
- Tél/WA: 05.22.99.17.83
- Email: casablanca@infc.ma
- Horaires: Lun–Sam, 9h–19h
- CTAs: WhatsApp · Appel · Itinéraire · Réserver

**Marrakech** `LE CENTRE HISTORIQUE`
- Adresse: Guéliz, Marrakech
- Tél/WA: 05.24.20.72.63
- Email: marrakech@infc.ma
- Horaires: Lun–Sam, 9h–19h
- CTAs: WhatsApp · Appel · Itinéraire · Réserver

**Kénitra** `RÉGULATION DE PROXIMITÉ`
- Adresse: Centre-ville, Kénitra
- Tél/WA: 06.22.60.60.33
- Email: kenitra@infc.ma
- Horaires: Lun–Sam, 9h–19h
- CTAs: WhatsApp · Appel · Itinéraire · Réserver

**Tanger** `NORD DU MAROC`
- Adresse: Route des Abattoirs, Tanger
- Tél/WA: 05.39.36.75.19
- Email: tanger@infc.ma
- Horaires: Lun–Sam, 9h–19h
- CTAs: WhatsApp · Appel · Itinéraire · Réserver

### WHAT TO EXPECT AT A CENTER
- Accueil chaleureux dès votre arrivée
- Espace de consultation calme et confidentiel
- Salle de séance confortable, éclairage doux
- Accompagnement continu par l'équipe tout au long du parcours
- Flexibilité de prise de rendez-vous (présentiel + WhatsApp)

---

## 📄 PAGE 6 — CONTACT (contact.html)

### HERO
**H1:** Prenez contact avec nous
**Sub:** Une question, une prise de rendez-vous, un renseignement sur notre approche — nous sommes là.

### CONTACT FORM (left column)
Fields: Prénom · Nom · Email · Téléphone · Centre de préférence (select) · Message
CTA: 🟡 `Envoyer mon message`

### CONTACT CHANNELS (right column)
**Phone Numbers by City:**
- Casablanca: 05.22.99.17.83
- Marrakech: 05.24.20.72.63
- Kénitra: 06.22.60.60.33
- Tanger: 05.39.36.75.19

**Email:** contact@infc.ma

**WhatsApp:** Direct link to Casablanca number

**Hours:** Lun–Sam, 9h–19h

### MEDICAL DISCLAIMER
*Les informations partagées via ce formulaire sont confidentielles. INFC ne réalise aucun diagnostic médical par ce canal.*

---

## 📄 PAGE 7 — B2B (b2b.html)

### HERO
**Eyebrow:** `Entreprises & Institutions`
**H1:** La santé cérébrale de vos équipes — un investissement stratégique
**Sub:** INFC accompagne les organisations marocaines dans la prévention du burnout, l'amélioration des performances cognitives et le bien-être durable de leurs collaborateurs.

### SECTIONS

**Stats Band (dark):**
- 🔴 76% des cadres marocains en surcharge cognitive chronique
- 💰 Le burnout coûte en moyenne 1,5× le salaire annuel en perte de productivité
- ✅ Les entreprises investissant en santé mentale réduisent l'absentéisme de 30%

**H2:** Secteurs partenaires
1. **Banques & Finance** — Pression sur les performances, délais serrés, stress décisionnel.
2. **Industrie & Manufacturing** — Fatigue physique et cognitive, sécurité au travail.
3. **Éducation & Recherche** — Enseignants, chercheurs, administration académique.
4. **Santé & Médical** — Médecins, infirmiers, professionnels en première ligne.

**H2:** Nos objectifs pour vos équipes
- Réduction du stress chronique et de l'anxiété de performance
- Amélioration de la concentration, de la mémoire de travail et de la clarté mentale
- Prévention de l'épuisement professionnel (burnout)
- Soutien à la récupération post-burnout
- Amélioration de la qualité du sommeil et de la récupération
- Renforcement de la résistance au stress et de la régulation émotionnelle

**H2:** Nos formats d'intervention
- **Bilan collectif** — Atelier de découverte pour sensibiliser vos équipes
- **Programme individuel entreprise** — Parcours subventionné ou co-financé pour collaborateurs ciblés
- **Retraite bien-être corporate** — Formats immersifs sur 1–3 jours
- **Conférence & formation** — Interventions sur la santé mentale au travail

**H2:** Conditions d'accès
- Prise en charge partielle ou totale par l'entreprise
- Facturation corporate disponible
- Confidentialité des parcours individuels garantie
- Accompagnement dédié par un référent INFC

**CTA:** 🟡 `Demander une proposition B2B`

---

## 📄 PAGE 8 — FRANCHISE (franchise.html)

### HERO
**Eyebrow:** `Devenir partenaire INFC`
**H1:** Ouvrez votre centre de neurofeedback au Maroc.
**Sub:** Rejoignez un réseau pionnier en régulation cérébrale clinique. Un modèle structuré, une marque premium, une formation complète — et une raison d'agir profonde.

**Bullets:** Modèle éprouvé sur 4 centres · Formation & certification INFC · Accompagnement opérationnel continu · Marque à forte reconnaissance · Secteur en pleine expansion

**CTAs:** 🟡 `Déposer ma candidature` · ⬜ `Découvrir l'offre`

---

**Manifesto band (gold background):**
*« La santé mentale n'est pas un luxe. Le neurofeedback clinique mérite d'être accessible partout au Maroc. »*

---

**H2:** Un réseau bâti sur la rigueur scientifique et l'impact humain

6 Value Boxes:
1. 🧠 **Protocoles cliniques validés** — Nos protocoles sont issus de plus de 15 ans de recherche internationale.
2. 🏛️ **Marque premium établie** — INFC est reconnu pour sa rigueur, son éthique et son positionnement premium.
3. 📚 **Formation & certification complète** — Formation théorique + pratique + certification INFC avant ouverture.
4. 🤝 **Accompagnement opérationnel** — Launch pack, support marketing, supervision clinique, accès réseau psychologues.
5. 📈 **Marché en forte croissance** — La prise de conscience autour de la santé mentale au Maroc est croissante.
6. 🎯 **Modèle économique éprouvé** — 4 centres ont validé un modèle de rentabilité structuré.

---

**KPI Band (dark):** 4 Centres · 3 Villes · +500 accompagnés · 15+ ans de recherche

---

**H2:** Tout ce dont vous avez besoin pour ouvrir et réussir

**Offer table — 12 inclusions:**
✓ Licence d'exploitation de la marque INFC
✓ Formation théorique complète en neurofeedback clinique
✓ Formation pratique sur équipements professionnels certifiés
✓ Certification de praticien INFC
✓ Manuel opérationnel & protocoles cliniques complets
✓ Accès aux outils digitaux : portail patient, logiciels, CRM
✓ Kit marketing & identité visuelle complet (print + digital)
✓ Soutien au lancement : campagne d'ouverture, RP locale
✓ Accès au réseau de psychologues partenaires INFC
✓ Supervision clinique régulière par l'équipe siège
✓ Assistance à l'aménagement & standards de centre INFC
✓ Accès aux mises à jour protocolaires et formations continues

**Ethics disclaimer:**
*Important — Nos engagements éthiques : INFC ne propose aucun diagnostic automatique, aucune promesse de guérison, et aucun marketing agressif. Chaque franchisé s'engage à respecter notre charte éthique, notre positionnement premium, et nos protocoles cliniques.*

---

**H2:** 5 étapes pour ouvrir votre centre INFC
1. **Candidature & entretien** — Formulaire en ligne + appel de découverte
2. **Étude du projet** — Analyse ville, profil, vision avec le comité INFC
3. **Signature & onboarding** — Signature contrat, remise kit complet, accès portail franchisé
4. **Formation & certification** — Formation intensive sur site INFC
5. **Ouverture officielle** — Inauguration soutenue par l'équipe siège

---

**H2:** Qui peut rejoindre le réseau ?

✅ Bienvenus: Professionnels de santé · Entrepreneurs motivés par l'impact social · Investisseurs · Profils santé + business · Personnes avec intérêt pour neurosciences · Vision long terme

❌ Non acceptés: Revente rapide · Promesses non éthiques · Marketing agressif · Absence totale de motivation santé · Villes déjà couvertes

---

**Partner testimonial:**
*« Rejoindre INFC, c'était rejoindre quelque chose de plus grand que moi. Je ne voulais pas juste ouvrir un centre — je voulais faire partie d'un mouvement sérieux pour la santé mentale au Maroc. »*
— Franchisé INFC, Marrakech · Ouverture 2023

---

**Candidature Form:** Prénom · Nom · Email · Téléphone · Ville envisagée · Profil professionnel (select) · Motivation (textarea)
**CTA:** 🟡 `Envoyer ma candidature`

---

## 🦶 FOOTER (all pages)

**4-column layout on dark navy (#072A5A):**

| Col 1 | Col 2 | Col 3 | Col 4 |
|-------|-------|-------|-------|
| Logo (white) + tagline | **Raccourcis:** Accueil · La Science · Nos Programmes · Notre Vision | **Réseau:** Casablanca · Marrakech · Kénitra · Tanger | **Espaces Dédiés:** Entreprises & B2B · Modèle Franchise · Nous Contacter |

**Legal disclaimer:**
*Le neurofeedback dynamique est un entraînement cérébral d'autorégulation et de bien-être. Cette méthode ne constitue pas un traitement médical, ne pose aucun diagnostic et ne remplace pas une consultation ou un suivi auprès de professionnels de santé habilités.*

**Copyright:** © 2026 International Neurofeedback Center. Tous droits réservés.

---
---

# 🚀 MASTER GOOGLE STITCH PROMPT

> **Copy everything below this line into Google Stitch**

---

Design a premium, multi-page French-language website for **International Neurofeedback Center (INFC)** — the first structured clinical neurofeedback network in Morocco with 4 active centers (Casablanca, Marrakech, Kénitra, Tanger).

## Brand Identity
- **Tone:** Premium · Scientific · Human · Reassuring. Never cold or clinical. Never aggressive marketing.
- **Language:** French (Morocco). All copy is already written — do not change the text.
- **Positioning:** Between luxury wellness spa and serious medical clinic. Think: Calm, trustworthy, aspirational.

## Design System

### Colors (use exactly)
- Primary/Footer/Premium: `#072A5A` (Bleu Nuit)
- Subtitles/UI: `#0B3A78` (Bleu Profond)
- CTA/Accent/Keywords: `#C9962D` (Or INFC — this is the hero gold)
- Background: `#F7F1E5` (Crème — warm, not white)
- Cards: `#FFFCF6` (Blanc Chaud — off-white)
- Body text: `#4A5568` (Gris Texte)

### Typography
- **Display/Hero/Emotional headings (H1, H2):** Playfair Display — elegant serif, high contrast, 600–700 weight
- **UI/Body/CTAs/Labels:** Montserrat — clean, geometric, modern, 400–700 weight
- **Eyebrow labels:** Montserrat, uppercase, 700 weight, 2.5px letter-spacing, color `#C9962D`

### Visual Style
- **Glassmorphism** sticky navbar: `backdrop-filter: blur(14px)`, warm white background, subtle bottom shadow
- **Hero sections:** full-width navy gradient (`#072A5A` → `#0B3A78`), with a soft radial gold glow at top-right corner
- **Cards:** `#FFFCF6` background, `border-radius: 24px`, soft shadow, hover lift (`translateY(-6px)`) + 3px gold top-border accent on hover
- **Gold accents:** Use gold `#C9962D` consistently for: eyebrow labels, left borders on testimonials, icon backgrounds, CTA buttons, section dividers, numbered steps
- **Background alternation:** Sections alternate between `#F7F1E5` (Crème) and `#FFFCF6` (Blanc Chaud) for rhythm
- **Dark band sections:** Use `#072A5A` for "Notre Différence" and stat/KPI bands — white text, gold accent quotes
- **Micro-animations:** Fade-in on scroll (`opacity: 0 → 1, translateY(20px → 0)`), button hover lifts, card hover lifts
- **Premium details:** Thin gold horizontal divider lines, large faded gold numbers (01, 02, 03) as decorative background elements in step cards

## Components to Build

### Navigation (sticky)
Glassmorphism header, logo left, 8 nav links centered (Accueil · La Science · Programmes · Vision · Nos Centres · Contact · B2B · Franchise), gold "Bilan découverte" CTA button right.

### Buttons
- **Primary (gold):** `#C9962D` background, white text, `border-radius: 9999px`, subtle gold box-shadow, hover darkens + lifts
- **Secondary (navy):** `#072A5A` background, white text, same shape
- **Ghost (on dark bg):** transparent, white border, white text

### Section Header Pattern
Every section starts with: gold eyebrow label (uppercase, small, `#C9962D`) → large Playfair H2 → optional subtitle paragraph in gray. Center-aligned by default.

### Cards
Clean white (`#FFFCF6`) cards with 24px radius. Card icon in a small gold-tinted square with gold border. On hover: gold accent top border appears + card lifts.

### Testimonial Cards
Left gold border (`4px solid #C9962D`), large decorative `"` quote in faded gold, italic body text, bold author name.

### Process Steps
Large decorative numbers (01, 02, 03) in faded gold as background watermarks. Steps in a 3-column grid.

### CTA Banner
Full-width rounded banner (`border-radius: 36px`) in navy gradient with a radial gold glow overlay. Large H2 in white, body text in 80% white, two buttons side by side.

### Footer
Dark navy `#072A5A`, 4-column grid, white column titles (uppercase, small, Montserrat), links in warm cream at 65% opacity, hover turns gold. Top gold shimmer line separator.

## Pages to Design

1. **Homepage (index)** — Hero · Approche · Déroulement (3 steps) · Pour Qui (6 profile cards) · Situations tags · Séance déroulé · 7 Programs · Dark différence band · Histoire · 3 Testimonials · Corps Médical · Équipe · 4 Centers preview · Final CTA · Newsletter
2. **La Science** — Hero · What is neurofeedback · IS/IS NOT comparison · 3 Science principles · 4-step session flow · FAQ Q&A grid · CTA
3. **Programmes** — Hero · 7 detailed program cards (alternating layout) · Pack 10 & Pack 20 · CTA
4. **Vision** — Hero · Raison d'être · 5 Values · Timeline history · Team/Founder · What we are NOT
5. **Nos Centres** — Hero · 4 city detail cards (photo + info + action buttons) · What to expect
6. **Contact** — Hero · Split layout: form left, channels right · Medical disclaimer
7. **B2B** — Hero · 3 stat KPIs band · 4 sector cards · 6 objectives · 4 formats · Conditions · CTA
8. **Franchise** — Hero · Gold manifesto band · 6 value boxes · KPI band · Offer table (12 inclusions + ethics note) · 5-step process · Eligibility grid · Partner testimonial · Candidature form · Final CTA

## UX Principles
- **Mobile-first** responsive. All grids collapse to single column on mobile.
- **Accessibility:** ARIA labels on nav, forms, interactive elements. Sufficient color contrast.
- **Sticky navbar** always visible — converts at all times.
- **WhatsApp floating button** — bottom right on all pages (green, `+212522991783`)
- **Scroll animations** — staggered fade-in as sections enter viewport (0.1s delay between cards in same grid)
- **No aggressive pop-ups.** No countdown timers. No "limited offer" banners. This is a premium medical-adjacent brand.

## What Makes This Premium
The site should feel like the digital presence of a discreet, trusted Moroccan institution — confident, not boastful. Inspired by: Dior.com (typography elegance), Calm app (reassuring palette), McKinsey.com (authority and structure), with warmth and human presence woven through every interaction. Every element should whisper "you are in good hands."
