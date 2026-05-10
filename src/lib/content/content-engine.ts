// Content Engine — Primes Géothermie : aides, subventions et primes par ville
// Axe éditorial : AIDES FINANCIÈRES, MaPrimeRénov', CEE, éco-PTZ
// 12 variantes d'intro × 5 tiers × 6 climats × 13 régions = milliers de combinaisons uniques

import { City } from "@/types";
import { getPopTier, populationTiers } from "./population-tiers";
import { regionsContent } from "./regions";
import { getClimateZone } from "./climate-zones";

export interface CityPageContent {
    introTitle: string;
    introParagraph: string;
    regionSpecificite: string;
    regionTendance: string;
    regionMarche: string;
    climateAdvice: string;
    captageRecommande: string;
    saisonTravaux: string;
    conseilSaisonnier: string;
    solType: string;
    casUsage: string;
    conseilPratique: string;
    logistique: string;
    budgetContexte: string;
    faqItems: FaqItem[];
    tierLabel: string;
    checklistItems: string[];
    marquesRecommandees: string[];
    pricingContext: string;
    displayPopulation: number;
}

export interface FaqItem {
    question: string;
    answer: string;
}

// Deterministic hash for selecting intro variants
function hashSlug(slug: string): number {
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
        const char = slug.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash);
}

