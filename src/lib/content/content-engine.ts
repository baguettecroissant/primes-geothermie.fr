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
        return `En tant que métropole, ${city.name} présente des tarifs d'installation géothermique parmi les plus élevés du ${dept}. Les contraintes logistiques (accès chantier, autorisations de voirie, voisinage) génèrent un surcoût de 15 à 25% par rapport à la moyenne nationale. Cependant, la densité d'installateurs certifiés en ${region} permet de négocier et d'obtenir des devis compétitifs. Le captage vertical est quasi-systématique en raison de la taille réduite des terrains. Les aides financières (MaPrimeRénov' + CEE) compensent efficacement ce surcoût : le reste à charge après aides reste dans la moyenne nationale.`;
    }
    if (pop > 50000) {
        return `À ${city.name}, les tarifs d'installation géothermique sont légèrement supérieurs à la moyenne du ${dept}, avec un surcoût de 5 à 15% lié aux contraintes urbaines. En ${region}, zone ${climateLabel.toLowerCase()}, le réseau d'installateurs RGE est suffisamment dense pour maintenir une concurrence saine. Le choix entre captage vertical et horizontal dépend de votre terrain — les deux solutions sont régulièrement mises en œuvre. Profitez de la présence de plusieurs professionnels pour comparer les offres et les technologies proposées (PAC sol-eau, eau-eau, avec ou sans géocooling).`;
    }
    if (pop > 10000) {
        return `${city.name} bénéficie de tarifs proches de la moyenne nationale pour l'installation géothermique. En ${region}, ${climateLabel.toLowerCase()}, les installateurs du ${dept} proposent des prix compétitifs grâce à des conditions de chantier favorables (accès terrain, espace disponible). Le rapport qualité-prix est optimal dans les villes de cette taille : vous bénéficiez de l'expertise des professionnels tout en évitant les surcoûts métropolitains.`;
    }
    if (pop > 2000) {
        return `Dans les communes comme ${city.name}, les prix sont souvent plus avantageux que dans les grandes villes du ${dept}. Les installateurs locaux en ${region} proposent des tarifs 5 à 15% inférieurs à la moyenne nationale, avec l'avantage d'un suivi de proximité. Le captage horizontal, possible sur les terrains spacieux de cette commune, permet de réduire encore le budget de 3 000 à 5 000€ par rapport au forage vertical.`;
    }
    return `En commune rurale comme ${city.name}, vous bénéficiez des tarifs les plus compétitifs du ${dept} pour la géothermie. Les foreurs locaux en ${region} proposent des prix attractifs, et la disponibilité foncière permet d'opter pour le captage horizontal — la solution la plus économique. Le principal poste de coût à anticiper est le déplacement du foreur si aucun professionnel n'est basé à proximité immédiate (surcoût de 500 à 1 000€).`;
}

