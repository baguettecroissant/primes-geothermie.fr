// Zones climatiques — impact sur les AIDES et la RENTABILITÉ après subventions
// Angle éditorial Site 2 : économies, ROI après aides, éligibilité

export interface ClimateZone {
    id: string;
    label: string;
    conseil_geothermie: string;
    captage_recommande: string;
    saison_travaux: string;
    conseil_saisonnier: string;
    sol_type: string;
}

export function getClimateZone(lat: number, lng: number): ClimateZone {
    if (lat > 48.5) return climateZones.oceanique_nord;
    if (lat > 46.5 && lng < 0) return climateZones.oceanique;
    if (lat > 46.5 && lng >= 0 && lng < 5) return climateZones.semi_continental;
    if (lat > 46.5 && lng >= 5) return climateZones.continental;
    if (lat > 44 && lng > 3) return climateZones.mediterraneen;
    if (lat <= 44 && lng > 3) return climateZones.mediterraneen;
    if (lat <= 44) return climateZones.oceanique_sud;
    return climateZones.oceanique;
}

export const climateZones: Record<string, ClimateZone> = {
    oceanique_nord: {
        id: "oceanique_nord",
        label: "Climat océanique tempéré (Nord)",
        conseil_geothermie: "En zone océanique nord, le reste à charge après aides est parmi les plus bas de France. Pourquoi ? Car le gain énergétique est maximal (COP 4,5-5,2 avec des hivers longs) ce qui justifie les montants les plus élevés de MaPrimeRénov' (parcours Rénovation d'Ampleur). Les économies annuelles de 1 200 à 1 700€ amortissent le reste à charge de 6 000 à 12 000€ en 5 à 8 ans seulement.",
        captage_recommande: "Le captage horizontal, le moins cher (4 000-7 000€), bénéficie des mêmes aides MaPrimeRénov' et CEE que le vertical. Le montant des aides étant identique quel que soit le type de captage, le reste à charge est nettement inférieur avec l'horizontal : 2 000-5 000€ après aides vs 6 000-10 000€ pour le vertical.",
        saison_travaux: "Lancez votre dossier MaPrimeRénov' 2 à 3 mois avant la date de travaux souhaitée. La période idéale est de créer le dossier en janvier-février pour des travaux au printemps. Les installateurs RGE sont les plus disponibles pour monter votre dossier en novembre-janvier.",
        conseil_saisonnier: "Planifiez votre projet en deux temps : dossier MaPrimeRénov' en hiver (validation en 3-5 semaines), travaux au printemps-été. Cette organisation optimise votre trésorerie car le versement MaPrimeRénov' intervient 4-8 semaines après la fin des travaux. Avec l'éco-PTZ, vous ne déboursez rien avant le premier remboursement.",
        sol_type: "Sols argileux et limoneux favorables — les installations dans cette zone présentent le meilleur ratio aides/investissement grâce aux coûts de forage modérés. Le reste à charge moyen est de 5 000 à 10 000€ après cumul de toutes les aides.",
    },
    oceanique: {
        id: "oceanique",
        label: "Climat océanique doux (Ouest)",
        conseil_geothermie: "Le climat doux de l'Ouest offre un amortissement rapide (8-12 ans) malgré des besoins de chauffage modérés (2 000-2 500 DJU). L'avantage financier : le coût d'installation est inférieur de 10-15% à la moyenne nationale (PAC plus compacte), tandis que les aides restent au même niveau. Résultat : un reste à charge particulièrement bas, entre 4 000 et 10 000€.",
        captage_recommande: "Le captage horizontal, très économique dans les sols de l'Ouest (4 000-7 000€), permet de maximiser l'effet de levier des aides : sur un budget total de 15 000-20 000€, les aides MaPrimeRénov' + CEE couvrent 50 à 70% pour les ménages modestes. Reste à charge : 3 000 à 8 000€.",
        saison_travaux: "La douceur du climat permet de planifier les travaux en dehors des pics de demande (printemps). Lancez votre dossier d'aides en automne pour des travaux en hiver — les installateurs sont plus disponibles et acceptent plus facilement de monter votre dossier gratuitement.",
        conseil_saisonnier: "L'arrière-saison (septembre-novembre) est idéale pour combiner négociation tarifaire et montage des aides. Les installateurs ont moins de travail et peuvent consacrer plus de temps à optimiser votre dossier MaPrimeRénov'. Certains proposent même d'avancer le montant des CEE.",
        sol_type: "Sols sableux et limoneux — coûts d'installation modérés = reste à charge bas après aides. Le ratio investissement/subvention est l'un des plus favorables de France pour les ménages à revenus intermédiaires.",
    },
    semi_continental: {
        id: "semi_continental",
        label: "Climat semi-continental",
        conseil_geothermie: "En zone semi-continentale, le ROI après aides est excellent : des économies annuelles de 1 500-2 000€ (besoins élevés de 2 500-3 000 DJU) et un reste à charge de 7 000-15 000€ = amortissement en 4 à 8 ans. Le parcours MaPrimeRénov' Rénovation d'Ampleur est particulièrement pertinent car le gain énergétique dépasse souvent 55%, débloquant le bonus BBC de 1 500€.",
        captage_recommande: "Le captage vertical (55-80€/ml) est le standard dans cette zone. Le montant des aides MaPrimeRénov' (5 000-11 000€) et CEE (2 500-4 000€) est suffisant pour ramener le reste à charge sous les 15 000€. L'aquathermie sur nappe de Beauce, encore moins chère, permet un reste à charge sous les 8 000€.",
        saison_travaux: "Déposez votre dossier MaPrimeRénov' en fin d'année pour bénéficier des barèmes N+1 (qui sont historiquement en hausse). Les travaux de printemps permettent une mise en service avant l'hiver et des économies dès la première saison de chauffe.",
        conseil_saisonnier: "En zone semi-continentale, les économies de chauffage sont immédiates et significatives dès le premier hiver. Planifiez une mise en service en octobre pour profiter de 1 500-2 000€ d'économies dès la première saison. Cela facilite aussi le remboursement de l'éco-PTZ.",
        sol_type: "Sols calcaires et argileux du Bassin parisien — les conditions de forage correctes maintiennent un coût d'installation dans la moyenne, maximisant le ratio aides/investissement pour les parcours MaPrimeRénov'.",
    },
    continental: {
        id: "continental",
        label: "Climat continental (Est, massifs)",
        conseil_geothermie: "Le climat continental est la zone où le retour sur investissement après aides est le plus rapide de France : 4 à 7 ans. Avec des économies annuelles de 1 800-2 500€ et un reste à charge de 8 000-18 000€, la PAC géothermique se rembourse d'elle-même. Le parcours Rénovation d'Ampleur de MaPrimeRénov' est presque toujours accessible car le gain énergétique dépasse systématiquement 55%.",
        captage_recommande: "Malgré un coût de forage variable (50-100€/ml selon la géologie), les aides compensent largement : le reste à charge en Alsace (aquathermie sur nappe rhénane) descend sous 5 000€ pour les ménages modestes. Le forage en granite, plus cher, reste rentable en 6-8 ans grâce aux économies de chauffage considérables.",
        saison_travaux: "Lancez votre dossier d'aides en automne pour des travaux au printemps. L'installation avant l'hiver est cruciale dans cette zone : chaque mois de retard vous coûte 200-350€ de chauffage évitable. L'éco-PTZ sur 20 ans génère une mensualité de 50-120€, inférieure à la facture de gaz ou fioul.",
        conseil_saisonnier: "Les hivers rigoureux rendent l'argumentaire des aides imparable : le gain énergétique est tel que MaPrimeRénov' accorde systématiquement les montants les plus élevés. Un audit énergétique dans cette zone montre des gains de 60-75% — éligible au bonus BBC de 1 500€.",
        sol_type: "Géologie variable mais économies maximales. La nappe rhénane (Alsace) permet le meilleur ratio aides/investissement de France. Même en granite vosgien, le ROI après aides reste excellent (6-8 ans) grâce aux besoins de chauffage élevés.",
    },
    mediterraneen: {
        id: "mediterraneen",
        label: "Climat méditerranéen (Sud-Est)",
        conseil_geothermie: "En Méditerranée, l'avantage financier unique est le géocooling : la PAC réversible remplace à la fois la chaudière ET la climatisation. Les économies cumulées (chauffage + clim) atteignent 1 500-2 200€/an, ce qui accélère l'amortissement malgré des besoins de chauffage modérés. Les aides MaPrimeRénov' sont identiques quelle que soit la zone climatique.",
        captage_recommande: "Le captage vertical (plus cher dans les sols rocheux) bénéficie des mêmes aides que partout en France. Le reste à charge est un peu plus élevé (10 000-18 000€) mais compensé par la double économie chauffage+clim. L'aquathermie sur nappe de la Durance offre le meilleur ratio aides/coût.",
        saison_travaux: "La saison de chauffe courte (novembre-mars) impose de bien planifier : déposez votre dossier MaPrimeRénov' au printemps pour des travaux en automne. La mise en service avant l'hiver permet de profiter immédiatement des économies ET du rafraîchissement dès l'été suivant.",
        conseil_saisonnier: "Valorisez le géocooling dans votre calcul de rentabilité : en ajoutant l'économie de climatisation (400-800€/an), l'amortissement après aides passe de 10-13 ans à 7-9 ans. Présentez ce calcul complet à votre conseiller France Rénov' pour optimiser le parcours d'aides.",
        sol_type: "Sols rocheux = forage plus cher, mais les aides sont identiques. Le reste à charge est compensé par la double économie chauffage+rafraîchissement. Les nappes alluviales du Rhône permettent l'aquathermie à moindre coût.",
    },
    oceanique_sud: {
        id: "oceanique_sud",
        label: "Climat océanique aquitain (Sud-Ouest)",
        conseil_geothermie: "Le Sud-Ouest combine coûts d'installation modérés et aides généreuses : le reste à charge moyen est de 5 000 à 12 000€ pour les ménages modestes. Les économies annuelles de 900-1 400€ en remplacement du gaz amortissent cet investissement en 5-9 ans. Le parcours geste par geste de MaPrimeRénov' est le plus courant.",
        captage_recommande: "Le captage horizontal, très économique dans les alluvions (3 500-6 500€), maximise l'effet de levier des aides : sur un budget de 14 000-18 000€, le reste à charge peut descendre sous 4 000€ pour les ménages très modestes. C'est le meilleur ratio investissement/aide de France.",
        saison_travaux: "Lancez le dossier MaPrimeRénov' en hiver pour des travaux au printemps. Les installateurs aquitains sont très demandés en été — anticiper permet aussi de sécuriser un créneau et un devis favorable.",
        conseil_saisonnier: "Le climat doux du Sud-Ouest offre un confort de planification : pas de contrainte de gel ni de saison critique. Profitez-en pour optimiser le timing de votre dossier d'aides et maximiser la trésorerie (versement MaPrimeRénov' avant la première échéance d'éco-PTZ).",
        sol_type: "Sols alluviaux faciles = coûts bas + aides identiques = reste à charge parmi les plus bas de France. Le ratio aides/investissement est optimal pour les ménages à revenus intermédiaires et modestes.",
    },
};
