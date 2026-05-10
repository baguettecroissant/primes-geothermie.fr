import Link from "next/link";
import { IconLeaf } from "@tabler/icons-react";

const POPULAR_GUIDES = [
    { slug: "prix-geothermie-2026", title: "Prix Géothermie 2026" },
    { slug: "captage-vertical-vs-horizontal", title: "Vertical vs Horizontal" },
    { slug: "forage-geothermique", title: "Forage Géothermique" },
    { slug: "maprimerenov-geothermie-2026", title: "MaPrimeRénov' 2026" },
    { slug: "cop-geothermique", title: "COP Géothermique" },
    { slug: "entretien-pac-geothermique", title: "Entretien PAC" },
];

const TOP_CITIES = [
    { slug: "paris-75001", name: "Paris" },
    { slug: "lyon-69001", name: "Lyon" },
    { slug: "marseille-13001", name: "Marseille" },
    { slug: "toulouse-31000", name: "Toulouse" },
    { slug: "bordeaux-33000", name: "Bordeaux" },
    { slug: "nantes-44000", name: "Nantes" },
    { slug: "strasbourg-67000", name: "Strasbourg" },
    { slug: "lille-59000", name: "Lille" },
    { slug: "rennes-35000", name: "Rennes" },
    { slug: "montpellier-34000", name: "Montpellier" },
    { slug: "grenoble-38000", name: "Grenoble" },
    { slug: "nice-06000", name: "Nice" },
];

const PAC_BRANDS = [
    { slug: "viessmann", name: "Viessmann" },
    { slug: "nibe", name: "NIBE" },
    { slug: "vaillant", name: "Vaillant" },
    { slug: "atlantic", name: "Atlantic" },
    { slug: "daikin", name: "Daikin" },
    { slug: "stiebel-eltron", name: "Stiebel Eltron" },
];

export function Footer() {
    return (
        <footer className="bg-green-950 text-green-50 py-12 border-t-4 border-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 font-heading">
                            <IconLeaf className="h-6 w-6 text-accent" />
                            Primes<span className="text-secondary">Géothermie</span>
                        </h3>
                        <p className="text-green-200 text-sm leading-relaxed max-w-sm">
                            Guide complet des aides financières pour la géothermie en France. MaPrimeRénov&apos;, CEE, éco-PTZ et aides locales dans plus de 35 000 communes.
                        </p>
                        <Link
                            href="/devis"
                            className="inline-block mt-6 bg-accent hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-sm transition-colors"
                        >
                            Simuler mes aides →
                        </Link>
                    </div>

                    <div>
                        <h4 className="text-base font-semibold text-white mb-4 font-heading">Navigation</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-green-200 hover:text-accent transition-colors text-sm">Accueil</Link></li>
                            <li><Link href="/guides" className="text-green-200 hover:text-accent transition-colors text-sm">Guides &amp; Conseils</Link></li>
                            <li><Link href="/marques" className="text-green-200 hover:text-accent transition-colors text-sm">Marques PAC</Link></li>
                            <li><Link href="/annuaire" className="text-green-200 hover:text-accent transition-colors text-sm">Annuaire Installateurs</Link></li>
                            <li><Link href="/faq" className="text-green-200 hover:text-accent transition-colors text-sm">FAQ</Link></li>
                            <li><Link href="/devis" className="text-green-200 hover:text-accent transition-colors text-sm">Simuler mes Aides</Link></li>
                            <li><Link href="/mentions-legales" className="text-green-200 hover:text-accent transition-colors text-sm">Mentions Légales</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-base font-semibold text-white mb-4 font-heading">Guides Populaires</h4>
                        <ul className="space-y-2">
                            {POPULAR_GUIDES.map(guide => (
                                <li key={guide.slug}>
                                    <Link href={`/guides/${guide.slug}`} className="text-green-200 hover:text-accent transition-colors text-sm">
                                        {guide.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-base font-semibold text-white mb-4 font-heading">Marques PAC Géothermiques</h4>
                        <ul className="space-y-2">
                            {PAC_BRANDS.map(brand => (
                                <li key={brand.slug}>
                                    <Link href={`/marques/${brand.slug}`} className="text-green-200 hover:text-accent transition-colors text-sm">
                                        {brand.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-green-900 pt-8 mb-8">
                    <h4 className="text-base font-semibold text-white mb-4 font-heading">Aides géothermie par ville</h4>
                    <div className="flex flex-wrap gap-2">
                        {TOP_CITIES.map(city => (
                            <Link
                                key={city.slug}
                                href={`/geothermie/${city.slug}`}
                                className="text-xs bg-green-900 hover:bg-green-800 text-green-200 hover:text-accent px-3 py-1.5 rounded-md border border-green-800 hover:border-accent/50 transition-colors"
                            >
                                {city.name}
                            </Link>
                        ))}
                        <Link
                            href="/annuaire"
                            className="text-xs bg-secondary/20 hover:bg-secondary/30 text-secondary px-3 py-1.5 rounded-md border border-secondary/30 transition-colors font-medium"
                        >
                            Toutes les villes →
                        </Link>
                    </div>
                </div>

                <div className="border-t border-green-900 pt-8 text-center text-green-300 text-xs">
                    <p>© {new Date().getFullYear()} primes-geothermie.fr — Tous droits réservés. Guide indépendant, non affilié aux fabricants.</p>
                </div>
            </div>
        </footer>
    );
}