// 12 intro variants — AXE AIDES & PRIMES — contenu 100% unique vs les autres sites
const introVariants = [
    (city: string, dept: string, region: string) => `Les aides pour la géothermie à ${city} atteignent un niveau record en 2026. MaPrimeRénov' finance jusqu'à 11 000€ pour les ménages très modestes, les CEE ajoutent 2 500€ à 4 000€, et l'éco-PTZ permet d'emprunter jusqu'à 50 000€ à taux zéro. Dans le ${dept} en ${region}, ces dispositifs cumulables réduisent le reste à charge à moins de 40% du coût total de l'installation.`,
    (city: string, dept: string, region: string) => `En 2026 à ${city}, un ménage aux revenus modestes peut financer jusqu'à 70% de son installation géothermique grâce aux aides publiques. Le barème MaPrimeRénov' appliqué dans le ${dept} classe la PAC géothermique parmi les équipements les mieux subventionnés — devant les PAC air-eau et les chaudières biomasse. Les installateurs RGE de ${region} montent le dossier d'aides gratuitement.`,
    (city: string, dept: string, region: string) => `Comment maximiser ses aides pour la géothermie à ${city} ? En cumulant MaPrimeRénov' (5 000€ à 11 000€ selon revenus), les Certificats d'Économies d'Énergie – CEE (2 500€ à 4 000€), la TVA réduite à 5,5% et l'éco-PTZ, les propriétaires du ${dept} en ${region} peuvent atteindre 15 000€ d'aides cumulées sur un même projet géothermique.`,
    (city: string, dept: string, region: string) => `À ${city}, la géothermie est le système de chauffage le plus aidé par l'État en 2026. Le montant de MaPrimeRénov' pour une PAC géothermique est supérieur de 50% à celui d'une PAC air-eau. Le département ${dept} en ${region} offre parfois des compléments locaux qui s'ajoutent aux aides nationales — renseignez-vous auprès de l'ADIL ou de votre espace France Rénov' local.`,
    (city: string, dept: string, region: string) => `Le financement d'une installation géothermique à ${city} n'a jamais été aussi simple : MaPrimeRénov' est versée directement à l'installateur (avance du reste à charge), l'éco-PTZ finance le solde sans intérêts sur 20 ans, et les CEE sont déduits de la facture. Dans le ${dept}, les artisans RGE qualifiés en ${region} gèrent 100% des démarches administratives pour vous.`,
    (city: string, dept: string, region: string) => `Saviez-vous que la géothermie est l'investissement énergétique le plus rentable à ${city} après aides ? Avec un reste à charge de 8 000€ à 15 000€ (après MaPrimeRénov' + CEE) et des économies annuelles de 1 200€ à 1 800€, l'amortissement est de 5 à 8 ans seulement. Les installateurs certifiés du ${dept} en ${region} vous présentent la simulation d'aides avant tout engagement.`,
    (city: string, dept: string, region: string) => `Les barèmes MaPrimeRénov' 2026 pour la géothermie à ${city} : ménages très modestes = 11 000€, modestes = 9 000€, intermédiaires = 5 000€, supérieurs = 3 000€. À ces montants s'ajoutent les CEE (jusqu'à 4 000€), la TVA à 5,5% (économie de 2 000€ à 3 500€ vs 20%) et l'éco-PTZ. Les installateurs RGE du ${dept} intègrent automatiquement ces aides dans leurs devis.`,
    (city: string, dept: string, region: string) => `L'éco-PTZ géothermie à ${city} : empruntez jusqu'à 50 000€ à taux zéro sur 20 ans pour financer votre installation. Ce prêt à taux zéro est cumulable avec MaPrimeRénov' et les CEE, sans condition de revenus. Dans le ${dept} en ${region}, la quasi-totalité des banques partenaires proposent ce dispositif. Votre installateur RGE vous fournit l'attestation nécessaire pour la demande.`,
    (city: string, dept: string, region: string) => `La TVA à 5,5% sur les installations géothermiques à ${city} représente une économie immédiate de 2 000€ à 3 500€ par rapport au taux normal de 20%. Cette réduction s'applique automatiquement sur la facture de votre installateur RGE dans le ${dept}. Cumulée avec MaPrimeRénov' et les CEE, elle ramène le reste à charge réel à un niveau jamais vu en ${region}.`,
    (city: string, dept: string, region: string) => `Le parcours d'aides pour la géothermie à ${city} en 5 étapes : 1) Créer votre dossier sur maprimerenov.gouv.fr, 2) Obtenir 3 devis d'installateurs RGE du ${dept}, 3) Valider le montant MaPrimeRénov' et CEE, 4) Signer le devis et lancer les travaux, 5) Recevoir le versement des primes après la mise en service. En ${region}, le délai moyen de traitement est de 4 à 6 semaines.`,
    (city: string, dept: string, region: string) => `Les habitants de ${city} bénéficient en 2026 du dispositif d'aides le plus généreux jamais proposé pour la géothermie. En plus des aides nationales (MaPrimeRénov' + CEE + éco-PTZ), le département ${dept} et la région ${region} peuvent proposer des compléments locaux de 500€ à 3 000€ supplémentaires. Consultez l'Espace France Rénov' le plus proche pour un bilan personnalisé et gratuit.`,
    (city: string, dept: string, region: string) => `Pourquoi choisir la géothermie plutôt qu'une PAC air-eau à ${city} quand on regarde les aides ? MaPrimeRénov' accorde 2 000€ à 5 000€ de plus pour une PAC géothermique. Les CEE sont également plus élevés. Résultat : malgré un coût d'installation supérieur, le reste à charge après aides est quasi-identique dans le ${dept}. Et les économies annuelles sont 30 à 50% plus importantes en ${region}.`,
];

function getDisplayPopulation(city: City): number {
    let pop = city.population || 0;
    if (pop === 0) {
        if (city.name.includes("Paris")) pop = 2100000;
        else if (city.name.includes("Marseille")) pop = 870000;
        else if (city.name.includes("Lyon")) pop = 522000;
    }
    return pop;
}

