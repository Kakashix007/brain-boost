# Spécifications Techniques du Quiz d'Évaluation de la Fatigue Cognitive

Ce document rassemble le code source complet (HTML, CSS et JavaScript) du quiz d'évaluation de la fatigue cognitive, prêt à être copié et intégré sur n'importe quel site web.

## 1. Dépendance Externe (Chart.js)
Pour afficher le graphique en radar à la fin du quiz, la bibliothèque **Chart.js** est requise. Ajoutez cette balise `<script>` dans le `<head>` de votre document :

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

---

## 2. Structure HTML
Intégrez ce bloc de code à l'endroit où vous souhaitez afficher le quiz :

```html
<section id="quiz-section" class="quiz-section">
    <div class="quiz-container">
        <h2>🧠 Test : Votre enfant souffre-t-il de fatigue cognitive ?</h2>
        <p class="quiz-subtitle">5 questions simples · 1 minute · Résultat immédiat</p>
        <p class="quiz-disclaimer">
            <em>Ce test est fourni à titre indicatif et éducatif. Il ne remplace en aucun cas une évaluation médicale ou psychologique.</em>
        </p>
        
        <!-- Barre de progression -->
        <div class="quiz-progress">
            <div class="quiz-progress-fill" id="quiz-bar" style="width: 0%"></div>
        </div>

        <!-- Question 1 -->
        <div class="quiz-step active" data-step="1">
            <div class="quiz-question">1/5 — Votre enfant arrive‑t‑il à se concentrer plus de 15 minutes sur ses révisions ?</div>
            <div class="quiz-options">
                <div class="quiz-option" data-score="0" onclick="selectOption(this)">Oui, sans difficulté</div>
                <div class="quiz-option" data-score="1" onclick="selectOption(this)">Parfois, ça dépend des jours</div>
                <div class="quiz-option" data-score="2" onclick="selectOption(this)">Rarement, il décroche très vite</div>
                <div class="quiz-option" data-score="3" onclick="selectOption(this)">Non, c'est très difficile pour lui</div>
            </div>
        </div>

        <!-- Question 2 -->
        <div class="quiz-step" data-step="2" style="display: none;">
            <div class="quiz-question">2/5 — Comment décririez‑vous son sommeil ?</div>
            <div class="quiz-options">
                <div class="quiz-option" data-score="0" onclick="selectOption(this)">Il dort bien et se réveille en forme</div>
                <div class="quiz-option" data-score="1" onclick="selectOption(this)">Sommeil correct mais fatigue occasionnelle</div>
                <div class="quiz-option" data-score="2" onclick="selectOption(this)">Il a du mal à s'endormir ou se réveille fatigué</div>
                <div class="quiz-option" data-score="3" onclick="selectOption(this)">Sommeil très perturbé, fatigue chronique</div>
            </div>
        </div>

        <!-- Question 3 -->
        <div class="quiz-step" data-step="3" style="display: none;">
            <div class="quiz-question">3/5 — Observez‑vous des signes d'irritabilité ou d'anxiété liés aux études ?</div>
            <div class="quiz-options">
                <div class="quiz-option" data-score="0" onclick="selectOption(this)">Non, il reste calme</div>
                <div class="quiz-option" data-score="1" onclick="selectOption(this)">Un peu de stress normal avant les contrôles</div>
                <div class="quiz-option" data-score="2" onclick="selectOption(this)">Oui, il est souvent nerveux ou en colère</div>
                <div class="quiz-option" data-score="3" onclick="selectOption(this)">Oui, crises fréquentes, pleurs ou blocages</div>
            </div>
        </div>

        <!-- Question 4 -->
        <div class="quiz-step" data-step="4" style="display: none;">
            <div class="quiz-question">4/5 — Votre enfant retient‑il ce qu'il a révisé la veille ?</div>
            <div class="quiz-options">
                <div class="quiz-option" data-score="0" onclick="selectOption(this)">Oui, sa mémoire est bonne</div>
                <div class="quiz-option" data-score="1" onclick="selectOption(this)">En général oui, mais pas toujours</div>
                <div class="quiz-option" data-score="2" onclick="selectOption(this)">Il oublie souvent malgré les efforts</div>
                <div class="quiz-option" data-score="3" onclick="selectOption(this)">Il oublie presque tout le lendemain</div>
            </div>
        </div>

        <!-- Question 5 -->
        <div class="quiz-step" data-step="5" style="display: none;">
            <div class="quiz-question">5/5 — A‑t‑il tendance à procrastiner face aux révisions ?</div>
            <div class="quiz-options">
                <div class="quiz-option" data-score="0" onclick="selectOption(this)">Non, il s'y met facilement</div>
                <div class="quiz-option" data-score="1" onclick="selectOption(this)">Un peu, comme tout le monde</div>
                <div class="quiz-option" data-score="2" onclick="selectOption(this)">Souvent, il repousse sans cesse</div>
                <div class="quiz-option" data-score="3" onclick="selectOption(this)">Systématiquement, même s'il sait que c'est urgent</div>
            </div>
        </div>

        <!-- Étape Résultat -->
        <div class="quiz-step" data-step="result" style="display: none;">
            <div class="quiz-result">
                <div class="result-header">
                    <span class="result-badge">Le Bilan de Prévention Brain Boost</span>
                    <h2>Bravo d'avoir complété l'évaluation.</h2>
                    <p id="quiz-advice" class="result-advice"></p>
                </div>
                
                <!-- Zone du graphique -->
                <div class="chart-container">
                    <canvas id="quiz-chart"></canvas>
                </div>
                
                <p class="cta-intro">Découvrez comment l'accompagner sans pression :</p>
                
                <div class="cta-grid">
                    <!-- Guide PDF -->
                    <a href="#lead-magnet-section" class="cta-card cta-pdf">
                        <span class="cta-icon">📖</span>
                        <div class="cta-text">
                            <strong>Recevoir le Guide d'Accompagnement</strong>
                            <small>Téléchargement libre</small>
                        </div>
                    </a>
                    <!-- WhatsApp Contact -->
                    <a href="https://wa.me/212622606011?text=Bonjour%2C%20je%20viens%20de%20faire%20le%20test%20pour%20mon%20enfant%20et%20je%20souhaite%20recevoir%20le%20dossier%20complet%20Brain%20Boost." target="_blank" class="cta-card cta-whatsapp">
                        <span class="cta-icon">💬</span>
                        <div class="cta-text">
                            <strong>Demander le dossier complet</strong>
                            <small>Via WhatsApp</small>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
```

