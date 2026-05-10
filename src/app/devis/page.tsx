import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import { IconCheck, IconCoin, IconClock, IconCalculator } from "@tabler/icons-react";
import Link from "next/link";
export const metadata = { title: "Simulateur d'Aides Géothermie 2026 | MaPrimeRénov' + CEE + Éco-PTZ", description: "Calculez vos aides géothermie : MaPrimeRénov', CEE, éco-PTZ. Jusqu'à 15 000€ d'aides. Simulation gratuite.", alternates: { canonical: "https://www.primes-geothermie.fr/devis" } };
export default function DevisPage() {
  return (
    <div className="bg-bg min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 font-heading">Simulez vos <span className="text-secondary">Aides Géothermie</span><br/>MaPrimeRénov&apos; 2026</h1>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">Calculez votre reste à charge en 2 minutes. Jusqu&apos;à 15 000€ d&apos;aides cumulables.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 bg-white rounded-2xl shadow-xl border border-green-200 overflow-hidden">
            <div className="p-1 md:p-4"><ViteUnDevisWidget /></div>
            <div className="bg-green-50 p-4 text-center border-t border-green-100 text-sm text-green-600">Simulation gratuite. Aucun engagement.</div>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-green-200">
              <h3 className="font-bold text-primary mb-4 text-lg font-heading">Vos aides en un clic</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><div className="bg-green-100 p-1.5 rounded-full shrink-0 mt-0.5"><IconCheck className="h-5 w-5 text-green-600" /></div><div><span className="font-bold block text-primary">Simulation personnalisée</span><span className="text-sm text-green-700">Selon vos revenus et votre projet.</span></div></li>
                <li className="flex items-start gap-3"><div className="bg-emerald-100 p-1.5 rounded-full shrink-0 mt-0.5"><IconCoin className="h-5 w-5 text-emerald-600" /></div><div><span className="font-bold block text-primary">Cumul des aides</span><span className="text-sm text-green-700">MaPrimeRénov&apos; + CEE + TVA 5,5%.</span></div></li>
                <li className="flex items-start gap-3"><div className="bg-lime-100 p-1.5 rounded-full shrink-0 mt-0.5"><IconClock className="h-5 w-5 text-lime-600" /></div><div><span className="font-bold block text-primary">Résultat immédiat</span><span className="text-sm text-green-700">Reste à charge calculé en 2 min.</span></div></li>
              </ul>
            </div>
            <div className="bg-emerald-900 p-6 rounded-xl text-center text-white">
              <div className="text-4xl font-bold text-green-300 mb-2">15 000€</div>
              <div className="text-green-200">d&apos;aides cumulables</div>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-16 border-t border-green-200">
          <div className="prose prose-green max-w-none">
            <h2 className="text-2xl font-bold text-primary mb-6 font-heading">Comment maximiser vos aides géothermie ?</h2>
            <p>Le cumul MaPrimeRénov&apos; + CEE + TVA 5,5% peut couvrir <strong>60 à 80% du coût</strong> de votre installation. Le reste se finance par éco-PTZ à taux zéro. <Link href="/guides/cumul-aides-geothermie-guide" className="text-secondary hover:underline font-medium">→ Guide complet du cumul des aides</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