export function generateCityContent(city: City): CityPageContent {
    const pop = getDisplayPopulation(city);
    const tier = getPopTier(pop);
    const tierData = populationTiers[tier];
    const regionData = regionsContent[city.region];
    const climateZone = getClimateZone(city.coordinates.lat, city.coordinates.lng);

    const introTitle = `Aides et Primes Géothermie à ${city.name}`;

    // Deterministic intro variant selection — 12 variants × dept × region = unique
    const variantIndex = hashSlug(city.slug) % introVariants.length;
    const introVariant = introVariants[variantIndex](city.name, city.department_name, city.region);
    const introParagraph = `${introVariant}\n\n${tierData.intro}`;

    const regionSpecificite = regionData?.specificite_geo || '';
    const regionTendance = regionData?.tendance || '';
    const regionMarche = regionData?.marche || '';

    const climateAdvice = climateZone.conseil_geothermie;
    const captageRecommande = climateZone.captage_recommande;
    const saisonTravaux = climateZone.saison_travaux;
    const conseilSaisonnier = climateZone.conseil_saisonnier;
    const solType = climateZone.sol_type;

    const casUsage = tierData.cas_usage;
    const conseilPratique = tierData.conseil_pratique;
    const logistique = tierData.logistique;
    const budgetContexte = tierData.budget_contexte;

    const faqItems = buildFaq(city, pop, climateZone.saison_travaux);

    // Pricing context — unique paragraph combining dept + tier + climate
    const pricingContext = buildPricingContext(city, pop, climateZone.label);

    return {
        introTitle,
        introParagraph,
        regionSpecificite,
        regionTendance,
        regionMarche,
        climateAdvice,
        captageRecommande,
        saisonTravaux,
        conseilSaisonnier,
        solType,
        casUsage,
        conseilPratique,
        logistique,
        budgetContexte,
        faqItems,
        tierLabel: tierData.label,
        checklistItems: tierData.checklist_items,
        marquesRecommandees: tierData.marques_recommandees,
        pricingContext,
        displayPopulation: pop,
    };
}

function buildPricingContext(city: City, pop: number, climateLabel: string): string {
    const dept = city.department_name;
    const region = city.region;
    
    if (pop > 200000) {
        return `À ${city.name}, le reste à charge après aides pour une installation géothermique s'établit entre 10 000 et 22 000€ — malgré des coûts d'installation parmi les plus élevés du ${dept} (25 000-38 000€). Les aides nationales (MaPrimeRénov' 3 000-11 000€ + CEE 2 500-5 000€ + TVA 5,5%) compensent une large part du surcoût métropolitain. L'éco-PTZ permet de lisser ce reste à charge en mensualités de 80 à 150€ sur 20 ans — souvent inférieur à l'ancienne facture de gaz.`;
    }
    if (pop > 50000) {
        return `À ${city.name}, les aides couvrent 35 à 55% du coût total d'installation géothermique. En ${region}, zone ${climateLabel.toLowerCase()}, le reste à charge s'établit entre 8 000 et 18 000€ pour un projet de 20 000-30 000€. Le cumul MaPrimeRénov' + CEE + TVA 5,5% atteint 9 000 à 15 000€ selon votre profil de revenus. L'éco-PTZ sur 20 ans génère une mensualité de 50 à 100€ — bien inférieure aux économies de chauffage réalisées.`;
    }
    if (pop > 10000) {
        return `Le reste à charge après aides à ${city.name} est de 6 000 à 15 000€ pour une installation de 18 000-28 000€. Le rapport aides/investissement est optimal dans le ${dept} en ${region} : coûts d'installation proches de la moyenne nationale + aides identiques partout en France. L'amortissement après aides est de 4 à 8 ans. L'éco-PTZ finance la totalité du reste à charge sans intérêts.`;
    }
    if (pop > 2000) {
        return `Dans les communes comme ${city.name}, le reste à charge après aides est parmi les plus bas du ${dept} : 4 000 à 12 000€ pour un budget de 15 000-22 000€. Les profils MaPrimeRénov' Bleu et Jaune (revenus modestes) bénéficient du meilleur taux de subvention — jusqu'à 60% du coût total. En ${region}, les installateurs RGE intègrent les aides dans leurs devis pour une transparence totale.`;
    }
    return `En commune rurale comme ${city.name}, le cumul des aides est le plus avantageux du ${dept}. Le profil de revenus souvent modeste (Bleu/Jaune) ouvre droit aux montants MaPrimeRénov' les plus élevés (9 000-11 000€). Sur un budget de 13 000-20 000€, le reste à charge peut descendre sous 5 000€. En ${region}, les CEE "Coup de Pouce Chauffage" ajoutent 4 000-5 000€ en remplacement du fioul — le scénario le plus fréquent en zone rurale.`;
}

