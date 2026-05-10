// Régions de France — contenu AIDES et FINANCEMENT spécifique par région
// Angle éditorial Site 2 : subventions régionales, reste à charge, accompagnement

export const regionsContent: Record<string, RegionContent> = {
    "Île-De-France": {
        specificite_geo: "L'Île-de-France propose des aides complémentaires via les Conseils départementaux (92, 93, 94, 78) et la Métropole du Grand Paris. Certains départements offrent des subventions de 500 à 2 000€ en plus des aides nationales. Les Espaces France Rénov' sont nombreux et accessibles (permanences quotidiennes). Le réseau bancaire dense facilite l'accès à l'éco-PTZ avec des agences disposant de conseillers spécialisés en rénovation énergétique.",
        tendance: "Le marché francilien génère le plus grand nombre de dossiers MaPrimeRénov' de France (+25%/an). Les délais de traitement sont parmi les plus courts (3-5 semaines) grâce au volume. La région Île-de-France a renforcé son réseau d'Accompagnateurs Rénov' certifiés pour répondre à la demande croissante.",
        marche: "Le reste à charge après aides est de 12 000 à 25 000€ malgré des coûts d'installation élevés. Les aides nationales (MaPrimeRénov' + CEE) sont identiques et compensent significativement le surcoût francilien. L'éco-PTZ permet de lisser le reste à charge en mensualités de 80 à 150€.",
    },
    "Auvergne-Rhône-Alpes": {
        specificite_geo: "La région ARA dispose d'un réseau d'accompagnement exemplaire : les Espaces France Rénov' sont présents dans chaque département, et le Conseil Régional propose des aides complémentaires via le dispositif 'Région à Énergie Positive'. En Savoie et Haute-Savoie, les collectivités locales offrent des bonus de 500 à 1 500€ pour la géothermie en altitude. L'ADIL est particulièrement active pour l'accompagnement financier.",
        tendance: "La région est la 2e de France pour le nombre d'installations géothermiques subventionnées. Les barèmes MaPrimeRénov' sont stables et les CEE en hausse. La tendance est au parcours 'Rénovation d'Ampleur' qui offre des taux de subvention plus élevés (jusqu'à 80% pour les très modestes).",
        marche: "Le reste à charge moyen est de 8 000 à 18 000€. En montagne (besoins de chauffage élevés), le parcours Rénovation d'Ampleur est très avantageux : le gain énergétique dépasse systématiquement 55%, débloquant le bonus BBC. L'amortissement après aides est de 5-8 ans.",
    },
    "Nouvelle-Aquitaine": {
        specificite_geo: "La Nouvelle-Aquitaine est l'une des régions les plus actives en accompagnement rénovation énergétique. Le Conseil Régional propose des aides complémentaires via le programme 'Habiter Mieux en Nouvelle-Aquitaine'. Les ADIL des départements ruraux (Charente, Dordogne, Creuse) sont mobilisées pour les ménages modestes souvent chauffés au fioul — profil le plus éligible aux aides.",
        tendance: "La forte proportion de ménages chauffés au fioul (+30% de demandes de remplacement/an) tire le marché des aides. Le profil MaPrimeRénov' Bleu et Jaune est surreprésenté, ce qui génère des restes à charge très bas. Les CEE 'Coup de Pouce Chauffage' sont massivement mobilisés.",
        marche: "Le reste à charge moyen est de 4 000 à 12 000€ — parmi les plus bas de France grâce aux profils de revenus modestes éligibles aux aides maximales et aux coûts d'installation compétitifs. L'amortissement après aides est de 4-8 ans en remplacement du fioul.",
    },
    "Occitanie": {
        specificite_geo: "L'Occitanie dispose d'un réseau d'Espaces France Rénov' dynamique, avec des permanences renforcées dans les métropoles (Toulouse, Montpellier). Le Conseil Régional propose des aides complémentaires via le plan 'Rénov'Occitanie'. Les collectivités locales de la côte méditerranéenne commencent à subventionner les PAC réversibles en reconnaissance de la double fonction chauffage/rafraîchissement.",
        tendance: "La croissance démographique forte (+40% de demandes à Montpellier) alimente le marché des aides en construction neuve et rénovation. Le profil méditerranéen valorise le géocooling dans le calcul de rentabilité après aides. Les conseillers France Rénov' sont formés à intégrer l'économie de climatisation.",
        marche: "Le reste à charge est de 8 000 à 18 000€. L'amortissement est accéléré par la double économie chauffage+clim : 6-9 ans au lieu de 10-13 ans. Les aides locales peuvent ajouter 500-2 000€ supplémentaires selon la commune.",
    },
    "Hauts-De-France": {
        specificite_geo: "Les Hauts-de-France combinent coûts d'installation bas et profils de revenus souvent éligibles aux aides maximales. Le Conseil Régional propose des aides complémentaires via le programme 'Picardie Pass Rénovation' et 'Rev3'. Les ADIL sont très actives dans l'accompagnement des ménages modestes. Les Espaces France Rénov' offrent des permanences renforcées dans les bassins miniers et les zones rurales.",
        tendance: "Le remplacement massif du chauffage fioul et gaz (+35%/an) génère un volume important de dossiers MaPrimeRénov'. Le profil Bleu et Jaune est très représenté. Les CEE sont parmi les plus élevés de France en raison des économies d'énergie importantes (zone climatique froide).",
        marche: "Le reste à charge moyen est de 3 000 à 10 000€ — le plus bas de France grâce aux coûts d'installation compétitifs et aux profils de revenus éligibles aux aides maximales. L'amortissement après aides est le plus rapide du pays (4-7 ans).",
    },
    "Provence-Alpes-Côte D'azur": {
        specificite_geo: "En PACA, les aides régionales sont complétées par les dispositifs des métropoles (Aix-Marseille-Provence, Nice Côte d'Azur). Le Conseil Régional propose des aides via le plan 'Région Sud Climat'. La Métropole Aix-Marseille offre des subventions de 500 à 2 000€ pour les PAC géothermiques. Les Espaces France Rénov' sont présents dans les principales agglomérations.",
        tendance: "Le marché est tiré par la construction neuve (plus de climatisation = plus de PAC réversibles) et la rénovation des maisons provençales. Les dossiers incluant le géocooling obtiennent des primes CEE plus élevées. La tendance est à la valorisation financière de la double fonction chauffage/rafraîchissement.",
        marche: "Le reste à charge est de 12 000 à 22 000€ (supérieur à la moyenne en raison des coûts d'installation élevés). L'amortissement reste bon grâce à l'économie de climatisation : 8-11 ans. Les aides métropolitaines permettent de réduire ce reste de 500 à 2 000€.",
    },
    "Grand Est": {
        specificite_geo: "Le Grand Est est un territoire pilote pour les aides à la géothermie. L'Alsace dispose d'un réseau d'accompagnement exemplaire hérité de la culture germanique d'efficacité énergétique. La Collectivité européenne d'Alsace (CeA) propose des aides complémentaires spécifiques. Les Espaces France Rénov' alsaciens sont parmi les plus actifs de France avec des conseillers formés à la géothermie.",
        tendance: "L'Alsace est la région où le taux de pénétration de la géothermie est le plus élevé, ce qui facilite le montage des dossiers (conseillers expérimentés, processus rodé). Les CEE sont majorés grâce aux économies d'énergie importantes en zone continentale. Le parcours Rénovation d'Ampleur est le plus utilisé.",
        marche: "Le reste à charge en Alsace (aquathermie sur nappe rhénane) est le plus bas de France : 3 000 à 8 000€ pour les ménages modestes. En Lorraine/Champagne : 6 000 à 14 000€. L'amortissement après aides est de 3-6 ans en Alsace et 5-8 ans dans le reste du Grand Est.",
    },
    "Pays De La Loire": {
        specificite_geo: "Les Pays de la Loire proposent des aides complémentaires via le Conseil Régional (programme 'Énergie durable en Pays de la Loire'). Nantes Métropole offre des subventions supplémentaires de 500 à 1 500€ pour les installations géothermiques. Les Espaces France Rénov' sont présents dans les principales agglomérations et proposent un accompagnement complet du montage des dossiers.",
        tendance: "Le marché est en croissance, porté par la métropole nantaise. Les profils de revenus intermédiaires (Profil Violet) sont les plus représentés. Le parcours 'geste par geste' est le plus courant, avec un cumul MaPrimeRénov' + CEE de 8 000 à 13 000€.",
        marche: "Le reste à charge est de 5 000 à 14 000€ — dans la moyenne nationale. L'amortissement est de 6-10 ans. Les aides de Nantes Métropole réduisent ce reste de 500 à 1 500€ pour les résidents de l'agglomération.",
    },
    "Bretagne": {
        specificite_geo: "La Bretagne dispose d'un programme régional ambitieux pour la transition énergétique avec des aides complémentaires de la Région. Le programme 'TIPER' (Territoires à Innovation et Performance Énergétique Rurale) propose des subventions pour les installations géothermiques en zone rurale. Les ADIL bretonnes sont très actives dans l'accompagnement des ménages historiquement chauffés à l'électricité.",
        tendance: "Le remplacement du chauffage électrique par la géothermie est en forte croissance (+35%/an). Les économies sont significatives (division par 3 à 4 de la facture), ce qui justifie des montants CEE élevés. Le profil breton (chauffage électrique) bénéficie de barèmes CEE spécifiques avantageux.",
        marche: "Le reste à charge est de 7 000 à 16 000€. L'amortissement est bon (8-11 ans) grâce à l'écart important entre le prix du kWh électrique et le kWh géothermique. Les aides régionales complémentaires ajoutent 500 à 2 000€.",
    },
    "Normandie": {
        specificite_geo: "La Normandie propose des aides complémentaires via le Conseil Régional et les communautés d'agglomération (Rouen, Caen). Le programme 'Chèque Éco-Énergie' normand complète les aides nationales. Les ADIL normandes accompagnent efficacement les ménages ruraux chauffés au fioul — le profil le plus éligible aux aides maximales.",
        tendance: "Le remplacement du fioul (très présent en zone rurale normande) tire le marché des aides. Les profils Bleu et Jaune sont majoritaires, donnant accès aux montants MaPrimeRénov' les plus élevés. Les CEE 'Coup de Pouce Chauffage' sont massivement mobilisés.",
        marche: "Le reste à charge est de 3 000 à 10 000€ — parmi les plus bas de France grâce aux coûts d'installation compétitifs et aux profils de revenus éligibles. L'amortissement après aides est de 3-7 ans en remplacement du fioul.",
    },
    "Bourgogne-Franche-Comté": {
        specificite_geo: "La Bourgogne-Franche-Comté offre des aides complémentaires via le programme EFFILOGIS du Conseil Régional, l'un des plus généreux de France (subvention de 500 à 3 000€ pour la géothermie selon les revenus). Les Espaces France Rénov' sont structurés dans chaque département avec des conseillers formés aux spécificités de la géothermie en climat continental.",
        tendance: "Le marché est qualitatif avec des installateurs expérimentés. Le programme EFFILOGIS régional est un vrai accélérateur : il peut couvrir jusqu'à 10% du reste à charge après MaPrimeRénov'. Les hivers continentaux du Jura et du Morvan génèrent des gains énergétiques élevés, favorisant le parcours Rénovation d'Ampleur.",
        marche: "Le reste à charge est de 4 000 à 14 000€. Avec le programme EFFILOGIS, il peut descendre sous 3 000€ pour les ménages très modestes. L'amortissement est parmi les meilleurs de France (5-8 ans) grâce aux économies de chauffage considérables.",
    },
    "Centre-Val De Loire": {
        specificite_geo: "Le Centre-Val de Loire bénéficie d'aides régionales via le programme 'Énergie-Climat' du Conseil Régional. Les communes du bassin de la Beauce, où l'aquathermie sur nappe est très développée, facilitent les démarches administratives. Les ADIL accompagnent les ménages ruraux dans le montage des dossiers, avec un focus sur le remplacement du fioul.",
        tendance: "L'aquathermie sur nappe de Beauce génère les dossiers d'aides les plus avantageux de France : coût d'installation bas + aides identiques = reste à charge minimal. Les profils de revenus modestes du Berry et de la Sologne accèdent aux aides maximales.",
        marche: "Le reste à charge est le plus bas de France en aquathermie sur nappe : 1 500 à 6 000€ pour les ménages modestes. En forage vertical classique : 5 000 à 12 000€. L'amortissement après aides est de 2-5 ans en aquathermie (record national).",
    },
    "Corse": {
        specificite_geo: "La Corse bénéficie d'aides spécifiques liées à l'insularité. La Collectivité de Corse propose des subventions complémentaires pour compenser le surcoût d'installation (transport maritime). Les aides nationales (MaPrimeRénov', CEE) sont majorées pour les DOM-TOM et territoires insulaires. L'Espace France Rénov' est présent à Ajaccio et Bastia.",
        tendance: "Le marché corse est émergent mais les aides sont parmi les plus généreuses grâce aux compléments insulaires. Le profil de revenus corse (souvent modeste) donne accès aux montants MaPrimeRénov' les plus élevés. Le surcoût logistique est partiellement compensé par les aides spécifiques.",
        marche: "Le reste à charge est de 12 000 à 25 000€ malgré les aides renforcées. L'amortissement est plus long (10-15 ans) en raison des coûts d'installation élevés. Les aides spécifiques insulaires permettent de réduire cet écart de 2 000 à 5 000€.",
    },
};

export interface RegionContent {
    specificite_geo: string;
    tendance: string;
    marche: string;
}
