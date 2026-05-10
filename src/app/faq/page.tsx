export const metadata = {
  title: "FAQ — Questions sur les Aides Géothermie 2026",
  description: "MaPrimeRénov', CEE, éco-PTZ, TVA réduite : toutes les réponses sur le financement de la géothermie.",
  alternates: { canonical: "https://www.primes-geothermie.fr/faq" },
};
const faqItems = [
  { q: "Quel est le montant maximum de MaPrimeRénov' pour la géothermie ?", a: "11 000€ pour les ménages très modestes (profil Bleu). Les revenus supérieurs reçoivent 5 000€. La géothermie bénéficie du plafond le plus élevé de toutes les catégories." },
  { q: "Les aides sont-elles cumulables entre elles ?", a: "Oui. MaPrimeRénov', CEE, TVA 5,5% et éco-PTZ sont entièrement cumulables. Le total peut atteindre 15 000 à 21 000€ d'aides sur une installation de 25 000€." },
  { q: "Faut-il demander MaPrimeRénov' avant de signer le devis ?", a: "Oui, obligatoirement. Créez votre dossier sur maprimerenov.gouv.fr et attendez l'accord (4-6 semaines) AVANT de signer le devis. Sinon, vous perdez l'aide." },
  { q: "Comment calculer mon profil MaPrimeRénov' (Bleu, Jaune, Violet, Rose) ?", a: "Le profil dépend de votre revenu fiscal de référence (N-1) et de votre localisation (Île-de-France ou province). Les plafonds sont consultables sur maprimerenov.gouv.fr." },
  { q: "Qu'est-ce que les CEE et combien puis-je recevoir ?", a: "Les CEE (Certificats d'Économies d'Énergie) sont des primes versées par les fournisseurs d'énergie. Pour la géothermie : 2 000 à 4 000€ selon votre zone climatique." },
  { q: "L'éco-PTZ a-t-il des conditions de revenus ?", a: "Non. L'éco-PTZ est accessible sans conditions de revenus. Montant max : 50 000€ sur 20 ans. Taux : 0% — l'État prend en charge les intérêts." },
  { q: "La TVA réduite s'applique-t-elle sur le forage ?", a: "Oui. La TVA à 5,5% couvre l'ensemble de l'installation : forage, sondes, PAC, raccordements et main-d'œuvre. Condition : logement de plus de 2 ans." },
  { q: "Existe-t-il des aides locales en plus des aides nationales ?", a: "Oui. Certaines régions et départements ajoutent 500 à 3 000€. Renseignez-vous auprès de votre Espace France Rénov' ou sur anil.org." },
  { q: "Peut-on financer la géothermie sans apport ?", a: "Oui. Pour les ménages modestes, le cumul des aides réduit le reste à charge à 3 000-5 000€, finançable par éco-PTZ à 25-40€/mois." },
  { q: "Les aides sont-elles versées avant ou après les travaux ?", a: "Après. MaPrimeRénov' est versée sous 2-4 semaines après upload de la facture. Les CEE sont souvent déduits directement du devis par l'installateur." },
];
export default function FAQPage() {
  return (
    <div className="bg-bg min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">Questions Fréquentes — Aides Géothermie</h1>
          <p className="text-green-700 text-lg">MaPrimeRénov&apos;, CEE, éco-PTZ et TVA réduite : le financement décrypté.</p>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(faq => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />
        <div className="space-y-4">
          {faqItems.map((faq, idx) => (
            <details key={idx} className="group bg-white rounded-lg border border-green-200 overflow-hidden">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-primary group-hover:bg-green-50 transition-colors text-lg">{faq.q}<span className="text-green-400 group-open:rotate-180 transition-transform ml-4 shrink-0">▼</span></summary>
              <div className="p-5 pt-0 text-green-700 leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
