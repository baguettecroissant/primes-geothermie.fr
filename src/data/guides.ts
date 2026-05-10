export interface Guide {
  slug: string; title: string; description: string; heroImage: string; readTime: string;
  sections: { title: string; content: string; tip?: string }[];
  tableData?: { label: string; values: string[] }[];
  faq?: { question: string; answer: string }[];
}
export const guides: Guide[] = [
  {
    "slug": "maprimerenov-geothermie-baremes-2026",
    "title": "MaPrimeRénov' géothermie 2026 : barèmes complets et simulation",
    "description": "De 5 000€ à 11 000€ selon vos revenus. Barèmes officiels, conditions et démarches pas à pas.",
    "heroImage": "/images/guides/mpr-baremes.png",
    "readTime": "11 min",
    "sections": [
      {
        "title": "Montants MaPrimeRénov' par profil de revenus",
        "content": "La PAC géothermique bénéficie du **montant le plus élevé** de MaPrimeRénov' 2026 :\n\n| Profil | Plafond revenus (Île-de-France) | Plafond revenus (Province) | Montant aide |\n|---|---|---|---|\n| Bleu (très modeste) | 23 541€ | 17 009€ | **11 000€** |\n| Jaune (modeste) | 28 657€ | 21 805€ | **9 000€** |\n| Violet (intermédiaire) | 40 018€ | 30 549€ | **6 000€** |\n| Rose (supérieur) | > 40 018€ | > 30 549€ | **5 000€** |\n\nCes montants sont **identiques pour le captage vertical et horizontal**. L'aquathermie (eau-eau) bénéficie des mêmes barèmes."
      },
      {
        "title": "Conditions d'éligibilité détaillées",
        "content": "Pour obtenir MaPrimeRénov' géothermie :\n\n1. **Résidence principale** construite depuis **plus de 15 ans** (ou 2 ans en cas de remplacement fioul)\n2. **Installateur certifié RGE** mention \"pompes à chaleur géothermiques\"\n3. **PAC conforme** : COP ≥ 3,5, norme NF PAC ou équivalent européen\n4. **Devis signé APRÈS** l'accord MaPrimeRénov' (pas de travaux anticipés)\n5. **Revenus fiscaux** de l'année N-1 pour déterminer le profil couleur\n6. **Logement achevé** : pas de construction neuve\n\nAttention : le non-respect d'une seule condition entraîne la perte totale de l'aide."
      },
      {
        "title": "Démarches pas à pas",
        "content": "**Étape 1** : Créez votre compte sur maprimerenov.gouv.fr\n**Étape 2** : Renseignez votre logement et vos revenus\n**Étape 3** : Uploadez le devis de l'installateur RGE (non signé)\n**Étape 4** : Attendez l'accord (4 à 6 semaines)\n**Étape 5** : Signez le devis et lancez les travaux\n**Étape 6** : Uploadez la facture après travaux\n**Étape 7** : Recevez le virement sous 2 à 4 semaines"
      }
    ],
    "faq": [
      {
        "question": "Quel est le montant MaPrimeRénov' pour la géothermie ?",
        "answer": "De 5 000€ (revenus supérieurs) à 11 000€ (revenus très modestes). C'est le montant le plus élevé de toutes les catégories MaPrimeRénov'."
      }
    ]
  },
  {
    "slug": "cee-geothermie-primes-energie",
    "title": "CEE géothermie : primes énergie et montants par profil",
    "description": "De 2 000€ à 4 000€ de primes CEE pour votre PAC géothermique. Fournisseurs, montants et cumul.",
    "heroImage": "/images/guides/cee-primes.png",
    "readTime": "9 min",
    "sections": [
      {
        "title": "Qu'est-ce que les CEE géothermie ?",
        "content": "Les **Certificats d'Économies d'Énergie** (CEE) sont des primes versées par les fournisseurs d'énergie (EDF, TotalEnergies, Engie, etc.) pour financer la rénovation énergétique.\n\nPour une PAC géothermique, les CEE représentent **2 000 à 4 000€** selon :\n- La zone climatique (H1, H2, H3)\n- La surface du logement\n- Le type de chauffage remplacé\n- Le fournisseur d'énergie choisi\n\nLes CEE sont **cumulables avec MaPrimeRénov'** sans plafond."
      },
      {
        "title": "Montants CEE par zone climatique",
        "content": "Les CEE varient selon votre zone climatique :\n\n- **Zone H1** (Nord, Est, montagne) : 3 000 à 4 000€ — climat froid = plus d'économies = plus de primes\n- **Zone H2** (Ouest, Centre, Sud-Ouest) : 2 500 à 3 500€\n- **Zone H3** (Méditerranée) : 2 000 à 2 500€ — climat doux = moins de primes\n\nLes CEE sont majorés de 50 à 100% si le logement est en **passoire thermique** (DPE F ou G)."
      },
      {
        "title": "Comment obtenir les CEE",
        "content": "**Option 1 — Via votre installateur** : la plupart des installateurs RGE ont des partenariats avec des fournisseurs d'énergie. Ils déduisent les CEE directement du devis.\n\n**Option 2 — En direct** : comparez les offres sur les sites des fournisseurs (EDF, Engie, TotalEnergies). Certains offrent des primes plus élevées.\n\n**Attention** : vous devez choisir votre fournisseur CEE AVANT de signer le devis. Pas de rétroactivité possible."
      }
    ],
    "faq": [
      {
        "question": "Peut-on cumuler CEE et MaPrimeRénov' ?",
        "answer": "Oui, les CEE sont 100% cumulables avec MaPrimeRénov'. Ensemble, ces deux aides peuvent atteindre 15 000€ pour une PAC géothermique."
      }
    ]
  },
  {
    "slug": "eco-ptz-geothermie",
    "title": "Éco-PTZ géothermie : conditions et montage du dossier",
    "description": "Prêt à taux zéro jusqu'à 50 000€ sur 20 ans. Conditions, banques partenaires et montage.",
    "heroImage": "/images/guides/eco-ptz.png",
    "readTime": "8 min",
    "sections": [
      {
        "title": "L'éco-PTZ en bref",
        "content": "L'**éco-prêt à taux zéro** (éco-PTZ) est un prêt bancaire **sans intérêts** pour financer le reste à charge de votre PAC géothermique après déduction des aides.\n\n- **Montant max** : 50 000€ (action seule ou bouquet de travaux)\n- **Durée** : jusqu'à 20 ans\n- **Taux** : 0% — l'État prend en charge les intérêts\n- **Conditions de revenus** : aucune — accessible à tous\n- **Logement** : résidence principale, construite depuis > 2 ans"
      },
      {
        "title": "Calcul de la mensualité",
        "content": "Exemples de mensualités pour financer le reste à charge :\n\n| Reste à charge | Durée 10 ans | Durée 15 ans | Durée 20 ans |\n|---|---|---|---|\n| 8 000€ | 67€/mois | 44€/mois | 33€/mois |\n| 10 000€ | 83€/mois | 56€/mois | 42€/mois |\n| 15 000€ | 125€/mois | 83€/mois | 63€/mois |\n\nCes mensualités sont **largement compensées** par les économies de chauffage (100 à 200€/mois avec la géothermie)."
      },
      {
        "title": "Banques qui proposent l'éco-PTZ",
        "content": "Toutes les banques ne proposent pas l'éco-PTZ. Les principales :\n\n- **Crédit Agricole** : bon réseau, délais courts\n- **BNP Paribas** : en ligne et en agence\n- **Caisse d'Épargne** : via votre conseiller\n- **Banque Populaire** : agences locales\n- **Crédit Mutuel** : traitement rapide\n\nVotre installateur RGE vous fournit l'attestation RGE et le descriptif des travaux nécessaires au dossier bancaire."
      }
    ],
    "faq": [
      {
        "question": "L'éco-PTZ est-il cumulable avec MaPrimeRénov' ?",
        "answer": "Oui, l'éco-PTZ est cumulable avec MaPrimeRénov' et les CEE. Il finance le reste à charge à taux zéro, sans conditions de revenus."
      }
    ]
  },
  {
    "slug": "cumul-aides-geothermie-guide",
    "title": "Cumuler les aides géothermie : guide pas à pas du financement optimal",
    "description": "MaPrimeRénov' + CEE + TVA 5,5% + éco-PTZ : comment maximiser vos aides et minimiser votre reste à charge.",
    "heroImage": "/images/guides/cumul-aides.png",
    "readTime": "12 min",
    "sections": [
      {
        "title": "Le parcours de financement optimal",
        "content": "L'ordre dans lequel vous sollicitez les aides est crucial :\n\n**1. MaPrimeRénov'** (4-6 semaines avant devis) → 5 000 à 11 000€\n**2. CEE** (avant signature devis) → 2 000 à 4 000€\n**3. TVA 5,5%** (automatique via installateur RGE) → ~3 400€ d'économie sur 25 000€\n**4. Éco-PTZ** (après travaux, auprès de votre banque) → finance le reste à 0%\n**5. Aides locales** (département, région) → 500 à 3 000€ supplémentaires\n\n**Total maximum : jusqu'à 21 400€** sur une installation de 25 000€."
      },
      {
        "title": "Simulation complète par profil",
        "content": "**Profil Bleu (très modeste)** — Installation à 25 000€ :\n- MaPrimeRénov' : 11 000€\n- CEE : 3 500€\n- TVA 5,5% : 3 400€\n- Reste : **7 100€** → éco-PTZ 20 ans = 30€/mois\n\n**Profil Jaune (modeste)** :\n- MaPrimeRénov' : 9 000€\n- CEE : 3 000€\n- TVA 5,5% : 3 400€\n- Reste : **9 600€** → éco-PTZ 20 ans = 40€/mois\n\n**Profil Rose (supérieur)** :\n- MaPrimeRénov' : 5 000€\n- CEE : 2 500€\n- TVA 5,5% : 3 400€\n- Reste : **14 100€** → éco-PTZ 15 ans = 78€/mois"
      },
      {
        "title": "Erreurs fréquentes à éviter",
        "content": "1. **Signer le devis trop tôt** : attendez l'accord MaPrimeRénov'\n2. **Oublier les CEE** : choisissez votre fournisseur AVANT le devis\n3. **Installateur non RGE** : vérifié sur france-renov.gouv.fr\n4. **Ne pas demander l'éco-PTZ** : c'est gratuit, pourquoi s'en priver ?\n5. **Ignorer les aides locales** : certains départements ajoutent 500 à 3 000€"
      }
    ],
    "faq": [
      {
        "question": "Quel est le montant total des aides cumulables ?",
        "answer": "Jusqu'à 21 400€ en cumulant MaPrimeRénov' (11 000€), CEE (4 000€), TVA 5,5% (3 400€) et aides locales (3 000€). L'éco-PTZ finance le reste à taux zéro."
      }
    ]
  },
  {
    "slug": "tva-5-5-geothermie",
    "title": "TVA 5,5% géothermie : conditions d'éligibilité et économies",
    "description": "La TVA réduite à 5,5% s'applique sur le matériel et la main-d'œuvre. Conditions et calcul de l'économie.",
    "heroImage": "/images/guides/tva-reduite.png",
    "readTime": "7 min",
    "sections": [
      {
        "title": "Conditions de la TVA à 5,5%",
        "content": "La TVA réduite à 5,5% (au lieu de 20%) s'applique automatiquement sur l'ensemble de l'installation géothermique si :\n\n1. **Le logement a plus de 2 ans** (résidence principale ou secondaire)\n2. **L'installateur est professionnel** (pas d'auto-construction)\n3. **Les travaux améliorent la performance énergétique** (ce qui est toujours le cas pour la géothermie)\n\nLa TVA réduite couvre : le matériel (PAC, sondes), la main-d'œuvre (forage, installation) et les fournitures annexes."
      },
      {
        "title": "Calcul de l'économie TVA",
        "content": "Sur une installation géothermique à 25 000€ TTC (taux normal 20%) :\n- Prix HT : 20 833€\n- TVA 20% : 4 167€\n- **TVA 5,5% : 1 146€**\n- **Économie : 3 021€**\n\nSur une installation à 30 000€ TTC :\n- Économie TVA : **3 625€**\n\nCette économie est automatique : votre installateur applique directement le taux réduit sur la facture."
      }
    ],
    "faq": [
      {
        "question": "La TVA 5,5% s'applique-t-elle au forage ?",
        "answer": "Oui, la TVA réduite couvre l'ensemble de l'installation : forage, sondes, PAC, raccordements et main-d'œuvre."
      }
    ]
  },
  {
    "slug": "roi-pac-geothermique-calcul",
    "title": "Retour sur investissement PAC géothermique : calcul détaillé",
    "description": "Amortissement en 7 à 12 ans selon l'énergie remplacée. Simulation sur 25 ans avec aides.",
    "heroImage": "/images/guides/roi-geothermie.png",
    "readTime": "10 min",
    "sections": [
      {
        "title": "Économies annuelles par énergie remplacée",
        "content": "Les économies dépendent de l'énergie que vous remplacez :\n\n**Remplacement fioul** :\n- Conso avant : 2 500 L/an × 1,10€/L = 2 750€\n- Conso après (géothermie) : 2 500 kWh élec × 0,25€ = 625€\n- **Économie : 2 125€/an**\n\n**Remplacement gaz** :\n- Conso avant : 18 000 kWh gaz × 0,10€ = 1 800€\n- Conso après : 4 000 kWh élec × 0,25€ = 1 000€\n- **Économie : 800€/an**\n\n**Remplacement électrique** :\n- Conso avant : 12 000 kWh × 0,25€ = 3 000€\n- Conso après : 2 700 kWh × 0,25€ = 675€\n- **Économie : 2 325€/an**"
      },
      {
        "title": "Amortissement selon le profil",
        "content": "**Cas 1 — Remplacement fioul, profil modeste** :\n- Installation : 25 000€\n- Aides : 15 400€\n- Reste à charge : 9 600€\n- Économie annuelle : 2 125€\n- **Amortissement : 4,5 ans**\n\n**Cas 2 — Remplacement gaz, profil supérieur** :\n- Installation : 25 000€\n- Aides : 10 400€\n- Reste à charge : 14 600€\n- Économie annuelle : 800€\n- **Amortissement : 18 ans** (mais durée de vie 25 ans)\n\n**Cas 3 — Remplacement électrique, profil intermédiaire** :\n- Installation : 22 000€\n- Aides : 12 400€\n- Reste à charge : 9 600€\n- Économie annuelle : 2 325€\n- **Amortissement : 4 ans**"
      },
      {
        "title": "Valorisation immobilière",
        "content": "Au-delà des économies d'énergie, la géothermie valorise votre bien immobilier :\n\n- **Gain DPE** : passage de F/G à B/C en moyenne\n- **Plus-value estimée** : 5 à 15% du prix du bien\n- **Argument de vente** : chauffage quasi-gratuit, indépendance énergétique\n- **Exonération taxe foncière** : possible dans certaines communes (2 à 3 ans)"
      }
    ],
    "faq": [
      {
        "question": "En combien d'années la géothermie est-elle rentable ?",
        "answer": "4 à 8 ans en remplacement de fioul ou d'électricité (après aides), 12 à 18 ans en remplacement de gaz. La durée de vie de 25+ ans garantit la rentabilité."
      }
    ]
  },
  {
    "slug": "aides-locales-geothermie-region",
    "title": "Aides locales géothermie : subventions par région et département",
    "description": "Certains départements et régions ajoutent 500 à 3 000€ aux aides nationales. Tour de France des subventions.",
    "heroImage": "/images/guides/aides-locales.png",
    "readTime": "9 min",
    "sections": [
      {
        "title": "Les aides régionales en 2026",
        "content": "Plusieurs régions proposent des compléments aux aides nationales :\n\n- **Île-de-France** : prime Éco-Rénovons de 2 000 à 4 000€ (sous conditions)\n- **Grand Est** : Climaxion, aide de 500 à 2 000€ pour la géothermie\n- **Nouvelle-Aquitaine** : prime régionale de 1 000 à 1 500€ (passoires thermiques)\n- **Auvergne-Rhône-Alpes** : aide régionale de 500 à 1 500€\n- **Occitanie** : Rénov'Occitanie, accompagnement + prime de 500 à 1 000€\n\nCes aides sont **cumulables avec MaPrimeRénov' et les CEE**."
      },
      {
        "title": "Les aides départementales et communales",
        "content": "Certains départements et communes proposent des aides complémentaires :\n\n- **Conseil départemental** : prime habitat de 500 à 2 000€ dans certains départements (vérifiez auprès de votre ADIL)\n- **Communes et intercommunalités** : primes ponctuelles de 200 à 1 000€\n- **ANAH** : aide complémentaire pour les propriétaires bailleurs (sous conditions)\n- **Action Logement** : prêt travaux à 1% pour les salariés du privé\n\nRenseignez-vous auprès de votre **Espace France Rénov'** local pour un bilan personnalisé."
      },
      {
        "title": "Comment trouver les aides de votre territoire",
        "content": "3 sources pour identifier toutes vos aides locales :\n\n1. **ANIL/ADIL** : anil.org — annuaire des aides locales au logement par département\n2. **France Rénov'** : france-renov.gouv.fr — simulateur officiel incluant les aides locales\n3. **Votre mairie** : certaines communes ont des dispositifs non référencés en ligne\n\nVotre installateur RGE connaît généralement les aides disponibles dans votre département."
      }
    ],
    "faq": [
      {
        "question": "Les aides locales sont-elles cumulables avec MaPrimeRénov' ?",
        "answer": "Oui, dans la limite d'un plafond total de 90% du coût des travaux pour les ménages très modestes et 75% pour les autres profils."
      }
    ]
  },
  {
    "slug": "financer-geothermie-sans-apport",
    "title": "Financer sa géothermie sans apport : toutes les solutions en 2026",
    "description": "Reste à charge nul ou quasi-nul grâce au cumul des aides et à l'éco-PTZ. Montages financiers possibles.",
    "heroImage": "/images/guides/sans-apport.png",
    "readTime": "8 min",
    "sections": [
      {
        "title": "Le montage à reste à charge zéro",
        "content": "Pour les ménages aux revenus modestes, il est possible d'atteindre un **reste à charge quasi-nul** :\n\n- Installation : 22 000€ (captage horizontal, maison 100 m²)\n- MaPrimeRénov' Bleu : -11 000€\n- CEE zone H1 : -4 000€\n- TVA 5,5% économie : -2 800€\n- Aide régionale : -1 500€\n- **Reste : 2 700€** → éco-PTZ 10 ans = 23€/mois\n\nAvec les économies de chauffage de 150€/mois, **vous gagnez de l'argent dès le premier mois**."
      },
      {
        "title": "Solutions de financement complémentaires",
        "content": "Si le reste à charge est plus élevé :\n\n- **Éco-PTZ** : taux zéro, jusqu'à 50 000€ sur 20 ans\n- **Prêt Avance Rénovation** : remboursement à la revente du bien (ménages modestes)\n- **Action Logement** : prêt à 1% pour les salariés du privé (jusqu'à 10 000€)\n- **Paiement échelonné** : certains installateurs proposent des facilités de paiement\n- **Tiers-financement** : l'opérateur finance les travaux et se rembourse sur les économies d'énergie"
      }
    ],
    "faq": [
      {
        "question": "Peut-on installer la géothermie sans rien payer ?",
        "answer": "Pour les ménages très modestes avec une installation horizontale (22 000€), le cumul des aides peut réduire le reste à charge à moins de 3 000€, financé par éco-PTZ à 23€/mois."
      }
    ]
  }
];
export function getAllGuides() { return guides; }