function buildFaq(city: City, pop: number, saisonTravaux: string): FaqItem[] {
    const dept = city.department_name;
    const region = city.region;

    return [
        {
            question: `Quelles aides pour la géothermie à ${city.name} en 2026 ?`,
            answer: pop > 200000
                ? `À ${city.name}, les aides pour la géothermie en 2026 : MaPrimeRénov' (3 000 à 11 000€ selon revenus), CEE Coup de Pouce (2 500 à 5 000€), TVA à 5,5% (économie de 3 000-5 000€), éco-PTZ (jusqu'à 50 000€ à 0%), et aides de la métropole (500 à 2 000€). Total cumulable : jusqu'à 20 000€. Les Espaces France Rénov' du ${dept} proposent une simulation personnalisée gratuite.`
                : pop > 50000
                    ? `À ${city.name}, le cumul des aides 2026 : MaPrimeRénov' (3 000-11 000€), CEE (2 500-4 000€), TVA 5,5%, éco-PTZ (jusqu'à 50 000€). Total : jusqu'à 15 000€ d'aides. Le reste à charge est de 6 000 à 18 000€. L'espace France Rénov' du ${dept} accompagne gratuitement le montage du dossier.`
                    : pop > 10000
                        ? `À ${city.name}, les aides couvrent 35-55% du coût : MaPrimeRénov' (5 000-11 000€ pour les modestes), CEE (2 500-4 000€), TVA 5,5% et éco-PTZ. Le reste à charge descend entre 6 000 et 14 000€. Consultez l'ADIL du ${dept} pour les éventuelles aides locales complémentaires.`
                        : `À ${city.name}, les aides sont parmi les plus avantageuses : MaPrimeRénov' (9 000-11 000€ pour les ménages modestes/très modestes), CEE Coup de Pouce fioul (jusqu'à 5 000€), TVA 5,5% et éco-PTZ. Le reste à charge peut descendre sous 5 000€ dans le ${dept}.`
        },
        {
            question: `Quel est le reste à charge après aides à ${city.name} ?`,
            answer: pop > 50000
                ? `Le reste à charge après toutes les aides à ${city.name} dépend de votre profil MaPrimeRénov' : Profil Bleu (très modeste) = 5 000-12 000€, Profil Jaune (modeste) = 7 000-15 000€, Profil Violet (intermédiaire) = 12 000-20 000€, Profil Rose (supérieur) = 16 000-25 000€. Ces montants sont finançables en totalité par l'éco-PTZ à taux zéro sur 15-20 ans.`
                : `Le reste à charge à ${city.name} est parmi les plus bas du ${dept} grâce aux coûts d'installation compétitifs : Profil Bleu = 3 000-8 000€, Profil Jaune = 5 000-11 000€, Profil Violet = 8 000-15 000€. L'éco-PTZ transforme ce reste en mensualités de 30 à 80€/mois — bien inférieures aux économies de chauffage réalisées.`
        },
        {
            question: `Comment fonctionne MaPrimeRénov' pour la géothermie à ${city.name} ?`,
            answer: `MaPrimeRénov' à ${city.name} finance votre PAC géothermique selon vos revenus : Bleu = 11 000€, Jaune = 9 000€, Violet = 5 000€, Rose = 3 000€. ${saisonTravaux} Condition obligatoire : faire appel à un installateur RGE certifié QualiPAC dans le ${dept}. Créez votre dossier sur maprimerenov.gouv.fr AVANT de signer le devis. Le versement intervient 4-8 semaines après la fin des travaux.`
        },
        {
            question: `Peut-on cumuler MaPrimeRénov' et l'éco-PTZ à ${city.name} ?`,
            answer: `Oui, le cumul MaPrimeRénov' + éco-PTZ est non seulement possible mais recommandé à ${city.name}. L'éco-PTZ (jusqu'à 50 000€ à taux zéro sur 20 ans) finance le reste à charge après déduction de MaPrimeRénov' et des CEE. Aucune condition de revenus pour l'éco-PTZ — seule condition : logement de plus de 2 ans. Demandez l'éco-PTZ à votre banque du ${dept} avec l'attestation RGE de l'installateur.`
        },
        {
            question: `Quels sont les CEE pour la géothermie à ${city.name} ?`,
            answer: `Les Certificats d'Économies d'Énergie (CEE) à ${city.name} (${dept}) s'élèvent à 2 500-5 000€ pour une PAC géothermique. Le montant varie selon l'obligé (EDF, Engie, TotalEnergies, Leclerc Energies). Le dispositif "Coup de Pouce Chauffage" majore les CEE jusqu'à 5 000€ en remplacement d'une chaudière fioul. Les CEE sont déduits directement de la facture par l'installateur RGE en ${region}.`
        },
        {
            question: `La géothermie est-elle finançable sans apport à ${city.name} ?`,
            answer: pop > 50000
                ? `Oui, la géothermie est finançable à 100% sans apport à ${city.name}. Le montage type : MaPrimeRénov' couvre 15-40% du coût, les CEE déduisent 10-15% de la facture, et l'éco-PTZ finance le solde à taux zéro sur 20 ans. Résultat : 0€ d'apport personnel. La mensualité éco-PTZ (50-120€/mois) est inférieure aux économies de chauffage (100-180€/mois). Vous gagnez de l'argent dès le premier mois.`
                : `Oui, la géothermie est accessible sans apport à ${city.name}. Avec le cumul MaPrimeRénov' + CEE + éco-PTZ, vous ne versez aucun apport initial. L'installateur RGE du ${dept} avance le montant des CEE et déduit la TVA 5,5%. Votre mensualité éco-PTZ est souvent inférieure à votre ancienne facture de chauffage.`
        },
        {
            question: `Quelles aides locales pour la géothermie dans le ${dept} ?`,
            answer: `En plus des aides nationales, le département ${dept} et la région ${region} peuvent proposer des compléments : subventions départementales (500-2 000€), aides communales ou intercommunales (500-1 500€), et programmes régionaux spécifiques. Consultez l'ADIL du ${dept} ou l'Espace France Rénov' le plus proche pour un inventaire complet des aides locales disponibles à ${city.name}. Ces aides sont cumulables avec MaPrimeRénov' et les CEE.`
        },
        {
            question: `En combien de temps les aides sont-elles versées à ${city.name} ?`,
            answer: `À ${city.name}, les délais de versement 2026 : MaPrimeRénov' = 4 à 8 semaines après réception de la facture de fin de travaux, CEE = déduits immédiatement de la facture (ou versés sous 2-4 semaines selon l'obligé), TVA 5,5% = appliquée directement sur la facture, éco-PTZ = déblocage bancaire sous 15-30 jours après signature. Les installateurs RGE du ${dept} gèrent les démarches MaPrimeRénov' comme mandataires.`
        },
    ];
}


// Helper: find nearby cities from the same department
export function findNearbyCities(allCities: City[], currentCity: City, limit: number = 8): City[] {
    const sameDept = allCities.filter(c => c.department_code === currentCity.department_code && c.slug !== currentCity.slug);

    if (currentCity.coordinates.lat === 0 && currentCity.coordinates.lng === 0) {
        return sameDept.slice(0, limit);
    }

    return sameDept
        .map(c => ({
            city: c,
            distance: Math.sqrt(
                Math.pow(c.coordinates.lat - currentCity.coordinates.lat, 2) +
                Math.pow(c.coordinates.lng - currentCity.coordinates.lng, 2)
            )
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, limit)
        .map(c => c.city);
}
