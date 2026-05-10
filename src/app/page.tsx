import Link from "next/link";
import { getAllGuides } from "@/data/guides";
import { IconArrowRight, IconCheck, IconStar, IconClock, IconLeaf, IconCoin, IconReceipt, IconCalculator, IconPigMoney, IconCash } from "@tabler/icons-react";
import { Metadata } from "next";

export const metadata: Metadata = { alternates: { canonical: "https://www.primes-geothermie.fr" } };

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-gradient-to-br from-emerald-950 via-green-900 to-emerald-950 py-20 lg:py-0 lg:h-[600px] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 text-green-200 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <IconStar className="h-4 w-4 fill-green-400 text-green-400" />
                <span>Barèmes d&apos;aides 2026 — À jour</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight font-heading">
                Toutes les Aides{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-300">Géothermie 2026</span>
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Jusqu&apos;à 15 000€ d&apos;aides cumulables pour votre PAC géothermique. MaPrimeRénov&apos;, CEE, éco-PTZ, TVA réduite : simulez votre reste à charge en 2 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/devis" className="inline-flex items-center justify-center bg-accent hover:bg-green-700 text-white text-lg px-8 h-14 rounded-xl shadow-lg transition-all transform hover:scale-105 font-bold">Calculer mes aides <IconArrowRight className="ml-2 h-5 w-5" /></Link>
                <div className="flex items-center gap-3 text-green-200 px-4"><div className="text-sm"><span className="font-bold text-white block">15 000€</span>d&apos;aides cumulables</div></div>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-[400px] flex items-center justify-center bg-gradient-to-br from-green-900 to-emerald-950">
                  <div className="text-center p-8 z-10">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400/30 to-emerald-500/30 border-2 border-green-400/50 flex items-center justify-center"><IconPigMoney className="h-12 w-12 text-green-400" /></div>
                    <div className="text-white font-heading font-bold text-2xl mb-2">Jusqu&apos;à 15 000€</div>
                    <div className="text-green-200">d&apos;aides cumulées</div>
                    <div className="mt-6 flex justify-center gap-4">
                      <div className="bg-green-800/50 p-3 rounded-lg text-center"><div className="text-green-300 font-bold text-lg">11 000€</div><div className="text-green-500 text-xs">MaPrimeRénov&apos; max</div></div>
                      <div className="bg-green-800/50 p-3 rounded-lg text-center"><div className="text-emerald-300 font-bold text-lg">4 000€</div><div className="text-green-500 text-xs">CEE max</div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce" style={{animationDuration: '3s'}}><div className="bg-green-100 p-2 rounded-full"><IconCheck className="h-6 w-6 text-green-600" /></div><div><p className="text-sm font-bold text-green-900">Éligible MaPrimeRénov&apos;</p><p className="text-xs text-green-600">Tous profils de revenus</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-green-100 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-green-700 text-sm font-medium uppercase tracking-wider">
            <div className="flex items-center gap-2"><IconCoin className="h-5 w-5 text-secondary" /> MaPrimeRénov&apos; 2026</div>
            <div className="flex items-center gap-2"><IconReceipt className="h-5 w-5 text-secondary" /> CEE Certifiés</div>
            <div className="flex items-center gap-2"><IconCash className="h-5 w-5 text-secondary" /> Éco-PTZ sans conditions</div>
            <div className="flex items-center gap-2"><IconLeaf className="h-5 w-5 text-secondary" /> TVA réduite 5,5%</div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4 font-heading">MaPrimeRénov&apos; Géothermie : combien pour vous ?</h2>
            <p className="text-green-700 text-lg">Le montant dépend de vos revenus fiscaux. La géothermie bénéficie du plafond le plus élevé.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { profil: "Très modeste", couleur: "Bleu", montant: "11 000€", bg: "bg-blue-50 border-blue-200", text: "text-blue-700", badge: "bg-blue-100" },
              { profil: "Modeste", couleur: "Jaune", montant: "9 000€", bg: "bg-yellow-50 border-yellow-200", text: "text-yellow-700", badge: "bg-yellow-100" },
              { profil: "Intermédiaire", couleur: "Violet", montant: "6 000€", bg: "bg-purple-50 border-purple-200", text: "text-purple-700", badge: "bg-purple-100" },
              { profil: "Supérieur", couleur: "Rose", montant: "5 000€", bg: "bg-pink-50 border-pink-200", text: "text-pink-700", badge: "bg-pink-100" },
            ].map((item, idx) => (
              <div key={idx} className={`p-6 rounded-2xl shadow-sm border hover:shadow-lg transition-shadow text-center ${item.bg}`}>
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${item.badge} ${item.text}`}>MaPrimeRénov&apos; {item.couleur}</span>
                <h3 className="text-lg font-bold text-primary mb-2 font-heading">Revenus {item.profil}s</h3>
                <p className={`font-mono text-3xl font-bold ${item.text} mb-2`}>{item.montant}</p>
                <p className="text-xs text-green-600">PAC géothermique sol-eau ou eau-eau</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4 font-heading">Comment cumuler toutes les aides ?</h2>
            <p className="text-green-700 text-lg">MaPrimeRénov&apos; est cumulable avec les CEE, la TVA réduite et l&apos;éco-PTZ.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6"><IconReceipt className="h-7 w-7 text-green-600" /></div>
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">Étape 1 — MaPrimeRénov&apos;</h3>
              <p className="text-green-700">Demandez votre aide sur <strong>maprimerenov.gouv.fr</strong> AVANT de signer le devis. Délai : 4-6 semaines. Montant : 5 000 à 11 000€.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6"><IconCoin className="h-7 w-7 text-emerald-600" /></div>
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">Étape 2 — CEE + TVA 5,5%</h3>
              <p className="text-green-700">Votre installateur RGE active les CEE (2 000 à 4 000€) et applique la TVA à 5,5%. Économie TVA : ~3 400€ sur 25 000€.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-lime-50 rounded-xl flex items-center justify-center mb-6"><IconPigMoney className="h-7 w-7 text-lime-600" /></div>
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">Étape 3 — Éco-PTZ</h3>
              <p className="text-green-700">Financez le reste à <strong>taux zéro</strong> : jusqu&apos;à 50 000€ sur 20 ans. Sans conditions de revenus.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg border-y border-green-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3 prose prose-lg prose-green">
            <h2 className="text-3xl font-extrabold text-primary not-prose mb-8 font-heading">Exemple : financer une géothermie à 25 000€</h2>
            <p>Cas d&apos;un ménage aux revenus modestes (profil Jaune) installant une PAC géothermique verticale en remplacement du fioul.</p>
            <ul className="not-prose grid gap-4 my-8">
              <li className="flex items-center gap-4 p-4 bg-white rounded-lg border border-green-200"><span className="font-bold text-green-700 min-w-[200px]">MaPrimeRénov&apos; Jaune</span><span className="text-green-800"><strong>– 9 000€</strong></span></li>
              <li className="flex items-center gap-4 p-4 bg-white rounded-lg border border-green-200"><span className="font-bold text-green-700 min-w-[200px]">CEE (EDF/TotalEnergies)</span><span className="text-green-800"><strong>– 3 000€</strong></span></li>
              <li className="flex items-center gap-4 p-4 bg-white rounded-lg border border-green-200"><span className="font-bold text-green-700 min-w-[200px]">Économie TVA 5,5%</span><span className="text-green-800"><strong>– 3 400€</strong></span></li>
              <li className="flex items-center gap-4 p-4 bg-emerald-50 rounded-lg border-2 border-emerald-400"><span className="font-bold text-emerald-800 min-w-[200px]">✅ Reste à charge</span><span className="text-emerald-900 font-mono text-xl"><strong>9 600€</strong></span></li>
            </ul>
            <p>Ce reste de 9 600€ se finance par un <strong>éco-PTZ à taux zéro</strong> sur 20 ans — soit 40€/mois, largement compensé par les 100-150€/mois d&apos;économies de chauffage.</p>
          </div>
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-green-50 border border-green-200 p-6 rounded-2xl">
              <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2 font-heading"><IconCalculator className="h-5 w-5" /> Simulez vos aides</h3>
              <p className="text-sm text-green-800 mb-4">Estimez votre reste à charge personnalisé.</p>
              <Link href="/devis" className="block w-full bg-accent hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors">Lancer la simulation</Link>
            </div>
            <div className="bg-white border border-green-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-green-100 bg-green-50"><h3 className="font-bold text-primary flex items-center gap-2 font-heading"><IconArrowRight className="h-5 w-5 text-secondary" /> Guides Aides</h3></div>
              <div className="divide-y divide-green-100">{getAllGuides().slice(0, 4).map((guide) => (<Link key={guide.slug} href={`/guides/${guide.slug}`} className="flex gap-4 p-4 hover:bg-green-50 transition-colors group"><div className="flex-1"><h4 className="text-sm font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2 mb-1">{guide.title}</h4></div></Link>))}</div>
              <div className="p-4 bg-green-50 text-center"><Link href="/guides" className="text-sm font-medium text-secondary">Voir tous les guides →</Link></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-950 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl"><h2 className="text-3xl font-bold mb-4 font-heading">Aides géothermie dans votre ville</h2><p className="text-green-300">Les aides varient selon votre commune. Sélectionnez votre ville pour une simulation personnalisée.</p></div>
            <Link href="/annuaire" className="hidden md:inline-flex items-center text-secondary hover:text-green-300 font-medium mt-4 md:mt-0">Toutes les villes <IconArrowRight className="ml-2 h-4 w-4" /></Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {["paris-75001|Paris (75)","lyon-69001|Lyon (69)","marseille-13001|Marseille (13)","bordeaux-33000|Bordeaux (33)","toulouse-31000|Toulouse (31)","nantes-44000|Nantes (44)","lille-59000|Lille (59)","strasbourg-67000|Strasbourg (67)","nice-06000|Nice (06)","montpellier-34000|Montpellier (34)","rennes-35000|Rennes (35)","grenoble-38000|Grenoble (38)"].map(c => { const [slug, name] = c.split("|"); return <Link key={slug} href={`/geothermie/${slug}`} className="dept-card">{name}</Link>; })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12 font-heading">Questions sur les Aides Géothermie</h2>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Quel est le montant maximum des aides pour la géothermie ?","acceptedAnswer":{"@type":"Answer","text":"Jusqu'à 15 000€ en cumulant MaPrimeRénov', CEE et TVA 5,5%. L'éco-PTZ finance le reste à taux zéro."}},{"@type":"Question","name":"Peut-on cumuler MaPrimeRénov' et les CEE ?","acceptedAnswer":{"@type":"Answer","text":"Oui, ces deux aides sont cumulables. Ajoutez la TVA à 5,5% et l'éco-PTZ pour un financement quasi-total."}},{"@type":"Question","name":"Faut-il demander les aides avant les travaux ?","acceptedAnswer":{"@type":"Answer","text":"Oui, la demande MaPrimeRénov' doit être faite AVANT la signature du devis. Délai : 4 à 6 semaines."}}]}) }} />
          <div className="space-y-4">
            {[
              { q: "Quel est le montant maximum des aides pour la géothermie ?", a: "En cumulant toutes les aides 2026, vous obtenez jusqu'à 15 000€ : MaPrimeRénov' (5 000 à 11 000€ selon revenus), CEE (2 000 à 4 000€), TVA à 5,5% (~3 400€ d'économie). L'éco-PTZ finance le reste à taux zéro." },
              { q: "Peut-on cumuler MaPrimeRénov' et les CEE ?", a: "Oui, MaPrimeRénov' et les CEE sont parfaitement cumulables. C'est la combinaison la plus avantageuse. Ajoutez la TVA réduite et l'éco-PTZ pour un montage financier quasi-complet." },
              { q: "Faut-il demander les aides avant les travaux ?", a: "Oui. La demande MaPrimeRénov' doit être déposée AVANT la signature du devis. Si vous signez avant l'accord, vous perdez l'aide. Délai : 4-6 semaines sur maprimerenov.gouv.fr." },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-lg border border-green-200 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-primary group-hover:bg-green-50 transition-colors text-lg">{faq.q}<span className="text-green-400 group-open:rotate-180 transition-transform">▼</span></summary>
                <div className="p-5 pt-0 text-green-700 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center"><Link href="/faq" className="inline-flex items-center text-secondary font-medium hover:underline">Toutes les questions sur les aides <IconArrowRight className="ml-2 h-4 w-4" /></Link></div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-800 to-emerald-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">Calculez votre reste à charge</h2>
          <p className="text-xl text-green-100 mb-10">Simulation gratuite de vos aides MaPrimeRénov&apos;, CEE et éco-PTZ.</p>
          <Link href="/devis" className="inline-flex items-center bg-white text-green-900 hover:bg-green-50 text-xl px-12 py-4 rounded-full shadow-2xl transition-transform hover:scale-105 font-bold">Simuler mes aides <IconArrowRight className="ml-2 h-6 w-6" /></Link>
          <p className="mt-6 text-sm text-green-200 opacity-80">Gratuit • Sans engagement • Résultat immédiat</p>
        </div>
      </section>
    </div>
  );
}