function buildFaq(city: City, pop: number, saisonTravaux: string): FaqItem[] {
    const dept = city.department_name;
    const region = city.region;

    return [
        {
            question: `Combien coûte une installation géothermique à ${city.name} ?`,
            answer: pop > 200000
                ? `À ${city.name}, le prix moyen d'une installation géothermique complète (forage + PAC + raccordements) se situe entre 18 000€ et 35 000€. Les tarifs sont 15 à 25% supérieurs à la moyenne nationale en raison des contraintes logistiques métropolitaines. Après déduction des aides (MaPrimeRénov' + CEE), le reste à charge descend entre 8 000€ et 20 000€.`
                : pop > 50000
                    ? `À ${city.name}, le prix moyen d'une installation géothermique complète se situe entre 15 000€ et 30 000€. Les tarifs sont proches de la moyenne nationale. Après déduction des aides financières (MaPrimeRénov' jusqu'à 11 000€ + CEE jusqu'à 4 000€), le reste à charge est de 6 000€ à 18 000€.`
                    : pop > 10000
                        ? `À ${city.name}, le prix moyen d'une installation géothermique se situe entre 14 000€ et 28 000€, conforme à la moyenne nationale. Les installateurs locaux et les réseaux de marques proposent des tarifs compétitifs. Avec les aides, le reste à charge peut descendre sous 10 000€.`
                        : `À ${city.name}, le prix moyen d'une installation géothermique se situe entre 13 000€ et 25 000€. Les tarifs sont légèrement inférieurs à la moyenne nationale. Le captage horizontal, possible si vous disposez de terrain, réduit le coût de 3 000 à 5 000€ par rapport au forage vertical.`
        },
        {
            question: `Quel type de captage géothermique choisir à ${city.name} ?`,
            answer: pop > 50000
                ? `À ${city.name}, le captage vertical par sondes géothermiques (80-150 m de profondeur) est le plus courant car il ne nécessite que peu d'espace. Si votre terrain le permet et que le sous-sol est favorable dans le ${dept}, le captage horizontal (nappe de collecteurs à 1,2 m de profondeur) est 30 à 40% moins cher. L'aquathermie (sur nappe phréatique) est aussi envisageable selon la ressource en eau locale.`
                : `À ${city.name}, le choix entre captage vertical et horizontal dépend de votre terrain. Le captage horizontal nécessite une surface libre de 1,5 à 2 fois la surface habitable. Le captage vertical (sondes de 80-150 m) s'adapte à tous les terrains mais coûte 3 000 à 5 000€ de plus. Un foreur qualifié dans le ${dept} vous conseillera après étude du sol.`
        },
        {
            question: `La géothermie est-elle rentable à ${city.name} ?`,
            answer: `Oui, la géothermie est le système de chauffage le plus rentable à long terme à ${city.name}. ${saisonTravaux} En remplacement du fioul, l'économie annuelle atteint 1 500 à 2 000€/an. En remplacement du gaz, 800 à 1 200€/an. L'amortissement est de 8 à 12 ans, et la durée de vie du système dépasse 25 ans (50 ans pour les sondes).`
        },
        {
            question: `Quelles aides pour la géothermie à ${city.name} en 2026 ?`,
            answer: `Les aides financières pour la géothermie à ${city.name} (${dept}) sont les plus généreuses du secteur de la rénovation énergétique : MaPrimeRénov' (jusqu'à 11 000€ pour les ménages très modestes), Certificats d'Économies d'Énergie – CEE (jusqu'à 4 000€), TVA réduite à 5,5%, éco-PTZ (jusqu'à 50 000€ à taux zéro), et éventuellement des aides locales du département ${dept} ou de la région ${region}. Au total, jusqu'à 15 000€ d'aides cumulables.`
        },
        {
            question: `Faut-il une autorisation pour un forage géothermique à ${city.name} ?`,
            answer: `Oui, tout forage géothermique à ${city.name} nécessite une déclaration préalable auprès de la DREAL (formulaire en ligne sur le site du BRGM). Pour les forages de moins de 10 m, une simple déclaration suffit. Pour les forages de plus de 10 m (sondes verticales), un dossier plus complet est requis avec un délai de traitement de 1 à 2 mois dans le ${dept}. Votre installateur RGE se charge généralement des formalités.`
        },
        {
            question: `Combien de temps durent les travaux de géothermie à ${city.name} ?`,
            answer: pop > 50000
                ? `À ${city.name}, comptez 4 à 7 jours ouvrés pour l'ensemble du chantier (forage + installation PAC + raccordements). Le forage vertical dure 1 à 2 jours, la pose de la PAC et les raccordements hydrauliques/électriques 2 à 3 jours. En zone urbaine, les autorisations administratives peuvent ajouter 1 à 2 mois de délai. Planifiez votre projet 3 à 4 mois avant la saison de chauffe.`
                : `À ${city.name}, comptez 3 à 5 jours ouvrés pour l'installation complète. Le forage vertical dure 1 à 2 jours, le captage horizontal 2 à 3 jours. La mise en service est immédiate après le raccordement. Prévoyez 2 à 3 mois entre le premier devis et le début des travaux.`
        },
        {
            question: `Quelle est la durée de vie d'une installation géothermique à ${city.name} ?`,
            answer: `Une installation géothermique à ${city.name} a une durée de vie exceptionnelle. La pompe à chaleur (PAC) fonctionne 25 à 30 ans avec un entretien annuel (150 à 300€/an). Les sondes géothermiques enterrées dans le sous-sol du ${dept} durent 50 ans et plus — elles survivent à la PAC et peuvent être réutilisées lors d'un remplacement. C'est un investissement patrimonial qui se transmet avec la maison.`
        },
        {
            question: `La géothermie fonctionne-t-elle aussi pour le rafraîchissement à ${city.name} ?`,
            answer: `Oui, la géothermie offre le "géocooling" : en été, la température du sous-sol à ${city.name} (12-14°C) est naturellement inférieure à la température extérieure. La PAC géothermique réversible peut rafraîchir votre logement à moindre coût — bien moins cher qu'une climatisation classique. En ${region}, cette double fonction chauffage/rafraîchissement accélère le retour sur investissement de votre installation.`
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