---

## 3. Styles CSS
Ajoutez ces styles à la feuille de style globale de votre site pour formater le quiz aux standards premium :

```css
:root {
    --color-navy: #0A1628;
    --color-gold: #D4AF37;
    --color-grey-text: #4B5563;
    --radius-lg: 16px;
    --radius-md: 10px;
}

.quiz-section {
    padding: 4rem 0;
    background-color: #FFFFFF;
}

.quiz-container {
    background: #FFFFFF;
    border-radius: var(--radius-lg);
    padding: 3rem;
    box-shadow: 0 8px 40px rgba(10, 22, 40, 0.12);
    max-width: 700px;
    margin: 0 auto;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

.quiz-container h2 {
    text-align: center;
    color: var(--color-navy);
    margin-bottom: 0.5rem;
    font-size: 1.8rem;
}

.quiz-subtitle {
    text-align: center;
    color: var(--color-grey-text);
    margin-bottom: 0.5rem;
}

.quiz-disclaimer {
    text-align: center;
    color: var(--color-grey-text);
    font-size: 0.85rem;
    opacity: 0.8;
    margin-bottom: 2rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.4;
}

.quiz-progress {
    height: 6px;
    background: rgba(10, 22, 40, 0.08);
    border-radius: 3px;
    margin-bottom: 2.5rem;
    overflow: hidden;
}

.quiz-progress-fill {
    height: 100%;
    background: var(--color-gold);
    border-radius: 3px;
    transition: width 0.4s ease;
}

.quiz-step {
    animation: fadeIn 0.4s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.quiz-question {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--color-navy);
    margin-bottom: 2rem;
    text-align: center;
    line-height: 1.5;
}

.quiz-options {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.quiz-option {
    padding: 1rem 1.5rem;
    border: 2px solid rgba(10, 22, 40, 0.1);
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1rem;
    text-align: left;
    background: #FFFFFF;
    color: var(--color-navy);
    font-weight: 500;
}

.quiz-option:hover {
    border-color: var(--color-gold);
    background: rgba(212, 175, 55, 0.05);
}

.quiz-option.selected {
    border-color: var(--color-gold);
    background: rgba(212, 175, 55, 0.1);
}

/* Styles du résultat */
.quiz-result {
    text-align: center;
}

.result-header {
    margin-bottom: 2.5rem;
}

.result-badge {
    display: inline-block;
    font-size: 0.9rem;
    text-transform: uppercase;
    color: var(--color-grey-text);
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 1rem;
}

.result-advice {
    color: var(--color-grey-text);
    font-size: 1.1rem;
    max-width: 600px;
    margin: 1rem auto 0;
    line-height: 1.6;
}

.chart-container {
    max-width: 500px;
    margin: 0 auto 3rem;
    position: relative;
    height: 380px;
}

.cta-intro {
    font-weight: 700;
    color: var(--color-navy);
    margin-bottom: 1.5rem;
}

.cta-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
}

.cta-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.2rem;
    border-radius: var(--radius-md);
    text-decoration: none;
    transition: transform 0.3s;
    text-align: left;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

.cta-card:hover {
    transform: translateY(-3px);
}

.cta-icon {
    font-size: 2rem;
}

.cta-text {
    display: flex;
    flex-direction: column;
}

.cta-text strong {
    font-size: 1rem;
}

.cta-text small {
    font-size: 0.8rem;
    margin-top: 2px;
}

.cta-pdf {
    background: var(--color-navy);
    color: #FFFFFF;
}

.cta-pdf small {
    color: rgba(255,255,255,0.7);
}

.cta-whatsapp {
    background: #25D366;
    color: #FFFFFF;
}

.cta-whatsapp small {
    color: rgba(255,255,255,0.9);
}

@media (max-width: 640px) {
    .quiz-container {
        padding: 1.5rem;
    }
    .cta-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    .chart-container {
        height: 300px;
    }
}
```

