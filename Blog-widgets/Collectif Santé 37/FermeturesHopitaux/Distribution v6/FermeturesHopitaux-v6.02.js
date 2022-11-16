(function($) {
$.fn.mapAllBlogs = function() {

  var isOKNumber = data => {
  if (jQuery.type(data) === 'number' && data != '') return true;
  else return false;
}

  var optionsPlugIn = {
    data: {
      base: {"type": "FeatureCollection","name": "export_philippe_xy","crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:EPSG::3857" } },"features": [{ "type": "Feature", "properties": { "id": 808, "code_region": "ARA", "departement": "01", "nom_hopital": "CH Belley Sud", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Savoie Belley" }, "geometry": { "type": "Point", "coordinates": [ 632242.367855981574394, 5740172.164424667134881 ] } },{ "type": "Feature", "properties": { "id": 154, "code_region": "ARA", "departement": "01", "nom_hopital": "CHHB Nantua - 01", "suppressions": null, "menaces": "chirurgie réduit (autre)", "victoires": null, "ghi_nom": "CHHB", "ght_nom": "GHT Bresse-Haut-Bugey" }, "geometry": { "type": "Point", "coordinates": [ 624253.704338093288243, 5804354.147175060585141 ] } },{ "type": "Feature", "properties": { "id": 779, "code_region": "ARA", "departement": "01", "nom_hopital": "CHHB Oyonnax - 01", "suppressions": null, "menaces": "2015 : maternité réduit (autre)", "victoires": null, "ghi_nom": "CHHB", "ght_nom": "GHT Bresse-Haut-Bugey" }, "geometry": { "type": "Point", "coordinates": [ 626758.044713192270137, 5822068.218520149588585 ] } },{ "type": "Feature", "properties": { "id": 810, "code_region": "ARA", "departement": "01", "nom_hopital": "CH Monpensier Trévoux - 01", "suppressions": "1975 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Rhône Nord Beaujolais Dombes" }, "geometry": { "type": "Point", "coordinates": [ 531153.305801276117563, 5770888.551841285079718 ] } },{ "type": "Feature", "properties": { "id": 23, "code_region": "ARA", "departement": "01", "nom_hopital": "CHPH Hauteville-Lompnes - 01", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHPH", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 624612.715494530508295, 5776401.068819964304566 ] } },{ "type": "Feature", "properties": { "id": 155, "code_region": "ARA", "departement": "01", "nom_hopital": "CH-Récamier - Belley - 01", "suppressions": null, "menaces": "2009 : chirurgie menacé;2009 : médecine menacé;2008 : soins continus interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Savoie Belley" }, "geometry": { "type": "Point", "coordinates": [ 632842.546035085339099, 5742468.530296158976853 ] } },{ "type": "Feature", "properties": { "id": 778, "code_region": "ARA", "departement": "01", "nom_hopital": "CH Ruivet Meximieux - 01", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Bresse-Haut-Bugey" }, "geometry": { "type": "Point", "coordinates": [ 578209.946990936994553, 5765358.670416356064379 ] } },{ "type": "Feature", "properties": { "id": 784, "code_region": "ARA", "departement": "03", "nom_hopital": "CHCDB Tronget - 03", "suppressions": null, "menaces": "2013 : addictologie réduit (lits fermés)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Allier" }, "geometry": { "type": "Point", "coordinates": [ 346700.154419745900668, 5844543.581600614823401 ] } },{ "type": "Feature", "properties": { "id": 1, "code_region": "ARA", "departement": "03", "nom_hopital": "CH Jacques Lacarin Vichy - 03", "suppressions": null, "menaces": "2021 : pédopsychiatrie interrompu;2019 : psychiatrie infanto-juvénile menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Allier" }, "geometry": { "type": "Point", "coordinates": [ 382512.785998894949444, 5800117.217104152776301 ] } },{ "type": "Feature", "properties": { "id": 347, "code_region": "ARA", "departement": "03", "nom_hopital": "CH Montluçon - 03", "suppressions": "2021 : centre de santé fermé;2010 : ophtalmologie privatisé;chirurgie ophtalmologique fermé", "menaces": "2022 : pédiatrie menacé;2022 : urgences menacé;2021 : pôle mère-enfant menacé;2019 : SMUR menacé;2016 : psychiatrie menacé;2015 : médecine réduit (lits fermés);chirurgie menacé;maternité fusionné;psychiatrie réduit (autre)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Allier" }, "geometry": { "type": "Point", "coordinates": [ 290477.809805860568304, 5835312.312231201678514 ] } },{ "type": "Feature", "properties": { "id": 781, "code_region": "ARA", "departement": "03", "nom_hopital": "CH Montluçon-Néris-les-Bains - 03", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Allier" }, "geometry": { "type": "Point", "coordinates": [ 296287.667542152106762, 5826212.588404717855155 ] } },{ "type": "Feature", "properties": { "id": 782, "code_region": "ARA", "departement": "03", "nom_hopital": "CHMY Yzeure - 03", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHMY", "ght_nom": "GHT Allier" }, "geometry": { "type": "Point", "coordinates": [ 370288.710824120324105, 5872335.199093107134104 ] } },{ "type": "Feature", "properties": { "id": 783, "code_region": "ARA", "departement": "03", "nom_hopital": "CHS Yzeure - 03", "suppressions": null, "menaces": "2016 : psychiatrie réduit (lits fermés)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Allier" }, "geometry": { "type": "Point", "coordinates": [ 372693.411029692739248, 5873510.756168590858579 ] } },{ "type": "Feature", "properties": { "id": 141, "code_region": "ARA", "departement": "07", "nom_hopital": "CHAM Aubenas - 07", "suppressions": "2021 : gastro-entérologie fermé;2018 : IVG fermé;1998 : ophtalmologie fermé", "menaces": "2018 : pédiatrie interrompu;2016 : néonatalogie menacé;2010 : addictologie réduit (autre);2008 : réanimation transformé", "victoires": "2012 : ophtalmologie réouvert;2008 : soins de suite maintenu;2006 : néonatalogie maintenu;2005 : urgences maintenu", "ghi_nom": "CHAM – CH Ardèche Méridionale", "ght_nom": "GHT Sud Drôme Ardèche" }, "geometry": { "type": "Point", "coordinates": [ 489518.171081390697509, 5560790.878210566937923 ] } },{ "type": "Feature", "properties": { "id": 415, "code_region": "ARA", "departement": "07", "nom_hopital": "CHCA Joyeuse - 07", "suppressions": null, "menaces": "2020 : soins de suite et rééducation interrompu", "victoires": "2021 : soins de suite et rééducation réouvert", "ghi_nom": "CHCA", "ght_nom": "GHT Sud Drôme Ardèche" }, "geometry": { "type": "Point", "coordinates": [ 471903.375088443222921, 5539821.719654356129467 ] } },{ "type": "Feature", "properties": { "id": 755, "code_region": "ARA", "departement": "07", "nom_hopital": "CHCA Léopold Ollier Chambonas - 07", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHCA", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 460875.694450497627258, 5529672.43560512829572 ] } },{ "type": "Feature", "properties": { "id": 600, "code_region": "ARA", "departement": "07", "nom_hopital": "CH Tournon-sur-Rhône - 07", "suppressions": "2021 : IRM privatisé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Rhône Vercors Vivarais" }, "geometry": { "type": "Point", "coordinates": [ 541681.839895598590374, 5631370.786837532185018 ] } },{ "type": "Feature", "properties": { "id": 140, "code_region": "ARA", "departement": "07", "nom_hopital": "CHVA Privas - 07", "suppressions": "2022 : buanderie fermé;2019 : maternité fermé;2018 : addictologie fermé", "menaces": null, "victoires": "maternité maintenu", "ghi_nom": "CH Vals d'Ardèche", "ght_nom": "GHT Sud Drôme Ardèche" }, "geometry": { "type": "Point", "coordinates": [ 510230.985032345808577, 5579171.992646153084934 ] } },{ "type": "Feature", "properties": { "id": 806, "code_region": "ARA", "departement": "07", "nom_hopital": "Clinique des Cévennes Annonay - 07", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 519800.55192015710054, 5662690.810149017721415 ] } },{ "type": "Feature", "properties": { "id": 787, "code_region": "ARA", "departement": "07", "nom_hopital": "Clinique du Vivarais Aubenas - 07", "suppressions": "1998 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 488754.364938512560911, 5560593.845238132402301 ] } },{ "type": "Feature", "properties": { "id": 139, "code_region": "ARA", "departement": "07", "nom_hopital": "CMP P.C. Racamier Guilhérand-Granges - 07", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 541330.532929840963334, 5611406.767129382118583 ] } },{ "type": "Feature", "properties": { "id": 791, "code_region": "ARA", "departement": "07", "nom_hopital": "HLIBSAV Bourg-Saint-Andéol - 07", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Sud Drôme Ardèche" }, "geometry": { "type": "Point", "coordinates": [ 517281.711778782424517, 5523728.209722157567739 ] } },{ "type": "Feature", "properties": { "id": 790, "code_region": "ARA", "departement": "07", "nom_hopital": "HLIBSAV Viviers - 07", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Sud Drôme Ardèche" }, "geometry": { "type": "Point", "coordinates": [ 522000.329371381551027, 5540796.089057534001768 ] } },{ "type": "Feature", "properties": { "id": 788, "code_region": "ARA", "departement": "07", "nom_hopital": "HLIRL Largentière - 07", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "HLIRL", "ght_nom": "GHT Sud Drôme Ardèche" }, "geometry": { "type": "Point", "coordinates": [ 477713.92781563475728, 5549844.435757640749216 ] } },{ "type": "Feature", "properties": { "id": 789, "code_region": "ARA", "departement": "07", "nom_hopital": "HLIRL Rocher - 07", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "HLIRL", "ght_nom": "GHT Sud Drôme Ardèche" }, "geometry": { "type": "Point", "coordinates": [ 476958.266982454806566, 5554934.010205956175923 ] } },{ "type": "Feature", "properties": { "id": 906, "code_region": "ARA", "departement": "07", "nom_hopital": "HPDA Guilhérand-Granges - 07", "suppressions": null, "menaces": "2022 : maternité privée interrompu;2022 : urgences interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 543520.304830532521009, 5611213.309320424683392 ] } },{ "type": "Feature", "properties": { "id": 898, "code_region": "ARA", "departement": "07", "nom_hopital": "La Condamine Thueyts - 07", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 469892.173155907483306, 5570423.844874342903495 ] } },{ "type": "Feature", "properties": { "id": 138, "code_region": "ARA", "departement": "07", "nom_hopital": "Saint Agrève - 07", "suppressions": "2008 : maternité fermé", "menaces": "2013 : médecine menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 489792.89203584077768, 5622774.762278832495213 ] } },{ "type": "Feature", "properties": { "id": 137, "code_region": "ARA", "departement": "07", "nom_hopital": "Satillieu - 07", "suppressions": null, "menaces": "2017 : EHPAD menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 512996.353769399400335, 5645291.673129151575267 ] } },{ "type": "Feature", "properties": { "id": 350, "code_region": "ARA", "departement": "15", "nom_hopital": "CH H. Mondor Aurillac - 15", "suppressions": null, "menaces": "2019 : SMUR interrompu;2014 : réanimation réduit (autre);2013 : réanimation menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Cantal" }, "geometry": { "type": "Point", "coordinates": [ 271181.996833916753531, 5609938.893186494708061 ] } },{ "type": "Feature", "properties": { "id": 380, "code_region": "ARA", "departement": "15", "nom_hopital": "CH Mauriac - 15", "suppressions": "2017 : dialyse fermé;2009 : chirurgie fermé;2007 : maternité fermé", "menaces": "2017 : urgences menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Cantal" }, "geometry": { "type": "Point", "coordinates": [ 259642.142910255992319, 5655880.104243918322027 ] } },{ "type": "Feature", "properties": { "id": 793, "code_region": "ARA", "departement": "15", "nom_hopital": "CH Saint-Flour - 15", "suppressions": null, "menaces": "2017 : psychiatrie réduit (lits fermés)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Cantal" }, "geometry": { "type": "Point", "coordinates": [ 343542.23569355905056, 5626839.352161513641477 ] } },{ "type": "Feature", "properties": { "id": 792, "code_region": "ARA", "departement": "15", "nom_hopital": "CMC Tronquières Aurillac - 15", "suppressions": "2014 : réanimation fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 270188.315466347674374, 5607187.160168600268662 ] } },{ "type": "Feature", "properties": { "id": 149, "code_region": "ARA", "departement": "26", "nom_hopital": "CH Crest - 26", "suppressions": "2013 : chirurgie fermé;1992 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Rhône Vercors Vivarais" }, "geometry": { "type": "Point", "coordinates": [ 557400.558318412862718, 5578783.365861684083939 ] } },{ "type": "Feature", "properties": { "id": 685, "code_region": "ARA", "departement": "26", "nom_hopital": "CHDN Romans - 26", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Rhône Vercors Vivarais" }, "geometry": { "type": "Point", "coordinates": [ 558826.81974250508938, 5628096.337940552271903 ] } },{ "type": "Feature", "properties": { "id": 146, "code_region": "ARA", "departement": "26", "nom_hopital": "CHDN Saint-Vallier - 26", "suppressions": null, "menaces": "2021 : médecine physique et de réadaptation réduit (lits fermés);2018 : urgences interrompu;2017 : urgences de nuit réduit (autre);2014 : psychiatrie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Rhône Vercors Vivarais" }, "geometry": { "type": "Point", "coordinates": [ 536806.229894271818921, 5648491.200434789061546 ] } },{ "type": "Feature", "properties": { "id": 794, "code_region": "ARA", "departement": "26", "nom_hopital": "CHS Le Valmont Montéléger", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Rhône Vercors Vivarais" }, "geometry": { "type": "Point", "coordinates": [ 549243.828732188791037, 5598473.646150360815227 ] } },{ "type": "Feature", "properties": { "id": 795, "code_region": "ARA", "departement": "26", "nom_hopital": "CHS Le Valmont Montélimar - 26", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Rhône Vercors Vivarais" }, "geometry": { "type": "Point", "coordinates": [ 528681.248372569680214, 5551908.239872414618731 ] } },{ "type": "Feature", "properties": { "id": 147, "code_region": "ARA", "departement": "26", "nom_hopital": "CH Valence - 26", "suppressions": null, "menaces": "2019 : urgences menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Rhône Vercors Vivarais" }, "geometry": { "type": "Point", "coordinates": [ 546020.840647293021902, 5608000.427234304137528 ] } },{ "type": "Feature", "properties": { "id": 148, "code_region": "ARA", "departement": "26", "nom_hopital": "Die – 26", "suppressions": "2017 : chirurgie fermé;2017 : maternité fermé;2008 : chirurgie de nuit fermé", "menaces": "2018 : urgences de nuit menacé;2016 : chirurgie menacé;2016 : maternité menacé", "victoires": "2020 : maternité victoire;2015 : chirurgie d'urgence maintenu;2015 : maternité maintenu;2009 : chirurgie de nuit réouvert", "ghi_nom": "", "ght_nom": "GHT Rhône Vercors Vivarais" }, "geometry": { "type": "Point", "coordinates": [ 597962.861285673920065, 5583083.92690435051918 ] } },{ "type": "Feature", "properties": { "id": 773, "code_region": "ARA", "departement": "26", "nom_hopital": "GHPP Dieulefit - 26", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "GHPP", "ght_nom": "GHT Sud Drôme Ardèche" }, "geometry": { "type": "Point", "coordinates": [ 563820.377467643585987, 5547352.178899563848972 ] } },{ "type": "Feature", "properties": { "id": 772, "code_region": "ARA", "departement": "26", "nom_hopital": "GHPP Montélimar - 26", "suppressions": null, "menaces": "2021 : bloc opératoire interrompu", "victoires": null, "ghi_nom": "GHPP", "ght_nom": "GHT Sud Drôme Ardèche" }, "geometry": { "type": "Point", "coordinates": [ 526739.883879732922651, 5552065.923540056683123 ] } },{ "type": "Feature", "properties": { "id": 150, "code_region": "ARA", "departement": "26", "nom_hopital": "HL du Jonchier Buis-les-Baronnies - 26 ", "suppressions": "2008 : EHPAD fermé;2008 : soins de suite et rééducation fermé", "menaces": "2008 : soins de suite lourds menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Sud Drôme Ardèche" }, "geometry": { "type": "Point", "coordinates": [ 586808.936954507720657, 5508456.514633006416261 ] } },{ "type": "Feature", "properties": { "id": 276, "code_region": "ARA", "departement": "38", "nom_hopital": "CH La Mure - 38", "suppressions": "2004 : bloc opératoire fermé;2004 : chirurgie fermé;1995 : maternité fermé", "menaces": "2019 : soins de suite et rééducation interrompu;2019 : urgences de nuit menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Alpes-Dauphiné" }, "geometry": { "type": "Point", "coordinates": [ 645121.95993307849858, 5606534.367918752133846 ] } },{ "type": "Feature", "properties": { "id": 803, "code_region": "ARA", "departement": "38", "nom_hopital": "CH L. Hussel Vienne - 38", "suppressions": null, "menaces": "2021 : chirurgie réduit (lits fermés);2021 : médecine réduit (lits fermés);2021 : pédiatrie réduit (lits fermés)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Rhône Sud-Isère" }, "geometry": { "type": "Point", "coordinates": [ 543316.439487677067518, 5705921.829869993031025 ] } },{ "type": "Feature", "properties": { "id": 802, "code_region": "ARA", "departement": "38", "nom_hopital": "CH M. Perret Tullins - 38", "suppressions": "1987 : chirurgie fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Alpes-Dauphiné" }, "geometry": { "type": "Point", "coordinates": [ 611013.389889806159772, 5669323.592331196181476 ] } },{ "type": "Feature", "properties": { "id": 565, "code_region": "ARA", "departement": "38", "nom_hopital": "CHUGA Nord La Tronche Grenoble - 38", "suppressions": null, "menaces": "2021 : réanimation réduit (lits fermés);2021 : soins critiques réduit (lits fermés);2020 : urgences réduit (lits fermés)", "victoires": null, "ghi_nom": "CHUGA Grenoble Alpes", "ght_nom": "GHT Alpes-Dauphiné" }, "geometry": { "type": "Point", "coordinates": [ 639686.991334281628951, 5653048.433686099946499 ] } },{ "type": "Feature", "properties": { "id": 606, "code_region": "ARA", "departement": "38", "nom_hopital": "CHUGA Sud Échirolles Grenoble - 38", "suppressions": "2003 : maternité fermé", "menaces": "2021 : bloc opératoire menacé;2021 : hospitalisation filière orthopédie/traumatologie menacé;2021 : urgences menacé", "victoires": "2021 : bloc opératoire maintenu", "ghi_nom": "CHUGA Grenoble Alpes", "ght_nom": "GHT Alpes-Dauphiné" }, "geometry": { "type": "Point", "coordinates": [ 638086.214071408379823, 5644897.949558694846928 ] } },{ "type": "Feature", "properties": { "id": 151, "code_region": "ARA", "departement": "38", "nom_hopital": "CHUGA Voiron - 38", "suppressions": "2021 : SMUR de nuit fermé", "menaces": "2021 : SMUR interrompu;2021 : urgences interrompu", "victoires": null, "ghi_nom": "CHU Grenoble Alpes", "ght_nom": "GHT Alpes-Dauphiné" }, "geometry": { "type": "Point", "coordinates": [ 622728.983353407471441, 5679782.125591930001974 ] } },{ "type": "Feature", "properties": { "id": 313, "code_region": "ARA", "departement": "38", "nom_hopital": "CH Y. Touraine Pont-de-Beauvoisin - 38", "suppressions": "2008 : chirurgie orthopédique fermé;2003 : maternité fermé;chirurgie viscérale fermé", "menaces": "médecine menacé;radiologie menacé;réadaptation menacé;urgences menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Nord-Dauphiné" }, "geometry": { "type": "Point", "coordinates": [ 630554.566197781823575, 5706761.618935495615005 ] } },{ "type": "Feature", "properties": { "id": 801, "code_region": "ARA", "departement": "38", "nom_hopital": "Clinique Belledonne Grenoble - 38", "suppressions": "2014 : chirurgie cardiaque fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 641232.112334482371807, 5650914.633319108746946 ] } },{ "type": "Feature", "properties": { "id": 807, "code_region": "ARA", "departement": "38", "nom_hopital": "HL La-Tour-du-Pin - 38", "suppressions": null, "menaces": "soins de suite et rééducation interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Nord-Dauphiné" }, "geometry": { "type": "Point", "coordinates": [ 606536.341760988929309, 5711770.094914570450783 ] } },{ "type": "Feature", "properties": { "id": 162, "code_region": "ARA", "departement": "42", "nom_hopital": "CH du Giers Saint Chamond - 42", "suppressions": null, "menaces": "2021 : urgences interrompu;2021 : urgences réduit (autre);2018 : maternité menacé;2007 : réanimation menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT de la Loire" }, "geometry": { "type": "Point", "coordinates": [ 502665.14278283691965, 5696745.778757628984749 ] } },{ "type": "Feature", "properties": { "id": 160, "code_region": "ARA", "departement": "42", "nom_hopital": "CHF Feurs - 42", "suppressions": "2018 : cardiologie fermé;2018 : unité de soins périnatal fermé;2017 : stérilisation sous-traité;2015 : bloc opératoire fermé;2015 : chimiothérapie fermé;2015 : chirurgie fermé;2009 : psychiatrie fermé;2007 : maternité fermé", "menaces": "2022 : urgences interrompu;2021 : hospitalisation de courte durée menacé;2021 : ligne de garde menacé;2021 : urgences menacé;2018 : accueil nuit profonde menacé;2018 : SMUR menacé;2015 : biologie menacé;2015 : SMUR de nuit menacé", "victoires": null, "ghi_nom": "CHF Forez", "ght_nom": "GHT de la Loire" }, "geometry": { "type": "Point", "coordinates": [ 469941.51941827358678, 5739750.707810466177762 ] } },{ "type": "Feature", "properties": { "id": 161, "code_region": "ARA", "departement": "42", "nom_hopital": "CHF Montbrison - 42", "suppressions": "2008 : réanimation fermé", "menaces": "2019 : EHPAD menacé;2019 : maternité menacé;2019 : pédiatrie menacé;2016 : chirurgie réduit (lits fermés)", "victoires": null, "ghi_nom": "CHF Forez", "ght_nom": "GHT de la Loire" }, "geometry": { "type": "Point", "coordinates": [ 450803.52407937461976, 5718608.400112297385931 ] } },{ "type": "Feature", "properties": { "id": 163, "code_region": "ARA", "departement": "42", "nom_hopital": "CH Le Corbusier Firminy - 42", "suppressions": "2015 : urgences de nuit fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT de la Loire" }, "geometry": { "type": "Point", "coordinates": [ 477606.040448743849993, 5682804.809414818882942 ] } },{ "type": "Feature", "properties": { "id": 745, "code_region": "ARA", "departement": "42", "nom_hopital": "CHPR Pélussin - 42", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHPR", "ght_nom": "GHT Val Rhône Santé" }, "geometry": { "type": "Point", "coordinates": [ 520090.69051478424808, 5687493.89785872772336 ] } },{ "type": "Feature", "properties": { "id": 746, "code_region": "ARA", "departement": "42", "nom_hopital": "CHPR Saint-Pierre-de-Bœuf - 42", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHPR", "ght_nom": "GHT Val Rhône Santé" }, "geometry": { "type": "Point", "coordinates": [ 528473.701371140778065, 5681704.832802672870457 ] } },{ "type": "Feature", "properties": { "id": 159, "code_region": "ARA", "departement": "42", "nom_hopital": "CH Roanne - 42", "suppressions": "2019 : soins de suite et rééducation fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT de la Loire" }, "geometry": { "type": "Point", "coordinates": [ 454010.109171454329044, 5787203.271807446144521 ] } },{ "type": "Feature", "properties": { "id": 837, "code_region": "ARA", "departement": "42", "nom_hopital": "CHU Nord Saint-Étienne - 42", "suppressions": null, "menaces": "2022 : cancérologie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT de la Loire" }, "geometry": { "type": "Point", "coordinates": [ 485621.30926760652801, 5697653.244660739786923 ] } },{ "type": "Feature", "properties": { "id": 363, "code_region": "ARA", "departement": "42", "nom_hopital": "CM La Roseraie Montfaucon - 42", "suppressions": "2020 : réadaptation cardiaque fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 173791.935293088230537, 5572583.676758949644864 ] } },{ "type": "Feature", "properties": { "id": 805, "code_region": "ARA", "departement": "42", "nom_hopital": "HL F. Merlin Saint-Just-la-Pendue – 42", "suppressions": null, "menaces": "soins de suite et rééducation menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT de la Loire" }, "geometry": { "type": "Point", "coordinates": [ 471911.710653028741945, 5762893.468086548149586 ] } },{ "type": "Feature", "properties": { "id": 388, "code_region": "ARA", "departement": "43", "nom_hopital": "CH Brioude - 43", "suppressions": "1998 : maternité fermé", "menaces": "2013 : chirurgie menacé;2009 : soins longue durée réduit (autre)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Haute Loire" }, "geometry": { "type": "Point", "coordinates": [ 376598.592822229373269, 5668379.912895389832556 ] } },{ "type": "Feature", "properties": { "id": 16, "code_region": "ARA", "departement": "63", "nom_hopital": "CH Ambert - 63", "suppressions": "2013 : chirurgie fermé;2008 : chirurgie de nuit et week-end fermé;2008 : réanimation fermé;2006 : maternité fermé;1997 : psychiatrie fermé", "menaces": "2021 : SMUR menacé;2021 : urgences réduit (autre);2011 : bloc opératoire réduit (autre)", "victoires": "2021 : SMUR maintenu;2021 : urgences maintenu", "ghi_nom": "", "ght_nom": "GHT Allier" }, "geometry": { "type": "Point", "coordinates": [ 416438.69628905330319, 5708951.054500017315149 ] } },{ "type": "Feature", "properties": { "id": 785, "code_region": "ARA", "departement": "63", "nom_hopital": "CH É. Clémentel Enval - 63", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Allier" }, "geometry": { "type": "Point", "coordinates": [ 338823.07260552427033, 5765164.729294550605118 ] } },{ "type": "Feature", "properties": { "id": 72, "code_region": "ARA", "departement": "63", "nom_hopital": "CH Guy Thomas Riom - 63", "suppressions": null, "menaces": "2019 : EHPAD menacé;2018 : soins longue durée transformé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Allier" }, "geometry": { "type": "Point", "coordinates": [ 346444.807669219619129, 5762568.35490489564836 ] } },{ "type": "Feature", "properties": { "id": 786, "code_region": "ARA", "departement": "63", "nom_hopital": "CH Mont-Dore - 63", "suppressions": null, "menaces": "2015 : urgences menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Allier" }, "geometry": { "type": "Point", "coordinates": [ 312604.07130803540349, 5712478.589788798242807 ] } },{ "type": "Feature", "properties": { "id": 780, "code_region": "ARA", "departement": "63", "nom_hopital": "CHU Estaing Clermond-Ferrand - 63", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Allier" }, "geometry": { "type": "Point", "coordinates": [ 346284.631721004843712, 5746100.39396290294826 ] } },{ "type": "Feature", "properties": { "id": 71, "code_region": "ARA", "departement": "63", "nom_hopital": "CHU Montpied Clermont-Ferrand - 63", "suppressions": "2015 : dermatologie transféré;2015 : oncologie pédiatrique transféré", "menaces": "2018 : urgences menacé;2015 : neurologie réduit (autre)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Allier" }, "geometry": { "type": "Point", "coordinates": [ 344086.553819354623556, 5741528.402879500761628 ] } },{ "type": "Feature", "properties": { "id": 414, "code_region": "ARA", "departement": "63", "nom_hopital": "Tauves - 63", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 291897.927393173857126, 5710045.465250443667173 ] } },{ "type": "Feature", "properties": { "id": 377, "code_region": "ARA", "departement": "63", "nom_hopital": "Thiers - 63", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 391853.29121630161535, 5757423.937675701454282 ] } },{ "type": "Feature", "properties": { "id": 382, "code_region": "ARA", "departement": "63", "nom_hopital": "Youx - 63", "suppressions": null, "menaces": "2018 : centre médico-psycho pédagogique menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 313711.365753251884598, 5801515.565541827119887 ] } },{ "type": "Feature", "properties": { "id": 706, "code_region": "ARA", "departement": "69", "nom_hopital": "CH de Montgelas Givors - 69", "suppressions": null, "menaces": "urgences de nuit interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Rhône Sud-Isère" }, "geometry": { "type": "Point", "coordinates": [ 530460.146762199234217, 5716528.617617460899055 ] } },{ "type": "Feature", "properties": { "id": 509, "code_region": "ARA", "departement": "69", "nom_hopital": "CH Hôtel-Dieu Lyon - 69", "suppressions": "2009 : biologie et imagerie d'urgence fermé;2009 : centre IVG fermé;2009 : chirurgie fermé;2009 : maternité fermé;2009 : réanimation fermé", "menaces": "2010 : centre d'orthogénie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 538419.690014380612411, 5741739.21787378564477 ] } },{ "type": "Feature", "properties": { "id": 567, "code_region": "ARA", "departement": "69", "nom_hopital": "CH Le Vinatier Bron - 69 ", "suppressions": null, "menaces": "2020 : unité mère-bébé réduit (lits fermés)", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 545396.749911237624474, 5739071.41113109793514 ] } },{ "type": "Feature", "properties": { "id": 744, "code_region": "ARA", "departement": "69", "nom_hopital": "CHML Chazelles-sur-Lyon - 69", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHML", "ght_nom": "GHT de la Loire" }, "geometry": { "type": "Point", "coordinates": [ 488638.063998874626122, 5722349.76880515832454 ] } },{ "type": "Feature", "properties": { "id": 804, "code_region": "ARA", "departement": "69", "nom_hopital": "CHML Saint-Laurent-de-Chamousset - 69", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHML", "ght_nom": "GHT de la Loire" }, "geometry": { "type": "Point", "coordinates": [ 497255.551670536107849, 5738863.227224264293909 ] } },{ "type": "Feature", "properties": { "id": 743, "code_region": "ARA", "departement": "69", "nom_hopital": "CHML Saint-Symphorien sur Coise - 69", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHML ", "ght_nom": "GHT de la Loire" }, "geometry": { "type": "Point", "coordinates": [ 496338.410145857022144, 5721999.695428774692118 ] } },{ "type": "Feature", "properties": { "id": 751, "code_region": "ARA", "departement": "69", "nom_hopital": "CHNOTG Grandis - 69", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Rhône Nord Beaujolais Dombes" }, "geometry": { "type": "Point", "coordinates": [ 498463.646158840565477, 5787254.811886203475296 ] } },{ "type": "Feature", "properties": { "id": 170, "code_region": "ARA", "departement": "69", "nom_hopital": "CHNOTG Tarare - 69", "suppressions": "2012 : chirurgie fermé;2005 : pédiatrie fermé;2002 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "CHNOTG", "ght_nom": "GHT Rhône Nord Beaujolais Dombes" }, "geometry": { "type": "Point", "coordinates": [ 494097.27908687654417, 5762630.370632926933467 ] } },{ "type": "Feature", "properties": { "id": 809, "code_region": "ARA", "departement": "69", "nom_hopital": "CHNO Villefranche-sur-Saône - 69", "suppressions": null, "menaces": "2021 : urgences menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Rhône Nord Beaujolais Dombes" }, "geometry": { "type": "Point", "coordinates": [ 522716.366897277534008, 5781138.422474513761699 ] } },{ "type": "Feature", "properties": { "id": 172, "code_region": "ARA", "departement": "69", "nom_hopital": "CH Sainte-Foy-les-Lyon - 69", "suppressions": "chirurgie fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Rhône Centre" }, "geometry": { "type": "Point", "coordinates": [ 534300.650342522305436, 5738175.745254652574658 ] } },{ "type": "Feature", "properties": { "id": 813, "code_region": "ARA", "departement": "69", "nom_hopital": "HCL A. Charial Francheville - 69", "suppressions": "2018 : gériatrie fermé;2016 : soins de suite et rééducation transféré", "menaces": "2015 : gériatrie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Rhône Centre" }, "geometry": { "type": "Point", "coordinates": [ 529642.819729063659906, 5740902.931543212383986 ] } },{ "type": "Feature", "properties": { "id": 505, "code_region": "ARA", "departement": "69", "nom_hopital": "HCL Croix-Rousse Lyon - 69", "suppressions": null, "menaces": "2012 : centre IVG menacé", "victoires": null, "ghi_nom": "HCL", "ght_nom": "GHT Rhône Centre" }, "geometry": { "type": "Point", "coordinates": [ 537778.834568883758038, 5745435.630672758445144 ] } },{ "type": "Feature", "properties": { "id": 811, "code_region": "ARA", "departement": "69", "nom_hopital": "HCL Debrousse", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 535764.164004880469292, 5740489.788270274177194 ] } },{ "type": "Feature", "properties": { "id": 566, "code_region": "ARA", "departement": "69", "nom_hopital": "HCL Édouard Herriot Lyon - 69", "suppressions": null, "menaces": "2021 : parking réduit (autre);2020 : chirurgie réduit (lits fermés);2020 : gériatrie réduit (lits fermés);2020 : médecine réduit (lits fermés);post-urgence réduit (lits fermés)", "victoires": null, "ghi_nom": "HCL", "ght_nom": "GHT Rhône Centre" }, "geometry": { "type": "Point", "coordinates": [ 543531.886217855266295, 5739333.228485740721226 ] } },{ "type": "Feature", "properties": { "id": 507, "code_region": "ARA", "departement": "69", "nom_hopital": "HCL Henry Gabrielle Saint-Genis-Laval - 69", "suppressions": "2017 : centre de rééducation fonctionnelle transféré", "menaces": null, "victoires": "2020 : centre de rééducation fonctionnelle maintenu", "ghi_nom": "GHLS", "ght_nom": "GHT Rhône Centre" }, "geometry": { "type": "Point", "coordinates": [ 533316.14962825155817, 5730814.581408064812422 ] } },{ "type": "Feature", "properties": { "id": 508, "code_region": "ARA", "departement": "69", "nom_hopital": "HCL Lyon - 69", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "HCL", "ght_nom": "GHT Rhône Centre" }, "geometry": { "type": "Point", "coordinates": [ 537849.504586719791405, 5743700.319420054554939 ] } },{ "type": "Feature", "properties": { "id": 812, "code_region": "ARA", "departement": "69", "nom_hopital": "HCL Lyon-Sud Pierre-Bénite - 69", "suppressions": null, "menaces": "2021 : bloc opératoire réduit (autre);2021 : hospitalisation réduit (lits fermés)", "victoires": null, "ghi_nom": "HCL", "ght_nom": "GHT Rhône Centre" }, "geometry": { "type": "Point", "coordinates": [ 535280.802216962445527, 5732785.98221031203866 ] } },{ "type": "Feature", "properties": { "id": 431, "code_region": "ARA", "departement": "69", "nom_hopital": "HIA Desgenettes Lyon - 69", "suppressions": "ravitaillement sanitaire des armées fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 544431.75210177176632, 5738933.882136942818761 ] } },{ "type": "Feature", "properties": { "id": 171, "code_region": "ARA", "departement": "69", "nom_hopital": "L'Arbresle - 69", "suppressions": "2019 : centre périnatal fermé;1997 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 513910.214771318191197, 5754929.774138925597072 ] } },{ "type": "Feature", "properties": { "id": 900, "code_region": "ARA", "departement": "69", "nom_hopital": "Maternité Rillieux-le-Pape - 69", "suppressions": "2022 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 544040.689859811216593, 5751741.523921429179609 ] } },{ "type": "Feature", "properties": { "id": 511, "code_region": "ARA", "departement": "73", "nom_hopital": "CHAM Albertville – 73\r\n", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHAM", "ght_nom": "GHT Savoie-Belley" }, "geometry": { "type": "Point", "coordinates": [ 709033.421316927415319, 5727555.602598441764712 ] } },{ "type": "Feature", "properties": { "id": 165, "code_region": "ARA", "departement": "73", "nom_hopital": "CHAM Moûtiers – 73", "suppressions": "2015 : urgences fermé;2014 : chirurgie fermé;2011 : service saisonnier chirurgie orthopédique fermé;2008 : stérilisation privatisé;2006 : chirurgie viscérale fermé;2001 : maternité fermé", "menaces": "2018 : EHPAD menacé;2009 : chirurgie interrompu;chirurgie transformé;médecine menacé;soins intensifs réduit (autre)", "victoires": null, "ghi_nom": "CHAM", "ght_nom": "GHT Savoie-Belley" }, "geometry": { "type": "Point", "coordinates": [ 727420.500209650839679, 5698005.083693628199399 ] } },{ "type": "Feature", "properties": { "id": 164, "code_region": "ARA", "departement": "73", "nom_hopital": "CH-Bourg St Maurice - 73", "suppressions": null, "menaces": "2021 : chirurgie menacé;2015 : maternité menacé", "victoires": null, "ghi_nom": "CHBSM Haute Tarentaise", "ght_nom": "GHT Savoie-Belley" }, "geometry": { "type": "Point", "coordinates": [ 752975.450367112294771, 5719060.918492215685546 ] } },{ "type": "Feature", "properties": { "id": 168, "code_region": "ARA", "departement": "73", "nom_hopital": "CH Métropole Savoie Chambéry - 73", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 657887.669067326933146, 5710906.573660091497004 ] } },{ "type": "Feature", "properties": { "id": 167, "code_region": "ARA", "departement": "73", "nom_hopital": "CHMS Aix-les-Bains - 73", "suppressions": "2010 : maternité fermé;chirurgie fermé", "menaces": null, "victoires": null, "ghi_nom": "CHMS", "ght_nom": "GHT Savoie-Belley" }, "geometry": { "type": "Point", "coordinates": [ 657272.254553333274089, 5731978.517882881686091 ] } },{ "type": "Feature", "properties": { "id": 169, "code_region": "ARA", "departement": "73", "nom_hopital": "CHS Bassens - 73", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Savoie-Belley" }, "geometry": { "type": "Point", "coordinates": [ 661247.026073009357788, 5712957.45939979609102 ] } },{ "type": "Feature", "properties": { "id": 742, "code_region": "ARA", "departement": "73", "nom_hopital": "CHVM Modane - 73", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Savoie Belley" }, "geometry": { "type": "Point", "coordinates": [ 741916.991143573075533, 5653564.704670928418636 ] } },{ "type": "Feature", "properties": { "id": 741, "code_region": "ARA", "departement": "73", "nom_hopital": "CHVM Saint-Jean de Maurienne - 73", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Savoie Belley" }, "geometry": { "type": "Point", "coordinates": [ 705945.173229597508907, 5665431.114215055480599 ] } },{ "type": "Feature", "properties": { "id": 615, "code_region": "ARA", "departement": "73", "nom_hopital": "Clinique Générale de Savoie Chambéry - 73", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 658610.422810628544539, 5710606.58238197863102 ] } },{ "type": "Feature", "properties": { "id": 616, "code_region": "ARA", "departement": "73", "nom_hopital": "GCS Clin. Herbert Aix-les-Bains - 73", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 659204.356719769537449, 5730127.465338855050504 ] } },{ "type": "Feature", "properties": { "id": 798, "code_region": "ARA", "departement": "74", "nom_hopital": "CHAG Metz-Tessy Pringy - 74", "suppressions": "2016 : hospitalisation de psychiatrie infanto-juvénile fermé", "menaces": null, "victoires": null, "ghi_nom": "CHAG", "ght_nom": "GHT Haute Savoie-Pays de Gex" }, "geometry": { "type": "Point", "coordinates": [ 680983.258892498910427, 5769498.969935342669487 ] } },{ "type": "Feature", "properties": { "id": 799, "code_region": "ARA", "departement": "74", "nom_hopital": "CHAG Saint-Julien-en-Genevois – 74", "suppressions": "2016 : hospitalisation de psychiatrie infanto-juvénile fermé", "menaces": null, "victoires": null, "ghi_nom": "CHAG", "ght_nom": "GHT Haute Savoie-Pays de Gex" }, "geometry": { "type": "Point", "coordinates": [ 676769.851406827569008, 5803935.469323971308768 ] } },{ "type": "Feature", "properties": { "id": 284, "code_region": "ARA", "departement": "74", "nom_hopital": "Chamonix - 74", "suppressions": "chirurgie fermé", "menaces": "2008 : urgences réduit (autre)", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 763928.299335849005729, 5766627.870592994615436 ] } },{ "type": "Feature", "properties": { "id": 13, "code_region": "ARA", "departement": "74", "nom_hopital": "CH Camille Blanc Évian - 74", "suppressions": "2005 : chirurgie fermé;2005 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 733688.609320982475765, 5844891.907619976438582 ] } },{ "type": "Feature", "properties": { "id": 800, "code_region": "ARA", "departement": "74", "nom_hopital": "CH G. Deplante Rumilly - 74", "suppressions": "1993 : chirurgie fermé;1993 : urgences fermé;1975 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Haute Savoie-Pays de Gex" }, "geometry": { "type": "Point", "coordinates": [ 660886.482720833271742, 5758662.529214750044048 ] } },{ "type": "Feature", "properties": { "id": 797, "code_region": "ARA", "departement": "74", "nom_hopital": "CHIAL Annemasse - 74", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHIAL", "ght_nom": "GHT Léman Mont-Blanc" }, "geometry": { "type": "Point", "coordinates": [ 692567.575386166223325, 5811795.732437471859157 ] } },{ "type": "Feature", "properties": { "id": 796, "code_region": "ARA", "departement": "74", "nom_hopital": "CHIAL Bonneville-sur-Avre - 74", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHIAL", "ght_nom": "GHT Léman Mont-Blanc" }, "geometry": { "type": "Point", "coordinates": [ 714004.746482524671592, 5792888.114237163215876 ] } },{ "type": "Feature", "properties": { "id": 81, "code_region": "ARA", "departement": "74", "nom_hopital": "CMC Thonon -74", "suppressions": "2016 : psychiatrie transféré", "menaces": "2022 : psychiatrie réduit (lits fermés)", "victoires": "2016 : psychiatrie maintenu", "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 718339.307077251025476, 5837747.162758931517601 ] } },{ "type": "Feature", "properties": { "id": 826, "code_region": "BFC", "departement": "21", "nom_hopital": "CH Auxonne - 21", "suppressions": null, "menaces": "2015 : soins de suite et rééducation interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Côte d'Or - Haute Marne" }, "geometry": { "type": "Point", "coordinates": [ 599485.533930417266674, 5973502.193548292852938 ] } },{ "type": "Feature", "properties": { "id": 399, "code_region": "BFC", "departement": "21", "nom_hopital": "CHHCO Alise Sainte Reine - 21", "suppressions": "2018 : soins longue durée fermé", "menaces": null, "victoires": null, "ghi_nom": "CHHCO", "ght_nom": "GHT Côte d'Or - Haute Marne" }, "geometry": { "type": "Point", "coordinates": [ 499332.799425253935624, 6030335.041255752556026 ] } },{ "type": "Feature", "properties": { "id": 402, "code_region": "BFC", "departement": "21", "nom_hopital": "CHHCO Châtillon sur Seine - 21", "suppressions": "2018 : laboratoire d'analyses biologiques fermé;2009 : chirurgie fermé;2009 : soins continus fermé;2008 : maternité fermé", "menaces": "chimiothérapie menacé;médecine menacé;urgences menacé", "victoires": null, "ghi_nom": "CHHCO", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 509145.805674456467386, 6083672.561312944628298 ] } },{ "type": "Feature", "properties": { "id": 400, "code_region": "BFC", "departement": "21", "nom_hopital": "CHHCO Montbard - 21", "suppressions": "2018 : laboratoire fermé;2017 : maternité fermé;2017 : urgences fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Côte d'Or - Haute Marne" }, "geometry": { "type": "Point", "coordinates": [ 483177.636752049205825, 6044587.065072431229055 ] } },{ "type": "Feature", "properties": { "id": 401, "code_region": "BFC", "departement": "21", "nom_hopital": "CHHCO Vitteaux - 21", "suppressions": "2018 : médecine fermé", "menaces": null, "victoires": null, "ghi_nom": "CHHCO", "ght_nom": "GHT Côte d'Or - Haute Marne" }, "geometry": { "type": "Point", "coordinates": [ 505241.100560959486756, 6007121.617774510756135 ] } },{ "type": "Feature", "properties": { "id": 908, "code_region": "BFC", "departement": "21", "nom_hopital": "CHRU Mitterrand Dijon 21", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Côte D'Or-Haute Marne" }, "geometry": { "type": "Point", "coordinates": [ 564307.781957805505954, 5994543.833416842855513 ] } },{ "type": "Feature", "properties": { "id": 379, "code_region": "BFC", "departement": "21", "nom_hopital": "CH Semur-en-Auxois - 21", "suppressions": "2017 : pédiatrie gynécologique transféré", "menaces": "2017 : pédiatrie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Côte d'Or - Haute Marne" }, "geometry": { "type": "Point", "coordinates": [ 483776.052609621838201, 6023224.828709456138313 ] } },{ "type": "Feature", "properties": { "id": 825, "code_region": "BFC", "departement": "21", "nom_hopital": "CHS La Chartreuse Dijon - 21", "suppressions": null, "menaces": "2018 : psychiatrie réduit (autre);2017 : psychiatrie réduit (lits fermés);2016 : psychiatrie transformé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Côte d'Or - Haute Marne" }, "geometry": { "type": "Point", "coordinates": [ 558501.134502742323093, 5994545.534394063986838 ] } },{ "type": "Feature", "properties": { "id": 833, "code_region": "BFC", "departement": "21", "nom_hopital": "HCB Nuits-Saint-Georges - 21", "suppressions": null, "menaces": "2021 : gériatrie réduit (autre);2021 : médecine réduit (autre);2021 : soins de suite et rééducation réduit (autre)", "victoires": null, "ghi_nom": "HCB", "ght_nom": "GHT Sud Côte d’Or" }, "geometry": { "type": "Point", "coordinates": [ 550912.182759307441302, 5964018.326141496188939 ] } },{ "type": "Feature", "properties": { "id": 832, "code_region": "BFC", "departement": "21", "nom_hopital": "HCB - Philippe le Bon Beaune - 21", "suppressions": null, "menaces": "2021 : gériatrie réduit (autre);2021 : médecine réduit (autre);2021 : soins de suite et rééducation réduit (autre)", "victoires": null, "ghi_nom": "HCB", "ght_nom": "GHT Sud Côte d’Or" }, "geometry": { "type": "Point", "coordinates": [ 538080.316637720912695, 5947524.648634126409888 ] } },{ "type": "Feature", "properties": { "id": 834, "code_region": "BFC", "departement": "21", "nom_hopital": "HCB Seurre - 21", "suppressions": null, "menaces": "2021 : gériatrie réduit (autre);2021 : médecine réduit (autre);2021 : soins de suite et rééducation réduit (autre)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Sud Côte d’Or" }, "geometry": { "type": "Point", "coordinates": [ 572918.880930975079536, 5941381.022486560046673 ] } },{ "type": "Feature", "properties": { "id": 614, "code_region": "BFC", "departement": "25", "nom_hopital": "CHIHC Pontarlier - 25", "suppressions": null, "menaces": "2019 : urgences psychiatriques menacé;2018 : chirurgie réduit (lits fermés);2016 : chirurgie réduit (autre)", "victoires": null, "ghi_nom": "CHIHC", "ght_nom": "GHT Centre Franche Comté" }, "geometry": { "type": "Point", "coordinates": [ 707942.316766082891263, 5925929.648040337488055 ] } },{ "type": "Feature", "properties": { "id": 824, "code_region": "BFC", "departement": "25", "nom_hopital": "Ch Nappez Morteau - 25", "suppressions": "2022 : radiologie fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Centre Franche Comté" }, "geometry": { "type": "Point", "coordinates": [ 735397.901996701955795, 5951548.760245488025248 ] } },{ "type": "Feature", "properties": { "id": 473, "code_region": "BFC", "departement": "25", "nom_hopital": "CHRU Jean Minjoz Besançon - 25", "suppressions": "2022 : médecine interne fermé", "menaces": "2022 : neurochirurgie réduit (lits fermés);2021 : chirurgie digestive réduit (lits fermés);2021 : psychiatrie menacé;2021 : soins de suite et rééducation gériatrie réduit (lits fermés);2020 : soins de suite et rééducation interrompu;2020 : soins de suite et rééducation réduit (autre)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Centre Franche Comté" }, "geometry": { "type": "Point", "coordinates": [ 663710.205093510798179, 5978883.853988151997328 ] } },{ "type": "Feature", "properties": { "id": 822, "code_region": "BFC", "departement": "25", "nom_hopital": "CH Saint-Louis Ornans - 25", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Centre Franche Comté" }, "geometry": { "type": "Point", "coordinates": [ 683861.590738460421562, 5959566.806711376644671 ] } },{ "type": "Feature", "properties": { "id": 179, "code_region": "BFC", "departement": "25", "nom_hopital": "CHS Novillars - 25", "suppressions": "2021 : unité de jour psychiatrique fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Centre Franche Comté" }, "geometry": { "type": "Point", "coordinates": [ 682875.800997281912714, 5988855.159196905791759 ] } },{ "type": "Feature", "properties": { "id": 474, "code_region": "BFC", "departement": "25", "nom_hopital": "Clin. Portes du Jura Montbéliard - 25", "suppressions": "2015 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 757361.11756907729432, 6023614.700173549354076 ] } },{ "type": "Feature", "properties": { "id": 613, "code_region": "BFC", "departement": "25", "nom_hopital": "Clin. St Paul Pontarlier - 25", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 706869.296374343335629, 5926741.690136036835611 ] } },{ "type": "Feature", "properties": { "id": 612, "code_region": "BFC", "departement": "25", "nom_hopital": "Clin. St Vincent Besançon - 25", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 665631.36295684799552, 5981959.509446150623262 ] } },{ "type": "Feature", "properties": { "id": 416, "code_region": "BFC", "departement": "25", "nom_hopital": "CSSR Tilleroyes Besançon - 25", "suppressions": null, "menaces": "2019 : gériatrie réduit (lits fermés);2019 : soins de suite et rééducation réduit (lits fermés);soins de suite et rééducation interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Centre Franche Comté" }, "geometry": { "type": "Point", "coordinates": [ 663675.566103205201216, 5980457.742603143677115 ] } },{ "type": "Feature", "properties": { "id": 910, "code_region": "BFC", "departement": "25", "nom_hopital": "EHPAD du Larmont - Doubs - 25", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHIHC", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 705405.057077273260802, 5929009.707670595496893 ] } },{ "type": "Feature", "properties": { "id": 915, "code_region": "BFC", "departement": "25", "nom_hopital": "Ex-Clinique Lucine Audincourt - 25", "suppressions": "2014 : maternité fermé;2014 : périnatalité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 761566.824838019907475, 6021035.281281766481698 ] } },{ "type": "Feature", "properties": { "id": 823, "code_region": "BFC", "departement": "25", "nom_hopital": "HL Saint-Louis Vuillafans - 25", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Centre Franche Comté" }, "geometry": { "type": "Point", "coordinates": [ 692187.600865259999409, 5952811.988326817750931 ] } },{ "type": "Feature", "properties": { "id": 178, "code_region": "BFC", "departement": "25", "nom_hopital": "HNFC Mittan Montbéliard - 25", "suppressions": "2012 : chirurgie traumatique fermé;2007 : psychiatrie transféré;diabétologie fermé;ophtalmologie fermé;pédiatrie fermé", "menaces": "2015 : urgences pédiatriques réduit (autre);2014 : urgences menacé", "victoires": null, "ghi_nom": "HNFC", "ght_nom": "GHT Nord Franche Comté" }, "geometry": { "type": "Point", "coordinates": [ 755518.949580330401659, 6028241.427711566910148 ] } },{ "type": "Feature", "properties": { "id": 57, "code_region": "BFC", "departement": "39", "nom_hopital": "Centre Truchot - Dole - 39", "suppressions": null, "menaces": "EHPAD fusionné", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 609134.429403394460678, 5955214.995495297014713 ] } },{ "type": "Feature", "properties": { "id": 769, "code_region": "BFC", "departement": "39", "nom_hopital": "CHIPR Arbois - 39", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHIPR", "ght_nom": "GHT Jura" }, "geometry": { "type": "Point", "coordinates": [ 642950.541263587889262, 5925678.069016394205391 ] } },{ "type": "Feature", "properties": { "id": 776, "code_region": "BFC", "departement": "39", "nom_hopital": "CHIPR Poligny - 39", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHIPR", "ght_nom": "GHT Jura" }, "geometry": { "type": "Point", "coordinates": [ 635444.701507512596436, 5914739.83617802336812 ] } },{ "type": "Feature", "properties": { "id": 768, "code_region": "BFC", "departement": "39", "nom_hopital": "CHIPR Salins-les-Bains - 39", "suppressions": "1999 : urgences fermé", "menaces": null, "victoires": null, "ghi_nom": "CHIPR", "ght_nom": "GHT Jura" }, "geometry": { "type": "Point", "coordinates": [ 654200.260798145318404, 5932307.618007763288915 ] } },{ "type": "Feature", "properties": { "id": 152, "code_region": "BFC", "departement": "39", "nom_hopital": "CHJS Champagnole - 39", "suppressions": "2022 : SMUR fermé;2022 : soins non programmés fermé;2021 : soins de suite et rééducation fermé;2009 : chirurgie transféré", "menaces": "2019 : urgences de nuit interrompu;2018 : médecine réduit (lits fermés);2013 : SMUR menacé;2013 : urgences menacé", "victoires": null, "ghi_nom": "CHJS", "ght_nom": "GHT Jura" }, "geometry": { "type": "Point", "coordinates": [ 657682.130014297901653, 5900680.497187385335565 ] } },{ "type": "Feature", "properties": { "id": 418, "code_region": "BFC", "departement": "39", "nom_hopital": "CHJS Lons le Saulnier - 39", "suppressions": "2021 : dialyse privatisé", "menaces": "2019 : SMUR réduit (autre);urgences réduit (autre)", "victoires": null, "ghi_nom": "CHJS", "ght_nom": "GHT Jura" }, "geometry": { "type": "Point", "coordinates": [ 617854.829183756955899, 5889462.00583393778652 ] } },{ "type": "Feature", "properties": { "id": 331, "code_region": "BFC", "departement": "39", "nom_hopital": "CHJS Orgelet - 39", "suppressions": null, "menaces": "2014 : moyen séjour menacé", "victoires": null, "ghi_nom": "CHJS", "ght_nom": "GHT Jura" }, "geometry": { "type": "Point", "coordinates": [ 624016.310005483217537, 5863254.218192405067384 ] } },{ "type": "Feature", "properties": { "id": 827, "code_region": "BFC", "departement": "39", "nom_hopital": "CH Léon Bérard Morez - 39", "suppressions": null, "menaces": "médecine menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Jura" }, "geometry": { "type": "Point", "coordinates": [ 669855.696173850563355, 5866101.999624081887305 ] } },{ "type": "Feature", "properties": { "id": 153, "code_region": "BFC", "departement": "39", "nom_hopital": "CH L. Jallion Saint-Claude - 39", "suppressions": "2021 : SMUR fermé;2018 : chirurgie fermé;2018 : maternité fermé;2018 : pédiatrie fermé", "menaces": "2021 : soins de suite et rééducation réduit (lits fermés);2019 : médecine menacé", "victoires": "2022 : unité de surveillance de courte durée réouvert", "ghi_nom": "", "ght_nom": "GHT Jura" }, "geometry": { "type": "Point", "coordinates": [ 653082.191536395694129, 5842337.26998460944742 ] } },{ "type": "Feature", "properties": { "id": 495, "code_region": "BFC", "departement": "39", "nom_hopital": "CH Pasteur - Dole - 39", "suppressions": "2022 : chirurgie fermé;2018 : cardiologie fermé;2017 : SMUR de nuit fermé;2014 : réanimation fermé", "menaces": "2022 : urgences de nuit interrompu;2021 : chirurgie réduit (autre);2019 : chirurgie menacé;2018 : pneumologie réduit (lits fermés);2018 : pneumologie réduit (autre);2017 : soins intensifs en cardiologie interrompu", "victoires": "2022 : urgences de nuit maintenu", "ghi_nom": "", "ght_nom": "GHT Centre Franche Comté" }, "geometry": { "type": "Point", "coordinates": [ 609248.550835802801885, 5955619.547262063249946 ] } },{ "type": "Feature", "properties": { "id": 588, "code_region": "BFC", "departement": "39", "nom_hopital": "CHS du Jura - Monmirey - 39", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHS du Jura - Centre Brantus", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 614520.687050443142653, 5977552.364611179567873 ] } },{ "type": "Feature", "properties": { "id": 496, "code_region": "BFC", "departement": "39", "nom_hopital": "CHS Saint-Ylie - Dole - 39", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Centre Franche Comté" }, "geometry": { "type": "Point", "coordinates": [ 607620.855574063956738, 5953524.96516852453351 ] } },{ "type": "Feature", "properties": { "id": 54, "code_region": "BFC", "departement": "58", "nom_hopital": "Centre 15 de la Nièvre - 58", "suppressions": "appel 115 transféré", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 351293.635344497859478, 5942043.617979445494711 ] } },{ "type": "Feature", "properties": { "id": 501, "code_region": "BFC", "departement": "58", "nom_hopital": "CHAN Pierre Bérégovoy Nevers - 58", "suppressions": null, "menaces": "2022 : maternité interrompu", "victoires": null, "ghi_nom": "CHAN", "ght_nom": "GHT Nièvre" }, "geometry": { "type": "Point", "coordinates": [ 347614.247794188326225, 5938729.187323719263077 ] } },{ "type": "Feature", "properties": { "id": 381, "code_region": "BFC", "departement": "58", "nom_hopital": "CH Château Chinon - 58", "suppressions": null, "menaces": "2021 : médecine menacé;2021 : soins de suite et rééducation menacé;2021 : UAPS menacé;2021 : USSD menacé;2018 : médecine réduit (autre)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Nièvre" }, "geometry": { "type": "Point", "coordinates": [ 438045.569311222061515, 5952051.309290087781847 ] } },{ "type": "Feature", "properties": { "id": 383, "code_region": "BFC", "departement": "58", "nom_hopital": "CH Clamecy - 58", "suppressions": "2018 : urgences de nuit fermé;2009 : chirurgie fermé;2008 : maternité fermé", "menaces": "2022 : urgences réduit (autre);2021 : accueil urgences réduit (autre);2021 : SMUR réduit (autre);2018 : urgences menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Sud Yonne Haut-Nivernais" }, "geometry": { "type": "Point", "coordinates": [ 390656.095629190269392, 6016437.55025593098253 ] } },{ "type": "Feature", "properties": { "id": 285, "code_region": "BFC", "departement": "58", "nom_hopital": "CH Cosne - Cours sur Loire - 58", "suppressions": "2018 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Nièvre" }, "geometry": { "type": "Point", "coordinates": [ 325830.420902433688752, 6010220.183306446298957 ] } },{ "type": "Feature", "properties": { "id": 387, "code_region": "BFC", "departement": "58", "nom_hopital": "CH Decize – 58", "suppressions": "2017 : stérilisation transféré;2015 : laboratoire transféré;plateau technique fermé", "menaces": "2018 : chirurgie conventionnelle réduit (lits fermés);2017 : urgences de nuit menacé;centre IVG menacé", "victoires": "1998 : chirurgie maintenu", "ghi_nom": "", "ght_nom": "GHT Nièvre" }, "geometry": { "type": "Point", "coordinates": [ 384407.791457079350948, 5913086.297757104970515 ] } },{ "type": "Feature", "properties": { "id": 835, "code_region": "BFC", "departement": "58", "nom_hopital": "CH Henri Dunant La-Charité-sur-Loire - 58", "suppressions": "2022 : médecine fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT de la Nièvre" }, "geometry": { "type": "Point", "coordinates": [ 335748.932247102318797, 5972200.076525111682713 ] } },{ "type": "Feature", "properties": { "id": 828, "code_region": "BFC", "departement": "58", "nom_hopital": "Clinique Cosne-Cours-sur-Loire – 58", "suppressions": "2019 : chirurgie fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 325889.59266281867167, 6008287.62613823171705 ] } },{ "type": "Feature", "properties": { "id": 829, "code_region": "BFC", "departement": "58", "nom_hopital": "CLS Saint-Pierre-le-Moûtier - 58", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT de la Nièvre" }, "geometry": { "type": "Point", "coordinates": [ 346984.981734164059162, 5908323.57501763664186 ] } },{ "type": "Feature", "properties": { "id": 28, "code_region": "BFC", "departement": "70", "nom_hopital": "HD site de Gray 70", "suppressions": "2002 : chirurgie fermé;2002 : maternité fermé", "menaces": "2021 : unité de soins critiques interrompu;2021 : urgences réduit (autre);2017 : urgences menacé", "victoires": null, "ghi_nom": "HD 70", "ght_nom": "GHT de la Haute-Saône" }, "geometry": { "type": "Point", "coordinates": [ 622532.318441577372141, 6015134.723825362510979 ] } },{ "type": "Feature", "properties": { "id": 277, "code_region": "BFC", "departement": "70", "nom_hopital": "HD site de Lure 70", "suppressions": "2021 : radiologie privatisé;2013 : laboratoire fermé;2004 : chirurgie fermé;2003 : cardiologie fermé;2003 : urgences de nuit fermé;2001 : soins intensifs fermé;1996 : maternité fermé", "menaces": "2022 : urgences réduit (autre);2021 : neurologie menacé;2020 : SMUR menacé;2020 : urgences consultations non programmées réduit (autre);2011 : urgences de soir menacé", "victoires": "2013 : SMUR maintenu;2013 : urgences victoire;2006 : SMUR réouvert;2006 : urgences maintenu;1982 : maternité maintenu", "ghi_nom": "HD 70", "ght_nom": "GHT de la Haute-Saône" }, "geometry": { "type": "Point", "coordinates": [ 723833.442981519270688, 6054201.42285801563412 ] } },{ "type": "Feature", "properties": { "id": 558, "code_region": "BFC", "departement": "70", "nom_hopital": "HD site de Luxeuil 70", "suppressions": "2020 : urgences consultations non programmées fermé;2019 : SMUR fermé;2013 : laboratoire fermé;2005 : chirurgie fermé;2004 : ORL fermé;2003 : maternité fermé;2003 : urgences de nuit fermé;1996 : cardiologie fermé", "menaces": "2015 : médecine réduit (autre);2014 : SMUR interrompu;2011 : SMUR menacé;2011 : urgences de soir menacé", "victoires": "2013 : SMUR maintenu;2006 : SMUR réouvert;2006 : urgences maintenu", "ghi_nom": "", "ght_nom": "GHT de la Haute-Saône" }, "geometry": { "type": "Point", "coordinates": [ 710226.448804538697004, 6077312.481915850192308 ] } },{ "type": "Feature", "properties": { "id": 238, "code_region": "BFC", "departement": "70", "nom_hopital": "HD site de Vesoul 70", "suppressions": null, "menaces": "2022 : cardiologie menacé;2020 : ligne SMUR interrompu;2017 : SMUR menacé;2013 : ligne SMUR menacé", "victoires": null, "ghi_nom": "GH70", "ght_nom": "GHT de la Haute-Saône" }, "geometry": { "type": "Point", "coordinates": [ 685087.662230327026919, 6043817.176762672141194 ] } },{ "type": "Feature", "properties": { "id": 79, "code_region": "BFC", "departement": "71", "nom_hopital": "CH Autun - 71", "suppressions": "bloc opératoire privatisé", "menaces": "2021 : soins longue durée réduit (lits fermés);2020 : maternité menacé;2011 : chirurgie menacé;2011 : urgences de nuit menacé", "victoires": "2022 : maternité maintenu", "ghi_nom": "", "ght_nom": "GHT Saône-et-Loire Bresse Morvan" }, "geometry": { "type": "Point", "coordinates": [ 478812.395846470550168, 5934322.834143739193678 ] } },{ "type": "Feature", "properties": { "id": 216, "code_region": "BFC", "departement": "71", "nom_hopital": "CH Bouveri-Galuzot Montceau les Mines - 71", "suppressions": "2009 : chirurgie urologie et viscérale fermé;2009 : maternité fermé;2009 : urgences pédiatriques fermé;chirurgie fermé;pédiatrie fermé", "menaces": "2022 : oncologie menacé;2021 : oncologie réduit (autre);2021 : SMUR menacé;2015 : urgences menacé;2007 : soins intensifs transformé;cardiologie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Saône-et-Loire Bresse Morvan" }, "geometry": { "type": "Point", "coordinates": [ 482298.240394718770403, 5884975.650645374320447 ] } },{ "type": "Feature", "properties": { "id": 757, "code_region": "BFC", "departement": "71", "nom_hopital": "CHC Corsin Tramayes - 71", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHC", "ght_nom": "GHT Bourgogne Méridionale" }, "geometry": { "type": "Point", "coordinates": [ 512270.036918379715644, 5829434.124209619127214 ] } },{ "type": "Feature", "properties": { "id": 831, "code_region": "BFC", "departement": "71", "nom_hopital": "CH Chagny - 71", "suppressions": "1975 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Saône-et-Loire Bresse Morvan" }, "geometry": { "type": "Point", "coordinates": [ 528801.375253010657616, 5927458.93979215156287 ] } },{ "type": "Feature", "properties": { "id": 756, "code_region": "BFC", "departement": "71", "nom_hopital": "CHC Hôtel-Dieu Cluny - 71", "suppressions": "1989 : maternité fermé;chirurgie fermé", "menaces": null, "victoires": null, "ghi_nom": "CHC", "ght_nom": "GHT Bourgogne Méridionale" }, "geometry": { "type": "Point", "coordinates": [ 518751.312362625962123, 5849601.252399228513241 ] } },{ "type": "Feature", "properties": { "id": 821, "code_region": "BFC", "departement": "71", "nom_hopital": "CHFA Bourbon-Lancy - 71", "suppressions": "2021 : médecine fermé;2021 : soins de suite fermé;électro-radiologie fermé;maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Bourgogne Méridionale" }, "geometry": { "type": "Point", "coordinates": [ 419171.91697970032692, 5879938.71407166402787 ] } },{ "type": "Feature", "properties": { "id": 643, "code_region": "BFC", "departement": "71", "nom_hopital": "CH La Guiche", "suppressions": "2021 : cuisine transféré", "menaces": "2021 : soins de suite et rééducation réduit (autre)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Saône-et-Loire Bresse Morvan" }, "geometry": { "type": "Point", "coordinates": [ 495368.954382579366211, 5868071.175185844302177 ] } },{ "type": "Feature", "properties": { "id": 215, "code_region": "BFC", "departement": "71", "nom_hopital": "CH Le Creusot - 71", "suppressions": "2014 : pôle mère-enfant fermé", "menaces": "2022 : maternité menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Saône-et-Loire Bresse Morvan" }, "geometry": { "type": "Point", "coordinates": [ 495188.350646522419993, 5910238.777559156529605 ] } },{ "type": "Feature", "properties": { "id": 830, "code_region": "BFC", "departement": "71", "nom_hopital": "CH Les marronniers Toulon-sur-Arroux – 71", "suppressions": "2021 : cuisine fermé", "menaces": "2021 : soins de suite et rééducation menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Saône-et-Loire Bresse Morvan" }, "geometry": { "type": "Point", "coordinates": [ 460580.814179226756096, 5891941.89554323349148 ] } },{ "type": "Feature", "properties": { "id": 819, "code_region": "BFC", "departement": "71", "nom_hopital": "CH Mâcon - 71", "suppressions": null, "menaces": "2021 : psychiatrie réduit (autre)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Bourgogne Méridionale" }, "geometry": { "type": "Point", "coordinates": [ 535868.23824123677332, 5831125.986215917393565 ] } },{ "type": "Feature", "properties": { "id": 750, "code_region": "BFC", "departement": "71", "nom_hopital": "CHPCB La Clayette - 71", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHPCB", "ght_nom": "GHT Bourgogne Méridionale" }, "geometry": { "type": "Point", "coordinates": [ 479293.299554873374291, 5826749.860607790760696 ] } },{ "type": "Feature", "properties": { "id": 749, "code_region": "BFC", "departement": "71", "nom_hopital": "CHPCB Paray-le-Monial - 71", "suppressions": "2012 : chirurgie fermé", "menaces": "bloc opératoire menacé", "victoires": null, "ghi_nom": "CHPCB", "ght_nom": "GHT Bourgogne Méridionale" }, "geometry": { "type": "Point", "coordinates": [ 457470.471609614789486, 5855071.620076708495617 ] } },{ "type": "Feature", "properties": { "id": 723, "code_region": "BFC", "departement": "71", "nom_hopital": "CHS Sevrey - 71", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Saône-et-Loire Bresse Morvan" }, "geometry": { "type": "Point", "coordinates": [ 538070.473711721948348, 5897454.604697410017252 ] } },{ "type": "Feature", "properties": { "id": 820, "code_region": "BFC", "departement": "71", "nom_hopital": "CHTR - Tournus 71", "suppressions": null, "menaces": "2022 : médecine menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Bourgogne Méridionale" }, "geometry": { "type": "Point", "coordinates": [ 544635.33154559507966, 5871778.584187977947295 ] } },{ "type": "Feature", "properties": { "id": 420, "code_region": "BFC", "departement": "71", "nom_hopital": "CHWM Chalon-sur-Saône - 71", "suppressions": null, "menaces": "2021 : chirurgie menacé;2017 : centre d'angioplastie menacé;2017 : coronographie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Saône-et-Loire Bresse Morvan" }, "geometry": { "type": "Point", "coordinates": [ 538863.614286735421047, 5905757.786861745640635 ] } },{ "type": "Feature", "properties": { "id": 14, "code_region": "BFC", "departement": "71", "nom_hopital": "Clinique La Roseraie Paray-le-Monial - 71", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 457392.138197927852161, 5855155.329269090667367 ] } },{ "type": "Feature", "properties": { "id": 602, "code_region": "BFC", "departement": "71", "nom_hopital": "SSR Boucicaut Chalon - 71", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 539059.313058771193027, 5905431.701386442407966 ] } },{ "type": "Feature", "properties": { "id": 232, "code_region": "BFC", "departement": "89", "nom_hopital": "CH Auxerre - 89", "suppressions": null, "menaces": "2020 : chirurgie réduit (lits fermés);2019 : chirurgie menacé;2016 : hospitalisation de courte durée interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Sud Yonne Haut-Nivernais" }, "geometry": { "type": "Point", "coordinates": [ 395785.535015003872104, 6074363.192941916175187 ] } },{ "type": "Feature", "properties": { "id": 392, "code_region": "BFC", "departement": "89", "nom_hopital": "CH Avallon - 89", "suppressions": "2004 : maternité fermé;1999 : réanimation fermé;1996 : pédiatrie fermé;laboratoire fermé", "menaces": "2011 : chirurgie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Sud Yonne Haut-Nivernais" }, "geometry": { "type": "Point", "coordinates": [ 434633.029269497608766, 6022428.693168144673109 ] } },{ "type": "Feature", "properties": { "id": 396, "code_region": "BFC", "departement": "89", "nom_hopital": "CH du Tonnerrois - Tonnerre - 89", "suppressions": "2017 : urgences de nuit fermé;2014 : blanchisserie fermé;2006 : chirurgie fermé;1995 : ORL fermé;1992 : maternité fermé;1992 : parondotologie fermé", "menaces": "2021 : urgences de nuit menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Sud Yonne Haut-Nivernais" }, "geometry": { "type": "Point", "coordinates": [ 442801.397531046241056, 6082999.835341270081699 ] } },{ "type": "Feature", "properties": { "id": 393, "code_region": "BFC", "departement": "89", "nom_hopital": "CH Joigny - 89", "suppressions": "1999 : chirurgie fermé;1999 : maternité fermé;1999 : réanimation fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Nord Yonne" }, "geometry": { "type": "Point", "coordinates": [ 378031.421711462375242, 6103485.020309154875576 ] } },{ "type": "Feature", "properties": { "id": 231, "code_region": "BFC", "departement": "89", "nom_hopital": "CH Migennes - 89", "suppressions": "1994 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Nord Yonne" }, "geometry": { "type": "Point", "coordinates": [ 392098.178516069659963, 6101058.654041566886008 ] } },{ "type": "Feature", "properties": { "id": 574, "code_region": "BFC", "departement": "89", "nom_hopital": "HL Villeneuve-sur-Yonne - 89", "suppressions": "2021 : EHPAD fermé", "menaces": "2021 : soins de suite et rééducation réduit (lits fermés)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Nord Yonne" }, "geometry": { "type": "Point", "coordinates": [ 366816.166853882372379, 6120242.980969055555761 ] } },{ "type": "Feature", "properties": { "id": 8, "code_region": "BFC", "departement": "90", "nom_hopital": "CHBM Site Belfort - 90", "suppressions": "2019 : centre de prélèvements transféré;2015 : centre 15 fermé;2013 : urgences fermé;2011 : neurologie transféré;oncologie fermé", "menaces": "2011 : traumatologie fusionné;2009 : blanchisserie réduit (autre);pharmacie menacé;restauration menacé", "victoires": null, "ghi_nom": "HNFC", "ght_nom": "GHT Nord Franche Comté" }, "geometry": { "type": "Point", "coordinates": [ 763178.285562440520152, 6047637.562970315106213 ] } },{ "type": "Feature", "properties": { "id": 623, "code_region": "BFC", "departement": "90", "nom_hopital": "HNFC site Belfort - 90", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "HNFC", "ght_nom": "GHT Nord Franche Comté" }, "geometry": { "type": "Point", "coordinates": [ 761821.873998280614614, 6047457.523345924913883 ] } },{ "type": "Feature", "properties": { "id": 622, "code_region": "BFC", "departement": "90", "nom_hopital": "HNFC Site Pierre Engel Bavilliers - 90", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "HNFC", "ght_nom": "GHT Nord Franche Comté" }, "geometry": { "type": "Point", "coordinates": [ 761554.415552709135227, 6042959.949277958832681 ] } },{ "type": "Feature", "properties": { "id": 620, "code_region": "BFC", "departement": "90", "nom_hopital": "HNFC Trévenans - 90", "suppressions": null, "menaces": "2021 : urgences menacé", "victoires": null, "ghi_nom": "CHNFC", "ght_nom": "GHT Nord Franche Comté" }, "geometry": { "type": "Point", "coordinates": [ 765108.690028350916691, 6036705.965076887980103 ] } },{ "type": "Feature", "properties": { "id": 333, "code_region": "BRE", "departement": "22", "nom_hopital": "CHCB Loudéac - 22", "suppressions": "2000 : maternité fermé;soins de suite et rééducation fermé", "menaces": "cardiologie réduit (lits fermés);médecine réduit (lits fermés)", "victoires": null, "ghi_nom": "CHCB", "ght_nom": "GHT Centre Bretagne" }, "geometry": { "type": "Point", "coordinates": [ -306614.302141512918752, 6136721.346109285950661 ] } },{ "type": "Feature", "properties": { "id": 56, "code_region": "BRE", "departement": "22", "nom_hopital": "CH Guingamp - 22", "suppressions": "2021 : maternité privatisé", "menaces": "2022 : chirurgie menacé;2018 : maternité menacé", "victoires": "2021 : chirurgie maintenu;2018 : maternité maintenu", "ghi_nom": "", "ght_nom": "GHT d'Armor" }, "geometry": { "type": "Point", "coordinates": [ -350444.69941188080702, 6200733.786060427315533 ] } },{ "type": "Feature", "properties": { "id": 299, "code_region": "BRE", "departement": "22", "nom_hopital": "CH Le Fol  Saint Brieuc - 22", "suppressions": null, "menaces": "2021 : bloc opératoire menacé;2020 : urgences menacé", "victoires": "médecine victoire", "ghi_nom": "", "ght_nom": "GHT d'Armor" }, "geometry": { "type": "Point", "coordinates": [ -307694.901779021543916, 6192748.388247306458652 ] } },{ "type": "Feature", "properties": { "id": 298, "code_region": "BRE", "departement": "22", "nom_hopital": "CHLT Lannion - 22", "suppressions": null, "menaces": "cardiologie réduit (lits fermés);diabétologie réduit (lits fermés);neurologie réduit (lits fermés)", "victoires": null, "ghi_nom": "CHILT", "ght_nom": "GHT Armor" }, "geometry": { "type": "Point", "coordinates": [ -385648.172989048005547, 6227816.110101754777133 ] } },{ "type": "Feature", "properties": { "id": 736, "code_region": "BRE", "departement": "22", "nom_hopital": "CHLT Trestel - 22", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHILT", "ght_nom": "GHT Armor" }, "geometry": { "type": "Point", "coordinates": [ -372891.070652216672897, 6244745.23533974122256 ] } },{ "type": "Feature", "properties": { "id": 366, "code_region": "BRE", "departement": "22", "nom_hopital": "CH Paimpol - 22", "suppressions": "2014 : hospitalisation pédiatriques fermé;2011 : chirurgie fermé;2003 : maternité fermé", "menaces": "2019 : périnatalité réduit (autre);2017 : SMUR menacé;2017 : urgences de nuit menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT d'Armor" }, "geometry": { "type": "Point", "coordinates": [ -337739.212162945827004, 6236457.482601400464773 ] } },{ "type": "Feature", "properties": { "id": 770, "code_region": "BRE", "departement": "22", "nom_hopital": "CHPP Lamballe - 22", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHPP", "ght_nom": "GHT Armor" }, "geometry": { "type": "Point", "coordinates": [ -280630.404815562127624, 6185328.143337901681662 ] } },{ "type": "Feature", "properties": { "id": 771, "code_region": "BRE", "departement": "22", "nom_hopital": "CHPP Quintin - 22", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHPP", "ght_nom": "GHT Armor" }, "geometry": { "type": "Point", "coordinates": [ -324488.125383935577702, 6174943.357893172651529 ] } },{ "type": "Feature", "properties": { "id": 300, "code_region": "BRE", "departement": "22", "nom_hopital": "CH René Pleven Dinan - 22", "suppressions": "2020 : maternité fermé;2009 : pôle santé privatisé", "menaces": "2019 : maternité interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Rance Émeraude" }, "geometry": { "type": "Point", "coordinates": [ -227927.544768519728677, 6180957.463874001987278 ] } },{ "type": "Feature", "properties": { "id": 653, "code_region": "BRE", "departement": "22", "nom_hopital": "Hôpital privé des Côtes d'Armor  Plérin - 22", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -310368.139432187774219, 6198545.690252464264631 ] } },{ "type": "Feature", "properties": { "id": 332, "code_region": "BRE", "departement": "22", "nom_hopital": "Plouguernével - 22", "suppressions": null, "menaces": "2012 : maison médicale menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -361708.649218848324381, 6146693.155636399053037 ] } },{ "type": "Feature", "properties": { "id": 895, "code_region": "BRE", "departement": "22", "nom_hopital": "Polyclinique du Pays de Rance Dinan - 22", "suppressions": "1997 : maternité transféré", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -227842.922015070449561, 6181253.387145956978202 ] } },{ "type": "Feature", "properties": { "id": 735, "code_region": "BRE", "departement": "22", "nom_hopital": "Polyclinique Trégor Lannion - 22", "suppressions": "1997 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -383220.479662414290942, 6228216.753421052359045 ] } },{ "type": "Feature", "properties": { "id": 677, "code_region": "BRE", "departement": "29", "nom_hopital": "CH Ferdinand Grall Landernau - 29", "suppressions": "2021 : urgences de nuit fermé", "menaces": "2008 : urgences menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Bretagne Occidentale" }, "geometry": { "type": "Point", "coordinates": [ -471414.307235501531977, 6181684.551906934008002 ] } },{ "type": "Feature", "properties": { "id": 195, "code_region": "BRE", "departement": "29", "nom_hopital": "CH Hôtel-Dieu Pont L'Abbé - 29", "suppressions": "2014 : chirurgie hors ambulatoire transféré;2010 : urgences fermé", "menaces": "2001 : maternité transformé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT de l'Union Hospitalière de Cornouaille" }, "geometry": { "type": "Point", "coordinates": [ -469904.13582885597134, 6084149.427053328603506 ] } },{ "type": "Feature", "properties": { "id": 196, "code_region": "BRE", "departement": "29", "nom_hopital": "CHIC Porzou - Concarneau - 29", "suppressions": "1992 : chirurgie fermé;1992 : maternité fermé", "menaces": "2020 : urgences interrompu;2019 : SMUR réduit (autre);2013 : radiologie interrompu;2010 : urgences menacé;2008 : urgences réduit (autre)", "victoires": "2018 : IRM victoire;2008 : urgences maintenu", "ghi_nom": "CHIC ", "ght_nom": "GHT de l'Union Hospitalière de Cornouaille" }, "geometry": { "type": "Point", "coordinates": [ -434681.021970183122903, 6084475.615192655473948 ] } },{ "type": "Feature", "properties": { "id": 194, "code_region": "BRE", "departement": "29", "nom_hopital": "CHIC Théophlle Laënnec - Quimper - 29", "suppressions": null, "menaces": "2021 : urgences menacé", "victoires": null, "ghi_nom": "CHIC", "ght_nom": "GHT de l'Union Hospitalière de Cornouaille" }, "geometry": { "type": "Point", "coordinates": [ -455936.662048124300782, 6104513.789673645980656 ] } },{ "type": "Feature", "properties": { "id": 882, "code_region": "BRE", "departement": "29", "nom_hopital": "CH Lesneven", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Bretagne Occidentale" }, "geometry": { "type": "Point", "coordinates": [ -480788.915457621216774, 6202348.613443173468113 ] } },{ "type": "Feature", "properties": { "id": 193, "code_region": "BRE", "departement": "29", "nom_hopital": "CH M. Mazéas - Douarnenez - 29", "suppressions": "2021 : EHPAD privatisé;2019 : SMUR de nuit fermé;2019 : soins de suite et rééducation privatisé;2015 : chirurgie ambulatoire fermé;2014 : chirurgie hors ambulatoire transféré;1999 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT de l'Union Hospitalière de Cornouaille" }, "geometry": { "type": "Point", "coordinates": [ -480502.272228442481719, 6120850.738591853529215 ] } },{ "type": "Feature", "properties": { "id": 40, "code_region": "BRE", "departement": "29", "nom_hopital": "CH Morlaix - 29", "suppressions": "2018 : cuisine sous-traité;2018 : soins intensifs en cardiologie fermé;2015 : accueil urgences fermé", "menaces": "2021 : chirurgie menacé;2021 : psychiatrie réduit (autre);2017 : cardiologie menacé;2017 : psychiatrie menacé", "victoires": "urgences maintenu", "ghi_nom": "", "ght_nom": "GHT de Bretagne Ouest" }, "geometry": { "type": "Point", "coordinates": [ -426680.617615028226282, 6202377.281206617131829 ] } },{ "type": "Feature", "properties": { "id": 568, "code_region": "BRE", "departement": "29", "nom_hopital": "CHRU Carhaix - Plouguer - 29", "suppressions": null, "menaces": "2021 : chirurgie menacé;2021 : médecine gériatrique interrompu;2021 : SMUR interrompu;2016 : SMUR menacé;2016 : urgences menacé;2010 : maternité interrompu;2007 : maternité menacé", "victoires": "2008 : chirurgie maintenu;2008 : maternité maintenu", "ghi_nom": "CHRU Brest-Carhaix", "ght_nom": "GHT de Bretagne Ouest" }, "geometry": { "type": "Point", "coordinates": [ -398473.209122843865771, 6152374.120213538408279 ] } },{ "type": "Feature", "properties": { "id": 475, "code_region": "BRE", "departement": "29", "nom_hopital": "CHRU Cavale Blanche Brest -  29", "suppressions": "2008 : Allogreffes fermé", "menaces": "2020 : chirurgie cardiaque interrompu;2020 : chirurgie cardiaque menacé", "victoires": null, "ghi_nom": "CHRU Brest-Carhaix", "ght_nom": "GHT de Bretagne Ouest" }, "geometry": { "type": "Point", "coordinates": [ -504087.215073208964895, 6173977.380782556720078 ] } },{ "type": "Feature", "properties": { "id": 897, "code_region": "BRE", "departement": "29", "nom_hopital": "Clinique Saint-Michel-Sainte-Anne Quimper - 29", "suppressions": "2014 : maternité transféré", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -459548.314160481095314, 6103638.594170054420829 ] } },{ "type": "Feature", "properties": { "id": 883, "code_region": "BRE", "departement": "29", "nom_hopital": "Clinique Saint-Ronan - 29", "suppressions": "2005 : chirurgie transféré;2005 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -514818.399048652616329, 6178906.906536029651761 ] } },{ "type": "Feature", "properties": { "id": 617, "code_region": "BRE", "departement": "29", "nom_hopital": "EPSM É. Gourmelen Quimper - 29", "suppressions": "2019 : résidence Tréouguy fermé;2019 : soins longue durée fermé;2015 : urgences psychiatriques fermé", "menaces": "2022 : hôpital de jour interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT de l'Union Hospitalière de Cornouaille" }, "geometry": { "type": "Point", "coordinates": [ -454678.013378034811467, 6106742.620338561013341 ] } },{ "type": "Feature", "properties": { "id": 762, "code_region": "BRE", "departement": "29", "nom_hopital": "GHBS Quimperlé - 29", "suppressions": "2007 : chirurgie fermé;2007 : maternité fermé;1999 : pédiatrie fermé", "menaces": "2021 : psychiatrie interrompu;2008 : urgences de nuit menacé", "victoires": null, "ghi_nom": "GHBS", "ght_nom": "GHT Sud Bretagne" }, "geometry": { "type": "Point", "coordinates": [ -395866.483376823423896, 6085245.050204700790346 ] } },{ "type": "Feature", "properties": { "id": 476, "code_region": "BRE", "departement": "29", "nom_hopital": "HIA Brest - 29", "suppressions": "ravitaillement sanitaire des armées fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -500361.936622347449884, 6172414.996357752010226 ] } },{ "type": "Feature", "properties": { "id": 594, "code_region": "BRE", "departement": "35", "nom_hopital": "CH Broussais Saint-Malo - 35", "suppressions": "2020 : psychiatrie fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Rance Émeraude" }, "geometry": { "type": "Point", "coordinates": [ -223533.339312653843081, 6213636.069722538813949 ] } },{ "type": "Feature", "properties": { "id": 243, "code_region": "BRE", "departement": "35", "nom_hopital": "CH Cancale - 35", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Rance Émeraude" }, "geometry": { "type": "Point", "coordinates": [ -207754.413194671738893, 6221322.266147321090102 ] } },{ "type": "Feature", "properties": { "id": 679, "code_region": "BRE", "departement": "35", "nom_hopital": "CH Fougères - 35", "suppressions": null, "menaces": "2021 : urgences réduit (autre);2019 : cardiologie réduit (lits fermés)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Haute-Bretagne" }, "geometry": { "type": "Point", "coordinates": [ -132914.234818526048912, 6166849.643425957299769 ] } },{ "type": "Feature", "properties": { "id": 678, "code_region": "BRE", "departement": "35", "nom_hopital": "CHIRC Redon - 35", "suppressions": null, "menaces": "2021 : urgences de nuit réduit (autre)", "victoires": null, "ghi_nom": "CHIRC", "ght_nom": "GHT Haute Bretagne" }, "geometry": { "type": "Point", "coordinates": [ -231535.743321809597546, 6049467.815997106954455 ] } },{ "type": "Feature", "properties": { "id": 889, "code_region": "BRE", "departement": "35", "nom_hopital": "CH La Guerche – 35", "suppressions": null, "menaces": "2021 : chirurgie réduit (lits fermés);2021 : médecine réduit (lits fermés);2021 : soins de suite et rééducation réduit (lits fermés)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Haute-Bretagne" }, "geometry": { "type": "Point", "coordinates": [ -138407.840505454689264, 6097613.335816286504269 ] } },{ "type": "Feature", "properties": { "id": 891, "code_region": "BRE", "departement": "35", "nom_hopital": "CHMB Antrain – 35", "suppressions": null, "menaces": "soins de suite et rééducation interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Haute-Bretagne" }, "geometry": { "type": "Point", "coordinates": [ -164574.206609591841698, 6183034.014896660111845 ] } },{ "type": "Feature", "properties": { "id": 892, "code_region": "BRE", "departement": "35", "nom_hopital": "CHMB Saint-Brice-en-Coglès ", "suppressions": null, "menaces": "2019 : soins de suite et rééducation interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Haute-Bretagne" }, "geometry": { "type": "Point", "coordinates": [ -151510.4661712423258, 6175105.137754358351231 ] } },{ "type": "Feature", "properties": { "id": 680, "code_region": "BRE", "departement": "35", "nom_hopital": "CH Simone Veil Vitré - 35", "suppressions": "2022 : urgences de nuit fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Haute Bretagne" }, "geometry": { "type": "Point", "coordinates": [ -136561.029809821222443, 6127307.948342995718122 ] } },{ "type": "Feature", "properties": { "id": 48, "code_region": "BRE", "departement": "35", "nom_hopital": "CHS Régnier  Rennes - 35", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHGR Centre Hospitalier Guillaume Régnier", "ght_nom": "GHT Haute-Bretagne" }, "geometry": { "type": "Point", "coordinates": [ -183869.879493717482546, 6125629.322557278908789 ] } },{ "type": "Feature", "properties": { "id": 894, "code_region": "BRE", "departement": "35", "nom_hopital": "CHU Polyclinique Rennes - 35", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Haute-Bretagne" }, "geometry": { "type": "Point", "coordinates": [ -184850.351679872721434, 6129825.678761523216963 ] } },{ "type": "Feature", "properties": { "id": 893, "code_region": "BRE", "departement": "35", "nom_hopital": "CHU Ponchaillou Rennes - 35", "suppressions": null, "menaces": "2022 : neurologie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Haute-Bretagne" }, "geometry": { "type": "Point", "coordinates": [ -188672.548781312478241, 6126967.346512012183666 ] } },{ "type": "Feature", "properties": { "id": 494, "code_region": "BRE", "departement": "35", "nom_hopital": "CHU Sud Rennes - 35", "suppressions": null, "menaces": "2021 : urgences menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Haute-Bretagne" }, "geometry": { "type": "Point", "coordinates": [ -184012.093753282504622, 6120674.214485740289092 ] } },{ "type": "Feature", "properties": { "id": 890, "code_region": "BRE", "departement": "35", "nom_hopital": "EHPAD Availles-sur-Seiche – 35", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Haute-Bretagne" }, "geometry": { "type": "Point", "coordinates": [ -132827.084909714758396, 6100244.973102128133178 ] } },{ "type": "Feature", "properties": { "id": 318, "code_region": "BRE", "departement": "56", "nom_hopital": "CH Alphonse Guérin Ploërmel - 56", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Brocéliande Atlantique" }, "geometry": { "type": "Point", "coordinates": [ -266576.873710038489662, 6096140.059971206821501 ] } },{ "type": "Feature", "properties": { "id": 38, "code_region": "BRE", "departement": "56", "nom_hopital": "CHBA Auray - 56", "suppressions": "2002 : chirurgie fermé;2000 : maternité fermé", "menaces": "2018 : soins de suite et rééducation interrompu;2000 : urgences interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Brocéliande Atlantique" }, "geometry": { "type": "Point", "coordinates": [ -332127.57884821051266, 6051545.334375407546759 ] } },{ "type": "Feature", "properties": { "id": 884, "code_region": "BRE", "departement": "56", "nom_hopital": "CHBA Vannes - 56", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Brocéliande Atlantique" }, "geometry": { "type": "Point", "coordinates": [ -305609.396018553525209, 6051199.886100381612778 ] } },{ "type": "Feature", "properties": { "id": 886, "code_region": "BRE", "departement": "56", "nom_hopital": "CHBI Le Palais - 56", "suppressions": "1997 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Brocéliande Atlantique" }, "geometry": { "type": "Point", "coordinates": [ -351891.054740790277719, 5998631.370696934871376 ] } },{ "type": "Feature", "properties": { "id": 888, "code_region": "BRE", "departement": "56", "nom_hopital": "CHCB J. de Kervénoaël Pontivy - 56", "suppressions": "2021 : soins de suite et rééducation fermé", "menaces": null, "victoires": null, "ghi_nom": "CHCB", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -331400.096241943538189, 6118824.785885970108211 ] } },{ "type": "Feature", "properties": { "id": 317, "code_region": "BRE", "departement": "56", "nom_hopital": "CHCB Pontivy - 56", "suppressions": null, "menaces": "2021 : anesthésie menacé;2021 : maternité menacé;2021 : pédiatrie menacé;2021 : soins de suite et rééducation menacé;2021 : soins palliatifs menacé;2021 : urgences menacé", "victoires": null, "ghi_nom": "CHCB", "ght_nom": "GHT Centre Bretagne" }, "geometry": { "type": "Point", "coordinates": [ -324156.915510858991183, 6121275.173194002360106 ] } },{ "type": "Feature", "properties": { "id": 767, "code_region": "BRE", "departement": "56", "nom_hopital": "CHIRC Carentoir - 56", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHIRC", "ght_nom": "GHT Haute Bretagne" }, "geometry": { "type": "Point", "coordinates": [ -237472.324053939431906, 6076669.389509997330606 ] } },{ "type": "Feature", "properties": { "id": 584, "code_region": "BRE", "departement": "56", "nom_hopital": "Clin. de Noyal-Pontivy - 56", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Centre Bretagne" }, "geometry": { "type": "Point", "coordinates": [ -324310.631284512579441, 6121033.501356199383736 ] } },{ "type": "Feature", "properties": { "id": 887, "code_region": "BRE", "departement": "56", "nom_hopital": "Clinique des Augustines Malestroit - 56", "suppressions": "2003 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -265443.048585996089969, 6075713.539018156006932 ] } },{ "type": "Feature", "properties": { "id": 320, "code_region": "BRE", "departement": "56", "nom_hopital": "Clinique. du Ter - Ploemeur - 56", "suppressions": "2009 : maternité transféré", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT de Bretagne Sud" }, "geometry": { "type": "Point", "coordinates": [ -378302.082621890236624, 6063048.430135280825198 ] } },{ "type": "Feature", "properties": { "id": 896, "code_region": "BRE", "departement": "56", "nom_hopital": "EHPAD Kerbenès Ploemeur - 56", "suppressions": null, "menaces": "2021 : soins de suite et rééducation interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Sud Bretagne" }, "geometry": { "type": "Point", "coordinates": [ -378357.858190134284087, 6062865.411228430457413 ] } },{ "type": "Feature", "properties": { "id": 322, "code_region": "BRE", "departement": "56", "nom_hopital": "EPSM Charcot - Caudan - 56", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT de Bretagne Sud" }, "geometry": { "type": "Point", "coordinates": [ -369310.906021096277982, 6078689.484508434310555 ] } },{ "type": "Feature", "properties": { "id": 885, "code_region": "BRE", "departement": "56", "nom_hopital": "EPSM Saint-Avé - 56", "suppressions": "2021 : gérontopsychiatrie fermé;2021 : hospitalisation addictologie fermé", "menaces": "2021 : accueil de crise réduit (lits fermés)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Brocéliande Atlantique" }, "geometry": { "type": "Point", "coordinates": [ -306651.320942901074886, 6057006.145769067108631 ] } },{ "type": "Feature", "properties": { "id": 319, "code_region": "BRE", "departement": "56", "nom_hopital": "GHBS CRG Hennebont - 56", "suppressions": "2002 : chirurgie fermé;2002 : maternité fermé", "menaces": "2021 : soins de suite et rééducation interrompu", "victoires": null, "ghi_nom": "GHBS", "ght_nom": "GHT Sud Bretagne" }, "geometry": { "type": "Point", "coordinates": [ -367766.646896288380958, 6073512.189402555115521 ] } },{ "type": "Feature", "properties": { "id": 321, "code_region": "BRE", "departement": "56", "nom_hopital": "GHBS du Scorff - Lorient – 56", "suppressions": null, "menaces": "2009 : maternité menacé;2009 : pédiatrie menacé", "victoires": null, "ghi_nom": "GHBS", "ght_nom": "GHT Sud Bretagne" }, "geometry": { "type": "Point", "coordinates": [ -373608.10445458459435, 6065880.666296800598502 ] } },{ "type": "Feature", "properties": { "id": 764, "code_region": "BRE", "departement": "56", "nom_hopital": "GHBS Le Faouet - 56", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "GHBS", "ght_nom": "GHT Sud Bretagne" }, "geometry": { "type": "Point", "coordinates": [ -388331.197441793803591, 6111338.904523297213018 ] } },{ "type": "Feature", "properties": { "id": 763, "code_region": "BRE", "departement": "56", "nom_hopital": "GHBS Port-Louis Riantec - 56", "suppressions": "2016 : soins de suite et rééducation fermé", "menaces": null, "victoires": null, "ghi_nom": "GHBS", "ght_nom": "GHT Sud Bretagne" }, "geometry": { "type": "Point", "coordinates": [ -369441.614687025372405, 6060266.20865552034229 ] } },{ "type": "Feature", "properties": { "id": 316, "code_region": "BRE", "departement": "56", "nom_hopital": "HL Alfred Brard Guémené-sur-Scorff - 56", "suppressions": null, "menaces": "2014 : administration menacé;2014 : cuisine menacé;2014 : médecine menacé;2008 : direction fusionné", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -356019.947425248275977, 6118361.709662369452417 ] } },{ "type": "Feature", "properties": { "id": 351, "code_region": "COR", "departement": "2A", "nom_hopital": "CH Bonifacio – 2A", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 1019208.027081364765763, 5069642.632324671372771 ] } },{ "type": "Feature", "properties": { "id": 78, "code_region": "COR", "departement": "2A", "nom_hopital": "CH Castellucio - Ajaccio 2A", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 972835.133305032737553, 5148906.493221232667565 ] } },{ "type": "Feature", "properties": { "id": 185, "code_region": "CVL", "departement": "18", "nom_hopital": "CH J. Coeur - Bourges - 18", "suppressions": null, "menaces": "2021 : cardiologie réduit (lits fermés);2021 : gériatrie réduit (lits fermés);2021 : réanimation réduit (lits fermés);2021 : SMUR réduit (autre);2021 : urgences réduit (autre);2020 : urgences menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Cher" }, "geometry": { "type": "Point", "coordinates": [ 271467.908529464330059, 5955971.241823574528098 ] } },{ "type": "Feature", "properties": { "id": 186, "code_region": "CVL", "departement": "18", "nom_hopital": "CH Saint Amand-Montrond - 18", "suppressions": "2003 : chirurgie fermé", "menaces": "2013 : urgences menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Cher" }, "geometry": { "type": "Point", "coordinates": [ 277909.064649859501515, 5897462.730681954883039 ] } },{ "type": "Feature", "properties": { "id": 184, "code_region": "CVL", "departement": "18", "nom_hopital": "CH Vierzon - 18", "suppressions": null, "menaces": "2018 : chirurgie menacé;2018 : pédiatrie menacé;2017 : maternité menacé", "victoires": "2019 : chirurgie victoire;2018 : maternité victoire", "ghi_nom": "", "ght_nom": "GHT du Cher" }, "geometry": { "type": "Point", "coordinates": [ 228393.843279095366597, 5979206.79644216876477 ] } },{ "type": "Feature", "properties": { "id": 815, "code_region": "CVL", "departement": "18", "nom_hopital": "Clinique des Grainetières Saint-Amand-Montrond - 18", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 278555.79940140247345, 5896663.494473402388394 ] } },{ "type": "Feature", "properties": { "id": 814, "code_region": "CVL", "departement": "18", "nom_hopital": "EPSIC G. Sand Bourges - 18", "suppressions": null, "menaces": "psychiatrie réduit (lits fermés)", "victoires": null, "ghi_nom": "EPSIC George Sand", "ght_nom": "GHT du Cher" }, "geometry": { "type": "Point", "coordinates": [ 264394.802163631189615, 5954852.893187982030213 ] } },{ "type": "Feature", "properties": { "id": 314, "code_region": "CVL", "departement": "18", "nom_hopital": "EPSIC G. Sand Chezal-Benoit - 18", "suppressions": null, "menaces": "2019 : psychiatrie réduit (lits fermés)", "victoires": null, "ghi_nom": "EPSIC George Sand", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 235498.867996708635474, 5913025.468799986876547 ] } },{ "type": "Feature", "properties": { "id": 181, "code_region": "CVL", "departement": "28", "nom_hopital": "CH Chateaudun - 28", "suppressions": "2018 : maternité fermé;2017 : cardiologie fermé;2017 : chirurgie fermé", "menaces": "2009 : chirurgie réduit (autre)", "victoires": "dentisterie victoire;urgences victoire", "ghi_nom": "", "ght_nom": "GHT Eure-et-Loir" }, "geometry": { "type": "Point", "coordinates": [ 151161.380000111385016, 6119258.579334634356201 ] } },{ "type": "Feature", "properties": { "id": 816, "code_region": "CVL", "departement": "28", "nom_hopital": "CHDC L. Pasteur Le coudray - 28", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHDC", "ght_nom": "GHT Eure-et-Loir" }, "geometry": { "type": "Point", "coordinates": [ 167642.542815811932087, 6177125.960729759186506 ] } },{ "type": "Feature", "properties": { "id": 180, "code_region": "CVL", "departement": "28", "nom_hopital": "CH Nogent le Rotrou - 28", "suppressions": "2008 : chirurgie fermé;2002 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Eure-et-Loir" }, "geometry": { "type": "Point", "coordinates": [ 91469.046521099589881, 6160548.723017111420631 ] } },{ "type": "Feature", "properties": { "id": 63, "code_region": "CVL", "departement": "36", "nom_hopital": "CHCLB Châteauroux - 36", "suppressions": null, "menaces": "2021 : chirurgie réduit (lits fermés)", "victoires": null, "ghi_nom": "CHCLB", "ght_nom": "GHT de l'Indre" }, "geometry": { "type": "Point", "coordinates": [ 188721.973058931791456, 5909219.356367238797247 ] } },{ "type": "Feature", "properties": { "id": 64, "code_region": "CVL", "departement": "36", "nom_hopital": "CHCLB Le Blanc - 36", "suppressions": "2018 : maternité fermé", "menaces": "2021 : cancérologie menacé;2021 : cardiologie menacé;2021 : chirurgie menacé;2021 : gynécologie menacé;2021 : phlébologie menacé;2019 : chirurgie réduit (autre);2019 : ophtalmologie réduit (autre);2011 : maternité menacé", "victoires": "2022 : chirurgie maintenu;2012 : maternité maintenu", "ghi_nom": "CHCLB", "ght_nom": "GHT de l'Indre" }, "geometry": { "type": "Point", "coordinates": [ 118035.643757250378258, 5882547.486521475017071 ] } },{ "type": "Feature", "properties": { "id": 343, "code_region": "CVL", "departement": "36", "nom_hopital": "CH de la Tour Blanche Issoudun - 36", "suppressions": "2014 : chirurgie fermé;1992 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT de l'Indre" }, "geometry": { "type": "Point", "coordinates": [ 222099.461528566578636, 5935254.548212551511824 ] } },{ "type": "Feature", "properties": { "id": 385, "code_region": "CVL", "departement": "36", "nom_hopital": "CH La Châtre - 36", "suppressions": "1990 : maternité fermé", "menaces": "2019 : médecine réduit (lits fermés);2019 : permanence des soins menacé;2019 : soins de suite et rééducation réduit (lits fermés);2019 : soins palliatifs menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT de l'Indre" }, "geometry": { "type": "Point", "coordinates": [ 221115.016487514221808, 5874076.225623368285596 ] } },{ "type": "Feature", "properties": { "id": 349, "code_region": "CVL", "departement": "37", "nom_hopital": "CHC Chinon - 37", "suppressions": "1997 : chirurgie fermé", "menaces": "2022 : maternité interrompu;2022 : psychiatrie réduit (autre);2022 : SMUR interrompu;2022 : urgences interrompu", "victoires": null, "ghi_nom": "CHC", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 32677.000008646402421, 5972733.823035118170083 ] } },{ "type": "Feature", "properties": { "id": 7, "code_region": "CVL", "departement": "37", "nom_hopital": "CHIAC Amboise - 37", "suppressions": "2021 : périnatalité fermé;2003 : maternité fermé", "menaces": "2022 : urgences interrompu;2017 : périnatalité menacé;2014 : périnatalité réduit (autre)", "victoires": null, "ghi_nom": "CHIAC", "ght_nom": "GHT Touraine-Val de Loire" }, "geometry": { "type": "Point", "coordinates": [ 109273.939328745313105, 6008959.098373704589903 ] } },{ "type": "Feature", "properties": { "id": 325, "code_region": "CVL", "departement": "37", "nom_hopital": "CHIAC Château-Renault - 37", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Touraine-Val de Loire" }, "geometry": { "type": "Point", "coordinates": [ 102339.265064509309013, 6038585.341433195397258 ] } },{ "type": "Feature", "properties": { "id": 817, "code_region": "CVL", "departement": "37", "nom_hopital": "CH Paul Martinais Loches - 37", "suppressions": "1991 : maternité fermé", "menaces": "2021 : urgences interrompu;2019 : SMUR réduit (autre);2016 : chirurgie réduit (autre)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Touraine - Val de Loire" }, "geometry": { "type": "Point", "coordinates": [ 111534.36257513986493, 5963304.866173538379371 ] } },{ "type": "Feature", "properties": { "id": 696, "code_region": "CVL", "departement": "37", "nom_hopital": "CHP Saint-Grégoire - 37", "suppressions": null, "menaces": "2021 : maternité menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -188008.840862132637994, 6130933.880565194413066 ] } },{ "type": "Feature", "properties": { "id": 562, "code_region": "CVL", "departement": "37", "nom_hopital": "CHRU Bretonneau - Tours 37", "suppressions": null, "menaces": "2022 : psychiatrie menacé", "victoires": null, "ghi_nom": "CHRU", "ght_nom": "GHT Touraine-Val de Loire" }, "geometry": { "type": "Point", "coordinates": [ 74507.631996747091762, 6005589.210501032881439 ] } },{ "type": "Feature", "properties": { "id": 563, "code_region": "CVL", "departement": "37", "nom_hopital": "CHRU Clocheville Tours - 37", "suppressions": null, "menaces": "2022 : psychiatrie menacé", "victoires": null, "ghi_nom": "CHRU", "ght_nom": "GHT Touraine-Val de Loire" }, "geometry": { "type": "Point", "coordinates": [ 75759.288334745899192, 6005964.229671004228294 ] } },{ "type": "Feature", "properties": { "id": 564, "code_region": "CVL", "departement": "37", "nom_hopital": "CHRU Trousseau Chambray - 37", "suppressions": null, "menaces": "2022 : psychiatrie menacé;2017 : cardiologie réduit (autre);2017 : neurochirurgie réduit (autre);2017 : ORL réduit (autre);2017 : orthopédie réduit (autre)", "victoires": null, "ghi_nom": "CHRU", "ght_nom": "GHT Touraine-Val de Loire" }, "geometry": { "type": "Point", "coordinates": [ 79269.423454407573445, 5999414.768246755935252 ] } },{ "type": "Feature", "properties": { "id": 182, "code_region": "CVL", "departement": "41", "nom_hopital": "CH Blois - 41 ", "suppressions": null, "menaces": "2018 : maternité réduit (autre);2014 : centre de planification et d'éducation familiale (CPEF) menacé;2014 : centre IVG menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT de Loir et Cher" }, "geometry": { "type": "Point", "coordinates": [ 149552.156197903794236, 6041076.202213701792061 ] } },{ "type": "Feature", "properties": { "id": 183, "code_region": "CVL", "departement": "41", "nom_hopital": "CHRL Romorantin-Lanthenay - 41", "suppressions": "2020 : soins à domicile transféré", "menaces": "2005 : IVG menacé;2005 : maternité menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Loir-et-Cher" }, "geometry": { "type": "Point", "coordinates": [ 192744.354722601943649, 6001093.038560616783798 ] } },{ "type": "Feature", "properties": { "id": 818, "code_region": "CVL", "departement": "41", "nom_hopital": "CH Selles-sur-Cher", "suppressions": null, "menaces": "2019 : soins de suite et rééducation réduit (lits fermés)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Loir-et-Cher" }, "geometry": { "type": "Point", "coordinates": [ 172895.586456436460139, 5987109.454226154834032 ] } },{ "type": "Feature", "properties": { "id": 765, "code_region": "CVL", "departement": "41", "nom_hopital": "CHVM Montoire-sur-le-Loir - 41", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHVM", "ght_nom": "GHT Loir-et-Cher" }, "geometry": { "type": "Point", "coordinates": [ 97547.365319482967607, 6066062.69682005699724 ] } },{ "type": "Feature", "properties": { "id": 67, "code_region": "CVL", "departement": "41", "nom_hopital": "CHVM Vendôme - 41", "suppressions": "1999 : chirurgie transféré;1973 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "CHVM", "ght_nom": "GHT Loir-et-Cher" }, "geometry": { "type": "Point", "coordinates": [ 118286.788121211793623, 6072631.194592841900885 ] } },{ "type": "Feature", "properties": { "id": 904, "code_region": "CVL", "departement": "41", "nom_hopital": "Clinique Chesnaie Chailles - 41", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 146764.443428065627813, 6029055.329171149991453 ] } },{ "type": "Feature", "properties": { "id": 498, "code_region": "CVL", "departement": "41", "nom_hopital": "EHPAD Gaston d'Orléans Blois - 41", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT de Loir et Cher" }, "geometry": { "type": "Point", "coordinates": [ 148907.456438161141705, 6037672.724722325801849 ] } },{ "type": "Feature", "properties": { "id": 143, "code_region": "CVL", "departement": "45", "nom_hopital": "CHAM Montargis - 45", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Loiret" }, "geometry": { "type": "Point", "coordinates": [ 308649.78817955031991, 6106343.511937795206904 ] } },{ "type": "Feature", "properties": { "id": 145, "code_region": "CVL", "departement": "45", "nom_hopital": "CH P. Dezarnaulds Gien - 45", "suppressions": "2017 : chirurgie transféré", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Loiret" }, "geometry": { "type": "Point", "coordinates": [ 293289.66121178859612, 6055584.49277017172426 ] } },{ "type": "Feature", "properties": { "id": 142, "code_region": "CVL", "departement": "45", "nom_hopital": "CH Pithiviers - 45", "suppressions": "2016 : maternité fermé;1997 : chirurgie fermé", "menaces": "2020 : urgences menacé;2019 : SMUR interrompu;2018 : urgences de nuit menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Loiret" }, "geometry": { "type": "Point", "coordinates": [ 250446.341352340125013, 6135431.62860344350338 ] } },{ "type": "Feature", "properties": { "id": 10, "code_region": "CVL", "departement": "45", "nom_hopital": "CHR Orléans - 45", "suppressions": null, "menaces": "2022 : urgences réduit (autre);2017 : maternité menacé;IVG menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Loiret" }, "geometry": { "type": "Point", "coordinates": [ 213822.348652247397695, 6079738.912517509423196 ] } },{ "type": "Feature", "properties": { "id": 144, "code_region": "CVL", "departement": "45", "nom_hopital": "EPSM Fleury-les-Aubrais - 45", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Loiret" }, "geometry": { "type": "Point", "coordinates": [ 216243.489583989197854, 6097799.823541424237192 ] } },{ "type": "Feature", "properties": { "id": 561, "code_region": "GRE", "departement": "08", "nom_hopital": "Centre hospitalier Belair - 08", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 525302.416016169125214, 6409891.756343107670546 ] } },{ "type": "Feature", "properties": { "id": 209, "code_region": "GRE", "departement": "08", "nom_hopital": "CHINA Charleville-Mézières - 08", "suppressions": "2008 : hématologie fermé", "menaces": "2022 : hospitalisation réduit (autre);2022 : rhumatologie réduit (autre);2021 : laboratoire menacé;2021 : pharmacie menacé;2020 : gastro-entérologie interrompu", "victoires": null, "ghi_nom": "CHINA", "ght_nom": "Nord-Ardennes (GHT 1)" }, "geometry": { "type": "Point", "coordinates": [ 525373.284125219914131, 6404835.726728932000697 ] } },{ "type": "Feature", "properties": { "id": 360, "code_region": "GRE", "departement": "08", "nom_hopital": "CHINA Fumay - 08", "suppressions": null, "menaces": "2021 : SMUR menacé;2021 : urgences menacé", "victoires": null, "ghi_nom": "CHINA", "ght_nom": "Nord-Ardennes (GHT 1)" }, "geometry": { "type": "Point", "coordinates": [ 523887.384231568081304, 6445281.776474186219275 ] } },{ "type": "Feature", "properties": { "id": 747, "code_region": "GRE", "departement": "08", "nom_hopital": "CHINA Nouzonville - 08", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHINA", "ght_nom": "GHT Nord-Ardennes" }, "geometry": { "type": "Point", "coordinates": [ 528505.044273432460614, 6414372.848268788307905 ] } },{ "type": "Feature", "properties": { "id": 417, "code_region": "GRE", "departement": "08", "nom_hopital": "CHINA Sedan - 08", "suppressions": "2020 : cardiologie fermé;2018 : soins intensifs en cardiologie fermé", "menaces": "2022 : chirurgie réduit (autre);2022 : médecine réduit (autre);2021 : maternité menacé;2021 : soins de suite et rééducation réduit (lits fermés);2020 : soins intensifs menacé;2016 : urgences de nuit menacé;2014 : urgences pédiatriques menacé;pôle mère-enfant menacé", "victoires": "2018 : maternité maintenu;2018 : pédiatrie maintenu;2018 : urgences maintenu", "ghi_nom": "CHINA", "ght_nom": "Nord-Ardennes (GHT 1)" }, "geometry": { "type": "Point", "coordinates": [ 550288.497182333143428, 6395067.471952640451491 ] } },{ "type": "Feature", "properties": { "id": 359, "code_region": "GRE", "departement": "08", "nom_hopital": "Clinique Revin - 08", "suppressions": "2001 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 516222.579547073983122, 6436261.635073393583298 ] } },{ "type": "Feature", "properties": { "id": 210, "code_region": "GRE", "departement": "08", "nom_hopital": "GHSA Rethel - 08", "suppressions": "2011 : maternité fermé", "menaces": "2018 : chirurgie interrompu", "victoires": null, "ghi_nom": "GHSA Sud Ardennes", "ght_nom": "Marne Sud-Ardennes (GHT 2)" }, "geometry": { "type": "Point", "coordinates": [ 485952.830653282289859, 6361659.716982661746442 ] } },{ "type": "Feature", "properties": { "id": 361, "code_region": "GRE", "departement": "08", "nom_hopital": "GHSA Vouziers - 08", "suppressions": "2009 : endoscopie digestive fermé;2008 : chirurgie fermé;2004 : réanimation fermé;2004 : unité de surveillance continue fermé;1993 : maternité fermé", "menaces": "2022 : EHPAD réduit (lits fermés);2022 : urgences réduit (autre);2021 : médecine réduit (autre);2019 : urgences menacé;bloc chirurgical menacé", "victoires": null, "ghi_nom": "GHSA Sud Ardennes", "ght_nom": "Marne Sud-Ardennes (GHT 2)" }, "geometry": { "type": "Point", "coordinates": [ 523357.988729949633125, 6342147.000627051107585 ] } },{ "type": "Feature", "properties": { "id": 208, "code_region": "GRE", "departement": "08", "nom_hopital": "Givet - 08", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 537060.282628138898872, 6469935.804567622020841 ] } },{ "type": "Feature", "properties": { "id": 724, "code_region": "GRE", "departement": "08", "nom_hopital": "Villers-Semeuse - 08", "suppressions": "2001 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 528183.740640599746257, 6401771.381431179121137 ] } },{ "type": "Feature", "properties": { "id": 838, "code_region": "GRE", "departement": "10", "nom_hopital": "Clinique de Champagne Troyes - 10", "suppressions": "2021 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 451185.230239492026158, 6158003.371308065950871 ] } },{ "type": "Feature", "properties": { "id": 842, "code_region": "GRE", "departement": "10", "nom_hopital": "EPSM Brienne-le-château - 10", "suppressions": null, "menaces": "2018 : psychiatrie réduit (lits fermés)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Aube et Sézannais" }, "geometry": { "type": "Point", "coordinates": [ 503584.481682546553202, 6172367.760133404284716 ] } },{ "type": "Feature", "properties": { "id": 841, "code_region": "GRE", "departement": "10", "nom_hopital": "GHAM Nogent-sur-Seine", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "GHAM", "ght_nom": "GHT Aube et Sézannais" }, "geometry": { "type": "Point", "coordinates": [ 389849.648436784744263, 6189371.035754961892962 ] } },{ "type": "Feature", "properties": { "id": 840, "code_region": "GRE", "departement": "10", "nom_hopital": "GHAM Romilly-sur-Seine – 10", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "GHAM", "ght_nom": "GHT Aube et Sézannais" }, "geometry": { "type": "Point", "coordinates": [ 413732.804437920451164, 6193130.579423755407333 ] } },{ "type": "Feature", "properties": { "id": 839, "code_region": "GRE", "departement": "10", "nom_hopital": "HL Saint-Nicolas Bar-sur-Aube - 10", "suppressions": "2000 : maternité fermé", "menaces": "1999 : maternité menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Aube et Sézannais" }, "geometry": { "type": "Point", "coordinates": [ 524772.25525157910306, 6145401.221590218134224 ] } },{ "type": "Feature", "properties": { "id": 836, "code_region": "GRE", "departement": "51", "nom_hopital": "CAMSP Épernay - 51", "suppressions": null, "menaces": null, "victoires": "2022 : pédiatrie maintenu", "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 439911.788322754495312, 6280141.111978182569146 ] } },{ "type": "Feature", "properties": { "id": 633, "code_region": "GRE", "departement": "51", "nom_hopital": "CHA Sainte-Ménéhould - 51", "suppressions": "1990 : maternité fermé", "menaces": "2018 : chirurgie interrompu", "victoires": null, "ghi_nom": "CHA", "ght_nom": "GHT de Champagne" }, "geometry": { "type": "Point", "coordinates": [ 546379.986154906568117, 6290621.957460694946349 ] } },{ "type": "Feature", "properties": { "id": 577, "code_region": "GRE", "departement": "51", "nom_hopital": "CH Auban-Moët Épernay - 51", "suppressions": null, "menaces": "2010 : maternité menacé", "victoires": "2011 : maternité maintenu", "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 440275.562506225367542, 6280288.498078069649637 ] } },{ "type": "Feature", "properties": { "id": 280, "code_region": "GRE", "departement": "51", "nom_hopital": "CH Châlons-en-Champagne - 51", "suppressions": null, "menaces": "gastrologie et dermatologie fusionné", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Marne Sud-Ardennes" }, "geometry": { "type": "Point", "coordinates": [ 486503.182485379395075, 6269995.114102590829134 ] } },{ "type": "Feature", "properties": { "id": 42, "code_region": "GRE", "departement": "51", "nom_hopital": "CHU Reims - 51", "suppressions": null, "menaces": "2020 : bloc opératoire menacé;2018 : urgences menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Marne Sud-Ardennes" }, "geometry": { "type": "Point", "coordinates": [ 447607.702843181788921, 6313756.852701932191849 ] } },{ "type": "Feature", "properties": { "id": 433, "code_region": "GRE", "departement": "51", "nom_hopital": "CH Vitry le François - 51", "suppressions": "2017 : bloc opératoire fermé;2017 : chirurgie fermé;2015 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Marne Haute-Marne Meuse" }, "geometry": { "type": "Point", "coordinates": [ 510880.084295663458761, 6228292.181165235117078 ] } },{ "type": "Feature", "properties": { "id": 856, "code_region": "GRE", "departement": "51", "nom_hopital": "Clinique Prioulet - Châlons-en-Champagne - 51", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 486538.902756463736296, 6270334.332861592061818 ] } },{ "type": "Feature", "properties": { "id": 311, "code_region": "GRE", "departement": "51", "nom_hopital": "GHAM Sézanne - 51", "suppressions": "1997 : chirurgie fermé;1976 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "GHAM", "ght_nom": "GHT Aube et Sézannais" }, "geometry": { "type": "Point", "coordinates": [ 414398.45802074263338, 6228174.075614096596837 ] } },{ "type": "Feature", "properties": { "id": 855, "code_region": "GRE", "departement": "51", "nom_hopital": "Polyclinique Reims-Bezannes - 51", "suppressions": null, "menaces": "2021 : urgences interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 445524.116294760257006, 6312007.499117352068424 ] } },{ "type": "Feature", "properties": { "id": 570, "code_region": "GRE", "departement": "52", "nom_hopital": "CH Bourbonne-les-Bains", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT 21-52" }, "geometry": { "type": "Point", "coordinates": [ 638471.038205392542295, 6097891.488505365327001 ] } },{ "type": "Feature", "properties": { "id": 12, "code_region": "GRE", "departement": "52", "nom_hopital": "CH Chaumont - 52", "suppressions": "2015 : réanimation fermé", "menaces": "2014 : réanimation menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Côte d'Or - Haute Marne" }, "geometry": { "type": "Point", "coordinates": [ 572186.52031472674571, 6126970.515204125083983 ] } },{ "type": "Feature", "properties": { "id": 625, "code_region": "GRE", "departement": "52", "nom_hopital": "CH Genevieve De Gaulle Anthonioz - Saint-Dizier - 52", "suppressions": null, "menaces": "2021 : urgences réduit (autre)", "victoires": null, "ghi_nom": "CHGDGA ", "ght_nom": "GHT Marne Haute-Marne Meuse" }, "geometry": { "type": "Point", "coordinates": [ 552702.302852008724585, 6216549.188769194297493 ] } },{ "type": "Feature", "properties": { "id": 624, "code_region": "GRE", "departement": "52", "nom_hopital": "CHHM André Breton Saint-Dizier - 52", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHHM", "ght_nom": "GHT Marne Haute-Marne Meuse" }, "geometry": { "type": "Point", "coordinates": [ 551765.778142720693722, 6213101.128420311957598 ] } },{ "type": "Feature", "properties": { "id": 569, "code_region": "GRE", "departement": "52", "nom_hopital": "CH Langres - 52", "suppressions": "2019 : urgences de nuit fermé;2016 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Côte d'Or - Haute Marne" }, "geometry": { "type": "Point", "coordinates": [ 594093.072923440486193, 6084755.090002473443747 ] } },{ "type": "Feature", "properties": { "id": 628, "code_region": "GRE", "departement": "52", "nom_hopital": "CHS Pierre Lôo La Charité-sur-Loire - 52", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Nièvre" }, "geometry": { "type": "Point", "coordinates": [ 335932.69465721398592, 5970392.302170486189425 ] } },{ "type": "Feature", "properties": { "id": 854, "code_region": "GRE", "departement": "52", "nom_hopital": "Clin. François Ier Saint-Dizier - 52", "suppressions": "2017 : chimiothérapie transféré;2017 : chirurgie transféré", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 552771.173523418605328, 6216824.239442554302514 ] } },{ "type": "Feature", "properties": { "id": 632, "code_region": "GRE", "departement": "52", "nom_hopital": "Hôpital de Joinville - 52", "suppressions": null, "menaces": "2018 : médecine menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Marne Haute-Marne Meuse" }, "geometry": { "type": "Point", "coordinates": [ 571920.178831309080124, 6181072.553362645208836 ] } },{ "type": "Feature", "properties": { "id": 859, "code_region": "GRE", "departement": "54", "nom_hopital": "CH 3H Santé Cirey-sur-Vezouze - 54", "suppressions": null, "menaces": "2022 : soins de suite et rééducation menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Sud Lorraine" }, "geometry": { "type": "Point", "coordinates": [ 772960.348199144005775, 6203999.630821855738759 ] } },{ "type": "Feature", "properties": { "id": 261, "code_region": "GRE", "departement": "54", "nom_hopital": "CH Lunéville - 54", "suppressions": "2020 : laboratoire fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Sud Lorraine" }, "geometry": { "type": "Point", "coordinates": [ 722736.000860763015226, 6205940.60693408921361 ] } },{ "type": "Feature", "properties": { "id": 260, "code_region": "GRE", "departement": "54", "nom_hopital": "CH Pont à Mousson - 54", "suppressions": "2021 : urgences fermé;2010 : chirurgie ambulatoire fermé;2009 : chirurgie hors ambulatoire fermé;2005 : maternité fermé", "menaces": "2013 : urgences de nuit interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Sud Lorraine" }, "geometry": { "type": "Point", "coordinates": [ 674031.615817239973694, 6258442.033361566253006 ] } },{ "type": "Feature", "properties": { "id": 608, "code_region": "GRE", "departement": "54", "nom_hopital": "CHRU Nancy Brabois - 54", "suppressions": null, "menaces": "2022 : cardiologie menacé;2021 : anesthésie menacé", "victoires": null, "ghi_nom": "CHRU", "ght_nom": "GHT Sud Lorraine" }, "geometry": { "type": "Point", "coordinates": [ 684613.847582283779047, 6215243.766641084104776 ] } },{ "type": "Feature", "properties": { "id": 11, "code_region": "GRE", "departement": "54", "nom_hopital": "CHRU Nancy Central - 54", "suppressions": "2021 : chirurgie digestive fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Sud Lorraine" }, "geometry": { "type": "Point", "coordinates": [ 689250.062467877171002, 6221502.936712566763163 ] } },{ "type": "Feature", "properties": { "id": 601, "code_region": "GRE", "departement": "54", "nom_hopital": "CH St Charles Toul - 54", "suppressions": null, "menaces": "2022 : bloc opératoire menacé;2022 : maternité réduit (autre);2022 : urgences de nuit interrompu;2021 : urgences menacé;2020 : maternité interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Sud Lorraine" }, "geometry": { "type": "Point", "coordinates": [ 655382.993714433629066, 6220099.826268529519439 ] } },{ "type": "Feature", "properties": { "id": 858, "code_region": "GRE", "departement": "54", "nom_hopital": "CHU Dommartin-les-Toul - 54", "suppressions": "2011 : chirurgie de la main fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 657940.567976541817188, 6218890.309196148999035 ] } },{ "type": "Feature", "properties": { "id": 41, "code_region": "GRE", "departement": "54", "nom_hopital": "CH Val de Briey - 54", "suppressions": null, "menaces": "2021 : urgences menacé;2021 : urgences de nuit interrompu;2019 : maternité interrompu;2019 : soins de suite et rééducation interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Lorraine Nord" }, "geometry": { "type": "Point", "coordinates": [ 660904.2440219927812, 6317066.216147855855525 ] } },{ "type": "Feature", "properties": { "id": 860, "code_region": "GRE", "departement": "54", "nom_hopital": "CPN Laxou - 54", "suppressions": null, "menaces": "2017 : soins libres réduit (lits fermés)", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 683093.708843968808651, 6220314.300781212747097 ] } },{ "type": "Feature", "properties": { "id": 259, "code_region": "GRE", "departement": "54", "nom_hopital": "Longwy - 54\nHôpital Mt St Martin", "suppressions": "2019 : centre périnatal fermé;2016 : maternité fermé;2012 : pédiatrie fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 642155.169236527406611, 6362596.973915491253138 ] } },{ "type": "Feature", "properties": { "id": 610, "code_region": "GRE", "departement": "54", "nom_hopital": "Polyclinique Majorelle Nancy - 54", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 683921.132592015084811, 6224334.250648938119411 ] } },{ "type": "Feature", "properties": { "id": 281, "code_region": "GRE", "departement": "55", "nom_hopital": "CH Bar le Duc - 55", "suppressions": "2019 : maternité fermé;2019 : pédiatrie fermé", "menaces": "2021 : urgences menacé;2018 : maternité réduit (autre);2009 : chirurgie réduit (autre)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Marne Haute-Marne Meuse" }, "geometry": { "type": "Point", "coordinates": [ 574678.125467156874947, 6236107.291816657409072 ] } },{ "type": "Feature", "properties": { "id": 861, "code_region": "GRE", "departement": "55", "nom_hopital": "CH Saint-Charles commercy - 55", "suppressions": "1999 : SMUR fermé;1992 : chirurgie fermé;1992 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Sud Lorraine" }, "geometry": { "type": "Point", "coordinates": [ 622074.437562100589275, 6234274.516032950021327 ] } },{ "type": "Feature", "properties": { "id": 853, "code_region": "GRE", "departement": "55", "nom_hopital": "CHS Fains-Veel - 55", "suppressions": null, "menaces": "gériatrie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Marne Haute-Marne Meuse" }, "geometry": { "type": "Point", "coordinates": [ 571052.925084434449673, 6239281.954716965556145 ] } },{ "type": "Feature", "properties": { "id": 631, "code_region": "GRE", "departement": "55", "nom_hopital": "CHVSM Sainte-Anne Saint-Mihiel - 55", "suppressions": null, "menaces": "2021 : réanimation menacé;2019 : bloc opératoire réduit (autre);2019 : médecine réduit (lits fermés);2019 : pneumologie réduit (lits fermés)", "victoires": null, "ghi_nom": "CHVSM", "ght_nom": "GHT Marne Haute-Marne Meuse" }, "geometry": { "type": "Point", "coordinates": [ 616680.813088145572692, 6256173.557156187482178 ] } },{ "type": "Feature", "properties": { "id": 630, "code_region": "GRE", "departement": "55", "nom_hopital": "CHVSM Saint-Nicolas Verdun - 55", "suppressions": null, "menaces": "2021 : réanimation menacé", "victoires": null, "ghi_nom": "CHVSM", "ght_nom": "GHT Marne Haute-Marne Meuse" }, "geometry": { "type": "Point", "coordinates": [ 599237.450524203944951, 6301238.643749515525997 ] } },{ "type": "Feature", "properties": { "id": 270, "code_region": "GRE", "departement": "57", "nom_hopital": "CHIFSA Forbach - 57", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHIFSA", "ght_nom": "GHT Meuse-Est" }, "geometry": { "type": "Point", "coordinates": [ 767600.71058994717896, 6306555.770302465185523 ] } },{ "type": "Feature", "properties": { "id": 84, "code_region": "GRE", "departement": "57", "nom_hopital": "CHIFSA Saint-Avold  - 57", "suppressions": "2011 : maternité fermé;2011 : pédiatrie fermé", "menaces": null, "victoires": null, "ghi_nom": "CHIFSA", "ght_nom": "GHT Meuse-Est" }, "geometry": { "type": "Point", "coordinates": [ 746465.248795736115426, 6291489.192404135130346 ] } },{ "type": "Feature", "properties": { "id": 640, "code_region": "GRE", "departement": "57", "nom_hopital": "CH Le Secq de Crépy Boulay-Moselle 57", "suppressions": "2015 : urgences consultations non programmées fermé;1987 : chirurgie fermé;1987 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Lorraine Nord" }, "geometry": { "type": "Point", "coordinates": [ 723516.536453876295127, 6306121.239961836487055 ] } },{ "type": "Feature", "properties": { "id": 358, "code_region": "GRE", "departement": "57", "nom_hopital": "CHRMT Hayange - 57", "suppressions": "2018 : soins de suite et réadaptation polyvalente fermé;2016 : pneumologie fermé;2013 : urgences fermé;2012 : bloc opératoire fermé;2012 : chirurgie fermé", "menaces": "2018 : médecine polyvalente réduit (lits fermés)", "victoires": null, "ghi_nom": "CHRMT", "ght_nom": "GHT Lorraine Nord" }, "geometry": { "type": "Point", "coordinates": [ 675597.134216789156199, 6330367.911624257452786 ] } },{ "type": "Feature", "properties": { "id": 271, "code_region": "GRE", "departement": "57", "nom_hopital": "CH Sarreguemines - 57", "suppressions": null, "menaces": "2018 : pédiatrie interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Moselle-Est" }, "geometry": { "type": "Point", "coordinates": [ 787083.548609577701427, 6293497.017017596401274 ] } },{ "type": "Feature", "properties": { "id": 851, "code_region": "GRE", "departement": "57", "nom_hopital": "CHS Jury-les-Metz - 57", "suppressions": null, "menaces": "2022 : psychiatrie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Lorraine Nord" }, "geometry": { "type": "Point", "coordinates": [ 697989.1044861410046, 6287927.332525272853673 ] } },{ "type": "Feature", "properties": { "id": 852, "code_region": "GRE", "departement": "57", "nom_hopital": "CHS Lorquin - 57", "suppressions": "hôpital de jour fermé", "menaces": "2015 : administration réduit (autre);2015 : admission réduit (autre)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Lorraine Nord" }, "geometry": { "type": "Point", "coordinates": [ 779620.456119939684868, 6219651.172975816763937 ] } },{ "type": "Feature", "properties": { "id": 5, "code_region": "GRE", "departement": "57", "nom_hopital": "HIA Metz - 57", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 687548.792180318851024, 6295177.852957352995872 ] } },{ "type": "Feature", "properties": { "id": 857, "code_region": "GRE", "departement": "57", "nom_hopital": "Hôpital de Saint-Avold - 57", "suppressions": null, "menaces": "2021 : chirurgie réduit (lits fermés)", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 748365.257894452428445, 6293790.866211806423962 ] } },{ "type": "Feature", "properties": { "id": 419, "code_region": "GRE", "departement": "57", "nom_hopital": "Sarrebourg - 57", "suppressions": null, "menaces": "2019 : maternité menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 785519.106380173936486, 6229850.704109486192465 ] } },{ "type": "Feature", "properties": { "id": 844, "code_region": "GRE", "departement": "67", "nom_hopital": "CH Haguenau - 67", "suppressions": null, "menaces": "2013 : réanimation réduit (lits fermés);2013 : soins intensifs réduit (lits fermés)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Grand Est 10" }, "geometry": { "type": "Point", "coordinates": [ 867464.621193599072285, 6244159.788720068521798 ] } },{ "type": "Feature", "properties": { "id": 843, "code_region": "GRE", "departement": "67", "nom_hopital": "CHI Lauter Wissemboug - 67", "suppressions": null, "menaces": "2018 : maternité menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Grand Est 10" }, "geometry": { "type": "Point", "coordinates": [ 883025.353515509516001, 6281934.936746443621814 ] } },{ "type": "Feature", "properties": { "id": 845, "code_region": "GRE", "departement": "67", "nom_hopital": "CH La Grafenbourg Brumath - 67", "suppressions": "2006 : psychiatrie transféré", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Grand Est 10" }, "geometry": { "type": "Point", "coordinates": [ 859584.063589826109819, 6229217.664940497837961 ] } },{ "type": "Feature", "properties": { "id": 846, "code_region": "GRE", "departement": "67", "nom_hopital": "CH Sainte-Catherine Saverne - 67", "suppressions": "2013 : soins intensifs fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Grand Est 10" }, "geometry": { "type": "Point", "coordinates": [ 818135.236367095261812, 6231898.042233563028276 ] } },{ "type": "Feature", "properties": { "id": 848, "code_region": "GRE", "departement": "67", "nom_hopital": "EPSAN Brumath - 67", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Grand Est 10" }, "geometry": { "type": "Point", "coordinates": [ 858216.232464380678721, 6226951.943947753868997 ] } },{ "type": "Feature", "properties": { "id": 29, "code_region": "GRE", "departement": "67", "nom_hopital": "GHSO Obernai - 67", "suppressions": "2008 : chirurgie fermé;2008 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "GHSO", "ght_nom": "GHT Centre Alsace" }, "geometry": { "type": "Point", "coordinates": [ 832850.557123569422401, 6184101.407141741365194 ] } },{ "type": "Feature", "properties": { "id": 37, "code_region": "GRE", "departement": "67", "nom_hopital": "GHSO Sélestat - 67", "suppressions": null, "menaces": "2016 : réanimation transformé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Centre Alsace" }, "geometry": { "type": "Point", "coordinates": [ 829785.078011523582973, 6150085.530441834591329 ] } },{ "type": "Feature", "properties": { "id": 847, "code_region": "GRE", "departement": "67", "nom_hopital": "HL Molsheim - 67", "suppressions": "1977 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Grand Est 10" }, "geometry": { "type": "Point", "coordinates": [ 833825.818662565201521, 6197581.771066337823868 ] } },{ "type": "Feature", "properties": { "id": 246, "code_region": "GRE", "departement": "67", "nom_hopital": "HUS Strasbourg - 67", "suppressions": "2016 : nettoyage sous-traité", "menaces": "2020 : réanimation réduit (lits fermés)", "victoires": null, "ghi_nom": "HUS", "ght_nom": "GHT Grand Est 10" }, "geometry": { "type": "Point", "coordinates": [ 862427.530077550560236, 6203105.826421415433288 ] } },{ "type": "Feature", "properties": { "id": 386, "code_region": "GRE", "departement": "67", "nom_hopital": "Saulxures 67", "suppressions": null, "menaces": "2011 : centre médical menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 793820.989615587284788, 6172433.2497194763273 ] } },{ "type": "Feature", "properties": { "id": 341, "code_region": "GRE", "departement": "68", "nom_hopital": "Aubure - 68", "suppressions": null, "menaces": "2011 : centre médical menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 803870.888714880682528, 6139784.560813230462372 ] } },{ "type": "Feature", "properties": { "id": 50, "code_region": "GRE", "departement": "68", "nom_hopital": "CH Guebwiller - 68", "suppressions": "2003 : maternité fermé", "menaces": "2021 : urgences de nuit interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Centre Alsace" }, "geometry": { "type": "Point", "coordinates": [ 802692.636404688004404, 6091774.45991912856698 ] } },{ "type": "Feature", "properties": { "id": 849, "code_region": "GRE", "departement": "68", "nom_hopital": "CH Pfastatt - 68", "suppressions": "1993 : bloc opératoire fermé;1993 : chirurgie fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Haute Alsace" }, "geometry": { "type": "Point", "coordinates": [ 812635.972128100693226, 6068242.244659537449479 ] } },{ "type": "Feature", "properties": { "id": 850, "code_region": "GRE", "departement": "68", "nom_hopital": "CH Rouffac - 68", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Haute Alsace" }, "geometry": { "type": "Point", "coordinates": [ 811335.865119509282522, 6098672.879978534765542 ] } },{ "type": "Feature", "properties": { "id": 652, "code_region": "GRE", "departement": "68", "nom_hopital": "Clin. Diaconat Fonderie Mulhouse - 68", "suppressions": null, "menaces": "urgences interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 816146.784775711596012, 6065151.220998954027891 ] } },{ "type": "Feature", "properties": { "id": 245, "code_region": "GRE", "departement": "68", "nom_hopital": "GHRMSA Émile Muller Mulhouse - 68", "suppressions": "2020 : chirurgie pédiatrique fermé", "menaces": "2019 : urgences interrompu", "victoires": null, "ghi_nom": "GHRMSA ", "ght_nom": "GHT Haute Alsace" }, "geometry": { "type": "Point", "coordinates": [ 817432.908991086645983, 6061247.163573581725359 ] } },{ "type": "Feature", "properties": { "id": 9, "code_region": "GRE", "departement": "68", "nom_hopital": "GHRMSA Saint-Jacques Thann - 68", "suppressions": "2019 : maternité fermé;2009 : soins intensifs fermé", "menaces": "2016 : urgences interrompu", "victoires": null, "ghi_nom": "GHRMSA", "ght_nom": "GHT Haute Alsace" }, "geometry": { "type": "Point", "coordinates": [ 790629.243955926969647, 6075398.532148780301213 ] } },{ "type": "Feature", "properties": { "id": 52, "code_region": "GRE", "departement": "68", "nom_hopital": "GHRMSA Saint-Morand Altkirch - 68 ", "suppressions": "2019 : maternité fermé;2019 : soins continus fermé", "menaces": "2021 : urgences interrompu;2020 : urgences menacé", "victoires": null, "ghi_nom": "GHRMSA", "ght_nom": "GHT Haute Alsace" }, "geometry": { "type": "Point", "coordinates": [ 807335.552423622226343, 6044555.591772682964802 ] } },{ "type": "Feature", "properties": { "id": 774, "code_region": "GRE", "departement": "68", "nom_hopital": "GHRMSA Sierentz - 68", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "GHRMSA", "ght_nom": "GHT Haute Alsace" }, "geometry": { "type": "Point", "coordinates": [ 830316.88496615330223, 6049132.508284941315651 ] } },{ "type": "Feature", "properties": { "id": 244, "code_region": "GRE", "departement": "68", "nom_hopital": "Stosswihr - 68", "suppressions": null, "menaces": "2011 : centre médical menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 790880.49277438246645, 6115871.445690882392228 ] } },{ "type": "Feature", "properties": { "id": 357, "code_region": "GRE", "departement": "88", "nom_hopital": "CH de l'Avison - Bruyères - 88", "suppressions": "2018 : centre médico-psycho pédagogique fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Vosges" }, "geometry": { "type": "Point", "coordinates": [ 748010.039516146993265, 6142066.034430757164955 ] } },{ "type": "Feature", "properties": { "id": 236, "code_region": "GRE", "departement": "88", "nom_hopital": "CH Gérardmer - 88", "suppressions": "2005 : chirurgie fermé;2005 : endoscopie fermé;2004 : urgences de nuit fermé;2002 : buanderie fermé;1990 : maternité fermé", "menaces": "2020 : SMUR interrompu;2020 : urgences interrompu;2019 : soins non programmés menacé;médecine menacé;soins palliatifs menacé", "victoires": null, "ghi_nom": "CHIHMV", "ght_nom": "GHT Vosges" }, "geometry": { "type": "Point", "coordinates": [ 765605.919478363939561, 6118939.818794097751379 ] } },{ "type": "Feature", "properties": { "id": 70, "code_region": "GRE", "departement": "88", "nom_hopital": "CHI Durkheim Épinal - 88", "suppressions": null, "menaces": "2018 : SMUR réduit (autre)", "victoires": null, "ghi_nom": "CHI Émile Durkheim", "ght_nom": "GHT Vosges" }, "geometry": { "type": "Point", "coordinates": [ 715947.566449239850044, 6139170.962030882947147 ] } },{ "type": "Feature", "properties": { "id": 865, "code_region": "GRE", "departement": "88", "nom_hopital": "CHIHMV Fraize - 88", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHIHMV", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 780145.440405439585447, 6137622.074063777923584 ] } },{ "type": "Feature", "properties": { "id": 863, "code_region": "GRE", "departement": "88", "nom_hopital": "CHIHMV Raon-l'Étape - 88", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHICV", "ght_nom": "GHT Vosges" }, "geometry": { "type": "Point", "coordinates": [ 762268.483346659340896, 6173995.998681874014437 ] } },{ "type": "Feature", "properties": { "id": 235, "code_region": "GRE", "departement": "88", "nom_hopital": "CHIHMV Saint-Dié - 88", "suppressions": "2019 : hépato-gastro-entérologie fermé", "menaces": null, "victoires": null, "ghi_nom": "CHIHMV", "ght_nom": "GHT Vosges" }, "geometry": { "type": "Point", "coordinates": [ 775129.160167851019651, 6155065.080272697843611 ] } },{ "type": "Feature", "properties": { "id": 864, "code_region": "GRE", "departement": "88", "nom_hopital": "CHIHMV Senones - 88", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHICV", "ght_nom": "GHT Vosges" }, "geometry": { "type": "Point", "coordinates": [ 776576.888726391014643, 6172998.080425264313817 ] } },{ "type": "Feature", "properties": { "id": 627, "code_region": "GRE", "departement": "88", "nom_hopital": "CHIOV Neufchâteau - 88", "suppressions": null, "menaces": "2021 : cardiologie menacé;2021 : urgences menacé", "victoires": null, "ghi_nom": "CHIOV", "ght_nom": "GHT Vosges" }, "geometry": { "type": "Point", "coordinates": [ 635427.88905772625003, 6168460.843362159095705 ] } },{ "type": "Feature", "properties": { "id": 355, "code_region": "GRE", "departement": "88", "nom_hopital": "CH Lamarche - 88", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Vosges" }, "geometry": { "type": "Point", "coordinates": [ 643591.219967730226927, 6118353.289611761458218 ] } },{ "type": "Feature", "properties": { "id": 672, "code_region": "GRE", "departement": "88", "nom_hopital": "CHL Bussang - 88", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 763469.179712407290936, 6088240.809818108566105 ] } },{ "type": "Feature", "properties": { "id": 671, "code_region": "GRE", "departement": "88", "nom_hopital": "CHL du Thillot - 88", "suppressions": "2016 : médecine fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 753491.074413761496544, 6086354.829904836602509 ] } },{ "type": "Feature", "properties": { "id": 356, "code_region": "GRE", "departement": "88", "nom_hopital": "CHOV Vittel - 88", "suppressions": "cardiologie fermé;chirurgie fermé;néphrologie fermé", "menaces": "2021 : SMUR menacé;2021 : urgences menacé;2021 : urgences de nuit menacé", "victoires": null, "ghi_nom": "CHOV", "ght_nom": "GHT Vosges" }, "geometry": { "type": "Point", "coordinates": [ 662089.494304672349244, 6141308.483213768340647 ] } },{ "type": "Feature", "properties": { "id": 758, "code_region": "GRE", "departement": "88", "nom_hopital": "CH Rambervillers - 88", "suppressions": "2019 : médecine fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 739299.441847134148702, 6162197.609102821908891 ] } },{ "type": "Feature", "properties": { "id": 75, "code_region": "GRE", "departement": "88", "nom_hopital": "CH Ravenel Mirecourt - 88", "suppressions": null, "menaces": "2022 : pédopsychiatrie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Sud Lorraine" }, "geometry": { "type": "Point", "coordinates": [ 682826.40019653912168, 6157250.336470392532647 ] } },{ "type": "Feature", "properties": { "id": 237, "code_region": "GRE", "departement": "88", "nom_hopital": "CH Remiremont - 88", "suppressions": "2020 : urologie fermé;2019 : diabétologie fermé;2019 : pneumologie fermé;2018 : cardiologie fermé", "menaces": "2021 : SMUR menacé;2021 : urgences menacé;2021 : urgences de nuit menacé;2016 : maternité menacé", "victoires": "2018 : maternité maintenu", "ghi_nom": "", "ght_nom": "GHT Vosges" }, "geometry": { "type": "Point", "coordinates": [ 733967.122142843552865, 6109060.254522360861301 ] } },{ "type": "Feature", "properties": { "id": 571, "code_region": "GRE", "departement": "88", "nom_hopital": "Clin. Darney - 88", "suppressions": "1976 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 673518.458514056750573, 6121002.639510545879602 ] } },{ "type": "Feature", "properties": { "id": 862, "code_region": "GRE", "departement": "88", "nom_hopital": "Clinique Ligne Bleue Épinal - 88", "suppressions": null, "menaces": "2021 : maternité fusionné", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 719467.430772248655558, 6140155.595418567769229 ] } },{ "type": "Feature", "properties": { "id": 673, "code_region": "GUA", "departement": "971", "nom_hopital": "CHL Capesterre Belle Eau - 97", "suppressions": "2016 : hospitalisation à domicile fermé", "menaces": "2016 : médecine transformé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -6853210.639361240901053, 1810052.240320551441982 ] } },{ "type": "Feature", "properties": { "id": 909, "code_region": "GUA", "departement": "971", "nom_hopital": "CH Sainte-Marie Marie-Galante - 97", "suppressions": "2012 : chirurgie fermé;2012 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -6824588.988292171619833, 1791902.198678592452779 ] } },{ "type": "Feature", "properties": { "id": 554, "code_region": "GUA", "departement": "971", "nom_hopital": "CHUG Pointe-à-Pitre - 97", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -6849893.178969813510776, 1832919.419043583562598 ] } },{ "type": "Feature", "properties": { "id": 464, "code_region": "GUY", "departement": "973", "nom_hopital": "Guyane - Cayenne - 97", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -5825908.839308792725205, 550400.305255444953218 ] } },{ "type": "Feature", "properties": { "id": 465, "code_region": "GUY", "departement": "973", "nom_hopital": "Kourou - 973", "suppressions": null, "menaces": "2017 : centre médico chirurgical menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -5860155.57357985060662, 574978.956719620618969 ] } },{ "type": "Feature", "properties": { "id": 278, "code_region": "HDF", "departement": "02", "nom_hopital": "CH Brisset Hirson - 02", "suppressions": "2006 : chirurgie fermé;2006 : maternité fermé", "menaces": "2013 : cardiologie menacé;2013 : laboratoire menacé;2013 : urgences menacé", "victoires": null, "ghi_nom": "", "ght_nom": "Aisne Nord-Haute Somme" }, "geometry": { "type": "Point", "coordinates": [ 454634.543503794469871, 6432461.39374360255897 ] } },{ "type": "Feature", "properties": { "id": 650, "code_region": "HDF", "departement": "02", "nom_hopital": "CH Chauny - 02", "suppressions": null, "menaces": "2019 : chirurgie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Aisne Nord - Haute Somme" }, "geometry": { "type": "Point", "coordinates": [ 360073.988489925861359, 6381577.510641334578395 ] } },{ "type": "Feature", "properties": { "id": 85, "code_region": "HDF", "departement": "02", "nom_hopital": "CH Guise - 02", "suppressions": "2020 : urgences fermé;2019 : chirurgie fermé;1994 : maternité fermé", "menaces": null, "victoires": "2020 : urgences réouvert", "ghi_nom": "", "ght_nom": "Aisne Nord-Haute Somme" }, "geometry": { "type": "Point", "coordinates": [ 403558.762650249060243, 6428613.371971656568348 ] } },{ "type": "Feature", "properties": { "id": 279, "code_region": "HDF", "departement": "02", "nom_hopital": "CH Jeanne de Navarre Château-Thierry - 02", "suppressions": null, "menaces": "2014 : maternité menacé;2014 : néonatalogie menacé;2014 : soins intensifs menacé;2012 : chirurgie menacé", "victoires": "2012 : soins intensifs victoire", "ghi_nom": "", "ght_nom": "Aisne Sud - Saphir" }, "geometry": { "type": "Point", "coordinates": [ 378762.615102295996621, 6282688.335153644904494 ] } },{ "type": "Feature", "properties": { "id": 286, "code_region": "HDF", "departement": "02", "nom_hopital": "CH Laon - 02", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "Aisne Nord-Haute Somme" }, "geometry": { "type": "Point", "coordinates": [ 403045.758172721194569, 6371288.059269454330206 ] } },{ "type": "Feature", "properties": { "id": 644, "code_region": "HDF", "departement": "59", "nom_hopital": "CH Armentières", "suppressions": "2019 : gastro-entérologie fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Lille Métropole Flandre Intérieure" }, "geometry": { "type": "Point", "coordinates": [ 319234.270164284855127, 6565718.176135245710611 ] } },{ "type": "Feature", "properties": { "id": 654, "code_region": "HDF", "departement": "59", "nom_hopital": "CH Douai - 59", "suppressions": null, "menaces": "2021 : urgences pédiatriques interrompu", "victoires": "2022 : urgences pédiatriques réouvert", "ghi_nom": "", "ght_nom": "GHT du Douaisis" }, "geometry": { "type": "Point", "coordinates": [ 345517.454340491094626, 6504979.136560742743313 ] } },{ "type": "Feature", "properties": { "id": 560, "code_region": "HDF", "departement": "59", "nom_hopital": "CH Fourmies", "suppressions": null, "menaces": "2021 : chirurgie menacé;2021 : maternité menacé;2021 : urgences menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Hainaut-Cambrésis" }, "geometry": { "type": "Point", "coordinates": [ 451963.133818041242193, 6447985.395591988228261 ] } },{ "type": "Feature", "properties": { "id": 263, "code_region": "HDF", "departement": "59", "nom_hopital": "CH Gustave Dron Tourcoing - 59", "suppressions": "2019 : maternité transféré", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Lille Métropole Flandre Intérieure" }, "geometry": { "type": "Point", "coordinates": [ 354194.832211453467607, 6576396.168886300176382 ] } },{ "type": "Feature", "properties": { "id": 911, "code_region": "HDF", "departement": "59", "nom_hopital": "CHM Maubeuge - 59", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Hainaut-Cambrésis" }, "geometry": { "type": "Point", "coordinates": [ 444058.016207598149776, 6494927.541794992983341 ] } },{ "type": "Feature", "properties": { "id": 33, "code_region": "HDF", "departement": "59", "nom_hopital": "CH Roubaix - 59", "suppressions": null, "menaces": "2019 : unité hivernale interrompu;2017 : maternité fusionné", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Lille Métropole Flandre Intérieure" }, "geometry": { "type": "Point", "coordinates": [ 353168.980354044353589, 6564812.707525378093123 ] } },{ "type": "Feature", "properties": { "id": 695, "code_region": "HDF", "departement": "59", "nom_hopital": "CHRU Lille - 59", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Lille Métropole Flandre Intérieure" }, "geometry": { "type": "Point", "coordinates": [ 338026.006947077810764, 6553322.273717112839222 ] } },{ "type": "Feature", "properties": { "id": 303, "code_region": "HDF", "departement": "59", "nom_hopital": "CH Somain - 59", "suppressions": "2019 : urgences de nuit fermé", "menaces": "2014 : soins non programmés interrompu;2008 : soins longue durée menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Douaisi" }, "geometry": { "type": "Point", "coordinates": [ 365261.861455358855892, 6508714.183509206399322 ] } },{ "type": "Feature", "properties": { "id": 264, "code_region": "HDF", "departement": "59", "nom_hopital": "CH Wattrelos - 59", "suppressions": "2018 : urgences fermé", "menaces": "2013 : urgences menacé", "victoires": "2014 : néonatalité maintenu;2014 : soins intensifs maintenu", "ghi_nom": "", "ght_nom": "GHT Lille Métropole Flandre Intérieure" }, "geometry": { "type": "Point", "coordinates": [ 358687.889355972409248, 6568437.884773700498044 ] } },{ "type": "Feature", "properties": { "id": 626, "code_region": "HDF", "departement": "59", "nom_hopital": "EPSM des Flandres Bailleul - 59", "suppressions": "2012 : chirurgie transféré", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 305485.232329286634922, 6576494.137147201225162 ] } },{ "type": "Feature", "properties": { "id": 589, "code_region": "HDF", "departement": "59", "nom_hopital": "EPSM Lille Métropole Armentières - 59", "suppressions": null, "menaces": null, "victoires": "2011 : psychiatrie victoire", "ghi_nom": "", "ght_nom": "GHT Lille Métropole Flandre Intérieure" }, "geometry": { "type": "Point", "coordinates": [ 322101.998136423702817, 6565264.69021232612431 ] } },{ "type": "Feature", "properties": { "id": 265, "code_region": "HDF", "departement": "59", "nom_hopital": "IPL - Lille - 59", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 342301.345346308953594, 6555857.008682402782142 ] } },{ "type": "Feature", "properties": { "id": 645, "code_region": "HDF", "departement": "59", "nom_hopital": "Maternité Gellé Roubaix - 59", "suppressions": "2017 : maternité transféré", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 355992.715311777137686, 6565607.003575449809432 ] } },{ "type": "Feature", "properties": { "id": 227, "code_region": "HDF", "departement": "60", "nom_hopital": "Chantilly - 60", "suppressions": "2012 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 274527.408472712850198, 6307538.743459695018828 ] } },{ "type": "Feature", "properties": { "id": 289, "code_region": "HDF", "departement": "60", "nom_hopital": "Chaumont en Vexin - 60", "suppressions": "2011 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 209526.988762749824673, 6319483.650903006084263 ] } },{ "type": "Feature", "properties": { "id": 223, "code_region": "HDF", "departement": "60", "nom_hopital": "CH Clermont de l'Oise - 60", "suppressions": "2018 : maternité fermé", "menaces": null, "victoires": "2012 : maternité maintenu", "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 268511.218172665685415, 6339369.790131769143045 ] } },{ "type": "Feature", "properties": { "id": 225, "code_region": "HDF", "departement": "60", "nom_hopital": "CH Crépy en Valois - 60", "suppressions": "1990 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Oise Nord Est" }, "geometry": { "type": "Point", "coordinates": [ 321523.844190876930952, 6314669.534495669417083 ] } },{ "type": "Feature", "properties": { "id": 68, "code_region": "HDF", "departement": "60", "nom_hopital": "CHI Compiègne - 60", "suppressions": "2014 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "CHI Compiègnes-Noyon", "ght_nom": "GHT Oise Nord Est" }, "geometry": { "type": "Point", "coordinates": [ 310544.035988658666611, 6340574.217120145447552 ] } },{ "type": "Feature", "properties": { "id": 222, "code_region": "HDF", "departement": "60", "nom_hopital": "CHI Noyon - 60", "suppressions": "2014 : maternité fermé;2012 : chirurgie fermé", "menaces": "2012 : médecine chirurgie obstétrique menacé", "victoires": "2013 : maternité victoire", "ghi_nom": "CHI Compiègnes-Noyon", "ght_nom": "GHT Oise Nord Est" }, "geometry": { "type": "Point", "coordinates": [ 333946.865014608949423, 6375202.635029547847807 ] } },{ "type": "Feature", "properties": { "id": 226, "code_region": "HDF", "departement": "60", "nom_hopital": "CHIPO Méru - 60", "suppressions": "2002 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "GHCPO", "ght_nom": "GHT Nord-Ouest Vexin Val-d’Oise" }, "geometry": { "type": "Point", "coordinates": [ 237685.433829329675063, 6315030.717539916746318 ] } },{ "type": "Feature", "properties": { "id": 573, "code_region": "HDF", "departement": "60", "nom_hopital": "CHPI Clermont - 60", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 269163.321570131753106, 6338822.787648173980415 ] } },{ "type": "Feature", "properties": { "id": 224, "code_region": "HDF", "departement": "60", "nom_hopital": "GHPSO Creil - 60", "suppressions": "2021 : SMUR fermé;2018 : maternité transféré;diabétologie fermé", "menaces": "2021 : urgences fusionné;2021 : urgences réduit (autre);2017 : maternité menacé", "victoires": "2022 : maternité victoire", "ghi_nom": "GHPSO", "ght_nom": "GHT Oise Sud" }, "geometry": { "type": "Point", "coordinates": [ 273866.86875329958275, 6316971.438697383739054 ] } },{ "type": "Feature", "properties": { "id": 82, "code_region": "HDF", "departement": "60", "nom_hopital": "GHPSO Senlis - 60", "suppressions": "2021 : urgences transféré", "menaces": "2021 : urgences réduit (autre)", "victoires": null, "ghi_nom": "GHPSO", "ght_nom": "GHT Oise Sud" }, "geometry": { "type": "Point", "coordinates": [ 286737.131425708590541, 6308379.945636545307934 ] } },{ "type": "Feature", "properties": { "id": 282, "code_region": "HDF", "departement": "62", "nom_hopital": "Bapaume – 62 ", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 317228.365438645298127, 6464307.358188168145716 ] } },{ "type": "Feature", "properties": { "id": 647, "code_region": "HDF", "departement": "62", "nom_hopital": "CH Boulogne-sur-Mer - 62", "suppressions": "2021 : addictologie fermé", "menaces": "2021 : urgences menacé;2021 : urgences de nuit en néonatalogie réduit (autre);2020 : SMUR interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Côte d'Opale" }, "geometry": { "type": "Point", "coordinates": [ 181375.312356900481973, 6572355.059980899095535 ] } },{ "type": "Feature", "properties": { "id": 660, "code_region": "HDF", "departement": "62", "nom_hopital": "CH du Ternois Gauchin-Verloingt - 62", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Arois-Ternois" }, "geometry": { "type": "Point", "coordinates": [ 258517.78419747177395, 6512191.222241692245007 ] } },{ "type": "Feature", "properties": { "id": 661, "code_region": "HDF", "departement": "62", "nom_hopital": "CHL Hesdin - 62", "suppressions": "2014 : médecine fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 226829.456270404160023, 6511151.8128955475986 ] } },{ "type": "Feature", "properties": { "id": 648, "code_region": "HDF", "departement": "62", "nom_hopital": "CHR Saint-Omer - 62", "suppressions": null, "menaces": "2019 : SMUR interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Dunkerquois et Audomarois" }, "geometry": { "type": "Point", "coordinates": [ 250887.9984474927478, 6568882.458173804916441 ] } },{ "type": "Feature", "properties": { "id": 241, "code_region": "HDF", "departement": "62", "nom_hopital": "CH Schaffner Lens - 62", "suppressions": "2017 : pneumologie fermé", "menaces": "2020 : SMUR interrompu;2019 : urgences menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 315222.425317395827733, 6520863.919244571588933 ] } },{ "type": "Feature", "properties": { "id": 905, "code_region": "HDF", "departement": "62", "nom_hopital": "Clinique Anne d'Artois Béthunes - 62", "suppressions": null, "menaces": "2022 : maternité interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 292766.244918770797085, 6540283.890083196572959 ] } },{ "type": "Feature", "properties": { "id": 914, "code_region": "HDF", "departement": "62", "nom_hopital": "Clinique Côte d'Opale Saint-Martin-Boulogne - 62", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 182998.752044349908829, 6572659.028125180862844 ] } },{ "type": "Feature", "properties": { "id": 242, "code_region": "HDF", "departement": "62", "nom_hopital": "HM Berck - 62", "suppressions": "2002 : service de rééducation polyvalente fermé;bloc chirurgical fermé;laboratoire fermé;pharmacie fermé;radiographie fermé", "menaces": "2017 : soins intensifs réduit (autre)", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 173661.558858439413598, 6516011.581503149122 ] } },{ "type": "Feature", "properties": { "id": 646, "code_region": "HDF", "departement": "62", "nom_hopital": "Polyclinique de Riaumont Liévin - 62", "suppressions": "2017 : maternité transféré;2015 : cardiologie fermé;2015 : neurologie fermé;2015 : pneumologie fermé;2012 : chirurgie transféré", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 309880.007665776007343, 6518739.064910273067653 ] } },{ "type": "Feature", "properties": { "id": 684, "code_region": "HDF", "departement": "62", "nom_hopital": "Polyclinique Hénin-Beaumont - 62", "suppressions": "urgences de nuit fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 328308.335551477968693, 6521896.395080753602087 ] } },{ "type": "Feature", "properties": { "id": 583, "code_region": "HDF", "departement": "80", "nom_hopital": "Abbeville - 80", "suppressions": null, "menaces": "2014 : néonatalité réduit (autre)", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 203922.196190342132468, 6463973.865955667570233 ] } },{ "type": "Feature", "properties": { "id": 323, "code_region": "HDF", "departement": "80", "nom_hopital": "CH Corbie - 80", "suppressions": "2000 : maternité fermé;1994 : chirurgie fermé", "menaces": "maternité interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Somme Littoral Sud" }, "geometry": { "type": "Point", "coordinates": [ 279865.634926561091561, 6431402.77903713658452 ] } },{ "type": "Feature", "properties": { "id": 390, "code_region": "HDF", "departement": "80", "nom_hopital": "CH Doullens -80", "suppressions": "2011 : maternité fermé;2009 : chirurgie fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Somme Littoral Sud" }, "geometry": { "type": "Point", "coordinates": [ 260620.735912031115731, 6473573.905184150673449 ] } },{ "type": "Feature", "properties": { "id": 45, "code_region": "HDF", "departement": "80", "nom_hopital": "CHIMR Montdidier - 80", "suppressions": "1998 : maternité fermé", "menaces": "2015 : soins de suite polyvalents interrompu", "victoires": null, "ghi_nom": "CHI Montdidier-Roye", "ght_nom": "GHT Somme Littoral Sud" }, "geometry": { "type": "Point", "coordinates": [ 286515.555311292293482, 6385604.563196355476975 ] } },{ "type": "Feature", "properties": { "id": 649, "code_region": "HDF", "departement": "80", "nom_hopital": "CHIMR Roye - 80", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHI Montdidier-Roye", "ght_nom": "GHT Somme Littoral Sud" }, "geometry": { "type": "Point", "coordinates": [ 310899.759781453816686, 6395263.004584467038512 ] } },{ "type": "Feature", "properties": { "id": 683, "code_region": "HDF", "departement": "80", "nom_hopital": "CH Péronne - 80", "suppressions": "2021 : SMUR fermé;2019 : urgences fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Aisne Nord - Haute Somme" }, "geometry": { "type": "Point", "coordinates": [ 326106.503551200032234, 6434865.537312492728233 ] } },{ "type": "Feature", "properties": { "id": 513, "code_region": "HDF", "departement": "80", "nom_hopital": "CHU Amiens Picardie - 80", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Somme Littoral Sud" }, "geometry": { "type": "Point", "coordinates": [ 255274.060586776642594, 6430187.60645948536694 ] } },{ "type": "Feature", "properties": { "id": 324, "code_region": "HDF", "departement": "80", "nom_hopital": "EPSMS Philippe Pinel Amiens - 80", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 253282.4269523920957, 6423877.597098799422383 ] } },{ "type": "Feature", "properties": { "id": 512, "code_region": "HDF", "departement": "80", "nom_hopital": "Maternité Camille Desmoulins Amiens - 80", "suppressions": "2014 : maternité transféré", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 256242.828705493215239, 6426400.18791473004967 ] } },{ "type": "Feature", "properties": { "id": 445, "code_region": "IDF", "departement": "75", "nom_hopital": "Centre Santé Chemin Vert 11", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 264851.583115050918423, 6250929.176557219587266 ] } },{ "type": "Feature", "properties": { "id": 901, "code_region": "IDF", "departement": "75", "nom_hopital": "Centre Santé Croix Rouge Ile-de-France", "suppressions": null, "menaces": null, "victoires": "2022 : centre de santé maintenu", "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 263569.360396672040224, 6245443.263647966086864 ] } },{ "type": "Feature", "properties": { "id": 442, "code_region": "IDF", "departement": "75", "nom_hopital": "Centre Santé du Moulinet 13", "suppressions": null, "menaces": "2012 : centre de santé menacé;2012 : laboratoire d'analyses médicales menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 262837.331212120712735, 6246959.664597467519343 ] } },{ "type": "Feature", "properties": { "id": 522, "code_region": "IDF", "departement": "75", "nom_hopital": "Centre Santé rue Daviel Paris 13 ", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 262853.02127625135472, 6246143.781262684613466 ] } },{ "type": "Feature", "properties": { "id": 515, "code_region": "IDF", "departement": "75", "nom_hopital": "Centre Santé St-Victor Paris 5", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 261118.765127404534724, 6249162.49753048364073 ] } },{ "type": "Feature", "properties": { "id": 913, "code_region": "IDF", "departement": "75", "nom_hopital": "CH Boucicaut 15", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "AP-HP", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 254206.495037250046153, 6248218.072599345818162 ] } },{ "type": "Feature", "properties": { "id": 525, "code_region": "IDF", "departement": "75", "nom_hopital": "CH Broussais 14", "suppressions": "2009 : centre IVG fermé;1999 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "GH EHGP-Broussais", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 257685.806707465555519, 6246246.847347899340093 ] } },{ "type": "Feature", "properties": { "id": 902, "code_region": "IDF", "departement": "75", "nom_hopital": "CH La Collégiale Paris 5", "suppressions": null, "menaces": "2022 : gériatrie interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 261872.554805371939437, 6247443.358678428456187 ] } },{ "type": "Feature", "properties": { "id": 438, "code_region": "IDF", "departement": "75", "nom_hopital": "CH Laennec 7", "suppressions": "2000 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "AP-HP", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 258310.810156562249176, 6250695.603608826175332 ] } },{ "type": "Feature", "properties": { "id": 527, "code_region": "IDF", "departement": "75", "nom_hopital": "CH Léopold Bellan Paris 14", "suppressions": null, "menaces": "anesthésie menacé;bloc opératoire menacé;chirurgie menacé;proctologie menacé;soins de suite menacé;soins de suite et rééducation neurologique menacé;stérilisation menacé;urgences menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 257183.805812574923038, 6245935.901219304651022 ] } },{ "type": "Feature", "properties": { "id": 517, "code_region": "IDF", "departement": "75", "nom_hopital": "CH Saint Louis Paris - 10", "suppressions": "service grands brûlés fermé", "menaces": "2022 : hématologie menacé;2012 : chirurgie ambulatoire menacé;2012 : imprimerie menacé;2012 : reprographie menacé;2012 : stérilisation menacé;ORL fusionné", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 263528.920876462187152, 6253451.03402884118259 ] } },{ "type": "Feature", "properties": { "id": 532, "code_region": "IDF", "departement": "75", "nom_hopital": "CH Saint-Michel 15", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 254538.379286294337362, 6248601.847717953845859 ] } },{ "type": "Feature", "properties": { "id": 531, "code_region": "IDF", "departement": "75", "nom_hopital": "CH Saint-Vincent-de-Paul 14", "suppressions": "2011 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 258219.268887900019763, 6247156.871067463420331 ] } },{ "type": "Feature", "properties": { "id": 448, "code_region": "IDF", "departement": "75", "nom_hopital": "CH Tenon Paris 20", "suppressions": "maladies infectieuses transféré", "menaces": "2022 : bloc opératoire réduit (autre);2021 : urgences menacé", "victoires": "2013 : centre IVG maintenu", "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 267377.201530415739398, 6252168.071074823848903 ] } },{ "type": "Feature", "properties": { "id": 533, "code_region": "IDF", "departement": "75", "nom_hopital": "CHU Bichat-Claude Bernard - Paris 75018", "suppressions": null, "menaces": "2021 : cardiologie réduit (lits fermés)", "victoires": null, "ghi_nom": "GHUNUP", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 259634.218882035784191, 6257687.553891289047897 ] } },{ "type": "Feature", "properties": { "id": 526, "code_region": "IDF", "departement": "75", "nom_hopital": "CHU Cochin Paris 12", "suppressions": null, "menaces": "chirurgie menacé;stomatologie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 260379.984028507285984, 6247301.270615451969206 ] } },{ "type": "Feature", "properties": { "id": 444, "code_region": "IDF", "departement": "75", "nom_hopital": "CHU Fernand Widal Paris 10", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "GH Saint-Louis-Lariboisière-Fernand Widal", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 262657.745474387076683, 6254749.404287245124578 ] } },{ "type": "Feature", "properties": { "id": 516, "code_region": "IDF", "departement": "75", "nom_hopital": "CHU Lariboisière Paris 10", "suppressions": null, "menaces": "2012 : économat fournisseurs menacé;ORL fusionné", "victoires": null, "ghi_nom": "GH Saint-Louis-Lariboisière-Fernand Widal", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 261968.614429478126112, 6255051.332978613674641 ] } },{ "type": "Feature", "properties": { "id": 523, "code_region": "IDF", "departement": "75", "nom_hopital": "CHU La Salpétrière Paris 13", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 262855.830609333293978, 6247520.069179206155241 ] } },{ "type": "Feature", "properties": { "id": 521, "code_region": "IDF", "departement": "75", "nom_hopital": "CHU Saint Antoine Paris 12", "suppressions": "2012 : maternité fermé;Centre national de référence en hémobiologie périnatale (CNRHP) transféré;hémobiologie périnatale fermé", "menaces": "2012 : pneumologie menacé;2012 : soins palliatifs menacé;2010 : IVG menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 265239.974764435959514, 6249453.444032685831189 ] } },{ "type": "Feature", "properties": { "id": 518, "code_region": "IDF", "departement": "75", "nom_hopital": "Clinique Mona Lisa 11", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 265126.159237333806232, 6251109.612294724211097 ] } },{ "type": "Feature", "properties": { "id": 530, "code_region": "IDF", "departement": "75", "nom_hopital": "ESPIC Saint-Joseph Paris 14", "suppressions": "2008 : maladies infectieuses fermé;2008 : pédiatrie fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 258799.801260725711472, 6246325.297668561339378 ] } },{ "type": "Feature", "properties": { "id": 697, "code_region": "IDF", "departement": "75", "nom_hopital": "GHNEM - Necker - 75015", "suppressions": null, "menaces": "2021 : pédiatrie réduit (autre)", "victoires": null, "ghi_nom": "GHNEM", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 257690.143125023692846, 6248645.940320470370352 ] } },{ "type": "Feature", "properties": { "id": 761, "code_region": "IDF", "departement": "75", "nom_hopital": "GHUPN Maison Blanche-Hauteville Paris - 10", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "GHUPN", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 264991.16444819822209, 6253542.159216642379761 ] } },{ "type": "Feature", "properties": { "id": 759, "code_region": "IDF", "departement": "75", "nom_hopital": "GHUPN Sainte-Anne Paris - 14", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "GHUPN", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 260358.306909989798442, 6246003.517223913222551 ] } },{ "type": "Feature", "properties": { "id": 441, "code_region": "IDF", "departement": "75", "nom_hopital": "HE Georges Pompidou 15", "suppressions": null, "menaces": "immunologie menacé", "victoires": null, "ghi_nom": "HEGP", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 253071.051567316462751, 6247617.617171066813171 ] } },{ "type": "Feature", "properties": { "id": 514, "code_region": "IDF", "departement": "75", "nom_hopital": "HIA Val de Grâce Paris 5", "suppressions": "chirurgie traumatologique fermé;neurologie fermé;ophtalmologie fermé;urgences fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 260801.59469243165222, 6247734.357381423935294 ] } },{ "type": "Feature", "properties": { "id": 443, "code_region": "IDF", "departement": "75", "nom_hopital": "Hôtel-Dieu Paris - 75", "suppressions": "2017 : urgences ophtalmiques transféré;2013 : urgences fermé;2000 : maternité fermé", "menaces": "2012 : chirurgie de nuit menacé;2011 : chirurgie réduit (autre);2011 : radiologie réduit (autre);2011 : urgences menacé;chirurgie fusionné", "victoires": "2014 : urgences maintenu", "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 261479.834522005694453, 6250240.690950558520854 ] } },{ "type": "Feature", "properties": { "id": 447, "code_region": "IDF", "departement": "75", "nom_hopital": "Maternité Les Bluets Paris 12 ", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 266510.792954575037584, 6248477.538965876214206 ] } },{ "type": "Feature", "properties": { "id": 528, "code_region": "IDF", "departement": "75", "nom_hopital": "Maternité ND Bon-secours Paris 14", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 259333.263441160699585, 6246027.186450075358152 ] } },{ "type": "Feature", "properties": { "id": 439, "code_region": "IDF", "departement": "75", "nom_hopital": "Paris 14 Pédopsychiatrie\n", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 257921.157669421401806, 6246717.549271821044385 ] } },{ "type": "Feature", "properties": { "id": 21, "code_region": "IDF", "departement": "75", "nom_hopital": "Paris APHP\n37 hôpitaux et 676 services cliniques en 2009", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 261882.399055323563516, 6250525.911528746597469 ] } },{ "type": "Feature", "properties": { "id": 519, "code_region": "IDF", "departement": "75", "nom_hopital": "Paris Armand Trousseau\r\n", "suppressions": null, "menaces": "2012 : maxillofacial menacé;2012 : ORL menacé;2011 : pédiatrie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 267756.523576825857162, 6248225.424496799707413 ] } },{ "type": "Feature", "properties": { "id": 446, "code_region": "IDF", "departement": "75", "nom_hopital": "Paris Centre dentaire Archereau\n19°", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 265153.425335225067101, 6255024.480101448483765 ] } },{ "type": "Feature", "properties": { "id": 127, "code_region": "IDF", "departement": "75", "nom_hopital": "Paris Henri Mondor\r\n", "suppressions": null, "menaces": "2012 : neurochirurgie menacé;gériatrie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 272909.199239801615477, 6240051.507338843308389 ] } },{ "type": "Feature", "properties": { "id": 520, "code_region": "IDF", "departement": "75", "nom_hopital": "Paris Pierre Rouquès\n", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 266620.623403488309123, 6248006.837041965685785 ] } },{ "type": "Feature", "properties": { "id": 80, "code_region": "IDF", "departement": "77", "nom_hopital": "CH Lagny - 77", "suppressions": "2011 : radiothérapie fermé;2009 : médecine nucléaire fermé;radiologie privatisé;stérilisation privatisé", "menaces": "urgences de nuit réduit (autre)", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 301183.073354173451662, 6254122.756159513257444 ] } },{ "type": "Feature", "properties": { "id": 754, "code_region": "IDF", "departement": "77", "nom_hopital": "CH Marne Cantereine - 77", "suppressions": "2011 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 292788.664443920890335, 6255463.593101595528424 ] } },{ "type": "Feature", "properties": { "id": 545, "code_region": "IDF", "departement": "77", "nom_hopital": "CH Saint-Camille Bry-sur-Marne - 77", "suppressions": null, "menaces": "2011 : maternité fusionné", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 281247.916327699727844, 6246585.559201348572969 ] } },{ "type": "Feature", "properties": { "id": 100, "code_region": "IDF", "departement": "77", "nom_hopital": "CHSSM Fontainebleau - 77", "suppressions": "2016 : maternité fermé", "menaces": "2021 : SMUR interrompu;2018 : ophtalmologie menacé;2018 : urologie menacé;2012 : urgences de nuit menacé", "victoires": "2013 : chirurgie victoire", "ghi_nom": "CHSSM", "ght_nom": "GHT 77 - Sud" }, "geometry": { "type": "Point", "coordinates": [ 300288.035658485023305, 6175460.524447773583233 ] } },{ "type": "Feature", "properties": { "id": 101, "code_region": "IDF", "departement": "77", "nom_hopital": "CHSSM Montereau - 77", "suppressions": "2019 : pédiatrie transféré;2012 : néonatalogie fermé", "menaces": "2019 : maternité menacé;2015 : réanimation réduit (lits fermés);2012 : maternité réduit (autre)", "victoires": null, "ghi_nom": "CHSSM", "ght_nom": "GHT 77 - Sud" }, "geometry": { "type": "Point", "coordinates": [ 328690.659851634467486, 6170963.342688431032002 ] } },{ "type": "Feature", "properties": { "id": 53, "code_region": "IDF", "departement": "77", "nom_hopital": "CHSSM Nemours - 77", "suppressions": "2016 : EHPAD fermé;2000 : chirurgie fermé", "menaces": "réanimation transformé", "victoires": null, "ghi_nom": "CHSSM", "ght_nom": "GHT 77 - Sud" }, "geometry": { "type": "Point", "coordinates": [ 300910.523064350709319, 6150764.894394529983401 ] } },{ "type": "Feature", "properties": { "id": 871, "code_region": "IDF", "departement": "77", "nom_hopital": "Clinique de la Forêt Fontainebleau - 77", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 300739.753543574362993, 6175734.238104308024049 ] } },{ "type": "Feature", "properties": { "id": 753, "code_region": "IDF", "departement": "77", "nom_hopital": "GHEF Marne-La-Vallée - Jossigny 77", "suppressions": "2020 : chirurgie orthopédique et traumatologique transféré", "menaces": "2019 : pédiatrie menacé", "victoires": null, "ghi_nom": "GHEF", "ght_nom": "GHT 77 - Nord" }, "geometry": { "type": "Point", "coordinates": [ 308591.357944190036505, 6249194.404464244842529 ] } },{ "type": "Feature", "properties": { "id": 99, "code_region": "IDF", "departement": "77", "nom_hopital": "GHEF René Arbeltier Coulommier - 77", "suppressions": "2020 : chirurgie viscérale et orthopédique transféré", "menaces": "2013 : médecine réduit (lits fermés)", "victoires": null, "ghi_nom": "GHEF", "ght_nom": "GHT 77 - Nord" }, "geometry": { "type": "Point", "coordinates": [ 343289.830700978578534, 6243048.545422262512147 ] } },{ "type": "Feature", "properties": { "id": 98, "code_region": "IDF", "departement": "77", "nom_hopital": "GHEF Saint-Faron Meaux - 77", "suppressions": null, "menaces": "2019 : pédiatrie menacé;2018 : SMUR interrompu;2018 : urgences interrompu;2012 : urgences de nuit réduit (autre);2011 : chirurgie viscérale et orthopédique réduit (autre)", "victoires": null, "ghi_nom": "GHEF", "ght_nom": "GHT 77 - Nord" }, "geometry": { "type": "Point", "coordinates": [ 320375.361563070386183, 6267811.681217637844384 ] } },{ "type": "Feature", "properties": { "id": 752, "code_region": "IDF", "departement": "77", "nom_hopital": "GHEP Jouarre - 77", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "GHEF", "ght_nom": "GHT 77 - Nord" }, "geometry": { "type": "Point", "coordinates": [ 348255.338025600183755, 6262708.548335040919483 ] } },{ "type": "Feature", "properties": { "id": 775, "code_region": "IDF", "departement": "77", "nom_hopital": "GHSIF Brie-Comte-Robert - 77", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "GHSIF", "ght_nom": "GHT 77 - Sud" }, "geometry": { "type": "Point", "coordinates": [ 290025.275577403604984, 6222924.60520304273814 ] } },{ "type": "Feature", "properties": { "id": 46, "code_region": "IDF", "departement": "77", "nom_hopital": "GHSIF Melun - 77", "suppressions": "2015 : chirurgie privatisé;radiologie privatisé", "menaces": "2011 : psychiatrie réduit (autre);2009 : bloc chirurgical réduit (autre)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT 77 - Sud" }, "geometry": { "type": "Point", "coordinates": [ 294232.056001633114647, 6200199.928446990437806 ] } },{ "type": "Feature", "properties": { "id": 879, "code_region": "IDF", "departement": "78", "nom_hopital": "CH de Versailles - Le Chesnay - 78", "suppressions": "2019 : urgences fermé", "menaces": "2022 : urgences menacé;2021 : pédiatrie menacé;2002 : médecine réduit (lits fermés);2002 : ORL réduit (autre)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Yvelines Sud" }, "geometry": { "type": "Point", "coordinates": [ 236638.092932693194598, 6246331.06724039465189 ] } },{ "type": "Feature", "properties": { "id": 880, "code_region": "IDF", "departement": "78", "nom_hopital": "CHIMM Les Mureaux - 78", "suppressions": "2021 : pédopsychiatrie fermé;2018 : réanimation fermé;2016 : oncologie transféré", "menaces": "2020 : pédopsychiatrie menacé;2017 : réanimation menacé", "victoires": null, "ghi_nom": "CHIMM", "ght_nom": "GHT Yvelines Nord" }, "geometry": { "type": "Point", "coordinates": [ 215506.34157107770443, 6272483.166389283724129 ] } },{ "type": "Feature", "properties": { "id": 130, "code_region": "IDF", "departement": "78", "nom_hopital": "CHIMM Meulan - 78", "suppressions": "2022 : maternité fermé;2021 : pédopsychiatrie fermé;2018 : réanimation fermé;2016 : oncologie transféré", "menaces": "2017 : réanimation menacé", "victoires": null, "ghi_nom": "CHIMM", "ght_nom": "GHT Yvelines Nord" }, "geometry": { "type": "Point", "coordinates": [ 212808.199535172170727, 6275325.025288980454206 ] } },{ "type": "Feature", "properties": { "id": 135, "code_region": "IDF", "departement": "78", "nom_hopital": "CHIPSG Poissy - 78", "suppressions": null, "menaces": "2022 : urgences réduit (autre);2014 : psychiatrie menacé;2013 : maternité menacé;centre IVG menacé", "victoires": null, "ghi_nom": "CHIPSG", "ght_nom": "GHT Yvelines Nord" }, "geometry": { "type": "Point", "coordinates": [ 225149.71341644655331, 6261085.383552930317819 ] } },{ "type": "Feature", "properties": { "id": 31, "code_region": "IDF", "departement": "78", "nom_hopital": "CHIPSG Saint-Germain-en-Laye – 78", "suppressions": "2018 : médecine interne fermé;2010 : réanimation fermé;2010 : urgences fermé;2006 : cardiologie transféré;2006 : pédiatrie transféré;2003 : maternité fermé", "menaces": "2002 : urgences interrompu", "victoires": null, "ghi_nom": "CHIPSG", "ght_nom": "GHT Yvelines Nord" }, "geometry": { "type": "Point", "coordinates": [ 233081.291206474445062, 6257736.175400569103658 ] } },{ "type": "Feature", "properties": { "id": 766, "code_region": "IDF", "departement": "78", "nom_hopital": "CH Plaisir - 78", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Yvelines Sud" }, "geometry": { "type": "Point", "coordinates": [ 216796.469427608215483, 6244963.221893809735775 ] } },{ "type": "Feature", "properties": { "id": 881, "code_region": "IDF", "departement": "78", "nom_hopital": "CH Privé Conflans Sainte-Honorine - 78", "suppressions": "2001 : chirurgie fermé;2001 : maternité fermé;2001 : urgences fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 234308.139519289165037, 6274186.46834899391979 ] } },{ "type": "Feature", "properties": { "id": 131, "code_region": "IDF", "departement": "78", "nom_hopital": "CH Quesnais - Mantes-La-Jolie - 78", "suppressions": "2012 : urgences viscérales et orthopédiques fermé", "menaces": "2022 : chirurgie menacé;2022 : urgences menacé;2019 : pédiatrie menacé;2019 : SMUR réduit (autre);2019 : urgences pédiatriques menacé;2018 : soins intensifs interrompu;2015 : SMUR interrompu;2015 : soins de suite et rééducation menacé;2012 : urgences viscérales et orthopédiques réduit (autre);2010 : coronographie menacé;cardiologie interventionnelle menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Yvelines Nord" }, "geometry": { "type": "Point", "coordinates": [ 186347.162224392814096, 6274529.230921160429716 ] } },{ "type": "Feature", "properties": { "id": 621, "code_region": "IDF", "departement": "78", "nom_hopital": "Ch Rambouillet - 78", "suppressions": null, "menaces": "2022 : urgences réduit (autre);2019 : urgences interrompu;2011 : urgences de nuit menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Yvelines Sud" }, "geometry": { "type": "Point", "coordinates": [ 203170.08441415411653, 6215908.612054170109332 ] } },{ "type": "Feature", "properties": { "id": 133, "code_region": "IDF", "departement": "78", "nom_hopital": "Maisons Laffitte - 78\nHôpital des Courses menacé 2013\nHôpital privé non lucratif", "suppressions": "2013 : chirurgie fermé;chirurgie viscérale et urologique fermé", "menaces": "chirurgie orthopédique et réparatrice réduit (lits fermés);soins continus réduit (lits fermés)", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 238761.996932200941956, 6265722.107850523665547 ] } },{ "type": "Feature", "properties": { "id": 136, "code_region": "IDF", "departement": "78", "nom_hopital": "Saint Cyr l'École - 78", "suppressions": "2013 : unité de maternologie fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 230109.688546563993441, 6240923.103471195325255 ] } },{ "type": "Feature", "properties": { "id": 134, "code_region": "IDF", "departement": "78", "nom_hopital": "Sartrouville - 78", "suppressions": "centre de santé fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 240260.901064765435876, 6264904.978469251655042 ] } },{ "type": "Feature", "properties": { "id": 132, "code_region": "IDF", "departement": "78", "nom_hopital": "Verneuil sur Seine - 78", "suppressions": "chirurgie fermé;maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 219910.835123905068031, 6271315.006116647273302 ] } },{ "type": "Feature", "properties": { "id": 108, "code_region": "IDF", "departement": "91", "nom_hopital": "Athis-Mons - 91", "suppressions": "2017 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 265963.716373820556328, 6225376.520791130140424 ] } },{ "type": "Feature", "properties": { "id": 113, "code_region": "IDF", "departement": "91", "nom_hopital": "CH Arpajon - 91", "suppressions": "2015 : réanimation fermé", "menaces": "2013 : réanimation menacé", "victoires": "2020 : réanimation maintenu", "ghi_nom": "CHSF", "ght_nom": "GHT Ile-de-France Sud" }, "geometry": { "type": "Point", "coordinates": [ 249499.446250856039114, 6204593.451896788552403 ] } },{ "type": "Feature", "properties": { "id": 19, "code_region": "IDF", "departement": "91", "nom_hopital": "CH Dupuytren Draveil - 91", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHU Henri Mondor" }, "geometry": { "type": "Point", "coordinates": [ 268625.466408986889292, 6219903.885998465120792 ] } },{ "type": "Feature", "properties": { "id": 292, "code_region": "IDF", "departement": "91", "nom_hopital": "CH G. Clémenceau Champcueil - 91", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHU Henri Mondor" }, "geometry": { "type": "Point", "coordinates": [ 270781.096490606840234, 6193959.446542715653777 ] } },{ "type": "Feature", "properties": { "id": 869, "code_region": "IDF", "departement": "91", "nom_hopital": "CH Louise Michel Évry - 91", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 268811.436127353459597, 6212797.283943885006011 ] } },{ "type": "Feature", "properties": { "id": 114, "code_region": "IDF", "departement": "91", "nom_hopital": "CHSE Dourdan - 91", "suppressions": "2015 : maternité transféré", "menaces": "2020 : pédiatrie menacé;2020 : soins continus menacé;2020 : urgences menacé", "victoires": "2021 : pédiatrie victoire;2014 : maternité réouvert", "ghi_nom": "CHSE CH Sud Essonne", "ght_nom": "GHT Ile-de-France Sud" }, "geometry": { "type": "Point", "coordinates": [ 222594.664305616082856, 6196135.724905633367598 ] } },{ "type": "Feature", "properties": { "id": 598, "code_region": "IDF", "departement": "91", "nom_hopital": "CHSE Étampes - 91", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHSE CH Sud Essonne", "ght_nom": "GHT Ile-de-France Sud" }, "geometry": { "type": "Point", "coordinates": [ 239980.014555640518665, 6180999.10111659951508 ] } },{ "type": "Feature", "properties": { "id": 112, "code_region": "IDF", "departement": "91", "nom_hopital": "CHSF - Corbeil  91", "suppressions": "2009 : radiothérapie fermé", "menaces": "2021 : urgences pédiatriques de nuit interrompu", "victoires": null, "ghi_nom": "CHSF CH Sud Francilien", "ght_nom": "GHT Ile-de-France Sud" }, "geometry": { "type": "Point", "coordinates": [ 273482.229427620419301, 6210649.539821759797633 ] } },{ "type": "Feature", "properties": { "id": 422, "code_region": "IDF", "departement": "91", "nom_hopital": "EPS Étampes – 91", "suppressions": "psychiatrie transféré", "menaces": null, "victoires": null, "ghi_nom": "CHSE CH Sud Essonne", "ght_nom": "GHT Ile-de-France Sud" }, "geometry": { "type": "Point", "coordinates": [ 240715.72095278283814, 6180636.025232295505702 ] } },{ "type": "Feature", "properties": { "id": 110, "code_region": "IDF", "departement": "91", "nom_hopital": "GHNE de Juvisy - 91", "suppressions": "2009 : chirurgie fermé;2009 : maternité fermé;2009 : soins intensifs fermé;2008 : ORL fermé;2008 : urologie fermé;centre IVG fermé", "menaces": "2009 : médecine interrompu;2009 : soins de suite et rééducation réduit (lits fermés)", "victoires": null, "ghi_nom": "GHNE", "ght_nom": "GHT Nord Essonne" }, "geometry": { "type": "Point", "coordinates": [ 264231.207057773601264, 6222684.910071989521384 ] } },{ "type": "Feature", "properties": { "id": 111, "code_region": "IDF", "departement": "91", "nom_hopital": "GHNE Longjumeau - 91", "suppressions": "2014 : soins de suite fermé", "menaces": "2024 : chirurgie menacé;2024 : médecine menacé;2024 : obstétrique menacé;2021 : urgences pédiatriques interrompu;2014 : néonatalité réduit (lits fermés)", "victoires": "2014 : néonatalité maintenu", "ghi_nom": "GHNE", "ght_nom": "GHT Nord Essonne" }, "geometry": { "type": "Point", "coordinates": [ 255083.676913690374931, 6222703.02765994425863 ] } },{ "type": "Feature", "properties": { "id": 109, "code_region": "IDF", "departement": "91", "nom_hopital": "GHNE Orsay - 91", "suppressions": "2020 : pédiatrie fermé", "menaces": null, "victoires": null, "ghi_nom": "GHNE", "ght_nom": "GHT Nord Essonne" }, "geometry": { "type": "Point", "coordinates": [ 243417.650048080831766, 6223955.551374837756157 ] } },{ "type": "Feature", "properties": { "id": 760, "code_region": "IDF", "departement": "91", "nom_hopital": "GHUPN Perray-Vaucluse Épinay-sur-Orge - 91", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "GHUPN", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 257178.715605113655329, 6217412.221753504127264 ] } },{ "type": "Feature", "properties": { "id": 874, "code_region": "IDF", "departement": "91", "nom_hopital": "Hôpital privé Jacques Cartier Massy - 91", "suppressions": "2015 : maternité transféré", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 255136.778319817269221, 6229333.16243901848793 ] } },{ "type": "Feature", "properties": { "id": 424, "code_region": "IDF", "departement": "92", "nom_hopital": "Boulogne Billancourt - 92\r\nCH Ambroise Paré", "suppressions": "2009 : chirurgie fermé;2009 : réanimation fermé;chirurgie digestive transféré", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 249053.986440520937322, 6249284.447184452787042 ] } },{ "type": "Feature", "properties": { "id": 91, "code_region": "IDF", "departement": "92", "nom_hopital": "CASH Nanterre - 92", "suppressions": "2017 : cardiologie fermé;2016 : chirurgie fermé;2015 : pneumologie fermé;2015 : réanimation fermé", "menaces": "2011 : chirurgie menacé;2011 : réanimation menacé", "victoires": "2011 : maternité maintenu;2011 : urgences de nuit maintenu", "ghi_nom": "", "ght_nom": "GHT Sud Val d’Oise-Nord Hauts de Seine" }, "geometry": { "type": "Point", "coordinates": [ 245702.238391053950181, 6256558.179220456629992 ] } },{ "type": "Feature", "properties": { "id": 92, "code_region": "IDF", "departement": "92", "nom_hopital": "CH4V Saint-Cloud - 92", "suppressions": null, "menaces": "2008 : réanimation interrompu", "victoires": null, "ghi_nom": "CH4V", "ght_nom": "GHT Hauts-de-Seine" }, "geometry": { "type": "Point", "coordinates": [ 247030.373234121216228, 6248390.623080346733332 ] } },{ "type": "Feature", "properties": { "id": 868, "code_region": "IDF", "departement": "92", "nom_hopital": "CH4V Sèvres - 92", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CH4V", "ght_nom": "GHT Hauts-de-Seine" }, "geometry": { "type": "Point", "coordinates": [ 245224.459763295541052, 6244460.579821932129562 ] } },{ "type": "Feature", "properties": { "id": 94, "code_region": "IDF", "departement": "92", "nom_hopital": "Châtillon - 92", "suppressions": null, "menaces": "2013 : centre médico-psychologique (CMP) menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 254900.568988300423371, 6240932.969427837058902 ] } },{ "type": "Feature", "properties": { "id": 2, "code_region": "IDF", "departement": "92", "nom_hopital": "CHD Stell Rueil-Malmaison - 92", "suppressions": "2016 : maternité fermé;2012 : urgences fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Hauts-de-Seine" }, "geometry": { "type": "Point", "coordinates": [ 243435.48538645732333, 6253932.042317853309214 ] } },{ "type": "Feature", "properties": { "id": 86, "code_region": "IDF", "departement": "92", "nom_hopital": "CH Louis Mourier Colombes - 92", "suppressions": "2012 : médecine nucléaire fermé", "menaces": "2022 : urgences menacé;centre IVG menacé;urgences de nuit menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 248918.463321425486356, 6262041.273383692838252 ] } },{ "type": "Feature", "properties": { "id": 544, "code_region": "IDF", "departement": "92", "nom_hopital": "CH Raymond Poincaré Garches - 92", "suppressions": "2014 : oncologie pédiatrique fermé", "menaces": "chirurgie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 241551.32717695410247, 6247509.456031964160502 ] } },{ "type": "Feature", "properties": { "id": 88, "code_region": "IDF", "departement": "92", "nom_hopital": "CHRDS Courbevoie - 92", "suppressions": "2000 : maternité fermé;psychiatrie transféré", "menaces": null, "victoires": null, "ghi_nom": "CHRDS", "ght_nom": "GHT Hauts-de-Seine" }, "geometry": { "type": "Point", "coordinates": [ 251549.677927721262677, 6257209.610073018819094 ] } },{ "type": "Feature", "properties": { "id": 90, "code_region": "IDF", "departement": "92", "nom_hopital": "CHRDS Neuilly-sur-Seine – 92", "suppressions": "2016 : chirurgie fermé;2016 : maternité fermé", "menaces": "urgences menacé", "victoires": null, "ghi_nom": "CHRDS", "ght_nom": "GHT Hauts-de-Seine" }, "geometry": { "type": "Point", "coordinates": [ 251836.659009591239737, 6256274.518358387984335 ] } },{ "type": "Feature", "properties": { "id": 543, "code_region": "IDF", "departement": "92", "nom_hopital": "CHU Beaujon Clichy - 92", "suppressions": "urgences de nuit fermé", "menaces": "2012 : neurochirurgie menacé;SMUR menacé;urgences 24h/24h menacé;urgences psychiatriques menacé", "victoires": null, "ghi_nom": "GHUNUP", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 257126.475205484603066, 6259277.455868253484368 ] } },{ "type": "Feature", "properties": { "id": 96, "code_region": "IDF", "departement": "92", "nom_hopital": "Clin. A. Paré Bourg-la-Reine - 92", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 257802.791967227676651, 6237433.440529161132872 ] } },{ "type": "Feature", "properties": { "id": 89, "code_region": "IDF", "departement": "92", "nom_hopital": "Hôpital franco-britannique Levallois-Perret - 92", "suppressions": null, "menaces": "protection maternelle et infantile menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 254660.926512525620637, 6256687.059079711325467 ] } },{ "type": "Feature", "properties": { "id": 95, "code_region": "IDF", "departement": "92", "nom_hopital": "HUPS Antoine Béclère - Clamart - 92", "suppressions": "2017 : centre IVG fermé;2012 : cardiologie transféré;2012 : pneumologie transféré", "menaces": "2019 : urgences de nuit menacé;2012 : chirurgie menacé;2012 : urgences menacé", "victoires": null, "ghi_nom": "HUPS", "ght_nom": "HUPS" }, "geometry": { "type": "Point", "coordinates": [ 250978.854834902944276, 6239041.331017608754337 ] } },{ "type": "Feature", "properties": { "id": 69, "code_region": "IDF", "departement": "93", "nom_hopital": "Aubervilliers - 93\nHôpital européen La Roseraie", "suppressions": "2015 : radiothérapie fermé", "menaces": "2018 : centre d'accueil et de crise réduit (autre)", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 265135.312850010057446, 6260379.304997253231704 ] } },{ "type": "Feature", "properties": { "id": 104, "code_region": "IDF", "departement": "93", "nom_hopital": "CH Delafontaine Saint Denis - 93", "suppressions": "2020 : ligne SMUR fermé", "menaces": "2022 : urgences pédiatriques interrompu;2021 : gynéco-obstétrique réduit (lits fermés);2018 : centre d'accueil et de crise menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Plaine de France" }, "geometry": { "type": "Point", "coordinates": [ 264287.144941587175708, 6263925.025346964597702 ] } },{ "type": "Feature", "properties": { "id": 107, "code_region": "IDF", "departement": "93", "nom_hopital": "CHIAG Montreuil - 93", "suppressions": "urologie transféré", "menaces": "2020 : centre de santé menacé;chirurgie 24/24 menacé;chirurgie d'urgence menacé;dialyse menacé;ophtalmologie menacé;réanimation néonatale menacé", "victoires": null, "ghi_nom": "CHIAG", "ght_nom": "GHT 93 EST" }, "geometry": { "type": "Point", "coordinates": [ 273087.796285126009025, 6254123.051832339726388 ] } },{ "type": "Feature", "properties": { "id": 103, "code_region": "IDF", "departement": "93", "nom_hopital": "CHI Robert Ballanger Aulnay/Bois - 93", "suppressions": null, "menaces": "2022 : urgences interrompu;2022 : urgences menacé;2019 : urgences pédiatriques menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT 93 EST" }, "geometry": { "type": "Point", "coordinates": [ 281048.718543578346726, 6266902.744240605272353 ] } },{ "type": "Feature", "properties": { "id": 638, "code_region": "IDF", "departement": "93", "nom_hopital": "CHRDS Puteaux - 93", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHRDS", "ght_nom": "GHT Hauts-de-Seine" }, "geometry": { "type": "Point", "coordinates": [ 249566.579168092488544, 6254235.630611988715827 ] } },{ "type": "Feature", "properties": { "id": 102, "code_region": "IDF", "departement": "93", "nom_hopital": "Épinay sur Seine - 93", "suppressions": null, "menaces": "2009 : maternité menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 257523.792070747062098, 6266637.03872930444777 ] } },{ "type": "Feature", "properties": { "id": 637, "code_region": "IDF", "departement": "93", "nom_hopital": "EPSM Ville-Évrard Neuilly sur Marne - 93", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 283670.388472113816533, 6251033.023384753614664 ] } },{ "type": "Feature", "properties": { "id": 866, "code_region": "IDF", "departement": "93", "nom_hopital": "GHIRM Le Raincy- - 93", "suppressions": "2000 : cardiologie fermé;2000 : urgences fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT 93 EST" }, "geometry": { "type": "Point", "coordinates": [ 279405.975693769869395, 6257809.792872389778495 ] } },{ "type": "Feature", "properties": { "id": 105, "code_region": "IDF", "departement": "93", "nom_hopital": "GHIRM Montfermeil - 93", "suppressions": "2011 : cuisine sous-traité;2011 : lingerie sous-traité", "menaces": "2012 : stérilisation menacé", "victoires": null, "ghi_nom": "GHIRM", "ght_nom": "GHT 93 EST" }, "geometry": { "type": "Point", "coordinates": [ 286373.856203469855245, 6257502.647771279327571 ] } },{ "type": "Feature", "properties": { "id": 449, "code_region": "IDF", "departement": "93", "nom_hopital": "GHU Avicenne Bobigny - 93", "suppressions": null, "menaces": "2021 : unité médico-judiciaire menacé;2021 : urgences menacé;IVG menacé;planning familial menacé", "victoires": null, "ghi_nom": "GHU 93", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 269848.270588778425008, 6260397.531334275379777 ] } },{ "type": "Feature", "properties": { "id": 106, "code_region": "IDF", "departement": "93", "nom_hopital": "GHU Jean Verdier Bondy - 93", "suppressions": "2017 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "GHU 93-95", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 276938.321761861501727, 6259533.175217704847455 ] } },{ "type": "Feature", "properties": { "id": 619, "code_region": "IDF", "departement": "93", "nom_hopital": "GHU René-Muret Sevran - 93", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "GHU 93", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 279206.522823128849268, 6263786.213020613417029 ] } },{ "type": "Feature", "properties": { "id": 39, "code_region": "IDF", "departement": "93", "nom_hopital": "Maternité Les Lilas - 93", "suppressions": null, "menaces": "2022 : maternité menacé", "victoires": "2022 : maternité maintenu", "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 268933.40740207163617, 6254415.783713866025209 ] } },{ "type": "Feature", "properties": { "id": 128, "code_region": "IDF", "departement": "94", "nom_hopital": "Chevilly-Larue - 94", "suppressions": null, "menaces": "2015 : centre de lutte contre le cancer fusionné", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 261379.472491359920241, 6236251.166476192884147 ] } },{ "type": "Feature", "properties": { "id": 129, "code_region": "IDF", "departement": "94", "nom_hopital": "CHI Aubrac Villeneuve-Saint-Georges - 94", "suppressions": "2021 : unité psychiatrique fermé;2019 : bionettoyage sous-traité", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Val de Marne Est" }, "geometry": { "type": "Point", "coordinates": [ 272480.618558867485262, 6229294.652018627151847 ] } },{ "type": "Feature", "properties": { "id": 549, "code_region": "IDF", "departement": "94", "nom_hopital": "CH Jean Rostand Ivry   - 94", "suppressions": "2009 : centre IVG fermé;2009 : maternité transféré;2008 : médecine physique et de réadaptation fermé;2004 : cardiologie rythmologique transféré", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 265717.074641132494435, 6243294.092990222387016 ] } },{ "type": "Feature", "properties": { "id": 867, "code_region": "IDF", "departement": "94", "nom_hopital": "CH Les Murets La Queue-en-Brie – 94", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT 94 Nord" }, "geometry": { "type": "Point", "coordinates": [ 287204.999529060500208, 6238869.394397999159992 ] } },{ "type": "Feature", "properties": { "id": 551, "code_region": "IDF", "departement": "94", "nom_hopital": "CH Paul Guiraud Villejuif - 94", "suppressions": "2021 : unité d'hospitalisation spécialement aménagée-UHSA fermé;2012 : laboratoire fermé", "menaces": "psychiatrie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT PSY Sud Paris" }, "geometry": { "type": "Point", "coordinates": [ 262449.237466454680543, 6239311.863147064112127 ] } },{ "type": "Feature", "properties": { "id": 872, "code_region": "IDF", "departement": "94", "nom_hopital": "CHPEA Gentilly - 94", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT PSY Sud Paris" }, "geometry": { "type": "Point", "coordinates": [ 261263.976812619715929, 6242759.319850093685091 ] } },{ "type": "Feature", "properties": { "id": 547, "code_region": "IDF", "departement": "94", "nom_hopital": "CHU A. Chenevier Créteil - 94", "suppressions": null, "menaces": "2021 : psychiatrie réduit (lits fermés);2017 : chirurgie hépatique menacé", "victoires": null, "ghi_nom": "GHU Henri Mondor", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 273692.769413009169511, 6239061.004834581166506 ] } },{ "type": "Feature", "properties": { "id": 123, "code_region": "IDF", "departement": "94", "nom_hopital": "CHU Charles Foix Ivry - 94", "suppressions": null, "menaces": "psychiatrie de la personne âgée réduit (lits fermés);rééducation neurologique menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHU Sorbonne Université" }, "geometry": { "type": "Point", "coordinates": [ 266707.72784574679099, 6241684.334765654988587 ] } },{ "type": "Feature", "properties": { "id": 548, "code_region": "IDF", "departement": "94", "nom_hopital": "CHU Émile ROUX - Créteil 94", "suppressions": null, "menaces": "2019 : gériatrie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHU Henri Mondor" }, "geometry": { "type": "Point", "coordinates": [ 273002.014425645058509, 6237852.216240138746798 ] } },{ "type": "Feature", "properties": { "id": 546, "code_region": "IDF", "departement": "94", "nom_hopital": "CHU Henri Mondor Créteil - 94", "suppressions": "2022 : service intersectoriel de psychiatrie transféré;2022 : urgences psychiatriques fermé", "menaces": "2022 : chirurgie cardiaque menacé;2021 : psychiatrie réduit (lits fermés);2021 : transplantation cardiaque menacé;2017 : chirurgie hépatique menacé", "victoires": "2019 : SAMU victoire;2017 : chirurgie hépatique et cardiaque maintenu;2011 : chirurgie cardiaque maintenu", "ghi_nom": "", "ght_nom": "GHU Henri Mondor" }, "geometry": { "type": "Point", "coordinates": [ 272987.773332763521466, 6240304.233319457620382 ] } },{ "type": "Feature", "properties": { "id": 873, "code_region": "IDF", "departement": "94", "nom_hopital": "Clinique Gentily", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 262155.630375131964684, 6243680.28228139411658 ] } },{ "type": "Feature", "properties": { "id": 125, "code_region": "IDF", "departement": "94", "nom_hopital": "Clin. La Concorde Alfortville - 94", "suppressions": "2009 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 269427.06094004039187, 6241894.387465796433389 ] } },{ "type": "Feature", "properties": { "id": 899, "code_region": "IDF", "departement": "94", "nom_hopital": "CMP Mozart Boissy-Saint-Léger - 94", "suppressions": "unité de jour psychiatrie fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 278744.127583142369986, 6233272.073190016672015 ] } },{ "type": "Feature", "properties": { "id": 595, "code_region": "IDF", "departement": "94", "nom_hopital": "HSM Esquirol Saint Maurice - 94", "suppressions": "2016 : unité de personnes polyhandicapées fermé;hôpital de jour fermé", "menaces": "2021 : psychiatrie réduit (autre)", "victoires": null, "ghi_nom": "HSM", "ght_nom": "GHT 94 Nord" }, "geometry": { "type": "Point", "coordinates": [ 270488.53878037299728, 6244104.20632376242429 ] } },{ "type": "Feature", "properties": { "id": 122, "code_region": "IDF", "departement": "94", "nom_hopital": "HSM Saint Maurice - 94", "suppressions": "2022 : unité d'entrants fermé;2014 : crèches fermé", "menaces": "2021 : unité psychiatrique interrompu", "victoires": "maternité maintenu", "ghi_nom": "HSM", "ght_nom": "GHT 94 Nord" }, "geometry": { "type": "Point", "coordinates": [ 270336.855590518855024, 6244504.069957594387233 ] } },{ "type": "Feature", "properties": { "id": 124, "code_region": "IDF", "departement": "94", "nom_hopital": "HUPS CHUR Bicêtre - 94", "suppressions": null, "menaces": "2021 : hépatologie pédiatrique réduit (lits fermés);2021 : services neurologiques transformé;2012 : centre IVG menacé;unité psychiatrique de suicidologie réduit (lits fermés)", "victoires": null, "ghi_nom": "", "ght_nom": "HUPS" }, "geometry": { "type": "Point", "coordinates": [ 262401.795407954254188, 6242684.628211451694369 ] } },{ "type": "Feature", "properties": { "id": 550, "code_region": "IDF", "departement": "94", "nom_hopital": "HUPS Paul Brousse - Villejuif - 94", "suppressions": null, "menaces": "centre hépatobiliaire menacé;soins longue durée réduit (lits fermés);soins longue durée réduit (autre);thérapies aigües menacé;transferts court séjour menacé;unité spécialisée Alzheimer réduit (lits fermés)", "victoires": null, "ghi_nom": "HUPS", "ght_nom": "HUPS" }, "geometry": { "type": "Point", "coordinates": [ 263087.150050867290702, 6240139.091710968874395 ] } },{ "type": "Feature", "properties": { "id": 126, "code_region": "IDF", "departement": "94", "nom_hopital": "IGR Groussy Villejuif  - 94", "suppressions": null, "menaces": "2015 : cancérologie fusionné", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 262810.361238864890765, 6239945.09943239018321 ] } },{ "type": "Feature", "properties": { "id": 73, "code_region": "IDF", "departement": "94", "nom_hopital": "Limeil-Brévannes - Hôpital Émile Roux - 94", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 276417.265978720097337, 6232587.655377765186131 ] } },{ "type": "Feature", "properties": { "id": 120, "code_region": "IDF", "departement": "94", "nom_hopital": "Saint Mandé - 94\nHôpital d'instruction des armées Bégin", "suppressions": "2015 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 269297.617617170675658, 6248302.977007978595793 ] } },{ "type": "Feature", "properties": { "id": 117, "code_region": "IDF", "departement": "95", "nom_hopital": "CALM Pontoise - 95", "suppressions": null, "menaces": "2019 : maison de naissance menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 233769.14460234719445, 6283514.064733686856925 ] } },{ "type": "Feature", "properties": { "id": 207, "code_region": "IDF", "departement": "95", "nom_hopital": "Cergy - 95", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 226667.434242584247841, 6283776.959792813286185 ] } },{ "type": "Feature", "properties": { "id": 118, "code_region": "IDF", "departement": "95", "nom_hopital": "CH Gonesse - 95", "suppressions": "2011 : cardiologie interventionnelle fermé", "menaces": "2021 : réanimation menacé;2019 : médecine interne menacé;angioplastie coronarienne menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Sud Val-d’Oise Nord Hauts de seine" }, "geometry": { "type": "Point", "coordinates": [ 272721.542303462570999, 6272546.593651158735156 ] } },{ "type": "Feature", "properties": { "id": 552, "code_region": "IDF", "departement": "95", "nom_hopital": "CH René Dubos Pontoise - 95", "suppressions": "chirurgie fermé;CTS privatisé;nettoyage sous-traité;OPHSTO fermé;réanimation fermé", "menaces": "2020 : EHPAD réduit (lits fermés);2019 : soins palliatifs menacé;chirurgie viscérale réduit (autre);diabétologie réduit (autre);gynécologie réduit (lits fermés);orthopédie réduit (autre);pneumologie réduit (autre);rhumatologie réduit (autre)", "victoires": null, "ghi_nom": "", "ght_nom": "CH René Dubos GHT Nord-Ouest Vexin Val-d’Oise" }, "geometry": { "type": "Point", "coordinates": [ 233408.115149337798357, 6285691.258157790638506 ] } },{ "type": "Feature", "properties": { "id": 326, "code_region": "IDF", "departement": "95", "nom_hopital": "CHS Prévot - Moisselles - 95", "suppressions": null, "menaces": "2021 : psychiatrie menacé", "victoires": "hôpital psychiatrique victoire", "ghi_nom": "", "ght_nom": "GHT Sud Val d’Oise-Nord Hauts de Seine" }, "geometry": { "type": "Point", "coordinates": [ 260171.117740828718524, 6283016.681823767721653 ] } },{ "type": "Feature", "properties": { "id": 119, "code_region": "IDF", "departement": "95", "nom_hopital": "CH Victor Dupouy Argenteuil - 95", "suppressions": "2011 : cardiologie interventionnelle fermé;1999 : SMUR pédiatrique fermé", "menaces": "2012 : radiothérapie menacé;2011 : rythmologie menacé;2009 : radiothérapie interrompu;2001 : gastro-entérologie interrompu;2001 : pneumologie interrompu;hématologie menacé", "victoires": "2013 : radiothérapie maintenu;2011 : rythmologie maintenu", "ghi_nom": "", "ght_nom": "GHT Sud Val d’Oise-Nord Hauts de Seine" }, "geometry": { "type": "Point", "coordinates": [ 248962.619727112003602, 6265444.419430180452764 ] } },{ "type": "Feature", "properties": { "id": 878, "code_region": "IDF", "departement": "95", "nom_hopital": "Clinique Héloïse Argenteuil - 95", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 249322.641493458300829, 6266276.434457901865244 ] } },{ "type": "Feature", "properties": { "id": 115, "code_region": "IDF", "departement": "95", "nom_hopital": "GHCPO Beaumont sur Oise - 95", "suppressions": "2019 : réanimation fermé;2019 : réanimation transféré;2019 : soins continus fermé;2019 : soins intensifs transféré", "menaces": "2019 : néonatalogie réduit (autre);2018 : pédiatrie menacé;2018 : réanimation menacé;2018 : rééducation menacé", "victoires": null, "ghi_nom": "GHCPO Carnelle Portes de l'Oise", "ght_nom": "GHT Nord-Ouest Vexin Val-d’Oise" }, "geometry": { "type": "Point", "coordinates": [ 254936.910781365004368, 6299464.221413443796337 ] } },{ "type": "Feature", "properties": { "id": 230, "code_region": "IDF", "departement": "95", "nom_hopital": "GHCPO Saint Martin du Tertre - 95", "suppressions": "2021 : soins longue durée fermé;soins de suite et rééducation fermé", "menaces": null, "victoires": null, "ghi_nom": "GHCPO Carnelle Portes de l'Oise", "ght_nom": "GHT Nord-Ouest Vexin Val-d’Oise" }, "geometry": { "type": "Point", "coordinates": [ 260000.816375924361637, 6292630.126900533214211 ] } },{ "type": "Feature", "properties": { "id": 877, "code_region": "IDF", "departement": "95", "nom_hopital": "GHEM Montmorency - 95", "suppressions": "2014 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "GHEM", "ght_nom": "GHT Sud Val-d’Oise Nord Hauts de Seine" }, "geometry": { "type": "Point", "coordinates": [ 258233.858770493447082, 6272600.956792660057545 ] } },{ "type": "Feature", "properties": { "id": 876, "code_region": "IDF", "departement": "95", "nom_hopital": "GHEM Simone Veil Eaubonne – 95", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "GHEM", "ght_nom": "GHT Sud Val-d’Oise Nord Hauts de Seine" }, "geometry": { "type": "Point", "coordinates": [ 252806.13838757557096, 6275109.633133105002344 ] } },{ "type": "Feature", "properties": { "id": 875, "code_region": "IDF", "departement": "95", "nom_hopital": "GHIV Magny-en-Vexin – 95", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "GHIV", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 198642.04451360553503, 6301219.356516190804541 ] } },{ "type": "Feature", "properties": { "id": 116, "code_region": "IDF", "departement": "95", "nom_hopital": "GHIV Marines - 95", "suppressions": "2016 : restauration sous-traité", "menaces": null, "victoires": null, "ghi_nom": "GHIV", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 220771.99092761069187, 6299522.806910154409707 ] } },{ "type": "Feature", "properties": { "id": 397, "code_region": "IDF", "departement": "95", "nom_hopital": "Villiers-le-Bel - 95\nHôpital Charles Richet\n", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 265802.372228364401963, 6276154.173313247039914 ] } },{ "type": "Feature", "properties": { "id": 553, "code_region": "IDF", "departement": "95", "nom_hopital": "Villiers-le-Bel - 95\r\nHôpital gériatrique Adélaïde-Hautval", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 267452.90958546474576, 6275036.931401809677482 ] } },{ "type": "Feature", "properties": { "id": 463, "code_region": "LAR", "departement": "974", "nom_hopital": "Saint-Louis de la Réunion", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 6168127.655640599317849, -2426090.107498547062278 ] } },{ "type": "Feature", "properties": { "id": 461, "code_region": "MAR", "departement": "972", "nom_hopital": "Châteauboeuf - Fort-de-France - 97", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -6798225.296590085141361, 1643959.14648789097555 ] } },{ "type": "Feature", "properties": { "id": 462, "code_region": "MAR", "departement": "972", "nom_hopital": "CH Mangot Vulcin - Le Lamentin - 97", "suppressions": "2012 : urgences de nuit fermé;2001 : pédiatrie fermé;maternité fermé", "menaces": "2012 : maternité menacé", "victoires": null, "ghi_nom": "CHUM", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -6790880.308971169404685, 1644919.231012573232874 ] } },{ "type": "Feature", "properties": { "id": 603, "code_region": "NAQ", "departement": "16", "nom_hopital": "CH Angoulême - 16", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT de Charente" }, "geometry": { "type": "Point", "coordinates": [ 13326.972602799487504, 5722090.029923466034234 ] } },{ "type": "Feature", "properties": { "id": 437, "code_region": "NAQ", "departement": "16", "nom_hopital": "CH Confolens - 16", "suppressions": "2008 : chirurgie fermé;1993 : maternité fermé", "menaces": "2015 : urgences menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT de Charente" }, "geometry": { "type": "Point", "coordinates": [ 74551.733951410176815, 5781083.296294221654534 ] } },{ "type": "Feature", "properties": { "id": 362, "code_region": "NAQ", "departement": "16", "nom_hopital": "CH Ruffec - 16", "suppressions": "2022 : cuisine transféré;2021 : soins de suite et rééducation fermé;2018 : chirurgie ambulatoire fermé;2018 : IVG fermé;2018 : soins ambulatoires fermé;1994 : maternité fermé", "menaces": "2021 : médecine interrompu;2020 : soins de suite et rééducation interrompu;2019 : SMUR menacé;2018 : SMUR réduit (autre);2017 : soins ambulatoires sous anesthésie générale interrompu;2015 : urgences interrompu", "victoires": "2019 : mammographie victoire;2013 : scanner victoire;SMUR maintenu;urgences maintenu", "ghi_nom": "", "ght_nom": "GHT Charente" }, "geometry": { "type": "Point", "coordinates": [ 21758.254521921749983, 5784809.483246352523565 ] } },{ "type": "Feature", "properties": { "id": 676, "code_region": "NAQ", "departement": "16", "nom_hopital": "CSAPA Agora Cognac - 16", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -36091.937524467677576, 5732296.749706875532866 ] } },{ "type": "Feature", "properties": { "id": 604, "code_region": "NAQ", "departement": "16", "nom_hopital": "HGC Châteauneuf-sur-Charente - 16", "suppressions": "1975 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT de Charente" }, "geometry": { "type": "Point", "coordinates": [ -6613.559485346057954, 5715999.171118213795125 ] } },{ "type": "Feature", "properties": { "id": 66, "code_region": "NAQ", "departement": "16", "nom_hopital": "HGC Cognac - 16", "suppressions": "2002 : chirurgie transféré;maternité fermé", "menaces": "2018 : oncologie menacé", "victoires": "2010 : maternité maintenu", "ghi_nom": "", "ght_nom": "GHT de Charente" }, "geometry": { "type": "Point", "coordinates": [ -33156.633980616956251, 5730019.346161261200905 ] } },{ "type": "Feature", "properties": { "id": 688, "code_region": "NAQ", "departement": "16", "nom_hopital": "HGC Jarnac - 16", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHIPC puis HHC", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -19128.225209910422564, 5729700.190221325494349 ] } },{ "type": "Feature", "properties": { "id": 367, "code_region": "NAQ", "departement": "16", "nom_hopital": "HSC Barbezieux - 16", "suppressions": "2010 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Charente" }, "geometry": { "type": "Point", "coordinates": [ -15616.988707995238656, 5696353.08213621750474 ] } },{ "type": "Feature", "properties": { "id": 690, "code_region": "NAQ", "departement": "16", "nom_hopital": "HSC FAM Le Trèfle - Barbézieux - 16", "suppressions": "2000 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT de Charente" }, "geometry": { "type": "Point", "coordinates": [ -15588.734829224626083, 5696481.979879055172205 ] } },{ "type": "Feature", "properties": { "id": 689, "code_region": "NAQ", "departement": "16", "nom_hopital": "HSC Touvérac - 16", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT de Charente" }, "geometry": { "type": "Point", "coordinates": [ -23544.331987395886244, 5681550.213924437761307 ] } },{ "type": "Feature", "properties": { "id": 74, "code_region": "NAQ", "departement": "16", "nom_hopital": "Polyclinique L'Isle d'Espagnac - 16", "suppressions": "maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 22022.700540006968367, 5726549.880135192535818 ] } },{ "type": "Feature", "properties": { "id": 693, "code_region": "NAQ", "departement": "17", "nom_hopital": "CH de Saintonge - Saintes - 17", "suppressions": null, "menaces": "2021 : bloc opératoire interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT de Saintonge" }, "geometry": { "type": "Point", "coordinates": [ -72806.781610529884347, 5739826.506300015375018 ] } },{ "type": "Feature", "properties": { "id": 457, "code_region": "NAQ", "departement": "17", "nom_hopital": "CH Jonzac - 17", "suppressions": "2001 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT de Saintonge" }, "geometry": { "type": "Point", "coordinates": [ -48398.814437851760886, 5690978.100236487574875 ] } },{ "type": "Feature", "properties": { "id": 214, "code_region": "NAQ", "departement": "17", "nom_hopital": "CHRA - Royan - 17", "suppressions": "2007 : réanimation fermé;2005 : chirurgie fermé;1985 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT de Saintonge" }, "geometry": { "type": "Point", "coordinates": [ -118073.703132564827683, 5721915.614964246749878 ] } },{ "type": "Feature", "properties": { "id": 692, "code_region": "NAQ", "departement": "17", "nom_hopital": "CH Rochefort - 17", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Atlantique 17" }, "geometry": { "type": "Point", "coordinates": [ -107305.479062892496586, 5775085.136483019217849 ] } },{ "type": "Feature", "properties": { "id": 334, "code_region": "NAQ", "departement": "17", "nom_hopital": "CH Saint-Jean d'Angély - 17", "suppressions": "2017 : maternité fermé", "menaces": "2020 : chirurgie interrompu;2014 : maternité menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT de Saintonge" }, "geometry": { "type": "Point", "coordinates": [ -58913.12953834815562, 5771855.150831591337919 ] } },{ "type": "Feature", "properties": { "id": 20, "code_region": "NAQ", "departement": "17", "nom_hopital": "Clinique du Mail La Rochelle - 17", "suppressions": "2017 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -129660.072535201892606, 5805355.090019113384187 ] } },{ "type": "Feature", "properties": { "id": 694, "code_region": "NAQ", "departement": "17", "nom_hopital": "Clinique Pasteur Royan - 17", "suppressions": "2015 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -114055.974464077502489, 5724918.749874669127166 ] } },{ "type": "Feature", "properties": { "id": 691, "code_region": "NAQ", "departement": "17", "nom_hopital": "GHLRRA La Rochelle", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Atlantique 17" }, "geometry": { "type": "Point", "coordinates": [ -127302.467944357747911, 5806033.468645043671131 ] } },{ "type": "Feature", "properties": { "id": 15, "code_region": "NAQ", "departement": "19", "nom_hopital": "CH Brive - 19", "suppressions": null, "menaces": "2019 : gériatrie réduit (autre)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Limousin" }, "geometry": { "type": "Point", "coordinates": [ 170722.072654046089156, 5648188.426089919172227 ] } },{ "type": "Feature", "properties": { "id": 335, "code_region": "NAQ", "departement": "19", "nom_hopital": "CH Tulle - 19", "suppressions": null, "menaces": "2021 : laboratoire menacé;2016 : chirurgie menacé;2016 : pédiatrie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Limousin" }, "geometry": { "type": "Point", "coordinates": [ 197215.857316741894465, 5663449.736816302873194 ] } },{ "type": "Feature", "properties": { "id": 409, "code_region": "NAQ", "departement": "23", "nom_hopital": "CH Aubusson- 23", "suppressions": null, "menaces": "2016 : chirurgie menacé", "victoires": "2016 : chirurgie victoire", "ghi_nom": "", "ght_nom": "GHT du Limousin" }, "geometry": { "type": "Point", "coordinates": [ 242921.392847593670012, 5774001.486291631124914 ] } },{ "type": "Feature", "properties": { "id": 410, "code_region": "NAQ", "departement": "23", "nom_hopital": "CH Desplas Bourganeuf - 23", "suppressions": "chirurgie fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Limousin" }, "geometry": { "type": "Point", "coordinates": [ 194875.495832345419331, 5772986.910064571537077 ] } },{ "type": "Feature", "properties": { "id": 22, "code_region": "NAQ", "departement": "23", "nom_hopital": "CH Guéret - 23", "suppressions": "2010 : radiothérapie fermé", "menaces": null, "victoires": "2011 : radiothérapie réouvert", "ghi_nom": "", "ght_nom": "GHT du Limousin" }, "geometry": { "type": "Point", "coordinates": [ 208050.586517910676776, 5806681.87141995690763 ] } },{ "type": "Feature", "properties": { "id": 248, "code_region": "NAQ", "departement": "24", "nom_hopital": "CH Bergerac - 24", "suppressions": "2014 : pneumologie fermé", "menaces": "2022 : urgences réduit (autre)", "victoires": "maternité maintenu", "ghi_nom": "", "ght_nom": "GHT Dordogne" }, "geometry": { "type": "Point", "coordinates": [ 55308.990628816238313, 5598031.808917953632772 ] } },{ "type": "Feature", "properties": { "id": 664, "code_region": "NAQ", "departement": "24", "nom_hopital": "CHICRDD La Meynardie Saint-Privat-en-Périgord - 24", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHICRDD", "ght_nom": "GHT Dordogne" }, "geometry": { "type": "Point", "coordinates": [ 23519.016615059252217, 5653384.393795061856508 ] } },{ "type": "Feature", "properties": { "id": 663, "code_region": "NAQ", "departement": "24", "nom_hopital": "CHICRDD Ribérac - 24", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHICRDD", "ght_nom": "GHT Dordogne" }, "geometry": { "type": "Point", "coordinates": [ 37849.067740798032901, 5660171.867951321415603 ] } },{ "type": "Feature", "properties": { "id": 662, "code_region": "NAQ", "departement": "24", "nom_hopital": "CHICRDD Saint-Aulaye - 24", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHICRDD", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 13786.489613275933152, 5594650.135843577794731 ] } },{ "type": "Feature", "properties": { "id": 17, "code_region": "NAQ", "departement": "24", "nom_hopital": "CH Leclaire Sarlat - 24", "suppressions": "2021 : urgences fermé;2019 : centre de dépistage du cancer du sein fermé;2017 : stérilisation fermé;2014 : chirurgie orthopédique fermé;2013 : chirurgie conventionnelle fermé;2013 : soins continus fermé;2012 : unité de surveillance fermé", "menaces": "2022 : urgences réduit (autre);2021 : maternité réduit (autre);2012 : maternité menacé", "victoires": "2021 : maternité maintenu;2020 : centre de dépistage du cancer du sein réouvert;2013 : chirurgie maintenu", "ghi_nom": "", "ght_nom": "GHT Dordogne" }, "geometry": { "type": "Point", "coordinates": [ 136144.671443589497358, 5605711.249559495598078 ] } },{ "type": "Feature", "properties": { "id": 593, "code_region": "NAQ", "departement": "24", "nom_hopital": "CH Périgueux - 24", "suppressions": null, "menaces": "2019 : urgences menacé", "victoires": "2019 : urgences victoire", "ghi_nom": "", "ght_nom": "GHT Dordogne" }, "geometry": { "type": "Point", "coordinates": [ 81262.085687249913462, 5652177.483503001742065 ] } },{ "type": "Feature", "properties": { "id": 698, "code_region": "NAQ", "departement": "24", "nom_hopital": "CHS Vauclaire Montpon-Ménestérol - 24", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Dordogne" }, "geometry": { "type": "Point", "coordinates": [ 20562.510152485221624, 5626708.406805856153369 ] } },{ "type": "Feature", "properties": { "id": 247, "code_region": "NAQ", "departement": "24", "nom_hopital": "Clin. Francheville Périgueux - 24", "suppressions": "maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 79874.275892637611832, 5650108.906425319612026 ] } },{ "type": "Feature", "properties": { "id": 253, "code_region": "NAQ", "departement": "33", "nom_hopital": "BAHIA - HIA R. Picqué - Villenave-d'Ornon  - 33", "suppressions": null, "menaces": "1990 : approvisionnement des armées menacé;hélicoptère menacé;laboratoire d'analyses biologiques menacé;odontologie menacé;parking menacé;service vaccination-santé-voyages menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -63827.501452650831197, 5589904.436797520145774 ] } },{ "type": "Feature", "properties": { "id": 491, "code_region": "NAQ", "departement": "33", "nom_hopital": "Bordeaux - 33 \nClinique des 4 Pavillons\n", "suppressions": null, "menaces": "2003 : maternité fusionné", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -58129.749303404714738, 5600202.567453667521477 ] } },{ "type": "Feature", "properties": { "id": 907, "code_region": "NAQ", "departement": "33", "nom_hopital": "CHHG Blaye - 33", "suppressions": null, "menaces": "2022 : urgences interrompu", "victoires": null, "ghi_nom": "CHHG", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -73437.20783891157771, 5642813.250103262253106 ] } },{ "type": "Feature", "properties": { "id": 701, "code_region": "NAQ", "departement": "33", "nom_hopital": "CHISG Langon - 33", "suppressions": "2022 : bionettoyage sous-traité", "menaces": null, "victoires": null, "ghi_nom": "CHISG", "ght_nom": "GHT Alliance de Gironde" }, "geometry": { "type": "Point", "coordinates": [ -27313.605249173895572, 5550118.635294675827026 ] } },{ "type": "Feature", "properties": { "id": 346, "code_region": "NAQ", "departement": "33", "nom_hopital": "CHISG La Réole - 33", "suppressions": "2022 : bionettoyage sous-traité;2020 : unité de premiers soins fermé;2018 : urgences transféré;2001 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "CHIC Sud Gironde", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -4262.364831233079713, 5556655.246401692740619 ] } },{ "type": "Feature", "properties": { "id": 436, "code_region": "NAQ", "departement": "33", "nom_hopital": "CH Jean Hameau Arcachon - 33", "suppressions": "nettoyage sous-traité;ophtalmologie privatisé;ORL privatisé;radiologie privatisé;stomatologie privatisé", "menaces": "cuisine menacé;laboratoire menacé;pharmacie menacé;réanimation transformé;stérilisation menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Alliance de Gironde" }, "geometry": { "type": "Point", "coordinates": [ -123971.893333232743316, 5560880.920935709960759 ] } },{ "type": "Feature", "properties": { "id": 249, "code_region": "NAQ", "departement": "33", "nom_hopital": "CH Libourne - 33", "suppressions": null, "menaces": "2022 : maladies infectieuses interrompu;maternité menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Alliance de Gironde" }, "geometry": { "type": "Point", "coordinates": [ -25448.172354525802803, 5608767.795765903778374 ] } },{ "type": "Feature", "properties": { "id": 668, "code_region": "NAQ", "departement": "33", "nom_hopital": "CHL Monségur - 33", "suppressions": "2016 : médecine fermé;2016 : soins de suite et rééducation fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 8942.467279359663735, 5566803.564920133911073 ] } },{ "type": "Feature", "properties": { "id": 870, "code_region": "NAQ", "departement": "33", "nom_hopital": "CH Saint-Antoine Bazas - 33", "suppressions": "2022 : unité de soins médico psychologique fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Alliance de Gironde" }, "geometry": { "type": "Point", "coordinates": [ -23169.375534985214472, 5532745.538249166682363 ] } },{ "type": "Feature", "properties": { "id": 493, "code_region": "NAQ", "departement": "33", "nom_hopital": "CH Sainte Foy La Grande - 33", "suppressions": "1990 : maternité fermé;chirurgie fermé", "menaces": "2022 : urgences de nuit réduit (autre);2019 : urgences de nuit interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Alliance de Gironde" }, "geometry": { "type": "Point", "coordinates": [ 24809.540484126649972, 5596653.371193315833807 ] } },{ "type": "Feature", "properties": { "id": 702, "code_region": "NAQ", "departement": "33", "nom_hopital": "CHS Cadillac - 33", "suppressions": null, "menaces": "2019 : psychiatrie réduit (lits fermés)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Alliance de Gironde" }, "geometry": { "type": "Point", "coordinates": [ -35148.766667280346155, 5564231.069608676247299 ] } },{ "type": "Feature", "properties": { "id": 490, "code_region": "NAQ", "departement": "33", "nom_hopital": "CHS Charles Perrens Bordeaux - 33", "suppressions": null, "menaces": "2014 : psychiatrie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Alliance de Gironde" }, "geometry": { "type": "Point", "coordinates": [ -67040.679470873277751, 5593877.624086753465235 ] } },{ "type": "Feature", "properties": { "id": 699, "code_region": "NAQ", "departement": "33", "nom_hopital": "CHU GH Pellegrin Bordeaux - 33", "suppressions": null, "menaces": "2022 : urgences pédiatriques menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Alliance de Gironde" }, "geometry": { "type": "Point", "coordinates": [ -67221.954352404893143, 5594407.021717742085457 ] } },{ "type": "Feature", "properties": { "id": 492, "code_region": "NAQ", "departement": "33", "nom_hopital": "CHU GH St André Bordeaux - 33", "suppressions": null, "menaces": "2014 : urgences menacé;cardiologie réduit (autre)", "victoires": null, "ghi_nom": "GH", "ght_nom": "GHT Alliance de Gironde" }, "geometry": { "type": "Point", "coordinates": [ -64474.968398728880857, 5595477.107577510178089 ] } },{ "type": "Feature", "properties": { "id": 700, "code_region": "NAQ", "departement": "33", "nom_hopital": "CHU GH Sud Bordeaux - 33", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Alliance de Gironde" }, "geometry": { "type": "Point", "coordinates": [ -73540.113198027014732, 5587823.363860566169024 ] } },{ "type": "Feature", "properties": { "id": 488, "code_region": "NAQ", "departement": "33", "nom_hopital": "Clinique Bel Air Bordeaux - 33", "suppressions": null, "menaces": "2003 : maternité fusionné", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -67516.569587761478033, 5596261.311383833177388 ] } },{ "type": "Feature", "properties": { "id": 703, "code_region": "NAQ", "departement": "33", "nom_hopital": "Clinique Saint-Martin Pessac - 33", "suppressions": "2016 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -70053.350871942937374, 5588483.747240867465734 ] } },{ "type": "Feature", "properties": { "id": 287, "code_region": "NAQ", "departement": "33", "nom_hopital": "Lesparre - 33", "suppressions": null, "menaces": "maternité menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -104357.664463464927394, 5669458.906896421685815 ] } },{ "type": "Feature", "properties": { "id": 429, "code_region": "NAQ", "departement": "40", "nom_hopital": "CHDCA Dax - 40", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT des Landes" }, "geometry": { "type": "Point", "coordinates": [ -115744.628948919271352, 5421030.496395920403302 ] } },{ "type": "Feature", "properties": { "id": 47, "code_region": "NAQ", "departement": "40", "nom_hopital": "CHIMMPS Mont de Marsan - 40", "suppressions": "maternité fermé", "menaces": "urgences menacé", "victoires": null, "ghi_nom": "GCS", "ght_nom": "GHT des Landes" }, "geometry": { "type": "Point", "coordinates": [ -54138.306403956958093, 5449000.547171548008919 ] } },{ "type": "Feature", "properties": { "id": 704, "code_region": "NAQ", "departement": "40", "nom_hopital": "CHIMMPS Morcenx - 40", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHI", "ght_nom": "GHT des Landes" }, "geometry": { "type": "Point", "coordinates": [ -102247.367451660364168, 5471909.783666435629129 ] } },{ "type": "Feature", "properties": { "id": 705, "code_region": "NAQ", "departement": "40", "nom_hopital": "CH Saint-Sever - 40", "suppressions": "1998 : chirurgie fermé;1998 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT des Landes" }, "geometry": { "type": "Point", "coordinates": [ -63592.242362901582965, 5427961.051637633703649 ] } },{ "type": "Feature", "properties": { "id": 76, "code_region": "NAQ", "departement": "40", "nom_hopital": "ClinAdour Aire-sur-Adour - 40", "suppressions": "2014 : maternité fermé", "menaces": "2021 : urgences réduit (autre)", "victoires": null, "ghi_nom": "GCSPDA", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -26995.39345962176958, 5421136.158055660314858 ] } },{ "type": "Feature", "properties": { "id": 497, "code_region": "NAQ", "departement": "40", "nom_hopital": "Clin. St Vincent de Paul Dax - 40", "suppressions": "2016 : bloc opératoire fermé;2016 : chirurgie fermé;2016 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -117818.145026609883644, 5419528.654800113290548 ] } },{ "type": "Feature", "properties": { "id": 636, "code_region": "NAQ", "departement": "47", "nom_hopital": "CH Émile Roux Le Puy-en-Velay - 47", "suppressions": "2021 : soins palliatifs fermé", "menaces": "2021 : laboratoire menacé;2021 : urgences menacé;2013 : maternité menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Haute Loire" }, "geometry": { "type": "Point", "coordinates": [ 431736.321764313033782, 5629574.475209409371018 ] } },{ "type": "Feature", "properties": { "id": 329, "code_region": "NAQ", "departement": "47", "nom_hopital": "CHIAN Agen - 47", "suppressions": null, "menaces": "urgences interrompu", "victoires": null, "ghi_nom": "CHIAN", "ght_nom": "GHT de Lot et Garonne" }, "geometry": { "type": "Point", "coordinates": [ 70741.44874230636924, 5499149.627759459428489 ] } },{ "type": "Feature", "properties": { "id": 408, "code_region": "NAQ", "departement": "47", "nom_hopital": "CHIAN Nérac - 47", "suppressions": "chirurgie fermé", "menaces": "2021 : SMUR réduit (autre);2021 : urgences interrompu", "victoires": null, "ghi_nom": "CHIAN", "ght_nom": "GHT de Lot et Garonne" }, "geometry": { "type": "Point", "coordinates": [ 37492.006190491134475, 5486569.281357429921627 ] } },{ "type": "Feature", "properties": { "id": 629, "code_region": "NAQ", "departement": "47", "nom_hopital": "CHIC Marmande - 47", "suppressions": null, "menaces": "2021 : cardiologie réduit (lits fermés);2021 : chirurgie réduit (lits fermés);2021 : urgences menacé;2021 : urgences réduit (autre)", "victoires": null, "ghi_nom": "CHIC Marmande-Tonneins", "ght_nom": "GHT Moyenne Garonne" }, "geometry": { "type": "Point", "coordinates": [ 18421.427534952799761, 5543550.680696301162243 ] } },{ "type": "Feature", "properties": { "id": 328, "code_region": "NAQ", "departement": "47", "nom_hopital": "CHIC Tonneins - 47", "suppressions": "chirurgie fermé", "menaces": "2022 : soins de suite et rééducation réduit (lits fermés);2021 : cardiologie réduit (lits fermés);2021 : chirurgie réduit (lits fermés)", "victoires": null, "ghi_nom": "CHIC Marmande-Tonneins", "ght_nom": "GHT Moyenne Garonne" }, "geometry": { "type": "Point", "coordinates": [ 33733.731592973759689, 5526405.331432856619358 ] } },{ "type": "Feature", "properties": { "id": 666, "code_region": "NAQ", "departement": "47", "nom_hopital": "CHL Fumel - 47", "suppressions": null, "menaces": "2015 : soins longue durée menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 107407.636444285511971, 5542789.592782170511782 ] } },{ "type": "Feature", "properties": { "id": 667, "code_region": "NAQ", "departement": "47", "nom_hopital": "CHL Penne d'Agenais - 47", "suppressions": "2015 : soins de suite et rééducation fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 91172.761854015290737, 5525715.183522808365524 ] } },{ "type": "Feature", "properties": { "id": 327, "code_region": "NAQ", "departement": "47", "nom_hopital": "Clin. Villeneuve sur Lot - 47", "suppressions": "maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 83078.713109630014515, 5528645.067066922783852 ] } },{ "type": "Feature", "properties": { "id": 200, "code_region": "NAQ", "departement": "64", "nom_hopital": "Bayonne - 64\r\nLafargue", "suppressions": "maternité fermé", "menaces": "2019 : réanimation menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -165218.239814660541015, 5386646.687033799476922 ] } },{ "type": "Feature", "properties": { "id": 201, "code_region": "NAQ", "departement": "64", "nom_hopital": "Biarritz - 64 Polyclinique Aguilera", "suppressions": "maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -171328.72077802757849, 5386196.800312628038228 ] } },{ "type": "Feature", "properties": { "id": 912, "code_region": "NAQ", "departement": "64", "nom_hopital": "CHCB Bayonne - 64", "suppressions": null, "menaces": "2022 : gériatrie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Navarre-Côte Basque" }, "geometry": { "type": "Point", "coordinates": [ -164804.15195369720459, 5385699.938513082452118 ] } },{ "type": "Feature", "properties": { "id": 203, "code_region": "NAQ", "departement": "64", "nom_hopital": "CH Oloron Sainte Marie - 64", "suppressions": "2017 : maternité fermé;2002 : maternité transféré", "menaces": "2022 : bloc opératoire réduit (autre);2022 : unité de surveillance continue réduit (autre);2022 : urgences réduit (autre);2009 : maternité menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Béarn-Soule" }, "geometry": { "type": "Point", "coordinates": [ -68660.097059737920063, 5341899.653693375177681 ] } },{ "type": "Feature", "properties": { "id": 202, "code_region": "NAQ", "departement": "64", "nom_hopital": "CH Orthez - 64", "suppressions": "2014 : maternité fermé", "menaces": "2022 : court séjour gériatrique interrompu;2021 : SMUR interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Béarn-Soule" }, "geometry": { "type": "Point", "coordinates": [ -85903.095823819399811, 5386185.595015848055482 ] } },{ "type": "Feature", "properties": { "id": 456, "code_region": "NAQ", "departement": "64", "nom_hopital": "CH Pau - 64", "suppressions": "2017 : parking privatisé", "menaces": "2022 : urgences réduit (autre)", "victoires": "2017 : parking maintenu", "ghi_nom": "", "ght_nom": "GHT Béarn-Soule" }, "geometry": { "type": "Point", "coordinates": [ -38714.8501495491073, 5361911.103719791397452 ] } },{ "type": "Feature", "properties": { "id": 458, "code_region": "NAQ", "departement": "64", "nom_hopital": "Clin. Saint Jean de Luz - 64", "suppressions": "maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -185241.421462480298942, 5371137.457832515239716 ] } },{ "type": "Feature", "properties": { "id": 354, "code_region": "NAQ", "departement": "79", "nom_hopital": "CHDSN Parthenay - 79", "suppressions": "2018 : médecine fermé;1997 : chirurgie fermé;1997 : maternité fermé", "menaces": "2018 : soins de suite et rééducation réduit (lits fermés);2009 : urgences menacé;chirurgie ambulatoire menacé;soins palliatifs menacé", "victoires": null, "ghi_nom": "CH Nord Deux-Sèvres ", "ght_nom": "GHT des Deux-Sèvres" }, "geometry": { "type": "Point", "coordinates": [ -24540.381240848506422, 5885517.870848421007395 ] } },{ "type": "Feature", "properties": { "id": 353, "code_region": "NAQ", "departement": "79", "nom_hopital": "CHNDS Bressuire - 79", "suppressions": "2018 : chirurgie fermé;2018 : chirurgie orthopédique et digestive fermé;2018 : maternité fermé;2018 : médecine fermé;2018 : soins intensifs fermé;2018 : urgences fermé", "menaces": null, "victoires": null, "ghi_nom": "CH Nord Deux-Sèbres 1995", "ght_nom": "GHT des Deux-Sèvres" }, "geometry": { "type": "Point", "coordinates": [ -53378.994887888453377, 5915793.086719236336648 ] } },{ "type": "Feature", "properties": { "id": 572, "code_region": "NAQ", "departement": "79", "nom_hopital": "CHNDS Faye-l'Abbesse - 79", "suppressions": "2019 : cardiologie fermé", "menaces": "2022 : soins de suite et rééducation réduit (lits fermés);2019 : gastro-entérologie menacé", "victoires": null, "ghi_nom": "CH Nord-Deux-Sèvres", "ght_nom": "GHT des Deux-Sèvres" }, "geometry": { "type": "Point", "coordinates": [ -42971.961444601372932, 5914630.103870283812284 ] } },{ "type": "Feature", "properties": { "id": 352, "code_region": "NAQ", "departement": "79", "nom_hopital": "CHNDS Thouars - 79", "suppressions": "2018 : cardiologie fermé;2018 : chirurgie digestive fermé;2018 : gastro-entérologie fermé;2018 : laboratoire fermé;2018 : médecine fermé;2018 : pharmacie fermé;2018 : soins intensifs fermé;1997 : chirurgie orthopédique fermé;1997 : maternité fermé", "menaces": "2019 : urgences interrompu;radiologie scanner menacé;stérilisation menacé", "victoires": null, "ghi_nom": "CH Nord Deux-Sèvres 1995", "ght_nom": "GHT des Deux-Sèvres" }, "geometry": { "type": "Point", "coordinates": [ -20262.64546420428087, 5937588.861606650985777 ] } },{ "type": "Feature", "properties": { "id": 611, "code_region": "NAQ", "departement": "79", "nom_hopital": "CH Niort - 79", "suppressions": null, "menaces": "2021 : anesthésie menacé;2021 : psychiatrie interrompu;2021 : soins de court séjour réduit (lits fermés)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT des Deux-Sèvres" }, "geometry": { "type": "Point", "coordinates": [ -51493.844918232382042, 5831355.601289932616055 ] } },{ "type": "Feature", "properties": { "id": 708, "code_region": "NAQ", "departement": "79", "nom_hopital": "Polyclinique Inkermann Niort - 79", "suppressions": "2021 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -50390.969774186611176, 5830987.612985052168369 ] } },{ "type": "Feature", "properties": { "id": 262, "code_region": "NAQ", "departement": "86", "nom_hopital": "CHRU Châtellerault - 86", "suppressions": "2021 : cardiologie fermé", "menaces": "2021 : urgences menacé", "victoires": null, "ghi_nom": "GHRP", "ght_nom": "GHT de la Vienne" }, "geometry": { "type": "Point", "coordinates": [ 60858.084739128469664, 5912408.28923380561173 ] } },{ "type": "Feature", "properties": { "id": 607, "code_region": "NAQ", "departement": "86", "nom_hopital": "CHRU Laborit Poitiers - 86", "suppressions": null, "menaces": "2021 : gynécologie menacé;2021 : hospitalisation à domicile réduit (autre);2021 : rhumatologie réduit (autre)", "victoires": null, "ghi_nom": "GHRP", "ght_nom": "GHT Vienne" }, "geometry": { "type": "Point", "coordinates": [ 43671.994107771701238, 5869447.357196053490043 ] } },{ "type": "Feature", "properties": { "id": 365, "code_region": "NAQ", "departement": "86", "nom_hopital": "CHRU Loudun - 86", "suppressions": "2017 : urgences fermé;2001 : maternité fermé", "menaces": "2022 : urgences réduit (autre);2017 : SMUR menacé", "victoires": null, "ghi_nom": "GHNV", "ght_nom": "GHT de la Vienne" }, "geometry": { "type": "Point", "coordinates": [ 8615.068608074483564, 5943925.383567129261792 ] } },{ "type": "Feature", "properties": { "id": 312, "code_region": "NAQ", "departement": "86", "nom_hopital": "CHRU Lusignan - 86", "suppressions": "2019 : soins de suite fermé", "menaces": "2017 : centre 15 menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT de la Vienne" }, "geometry": { "type": "Point", "coordinates": [ 13666.217001126626201, 5850323.689232361502945 ] } },{ "type": "Feature", "properties": { "id": 740, "code_region": "NAQ", "departement": "86", "nom_hopital": "CHRU Montmorillon - 86", "suppressions": null, "menaces": "2022 : urgences réduit (autre);2021 : urgences menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Vienne" }, "geometry": { "type": "Point", "coordinates": [ 96483.733761534123914, 5849262.821118645370007 ] } },{ "type": "Feature", "properties": { "id": 302, "code_region": "NAQ", "departement": "87", "nom_hopital": "CH Boutard Saint Yriex - 87", "suppressions": "chirurgie fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Limousin" }, "geometry": { "type": "Point", "coordinates": [ 133976.068958598480094, 5703024.693419340997934 ] } },{ "type": "Feature", "properties": { "id": 156, "code_region": "NAQ", "departement": "87", "nom_hopital": "CH R. Mazoin Saint-Junien - 87", "suppressions": null, "menaces": "2018 : cardiologie réduit (autre);2018 : oncologie réduit (autre);2018 : orthopédie réduit (autre)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Limousin" }, "geometry": { "type": "Point", "coordinates": [ 99931.316504530564998, 5762474.819644869305193 ] } },{ "type": "Feature", "properties": { "id": 65, "code_region": "NAQ", "departement": "87", "nom_hopital": "CHU Limoges - 87", "suppressions": "2010 : blanchisserie fermé", "menaces": "urgences menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Limousin" }, "geometry": { "type": "Point", "coordinates": [ 137745.240833637537435, 5750773.890708397142589 ] } },{ "type": "Feature", "properties": { "id": 540, "code_region": "NAQ", "departement": "87", "nom_hopital": "LIMOUSIN", "suppressions": "2019 : centre autisme fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 138116.128658557194285, 5750515.559435962699354 ] } },{ "type": "Feature", "properties": { "id": 597, "code_region": "NOR", "departement": "14", "nom_hopital": "Ancien Hôpital Honfleur - 14", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 26031.877226892902399, 6345708.283673882484436 ] } },{ "type": "Feature", "properties": { "id": 471, "code_region": "NOR", "departement": "14", "nom_hopital": "Caen CHU - 14", "suppressions": null, "menaces": "2021 : hospitalisation conventionnelle menacé;2014 : chirurgie cardiaque et vasculaire réduit (autre)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Normandie Centre" }, "geometry": { "type": "Point", "coordinates": [ -39458.996700696676271, 6309465.01062339078635 ] } },{ "type": "Feature", "properties": { "id": 406, "code_region": "NOR", "departement": "14", "nom_hopital": "CHAB Aunay sur Odon - 14", "suppressions": "1997 : maternité fermé;chirurgie fermé;entretien des jardins sous-traité", "menaces": "2015 : urgences menacé", "victoires": null, "ghi_nom": "CHAB - Aunay-Bayeux", "ght_nom": "GHT Normandie Centre" }, "geometry": { "type": "Point", "coordinates": [ -70470.055930137677933, 6277937.518287811428308 ] } },{ "type": "Feature", "properties": { "id": 470, "code_region": "NOR", "departement": "14", "nom_hopital": "CHAB Bayeux - 14", "suppressions": "2016 : médecine fermé", "menaces": null, "victoires": null, "ghi_nom": "CHI Aunay-Bayeux", "ght_nom": "GHT Normandie Centre" }, "geometry": { "type": "Point", "coordinates": [ -78078.606428511397098, 6321625.200698168948293 ] } },{ "type": "Feature", "properties": { "id": 459, "code_region": "NOR", "departement": "14", "nom_hopital": "CH Côte Fleurie - 14", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CH Côte Fleurie", "ght_nom": "GHT Normandie Centre" }, "geometry": { "type": "Point", "coordinates": [ 22593.415668722278497, 6340329.737117165699601 ] } },{ "type": "Feature", "properties": { "id": 472, "code_region": "NOR", "departement": "14", "nom_hopital": "CH Côte Fleurie - 14", "suppressions": "2014 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "CH Côte Fleurie", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 14375.987457870705839, 6340088.947004342451692 ] } },{ "type": "Feature", "properties": { "id": 336, "code_region": "NOR", "departement": "14", "nom_hopital": "CH Falaise - 14", "suppressions": "2019 : cuisine sous-traité;2015 : maternité fermé", "menaces": "2021 : urgences interrompu;2019 : restauration menacé;2016 : institut de formation en soins infirmiers (IFSI) menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Normandie Centre" }, "geometry": { "type": "Point", "coordinates": [ -22939.830344783822511, 6256308.61038925126195 ] } },{ "type": "Feature", "properties": { "id": 177, "code_region": "NOR", "departement": "14", "nom_hopital": "CH Lisieux - 14", "suppressions": "2020 : médecine interne fermé;2014 : centre mucoviscidose fermé;unité long séjour fermé", "menaces": "2015 : blanchisserie réduit (autre);chirurgie fusionné", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Normandie Centre" }, "geometry": { "type": "Point", "coordinates": [ 25830.664939247410075, 6299527.31148829869926 ] } },{ "type": "Feature", "properties": { "id": 4, "code_region": "NOR", "departement": "14", "nom_hopital": "CH Vire - 14", "suppressions": "2017 : soins continus fermé;2015 : bloc opératoire fermé;2013 : maternité fermé", "menaces": "2016 : chimiothérapie menacé;2016 : institut de formation en soins infirmiers (IFSI) menacé", "victoires": "2017 : urgences victoire;2012 : maternité maintenu", "ghi_nom": "", "ght_nom": "GHT Collines de Normandie" }, "geometry": { "type": "Point", "coordinates": [ -98891.424458523135399, 6247371.695000367239118 ] } },{ "type": "Feature", "properties": { "id": 398, "code_region": "NOR", "departement": "14", "nom_hopital": "Deauville - 14", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 8312.919417883049391, 6336039.798786916770041 ] } },{ "type": "Feature", "properties": { "id": 175, "code_region": "NOR", "departement": "14", "nom_hopital": "EPSM Caen - 14", "suppressions": "2017 : bionettoyage sous-traité", "menaces": "2020 : restauration menacé;2013 : psychiatrie menacé", "victoires": "2021 : restauration victoire", "ghi_nom": "", "ght_nom": "GHT Normandie Centre" }, "geometry": { "type": "Point", "coordinates": [ -41759.895985994488001, 6305053.814212315715849 ] } },{ "type": "Feature", "properties": { "id": 176, "code_region": "NOR", "departement": "14", "nom_hopital": "Mondeville -14", "suppressions": "centre de santé des armées fermé;ravitaillement sanitaire des armées fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -35597.874255847898894, 6304936.755980071611702 ] } },{ "type": "Feature", "properties": { "id": 174, "code_region": "NOR", "departement": "14", "nom_hopital": "Trouville - 14", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CH Côte Fleurie", "ght_nom": "GHT Normandie Centre" }, "geometry": { "type": "Point", "coordinates": [ 9029.549835567726404, 6337155.087708294391632 ] } },{ "type": "Feature", "properties": { "id": 581, "code_region": "NOR", "departement": "27", "nom_hopital": "CH Bernay - 27", "suppressions": "2019 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Eure Seine et Pays d’Ouche" }, "geometry": { "type": "Point", "coordinates": [ 65628.839299842700711, 6290171.970397519879043 ] } },{ "type": "Feature", "properties": { "id": 454, "code_region": "NOR", "departement": "27", "nom_hopital": "CHELVR Louviers - 27", "suppressions": null, "menaces": "chirurgie menacé", "victoires": null, "ghi_nom": "CHI Elbeuf-Louviers-Val de Reuil", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 130102.468655917880824, 6311285.987708539701998 ] } },{ "type": "Feature", "properties": { "id": 582, "code_region": "NOR", "departement": "27", "nom_hopital": "CHES Évreux - 27", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHI Eure Seine", "ght_nom": "GHT Eure-Seine – Pays d’Ouche" }, "geometry": { "type": "Point", "coordinates": [ 123936.137967188333278, 6278124.090464384295046 ] } },{ "type": "Feature", "properties": { "id": 453, "code_region": "NOR", "departement": "27", "nom_hopital": "CHES - Vernon 27", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHES", "ght_nom": "GHT Eure-Seine – Pays d’Ouche" }, "geometry": { "type": "Point", "coordinates": [ 165359.795913943235064, 6290664.486485603265464 ] } },{ "type": "Feature", "properties": { "id": 579, "code_region": "NOR", "departement": "27", "nom_hopital": "CH Gisors - 27", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Eure-Seine – Pays d’Ouche" }, "geometry": { "type": "Point", "coordinates": [ 195860.830781053955434, 6322722.011045474559069 ] } },{ "type": "Feature", "properties": { "id": 455, "code_region": "NOR", "departement": "27", "nom_hopital": "CH La Risle - Pont Audemer - 27", "suppressions": "2014 : chirurgie fermé;2003 : maternité fermé", "menaces": "2013 : chirurgie ambulatoire menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Estuaire de la Seine" }, "geometry": { "type": "Point", "coordinates": [ 57264.733296137295838, 6334190.339969905093312 ] } },{ "type": "Feature", "properties": { "id": 670, "code_region": "NOR", "departement": "27", "nom_hopital": "CHL Pacy-sur-Eure - 27", "suppressions": "2016 : médecine fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 153355.636846866458654, 6277596.286343111656606 ] } },{ "type": "Feature", "properties": { "id": 634, "code_region": "NOR", "departement": "27", "nom_hopital": "Clinique Pasteur Évreux - 27", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 129225.978703673928976, 6279701.531512457877398 ] } },{ "type": "Feature", "properties": { "id": 903, "code_region": "NOR", "departement": "27", "nom_hopital": "NHN Évreux - 27", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 123952.515128158498555, 6278129.208768370561302 ] } },{ "type": "Feature", "properties": { "id": 199, "code_region": "NOR", "departement": "50", "nom_hopital": "CHAG Avranches – 50", "suppressions": "2022 : urgences fermé;2018 : soins de suite et rééducation transféré", "menaces": "2022 : chirurgie réduit (lits fermés);2021 : SMUR réduit (autre);2021 : urgences réduit (autre)", "victoires": null, "ghi_nom": "CHAG", "ght_nom": "GHT Mont-Saint-Michel" }, "geometry": { "type": "Point", "coordinates": [ -150444.455977305449778, 6222994.820485461503267 ] } },{ "type": "Feature", "properties": { "id": 198, "code_region": "NOR", "departement": "50", "nom_hopital": "CHAG Granville - 50 ", "suppressions": "2021 : pneumologie transféré;2018 : chirurgie ambulatoire transféré;2018 : gastro-entérologie transféré;2018 : ligne SMUR fermé;2014 : cardiologie fermé;2014 : hospitalisation à domicile fermé;2008 : chirurgie osseuse fermé;2007 : maternité fermé;1999 : chirurgie viscérale fermé", "menaces": "2021 : urgences réduit (autre);2019 : radiologie réduit (autre);2018 : astreinte transport de nuit interrompu;2017 : SMUR menacé;2015 : chirurgie ambulatoire menacé", "victoires": "2020 : ligne SMUR victoire;SMUR victoire", "ghi_nom": "CHAG", "ght_nom": "GHT Mont-Saint-Michel" }, "geometry": { "type": "Point", "coordinates": [ -174721.325865745864576, 6245709.188818985596299 ] } },{ "type": "Feature", "properties": { "id": 55, "code_region": "NOR", "departement": "50", "nom_hopital": "Cherbourg - 50", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -179644.430109128588811, 6383674.434893986210227 ] } },{ "type": "Feature", "properties": { "id": 432, "code_region": "NOR", "departement": "50", "nom_hopital": "Coutances - 50", "suppressions": "2016 : maternité fermé;2016 : maternité privatisé;2015 : médecine à orientation cardiologie fermé;cuisine transféré", "menaces": "2015 : urgences de nuit menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -160714.530974523135228, 6281956.45301700104028 ] } },{ "type": "Feature", "properties": { "id": 378, "code_region": "NOR", "departement": "50", "nom_hopital": "Saint Hilaire du  Harcouët - 50", "suppressions": null, "menaces": "2022 : médecine réduit (lits fermés);2022 : soins de suite et rééducation réduit (lits fermés);2021 : urgences réduit (autre);2016 : urgences menacé", "victoires": "2016 : urgences victoire", "ghi_nom": "", "ght_nom": "GHT Mont-Saint-Michel" }, "geometry": { "type": "Point", "coordinates": [ -122047.562661387055414, 6202044.800589862279594 ] } },{ "type": "Feature", "properties": { "id": 197, "code_region": "NOR", "departement": "50", "nom_hopital": "Saint Lô (50)", "suppressions": "2015 : unité psychiatrique fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -123214.148443654863513, 6292779.88971315138042 ] } },{ "type": "Feature", "properties": { "id": 348, "code_region": "NOR", "departement": "50", "nom_hopital": "Valognes - 50", "suppressions": "2020 : centre de soins non programmés fermé;2015 : urgences fermé;2000 : maternité fermé;chirurgie fermé", "menaces": "2015 : urgences de nuit interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -162961.194630680780392, 6360486.40242856554687 ] } },{ "type": "Feature", "properties": { "id": 190, "code_region": "NOR", "departement": "61", "nom_hopital": "CH Flers - 61", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Collines de Normandie" }, "geometry": { "type": "Point", "coordinates": [ -64102.771642856234394, 6232562.294358489103615 ] } },{ "type": "Feature", "properties": { "id": 240, "code_region": "NOR", "departement": "61", "nom_hopital": "CHICA Domfront - 61", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHICA CHIC des Andaines", "ght_nom": "GHT Collines de Normandie" }, "geometry": { "type": "Point", "coordinates": [ -73304.804887782782316, 6205758.795445253141224 ] } },{ "type": "Feature", "properties": { "id": 239, "code_region": "NOR", "departement": "61", "nom_hopital": "CHICA La Ferté Macé  - 61", "suppressions": "2005 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "CHICA CHIC des Andaines", "ght_nom": "GHT Collines de Normandie" }, "geometry": { "type": "Point", "coordinates": [ -38835.804922301322222, 6206884.709517969749868 ] } },{ "type": "Feature", "properties": { "id": 36, "code_region": "NOR", "departement": "61", "nom_hopital": "CHICAM - Alençon - 61", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Orne-Perche Saosnois" }, "geometry": { "type": "Point", "coordinates": [ 9135.186258285069925, 6178714.421312133781612 ] } },{ "type": "Feature", "properties": { "id": 191, "code_region": "NOR", "departement": "61", "nom_hopital": "L'Aigle - 61", "suppressions": null, "menaces": "2015 : chirurgie ambulatoire interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 70004.816644062157138, 6235003.406891046091914 ] } },{ "type": "Feature", "properties": { "id": 283, "code_region": "NOR", "departement": "61", "nom_hopital": "Mortagne au Perche - 61", "suppressions": "chirurgie fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 60739.062843634288583, 6193802.427001557312906 ] } },{ "type": "Feature", "properties": { "id": 618, "code_region": "NOR", "departement": "76", "nom_hopital": "CH Asselin-Hédlin Yvetot - 76", "suppressions": null, "menaces": "2021 : EHPAD réduit (autre)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Rouen-Cœur de Seine" }, "geometry": { "type": "Point", "coordinates": [ 82829.100082870616461, 6380600.78243163228035 ] } },{ "type": "Feature", "properties": { "id": 268, "code_region": "NOR", "departement": "76", "nom_hopital": "CH Belvédère -Mont Saint Aignan - 76", "suppressions": null, "menaces": "2018 : maternité menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Rouen-Cœur de Seine" }, "geometry": { "type": "Point", "coordinates": [ 120410.393494881674997, 6353105.978798862546682 ] } },{ "type": "Feature", "properties": { "id": 635, "code_region": "NOR", "departement": "76", "nom_hopital": "CHELVR Elbeuf - ", "suppressions": null, "menaces": "chirurgie menacé", "victoires": null, "ghi_nom": "CHELVR - Elbeuf-Louviers-Val de Reuil", "ght_nom": "GHT Val de Seine Plateaux de l’Eure" }, "geometry": { "type": "Point", "coordinates": [ 116077.968123342317995, 6326822.153319273144007 ] } },{ "type": "Feature", "properties": { "id": 266, "code_region": "NOR", "departement": "76", "nom_hopital": "CH Fécamp - 76", "suppressions": "chirurgie fermé", "menaces": null, "victoires": null, "ghi_nom": "CHIPHF", "ght_nom": "GHT Estuaire de la Seine" }, "geometry": { "type": "Point", "coordinates": [ 43003.587720312178135, 6402124.301422521471977 ] } },{ "type": "Feature", "properties": { "id": 51, "code_region": "NOR", "departement": "76", "nom_hopital": "CH Flaubert - Le Havre - 76\r\n", "suppressions": "2015 : direction des ressources humaines transféré;2015 : direction des ressources matérielles et logistique transféré;2010 : gynécologie obstétrique transféré;2010 : pédiatrie transféré;2010 : services administratifs transféré;2010 : urgences pédiatriques transféré", "menaces": "centre mucoviscidose menacé", "victoires": null, "ghi_nom": "GHH", "ght_nom": "GHT Estuaire de la Seine" }, "geometry": { "type": "Point", "coordinates": [ 12576.349428389170498, 6360038.337912418879569 ] } },{ "type": "Feature", "properties": { "id": 267, "code_region": "NOR", "departement": "76", "nom_hopital": "CH Lillebonne - 76", "suppressions": "chirurgie fermé", "menaces": "2019 : SMUR menacé;2019 : urgences menacé", "victoires": null, "ghi_nom": "CHICVS", "ght_nom": "GHT Estuaire de la Seine" }, "geometry": { "type": "Point", "coordinates": [ 60556.98035414138576, 6363478.521647526882589 ] } },{ "type": "Feature", "properties": { "id": 585, "code_region": "NOR", "departement": "76", "nom_hopital": "CH Monod - Le Havre - 76", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "GHH", "ght_nom": "GHT Estuaire de la Seine" }, "geometry": { "type": "Point", "coordinates": [ 20585.010382272303104, 6364655.983693975023925 ] } },{ "type": "Feature", "properties": { "id": 639, "code_region": "NOR", "departement": "76", "nom_hopital": "CH Saint-Julien Rouen - 76", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHU Rouen-Normandie", "ght_nom": "GHT Rouen-Cœur de Seine" }, "geometry": { "type": "Point", "coordinates": [ 117669.323651183673064, 6346323.015051507391036 ] } },{ "type": "Feature", "properties": { "id": 586, "code_region": "NOR", "departement": "76", "nom_hopital": "CHS du Rouvray - 76", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Rouen-Cœur de Seine" }, "geometry": { "type": "Point", "coordinates": [ 121895.083859484817367, 6342752.041798445396125 ] } },{ "type": "Feature", "properties": { "id": 269, "code_region": "NOR", "departement": "76", "nom_hopital": "Rouen -76", "suppressions": null, "menaces": "2017 : SMUR menacé", "victoires": null, "ghi_nom": "CHU", "ght_nom": "GHT Rouen-Cœur de Seine" }, "geometry": { "type": "Point", "coordinates": [ 123220.987376499935635, 6349792.74247170239687 ] } },{ "type": "Feature", "properties": { "id": 428, "code_region": "OCC", "departement": "09", "nom_hopital": "CHAC Saint Girons - 09", "suppressions": null, "menaces": "2022 : court séjour gériatrique réduit (autre);2022 : maternité interrompu;2021 : rééducation neurologique réduit (autre);2021 : urgences interrompu;2018 : chirurgie menacé;2018 : maternité menacé", "victoires": null, "ghi_nom": "CHAC", "ght_nom": "GHT Pyrénées ariègeoises" }, "geometry": { "type": "Point", "coordinates": [ 125783.253170001931721, 5311912.823580753989518 ] } },{ "type": "Feature", "properties": { "id": 578, "code_region": "OCC", "departement": "09", "nom_hopital": "CHIVA Ariège Couserants - Pamiers - 09", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHIVA", "ght_nom": "GHT Pyrénées ariègeoises" }, "geometry": { "type": "Point", "coordinates": [ 179018.772524152474944, 5329496.561007062904537 ] } },{ "type": "Feature", "properties": { "id": 306, "code_region": "OCC", "departement": "09", "nom_hopital": "CHIVA Foix - Saint Jean de Verges - 09", "suppressions": "2018 : diabétologie fermé;2018 : infectiologie fermé;2018 : neurologie fermé;2018 : ophtalmologie fermé", "menaces": null, "victoires": "2012 : réanimation victoire", "ghi_nom": "CHIVA - Vallées d'Ariège", "ght_nom": "GHT Pyrénées ariègeoises" }, "geometry": { "type": "Point", "coordinates": [ 180343.614744935213821, 5315908.640312023460865 ] } },{ "type": "Feature", "properties": { "id": 307, "code_region": "OCC", "departement": "09", "nom_hopital": "CHIVA Pays d'Olme - Lavelanet - 09", "suppressions": null, "menaces": "2021 : urgences interrompu;2012 : urgences réduit (autre);2011 : chirurgie conventionnelle réduit (autre)", "victoires": "2020 : urgences réouvert;2012 : chirurgie maintenu;2012 : urgences maintenu", "ghi_nom": "CHIVA", "ght_nom": "GHT Pyrénées ariègeoises" }, "geometry": { "type": "Point", "coordinates": [ 207153.529029562545475, 5301134.391956206411123 ] } },{ "type": "Feature", "properties": { "id": 308, "code_region": "OCC", "departement": "09", "nom_hopital": "CH J. Rousse -Tarascon sur Ariège - 09", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Pyrénées ariègeoises" }, "geometry": { "type": "Point", "coordinates": [ 178674.21503871306777, 5288942.945353134535253 ] } },{ "type": "Feature", "properties": { "id": 309, "code_region": "OCC", "departement": "09", "nom_hopital": "CH St Louis - Ax-Les-Thermes - 09", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Pyrénées ariègeoises" }, "geometry": { "type": "Point", "coordinates": [ 204855.647790808783611, 5269386.028537317179143 ] } },{ "type": "Feature", "properties": { "id": 305, "code_region": "OCC", "departement": "09", "nom_hopital": "EHPAD du Barriol - Pamiers - 09", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 179107.152838096255437, 5329508.50429273955524 ] } },{ "type": "Feature", "properties": { "id": 655, "code_region": "OCC", "departement": "09", "nom_hopital": "Maternité Lavelanet - 09", "suppressions": "1998 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 204951.841132823086809, 5301606.216624537482858 ] } },{ "type": "Feature", "properties": { "id": 30, "code_region": "OCC", "departement": "11", "nom_hopital": "CH Carcassonne - 11", "suppressions": null, "menaces": "2019 : SMUR interrompu;2018 : urgences menacé;2017 : urgences interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Ouest Audois" }, "geometry": { "type": "Point", "coordinates": [ 261923.621051700261887, 5344305.74374633654952 ] } },{ "type": "Feature", "properties": { "id": 304, "code_region": "OCC", "departement": "11", "nom_hopital": "CH Jean Pierre Cassabel Castelnaudary - 11", "suppressions": "2010 : chirurgie fermé;2003 : maternité fermé", "menaces": "2019 : urgences interrompu;2017 : SMUR interrompu;2015 : urgences menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Ouest Audois" }, "geometry": { "type": "Point", "coordinates": [ 217410.528697221627226, 5360375.858358574099839 ] } },{ "type": "Feature", "properties": { "id": 423, "code_region": "OCC", "departement": "11", "nom_hopital": "CH Lézignan-Corbières - 11", "suppressions": "2008 : urgences fermé;chirurgie fermé", "menaces": "2020 : médecine menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Aude-Pyrénées" }, "geometry": { "type": "Point", "coordinates": [ 307174.635134153009858, 5341648.08946127910167 ] } },{ "type": "Feature", "properties": { "id": 656, "code_region": "OCC", "departement": "11", "nom_hopital": "CHLQ Limoux - 11", "suppressions": null, "menaces": "2017 : SMUR interrompu", "victoires": null, "ghi_nom": "CHLQ", "ght_nom": "GHT Ouest Audois" }, "geometry": { "type": "Point", "coordinates": [ 247067.993193544563837, 5320383.621903200633824 ] } },{ "type": "Feature", "properties": { "id": 430, "code_region": "OCC", "departement": "11", "nom_hopital": "CHLQ Quillan  - 11", "suppressions": null, "menaces": "2018 : urgences interrompu;2017 : SMUR interrompu;1999 : chirurgie menacé", "victoires": null, "ghi_nom": "CHLQ", "ght_nom": "GHT Ouest Audois" }, "geometry": { "type": "Point", "coordinates": [ 243188.667059203406097, 5292988.261185367591679 ] } },{ "type": "Feature", "properties": { "id": 657, "code_region": "OCC", "departement": "11", "nom_hopital": "CH Narbonne", "suppressions": null, "menaces": "2019 : oncologie interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Aude-Pyrénées" }, "geometry": { "type": "Point", "coordinates": [ 333917.184837099164724, 5339561.428572214208543 ] } },{ "type": "Feature", "properties": { "id": 658, "code_region": "OCC", "departement": "11", "nom_hopital": "Polyclinique du Languedoc Narbonne - 11", "suppressions": "2019 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 336769.241454593837261, 5339862.399371041916311 ] } },{ "type": "Feature", "properties": { "id": 737, "code_region": "OCC", "departement": "11", "nom_hopital": "Polyclinique Montréal Carcassonne - 11", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 259263.111076128057903, 5344458.863375958055258 ] } },{ "type": "Feature", "properties": { "id": 411, "code_region": "OCC", "departement": "12", "nom_hopital": "Asprières - 12", "suppressions": null, "menaces": "maison de retraite menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 238727.622678985295352, 5550193.667281409725547 ] } },{ "type": "Feature", "properties": { "id": 275, "code_region": "OCC", "departement": "12", "nom_hopital": "CH Millau - 12", "suppressions": "2022 : soins de suite et rééducation fermé", "menaces": "2021 : soins de suite et rééducation interrompu;2020 : chirurgie interrompu;2020 : soins de suite et rééducation menacé;2015 : maternité menacé", "victoires": "2017 : maternité maintenu", "ghi_nom": "", "ght_nom": "GHT Est-Hérault et Sud-Aveyron" }, "geometry": { "type": "Point", "coordinates": [ 339752.499639644636773, 5480038.084385390393436 ] } },{ "type": "Feature", "properties": { "id": 273, "code_region": "OCC", "departement": "12", "nom_hopital": "CH Rodez - 12", "suppressions": null, "menaces": "2017 : cardiologie menacé;2016 : radiothérapie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Rouergue" }, "geometry": { "type": "Point", "coordinates": [ 286761.402492818771861, 5519674.159714217297733 ] } },{ "type": "Feature", "properties": { "id": 344, "code_region": "OCC", "departement": "12", "nom_hopital": "CH Saint Affrique - 12", "suppressions": "2014 : bactériologie fermé;2014 : buanderie fermé", "menaces": "2021 : bloc chirurgical réduit (autre);2021 : maternité interrompu;2021 : maternité réduit (autre);2021 : urgences réduit (autre)", "victoires": "2017 : maternité maintenu;2011 : chirurgie maintenu", "ghi_nom": "", "ght_nom": "GHT Est-Hérault et Sud-Aveyron" }, "geometry": { "type": "Point", "coordinates": [ 320101.352703776385169, 5458994.804048198275268 ] } },{ "type": "Feature", "properties": { "id": 274, "code_region": "OCC", "departement": "12", "nom_hopital": "CH Villefranche-de-Rouergue - 12", "suppressions": null, "menaces": "2019 : maternité menacé;2012 : urgences menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Rouergue" }, "geometry": { "type": "Point", "coordinates": [ 226577.952452229568735, 5519720.640694474801421 ] } },{ "type": "Feature", "properties": { "id": 587, "code_region": "OCC", "departement": "12", "nom_hopital": "Clin. Sainte Côme - 12", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Est-Hérault et Sud-Aveyron" }, "geometry": { "type": "Point", "coordinates": [ 341821.932281925866846, 5480256.218231708742678 ] } },{ "type": "Feature", "properties": { "id": 272, "code_region": "OCC", "departement": "12", "nom_hopital": "Decazeville - 12", "suppressions": "2017 : maternité fermé;2011 : bloc opératoire fermé", "menaces": "2019 : chirurgie menacé;2019 : réanimation menacé;2016 : maternité menacé;2012 : bloc opératoire menacé;2012 : urgences menacé;2008 : chirurgie réduit (lits fermés)", "victoires": "2011 : maternité maintenu;chirurgie maintenu", "ghi_nom": "", "ght_nom": "GHT du Rouergue" }, "geometry": { "type": "Point", "coordinates": [ 250743.308652505133068, 5553924.949622930027544 ] } },{ "type": "Feature", "properties": { "id": 44, "code_region": "OCC", "departement": "30", "nom_hopital": "CH Alès-Cévennes - 30", "suppressions": null, "menaces": "2020 : maternité réduit (lits fermés);soins longue durée transformé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Cévennes-Gard-Camargue" }, "geometry": { "type": "Point", "coordinates": [ 456065.995044821407646, 5488175.872294276021421 ] } },{ "type": "Feature", "properties": { "id": 26, "code_region": "OCC", "departement": "30", "nom_hopital": "CH Mas Careiron Uzès - 30", "suppressions": null, "menaces": null, "victoires": "2016 : unité psychiatrique maintenu", "ghi_nom": "", "ght_nom": "GHT Cévennes-Gard-Camargue" }, "geometry": { "type": "Point", "coordinates": [ 490880.256279818888288, 5466295.717289418913424 ] } },{ "type": "Feature", "properties": { "id": 434, "code_region": "OCC", "departement": "30", "nom_hopital": "Ponteil ", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 437887.312268051959109, 5526996.176480459049344 ] } },{ "type": "Feature", "properties": { "id": 481, "code_region": "OCC", "departement": "31", "nom_hopital": "Centre post-cure Maignan Toulouse - 31", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 159742.634372647851706, 5406472.09786613099277 ] } },{ "type": "Feature", "properties": { "id": 291, "code_region": "OCC", "departement": "31", "nom_hopital": "CHCP Saint-Gaudens - 31", "suppressions": null, "menaces": "2019 : urgences interrompu;2012 : réanimation menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Haute-Garonne et Tarn Ouest" }, "geometry": { "type": "Point", "coordinates": [ 80550.953559438523371, 5328263.25404651183635 ] } },{ "type": "Feature", "properties": { "id": 478, "code_region": "OCC", "departement": "31", "nom_hopital": "CH Joseph Ducuing Toulouse - 31", "suppressions": "2021 : médecine fermé;2019 : urgences fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 159139.666097458277363, 5403185.10299086291343 ] } },{ "type": "Feature", "properties": { "id": 596, "code_region": "OCC", "departement": "31", "nom_hopital": "CHP G. Marchant Toulouse - 31", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 158091.010277696390403, 5397556.814436988905072 ] } },{ "type": "Feature", "properties": { "id": 477, "code_region": "OCC", "departement": "31", "nom_hopital": "CHU Garonne Toulouse - 31", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHU Toulouse", "ght_nom": "GHT Haute-Garonne et Tarn Ouest" }, "geometry": { "type": "Point", "coordinates": [ 155942.61617521973676, 5406282.988633666187525 ] } },{ "type": "Feature", "properties": { "id": 483, "code_region": "OCC", "departement": "31", "nom_hopital": "CHU La Grave Toulouse - 31", "suppressions": "gériatrie transféré", "menaces": null, "victoires": null, "ghi_nom": "CHU Toulouse", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 159413.150029904965777, 5403800.194351153448224 ] } },{ "type": "Feature", "properties": { "id": 480, "code_region": "OCC", "departement": "31", "nom_hopital": "CHU Pierre-Paul Riquet Toulouse - 31", "suppressions": null, "menaces": "2016 : centre IVG menacé;2014 : bloc chirurgical menacé;2013 : chirurgie menacé;2013 : pédiatrie menacé;hospitalisation à domicile menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Haute-Garonne et Tarn Ouest" }, "geometry": { "type": "Point", "coordinates": [ 155953.005597133160336, 5405164.060662439092994 ] } },{ "type": "Feature", "properties": { "id": 482, "code_region": "OCC", "departement": "31", "nom_hopital": "CHU Purpan Toulouse - 31", "suppressions": "2009 : soins externes rééducation fermé", "menaces": "2011 : urgences menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Haute-Garonne et Tarn Ouest" }, "geometry": { "type": "Point", "coordinates": [ 155809.857282042416045, 5405779.17365091200918 ] } },{ "type": "Feature", "properties": { "id": 659, "code_region": "OCC", "departement": "31", "nom_hopital": "Clinique de l'Ormeau Tarbes - 31", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 8646.608143046516489, 5345237.598216720856726 ] } },{ "type": "Feature", "properties": { "id": 479, "code_region": "OCC", "departement": "31", "nom_hopital": "Toulouse - 31  Centre de Soins St Sernin", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 160346.116081727697747, 5404827.515403016470373 ] } },{ "type": "Feature", "properties": { "id": 290, "code_region": "OCC", "departement": "31", "nom_hopital": "Toulouse La Case de Santé - 31", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 160769.551529149524868, 5404454.89220929518342 ] } },{ "type": "Feature", "properties": { "id": 486, "code_region": "OCC", "departement": "32", "nom_hopital": "Auch -32\nClinique d'Embats\n", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 58815.109418480045861, 5410040.815024742856622 ] } },{ "type": "Feature", "properties": { "id": 59, "code_region": "OCC", "departement": "32", "nom_hopital": "CH Auch - 32", "suppressions": "2016 : chirurgie fermé;2015 : pneumologie fermé;pédiatrie fermé;rééducation fermé", "menaces": "2021 : urgences menacé;2019 : scanner - IRM menacé;2015 : cardiologie menacé;2012 : gynécologie menacé;2009 : pneumologie réduit (autre);diabétologie réduit (autre);neurologie réduit (autre)", "victoires": "2021 : scanner - IRM maintenu", "ghi_nom": "", "ght_nom": "GHT du Gers" }, "geometry": { "type": "Point", "coordinates": [ 64216.883380200721149, 5408514.672970922663808 ] } },{ "type": "Feature", "properties": { "id": 395, "code_region": "OCC", "departement": "32", "nom_hopital": "CH Condom - 32", "suppressions": null, "menaces": "2019 : urgences menacé;2018 : SMUR réduit (autre);2017 : urgences de nuit interrompu;2015 : SMUR menacé", "victoires": "2019 : SMUR réouvert;2018 : SMUR maintenu", "ghi_nom": "", "ght_nom": "GHT du Gers" }, "geometry": { "type": "Point", "coordinates": [ 42153.126163527347671, 5458628.989592606201768 ] } },{ "type": "Feature", "properties": { "id": 413, "code_region": "OCC", "departement": "32", "nom_hopital": "CH Mauvezin - 32", "suppressions": null, "menaces": null, "victoires": "médecine maintenu", "ghi_nom": "", "ght_nom": "GHT du Gers" }, "geometry": { "type": "Point", "coordinates": [ 97410.781323655319284, 5423711.598720670677722 ] } },{ "type": "Feature", "properties": { "id": 384, "code_region": "OCC", "departement": "32", "nom_hopital": "CH Saint-Jacques Mirande - 32", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Gers" }, "geometry": { "type": "Point", "coordinates": [ 44857.777282932140224, 5390104.645425390452147 ] } },{ "type": "Feature", "properties": { "id": 609, "code_region": "OCC", "departement": "32", "nom_hopital": "CHS Auch - 32", "suppressions": null, "menaces": "2021 : pédopsychiatrie interrompu;2021 : unité de projet et d’accompagnement à la sortie (UPAS) menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 66080.134517327009235, 5410512.355123727582395 ] } },{ "type": "Feature", "properties": { "id": 484, "code_region": "OCC", "departement": "32", "nom_hopital": "Cl. Barthélémy - Auch – 32 \r\n", "suppressions": "2005 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 64864.167532538318483, 5409124.727809335105121 ] } },{ "type": "Feature", "properties": { "id": 487, "code_region": "OCC", "departement": "32", "nom_hopital": "Clin. de Gascogne - Auch - 32", "suppressions": "maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 66701.903179145156173, 5410696.344511473551393 ] } },{ "type": "Feature", "properties": { "id": 18, "code_region": "OCC", "departement": "32", "nom_hopital": "Fleurance-Lectoure - 32", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 73408.040259900517412, 5443425.906646262854338 ] } },{ "type": "Feature", "properties": { "id": 61, "code_region": "OCC", "departement": "32", "nom_hopital": "Lectoure - 32", "suppressions": "cuisine fermé;services techniques fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 68591.090096090018051, 5455502.85809831507504 ] } },{ "type": "Feature", "properties": { "id": 412, "code_region": "OCC", "departement": "32", "nom_hopital": "Nogaro - 32", "suppressions": null, "menaces": "2011 : médecine réduit (lits fermés)", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -3443.136059314991144, 5427968.417148745618761 ] } },{ "type": "Feature", "properties": { "id": 394, "code_region": "OCC", "departement": "32", "nom_hopital": "Vic-Fezensac - 32", "suppressions": "unité spécialisée Alzheimer fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Gers" }, "geometry": { "type": "Point", "coordinates": [ 33105.941779963999579, 5428354.049377659335732 ] } },{ "type": "Feature", "properties": { "id": 739, "code_region": "OCC", "departement": "34", "nom_hopital": "CHBT Saint-Loup Agde - 34", "suppressions": "2021 : accueil médicalisé de jour fermé;2021 : urgences de nuit fermé", "menaces": "2021 : médecine réduit (lits fermés);2021 : réanimation réduit (lits fermés);2021 : soins de suite et rééducation réduit (lits fermés)", "victoires": null, "ghi_nom": "CHBT", "ght_nom": "GHT Est-Hérault et Sud-Aveyron" }, "geometry": { "type": "Point", "coordinates": [ 387738.742672983265948, 5357508.19862643070519 ] } },{ "type": "Feature", "properties": { "id": 738, "code_region": "OCC", "departement": "34", "nom_hopital": "CHBT Sète - 34", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHBT", "ght_nom": "GHT Est-Hérault et Sud-Aveyron" }, "geometry": { "type": "Point", "coordinates": [ 408559.978992853546515, 5374206.929104936309159 ] } },{ "type": "Feature", "properties": { "id": 43, "code_region": "OCC", "departement": "34", "nom_hopital": "CH Lodève - 34", "suppressions": "2008 : chirurgie programmée fermé", "menaces": "2022 : CAPS interrompu;2022 : urgences menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Est-Hérault et Sud-Aveyron" }, "geometry": { "type": "Point", "coordinates": [ 369097.672788176685572, 5423844.902355464175344 ] } },{ "type": "Feature", "properties": { "id": 315, "code_region": "OCC", "departement": "34", "nom_hopital": "HL Clermont l'Hérault - 34", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Est-Hérault et Sud-Aveyron" }, "geometry": { "type": "Point", "coordinates": [ 382626.178151916712523, 5408242.497948109172285 ] } },{ "type": "Feature", "properties": { "id": 916, "code_region": "OCC", "departement": "34", "nom_hopital": "Polyclinique Saint-Louis Ganges - 34", "suppressions": null, "menaces": "2022 : maternité menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 412160.544539894443005, 5455031.1343750404194 ] } },{ "type": "Feature", "properties": { "id": 499, "code_region": "OCC", "departement": "46", "nom_hopital": "Cahors Résidence d'Olt - 46", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 160127.176163287978852, 5535197.039128603413701 ] } },{ "type": "Feature", "properties": { "id": 310, "code_region": "OCC", "departement": "46", "nom_hopital": "CH Coulon Gourdon - 46", "suppressions": "2004 : maternité fermé", "menaces": "2021 : urgences menacé;2011 : chirurgie réduit (autre);2010 : chirurgie menacé;2003 : maternité menacé;2003 : pédiatrie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Lot" }, "geometry": { "type": "Point", "coordinates": [ 153840.402856331405928, 5580199.213789553381503 ] } },{ "type": "Feature", "properties": { "id": 233, "code_region": "OCC", "departement": "46", "nom_hopital": "CH de Bigorre Tarbes - 46", "suppressions": null, "menaces": "2021 : SAMU menacé;2021 : urgences menacé", "victoires": null, "ghi_nom": "CH Tarbes-Lourdes", "ght_nom": "GHT des Hautes-Pyrénées" }, "geometry": { "type": "Point", "coordinates": [ 6253.344808116555214, 5345573.238320564851165 ] } },{ "type": "Feature", "properties": { "id": 405, "code_region": "OCC", "departement": "46", "nom_hopital": "CH Figeac - 46", "suppressions": "2009 : maternité fermé", "menaces": "2010 : chirurgie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Lot" }, "geometry": { "type": "Point", "coordinates": [ 225879.773087185400072, 5560283.318476480431855 ] } },{ "type": "Feature", "properties": { "id": 49, "code_region": "OCC", "departement": "46", "nom_hopital": "CH Jean Rougier Cahors - 46", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Lot" }, "geometry": { "type": "Point", "coordinates": [ 160423.580976483703125, 5534849.822061712853611 ] } },{ "type": "Feature", "properties": { "id": 403, "code_region": "OCC", "departement": "46", "nom_hopital": "CH L. Conte Gramat - 46", "suppressions": null, "menaces": "2018 : médecine menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Lot" }, "geometry": { "type": "Point", "coordinates": [ 191856.250969944609096, 5586837.357793661765754 ] } },{ "type": "Feature", "properties": { "id": 404, "code_region": "OCC", "departement": "46", "nom_hopital": "CH Saint-Jacques de Saint-Céré - 46", "suppressions": "1997 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Lot" }, "geometry": { "type": "Point", "coordinates": [ 210684.669375083991326, 5599411.081740495748818 ] } },{ "type": "Feature", "properties": { "id": 669, "code_region": "OCC", "departement": "48", "nom_hopital": "CHL Fanny Ramadier Saint-Chély d'Apcher - 48", "suppressions": "2015 : soins de suite et rééducation fermé;1991 : maternité fermé", "menaces": "2011 : soins de suite et rééducation menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Lozère" }, "geometry": { "type": "Point", "coordinates": [ 365033.91812481690431, 5591366.126224720850587 ] } },{ "type": "Feature", "properties": { "id": 338, "code_region": "OCC", "departement": "48", "nom_hopital": "CH Lozère - Marvéjols - 48", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHI Lozère", "ght_nom": "GHT Lozère" }, "geometry": { "type": "Point", "coordinates": [ 366220.002250295539852, 5550978.563957623206079 ] } },{ "type": "Feature", "properties": { "id": 674, "code_region": "OCC", "departement": "48", "nom_hopital": "CH Lozère - Mende - 48", "suppressions": null, "menaces": "réanimation menacé", "victoires": null, "ghi_nom": "CHI Lozère", "ght_nom": "GHT Lozère" }, "geometry": { "type": "Point", "coordinates": [ 388584.869459383189678, 5546657.665069367736578 ] } },{ "type": "Feature", "properties": { "id": 675, "code_region": "OCC", "departement": "48", "nom_hopital": "CH Théophile Roussel Florac - 48", "suppressions": null, "menaces": "2015 : médecine réduit (lits fermés)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Lozère" }, "geometry": { "type": "Point", "coordinates": [ 400486.728114846628159, 5515960.690030517056584 ] } },{ "type": "Feature", "properties": { "id": 345, "code_region": "OCC", "departement": "65", "nom_hopital": "CH Bagnères de Bigorre - 65", "suppressions": "2012 : buanderie fermé", "menaces": "2022 : urgences de nuit interrompu;2021 : urgences de nuit menacé;2015 : urgences menacé", "victoires": "2021 : urgences de nuit maintenu", "ghi_nom": "", "ght_nom": "GHT des Hautes-Pyrénées" }, "geometry": { "type": "Point", "coordinates": [ 16762.198200124534196, 5322339.559153961017728 ] } },{ "type": "Feature", "properties": { "id": 234, "code_region": "OCC", "departement": "65", "nom_hopital": "CH Lourdes - 65", "suppressions": "2015 : maternité fermé;addictologie transféré;HIV transféré;maladies infectieuses fermé", "menaces": "2014 : maternité menacé;2014 : réanimation menacé;2009 : cardiologie réduit (autre);2009 : endoscopie réduit (autre);2009 : gastrologie réduit (autre);2008 : chirurgie réduit (autre)", "victoires": null, "ghi_nom": "GH Tarbes Lourdes", "ght_nom": "GHT des Hautes-Pyrénées" }, "geometry": { "type": "Point", "coordinates": [ -5109.608228961395071, 5325936.872714981436729 ] } },{ "type": "Feature", "properties": { "id": 339, "code_region": "OCC", "departement": "65", "nom_hopital": "Hôpitaux de Lannemezan - 65", "suppressions": "2008 : maternité fermé", "menaces": "2011 : bloc opératoire réduit (autre);2010 : chirurgie menacé", "victoires": "2012 : chirurgie maintenu;2012 : psychiatrie maintenu;2011 : bloc opératoire réouvert;maternité victoire", "ghi_nom": "Hôpitaux de Lannemezan", "ght_nom": "GHT des Hautes-Pyrénées" }, "geometry": { "type": "Point", "coordinates": [ 46018.818584635882871, 5329639.769625549204648 ] } },{ "type": "Feature", "properties": { "id": 425, "code_region": "OCC", "departement": "66", "nom_hopital": "CH Perpignan - 66", "suppressions": null, "menaces": "2019 : hélicoptère menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Aude-Pyrénées" }, "geometry": { "type": "Point", "coordinates": [ 321691.182062845677137, 5270296.174458373337984 ] } },{ "type": "Feature", "properties": { "id": 340, "code_region": "OCC", "departement": "66", "nom_hopital": "CHS Gregory Thuir -  - 66", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 306817.431007003469858, 5256200.661136843264103 ] } },{ "type": "Feature", "properties": { "id": 83, "code_region": "OCC", "departement": "81", "nom_hopital": "CH Albi - 81", "suppressions": "2012 : endocrinologie fermé;2012 : entretien sous-traité;2012 : nettoyage sous-traité;2008 : urologie fermé;2000 : ophtalmologie fermé;2000 : otorhinolaryngologie fermé;2000 : stomatologie fermé", "menaces": "2012 : soins longue durée menacé;2009 : IRM menacé;2008 : endocrinologie réduit (lits fermés)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Coeur d'Occitanie" }, "geometry": { "type": "Point", "coordinates": [ 238461.15033635875443, 5453970.624127821065485 ] } },{ "type": "Feature", "properties": { "id": 257, "code_region": "OCC", "departement": "81", "nom_hopital": "CH du Pays d'Autan Castres - 81", "suppressions": null, "menaces": "2011 : cardiologie rythmologique menacé", "victoires": "2012 : rythmologie interventionnelle maintenu", "ghi_nom": "CHIC Castres-Mazamet", "ght_nom": "GHT Coeur d'Occitanie" }, "geometry": { "type": "Point", "coordinates": [ 251833.630315612535924, 5398546.086588129401207 ] } },{ "type": "Feature", "properties": { "id": 258, "code_region": "OCC", "departement": "81", "nom_hopital": "CH du Pays d'Autan Mazamet - 81", "suppressions": "1998 : maternité fermé;1998 : obstétrique transféré", "menaces": null, "victoires": null, "ghi_nom": "CHIC Castres-Mazamet", "ght_nom": "GHT Coeur d'Occitanie" }, "geometry": { "type": "Point", "coordinates": [ 263898.744421083945781, 5387673.392188142985106 ] } },{ "type": "Feature", "properties": { "id": 255, "code_region": "OCC", "departement": "81", "nom_hopital": "CH Gaillac - 81", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Coeur d'Occitanie" }, "geometry": { "type": "Point", "coordinates": [ 211131.086864355660509, 5450255.04581362195313 ] } },{ "type": "Feature", "properties": { "id": 337, "code_region": "OCC", "departement": "81", "nom_hopital": "CH Lavaur - 81", "suppressions": "2008 : chirurgie fermé;endocrinologie fermé", "menaces": "2022 : urgences de nuit interrompu;2021 : psychiatrie adulte menacé", "victoires": "2019 : psychiatrie victoire", "ghi_nom": "", "ght_nom": "GHT Haute-Garonne et Tarn Ouest" }, "geometry": { "type": "Point", "coordinates": [ 202395.17367779801134, 5419316.379972541704774 ] } },{ "type": "Feature", "properties": { "id": 605, "code_region": "OCC", "departement": "81", "nom_hopital": "CH Sainte-Barbe Carmaux - 81", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 239938.796767469495535, 5473679.427409468218684 ] } },{ "type": "Feature", "properties": { "id": 730, "code_region": "OCC", "departement": "81", "nom_hopital": "Clinique Bon Sauveur Albi - 81", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 239212.55544580516289, 5452685.537772197276354 ] } },{ "type": "Feature", "properties": { "id": 651, "code_region": "OCC", "departement": "81", "nom_hopital": "Clinique Claude Bernard Albi - 81", "suppressions": "2020 : maternité fermé", "menaces": "2021 : urgences réduit (autre)", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 241011.900852922524791, 5454638.659115584567189 ] } },{ "type": "Feature", "properties": { "id": 534, "code_region": "OCC", "departement": "81", "nom_hopital": "Clinique Toulouse Lautrec Albi - 81", "suppressions": null, "menaces": "2012 : maternité menacé;2012 : urgences menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 242683.960846428235527, 5454471.45311623532325 ] } },{ "type": "Feature", "properties": { "id": 254, "code_region": "OCC", "departement": "81", "nom_hopital": "Polyclinique Carmaux - 81", "suppressions": "service d'accueil de proximité et de soins non programmé fermé", "menaces": "2017 : service d'accueil de proximité et de soins non programmé menacé;2010 : urgences transformé;chirurgie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 240233.79938534644316, 5473678.469516942277551 ] } },{ "type": "Feature", "properties": { "id": 256, "code_region": "OCC", "departement": "81", "nom_hopital": "Saliès - 81", "suppressions": null, "menaces": "2012 : diabétologie réduit (lits fermés)", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 237027.543376864603488, 5448578.355709102936089 ] } },{ "type": "Feature", "properties": { "id": 536, "code_region": "OCC", "departement": "82", "nom_hopital": "CHICM Castelsarrasin - 82", "suppressions": null, "menaces": "2021 : urgences menacé;2015 : chirurgie réduit (autre);2011 : chirurgie viscérale réduit (autre)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Tarn et Garonne" }, "geometry": { "type": "Point", "coordinates": [ 123186.084466899308609, 5471979.27764520701021 ] } },{ "type": "Feature", "properties": { "id": 204, "code_region": "OCC", "departement": "82", "nom_hopital": "CHICM Moissac - 82", "suppressions": "urgences de nuit fermé", "menaces": "2022 : urgences menacé;2010 : chirurgie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Tarn et Garonne" }, "geometry": { "type": "Point", "coordinates": [ 120669.662108636010089, 5481527.898352770134807 ] } },{ "type": "Feature", "properties": { "id": 77, "code_region": "OCC", "departement": "82", "nom_hopital": "CH Montauban - 82", "suppressions": null, "menaces": "2022 : urgences menacé;2021 : SMUR réduit (autre);2021 : urgences réduit (autre);2015 : chirurgie orthopédique réduit (autre)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Tarn et Garonne" }, "geometry": { "type": "Point", "coordinates": [ 150377.335718039161293, 5469010.587548541836441 ] } },{ "type": "Feature", "properties": { "id": 592, "code_region": "OCC", "departement": "82", "nom_hopital": "Clin. Boyé Montauban - 82", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 152042.233202017639996, 5467036.001699390821159 ] } },{ "type": "Feature", "properties": { "id": 537, "code_region": "OCC", "departement": "82", "nom_hopital": "Clin. Pont de Chaume Montauban - 82", "suppressions": "2021 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 153535.996013227297226, 5466405.925827260129154 ] } },{ "type": "Feature", "properties": { "id": 205, "code_region": "OCC", "departement": "82", "nom_hopital": "Maison Retraite Castelsarrasin - 82", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 123244.922207387920935, 5471598.793590048328042 ] } },{ "type": "Feature", "properties": { "id": 217, "code_region": "PAC", "departement": "04", "nom_hopital": "CH Digne-Les-Bains- 04", "suppressions": "2017 : médecine interne fermé;2013 : chirurgie viscérale transféré;2008 : centre de jour personnes âgées fermé;2008 : centre médico-psychologique (CMP) infento-juvénile fermé;2008 : laboratoire d'analyse des eaux transféré;2008 : pédiatrie fermé", "menaces": "2021 : gérontopsychiatrie réduit (autre);2020 : maternité interrompu;2016 : maternité menacé;2013 : bloc opératoire menacé;2013 : neurologie réduit (autre);2013 : ophtalmologie réduit (autre);2013 : réanimation transformé;2013 : urologie réduit (autre);2012 : orthopédie fusionné;2012 : traumatologie fusionné;2008 : alcoologie transformé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Alpes de Haute Provence" }, "geometry": { "type": "Point", "coordinates": [ 687265.864496447728015, 5476615.740265469066799 ] } },{ "type": "Feature", "properties": { "id": 371, "code_region": "PAC", "departement": "04", "nom_hopital": "CHIM D. Collomp Banon - 04", "suppressions": "2019 : soins de suite et rééducation fermé", "menaces": null, "victoires": null, "ghi_nom": "CHIM", "ght_nom": "GHT Alpes de Haute Provence" }, "geometry": { "type": "Point", "coordinates": [ 626835.577413720893674, 5472035.386440930888057 ] } },{ "type": "Feature", "properties": { "id": 556, "code_region": "PAC", "departement": "04", "nom_hopital": "CHIM L. Raffalli Manosque - 04", "suppressions": "2009 : réanimation fermé;2008 : centre de jour personnes âgées fermé", "menaces": "2022 : urgences de nuit interrompu;réanimation menacé", "victoires": null, "ghi_nom": "CHIM", "ght_nom": "GHT Alpes de Haute Provence" }, "geometry": { "type": "Point", "coordinates": [ 646306.505598825518973, 5439005.695764607749879 ] } },{ "type": "Feature", "properties": { "id": 372, "code_region": "PAC", "departement": "04", "nom_hopital": "CHIM Saint-Michel Forcalquier – 04", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHIM", "ght_nom": "GHT Alpes de Haute Provence" }, "geometry": { "type": "Point", "coordinates": [ 642951.482965304283425, 5459341.368911551311612 ] } },{ "type": "Feature", "properties": { "id": 370, "code_region": "PAC", "departement": "04", "nom_hopital": "CH Lumière Riez - 04", "suppressions": null, "menaces": "2012 : médecine menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Alpes de Haute Provence" }, "geometry": { "type": "Point", "coordinates": [ 677984.95015793282073, 5437472.130560727789998 ] } },{ "type": "Feature", "properties": { "id": 725, "code_region": "PAC", "departement": "04", "nom_hopital": "EHPAD Lou Cigalou Les Mées - 04", "suppressions": null, "menaces": "2017 : médecine réduit (lits fermés)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Alpes de Haute Provence" }, "geometry": { "type": "Point", "coordinates": [ 664539.045701701194048, 5470089.865385435521603 ] } },{ "type": "Feature", "properties": { "id": 373, "code_region": "PAC", "departement": "04", "nom_hopital": "HL Ducélia Castellane - 04", "suppressions": null, "menaces": "2012 : médecine menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Alpes de Haute Provence" }, "geometry": { "type": "Point", "coordinates": [ 724483.821574116242118, 5441783.446446128189564 ] } },{ "type": "Feature", "properties": { "id": 376, "code_region": "PAC", "departement": "04", "nom_hopital": "HL Pierre Groues Barcelonnette - 04", "suppressions": null, "menaces": "2012 : médecine menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Alpes de Haute Provence" }, "geometry": { "type": "Point", "coordinates": [ 740209.337983396835625, 5525646.159467090852559 ] } },{ "type": "Feature", "properties": { "id": 576, "code_region": "PAC", "departement": "04", "nom_hopital": "HL Puimoisson - 04", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Alpes de Haute Provence" }, "geometry": { "type": "Point", "coordinates": [ 682172.273036849219352, 5444287.442234909161925 ] } },{ "type": "Feature", "properties": { "id": 575, "code_region": "PAC", "departement": "04", "nom_hopital": "HL Saint-Jacques Valensole - 04", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Alpes de Haute Provence" }, "geometry": { "type": "Point", "coordinates": [ 666090.732652719598264, 5440300.892688003368676 ] } },{ "type": "Feature", "properties": { "id": 375, "code_region": "PAC", "departement": "04", "nom_hopital": "HL Vallée de la Blanche Seyne-les-Alpes - 04", "suppressions": null, "menaces": "2012 : médecine menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Alpes de Haute Provence" }, "geometry": { "type": "Point", "coordinates": [ 707929.308569632703438, 5520232.501485977321863 ] } },{ "type": "Feature", "properties": { "id": 731, "code_region": "PAC", "departement": "05", "nom_hopital": "CH Buëch-Durance Laragne - 05", "suppressions": null, "menaces": "2018 : médecine réduit (lits fermés);2018 : psychiatrie réduit (autre);2012 : médecine menacé", "victoires": null, "ghi_nom": "CHBD", "ght_nom": "GHT Hautes Alpes" }, "geometry": { "type": "Point", "coordinates": [ 646833.395451892283745, 5515531.090749213472009 ] } },{ "type": "Feature", "properties": { "id": 297, "code_region": "PAC", "departement": "05", "nom_hopital": "CH-Escartons - Briançon - 05", "suppressions": "2014 : réanimation fermé", "menaces": "2015 : service de surveillance continue menacé;2011 : réanimation menacé;2010 : actes chirurgicaux menacé;pédiatrie menacé", "victoires": "2012 : réanimation victoire", "ghi_nom": "", "ght_nom": "GHT Hautes Alpes" }, "geometry": { "type": "Point", "coordinates": [ 738400.377876769402064, 5606719.489008293487132 ] } },{ "type": "Feature", "properties": { "id": 35, "code_region": "PAC", "departement": "05", "nom_hopital": "CHICAS Gap - 05", "suppressions": "2017 : soins intensifs fermé;2009 : cuisine fermé;2009 : radiothérapie fermé;2008 : soins continus polyvalents fermé", "menaces": "2010 : radiothérapie interrompu;2009 : chirurgie menacé;2008 : chirurgie réduit (autre);cardiologie réduit (autre);laboratoire réduit (autre);maison de retraite transformé;unité long séjour transformé", "victoires": null, "ghi_nom": "CHICAS Gap-Sisteron", "ght_nom": "GHT Hautes Alpes" }, "geometry": { "type": "Point", "coordinates": [ 676069.3831334435381, 5552103.799449886195362 ] } },{ "type": "Feature", "properties": { "id": 374, "code_region": "PAC", "departement": "05", "nom_hopital": "CHICAS Sisteron - 05", "suppressions": "2019 : urgences fermé;2017 : soins intensifs fermé;2009 : bloc opératoire fermé;2009 : chirurgie fermé;2009 : cuisine fermé;2009 : radiothérapie fermé;2008 : soins continus polyvalents fermé;1996 : maternité fermé", "menaces": "2009 : laboratoire réduit (autre);2008 : chirurgie réduit (autre);cardiologie réduit (autre)", "victoires": "2020 : urgences réouvert", "ghi_nom": "CHICAS", "ght_nom": "GHT Hautes Alpes" }, "geometry": { "type": "Point", "coordinates": [ 661647.166262665879913, 5495388.930073671042919 ] } },{ "type": "Feature", "properties": { "id": 369, "code_region": "PAC", "departement": "05", "nom_hopital": "HL Embrun - 05", "suppressions": "1988 : chirurgie fermé;1986 : maternité fermé", "menaces": "2019 : EHPAD réduit (lits fermés)", "victoires": "2012 : maison d'enfant à caractère social maintenu", "ghi_nom": "", "ght_nom": "GHT Hautes Alpes" }, "geometry": { "type": "Point", "coordinates": [ 722819.911059197271243, 5552708.966407443396747 ] } },{ "type": "Feature", "properties": { "id": 727, "code_region": "PAC", "departement": "06", "nom_hopital": "CH Antibes-Juan-les-Pins - 06", "suppressions": null, "menaces": "2021 : psychiatrie réduit (lits fermés)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Alpes-Maritimes" }, "geometry": { "type": "Point", "coordinates": [ 792448.086021956056356, 5403950.91467937733978 ] } },{ "type": "Feature", "properties": { "id": 426, "code_region": "PAC", "departement": "06", "nom_hopital": "CH Grasse - 06", "suppressions": null, "menaces": "2016 : réanimation menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Alpes-Maritimes" }, "geometry": { "type": "Point", "coordinates": [ 769887.688582812668756, 5411394.494359669275582 ] } },{ "type": "Feature", "properties": { "id": 729, "code_region": "PAC", "departement": "06", "nom_hopital": "CHI La Vésubie - Roquebillière 06", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 812966.630452193319798, 5467536.992175578139722 ] } },{ "type": "Feature", "properties": { "id": 342, "code_region": "PAC", "departement": "06", "nom_hopital": "CHI La Vésubie Saint-Martin Vésubie - 06", "suppressions": null, "menaces": "2017 : médecine réduit (lits fermés)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Alpes-Maritimes" }, "geometry": { "type": "Point", "coordinates": [ 807955.070900692953728, 5476595.545725307427347 ] } },{ "type": "Feature", "properties": { "id": 728, "code_region": "PAC", "departement": "06", "nom_hopital": "CH Menton - 06", "suppressions": "2003 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Alpes-Maritimes" }, "geometry": { "type": "Point", "coordinates": [ 833060.855976964929141, 5429428.773733747191727 ] } },{ "type": "Feature", "properties": { "id": 293, "code_region": "PAC", "departement": "06", "nom_hopital": "CHRU du Cimiez Nice - 06", "suppressions": "2014 : pédiatrie privatisé", "menaces": "2021 : urgences menacé;2012 : médecine menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Alpes-Maritimes" }, "geometry": { "type": "Point", "coordinates": [ 809649.647757972939871, 5422373.8502894109115 ] } },{ "type": "Feature", "properties": { "id": 427, "code_region": "PAC", "departement": "06", "nom_hopital": "CH Simone Veil Cannes - 06", "suppressions": null, "menaces": "2012 : médecine menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Alpes-Maritimes" }, "geometry": { "type": "Point", "coordinates": [ 779746.425936754443683, 5398237.135853349231184 ] } },{ "type": "Feature", "properties": { "id": 726, "code_region": "PAC", "departement": "06", "nom_hopital": "HG Les Sources Nice - 06", "suppressions": "2021 : réanimation transféré", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 810178.225436173379421, 5425466.102055137045681 ] } },{ "type": "Feature", "properties": { "id": 468, "code_region": "PAC", "departement": "13", "nom_hopital": "APHM Conception Marseille - 13", "suppressions": null, "menaces": "2014 : centre IVG menacé", "victoires": null, "ghi_nom": "APHM", "ght_nom": "GHT Bouches-du-Rhône" }, "geometry": { "type": "Point", "coordinates": [ 600636.437881384277716, 5356274.727630091831088 ] } },{ "type": "Feature", "properties": { "id": 469, "code_region": "PAC", "departement": "13", "nom_hopital": "APHM Hôpital Nord Marseille  - 13", "suppressions": "laboratoire de microbiologie fermé", "menaces": "2012 : cardiologie menacé;2012 : pédiatrie menacé", "victoires": null, "ghi_nom": "APHM", "ght_nom": "GHT Bouches-du-Rhône" }, "geometry": { "type": "Point", "coordinates": [ 596607.664605643716641, 5369661.923048298805952 ] } },{ "type": "Feature", "properties": { "id": 466, "code_region": "PAC", "departement": "13", "nom_hopital": "APHM Ste-Marguerite Marseille - 13", "suppressions": null, "menaces": "2022 : psychiatrie menacé", "victoires": null, "ghi_nom": "APHM", "ght_nom": "GHT Bouches-du-Rhône" }, "geometry": { "type": "Point", "coordinates": [ 602227.919685028726235, 5351691.117343586869538 ] } },{ "type": "Feature", "properties": { "id": 229, "code_region": "PAC", "departement": "13", "nom_hopital": "CH Edmond Garcin Aubagne - 13", "suppressions": "2022 : ophtalmologie fermé", "menaces": "2020 : réanimation transformé;2019 : chirurgie réduit (lits fermés);2010 : réanimation menacé;2009 : anesthésie réduit (autre);2009 : chirurgie réduit (autre);2009 : pédiatrie réduit (autre)", "victoires": "2012 : IRM victoire", "ghi_nom": "", "ght_nom": "GHT Bouches-du-Rhône" }, "geometry": { "type": "Point", "coordinates": [ 619367.654955346719362, 5356524.404406705871224 ] } },{ "type": "Feature", "properties": { "id": 228, "code_region": "PAC", "departement": "13", "nom_hopital": "CHIAP Aix en Provence - 13", "suppressions": null, "menaces": "2021 : chirurgie menacé;2021 : rhumatologie menacé;2021 : SMUR interrompu;2021 : urgences réduit (autre);2012 : médecine menacé", "victoires": null, "ghi_nom": "CHI Aix-Pertuis", "ght_nom": "GHT Bouches du Rhône" }, "geometry": { "type": "Point", "coordinates": [ 605942.409172315499745, 5393830.554438692517579 ] } },{ "type": "Feature", "properties": { "id": 34, "code_region": "PAC", "departement": "13", "nom_hopital": "CH Joseph Imbert Arles - 13", "suppressions": null, "menaces": "2021 : SMUR menacé;2019 : SMUR interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Bouches-du-Rhône" }, "geometry": { "type": "Point", "coordinates": [ 515823.501986224669963, 5412588.025005357339978 ] } },{ "type": "Feature", "properties": { "id": 467, "code_region": "PAC", "departement": "13", "nom_hopital": "Clin. Bonne Veine Marseille - 13", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 599177.130126044386998, 5350079.438043527305126 ] } },{ "type": "Feature", "properties": { "id": 591, "code_region": "PAC", "departement": "13", "nom_hopital": "HIA Laveran Marseille - 13", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 602802.559376697987318, 5361812.84928766079247 ] } },{ "type": "Feature", "properties": { "id": 538, "code_region": "PAC", "departement": "83", "nom_hopital": "CH Chalucet Toulon – 83", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 659819.947459340328351, 5331305.426447986625135 ] } },{ "type": "Feature", "properties": { "id": 539, "code_region": "PAC", "departement": "83", "nom_hopital": "CH Clémenceau – 83", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHI Toulon-La Seyne", "ght_nom": "GHT du Var" }, "geometry": { "type": "Point", "coordinates": [ 669613.77700911834836, 5332156.577397189103067 ] } },{ "type": "Feature", "properties": { "id": 435, "code_region": "PAC", "departement": "83", "nom_hopital": "CH Dracénie Draguignan - 83", "suppressions": "2021 : urgences de nuit fermé", "menaces": "2021 : psychiatrie menacé;2018 : réanimation menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Var" }, "geometry": { "type": "Point", "coordinates": [ 717476.61225592950359, 5396005.775656027719378 ] } },{ "type": "Feature", "properties": { "id": 3, "code_region": "PAC", "departement": "83", "nom_hopital": "CH Hyères - 83", "suppressions": "2015 : bloc opératoire de nuit fermé;2015 : réanimation fermé;2009 : soins longue durée fermé;2008 : USIC fermé", "menaces": "2018 : maternité menacé;2015 : chirurgie menacé;2013 : réanimation menacé;2009 : médecine polyvalente réduit (lits fermés);2008 : cardiologie réduit (autre);2007 : médecine polyvalente transformé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Var" }, "geometry": { "type": "Point", "coordinates": [ 680454.778954403358512, 5330174.048985047265887 ] } },{ "type": "Feature", "properties": { "id": 732, "code_region": "PAC", "departement": "83", "nom_hopital": "CHIFSR Bonnet - 83", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Var" }, "geometry": { "type": "Point", "coordinates": [ 751548.170098155736923, 5379039.396853082813323 ] } },{ "type": "Feature", "properties": { "id": 296, "code_region": "PAC", "departement": "83", "nom_hopital": "CHITS La Seyne-sur-Mer - 83", "suppressions": "2012 : maternité transféré;2010 : chirurgie fermé;2008 : pédiatrie fermé;laboratoire fermé", "menaces": "2021 : médecine réduit (lits fermés);2021 : soins palliatifs interrompu;chirurgie menacé;hospitalisation menacé", "victoires": "2011 : maternité maintenu", "ghi_nom": "CHITS Toulon-La Seyne", "ght_nom": "GHT du Var" }, "geometry": { "type": "Point", "coordinates": [ 653579.386465642368421, 5328476.189612297341228 ] } },{ "type": "Feature", "properties": { "id": 60, "code_region": "PAC", "departement": "83", "nom_hopital": "CHITS Toulon - 83", "suppressions": null, "menaces": "2021 : médecine réduit (autre)", "victoires": null, "ghi_nom": "CHI Toulon-La-Seyne", "ght_nom": "GHT du Var" }, "geometry": { "type": "Point", "coordinates": [ 665205.33569429803174, 5330859.266361043788493 ] } },{ "type": "Feature", "properties": { "id": 294, "code_region": "PAC", "departement": "83", "nom_hopital": "CH Jean Marcel Brignoles - 83", "suppressions": null, "menaces": "2021 : SMUR menacé;2015 : chirurgie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Var" }, "geometry": { "type": "Point", "coordinates": [ 675328.348603997263126, 5373649.955962576903403 ] } },{ "type": "Feature", "properties": { "id": 295, "code_region": "PAC", "departement": "83", "nom_hopital": "CH-PS Saint-Tropez - 83", "suppressions": "chirurgie fermé", "menaces": "2018 : maternité menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Var" }, "geometry": { "type": "Point", "coordinates": [ 731503.49468278628774, 5349985.801285743713379 ] } },{ "type": "Feature", "properties": { "id": 733, "code_region": "PAC", "departement": "83", "nom_hopital": "CH Saint-Raphaël - 83", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 753669.646782364696264, 5376732.49448727350682 ] } },{ "type": "Feature", "properties": { "id": 580, "code_region": "PAC", "departement": "83", "nom_hopital": "HIA Sainte-Anne Toulon - 83", "suppressions": "ravitaillement sanitaire des armées fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 660559.568682409939356, 5332311.603674835525453 ] } },{ "type": "Feature", "properties": { "id": 218, "code_region": "PAC", "departement": "84", "nom_hopital": "CH Carpentras - 84", "suppressions": "1994 : chirurgie fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Vaucluse" }, "geometry": { "type": "Point", "coordinates": [ 559657.588270442793146, 5472744.969158483669162 ] } },{ "type": "Feature", "properties": { "id": 219, "code_region": "PAC", "departement": "84", "nom_hopital": "CH Henri Duffaut Avignon - 84", "suppressions": null, "menaces": "2019 : urgences psychiatriques réduit (autre);2014 : urgences menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Vaucluse" }, "geometry": { "type": "Point", "coordinates": [ 534579.253414566628635, 5453024.590507575310767 ] } },{ "type": "Feature", "properties": { "id": 221, "code_region": "PAC", "departement": "84", "nom_hopital": "CHIAP Pertuis - 84", "suppressions": "2007 : chirurgie fermé", "menaces": "2021 : SMUR de nuit interrompu;2021 : urgences réduit (autre);2020 : urgences de nuit interrompu;unité long séjour réduit (lits fermés)", "victoires": "2020 : urgences de nuit maintenu", "ghi_nom": "CHI Aix-Pertuis", "ght_nom": "GHT Bouches du Rhône" }, "geometry": { "type": "Point", "coordinates": [ 612187.036447416758165, 5418221.988992466591299 ] } },{ "type": "Feature", "properties": { "id": 27, "code_region": "PAC", "departement": "84", "nom_hopital": "CHICL Cavaillon - 84", "suppressions": "chirurgie osseuse fermé", "menaces": "2014 : chirurgie digestive menacé;gynécologie réduit (autre)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Vaucluse" }, "geometry": { "type": "Point", "coordinates": [ 560763.187365578487515, 5440781.818934840150177 ] } },{ "type": "Feature", "properties": { "id": 734, "code_region": "PAC", "departement": "84", "nom_hopital": "CHICL Lauris - 84", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHICL", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ 590421.557119362056255, 5428113.552670544013381 ] } },{ "type": "Feature", "properties": { "id": 451, "code_region": "PAC", "departement": "84", "nom_hopital": "CH Niel Valréas - 84", "suppressions": "2009 : maternité fermé;2008 : chirurgie fermé;2008 : soins continus fermé", "menaces": "2008 : chirurgie gynécologique réduit (lits fermés)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Vaucluse" }, "geometry": { "type": "Point", "coordinates": [ 555634.537020941730589, 5524876.415156827308238 ] } },{ "type": "Feature", "properties": { "id": 220, "code_region": "PAC", "departement": "84", "nom_hopital": "CHPA Apt - 84", "suppressions": "2016 : maternité fermé", "menaces": "2019 : urgences réduit (autre);2016 : chirurgie menacé;2013 : maternité menacé;2012 : chirurgie réduit (autre)", "victoires": "2015 : maternité maintenu", "ghi_nom": "", "ght_nom": "GHT du Vaucluse" }, "geometry": { "type": "Point", "coordinates": [ 599125.830682303756475, 5446244.968715058639646 ] } },{ "type": "Feature", "properties": { "id": 452, "code_region": "PAC", "departement": "84", "nom_hopital": "CH Vaison la romaine - 84", "suppressions": "2001 : chirurgie fermé;1992 : maternité transféré", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT du Vaucluse" }, "geometry": { "type": "Point", "coordinates": [ 564948.809932486270554, 5502614.166243142448366 ] } },{ "type": "Feature", "properties": { "id": 713, "code_region": "PDL", "departement": "44", "nom_hopital": "CH Château-Thébaud - 44", "suppressions": "2009 : soins longue durée fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -158262.18426303906017, 5962593.926240338943899 ] } },{ "type": "Feature", "properties": { "id": 707, "code_region": "PDL", "departement": "44", "nom_hopital": "CHEL Ancenis - 44", "suppressions": "2021 : SMUR fermé", "menaces": "2021 : médecine interrompu", "victoires": null, "ghi_nom": "CH Erdre et Loire", "ght_nom": "GHT Loire Atlantique" }, "geometry": { "type": "Point", "coordinates": [ -130468.644481885698042, 6003338.986890126019716 ] } },{ "type": "Feature", "properties": { "id": 211, "code_region": "PDL", "departement": "44", "nom_hopital": "CHICNP Châteaubriant - 44", "suppressions": "chirurgie fermé", "menaces": null, "victoires": null, "ghi_nom": "CHICNP", "ght_nom": "GHT Loire Atlantique" }, "geometry": { "type": "Point", "coordinates": [ -153760.387060294451658, 6061392.769023388624191 ] } },{ "type": "Feature", "properties": { "id": 711, "code_region": "PDL", "departement": "44", "nom_hopital": "CHICNP Nozay - 44", "suppressions": "soins de suite et rééducation fermé", "menaces": null, "victoires": null, "ghi_nom": "CHICNP", "ght_nom": "GHT Loire Atlantique" }, "geometry": { "type": "Point", "coordinates": [ -180957.374919276917353, 6034228.016097042709589 ] } },{ "type": "Feature", "properties": { "id": 712, "code_region": "PDL", "departement": "44", "nom_hopital": "CHICNP Pouancé - 44", "suppressions": "soins de suite et rééducation fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Loire Atlantique" }, "geometry": { "type": "Point", "coordinates": [ -130770.66186526454112, 6063908.477969796396792 ] } },{ "type": "Feature", "properties": { "id": 288, "code_region": "PDL", "departement": "44", "nom_hopital": "CHI Guérande - 44", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHI de la Presqu'île", "ght_nom": "GHT Loire Atlantique" }, "geometry": { "type": "Point", "coordinates": [ -269875.741139429446775, 5995176.635707991197705 ] } },{ "type": "Feature", "properties": { "id": 710, "code_region": "PDL", "departement": "44", "nom_hopital": "CHIPR Pornic - 44", "suppressions": null, "menaces": "soins de suite et rééducation réduit (lits fermés)", "victoires": null, "ghi_nom": "CHI du Pays de Retz", "ght_nom": "GHT Loire Atlantique" }, "geometry": { "type": "Point", "coordinates": [ -229848.080751020432217, 5960226.539907764643431 ] } },{ "type": "Feature", "properties": { "id": 212, "code_region": "PDL", "departement": "44", "nom_hopital": "CH Saint Nazaire - 44", "suppressions": null, "menaces": "2020 : urgences interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Loire Atlantique" }, "geometry": { "type": "Point", "coordinates": [ -251207.652583487913944, 5985843.131231918931007 ] } },{ "type": "Feature", "properties": { "id": 62, "code_region": "PDL", "departement": "44", "nom_hopital": "CHS Blain – 44", "suppressions": null, "menaces": "2009 : psychiatrie réduit (autre)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Loire Atlantique" }, "geometry": { "type": "Point", "coordinates": [ -202660.228592204104643, 6018513.632663908414543 ] } },{ "type": "Feature", "properties": { "id": 599, "code_region": "PDL", "departement": "44", "nom_hopital": "CHU Nord Laennec Saint-Herblain - 44", "suppressions": null, "menaces": "2021 : cardiologie menacé;2021 : urgences menacé;2021 : urgences pédiatriques menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Loire Atlantique" }, "geometry": { "type": "Point", "coordinates": [ -182528.20515442211763, 5980722.458554922603071 ] } },{ "type": "Feature", "properties": { "id": 213, "code_region": "PDL", "departement": "44", "nom_hopital": "CHU Sud Saint-Jacques Nantes - 44", "suppressions": null, "menaces": "2022 : psychiatrie interrompu;2021 : pédiatrie réduit (autre);2018 : chirurgie interrompu;centre IVG menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Loire Atlantique" }, "geometry": { "type": "Point", "coordinates": [ -171063.15732827418833, 5974443.050493103452027 ] } },{ "type": "Feature", "properties": { "id": 709, "code_region": "PDL", "departement": "44", "nom_hopital": "HL Bel Air Corcoué-sur-Logne - 44", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Loire Atlantique" }, "geometry": { "type": "Point", "coordinates": [ -174350.027833178261062, 5935308.790146758779883 ] } },{ "type": "Feature", "properties": { "id": 686, "code_region": "PDL", "departement": "49", "nom_hopital": "CH Cholet - 49", "suppressions": "2021 : urgences de nuit fermé", "menaces": "2021 : psychiatrie réduit (lits fermés);service ouvert d’hospitalisation en psychiatrie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Maine et Loire" }, "geometry": { "type": "Point", "coordinates": [ -99805.891060102745541, 5949024.570536333136261 ] } },{ "type": "Feature", "properties": { "id": 777, "code_region": "PDL", "departement": "49", "nom_hopital": "CHEL Candé - 49", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHEL", "ght_nom": "GHT Loire Atlantique" }, "geometry": { "type": "Point", "coordinates": [ -114948.88577409881691, 6034000.399273659102619 ] } },{ "type": "Feature", "properties": { "id": 716, "code_region": "PDL", "departement": "49", "nom_hopital": "CHHA Segré-en-Anjou - 49", "suppressions": "1995 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "CHHA", "ght_nom": "GHT Maine et Loire" }, "geometry": { "type": "Point", "coordinates": [ -96438.559742927536718, 6053464.57242845185101 ] } },{ "type": "Feature", "properties": { "id": 715, "code_region": "PDL", "departement": "49", "nom_hopital": "CHL Doué-la-Fontaine - 49", "suppressions": "1987 : maternité fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Maine et Loire" }, "geometry": { "type": "Point", "coordinates": [ -30235.292458742842427, 5973639.432959171012044 ] } },{ "type": "Feature", "properties": { "id": 6, "code_region": "PDL", "departement": "49", "nom_hopital": "CH Saumur - 49", "suppressions": "chirurgie fermé", "menaces": "2021 : maternité interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Maine et Loire" }, "geometry": { "type": "Point", "coordinates": [ -6797.494883647725146, 5982508.178679457865655 ] } },{ "type": "Feature", "properties": { "id": 158, "code_region": "PDL", "departement": "49", "nom_hopital": "CHU Angers - 49", "suppressions": "2019 : soins longue durée fermé", "menaces": "2021 : réanimation menacé", "victoires": "2021 : réanimation victoire", "ghi_nom": "", "ght_nom": "GHT Maine et Loire" }, "geometry": { "type": "Point", "coordinates": [ -61905.83623741062911, 6021416.471037884242833 ] } },{ "type": "Feature", "properties": { "id": 748, "code_region": "PDL", "departement": "49", "nom_hopital": "CHU PMS Saint-Nicolas Angers - 49", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "CHU", "ght_nom": "GHT Maine et Loire" }, "geometry": { "type": "Point", "coordinates": [ -63818.453239150345325, 6019964.610312310047448 ] } },{ "type": "Feature", "properties": { "id": 714, "code_region": "PDL", "departement": "49", "nom_hopital": "CSM Angevin Saint-Gemmes -49", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT Maine et Loire" }, "geometry": { "type": "Point", "coordinates": [ -62680.949490420534858, 6011240.626482092775404 ] } },{ "type": "Feature", "properties": { "id": 157, "code_region": "PDL", "departement": "49", "nom_hopital": "Saint Barthélémy d'Anjou - 49\nLa Claverie", "suppressions": null, "menaces": "2017 : prise en charge obésité interrompu;soins de suite menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -56084.795580294121464, 6022005.509133235551417 ] } },{ "type": "Feature", "properties": { "id": 681, "code_region": "PDL", "departement": "53", "nom_hopital": "CHHA Château-Gontier - 53", "suppressions": null, "menaces": "2021 : urgences réduit (autre)", "victoires": null, "ghi_nom": "CHHA", "ght_nom": "GHT Mayenne-Haut Anjou" }, "geometry": { "type": "Point", "coordinates": [ -77958.94609554859926, 6078133.101534496992826 ] } },{ "type": "Feature", "properties": { "id": 687, "code_region": "PDL", "departement": "53", "nom_hopital": "CH Laval - 53", "suppressions": null, "menaces": "2022 : urgences interrompu;2021 : psychiatrie menacé;2021 : soins continus interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Mayenne et Haut-Anjou" }, "geometry": { "type": "Point", "coordinates": [ -87272.520368341356516, 6117454.350594652816653 ] } },{ "type": "Feature", "properties": { "id": 717, "code_region": "PDL", "departement": "53", "nom_hopital": "CHL Évron - 53", "suppressions": null, "menaces": "2021 : médecine réduit (lits fermés);2021 : soins de suite réduit (lits fermés)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Mayenne et Haut-Anjou" }, "geometry": { "type": "Point", "coordinates": [ -45561.447275940328836, 6133115.64864410366863 ] } },{ "type": "Feature", "properties": { "id": 206, "code_region": "PDL", "departement": "53", "nom_hopital": "CHNM Mayenne - 53", "suppressions": "2021 : urgences de nuit fermé;2019 : SMUR fermé", "menaces": "2022 : maternité menacé;2022 : maternité réduit (autre);2020 : chirurgie menacé;2018 : maternité interrompu;2018 : urgences interrompu", "victoires": "2021 : chirurgie maintenu;2021 : unité de surveillance continue maintenu", "ghi_nom": "CHNM Nord Mayenne", "ght_nom": "GHT Mayenne-Haut Anjou" }, "geometry": { "type": "Point", "coordinates": [ -69103.45632202552224, 6157959.345470184460282 ] } },{ "type": "Feature", "properties": { "id": 642, "code_region": "PDL", "departement": "53", "nom_hopital": "HLSOM Craon - 53", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "HLSOM", "ght_nom": "GHT Mayenne-Haut Anjou" }, "geometry": { "type": "Point", "coordinates": [ -106597.581063263089163, 6081610.088704179041088 ] } },{ "type": "Feature", "properties": { "id": 641, "code_region": "PDL", "departement": "53", "nom_hopital": "HLSOM Renazé - 53", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "HLSOM", "ght_nom": "GHT Mayenne-Haut Anjou" }, "geometry": { "type": "Point", "coordinates": [ -118631.129287224277505, 6072682.111125079914927 ] } },{ "type": "Feature", "properties": { "id": 559, "code_region": "PDL", "departement": "72", "nom_hopital": "CH Château-du-Loir 72", "suppressions": null, "menaces": "2022 : urgences menacé;2021 : urgences interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT de la Sarthe" }, "geometry": { "type": "Point", "coordinates": [ 46777.858364753417845, 6055603.801794084720314 ] } },{ "type": "Feature", "properties": { "id": 421, "code_region": "PDL", "departement": "72", "nom_hopital": "CHICAM Mamers - 72", "suppressions": "2013 : chambre mortuaire fermé;chirurgie fermé", "menaces": null, "victoires": null, "ghi_nom": "CHIC Alençon-Mamers", "ght_nom": "GHT Orne-Perche Saosnois" }, "geometry": { "type": "Point", "coordinates": [ 41020.531694461926236, 6165072.145840511657298 ] } },{ "type": "Feature", "properties": { "id": 391, "code_region": "PDL", "departement": "72", "nom_hopital": "CHI PSSL Le Bailleul - 72", "suppressions": "2021 : urgences fermé;2018 : centre IVG fermé", "menaces": "2021 : bloc opératoire menacé;2021 : maternité menacé;2021 : urgences interrompu;2021 : urgences réduit (autre);2019 : urgences de nuit interrompu", "victoires": null, "ghi_nom": "CHI PSSL", "ght_nom": "GHT de la Sarthe" }, "geometry": { "type": "Point", "coordinates": [ -17985.260509267453017, 6068366.856561187654734 ] } },{ "type": "Feature", "properties": { "id": 682, "code_region": "PDL", "departement": "72", "nom_hopital": "CH Paul Chapron La Ferté-Bernard - 72", "suppressions": "2021 : urgences fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT de la Sarthe" }, "geometry": { "type": "Point", "coordinates": [ 73756.867573380484828, 6138417.82934457436204 ] } },{ "type": "Feature", "properties": { "id": 389, "code_region": "PDL", "departement": "72", "nom_hopital": "CH Saint Calais - 72", "suppressions": "2010 : chirurgie fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT de la Sarthe" }, "geometry": { "type": "Point", "coordinates": [ 82649.119324907820555, 6093337.751703882589936 ] } },{ "type": "Feature", "properties": { "id": 718, "code_region": "PDL", "departement": "72", "nom_hopital": "EPSM de la Sarthe Allones - 72", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "GHT de la Sarthe" }, "geometry": { "type": "Point", "coordinates": [ 18055.658162672050821, 6100078.13182957470417 ] } },{ "type": "Feature", "properties": { "id": 364, "code_region": "PDL", "departement": "72", "nom_hopital": "Le Mans - 72", "suppressions": "2020 : réanimation pédiatrique fermé", "menaces": "2020 : réanimation néonatale menacé;2018 : soins palliatifs interrompu;2012 : centre IVG menacé", "victoires": null, "ghi_nom": "", "ght_nom": "GHT de la Sarthe" }, "geometry": { "type": "Point", "coordinates": [ 21968.654776962441247, 6108106.511823823675513 ] } },{ "type": "Feature", "properties": { "id": 719, "code_region": "PDL", "departement": "72", "nom_hopital": "PHG Beaumont-sur-Sarthe - 72", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "PHG Nord-Sarthe", "ght_nom": "GHT de la Sarthe" }, "geometry": { "type": "Point", "coordinates": [ 13391.137967068665603, 6144843.807915299199522 ] } },{ "type": "Feature", "properties": { "id": 720, "code_region": "PDL", "departement": "72", "nom_hopital": "PHG Bonnétable - 72", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "PHG Nord-Sarthe", "ght_nom": "GHT de la Sarthe" }, "geometry": { "type": "Point", "coordinates": [ 47230.908276390291576, 6137642.411976475268602 ] } },{ "type": "Feature", "properties": { "id": 721, "code_region": "PDL", "departement": "72", "nom_hopital": "PHG Sillé-le-Guillaume - 72", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "PHG Nord-Sarthe", "ght_nom": "GHT de la Sarthe" }, "geometry": { "type": "Point", "coordinates": [ -13695.713665209710598, 6137845.616715710610151 ] } },{ "type": "Feature", "properties": { "id": 188, "code_region": "PDL", "departement": "85", "nom_hopital": "CH Côte de Lumière - Les Sables-d'Olonne - 85", "suppressions": "2006 : chirurgie fermé", "menaces": "2021 : urgences interrompu", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Vendée" }, "geometry": { "type": "Point", "coordinates": [ -194910.033054603001801, 5863290.495035904459655 ] } },{ "type": "Feature", "properties": { "id": 189, "code_region": "PDL", "departement": "85", "nom_hopital": "CH Fontenay le Comte - 85", "suppressions": "2015 : hospitalisation psychiatrique fermé;2004 : chirurgie fermé", "menaces": "2020 : maternité menacé;2020 : pédiatrie menacé", "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -92135.34297826513648, 5855277.602226036600769 ] } },{ "type": "Feature", "properties": { "id": 665, "code_region": "PDL", "departement": "85", "nom_hopital": "CHL Mortagne-sur-Sèvre - 85", "suppressions": "activité sanitaire fermé", "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -105731.367825504392385, 5940644.596157308667898 ] } },{ "type": "Feature", "properties": { "id": 722, "code_region": "PDL", "departement": "85", "nom_hopital": "CHLVO Challans - 85", "suppressions": null, "menaces": "2022 : médecine polyvalente menacé;soins de suite et rééducation réduit (autre)", "victoires": null, "ghi_nom": "", "ght_nom": "GHT Vendée" }, "geometry": { "type": "Point", "coordinates": [ -208484.406294464919483, 5917077.842091951519251 ] } },{ "type": "Feature", "properties": { "id": 590, "code_region": "PDL", "departement": "85", "nom_hopital": "GHD La Roche-sur-Yon - 85", "suppressions": "2019 : ménage sous-traité", "menaces": "2008 : standard réduit (autre)", "victoires": null, "ghi_nom": "GHD Vendée", "ght_nom": "GHT Vendée" }, "geometry": { "type": "Point", "coordinates": [ -157319.363624267309206, 5888088.776566551066935 ] } },{ "type": "Feature", "properties": { "id": 301, "code_region": "PDL", "departement": "85", "nom_hopital": "GHD Luçon - 85", "suppressions": "2021 : accueil de jour Alzheimer fermé;2019 : réadaptation fonctionnelle fermé;2019 : stérilisation transféré;2004 : laboratoire transféré;2004 : maison de retraite personnes valides fermé;2003 : cardiologie fermé;2003 : diabétologie semaine fermé;2001 : chirurgie 24/24 fermé;2001 : maternité fermé;nettoyage sous-traité", "menaces": "2021 : SMUR menacé;2021 : urgences interrompu;2008 : standard réduit (autre);2003 : médecine spécialisée transformé", "victoires": null, "ghi_nom": "GHD Vendée", "ght_nom": "GHT Vendée" }, "geometry": { "type": "Point", "coordinates": [ -130511.984876624919707, 5852838.191880233585835 ] } },{ "type": "Feature", "properties": { "id": 58, "code_region": "PDL", "departement": "85", "nom_hopital": "GHD Montaigu - 85", "suppressions": "2000 : chirurgie fermé;1998 : maternité fermé", "menaces": "2021 : urgences interrompu;2015 : SMUR de nuit menacé", "victoires": null, "ghi_nom": "GHD Vendée", "ght_nom": "GHT Vendée" }, "geometry": { "type": "Point", "coordinates": [ -145823.803956475836458, 5937080.560302414000034 ] } },{ "type": "Feature", "properties": { "id": 187, "code_region": "PDL", "departement": "85", "nom_hopital": "Saint Gilles Croix de Vie - 85", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": "", "ght_nom": "" }, "geometry": { "type": "Point", "coordinates": [ -214081.182076577795669, 5892570.681470293551683 ] } },{ "type": "Feature", "properties": { "id": 923, "code_region": null, "departement": "23", "nom_hopital": "Clinique de la Marche Guéret - 23", "suppressions": null, "menaces": "chirurgie menacé", "victoires": null, "ghi_nom": null, "ght_nom": null }, "geometry": { "type": "Point", "coordinates": [ 209267.386285640764982, 5809054.9684132412076 ] } },{ "type": "Feature", "properties": { "id": 921, "code_region": null, "departement": null, "nom_hopital": "Centre Gériatrie Charles Drouet Allones - 72", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": null, "ght_nom": null }, "geometry": { "type": "Point", "coordinates": [ 17248.641201119869947, 6100804.82402341067791 ] } },{ "type": "Feature", "properties": { "id": 920, "code_region": null, "departement": null, "nom_hopital": "CH Mauléon-Licharre - 64", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": null, "ght_nom": null }, "geometry": { "type": "Point", "coordinates": [ -99051.159806936979294, 5345197.882546192035079 ] } },{ "type": "Feature", "properties": { "id": 922, "code_region": null, "departement": null, "nom_hopital": "CH Saint-Méen le Grand - 35", "suppressions": "2022 : soins de suite et rééducation fermé", "menaces": null, "victoires": null, "ghi_nom": null, "ght_nom": "GHT Haute Bretagne" }, "geometry": { "type": "Point", "coordinates": [ -245172.936096105724573, 6137814.796357901766896 ] } },{ "type": "Feature", "properties": { "id": 919, "code_region": null, "departement": null, "nom_hopital": "Clinique Notre-Dame Vire - 14", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": null, "ght_nom": null }, "geometry": { "type": "Point", "coordinates": [ -99848.629063718064572, 6247879.841178919188678 ] } },{ "type": "Feature", "properties": { "id": 917, "code_region": null, "departement": null, "nom_hopital": "Clinique Toutes Aures Manosque - 04", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": null, "ght_nom": null }, "geometry": { "type": "Point", "coordinates": [ 643556.238907306804322, 5438283.884818353690207 ] } },{ "type": "Feature", "properties": { "id": 918, "code_region": null, "departement": null, "nom_hopital": "EHPAD Korian Vergt - 24", "suppressions": null, "menaces": null, "victoires": null, "ghi_nom": null, "ght_nom": null }, "geometry": { "type": "Point", "coordinates": [ 80169.097211033120402, 5625641.914444466121495 ] } }]},
      geolocData: function geolocData(iData, iVar) {
        if (typeof iData[iVar].LATITUDE !== 'undefined') {
          if(iData[iVar].LATITUDE != '') iData[iVar].lat = iData[iVar].LATITUDE;
          delete iData[iVar].LATITUDE;
        }
        if (typeof iData[iVar].LONGITUDE !== 'undefined') {
          if(iData[iVar].LONGITUDE != '') iData[iVar].lng = iData[iVar].LONGITUDE;
          delete iData[iVar].LONGITUDE;
        }
        if (isValidCoord(iData[iVar].lat, iData[iVar].lng)) return;
        /*var lieux = iData[iVar].nom_commune + ',' + iData[iVar].INSEE_COM;
        if (!isNaN(iData[iVar])) lieux += ', France';*/
        return lieux;
      },
      //INSEE_KEY: "INSEE_COM",
      checkIfStoreNeedsUpdate: true,
      dataTransformer: false,
      /*dataTransformer: function(inputData, setCallBack) {
      var outputData = 'https://philquand.github.io/Javascript/Blog-widgets/Collectif Santé 37/FermeturesHopitaux/Applications/AnalyseCN/export_Tous_les_établissements_concernés-2021_02_23.js';
      loadFromJS(outputData,
        (procData) => {
         procData = window["data"];
         if (typeof procData !== 'undefined') {
           var outputData = []
           for (var j = 0; j < procData["features"].length; j++) {
             outputData.push(j);
           }
           for (var i = 0; i < inputData.length; i++) {
             const inputDataId = inputData[i]["id"];
             for (var j = 0; j < outputData.length; j++) {
               if (inputDataId == procData["features"][outputData[j]]["properties"]["id"]) {
                 inputData[i]["lng"] = procData["features"][outputData[j]]["geometry"]["coordinates"][0]
                 inputData[i]["lat"] = procData["features"][outputData[j]]["geometry"]["coordinates"][1]
                 outputData.splice(j, 1)
                 break;
               }
             }
           };
           setCallBack(inputData);
         }
         else console.log('error in dataTransformer...');
        },
        (err) => {
          console.log(err.message);
          //loading.html(err.message);
        }
      );
      }*/
    },
    fondCarte : 'IGN',
    maxClusterRadius : 5,
    popupData : {
      title: 'LIEUX',
      //properties: ["LIEUX", "SUPPRESSIONS", "MENACES", "victoire"],
      hidden: ['id', 'LIEUX', 'INSEE_COM', 'département', 'région', 'departement', 'code_region','text_fusion_groupe','indic_reduction', 'selected'],
      label: [{
          value: 'SUPPRESSIONS',
          label: 'suppressions'
        }, {
          value: 'MENACES',
          label: 'menaces'
        }, {
          value: 'Postes',
          label: 'postes'
        }, {
          value: 'nom_commune',
          label: 'commune'
        }, {
          value: 'ght_nom',
          label: 'nom ght'
        }, {
          value: 'ghi_nom',
          label: 'nom ghi'
        }, {
          value: 'publ_priv',
          label: 'type de gestion'
        }, {
          value: 'nom_commune',
          label: 'commune'
        }, {
          value: 'an_ferm_chirur',
          label: 'année de fermeture chirur.'
        }, {
          value: 'an_ferm_mater',
          label: 'année de fermeture mater.'
        }, {
          value: 'an_ferm_site',
          label: 'année de fermeture du site'
        }, {
          value: 'an_ferm_urgences',
          label: 'année de fermeture des urgences'
        }, {
          value: 'type_etablissement',
          label: 'type'
      }],
    },
    tableData: {
      properties: [{
        name: 'LIEUX',
        title:'lieux',
        filter: 'selection'
        }, {
        name: 'nom_commune',
        title:'commune',
        filter: 0
      }, {
        name: 'département',
        filter: 'selection'
      }, {
        name: 'région',
        filter: 'selection'
      }, {
        name: 'SUPPRESSIONS',
        title:'suppressions',
        filter: 1
      }, {
        name: 'an_ferm_mater',
        title:'fermeture mater.',
        filter: 1
      }, {
        name: 'MENACES',
        title:'menaces',
        filter: 0
      }, {
        name: 'publ_priv',
        title:'type de gestion',
        filter: 2
     }],
      filters: [{
        //Les valeurs possibles doivent être précédées de l'index du filtre suivi de : (pour faire le lien avec la collection Filters de runTable)
        data: [{
          value: '0: avec valeur',
          label: 'Avec valeur'
        }, {
          value: '0: sans valeur',
          label: 'Sans valeur'
        }],
        func: (filterVal, columnVal, rowValues, stateVal) => {
          switch (filterVal) {
            case '0: sans valeur':
              if (columnVal === '') {
                return true;
              }
              else return false;
              break;
            default:
              if (columnVal !== '') {
                return true;
              }
              else return false;
              break;
          }
        }
      },
      {
        //Les valeurs possibles doivent être précédées de l'index du filtre suivi de : (pour faire le lien avec la collection Filters de runTable)
        data: [{
          value: '1: avec valeur',
          label: 'Avec valeur'
        }, {
          value: '1: sans valeur',
          label: 'Sans valeur'
        }, {
          value: '1: avec maternité',
          label: 'Avec maternité'
        }],
        func: (filterVal, columnVal, rowValues, stateVal) => {
          switch (filterVal) {
            case '1: sans valeur':
              if (columnVal === '') {
                return true;
              }
              else return false;
              break;
            case '1: avec maternité':
              if (isOKString(columnVal) && columnVal.toUpperCase().indexOf('MATERNIT') > -1) {
                return true;
              }
              else return false;
              break;
            default:
              if (columnVal !== '') {
                return true;
              }
              else return false;
              break;
          }
        }
      },
      {
        //Les valeurs possibles doivent être précédées de l'index du filtre suivi de : (pour faire le lien avec la collection Filters de runTable)
        data: [{
          value: '2: avec valeur',
          label: 'Avec valeur'
        }, {
          value: '2: sans valeur',
          label: 'Sans valeur'
        }, {
          value: '2: privé',
          label: 'privé'
        }, {
          value: '2: public',
          label: 'public'
        }],
        func: (filterVal, columnVal, rowValues, stateVal) => {
          switch (filterVal) {
            case '2: sans valeur':
              if (columnVal === '') {
                return true;
              }
              else return false;
              break;
            case '2: privé':
              if (isOKString(columnVal) && columnVal.toUpperCase().indexOf('PRIV') > -1) {
                return true;
              }
              else return false;
              break;
            case '2: public':
              if (isOKString(columnVal) && columnVal.toUpperCase().indexOf('PUBLI') > -1) {
                return true;
              }
              else return false;
              break;
            default:
              if (columnVal !== '') {
                return true;
              }
              else return false;
              break;
          }
        }
      }
    ]
    },
    controlLayers: {
      controlMaps: {on: true},
      /*controlOverlays: {
        title: 'Type de gestion',
        overlays: ['non défini', 'public', 'privé'],
        affect: function(data) {
          if (data["publ_priv"] == 'privé') {
            return 1;
          } else if (data["publ_priv"] == 'public') {
            return 2;
          } else return 0;
        },
      }*/
    },
    /*legend: [
    {
      title: 'Établissements',
      test: function(){},
      affect: function(data) {
        if ( isOKString(data["victoire"])  ) {
          return 0;
        }
        else if ( jQuery.type(data['SUPPRESSIONS']) === 'string' && data['SUPPRESSIONS'].indexOf('uppression') >= 0  ) {
          return 1;
        }
        else if ( (jQuery.type(data['SUPPRESSIONS']) === 'string' && data['SUPPRESSIONS'].indexOf('Fermeture') >= 0) || (jQuery.type(data['SUPPRESSIONS']) === 'string' && data['SUPPRESSIONS'].indexOf('fermeture') >= 0) || isOKString(data["an_ferm_mater"]) || isOKString(data["an_ferm_urgences"]) || isOKString(data["an_ferm_chirur"]) || isOKString(data["an_ferm_cardio"]) || isOKString(data["an_ferm_ivg"]) ) {
          return 2;
        }
        else if ( isOKString(data['SUPPRESSIONS']) || isOKString(data['MENACES']) ) {
          return 3;
        }
        else return 4;
      },
      icons: [
        {
          icon: {leaflet: new L.Icon({
            iconUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-icon-2x-blue.png',
            shadowUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-shadow.png',
            iconSize: [13, 20],
            iconAnchor: [6, 20],
            popupAnchor: [1, -17],
            shadowSize: [20, 20]
          })},
          title: 'une victoire',
          colorBG: '#FFD326',
          colorFG: '#0E0E0E',
        },
        {
          icon: {
            leaflet: new L.Icon({
              iconUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-icon-2x-red.png',
              shadowUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-shadow.png',
              iconSize: [13, 20],
              iconAnchor: [6, 20],
              popupAnchor: [1, -17],
              shadowSize: [20, 20]
            })
          },
          title: 'étab. fermés',
          colorBG: '#2781CA',
          colorFG: '#FFFFFF',
        },
        {
          icon: {
            leaflet: new L.Icon({
              iconUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-icon-2x-violet.png',
              shadowUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-shadow.png',
              iconSize: [13, 20],
              iconAnchor: [6, 20],
              popupAnchor: [1, -17],
              shadowSize: [20, 20]
            })
          },
          title: 'étab. avec fermetures',
          colorBG: '#9C2BCB',
          colorFG: '#F8F8F8',
        },
        {
          icon: {
            leaflet: new L.Icon({
              iconUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-icon-2x-green.png',
              shadowUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-shadow.png',
              iconSize: [13, 20],
              iconAnchor: [6, 20],
              popupAnchor: [1, -17],
              shadowSize: [20, 20]
            })
          },
          title: 'étab. avec menaces',
          colorBG: '#29AD27',
          colorFG: '#FFFFFF',
        },
        {
          icon: {
            leaflet: new L.Icon({
              iconUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-icon-2x-orange.png',
              shadowUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-shadow.png',
              iconSize: [13, 20],
              iconAnchor: [6, 20],
              popupAnchor: [1, -17],
              shadowSize: [20, 20]
            })
          },
          title: 'autres',
          colorBG: '#1E77C8',
          colorFG: '#FFFFFF',
        },
      ]
    },
    {
      title: 'Ferm. de maternités',
      //test: function(){},
      filter: {
        func: function(data) {
          if (isOKNumber(data["an_ferm_mater"])) {
            return 1;
          }
          else {
            return 0;
          }
        },
      },
      affect: function(data) {
        if (data["an_ferm_mater"] == 1111) {
          return 0;
        }
        else if (data["an_ferm_mater"] > 1111 && data["an_ferm_mater"] < 1997) {
          return 1;
        }
        else if (data["an_ferm_mater"] > 1111 && data["an_ferm_mater"] <= 2009) {
          return 2;
        }
        else if (data["an_ferm_mater"] > 2009) {
          return 3;
        }
        else {
          return 4;
        }
      },
      icons: [{
        icon: {leaflet: new L.Icon({
          iconUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-icon-2x-green.png',
          shadowUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-shadow.png',
          iconSize: [13, 20],
          iconAnchor: [6, 20],
          popupAnchor: [1, -17],
          shadowSize: [20, 20]
        })},
        title: 'date inconnue',
        colorBG: '#2781CA',
        colorFG: '#FFFFFF',
      }, {
        icon: {leaflet: new L.Icon({
          iconUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-icon-2x-blue.png',
          shadowUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-shadow.png',
          iconSize: [13, 20],
          iconAnchor: [6, 20],
          popupAnchor: [1, -17],
          shadowSize: [20, 20]
        })},
        title: 'avant 1997',
        colorBG: '#9A26CA',
        colorFG: '#F8F8F8',
      }, {
        icon: {leaflet: new L.Icon({
          iconUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-icon-2x-violet.png',
          shadowUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-shadow.png',
          iconSize: [13, 20],
          iconAnchor: [6, 20],
          popupAnchor: [1, -17],
          shadowSize: [20, 20]
        })},
        title: 'entre 1997 et 2009',
        colorBG: '#9A26CA',
        colorFG: '#F8F8F8',
      }, {
        icon: {leaflet: new L.Icon({
          iconUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-icon-2x-red.png',
          shadowUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-shadow.png',
          iconSize: [13, 20],
          iconAnchor: [6, 20],
          popupAnchor: [1, -17],
          shadowSize: [20, 20]
        })},
        title: 'depuis 2010',
        colorBG: '#9A26CA',
        colorFG: '#F8F8F8',
      }, {
        icon: {leaflet: new L.Icon({
          iconUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-icon-2x-blue.png',
          shadowUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-shadow.png',
          iconSize: [13, 20],
          iconAnchor: [6, 20],
          popupAnchor: [1, -17],
          shadowSize: [20, 20]
        })},
        title: 'autres',
        colorBG: '#9A26CA',
        colorFG: '#F8F8F8',
      }]
    },
    ],*/
    banner: '<img border="0" data-original-height="200" data-original-width="600" src="https://4.bp.blogspot.com/-WgwJsMGzYPE/WkoKfP1TJDI/AAAAAAAAAG0/7vLne-Wtd3cjxFK4Qm-NOJPFBeWShhlKwCLcBGAs/s400/AE8A2A5A-3BDA-4D84-82D5-B34D7215D364.png"/>',
  };  

  var loading = $('<div id="loading"/>');
  loading.append('<p>Chargement ...</p>');
  $(this).append(loading);

  var infoMapWrapper = $('<div id="infoMap-wrapper"><div id="infoMap" class="dispInfoMap"></div><div id="star_filter"><span style="font-size: x-large; font-weight: bold; color: red; ">* <i></span>les données ont été  filtrées dans l' + "'" + 'onglet Données</div></div>');
  $(this).append(infoMapWrapper);

  var dataTable = $('<table id="table" class="table table-striped table-bordered" />');
  $(this).append(dataTable);

  var iconMarkersBuilder, legendTitle, objectOverlays;

  var optionsData = readUrlParam('options');
  if (typeof optionsData !== 'undefined') {
    loadFromJS(optionsData,
      () => {
        runMapandTable(options);
      },
      (optionsData) => {
        loading.html(optionsData + " :<br>ne semble pas être l'adresse d'un fichier accessible");
      }
    );
  }
  else runMapandTable(optionsPlugIn);

  function runMapandTable(options) {

    if (typeof options == 'undefined' ) var options = {};
    if (typeof options.popupData == 'undefined' ) options.popupData = {};
    

    if (typeof options['legend'] == 'undefined') {
      options['legend'] = [{
        icons: [{
          icon: {leaflet: new L.Icon({
            iconUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-icon-2x-blue.png',
            shadowUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-shadow.png',
            iconSize: [13, 20],
            iconAnchor: [6, 20],
            popupAnchor: [1, -17],
            shadowSize: [20, 20]
          })},
          title: 'établissements',
          colorBG: '#FFD326',
          colorFG: '#0E0E0E',
        }],
        title: '',        
        affect: function(data) {
          return 0;
        }
      }];
    }
    if (typeof options['legend'][0].title !== 'undefined') legendTitle = options['legend'][0].title;
    else legendTitle = '';
    iconMarkersBuilder = data => {
      for (var i = 0; i < data.length; i++) {
        data[i].iconMarker = options['legend'][0]['affect'](data[i]);
      }
      return options['legend'][0].icons;
    }  
      
    objectOverlays = {};
     if (typeof options.controlLayers === 'undefined' || typeof options.controlLayers.controlOverlays === 'undefined' ) {
      objectOverlays["overlayTitle"] = 'Autres';
      objectOverlays["controlOverlays"] = {"Autres" : new L.layerGroup()};
      objectOverlays["affect"] = data => {return 0;};
      objectOverlays["overlays"] = [{title: 'Autres', isVisible: true }];
    }
    else {
      if (typeof options.controlLayers.controlOverlays.title !== 'undefined') objectOverlays["overlayTitle"] = options.controlLayers.controlOverlays.title;
      else objectOverlays["overlayTitle"] = '';
      objectOverlays["controlOverlays"] = {};
      objectOverlays["overlays"] = [];
      for (var i = 0; i < options.controlLayers.controlOverlays.overlays.length; i++) {
        objectOverlays["controlOverlays"][options.controlLayers.controlOverlays.overlays[i]] = new L.layerGroup();
        objectOverlays["affect"] = options.controlLayers.controlOverlays.affect;
        objectOverlays["overlays"].push({
          title: options.controlLayers.controlOverlays.overlays[i],
          isVisible: true,
        });
      }
    }


    var storedData = readUrlParam('data');
    if (typeof storedData === 'undefined') {
      if (typeof options.data === 'string') var storedData = options.data;
      else if (typeof options.data === 'object' && typeof options.data.base === 'string') var storedData = options.data.base;
    };
    if (typeof storedData !== 'undefined') {
      if (typeof storedData === 'string') {
        if(storedData.startsWith('https://docs.google.com/spreadsheets')) {
          loadDataFromGoogle(storedData);
        }
        else if (storedData.endsWith(".json") || storedData.endsWith(".geojson")) {
          loadFromJSON(storedData,
            (procData) => {
              var isGeoJSON = (file) => {
                if (file.type == "FeatureCollection" && file.features[0].hasOwnProperty('geometry') && file.features[0]['geometry'] != null) return true;
                else return false;
              }
              var data = getDataFromJSON(procData);
              if (typeof data !== 'undefined') {
                if (typeof options.data.dataTransformer === 'function') {
                  options.data.dataTransformer(data, geolocData)
                }
                else if (typeof options.data.dataTransformer !== 'undefined' || !isGeoJSON(procData)) {
                  geolocData(data);
                }
                else {
                  runData(data);
                }
              };
            },
            (err) => {
              loading.html(err.message);
            }
          );
        }
        else if (storedData.endsWith(".js")) {
          loadFromJS(storedData,
            (procData) => {
              if (typeof this['data'] !== 'undefined') {
                geolocData(this['data']);
              }
            },
            (err) => {
              loading.html(err.message);
            }
          );
        }
      }
      else {
        if (typeof options.data.checkIfStoreNeedsUpdate !== 'undefined' && options.data.checkIfStoreNeedsUpdate) geolocData(storedData);
        else runData(storedData);
      }
    }
    else {
      if ($('#dataStore').length == 1) {
        storedData = $('#dataStore').html();
      };
      if (!storedData ) storedData = options.data.base;
      else storedData = JSON.parse(storedData);
      storedData = getDataFromJSON(storedData);
      if (typeof options.data.checkIfStoreNeedsUpdate !== 'undefined' && options.data.checkIfStoreNeedsUpdate) geolocData(storedData);
      else runData(storedData);
      //runData(storedData);
    }
    
    function getDataFromJSON(storedData) {
      if (jQuery.isArray(storedData)) {
        //fichier au format interne
        console.log("fichier de données au format interne.")
        return storedData
      }
      else {
        try {
          //fichier au format GeoJson
          //throw "trying to read file as GeoJSON : erreur n°0";
          if (storedData.type != "FeatureCollection") throw "trying to read file as GeoJSON : erreur n°1";
          if (!jQuery.isArray(storedData.features)) throw "trying to read file as GeoJSON : erreur n°2";
          var data = [];
          var features = storedData.features;
          for (var i = 0; i < features.length; i++) {
            var newItem = {};
            if (features[i]["geometry"] != null) {
              newItem["lng"] = features[i]["geometry"]["coordinates"][0];
              newItem["lat"] = features[i]["geometry"]["coordinates"][1];
            };
            var properties = features[i]["properties"];
            for (var prop in properties) {
              newItem[prop] = properties[prop];
            }
            data.push(newItem);
          }
          console.log("fichier de données au format GeoJSON.")
          return data;
        }
        catch (err) { //We can also throw from try block and catch it here
          console.log(err);
          var data = options.data;
          if (typeof data === 'object') data = options.data.base;
          loading.html(data + " :<br>n'est pas un fichier de données d'un format reconnu");
        }
        finally {
          //code for finally block
        }
      }
    };

    function loadDataFromGoogle(dataFromGoogle) {
      // Table des Fermetures
      //var SHEET_ID = 'https://docs.google.com/spreadsheets/d/1XBQe8JiZ5cepr-s_TBjBqQcaBx4Y83SQS4PaNoXnNjM/edit?usp=sharing';
      // Table de test (10 lignes)
      //var SHEET_ID = 'https://docs.google.com/spreadsheets/d/1PbgwjD-HodM0JdnlRtQvmTlagE3CzBExjfpCua6-dh4/edit?usp=sharing';

      Tabletop.init({
        key: dataFromGoogle,
        callback: geolocData,
        simpleSheet: true
      });
    };

    function geolocData(data) {
          if (typeof options.data === 'object' && typeof options.data.INSEE_KEY !== 'undefined') geolocDataWithINSEE(data);
          else geolocDataWithoutINSEE(data);
 
      function geolocDataWithoutINSEE(data) {
        var indexCal = 0;
        var indexRes = 0;
        var indexEnd = data.length;

        if (indexEnd < data.length) {
          data.splice(indexEnd, data.length - 1)
        }
        else if (indexEnd > data.length) indexEnd = data.length;

        var makeLocation = function(iData, iVar) {
          if (typeof options.data === 'object' && typeof options.data.geolocData !== 'undefined') {
            return options.data.geolocData(iData, iVar);
          }
          else {
            if (typeof options.data === 'string') var storedData = options.data;
            else if (typeof options.data === 'object' && typeof options.data.base === 'string') var storedData = options.data.base;
            else var storedData = 'options.data';
            loading.html(storedData + "<br>contient des objets qui ont besoin d'être géolocalisés<br>mais la fonction de géolocalisation options.data.geolocData n'est pas définie...");
            return false;
          }
        };

        add2Layer(indexCal);

        function add2Layer(indexLoc) {
          indexCal++;
          var lieux = makeLocation(data, indexLoc);
          if (!isValidCoord(data[indexLoc].lat, data[indexLoc].lng)) {
            L.esri.Geocoding.geocode({
                requestParams: {
                  maxLocations: 1
                }
              })
              .text(lieux)
              .run(function(error, results, response) {
                var _this = this
                if (error) {
                  if (typeof options.geolocError === 'function') options.geolocError(error, data[indexLoc])
                  else {
                    console.log(error);
                    console.log(lieux);
                  };
                  //return;
                }
                else {
                  //if (!error && typeof results.results !== 'undefined') {
                  if (!error && results.results.length > 0) {
                    indexRes++;
                    data[indexLoc].lat = results.results[0].latlng.lat;
                    data[indexLoc].lng = results.results[0].latlng.lng;
                  }
                  else {
                    if (typeof options.geolocError === 'function') options.geolocError("Problème d'accés au résultat de géolocalisation :", data[indexLoc])
                    else {
                      console.log(error);
                      console.log(lieux);
                    };
                  }
                }
                checkIfEnd(indexCal, indexEnd, add2Layer);
              });
          }
          else checkIfEnd(indexCal, indexEnd, add2Layer);

        }
      };

      function geolocDataWithINSEE(data) {
        var villesINSEE = 'https://philquand.github.io/Javascript/LeafLet/json/cities.json'
        Promise.all([
          // chargement du code INSEE des villes
          // d'après https://www.data.gouv.fr/fr/datasets/regions-departements-villes-et-villages-de-france-et-doutre-mer/
          load.json(villesINSEE),
        ]).then(
          function(values) {
            console.log('Everything has been loaded!');
            villesINSEE = loadVal(values, villesINSEE)
            //villesINSEE = values[0]['val'];
            //var output = [];
            var indexCal = 0;
            var indexRes = 0;
            var indexEnd = data.length;
            var INSEE_key = options.data.INSEE_KEY;
            //var indexEnd = 10;

            if (indexEnd < data.length) {
              data.splice(indexEnd, data.length - 1)
            }
            else if (indexEnd > data.length) indexEnd = data.length;

            /*if (storedData !== '') {
              var storedDataHasChanged = checkStoredData();
              if (storedDataHasChanged) loading.find('p').html('storedData et data sont différents');
              else loading.find('p').html('storedData et data sont identiques');
              return;
            }
            function checkStoredData() {
              if (storedData !== '') {
                if (data.length !== storedData.length) {
                  console.log('storedData and data have different length')
                  return true;
                }
                var dataJSON = $('<div></div>')
                dataJSON.html(JSON.stringify(data));
                dataJSON = JSON.parse(dataJSON.html());
                for (var i = 0; i < data.length; i++) {
                  delete storedData[i].iconMarker;
                  delete storedData[i].lat;
                  delete storedData[i].lng;
                  if (!deepEqual(storedData[i], dataJSON[i])) {
                    console.log('storedData and data are different on (at least) rank ' + eval(i + 2))
                    return true;
                  }
                }
                return false;
              }
              else return false;
            }*/

            var makeLocation = function(iData, iVar) {
              if (typeof options.data === 'object' && typeof options.data.geolocData !== 'undefined') {
                return options.data.geolocData(iData, iVar);
              }
              else {
                if (typeof options.data === 'string') var storedData = options.data;
                else if (typeof options.data === 'object' && typeof options.data.base === 'string') var storedData = options.data.base;
                else var storedData = 'options.data';
                loading.html(storedData + "<br>contient des objets qui ont besoin d'être géolocalisés<br>mais la fonction de géolocalisation options.data.geolocData n'est pas définie...");
                return false;
              }
            };
            var allreadyGeoLoc = checkAllreadyGeoLoc();
            if (!allreadyGeoLoc) return false

            function checkAllreadyGeoLoc() {
              var allreadyGeoLoc = {};
              for (var i = 0; i < data.length; i++) {
                if (!isValidCoord(data[i].lat, data[i].lng)) {
                  var lieux = makeLocation(data, i);
                  if (typeof lieux !== 'undefined') {
                    if (!lieux) return false
                    if (typeof allreadyGeoLoc[lieux] == 'undefined') {
                      var coordLatLng = getGPSfromVillesINSEE(data[i][INSEE_key]);
                      if (typeof coordLatLng !== 'undefined') {
                        allreadyGeoLoc[lieux] = {};
                        allreadyGeoLoc[lieux].lat = coordLatLng.lat;
                        allreadyGeoLoc[lieux].lng = coordLatLng.lng;
                        allreadyGeoLoc[lieux].INSEEname = coordLatLng.INSEEname;
                        allreadyGeoLoc[lieux].INSEEzip = coordLatLng.INSEEzip;
                        allreadyGeoLoc[lieux].INSEEcode = coordLatLng.INSEEcode;
                        allreadyGeoLoc[lieux].INSEEdept = coordLatLng.INSEEdept;
                      };
                    };
                  };
                };
              };
              return allreadyGeoLoc;

              function getGPSfromVillesINSEE(locData) {
                for (var i = 0; i < villesINSEE.length; i++) {
                  var zip = villesINSEE[i]["zip_code"];
                  var insee = villesINSEE[i]["insee_code"];
                  var name = villesINSEE[i]["name"].toUpperCase();
                  /*if (locData == 987 && (zip == null || insee == null)) {
                    console.log(locData)
                  }*/
                  var isMatched = false;
                  var department = parseInt(villesINSEE[i]["department_code"]);
                  if (zip == null || insee == null) {
                    if (department == locData) isMatched = true;
                  }
                  else {
                    var zipInt = parseInt(zip);
                    var inseeInt = parseInt(insee);
                    if (zipInt == locData || inseeInt == locData || insee == locData) isMatched = true;
                  }
                  if (isMatched) {
                    //var nameLoc = locData.COMMUNE.toUpperCase();
                    //var splitedLocName = nameLoc.split(" ");
                    //var debName = splitedLocName[0];
                    //if (name.indexOf(debName) > -1) {
                    var coordLatLng = {};
                    coordLatLng.lat = villesINSEE[i]["gps_lat"];
                    coordLatLng.lng = villesINSEE[i]["gps_lng"];
                    coordLatLng.INSEEname = villesINSEE[i]["name"];
                    coordLatLng.INSEEzip = villesINSEE[i]["zip_code"];
                    coordLatLng.INSEEcode = villesINSEE[i]["insee_code"];
                    coordLatLng.INSEEdept = villesINSEE[i]["department_code"];
                    return coordLatLng;
                    //}
                  }
                }
                return;
              }
            }

            add2Layer(indexCal);

            function add2Layer(indexLoc) {
              /*var lieux = data[indexLoc].COMMUNE + ',' + data[indexLoc].INSEE;
              if (!isNaN(data[indexLoc].INSEE)) lieux += ', France';*/
              indexCal++;
              if (!isValidCoord(data[indexLoc].lat, data[indexLoc].lng)) {
                var lieux = makeLocation(data, indexLoc);
                if (!lieux) return false
                if ((typeof allreadyGeoLoc[lieux] == 'undefined' || typeof allreadyGeoLoc[lieux].lat == 'undefined' || typeof allreadyGeoLoc[lieux].lng == 'undefined')) {
                  L.esri.Geocoding.geocode({
                      requestParams: {
                        maxLocations: 1
                      }
                    })
                    .text(lieux)
                    .run(function(error, results, response) {
                      var _this = this
                      if (error) {
                        console.log(error);
                        console.log(lieux);
                        return;
                      }
                      //if (!error && typeof results.results !== 'undefined') {
                      if (!error && results.results.length > 0) {
                        indexRes++;
                        data[indexLoc].lat = results.results[0].latlng.lat;
                        data[indexLoc].lng = results.results[0].latlng.lng;
                      }
                      else {
                        data[indexLoc].doc = 'Failed geoloc';
                      }
                      checkIfEnd(indexCal, indexEnd, add2Layer);
                    });
                }
                else {
                  if (typeof allreadyGeoLoc[lieux] !== 'undefined') {
                    data[indexLoc].lat = allreadyGeoLoc[lieux].lat;
                    data[indexLoc].lng = allreadyGeoLoc[lieux].lng;
                    if (typeof allreadyGeoLoc[lieux].INSEEname !== 'undefined') data[indexLoc].INSEEname = allreadyGeoLoc[lieux].INSEEname;
                    if (typeof allreadyGeoLoc[lieux].INSEEzip !== 'undefined') data[indexLoc].INSEEzip = allreadyGeoLoc[lieux].INSEEzip;
                    if (typeof allreadyGeoLoc[lieux].INSEEcode !== 'undefined') data[indexLoc].INSEEcode = allreadyGeoLoc[lieux].INSEEcode;
                    if (typeof allreadyGeoLoc[lieux].INSEEdept !== 'undefined') data[indexLoc].INSEEdept = allreadyGeoLoc[lieux].INSEEdept;
                  }
                  checkIfEnd(indexCal, indexEnd, add2Layer);
                }
              }
              else checkIfEnd(indexCal, indexEnd, add2Layer);

            };

          }
          /*).catch(function() {
            console.log('Oh no, epic failure!');
          }*/
        );
      }

      function checkIfEnd(indexCal, indexEnd, add2Layer) {
        if (indexCal < indexEnd) {
          add2Layer(indexCal)
        }
        else if (indexEnd > 0) {
          for (var i = 0; i < data.length; i++) {
            if (typeof data[i].INSEEname !== 'undefined') delete data[i].INSEEname;
            if (typeof data[i].INSEEzip !== 'undefined') delete data[i].INSEEzip;
            if (typeof data[i].INSEEcode !== 'undefined') delete data[i].INSEEcode;
            if (typeof data[i].INSEEdept !== 'undefined') delete data[i].INSEEdept;
          }
          setDeptsAndRegs(data, "builDepts")

          function setDeptsAndRegs(data, option) {
            // Usage:  Load different file types with one callback
            // Copyright (c) 2013 Ryan Clark
            // https://gist.github.com/rclark/5779673
            L.TopoJSON = L.GeoJSON.extend({
              addData: function(jsonData) {
                if (jsonData.type === "Topology") {
                  for (var key in jsonData.objects) {
                    var geojson = topojson.feature(jsonData, jsonData.objects[key]);
                    L.GeoJSON.prototype.addData.call(this, geojson);
                  }
                }
                else {
                  L.GeoJSON.prototype.addData.call(this, jsonData);
                }
              }
            });
            if (option == "builDepts") {
              for (var i = 0; i < data.length; i++) data[i]["département"] = "non défini";
              var topoFile = 'https://philquand.github.io/Javascript/LeafLet/json/deptsFranceData.json';
            }
            else {
              for (var i = 0; i < data.length; i++) data[i]["région"] = "non définie";
              var topoFile = 'https://philquand.github.io/Javascript/LeafLet/json/regsFranceData.json';
            }
            Promise.all([
              // GeoJSON des départements et régions françaises
              // d'après https://france-geojson.gregoiredavid.fr
              load.json(topoFile),
            ]).then(
              function(values) {
                console.log('Everything has been loaded!');

                topoVal = loadVal(values, topoFile);

                var topoLayer = new L.TopoJSON();

                addTopoData(topoVal);

                function addTopoData(topoData) {

                  topoLayer.addData(topoData);
                  //topoLayer.addTo(map);
                  topoLayer.eachLayer(handleLayer);
                }

                function handleLayer(layer) {
                  //var randomValue = Math.random(),

                  var areaBounds = layer.getBounds();
                  var areaCode = layer.feature.properties.code;
                  var areaGeometry = layer.feature.geometry;
                  var areaName = layer.feature.properties.nom;
                  var areaNum = getNumItems();

                  function getNumItems() {
                    var d = 0;
                    for (var idx = 0; idx < data.length; idx++) {
                      if (inside([data[idx].lng, data[idx].lat], areaGeometry)) {
                        if (option == "builDepts") data[idx].département = areaName;
                        else data[idx].région = areaName;
                        d += 1;
                      }
                    }
                    return d;

                    function inside(point, TopoGeom) {
                      var insideVal = false;
                      if (TopoGeom["type"] == "MultiPolygon") {
                        for (var i = 0; i < TopoGeom["coordinates"].length; i++) {
                          var polygon = TopoGeom["coordinates"][i][0];
                          // Le point est-il dans le polygone
                          if (isInsidePolygon(point, polygon)) {
                            insideVal = true;
                            for (var j = 1; j < TopoGeom["coordinates"][i].length; j++) {
                              var polygon = TopoGeom["coordinates"][i][j];
                              // Le point est-il dans l'un des trous du polygone
                              if (isInsidePolygon(point, polygon)) {
                                insideVal = false;
                              }
                            }
                          }
                        }
                      }
                      else {
                        var polygon = TopoGeom["coordinates"][0];
                        // Le point est-il dans le polygone
                        if (isInsidePolygon(point, polygon)) {
                          insideVal = true;
                          for (var j = 1; j < TopoGeom["coordinates"].length; j++) {
                            var polygon = TopoGeom["coordinates"][j];
                            // Le point est-il dans l'un des trous du polygone
                            if (isInsidePolygon(point, polygon)) {
                              insideVal = false;
                            }
                          }
                        }
                      }

                      return insideVal;
                      // ray-casting algorithm based on
                      // https://github.com/substack/point-in-polygon/blob/master/index.js

                      function isInsidePolygon(point, vs) {
                        var x = point[0],
                          y = point[1];

                        var inside = false;
                        for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
                          var xi = vs[i][0],
                            yi = vs[i][1];
                          var xj = vs[j][0],
                            yj = vs[j][1];

                          var intersect = ((yi > y) != (yj > y)) &&
                            (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
                          if (intersect) inside = !inside;
                        }

                        return inside;

                      }
                    }
                  }

                }

                if (option == "builDepts") setDeptsAndRegs(data, "builRegs");
                else {
            /*var iconMarkers = iconMarkersBuilder(data);
            for (var i = 0; i < data.length; i++) {
              var popupContent = $('<div></div>');
              var popupBody = $("<div class='popBody'></div>");
              popupContent.append(popupBody);
              if (typeof options.popupData.title !== 'undefined') {
                var title = options.popupData.title;
                //if (typeof data !== 'undefined' && typeof data[title] !== 'undefined') {
                popupBody.append("<div class='popLieux' style='color:" + data[i].iconMarker.colorFG + "; background-color:" + data[i].iconMarker.colorBG + ";'>" + data[i][title] + "</div>");
                //}
              }
              if (typeof options.popupData.properties !== 'undefined') {
                var properties = options.popupData.properties;
              }
              else {
                var hidden = [];
                if (typeof options.popupData.hidden !== 'undefined') hidden = options.popupData.hidden;
                //hidden = hidden.concat(["lat", "lng", "iconMarker", "LATITUDE", "LONGITUDE"]);
                hidden = hidden.concat(["lat", "lng", "iconMarker"]);
                if (typeof options.popupData.title !== 'undefined' && typeof data[popupStruc.title] !== 'undefined') hidden.push([opupStrucData.title])
                var dataKeys = Object.getOwnPropertyNames(indexEvent)
                var properties = [];
                for (var j = 0; j < dataKeys.length; j++) {
                  var keyStatus = true;
                  for (var k = 0; k < hidden.length; k++) {
                    if (dataKeys[j] == hidden[k]) keyStatus = false;
                  }
                  if (keyStatus == true) properties.push(dataKeys[j]);
                }
              }
              for (var j = 0; j < properties.length; j++) {
                var item = properties[j];
                if (data[i][item] != '') popupBody.append("<div class='popItem'><span class='popTitle'>" + item + "</span><br>" + data[i][item] + "</div>");
              }
              var content = JSON.stringify(popupContent.html());
              data[i].doc = content;
              }*/
                runData(data, true);
                }

              }
            )
            /*.catch(function() {
                            console.log('Oh no, epic failure!');
                          });*/
          };


          /*function dataPopUp(data) {
            var iconMarkers = iconMarkersBuilder(data);
            for (var i = 0; i < data.length; i++) {
              var popupContent = $('<div></div>');
              var popupBody = $('<div class="popBody"></div>');
              popupContent.append(popupBody);
              if (typeof options.popupData.title !== 'undefined') {
                var title = options.popupData.title;
                //if (typeof data !== 'undefined' && typeof data[title] !== 'undefined') {
                popupBody.append('<div class="popLieux" style="color:' + data[i].iconMarker.colorFG + '; background-color:' + data[i].iconMarker.colorBG + ';">' + data[i][title] + '</div>');
                //}
              }
              if (typeof options.popupData.properties !== 'undefined') {
                var properties = options.popupData.properties;
              }
              else {
                var hidden = [];
                if (typeof options.popupData.hidden !== 'undefined') hidden = options.popupData.hidden;
                //hidden = hidden.concat(["lat", "lng", "iconMarker", "LATITUDE", "LONGITUDE"]);
                hidden = hidden.concat(["lat", "lng", "iconMarker"]);
                if (typeof options.popupData.title !== 'undefined' && typeof data[popupStruc.title] !== 'undefined') hidden.push([opupStrucData.title])
                var dataKeys = Object.getOwnPropertyNames(indexEvent)
                var properties = [];
                for (var j = 0; j < dataKeys.length; j++) {
                  var keyStatus = true;
                  for (var k = 0; k < hidden.length; k++) {
                    if (dataKeys[j] == hidden[k]) keyStatus = false;
                  }
                  if (keyStatus == true) properties.push(dataKeys[j]);
                }
              }
              for (var j = 0; j < properties.length; j++) {
                var item = properties[j];
                if (data[i][item] != '') popupBody.append('<div class="popItem"><span class="popTitle">' + item + '</span><br>' + data[i][item] + '</div>');
              }
              data[i].doc = popupContent.html();
            };
          //if (asyncCompTableData) {
          //  for (var i = 0; i < indexEvent.length; i++) {
          //    indexEvent[i]["département"] = "non défini";
          //    indexEvent[i]["région"] = "non définie";
          // };
          //}
          }*/
        }
      };
    };

    function runData(indexEvent, isToSaveData) {
      // À conserver pour exporter des données...
      /*exportData(indexEvent)
      //return;
      function exportData(indexEvent) {
        var expCOMMUNE = indexEvent[0].COMMUNE;
          if(indexEvent[0].INSEEcode == null) var expINSEE = indexEvent[0].INSEEdept;
          else var expINSEE = indexEvent[0].INSEEcode;
        for (i = 1; i < indexEvent.length; i++) {
          expCOMMUNE += ',' + indexEvent[i].INSEEname;
          if(indexEvent[i].INSEEcode == null) expINSEE += ',' + indexEvent[i].INSEEdept;
          else expINSEE += ',' + indexEvent[i].INSEEcode;
        }
        $('#exportCOMMUNE').html(expCOMMUNE);
        $('#exportINSEE').html(expINSEE);
        for (i = 1; i < indexEvent.length; i++) {
          delete indexEvent[i].INSEEname;
          delete indexEvent[i].INSEEzip;
          delete indexEvent[i].INSEEcode;
          delete indexEvent[i].INSEEdept;
        }      
        $('#dataStore').html(JSON.stringify(indexEvent));
        console.log('achieved');
        loading.find('p').html('Les données de type COMMUNE et INSEE ont été exportées avec succés');
      }*/
      if (isToSaveData) {
        if ($('#dataStore').length == 0) {
          var dataStore = $('<div id="dataStore" style="display:none"></div>')
          $('#infoMap-wrapper').prepend(dataStore)
        }
        else var dataStore = $('#dataStore');

        var valGeoJSON = getGeoJSONFromData(indexEvent);
        for (i = 0; i < valGeoJSON["features"].length; i++) {
          //delete valGeoJSON["features"][i]["properties"]["iconMarker"];
          delete valGeoJSON["features"][i]["properties"]["marker"];
          for (var prop in valGeoJSON["features"][i]["properties"]) {
            if (valGeoJSON["features"][i]["properties"][prop] == null) {
              delete valGeoJSON["features"][i]["properties"][prop];
            }

          }
          //delete valGeoJSON["features"][i]["properties"]["doc"];
        };
        dataStore.html(JSON.stringify(valGeoJSON));

        if ($('#optStore').length == 0) {
          var optStore = $('<div id="optStore" style="display:none"></div>')
          $('#infoMap-wrapper').prepend(optStore)
        }
        else var optStore = $('#optStore');
        var optStoreSTR = stringifyJSO2V(options, 'options');
        optStore.html(optStoreSTR);

        function getGeoJSONFromData(indexEvent) {
          var valGeoJSON = {};
          valGeoJSON["type"] = "FeatureCollection";
          valGeoJSON["features"] = [];
          for (var i = 0; i < indexEvent.length; i++) {
            var newItem = {
              "type": "Feature",
              "geometry": {
                "type": "Point"
              }
            };
            newItem["geometry"]["coordinates"] = [indexEvent[i]["lng"], indexEvent[i]["lat"]];
            newItem["properties"] = clone(indexEvent[i]);
            delete newItem["properties"].lng;
            delete newItem["properties"].lat;
            valGeoJSON["features"].push(newItem);
          }
          return valGeoJSON;
        };
      };
      console.log('achieved');
      
      loading.css('display', 'none');
      for (var i = 0; i < indexEvent.length; i++) {
        if (jQuery.type(options['legend']) !== 'undefined' && jQuery.type(options['legend'][0].filter) !== 'undefined' && jQuery.type(options['legend'][0].filter.func) !== 'undefined') {
          if (options['legend'][0].filter.func(indexEvent[i])) {
            indexEvent[i]["selected"] = true;
          }
          else {
            indexEvent[i]["selected"] = false;
          }
        }
        else {
          indexEvent[i]["selected"] = true;
        }
      }
      var map_invalidateSize = runMap(indexEvent);

      var menuLegend = -1;
      var indexEventTable;
      var tableFilterOn = false;
      function runMap(indexEvent) {

        var stateChangingButton ;
        var iconMarkers = iconMarkersBuilder(indexEvent);
        var iconMarkersLength = iconMarkers.length;
        var map, onSetDefaultMapView, refreshIndexEvent;
        var clickedMarker;

        /*function removeAreaMarkers() {
          for (var i = 0; i < indexEvent.length; i++) {
            markers.removeLayer(indexEvent[i].marker);
          }
        }*/
        function setDefaultMapView() {

          //map.setView(new L.LatLng(47, 2), 6);
          
          map.fitBounds([
            [51.10, 2.47],
            [48.37, -5.16],
            [42.38, -1.85],
            [42.47, 3.16],
            [43.80, 7.96],
            [49.03, 8.08],
          ]);
          if (typeof onSetDefaultMapView !== 'undefined') onSetDefaultMapView();
        }

        function setMapView() {
          return;
        }

        function dataPopUp(data) {
          var popupContent = $('<div></div>');
          var popupBody = $('<div class="popBody"></div>');
          popupContent.append(popupBody);
          if (typeof options.popupData.title !== 'undefined') {
            var title = options.popupData.title;
            if (typeof data !== 'undefined' && typeof data[title] !== 'undefined') {
              popupBody.append('<div class="popLieux" style="color:' + data.iconMarker.colorFG +'; background-color:' + data.iconMarker.colorBG +';">' + data[title] + '</div>');
            }
          }
          if (typeof options.popupData.properties !== 'undefined') {
            var properties = options.popupData.properties;
          }
          else {
            var hidden = [];
            if (typeof options.popupData.hidden !== 'undefined') hidden = options.popupData.hidden;
            //hidden = hidden.concat(["lat", "lng", "iconMarker", "LATITUDE", "LONGITUDE"]);
            hidden = hidden.concat(["lat", "lng", "iconMarker"]);
            //if (typeof options.popupData.title !== 'undefined' && typeof data[popupStruc.title] !== 'undefined') hidden.push([opupStrucData.title])
            var dataKeys = Object.getOwnPropertyNames(data)
            var properties = [];
            for (var i = 0; i < dataKeys.length; i++) {
              var keyStatus = true;
              for (var j = 0; j < hidden.length; j++) {
                if (dataKeys[i] == hidden[j]) keyStatus = false;
              }
              if (keyStatus == true) properties.push(dataKeys[i]);
            }
          }
          if (typeof options.popupData.label !== 'undefined') {
            var label = [];
            for (var i = 0; i < options.popupData.label.length; i++) {
              label[options.popupData.label[i].value] = options.popupData.label[i].label
            }
          }
          for (var i = 0; i < properties.length; i++) {
              var item = properties[i];
              var itemLabel = item;
             if(jQuery.type(label[item]) === 'string') {
                itemLabel = label[item];
              }
              if (typeof data[item] !== 'undefined' && data[item] != '' && data[item] != null && data[item] != 'NULL') popupBody.append('<div class="popItem"><span class="popTitle">' + itemLabel + '</span><br>' + data[item] + '</div>');
            }
          return popupContent.html();
        }
        if (typeof options.maxClusterRadius !== 'undefined') var maxClusterRadius = options.maxClusterRadius;
        else var maxClusterRadius = 20;
        var markers = L.markerClusterGroup({
          maxClusterRadius: maxClusterRadius,
          removeOutsideVisibleBounds: true,
          spiderfyDistanceMultiplier: 2,

          disableClusteringAtZoom: 13,
          spiderfyOnMaxZoom: false,
          zoomToBoundsOnClick: false,
          animate: false,
          iconCreateFunction: function(cluster) {
            const clusterChildMarkers = cluster.getAllChildMarkers(); // list of all markers
            var clLatLong = clusterChildMarkers[0].getLatLng()
            var clusterSize = "small", locLat = clLatLong.lat, locLng = clLatLong.lng;
            for (i = 0; i < clusterChildMarkers.length; i++) {
              clLatLong = clusterChildMarkers[i].getLatLng();
              if( (clLatLong.lat !== locLat) || (clLatLong.lng !== locLng) ) clusterSize = "medium";
            }
            return new L.DivIcon({
              html: '<div><span>' + clusterChildMarkers.length + '</span></div>',
              className: 'marker-cluster marker-cluster-' + clusterSize,
              iconSize: new L.Point(1, 1)
            });
          }
        });
// markers is the markerClusterGroup
/*markers.on('animationend', function(a){
  console.log('animationend zoom level: ', map.getZoom())
})

markers.on('clusterclick', function(a){
  console.log('clusterclick zoom level: ', map.getZoom())
})*/
        for (i = 0; i < indexEvent.length; i++) {
          indexEvent[i].iconMarker = iconMarkers[indexEvent[i].iconMarker];
          indexEvent[i].doc = dataPopUp(indexEvent[i]);
          //indexEvent[i].doc = JSON.parse(indexEvent[i].doc);
          indexEvent[i].marker = makePopUp(indexEvent[i], setMapView);
        }

        map = initMap('infoMap', indexEvent);
        markers.addTo(map);
clickedMarker="";
map.on('zoomend', function() {
    if (clickedMarker!=="" && map.getZoom()>=map.options.maxZoom) {
        clickedMarker.__parent.spiderfy();
        clickedMarker="";
    }
});

markers.on('clusterclick', function (a) {
    if (a.layer._childCount>0) {
        clusterMarkers = a.layer.getAllChildMarkers();
        clickedMarker=clusterMarkers[0];
    }
    if (map.getZoom()>=map.options.maxZoom) {
        a.layer.spiderfy();
    } else {
        a.layer.zoomToBounds({padding: [20, 20]});
    }
});        

        endMarkerBuild(indexEvent);

        function makePopUp(input, setCallBack) {

          if (typeof input.iconMarker === 'undefined' || typeof input.iconMarker.icon === 'undefined' || input.iconMarker.icon == '') {
            var marker = L.marker([input.lat, input.lng]);
          }
          else {
            if (typeof input.lat === 'undefined' || typeof input.lng === 'undefined') {
              console.log('error in makePopUp');
            }
            var marker = L.marker([input.lat, input.lng], {
              icon: input.iconMarker.icon.leaflet
            });
          }
          marker.bindPopup(input.doc, {
            maxWidth: 400,
            minWidth: 250,
            maxHeight: 300,
            className: 'popupCustom',
            autoPan: true,
            closeButton: true,
            autoPanPadding: [5, 5]
          });
          marker.getPopup().on('remove', function() {
            setCallBack();
          });
          return marker;
        }

        function initMap(idMap, indexEvent) {

          'use strict'

          map = loadMap(idMap);

          //zoomRemove(map);
          map.options.minZoom = 5;
          //map.options.maxZoom = 8;
          map.options.maxZoom = 12;
          map.scrollWheelZoom.disable();

          setDefaultMapView();

          var baseMaps = {
            'par défaut': L.tileLayer('')
          };
          baseMaps['par défaut'].addTo(map);
          var legendMaps = {}

          // Constructeur du contrôle de carte LeafLet
          addControlLayer();          
          function addControlLayer() {
            // Constructeur du contrôle de carte LeafLet
            if (typeof options.controlLayers === 'undefined' ){
              //var legendAllMarkers = addLegend()
            } else if (typeof options.controlLayers.controlMaps === 'undefined' || options.controlLayers.controlMaps.on != true) {
              // Ajout de la seule carte de fond
              var option = {
                baseMaps: null,
                legend: legendMaps,
                map: map,
              };
              buildBaseMaps(option);
            }
            else {
              // Ajout du contrôle
              loadMapPicture({
                typMap: "builDepts",
                baseMaps: baseMaps,
                legend: legendMaps,
                data: indexEvent,
                map: map,
                callback: builDeptsCallback
                //callback: buildBaseMaps
              });
            }

            function builDeptsCallback(option) {
              loadMapPicture({
                typMap: "builRegs",
                baseMaps: baseMaps,
                legend: legendMaps,
                data: indexEvent,
                map: map,
                callback: buildBaseMaps
              });
            }

            function buildBaseMaps(option) {
              var controlBasemapsAndOverlays = new L.control.layers(option["baseMaps"], objectOverlays["controlOverlays"]).addTo(option["map"]);
              for (var i = 0; i < objectOverlays["overlays"].length; i++) {
                objectOverlays["controlOverlays"][objectOverlays["overlays"][i].title].addTo(map);
              }

              var controlBasemapsAndOverlaysHTML = $(controlBasemapsAndOverlays.getContainer());
              var controlMapsDiv = controlBasemapsAndOverlaysHTML.find(".leaflet-control-layers-base").first();
              if (option["baseMaps"] !== null) controlMapsDiv.prepend('<div class="legendTitle" style="display:block; text-align:center;">carte</div>')
              var controlOverlaysDiv = controlBasemapsAndOverlaysHTML.find(".leaflet-control-layers-overlays").first();
              if (objectOverlays["overlayTitle"] != '') {
                controlOverlaysDiv.prepend('<div class="legendTitle" style="display:block; text-align:center;">' + objectOverlays["overlayTitle"] + '</div>')
              };
              if (objectOverlays["overlays"].length == 1) {
                controlBasemapsAndOverlaysHTML.find(".leaflet-control-layers-separator").css("display", "none");
                controlBasemapsAndOverlaysHTML.find(".leaflet-control-layers-overlays").css("display", "none");
              };
              var baselayerName = 'par défaut';
              var legendAllMarkers = addLegend()
              map.on('baselayerchange', function(eventLayer) {
                baselayerName = eventLayer.name;
                //map.removeControl(legendAllMarkers);
                $('#menuLegend').prop('disabled',true)
                $('#btData').css('display','none')
                map.removeControl(option["legend"]["départements"]);
                map.removeControl(option["legend"]["régions"]);
                setDefaultMapView();
                if (baselayerName == 'par défaut') {
                  //legendAllMarkers = addLegend();
                  $('#menuLegend').prop('disabled',false)
                  contentLegend();
                  $('#btData').css('display','block')
                  stateChangingButton.enable();
                }
                else {
                  map.addControl(option["legend"][eventLayer.name]);
                  refreshIndexEvent = [];
                  stateChangingButton.disable();
                }
                refreshMarkers(refreshIndexEvent);
              });
              map.on('overlayadd', function(eventLayer) {
                console.log('adding : ' + eventLayer.name)
                if (baselayerName == 'par défaut') {
                  for (var k = 0; k < objectOverlays["overlays"].length; k++) {
                    if (objectOverlays["overlays"][k].title == eventLayer.name) {
                      objectOverlays["overlays"][k].isVisible = true;
                    };
                  };
                  /*var iconNum = refreshMarkers(refreshIndexEvent);
                  map.removeControl(legendAllMarkers);
                  legendAllMarkers = addLegend(iconNum)
                  map.addControl(legendAllMarkers);*/
                  $('#contentLegend').html(contentLegend());
                };
              });
              map.on('overlayremove', function(eventLayer) {
                console.log('removing : ' + eventLayer.name)
                if (baselayerName == 'par défaut') {
                  for (var k = 0; k < objectOverlays["overlays"].length; k++) {
                    if (objectOverlays["overlays"][k].title == eventLayer.name) {
                      objectOverlays["overlays"][k].isVisible = false;
                    };
                  };
                  /*var iconNum = refreshMarkers(refreshIndexEvent);
                  map.removeControl(legendAllMarkers);
                  legendAllMarkers = addLegend(iconNum)
                  map.addControl(legendAllMarkers);*/
                  $('#contentLegend').html(contentLegend());
                };
              });

              /*function updateLegend() {
                var iconNum = refreshMarkers(refreshIndexEvent);
                map.removeControl(legendAllMarkers);
                legendAllMarkers = addLegend(iconNum)
                map.addControl(legendAllMarkers);
              }*/
            };
            
          };

          function addLegend() {
            var legendAllMarkers = L.control({
              position: 'bottomleft'
            });

            legendAllMarkers.onAdd = function(map) {

              var divlegendAllMarkers = L.DomUtil.create('div', 'info legend');
              divlegendAllMarkers.innerHTML = '';

              var menuLegendOptions = ''
              for (var i = 0; i < options['legend'].length; i++) {
                if(i== menuLegend) menuLegendOptions += '<option selected="selected" data-path=' + i + '>' + options['legend'][i].title + '</option>'
                else menuLegendOptions += '<option data-path=' + i + '>' + options['legend'][i].title + '</option>'
              }
              divlegendAllMarkers.innerHTML += '<select id="menuLegend" style="margin-bottom: 1em">' + menuLegendOptions + '</select>';
              if(options['legend'].length == 1) divlegendAllMarkers.innerHTML = '<div style="display:none">' + divlegendAllMarkers.innerHTML + '</div>';
              if( menuLegend == -1) {
                menuLegend = 0;
                divlegendAllMarkers.innerHTML += '<div id="contentLegend" >' + contentLegend(true) + '</div>';
              }
              else divlegendAllMarkers.innerHTML += '<div id="contentLegend" >' + contentLegend() + '</div>';

              if ($('#btData').length == 0) runButtonForTable();
              
              return divlegendAllMarkers;
            };

            legendAllMarkers.addTo(map);
            L.DomEvent.on(
              document.getElementById('menuLegend'), // HTMLElement
              'change', // String with event names
              function(e) {
                L.DomEvent.stop(e);
                menuLegend = $('#menuLegend option:selected').data("path");
                $('#contentLegend').html(contentLegend(true));
                //runTable();
              } // Handler function
            );
            return legendAllMarkers;
          }

          function contentLegend(needsRefresh) {
            if (typeof options['legend'][menuLegend].title !== 'undefined') legendTitle = options['legend'][menuLegend].title;
            else legendTitle = '';
            iconMarkersBuilder = data => {
              for (var i = 0; i < data.length; i++) {
                data[i].iconMarker = options['legend'][menuLegend].icons[options['legend'][menuLegend]['affect'](data[i])];
              }
              return options['legend'][menuLegend].icons;
            }
            iconMarkers = iconMarkersBuilder(indexEvent);
            iconMarkersLength = iconMarkers.length;
            for (var i = 0; i < indexEvent.length; i++) {
              markers.removeLayer(indexEvent[i].marker);
            }
            refreshIndexEvent = [];
            for (i = 0; i < indexEvent.length; i++) {
              refreshIndexEvent.push(i)
            }
            if (jQuery.type(needsRefresh) !== 'undefined' && needsRefresh) {
              indexEventTable = [];
              var j = 0;
              for (i = 0; i < indexEvent.length; i++) {
                if (jQuery.type(options['legend']) !== 'undefined' && jQuery.type(options['legend'][menuLegend].filter) !== 'undefined' && jQuery.type(options['legend'][menuLegend].filter.func) !== 'undefined') {
                  if (options['legend'][menuLegend].filter.func(indexEvent[i])) {
                    indexEvent[i]["selected"] = true;
                    indexEventTable.push(indexEvent[i]);
                    //indexEventTable[j++]['indirect'] = i;

                  }
                  else {
                    indexEvent[i]["selected"] = false;
                  }
                }
                else {
                  indexEvent[i]["selected"] = true;
                  indexEventTable.push(indexEvent[i]);
                  //indexEventTable[j++]['indirect'] = i;
                }
              }
              runTable();
             
            }
            var iconNum = refreshMarkers(refreshIndexEvent);

            if (typeof iconNum === 'undefined') {
              iconNum = [];
              for (i = 0; i < indexEvent.length; i++) {
                iconNum.push(true)
              }
            }
            for (var k = 0; k < iconMarkersLength; k++) {
              iconMarkers[k].nbMapEvents = 0;
            }
            for (var i = 0; i < indexEvent.length; i++) {
              if (iconNum[i]) {
                for (var k = 0; k < iconMarkersLength; k++) {
                  //if (indexEvent[i]["selected"] && indexEvent[i].iconMarker.title == iconMarkers[k].title) {
                  if (indexEvent[i]["selected"] && (indexEvent[i].iconMarker == k || indexEvent[i].iconMarker.title == iconMarkers[k].title)) {
                    indexEvent[i].iconMarker = iconMarkers[k];
                    iconMarkers[k].nbMapEvents++;
                  }
                }
              }
            }
            var totalEvents = 0
            for (var k = 0; k < iconMarkersLength; k++) {
              totalEvents = totalEvents + iconMarkers[k].nbMapEvents;
            }
            var contentLegendHtml = ''
            if (legendTitle != '') {
              if(totalEvents == 0) contentLegendHtml += 'aucun élément';
              else if(totalEvents == 1) contentLegendHtml += totalEvents + ' élément';
              else if(totalEvents > 1) contentLegendHtml += totalEvents + ' éléments';
              if (tableFilterOn)  contentLegendHtml += '<span style="font-size: x-large; font-weight: bold; color: red; "> *</span>'
              contentLegendHtml = '<span class="legendTitle" style="display:block; text-align:center;">' + contentLegendHtml + '</span>';
            }
            for (var k = 0; k < iconMarkersLength; k++) {
              if (typeof iconMarkers[k].title !== 'undefined' && iconMarkers[k].nbMapEvents > 0) {
                if (typeof iconMarkers[k].icon.leaflet === 'undefined') {
                  contentLegendHtml += '<img src="https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon-2x.png"> ' + iconMarkers[k].nbMapEvents + ' ' + iconMarkers[k].title;
                }
                else {
                  var iconVal = iconMarkers[k].icon.leaflet;
                  contentLegendHtml += '<img src="' + iconMarkers[k].icon.leaflet.options.iconUrl + '"> ' + iconMarkers[k].nbMapEvents + ' ' + iconMarkers[k].title
                }
                if (legendTitle !== '') contentLegendHtml += '<br>'
              }
            }
            if( contentLegendHtml == '' ) contentLegendHtml = "aucun élément"
            if (legendTitle == '' && tableFilterOn)  contentLegendHtml += '<span style="font-size: x-large; font-weight: bold; color: red; "> *</span><br>'
            if (tableFilterOn) $('#star_filter').css('display', 'block');
            else $('#star_filter').css('display', 'none');
            return contentLegendHtml;
          }
          if(typeof options.banner !== 'undefined') bannerCoord();
          function bannerCoord() {
            bannerCoord = L.control({
              position: 'topright'
              //position: 'bottomleft'
            });

            bannerCoord.onAdd = function(map) {
              var divBannerCoord = L.DomUtil.create('div', 'bannerCoord');
              divBannerCoord.innerHTML = options.banner;
              return divBannerCoord;
            };

            bannerCoord.addTo(map);
          }

          refreshMarkers();
          function refreshMarkers(refreshIndexEvent) {
            for (var i = 0; i < indexEvent.length; i++) {
              markers.removeLayer(indexEvent[i].marker);
            }
            if (typeof refreshIndexEvent === 'undefined') {
              refreshIndexEvent = [];
              for (i = 0; i < indexEvent.length; i++) {
                refreshIndexEvent.push(i)
                /*if (indexEvent[i]["selected"]) {
                  refreshIndexEvent.push(i)
                }*/
              }
            }
            var iconNum = [];
            for (var i = 0; i < refreshIndexEvent.length; i++) {
              iconNum.push(false);
              for (var k = 0; k < objectOverlays["overlays"].length; k++) {
                if (indexEvent[refreshIndexEvent[i]]["selected"] && objectOverlays["overlays"][k].isVisible && objectOverlays["affect"](indexEvent[refreshIndexEvent[i]]) == k) {
                  iconNum[i] = true;
                }
              }
              var marker = indexEvent[refreshIndexEvent[i]].marker
              //var icon = new L.Icon(indexEvent[refreshIndexEvent[i]].iconMarker)
              var icon = indexEvent[refreshIndexEvent[i]].iconMarker.icon.leaflet;
              marker.setIcon(icon);
              if (iconNum[i]) {
                markers.addLayer(marker);
              }
              else {
                markers.removeLayer(marker);
              }
            }
            return iconNum;
          }

          function loadMapPicture(option) {
            switch (option["typMap"]) {
              case "builDepts":
                loadClustering(option, option["data"]);
                break;
              case "builRegs":
                loadClustering(option, option["data"]);
                break;
              default:
                option["baseMaps"]['par défaut'] = L.tileLayer('');
            };
            function loadClustering(option) {
              // Constructeur de la carte TopoJSON avec pays pour LeafLet
              // ajout de l'échelle des couleurs pour les cartes TopoJSON
              if (option["typMap"] == "builDepts") {
                if (typeof options.controlLayers === 'undefined' || typeof options.controlLayers.controlMaps === 'undefined' || typeof options.controlLayers.controlMaps.gradeDepts === 'undefined')
                  //var grades = [0, 1, 3, 5, 7, 10, 15, 20];
                  var grades = [0, 20, 30, 40, 55, 60, 80, 90];
                else
                  var grades = options.controlLayers.controlMaps.gradeDepts;
                  var colorDeb = '#FFFF00';
                  var colorFin = '#FF0000';
                  var colorStyle = '#555';
              }
              else {
                if (typeof options.controlLayers === 'undefined' || typeof options.controlLayers.controlMaps === 'undefined' || typeof options.controlLayers.controlMaps.gradeRegs === 'undefined')
                  var grades = [0, 30, 50, 60, 70, 80, 90, 95];
                else
                  var grades = options.controlLayers.controlMaps.gradeRegs;
                  var colorDeb = '#91F3C8';
                  var colorFin = '#0260C6';
                  var colorStyle = '#555';
              }
              // ajout des couche départements et régions colorées TopoJSON
              loadMapTopoJSON(option);

              function loadMapTopoJSON(option) {
                // Usage:  Load different file types with one callback
                // Copyright (c) 2013 Ryan Clark
                // https://gist.github.com/rclark/5779673
                L.TopoJSON = L.GeoJSON.extend({
                  addData: function(jsonData) {
                    if (jsonData.type === "Topology") {
                      for (var key in jsonData.objects) {
                        var geojson = topojson.feature(jsonData, jsonData.objects[key]);
                        L.GeoJSON.prototype.addData.call(this, geojson);
                      }
                    }
                    else {
                      L.GeoJSON.prototype.addData.call(this, jsonData);
                    }
                  }
                });
                if (option["typMap"] == "builDepts") {
                  var topoFile = 'https://philquand.github.io/Javascript/LeafLet/json/deptsFranceData.json';
                }
                else {
                  var topoFile = 'https://philquand.github.io/Javascript/LeafLet/json/regsFranceData.json';
                }
                Promise.all([
                  // ressources utilisées pour construire la carte TopoSJON
                  load.js('https://philquand.github.io/Javascript/LeafLet/chroma.min.js'),
                  load.js('https://d3js.org/topojson.v1.min.js'),
                  // GeoJSON des départements et régions françaises
                  // d'après https://france-geojson.gregoiredavid.fr
                  load.json(topoFile),
                ]).then(
                  function(values) {
                    console.log('Everything has been loaded!');

                    var topoVal = loadVal(values, topoFile);

                    var topoLayer = new L.TopoJSON();
                    var colorScale = chroma
                      //.scale(['#D5E3FF', '#003171'])
                      .scale([colorDeb, colorFin])
                      .domain([0, 1]);
                    
                    var color_grades = []
                    for (var i = 0; i < grades.length; i++) {
                      color_grades.push(colorScale(i / grades.length).hex());
                      //console.log(color_grades[i]);
                    }
                    var enterPopup = 0;

                    var areaNumItems = {};
                    if (option["typMap"] == "builDepts") {
                       for (var idx = 0; idx < option["data"].length; idx++) {
                        if (typeof option["data"][idx]["département"] !== 'undefined') {
                          if (typeof areaNumItems[option["data"][idx]["département"]] === 'undefined') {
                            areaNumItems[option["data"][idx]["département"]] = [];
                          }
                          areaNumItems[option["data"][idx]["département"]].push(idx);
                        }
                      }
                      var areaType = "département"
                      var baseMapsName = "départements";
                    }
                    else {
                       for (var idx = 0; idx < option["data"].length; idx++) {
                        if (typeof option["data"][idx]["région"] !== 'undefined') {
                          if (typeof areaNumItems[option["data"][idx]["région"]] === 'undefined') {
                            areaNumItems[option["data"][idx]["région"]] = [];
                          }
                          areaNumItems[option["data"][idx]["région"]].push(idx);
                        }
                      }
                      var areaType = "région"
                      var baseMapsName = "régions";
                    }
                    addTopoData(topoVal);
                                        

                    function addTopoData(topoData) {

                       
                      topoLayer.addData(topoData);
                      //topoLayer.addTo(map);
                      
                      topoLayer.eachLayer(handleLayer);

                      option["legend"][baseMapsName] = L.control({
                        position: 'topright'
                      });
                      option["legend"][baseMapsName].onAdd = function(map) {

                        var min_areaNum = 10000000000, max_areaNum = 0, min_areaName, max_areaName;
                        topoLayer.eachLayer(MinMaxleLayer);
                        function MinMaxleLayer(layer) {
                          var areaName = layer.feature.properties.nom;
                          var inMarkers = getNumItems(areaName);
                          var areaNum = inMarkers.length;
                          if(areaNum > max_areaNum) {
                            max_areaNum = areaNum;
                            max_areaName = areaName;
                          } 
                          if(areaNum < min_areaNum) {
                            min_areaNum = areaNum;
                            min_areaName = areaName;
                          }
                        }  
                                              
                        topoLayer.eachLayer(colorleLayer);
                        function colorleLayer(layer) {
                          var areaName = layer.feature.properties.nom;
                          var inMarkers = getNumItems(areaName);
                          var areaNum = inMarkers.length;
                          var areaNum_loc = (areaNum - min_areaNum) * (100 / max_areaNum)
                          var fillColor = thisColor(areaNum_loc);
                          layer.setStyle({
                            fillColor: fillColor,
                            fillOpacity: 1,
                            color: colorStyle,
                            weight: 1,
                            opacity: .5
                          });
                        } 
                                               
                        var grades_loc = []
                        for (var i = 0; i < grades.length; i++) {
                          grades_loc.push(Math.floor(min_areaNum + grades[i]*(max_areaNum/100)));
                        }
                        
                        var div = L.DomUtil.create('div', 'info legend'), labels = [];

                        // loop through our density intervals and generate a label with a colored square for each interval
                        for (var i = grades.length - 1; i >= 0; i--) {
                          //for (var i = 0; i < grades.length; i++) {
                          //var legColor = thisColor(grades[i] + 1)
                          var legColor = thisColor(grades[i]);
                          div.innerHTML +=
                            '<i style="background-color:' + legColor + '"></i><span>' +
                            grades_loc[i] + (grades_loc[i + 1] ? '&ndash;' + grades_loc[i + 1] + '</span><br>' : '+</span><br>');
                        }
                        return div;
                      };

                    }

                    function thisColor(d) {
                      var nbMax = grades.length;
                      for (var i = nbMax - 1; i >= 0; i--) {
                        if (d >= grades[i]) {
                          /*var retColor = colorScale(i / nbMax).hex();
                          return retColor;*/
                          return color_grades[i]
                        }
                      }
                      return 'white';
                    }

                    /*map.on('overlayadd', function(eventLayer) {
                      if (eventLayer.name == 'départements' || eventLayer.name == 'régions') {
                        console.log('TEST : overlayadd : ' + eventLayer.name);
                      }
                    });
                    map.on('overlayremove', function(eventLayer) {
                      if (eventLayer.name == 'départements' || eventLayer.name == 'régions') {
                        console.log('TEST : overlayremove : ' + eventLayer.name);
                      }
                    });*/
                    map.on('baselayerchange', function(eventLayer) {
                      if (eventLayer.name !== 'départements' && eventLayer.name !== 'régions') {
                        //console.log('TEST : baselayerchange changing min_max : ' + eventLayer.name);
                      } else {
                        //console.log('TEST : baselayerchange : ' + eventLayer.name);
                      }
                    });
                    
                    function handleLayer(layer) {
                      //var randomValue = Math.random(),
                      var areaName = layer.feature.properties.nom;
                      var areaBounds = layer.getBounds();
                      // Create an element to hold all your text and markup
                      var container = $('<div />');
                      var areaEnterCode, areaBindPopup, inMarkers;

                      function handleLayer_maj(layer) {
                        var areaCode = layer.feature.properties.code;
                        var areaGeometry = layer.feature.geometry;
                        inMarkers = getNumItems(areaName);
                        var areaNum = inMarkers.length;
 

                        // Delegate all event handling for the container itself and its contents to the container
                        container.on('click', '.smallPolygonLink', function() {
                          enterPopup = areaName;
                          var myevent = layer["_events"];
                          var myclick = layer["_events"]["click"][0];
                          myclick["fn"]();
                        layer.unbindPopup();
                        });

                        container.html(dataPopUp);
                        function dataPopUp() {
                          if (baseMapsName === "départements") var banColor = '#FFDF04';
                          else var banColor = '#91F3C8';
                          var popupContent = $("<div></div>");
                          var popupBody = $("<div class='popBody'></div>");
                          popupContent.append(popupBody);
                          popupBody.append("<div class='popLieux' style='background-color:" + banColor + "'>" + areaName + "</div>");
                          //var popupLegend = $('#contentLegend span');
                          //var popupLegend = $('span.legendTitle');
                          var popupLegend = $('#menuLegend option:selected');
                          if (popupLegend.length > 0) {
                            popupLegend = popupLegend.text();
                            if(popupLegend === '') popupLegend='Établissements'
                            //popupLegend = popupLegend.substring(popupLegend.indexOf(' ') + 1);
                            popupLegend = popupLegend.toLowerCase();
                            switch (areaNum) {
                              case 0:
                                popupLegend = toSingular(popupLegend);
                                popupLegend = "<div class='popItem'><span class='popTitle'>Aucun " + popupLegend + " concern&#232;</span><br></div>"
                                break;
                              case 1:
                                popupLegend = toSingular(popupLegend);
                                popupLegend = "<div class='popItem'><span class='popTitle'>Un " + popupLegend + " concern&#232;</span><br></div>"
                                break;
                              default:
                                if (isFirstCons(popupLegend)) {
                                  popupLegend = "<div class='popItem'><span class='popTitle'>Nombre de " + popupLegend + " concern&#232;s</span><br><span class='popNum'>" + areaNum + "</span><br><span class='popNote'><a href='#infoMap-wrapper' class='smallPolygonLink'>clickez pour plus de détails</a></span></div>"
                                }
                                else {
                                  popupLegend = "<div class='popItem'><span class='popTitle'>Nombre d&#39;" + popupLegend + " concern&#232;s</span><br><span class='popNum'>" + areaNum + "</span><br><span class='popNote'><a href='#infoMap-wrapper' class='smallPolygonLink'>clickez pour plus de détails</a></span></div>"
                                }
                            };
                          }
                          else popupLegend = '';
                          popupBody.append(popupLegend);                          
                          return popupContent.html();
                        } 
                                               
                        function toSingular(popupLegend) {
                          popupLegend = popupLegend.replace("s ", " ");
                          if(popupLegend.endsWith("s")) popupLegend = popupLegend.slice(0, -1);
                          return popupLegend;
                        }
                        function isFirstCons(popupLegend){
                          var cons = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"]
                          for( var i in cons) {
                            if(popupLegend.startsWith(cons[i])) return true;
                          }
                          return false;
                        }
                        
                        // Insert whatever you want into the container, using whichever approach you prefer
                        //container.html(dataPopUp);
                        //var areaDataPopUp = container[0];

                        /*var fillColor = thisColor(areaNum);
                        layer.setStyle({
                          fillColor: fillColor,
                          //fillColor: getColor,
                          fillOpacity: 1,
                          color: colorStyle,
                          weight: 1,
                          opacity: .5
                        });*/

                      }
    
                      if ("ontouchstart" in document.documentElement) {
                        layer.on({
                          click: touchLayer,
                        });
                      }
                      else {
                        layer.on({
                          click: clickLayer,
                          //mouseover: enterLayer,
                          //mouseout: leaveLayer,
                         });
                      }

                      map.on('overlayadd', function(eventLayer) {
                        addingOverlay(eventLayer);
                      });
                      map.on('overlayremove', function(eventLayer) {
                        removingOverlay(eventLayer);
                      });
                      map.on('baselayerchange', function(eventLayer) {
                        changingOverlay(eventLayer);
                      });

                      function addingOverlay(eventLayer) {
                        //console.log('in loadMapTopoJSON adding : ' + eventLayer.name);
                        for (var k = 0; k < objectOverlays["overlays"].length; k++) {
                          if (objectOverlays["overlays"][k].title == eventLayer.name) {
                            objectOverlays["overlays"][k].isVisible = true;
                          };
                        };
                        handleLayer_maj(layer);
                        if (layer.options.fillOpacity == 0) refreshMarkers(refreshIndexEvent);
                      }

                      function removingOverlay(eventLayer) {
                        //console.log('in loadMapTopoJSON removing : ' + eventLayer.name);
                        for (var k = 0; k < objectOverlays["overlays"].length; k++) {
                          if (objectOverlays["overlays"][k].title == eventLayer.name) {
                            objectOverlays["overlays"][k].isVisible = false;
                          };
                        };
                        handleLayer_maj(layer);
                        if (layer.options.fillOpacity == 0) refreshMarkers(refreshIndexEvent);
                      }

                      function changingOverlay(eventLayer) {
                        //console.log('in loadMapTopoJSON adding : ' + eventLayer.name);
                        handleLayer_maj(layer);
                        if (layer.options.fillOpacity == 0) refreshMarkers(refreshIndexEvent);
                      }
                      
                      function touchLayer() {

                        //clickLayer()
                        this.bindPopup(areaPopup, {
                          setLatLng: areaBounds.getCenter(),
                          sticky: true,
                          maxHeight: 160,
                          maxWidth: 400,
                          minWidth: 250
                        }).openPopup();
                        this.getPopup().on('remove', function() {});
                      }

                      //function enterLayer() {}

                      function clickLayer() {
                        if (typeof onSetDefaultMapView !== 'undefined') onSetDefaultMapView();
                        if (enterPopup != areaName) {
                          //areaNum = getNumItems();
                          // Insert whatever you want into the container, using whichever approach you prefer
                          this.bindPopup(container[0]).openPopup();
                          var areaPopup = this.getPopup();
                          areaPopup.setLatLng(areaBounds.getCenter());
                          return;
                        }
                        map.closePopup();
                        refreshIndexEvent = inMarkers;
                        refreshMarkers(refreshIndexEvent);
                        layer.setStyle({
                          fillOpacity: 0
                        });
                        areaBindPopup = this['unbindPopup'];
                        if (typeof areaBindPopup !== 'undefined') {
                          this.unbindPopup();
                        }
                        enterPopup = 0;
                        option["map"].fitBounds(areaBounds, {
                          padding: [100, 100]
                        });
                        var _this = layer;
                        onSetDefaultMapView = function() {
                          //_this.getPopup().remove();
                          _this.setStyle({
                            fillOpacity: 1
                          });
                          //removeAreaMarkers();
                          refreshMarkers([]);
                        }
                      }

                      function leaveLayer() {
                        console.log('TEST leave layer');
                      }
                    }

                    function getNumItems(areaName) {
                      var inMarkers = [];
                      if (typeof areaNumItems !== 'undefined') {
                        if (typeof areaNumItems[areaName] !== 'undefined') {
                          for (var idx = 0; idx < areaNumItems[areaName].length; idx++) {
                            if (indexEvent[areaNumItems[areaName][idx]]["selected"]) inMarkers.push(areaNumItems[areaName][idx]);
                          }
                        }
                      }
                      else {
                        for (var idx = 0; idx < option["data"].length; idx++) {
                          if (indexEvent[idx]["selected"] && inside([option["data"][idx].lng, option["data"][idx].lat], areaGeometry)) {
                            inMarkers.push(idx);
                            d += 1;
                          }
                        }
                      }
                      return inMarkers;

                      function inside(point, TopoGeom) {
                        var insideVal = false;
                        if (TopoGeom["type"] == "MultiPolygon") {
                          for (var i = 0; i < TopoGeom["coordinates"].length; i++) {
                            var polygon = TopoGeom["coordinates"][i][0];
                            // Le point est-il dans le polygone
                            if (isInsidePolygon(point, polygon)) {
                              insideVal = true;
                              for (var j = 1; j < TopoGeom["coordinates"][i].length; j++) {
                                var polygon = TopoGeom["coordinates"][i][j];
                                // Le point est-il dans l'un des trous du polygone
                                if (isInsidePolygon(point, polygon)) {
                                  insideVal = false;
                                }
                              }
                            }
                          }
                        }
                        else {
                          var polygon = TopoGeom["coordinates"][0];
                          // Le point est-il dans le polygone
                          if (isInsidePolygon(point, polygon)) {
                            insideVal = true;
                            for (var j = 1; j < TopoGeom["coordinates"].length; j++) {
                              var polygon = TopoGeom["coordinates"][j];
                              // Le point est-il dans l'un des trous du polygone
                              if (isInsidePolygon(point, polygon)) {
                                insideVal = false;
                              }
                            }
                          }
                        }

                        return insideVal;
                        // ray-casting algorithm based on
                        // https://github.com/substack/point-in-polygon/blob/master/index.js

                        function isInsidePolygon(point, vs) {
                          var x = point[0],
                            y = point[1];

                          var inside = false;
                          for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
                            var xi = vs[i][0],
                              yi = vs[i][1];
                            var xj = vs[j][0],
                              yj = vs[j][1];

                            var intersect = ((yi > y) != (yj > y)) &&
                              (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
                            if (intersect) inside = !inside;
                          }

                          return inside;

                        }
                      }
                    }

                    option["baseMaps"][baseMapsName] = topoLayer;
                    if (typeof option["callback"] == 'undefined') {
                      if (option["typMap"] == "builDepts") {
                        if (typeof option["map"] !== 'undefined') option["baseMaps"]['départements'].addTo(option["map"]);
                      }
                      else {
                        if (typeof option["map"] !== 'undefined') option["baseMaps"]['régions'].addTo(option["map"]);
                      }
                    }
                    else option["callback"](option);

                  }
                )
                /*.catch(function() {
                                console.log('Oh no, epic failure!');
                              });*/
              };
            };
          };

          var searchControl = L.esri.Geocoding.geosearch().addTo(map);

          var results = L.layerGroup().addTo(map);

          var redIcon = new L.Icon({
            iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [13, 20],
            iconAnchor: [6, 20],
            popupAnchor: [1, -17],
            shadowSize: [20, 20]
          });
          searchControl.on('results', function(data) {
            results.clearLayers();
            for (var i = data.results.length - 1; i >= 0; i--) {
              results.addLayer(L.marker(data.results[i].latlng, {
                icon: redIcon
              }));
            }
          });

          return map;
          // Constructeur de la carte LeafLet
          function loadMap(idMap) {
            L.map(idMap).remove();
            var map = L.map(idMap);
            switch (options.fondCarte) {
              case 'IGN':
                loadIGN();

                function loadIGN() {
                  var layer = L.tileLayer('https://wxs.ign.fr/{ignApiKey}/geoportail/wmts?' +
                    '&REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&TILEMATRIXSET=PM' +
                    '&LAYER={ignLayer}&STYLE={style}&FORMAT={format}' +
                    '&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}', {
                      ignApiKey: 'decouverte',
                      ignLayer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2',
                      style: 'normal',
                      format: 'image/png',
                      service: 'WMTS',
                      opacity: 1.
                    });
                  layer.addTo(map);
                };                
                break;
              case 'mapbox':
                loadMapbox();

                function loadMapbox() {
                  // Usage:  Load different file types with one callback
                  Promise.all([
                    // Début ressources utilisées pour construire la carte MapBox
                    load.js('https://api.mapbox.com/mapbox-gl-js/v2.0.1/mapbox-gl.js'),
                    load.css('https://api.mapbox.com/mapbox-gl-js/v2.0.1/mapbox-gl.css'),
                    load.js('https://unpkg.com/mapbox-gl-leaflet/leaflet-mapbox-gl.js'),
                    // Fin ressources utilisées pour construire la carte mondiale colorée MapBox

                  ]).then(
                    function() {
                      console.log('Everything has loaded!');

                      var mapboxAccessToken = 'pk.eyJ1IjoicGhpbHF1YW5kIiwiYSI6ImNraTRyZ2d0ZTBzamEycXN5dzcybW00OHQifQ.wAs5l5LUQbq7lcSBNwHOLA';

                      /*
                      // Downsample tiles for faster load times on slow internet connections by
                      // adjusting the format property in styleLayer. See
                      // https://docs.mapbox.com/api/maps/#static-tiles for all format options.
                      L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11', {
                        tileLayer: {
                          format: 'jpg70'
                        }
                      }).addTo(map);
                      */
                      var layer = L.mapboxGL({
                        accessToken: mapboxAccessToken,
                        // get your own MapTiler token at https://cloud.maptiler.com/ or use MapBox style
                        //style: 'https://api.maptiler.com/maps/basic/style.json?key=gbetYLSD5vR8MdtZ88AQ'
                        style: 'mapbox://styles/mapbox/streets-v11',
                      });
                      layer.addTo(map);
                    }).catch(function() {
                    console.log('Oh no, epic failure!');
                  });
                };
                break;
              default:
                var layer = new L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                  attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                })
                layer.addTo(map);
            }

            map.addControl(new L.Control.Fullscreen({
              title: {
                'false': 'Voir en plein écran',
                'true': 'Quitter le plein écran'
              }
            }));

            // `fullscreenchange` Event that's fired when entering or exiting fullscreen.
            map.on('fullscreenchange', function() {
              if (map.isFullscreen()) {
                map.setZoom(7);
              }
              else {
                setDefaultMapView();
              }
            });
            
            map.createPane('labels');

            // This pane is above markers but below popups
            map.getPane('labels').style.zIndex = 650;

            // Layers in this pane are non-interactive and do not obscure mouse/touch events
            map.getPane('labels').style.pointerEvents = 'none';


            return map;

          };

          function zoomRemove(map) {
            //remove zoom functions
            map.removeControl(map.zoomControl);
            map.touchZoom.disable();
            map.doubleClickZoom.disable();
            map.scrollWheelZoom.disable();
            map.boxZoom.disable();
            map.keyboard.disable();
          }

        }

        function endMarkerBuild(indexEvent) {
          /*for (i = 0; i < indexEvent.length; i++) {
            for (k = 0; k < iconMarkersLength; k++) {
              if (indexEvent[i].iconMarker.class == iconMarkers[k].class) {
                iconMarkers[k].nbMapEvents++;
              }
            }
            marker = makePopUp(indexEvent[i], setCallBack);
            markers.addLayer(marker);
          }*/

          Promise.all([
            //  chargements des dépendances css
            load.css('https://cdn.jsdelivr.net/npm/leaflet-easybutton@2/src/easy-button.css'),
            load.css('https://use.fontawesome.com/releases/v5.0.6/css/all.css'),
            //  chargements des dépendances js
            load.js('https://cdn.jsdelivr.net/npm/leaflet-easybutton@2/src/easy-button.js'),
            //load.js('https://philquand.github.io/Javascript/LeafLet/leaflet-button/L.Control.Button.js'),
          ]).then(
            function() {
              console.log('Everything has loaded!');

              var defaultViewButton = L.easyButton({
                states: [{
                  stateName: 'default-view', // name the state
                  icon: 'fa-home', // and define its properties
                  title: 'vue par défaut', // like its title
                  onClick: function(btn, map) { // and its callback
                    setDefaultMapView();
                  }
                }]
              });
              defaultViewButton.addTo(map);

              checkautresDepts(map, indexEvent);

              function checkautresDepts(map, indexEvent) {
                var autresDepts = [{
                    name: 'Corse',
                    bounds: L.latLngBounds([
                      [43.07, 8.39],
                      [41.29, 9.74]
                    ]),
                    hasevents: false
                  },
                  {
                    name: 'Martinique',
                    bounds: L.latLngBounds([
                      [14.905, -61.500],
                      [14.377, -60.762]
                    ]),
                    hasevents: false
                  },
                  {
                    name: 'Guadeloupe',
                    bounds: L.latLngBounds([
                      [16.5572, -61.971],
                      [15.7881, -60.946]
                    ]),
                    hasevents: false
                  },
                  {
                    name: 'Guyane',
                    bounds: L.latLngBounds([
                      [6.16, -55.08],
                      [1.88, -51.16]
                    ]),
                    hasevents: false
                  },
                  {
                    name: 'LaRéunion',
                    bounds: L.latLngBounds([
                      [-19.6496, 54.5825],
                      [-21.6107, 58.1036]
                    ]),
                    hasevents: false
                  },
                  {
                    name: 'Hexagone',
                    bounds: L.latLngBounds([
                      [51.10, 2.47],
                      [48.37, -5.16],
                      [43.38, -1.85],
                      [42.47, 3.16],
                      [43.80, 7.96],
                      [49.03, 8.08],
                      [49.03, 8.08]
                    ]),
                    hasevents: false
                  }
                ];
                autresDepts = checkautresDeptsBounds(autresDepts, indexEvent);
                var states = [];
                for (var i = 0; i < autresDepts.length; i++) {
                  if (!autresDepts[i].hasevents) continue
                  var localState = {};
                  localState.stateName = autresDepts[i].name; // name the state
                  j = i;
                  do {
                    j = j + 1;
                    if (j == autresDepts.length) j = 0;
                  }
                  while (!autresDepts[j].hasevents);
                  localState.nextStateName = autresDepts[j].name; // name of the next state
                  localState.icon = 'fa-plane'; // and define its properties
                  switch (autresDepts[i].name) {
                    case 'Corse':
                      localState.title = 'vol vers la Corse'; // like its title
                      localState.onClick = function(btn, map) { // and its callback
                        map.flyTo({
                          lat: 42.19,
                          lng: 9.08
                        }, 6);
                        for (var j = 0; j < btn.options.states.length; j++) {
                          if (btn._currentState.stateName == btn.options.states[j].stateName) {
                            btn.state(btn.options.states[j].nextStateName); // change state on click!
                            break;
                          }
                        }
                      };
                      break;
                    case 'Martinique':
                      localState.title = 'vol vers la Martinique'; // like its title
                      localState.onClick = function(btn, map) { // and its callback
                        map.flyTo({
                          lat: 14.7297,
                          lng: -60.9655
                        }, 6);
                        for (var j = 0; j < btn.options.states.length; j++) {
                          if (btn._currentState.stateName == btn.options.states[j].stateName) {
                            btn.state(btn.options.states[j].nextStateName); // change state on click!
                            break;
                          }
                        }
                      };
                      break;
                    case 'Guadeloupe':
                      localState.title = 'vol vers la Guadeloupe'; // like its title
                      localState.onClick = function(btn, map) { // and its callback
                        map.flyTo({
                          lat: 16.228,
                          lng: -61.526
                        }, 6);
                        for (var j = 0; j < btn.options.states.length; j++) {
                          if (btn._currentState.stateName == btn.options.states[j].stateName) {
                            btn.state(btn.options.states[j].nextStateName); // change state on click!
                            break;
                          }
                        }
                      };
                      break;
                    case 'Guyane':
                      localState.title = 'vol vers la Guyane'; // like its title
                      localState.onClick = function(btn, map) { // and its callback
                        map.flyTo({
                          lat: 3.945,
                          lng: -53.13
                        }, 6);
                        for (var j = 0; j < btn.options.states.length; j++) {
                          if (btn._currentState.stateName == btn.options.states[j].stateName) {
                            btn.state(btn.options.states[j].nextStateName); // change state on click!
                            break;
                          }
                        }
                      };
                      break;
                    case 'LaRéunion':
                      localState.title = 'vol vers la Réunion'; // like its title
                      localState.onClick = function(btn, map) { // and its callback
                        map.flyTo({
                          lat: -20.887,
                          lng: 55.455
                        }, 6);
                        for (var j = 0; j < btn.options.states.length; j++) {
                          if (btn._currentState.stateName == btn.options.states[j].stateName) {
                            btn.state(btn.options.states[j].nextStateName); // change state on click!
                            break;
                          }
                        }
                      };
                      break;
                    default:
                      localState.title = "retour vers l'Hexagone"; // like its title
                      localState.bounds = autresDepts[i].bounds;
                      localState.onClick = function(btn, map) { // and its callback
                        for (var j = 0; j < btn.options.states.length; j++) {
                          if (btn._currentState.stateName == btn.options.states[j].stateName) {
                            btn.state(btn.options.states[j].nextStateName); // change state on click!
                            map.flyToBounds(btn.options.states[j].bounds);
                            break;
                          }
                        }
                      };
                  }
                  states.push(localState);
                }
                if (states.length > 1) {
                  stateChangingButton = L.easyButton({
                    states: states
                    /*[{
                            stateName: 'zoom-to-forest',        // name the state
                            icon:      'fa-plane',               // and define its properties
                            title:     'zoom to a forest',      // like its title
                            onClick: function(btn, map) {       // and its callback
                                map.setView([46.25,-121.8],10);
                                btn.state('zoom-to-school');    // change state on click!
                            }
                        }, {
                            stateName: 'zoom-to-school',
                            icon:      'fa-paper-plane',
                            title:     'zoom to a school',
                            onClick: function(btn, map) {
                                map.setView([42.3748204,-71.1161913],16);
                                btn.state('zoom-to-forest');
                            }
                    }]*/
                  });

                  stateChangingButton.addTo(map);
                }

                function checkautresDeptsBounds(autresDepts, indexEvent) {
                  for (i = 0; i < indexEvent.length; i++) {
                    for (k = 0; k < autresDepts.length; k++) {
                      if (autresDepts[k].bounds.contains(indexEvent[i])) {
                        autresDepts[k].hasevents = true;
                      }
                    }
                  }
                  return autresDepts;
                };

              };


            }
          ).catch(function() {
            console.log('Oh no, epic failure!');
          });
        };

        var map_invalidateSize = function() {
          map.invalidateSize();
          $('.leaflet-control-layers-overlays .leaflet-control-layers-selector').trigger('click')
          $('.leaflet-control-layers-overlays .leaflet-control-layers-selector').trigger('click')
        }
        $('.leaflet-control-zoom').wrap('<div class="topLeftControls"></div>');
        $('.geocoder-control.leaflet-control').appendTo($('.topLeftControls'));
        return map_invalidateSize
      }

      var runButtonForTable = function() {
        if (typeof options.popupData.properties !== 'undefined' || typeof options.tableData !== 'undefined') {
          var btData = $('<button type="button" class="styled" id="btData"></button>')
          $("#infoMap-wrapper").prepend(btData);
          btData.click(function(e) {
            if ($('#btData').html() == 'Carte') {
              btDataCarte(map_invalidateSize);
            }
            else {
              btDataTable();
            }
          });
          btDataCarte(map_invalidateSize);

          function btDataTable() {
            $('#btData').html('Carte');
            //$('#infoMap-wrapper > :not(#btData)').css('display', 'none')
            $('#infoMap-wrapper > #infoMap').css('display', 'none')
            $('#table_wrapper').css('display', 'block')
            //if(tableFilterOn) $('.dt-button.reinitBT').css('visibility', 'visible');
            $('#star_filter').css('display', 'none');
            //$('#table').css('display', 'block')
          }

          function btDataCarte(map_invalidateSize) {
            $('#btData').html('Données');
            //$('#infoMap-wrapper > :not(#btData)').css('display', 'block')
            $('#infoMap-wrapper > #infoMap').css('display', 'block')
            map_invalidateSize();
            $('#table_wrapper').css('display', 'none')
            //$('.dt-button.reinitBT').css('visibility', 'hidden')
          }
          $('#infoMap-wrapper').prepend('<button type="button" class="styled helpBT" id="btAide">Aide</button>');
          $('#btAide').click(function(e) {
            $.fancybox.open({
              src: 'https://philquand.github.io/Javascript/Blog-widgets/Collectif%20Sant%C3%A9%2037/FermeturesHopitaux/Distributions%20v5/Doc%20version%205.06.html',
              type: 'iframe',
              //modal: true
            });
          });          
          //runTable();
        }
      };
      function runTable() {

        var tableColums = [];
        if (jQuery.type(options.tableData) !== 'undefined' && jQuery.type(options.tableData.properties) !== 'undefined') {
          var columns = [];
          var Filters = [];
          var properties = options.tableData.properties;
          for (var i = 0; i < properties.length; i++) {
            if (jQuery.type(properties[i]['name']) === 'string') {
              if (jQuery.type(properties[i]['title']) === 'string') {    
                var title = properties[i]['title'];
              } else {
                var title = properties[i]['name'];
              }
              columns.push({
                data: properties[i]['name'],
                title: title,
                defaultContent: '',
                //selectable: false
              });
              if (jQuery.type(properties[i]['filter']) !== 'undefined') {
                var item = {};
                if (properties[i]['filter'] == 'selection') {
                  item['column_number'] = i;
                  item['omit_default_label'] = true;
                  item['data'] = ["Sélectionnez"];
                  item['append_data_to_table_data'] = "before";
                  item['filter_match_mode'] = "exact";
                  item['filter_reset_button_text'] = false;
                  item['filter_type'] = 'custom_func';
                  item['custom_func'] = (filterVal, columnVal, rowValues, stateVal) => {
                    /*if(filterVal !== "Sélectionnez" || columnVal === "-1") {
                      console.log('test...');
                    }*/
                    if (columnVal === filterVal || "Sélectionnez" === filterVal) {
                      var myFilter = true;
                    }
                    else {
                      var myFilter = false;
                    };
                    for (var i = 0; i < indexEventTable.length; i++) {
                      if (indexEventTable[i]["id"] === stateVal["id"]) {
                        indexEventTable[i]["selected"] = myFilter;
                        consol = true;
                        $('.dt-button.reinitBT').css('visibility', 'visible');
                        tableFilterOn = true;
                      }
                    }
                    return myFilter;
                  };
                }
                else if (jQuery.isNumeric(properties[i]['filter']) && jQuery.isArray(options.tableData['filters']) && (properties[i]['filter'] < options.tableData['filters'].length)) {
                  if (jQuery.isFunction(options.tableData['filters'][properties[i]['filter']]['func']) && jQuery.isArray(options.tableData['filters'][properties[i]['filter']]['data'])) {
                    item['column_number'] = i;
                    item['filter_reset_button_text'] = false;
                    item['filter_type'] = 'custom_func';
                    Filters[properties[i]['filter']] = options.tableData['filters'][properties[i]['filter']];
                    item['custom_func'] = (filterVal, columnVal, rowValues, stateVal) => {
                    var myFilter = Filters[parseInt(filterVal.split(":")[0])]['func'];
                    if(myFilter(filterVal, columnVal, rowValues, stateVal)) {
                      var myFilterValue = myFilter(filterVal, columnVal, rowValues, stateVal);
                    } else {
                      var myFilterValue = myFilter(filterVal, columnVal, rowValues, stateVal);
                    }
                    for (var i = 0; i < indexEventTable.length; i++) {
                      if (indexEventTable[i]["id"] === stateVal["id"]) {
                        indexEventTable[i]["selected"] = myFilterValue;
                        tableFilterOn = true;
                        $('.dt-button.reinitBT').css('display', 'block')
                        tableFilterOn = true;
                      }
                    }
                    return myFilterValue;
                    };
                    item['data'] = options.tableData['filters'][properties[i]['filter']]['data'];
                  }
                } else {
                    item['column_number'] = i;
                    item['select_type'] = "chosen";
                }
                if (jQuery.type(item) !== 'undefined') {
                  item['defaultContent'] = '';
                  tableColums.push(item);
                }
              };
            }
          };
        }
        else {
          var item = options.popupData.title;
          if (typeof item === 'undefined') {
            var columns = [];
          }
          else {
            var columns = [{
              data: item,
              title: item,
              defaultContent: '',
              //selectable: true
            }];
          }
          for (i = 0; i < options.popupData.properties.length; i++) {
            var item = options.popupData.properties[i];
            columns.push({
              data: item,
              title: item,
              defaultContent: '',
              //selectable: false
            });
          }
        }
        var initComplete = function() {
          //New datatable API (capital "D")
          var myTable = $(this).DataTable();
          yadcf.init(myTable, tableColums);
          //$("#table_length label select").appendTo("#table_length label");
          $("#table_length label select").appendTo("#table_length");
          $("#table_length label").text("Nb. d'éléments affichés");
          if(tableFilterOn) $('.dt-button.reinitBT').css('visibility', 'visible');
          else $('.dt-button.reinitBT').css('visibility', 'hidden');
          $('.dt-button.helpBT').css('display', 'none');
        }
        tableFilterOn = false;
        $('#table').DataTable({
          destroy: true,
          data: indexEventTable,
          "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.22/i18n/French.json"
          },
          columns: columns,
          initComplete: initComplete,
          dom: 'Blfrtip',
          buttons: [{
              text: 'aide',
              className: 'helpBT',
              action: function(e, dt, node, config) {
                // voir https://obu.edu/_resources/ldp/galleries/fancybox/#usage                   
                //$.fancybox.open('<div class="message"><h2>Hello!</h2><p>You are awesome!</p></div>');
                /*$.fancybox.open({
                  src: '<div class="message"><h2>Lorem ipsum</h2><p>Praesent ut sapien ultricies, lobortis lorem a, viverra odio. Cras dapibus, tellus sed volutpat dignissim, mi augue finibus libero, sit amet sollicitudin arcu velit id diam. Aliquam placerat, dui a ultrices malesuada, libero tortor varius felis, ultrices fermentum arcu mauris in odio. Cras fermentum justo ac tortor bibendum molestie.</p></div>',
                  type: 'html',
                  smallBtn: false
                });*/              
                /*$.fancybox.open({
                  src: '<div class="message"><h2>Lorem ipsum</h2><p>Praesent ut sapien ultricies, lobortis lorem a, viverra odio. Cras dapibus, tellus sed volutpat dignissim, mi augue finibus libero, sit amet sollicitudin arcu velit id diam. Aliquam placerat, dui a ultrices malesuada, libero tortor varius felis, ultrices fermentum arcu mauris in odio. Cras fermentum justo ac tortor bibendum molestie.</p><p><button data-fancybox-close class="btn">Close me</button></p></div>',
                  type: 'html',
                  modal: true
                });*/              
                $.fancybox.open({
                  src: '<div class="message"><h2>Lorem ipsum</h2><p>Praesent ut sapien ultricies, lobortis lorem a, viverra odio. Cras dapibus, tellus sed volutpat dignissim, mi augue finibus libero, sit amet sollicitudin arcu velit id diam. Aliquam placerat, dui a ultrices malesuada, libero tortor varius felis, ultrices fermentum arcu mauris in odio. Cras fermentum justo ac tortor bibendum molestie.</p><p><button data-fancybox-close class="btn">Close me</button></p></div>',
                  type: 'html',
                  modal: true
                });              
              }
            },
            {
              extend: 'csv',
              //Name the CSV
              filename: 'file_name',
              //text: 'Export CSV',
              className: 'csvBT',
              //Function which customize the CSV (input : csv is the object that you can preprocesss)
              customize: function(csv) {
                //Split the csv to get the rows
                var split_csv = csv.split("\n");

                //Remove the row one to personnalize the headers
                //split_csv[0] = '"Latitude","Longitude","Site Name","Description","Antenna Height","Antenna gain","Env loss","Candidate"';
                split_csv[0] = ''
                for (var i = 0; i < properties.length; i++) {
                  if (jQuery.type(properties[i]['name']) === 'string') {
                    if (jQuery.type(properties[i]['title']) === 'string') {
                      var title = properties[i]['title'];
                    }
                    else {
                      var title = properties[i]['name'];
                    }
                  }
                  if (i == 0) split_csv[0] += '"' + title + '"'
                  else split_csv[0] += ',"' + title + '"'
                }

                //For each row except the first one (header)
                $.each(split_csv.slice(1), function(index, csv_row) {
                  //Split on quotes and comma to get each cell
                  var csv_cell_array = csv_row.split('","');

                  //Join the table on the quotes and comma; add back the quotes at the beginning and end
                  csv_cell_array_quotes = csv_cell_array.join('","');

                  //Insert the new row into the rows array at the previous index (index +1 because the header was sliced)
                  split_csv[index + 1] = csv_cell_array_quotes;
                });

                //Join the rows with line breck and return the final csv (datatables will take the returned csv and process it)
                csv = split_csv.join("\n");
                return csv;
              }
            },
            {
              text: 'réinit.',
              className: 'reinitBT',
              action: function(e, dt, node, config) {

                for (var i = 0; i < indexEventTable.length; i++) {
                  if (jQuery.type(options.legend) !== 'undefined' && jQuery.type(options['legend'][menuLegend].filter) !== 'undefined' && jQuery.type(options['legend'][menuLegend].filter.func) !== 'undefined') {
                    if (options['legend'][menuLegend].filter.func(indexEventTable[i])) {
                      indexEventTable[i]["selected"] = true;
                    }
                    else {
                      indexEventTable[i]["selected"] = false;
                    }
                  }
                  else {
                    indexEventTable[i]["selected"] = true;
                  }
                }
                yadcf.exResetAllFilters(dt);
                for (var i = 0; i < properties.length; i++) {
                  if (jQuery.type(properties[i]['filter']) !== 'undefined') {
                    if (properties[i]['filter'] == 'selection') {
                      yadcf.exFilterColumn(dt, [
                        [i, "Sélectionnez"]
                      ]);
                    }
                  }
                }
                tableFilterOn = false;
                $('.dt-button.reinitBT').css('visibility', 'hidden');
              }
            },
          ],
        });
      };
    };
  }
};
})(jQuery);