export interface Guide {
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  readTime: string;
  sections: { title: string; content: string; tip?: string }[];
  tableData?: { label: string; values: string[] }[];
  faq?: { question: string; answer: string }[];
}

export const guides: Guide[] = [
  {
    "slug": "maprimerenov-geothermie-baremes",
    "title": "MaPrimeRénov' Géothermie 2026 : Barèmes, conditions et plafonds",
    "description": "Jusqu'à 11 000€ d'aides de l'Anah pour l'installation d'une PAC géothermique. Découvrez le montant exact auquel vous avez droit selon vos revenus.",
    "heroImage": "/images/guides/maprimerenov-geothermie.png",
    "readTime": "12 min",
    "sections": [
      {
        "title": "MaPrimeRénov' : L'aide majeure de l'État",
        "content": "Gérée par l'Agence Nationale de l'Habitat (Anah), MaPrimeRénov' est la subvention principale pour la transition énergétique en France. Contrairement à l'ancien Crédit d'Impôt (CITE) qui vous obligeait à avancer les frais et attendre l'année suivante, MaPrimeRénov' est une **prime versée directement sur votre compte bancaire à la fin des travaux**, et qui peut même être déduite directement du devis si votre installateur est mandataire financier.\n\nLa géothermie est le mode de chauffage le plus soutenu par les pouvoirs publics, avec des montants d'aide presque deux fois supérieurs à ceux d'une pompe à chaleur air-eau classique, afin de compenser le surcoût lié au forage."
      },
      {
        "title": "Les 4 profils de revenus (Couleurs MaPrimeRénov')",
        "content": "Le montant de l'aide n'est pas fixe. Il dépend du Revenu Fiscal de Référence (RFR) de votre foyer et du nombre de personnes le composant. L'Anah a divisé la population en 4 catégories de couleurs :\n\n- **MaPrimeRénov' Bleu (Revenus Très Modestes)** : Aide maximale. Pour un couple en province gagnant moins de 25 784€/an. \n- **MaPrimeRénov' Jaune (Revenus Modestes)** : Aide forte. Pour un couple en province gagnant entre 25 784€ et 33 030€/an.\n- **MaPrimeRénov' Violet (Revenus Intermédiaires)** : Aide standard. Pour un couple en province gagnant entre 33 030€ et 50 392€/an.\n- **MaPrimeRénov' Rose (Revenus Supérieurs)** : Les ménages aisés ne touchent plus d'aide forfaitaire classique pour l'installation d'une PAC seule depuis 2024. Ils doivent s'orienter vers le dispositif 'Rénovation Globale' pour être aidés.",
        "tip": "Le RFR à prendre en compte est celui de votre dernier avis d'imposition (Année N-1). Les barèmes sont relevés chaque année, et sont plus élevés pour les foyers résidant en Île-de-France."
      },
      {
        "title": "Montants exacts de la prime Géothermie",
        "content": "Pour l'installation d'une pompe à chaleur géothermique (sol-eau ou eau-eau) en remplacement d'une vieille chaudière (fioul, gaz, ou charbon), voici les primes forfaitaires accordées par l'Anah :\n\n- Profil Bleu : **11 000 €**\n- Profil Jaune : **9 000 €**\n- Profil Violet : **6 000 €**\n- Profil Rose : **0 €** (uniquement éligible aux CEE classiques ou à la Rénovation Globale)\n\nCes montants s'appliquent pour le geste simple (remplacement de chauffage). S'il s'agit d'une rénovation globale (bouquet de travaux incluant l'isolation et permettant un saut de 2 classes DPE), la prime n'est plus un forfait mais un pourcentage du devis hors taxes (jusqu'à 90% de prise en charge pour les profils Bleus !)."
      },
      {
        "title": "Conditions d'éligibilité strictes",
        "content": "L'obtention de la prime n'est pas automatique. Voici les règles d'or à respecter impérativement :\n\n1. **Le logement** : Il doit être achevé depuis plus de 15 ans et être votre résidence principale (occupé au moins 8 mois par an).\n2. **L'installateur** : L'entreprise qui vous facture DOIT posséder la qualification **RGE QualiPAC** ET **RGE QualiForage** à la date de signature du devis. Si le foreur et le plombier sont deux entreprises différentes, les deux doivent être qualifiées.\n3. **La pompe à chaleur** : Elle doit atteindre une Efficacité Énergétique Saisonnière (ETAs) d'au moins 126% pour de la basse température (35°C), ou 111% pour de la moyenne/haute température (55°C).\n4. **La chronologie** : Vous DEVEZ créer votre compte sur maprimerenov.gouv.fr et déposer votre dossier **AVANT de signer le moindre devis**. Toute signature anticipée annule définitivement votre droit à l'aide."
      }
    ],
    "tableData": [
      {
        "label": "Profil Bleu (Très modeste)",
        "values": ["11 000 €", "< 25 784€ (Province)", "Oui"]
      },
      {
        "label": "Profil Jaune (Modeste)",
        "values": ["9 000 €", "< 33 030€ (Province)", "Oui"]
      },
      {
        "label": "Profil Violet (Intermédiaire)",
        "values": ["6 000 €", "< 50 392€ (Province)", "Oui"]
      },
      {
        "label": "Profil Rose (Aisé)",
        "values": ["0 €*", "> 50 392€ (Province)", "Seulement Rénovation Globale"]
      }
    ],
    "faq": [
      {
        "question": "Puis-je toucher MaPrimeRénov' pour une maison neuve ?",
        "answer": "Non. MaPrimeRénov' finance exclusivement la rénovation énergétique. Le logement doit avoir plus de 15 ans. Pour les constructions neuves (soumises à la RE2020), la géothermie n'est pas subventionnée par l'Anah."
      },
      {
        "question": "Le versement de la prime est-il rapide ?",
        "answer": "Généralement, l'Anah verse les fonds par virement bancaire 3 à 5 semaines après le dépôt de la facture acquittée sur votre espace personnel. Pour éviter d'avancer la somme, vous pouvez demander à votre installateur d'être 'mandataire financier', il déduira l'aide de votre facture finale et se fera payer par l'État à votre place."
      }
    ]
  },
  {
    "slug": "cee-primes-energie",
    "title": "Certificats d'Économies d'Énergie (CEE) : Coup de pouce Géothermie",
    "description": "En plus de MaPrimeRénov', touchez jusqu'à 5 000€ grâce aux fournisseurs d'énergie (Total, EDF, Leclerc). Fonctionnement et conditions.",
    "heroImage": "/images/guides/cee-primes.png",
    "readTime": "10 min",
    "sections": [
      {
        "title": "Le principe du \"Pollueur-Payeur\"",
        "content": "Le dispositif des CEE n'est pas financé par l'État (vos impôts), mais par les \"obligés\" : les grands distributeurs d'énergie et de carburant (EDF, TotalEnergies, Engie, Leclerc, Carrefour). L'État leur impose des quotas d'économies d'énergie à réaliser. Pour éviter de lourdes amendes, ces entreprises \"achètent\" vos économies d'énergie en finançant vos travaux.\n\nC'est pourquoi vous recevez des offres de primes de la part d'hypermarchés ou de compagnies pétrolières. Cette aide est totalement légale, encadrée par l'État, et surtout, **elle est cumulable avec MaPrimeRénov'**."
      },
      {
        "title": "La prime 'Coup de pouce Chauffage'",
        "content": "Pour accélérer la sortie des énergies fossiles, l'État a mis en place des primes bonifiées (Coups de pouce) pour le remplacement d'une chaudière fioul, charbon ou gaz (autre qu'à condensation) par une PAC géothermique.\n\nLes montants minimums légaux du Coup de pouce Géothermie sont très attractifs :\n- **5 000 € minimum** pour les ménages modestes et très modestes (Profils Bleu et Jaune).\n- **5 000 € minimum** pour les autres ménages (Profils Violet et Rose).\n\nFait exceptionnel : contrairement à la prime air-eau, la prime géothermie est fixée à 5 000€ pour tous les profils de revenus (depuis les réformes récentes pour booster la filière)."
      },
      {
        "title": "La fiche standardisée BAR-TH-104",
        "content": "L'installation d'une PAC géothermique est régie par une fiche technique très stricte du ministère de la Transition Écologique (fiche BAR-TH-104). \nPour que votre dossier CEE soit validé, il faut que votre devis mentionne des éléments précis :\n- La mise en place d'une pompe à chaleur géothermique de type sol/eau, eau/eau ou eau glycolée/eau.\n- L'efficacité énergétique saisonnière (ETAs) de la PAC, qui doit être supérieure ou égale à 111 % pour les pompes à chaleur moyenne et haute température, ou 126 % pour la basse température.\n- La marque, le modèle, et la puissance nominale.\n- Le numéro de certification RGE de l'installateur."
      },
      {
        "title": "Comment obtenir sa prime CEE ?",
        "content": "Attention au piège calendaire ! La demande de prime CEE doit IMPÉRATIVEMENT être initiée avant la signature du devis. Voici la marche à suivre :\n1. Comparez les offres des différents obligés (Effy, Sonergia, EDF, grandes surfaces). La prime légale est de 5000€ minimum, mais certains rajoutent des cartes cadeaux.\n2. Inscrivez-vous sur le site du délégataire choisi et recevez votre lettre d'engagement.\n3. Seulement après, signez le devis de votre artisan RGE.\n4. Faites réaliser les travaux.\n5. Envoyez la facture, l'attestation sur l'honneur (AH) signée par vous et l'artisan, et votre avis d'imposition."
      }
    ],
    "faq": [
      {
        "question": "L'artisan peut-il déduire la prime CEE de son devis ?",
        "answer": "Oui, de nombreux artisans RGE sont partenaires d'un délégataire CEE (comme Effy ou Sonergia). Dans ce cas, ils s'occupent de toute la paperasse et déduisent directement les 5 000€ de votre devis (remise commerciale). C'est beaucoup plus simple et cela vous évite de faire l'avance de trésorerie."
      },
      {
        "question": "Que se passe-t-il si je remplace un radiateur électrique par une géothermie ?",
        "answer": "Le 'Coup de Pouce' à 5000€ n'est valable qu'en remplacement d'une chaudière à combustion (fioul, gaz, charbon). Si vous remplacez du chauffage électrique, vous sortez du cadre du Coup de Pouce. Vous toucherez une prime CEE classique (calculée selon les MWh cumac), dont le montant sera beaucoup plus faible (entre 300 et 800€ selon la zone climatique)."
      }
    ]
  },
  {
    "slug": "eco-ptz-banque",
    "title": "Éco-PTZ et Prêt Avance Mutation : Financer son reste à charge",
    "description": "Comment emprunter jusqu'à 50 000€ à taux zéro pour financer le forage et la PAC géothermique sans déséquilibrer votre budget mensuel.",
    "heroImage": "/images/guides/eco-ptz.png",
    "readTime": "8 min",
    "sections": [
      {
        "title": "Le principe de l'Éco-Prêt à Taux Zéro (Éco-PTZ)",
        "content": "Même avec MaPrimeRénov' et les CEE déduits, l'installation d'un système géothermique complet avec forage peut laisser un reste à charge de 5 000€ à 15 000€. L'État a mis en place l'Éco-PTZ, un prêt bancaire dont les intérêts sont payés par l'État. Vous n'empruntez que le capital.\n\nCe prêt est accordé **sans condition de ressources** (contrairement à MaPrimeRénov'). Il s'adresse à tous les propriétaires, qu'ils soient occupants ou bailleurs."
      },
      {
        "title": "Montants et durées d'emprunt",
        "content": "Le plafond de l'Éco-PTZ dépend du type de travaux réalisés :\n- **Une action simple** (ex: remplacer votre chaudière par une PAC géothermique) : vous pouvez emprunter jusqu'à **15 000 €** remboursables sur 15 ans.\n- **Un bouquet de 2 travaux** (ex: PAC géothermique + isolation des combles) : jusqu'à **25 000 €** remboursables sur 15 ans.\n- **Un bouquet de 3 travaux ou plus** : jusqu'à **30 000 €** remboursables sur 15 ans.\n- **Performance énergétique globale** (atteinte d'un niveau DPE précis) : jusqu'à **50 000 €** remboursables sur 20 ans.\n\nL'avantage d'une durée longue (15 ans) à taux zéro est que la mensualité du crédit est souvent inférieure aux économies de chauffage réalisées chaque mois."
      },
      {
        "title": "MonTrasnfertÉnergie : L'astuce financière",
        "content": "Un exemple concret : Vous payiez 250€/mois de fioul. Après l'installation géothermique, votre facture électrique de chauffage tombe à 50€/mois. Vous réalisez 200€ d'économies mensuelles.\nSi vous souscrivez un Éco-PTZ de 15 000€ sur 15 ans, la mensualité sera de 83€/mois.\nAu final, votre budget chauffage + prêt devient : 50€ + 83€ = 133€/mois.\nVous gagnez immédiatement 117€ de pouvoir d'achat par mois tout en devenant propriétaire d'un système neuf. C'est le principe de la rénovation autofinancée."
      },
      {
        "title": "Le Prêt Avance Rénovation (Prêt Avance Mutation)",
        "content": "L'Éco-PTZ reste un crédit : la banque vérifie votre taux d'endettement et peut vous le refuser (notamment si vous êtes retraité avec une petite pension).\n\nPour débloquer la situation, l'État a créé le **Prêt Avance Rénovation**. Il est destiné aux ménages modestes (ou seniors) n'ayant pas accès au crédit classique. Le principe :\n- Vous ne payez que les intérêts chaque mois (ou l'État les prend en charge via une aide de l'Anah).\n- Le capital emprunté pour la géothermie n'est remboursé qu'au moment de la vente de la maison, ou lors de la succession.\n- La dette est couverte par une hypothèque sur la maison, garantie par l'État à 75%."
      }
    ],
    "faq": [
      {
        "question": "Toutes les banques proposent-elles l'Éco-PTZ ?",
        "answer": "En théorie oui, car elles ont signé une convention avec l'État. En pratique, c'est un prêt lourd à monter sur le plan administratif pour les conseillers bancaires, qui ne rapporte rien à la banque. N'hésitez pas à insister auprès de votre conseiller ou à changer d'établissement. Des réseaux comme le Crédit Mutuel, la Banque Populaire ou le Crédit Agricole sont généralement les plus actifs sur ce produit."
      },
      {
        "question": "Que fournir à la banque pour obtenir le prêt ?",
        "answer": "La banque exigera le formulaire 'Emprunteur' spécifique complété et signé par votre installateur RGE, accompagné de son devis détaillé et de ses certificats RGE valides. Attention, le devis ne doit pas être signé avant l'édition de l'offre de prêt."
      }
    ]
  },
  {
    "slug": "cumul-aides-financieres",
    "title": "Le Cumul des Aides : Comment superposer intelligemment les primes",
    "description": "MaPrimeRénov', CEE, TVA réduite... Découvrez comment assembler le puzzle des aides financières pour faire chuter le devis de votre installation géothermique.",
    "heroImage": "/images/guides/cumul-aides.png",
    "readTime": "9 min",
    "sections": [
      {
        "title": "La règle du non-écrêtement",
        "content": "La bonne nouvelle pour la transition énergétique est que **la majorité des aides sont cumulables**. Le gouvernement a construit le système financier pour que les primes se superposent, afin de financer massivement les restes à charge importants comme ceux de la géothermie.\n\nCependant, il existe une règle absolue : **le cumul des aides ne peut pas dépasser le montant total du devis TTC** (principe d'écrêtement). Vous ne pouvez pas gagner de l'argent en installant une PAC.\n\nDans les faits, les plafonds d'écrêtement sont stricts :\n- Profil Bleu : le total des aides est plafonné à 90% de la facture (10% minimum de reste à charge).\n- Profil Jaune : plafonné à 75%.\n- Profil Violet : plafonné à 60%."
      },
      {
        "title": "L'empilement parfait (Cas concret)",
        "content": "Prenons l'exemple d'un couple (Profil Bleu) remplaçant une chaudière fioul par une géothermie (Devis total forage + PAC : 22 000€ TTC).\n\n1. **Base** : Devis 22 000€\n2. **TVA** : Application de la TVA 5,5% (incluse dans les 22k€)\n3. **Coup de pouce CEE** : - 5 000€ (Prime des pollueurs-payeurs)\n4. **MaPrimeRénov'** : - 11 000€ (Aide de l'État)\n5. **Aide locale (si applicable)** : - 1 500€ (Exemple Conseil Régional)\n\n**Total des aides** : 17 500€. Le taux de subvention atteint près de 80%.\n**Reste à charge** : 4 500€.\nCe reste à charge de 4 500€ peut ensuite être lissé sur 10 ans grâce à un Éco-PTZ, soit une mensualité d'environ 37€/mois, un montant largement inférieur aux 200€ mensuels d'économie de fioul."
      },
      {
        "title": "L'ordre des démarches : La chronologie est reine",
        "content": "Pour réussir votre cumul, un seul mot d'ordre : la patience. Le moindre faux pas chronologique annulera vos droits de manière irréversible.\n\nVoici l'ordre exact, incontournable, à suivre :\n1. Faites venir les artisans RGE et obtenez vos devis.\n2. **NE SIGNEZ RIEN.**\n3. Inscrivez-vous chez un délégataire CEE (pour bloquer la prime des 5 000€).\n4. Créez votre dossier sur maprimerenov.gouv.fr et déposez-y le devis non signé.\n5. Attendez l'accusé de réception de l'Anah confirmant la recevabilité du dossier.\n6. Maintenant seulement, signez le devis et versez l'acompte à l'artisan.\n7. Faites les travaux.\n8. Payez la facture finale et transmettez-la aux organismes pour débloquer les virements."
      }
    ],
    "faq": [
      {
        "question": "L'artisan peut-il s'occuper de cumuler les aides pour moi ?",
        "answer": "Oui, de plus en plus d'artisans sont 'Mandataires Administratifs et Financiers'. Ils montent les dossiers MaPrimeRénov' et CEE à votre place. Mieux encore : ils peuvent déduire le montant total cumulé de ces aides directement en bas de votre devis. Vous n'avez plus qu'à régler le reste à charge final. C'est la solution la plus sécurisante."
      }
    ]
  },
  {
    "slug": "tva-reduite-5-5",
    "title": "La TVA à 5,5% : L'aide immédiate sur la géothermie",
    "description": "Sans condition de ressources, sans dossier complexe. Découvrez comment la TVA réduite s'applique sur le matériel et la main-d'œuvre de votre forage.",
    "heroImage": "/images/guides/tva-reduite.png",
    "readTime": "5 min",
    "sections": [
      {
        "title": "Le coup de rabot fiscal : de 20% à 5,5%",
        "content": "La première aide financière dont vous bénéficiez (et souvent la plus ignorée car elle est invisible) est l'application du taux de Taxe sur la Valeur Ajoutée (TVA) à 5,5% au lieu du taux normal de 20%.\n\nSur un chantier de géothermie moyen (20 000€ HT), l'application de la TVA à 5,5% représente une **économie immédiate de 2 900€** (facture à 21 100€ TTC au lieu de 24 000€ TTC).\n\nCette aide est universelle : **sans condition de revenus**, que vous soyez au RSA ou cadre supérieur, et que la résidence soit principale ou secondaire."
      },
      {
        "title": "Sur quoi s'applique la TVA à 5,5% ?",
        "content": "Contrairement à certaines idées reçues, la TVA à 5,5% ne s'applique pas qu'à la machine. Dans le cadre d'une rénovation énergétique performante (PAC géothermique respectant les critères de l'Anah installée par un pro RGE), le taux réduit s'applique à l'ensemble du projet :\n\n- **La fourniture du matériel principal** : La pompe à chaleur, l'échangeur, le ballon tampon.\n- **Le forage géothermique complet** : Amenée du matériel, percement, évacuation des déblais, tubage, cimentation.\n- **Les fournitures associées** : Sondes géothermiques en PEHD, glycol écologique.\n- **La main-d'œuvre globale** : Installation, raccordement, mise en service."
      },
      {
        "title": "Les limites et exclusions de la TVA 5,5%",
        "content": "Cependant, l'administration fiscale fixe des limites strictes aux travaux 'induits'. Le taux réduit ne s'appliquera pas sur :\n\n- **Le système d'émission neuf** : Si vous profitez de l'installation de la PAC pour détruire le sol et installer un plancher chauffant neuf complet, ce dernier sera facturé à 10% (TVA rénovation classique) ou 20%, pas à 5,5%.\n- **Les travaux paysagers** : Si le forage abîme votre pelouse et vos haies, la remise en état paysagère par un jardinier sera facturée à 20%.\n- **Le bâti neuf** : Si votre maison a moins de 2 ans (construction neuve), TOUTE la facture (PAC + Forage) sera soumise à la TVA de 20%. La géothermie en neuf ne bénéficie d'aucune dérogation fiscale."
      }
    ],
    "faq": [
      {
        "question": "Comment prouver à mon artisan que j'ai droit à la TVA à 5,5% ?",
        "answer": "C'est très simple. L'artisan vous fournira un formulaire administratif appelé 'Attestation simplifiée TVA' (Cerfa N°13948*05). Vous devrez simplement y cocher une case certifiant que votre logement est achevé depuis plus de 2 ans, le dater et le signer. L'artisan le conservera dans sa comptabilité en cas de contrôle fiscal."
      }
    ]
  },
  {
    "slug": "rentabilite-roi-geothermie",
    "title": "Retour sur Investissement (ROI) de la Géothermie : Calculez votre rentabilité",
    "description": "La géothermie est chère à l'achat, mais incroyablement économique à l'usage. Analyse financière détaillée sur 20 ans vs Fioul, Gaz et Aérothermie.",
    "heroImage": "/images/guides/rentabilite-roi.png",
    "readTime": "15 min",
    "sections": [
      {
        "title": "Dépasser la barrière du prix d'achat",
        "content": "L'obstacle majeur de la géothermie est psychologique : son coût initial (Capex). Avec un budget oscillant entre 18 000€ et 30 000€ avant aides, le devis rebute. Mais un chauffage ne s'évalue jamais sur son prix d'achat, il s'évalue sur son **TCO (Total Cost of Ownership - Coût Global de Possession)** sur 20 ans.\n\nLa géothermie est un actif de très long terme. Le forage (le poste le plus cher du devis) est garanti pour durer plus de 100 ans. La PAC elle-même est installée à l'intérieur de la maison (à l'abri des intempéries), doublant sa durée de vie par rapport à une unité extérieure aérothermique."
      },
      {
        "title": "Étude de cas : Maison de 150m² (Rénovation Fioul vers Géothermie)",
        "content": "Prenons une maison consommant 2 500 litres de fioul par an pour le chauffage et l'eau chaude. Au prix moyen de 1,20€/L, la facture annuelle est de **3 000 €**.\n\n**Investissement initial Géothermie (PAC sol-eau) :**\n- Devis total : 25 000 € TTC\n- Aides déduites (Profil Jaune : MaPrimeRénov 9k€ + CEE 5k€) : - 14 000 €\n- Reste à charge réel : **11 000 €**\n\n**Nouveau coût de fonctionnement :**\nLa PAC géothermique a un SCOP réel de 4,5. Elle divisera les besoins énergétiques par 4,5. \nLa facture de fioul (25 000 kWh thermiques) devient une facture électrique de 5 555 kWh.\nAu prix de l'électricité actuel (0,25€/kWh), la nouvelle facture annuelle tombe à **1 388 €**.\n\n**Économie nette annuelle : 1 612 €**."
      },
      {
        "title": "Le calcul du point mort (Break-even)",
        "content": "Le temps de retour sur investissement brut est simple : \nReste à charge (11 000 €) / Économies annuelles (1 612 €) = **6,8 années**.\n\nEn moins de 7 ans, le surcoût de la géothermie s'est autofinancé. \nMais ce calcul est pessimiste, car il part du principe que le prix du fioul et de l'électricité restera stable. Historiquement, l'inflation énergétique favorise toujours les systèmes à très haut rendement (car vous achetez 4,5 fois moins d'énergie qu'une chaudière, l'inflation vous impacte 4,5 fois moins fort)."
      },
      {
        "title": "Géothermie vs Aérothermie : Le vrai match financier",
        "content": "Beaucoup hésitent entre la PAC géothermique (25 000€) et la PAC aérothermique Air-Eau (14 000€). \nAvec les aides, la PAC Air-Eau peut avoir un reste à charge ridicule (ex: 3 000€).\n\nPourquoi investir 11 000€ (Reste à charge géothermie) au lieu de 3 000€ ?\n1. **La durée de vie** : Une PAC aérothermique (exposée au gel, au sel, à l'usure mécanique externe) dure en moyenne 15 ans. La PAC géothermique (en chaufferie propre) durera 25 ans, et le forage 100 ans. Au bout de 15 ans, il faudra racheter une PAC aérothermique entière.\n2. **Le rendement par grand froid** : Le SCOP aérothermique réel est de 2,8. Le SCOP géothermique est de 4,5. Sur 20 ans, la différence de consommation électrique compense très largement le surcoût initial du forage.\n3. **La valeur verte immobilière** : Une maison équipée d'un forage géothermique prend immédiatement de la valeur sur le marché immobilier (Valorisée DPE A ou B). Le forage est considéré comme une infrastructure pérenne."
      }
    ],
    "faq": [
      {
        "question": "Le coût d'entretien pénalise-t-il la rentabilité ?",
        "answer": "Non, c'est l'inverse. L'entretien obligatoire d'une PAC géothermique coûte environ 150 à 250€ par an (contrôle étanchéité fluide frigorigène). C'est équivalent à l'entretien d'une PAC aérothermique, et bien moins cher que le ramonage, l'entretien du brûleur et le nettoyage de cuve d'une chaudière fioul (250-400€/an)."
      }
    ]
  },
  {
    "slug": "aides-locales-regionales",
    "title": "Aides Locales Géothermie : Le bonus des Régions et Départements",
    "description": "Conseils régionaux, départementaux, et métropoles proposent souvent des chèques géothermie méconnus. Comment débloquer ces 1 000€ à 3 000€ supplémentaires.",
    "heroImage": "/images/guides/aides-locales.png",
    "readTime": "6 min",
    "sections": [
      {
        "title": "L'échelon territorial de la transition",
        "content": "Si MaPrimeRénov' (Anah) est une aide nationale et uniforme, la France est une mosaïque d'initiatives locales. De nombreuses régions, départements, et communautés de communes (EPCI) ont voté des budgets pour encourager spécifiquement la géothermie sur leur territoire.\n\nLa géothermie est particulièrement subventionnée localement car elle favorise le travail des artisans locaux (foreurs, terrassiers) et exploite une ressource naturelle locale, s'inscrivant parfaitement dans les Plans Climat-Air-Énergie Territoriaux (PCAET)."
      },
      {
        "title": "Exemples concrets de subventions locales",
        "content": "Ces aides changent chaque année lors du vote des budgets, il faut donc toujours vérifier leur validité :\n\n- **La Région Auvergne-Rhône-Alpes** : Souvent très active sur le renouvelable (Fonds OSER, chèques transition).\n- **La Région Grand Est** : Propose régulièrement le programme 'Climaxion' qui subventionne fortement les études de faisabilité et l'installation de géothermie sur nappe (très courante en Alsace).\n- **Les Métropoles (ex: Grand Lyon, Bordeaux Métropole, Strasbourg)** : Proposent des 'Primes Éco-Habitat' allant de 500€ à 2 000€, souvent soumises à conditions de revenus ou à l'obligation de faire appel à un auditeur énergétique agréé par la métropole."
      },
      {
        "title": "Comment débusquer ces aides cachées ?",
        "content": "Les aides locales sont notoirement mal communiquées. Pour être sûr de ne rien rater :\n\n1. **L'Espace France Rénov'** : C'est le service public de la rénovation. Prenez rendez-vous (gratuitement) avec le conseiller France Rénov' de votre secteur. Il dispose de l'annuaire mis à jour en temps réel de toutes les subventions votées par votre mairie, votre département et votre région.\n2. **L'artisan RGE local** : Un bon chauffagiste implanté dans votre département depuis 10 ans connaît les dispositifs du conseil régional par cœur. C'est l'un des avantages de choisir un artisan proche de chez vous plutôt qu'un grand réseau national.\n3. **Le site officiel de l'ANIL** (Agence Nationale d'Information sur le Logement) maintient une carte interactive des aides locales."
      }
    ],
    "faq": [
      {
        "question": "Ces aides locales sont-elles cumulables avec MaPrimeRénov' ?",
        "answer": "Oui, dans la très grande majorité des cas. L'aide locale vient s'additionner à MaPrimeRénov' et aux CEE, tant que la somme totale de toutes ces aides ne dépasse pas le plafond d'écrêtement légal (souvent fixé entre 60% et 90% du devis total TTC selon vos revenus)."
      }
    ]
  },
  {
    "slug": "financer-geothermie-sans-apport",
    "title": "Financer sa Géothermie Sans Apport : Mode d'emploi",
    "description": "Découvrez les solutions d'ingénierie financière (Prêt avance mutation, mandat administratif) pour installer une géothermie à 25 000€ sans avancer un euro de trésorerie.",
    "heroImage": "/images/guides/sans-apport.png",
    "readTime": "8 min",
    "sections": [
      {
        "title": "Le problème de l'avance de trésorerie",
        "content": "L'un des plus grands freins à la transition énergétique est le décalage de trésorerie. L'État vous promet 16 000€ d'aides (MaPrimeRénov + CEE), ce qui est fantastique. Mais ces aides sont versées APRÈS l'achèvement des travaux.\n\nL'artisan, lui, vous demande souvent 30% d'acompte à la signature (soit 7 500€ sur un devis de 25 000€) pour commander le matériel et mobiliser le foreur, puis le solde à la livraison. Si vous n'avez pas d'épargne disponible, le projet est bloqué. Heureusement, il existe des solutions légales pour contourner ce mur."
      },
      {
        "title": "Solution 1 : Le Mandat Financier MaPrimeRénov'",
        "content": "C'est la solution la plus élégante. Lors de la création de votre dossier sur le site de l'Anah, vous pouvez désigner votre entreprise RGE comme 'Mandataire financier'.\n\n**Comment ça marche ?**\n- L'aide de l'État n'est plus versée sur votre compte bancaire, mais directement sur celui de l'artisan.\n- L'artisan déduit instantanément cette somme du bas de votre devis (remise sur facture).\n- Vous ne payez à l'artisan que le reste à charge.\n\n*Attention* : Tous les artisans n'acceptent pas d'être mandataires financiers, car cela leur fait porter le risque administratif et retarde leur propre trésorerie. C'est souvent l'apanage des grosses structures ou des courtiers en travaux énergétiques."
      },
      {
        "title": "Solution 2 : L'Avance MaPrimeRénov' (Ménages modestes)",
        "content": "Si vous êtes classé en revenus Très Modestes (Profil Bleu), l'Anah vous autorise à demander une avance de fonds avant même le début du chantier.\n\nUne fois votre dossier validé, et sur présentation d'un devis signé demandant un acompte, l'Anah peut vous verser par anticipation jusqu'à 70% du montant total de la prime accordée. Cela vous permet de régler l'acompte du foreur sans toucher à votre épargne."
      },
      {
        "title": "Solution 3 : Le financement bancaire couplé",
        "content": "Les banques spécialisées dans la transition énergétique (comme Domofinance, partenaire EDF) proposent des montages de crédit spécifiques :\n\n- **Le prêt relais subventions** : La banque vous prête la totalité du devis pour payer l'artisan. Vous remboursez le gros du capital d'un seul coup (sans pénalités) le jour où l'État vous verse MaPrimeRénov' et les CEE.\n- **L'Éco-PTZ différé** : Couplé à l'ingénierie financière, vous n'empruntez à taux zéro que le montant exact du reste à charge, et vous pouvez parfois négocier avec l'artisan un report de paiement de la subvention jusqu'à sa réception. Votre trésorerie personnelle (épargne) n'est jamais sollicitée."
      }
    ],
    "faq": [
      {
        "question": "Que se passe-t-il si l'État refuse de payer après les travaux ?",
        "answer": "C'est le risque majeur. C'est pourquoi vous ne devez JAMAIS signer de devis ni commencer les travaux tant que vous n'avez pas reçu l'accord formel et définitif d'engagement de l'Anah (MaPrimeRénov') et de l'obligé (CEE). Si vous respectez la chronologie et que l'artisan a les bons certificats RGE le jour de la signature, l'État a l'obligation de vous payer la somme notifiée dans la décision d'octroi."
      }
    ]
  }
];

export function getAllGuides() { return guides; }