---

## 4. Logique JavaScript
Placez ce code JS dans vos scripts globaux ou au bas de votre document :

```javascript
let currentStep = 1;
let totalScore = 0;
let questionScores = [0, 0, 0, 0, 0];
let radarChart = null;

function selectOption(el) {
    // 1. Gérer l'état de sélection visuelle
    el.parentNode.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
    el.classList.add('selected');
    
    // 2. Enregistrer le score pour cette étape (l'étape courante est basée sur 1)
    questionScores[currentStep - 1] = parseInt(el.dataset.score);

    // Petit délai pour donner un feedback visuel avant de passer à la question suivante
    setTimeout(() => {
        // Masquer l'étape actuelle
        const currentEl = document.querySelector(`.quiz-step[data-step="${currentStep}"]`);
        currentEl.classList.remove('active');
        currentEl.style.display = 'none';
        
        currentStep++;

        if (currentStep <= 5) {
            // Afficher l'étape suivante
            const nextEl = document.querySelector(`.quiz-step[data-step="${currentStep}"]`);
            nextEl.style.display = 'block';
            nextEl.classList.add('active');
            // Mettre à jour la barre de progression
            document.getElementById('quiz-bar').style.width = ((currentStep - 1) / 5 * 100) + '%';
        } else {
            // Afficher le résultat
            document.getElementById('quiz-bar').style.width = '100%';
            const resultStep = document.querySelector('.quiz-step[data-step="result"]');
            resultStep.style.display = 'block';
            resultStep.classList.add('active');
            
            // Calculer le score total
            totalScore = questionScores.reduce((a, b) => a + b, 0);

            // Mettre à jour les recommandations
            let advice;
            if (totalScore <= 4) {
                advice = "<strong>Votre enfant a un bon équilibre, mais restez vigilant.</strong> Même un cerveau peu fatigué peut décrocher sous pression. Veuillez consulter le graphique ci-dessous illustrant ses zones de force et d'attention.";
            } else {
                advice = "<strong>Attention, votre enfant présente un risque de surcharge cognitive.</strong> Veuillez consulter les résultats détaillés dans le graphique ci-dessous. Ils soulignent nos observations ainsi que les moyens de protéger son équilibre mental avant les examens.";
            }
            document.getElementById('quiz-advice').innerHTML = advice;

            // Calculer les pourcentages par vulnérabilité pour le radar
            // Fatigue Attentionnelle (Questions 1 & 5) -> Score max de 6
            const attention = ((questionScores[0] + questionScores[4]) / 6) * 100;
            // Sommeil (Question 2) -> Score max de 3
            const sommeil = (questionScores[1] / 3) * 100;
            // Stress (Question 3) -> Score max de 3
            const stress = (questionScores[2] / 3) * 100;
            // Mémoire (Question 4) -> Score max de 3
            const memoire = (questionScores[3] / 3) * 100;

            // Rendre le graphique en radar avec Chart.js
            const ctx = document.getElementById('quiz-chart').getContext('2d');
            if (radarChart) radarChart.destroy();
            
            radarChart = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: ['Fatigue Attentionnelle', 'Dette de Sommeil', 'Niveau de Stress', 'Charge Mémorielle'],
                    datasets: [{
                        label: 'Vulnérabilité (%)',
                        data: [attention, sommeil, stress, memoire],
                        backgroundColor: 'rgba(255, 75, 114, 0.4)', // Rose translucide
                        borderColor: '#FF4B72', // Rose uni
                        pointBackgroundColor: '#FF4B72',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: '#FF4B72',
                        borderWidth: 2
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        r: {
                            angleLines: { color: 'rgba(10, 22, 40, 0.1)' },
                            grid: { color: 'rgba(10, 22, 40, 0.1)' },
                            pointLabels: {
                                color: '#0A1628',
                                font: { size: 12, family: 'sans-serif', weight: 'bold' }
                            },
                            ticks: { display: false, min: 0, max: 100, stepSize: 25 }
                        }
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: { enabled: false }
                    }
                }
            });
        }
    }, 400); // 400ms correspond au retour d'état actif de l'option cliquée
}
```
