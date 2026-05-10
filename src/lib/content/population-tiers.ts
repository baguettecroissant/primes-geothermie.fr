// Population tiers — 5 niveaux avec contenu adapté "primes et aides géothermie"
// Angle éditorial : financement, aides publiques, reste à charge, ROI après subventions
// XS (<2000), S (2000-10000), M (10000-50000), L (50000-200000), XL (>200000)

export type PopTier = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface PopTierContent {
    tier: PopTier;
    label: string;
    intro: string;
    cas_usage: string;
    conseil_pratique: string;
    logistique: string;
    budget_contexte: string;
    checklist_items: string[];
    marques_recommandees: string[];
}

export function getPopTier(population?: number): PopTier {
    if (population === undefined || population === null || population === 0) return 'S';
    if (population < 2000) return 'XS';
    if (population < 10000) return 'S';
    if (population < 50000) return 'M';
    if (population < 200000) return 'L';
    return 'XL';
}

export const populationTiers: Record<PopTier, PopTierContent> = {
    XS: {
        tier: 'XS',
        label: 'commune rurale',
        intro: `En commune rurale, les ménages sont souvent les premiers bénéficiaires des aides à la géothermie. Pourquoi ? Car ils chauffent majoritairement au fioul — le combustible le plus cher et le plus polluant. Le remplacement d'une chaudière fioul par une PAC géothermique ouvre droit au cumul maximal d'aides : MaPrimeRénov' (jusqu'à 11 000€ pour les revenus très modestes), CEE Coup de Pouce Chauffage (2 500 à 4 000€), TVA à 5,5% (économie de 2 000 à 3 500€), et éco-PTZ (jusqu'à 50 000€ à taux zéro). L'Espace France Rénov' le plus proche vous accompagne gratuitement dans le montage du dossier.`,
        cas_usage: `Scénarios de financement les plus fréquents : remplacement fioul avec MaPrimeRénov' Bleu (reste à charge : 5 000 à 10 000€ sur un budget de 18 000€), rénovation globale avec bonus "Bâtiment Basse Consommation" (aide supplémentaire de 1 500€), installation en construction neuve (éco-PTZ seul, pas de MaPrimeRénov'), et financement intégral sans apport via éco-PTZ + CEE déduits de la facture.`,
        conseil_pratique: `En zone rurale, votre profil MaPrimeRénov' est souvent "Bleu" ou "Jaune" (revenus modestes ou très modestes), ce qui vous donne accès aux aides les plus élevées. Astuce : faites réaliser un audit énergétique (subventionné jusqu'à 500€ par MaPrimeRénov') pour débloquer le parcours "Rénovation Globale", qui offre un bonus de 1 500€ supplémentaires si le gain énergétique dépasse 55%.`,
        logistique: `Le montage des dossiers d'aides peut être réalisé à distance via les plateformes en ligne (maprimerenov.gouv.fr, cee.fr). L'Espace France Rénov' intervient par téléphone et visio pour les communes éloignées. L'installateur RGE mandate généralement le dossier MaPrimeRénov' en votre nom et déduit les CEE directement de la facture. Délai de versement MaPrimeRénov' : 4 à 8 semaines après la fin des travaux.`,
        budget_contexte: `les aides publiques couvrent une part très importante du budget (souvent 40 à 60% pour les ménages modestes). Le reste à charge réel descend entre 5 000 et 12 000€ pour une installation géothermique complète. L'éco-PTZ permet de financer ce reste à charge sans intérêts sur 20 ans.`,
        checklist_items: [
            "Vérifier votre profil MaPrimeRénov' sur le simulateur officiel (france-renov.gouv.fr)",
            "Contacter l'Espace France Rénov' le plus proche pour un accompagnement gratuit et personnalisé",
            "Demander 3 devis d'installateurs RGE — vérifier que la mention QualiPAC figure sur le devis",
            "Créer votre dossier sur maprimerenov.gouv.fr AVANT de signer le devis (obligatoire depuis 2024)",
            "Simuler le cumul des aides : MaPrimeRénov' + CEE + TVA 5,5% + éco-PTZ + aides locales éventuelles",
            "Vérifier si votre département ou région propose des aides complémentaires (ADIL, conseil régional)",
            "Signer le devis uniquement après validation du montant MaPrimeRénov' (délai : 15-30 jours)",
            "Conserver toutes les factures et attestations RGE pour le versement final des primes",
        ],
        marques_recommandees: ["viessmann", "nibe", "atlantic", "stiebel-eltron"],
    },
    S: {
        tier: 'S',
        label: 'bourg ou petite ville',
        intro: `Dans les petites villes, l'accès aux aides pour la géothermie est facilité par la présence d'un réseau dense d'installateurs RGE — condition indispensable pour toucher MaPrimeRénov' et les CEE. Les ménages propriétaires de pavillons des années 70-90 sont les mieux positionnés : le remplacement de leur chaudière gaz ou fioul par une PAC géothermique génère un gain énergétique de 50 à 70%, ce qui maximise le montant des primes. Le reste à charge après aides s'établit entre 6 000 et 14 000€ selon le profil de revenus et le type de captage choisi.`,
        cas_usage: `Plans de financement les plus courants : ménage "Profil Bleu" remplaçant une chaudière fioul (MaPrimeRénov' 11 000€ + CEE 4 000€ = reste à charge 4 000 à 8 000€), ménage "Profil Jaune" en rénovation gaz (MaPrimeRénov' 9 000€ + CEE 3 500€ = reste à charge 6 000 à 12 000€), et ménage "Profil Violet" optant pour un éco-PTZ de 30 000€ sur 15 ans (MaPrimeRénov' 5 000€ + CEE 2 500€, mensualité de 125 à 200€).`,
        conseil_pratique: `Pour maximiser vos aides en petite ville, combinez MaPrimeRénov' avec le dispositif "Coup de Pouce Chauffage" des fournisseurs d'énergie (EDF, Engie, TotalEnergies). Ce dispositif CEE bonusé peut atteindre 4 000 à 5 000€ pour le remplacement d'une chaudière fioul par une PAC géothermique. Attention : le Coup de Pouce n'est pas cumulable avec les CEE classiques — choisissez le plus avantageux des deux.`,
        logistique: `En petite ville, la majorité des installateurs RGE proposent un service de mandataire administratif : ils montent le dossier MaPrimeRénov' en votre nom, avancent le montant des CEE, et déduisent la TVA à 5,5% sur leur facture. Votre seul interlocuteur est l'installateur. L'Espace France Rénov' le plus proche (souvent en sous-préfecture ou communauté de communes) offre un accompagnement gratuit en présentiel.`,
        budget_contexte: `les aides couvrent 35 à 55% du coût total de l'installation selon votre profil de revenus. Le reste à charge moyen est de 8 000 à 14 000€. L'éco-PTZ (taux 0%, durée 15 à 20 ans) permet de lisser ce reste à charge en mensualités de 100 à 200€ — souvent inférieur à l'ancienne facture de chauffage.`,
        checklist_items: [
            "Identifier votre profil MaPrimeRénov' (Bleu, Jaune, Violet ou Rose) sur le simulateur officiel",
            'Comparer les offres CEE "Coup de Pouce Chauffage" des différents fournisseurs d\'énergie',
            "Demander 3 devis d'installateurs RGE QualiPAC — les aides sont conditionnées à la certification",
            "Créer votre dossier MaPrimeRénov' en ligne AVANT la signature du devis",
            "Vérifier l'éligibilité à l'éco-PTZ auprès de votre banque (condition : logement de plus de 2 ans)",
            "Calculer le reste à charge réel = Coût total – MaPrimeRénov' – CEE – TVA 5,5%",
            "Consulter l'ADIL de votre département pour d'éventuelles aides locales complémentaires",
            "Planifier les travaux : l'aide n'est versée qu'après réception de la facture finale et du PV de mise en service",
        ],
        marques_recommandees: ["viessmann", "nibe", "vaillant", "atlantic"],
    },
    M: {
        tier: 'M',
        label: 'ville moyenne',
        intro: `En ville moyenne, les propriétaires bénéficient du meilleur rapport entre le coût de l'installation géothermique et le montant des aides disponibles. L'accès aux Espaces France Rénov', aux conseillers ADIL et aux installateurs RGE spécialisés est facilité. Le cumul des aides 2026 pour une PAC géothermique atteint : MaPrimeRénov' (3 000 à 11 000€ selon revenus), CEE (2 500 à 5 000€), TVA à 5,5% (économie de 2 000 à 3 500€ vs 20%), éco-PTZ (jusqu'à 50 000€ à taux zéro), et éventuellement des subventions de la métropole ou du département. Résultat : un reste à charge de 7 000 à 18 000€ selon le profil de revenus.`,
        cas_usage: `Simulations de financement type : ménage aux revenus intermédiaires (Profil Violet) avec PAC géothermique verticale 12 kW (coût 25 000€ → aides 9 500€ → reste 15 500€ financé en éco-PTZ sur 20 ans = 65€/mois), ménage modeste (Profil Jaune) en remplacement fioul (coût 22 000€ → aides 13 500€ → reste 8 500€), et rénovation globale BBC (coût 35 000€ → aides 22 000€ → reste 13 000€).`,
        conseil_pratique: `En ville moyenne, la stratégie optimale est la "rénovation par gestes" ou la "rénovation globale". Si vous combinez l'installation de la PAC géothermique avec l'isolation des combles et/ou le remplacement des fenêtres, vous débloquez le parcours "Rénovation d'Ampleur" de MaPrimeRénov' — qui offre des taux de subvention bien plus élevés (jusqu'à 80% pour les très modestes). Un conseiller France Rénov' simule gratuitement le scénario le plus avantageux.`,
        logistique: `L'écosystème d'aides est bien structuré en ville moyenne : Espace France Rénov' accessible en présentiel, ADIL pour les conseils juridiques, et réseau bancaire proposant l'éco-PTZ (Banque Postale, Crédit Agricole, BNP Paribas). Les installateurs RGE gèrent le dossier MaPrimeRénov' comme mandataires. Délai moyen entre la demande et le versement : 6 à 10 semaines.`,
        budget_contexte: `le rapport aides/coût est optimal. Les prix d'installation sont proches de la moyenne nationale, et les aides couvrent 30 à 55% du budget total. Le reste à charge est amorti en 5 à 8 ans grâce aux économies de chauffage (1 200 à 1 800€/an vs gaz ou fioul).`,
        checklist_items: [
            "Prendre rendez-vous à l'Espace France Rénov' pour une simulation personnalisée et gratuite",
            'Simuler le parcours "Rénovation d\'Ampleur" vs "geste par geste" pour maximiser les aides',
            "Obtenir 3 à 5 devis d'installateurs RGE QualiPAC — exiger la mention du montant estimé des aides",
            "Créer le dossier MaPrimeRénov' sur la plateforme en ligne (validation sous 15-30 jours)",
            "Comparer les offres CEE de différents obligés (EDF, Engie, TotalEnergies, Leclerc Energies)",
            "Consulter votre banque pour l'éco-PTZ (conditions : logement > 2 ans, artisan RGE, devis signé)",
            "Vérifier les aides locales : métropole, département, région (compléments de 500 à 3 000€)",
            "Calculer le ROI après aides : reste à charge ÷ économies annuelles = nombre d'années d'amortissement",
        ],
        marques_recommandees: ["viessmann", "vaillant", "nibe", "daikin", "atlantic"],
    },
    L: {
        tier: 'L',
        label: 'grande ville',
        intro: `En grande ville, le coût supérieur de l'installation géothermique (surcoût logistique urbain de 10 à 20%) est en grande partie compensé par les aides publiques — dont le montant est identique sur tout le territoire. Concrètement : une installation à 28 000€ en grande ville bénéficie des mêmes 13 000€ d'aides (MaPrimeRénov' + CEE) qu'une installation à 22 000€ en zone rurale. Le reste à charge réel est donc de 15 000€ en ville vs 9 000€ en rural — un écart de seulement 6 000€ pour un confort et une plus-value immobilière bien supérieurs.`,
        cas_usage: `Montages financiers urbains : ménage Profil Violet avec PAC géothermique verticale en maison de ville (coût 30 000€ → aides 9 500€ → éco-PTZ de 20 500€ sur 20 ans = 85€/mois), ménage Profil Jaune en remplacement gaz (coût 28 000€ → aides 14 500€ → reste 13 500€), et copropriété de 8 lots avec géothermie collective (coût 120 000€ → MaPrimeRénov' Copro 30 000€ + CEE 15 000€ → reste 75 000€ soit 9 375€/lot).`,
        conseil_pratique: `En grande ville, exploitez deux leviers financiers souvent méconnus : 1) La prime "sortie de passoire énergétique" — si votre logement passe de F/G à D ou mieux grâce à la géothermie, MaPrimeRénov' accorde un bonus de 1 500€. 2) Les aides des métropoles et communautés urbaines, qui proposent parfois des compléments de 500 à 2 000€ pour les installations géothermiques (se renseigner auprès du service habitat de votre intercommunalité).`,
        logistique: `Le montage administratif est facilité en grande ville : Espaces France Rénov' avec permanences quotidiennes, conseillers spécialisés en copropriété, et réseau bancaire dense pour l'éco-PTZ. Certaines métropoles proposent un "guichet unique" de la rénovation énergétique qui coordonne l'ensemble des démarches (aides, artisan, financement). Délai moyen de traitement MaPrimeRénov' : 4 à 6 semaines.`,
        budget_contexte: `les aides nationales compensent une part significative du surcoût urbain. Le reste à charge après aides est de 10 000 à 20 000€ selon le profil de revenus. L'éco-PTZ permet de lisser ce montant en mensualités inférieures à l'ancienne facture de chauffage (économie nette dès le premier mois).`,
        checklist_items: [
            "Prendre rendez-vous à l'Espace France Rénov' de votre métropole pour un accompagnement personnalisé",
            'Vérifier l\'éligibilité au bonus "sortie de passoire énergétique" (gain de 1 500€ si passage de F/G à D)',
            "Se renseigner sur les aides spécifiques de la métropole/communauté urbaine (service habitat)",
            "Obtenir 3 à 5 devis d'installateurs RGE — vérifier la prise en charge du dossier MaPrimeRénov'",
            "Créer le dossier MaPrimeRénov' en ligne AVANT de signer le devis",
            "Comparer les offres de financement : éco-PTZ (taux 0%) vs prêt travaux classique (taux 3-5%)",
            "Calculer la mensualité éco-PTZ et la comparer à votre facture de chauffage actuelle",
            "En copropriété : étudier MaPrimeRénov' Copro (jusqu'à 25% du coût des travaux collectifs)",
        ],
        marques_recommandees: ["viessmann", "vaillant", "nibe", "daikin", "stiebel-eltron", "atlantic"],
    },
    XL: {
        tier: 'XL',
        label: 'métropole',
        intro: `En métropole, le montant élevé de l'installation géothermique (25 000 à 38 000€) rend le recours aux aides publiques absolument indispensable. La bonne nouvelle : le dispositif de financement 2026 est exceptionnellement généreux. En cumulant MaPrimeRénov' (3 000 à 11 000€), les CEE Coup de Pouce (2 500 à 5 000€), la TVA à 5,5% (économie de 3 000 à 5 000€ vs 20%), l'éco-PTZ (jusqu'à 50 000€ à 0%) et les aides métropolitaines (500 à 3 000€), le reste à charge descend à 10 000 à 22 000€. Et ce montant est intégralement finançable sans apport grâce à l'éco-PTZ.`,
        cas_usage: `Ingénierie financière métropolitaine : ménage aisé (Profil Rose) avec PAC premium (coût 35 000€ → MaPrimeRénov' 3 000€ + CEE 2 500€ + TVA 5,5% économie 4 200€ → reste 25 300€ financé en éco-PTZ = 105€/mois sur 20 ans), ménage modeste (Profil Jaune) en remplacement gaz (coût 30 000€ → aides totales 17 000€ → reste 13 000€), et copropriété 20 lots avec géothermie sur nappe (coût 250 000€ → MaPrimeRénov' Copro 62 500€ + CEE 40 000€ → reste 7 375€/lot).`,
        conseil_pratique: `En métropole, le montage financier est un projet en soi. Deux stratégies gagnantes : 1) Le "parcours accompagné" de MaPrimeRénov' (Mon Accompagnateur Rénov' obligatoire pour les aides > 5 000€) — gratuit pour les revenus modestes, 300 à 800€ sinon (subventionné à 50%). 2) Le tiers-financement : des sociétés spécialisées (SPEE, SPL) avancent la totalité des travaux et sont remboursées sur les économies d'énergie réalisées — vous ne payez rien au départ.`,
        logistique: `L'écosystème d'accompagnement est le plus complet en métropole : Espaces France Rénov' avec des conseillers dédiés géothermie, ADIL, guichet unique métropolitain, Mon Accompagnateur Rénov' certifié, et banques partenaires éco-PTZ (guichet dédié dans les agences principales). Les délais administratifs sont les plus courts (MaPrimeRénov' traité en 3-5 semaines grâce au volume de dossiers).`,
        budget_contexte: `les aides représentent 30 à 55% du coût total malgré les tarifs élevés. Le reste à charge après aides et éco-PTZ se traduit par une mensualité de 80 à 150€ sur 20 ans — inférieure à la facture de gaz ou de fioul qu'elle remplace. Le retour sur investissement net (après aides) est de 6 à 10 ans.`,
        checklist_items: [
            "Prendre rendez-vous avec Mon Accompagnateur Rénov' (obligatoire pour les parcours accompagnés > 5 000€)",
            "Simuler le cumul complet des aides sur le simulateur officiel france-renov.gouv.fr",
            "Vérifier les aides spécifiques de la métropole (Paris, Lyon, Marseille, Bordeaux ont des dispositifs propres)",
            "Demander 3 à 5 devis avec le montant estimé de chaque aide et le reste à charge calculé",
            "Créer le dossier MaPrimeRénov' en ligne et attendre la validation AVANT de signer le devis",
            "Monter le dossier éco-PTZ auprès d'une banque partenaire (liste sur france-renov.gouv.fr)",
            "Explorer le tiers-financement si le reste à charge est trop élevé (SPEE, sociétés locales)",
            "En copropriété : voter les travaux en AG et déposer le dossier MaPrimeRénov' Copro collectif",
        ],
        marques_recommandees: ["viessmann", "vaillant", "nibe", "daikin", "stiebel-eltron", "atlantic"],
    },
};
