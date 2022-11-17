(function($) {
$.fn.mapAllBlogs = function() {

  var isOKNumber = data => {
  if (jQuery.type(data) === 'number' && data != '') return true;
  else return false;
}

  var optionsPlugIn = {
    data: {
        base: {"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[5.67952982312945,45.748718161587014]},"properties":{"id":808,"code_region":"ARA","departement":"01","nom_hopital":"CH Belley Sud","ghi_nom":"","ght_nom":"GHT Savoie Belley","département":"Ain","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.60776643775138,46.14959331995529]},"properties":{"id":154,"code_region":"ARA","departement":"01","nom_hopital":"CHHB Nantua - 01","menaces":"chirurgie réduit (autre)","ghi_nom":"CHHB","ght_nom":"GHT Bresse-Haut-Bugey","département":"Ain","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.63026331010727,46.25972343234579]},"properties":{"id":779,"code_region":"ARA","departement":"01","nom_hopital":"CHHB Oyonnax - 01","menaces":"2015 : maternité réduit (autre)","ghi_nom":"CHHB","ght_nom":"GHT Bresse-Haut-Bugey","département":"Ain","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.771431328118964,45.9409318292089]},"properties":{"id":810,"code_region":"ARA","departement":"01","nom_hopital":"CH Monpensier Trévoux - 01","suppressions":"1975 : maternité fermé","ghi_nom":"","ght_nom":"GHT Rhône Nord Beaujolais Dombes","département":"Ain","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.61099148984135,45.97535717198319]},"properties":{"id":23,"code_region":"ARA","departement":"01","nom_hopital":"CHPH Hauteville-Lompnes - 01","ghi_nom":"CHPH","ght_nom":"","département":"Ain","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.68492131544429,45.76311108022951]},"properties":{"id":155,"code_region":"ARA","departement":"01","nom_hopital":"CH-Récamier - Belley - 01","menaces":"2009 : chirurgie menacé;2009 : médecine menacé;2008 : soins continus interrompu","ghi_nom":"","ght_nom":"GHT Savoie Belley","département":"Ain","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.19414832811897,45.90637655731327]},"properties":{"id":778,"code_region":"ARA","departement":"01","nom_hopital":"CH Ruivet Meximieux - 01","ghi_nom":"","ght_nom":"GHT Bresse-Haut-Bugey","département":"Ain","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.11446047721856,46.39913722478449]},"properties":{"id":784,"code_region":"ARA","departement":"03","nom_hopital":"CHCDB Tronget - 03","menaces":"2013 : addictologie réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Allier","département":"Allier","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.43617082033947,46.1232191917086]},"properties":{"id":1,"code_region":"ARA","departement":"03","nom_hopital":"CH Jacques Lacarin Vichy - 03","menaces":"2021 : pédopsychiatrie interrompu;2019 : psychiatrie infanto-juvénile menacé","ghi_nom":"","ght_nom":"GHT Allier","département":"Allier","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.60940656246168,46.341919026179184]},"properties":{"id":347,"code_region":"ARA","departement":"03","nom_hopital":"CH Montluçon - 03","suppressions":"2021 : centre de santé fermé;2010 : ophtalmologie privatisé;chirurgie ophtalmologique fermé","menaces":"2022 : pédiatrie menacé;2022 : urgences menacé;2021 : pôle mère-enfant menacé;2019 : SMUR menacé;2016 : psychiatrie menacé;2015 : médecine réduit (lits fermés);chirurgie menacé;maternité fusionné;psychiatrie réduit (autre)","ghi_nom":"","ght_nom":"GHT Allier","département":"Allier","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.661597402492387,46.28545751714661]},"properties":{"id":781,"code_region":"ARA","departement":"03","nom_hopital":"CH Montluçon-Néris-les-Bains - 03","ghi_nom":"","ght_nom":"GHT Allier","département":"Allier","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.32636008470221,46.57103623695658]},"properties":{"id":782,"code_region":"ARA","departement":"03","nom_hopital":"CHMY Yzeure - 03","ghi_nom":"CHMY","ght_nom":"GHT Allier","département":"Allier","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.34796187418612,46.57829541649911]},"properties":{"id":783,"code_region":"ARA","departement":"03","nom_hopital":"CHS Yzeure - 03","menaces":"2016 : psychiatrie réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Allier","département":"Allier","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.39741654936648,44.6129376208009]},"properties":{"id":141,"code_region":"ARA","departement":"07","nom_hopital":"CHAM Aubenas - 07","suppressions":"2021 : gastro-entérologie fermé;2018 : IVG fermé;1998 : ophtalmologie fermé","menaces":"2018 : pédiatrie interrompu;2016 : néonatalogie menacé;2010 : addictologie réduit (autre);2008 : réanimation transformé","victoires":"2012 : ophtalmologie réouvert;2008 : soins de suite maintenu;2006 : néonatalogie maintenu;2005 : urgences maintenu","ghi_nom":"CHAM – CH Ardèche Méridionale","ght_nom":"GHT Sud Drôme Ardèche","département":"Ardèche","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.23918014469536,44.47868893859738]},"properties":{"id":415,"code_region":"ARA","departement":"07","nom_hopital":"CHCA Joyeuse - 07","menaces":"2020 : soins de suite et rééducation interrompu","victoires":"2021 : soins de suite et rééducation réouvert","ghi_nom":"CHCA","ght_nom":"GHT Sud Drôme Ardèche","département":"Ardèche","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.140116804040805,44.413600034509614]},"properties":{"id":755,"code_region":"ARA","departement":"07","nom_hopital":"CHCA Léopold Ollier Chambonas - 07","ghi_nom":"CHCA","ght_nom":"","département":"Ardèche","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.866010759081998,45.06252907586696]},"properties":{"id":600,"code_region":"ARA","departement":"07","nom_hopital":"CH Tournon-sur-Rhône - 07","suppressions":"2021 : IRM privatisé","ghi_nom":"","ght_nom":"GHT Rhône Vercors Vivarais","département":"Drôme","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.58348292285915,44.73036247942189]},"properties":{"id":140,"code_region":"ARA","departement":"07","nom_hopital":"CHVA Privas - 07","suppressions":"2022 : buanderie fermé;2019 : maternité fermé;2018 : addictologie fermé","victoires":"maternité maintenu","ghi_nom":"CH Vals d'Ardèche","ght_nom":"GHT Sud Drôme Ardèche","département":"Ardèche","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.6694478048364,45.26091274677238]},"properties":{"id":806,"code_region":"ARA","departement":"07","nom_hopital":"Clinique des Cévennes Annonay - 07","ghi_nom":"","ght_nom":"","département":"Ardèche","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.390555162043961,44.61167761785017]},"properties":{"id":787,"code_region":"ARA","departement":"07","nom_hopital":"Clinique du Vivarais Aubenas - 07","suppressions":"1998 : maternité fermé","ghi_nom":"","ght_nom":"","département":"Ardèche","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.86285491491442,44.93571479285859]},"properties":{"id":139,"code_region":"ARA","departement":"07","nom_hopital":"CMP P.C. Racamier Guilhérand-Granges - 07","ghi_nom":"","ght_nom":"","département":"Ardèche","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.646820678863893,44.37544513182116]},"properties":{"id":791,"code_region":"ARA","departement":"07","nom_hopital":"HLIBSAV Bourg-Saint-Andéol - 07","ghi_nom":"","ght_nom":"GHT Sud Drôme Ardèche","département":"Ardèche","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.689208741897364,44.48493390230167]},"properties":{"id":790,"code_region":"ARA","departement":"07","nom_hopital":"HLIBSAV Viviers - 07","ghi_nom":"","ght_nom":"GHT Sud Drôme Ardèche","département":"Ardèche","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.291377227935545,44.542894966585]},"properties":{"id":788,"code_region":"ARA","departement":"07","nom_hopital":"HLIRL Largentière - 07","ghi_nom":"HLIRL","ght_nom":"GHT Sud Drôme Ardèche","département":"Ardèche","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.284589011174985,44.575471960026675]},"properties":{"id":789,"code_region":"ARA","departement":"07","nom_hopital":"HLIRL Rocher - 07","ghi_nom":"HLIRL","ght_nom":"GHT Sud Drôme Ardèche","département":"Ardèche","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.882525970585688,44.93448454835044]},"properties":{"id":906,"code_region":"ARA","departement":"07","nom_hopital":"HPDA Guilhérand-Granges - 07","menaces":"2022 : maternité privée interrompu;2022 : urgences interrompu","ghi_nom":"","ght_nom":"","département":"Ardèche","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.221113210340884,44.674505983621636]},"properties":{"id":898,"code_region":"ARA","departement":"07","nom_hopital":"La Condamine Thueyts - 07","ghi_nom":"","ght_nom":"","département":"Ardèche","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.399884409688984,45.00796031716922]},"properties":{"id":138,"code_region":"ARA","departement":"07","nom_hopital":"Saint Agrève - 07","suppressions":"2008 : maternité fermé","menaces":"2013 : médecine menacé","ghi_nom":"","ght_nom":"","département":"Ardèche","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.608324652886366,45.150790427495544]},"properties":{"id":137,"code_region":"ARA","departement":"07","nom_hopital":"Satillieu - 07","menaces":"2017 : EHPAD menacé","ghi_nom":"","ght_nom":"","département":"Ardèche","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.436069325339591,44.92637957246502]},"properties":{"id":350,"code_region":"ARA","departement":"15","nom_hopital":"CH H. Mondor Aurillac - 15","menaces":"2019 : SMUR interrompu;2014 : réanimation réduit (autre);2013 : réanimation menacé","ghi_nom":"","ght_nom":"GHT du Cantal","département":"Cantal","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.33240505377828,45.21783193531531]},"properties":{"id":380,"code_region":"ARA","departement":"15","nom_hopital":"CH Mauriac - 15","suppressions":"2017 : dialyse fermé;2009 : chirurgie fermé;2007 : maternité fermé","menaces":"2017 : urgences menacé","ghi_nom":"","ght_nom":"GHT du Cantal","département":"Cantal","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.086092410641151,45.033769383954635]},"properties":{"id":793,"code_region":"ARA","departement":"15","nom_hopital":"CH Saint-Flour - 15","menaces":"2017 : psychiatrie réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT du Cantal","département":"Cantal","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.42714293373927,44.90887532045249]},"properties":{"id":792,"code_region":"ARA","departement":"15","nom_hopital":"CMC Tronquières Aurillac - 15","suppressions":"2014 : réanimation fermé","ghi_nom":"","ght_nom":"","département":"Cantal","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.00721440914185,44.7278822602485]},"properties":{"id":149,"code_region":"ARA","departement":"26","nom_hopital":"CH Crest - 26","suppressions":"2013 : chirurgie fermé;1992 : maternité fermé","ghi_nom":"","ght_nom":"GHT Rhône Vercors Vivarais","département":"Drôme","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.02002673350597,45.041748554682]},"properties":{"id":685,"code_region":"ARA","departement":"26","nom_hopital":"CHDN Romans - 26","ghi_nom":"","ght_nom":"GHT Rhône Vercors Vivarais","département":"Drôme","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.82221240924602,45.17105681735781]},"properties":{"id":146,"code_region":"ARA","departement":"26","nom_hopital":"CHDN Saint-Vallier - 26","menaces":"2021 : médecine physique et de réadaptation réduit (lits fermés);2018 : urgences interrompu;2017 : urgences de nuit réduit (autre);2014 : psychiatrie menacé","ghi_nom":"","ght_nom":"GHT Rhône Vercors Vivarais","département":"Drôme","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.9339412605845,44.85341196707499]},"properties":{"id":794,"code_region":"ARA","departement":"26","nom_hopital":"CHS Le Valmont Montéléger","ghi_nom":"","ght_nom":"GHT Rhône Vercors Vivarais","département":"Drôme","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.749224458404682,44.55610701864483]},"properties":{"id":795,"code_region":"ARA","departement":"26","nom_hopital":"CHS Le Valmont Montélimar - 26","ghi_nom":"","ght_nom":"GHT Rhône Vercors Vivarais","département":"Drôme","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.90498866601253,44.914049208704796]},"properties":{"id":147,"code_region":"ARA","departement":"26","nom_hopital":"CH Valence - 26","menaces":"2019 : urgences menacé","ghi_nom":"","ght_nom":"GHT Rhône Vercors Vivarais","département":"Drôme","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.371591776287621,44.75532255097511]},"properties":{"id":148,"code_region":"ARA","departement":"26","nom_hopital":"Die – 26","suppressions":"2017 : chirurgie fermé;2017 : maternité fermé;2008 : chirurgie de nuit fermé","menaces":"2018 : urgences de nuit menacé;2016 : chirurgie menacé;2016 : maternité menacé","victoires":"2020 : maternité victoire;2015 : chirurgie d'urgence maintenu;2015 : maternité maintenu;2009 : chirurgie de nuit réouvert","ghi_nom":"","ght_nom":"GHT Rhône Vercors Vivarais","département":"Drôme","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.06488462577222,44.52693605002453]},"properties":{"id":773,"code_region":"ARA","departement":"26","nom_hopital":"GHPP Dieulefit - 26","ghi_nom":"GHPP","ght_nom":"GHT Sud Drôme Ardèche","département":"Drôme","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.73178488444506,44.55711635392599]},"properties":{"id":772,"code_region":"ARA","departement":"26","nom_hopital":"GHPP Montélimar - 26","menaces":"2021 : bloc opératoire interrompu","ghi_nom":"GHPP","ght_nom":"GHT Sud Drôme Ardèche","département":"Drôme","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.271394369241629,44.277304849203176]},"properties":{"id":150,"code_region":"ARA","departement":"26","nom_hopital":"HL du Jonchier Buis-les-Baronnies - 26 ","suppressions":"2008 : EHPAD fermé;2008 : soins de suite et rééducation fermé","menaces":"2008 : soins de suite lourds menacé","ghi_nom":"","ght_nom":"GHT Sud Drôme Ardèche","département":"Drôme","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.79522916729026,44.90472201295138]},"properties":{"id":276,"code_region":"ARA","departement":"38","nom_hopital":"CH La Mure - 38","suppressions":"2004 : bloc opératoire fermé;2004 : chirurgie fermé;1995 : maternité fermé","menaces":"2019 : soins de suite et rééducation interrompu;2019 : urgences de nuit menacé","ghi_nom":"","ght_nom":"GHT Alpes-Dauphiné","département":"Isère","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.880694617051794,45.53360692451124]},"properties":{"id":803,"code_region":"ARA","departement":"38","nom_hopital":"CH L. Hussel Vienne - 38","menaces":"2021 : chirurgie réduit (lits fermés);2021 : médecine réduit (lits fermés);2021 : pédiatrie réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Rhône Sud-Isère","département":"Isère","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.488826669396931,45.302836714487306]},"properties":{"id":802,"code_region":"ARA","departement":"38","nom_hopital":"CH M. Perret Tullins - 38","suppressions":"1987 : chirurgie fermé","ghi_nom":"","ght_nom":"GHT Alpes-Dauphiné","département":"Isère","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.746406013680171,45.1999107179211]},"properties":{"id":565,"code_region":"ARA","departement":"38","nom_hopital":"CHUGA Nord La Tronche Grenoble - 38","menaces":"2021 : réanimation réduit (lits fermés);2021 : soins critiques réduit (lits fermés);2020 : urgences réduit (lits fermés)","ghi_nom":"CHUGA Grenoble Alpes","ght_nom":"GHT Alpes-Dauphiné","département":"Isère","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.73202598686307,45.14829601241098]},"properties":{"id":606,"code_region":"ARA","departement":"38","nom_hopital":"CHUGA Sud Échirolles Grenoble - 38","suppressions":"2003 : maternité fermé","menaces":"2021 : bloc opératoire menacé;2021 : hospitalisation filière orthopédie/traumatologie menacé;2021 : urgences menacé","victoires":"2021 : bloc opératoire maintenu","ghi_nom":"CHUGA Grenoble Alpes","ght_nom":"GHT Alpes-Dauphiné","département":"Isère","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.59406963610577,45.3688792531133]},"properties":{"id":151,"code_region":"ARA","departement":"38","nom_hopital":"CHUGA Voiron - 38","suppressions":"2021 : SMUR de nuit fermé","menaces":"2021 : SMUR interrompu;2021 : urgences interrompu","ghi_nom":"CHU Grenoble Alpes","ght_nom":"GHT Alpes-Dauphiné","département":"Isère","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.66436804286822,45.53889114616741]},"properties":{"id":313,"code_region":"ARA","departement":"38","nom_hopital":"CH Y. Touraine Pont-de-Beauvoisin - 38","suppressions":"2008 : chirurgie orthopédique fermé;2003 : maternité fermé;chirurgie viscérale fermé","menaces":"médecine menacé;radiologie menacé;réadaptation menacé;urgences menacé","ghi_nom":"","ght_nom":"GHT Nord-Dauphiné","département":"Isère","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.760286071783114,45.18640248548519]},"properties":{"id":801,"code_region":"ARA","departement":"38","nom_hopital":"Clinique Belledonne Grenoble - 38","suppressions":"2014 : chirurgie cardiaque fermé","ghi_nom":"","ght_nom":"","département":"Isère","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.44860866177838,45.570395768825406]},"properties":{"id":807,"code_region":"ARA","departement":"38","nom_hopital":"HL La-Tour-du-Pin - 38","menaces":"soins de suite et rééducation interrompu","ghi_nom":"","ght_nom":"GHT Nord-Dauphiné","département":"Isère","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.51551780555944,45.475835917762495]},"properties":{"id":162,"code_region":"ARA","departement":"42","nom_hopital":"CH du Giers Saint Chamond - 42","menaces":"2021 : urgences interrompu;2021 : urgences réduit (autre);2018 : maternité menacé;2007 : réanimation menacé","ghi_nom":"","ght_nom":"GHT de la Loire","département":"Loire","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.22155649535786,45.746076197306095]},"properties":{"id":160,"code_region":"ARA","departement":"42","nom_hopital":"CHF Feurs - 42","suppressions":"2018 : cardiologie fermé;2018 : unité de soins périnatal fermé;2017 : stérilisation sous-traité;2015 : bloc opératoire fermé;2015 : chimiothérapie fermé;2015 : chirurgie fermé;2009 : psychiatrie fermé;2007 : maternité fermé","menaces":"2022 : urgences interrompu;2021 : hospitalisation de courte durée menacé;2021 : ligne de garde menacé;2021 : urgences menacé;2018 : accueil nuit profonde menacé;2018 : SMUR menacé;2015 : biologie menacé;2015 : SMUR de nuit menacé","ghi_nom":"CHF Forez","ght_nom":"GHT de la Loire","département":"Loire","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.04963695815445,45.61338197627169]},"properties":{"id":161,"code_region":"ARA","departement":"42","nom_hopital":"CHF Montbrison - 42","suppressions":"2008 : réanimation fermé","menaces":"2019 : EHPAD menacé;2019 : maternité menacé;2019 : pédiatrie menacé;2016 : chirurgie réduit (lits fermés)","ghi_nom":"CHF Forez","ght_nom":"GHT de la Loire","département":"Loire","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.29040805922913,45.38795225873341]},"properties":{"id":163,"code_region":"ARA","departement":"42","nom_hopital":"CH Le Corbusier Firminy - 42","suppressions":"2015 : urgences de nuit fermé","ghi_nom":"","ght_nom":"GHT de la Loire","département":"Loire","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.672054164177065,45.41752747480324]},"properties":{"id":745,"code_region":"ARA","departement":"42","nom_hopital":"CHPR Pélussin - 42","ghi_nom":"CHPR","ght_nom":"GHT Val Rhône Santé","département":"Loire","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.747360031969114,45.38101219798276]},"properties":{"id":746,"code_region":"ARA","departement":"42","nom_hopital":"CHPR Saint-Pierre-de-Bœuf - 42","ghi_nom":"CHPR","ght_nom":"GHT Val Rhône Santé","département":"Loire","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.0784422021349,46.04275427449709]},"properties":{"id":159,"code_region":"ARA","departement":"42","nom_hopital":"CH Roanne - 42","suppressions":"2019 : soins de suite et rééducation fermé","ghi_nom":"","ght_nom":"GHT de la Loire","département":"Loire","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.36241044409224,45.481551825166605]},"properties":{"id":837,"code_region":"ARA","departement":"42","nom_hopital":"CHU Nord Saint-Étienne - 42","menaces":"2022 : cancérologie menacé","ghi_nom":"","ght_nom":"GHT de la Loire","département":"Loire","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.56119951730492,44.688301414689406]},"properties":{"id":363,"code_region":"ARA","departement":"42","nom_hopital":"CM La Roseraie Montfaucon - 42","suppressions":"2020 : réadaptation cardiaque fermé","ghi_nom":"","ght_nom":"","département":"Lot","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.23925502434605,45.8909649983044]},"properties":{"id":805,"code_region":"ARA","departement":"42","nom_hopital":"HL F. Merlin Saint-Just-la-Pendue – 42","menaces":"soins de suite et rééducation menacé","ghi_nom":"","ght_nom":"GHT de la Loire","département":"Loire","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.383042719101129,45.296873870022594]},"properties":{"id":388,"code_region":"ARA","departement":"43","nom_hopital":"CH Brioude - 43","suppressions":"1998 : maternité fermé","menaces":"2013 : chirurgie menacé;2009 : soins longue durée réduit (autre)","ghi_nom":"","ght_nom":"GHT Haute Loire","département":"Haute-Loire","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.74093245775264,45.55266544082029]},"properties":{"id":16,"code_region":"ARA","departement":"63","nom_hopital":"CH Ambert - 63","suppressions":"2013 : chirurgie fermé;2008 : chirurgie de nuit et week-end fermé;2008 : réanimation fermé;2006 : maternité fermé;1997 : psychiatrie fermé","menaces":"2021 : SMUR menacé;2021 : urgences réduit (autre);2011 : bloc opératoire réduit (autre)","victoires":"2021 : SMUR maintenu;2021 : urgences maintenu","ghi_nom":"","ght_nom":"GHT Allier","département":"Puy-de-Dôme","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.043699447338807,45.905164262142684]},"properties":{"id":785,"code_region":"ARA","departement":"63","nom_hopital":"CH É. Clémentel Enval - 63","ghi_nom":"","ght_nom":"GHT Allier","département":"Puy-de-Dôme","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.11216665833108,45.88893218826901]},"properties":{"id":72,"code_region":"ARA","departement":"63","nom_hopital":"CH Guy Thomas Riom - 63","menaces":"2019 : EHPAD menacé;2018 : soins longue durée transformé","ghi_nom":"","ght_nom":"GHT Allier","département":"Puy-de-Dôme","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.80817015133997,45.57485096080197]},"properties":{"id":786,"code_region":"ARA","departement":"63","nom_hopital":"CH Mont-Dore - 63","menaces":"2015 : urgences menacé","ghi_nom":"","ght_nom":"GHT Allier","département":"Puy-de-Dôme","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.110727773306783,45.78586691207514]},"properties":{"id":780,"code_region":"ARA","departement":"63","nom_hopital":"CHU Estaing Clermond-Ferrand - 63","ghi_nom":"","ght_nom":"GHT Allier","département":"Puy-de-Dôme","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.090982103559405,45.75721909803453]},"properties":{"id":71,"code_region":"ARA","departement":"63","nom_hopital":"CHU Montpied Clermont-Ferrand - 63","suppressions":"2015 : dermatologie transféré;2015 : oncologie pédiatrique transféré","menaces":"2018 : urgences menacé;2015 : neurologie réduit (autre)","ghi_nom":"","ght_nom":"GHT Allier","département":"Puy-de-Dôme","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.622163695800984,45.55954939133508]},"properties":{"id":414,"code_region":"ARA","departement":"63","nom_hopital":"Tauves - 63","ghi_nom":"","ght_nom":"","département":"Puy-de-Dôme","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.520078006321416,45.85675618593656]},"properties":{"id":377,"code_region":"ARA","departement":"63","nom_hopital":"Thiers - 63","ghi_nom":"","ght_nom":"","département":"Puy-de-Dôme","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.818117146581556,46.13192505595921]},"properties":{"id":382,"code_region":"ARA","departement":"63","nom_hopital":"Youx - 63","menaces":"2018 : centre médico-psycho pédagogique menacé","ghi_nom":"","ght_nom":"","département":"Puy-de-Dôme","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.76520457452768,45.60031175859409]},"properties":{"id":706,"code_region":"ARA","departement":"69","nom_hopital":"CH de Montgelas Givors - 69","menaces":"urgences de nuit interrompu","ghi_nom":"","ght_nom":"GHT Rhône Sud-Isère","département":"Rhône","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.83670636810813,45.75854037539339]},"properties":{"id":509,"code_region":"ARA","departement":"69","nom_hopital":"CH Hôtel-Dieu Lyon - 69","suppressions":"2009 : biologie et imagerie d'urgence fermé;2009 : centre IVG fermé;2009 : chirurgie fermé;2009 : maternité fermé;2009 : réanimation fermé","menaces":"2010 : centre d'orthogénie menacé","ghi_nom":"","ght_nom":"","département":"Rhône","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.89938236354377,45.74181766053679]},"properties":{"id":567,"code_region":"ARA","departement":"69","nom_hopital":"CH Le Vinatier Bron - 69 ","menaces":"2020 : unité mère-bébé réduit (lits fermés)","ghi_nom":"","ght_nom":"","département":"Rhône","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.38951041292762,45.63688662547949]},"properties":{"id":744,"code_region":"ARA","departement":"69","nom_hopital":"CHML Chazelles-sur-Lyon - 69","ghi_nom":"CHML","ght_nom":"GHT de la Loire","département":"Loire","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.46692262178927,45.740512482658296]},"properties":{"id":804,"code_region":"ARA","departement":"69","nom_hopital":"CHML Saint-Laurent-de-Chamousset - 69","ghi_nom":"CHML","ght_nom":"GHT de la Loire","département":"Rhône","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.458683799296071,45.63468775416148]},"properties":{"id":743,"code_region":"ARA","departement":"69","nom_hopital":"CHML Saint-Symphorien sur Coise - 69","ghi_nom":"CHML ","ght_nom":"GHT de la Loire","département":"Rhône","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.477775119224314,46.04307564650039]},"properties":{"id":751,"code_region":"ARA","departement":"69","nom_hopital":"CHNOTG Grandis - 69","ghi_nom":"","ght_nom":"GHT Rhône Nord Beaujolais Dombes","département":"Rhône","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.4385513764561,45.889319954955496]},"properties":{"id":170,"code_region":"ARA","departement":"69","nom_hopital":"CHNOTG Tarare - 69","suppressions":"2012 : chirurgie fermé;2005 : pédiatrie fermé;2002 : maternité fermé","ghi_nom":"CHNOTG","ght_nom":"GHT Rhône Nord Beaujolais Dombes","département":"Rhône","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.695641016432519,46.004924578119734]},"properties":{"id":809,"code_region":"ARA","departement":"69","nom_hopital":"CHNO Villefranche-sur-Saône - 69","menaces":"2021 : urgences menacé","ghi_nom":"","ght_nom":"GHT Rhône Nord Beaujolais Dombes","département":"Rhône","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.799704405176881,45.736202200495384]},"properties":{"id":172,"code_region":"ARA","departement":"69","nom_hopital":"CH Sainte-Foy-les-Lyon - 69","suppressions":"chirurgie fermé","ghi_nom":"","ght_nom":"GHT Rhône Centre","département":"Rhône","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.757862400867784,45.75329878898837]},"properties":{"id":813,"code_region":"ARA","departement":"69","nom_hopital":"HCL A. Charial Francheville - 69","suppressions":"2018 : gériatrie fermé;2016 : soins de suite et rééducation transféré","menaces":"2015 : gériatrie menacé","ghi_nom":"","ght_nom":"GHT Rhône Centre","département":"Rhône","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.83094946569212,45.7817024605367]},"properties":{"id":505,"code_region":"ARA","departement":"69","nom_hopital":"HCL Croix-Rousse Lyon - 69","menaces":"2012 : centre IVG menacé","ghi_nom":"HCL","ght_nom":"GHT Rhône Centre","département":"Rhône","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.81285137209102,45.7507091518862]},"properties":{"id":811,"code_region":"ARA","departement":"69","nom_hopital":"HCL Debrousse","ghi_nom":"","ght_nom":"","département":"Rhône","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.88263000795812,45.74345904198379]},"properties":{"id":566,"code_region":"ARA","departement":"69","nom_hopital":"HCL Édouard Herriot Lyon - 69","menaces":"2021 : parking réduit (autre);2020 : chirurgie réduit (lits fermés);2020 : gériatrie réduit (lits fermés);2020 : médecine réduit (lits fermés);post-urgence réduit (lits fermés)","ghi_nom":"HCL","ght_nom":"GHT Rhône Centre","département":"Rhône","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.79086048478832,45.690029308792894]},"properties":{"id":507,"code_region":"ARA","departement":"69","nom_hopital":"HCL Henry Gabrielle Saint-Genis-Laval - 69","suppressions":"2017 : centre de rééducation fonctionnelle transféré","victoires":"2020 : centre de rééducation fonctionnelle maintenu","ghi_nom":"GHLS","ght_nom":"GHT Rhône Centre","département":"Rhône","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.83158430526363,45.77083002785808]},"properties":{"id":508,"code_region":"ARA","departement":"69","nom_hopital":"HCL Lyon - 69","ghi_nom":"HCL","ght_nom":"GHT Rhône Centre","département":"Rhône","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.80850925927256,45.70239865816849]},"properties":{"id":812,"code_region":"ARA","departement":"69","nom_hopital":"HCL Lyon-Sud Pierre-Bénite - 69","menaces":"2021 : bloc opératoire réduit (autre);2021 : hospitalisation réduit (lits fermés)","ghi_nom":"HCL","ght_nom":"GHT Rhône Centre","département":"Rhône","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.89071364072992,45.74095544649009]},"properties":{"id":431,"code_region":"ARA","departement":"69","nom_hopital":"HIA Desgenettes Lyon - 69","suppressions":"ravitaillement sanitaire des armées fermé","ghi_nom":"","ght_nom":"","département":"Rhône","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.61653400594221,45.8411496161607]},"properties":{"id":171,"code_region":"ARA","departement":"69","nom_hopital":"L'Arbresle - 69","suppressions":"2019 : centre périnatal fermé;1997 : maternité fermé","ghi_nom":"","ght_nom":"","département":"Rhône","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.887200668839967,45.82119360587452]},"properties":{"id":900,"code_region":"ARA","departement":"69","nom_hopital":"Maternité Rillieux-le-Pape - 69","suppressions":"2022 : maternité fermé","ghi_nom":"","ght_nom":"","département":"Rhône","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.36935559320552,45.669575184888494]},"properties":{"id":511,"code_region":"ARA","departement":"73","nom_hopital":"CHAM Albertville – 73\r\n","ghi_nom":"CHAM","ght_nom":"GHT Savoie-Belley","département":"Savoie","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.53452953320197,45.4837678178262]},"properties":{"id":165,"code_region":"ARA","departement":"73","nom_hopital":"CHAM Moûtiers – 73","suppressions":"2015 : urgences fermé;2014 : chirurgie fermé;2011 : service saisonnier chirurgie orthopédique fermé;2008 : stérilisation privatisé;2006 : chirurgie viscérale fermé;2001 : maternité fermé","menaces":"2018 : EHPAD menacé;2009 : chirurgie interrompu;chirurgie transformé;médecine menacé;soins intensifs réduit (autre)","ghi_nom":"CHAM","ght_nom":"GHT Savoie-Belley","département":"Savoie","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.764093556315571,45.61622538647168]},"properties":{"id":164,"code_region":"ARA","departement":"73","nom_hopital":"CH-Bourg St Maurice - 73","menaces":"2021 : chirurgie menacé;2015 : maternité menacé","ghi_nom":"CHBSM Haute Tarentaise","ght_nom":"GHT Savoie-Belley","département":"Savoie","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.909905483569455,45.56496525453358]},"properties":{"id":168,"code_region":"ARA","departement":"73","nom_hopital":"CH Métropole Savoie Chambéry - 73","ghi_nom":"","ght_nom":"","département":"Savoie","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.90437712092956,45.69733263802029]},"properties":{"id":167,"code_region":"ARA","departement":"73","nom_hopital":"CHMS Aix-les-Bains - 73","suppressions":"2010 : maternité fermé;chirurgie fermé","ghi_nom":"CHMS","ght_nom":"GHT Savoie-Belley","département":"Savoie","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.94008310099964,45.5778620118486]},"properties":{"id":169,"code_region":"ARA","departement":"73","nom_hopital":"CHS Bassens - 73","ghi_nom":"","ght_nom":"GHT Savoie-Belley","département":"Savoie","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.664753726922393,45.20317854028344]},"properties":{"id":742,"code_region":"ARA","departement":"73","nom_hopital":"CHVM Modane - 73","ghi_nom":"","ght_nom":"GHT Savoie Belley","département":"Savoie","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.341613388625507,45.278237200688814]},"properties":{"id":741,"code_region":"ARA","departement":"73","nom_hopital":"CHVM Saint-Jean de Maurienne - 73","ghi_nom":"","ght_nom":"GHT Savoie Belley","département":"Savoie","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.91639809091208,45.56307854587241]},"properties":{"id":615,"code_region":"ARA","departement":"73","nom_hopital":"Clinique Générale de Savoie Chambéry - 73","ghi_nom":"","ght_nom":"","département":"Savoie","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.921733489995461,45.68571742744349]},"properties":{"id":616,"code_region":"ARA","departement":"73","nom_hopital":"GCS Clin. Herbert Aix-les-Bains - 73","ghi_nom":"","ght_nom":"","département":"Savoie","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.117376696926528,45.93225059710571]},"properties":{"id":798,"code_region":"ARA","departement":"74","nom_hopital":"CHAG Metz-Tessy Pringy - 74","suppressions":"2016 : hospitalisation de psychiatrie infanto-juvénile fermé","ghi_nom":"CHAG","ght_nom":"GHT Haute Savoie-Pays de Gex","département":"Haute-Savoie","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.079527013500506,46.1469876880147]},"properties":{"id":799,"code_region":"ARA","departement":"74","nom_hopital":"CHAG Saint-Julien-en-Genevois – 74","suppressions":"2016 : hospitalisation de psychiatrie infanto-juvénile fermé","ghi_nom":"CHAG","ght_nom":"GHT Haute Savoie-Pays de Gex","département":"Haute-Savoie","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.862484672648261,45.91430947263239]},"properties":{"id":284,"code_region":"ARA","departement":"74","nom_hopital":"Chamonix - 74","suppressions":"chirurgie fermé","menaces":"2008 : urgences réduit (autre)","ghi_nom":"","ght_nom":"","département":"Haute-Savoie","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.59083691537435,46.40129508121339]},"properties":{"id":13,"code_region":"ARA","departement":"74","nom_hopital":"CH Camille Blanc Évian - 74","suppressions":"2005 : chirurgie fermé;2005 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.936844284961166,45.86450471826156]},"properties":{"id":800,"code_region":"ARA","departement":"74","nom_hopital":"CH G. Deplante Rumilly - 74","suppressions":"1993 : chirurgie fermé;1993 : urgences fermé;1975 : maternité fermé","ghi_nom":"","ght_nom":"GHT Haute Savoie-Pays de Gex","département":"Haute-Savoie","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.22144038254992,46.195885275298295]},"properties":{"id":797,"code_region":"ARA","departement":"74","nom_hopital":"CHIAL Annemasse - 74","ghi_nom":"CHIAL","ght_nom":"GHT Léman Mont-Blanc","département":"Haute-Savoie","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.41401376699136,46.07819016187129]},"properties":{"id":796,"code_region":"ARA","departement":"74","nom_hopital":"CHIAL Bonneville-sur-Avre - 74","ghi_nom":"CHIAL","ght_nom":"GHT Léman Mont-Blanc","département":"Haute-Savoie","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.452951787313209,46.35701678606179]},"properties":{"id":81,"code_region":"ARA","departement":"74","nom_hopital":"CMC Thonon -74","suppressions":"2016 : psychiatrie transféré","menaces":"2022 : psychiatrie réduit (lits fermés)","victoires":"2016 : psychiatrie maintenu","ghi_nom":"","ght_nom":"","département":"Haute-Savoie","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.385270177382457,47.19219735982172]},"properties":{"id":826,"code_region":"BFC","departement":"21","nom_hopital":"CH Auxonne - 21","menaces":"2015 : soins de suite et rééducation interrompu","ghi_nom":"","ght_nom":"GHT Côte d'Or - Haute Marne","département":"Côte-d'Or","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.48558285585893,47.537995477048085]},"properties":{"id":399,"code_region":"BFC","departement":"21","nom_hopital":"CHHCO Alise Sainte Reine - 21","suppressions":"2018 : soins longue durée fermé","ghi_nom":"CHHCO","ght_nom":"GHT Côte d'Or - Haute Marne","département":"Côte-d'Or","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.57373459082712,47.860465389846084]},"properties":{"id":402,"code_region":"BFC","departement":"21","nom_hopital":"CHHCO Châtillon sur Seine - 21","suppressions":"2018 : laboratoire d'analyses biologiques fermé;2009 : chirurgie fermé;2009 : soins continus fermé;2008 : maternité fermé","menaces":"chimiothérapie menacé;médecine menacé;urgences menacé","ghi_nom":"CHHCO","ght_nom":"","département":"Côte-d'Or","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.34045856039116,47.6243561652341]},"properties":{"id":400,"code_region":"BFC","departement":"21","nom_hopital":"CHHCO Montbard - 21","suppressions":"2018 : laboratoire fermé;2017 : maternité fermé;2017 : urgences fermé","ghi_nom":"","ght_nom":"GHT Côte d'Or - Haute Marne","département":"Côte-d'Or","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.53865802799278,47.397027797996095]},"properties":{"id":401,"code_region":"BFC","departement":"21","nom_hopital":"CHHCO Vitteaux - 21","suppressions":"2018 : médecine fermé","ghi_nom":"CHHCO","ght_nom":"GHT Côte d'Or - Haute Marne","département":"Côte-d'Or","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.06926305480283,47.320489000953195]},"properties":{"id":908,"code_region":"BFC","departement":"21","nom_hopital":"CHRU Mitterrand Dijon 21","ghi_nom":"","ght_nom":"GHT Côte D'Or-Haute Marne","département":"Côte-d'Or","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.34583422150233,47.494857600371994]},"properties":{"id":379,"code_region":"BFC","departement":"21","nom_hopital":"CH Semur-en-Auxois - 21","suppressions":"2017 : pédiatrie gynécologique transféré","menaces":"2017 : pédiatrie menacé","ghi_nom":"","ght_nom":"GHT Côte d'Or - Haute Marne","département":"Côte-d'Or","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.017101053219061,47.32049935930939]},"properties":{"id":825,"code_region":"BFC","departement":"21","nom_hopital":"CHS La Chartreuse Dijon - 21","menaces":"2018 : psychiatrie réduit (autre);2017 : psychiatrie réduit (lits fermés);2016 : psychiatrie transformé","ghi_nom":"","ght_nom":"GHT Côte d'Or - Haute Marne","département":"Côte-d'Or","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.94892833980333,47.1342722462338]},"properties":{"id":833,"code_region":"BFC","departement":"21","nom_hopital":"HCB Nuits-Saint-Georges - 21","menaces":"2021 : gériatrie réduit (autre);2021 : médecine réduit (autre);2021 : soins de suite et rééducation réduit (autre)","ghi_nom":"HCB","ght_nom":"GHT Sud Côte d’Or","département":"Côte-d'Or","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.833657725195363,47.03338249570178]},"properties":{"id":832,"code_region":"BFC","departement":"21","nom_hopital":"HCB - Philippe le Bon Beaune - 21","menaces":"2021 : gériatrie réduit (autre);2021 : médecine réduit (autre);2021 : soins de suite et rééducation réduit (autre)","ghi_nom":"HCB","ght_nom":"GHT Sud Côte d’Or","département":"Côte-d'Or","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.146617873009472,46.99575386391724]},"properties":{"id":834,"code_region":"BFC","departement":"21","nom_hopital":"HCB Seurre - 21","menaces":"2021 : gériatrie réduit (autre);2021 : médecine réduit (autre);2021 : soins de suite et rééducation réduit (autre)","ghi_nom":"","ght_nom":"GHT Sud Côte d’Or","département":"Côte-d'Or","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.35955403425956,46.90099969871237]},"properties":{"id":614,"code_region":"BFC","departement":"25","nom_hopital":"CHIHC Pontarlier - 25","menaces":"2019 : urgences psychiatriques menacé;2018 : chirurgie réduit (lits fermés);2016 : chirurgie réduit (autre)","ghi_nom":"CHIHC","ght_nom":"GHT Centre Franche Comté","département":"Doubs","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.606191752730672,47.05801510224646]},"properties":{"id":824,"code_region":"BFC","departement":"25","nom_hopital":"Ch Nappez Morteau - 25","suppressions":"2022 : radiologie fermé","ghi_nom":"","ght_nom":"GHT Centre Franche Comté","département":"Doubs","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.96221021461603,47.225039121906704]},"properties":{"id":473,"code_region":"BFC","departement":"25","nom_hopital":"CHRU Jean Minjoz Besançon - 25","suppressions":"2022 : médecine interne fermé","menaces":"2022 : neurochirurgie réduit (lits fermés);2021 : chirurgie digestive réduit (lits fermés);2021 : psychiatrie menacé;2021 : soins de suite et rééducation gériatrie réduit (lits fermés);2020 : soins de suite et rééducation interrompu;2020 : soins de suite et rééducation réduit (autre)","ghi_nom":"","ght_nom":"GHT Centre Franche Comté","département":"Doubs","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.14323319182648,47.10706168658383]},"properties":{"id":822,"code_region":"BFC","departement":"25","nom_hopital":"CH Saint-Louis Ornans - 25","ghi_nom":"","ght_nom":"GHT Centre Franche Comté","département":"Doubs","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.13437769191219,47.285835604161775]},"properties":{"id":179,"code_region":"BFC","departement":"25","nom_hopital":"CHS Novillars - 25","suppressions":"2021 : unité de jour psychiatrique fermé","ghi_nom":"","ght_nom":"GHT Centre Franche Comté","département":"Doubs","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.80349067510144,47.49722388145849]},"properties":{"id":474,"code_region":"BFC","departement":"25","nom_hopital":"Clin. Portes du Jura Montbéliard - 25","suppressions":"2015 : maternité fermé","ghi_nom":"","ght_nom":"","département":"Doubs","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.349914928078844,46.90598365011333]},"properties":{"id":613,"code_region":"BFC","departement":"25","nom_hopital":"Clin. St Paul Pontarlier - 25","ghi_nom":"","ght_nom":"","département":"Doubs","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.979468269334452,47.243799280338365]},"properties":{"id":612,"code_region":"BFC","departement":"25","nom_hopital":"Clin. St Vincent Besançon - 25","ghi_nom":"","ght_nom":"","département":"Doubs","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.96189904727185,47.2346399865329]},"properties":{"id":416,"code_region":"BFC","departement":"25","nom_hopital":"CSSR Tilleroyes Besançon - 25","menaces":"2019 : gériatrie réduit (lits fermés);2019 : soins de suite et rééducation réduit (lits fermés);soins de suite et rééducation interrompu","ghi_nom":"","ght_nom":"GHT Centre Franche Comté","département":"Doubs","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.33676144267718,46.91990127370588]},"properties":{"id":910,"code_region":"BFC","departement":"25","nom_hopital":"EHPAD du Larmont - Doubs - 25","ghi_nom":"CHIHC","ght_nom":"","département":"Doubs","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.841271186303676,47.48156640694323]},"properties":{"id":915,"code_region":"BFC","departement":"25","nom_hopital":"Ex-Clinique Lucine Audincourt - 25","suppressions":"2014 : maternité fermé;2014 : périnatalité fermé","ghi_nom":"","ght_nom":"","département":"Doubs","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.218027013352859,47.065745295595704]},"properties":{"id":823,"code_region":"BFC","departement":"25","nom_hopital":"HL Saint-Louis Vuillafans - 25","ghi_nom":"","ght_nom":"GHT Centre Franche Comté","département":"Doubs","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.786942198499369,47.52529714356031]},"properties":{"id":178,"code_region":"BFC","departement":"25","nom_hopital":"HNFC Mittan Montbéliard - 25","suppressions":"2012 : chirurgie traumatique fermé;2007 : psychiatrie transféré;diabétologie fermé;ophtalmologie fermé;pédiatrie fermé","menaces":"2015 : urgences pédiatriques réduit (autre);2014 : urgences menacé","ghi_nom":"HNFC","ght_nom":"GHT Nord Franche Comté","département":"Doubs","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.471947680164929,47.08044715498427]},"properties":{"id":57,"code_region":"BFC","departement":"39","nom_hopital":"Centre Truchot - Dole - 39","menaces":"EHPAD fusionné","ghi_nom":"","ght_nom":"","département":"Jura","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.7757229815,46.89945552510819]},"properties":{"id":769,"code_region":"BFC","departement":"39","nom_hopital":"CHIPR Arbois - 39","ghi_nom":"CHIPR","ght_nom":"GHT Jura","département":"Jura","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.708296875769657,46.83227444964124]},"properties":{"id":776,"code_region":"BFC","departement":"39","nom_hopital":"CHIPR Poligny - 39","ghi_nom":"CHIPR","ght_nom":"GHT Jura","département":"Jura","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.87678093149951,46.94013235579231]},"properties":{"id":768,"code_region":"BFC","departement":"39","nom_hopital":"CHIPR Salins-les-Bains - 39","suppressions":"1999 : urgences fermé","ghi_nom":"CHIPR","ght_nom":"GHT Jura","département":"Jura","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.908059094841261,46.74580048611589]},"properties":{"id":152,"code_region":"BFC","departement":"39","nom_hopital":"CHJS Champagnole - 39","suppressions":"2022 : SMUR fermé;2022 : soins non programmés fermé;2021 : soins de suite et rééducation fermé;2009 : chirurgie transféré","menaces":"2019 : urgences de nuit interrompu;2018 : médecine réduit (lits fermés);2013 : SMUR menacé;2013 : urgences menacé","ghi_nom":"CHJS","ght_nom":"GHT Jura","département":"Jura","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.55028436422825,46.676699896302075]},"properties":{"id":418,"code_region":"BFC","departement":"39","nom_hopital":"CHJS Lons le Saulnier - 39","suppressions":"2021 : dialyse privatisé","menaces":"2019 : SMUR réduit (autre);urgences réduit (autre)","ghi_nom":"CHJS","ght_nom":"GHT Jura","département":"Jura","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.605633888177911,46.514927547841204]},"properties":{"id":331,"code_region":"BFC","departement":"39","nom_hopital":"CHJS Orgelet - 39","menaces":"2014 : moyen séjour menacé","ghi_nom":"CHJS","ght_nom":"GHT Jura","département":"Jura","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.017416100274923,46.5325293862997]},"properties":{"id":827,"code_region":"BFC","departement":"39","nom_hopital":"CH Léon Bérard Morez - 39","menaces":"médecine menacé","ghi_nom":"","ght_nom":"GHT Jura","département":"Jura","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.866737144434171,46.3854672894218]},"properties":{"id":153,"code_region":"BFC","departement":"39","nom_hopital":"CH L. Jallion Saint-Claude - 39","suppressions":"2021 : SMUR fermé;2018 : chirurgie fermé;2018 : maternité fermé;2018 : pédiatrie fermé","menaces":"2021 : soins de suite et rééducation réduit (lits fermés);2019 : médecine menacé","victoires":"2022 : unité de surveillance de courte durée réouvert","ghi_nom":"","ght_nom":"GHT Jura","département":"Jura","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.47297285043471,47.08292184784839]},"properties":{"id":495,"code_region":"BFC","departement":"39","nom_hopital":"CH Pasteur - Dole - 39","suppressions":"2022 : chirurgie fermé;2018 : cardiologie fermé;2017 : SMUR de nuit fermé;2014 : réanimation fermé","menaces":"2022 : urgences de nuit interrompu;2021 : chirurgie réduit (autre);2019 : chirurgie menacé;2018 : pneumologie réduit (lits fermés);2018 : pneumologie réduit (autre);2017 : soins intensifs en cardiologie interrompu","victoires":"2022 : urgences de nuit maintenu","ghi_nom":"","ght_nom":"GHT Centre Franche Comté","département":"Jura","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.520333255850423,47.21691555681019]},"properties":{"id":588,"code_region":"BFC","departement":"39","nom_hopital":"CHS du Jura - Monmirey - 39","ghi_nom":"CHS du Jura - Centre Brantus","ght_nom":"","département":"Jura","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.45835101511962,47.07010778867342]},"properties":{"id":496,"code_region":"BFC","departement":"39","nom_hopital":"CHS Saint-Ylie - Dole - 39","ghi_nom":"","ght_nom":"GHT Centre Franche Comté","département":"Jura","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.155724418438722,46.99981342061297]},"properties":{"id":54,"code_region":"BFC","departement":"58","nom_hopital":"Centre 15 de la Nièvre - 58","suppressions":"appel 115 transféré","ghi_nom":"","ght_nom":"","département":"Nièvre","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.1226719177123,46.97950364648679]},"properties":{"id":501,"code_region":"BFC","departement":"58","nom_hopital":"CHAN Pierre Bérégovoy Nevers - 58","menaces":"2022 : maternité interrompu","ghi_nom":"CHAN","ght_nom":"GHT Nièvre","département":"Nièvre","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.93503030053108,47.061090533305894]},"properties":{"id":381,"code_region":"BFC","departement":"58","nom_hopital":"CH Château Chinon - 58","menaces":"2021 : médecine menacé;2021 : soins de suite et rééducation menacé;2021 : UAPS menacé;2021 : USSD menacé;2018 : médecine réduit (autre)","ghi_nom":"","ght_nom":"GHT Nièvre","département":"Nièvre","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.50932341538159,47.4536458877202]},"properties":{"id":383,"code_region":"BFC","departement":"58","nom_hopital":"CH Clamecy - 58","suppressions":"2018 : urgences de nuit fermé;2009 : chirurgie fermé;2008 : maternité fermé","menaces":"2022 : urgences réduit (autre);2021 : accueil urgences réduit (autre);2021 : SMUR réduit (autre);2018 : urgences menacé","ghi_nom":"","ght_nom":"GHT Sud Yonne Haut-Nivernais","département":"Nièvre","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.92698447127753,47.4158662587551]},"properties":{"id":285,"code_region":"BFC","departement":"58","nom_hopital":"CH Cosne - Cours sur Loire - 58","suppressions":"2018 : maternité fermé","ghi_nom":"","ght_nom":"GHT Nièvre","département":"Nièvre","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.45319394400524,46.82211133515569]},"properties":{"id":387,"code_region":"BFC","departement":"58","nom_hopital":"CH Decize – 58","suppressions":"2017 : stérilisation transféré;2015 : laboratoire transféré;plateau technique fermé","menaces":"2018 : chirurgie conventionnelle réduit (lits fermés);2017 : urgences de nuit menacé;centre IVG menacé","victoires":"1998 : chirurgie maintenu","ghi_nom":"","ght_nom":"GHT Nièvre","département":"Nièvre","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.016083974643816,47.18424809194245]},"properties":{"id":835,"code_region":"BFC","departement":"58","nom_hopital":"CH Henri Dunant La-Charité-sur-Loire - 58","suppressions":"2022 : médecine fermé","ghi_nom":"","ght_nom":"GHT de la Nièvre","département":"Nièvre","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.92751602024495,47.40411761178637]},"properties":{"id":828,"code_region":"BFC","departement":"58","nom_hopital":"Clinique Cosne-Cours-sur-Loire – 58","suppressions":"2019 : chirurgie fermé","ghi_nom":"","ght_nom":"","département":"Nièvre","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.117019124517326,46.79282755668414]},"properties":{"id":829,"code_region":"BFC","departement":"58","nom_hopital":"CLS Saint-Pierre-le-Moûtier - 58","ghi_nom":"","ght_nom":"GHT de la Nièvre","département":"Nièvre","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.5923029651443,47.445731551405295]},"properties":{"id":28,"code_region":"BFC","departement":"70","nom_hopital":"HD site de Gray 70","suppressions":"2002 : chirurgie fermé;2002 : maternité fermé","menaces":"2021 : unité de soins critiques interrompu;2021 : urgences réduit (autre);2017 : urgences menacé","ghi_nom":"HD 70","ght_nom":"GHT de la Haute-Saône","département":"Haute-Saône","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.502306449871549,47.6825342790751]},"properties":{"id":277,"code_region":"BFC","departement":"70","nom_hopital":"HD site de Lure 70","suppressions":"2021 : radiologie privatisé;2013 : laboratoire fermé;2004 : chirurgie fermé;2003 : cardiologie fermé;2003 : urgences de nuit fermé;2001 : soins intensifs fermé;1996 : maternité fermé","menaces":"2022 : urgences réduit (autre);2021 : neurologie menacé;2020 : SMUR menacé;2020 : urgences consultations non programmées réduit (autre);2011 : urgences de soir menacé","victoires":"2013 : SMUR maintenu;2013 : urgences victoire;2006 : SMUR réouvert;2006 : urgences maintenu;1982 : maternité maintenu","ghi_nom":"HD 70","ght_nom":"GHT de la Haute-Saône","département":"Haute-Saône","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.38007274147048,47.82211811262991]},"properties":{"id":558,"code_region":"BFC","departement":"70","nom_hopital":"HD site de Luxeuil 70","suppressions":"2020 : urgences consultations non programmées fermé;2019 : SMUR fermé;2013 : laboratoire fermé;2005 : chirurgie fermé;2004 : ORL fermé;2003 : maternité fermé;2003 : urgences de nuit fermé;1996 : cardiologie fermé","menaces":"2015 : médecine réduit (autre);2014 : SMUR interrompu;2011 : SMUR menacé;2011 : urgences de soir menacé","victoires":"2013 : SMUR maintenu;2006 : SMUR réouvert;2006 : urgences maintenu","ghi_nom":"","ght_nom":"GHT de la Haute-Saône","département":"Haute-Saône","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.15424717943215,47.619694637124994]},"properties":{"id":238,"code_region":"BFC","departement":"70","nom_hopital":"HD site de Vesoul 70","menaces":"2022 : cardiologie menacé;2020 : ligne SMUR interrompu;2017 : SMUR menacé;2013 : ligne SMUR menacé","ghi_nom":"GH70","ght_nom":"GHT de la Haute-Saône","département":"Haute-Saône","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.30124493414771,46.95249096898989]},"properties":{"id":79,"code_region":"BFC","departement":"71","nom_hopital":"CH Autun - 71","suppressions":"bloc opératoire privatisé","menaces":"2021 : soins longue durée réduit (lits fermés);2020 : maternité menacé;2011 : chirurgie menacé;2011 : urgences de nuit menacé","victoires":"2022 : maternité maintenu","ghi_nom":"","ght_nom":"GHT Saône-et-Loire Bresse Morvan","département":"Saône-et-Loire","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.33255880850527,46.64904130920199]},"properties":{"id":216,"code_region":"BFC","departement":"71","nom_hopital":"CH Bouveri-Galuzot Montceau les Mines - 71","suppressions":"2009 : chirurgie urologie et viscérale fermé;2009 : maternité fermé;2009 : urgences pédiatriques fermé;chirurgie fermé;pédiatrie fermé","menaces":"2022 : oncologie menacé;2021 : oncologie réduit (autre);2021 : SMUR menacé;2015 : urgences menacé;2007 : soins intensifs transformé;cardiologie menacé","ghi_nom":"","ght_nom":"GHT Saône-et-Loire Bresse Morvan","département":"Saône-et-Loire","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.60180003760252,46.30545300139089]},"properties":{"id":757,"code_region":"BFC","departement":"71","nom_hopital":"CHC Corsin Tramayes - 71","ghi_nom":"CHC","ght_nom":"GHT Bourgogne Méridionale","département":"Saône-et-Loire","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.750303576532019,46.910385422525806]},"properties":{"id":831,"code_region":"BFC","departement":"71","nom_hopital":"CH Chagny - 71","suppressions":"1975 : maternité fermé","ghi_nom":"","ght_nom":"GHT Saône-et-Loire Bresse Morvan","département":"Saône-et-Loire","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.66002232552407,46.430460781192295]},"properties":{"id":756,"code_region":"BFC","departement":"71","nom_hopital":"CHC Hôtel-Dieu Cluny - 71","suppressions":"1989 : maternité fermé;chirurgie fermé","ghi_nom":"CHC","ght_nom":"GHT Bourgogne Méridionale","département":"Saône-et-Loire","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.76548539696544,46.617971500395086]},"properties":{"id":821,"code_region":"BFC","departement":"71","nom_hopital":"CHFA Bourbon-Lancy - 71","suppressions":"2021 : médecine fermé;2021 : soins de suite fermé;électro-radiologie fermé;maternité fermé","ghi_nom":"","ght_nom":"GHT Bourgogne Méridionale","département":"Saône-et-Loire","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.44997503000177,46.544697318868806]},"properties":{"id":643,"code_region":"BFC","departement":"71","nom_hopital":"CH La Guiche","suppressions":"2021 : cuisine transféré","menaces":"2021 : soins de suite et rééducation réduit (autre)","ghi_nom":"","ght_nom":"GHT Saône-et-Loire Bresse Morvan","département":"Saône-et-Loire","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.44835263903708,46.80460516739879]},"properties":{"id":215,"code_region":"BFC","departement":"71","nom_hopital":"CH Le Creusot - 71","suppressions":"2014 : pôle mère-enfant fermé","menaces":"2022 : maternité menacé","ghi_nom":"","ght_nom":"GHT Saône-et-Loire Bresse Morvan","département":"Saône-et-Loire","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.137467849494126,46.69198245851145]},"properties":{"id":830,"code_region":"BFC","departement":"71","nom_hopital":"CH Les marronniers Toulon-sur-Arroux – 71","suppressions":"2021 : cuisine fermé","menaces":"2021 : soins de suite et rééducation menacé","ghi_nom":"","ght_nom":"GHT Saône-et-Loire Bresse Morvan","département":"Saône-et-Loire","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.81378628686304,46.315951155831584]},"properties":{"id":819,"code_region":"BFC","departement":"71","nom_hopital":"CH Mâcon - 71","menaces":"2021 : psychiatrie réduit (autre)","ghi_nom":"","ght_nom":"GHT Bourgogne Méridionale","département":"Saône-et-Loire","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.30556496566219,46.2887927748492]},"properties":{"id":750,"code_region":"BFC","departement":"71","nom_hopital":"CHPCB La Clayette - 71","ghi_nom":"CHPCB","ght_nom":"GHT Bourgogne Méridionale","département":"Saône-et-Loire","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.109527166802826,46.46432003036419]},"properties":{"id":749,"code_region":"BFC","departement":"71","nom_hopital":"CHPCB Paray-le-Monial - 71","suppressions":"2012 : chirurgie fermé","menaces":"bloc opératoire menacé","ghi_nom":"CHPCB","ght_nom":"GHT Bourgogne Méridionale","département":"Saône-et-Loire","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.83356930468671,46.725939579454504]},"properties":{"id":723,"code_region":"BFC","departement":"71","nom_hopital":"CHS Sevrey - 71","ghi_nom":"","ght_nom":"GHT Saône-et-Loire Bresse Morvan","département":"Saône-et-Loire","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.89254242598911,46.56759874668077]},"properties":{"id":820,"code_region":"BFC","departement":"71","nom_hopital":"CHTR - Tournus 71","menaces":"2022 : médecine menacé","ghi_nom":"","ght_nom":"GHT Bourgogne Méridionale","département":"Saône-et-Loire","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.840694207696609,46.777045104683076]},"properties":{"id":420,"code_region":"BFC","departement":"71","nom_hopital":"CHWM Chalon-sur-Saône - 71","menaces":"2021 : chirurgie menacé;2017 : centre d'angioplastie menacé;2017 : coronographie menacé","ghi_nom":"","ght_nom":"GHT Saône-et-Loire Bresse Morvan","département":"Saône-et-Loire","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.10882348579307,46.46483799116671]},"properties":{"id":14,"code_region":"BFC","departement":"71","nom_hopital":"Clinique La Roseraie Paray-le-Monial - 71","ghi_nom":"","ght_nom":"","département":"Saône-et-Loire","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.842452199676641,46.775038984794136]},"properties":{"id":602,"code_region":"BFC","departement":"71","nom_hopital":"SSR Boucicaut Chalon - 71","ghi_nom":"","ght_nom":"","département":"Saône-et-Loire","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.555401953374,47.804326135346884]},"properties":{"id":232,"code_region":"BFC","departement":"89","nom_hopital":"CH Auxerre - 89","menaces":"2020 : chirurgie réduit (lits fermés);2019 : chirurgie menacé;2016 : hospitalisation de courte durée interrompu","ghi_nom":"","ght_nom":"GHT Sud Yonne Haut-Nivernais","département":"Yonne","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.904374931759571,47.490025213865394]},"properties":{"id":392,"code_region":"BFC","departement":"89","nom_hopital":"CH Avallon - 89","suppressions":"2004 : maternité fermé;1999 : réanimation fermé;1996 : pédiatrie fermé;laboratoire fermé","menaces":"2011 : chirurgie menacé","ghi_nom":"","ght_nom":"GHT Sud Yonne Haut-Nivernais","département":"Yonne","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.97775263231623,47.85641061602251]},"properties":{"id":396,"code_region":"BFC","departement":"89","nom_hopital":"CH du Tonnerrois - Tonnerre - 89","suppressions":"2017 : urgences de nuit fermé;2014 : blanchisserie fermé;2006 : chirurgie fermé;1995 : ORL fermé;1992 : maternité fermé;1992 : parondotologie fermé","menaces":"2021 : urgences de nuit menacé","ghi_nom":"","ght_nom":"GHT Sud Yonne Haut-Nivernais","département":"Yonne","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.39591404000839,47.979740396513996]},"properties":{"id":393,"code_region":"BFC","departement":"89","nom_hopital":"CH Joigny - 89","suppressions":"1999 : chirurgie fermé;1999 : maternité fermé;1999 : réanimation fermé","ghi_nom":"","ght_nom":"GHT Nord Yonne","département":"Yonne","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.5222778663641,47.9651479570417]},"properties":{"id":231,"code_region":"BFC","departement":"89","nom_hopital":"CH Migennes - 89","suppressions":"1994 : maternité fermé","ghi_nom":"","ght_nom":"GHT Nord Yonne","département":"Yonne","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.295165691469791,48.08041208025607]},"properties":{"id":574,"code_region":"BFC","departement":"89","nom_hopital":"HL Villeneuve-sur-Yonne - 89","suppressions":"2021 : EHPAD fermé","menaces":"2021 : soins de suite et rééducation réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Nord Yonne","département":"Yonne","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.85574718428873,47.642822266855404]},"properties":{"id":8,"code_region":"BFC","departement":"90","nom_hopital":"CHBM Site Belfort - 90","suppressions":"2019 : centre de prélèvements transféré;2015 : centre 15 fermé;2013 : urgences fermé;2011 : neurologie transféré;oncologie fermé","menaces":"2011 : traumatologie fusionné;2009 : blanchisserie réduit (autre);pharmacie menacé;restauration menacé","ghi_nom":"HNFC","ght_nom":"GHT Nord Franche Comté","département":"Territoire de Belfort","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.843562331892318,47.64173258334543]},"properties":{"id":623,"code_region":"BFC","departement":"90","nom_hopital":"HNFC site Belfort - 90","ghi_nom":"HNFC","ght_nom":"GHT Nord Franche Comté","département":"Territoire de Belfort","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.84115971179708,47.6145037977593]},"properties":{"id":622,"code_region":"BFC","departement":"90","nom_hopital":"HNFC Site Pierre Engel Bavilliers - 90","ghi_nom":"HNFC","ght_nom":"GHT Nord Franche Comté","département":"Territoire de Belfort","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.87308830265133,47.576617943377705]},"properties":{"id":620,"code_region":"BFC","departement":"90","nom_hopital":"HNFC Trévenans - 90","menaces":"2021 : urgences menacé","ghi_nom":"CHNFC","ght_nom":"GHT Nord Franche Comté","département":"Territoire de Belfort","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-2.75436313943362,48.179212394680995]},"properties":{"id":333,"code_region":"BRE","departement":"22","nom_hopital":"CHCB Loudéac - 22","suppressions":"2000 : maternité fermé;soins de suite et rééducation fermé","menaces":"cardiologie réduit (lits fermés);médecine réduit (lits fermés)","ghi_nom":"CHCB","ght_nom":"GHT Centre Bretagne","département":"Côtes-d'Armor","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.14809829720364,48.561213234072]},"properties":{"id":56,"code_region":"BRE","departement":"22","nom_hopital":"CH Guingamp - 22","suppressions":"2021 : maternité privatisé","menaces":"2022 : chirurgie menacé;2018 : maternité menacé","victoires":"2021 : chirurgie maintenu;2018 : maternité maintenu","ghi_nom":"","ght_nom":"GHT d'Armor","département":"Côtes-d'Armor","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-2.7640703311375,48.51371596017639]},"properties":{"id":299,"code_region":"BRE","departement":"22","nom_hopital":"CH Le Fol  Saint Brieuc - 22","menaces":"2021 : bloc opératoire menacé;2020 : urgences menacé","victoires":"médecine victoire","ghi_nom":"","ght_nom":"GHT d'Armor","département":"Côtes-d'Armor","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.46433648088831,48.72196756473449]},"properties":{"id":298,"code_region":"BRE","departement":"22","nom_hopital":"CHLT Lannion - 22","menaces":"cardiologie réduit (lits fermés);diabétologie réduit (lits fermés);neurologie réduit (lits fermés)","ghi_nom":"CHILT","ght_nom":"GHT Armor","département":"Côtes-d'Armor","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.349737480785786,48.82219472728584]},"properties":{"id":736,"code_region":"BRE","departement":"22","nom_hopital":"CHLT Trestel - 22","ghi_nom":"CHILT","ght_nom":"GHT Armor","département":"Côtes-d'Armor","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.0339629633246,48.7731529296408]},"properties":{"id":366,"code_region":"BRE","departement":"22","nom_hopital":"CH Paimpol - 22","suppressions":"2014 : hospitalisation pédiatriques fermé;2011 : chirurgie fermé;2003 : maternité fermé","menaces":"2019 : périnatalité réduit (autre);2017 : SMUR menacé;2017 : urgences de nuit menacé","ghi_nom":"","ght_nom":"GHT d'Armor","département":"Côtes-d'Armor","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-2.52094581834468,48.46954027670531]},"properties":{"id":770,"code_region":"BRE","departement":"22","nom_hopital":"CHPP Lamballe - 22","ghi_nom":"CHPP","ght_nom":"GHT Armor","département":"Côtes-d'Armor","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-2.91492642547681,48.40765086879729]},"properties":{"id":771,"code_region":"BRE","departement":"22","nom_hopital":"CHPP Quintin - 22","ghi_nom":"CHPP","ght_nom":"GHT Armor","département":"Côtes-d'Armor","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-2.047507971373977,48.443501862861595]},"properties":{"id":300,"code_region":"BRE","departement":"22","nom_hopital":"CH René Pleven Dinan - 22","suppressions":"2020 : maternité fermé;2009 : pôle santé privatisé","menaces":"2019 : maternité interrompu","ghi_nom":"","ght_nom":"GHT Rance Émeraude","département":"Côtes-d'Armor","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-2.78808443355673,48.548202837635394]},"properties":{"id":653,"code_region":"BRE","departement":"22","nom_hopital":"Hôpital privé des Côtes d'Armor  Plérin - 22","ghi_nom":"","ght_nom":"","département":"Côtes-d'Armor","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.249284079915181,48.23890866269648]},"properties":{"id":332,"code_region":"BRE","departement":"22","nom_hopital":"Plouguernével - 22","menaces":"2012 : maison médicale menacé","ghi_nom":"","ght_nom":"","département":"Côtes-d'Armor","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-2.0467477922459,48.44526525340758]},"properties":{"id":895,"code_region":"BRE","departement":"22","nom_hopital":"Polyclinique du Pays de Rance Dinan - 22","suppressions":"1997 : maternité transféré","ghi_nom":"","ght_nom":"","département":"Côtes-d'Armor","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.44252814068361,48.724341844369086]},"properties":{"id":735,"code_region":"BRE","departement":"22","nom_hopital":"Polyclinique Trégor Lannion - 22","suppressions":"1997 : maternité fermé","ghi_nom":"","ght_nom":"","département":"Côtes-d'Armor","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-4.23478677342267,48.44783443098219]},"properties":{"id":677,"code_region":"BRE","departement":"29","nom_hopital":"CH Ferdinand Grall Landernau - 29","suppressions":"2021 : urgences de nuit fermé","menaces":"2008 : urgences menacé","ghi_nom":"","ght_nom":"GHT Bretagne Occidentale","département":"Finistère","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-4.22122067286037,47.863339447926485]},"properties":{"id":195,"code_region":"BRE","departement":"29","nom_hopital":"CH Hôtel-Dieu Pont L'Abbé - 29","suppressions":"2014 : chirurgie hors ambulatoire transféré;2010 : urgences fermé","menaces":"2001 : maternité transformé","ghi_nom":"","ght_nom":"GHT de l'Union Hospitalière de Cornouaille","département":"Finistère","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.90480605752509,47.86530528404079]},"properties":{"id":196,"code_region":"BRE","departement":"29","nom_hopital":"CHIC Porzou - Concarneau - 29","suppressions":"1992 : chirurgie fermé;1992 : maternité fermé","menaces":"2020 : urgences interrompu;2019 : SMUR réduit (autre);2013 : radiologie interrompu;2010 : urgences menacé;2008 : urgences réduit (autre)","victoires":"2018 : IRM victoire;2008 : urgences maintenu","ghi_nom":"CHIC ","ght_nom":"GHT de l'Union Hospitalière de Cornouaille","département":"Finistère","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-4.09574872108267,47.9859262862852]},"properties":{"id":194,"code_region":"BRE","departement":"29","nom_hopital":"CHIC Théophlle Laënnec - Quimper - 29","menaces":"2021 : urgences menacé","ghi_nom":"CHIC","ght_nom":"GHT de l'Union Hospitalière de Cornouaille","département":"Finistère","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-4.319000311908296,48.570812836378046]},"properties":{"id":882,"code_region":"BRE","departement":"29","nom_hopital":"CH Lesneven","ghi_nom":"","ght_nom":"GHT Bretagne Occidentale","département":"Finistère","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-4.31642535196969,48.08405942499139]},"properties":{"id":193,"code_region":"BRE","departement":"29","nom_hopital":"CH M. Mazéas - Douarnenez - 29","suppressions":"2021 : EHPAD privatisé;2019 : SMUR de nuit fermé;2019 : soins de suite et rééducation privatisé;2015 : chirurgie ambulatoire fermé;2014 : chirurgie hors ambulatoire transféré;1999 : maternité fermé","ghi_nom":"","ght_nom":"GHT de l'Union Hospitalière de Cornouaille","département":"Finistère","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.83293720241137,48.570983240068905]},"properties":{"id":40,"code_region":"BRE","departement":"29","nom_hopital":"CH Morlaix - 29","suppressions":"2018 : cuisine sous-traité;2018 : soins intensifs en cardiologie fermé;2015 : accueil urgences fermé","menaces":"2021 : chirurgie menacé;2021 : psychiatrie réduit (autre);2017 : cardiologie menacé;2017 : psychiatrie menacé","victoires":"urgences maintenu","ghi_nom":"","ght_nom":"GHT de Bretagne Ouest","département":"Finistère","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.57954574067205,48.27288666285838]},"properties":{"id":568,"code_region":"BRE","departement":"29","nom_hopital":"CHRU Carhaix - Plouguer - 29","menaces":"2021 : chirurgie menacé;2021 : médecine gériatrique interrompu;2021 : SMUR interrompu;2016 : SMUR menacé;2016 : urgences menacé;2010 : maternité interrompu;2007 : maternité menacé","victoires":"2008 : chirurgie maintenu;2008 : maternité maintenu","ghi_nom":"CHRU Brest-Carhaix","ght_nom":"GHT de Bretagne Ouest","département":"Finistère","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-4.52829249829508,48.40189017610539]},"properties":{"id":475,"code_region":"BRE","departement":"29","nom_hopital":"CHRU Cavale Blanche Brest -  29","suppressions":"2008 : Allogreffes fermé","menaces":"2020 : chirurgie cardiaque interrompu;2020 : chirurgie cardiaque menacé","ghi_nom":"CHRU Brest-Carhaix","ght_nom":"GHT de Bretagne Ouest","département":"Finistère","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-4.128192744017197,47.980663868218905]},"properties":{"id":897,"code_region":"BRE","departement":"29","nom_hopital":"Clinique Saint-Michel-Sainte-Anne Quimper - 29","suppressions":"2014 : maternité transféré","ghi_nom":"","ght_nom":"","département":"Finistère","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-4.624692364113475,48.43128102216204]},"properties":{"id":883,"code_region":"BRE","departement":"29","nom_hopital":"Clinique Saint-Ronan - 29","suppressions":"2005 : chirurgie transféré;2005 : maternité fermé","ghi_nom":"","ght_nom":"","département":"Finistère","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-4.08444208770589,47.99932548489149]},"properties":{"id":617,"code_region":"BRE","departement":"29","nom_hopital":"EPSM É. Gourmelen Quimper - 29","suppressions":"2019 : résidence Tréouguy fermé;2019 : soins longue durée fermé;2015 : urgences psychiatriques fermé","menaces":"2022 : hôpital de jour interrompu","ghi_nom":"","ght_nom":"GHT de l'Union Hospitalière de Cornouaille","département":"Finistère","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.556129124880469,47.8699421380941]},"properties":{"id":762,"code_region":"BRE","departement":"29","nom_hopital":"GHBS Quimperlé - 29","suppressions":"2007 : chirurgie fermé;2007 : maternité fermé;1999 : pédiatrie fermé","menaces":"2021 : psychiatrie interrompu;2008 : urgences de nuit menacé","ghi_nom":"GHBS","ght_nom":"GHT Sud Bretagne","département":"Finistère","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-4.49482775259498,48.39257137281281]},"properties":{"id":476,"code_region":"BRE","departement":"29","nom_hopital":"HIA Brest - 29","suppressions":"ravitaillement sanitaire des armées fermé","ghi_nom":"","ght_nom":"","département":"Finistère","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-2.00803415214832,48.63786206743449]},"properties":{"id":594,"code_region":"BRE","departement":"35","nom_hopital":"CH Broussais Saint-Malo - 35","suppressions":"2020 : psychiatrie fermé","ghi_nom":"","ght_nom":"GHT Rance Émeraude","département":"Ille-et-Vilaine","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.86628964716056,48.6834683217862]},"properties":{"id":243,"code_region":"BRE","departement":"35","nom_hopital":"CH Cancale - 35","ghi_nom":"","ght_nom":"GHT Rance Émeraude","département":"Ille-et-Vilaine","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.19398888614533,48.35936309262749]},"properties":{"id":679,"code_region":"BRE","departement":"35","nom_hopital":"CH Fougères - 35","menaces":"2021 : urgences réduit (autre);2019 : cardiologie réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Haute-Bretagne","département":"Ille-et-Vilaine","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-2.07992097045956,47.653898519085]},"properties":{"id":678,"code_region":"BRE","departement":"35","nom_hopital":"CHIRC Redon - 35","menaces":"2021 : urgences de nuit réduit (autre)","ghi_nom":"CHIRC","ght_nom":"GHT Haute Bretagne","département":"Ille-et-Vilaine","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.243338785680269,47.944420340960605]},"properties":{"id":889,"code_region":"BRE","departement":"35","nom_hopital":"CH La Guerche – 35","menaces":"2021 : chirurgie réduit (lits fermés);2021 : médecine réduit (lits fermés);2021 : soins de suite et rééducation réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Haute-Bretagne","département":"Ille-et-Vilaine","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.478395251692403,48.45587462398592]},"properties":{"id":891,"code_region":"BRE","departement":"35","nom_hopital":"CHMB Antrain – 35","menaces":"soins de suite et rééducation interrompu","ghi_nom":"","ght_nom":"GHT Haute-Bretagne","département":"Ille-et-Vilaine","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.361041674657007,48.40861559398192]},"properties":{"id":892,"code_region":"BRE","departement":"35","nom_hopital":"CHMB Saint-Brice-en-Coglès ","menaces":"2019 : soins de suite et rééducation interrompu","ghi_nom":"","ght_nom":"GHT Haute-Bretagne","département":"Ille-et-Vilaine","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.22674860293264,48.12279520314919]},"properties":{"id":680,"code_region":"BRE","departement":"35","nom_hopital":"CH Simone Veil Vitré - 35","suppressions":"2022 : urgences de nuit fermé","ghi_nom":"","ght_nom":"GHT Haute Bretagne","département":"Ille-et-Vilaine","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.65173123038421,48.11272820085979]},"properties":{"id":48,"code_region":"BRE","departement":"35","nom_hopital":"CHS Régnier  Rennes - 35","ghi_nom":"CHGR Centre Hospitalier Guillaume Régnier","ght_nom":"GHT Haute-Bretagne","département":"Ille-et-Vilaine","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.660538961888983,48.13789075959995]},"properties":{"id":894,"code_region":"BRE","departement":"35","nom_hopital":"CHU Polyclinique Rennes - 35","ghi_nom":"","ght_nom":"GHT Haute-Bretagne","département":"Ille-et-Vilaine","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.69487434264039,48.12075271597189]},"properties":{"id":893,"code_region":"BRE","departement":"35","nom_hopital":"CHU Ponchaillou Rennes - 35","menaces":"2022 : neurologie menacé","ghi_nom":"","ght_nom":"GHT Haute-Bretagne","département":"Ille-et-Vilaine","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.65300876281408,48.08300007493288]},"properties":{"id":494,"code_region":"BRE","departement":"35","nom_hopital":"CHU Sud Rennes - 35","menaces":"2021 : urgences menacé","ghi_nom":"","ght_nom":"GHT Haute-Bretagne","département":"Ille-et-Vilaine","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.193206005194382,47.96025346510462]},"properties":{"id":890,"code_region":"BRE","departement":"35","nom_hopital":"EHPAD Availles-sur-Seiche – 35","ghi_nom":"","ght_nom":"GHT Haute-Bretagne","département":"Ille-et-Vilaine","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-2.39470080046527,47.93555432673358]},"properties":{"id":318,"code_region":"BRE","departement":"56","nom_hopital":"CH Alphonse Guérin Ploërmel - 56","ghi_nom":"","ght_nom":"GHT Brocéliande Atlantique","département":"Morbihan","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-2.98355280356959,47.6664683155924]},"properties":{"id":38,"code_region":"BRE","departement":"56","nom_hopital":"CHBA Auray - 56","suppressions":"2002 : chirurgie fermé;2000 : maternité fermé","menaces":"2018 : soins de suite et rééducation interrompu;2000 : urgences interrompu","ghi_nom":"","ght_nom":"GHT Brocéliande Atlantique","département":"Morbihan","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-2.745335914140023,47.66437842856074]},"properties":{"id":884,"code_region":"BRE","departement":"56","nom_hopital":"CHBA Vannes - 56","ghi_nom":"","ght_nom":"GHT Brocéliande Atlantique","département":"Morbihan","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.161091128185911,47.345374811852]},"properties":{"id":886,"code_region":"BRE","departement":"56","nom_hopital":"CHBI Le Palais - 56","suppressions":"1997 : maternité fermé","ghi_nom":"","ght_nom":"GHT Brocéliande Atlantique","département":"Morbihan","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-2.977017716128183,48.071900039467636]},"properties":{"id":888,"code_region":"BRE","departement":"56","nom_hopital":"CHCB J. de Kervénoaël Pontivy - 56","suppressions":"2021 : soins de suite et rééducation fermé","ghi_nom":"CHCB","ght_nom":"","département":"Morbihan","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-2.91195111656445,48.08660643722949]},"properties":{"id":317,"code_region":"BRE","departement":"56","nom_hopital":"CHCB Pontivy - 56","menaces":"2021 : anesthésie menacé;2021 : maternité menacé;2021 : pédiatrie menacé;2021 : soins de suite et rééducation menacé;2021 : soins palliatifs menacé;2021 : urgences menacé","ghi_nom":"CHCB","ght_nom":"GHT Centre Bretagne","département":"Morbihan","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-2.133250182530376,47.818239092005115]},"properties":{"id":767,"code_region":"BRE","departement":"56","nom_hopital":"CHIRC Carentoir - 56","ghi_nom":"CHIRC","ght_nom":"GHT Haute Bretagne","département":"Morbihan","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-2.913331968853283,48.08515619127224]},"properties":{"id":584,"code_region":"BRE","departement":"56","nom_hopital":"Clin. de Noyal-Pontivy - 56","ghi_nom":"","ght_nom":"GHT Centre Bretagne","département":"Morbihan","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-2.38451547608081,47.81247303390579]},"properties":{"id":887,"code_region":"BRE","departement":"56","nom_hopital":"Clinique des Augustines Malestroit - 56","suppressions":"2003 : maternité fermé","ghi_nom":"","ght_nom":"","département":"Morbihan","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.3983454283349,47.73601176725849]},"properties":{"id":320,"code_region":"BRE","departement":"56","nom_hopital":"Clinique. du Ter - Ploemeur - 56","suppressions":"2009 : maternité transféré","ghi_nom":"","ght_nom":"GHT de Bretagne Sud","département":"Morbihan","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.398846468789241,47.734906029034306]},"properties":{"id":896,"code_region":"BRE","departement":"56","nom_hopital":"EHPAD Kerbenès Ploemeur - 56","menaces":"2021 : soins de suite et rééducation interrompu","ghi_nom":"","ght_nom":"GHT Sud Bretagne","département":"Morbihan","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.31757631470779,47.830422976113994]},"properties":{"id":322,"code_region":"BRE","departement":"56","nom_hopital":"EPSM Charcot - Caudan - 56","ghi_nom":"","ght_nom":"GHT de Bretagne Sud","département":"Morbihan","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-2.754695684984488,47.699493922896515]},"properties":{"id":885,"code_region":"BRE","departement":"56","nom_hopital":"EPSM Saint-Avé - 56","suppressions":"2021 : gérontopsychiatrie fermé;2021 : hospitalisation addictologie fermé","menaces":"2021 : accueil de crise réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Brocéliande Atlantique","département":"Morbihan","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.30370399896323,47.79919121024759]},"properties":{"id":319,"code_region":"BRE","departement":"56","nom_hopital":"GHBS CRG Hennebont - 56","suppressions":"2002 : chirurgie fermé;2002 : maternité fermé","menaces":"2021 : soins de suite et rééducation interrompu","ghi_nom":"GHBS","ght_nom":"GHT Sud Bretagne","département":"Morbihan","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.35617870502476,47.75312018531079]},"properties":{"id":321,"code_region":"BRE","departement":"56","nom_hopital":"GHBS du Scorff - Lorient – 56","menaces":"2009 : maternité menacé;2009 : pédiatrie menacé","ghi_nom":"GHBS","ght_nom":"GHT Sud Bretagne","département":"Morbihan","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.48843849962399,48.026946264671004]},"properties":{"id":764,"code_region":"BRE","departement":"56","nom_hopital":"GHBS Le Faouet - 56","ghi_nom":"GHBS","ght_nom":"GHT Sud Bretagne","département":"Morbihan","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.3187504906315,47.71919999302769]},"properties":{"id":763,"code_region":"BRE","departement":"56","nom_hopital":"GHBS Port-Louis Riantec - 56","suppressions":"2016 : soins de suite et rééducation fermé","ghi_nom":"GHBS","ght_nom":"GHT Sud Bretagne","département":"Morbihan","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.19818160223529,48.069120339922506]},"properties":{"id":316,"code_region":"BRE","departement":"56","nom_hopital":"HL Alfred Brard Guémené-sur-Scorff - 56","menaces":"2014 : administration menacé;2014 : cuisine menacé;2014 : médecine menacé;2008 : direction fusionné","ghi_nom":"","ght_nom":"","département":"Morbihan","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[9.155701484244931,41.3873361766553]},"properties":{"id":351,"code_region":"COR","departement":"2A","nom_hopital":"CH Bonifacio – 2A","ghi_nom":"","ght_nom":"","département":"Corse-du-Sud","région":"Corse"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[8.73912669176363,41.919352557873495]},"properties":{"id":78,"code_region":"COR","departement":"2A","nom_hopital":"CH Castellucio - Ajaccio 2A","ghi_nom":"","ght_nom":"","département":"Corse-du-Sud","région":"Corse"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.43863771379978,47.085073113291685]},"properties":{"id":185,"code_region":"CVL","departement":"18","nom_hopital":"CH J. Coeur - Bourges - 18","menaces":"2021 : cardiologie réduit (lits fermés);2021 : gériatrie réduit (lits fermés);2021 : réanimation réduit (lits fermés);2021 : SMUR réduit (autre);2021 : urgences réduit (autre);2020 : urgences menacé","ghi_nom":"","ght_nom":"GHT du Cher","département":"Cher","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.49649960370329,46.72598961803041]},"properties":{"id":186,"code_region":"CVL","departement":"18","nom_hopital":"CH Saint Amand-Montrond - 18","suppressions":"2003 : chirurgie fermé","menaces":"2013 : urgences menacé","ghi_nom":"","ght_nom":"GHT du Cher","département":"Cher","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.0516968021641,47.22700924225381]},"properties":{"id":184,"code_region":"CVL","departement":"18","nom_hopital":"CH Vierzon - 18","menaces":"2018 : chirurgie menacé;2018 : pédiatrie menacé;2017 : maternité menacé","victoires":"2019 : chirurgie victoire;2018 : maternité victoire","ghi_nom":"","ght_nom":"GHT du Cher","département":"Cher","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.502309320824113,46.72106782088834]},"properties":{"id":815,"code_region":"CVL","departement":"18","nom_hopital":"Clinique des Grainetières Saint-Amand-Montrond - 18","ghi_nom":"","ght_nom":"","département":"Cher","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.37509891825347,47.078232033189494]},"properties":{"id":814,"code_region":"CVL","departement":"18","nom_hopital":"EPSIC G. Sand Bourges - 18","menaces":"psychiatrie réduit (lits fermés)","ghi_nom":"EPSIC George Sand","ght_nom":"GHT du Cher","département":"Cher","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.11552232514289,46.821737426548395]},"properties":{"id":314,"code_region":"CVL","departement":"18","nom_hopital":"EPSIC G. Sand Chezal-Benoit - 18","menaces":"2019 : psychiatrie réduit (lits fermés)","ghi_nom":"EPSIC George Sand","ght_nom":"","département":"Cher","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.35790578022699,48.074503827609284]},"properties":{"id":181,"code_region":"CVL","departement":"28","nom_hopital":"CH Chateaudun - 28","suppressions":"2018 : maternité fermé;2017 : cardiologie fermé;2017 : chirurgie fermé","menaces":"2009 : chirurgie réduit (autre)","victoires":"dentisterie victoire;urgences victoire","ghi_nom":"","ght_nom":"GHT Eure-et-Loir","département":"Eure-et-Loir","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.505958584801051,48.42066461748905]},"properties":{"id":816,"code_region":"CVL","departement":"28","nom_hopital":"CHDC L. Pasteur Le coudray - 28","ghi_nom":"CHDC","ght_nom":"GHT Eure-et-Loir","département":"Eure-et-Loir","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.821680425137433,48.321739559331]},"properties":{"id":180,"code_region":"CVL","departement":"28","nom_hopital":"CH Nogent le Rotrou - 28","suppressions":"2008 : chirurgie fermé;2002 : maternité fermé","ghi_nom":"","ght_nom":"GHT Eure-et-Loir","département":"Eure-et-Loir","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.69531832848031,46.79833651899339]},"properties":{"id":63,"code_region":"CVL","departement":"36","nom_hopital":"CHCLB Châteauroux - 36","menaces":"2021 : chirurgie réduit (lits fermés)","ghi_nom":"CHCLB","ght_nom":"GHT de l'Indre","département":"Indre","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.06033222858025,46.63406566325318]},"properties":{"id":64,"code_region":"CVL","departement":"36","nom_hopital":"CHCLB Le Blanc - 36","suppressions":"2018 : maternité fermé","menaces":"2021 : cancérologie menacé;2021 : cardiologie menacé;2021 : chirurgie menacé;2021 : gynécologie menacé;2021 : phlébologie menacé;2019 : chirurgie réduit (autre);2019 : ophtalmologie réduit (autre);2011 : maternité menacé","victoires":"2022 : chirurgie maintenu;2012 : maternité maintenu","ghi_nom":"CHCLB","ght_nom":"GHT de l'Indre","département":"Indre","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.99515340885827,46.95820387979129]},"properties":{"id":343,"code_region":"CVL","departement":"36","nom_hopital":"CH de la Tour Blanche Issoudun - 36","suppressions":"2014 : chirurgie fermé;1992 : maternité fermé","ghi_nom":"","ght_nom":"GHT de l'Indre","département":"Indre","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.98630998859074,46.581786899384696]},"properties":{"id":385,"code_region":"CVL","departement":"36","nom_hopital":"CH La Châtre - 36","suppressions":"1990 : maternité fermé","menaces":"2019 : médecine réduit (lits fermés);2019 : permanence des soins menacé;2019 : soins de suite et rééducation réduit (lits fermés);2019 : soins palliatifs menacé","ghi_nom":"","ght_nom":"GHT de l'Indre","département":"Indre","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.293542485469408,47.1875066941998]},"properties":{"id":349,"code_region":"CVL","departement":"37","nom_hopital":"CHC Chinon - 37","suppressions":"1997 : chirurgie fermé","menaces":"2022 : maternité interrompu;2022 : psychiatrie réduit (autre);2022 : SMUR interrompu;2022 : urgences interrompu","ghi_nom":"CHC","ght_nom":"","département":"Indre-et-Loire","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.981624498549612,47.4082000081809]},"properties":{"id":7,"code_region":"CVL","departement":"37","nom_hopital":"CHIAC Amboise - 37","suppressions":"2021 : périnatalité fermé;2003 : maternité fermé","menaces":"2022 : urgences interrompu;2017 : périnatalité menacé;2014 : périnatalité réduit (autre)","ghi_nom":"CHIAC","ght_nom":"GHT Touraine-Val de Loire","département":"Indre-et-Loire","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.919329259730077,47.5880058533852]},"properties":{"id":325,"code_region":"CVL","departement":"37","nom_hopital":"CHIAC Château-Renault - 37","ghi_nom":"","ght_nom":"GHT Touraine-Val de Loire","département":"Indre-et-Loire","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.001930226057765,47.129912054936646]},"properties":{"id":817,"code_region":"CVL","departement":"37","nom_hopital":"CH Paul Martinais Loches - 37","suppressions":"1991 : maternité fermé","menaces":"2021 : urgences interrompu;2019 : SMUR réduit (autre);2016 : chirurgie réduit (autre)","ghi_nom":"","ght_nom":"GHT Touraine - Val de Loire","département":"Indre-et-Loire","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.688912152960486,48.144533798837266]},"properties":{"id":696,"code_region":"CVL","departement":"37","nom_hopital":"CHP Saint-Grégoire - 37","menaces":"2021 : maternité menacé","ghi_nom":"","ght_nom":"","département":"Ille-et-Vilaine","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.669313446062306,47.38770867618081]},"properties":{"id":562,"code_region":"CVL","departement":"37","nom_hopital":"CHRU Bretonneau - Tours 37","menaces":"2022 : psychiatrie menacé","ghi_nom":"CHRU","ght_nom":"GHT Touraine-Val de Loire","département":"Indre-et-Loire","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.6805572662512,47.3899894554293]},"properties":{"id":563,"code_region":"CVL","departement":"37","nom_hopital":"CHRU Clocheville Tours - 37","menaces":"2022 : psychiatrie menacé","ghi_nom":"CHRU","ght_nom":"GHT Touraine-Val de Loire","département":"Indre-et-Loire","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.712089346524368,47.35014296642268]},"properties":{"id":564,"code_region":"CVL","departement":"37","nom_hopital":"CHRU Trousseau Chambray - 37","menaces":"2022 : psychiatrie menacé;2017 : cardiologie réduit (autre);2017 : neurochirurgie réduit (autre);2017 : ORL réduit (autre);2017 : orthopédie réduit (autre)","ghi_nom":"CHRU","ght_nom":"GHT Touraine-Val de Loire","département":"Indre-et-Loire","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.34344987685607,47.60309518034359]},"properties":{"id":182,"code_region":"CVL","departement":"41","nom_hopital":"CH Blois - 41 ","menaces":"2018 : maternité réduit (autre);2014 : centre de planification et d'éducation familiale (CPEF) menacé;2014 : centre IVG menacé","ghi_nom":"","ght_nom":"GHT de Loir et Cher","département":"Loir-et-Cher","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.73145199775068,47.36035632044499]},"properties":{"id":183,"code_region":"CVL","departement":"41","nom_hopital":"CHRL Romorantin-Lanthenay - 41","suppressions":"2020 : soins à domicile transféré","menaces":"2005 : IVG menacé;2005 : maternité menacé","ghi_nom":"","ght_nom":"GHT Loir-et-Cher","département":"Loir-et-Cher","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.55314747870625,47.27519683015109]},"properties":{"id":818,"code_region":"CVL","departement":"41","nom_hopital":"CH Selles-sur-Cher","menaces":"2019 : soins de suite et rééducation réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Loir-et-Cher","département":"Loir-et-Cher","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.876282891920821,47.75421956737059]},"properties":{"id":765,"code_region":"CVL","departement":"41","nom_hopital":"CHVM Montoire-sur-le-Loir - 41","ghi_nom":"CHVM","ght_nom":"GHT Loir-et-Cher","département":"Loir-et-Cher","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.06258829678692,47.793874784177994]},"properties":{"id":67,"code_region":"CVL","departement":"41","nom_hopital":"CHVM Vendôme - 41","suppressions":"1999 : chirurgie transféré;1973 : maternité fermé","ghi_nom":"CHVM","ght_nom":"GHT Loir-et-Cher","département":"Loir-et-Cher","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.318407426967262,47.53023404177958]},"properties":{"id":904,"code_region":"CVL","departement":"41","nom_hopital":"Clinique Chesnaie Chailles - 41","ghi_nom":"","ght_nom":"","département":"Loir-et-Cher","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.33765844037762,47.5824762448702]},"properties":{"id":498,"code_region":"CVL","departement":"41","nom_hopital":"EHPAD Gaston d'Orléans Blois - 41","ghi_nom":"","ght_nom":"GHT de Loir et Cher","département":"Loir-et-Cher","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.772648221619428,47.996926396059116]},"properties":{"id":143,"code_region":"CVL","departement":"45","nom_hopital":"CHAM Montargis - 45","ghi_nom":"","ght_nom":"GHT du Loiret","département":"Loiret","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.63466585340786,47.69089813784679]},"properties":{"id":145,"code_region":"CVL","departement":"45","nom_hopital":"CH P. Dezarnaulds Gien - 45","suppressions":"2017 : chirurgie transféré","ghi_nom":"","ght_nom":"GHT du Loiret","département":"Loiret","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.24979776288622,48.1714864146471]},"properties":{"id":142,"code_region":"CVL","departement":"45","nom_hopital":"CH Pithiviers - 45","suppressions":"2016 : maternité fermé;1997 : chirurgie fermé","menaces":"2020 : urgences menacé;2019 : SMUR interrompu;2018 : urgences de nuit menacé","ghi_nom":"","ght_nom":"GHT du Loiret","département":"Loiret","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.92079883880647,47.83675130679801]},"properties":{"id":10,"code_region":"CVL","departement":"45","nom_hopital":"CHR Orléans - 45","menaces":"2022 : urgences réduit (autre);2017 : maternité menacé;IVG menacé","ghi_nom":"","ght_nom":"GHT du Loiret","département":"Loiret","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.94254831784638,47.94554249544981]},"properties":{"id":144,"code_region":"CVL","departement":"45","nom_hopital":"EPSM Fleury-les-Aubrais - 45","ghi_nom":"","ght_nom":"GHT du Loiret","département":"Loiret","région":"Centre-Val de Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.71887189092236,49.78944962442658]},"properties":{"id":561,"code_region":"GRE","departement":"08","nom_hopital":"Centre hospitalier Belair - 08","ghi_nom":"","ght_nom":"","département":"Ardennes","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.71950850997753,49.7601182621569]},"properties":{"id":209,"code_region":"GRE","departement":"08","nom_hopital":"CHINA Charleville-Mézières - 08","suppressions":"2008 : hématologie fermé","menaces":"2022 : hospitalisation réduit (autre);2022 : rhumatologie réduit (autre);2021 : laboratoire menacé;2021 : pharmacie menacé;2020 : gastro-entérologie interrompu","ghi_nom":"CHINA","ght_nom":"Nord-Ardennes (GHT 1)","département":"Ardennes","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.70616044412614,49.9942596708681]},"properties":{"id":360,"code_region":"GRE","departement":"08","nom_hopital":"CHINA Fumay - 08","menaces":"2021 : SMUR menacé;2021 : urgences menacé","ghi_nom":"CHINA","ght_nom":"Nord-Ardennes (GHT 1)","département":"Ardennes","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.747641590050887,49.8154307832206]},"properties":{"id":747,"code_region":"GRE","departement":"08","nom_hopital":"CHINA Nouzonville - 08","ghi_nom":"CHINA","ght_nom":"GHT Nord-Ardennes","département":"Ardennes","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.94332567694052,49.70339974982709]},"properties":{"id":417,"code_region":"GRE","departement":"08","nom_hopital":"CHINA Sedan - 08","suppressions":"2020 : cardiologie fermé;2018 : soins intensifs en cardiologie fermé","menaces":"2022 : chirurgie réduit (autre);2022 : médecine réduit (autre);2021 : maternité menacé;2021 : soins de suite et rééducation réduit (lits fermés);2020 : soins intensifs menacé;2016 : urgences de nuit menacé;2014 : urgences pédiatriques menacé;pôle mère-enfant menacé","victoires":"2018 : maternité maintenu;2018 : pédiatrie maintenu;2018 : urgences maintenu","ghi_nom":"CHINA","ght_nom":"Nord-Ardennes (GHT 1)","département":"Ardennes","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.63730633214742,49.9421405992748]},"properties":{"id":359,"code_region":"GRE","departement":"08","nom_hopital":"Clinique Revin - 08","suppressions":"2001 : maternité fermé","ghi_nom":"","ght_nom":"","département":"Ardennes","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.36538855136989,49.50891937260398]},"properties":{"id":210,"code_region":"GRE","departement":"08","nom_hopital":"GHSA Rethel - 08","suppressions":"2011 : maternité fermé","menaces":"2018 : chirurgie interrompu","ghi_nom":"GHSA Sud Ardennes","ght_nom":"Marne Sud-Ardennes (GHT 2)","département":"Ardennes","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.70140480342166,49.39496872479899]},"properties":{"id":361,"code_region":"GRE","departement":"08","nom_hopital":"GHSA Vouziers - 08","suppressions":"2009 : endoscopie digestive fermé;2008 : chirurgie fermé;2004 : réanimation fermé;2004 : unité de surveillance continue fermé;1993 : maternité fermé","menaces":"2022 : EHPAD réduit (lits fermés);2022 : urgences réduit (autre);2021 : médecine réduit (autre);2019 : urgences menacé;bloc chirurgical menacé","ghi_nom":"GHSA Sud Ardennes","ght_nom":"Marne Sud-Ardennes (GHT 2)","département":"Ardennes","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.82449460378407,50.136424707335294]},"properties":{"id":208,"code_region":"GRE","departement":"08","nom_hopital":"Givet - 08","ghi_nom":"","ght_nom":"","département":"Ardennes","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.74475527040872,49.742332545448804]},"properties":{"id":724,"code_region":"GRE","departement":"08","nom_hopital":"Villers-Semeuse - 08","suppressions":"2001 : maternité fermé","ghi_nom":"","ght_nom":"","département":"Ardennes","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.05306588293121,48.30653309146059]},"properties":{"id":838,"code_region":"GRE","departement":"10","nom_hopital":"Clinique de Champagne Troyes - 10","suppressions":"2021 : maternité fermé","ghi_nom":"","ght_nom":"","département":"Aube","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.523776367408387,48.39228960693625]},"properties":{"id":842,"code_region":"GRE","departement":"10","nom_hopital":"EPSM Brienne-le-château - 10","menaces":"2018 : psychiatrie réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Aube et Sézannais","département":"Aube","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.502078976993858,48.493614003108526]},"properties":{"id":841,"code_region":"GRE","departement":"10","nom_hopital":"GHAM Nogent-sur-Seine","ghi_nom":"GHAM","ght_nom":"GHT Aube et Sézannais","département":"Aube","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.716625017682169,48.5159902548276]},"properties":{"id":840,"code_region":"GRE","departement":"10","nom_hopital":"GHAM Romilly-sur-Seine – 10","ghi_nom":"GHAM","ght_nom":"GHT Aube et Sézannais","département":"Aube","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.714109375743643,48.231178419214544]},"properties":{"id":839,"code_region":"GRE","departement":"10","nom_hopital":"HL Saint-Nicolas Bar-sur-Aube - 10","suppressions":"2000 : maternité fermé","menaces":"1999 : maternité menacé","ghi_nom":"","ght_nom":"GHT Aube et Sézannais","département":"Aube","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.95179483114682,49.03110618538938]},"properties":{"id":836,"code_region":"GRE","departement":"51","nom_hopital":"CAMSP Épernay - 51","victoires":"2022 : pédiatrie maintenu","ghi_nom":"","ght_nom":"","département":"Marne","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.90821492499965,49.09279794493449]},"properties":{"id":633,"code_region":"GRE","departement":"51","nom_hopital":"CHA Sainte-Ménéhould - 51","suppressions":"1990 : maternité fermé","menaces":"2018 : chirurgie interrompu","ghi_nom":"CHA","ght_nom":"GHT de Champagne","département":"Marne","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.95506267023662,49.03197425201669]},"properties":{"id":577,"code_region":"GRE","departement":"51","nom_hopital":"CH Auban-Moët Épernay - 51","menaces":"2010 : maternité menacé","victoires":"2011 : maternité maintenu","ghi_nom":"","ght_nom":"","département":"Marne","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.37033244599405,48.97131242648428]},"properties":{"id":280,"code_region":"GRE","departement":"51","nom_hopital":"CH Châlons-en-Champagne - 51","menaces":"gastrologie et dermatologie fusionné","ghi_nom":"","ght_nom":"GHT Marne Sud-Ardennes","département":"Marne","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.020928407536592,49.228702247342774]},"properties":{"id":42,"code_region":"GRE","departement":"51","nom_hopital":"CHU Reims - 51","menaces":"2020 : bloc opératoire menacé;2018 : urgences menacé","ghi_nom":"","ght_nom":"GHT Marne Sud-Ardennes","département":"Marne","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.58931388075064,48.72478882931891]},"properties":{"id":433,"code_region":"GRE","departement":"51","nom_hopital":"CH Vitry le François - 51","suppressions":"2017 : bloc opératoire fermé;2017 : chirurgie fermé;2015 : maternité fermé","ghi_nom":"","ght_nom":"GHT Marne Haute-Marne Meuse","département":"Marne","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.370653326648729,48.97331271606768]},"properties":{"id":856,"code_region":"GRE","departement":"51","nom_hopital":"Clinique Prioulet - Châlons-en-Champagne - 51","ghi_nom":"","ght_nom":"","département":"Marne","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.72260468555595,48.72408893384729]},"properties":{"id":311,"code_region":"GRE","departement":"51","nom_hopital":"GHAM Sézanne - 51","suppressions":"1997 : chirurgie fermé;1976 : maternité fermé","ghi_nom":"GHAM","ght_nom":"GHT Aube et Sézannais","département":"Marne","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.002211231114263,49.21843882635559]},"properties":{"id":855,"code_region":"GRE","departement":"51","nom_hopital":"Polyclinique Reims-Bezannes - 51","menaces":"2021 : urgences interrompu","ghi_nom":"","ght_nom":"","département":"Marne","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.73548292087563,47.94609406304138]},"properties":{"id":570,"code_region":"GRE","departement":"52","nom_hopital":"CH Bourbonne-les-Bains","ghi_nom":"","ght_nom":"GHT 21-52","département":"Haute-Marne","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.140038965658841,48.12077171804378]},"properties":{"id":12,"code_region":"GRE","departement":"52","nom_hopital":"CH Chaumont - 52","suppressions":"2015 : réanimation fermé","menaces":"2014 : réanimation menacé","ghi_nom":"","ght_nom":"GHT Côte d'Or - Haute Marne","département":"Haute-Marne","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.96500926220016,48.65515199409408]},"properties":{"id":625,"code_region":"GRE","departement":"52","nom_hopital":"CH Genevieve De Gaulle Anthonioz - Saint-Dizier - 52","menaces":"2021 : urgences réduit (autre)","ghi_nom":"CHGDGA ","ght_nom":"GHT Marne Haute-Marne Meuse","département":"Haute-Marne","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.95659631759707,48.63468644280981]},"properties":{"id":624,"code_region":"GRE","departement":"52","nom_hopital":"CHHM André Breton Saint-Dizier - 52","ghi_nom":"CHHM","ght_nom":"GHT Marne Haute-Marne Meuse","département":"Haute-Marne","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.3368288759666,47.8669895339082]},"properties":{"id":569,"code_region":"GRE","departement":"52","nom_hopital":"CH Langres - 52","suppressions":"2019 : urgences de nuit fermé;2016 : maternité fermé","ghi_nom":"","ght_nom":"GHT Côte d'Or - Haute Marne","département":"Haute-Marne","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.017734740460317,47.17320987305254]},"properties":{"id":628,"code_region":"GRE","departement":"52","nom_hopital":"CHS Pierre Lôo La Charité-sur-Loire - 52","ghi_nom":"","ght_nom":"GHT Nièvre","département":"Nièvre","région":"Bourgogne-Franche-Comté"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.965627937967711,48.65678416693461]},"properties":{"id":854,"code_region":"GRE","departement":"52","nom_hopital":"Clin. François Ier Saint-Dizier - 52","suppressions":"2017 : chimiothérapie transféré;2017 : chirurgie transféré","ghi_nom":"","ght_nom":"","département":"Haute-Marne","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.13764637940535,48.444187682086856]},"properties":{"id":632,"code_region":"GRE","departement":"52","nom_hopital":"Hôpital de Joinville - 52","menaces":"2018 : médecine menacé","ghi_nom":"","ght_nom":"GHT Marne Haute-Marne Meuse","département":"Haute-Marne","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.943620948056383,48.58062569214199]},"properties":{"id":859,"code_region":"GRE","departement":"54","nom_hopital":"CH 3H Santé Cirey-sur-Vezouze - 54","menaces":"2022 : soins de suite et rééducation menacé","ghi_nom":"","ght_nom":"GHT Sud Lorraine","département":"Meurthe-et-Moselle","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.49244795956643,48.59215948787918]},"properties":{"id":261,"code_region":"GRE","departement":"54","nom_hopital":"CH Lunéville - 54","suppressions":"2020 : laboratoire fermé","ghi_nom":"","ght_nom":"GHT Sud Lorraine","département":"Meurthe-et-Moselle","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.054929024684041,48.90313883308988]},"properties":{"id":260,"code_region":"GRE","departement":"54","nom_hopital":"CH Pont à Mousson - 54","suppressions":"2021 : urgences fermé;2010 : chirurgie ambulatoire fermé;2009 : chirurgie hors ambulatoire fermé;2005 : maternité fermé","menaces":"2013 : urgences de nuit interrompu","ghi_nom":"","ght_nom":"GHT Sud Lorraine","département":"Meurthe-et-Moselle","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.14999083003038,48.64740479352039]},"properties":{"id":608,"code_region":"GRE","departement":"54","nom_hopital":"CHRU Nancy Brabois - 54","menaces":"2022 : cardiologie menacé;2021 : anesthésie menacé","ghi_nom":"CHRU","ght_nom":"GHT Sud Lorraine","département":"Meurthe-et-Moselle","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.19163865695229,48.68453983911508]},"properties":{"id":11,"code_region":"GRE","departement":"54","nom_hopital":"CHRU Nancy Central - 54","suppressions":"2021 : chirurgie digestive fermé","ghi_nom":"","ght_nom":"GHT Sud Lorraine","département":"Meurthe-et-Moselle","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.88740560205684,48.676217701152595]},"properties":{"id":601,"code_region":"GRE","departement":"54","nom_hopital":"CH St Charles Toul - 54","menaces":"2022 : bloc opératoire menacé;2022 : maternité réduit (autre);2022 : urgences de nuit interrompu;2021 : urgences menacé;2020 : maternité interrompu","ghi_nom":"","ght_nom":"GHT Sud Lorraine","département":"Meurthe-et-Moselle","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.910380682556065,48.66904270196427]},"properties":{"id":858,"code_region":"GRE","departement":"54","nom_hopital":"CHU Dommartin-les-Toul - 54","suppressions":"2011 : chirurgie de la main fermé","ghi_nom":"","ght_nom":"","département":"Meurthe-et-Moselle","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.937003837444141,49.24811238316289]},"properties":{"id":41,"code_region":"GRE","departement":"54","nom_hopital":"CH Val de Briey - 54","menaces":"2021 : urgences menacé;2021 : urgences de nuit interrompu;2019 : maternité interrompu;2019 : soins de suite et rééducation interrompu","ghi_nom":"","ght_nom":"GHT Lorraine Nord","département":"Meurthe-et-Moselle","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.136335191404275,48.6774898828274]},"properties":{"id":860,"code_region":"GRE","departement":"54","nom_hopital":"CPN Laxou - 54","menaces":"2017 : soins libres réduit (lits fermés)","ghi_nom":"","ght_nom":"","département":"Meurthe-et-Moselle","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.768578033015305,49.51438611271269]},"properties":{"id":259,"code_region":"GRE","departement":"54","nom_hopital":"Longwy - 54\nHôpital Mt St Martin","suppressions":"2019 : centre périnatal fermé;2016 : maternité fermé;2012 : pédiatrie fermé","ghi_nom":"","ght_nom":"","département":"Meurthe-et-Moselle","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.143768065397409,48.701328760606096]},"properties":{"id":610,"code_region":"GRE","departement":"54","nom_hopital":"Polyclinique Majorelle Nancy - 54","ghi_nom":"","ght_nom":"","département":"Meurthe-et-Moselle","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.16242143556303,48.7710796612489]},"properties":{"id":281,"code_region":"GRE","departement":"55","nom_hopital":"CH Bar le Duc - 55","suppressions":"2019 : maternité fermé;2019 : pédiatrie fermé","menaces":"2021 : urgences menacé;2018 : maternité réduit (autre);2009 : chirurgie réduit (autre)","ghi_nom":"","ght_nom":"GHT Marne Haute-Marne Meuse","département":"Meuse","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.588189751220899,48.76022750484059]},"properties":{"id":861,"code_region":"GRE","departement":"55","nom_hopital":"CH Saint-Charles commercy - 55","suppressions":"1999 : SMUR fermé;1992 : chirurgie fermé;1992 : maternité fermé","ghi_nom":"","ght_nom":"GHT Sud Lorraine","département":"Meuse","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.129855706445076,48.78987179539815]},"properties":{"id":853,"code_region":"GRE","departement":"55","nom_hopital":"CHS Fains-Veel - 55","menaces":"gériatrie menacé","ghi_nom":"","ght_nom":"GHT Marne Haute-Marne Meuse","département":"Meuse","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.53973799820335,48.8897418414121]},"properties":{"id":631,"code_region":"GRE","departement":"55","nom_hopital":"CHVSM Sainte-Anne Saint-Mihiel - 55","menaces":"2021 : réanimation menacé;2019 : bloc opératoire réduit (autre);2019 : médecine réduit (lits fermés);2019 : pneumologie réduit (lits fermés)","ghi_nom":"CHVSM","ght_nom":"GHT Marne Haute-Marne Meuse","département":"Meuse","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.38304160622708,49.155211219523075]},"properties":{"id":630,"code_region":"GRE","departement":"55","nom_hopital":"CHVSM Saint-Nicolas Verdun - 55","menaces":"2021 : réanimation menacé","ghi_nom":"CHVSM","ght_nom":"GHT Marne Haute-Marne Meuse","département":"Meuse","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.89547450423955,49.186439973060395]},"properties":{"id":270,"code_region":"GRE","departement":"57","nom_hopital":"CHIFSA Forbach - 57","ghi_nom":"CHIFSA","ght_nom":"GHT Meuse-Est","département":"Moselle","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.70561142057291,49.0978991839136]},"properties":{"id":84,"code_region":"GRE","departement":"57","nom_hopital":"CHIFSA Saint-Avold  - 57","suppressions":"2011 : maternité fermé;2011 : pédiatrie fermé","ghi_nom":"CHIFSA","ght_nom":"GHT Meuse-Est","département":"Moselle","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.49945963009736,49.18388861176351]},"properties":{"id":640,"code_region":"GRE","departement":"57","nom_hopital":"CH Le Secq de Crépy Boulay-Moselle 57","suppressions":"2015 : urgences consultations non programmées fermé;1987 : chirurgie fermé;1987 : maternité fermé","ghi_nom":"","ght_nom":"GHT Lorraine Nord","département":"Moselle","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.068992315742895,49.32605277967011]},"properties":{"id":358,"code_region":"GRE","departement":"57","nom_hopital":"CHRMT Hayange - 57","suppressions":"2018 : soins de suite et réadaptation polyvalente fermé;2016 : pneumologie fermé;2013 : urgences fermé;2012 : bloc opératoire fermé;2012 : chirurgie fermé","menaces":"2018 : médecine polyvalente réduit (lits fermés)","ghi_nom":"CHRMT","ght_nom":"GHT Lorraine Nord","département":"Moselle","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.07049181595014,49.1097075739671]},"properties":{"id":271,"code_region":"GRE","departement":"57","nom_hopital":"CH Sarreguemines - 57","menaces":"2018 : pédiatrie interrompu","ghi_nom":"","ght_nom":"GHT Moselle-Est","département":"Moselle","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.270142807087981,49.07694430935789]},"properties":{"id":851,"code_region":"GRE","departement":"57","nom_hopital":"CHS Jury-les-Metz - 57","menaces":"2022 : psychiatrie menacé","ghi_nom":"","ght_nom":"GHT Lorraine Nord","département":"Moselle","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.003449715447745,48.673556355647214]},"properties":{"id":852,"code_region":"GRE","departement":"57","nom_hopital":"CHS Lorquin - 57","suppressions":"hôpital de jour fermé","menaces":"2015 : administration réduit (autre);2015 : admission réduit (autre)","ghi_nom":"","ght_nom":"GHT Lorraine Nord","département":"Moselle","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.176355885934969,49.11959072214447]},"properties":{"id":5,"code_region":"GRE","departement":"57","nom_hopital":"HIA Metz - 57","ghi_nom":"","ght_nom":"","département":"Moselle","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.72267949270634,49.1114355200373]},"properties":{"id":857,"code_region":"GRE","departement":"57","nom_hopital":"Hôpital de Saint-Avold - 57","menaces":"2021 : chirurgie réduit (lits fermés)","ghi_nom":"","ght_nom":"","département":"Moselle","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.056438192292185,48.734023750055435]},"properties":{"id":419,"code_region":"GRE","departement":"57","nom_hopital":"Sarrebourg - 57","menaces":"2019 : maternité menacé","ghi_nom":"","ght_nom":"","département":"Moselle","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.792567276511609,48.81873198985467]},"properties":{"id":844,"code_region":"GRE","departement":"67","nom_hopital":"CH Haguenau - 67","menaces":"2013 : réanimation réduit (lits fermés);2013 : soins intensifs réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Grand Est 10","département":"Bas-Rhin","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.932351713280258,49.04167032722848]},"properties":{"id":843,"code_region":"GRE","departement":"67","nom_hopital":"CHI Lauter Wissemboug - 67","menaces":"2018 : maternité menacé","ghi_nom":"","ght_nom":"GHT Grand Est 10","département":"Bas-Rhin","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.721775023083075,48.730272924450794]},"properties":{"id":845,"code_region":"GRE","departement":"67","nom_hopital":"CH La Grafenbourg Brumath - 67","suppressions":"2006 : psychiatrie transféré","ghi_nom":"","ght_nom":"GHT Grand Est 10","département":"Bas-Rhin","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.34943387305299,48.74615253424848]},"properties":{"id":846,"code_region":"GRE","departement":"67","nom_hopital":"CH Sainte-Catherine Saverne - 67","suppressions":"2013 : soins intensifs fermé","ghi_nom":"","ght_nom":"GHT Grand Est 10","département":"Bas-Rhin","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.709487587022253,48.716845989277445]},"properties":{"id":848,"code_region":"GRE","departement":"67","nom_hopital":"EPSAN Brumath - 67","ghi_nom":"","ght_nom":"GHT Grand Est 10","département":"Bas-Rhin","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.481623848515611,48.462233318412586]},"properties":{"id":29,"code_region":"GRE","departement":"67","nom_hopital":"GHSO Obernai - 67","suppressions":"2008 : chirurgie fermé;2008 : maternité fermé","ghi_nom":"GHSO","ght_nom":"GHT Centre Alsace","département":"Bas-Rhin","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.454086181120611,48.25920126261849]},"properties":{"id":37,"code_region":"GRE","departement":"67","nom_hopital":"GHSO Sélestat - 67","menaces":"2016 : réanimation transformé","ghi_nom":"","ght_nom":"GHT Centre Alsace","département":"Bas-Rhin","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.490384771980549,48.54247032191356]},"properties":{"id":847,"code_region":"GRE","departement":"67","nom_hopital":"HL Molsheim - 67","suppressions":"1977 : maternité fermé","ghi_nom":"","ght_nom":"GHT Grand Est 10","département":"Bas-Rhin","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.74731831714112,48.575313583748276]},"properties":{"id":246,"code_region":"GRE","departement":"67","nom_hopital":"HUS Strasbourg - 67","suppressions":"2016 : nettoyage sous-traité","menaces":"2020 : réanimation réduit (lits fermés)","ghi_nom":"HUS","ght_nom":"GHT Grand Est 10","département":"Bas-Rhin","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.13101527826566,48.39268025439246]},"properties":{"id":386,"code_region":"GRE","departement":"67","nom_hopital":"Saulxures 67","menaces":"2011 : centre médical menacé","ghi_nom":"","ght_nom":"","département":"Bas-Rhin","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.221295057913202,48.19755774369027]},"properties":{"id":341,"code_region":"GRE","departement":"68","nom_hopital":"Aubure - 68","menaces":"2011 : centre médical menacé","ghi_nom":"","ght_nom":"","département":"Haut-Rhin","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.21071063732525,47.9092736907753]},"properties":{"id":50,"code_region":"GRE","departement":"68","nom_hopital":"CH Guebwiller - 68","suppressions":"2003 : maternité fermé","menaces":"2021 : urgences de nuit interrompu","ghi_nom":"","ght_nom":"GHT Centre Alsace","département":"Haut-Rhin","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.300033141879982,47.767381246928466]},"properties":{"id":849,"code_region":"GRE","departement":"68","nom_hopital":"CH Pfastatt - 68","suppressions":"1993 : bloc opératoire fermé;1993 : chirurgie fermé","ghi_nom":"","ght_nom":"GHT Haute Alsace","département":"Haut-Rhin","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.288354081911898,47.950795622855075]},"properties":{"id":850,"code_region":"GRE","departement":"68","nom_hopital":"CH Rouffac - 68","ghi_nom":"","ght_nom":"GHT Haute Alsace","département":"Haut-Rhin","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.331571308490274,47.748714432485926]},"properties":{"id":652,"code_region":"GRE","departement":"68","nom_hopital":"Clin. Diaconat Fonderie Mulhouse - 68","menaces":"urgences interrompu","ghi_nom":"","ght_nom":"","département":"Haut-Rhin","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.343124758889749,47.7251281033109]},"properties":{"id":245,"code_region":"GRE","departement":"68","nom_hopital":"GHRMSA Émile Muller Mulhouse - 68","suppressions":"2020 : chirurgie pédiatrique fermé","menaces":"2019 : urgences interrompu","ghi_nom":"GHRMSA ","ght_nom":"GHT Haute Alsace","département":"Haut-Rhin","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.10234333917471,47.8105726509358]},"properties":{"id":9,"code_region":"GRE","departement":"68","nom_hopital":"GHRMSA Saint-Jacques Thann - 68","suppressions":"2019 : maternité fermé;2009 : soins intensifs fermé","menaces":"2016 : urgences interrompu","ghi_nom":"GHRMSA","ght_nom":"GHT Haute Alsace","département":"Haut-Rhin","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.25241866155217,47.62416560850539]},"properties":{"id":52,"code_region":"GRE","departement":"68","nom_hopital":"GHRMSA Saint-Morand Altkirch - 68 ","suppressions":"2019 : maternité fermé;2019 : soins continus fermé","menaces":"2021 : urgences interrompu;2020 : urgences menacé","ghi_nom":"GHRMSA","ght_nom":"GHT Haute Alsace","département":"Haut-Rhin","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.45886348427606,47.651869492998586]},"properties":{"id":774,"code_region":"GRE","departement":"68","nom_hopital":"GHRMSA Sierentz - 68","ghi_nom":"GHRMSA","ght_nom":"GHT Haute Alsace","département":"Haut-Rhin","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.104600345712065,48.05416950115295]},"properties":{"id":244,"code_region":"GRE","departement":"68","nom_hopital":"Stosswihr - 68","menaces":"2011 : centre médical menacé","ghi_nom":"","ght_nom":"","département":"Haut-Rhin","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.71948851172202,48.2112170407426]},"properties":{"id":357,"code_region":"GRE","departement":"88","nom_hopital":"CH de l'Avison - Bruyères - 88","suppressions":"2018 : centre médico-psycho pédagogique fermé","ghi_nom":"","ght_nom":"GHT Vosges","département":"Vosges","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.87755499079794,48.0725905222113]},"properties":{"id":236,"code_region":"GRE","departement":"88","nom_hopital":"CH Gérardmer - 88","suppressions":"2005 : chirurgie fermé;2005 : endoscopie fermé;2004 : urgences de nuit fermé;2002 : buanderie fermé;1990 : maternité fermé","menaces":"2020 : SMUR interrompu;2020 : urgences interrompu;2019 : soins non programmés menacé;médecine menacé;soins palliatifs menacé","ghi_nom":"CHIHMV","ght_nom":"GHT Vosges","département":"Vosges","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.431466415695288,48.19388347539704]},"properties":{"id":70,"code_region":"GRE","departement":"88","nom_hopital":"CHI Durkheim Épinal - 88","menaces":"2018 : SMUR réduit (autre)","ghi_nom":"CHI Émile Durkheim","ght_nom":"GHT Vosges","département":"Vosges","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.008165729523617,48.18460746429527]},"properties":{"id":865,"code_region":"GRE","departement":"88","nom_hopital":"CHIHMV Fraize - 88","ghi_nom":"CHIHMV","ght_nom":"","département":"Vosges","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.84757429192911,48.402001211814394]},"properties":{"id":863,"code_region":"GRE","departement":"88","nom_hopital":"CHIHMV Raon-l'Étape - 88","ghi_nom":"CHICV","ght_nom":"GHT Vosges","département":"Vosges","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.963103717455091,48.2889734855805]},"properties":{"id":235,"code_region":"GRE","departement":"88","nom_hopital":"CHIHMV Saint-Dié - 88","suppressions":"2019 : hépato-gastro-entérologie fermé","ghi_nom":"CHIHMV","ght_nom":"GHT Vosges","département":"Vosges","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.976108884369019,48.39604936297109]},"properties":{"id":864,"code_region":"GRE","departement":"88","nom_hopital":"CHIHMV Senones - 88","ghi_nom":"CHICV","ght_nom":"GHT Vosges","département":"Vosges","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.708145846963591,48.36897929803039]},"properties":{"id":627,"code_region":"GRE","departement":"88","nom_hopital":"CHIOV Neufchâteau - 88","menaces":"2021 : cardiologie menacé;2021 : urgences menacé","ghi_nom":"CHIOV","ght_nom":"GHT Vosges","département":"Vosges","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.78147829622141,48.069069795642186]},"properties":{"id":355,"code_region":"GRE","departement":"88","nom_hopital":"CH Lamarche - 88","ghi_nom":"","ght_nom":"GHT Vosges","département":"Vosges","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.858360330898491,47.8879915631179]},"properties":{"id":672,"code_region":"GRE","departement":"88","nom_hopital":"CHL Bussang - 88","ghi_nom":"","ght_nom":"","département":"Vosges","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.768725485935216,47.87662928416805]},"properties":{"id":671,"code_region":"GRE","departement":"88","nom_hopital":"CHL du Thillot - 88","suppressions":"2016 : médecine fermé","ghi_nom":"","ght_nom":"","département":"Vosges","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.94765112188852,48.206681947534484]},"properties":{"id":356,"code_region":"GRE","departement":"88","nom_hopital":"CHOV Vittel - 88","suppressions":"cardiologie fermé;chirurgie fermé;néphrologie fermé","menaces":"2021 : SMUR menacé;2021 : urgences menacé;2021 : urgences de nuit menacé","ghi_nom":"CHOV","ght_nom":"GHT Vosges","département":"Vosges","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.64123988152312,48.33158793374528]},"properties":{"id":758,"code_region":"GRE","departement":"88","nom_hopital":"CH Rambervillers - 88","suppressions":"2019 : médecine fermé","ghi_nom":"","ght_nom":"","département":"Vosges","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.13393391696864,48.30203343380879]},"properties":{"id":75,"code_region":"GRE","departement":"88","nom_hopital":"CH Ravenel Mirecourt - 88","menaces":"2022 : pédopsychiatrie menacé","ghi_nom":"","ght_nom":"GHT Sud Lorraine","département":"Vosges","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.59333883862136,48.013254859231786]},"properties":{"id":237,"code_region":"GRE","departement":"88","nom_hopital":"CH Remiremont - 88","suppressions":"2020 : urologie fermé;2019 : diabétologie fermé;2019 : pneumologie fermé;2018 : cardiologie fermé","menaces":"2021 : SMUR menacé;2021 : urgences menacé;2021 : urgences de nuit menacé;2016 : maternité menacé","victoires":"2018 : maternité maintenu","ghi_nom":"","ght_nom":"GHT Vosges","département":"Vosges","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.05031925419797,48.084970989807005]},"properties":{"id":571,"code_region":"GRE","departement":"88","nom_hopital":"Clin. Darney - 88","suppressions":"1976 : maternité fermé","ghi_nom":"","ght_nom":"","département":"Vosges","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.463085894889147,48.19977939452329]},"properties":{"id":862,"code_region":"GRE","departement":"88","nom_hopital":"Clinique Ligne Bleue Épinal - 88","menaces":"2021 : maternité fusionné","ghi_nom":"","ght_nom":"","département":"Vosges","région":"Grand Est"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-61.5634386262872,16.046015560903694]},"properties":{"id":673,"code_region":"GUA","departement":"971","nom_hopital":"CHL Capesterre Belle Eau - 97","suppressions":"2016 : hospitalisation à domicile fermé","menaces":"2016 : médecine transformé","ghi_nom":"","ght_nom":"","département":"non défini","région":"Guadeloupe"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-61.3063259601664,15.889261732545387]},"properties":{"id":909,"code_region":"GUA","departement":"971","nom_hopital":"CH Sainte-Marie Marie-Galante - 97","suppressions":"2012 : chirurgie fermé;2012 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"Guadeloupe"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-61.5336373725464,16.243333610173888]},"properties":{"id":554,"code_region":"GUA","departement":"971","nom_hopital":"CHUG Pointe-à-Pitre - 97","ghi_nom":"","ght_nom":"","département":"non défini","région":"Guadeloupe"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-52.3350295423811,4.938204893529214]},"properties":{"id":464,"code_region":"GUY","departement":"973","nom_hopital":"Guyane - Cayenne - 97","ghi_nom":"","ght_nom":"","département":"non défini","région":"Guyane"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-52.6426731906498,5.15814209475444]},"properties":{"id":465,"code_region":"GUY","departement":"973","nom_hopital":"Kourou - 973","menaces":"2017 : centre médico chirurgical menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"Guyane"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.0840515911816,49.92016561305889]},"properties":{"id":278,"code_region":"HDF","departement":"02","nom_hopital":"CH Brisset Hirson - 02","suppressions":"2006 : chirurgie fermé;2006 : maternité fermé","menaces":"2013 : cardiologie menacé;2013 : laboratoire menacé;2013 : urgences menacé","ghi_nom":"","ght_nom":"Aisne Nord-Haute Somme","département":"Aisne","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.234599672743771,49.62496248237025]},"properties":{"id":650,"code_region":"HDF","departement":"02","nom_hopital":"CH Chauny - 02","menaces":"2019 : chirurgie menacé","ghi_nom":"","ght_nom":"GHT Aisne Nord - Haute Somme","département":"Aisne","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.62523004529081,49.89790412499228]},"properties":{"id":85,"code_region":"HDF","departement":"02","nom_hopital":"CH Guise - 02","suppressions":"2020 : urgences fermé;2019 : chirurgie fermé;1994 : maternité fermé","victoires":"2020 : urgences réouvert","ghi_nom":"","ght_nom":"Aisne Nord-Haute Somme","département":"Aisne","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.40248246199472,49.046106550701204]},"properties":{"id":279,"code_region":"HDF","departement":"02","nom_hopital":"CH Jeanne de Navarre Château-Thierry - 02","menaces":"2014 : maternité menacé;2014 : néonatalogie menacé;2014 : soins intensifs menacé;2012 : chirurgie menacé","victoires":"2012 : soins intensifs victoire","ghi_nom":"","ght_nom":"Aisne Sud - Saphir","département":"Aisne","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.62062164766096,49.565049523981585]},"properties":{"id":286,"code_region":"HDF","departement":"02","nom_hopital":"CH Laon - 02","ghi_nom":"","ght_nom":"Aisne Nord-Haute Somme","département":"Aisne","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.867730241033176,50.684751218859546]},"properties":{"id":644,"code_region":"HDF","departement":"59","nom_hopital":"CH Armentières","suppressions":"2019 : gastro-entérologie fermé","ghi_nom":"","ght_nom":"GHT Lille Métropole Flandre Intérieure","département":"Nord","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.103836101641321,50.3377739416257]},"properties":{"id":654,"code_region":"HDF","departement":"59","nom_hopital":"CH Douai - 59","menaces":"2021 : urgences pédiatriques interrompu","victoires":"2022 : urgences pédiatriques réouvert","ghi_nom":"","ght_nom":"GHT du Douaisis","département":"Nord","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.06005390967303,50.00987039806858]},"properties":{"id":560,"code_region":"HDF","departement":"59","nom_hopital":"CH Fourmies","menaces":"2021 : chirurgie menacé;2021 : maternité menacé;2021 : urgences menacé","ghi_nom":"","ght_nom":"GHT du Hainaut-Cambrésis","département":"Nord","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.181786313316981,50.745486804269596]},"properties":{"id":263,"code_region":"HDF","departement":"59","nom_hopital":"CH Gustave Dron Tourcoing - 59","suppressions":"2019 : maternité transféré","ghi_nom":"","ght_nom":"GHT Lille Métropole Flandre Intérieure","département":"Nord","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.989041029950796,50.28010724478265]},"properties":{"id":911,"code_region":"HDF","departement":"59","nom_hopital":"CHM Maubeuge - 59","ghi_nom":"","ght_nom":"GHT Hainaut-Cambrésis","département":"Nord","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.172570929289451,50.67959736429369]},"properties":{"id":33,"code_region":"HDF","departement":"59","nom_hopital":"CH Roubaix - 59","menaces":"2019 : unité hivernale interrompu;2017 : maternité fusionné","ghi_nom":"","ght_nom":"GHT Lille Métropole Flandre Intérieure","département":"Nord","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.036539284704515,50.61414556174485]},"properties":{"id":695,"code_region":"HDF","departement":"59","nom_hopital":"CHRU Lille - 59","ghi_nom":"","ght_nom":"GHT Lille Métropole Flandre Intérieure","département":"Nord","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.28120312851296,50.35918434629828]},"properties":{"id":303,"code_region":"HDF","departement":"59","nom_hopital":"CH Somain - 59","suppressions":"2019 : urgences de nuit fermé","menaces":"2014 : soins non programmés interrompu;2008 : soins longue durée menacé","ghi_nom":"","ght_nom":"GHT du Douaisi","département":"Nord","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.222148132370418,50.70022817851205]},"properties":{"id":264,"code_region":"HDF","departement":"59","nom_hopital":"CH Wattrelos - 59","suppressions":"2018 : urgences fermé","menaces":"2013 : urgences menacé","victoires":"2014 : néonatalité maintenu;2014 : soins intensifs maintenu","ghi_nom":"","ght_nom":"GHT Lille Métropole Flandre Intérieure","département":"Nord","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.744220532742011,50.746043675733674]},"properties":{"id":626,"code_region":"HDF","departement":"59","nom_hopital":"EPSM des Flandres Bailleul - 59","suppressions":"2012 : chirurgie transféré","ghi_nom":"","ght_nom":"","département":"Nord","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.89349147971387,50.6821700841831]},"properties":{"id":589,"code_region":"HDF","departement":"59","nom_hopital":"EPSM Lille Métropole Armentières - 59","victoires":"2011 : psychiatrie victoire","ghi_nom":"","ght_nom":"GHT Lille Métropole Flandre Intérieure","département":"Nord","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.07494530299264,50.628591756122596]},"properties":{"id":265,"code_region":"HDF","departement":"59","nom_hopital":"IPL - Lille - 59","ghi_nom":"","ght_nom":"","département":"Nord","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.19793697199779,50.684118464065484]},"properties":{"id":645,"code_region":"HDF","departement":"59","nom_hopital":"Maternité Gellé Roubaix - 59","suppressions":"2017 : maternité transféré","ghi_nom":"","ght_nom":"","département":"Nord","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.46612166940761,49.19221105167367]},"properties":{"id":227,"code_region":"HDF","departement":"60","nom_hopital":"Chantilly - 60","suppressions":"2012 : maternité fermé","ghi_nom":"","ght_nom":"","département":"Oise","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.882212964411174,49.26228634219571]},"properties":{"id":289,"code_region":"HDF","departement":"60","nom_hopital":"Chaumont en Vexin - 60","suppressions":"2011 : maternité fermé","ghi_nom":"","ght_nom":"","département":"Oise","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.41207731242057,49.3787287931546]},"properties":{"id":223,"code_region":"HDF","departement":"60","nom_hopital":"CH Clermont de l'Oise - 60","suppressions":"2018 : maternité fermé","victoires":"2012 : maternité maintenu","ghi_nom":"","ght_nom":"","département":"Oise","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.888297834455283,49.234056086206095]},"properties":{"id":225,"code_region":"HDF","departement":"60","nom_hopital":"CH Crépy en Valois - 60","suppressions":"1990 : maternité fermé","ghi_nom":"","ght_nom":"GHT Oise Nord Est","département":"Oise","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.789664539207748,49.38577242298247]},"properties":{"id":68,"code_region":"HDF","departement":"60","nom_hopital":"CHI Compiègne - 60","suppressions":"2014 : maternité fermé","ghi_nom":"CHI Compiègnes-Noyon","ght_nom":"GHT Oise Nord Est","département":"Oise","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.999895729264219,49.58785181521237]},"properties":{"id":222,"code_region":"HDF","departement":"60","nom_hopital":"CHI Noyon - 60","suppressions":"2014 : maternité fermé;2012 : chirurgie fermé","menaces":"2012 : médecine chirurgie obstétrique menacé","victoires":"2013 : maternité victoire","ghi_nom":"CHI Compiègnes-Noyon","ght_nom":"GHT Oise Nord Est","département":"Oise","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.13516458021466,49.236174644487186]},"properties":{"id":226,"code_region":"HDF","departement":"60","nom_hopital":"CHIPO Méru - 60","suppressions":"2002 : maternité fermé","ghi_nom":"GHCPO","ght_nom":"GHT Nord-Ouest Vexin Val-d’Oise","département":"Oise","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.41793525690827,49.375529525288385]},"properties":{"id":573,"code_region":"HDF","departement":"60","nom_hopital":"CHPI Clermont - 60","ghi_nom":"","ght_nom":"","département":"Oise","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.46018794015044,49.247556598921285]},"properties":{"id":224,"code_region":"HDF","departement":"60","nom_hopital":"GHPSO Creil - 60","suppressions":"2021 : SMUR fermé;2018 : maternité transféré;diabétologie fermé","menaces":"2021 : urgences fusionné;2021 : urgences réduit (autre);2017 : maternité menacé","victoires":"2022 : maternité victoire","ghi_nom":"GHPSO","ght_nom":"GHT Oise Sud","département":"Oise","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.57580347684302,49.197149252094896]},"properties":{"id":82,"code_region":"HDF","departement":"60","nom_hopital":"GHPSO Senlis - 60","suppressions":"2021 : urgences transféré","menaces":"2021 : urgences réduit (autre)","ghi_nom":"GHPSO","ght_nom":"GHT Oise Sud","département":"Oise","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.84971089229788,50.10400593731957]},"properties":{"id":282,"code_region":"HDF","departement":"62","nom_hopital":"Bapaume – 62 ","ghi_nom":"","ght_nom":"","département":"Pas-de-Calais","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.62932215252156,50.722510549901486]},"properties":{"id":647,"code_region":"HDF","departement":"62","nom_hopital":"CH Boulogne-sur-Mer - 62","suppressions":"2021 : addictologie fermé","menaces":"2021 : urgences menacé;2021 : urgences de nuit en néonatalogie réduit (autre);2020 : SMUR interrompu","ghi_nom":"","ght_nom":"GHT Côte d'Opale","département":"Pas-de-Calais","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.32230476761301,50.379107095150005]},"properties":{"id":660,"code_region":"HDF","departement":"62","nom_hopital":"CH du Ternois Gauchin-Verloingt - 62","ghi_nom":"","ght_nom":"GHT Arois-Ternois","département":"Pas-de-Calais","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.037643674562247,50.373152360296814]},"properties":{"id":661,"code_region":"HDF","departement":"62","nom_hopital":"CHL Hesdin - 62","suppressions":"2014 : médecine fermé","ghi_nom":"","ght_nom":"","département":"Pas-de-Calais","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.253765236075375,50.70275761268316]},"properties":{"id":648,"code_region":"HDF","departement":"62","nom_hopital":"CHR Saint-Omer - 62","menaces":"2019 : SMUR interrompu","ghi_nom":"","ght_nom":"GHT Dunkerquois et Audomarois","département":"Pas-de-Calais","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.83169122559841,50.4287634978091]},"properties":{"id":241,"code_region":"HDF","departement":"62","nom_hopital":"CH Schaffner Lens - 62","suppressions":"2017 : pneumologie fermé","menaces":"2020 : SMUR interrompu;2019 : urgences menacé","ghi_nom":"","ght_nom":"","département":"Pas-de-Calais","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.62996392484811,50.539765871943885]},"properties":{"id":905,"code_region":"HDF","departement":"62","nom_hopital":"Clinique Anne d'Artois Béthunes - 62","menaces":"2022 : maternité interrompu","ghi_nom":"","ght_nom":"","département":"Pas-de-Calais","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.64390575936238,50.72423919263586]},"properties":{"id":914,"code_region":"HDF","departement":"62","nom_hopital":"Clinique Côte d'Opale Saint-Martin-Boulogne - 62","ghi_nom":"","ght_nom":"","département":"Pas-de-Calais","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.56002832586558,50.40098735947638]},"properties":{"id":242,"code_region":"HDF","departement":"62","nom_hopital":"HM Berck - 62","suppressions":"2002 : service de rééducation polyvalente fermé;bloc chirurgical fermé;laboratoire fermé;pharmacie fermé;radiographie fermé","menaces":"2017 : soins intensifs réduit (autre)","ghi_nom":"","ght_nom":"","département":"Pas-de-Calais","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.78369947129241,50.416602241608096]},"properties":{"id":646,"code_region":"HDF","departement":"62","nom_hopital":"Polyclinique de Riaumont Liévin - 62","suppressions":"2017 : maternité transféré;2015 : cardiologie fermé;2015 : neurologie fermé;2015 : pneumologie fermé;2012 : chirurgie transféré","ghi_nom":"","ght_nom":"","département":"Pas-de-Calais","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.949243957297331,50.43467157707532]},"properties":{"id":684,"code_region":"HDF","departement":"62","nom_hopital":"Polyclinique Hénin-Beaumont - 62","suppressions":"urgences de nuit fermé","ghi_nom":"","ght_nom":"","département":"Pas-de-Calais","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.83186425609004,50.10208439716361]},"properties":{"id":583,"code_region":"HDF","departement":"80","nom_hopital":"Abbeville - 80","menaces":"2014 : néonatalité réduit (autre)","ghi_nom":"","ght_nom":"","département":"Somme","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.51407577354344,49.9140423638295]},"properties":{"id":323,"code_region":"HDF","departement":"80","nom_hopital":"CH Corbie - 80","suppressions":"2000 : maternité fermé;1994 : chirurgie fermé","menaces":"maternité interrompu","ghi_nom":"","ght_nom":"GHT Somme Littoral Sud","département":"Somme","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.34119590428255,50.1573677876135]},"properties":{"id":390,"code_region":"HDF","departement":"80","nom_hopital":"CH Doullens -80","suppressions":"2011 : maternité fermé;2009 : chirurgie fermé","ghi_nom":"","ght_nom":"GHT Somme Littoral Sud","département":"Somme","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.57381302474126,49.6483909867661]},"properties":{"id":45,"code_region":"HDF","departement":"80","nom_hopital":"CHIMR Montdidier - 80","suppressions":"1998 : maternité fermé","menaces":"2015 : soins de suite polyvalents interrompu","ghi_nom":"CHI Montdidier-Roye","ght_nom":"GHT Somme Littoral Sud","département":"Somme","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.792860060407676,49.704535742990245]},"properties":{"id":649,"code_region":"HDF","departement":"80","nom_hopital":"CHIMR Roye - 80","ghi_nom":"CHI Montdidier-Roye","ght_nom":"GHT Somme Littoral Sud","département":"Somme","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.9294645639082,49.93406879499019]},"properties":{"id":683,"code_region":"HDF","departement":"80","nom_hopital":"CH Péronne - 80","suppressions":"2021 : SMUR fermé;2019 : urgences fermé","ghi_nom":"","ght_nom":"GHT Aisne Nord - Haute Somme","département":"Somme","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.293165902643542,49.90701259246441]},"properties":{"id":513,"code_region":"HDF","departement":"80","nom_hopital":"CHU Amiens Picardie - 80","ghi_nom":"","ght_nom":"GHT Somme Littoral Sud","département":"Somme","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.2752747533022,49.8704927229249]},"properties":{"id":324,"code_region":"HDF","departement":"80","nom_hopital":"EPSMS Philippe Pinel Amiens - 80","ghi_nom":"","ght_nom":"","département":"Somme","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.30186849472165,49.8850958084935]},"properties":{"id":512,"code_region":"HDF","departement":"80","nom_hopital":"Maternité Camille Desmoulins Amiens - 80","suppressions":"2014 : maternité transféré","ghi_nom":"","ght_nom":"","département":"Somme","région":"Hauts-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.37920225135502,48.858756237442506]},"properties":{"id":445,"code_region":"IDF","departement":"75","nom_hopital":"Centre Santé Chemin Vert 11","ghi_nom":"","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.36768384869937,48.82632303827098]},"properties":{"id":901,"code_region":"IDF","departement":"75","nom_hopital":"Centre Santé Croix Rouge Ile-de-France","victoires":"2022 : centre de santé maintenu","ghi_nom":"","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.36110791865033,48.835290234383194]},"properties":{"id":442,"code_region":"IDF","departement":"75","nom_hopital":"Centre Santé du Moulinet 13","menaces":"2012 : centre de santé menacé;2012 : laboratoire d'analyses médicales menacé","ghi_nom":"","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.361248864894504,48.830465729737355]},"properties":{"id":522,"code_region":"IDF","departement":"75","nom_hopital":"Centre Santé rue Daviel Paris 13 ","ghi_nom":"","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.34566977684363,48.8483137685838]},"properties":{"id":515,"code_region":"IDF","departement":"75","nom_hopital":"Centre Santé St-Victor Paris 5","ghi_nom":"","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.28357579814415,48.8427305776547]},"properties":{"id":913,"code_region":"IDF","departement":"75","nom_hopital":"CH Boucicaut 15","ghi_nom":"AP-HP","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.31483098665985,48.83107520869439]},"properties":{"id":525,"code_region":"IDF","departement":"75","nom_hopital":"CH Broussais 14","suppressions":"2009 : centre IVG fermé;1999 : maternité fermé","ghi_nom":"GH EHGP-Broussais","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.352441184730926,48.83815020868835]},"properties":{"id":902,"code_region":"IDF","departement":"75","nom_hopital":"CH La Collégiale Paris 5","menaces":"2022 : gériatrie interrompu","ghi_nom":"","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.32044548816936,48.85737576172421]},"properties":{"id":438,"code_region":"IDF","departement":"75","nom_hopital":"CH Laennec 7","suppressions":"2000 : maternité fermé","ghi_nom":"AP-HP","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.310321435894631,48.8292364132593]},"properties":{"id":527,"code_region":"IDF","departement":"75","nom_hopital":"CH Léopold Bellan Paris 14","menaces":"anesthésie menacé;bloc opératoire menacé;chirurgie menacé;proctologie menacé;soins de suite menacé;soins de suite et rééducation neurologique menacé;stérilisation menacé;urgences menacé","ghi_nom":"","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.3673205743085,48.873658634010994]},"properties":{"id":517,"code_region":"IDF","departement":"75","nom_hopital":"CH Saint Louis Paris - 10","suppressions":"service grands brûlés fermé","menaces":"2022 : hématologie menacé;2012 : chirurgie ambulatoire menacé;2012 : imprimerie menacé;2012 : reprographie menacé;2012 : stérilisation menacé;ORL fusionné","ghi_nom":"","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.2865571650789,48.844999429944586]},"properties":{"id":532,"code_region":"IDF","departement":"75","nom_hopital":"CH Saint-Michel 15","ghi_nom":"","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.31962315896169,48.83645629159828]},"properties":{"id":531,"code_region":"IDF","departement":"75","nom_hopital":"CH Saint-Vincent-de-Paul 14","suppressions":"2011 : maternité fermé","ghi_nom":"","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.401890267598779,48.8660777836292]},"properties":{"id":448,"code_region":"IDF","departement":"75","nom_hopital":"CH Tenon Paris 20","suppressions":"maladies infectieuses transféré","menaces":"2022 : bloc opératoire réduit (autre);2021 : urgences menacé","victoires":"2013 : centre IVG maintenu","ghi_nom":"","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.33233387102166,48.89868348495898]},"properties":{"id":533,"code_region":"IDF","departement":"75","nom_hopital":"CHU Bichat-Claude Bernard - Paris 75018","menaces":"2021 : cardiologie réduit (lits fermés)","ghi_nom":"GHUNUP","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.33903319331605,48.83731009086889]},"properties":{"id":526,"code_region":"IDF","departement":"75","nom_hopital":"CHU Cochin Paris 12","menaces":"chirurgie menacé;stomatologie menacé","ghi_nom":"","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.35949467252017,48.8813293546954]},"properties":{"id":444,"code_region":"IDF","departement":"75","nom_hopital":"CHU Fernand Widal Paris 10","ghi_nom":"GH Saint-Louis-Lariboisière-Fernand Widal","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.35330410301614,48.88311296901789]},"properties":{"id":516,"code_region":"IDF","departement":"75","nom_hopital":"CHU Lariboisière Paris 10","menaces":"2012 : économat fournisseurs menacé;ORL fusionné","ghi_nom":"GH Saint-Louis-Lariboisière-Fernand Widal","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.36127410156296,48.8386037656241]},"properties":{"id":523,"code_region":"IDF","departement":"75","nom_hopital":"CHU La Salpétrière Paris 13","ghi_nom":"","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.38269123290369,48.85003364209731]},"properties":{"id":521,"code_region":"IDF","departement":"75","nom_hopital":"CHU Saint Antoine Paris 12","suppressions":"2012 : maternité fermé;Centre national de référence en hémobiologie périnatale (CNRHP) transféré;hémobiologie périnatale fermé","menaces":"2012 : pneumologie menacé;2012 : soins palliatifs menacé;2010 : IVG menacé","ghi_nom":"","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.38166881062803,48.85982263262228]},"properties":{"id":518,"code_region":"IDF","departement":"75","nom_hopital":"Clinique Mona Lisa 11","ghi_nom":"","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.324838169996045,48.83153911791687]},"properties":{"id":530,"code_region":"IDF","departement":"75","nom_hopital":"ESPIC Saint-Joseph Paris 14","suppressions":"2008 : maladies infectieuses fermé;2008 : pédiatrie fermé","ghi_nom":"","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.314869941361558,48.84526009581613]},"properties":{"id":697,"code_region":"IDF","departement":"75","nom_hopital":"GHNEM - Necker - 75015","menaces":"2021 : pédiatrie réduit (autre)","ghi_nom":"GHNEM","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.38045613180446,48.8741970364364]},"properties":{"id":761,"code_region":"IDF","departement":"75","nom_hopital":"GHUPN Maison Blanche-Hauteville Paris - 10","ghi_nom":"GHUPN","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.33883846444725,48.829636269615385]},"properties":{"id":759,"code_region":"IDF","departement":"75","nom_hopital":"GHUPN Sainte-Anne Paris - 14","ghi_nom":"GHUPN","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.2733759359112,48.8391805199512]},"properties":{"id":441,"code_region":"IDF","departement":"75","nom_hopital":"HE Georges Pompidou 15","menaces":"immunologie menacé","ghi_nom":"HEGP","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.34282058634956,48.839870739899894]},"properties":{"id":514,"code_region":"IDF","departement":"75","nom_hopital":"HIA Val de Grâce Paris 5","suppressions":"chirurgie traumatologique fermé;neurologie fermé;ophtalmologie fermé;urgences fermé","ghi_nom":"","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.34891331840161,48.85468700256609]},"properties":{"id":443,"code_region":"IDF","departement":"75","nom_hopital":"Hôtel-Dieu Paris - 75","suppressions":"2017 : urgences ophtalmiques transféré;2013 : urgences fermé;2000 : maternité fermé","menaces":"2012 : chirurgie de nuit menacé;2011 : chirurgie réduit (autre);2011 : radiologie réduit (autre);2011 : urgences menacé;chirurgie fusionné","victoires":"2014 : urgences maintenu","ghi_nom":"","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.394107186939081,48.84426453634719]},"properties":{"id":447,"code_region":"IDF","departement":"75","nom_hopital":"Maternité Les Bluets Paris 12 ","ghi_nom":"","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.32963034229789,48.829776240020294]},"properties":{"id":528,"code_region":"IDF","departement":"75","nom_hopital":"Maternité ND Bon-secours Paris 14","ghi_nom":"","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.316945180322422,48.83385859959893]},"properties":{"id":439,"code_region":"IDF","departement":"75","nom_hopital":"Paris 14 Pédopsychiatrie\n","ghi_nom":"","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.352529617132849,48.85637281435916]},"properties":{"id":21,"code_region":"IDF","departement":"75","nom_hopital":"Paris APHP\n37 hôpitaux et 676 services cliniques en 2009","ghi_nom":"","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.405297775517717,48.84277404253599]},"properties":{"id":519,"code_region":"IDF","departement":"75","nom_hopital":"Paris Armand Trousseau\r\n","menaces":"2012 : maxillofacial menacé;2012 : ORL menacé;2011 : pédiatrie menacé","ghi_nom":"","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.38191374615277,48.88295434083977]},"properties":{"id":446,"code_region":"IDF","departement":"75","nom_hopital":"Paris Centre dentaire Archereau\n19°","ghi_nom":"","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.451585048539335,48.79442603414032]},"properties":{"id":127,"code_region":"IDF","departement":"75","nom_hopital":"Paris Henri Mondor\r\n","menaces":"2012 : neurochirurgie menacé;gériatrie menacé","ghi_nom":"","ght_nom":"","département":"Val-de-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.395093810648285,48.84148172360874]},"properties":{"id":520,"code_region":"IDF","departement":"75","nom_hopital":"Paris Pierre Rouquès\n","ghi_nom":"","ght_nom":"","département":"Paris","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.70557358112145,48.87762728893419]},"properties":{"id":80,"code_region":"IDF","departement":"77","nom_hopital":"CH Lagny - 77","suppressions":"2011 : radiothérapie fermé;2009 : médecine nucléaire fermé;radiologie privatisé;stérilisation privatisé","menaces":"urgences de nuit réduit (autre)","ghi_nom":"","ght_nom":"","département":"Seine-et-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.63016532286916,48.885548252800795]},"properties":{"id":754,"code_region":"IDF","departement":"77","nom_hopital":"CH Marne Cantereine - 77","suppressions":"2011 : maternité fermé","ghi_nom":"","ght_nom":"","département":"Seine-et-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.52649301863941,48.833078121339504]},"properties":{"id":545,"code_region":"IDF","departement":"77","nom_hopital":"CH Saint-Camille Bry-sur-Marne - 77","menaces":"2011 : maternité fusionné","ghi_nom":"","ght_nom":"","département":"Val-de-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.69753332070245,48.410734770592214]},"properties":{"id":100,"code_region":"IDF","departement":"77","nom_hopital":"CHSSM Fontainebleau - 77","suppressions":"2016 : maternité fermé","menaces":"2021 : SMUR interrompu;2018 : ophtalmologie menacé;2018 : urologie menacé;2012 : urgences de nuit menacé","victoires":"2013 : chirurgie victoire","ghi_nom":"CHSSM","ght_nom":"GHT 77 - Sud","département":"Seine-et-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.95267843492054,48.38391149057769]},"properties":{"id":101,"code_region":"IDF","departement":"77","nom_hopital":"CHSSM Montereau - 77","suppressions":"2019 : pédiatrie transféré;2012 : néonatalogie fermé","menaces":"2019 : maternité menacé;2015 : réanimation réduit (lits fermés);2012 : maternité réduit (autre)","ghi_nom":"CHSSM","ght_nom":"GHT 77 - Sud","département":"Seine-et-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.70312522021106,48.26326413267628]},"properties":{"id":53,"code_region":"IDF","departement":"77","nom_hopital":"CHSSM Nemours - 77","suppressions":"2016 : EHPAD fermé;2000 : chirurgie fermé","menaces":"réanimation transformé","ghi_nom":"CHSSM","ght_nom":"GHT 77 - Sud","département":"Seine-et-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.701591171505309,48.41236686935907]},"properties":{"id":871,"code_region":"IDF","departement":"77","nom_hopital":"Clinique de la Forêt Fontainebleau - 77","ghi_nom":"","ght_nom":"","département":"Seine-et-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.77212333388464,48.848502383084906]},"properties":{"id":753,"code_region":"IDF","departement":"77","nom_hopital":"GHEF Marne-La-Vallée - Jossigny 77","suppressions":"2020 : chirurgie orthopédique et traumatologique transféré","menaces":"2019 : pédiatrie menacé","ghi_nom":"GHEF","ght_nom":"GHT 77 - Nord","département":"Seine-et-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.08382501801492,48.81215866813629]},"properties":{"id":99,"code_region":"IDF","departement":"77","nom_hopital":"GHEF René Arbeltier Coulommier - 77","suppressions":"2020 : chirurgie viscérale et orthopédique transféré","menaces":"2013 : médecine réduit (lits fermés)","ghi_nom":"GHEF","ght_nom":"GHT 77 - Nord","département":"Seine-et-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.87798083947424,48.95843533897598]},"properties":{"id":98,"code_region":"IDF","departement":"77","nom_hopital":"GHEF Saint-Faron Meaux - 77","menaces":"2019 : pédiatrie menacé;2018 : SMUR interrompu;2018 : urgences interrompu;2012 : urgences de nuit réduit (autre);2011 : chirurgie viscérale et orthopédique réduit (autre)","ghi_nom":"GHEF","ght_nom":"GHT 77 - Nord","département":"Seine-et-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.12843092924607,48.92832596173701]},"properties":{"id":752,"code_region":"IDF","departement":"77","nom_hopital":"GHEP Jouarre - 77","ghi_nom":"GHEF","ght_nom":"GHT 77 - Nord","département":"Seine-et-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.605341378321578,48.69297064633774]},"properties":{"id":775,"code_region":"IDF","departement":"77","nom_hopital":"GHSIF Brie-Comte-Robert - 77","ghi_nom":"GHSIF","ght_nom":"GHT 77 - Sud","département":"Seine-et-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.64313152984178,48.558039230447505]},"properties":{"id":46,"code_region":"IDF","departement":"77","nom_hopital":"GHSIF Melun - 77","suppressions":"2015 : chirurgie privatisé;radiologie privatisé","menaces":"2011 : psychiatrie réduit (autre);2009 : bloc chirurgical réduit (autre)","ghi_nom":"","ght_nom":"GHT 77 - Sud","département":"Seine-et-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.12575615686334,48.83157323561401]},"properties":{"id":879,"code_region":"IDF","departement":"78","nom_hopital":"CH de Versailles - Le Chesnay - 78","suppressions":"2019 : urgences fermé","menaces":"2022 : urgences menacé;2021 : pédiatrie menacé;2002 : médecine réduit (lits fermés);2002 : ORL réduit (autre)","ghi_nom":"","ght_nom":"GHT Yvelines Sud","département":"Yvelines","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.935926404579813,48.98598199442666]},"properties":{"id":880,"code_region":"IDF","departement":"78","nom_hopital":"CHIMM Les Mureaux - 78","suppressions":"2021 : pédopsychiatrie fermé;2018 : réanimation fermé;2016 : oncologie transféré","menaces":"2020 : pédopsychiatrie menacé;2017 : réanimation menacé","ghi_nom":"CHIMM","ght_nom":"GHT Yvelines Nord","département":"Yvelines","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.91168858228402,49.002732326058876]},"properties":{"id":130,"code_region":"IDF","departement":"78","nom_hopital":"CHIMM Meulan - 78","suppressions":"2022 : maternité fermé;2021 : pédopsychiatrie fermé;2018 : réanimation fermé;2016 : oncologie transféré","menaces":"2017 : réanimation menacé","ghi_nom":"CHIMM","ght_nom":"GHT Yvelines Nord","département":"Yvelines","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.02255428777124,48.9187451973538]},"properties":{"id":135,"code_region":"IDF","departement":"78","nom_hopital":"CHIPSG Poissy - 78","menaces":"2022 : urgences réduit (autre);2014 : psychiatrie menacé;2013 : maternité menacé;centre IVG menacé","ghi_nom":"CHIPSG","ght_nom":"GHT Yvelines Nord","département":"Yvelines","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.09380486333089,48.89897061640788]},"properties":{"id":31,"code_region":"IDF","departement":"78","nom_hopital":"CHIPSG Saint-Germain-en-Laye – 78","suppressions":"2018 : médecine interne fermé;2010 : réanimation fermé;2010 : urgences fermé;2006 : cardiologie transféré;2006 : pédiatrie transféré;2003 : maternité fermé","menaces":"2002 : urgences interrompu","ghi_nom":"CHIPSG","ght_nom":"GHT Yvelines Nord","département":"Yvelines","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.94751582029971,48.823483989863796]},"properties":{"id":766,"code_region":"IDF","departement":"78","nom_hopital":"CH Plaisir - 78","ghi_nom":"","ght_nom":"GHT Yvelines Sud","département":"Yvelines","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.104825829237867,48.99602218129389]},"properties":{"id":881,"code_region":"IDF","departement":"78","nom_hopital":"CH Privé Conflans Sainte-Honorine - 78","suppressions":"2001 : chirurgie fermé;2001 : maternité fermé;2001 : urgences fermé","ghi_nom":"","ght_nom":"","département":"Yvelines","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.67398503978472,48.998042365516696]},"properties":{"id":131,"code_region":"IDF","departement":"78","nom_hopital":"CH Quesnais - Mantes-La-Jolie - 78","suppressions":"2012 : urgences viscérales et orthopédiques fermé","menaces":"2022 : chirurgie menacé;2022 : urgences menacé;2019 : pédiatrie menacé;2019 : SMUR réduit (autre);2019 : urgences pédiatriques menacé;2018 : soins intensifs interrompu;2015 : SMUR interrompu;2015 : soins de suite et rééducation menacé;2012 : urgences viscérales et orthopédiques réduit (autre);2010 : coronographie menacé;cardiologie interventionnelle menacé","ghi_nom":"","ght_nom":"GHT Yvelines Nord","département":"Yvelines","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.82510792105088,48.65135055544989]},"properties":{"id":621,"code_region":"IDF","departement":"78","nom_hopital":"Ch Rambouillet - 78","menaces":"2022 : urgences réduit (autre);2019 : urgences interrompu;2011 : urgences de nuit menacé","ghi_nom":"","ght_nom":"GHT Yvelines Sud","département":"Yvelines","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.144835511110944,48.946108686615624]},"properties":{"id":133,"code_region":"IDF","departement":"78","nom_hopital":"Maisons Laffitte - 78\nHôpital des Courses menacé 2013\nHôpital privé non lucratif","suppressions":"2013 : chirurgie fermé;chirurgie viscérale et urologique fermé","menaces":"chirurgie orthopédique et réparatrice réduit (lits fermés);soins continus réduit (lits fermés)","ghi_nom":"","ght_nom":"","département":"Yvelines","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.067110502453612,48.79958367061938]},"properties":{"id":136,"code_region":"IDF","departement":"78","nom_hopital":"Saint Cyr l'École - 78","suppressions":"2013 : unité de maternologie fermé","ghi_nom":"","ght_nom":"","département":"Yvelines","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.15830039602807,48.94128751071]},"properties":{"id":134,"code_region":"IDF","departement":"78","nom_hopital":"Sartrouville - 78","suppressions":"centre de santé fermé","ghi_nom":"","ght_nom":"","département":"Yvelines","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.97549264335292,48.979095053651996]},"properties":{"id":132,"code_region":"IDF","departement":"78","nom_hopital":"Verneuil sur Seine - 78","suppressions":"chirurgie fermé;maternité fermé","ghi_nom":"","ght_nom":"","département":"Yvelines","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.389192714398324,48.70750772929518]},"properties":{"id":108,"code_region":"IDF","departement":"91","nom_hopital":"Athis-Mons - 91","suppressions":"2017 : maternité fermé","ghi_nom":"","ght_nom":"","département":"Essonne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.24129165946501,48.58415461420701]},"properties":{"id":113,"code_region":"IDF","departement":"91","nom_hopital":"CH Arpajon - 91","suppressions":"2015 : réanimation fermé","menaces":"2013 : réanimation menacé","victoires":"2020 : réanimation maintenu","ghi_nom":"CHSF","ght_nom":"GHT Ile-de-France Sud","département":"Essonne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.41310362178928,48.6750554295111]},"properties":{"id":19,"code_region":"IDF","departement":"91","nom_hopital":"CH Dupuytren Draveil - 91","ghi_nom":"","ght_nom":"GHU Henri Mondor","département":"Essonne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.43246797628155,48.52092222108811]},"properties":{"id":292,"code_region":"IDF","departement":"91","nom_hopital":"CH G. Clémenceau Champcueil - 91","ghi_nom":"","ght_nom":"GHU Henri Mondor","département":"Essonne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.414774216193201,48.632882611966835]},"properties":{"id":869,"code_region":"IDF","departement":"91","nom_hopital":"CH Louise Michel Évry - 91","ghi_nom":"","ght_nom":"","département":"Essonne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.99960189109189,48.533869335195995]},"properties":{"id":114,"code_region":"IDF","departement":"91","nom_hopital":"CHSE Dourdan - 91","suppressions":"2015 : maternité transféré","menaces":"2020 : pédiatrie menacé;2020 : soins continus menacé;2020 : urgences menacé","victoires":"2021 : pédiatrie victoire;2014 : maternité réouvert","ghi_nom":"CHSE CH Sud Essonne","ght_nom":"GHT Ile-de-France Sud","département":"Essonne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.155777149585571,48.44374998060752]},"properties":{"id":598,"code_region":"IDF","departement":"91","nom_hopital":"CHSE Étampes - 91","ghi_nom":"CHSE CH Sud Essonne","ght_nom":"GHT Ile-de-France Sud","département":"Essonne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.45673266629913,48.6201302791181]},"properties":{"id":112,"code_region":"IDF","departement":"91","nom_hopital":"CHSF - Corbeil  91","suppressions":"2009 : radiothérapie fermé","menaces":"2021 : urgences pédiatriques de nuit interrompu","ghi_nom":"CHSF CH Sud Francilien","ght_nom":"GHT Ile-de-France Sud","département":"Essonne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.162386112597345,48.441586358257396]},"properties":{"id":422,"code_region":"IDF","departement":"91","nom_hopital":"EPS Étampes – 91","suppressions":"psychiatrie transféré","ghi_nom":"CHSE CH Sud Essonne","ght_nom":"GHT Ile-de-France Sud","département":"Essonne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.37362931841348,48.6915493003563]},"properties":{"id":110,"code_region":"IDF","departement":"91","nom_hopital":"GHNE de Juvisy - 91","suppressions":"2009 : chirurgie fermé;2009 : maternité fermé;2009 : soins intensifs fermé;2008 : ORL fermé;2008 : urologie fermé;centre IVG fermé","menaces":"2009 : médecine interrompu;2009 : soins de suite et rééducation réduit (lits fermés)","ghi_nom":"GHNE","ght_nom":"GHT Nord Essonne","département":"Essonne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.29145565700974,48.6916567355667]},"properties":{"id":111,"code_region":"IDF","departement":"91","nom_hopital":"GHNE Longjumeau - 91","suppressions":"2014 : soins de suite fermé","menaces":"2024 : chirurgie menacé;2024 : médecine menacé;2024 : obstétrique menacé;2021 : urgences pédiatriques interrompu;2014 : néonatalité réduit (lits fermés)","victoires":"2014 : néonatalité maintenu","ghi_nom":"GHNE","ght_nom":"GHT Nord Essonne","département":"Essonne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.18665795462648,48.699083501243386]},"properties":{"id":109,"code_region":"IDF","departement":"91","nom_hopital":"GHNE Orsay - 91","suppressions":"2020 : pédiatrie fermé","ghi_nom":"GHNE","ght_nom":"GHT Nord Essonne","département":"Essonne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.310275709783013,48.66027312408526]},"properties":{"id":760,"code_region":"IDF","departement":"91","nom_hopital":"GHUPN Perray-Vaucluse Épinay-sur-Orge - 91","ghi_nom":"GHUPN","ght_nom":"","département":"Essonne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.29193267505706,48.730957280501286]},"properties":{"id":874,"code_region":"IDF","departement":"91","nom_hopital":"Hôpital privé Jacques Cartier Massy - 91","suppressions":"2015 : maternité transféré","ghi_nom":"","ght_nom":"","département":"Essonne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.23729002590416,48.8490346573744]},"properties":{"id":424,"code_region":"IDF","departement":"92","nom_hopital":"Boulogne Billancourt - 92\r\nCH Ambroise Paré","suppressions":"2009 : chirurgie fermé;2009 : réanimation fermé;chirurgie digestive transféré","ghi_nom":"","ght_nom":"","département":"Hauts-de-Seine","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.20718076089062,48.8920135654842]},"properties":{"id":91,"code_region":"IDF","departement":"92","nom_hopital":"CASH Nanterre - 92","suppressions":"2017 : cardiologie fermé;2016 : chirurgie fermé;2015 : pneumologie fermé;2015 : réanimation fermé","menaces":"2011 : chirurgie menacé;2011 : réanimation menacé","victoires":"2011 : maternité maintenu;2011 : urgences de nuit maintenu","ghi_nom":"","ght_nom":"GHT Sud Val d’Oise-Nord Hauts de Seine","département":"Hauts-de-Seine","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.21911159917961,48.84375069703129]},"properties":{"id":92,"code_region":"IDF","departement":"92","nom_hopital":"CH4V Saint-Cloud - 92","menaces":"2008 : réanimation interrompu","ghi_nom":"CH4V","ght_nom":"GHT Hauts-de-Seine","département":"Hauts-de-Seine","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.20288880245321,48.82051110696929]},"properties":{"id":868,"code_region":"IDF","departement":"92","nom_hopital":"CH4V Sèvres - 92","ghi_nom":"CH4V","ght_nom":"GHT Hauts-de-Seine","département":"Hauts-de-Seine","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.289810770529528,48.79964204900187]},"properties":{"id":94,"code_region":"IDF","departement":"92","nom_hopital":"Châtillon - 92","menaces":"2013 : centre médico-psychologique (CMP) menacé","ghi_nom":"","ght_nom":"","département":"Hauts-de-Seine","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.18681817219709,48.876500549329585]},"properties":{"id":2,"code_region":"IDF","departement":"92","nom_hopital":"CHD Stell Rueil-Malmaison - 92","suppressions":"2016 : maternité fermé;2012 : urgences fermé","ghi_nom":"","ght_nom":"GHT Hauts-de-Seine","département":"Hauts-de-Seine","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.23607260101181,48.92438757973909]},"properties":{"id":86,"code_region":"IDF","departement":"92","nom_hopital":"CH Louis Mourier Colombes - 92","suppressions":"2012 : médecine nucléaire fermé","menaces":"2022 : urgences menacé;centre IVG menacé;urgences de nuit menacé","ghi_nom":"","ght_nom":"","département":"Hauts-de-Seine","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.16989249102413,48.83854101479188]},"properties":{"id":544,"code_region":"IDF","departement":"92","nom_hopital":"CH Raymond Poincaré Garches - 92","suppressions":"2014 : oncologie pédiatrique fermé","menaces":"chirurgie menacé","ghi_nom":"","ght_nom":"","département":"Hauts-de-Seine","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.25970920397815,48.895860928197386]},"properties":{"id":88,"code_region":"IDF","departement":"92","nom_hopital":"CHRDS Courbevoie - 92","suppressions":"2000 : maternité fermé;psychiatrie transféré","ghi_nom":"CHRDS","ght_nom":"GHT Hauts-de-Seine","département":"Hauts-de-Seine","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.26228719889912,48.89033816662969]},"properties":{"id":90,"code_region":"IDF","departement":"92","nom_hopital":"CHRDS Neuilly-sur-Seine – 92","suppressions":"2016 : chirurgie fermé;2016 : maternité fermé","menaces":"urgences menacé","ghi_nom":"CHRDS","ght_nom":"GHT Hauts-de-Seine","département":"Hauts-de-Seine","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.30980642628866,48.908071702257814]},"properties":{"id":543,"code_region":"IDF","departement":"92","nom_hopital":"CHU Beaujon Clichy - 92","suppressions":"urgences de nuit fermé","menaces":"2012 : neurochirurgie menacé;SMUR menacé;urgences 24h/24h menacé;urgences psychiatriques menacé","ghi_nom":"GHUNUP","ght_nom":"","département":"Hauts-de-Seine","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.31588188312846,48.778930536036185]},"properties":{"id":96,"code_region":"IDF","departement":"92","nom_hopital":"Clin. A. Paré Bourg-la-Reine - 92","ghi_nom":"","ght_nom":"","département":"Hauts-de-Seine","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.2876580255424,48.89277475582088]},"properties":{"id":89,"code_region":"IDF","departement":"92","nom_hopital":"Hôpital franco-britannique Levallois-Perret - 92","menaces":"protection maternelle et infantile menacé","ghi_nom":"","ght_nom":"","département":"Hauts-de-Seine","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.25458141289008,48.788447691274484]},"properties":{"id":95,"code_region":"IDF","departement":"92","nom_hopital":"HUPS Antoine Béclère - Clamart - 92","suppressions":"2017 : centre IVG fermé;2012 : cardiologie transféré;2012 : pneumologie transféré","menaces":"2019 : urgences de nuit menacé;2012 : chirurgie menacé;2012 : urgences menacé","ghi_nom":"HUPS","ght_nom":"HUPS","département":"Hauts-de-Seine","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.38175103892975,48.9145769801058]},"properties":{"id":69,"code_region":"IDF","departement":"93","nom_hopital":"Aubervilliers - 93\nHôpital européen La Roseraie","suppressions":"2015 : radiothérapie fermé","menaces":"2018 : centre d'accueil et de crise réduit (autre)","ghi_nom":"","ght_nom":"","département":"Seine-Saint-Denis","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.37413181697339,48.93550503808139]},"properties":{"id":104,"code_region":"IDF","departement":"93","nom_hopital":"CH Delafontaine Saint Denis - 93","suppressions":"2020 : ligne SMUR fermé","menaces":"2022 : urgences pédiatriques interrompu;2021 : gynéco-obstétrique réduit (lits fermés);2018 : centre d'accueil et de crise menacé","ghi_nom":"","ght_nom":"GHT Plaine de France","département":"Seine-Saint-Denis","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.45318941309447,48.877629035753]},"properties":{"id":107,"code_region":"IDF","departement":"93","nom_hopital":"CHIAG Montreuil - 93","suppressions":"urologie transféré","menaces":"2020 : centre de santé menacé;chirurgie 24/24 menacé;chirurgie d'urgence menacé;dialyse menacé;ophtalmologie menacé;réanimation néonatale menacé","ghi_nom":"CHIAG","ght_nom":"GHT 93 EST","département":"Seine-Saint-Denis","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.52470359449902,48.9530737813215]},"properties":{"id":103,"code_region":"IDF","departement":"93","nom_hopital":"CHI Robert Ballanger Aulnay/Bois - 93","menaces":"2022 : urgences interrompu;2022 : urgences menacé;2019 : urgences pédiatriques menacé","ghi_nom":"","ght_nom":"GHT 93 EST","département":"Seine-Saint-Denis","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.24189472472122,48.87829414056268]},"properties":{"id":638,"code_region":"IDF","departement":"93","nom_hopital":"CHRDS Puteaux - 93","ghi_nom":"CHRDS","ght_nom":"GHT Hauts-de-Seine","département":"Hauts-de-Seine","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.313375584415697,48.95150635212424]},"properties":{"id":102,"code_region":"IDF","departement":"93","nom_hopital":"Épinay sur Seine - 93","menaces":"2009 : maternité menacé","ghi_nom":"","ght_nom":"","département":"Seine-Saint-Denis","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.548254456166219,48.859369986462404]},"properties":{"id":637,"code_region":"IDF","departement":"93","nom_hopital":"EPSM Ville-Évrard Neuilly sur Marne - 93","ghi_nom":"","ght_nom":"","département":"Seine-Saint-Denis","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.50994658440041,48.89940535689669]},"properties":{"id":866,"code_region":"IDF","departement":"93","nom_hopital":"GHIRM Le Raincy- - 93","suppressions":"2000 : cardiologie fermé;2000 : urgences fermé","ghi_nom":"","ght_nom":"GHT 93 EST","département":"Seine-Saint-Denis","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.57254011999823,48.8975915177339]},"properties":{"id":105,"code_region":"IDF","departement":"93","nom_hopital":"GHIRM Montfermeil - 93","suppressions":"2011 : cuisine sous-traité;2011 : lingerie sous-traité","menaces":"2012 : stérilisation menacé","ghi_nom":"GHIRM","ght_nom":"GHT 93 EST","département":"Seine-Saint-Denis","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.4240882586312,48.91468458062639]},"properties":{"id":449,"code_region":"IDF","departement":"93","nom_hopital":"GHU Avicenne Bobigny - 93","menaces":"2021 : unité médico-judiciaire menacé;2021 : urgences menacé;IVG menacé;planning familial menacé","ghi_nom":"GHU 93","ght_nom":"","département":"Seine-Saint-Denis","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.487779271970901,48.909581535628]},"properties":{"id":106,"code_region":"IDF","departement":"93","nom_hopital":"GHU Jean Verdier Bondy - 93","suppressions":"2017 : maternité fermé","ghi_nom":"GHU 93-95","ght_nom":"","département":"Seine-Saint-Denis","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.508154868778826,48.93468588506311]},"properties":{"id":619,"code_region":"IDF","departement":"93","nom_hopital":"GHU René-Muret Sevran - 93","ghi_nom":"GHU 93","ght_nom":"","département":"Seine-Saint-Denis","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.41586990279623,48.87935844969421]},"properties":{"id":39,"code_region":"IDF","departement":"93","nom_hopital":"Maternité Les Lilas - 93","menaces":"2022 : maternité menacé","victoires":"2022 : maternité maintenu","ghi_nom":"","ght_nom":"","département":"Seine-Saint-Denis","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.348011750940866,48.77193146668028]},"properties":{"id":128,"code_region":"IDF","departement":"94","nom_hopital":"Chevilly-Larue - 94","menaces":"2015 : centre de lutte contre le cancer fusionné","ghi_nom":"","ght_nom":"","département":"Val-de-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.44773504277772,48.73072909616839]},"properties":{"id":129,"code_region":"IDF","departement":"94","nom_hopital":"CHI Aubrac Villeneuve-Saint-Georges - 94","suppressions":"2021 : unité psychiatrique fermé;2019 : bionettoyage sous-traité","ghi_nom":"","ght_nom":"GHT Val de Marne Est","département":"Val-de-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.38697709401657,48.81361122636699]},"properties":{"id":549,"code_region":"IDF","departement":"94","nom_hopital":"CH Jean Rostand Ivry   - 94","suppressions":"2009 : centre IVG fermé;2009 : maternité transféré;2008 : médecine physique et de réadaptation fermé;2004 : cardiologie rythmologique transféré","ghi_nom":"","ght_nom":"","département":"Val-de-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.58000640752495,48.787430079097895]},"properties":{"id":867,"code_region":"IDF","departement":"94","nom_hopital":"CH Les Murets La Queue-en-Brie – 94","ghi_nom":"","ght_nom":"GHT 94 Nord","département":"Val-de-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.3576216132163,48.79004880223169]},"properties":{"id":551,"code_region":"IDF","departement":"94","nom_hopital":"CH Paul Guiraud Villejuif - 94","suppressions":"2021 : unité d'hospitalisation spécialement aménagée-UHSA fermé;2012 : laboratoire fermé","menaces":"psychiatrie menacé","ghi_nom":"","ght_nom":"GHT PSY Sud Paris","département":"Val-de-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.346974235606246,48.81044767485183]},"properties":{"id":872,"code_region":"IDF","departement":"94","nom_hopital":"CHPEA Gentilly - 94","ghi_nom":"","ght_nom":"GHT PSY Sud Paris","département":"Val-de-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.45862397916706,48.78856413005019]},"properties":{"id":547,"code_region":"IDF","departement":"94","nom_hopital":"CHU A. Chenevier Créteil - 94","menaces":"2021 : psychiatrie réduit (lits fermés);2017 : chirurgie hépatique menacé","ghi_nom":"GHU Henri Mondor","ght_nom":"","département":"Val-de-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.39587628316624,48.804087793617384]},"properties":{"id":123,"code_region":"IDF","departement":"94","nom_hopital":"CHU Charles Foix Ivry - 94","menaces":"psychiatrie de la personne âgée réduit (lits fermés);rééducation neurologique menacé","ghi_nom":"","ght_nom":"GHU Sorbonne Université","département":"Val-de-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.45241882153975,48.781409456679505]},"properties":{"id":548,"code_region":"IDF","departement":"94","nom_hopital":"CHU Émile ROUX - Créteil 94","menaces":"2019 : gériatrie menacé","ghi_nom":"","ght_nom":"GHU Henri Mondor","département":"Val-de-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.45229089162577,48.79592158496639]},"properties":{"id":546,"code_region":"IDF","departement":"94","nom_hopital":"CHU Henri Mondor Créteil - 94","suppressions":"2022 : service intersectoriel de psychiatrie transféré;2022 : urgences psychiatriques fermé","menaces":"2022 : chirurgie cardiaque menacé;2021 : psychiatrie réduit (lits fermés);2021 : transplantation cardiaque menacé;2017 : chirurgie hépatique menacé","victoires":"2019 : SAMU victoire;2017 : chirurgie hépatique et cardiaque maintenu;2011 : chirurgie cardiaque maintenu","ghi_nom":"","ght_nom":"GHU Henri Mondor","département":"Val-de-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.354984095839689,48.81589567793531]},"properties":{"id":873,"code_region":"IDF","departement":"94","nom_hopital":"Clinique Gentily","ghi_nom":"","ght_nom":"","département":"Val-de-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.4203044679784,48.80533058145439]},"properties":{"id":125,"code_region":"IDF","departement":"94","nom_hopital":"Clin. La Concorde Alfortville - 94","suppressions":"2009 : maternité fermé","ghi_nom":"","ght_nom":"","département":"Val-de-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.504001101664987,48.75429088948397]},"properties":{"id":899,"code_region":"IDF","departement":"94","nom_hopital":"CMP Mozart Boissy-Saint-Léger - 94","suppressions":"unité de jour psychiatrie fermé","ghi_nom":"","ght_nom":"","département":"Val-de-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.42983988565565,48.81840322457139]},"properties":{"id":595,"code_region":"IDF","departement":"94","nom_hopital":"HSM Esquirol Saint Maurice - 94","suppressions":"2016 : unité de personnes polyhandicapées fermé;hôpital de jour fermé","menaces":"2021 : psychiatrie réduit (autre)","ghi_nom":"HSM","ght_nom":"GHT 94 Nord","département":"Val-de-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.42847729237775,48.82076833689559]},"properties":{"id":122,"code_region":"IDF","departement":"94","nom_hopital":"HSM Saint Maurice - 94","suppressions":"2022 : unité d'entrants fermé;2014 : crèches fermé","menaces":"2021 : unité psychiatrique interrompu","victoires":"maternité maintenu","ghi_nom":"HSM","ght_nom":"GHT 94 Nord","département":"Val-de-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.357195433953689,48.810005806469185]},"properties":{"id":124,"code_region":"IDF","departement":"94","nom_hopital":"HUPS CHUR Bicêtre - 94","menaces":"2021 : hépatologie pédiatrique réduit (lits fermés);2021 : services neurologiques transformé;2012 : centre IVG menacé;unité psychiatrique de suicidologie réduit (lits fermés)","ghi_nom":"","ght_nom":"HUPS","département":"Val-de-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.3633520794614,48.7949443352488]},"properties":{"id":550,"code_region":"IDF","departement":"94","nom_hopital":"HUPS Paul Brousse - Villejuif - 94","menaces":"centre hépatobiliaire menacé;soins longue durée réduit (lits fermés);soins longue durée réduit (autre);thérapies aigües menacé;transferts court séjour menacé;unité spécialisée Alzheimer réduit (lits fermés)","ghi_nom":"HUPS","ght_nom":"HUPS","département":"Val-de-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.36086564325845,48.7937963331384]},"properties":{"id":126,"code_region":"IDF","departement":"94","nom_hopital":"IGR Groussy Villejuif  - 94","menaces":"2015 : cancérologie fusionné","ghi_nom":"","ght_nom":"","département":"Val-de-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.483098548232153,48.75023726255173]},"properties":{"id":73,"code_region":"IDF","departement":"94","nom_hopital":"Limeil-Brévannes - Hôpital Émile Roux - 94","ghi_nom":"","ght_nom":"","département":"Val-de-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.419141658824789,48.84323253557426]},"properties":{"id":120,"code_region":"IDF","departement":"94","nom_hopital":"Saint Mandé - 94\nHôpital d'instruction des armées Bégin","suppressions":"2015 : maternité fermé","ghi_nom":"","ght_nom":"","département":"Val-de-Marne","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.09998395551835,49.05096822607928]},"properties":{"id":117,"code_region":"IDF","departement":"95","nom_hopital":"CALM Pontoise - 95","menaces":"2019 : maison de naissance menacé","ghi_nom":"","ght_nom":"","département":"Val-d'Oise","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.0361882059227,49.05251598225435]},"properties":{"id":207,"code_region":"IDF","departement":"95","nom_hopital":"Cergy - 95","ghi_nom":"","ght_nom":"","département":"Val-d'Oise","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.449899297598491,48.98635590542658]},"properties":{"id":118,"code_region":"IDF","departement":"95","nom_hopital":"CH Gonesse - 95","suppressions":"2011 : cardiologie interventionnelle fermé","menaces":"2021 : réanimation menacé;2019 : médecine interne menacé;angioplastie coronarienne menacé","ghi_nom":"","ght_nom":"GHT Sud Val-d’Oise Nord Hauts de seine","département":"Val-d'Oise","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.096740772761794,49.06378468081191]},"properties":{"id":552,"code_region":"IDF","departement":"95","nom_hopital":"CH René Dubos Pontoise - 95","suppressions":"chirurgie fermé;CTS privatisé;nettoyage sous-traité;OPHSTO fermé;réanimation fermé","menaces":"2020 : EHPAD réduit (lits fermés);2019 : soins palliatifs menacé;chirurgie viscérale réduit (autre);diabétologie réduit (autre);gynécologie réduit (lits fermés);orthopédie réduit (autre);pneumologie réduit (autre);rhumatologie réduit (autre)","ghi_nom":"","ght_nom":"CH René Dubos GHT Nord-Ouest Vexin Val-d’Oise","département":"Val-d'Oise","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.33715691553046,49.04803982518919]},"properties":{"id":326,"code_region":"IDF","departement":"95","nom_hopital":"CHS Prévot - Moisselles - 95","menaces":"2021 : psychiatrie menacé","victoires":"hôpital psychiatrique victoire","ghi_nom":"","ght_nom":"GHT Sud Val d’Oise-Nord Hauts de Seine","département":"Val-d'Oise","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.23646926475301,48.944470338930586]},"properties":{"id":119,"code_region":"IDF","departement":"95","nom_hopital":"CH Victor Dupouy Argenteuil - 95","suppressions":"2011 : cardiologie interventionnelle fermé;1999 : SMUR pédiatrique fermé","menaces":"2012 : radiothérapie menacé;2011 : rythmologie menacé;2009 : radiothérapie interrompu;2001 : gastro-entérologie interrompu;2001 : pneumologie interrompu;hématologie menacé","victoires":"2013 : radiothérapie maintenu;2011 : rythmologie maintenu","ghi_nom":"","ght_nom":"GHT Sud Val d’Oise-Nord Hauts de Seine","département":"Val-d'Oise","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.239703395306256,48.94937902480602]},"properties":{"id":878,"code_region":"IDF","departement":"95","nom_hopital":"Clinique Héloïse Argenteuil - 95","ghi_nom":"","ght_nom":"","département":"Val-d'Oise","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.29013723441115,49.14478522953021]},"properties":{"id":115,"code_region":"IDF","departement":"95","nom_hopital":"GHCPO Beaumont sur Oise - 95","suppressions":"2019 : réanimation fermé;2019 : réanimation transféré;2019 : soins continus fermé;2019 : soins intensifs transféré","menaces":"2019 : néonatalogie réduit (autre);2018 : pédiatrie menacé;2018 : réanimation menacé;2018 : rééducation menacé","ghi_nom":"GHCPO Carnelle Portes de l'Oise","ght_nom":"GHT Nord-Ouest Vexin Val-d’Oise","département":"Val-d'Oise","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.33562707234046,49.1046095766164]},"properties":{"id":230,"code_region":"IDF","departement":"95","nom_hopital":"GHCPO Saint Martin du Tertre - 95","suppressions":"2021 : soins longue durée fermé;soins de suite et rééducation fermé","ghi_nom":"GHCPO Carnelle Portes de l'Oise","ght_nom":"GHT Nord-Ouest Vexin Val-d’Oise","département":"Val-d'Oise","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.319754222106962,48.98667638016205]},"properties":{"id":877,"code_region":"IDF","departement":"95","nom_hopital":"GHEM Montmorency - 95","suppressions":"2014 : maternité fermé","ghi_nom":"GHEM","ght_nom":"GHT Sud Val-d’Oise Nord Hauts de Seine","département":"Val-d'Oise","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.27099618032794,49.00146297047599]},"properties":{"id":876,"code_region":"IDF","departement":"95","nom_hopital":"GHEM Simone Veil Eaubonne – 95","ghi_nom":"GHEM","ght_nom":"GHT Sud Val-d’Oise Nord Hauts de Seine","département":"Val-d'Oise","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.784431846553222,49.155097905139485]},"properties":{"id":875,"code_region":"IDF","departement":"95","nom_hopital":"GHIV Magny-en-Vexin – 95","ghi_nom":"GHIV","ght_nom":"","département":"Val-d'Oise","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.98322853755769,49.1451294959082]},"properties":{"id":116,"code_region":"IDF","departement":"95","nom_hopital":"GHIV Marines - 95","suppressions":"2016 : restauration sous-traité","ghi_nom":"GHIV","ght_nom":"","département":"Val-d'Oise","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.38774333527966,49.00761838435324]},"properties":{"id":397,"code_region":"IDF","departement":"95","nom_hopital":"Villiers-le-Bel - 95\nHôpital Charles Richet\n","ghi_nom":"","ght_nom":"","département":"Val-d'Oise","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.402570364628594,49.00103451512606]},"properties":{"id":553,"code_region":"IDF","departement":"95","nom_hopital":"Villiers-le-Bel - 95\r\nHôpital gériatrique Adélaïde-Hautval","ghi_nom":"","ght_nom":"","département":"Val-d'Oise","région":"Île-de-France"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[55.409233474622624,-21.28663798110283]},"properties":{"id":463,"code_region":"LAR","departement":"974","nom_hopital":"Saint-Louis de la Réunion","ghi_nom":"","ght_nom":"","département":"non défini","région":"La Réunion"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-61.06949688814841,14.607083738894199]},"properties":{"id":461,"code_region":"MAR","departement":"972","nom_hopital":"Châteauboeuf - Fort-de-France - 97","ghi_nom":"","ght_nom":"","département":"non défini","région":"Martinique"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-61.003515741751,14.615429402601404]},"properties":{"id":462,"code_region":"MAR","departement":"972","nom_hopital":"CH Mangot Vulcin - Le Lamentin - 97","suppressions":"2012 : urgences de nuit fermé;2001 : pédiatrie fermé;maternité fermé","menaces":"2012 : maternité menacé","ghi_nom":"CHUM","ght_nom":"","département":"non défini","région":"Martinique"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.119718231801369,45.63525516897869]},"properties":{"id":603,"code_region":"NAQ","departement":"16","nom_hopital":"CH Angoulême - 16","ghi_nom":"","ght_nom":"GHT de Charente","département":"Charente","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.66970962066164,46.004580608048606]},"properties":{"id":437,"code_region":"NAQ","departement":"16","nom_hopital":"CH Confolens - 16","suppressions":"2008 : chirurgie fermé;1993 : maternité fermé","menaces":"2015 : urgences menacé","ghi_nom":"","ght_nom":"GHT de Charente","département":"Charente","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.19545772592805,46.02782603218208]},"properties":{"id":362,"code_region":"NAQ","departement":"16","nom_hopital":"CH Ruffec - 16","suppressions":"2022 : cuisine transféré;2021 : soins de suite et rééducation fermé;2018 : chirurgie ambulatoire fermé;2018 : IVG fermé;2018 : soins ambulatoires fermé;1994 : maternité fermé","menaces":"2021 : médecine interrompu;2020 : soins de suite et rééducation interrompu;2019 : SMUR menacé;2018 : SMUR réduit (autre);2017 : soins ambulatoires sous anesthésie générale interrompu;2015 : urgences interrompu","victoires":"2019 : mammographie victoire;2013 : scanner victoire;SMUR maintenu;urgences maintenu","ghi_nom":"","ght_nom":"GHT Charente","département":"Charente","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.324219391117162,45.6993292749352]},"properties":{"id":676,"code_region":"NAQ","departement":"16","nom_hopital":"CSAPA Agora Cognac - 16","ghi_nom":"","ght_nom":"","département":"Charente","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.0594106156812,45.59698401041409]},"properties":{"id":604,"code_region":"NAQ","departement":"16","nom_hopital":"HGC Châteauneuf-sur-Charente - 16","suppressions":"1975 : maternité fermé","ghi_nom":"","ght_nom":"GHT de Charente","département":"Charente","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.297851110747449,45.685038913459884]},"properties":{"id":66,"code_region":"NAQ","departement":"16","nom_hopital":"HGC Cognac - 16","suppressions":"2002 : chirurgie transféré;maternité fermé","menaces":"2018 : oncologie menacé","victoires":"2010 : maternité maintenu","ghi_nom":"","ght_nom":"GHT de Charente","département":"Charente","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.171831770641429,45.68303596668412]},"properties":{"id":688,"code_region":"NAQ","departement":"16","nom_hopital":"HGC Jarnac - 16","ghi_nom":"CHIPC puis HHC","ght_nom":"","département":"Charente","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.140289796483141,45.47336223733501]},"properties":{"id":367,"code_region":"NAQ","departement":"16","nom_hopital":"HSC Barbezieux - 16","suppressions":"2010 : maternité fermé","ghi_nom":"","ght_nom":"GHT Charente","département":"Charente","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.140035987571788,45.47417420389449]},"properties":{"id":690,"code_region":"NAQ","departement":"16","nom_hopital":"HSC FAM Le Trèfle - Barbézieux - 16","suppressions":"2000 : maternité fermé","ghi_nom":"","ght_nom":"GHT de Charente","département":"Charente","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.211502332786619,45.38003659584583]},"properties":{"id":689,"code_region":"NAQ","departement":"16","nom_hopital":"HSC Touvérac - 16","ghi_nom":"","ght_nom":"GHT de Charente","département":"Charente","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.197833284926755,45.66326152238641]},"properties":{"id":74,"code_region":"NAQ","departement":"16","nom_hopital":"Polyclinique L'Isle d'Espagnac - 16","suppressions":"maternité fermé","ghi_nom":"","ght_nom":"","département":"Charente","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.654034447082911,45.7465513607795]},"properties":{"id":693,"code_region":"NAQ","departement":"17","nom_hopital":"CH de Saintonge - Saintes - 17","menaces":"2021 : bloc opératoire interrompu","ghi_nom":"","ght_nom":"GHT de Saintonge","département":"Charente-Maritime","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.434773947427868,45.43949315669859]},"properties":{"id":457,"code_region":"NAQ","departement":"17","nom_hopital":"CH Jonzac - 17","suppressions":"2001 : maternité fermé","ghi_nom":"","ght_nom":"GHT de Saintonge","département":"Charente-Maritime","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.06067412176574,45.634159617396996]},"properties":{"id":214,"code_region":"NAQ","departement":"17","nom_hopital":"CHRA - Royan - 17","suppressions":"2007 : réanimation fermé;2005 : chirurgie fermé;1985 : maternité fermé","ghi_nom":"","ght_nom":"GHT de Saintonge","département":"Charente-Maritime","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.963941519119636,45.96714119569312]},"properties":{"id":692,"code_region":"NAQ","departement":"17","nom_hopital":"CH Rochefort - 17","ghi_nom":"","ght_nom":"GHT Atlantique 17","département":"Charente-Maritime","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.529225646996114,45.946969729111686]},"properties":{"id":334,"code_region":"NAQ","departement":"17","nom_hopital":"CH Saint-Jean d'Angély - 17","suppressions":"2017 : maternité fermé","menaces":"2020 : chirurgie interrompu;2014 : maternité menacé","ghi_nom":"","ght_nom":"GHT de Saintonge","département":"Charente-Maritime","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.164756248984177,46.15582216471095]},"properties":{"id":20,"code_region":"NAQ","departement":"17","nom_hopital":"Clinique du Mail La Rochelle - 17","suppressions":"2017 : maternité fermé","ghi_nom":"","ght_nom":"","département":"Charente-Maritime","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.024582251062267,45.65302019932873]},"properties":{"id":694,"code_region":"NAQ","departement":"17","nom_hopital":"Clinique Pasteur Royan - 17","suppressions":"2015 : maternité fermé","ghi_nom":"","ght_nom":"","département":"Charente-Maritime","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.14357752660552,46.16004329880829]},"properties":{"id":691,"code_region":"NAQ","departement":"17","nom_hopital":"GHLRRA La Rochelle","ghi_nom":"","ght_nom":"GHT Atlantique 17","département":"Charente-Maritime","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.53362247201693,45.1691392982166]},"properties":{"id":15,"code_region":"NAQ","departement":"19","nom_hopital":"CH Brive - 19","menaces":"2019 : gériatrie réduit (autre)","ghi_nom":"","ght_nom":"GHT du Limousin","département":"Corrèze","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.77162018898364,45.26571128029408]},"properties":{"id":335,"code_region":"NAQ","departement":"19","nom_hopital":"CH Tulle - 19","menaces":"2021 : laboratoire menacé;2016 : chirurgie menacé;2016 : pédiatrie menacé","ghi_nom":"","ght_nom":"GHT du Limousin","département":"Corrèze","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.18220000034596,45.960374549572414]},"properties":{"id":409,"code_region":"NAQ","departement":"23","nom_hopital":"CH Aubusson- 23","menaces":"2016 : chirurgie menacé","victoires":"2016 : chirurgie victoire","ghi_nom":"","ght_nom":"GHT du Limousin","département":"Creuse","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.75059636406566,45.954038473447184]},"properties":{"id":410,"code_region":"NAQ","departement":"23","nom_hopital":"CH Desplas Bourganeuf - 23","suppressions":"chirurgie fermé","ghi_nom":"","ght_nom":"GHT du Limousin","département":"Creuse","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.8689502173907,46.164077608905195]},"properties":{"id":22,"code_region":"NAQ","departement":"23","nom_hopital":"CH Guéret - 23","suppressions":"2010 : radiothérapie fermé","victoires":"2011 : radiothérapie réouvert","ghi_nom":"","ght_nom":"GHT du Limousin","département":"Creuse","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.49684911631089,44.850598155638586]},"properties":{"id":248,"code_region":"NAQ","departement":"24","nom_hopital":"CH Bergerac - 24","suppressions":"2014 : pneumologie fermé","menaces":"2022 : urgences réduit (autre)","victoires":"maternité maintenu","ghi_nom":"","ght_nom":"GHT Dordogne","département":"Dordogne","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.211274920927687,45.20203725417979]},"properties":{"id":664,"code_region":"NAQ","departement":"24","nom_hopital":"CHICRDD La Meynardie Saint-Privat-en-Périgord - 24","ghi_nom":"CHICRDD","ght_nom":"GHT Dordogne","département":"Dordogne","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.34000396041234,45.24498309848278]},"properties":{"id":663,"code_region":"NAQ","departement":"24","nom_hopital":"CHICRDD Ribérac - 24","ghi_nom":"CHICRDD","ght_nom":"GHT Dordogne","département":"Dordogne","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.123846143339608,44.82905763982299]},"properties":{"id":662,"code_region":"NAQ","departement":"24","nom_hopital":"CHICRDD Saint-Aulaye - 24","ghi_nom":"CHICRDD","ght_nom":"","département":"Dordogne","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.22300839209207,44.89948459952989]},"properties":{"id":17,"code_region":"NAQ","departement":"24","nom_hopital":"CH Leclaire Sarlat - 24","suppressions":"2021 : urgences fermé;2019 : centre de dépistage du cancer du sein fermé;2017 : stérilisation fermé;2014 : chirurgie orthopédique fermé;2013 : chirurgie conventionnelle fermé;2013 : soins continus fermé;2012 : unité de surveillance fermé","menaces":"2022 : urgences réduit (autre);2021 : maternité réduit (autre);2012 : maternité menacé","victoires":"2021 : maternité maintenu;2020 : centre de dépistage du cancer du sein réouvert;2013 : chirurgie maintenu","ghi_nom":"","ght_nom":"GHT Dordogne","département":"Dordogne","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.729989735922868,45.19439746965969]},"properties":{"id":593,"code_region":"NAQ","departement":"24","nom_hopital":"CH Périgueux - 24","menaces":"2019 : urgences menacé","victoires":"2019 : urgences victoire","ghi_nom":"","ght_nom":"GHT Dordogne","département":"Dordogne","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.184716171498403,45.03293809707415]},"properties":{"id":698,"code_region":"NAQ","departement":"24","nom_hopital":"CHS Vauclaire Montpon-Ménestérol - 24","ghi_nom":"","ght_nom":"GHT Dordogne","département":"Dordogne","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.717522828423358,45.1813009184526]},"properties":{"id":247,"code_region":"NAQ","departement":"24","nom_hopital":"Clin. Francheville Périgueux - 24","suppressions":"maternité fermé","ghi_nom":"","ght_nom":"","département":"Dordogne","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.573372201020772,44.798814997178695]},"properties":{"id":253,"code_region":"NAQ","departement":"33","nom_hopital":"BAHIA - HIA R. Picqué - Villenave-d'Ornon  - 33","menaces":"1990 : approvisionnement des armées menacé;hélicoptère menacé;laboratoire d'analyses biologiques menacé;odontologie menacé;parking menacé;service vaccination-santé-voyages menacé","ghi_nom":"","ght_nom":"","département":"Gironde","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.522188422612846,44.864421167535966]},"properties":{"id":491,"code_region":"NAQ","departement":"33","nom_hopital":"Bordeaux - 33 \nClinique des 4 Pavillons\n","menaces":"2003 : maternité fusionné","ghi_nom":"","ght_nom":"","département":"Gironde","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.659697662247562,45.13508668883089]},"properties":{"id":907,"code_region":"NAQ","departement":"33","nom_hopital":"CHHG Blaye - 33","menaces":"2022 : urgences interrompu","ghi_nom":"CHHG","ght_nom":"","département":"Gironde","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.245362290597401,44.5446505087298]},"properties":{"id":701,"code_region":"NAQ","departement":"33","nom_hopital":"CHISG Langon - 33","suppressions":"2022 : bionettoyage sous-traité","ghi_nom":"CHISG","ght_nom":"GHT Alliance de Gironde","département":"Gironde","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.038289474743902,44.58648500142808]},"properties":{"id":346,"code_region":"NAQ","departement":"33","nom_hopital":"CHISG La Réole - 33","suppressions":"2022 : bionettoyage sous-traité;2020 : unité de premiers soins fermé;2018 : urgences transféré;2001 : maternité fermé","ghi_nom":"CHIC Sud Gironde","ght_nom":"","département":"Gironde","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.11365846582478,44.61351342445859]},"properties":{"id":436,"code_region":"NAQ","departement":"33","nom_hopital":"CH Jean Hameau Arcachon - 33","suppressions":"nettoyage sous-traité;ophtalmologie privatisé;ORL privatisé;radiologie privatisé;stomatologie privatisé","menaces":"cuisine menacé;laboratoire menacé;pharmacie menacé;réanimation transformé;stérilisation menacé","ghi_nom":"","ght_nom":"GHT Alliance de Gironde","département":"Gironde","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.228604821789784,44.918930669996605]},"properties":{"id":249,"code_region":"NAQ","departement":"33","nom_hopital":"CH Libourne - 33","menaces":"2022 : maladies infectieuses interrompu;maternité menacé","ghi_nom":"","ght_nom":"GHT Alliance de Gironde","département":"Gironde","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.080331550347875,44.651374907707314]},"properties":{"id":668,"code_region":"NAQ","departement":"33","nom_hopital":"CHL Monségur - 33","suppressions":"2016 : médecine fermé;2016 : soins de suite et rééducation fermé","ghi_nom":"","ght_nom":"","département":"Gironde","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.208134041665821,44.433315965132735]},"properties":{"id":870,"code_region":"NAQ","departement":"33","nom_hopital":"CH Saint-Antoine Bazas - 33","suppressions":"2022 : unité de soins médico psychologique fermé","ghi_nom":"","ght_nom":"GHT Alliance de Gironde","département":"Gironde","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.22286789408873,44.841818781922484]},"properties":{"id":493,"code_region":"NAQ","departement":"33","nom_hopital":"CH Sainte Foy La Grande - 33","suppressions":"1990 : maternité fermé;chirurgie fermé","menaces":"2022 : urgences de nuit réduit (autre);2019 : urgences de nuit interrompu","ghi_nom":"","ght_nom":"GHT Alliance de Gironde","département":"Gironde","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.315746743151687,44.6349328393777]},"properties":{"id":702,"code_region":"NAQ","departement":"33","nom_hopital":"CHS Cadillac - 33","menaces":"2019 : psychiatrie réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Alliance de Gironde","département":"Gironde","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.602236670264433,44.824135779410796]},"properties":{"id":490,"code_region":"NAQ","departement":"33","nom_hopital":"CHS Charles Perrens Bordeaux - 33","menaces":"2014 : psychiatrie menacé","ghi_nom":"","ght_nom":"GHT Alliance de Gironde","département":"Gironde","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.603865090231501,44.82750874587637]},"properties":{"id":699,"code_region":"NAQ","departement":"33","nom_hopital":"CHU GH Pellegrin Bordeaux - 33","menaces":"2022 : urgences pédiatriques menacé","ghi_nom":"","ght_nom":"GHT Alliance de Gironde","département":"Gironde","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.579188495557013,44.8343260122698]},"properties":{"id":492,"code_region":"NAQ","departement":"33","nom_hopital":"CHU GH St André Bordeaux - 33","menaces":"2014 : urgences menacé;cardiologie réduit (autre)","ghi_nom":"GH","ght_nom":"GHT Alliance de Gironde","département":"Gironde","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.660622076816674,44.78554806140653]},"properties":{"id":700,"code_region":"NAQ","departement":"33","nom_hopital":"CHU GH Sud Bordeaux - 33","ghi_nom":"","ght_nom":"GHT Alliance de Gironde","département":"Gironde","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.606511663920054,44.83932147905071]},"properties":{"id":488,"code_region":"NAQ","departement":"33","nom_hopital":"Clinique Bel Air Bordeaux - 33","menaces":"2003 : maternité fusionné","ghi_nom":"","ght_nom":"","département":"Gironde","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.629299957920539,44.78975836619389]},"properties":{"id":703,"code_region":"NAQ","departement":"33","nom_hopital":"Clinique Saint-Martin Pessac - 33","suppressions":"2016 : maternité fermé","ghi_nom":"","ght_nom":"","département":"Gironde","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.937460850025472,45.30369167769278]},"properties":{"id":287,"code_region":"NAQ","departement":"33","nom_hopital":"Lesparre - 33","menaces":"maternité menacé","ghi_nom":"","ght_nom":"","département":"Gironde","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.03975169239557,43.71232038603589]},"properties":{"id":429,"code_region":"NAQ","departement":"40","nom_hopital":"CHDCA Dax - 40","ghi_nom":"","ght_nom":"GHT des Landes","département":"Landes","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.486332680990203,43.89366002199459]},"properties":{"id":47,"code_region":"NAQ","departement":"40","nom_hopital":"CHIMMPS Mont de Marsan - 40","suppressions":"maternité fermé","menaces":"urgences menacé","ghi_nom":"GCS","ght_nom":"GHT des Landes","département":"Landes","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.918503729428114,44.04177852142849]},"properties":{"id":704,"code_region":"NAQ","departement":"40","nom_hopital":"CHIMMPS Morcenx - 40","ghi_nom":"CHI","ght_nom":"GHT des Landes","département":"Landes","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.571258832660274,43.75730489981179]},"properties":{"id":705,"code_region":"NAQ","departement":"40","nom_hopital":"CH Saint-Sever - 40","suppressions":"1998 : chirurgie fermé;1998 : maternité fermé","ghi_nom":"","ght_nom":"GHT des Landes","département":"Landes","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.242503745455984,43.71300646330649]},"properties":{"id":76,"code_region":"NAQ","departement":"40","nom_hopital":"ClinAdour Aire-sur-Adour - 40","suppressions":"2014 : maternité fermé","menaces":"2021 : urgences réduit (autre)","ghi_nom":"GCSPDA","ght_nom":"","département":"Landes","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.05837840424014,43.7025678503162]},"properties":{"id":497,"code_region":"NAQ","departement":"40","nom_hopital":"Clin. St Vincent de Paul Dax - 40","suppressions":"2016 : bloc opératoire fermé;2016 : chirurgie fermé;2016 : maternité fermé","ghi_nom":"","ght_nom":"","département":"Landes","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.87835336550426,45.051130140749606]},"properties":{"id":636,"code_region":"NAQ","departement":"47","nom_hopital":"CH Émile Roux Le Puy-en-Velay - 47","suppressions":"2021 : soins palliatifs fermé","menaces":"2021 : laboratoire menacé;2021 : urgences menacé;2013 : maternité menacé","ghi_nom":"","ght_nom":"GHT Haute Loire","département":"Haute-Loire","région":"Auvergne-Rhône-Alpes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.635481246259715,44.21741561122228]},"properties":{"id":329,"code_region":"NAQ","departement":"47","nom_hopital":"CHIAN Agen - 47","menaces":"urgences interrompu","ghi_nom":"CHIAN","ght_nom":"GHT de Lot et Garonne","département":"Lot-et-Garonne","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.336796421932219,44.136364949348604]},"properties":{"id":408,"code_region":"NAQ","departement":"47","nom_hopital":"CHIAN Nérac - 47","suppressions":"chirurgie fermé","menaces":"2021 : SMUR réduit (autre);2021 : urgences interrompu","ghi_nom":"CHIAN","ght_nom":"GHT de Lot et Garonne","département":"Lot-et-Garonne","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.165482499099483,44.50258511471287]},"properties":{"id":629,"code_region":"NAQ","departement":"47","nom_hopital":"CHIC Marmande - 47","menaces":"2021 : cardiologie réduit (lits fermés);2021 : chirurgie réduit (lits fermés);2021 : urgences menacé;2021 : urgences réduit (autre)","ghi_nom":"CHIC Marmande-Tonneins","ght_nom":"GHT Moyenne Garonne","département":"Lot-et-Garonne","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.303035266803539,44.39263216720701]},"properties":{"id":328,"code_region":"NAQ","departement":"47","nom_hopital":"CHIC Tonneins - 47","suppressions":"chirurgie fermé","menaces":"2022 : soins de suite et rééducation réduit (lits fermés);2021 : cardiologie réduit (lits fermés);2021 : chirurgie réduit (lits fermés)","ghi_nom":"CHIC Marmande-Tonneins","ght_nom":"GHT Moyenne Garonne","département":"Lot-et-Garonne","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.964859214490546,44.497708655750735]},"properties":{"id":666,"code_region":"NAQ","departement":"47","nom_hopital":"CHL Fumel - 47","menaces":"2015 : soins longue durée menacé","ghi_nom":"","ght_nom":"","département":"Lot-et-Garonne","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.819018854688512,44.38820192252963]},"properties":{"id":667,"code_region":"NAQ","departement":"47","nom_hopital":"CHL Penne d'Agenais - 47","suppressions":"2015 : soins de suite et rééducation fermé","ghi_nom":"","ght_nom":"","département":"Lot-et-Garonne","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.746308777713615,44.40700732133809]},"properties":{"id":327,"code_region":"NAQ","departement":"47","nom_hopital":"Clin. Villeneuve sur Lot - 47","suppressions":"maternité fermé","ghi_nom":"","ght_nom":"","département":"Lot-et-Garonne","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.48418070040834,43.48864398391379]},"properties":{"id":200,"code_region":"NAQ","departement":"64","nom_hopital":"Bayonne - 64\r\nLafargue","suppressions":"maternité fermé","menaces":"2019 : réanimation menacé","ghi_nom":"","ght_nom":"","département":"Pyrénées-Atlantiques","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.53907208483548,43.485711832592095]},"properties":{"id":201,"code_region":"NAQ","departement":"64","nom_hopital":"Biarritz - 64 Polyclinique Aguilera","suppressions":"maternité fermé","ghi_nom":"","ght_nom":"","département":"Pyrénées-Atlantiques","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.480460885863623,43.48247335426993]},"properties":{"id":912,"code_region":"NAQ","departement":"64","nom_hopital":"CHCB Bayonne - 64","menaces":"2022 : gériatrie menacé","ghi_nom":"","ght_nom":"GHT Navarre-Côte Basque","département":"Pyrénées-Atlantiques","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.616784145978924,43.196306908780805]},"properties":{"id":203,"code_region":"NAQ","departement":"64","nom_hopital":"CH Oloron Sainte Marie - 64","suppressions":"2017 : maternité fermé;2002 : maternité transféré","menaces":"2022 : bloc opératoire réduit (autre);2022 : unité de surveillance continue réduit (autre);2022 : urgences réduit (autre);2009 : maternité menacé","ghi_nom":"","ght_nom":"GHT Béarn-Soule","département":"Pyrénées-Atlantiques","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.771680639317208,43.48563879988959]},"properties":{"id":202,"code_region":"NAQ","departement":"64","nom_hopital":"CH Orthez - 64","suppressions":"2014 : maternité fermé","menaces":"2022 : court séjour gériatrique interrompu;2021 : SMUR interrompu","ghi_nom":"","ght_nom":"GHT Béarn-Soule","département":"Pyrénées-Atlantiques","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.347781416117369,43.32721781402638]},"properties":{"id":456,"code_region":"NAQ","departement":"64","nom_hopital":"CH Pau - 64","suppressions":"2017 : parking privatisé","menaces":"2022 : urgences réduit (autre)","victoires":"2017 : parking maintenu","ghi_nom":"","ght_nom":"GHT Béarn-Soule","département":"Pyrénées-Atlantiques","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.66405200151772,43.387479960724676]},"properties":{"id":458,"code_region":"NAQ","departement":"64","nom_hopital":"Clin. Saint Jean de Luz - 64","suppressions":"maternité fermé","ghi_nom":"","ght_nom":"","département":"Pyrénées-Atlantiques","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.220449995467742,46.65238487356561]},"properties":{"id":354,"code_region":"NAQ","departement":"79","nom_hopital":"CHDSN Parthenay - 79","suppressions":"2018 : médecine fermé;1997 : chirurgie fermé;1997 : maternité fermé","menaces":"2018 : soins de suite et rééducation réduit (lits fermés);2009 : urgences menacé;chirurgie ambulatoire menacé;soins palliatifs menacé","ghi_nom":"CH Nord Deux-Sèvres ","ght_nom":"GHT des Deux-Sèvres","département":"Deux-Sèvres","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.47951166958728,46.838747023372484]},"properties":{"id":353,"code_region":"NAQ","departement":"79","nom_hopital":"CHNDS Bressuire - 79","suppressions":"2018 : chirurgie fermé;2018 : chirurgie orthopédique et digestive fermé;2018 : maternité fermé;2018 : médecine fermé;2018 : soins intensifs fermé;2018 : urgences fermé","ghi_nom":"CH Nord Deux-Sèbres 1995","ght_nom":"GHT des Deux-Sèvres","département":"Deux-Sèvres","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.386023697542802,46.831600063390894]},"properties":{"id":572,"code_region":"NAQ","departement":"79","nom_hopital":"CHNDS Faye-l'Abbesse - 79","suppressions":"2019 : cardiologie fermé","menaces":"2022 : soins de suite et rééducation réduit (lits fermés);2019 : gastro-entérologie menacé","ghi_nom":"CH Nord-Deux-Sèvres","ght_nom":"GHT des Deux-Sèvres","département":"Deux-Sèvres","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.182022441171898,46.97251430975609]},"properties":{"id":352,"code_region":"NAQ","departement":"79","nom_hopital":"CHNDS Thouars - 79","suppressions":"2018 : cardiologie fermé;2018 : chirurgie digestive fermé;2018 : gastro-entérologie fermé;2018 : laboratoire fermé;2018 : médecine fermé;2018 : pharmacie fermé;2018 : soins intensifs fermé;1997 : chirurgie orthopédique fermé;1997 : maternité fermé","menaces":"2019 : urgences interrompu;radiologie scanner menacé;stérilisation menacé","ghi_nom":"CH Nord Deux-Sèvres 1995","ght_nom":"GHT des Deux-Sèvres","département":"Deux-Sèvres","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.462577079281285,46.317375782630684]},"properties":{"id":611,"code_region":"NAQ","departement":"79","nom_hopital":"CH Niort - 79","menaces":"2021 : anesthésie menacé;2021 : psychiatrie interrompu;2021 : soins de court séjour réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT des Deux-Sèvres","département":"Deux-Sèvres","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.452669783297567,46.315092613219406]},"properties":{"id":708,"code_region":"NAQ","departement":"79","nom_hopital":"Polyclinique Inkermann Niort - 79","suppressions":"2021 : maternité fermé","ghi_nom":"","ght_nom":"","département":"Deux-Sèvres","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.546697476834001,46.8179435476552]},"properties":{"id":262,"code_region":"NAQ","departement":"86","nom_hopital":"CHRU Châtellerault - 86","suppressions":"2021 : cardiologie fermé","menaces":"2021 : urgences menacé","ghi_nom":"GHRP","ght_nom":"GHT de la Vienne","département":"Vienne","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.39231219794989,46.553199406113]},"properties":{"id":607,"code_region":"NAQ","departement":"86","nom_hopital":"CHRU Laborit Poitiers - 86","menaces":"2021 : gynécologie menacé;2021 : hospitalisation à domicile réduit (autre);2021 : rhumatologie réduit (autre)","ghi_nom":"GHRP","ght_nom":"GHT Vienne","département":"Vienne","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.077390478043716,47.01134084550987]},"properties":{"id":365,"code_region":"NAQ","departement":"86","nom_hopital":"CHRU Loudun - 86","suppressions":"2017 : urgences fermé;2001 : maternité fermé","menaces":"2022 : urgences réduit (autre);2017 : SMUR menacé","ghi_nom":"GHNV","ght_nom":"GHT de la Vienne","département":"Vienne","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.122765716082061,46.4349335641337]},"properties":{"id":312,"code_region":"NAQ","departement":"86","nom_hopital":"CHRU Lusignan - 86","suppressions":"2019 : soins de suite fermé","menaces":"2017 : centre 15 menacé","ghi_nom":"","ght_nom":"GHT de la Vienne","département":"Vienne","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.866728127069048,46.428365344188215]},"properties":{"id":740,"code_region":"NAQ","departement":"86","nom_hopital":"CHRU Montmorillon - 86","menaces":"2022 : urgences réduit (autre);2021 : urgences menacé","ghi_nom":"","ght_nom":"GHT Vienne","département":"Vienne","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.2035275045176,45.515373403056685]},"properties":{"id":302,"code_region":"NAQ","departement":"87","nom_hopital":"CH Boutard Saint Yriex - 87","suppressions":"chirurgie fermé","ghi_nom":"","ght_nom":"GHT du Limousin","département":"Haute-Vienne","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.897698289782052,45.8883473338046]},"properties":{"id":156,"code_region":"NAQ","departement":"87","nom_hopital":"CH R. Mazoin Saint-Junien - 87","menaces":"2018 : cardiologie réduit (autre);2018 : oncologie réduit (autre);2018 : orthopédie réduit (autre)","ghi_nom":"","ght_nom":"GHT du Limousin","département":"Haute-Vienne","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.23738655155581,45.815135545943775]},"properties":{"id":65,"code_region":"NAQ","departement":"87","nom_hopital":"CHU Limoges - 87","suppressions":"2010 : blanchisserie fermé","menaces":"urgences menacé","ghi_nom":"","ght_nom":"GHT du Limousin","département":"Haute-Vienne","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.240718293574002,45.81351810023166]},"properties":{"id":540,"code_region":"NAQ","departement":"87","nom_hopital":"LIMOUSIN","suppressions":"2019 : centre autisme fermé","ghi_nom":"","ght_nom":"","département":"Haute-Vienne","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.233848331872408,49.41578572049229]},"properties":{"id":597,"code_region":"NOR","departement":"14","nom_hopital":"Ancien Hôpital Honfleur - 14","ghi_nom":"","ght_nom":"","département":"Calvados","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.354466198322576,49.20351829877019]},"properties":{"id":471,"code_region":"NOR","departement":"14","nom_hopital":"Caen CHU - 14","menaces":"2021 : hospitalisation conventionnelle menacé;2014 : chirurgie cardiaque et vasculaire réduit (autre)","ghi_nom":"","ght_nom":"GHT Normandie Centre","département":"Calvados","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.633043283148002,49.01812577310189]},"properties":{"id":406,"code_region":"NOR","departement":"14","nom_hopital":"CHAB Aunay sur Odon - 14","suppressions":"1997 : maternité fermé;chirurgie fermé;entretien des jardins sous-traité","menaces":"2015 : urgences menacé","ghi_nom":"CHAB - Aunay-Bayeux","ght_nom":"GHT Normandie Centre","département":"Calvados","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.701392055174845,49.27483932643178]},"properties":{"id":470,"code_region":"NOR","departement":"14","nom_hopital":"CHAB Bayeux - 14","suppressions":"2016 : médecine fermé","ghi_nom":"CHI Aunay-Bayeux","ght_nom":"GHT Normandie Centre","département":"Calvados","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.202960106156787,49.384342757014906]},"properties":{"id":459,"code_region":"NOR","departement":"14","nom_hopital":"CH Côte Fleurie - 14","ghi_nom":"CH Côte Fleurie","ght_nom":"GHT Normandie Centre","département":"Calvados","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.129141692577158,49.38293462806148]},"properties":{"id":472,"code_region":"NOR","departement":"14","nom_hopital":"CH Côte Fleurie - 14","suppressions":"2014 : maternité fermé","ghi_nom":"CH Côte Fleurie","ght_nom":"","département":"Calvados","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.206072002138281,48.89053952888678]},"properties":{"id":336,"code_region":"NOR","departement":"14","nom_hopital":"CH Falaise - 14","suppressions":"2019 : cuisine sous-traité;2015 : maternité fermé","menaces":"2021 : urgences interrompu;2019 : restauration menacé;2016 : institut de formation en soins infirmiers (IFSI) menacé","ghi_nom":"","ght_nom":"GHT Normandie Centre","département":"Calvados","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.232040811138962,49.1451559660943]},"properties":{"id":177,"code_region":"NOR","departement":"14","nom_hopital":"CH Lisieux - 14","suppressions":"2020 : médecine interne fermé;2014 : centre mucoviscidose fermé;unité long séjour fermé","menaces":"2015 : blanchisserie réduit (autre);chirurgie fusionné","ghi_nom":"","ght_nom":"GHT Normandie Centre","département":"Calvados","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.888356780594424,48.83772648778279]},"properties":{"id":4,"code_region":"NOR","departement":"14","nom_hopital":"CH Vire - 14","suppressions":"2017 : soins continus fermé;2015 : bloc opératoire fermé;2013 : maternité fermé","menaces":"2016 : chimiothérapie menacé;2016 : institut de formation en soins infirmiers (IFSI) menacé","victoires":"2017 : urgences victoire;2012 : maternité maintenu","ghi_nom":"","ght_nom":"GHT Collines de Normandie","département":"Calvados","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.074676225687383,49.35924935968459]},"properties":{"id":398,"code_region":"NOR","departement":"14","nom_hopital":"Deauville - 14","ghi_nom":"","ght_nom":"","département":"Calvados","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.375135528274603,49.17762062268219]},"properties":{"id":175,"code_region":"NOR","departement":"14","nom_hopital":"EPSM Caen - 14","suppressions":"2017 : bionettoyage sous-traité","menaces":"2020 : restauration menacé;2013 : psychiatrie menacé","victoires":"2021 : restauration victoire","ghi_nom":"","ght_nom":"GHT Normandie Centre","département":"Calvados","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.31978114526193,49.17693320130321]},"properties":{"id":176,"code_region":"NOR","departement":"14","nom_hopital":"Mondeville -14","suppressions":"centre de santé des armées fermé;ravitaillement sanitaire des armées fermé","ghi_nom":"","ght_nom":"","département":"Calvados","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.081113826260094,49.365774319254804]},"properties":{"id":174,"code_region":"NOR","departement":"14","nom_hopital":"Trouville - 14","ghi_nom":"CH Côte Fleurie","ght_nom":"GHT Normandie Centre","département":"Calvados","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.589553894220726,49.09015082985209]},"properties":{"id":581,"code_region":"NOR","departement":"27","nom_hopital":"CH Bernay - 27","suppressions":"2019 : maternité fermé","ghi_nom":"","ght_nom":"GHT Eure Seine et Pays d’Ouche","département":"Eure","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.16873036095292,49.21420511304951]},"properties":{"id":454,"code_region":"NOR","departement":"27","nom_hopital":"CHELVR Louviers - 27","menaces":"chirurgie menacé","ghi_nom":"CHI Elbeuf-Louviers-Val de Reuil","ght_nom":"","département":"Eure","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.11333726990671,49.01922491987158]},"properties":{"id":582,"code_region":"NOR","departement":"27","nom_hopital":"CHES Évreux - 27","ghi_nom":"CHI Eure Seine","ght_nom":"GHT Eure-Seine – Pays d’Ouche","département":"Eure","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.4854523204838,49.09304812087839]},"properties":{"id":453,"code_region":"NOR","departement":"27","nom_hopital":"CHES - Vernon 27","ghi_nom":"CHES","ght_nom":"GHT Eure-Seine – Pays d’Ouche","département":"Eure","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.75944777850968,49.281267192112]},"properties":{"id":579,"code_region":"NOR","departement":"27","nom_hopital":"CH Gisors - 27","ghi_nom":"","ght_nom":"GHT Eure-Seine – Pays d’Ouche","département":"Eure","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.514417851609482,49.34842725595579]},"properties":{"id":455,"code_region":"NOR","departement":"27","nom_hopital":"CH La Risle - Pont Audemer - 27","suppressions":"2014 : chirurgie fermé;2003 : maternité fermé","menaces":"2013 : chirurgie ambulatoire menacé","ghi_nom":"","ght_nom":"GHT Estuaire de la Seine","département":"Eure","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.37761712485423,49.0161154213331]},"properties":{"id":670,"code_region":"NOR","departement":"27","nom_hopital":"CHL Pacy-sur-Eure - 27","suppressions":"2016 : médecine fermé","ghi_nom":"","ght_nom":"","département":"Eure","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.160856717748141,49.02851707834076]},"properties":{"id":634,"code_region":"NOR","departement":"27","nom_hopital":"Clinique Pasteur Évreux - 27","ghi_nom":"","ght_nom":"","département":"Eure","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.11348438844681,49.01925507283209]},"properties":{"id":903,"code_region":"NOR","departement":"27","nom_hopital":"NHN Évreux - 27","ghi_nom":"","ght_nom":"","département":"Eure","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.3514655421546,48.693387001846304]},"properties":{"id":199,"code_region":"NOR","departement":"50","nom_hopital":"CHAG Avranches – 50","suppressions":"2022 : urgences fermé;2018 : soins de suite et rééducation transféré","menaces":"2022 : chirurgie réduit (lits fermés);2021 : SMUR réduit (autre);2021 : urgences réduit (autre)","ghi_nom":"CHAG","ght_nom":"GHT Mont-Saint-Michel","département":"Manche","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.56954837486827,48.8278956956394]},"properties":{"id":198,"code_region":"NOR","departement":"50","nom_hopital":"CHAG Granville - 50 ","suppressions":"2021 : pneumologie transféré;2018 : chirurgie ambulatoire transféré;2018 : gastro-entérologie transféré;2018 : ligne SMUR fermé;2014 : cardiologie fermé;2014 : hospitalisation à domicile fermé;2008 : chirurgie osseuse fermé;2007 : maternité fermé;1999 : chirurgie viscérale fermé","menaces":"2021 : urgences réduit (autre);2019 : radiologie réduit (autre);2018 : astreinte transport de nuit interrompu;2017 : SMUR menacé;2015 : chirurgie ambulatoire menacé","victoires":"2020 : ligne SMUR victoire;SMUR victoire","ghi_nom":"CHAG","ght_nom":"GHT Mont-Saint-Michel","département":"Manche","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.613773372739713,49.63716333207961]},"properties":{"id":55,"code_region":"NOR","departement":"50","nom_hopital":"Cherbourg - 50","ghi_nom":"","ght_nom":"","département":"Manche","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.443723195545144,49.041797026620806]},"properties":{"id":432,"code_region":"NOR","departement":"50","nom_hopital":"Coutances - 50","suppressions":"2016 : maternité fermé;2016 : maternité privatisé;2015 : médecine à orientation cardiologie fermé;cuisine transféré","menaces":"2015 : urgences de nuit menacé","ghi_nom":"","ght_nom":"","département":"Manche","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.09637190928259,48.56900691094008]},"properties":{"id":378,"code_region":"NOR","departement":"50","nom_hopital":"Saint Hilaire du  Harcouët - 50","menaces":"2022 : médecine réduit (lits fermés);2022 : soins de suite et rééducation réduit (lits fermés);2021 : urgences réduit (autre);2016 : urgences menacé","victoires":"2016 : urgences victoire","ghi_nom":"","ght_nom":"GHT Mont-Saint-Michel","département":"Manche","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.106851527667067,49.105490337456764]},"properties":{"id":197,"code_region":"NOR","departement":"50","nom_hopital":"Saint Lô (50)","suppressions":"2015 : unité psychiatrique fermé","ghi_nom":"","ght_nom":"","département":"Manche","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.463905318551166,49.50207491763523]},"properties":{"id":348,"code_region":"NOR","departement":"50","nom_hopital":"Valognes - 50","suppressions":"2020 : centre de soins non programmés fermé;2015 : urgences fermé;2000 : maternité fermé;chirurgie fermé","menaces":"2015 : urgences de nuit interrompu","ghi_nom":"","ght_nom":"","département":"Manche","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.575844995212012,48.75008704961199]},"properties":{"id":190,"code_region":"NOR","departement":"61","nom_hopital":"CH Flers - 61","ghi_nom":"","ght_nom":"GHT Collines de Normandie","département":"Orne","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.658508266300947,48.59107922744346]},"properties":{"id":240,"code_region":"NOR","departement":"61","nom_hopital":"CHICA Domfront - 61","ghi_nom":"CHICA CHIC des Andaines","ght_nom":"GHT Collines de Normandie","département":"Orne","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.348867971327874,48.59776864470981]},"properties":{"id":239,"code_region":"NOR","departement":"61","nom_hopital":"CHICA La Ferté Macé  - 61","suppressions":"2005 : maternité fermé","ghi_nom":"CHICA CHIC des Andaines","ght_nom":"GHT Collines de Normandie","département":"Orne","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.082062774390961,48.430133704450505]},"properties":{"id":36,"code_region":"NOR","departement":"61","nom_hopital":"CHICAM - Alençon - 61","ghi_nom":"","ght_nom":"GHT Orne-Perche Saosnois","département":"Orne","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.628863967533457,48.7645436642047]},"properties":{"id":191,"code_region":"NOR","departement":"61","nom_hopital":"L'Aigle - 61","menaces":"2015 : chirurgie ambulatoire interrompu","ghi_nom":"","ght_nom":"","département":"Orne","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.545628284955328,48.51998795248787]},"properties":{"id":283,"code_region":"NOR","departement":"61","nom_hopital":"Mortagne au Perche - 61","suppressions":"chirurgie fermé","ghi_nom":"","ght_nom":"","département":"Orne","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.744066465743082,49.619278394438986]},"properties":{"id":618,"code_region":"NOR","departement":"76","nom_hopital":"CH Asselin-Hédlin Yvetot - 76","menaces":"2021 : EHPAD réduit (autre)","ghi_nom":"","ght_nom":"GHT Rouen-Cœur de Seine","département":"Seine-Maritime","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.08166496843298,49.45899973505031]},"properties":{"id":268,"code_region":"NOR","departement":"76","nom_hopital":"CH Belvédère -Mont Saint Aignan - 76","menaces":"2018 : maternité menacé","ghi_nom":"","ght_nom":"GHT Rouen-Cœur de Seine","département":"Seine-Maritime","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.04274612914737,49.3052886892735]},"properties":{"id":635,"code_region":"NOR","departement":"76","nom_hopital":"CHELVR Elbeuf - ","menaces":"chirurgie menacé","ghi_nom":"CHELVR - Elbeuf-Louviers-Val de Reuil","ght_nom":"GHT Val de Seine Plateaux de l’Eure","département":"Seine-Maritime","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.38630780121131,49.744381254949396]},"properties":{"id":266,"code_region":"NOR","departement":"76","nom_hopital":"CH Fécamp - 76","suppressions":"chirurgie fermé","ghi_nom":"CHIPHF","ght_nom":"GHT Estuaire de la Seine","département":"Seine-Maritime","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.112975269099498,49.499460909459984]},"properties":{"id":51,"code_region":"NOR","departement":"76","nom_hopital":"CH Flaubert - Le Havre - 76\r\n","suppressions":"2015 : direction des ressources humaines transféré;2015 : direction des ressources matérielles et logistique transféré;2010 : gynécologie obstétrique transféré;2010 : pédiatrie transféré;2010 : services administratifs transféré;2010 : urgences pédiatriques transféré","menaces":"centre mucoviscidose menacé","ghi_nom":"GHH","ght_nom":"GHT Estuaire de la Seine","département":"Seine-Maritime","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.543992610122508,49.51952736010998]},"properties":{"id":267,"code_region":"NOR","departement":"76","nom_hopital":"CH Lillebonne - 76","suppressions":"chirurgie fermé","menaces":"2019 : SMUR menacé;2019 : urgences menacé","ghi_nom":"CHICVS","ght_nom":"GHT Estuaire de la Seine","département":"Seine-Maritime","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.184918294501542,49.52639355722615]},"properties":{"id":585,"code_region":"NOR","departement":"76","nom_hopital":"CH Monod - Le Havre - 76","ghi_nom":"GHH","ght_nom":"GHT Estuaire de la Seine","département":"Seine-Maritime","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.05704151907865,49.41937815593779]},"properties":{"id":639,"code_region":"NOR","departement":"76","nom_hopital":"CH Saint-Julien Rouen - 76","ghi_nom":"CHU Rouen-Normandie","ght_nom":"GHT Rouen-Cœur de Seine","département":"Seine-Maritime","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.09500216890006,49.398506033048776]},"properties":{"id":586,"code_region":"NOR","departement":"76","nom_hopital":"CHS du Rouvray - 76","ghi_nom":"","ght_nom":"GHT Rouen-Cœur de Seine","département":"Seine-Maritime","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.106912962846085,49.43965000345348]},"properties":{"id":269,"code_region":"NOR","departement":"76","nom_hopital":"Rouen -76","menaces":"2017 : SMUR menacé","ghi_nom":"CHU","ght_nom":"GHT Rouen-Cœur de Seine","département":"Seine-Maritime","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.12993018808888,42.99961222341048]},"properties":{"id":428,"code_region":"OCC","departement":"09","nom_hopital":"CHAC Saint Girons - 09","menaces":"2022 : court séjour gériatrique réduit (autre);2022 : maternité interrompu;2021 : rééducation neurologique réduit (autre);2021 : urgences interrompu;2018 : chirurgie menacé;2018 : maternité menacé","ghi_nom":"CHAC","ght_nom":"GHT Pyrénées ariègeoises","département":"Ariège","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.60815299502762,43.11502707025709]},"properties":{"id":578,"code_region":"OCC","departement":"09","nom_hopital":"CHIVA Ariège Couserants - Pamiers - 09","ghi_nom":"CHIVA","ght_nom":"GHT Pyrénées ariègeoises","département":"Ariège","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.62005425518738,43.02585874556659]},"properties":{"id":306,"code_region":"OCC","departement":"09","nom_hopital":"CHIVA Foix - Saint Jean de Verges - 09","suppressions":"2018 : diabétologie fermé;2018 : infectiologie fermé;2018 : neurologie fermé;2018 : ophtalmologie fermé","victoires":"2012 : réanimation victoire","ghi_nom":"CHIVA - Vallées d'Ariège","ght_nom":"GHT Pyrénées ariègeoises","département":"Ariège","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.86089181286553,42.92875816339799]},"properties":{"id":307,"code_region":"OCC","departement":"09","nom_hopital":"CHIVA Pays d'Olme - Lavelanet - 09","menaces":"2021 : urgences interrompu;2012 : urgences réduit (autre);2011 : chirurgie conventionnelle réduit (autre)","victoires":"2020 : urgences réouvert;2012 : chirurgie maintenu;2012 : urgences maintenu","ghi_nom":"CHIVA","ght_nom":"GHT Pyrénées ariègeoises","département":"Ariège","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.60505778247334,42.848517037734496]},"properties":{"id":308,"code_region":"OCC","departement":"09","nom_hopital":"CH J. Rousse -Tarascon sur Ariège - 09","ghi_nom":"","ght_nom":"GHT Pyrénées ariègeoises","département":"Ariège","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.84024959448689,42.719580187382576]},"properties":{"id":309,"code_region":"OCC","departement":"09","nom_hopital":"CH St Louis - Ax-Les-Thermes - 09","ghi_nom":"","ght_nom":"GHT Pyrénées ariègeoises","département":"Ariège","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.60894692889593,43.11510538889151]},"properties":{"id":305,"code_region":"OCC","departement":"09","nom_hopital":"EHPAD du Barriol - Pamiers - 09","ghi_nom":"","ght_nom":"","département":"Ariège","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.84111371398051,42.93186150004271]},"properties":{"id":655,"code_region":"OCC","departement":"09","nom_hopital":"Maternité Lavelanet - 09","suppressions":"1998 : maternité fermé","ghi_nom":"","ght_nom":"","département":"Ariège","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.35289992062672,43.2120619561765]},"properties":{"id":30,"code_region":"OCC","departement":"11","nom_hopital":"CH Carcassonne - 11","menaces":"2019 : SMUR interrompu;2018 : urgences menacé;2017 : urgences interrompu","ghi_nom":"","ght_nom":"GHT Ouest Audois","département":"Aude","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.9530320085722,43.31718451551469]},"properties":{"id":304,"code_region":"OCC","departement":"11","nom_hopital":"CH Jean Pierre Cassabel Castelnaudary - 11","suppressions":"2010 : chirurgie fermé;2003 : maternité fermé","menaces":"2019 : urgences interrompu;2017 : SMUR interrompu;2015 : urgences menacé","ghi_nom":"","ght_nom":"GHT Ouest Audois","département":"Aude","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.75939669634847,43.19465943440939]},"properties":{"id":423,"code_region":"OCC","departement":"11","nom_hopital":"CH Lézignan-Corbières - 11","suppressions":"2008 : urgences fermé;chirurgie fermé","menaces":"2020 : médecine menacé","ghi_nom":"","ght_nom":"GHT Aude-Pyrénées","département":"Aude","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.21944954502499,43.055239346533696]},"properties":{"id":656,"code_region":"OCC","departement":"11","nom_hopital":"CHLQ Limoux - 11","menaces":"2017 : SMUR interrompu","ghi_nom":"CHLQ","ght_nom":"GHT Ouest Audois","département":"Aude","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.18460096543936,42.875153890690385]},"properties":{"id":430,"code_region":"OCC","departement":"11","nom_hopital":"CHLQ Quillan  - 11","menaces":"2018 : urgences interrompu;2017 : SMUR interrompu;1999 : chirurgie menacé","ghi_nom":"CHLQ","ght_nom":"GHT Ouest Audois","département":"Aude","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.999629107693295,43.18099234181974]},"properties":{"id":657,"code_region":"OCC","departement":"11","nom_hopital":"CH Narbonne","menaces":"2019 : oncologie interrompu","ghi_nom":"","ght_nom":"GHT Aude-Pyrénées","département":"Aude","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.025249568199992,43.18296381206562]},"properties":{"id":658,"code_region":"OCC","departement":"11","nom_hopital":"Polyclinique du Languedoc Narbonne - 11","suppressions":"2019 : maternité fermé","ghi_nom":"","ght_nom":"","département":"Aude","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.32900015288063,43.21306444387639]},"properties":{"id":737,"code_region":"OCC","departement":"11","nom_hopital":"Polyclinique Montréal Carcassonne - 11","ghi_nom":"","ght_nom":"","département":"Aude","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.144526721940506,44.545130886219766]},"properties":{"id":411,"code_region":"OCC","departement":"12","nom_hopital":"Asprières - 12","menaces":"maison de retraite menacé","ghi_nom":"","ght_nom":"","département":"Aveyron","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.05204863244105,44.0942428575848]},"properties":{"id":275,"code_region":"OCC","departement":"12","nom_hopital":"CH Millau - 12","suppressions":"2022 : soins de suite et rééducation fermé","menaces":"2021 : soins de suite et rééducation interrompu;2020 : chirurgie interrompu;2020 : soins de suite et rééducation menacé;2015 : maternité menacé","victoires":"2017 : maternité maintenu","ghi_nom":"","ght_nom":"GHT Est-Hérault et Sud-Aveyron","département":"Aveyron","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.576021507548489,44.349408654822504]},"properties":{"id":273,"code_region":"OCC","departement":"12","nom_hopital":"CH Rodez - 12","menaces":"2017 : cardiologie menacé;2016 : radiothérapie menacé","ghi_nom":"","ght_nom":"GHT du Rouergue","département":"Aveyron","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.87551937601136,43.95832279855119]},"properties":{"id":344,"code_region":"OCC","departement":"12","nom_hopital":"CH Saint Affrique - 12","suppressions":"2014 : bactériologie fermé;2014 : buanderie fermé","menaces":"2021 : bloc chirurgical réduit (autre);2021 : maternité interrompu;2021 : maternité réduit (autre);2021 : urgences réduit (autre)","victoires":"2017 : maternité maintenu;2011 : chirurgie maintenu","ghi_nom":"","ght_nom":"GHT Est-Hérault et Sud-Aveyron","département":"Aveyron","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.03538437732344,44.3497072369331]},"properties":{"id":274,"code_region":"OCC","departement":"12","nom_hopital":"CH Villefranche-de-Rouergue - 12","menaces":"2019 : maternité menacé;2012 : urgences menacé","ghi_nom":"","ght_nom":"GHT du Rouergue","département":"Aveyron","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.07063866216122,44.09565016764959]},"properties":{"id":587,"code_region":"OCC","departement":"12","nom_hopital":"Clin. Sainte Côme - 12","ghi_nom":"","ght_nom":"GHT Est-Hérault et Sud-Aveyron","département":"Aveyron","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.25246546553244,44.569014684994606]},"properties":{"id":272,"code_region":"OCC","departement":"12","nom_hopital":"Decazeville - 12","suppressions":"2017 : maternité fermé;2011 : bloc opératoire fermé","menaces":"2019 : chirurgie menacé;2019 : réanimation menacé;2016 : maternité menacé;2012 : bloc opératoire menacé;2012 : urgences menacé;2008 : chirurgie réduit (lits fermés)","victoires":"2011 : maternité maintenu;chirurgie maintenu","ghi_nom":"","ght_nom":"GHT du Rouergue","département":"Aveyron","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.09691053915941,44.1467218439421]},"properties":{"id":44,"code_region":"OCC","departement":"30","nom_hopital":"CH Alès-Cévennes - 30","menaces":"2020 : maternité réduit (lits fermés);soins longue durée transformé","ghi_nom":"","ght_nom":"GHT Cévennes-Gard-Camargue","département":"Gard","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.40965236888669,44.0055152283823]},"properties":{"id":26,"code_region":"OCC","departement":"30","nom_hopital":"CH Mas Careiron Uzès - 30","victoires":"2016 : unité psychiatrique maintenu","ghi_nom":"","ght_nom":"GHT Cévennes-Gard-Camargue","département":"Gard","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.933608653324087,44.39642469371756]},"properties":{"id":434,"code_region":"OCC","departement":"30","nom_hopital":"Ponteil ","ghi_nom":"","ght_nom":"","département":"Gard","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.43499249982466,43.61771539414028]},"properties":{"id":481,"code_region":"OCC","departement":"31","nom_hopital":"Centre post-cure Maignan Toulouse - 31","ghi_nom":"","ght_nom":"","département":"Haute-Garonne","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.723601527328454,43.10693906466209]},"properties":{"id":291,"code_region":"OCC","departement":"31","nom_hopital":"CHCP Saint-Gaudens - 31","menaces":"2019 : urgences interrompu;2012 : réanimation menacé","ghi_nom":"","ght_nom":"GHT Haute-Garonne et Tarn Ouest","département":"Haute-Garonne","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.42957594365024,43.596334850707976]},"properties":{"id":478,"code_region":"OCC","departement":"31","nom_hopital":"CH Joseph Ducuing Toulouse - 31","suppressions":"2021 : médecine fermé;2019 : urgences fermé","ghi_nom":"","ght_nom":"","département":"Haute-Garonne","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.42015570814351,43.55970751274759]},"properties":{"id":596,"code_region":"OCC","departement":"31","nom_hopital":"CHP G. Marchant Toulouse - 31","ghi_nom":"","ght_nom":"","département":"Haute-Garonne","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.40085635555784,43.616485522760996]},"properties":{"id":477,"code_region":"OCC","departement":"31","nom_hopital":"CHU Garonne Toulouse - 31","ghi_nom":"CHU Toulouse","ght_nom":"GHT Haute-Garonne et Tarn Ouest","département":"Haute-Garonne","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.43203269161502,43.60033634383219]},"properties":{"id":483,"code_region":"OCC","departement":"31","nom_hopital":"CHU La Grave Toulouse - 31","suppressions":"gériatrie transféré","ghi_nom":"CHU Toulouse","ght_nom":"","département":"Haute-Garonne","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.40094968532282,43.6092080630003]},"properties":{"id":480,"code_region":"OCC","departement":"31","nom_hopital":"CHU Pierre-Paul Riquet Toulouse - 31","menaces":"2016 : centre IVG menacé;2014 : bloc chirurgical menacé;2013 : chirurgie menacé;2013 : pédiatrie menacé;hospitalisation à domicile menacé","ghi_nom":"","ght_nom":"GHT Haute-Garonne et Tarn Ouest","département":"Haute-Garonne","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.3996637621294,43.613208840611]},"properties":{"id":482,"code_region":"OCC","departement":"31","nom_hopital":"CHU Purpan Toulouse - 31","suppressions":"2009 : soins externes rééducation fermé","menaces":"2011 : urgences menacé","ghi_nom":"","ght_nom":"GHT Haute-Garonne et Tarn Ouest","département":"Haute-Garonne","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.07767380250691,43.21816263444288]},"properties":{"id":659,"code_region":"OCC","departement":"31","nom_hopital":"Clinique de l'Ormeau Tarbes - 31","ghi_nom":"","ght_nom":"","département":"Hautes-Pyrénées","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.44041366825419,43.60701901472838]},"properties":{"id":479,"code_region":"OCC","departement":"31","nom_hopital":"Toulouse - 31  Centre de Soins St Sernin","ghi_nom":"","ght_nom":"","département":"Haute-Garonne","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.44421745359676,43.604595205709]},"properties":{"id":290,"code_region":"OCC","departement":"31","nom_hopital":"Toulouse La Case de Santé - 31","ghi_nom":"","ght_nom":"","département":"Haute-Garonne","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.528345117277827,43.64091981994205]},"properties":{"id":486,"code_region":"OCC","departement":"32","nom_hopital":"Auch -32\nClinique d'Embats\n","ghi_nom":"","ght_nom":"","département":"Gers","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.576870078389552,43.63099767259962]},"properties":{"id":59,"code_region":"OCC","departement":"32","nom_hopital":"CH Auch - 32","suppressions":"2016 : chirurgie fermé;2015 : pneumologie fermé;pédiatrie fermé;rééducation fermé","menaces":"2021 : urgences menacé;2019 : scanner - IRM menacé;2015 : cardiologie menacé;2012 : gynécologie menacé;2009 : pneumologie réduit (autre);diabétologie réduit (autre);neurologie réduit (autre)","victoires":"2021 : scanner - IRM maintenu","ghi_nom":"","ght_nom":"GHT du Gers","département":"Gers","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.378667975061151,43.955957220763494]},"properties":{"id":395,"code_region":"OCC","departement":"32","nom_hopital":"CH Condom - 32","menaces":"2019 : urgences menacé;2018 : SMUR réduit (autre);2017 : urgences de nuit interrompu;2015 : SMUR menacé","victoires":"2019 : SMUR réouvert;2018 : SMUR maintenu","ghi_nom":"","ght_nom":"GHT du Gers","département":"Gers","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.87505593701064,43.72972676343669]},"properties":{"id":413,"code_region":"OCC","departement":"32","nom_hopital":"CH Mauvezin - 32","victoires":"médecine maintenu","ghi_nom":"","ght_nom":"GHT du Gers","département":"Gers","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.402964269448874,43.51117658855661]},"properties":{"id":384,"code_region":"OCC","departement":"32","nom_hopital":"CH Saint-Jacques Mirande - 32","ghi_nom":"","ght_nom":"GHT du Gers","département":"Gers","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.593607948135888,43.643985186437995]},"properties":{"id":609,"code_region":"OCC","departement":"32","nom_hopital":"CHS Auch - 32","menaces":"2021 : pédopsychiatrie interrompu;2021 : unité de projet et d’accompagnement à la sortie (UPAS) menacé","ghi_nom":"","ght_nom":"","département":"Gers","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.582684730861684,43.63496411461728]},"properties":{"id":484,"code_region":"OCC","departement":"32","nom_hopital":"Cl. Barthélémy - Auch – 32 \r\n","suppressions":"2005 : maternité fermé","ghi_nom":"","ght_nom":"","département":"Gers","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.599193391056866,43.6451812138876]},"properties":{"id":487,"code_region":"OCC","departement":"32","nom_hopital":"Clin. de Gascogne - Auch - 32","suppressions":"maternité fermé","ghi_nom":"","ght_nom":"","département":"Gers","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.659435645427298,43.857561596955776]},"properties":{"id":18,"code_region":"OCC","departement":"32","nom_hopital":"Fleurance-Lectoure - 32","ghi_nom":"","ght_nom":"","département":"Gers","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.616164245877368,43.93573792038141]},"properties":{"id":61,"code_region":"OCC","departement":"32","nom_hopital":"Lectoure - 32","suppressions":"cuisine fermé;services techniques fermé","ghi_nom":"","ght_nom":"","département":"Gers","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.030930217473857,43.75735268954035]},"properties":{"id":412,"code_region":"OCC","departement":"32","nom_hopital":"Nogaro - 32","menaces":"2011 : médecine réduit (lits fermés)","ghi_nom":"","ght_nom":"","département":"Gers","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.297395734961127,43.759854738154]},"properties":{"id":394,"code_region":"OCC","departement":"32","nom_hopital":"Vic-Fezensac - 32","suppressions":"unité spécialisée Alzheimer fermé","ghi_nom":"","ght_nom":"GHT du Gers","département":"Gers","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.483116387884269,43.29843904309418]},"properties":{"id":739,"code_region":"OCC","departement":"34","nom_hopital":"CHBT Saint-Loup Agde - 34","suppressions":"2021 : accueil médicalisé de jour fermé;2021 : urgences de nuit fermé","menaces":"2021 : médecine réduit (lits fermés);2021 : réanimation réduit (lits fermés);2021 : soins de suite et rééducation réduit (lits fermés)","ghi_nom":"CHBT","ght_nom":"GHT Est-Hérault et Sud-Aveyron","département":"Hérault","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.67015673608831,43.40751501608509]},"properties":{"id":738,"code_region":"OCC","departement":"34","nom_hopital":"CHBT Sète - 34","ghi_nom":"CHBT","ght_nom":"GHT Est-Hérault et Sud-Aveyron","département":"Hérault","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.315660807985651,43.73059207153459]},"properties":{"id":43,"code_region":"OCC","departement":"34","nom_hopital":"CH Lodève - 34","suppressions":"2008 : chirurgie programmée fermé","menaces":"2022 : CAPS interrompu;2022 : urgences menacé","ghi_nom":"","ght_nom":"GHT Est-Hérault et Sud-Aveyron","département":"Hérault","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.437189439381057,43.62922796617496]},"properties":{"id":315,"code_region":"OCC","departement":"34","nom_hopital":"HL Clermont l'Hérault - 34","ghi_nom":"","ght_nom":"GHT Est-Hérault et Sud-Aveyron","département":"Hérault","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.70250116671212,43.93268629233619]},"properties":{"id":916,"code_region":"OCC","departement":"34","nom_hopital":"Polyclinique Saint-Louis Ganges - 34","menaces":"2022 : maternité menacé","ghi_nom":"","ght_nom":"","département":"Hérault","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.438446897503807,44.44903915266036]},"properties":{"id":499,"code_region":"OCC","departement":"46","nom_hopital":"Cahors Résidence d'Olt - 46","ghi_nom":"","ght_nom":"","département":"Lot","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.38197185200947,44.73691770070259]},"properties":{"id":310,"code_region":"OCC","departement":"46","nom_hopital":"CH Coulon Gourdon - 46","suppressions":"2004 : maternité fermé","menaces":"2021 : urgences menacé;2011 : chirurgie réduit (autre);2010 : chirurgie menacé;2003 : maternité menacé;2003 : pédiatrie menacé","ghi_nom":"","ght_nom":"GHT du Lot","département":"Lot","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.056174752180006,43.22035985840421]},"properties":{"id":233,"code_region":"OCC","departement":"46","nom_hopital":"CH de Bigorre Tarbes - 46","menaces":"2021 : SAMU menacé;2021 : urgences menacé","ghi_nom":"CH Tarbes-Lourdes","ght_nom":"GHT des Hautes-Pyrénées","département":"Hautes-Pyrénées","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.02911252537668,44.609691779821894]},"properties":{"id":405,"code_region":"OCC","departement":"46","nom_hopital":"CH Figeac - 46","suppressions":"2009 : maternité fermé","menaces":"2010 : chirurgie menacé","ghi_nom":"","ght_nom":"GHT du Lot","département":"Lot","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.44110954724361,44.44681246429339]},"properties":{"id":49,"code_region":"OCC","departement":"46","nom_hopital":"CH Jean Rougier Cahors - 46","ghi_nom":"","ght_nom":"GHT du Lot","département":"Lot","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.72347402600172,44.77926116254179]},"properties":{"id":403,"code_region":"OCC","departement":"46","nom_hopital":"CH L. Conte Gramat - 46","menaces":"2018 : médecine menacé","ghi_nom":"","ght_nom":"GHT du Lot","département":"Lot","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.89261258629306,44.85938150888689]},"properties":{"id":404,"code_region":"OCC","departement":"46","nom_hopital":"CH Saint-Jacques de Saint-Céré - 46","suppressions":"1997 : maternité fermé","ghi_nom":"","ght_nom":"GHT du Lot","département":"Lot","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.27915547873557,44.80813151125081]},"properties":{"id":669,"code_region":"OCC","departement":"48","nom_hopital":"CHL Fanny Ramadier Saint-Chély d'Apcher - 48","suppressions":"2015 : soins de suite et rééducation fermé;1991 : maternité fermé","menaces":"2011 : soins de suite et rééducation menacé","ghi_nom":"","ght_nom":"GHT Lozère","département":"Lozère","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.28981025371726,44.550155794688784]},"properties":{"id":338,"code_region":"OCC","departement":"48","nom_hopital":"CH Lozère - Marvéjols - 48","ghi_nom":"CHI Lozère","ght_nom":"GHT Lozère","département":"Lozère","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.49071727412953,44.52248802124516]},"properties":{"id":674,"code_region":"OCC","departement":"48","nom_hopital":"CH Lozère - Mende - 48","menaces":"réanimation menacé","ghi_nom":"CHI Lozère","ght_nom":"GHT Lozère","département":"Lozère","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[3.597633489525859,44.325549345853275]},"properties":{"id":675,"code_region":"OCC","departement":"48","nom_hopital":"CH Théophile Roussel Florac - 48","menaces":"2015 : médecine réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Lozère","département":"Lozère","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.150577388386126,43.06807668162761]},"properties":{"id":345,"code_region":"OCC","departement":"65","nom_hopital":"CH Bagnères de Bigorre - 65","suppressions":"2012 : buanderie fermé","menaces":"2022 : urgences de nuit interrompu;2021 : urgences de nuit menacé;2015 : urgences menacé","victoires":"2021 : urgences de nuit maintenu","ghi_nom":"","ght_nom":"GHT des Hautes-Pyrénées","département":"Hautes-Pyrénées","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.045900391679389,43.09167978686751]},"properties":{"id":234,"code_region":"OCC","departement":"65","nom_hopital":"CH Lourdes - 65","suppressions":"2015 : maternité fermé;addictologie transféré;HIV transféré;maladies infectieuses fermé","menaces":"2014 : maternité menacé;2014 : réanimation menacé;2009 : cardiologie réduit (autre);2009 : endoscopie réduit (autre);2009 : gastrologie réduit (autre);2008 : chirurgie réduit (autre)","ghi_nom":"GH Tarbes Lourdes","ght_nom":"GHT des Hautes-Pyrénées","département":"Hautes-Pyrénées","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.413394080917019,43.1159661606262]},"properties":{"id":339,"code_region":"OCC","departement":"65","nom_hopital":"Hôpitaux de Lannemezan - 65","suppressions":"2008 : maternité fermé","menaces":"2011 : bloc opératoire réduit (autre);2010 : chirurgie menacé","victoires":"2012 : chirurgie maintenu;2012 : psychiatrie maintenu;2011 : bloc opératoire réouvert;maternité victoire","ghi_nom":"Hôpitaux de Lannemezan","ght_nom":"GHT des Hautes-Pyrénées","département":"Hautes-Pyrénées","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.889801056135299,42.725586648439204]},"properties":{"id":425,"code_region":"OCC","departement":"66","nom_hopital":"CH Perpignan - 66","menaces":"2019 : hélicoptère menacé","ghi_nom":"","ght_nom":"GHT Aude-Pyrénées","département":"Pyrénées-Orientales","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.75618787707878,42.632498806835095]},"properties":{"id":340,"code_region":"OCC","departement":"66","nom_hopital":"CHS Gregory Thuir -  - 66","ghi_nom":"","ght_nom":"","département":"Pyrénées-Orientales","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.14213296015874,43.92582517349678]},"properties":{"id":83,"code_region":"OCC","departement":"81","nom_hopital":"CH Albi - 81","suppressions":"2012 : endocrinologie fermé;2012 : entretien sous-traité;2012 : nettoyage sous-traité;2008 : urologie fermé;2000 : ophtalmologie fermé;2000 : otorhinolaryngologie fermé;2000 : stomatologie fermé","menaces":"2012 : soins longue durée menacé;2009 : IRM menacé;2008 : endocrinologie réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Coeur d'Occitanie","département":"Tarn","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.2622599916782,43.5661470349221]},"properties":{"id":257,"code_region":"OCC","departement":"81","nom_hopital":"CH du Pays d'Autan Castres - 81","menaces":"2011 : cardiologie rythmologique menacé","victoires":"2012 : rythmologie interventionnelle maintenu","ghi_nom":"CHIC Castres-Mazamet","ght_nom":"GHT Coeur d'Occitanie","département":"Tarn","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.37064275573411,43.495335035052285]},"properties":{"id":258,"code_region":"OCC","departement":"81","nom_hopital":"CH du Pays d'Autan Mazamet - 81","suppressions":"1998 : maternité fermé;1998 : obstétrique transféré","ghi_nom":"CHIC Castres-Mazamet","ght_nom":"GHT Coeur d'Occitanie","département":"Tarn","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.89662282283017,43.9017804777502]},"properties":{"id":255,"code_region":"OCC","departement":"81","nom_hopital":"CH Gaillac - 81","ghi_nom":"","ght_nom":"GHT Coeur d'Occitanie","département":"Tarn","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.81814677946791,43.70118926947109]},"properties":{"id":337,"code_region":"OCC","departement":"81","nom_hopital":"CH Lavaur - 81","suppressions":"2008 : chirurgie fermé;endocrinologie fermé","menaces":"2022 : urgences de nuit interrompu;2021 : psychiatrie adulte menacé","victoires":"2019 : psychiatrie victoire","ghi_nom":"","ght_nom":"GHT Haute-Garonne et Tarn Ouest","département":"Tarn","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.155406883894655,44.05320469467125]},"properties":{"id":605,"code_region":"OCC","departement":"81","nom_hopital":"CH Sainte-Barbe Carmaux - 81","ghi_nom":"","ght_nom":"","département":"Tarn","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.148882947102552,43.91751006761851]},"properties":{"id":730,"code_region":"OCC","departement":"81","nom_hopital":"Clinique Bon Sauveur Albi - 81","ghi_nom":"","ght_nom":"","département":"Tarn","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.16504674190879,43.93014721120251]},"properties":{"id":651,"code_region":"OCC","departement":"81","nom_hopital":"Clinique Claude Bernard Albi - 81","suppressions":"2020 : maternité fermé","menaces":"2021 : urgences réduit (autre)","ghi_nom":"","ght_nom":"","département":"Tarn","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.1800671123901,43.929065455062286]},"properties":{"id":534,"code_region":"OCC","departement":"81","nom_hopital":"Clinique Toulouse Lautrec Albi - 81","menaces":"2012 : maternité menacé;2012 : urgences menacé","ghi_nom":"","ght_nom":"","département":"Tarn","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.158056937499596,44.05319851038082]},"properties":{"id":254,"code_region":"OCC","departement":"81","nom_hopital":"Polyclinique Carmaux - 81","suppressions":"service d'accueil de proximité et de soins non programmé fermé","menaces":"2017 : service d'accueil de proximité et de soins non programmé menacé;2010 : urgences transformé;chirurgie menacé","ghi_nom":"","ght_nom":"","département":"Tarn","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.129254649727403,43.89092689863433]},"properties":{"id":256,"code_region":"OCC","departement":"81","nom_hopital":"Saliès - 81","menaces":"2012 : diabétologie réduit (lits fermés)","ghi_nom":"","ght_nom":"","département":"Tarn","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.10659942467454,44.04222726927559]},"properties":{"id":536,"code_region":"OCC","departement":"82","nom_hopital":"CHICM Castelsarrasin - 82","menaces":"2021 : urgences menacé;2015 : chirurgie réduit (autre);2011 : chirurgie viscérale réduit (autre)","ghi_nom":"","ght_nom":"GHT Tarn et Garonne","département":"Tarn-et-Garonne","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.08399401801726,44.103853859194196]},"properties":{"id":204,"code_region":"OCC","departement":"82","nom_hopital":"CHICM Moissac - 82","suppressions":"urgences de nuit fermé","menaces":"2022 : urgences menacé;2010 : chirurgie menacé","ghi_nom":"","ght_nom":"GHT Tarn et Garonne","département":"Tarn-et-Garonne","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.35086259060687,44.0230543308879]},"properties":{"id":77,"code_region":"OCC","departement":"82","nom_hopital":"CH Montauban - 82","menaces":"2022 : urgences menacé;2021 : SMUR réduit (autre);2021 : urgences réduit (autre);2015 : chirurgie orthopédique réduit (autre)","ghi_nom":"","ght_nom":"GHT Tarn et Garonne","département":"Tarn-et-Garonne","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.36581861917037,44.01029826381679]},"properties":{"id":592,"code_region":"OCC","departement":"82","nom_hopital":"Clin. Boyé Montauban - 82","ghi_nom":"","ght_nom":"","département":"Tarn-et-Garonne","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.37923731881196,44.006227318794906]},"properties":{"id":537,"code_region":"OCC","departement":"82","nom_hopital":"Clin. Pont de Chaume Montauban - 82","suppressions":"2021 : maternité fermé","ghi_nom":"","ght_nom":"","département":"Tarn-et-Garonne","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.10712797309018,44.039770303976105]},"properties":{"id":205,"code_region":"OCC","departement":"82","nom_hopital":"Maison Retraite Castelsarrasin - 82","ghi_nom":"","ght_nom":"","département":"Tarn-et-Garonne","région":"Occitanie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.17381430330775,44.072158913021894]},"properties":{"id":217,"code_region":"PAC","departement":"04","nom_hopital":"CH Digne-Les-Bains- 04","suppressions":"2017 : médecine interne fermé;2013 : chirurgie viscérale transféré;2008 : centre de jour personnes âgées fermé;2008 : centre médico-psychologique (CMP) infento-juvénile fermé;2008 : laboratoire d'analyse des eaux transféré;2008 : pédiatrie fermé","menaces":"2021 : gérontopsychiatrie réduit (autre);2020 : maternité interrompu;2016 : maternité menacé;2013 : bloc opératoire menacé;2013 : neurologie réduit (autre);2013 : ophtalmologie réduit (autre);2013 : réanimation transformé;2013 : urologie réduit (autre);2012 : orthopédie fusionné;2012 : traumatologie fusionné;2008 : alcoologie transformé","ghi_nom":"","ght_nom":"GHT Alpes de Haute Provence","département":"Alpes-de-Haute-Provence","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.63095979820631,44.04258958165689]},"properties":{"id":371,"code_region":"PAC","departement":"04","nom_hopital":"CHIM D. Collomp Banon - 04","suppressions":"2019 : soins de suite et rééducation fermé","ghi_nom":"CHIM","ght_nom":"GHT Alpes de Haute Provence","département":"Alpes-de-Haute-Provence","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.80587012205304,43.82892310445241]},"properties":{"id":556,"code_region":"PAC","departement":"04","nom_hopital":"CHIM L. Raffalli Manosque - 04","suppressions":"2009 : réanimation fermé;2008 : centre de jour personnes âgées fermé","menaces":"2022 : urgences de nuit interrompu;réanimation menacé","ghi_nom":"CHIM","ght_nom":"GHT Alpes de Haute Provence","département":"Alpes-de-Haute-Provence","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.77573144095045,43.96056380994618]},"properties":{"id":372,"code_region":"PAC","departement":"04","nom_hopital":"CHIM Saint-Michel Forcalquier – 04","ghi_nom":"CHIM","ght_nom":"GHT Alpes de Haute Provence","département":"Alpes-de-Haute-Provence","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.09044243129883,43.81898394190251]},"properties":{"id":370,"code_region":"PAC","departement":"04","nom_hopital":"CH Lumière Riez - 04","menaces":"2012 : médecine menacé","ghi_nom":"","ght_nom":"GHT Alpes de Haute Provence","département":"Alpes-de-Haute-Provence","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.969655816480394,44.03002543839653]},"properties":{"id":725,"code_region":"PAC","departement":"04","nom_hopital":"EHPAD Lou Cigalou Les Mées - 04","menaces":"2017 : médecine réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Alpes de Haute Provence","département":"Alpes-de-Haute-Provence","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.50814890017349,43.846921722437685]},"properties":{"id":373,"code_region":"PAC","departement":"04","nom_hopital":"HL Ducélia Castellane - 04","menaces":"2012 : médecine menacé","ghi_nom":"","ght_nom":"GHT Alpes de Haute Provence","département":"Alpes-de-Haute-Provence","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.64941361758478,44.38775882014259]},"properties":{"id":376,"code_region":"PAC","departement":"04","nom_hopital":"HL Pierre Groues Barcelonnette - 04","menaces":"2012 : médecine menacé","ghi_nom":"","ght_nom":"GHT Alpes de Haute Provence","département":"Alpes-de-Haute-Provence","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.12805779271557,43.86314187460667]},"properties":{"id":576,"code_region":"PAC","departement":"04","nom_hopital":"HL Puimoisson - 04","ghi_nom":"","ght_nom":"GHT Alpes de Haute Provence","département":"Alpes-de-Haute-Provence","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.98359485752308,43.837316093546484]},"properties":{"id":575,"code_region":"PAC","departement":"04","nom_hopital":"HL Saint-Jacques Valensole - 04","ghi_nom":"","ght_nom":"GHT Alpes de Haute Provence","département":"Alpes-de-Haute-Provence","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.35943717964266,44.352995201137794]},"properties":{"id":375,"code_region":"PAC","departement":"04","nom_hopital":"HL Vallée de la Blanche Seyne-les-Alpes - 04","menaces":"2012 : médecine menacé","ghi_nom":"","ght_nom":"GHT Alpes de Haute Provence","département":"Alpes-de-Haute-Provence","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.810603254133613,44.322788513137816]},"properties":{"id":731,"code_region":"PAC","departement":"05","nom_hopital":"CH Buëch-Durance Laragne - 05","menaces":"2018 : médecine réduit (lits fermés);2018 : psychiatrie réduit (autre);2012 : médecine menacé","ghi_nom":"CHBD","ght_nom":"GHT Hautes Alpes","département":"Hautes-Alpes","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.633163452463321,44.90589985277649]},"properties":{"id":297,"code_region":"PAC","departement":"05","nom_hopital":"CH-Escartons - Briançon - 05","suppressions":"2014 : réanimation fermé","menaces":"2015 : service de surveillance continue menacé;2011 : réanimation menacé;2010 : actes chirurgicaux menacé;pédiatrie menacé","victoires":"2012 : réanimation victoire","ghi_nom":"","ght_nom":"GHT Hautes Alpes","département":"Hautes-Alpes","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.07323459994029,44.55735879552739]},"properties":{"id":35,"code_region":"PAC","departement":"05","nom_hopital":"CHICAS Gap - 05","suppressions":"2017 : soins intensifs fermé;2009 : cuisine fermé;2009 : radiothérapie fermé;2008 : soins continus polyvalents fermé","menaces":"2010 : radiothérapie interrompu;2009 : chirurgie menacé;2008 : chirurgie réduit (autre);cardiologie réduit (autre);laboratoire réduit (autre);maison de retraite transformé;unité long séjour transformé","ghi_nom":"CHICAS Gap-Sisteron","ght_nom":"GHT Hautes Alpes","département":"Hautes-Alpes","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.943677621481229,44.193198458170706]},"properties":{"id":374,"code_region":"PAC","departement":"05","nom_hopital":"CHICAS Sisteron - 05","suppressions":"2019 : urgences fermé;2017 : soins intensifs fermé;2009 : bloc opératoire fermé;2009 : chirurgie fermé;2009 : cuisine fermé;2009 : radiothérapie fermé;2008 : soins continus polyvalents fermé;1996 : maternité fermé","menaces":"2009 : laboratoire réduit (autre);2008 : chirurgie réduit (autre);cardiologie réduit (autre)","victoires":"2020 : urgences réouvert","ghi_nom":"CHICAS","ght_nom":"GHT Hautes Alpes","département":"Alpes-de-Haute-Provence","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.493201737703901,44.561232298705285]},"properties":{"id":369,"code_region":"PAC","departement":"05","nom_hopital":"HL Embrun - 05","suppressions":"1988 : chirurgie fermé;1986 : maternité fermé","menaces":"2019 : EHPAD réduit (lits fermés)","victoires":"2012 : maison d'enfant à caractère social maintenu","ghi_nom":"","ght_nom":"GHT Hautes Alpes","département":"Hautes-Alpes","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.118682275447845,43.601316818323774]},"properties":{"id":727,"code_region":"PAC","departement":"06","nom_hopital":"CH Antibes-Juan-les-Pins - 06","menaces":"2021 : psychiatrie réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Alpes-Maritimes","département":"Alpes-Maritimes","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.91601877709391,43.6497193371942]},"properties":{"id":426,"code_region":"PAC","departement":"06","nom_hopital":"CH Grasse - 06","menaces":"2016 : réanimation menacé","ghi_nom":"","ght_nom":"GHT Alpes-Maritimes","département":"Alpes-Maritimes","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.30300349614352,44.01353498360851]},"properties":{"id":729,"code_region":"PAC","departement":"06","nom_hopital":"CHI La Vésubie - Roquebillière 06","ghi_nom":"","ght_nom":"","département":"Alpes-Maritimes","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.257983890719641,44.0720285757966]},"properties":{"id":342,"code_region":"PAC","departement":"06","nom_hopital":"CHI La Vésubie Saint-Martin Vésubie - 06","menaces":"2017 : médecine réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Alpes-Maritimes","département":"Alpes-Maritimes","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.48351299525799,43.76682718358919]},"properties":{"id":728,"code_region":"PAC","departement":"06","nom_hopital":"CH Menton - 06","suppressions":"2003 : maternité fermé","ghi_nom":"","ght_nom":"GHT Alpes-Maritimes","département":"Alpes-Maritimes","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.27320653362974,43.72104240288849]},"properties":{"id":293,"code_region":"PAC","departement":"06","nom_hopital":"CHRU du Cimiez Nice - 06","suppressions":"2014 : pédiatrie privatisé","menaces":"2021 : urgences menacé;2012 : médecine menacé","ghi_nom":"","ght_nom":"GHT Alpes-Maritimes","département":"Alpes-Maritimes","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.00458132156557,43.56413603927929]},"properties":{"id":427,"code_region":"PAC","departement":"06","nom_hopital":"CH Simone Veil Cannes - 06","menaces":"2012 : médecine menacé","ghi_nom":"","ght_nom":"GHT Alpes-Maritimes","département":"Alpes-Maritimes","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7.277954827701458,43.74111469421402]},"properties":{"id":726,"code_region":"PAC","departement":"06","nom_hopital":"HG Les Sources Nice - 06","suppressions":"2021 : réanimation transféré","ghi_nom":"","ght_nom":"","département":"Alpes-Maritimes","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.39560892347953,43.290374245472215]},"properties":{"id":468,"code_region":"PAC","departement":"13","nom_hopital":"APHM Conception Marseille - 13","menaces":"2014 : centre IVG menacé","ghi_nom":"APHM","ght_nom":"GHT Bouches-du-Rhône","département":"Bouches-du-Rhône","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.35941783738103,43.37784649127508]},"properties":{"id":469,"code_region":"PAC","departement":"13","nom_hopital":"APHM Hôpital Nord Marseille  - 13","suppressions":"laboratoire de microbiologie fermé","menaces":"2012 : cardiologie menacé;2012 : pédiatrie menacé","ghi_nom":"APHM","ght_nom":"GHT Bouches-du-Rhône","département":"Bouches-du-Rhône","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.40990544776565,43.26039587640289]},"properties":{"id":466,"code_region":"PAC","departement":"13","nom_hopital":"APHM Ste-Marguerite Marseille - 13","menaces":"2022 : psychiatrie menacé","ghi_nom":"APHM","ght_nom":"GHT Bouches-du-Rhône","département":"Bouches-du-Rhône","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.56387430935654,43.29200679230298]},"properties":{"id":229,"code_region":"PAC","departement":"13","nom_hopital":"CH Edmond Garcin Aubagne - 13","suppressions":"2022 : ophtalmologie fermé","menaces":"2020 : réanimation transformé;2019 : chirurgie réduit (lits fermés);2010 : réanimation menacé;2009 : anesthésie réduit (autre);2009 : chirurgie réduit (autre);2009 : pédiatrie réduit (autre)","victoires":"2012 : IRM victoire","ghi_nom":"","ght_nom":"GHT Bouches-du-Rhône","département":"Bouches-du-Rhône","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.44327327455696,43.53544578995468]},"properties":{"id":228,"code_region":"PAC","departement":"13","nom_hopital":"CHIAP Aix en Provence - 13","menaces":"2021 : chirurgie menacé;2021 : rhumatologie menacé;2021 : SMUR interrompu;2021 : urgences réduit (autre);2012 : médecine menacé","ghi_nom":"CHI Aix-Pertuis","ght_nom":"GHT Bouches du Rhône","département":"Bouches-du-Rhône","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.63372135742282,43.657476747518686]},"properties":{"id":34,"code_region":"PAC","departement":"13","nom_hopital":"CH Joseph Imbert Arles - 13","menaces":"2021 : SMUR menacé;2019 : SMUR interrompu","ghi_nom":"","ght_nom":"GHT Bouches-du-Rhône","département":"Bouches-du-Rhône","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.38249973887097,43.2498514367362]},"properties":{"id":467,"code_region":"PAC","departement":"13","nom_hopital":"Clin. Bonne Veine Marseille - 13","ghi_nom":"","ght_nom":"","département":"Bouches-du-Rhône","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.415067523944532,43.32657574085712]},"properties":{"id":591,"code_region":"PAC","departement":"13","nom_hopital":"HIA Laveran Marseille - 13","ghi_nom":"","ght_nom":"","département":"Bouches-du-Rhône","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.92726343569665,43.12688764493819]},"properties":{"id":538,"code_region":"PAC","departement":"83","nom_hopital":"CH Chalucet Toulon – 83","ghi_nom":"","ght_nom":"","département":"Var","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.01524290344292,43.132467772810045]},"properties":{"id":539,"code_region":"PAC","departement":"83","nom_hopital":"CH Clémenceau – 83","ghi_nom":"CHI Toulon-La Seyne","ght_nom":"GHT du Var","département":"Var","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.44520206787797,43.5496098673861]},"properties":{"id":435,"code_region":"PAC","departement":"83","nom_hopital":"CH Dracénie Draguignan - 83","suppressions":"2021 : urgences de nuit fermé","menaces":"2021 : psychiatrie menacé;2018 : réanimation menacé","ghi_nom":"","ght_nom":"GHT du Var","département":"Var","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.11262928086911,43.11946956980291]},"properties":{"id":3,"code_region":"PAC","departement":"83","nom_hopital":"CH Hyères - 83","suppressions":"2015 : bloc opératoire de nuit fermé;2015 : réanimation fermé;2009 : soins longue durée fermé;2008 : USIC fermé","menaces":"2018 : maternité menacé;2015 : chirurgie menacé;2013 : réanimation menacé;2009 : médecine polyvalente réduit (lits fermés);2008 : cardiologie réduit (autre);2007 : médecine polyvalente transformé","ghi_nom":"","ght_nom":"GHT du Var","département":"Var","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.751272079512312,43.439044078610884]},"properties":{"id":732,"code_region":"PAC","departement":"83","nom_hopital":"CHIFSR Bonnet - 83","ghi_nom":"","ght_nom":"GHT du Var","département":"Var","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.871203522475461,43.1083355687358]},"properties":{"id":296,"code_region":"PAC","departement":"83","nom_hopital":"CHITS La Seyne-sur-Mer - 83","suppressions":"2012 : maternité transféré;2010 : chirurgie fermé;2008 : pédiatrie fermé;laboratoire fermé","menaces":"2021 : médecine réduit (lits fermés);2021 : soins palliatifs interrompu;chirurgie menacé;hospitalisation menacé","victoires":"2011 : maternité maintenu","ghi_nom":"CHITS Toulon-La Seyne","ght_nom":"GHT du Var","département":"Var","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.97564120132045,43.1239624253455]},"properties":{"id":60,"code_region":"PAC","departement":"83","nom_hopital":"CHITS Toulon - 83","menaces":"2021 : médecine réduit (autre)","ghi_nom":"CHI Toulon-La-Seyne","ght_nom":"GHT du Var","département":"Var","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.06657777350167,43.40388003250999]},"properties":{"id":294,"code_region":"PAC","departement":"83","nom_hopital":"CH Jean Marcel Brignoles - 83","menaces":"2021 : SMUR menacé;2015 : chirurgie menacé","ghi_nom":"","ght_nom":"GHT du Var","département":"Var","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.5712076966039,43.249238760510494]},"properties":{"id":295,"code_region":"PAC","departement":"83","nom_hopital":"CH-PS Saint-Tropez - 83","suppressions":"chirurgie fermé","menaces":"2018 : maternité menacé","ghi_nom":"","ght_nom":"GHT du Var","département":"Var","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.770329628815594,43.423994920681345]},"properties":{"id":733,"code_region":"PAC","departement":"83","nom_hopital":"CH Saint-Raphaël - 83","ghi_nom":"","ght_nom":"","département":"Var","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.933907566188076,43.133484067046936]},"properties":{"id":580,"code_region":"PAC","departement":"83","nom_hopital":"HIA Sainte-Anne Toulon - 83","suppressions":"ravitaillement sanitaire des armées fermé","ghi_nom":"","ght_nom":"","département":"Var","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.02748965416809,44.04717139227609]},"properties":{"id":218,"code_region":"PAC","departement":"84","nom_hopital":"CH Carpentras - 84","suppressions":"1994 : chirurgie fermé","ghi_nom":"","ght_nom":"GHT du Vaucluse","département":"Vaucluse","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.80220713915508,43.919704009228504]},"properties":{"id":219,"code_region":"PAC","departement":"84","nom_hopital":"CH Henri Duffaut Avignon - 84","menaces":"2019 : urgences psychiatriques réduit (autre);2014 : urgences menacé","ghi_nom":"","ght_nom":"GHT du Vaucluse","département":"Vaucluse","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.49936971580549,43.6940814402821]},"properties":{"id":221,"code_region":"PAC","departement":"84","nom_hopital":"CHIAP Pertuis - 84","suppressions":"2007 : chirurgie fermé","menaces":"2021 : SMUR de nuit interrompu;2021 : urgences réduit (autre);2020 : urgences de nuit interrompu;unité long séjour réduit (lits fermés)","victoires":"2020 : urgences de nuit maintenu","ghi_nom":"CHI Aix-Pertuis","ght_nom":"GHT Bouches du Rhône","département":"Vaucluse","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.037421419820781,43.84043223707989]},"properties":{"id":27,"code_region":"PAC","departement":"84","nom_hopital":"CHICL Cavaillon - 84","suppressions":"chirurgie osseuse fermé","menaces":"2014 : chirurgie digestive menacé;gynécologie réduit (autre)","ghi_nom":"","ght_nom":"GHT du Vaucluse","département":"Vaucluse","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.3038470883397,43.75829436619213]},"properties":{"id":734,"code_region":"PAC","departement":"84","nom_hopital":"CHICL Lauris - 84","ghi_nom":"CHICL","ght_nom":"","département":"Vaucluse","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.99134996990586,44.38281719181279]},"properties":{"id":451,"code_region":"PAC","departement":"84","nom_hopital":"CH Niel Valréas - 84","suppressions":"2009 : maternité fermé;2008 : chirurgie fermé;2008 : soins continus fermé","menaces":"2008 : chirurgie gynécologique réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT du Vaucluse","département":"Vaucluse","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.38203890812718,43.8758190857461]},"properties":{"id":220,"code_region":"PAC","departement":"84","nom_hopital":"CHPA Apt - 84","suppressions":"2016 : maternité fermé","menaces":"2019 : urgences réduit (autre);2016 : chirurgie menacé;2013 : maternité menacé;2012 : chirurgie réduit (autre)","victoires":"2015 : maternité maintenu","ghi_nom":"","ght_nom":"GHT du Vaucluse","département":"Vaucluse","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.07502150707487,44.2397168253504]},"properties":{"id":452,"code_region":"PAC","departement":"84","nom_hopital":"CH Vaison la romaine - 84","suppressions":"2001 : chirurgie fermé;1992 : maternité transféré","ghi_nom":"","ght_nom":"GHT du Vaucluse","département":"Vaucluse","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.42169339021628,47.1255669088297]},"properties":{"id":713,"code_region":"PDL","departement":"44","nom_hopital":"CH Château-Thébaud - 44","suppressions":"2009 : soins longue durée fermé","ghi_nom":"","ght_nom":"","département":"Loire-Atlantique","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.17201977436434,47.3740212674293]},"properties":{"id":707,"code_region":"PDL","departement":"44","nom_hopital":"CHEL Ancenis - 44","suppressions":"2021 : SMUR fermé","menaces":"2021 : médecine interrompu","ghi_nom":"CH Erdre et Loire","ght_nom":"GHT Loire Atlantique","département":"Loire-Atlantique","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.38125305788396,47.726007969191485]},"properties":{"id":211,"code_region":"PDL","departement":"44","nom_hopital":"CHICNP Châteaubriant - 44","suppressions":"chirurgie fermé","ghi_nom":"CHICNP","ght_nom":"GHT Loire Atlantique","département":"Loire-Atlantique","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.62556775664133,47.56159925059761]},"properties":{"id":711,"code_region":"PDL","departement":"44","nom_hopital":"CHICNP Nozay - 44","suppressions":"soins de suite et rééducation fermé","ghi_nom":"CHICNP","ght_nom":"GHT Loire Atlantique","département":"Loire-Atlantique","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.17473284267993,47.74120757044069]},"properties":{"id":712,"code_region":"PDL","departement":"44","nom_hopital":"CHICNP Pouancé - 44","suppressions":"soins de suite et rééducation fermé","ghi_nom":"","ght_nom":"GHT Loire Atlantique","département":"Maine-et-Loire","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-2.42433503078633,47.32434240536589]},"properties":{"id":288,"code_region":"PDL","departement":"44","nom_hopital":"CHI Guérande - 44","ghi_nom":"CHI de la Presqu'île","ght_nom":"GHT Loire Atlantique","département":"Loire-Atlantique","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-2.064760439641796,47.11109528006948]},"properties":{"id":710,"code_region":"PDL","departement":"44","nom_hopital":"CHIPR Pornic - 44","menaces":"soins de suite et rééducation réduit (lits fermés)","ghi_nom":"CHI du Pays de Retz","ght_nom":"GHT Loire Atlantique","département":"Loire-Atlantique","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-2.25663673803534,47.2674781941361]},"properties":{"id":212,"code_region":"PDL","departement":"44","nom_hopital":"CH Saint Nazaire - 44","menaces":"2020 : urgences interrompu","ghi_nom":"","ght_nom":"GHT Loire Atlantique","département":"Loire-Atlantique","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.82052780827533,47.4662550947836]},"properties":{"id":62,"code_region":"PDL","departement":"44","nom_hopital":"CHS Blain – 44","menaces":"2009 : psychiatrie réduit (autre)","ghi_nom":"","ght_nom":"GHT Loire Atlantique","département":"Loire-Atlantique","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.63967876473121,47.23625460721749]},"properties":{"id":599,"code_region":"PDL","departement":"44","nom_hopital":"CHU Nord Laennec Saint-Herblain - 44","menaces":"2021 : cardiologie menacé;2021 : urgences menacé;2021 : urgences pédiatriques menacé","ghi_nom":"","ght_nom":"GHT Loire Atlantique","département":"Loire-Atlantique","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.53668648777731,47.19794043746999]},"properties":{"id":213,"code_region":"PDL","departement":"44","nom_hopital":"CHU Sud Saint-Jacques Nantes - 44","menaces":"2022 : psychiatrie interrompu;2021 : pédiatrie réduit (autre);2018 : chirurgie interrompu;centre IVG menacé","ghi_nom":"","ght_nom":"GHT Loire Atlantique","département":"Loire-Atlantique","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.56621294789208,46.9585364515944]},"properties":{"id":709,"code_region":"PDL","departement":"44","nom_hopital":"HL Bel Air Corcoué-sur-Logne - 44","ghi_nom":"","ght_nom":"GHT Loire Atlantique","département":"Loire-Atlantique","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.896571573844582,47.0425652273341]},"properties":{"id":686,"code_region":"PDL","departement":"49","nom_hopital":"CH Cholet - 49","suppressions":"2021 : urgences de nuit fermé","menaces":"2021 : psychiatrie réduit (lits fermés);service ouvert d’hospitalisation en psychiatrie menacé","ghi_nom":"","ght_nom":"GHT Maine et Loire","département":"Maine-et-Loire","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.03260340983382,47.56021946338989]},"properties":{"id":777,"code_region":"PDL","departement":"49","nom_hopital":"CHEL Candé - 49","ghi_nom":"CHEL","ght_nom":"GHT Loire Atlantique","département":"Maine-et-Loire","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.866322321955454,47.678077765165895]},"properties":{"id":716,"code_region":"PDL","departement":"49","nom_hopital":"CHHA Segré-en-Anjou - 49","suppressions":"1995 : maternité fermé","ghi_nom":"CHHA","ght_nom":"GHT Maine et Loire","département":"Maine-et-Loire","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.271608253355124,47.19303512057459]},"properties":{"id":715,"code_region":"PDL","departement":"49","nom_hopital":"CHL Doué-la-Fontaine - 49","suppressions":"1987 : maternité fermé","ghi_nom":"","ght_nom":"GHT Maine et Loire","département":"Maine-et-Loire","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.06106293547705,47.24714522559419]},"properties":{"id":6,"code_region":"PDL","departement":"49","nom_hopital":"CH Saumur - 49","suppressions":"chirurgie fermé","menaces":"2021 : maternité interrompu","ghi_nom":"","ght_nom":"GHT Maine et Loire","département":"Maine-et-Loire","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.556109588682661,47.48388058208159]},"properties":{"id":158,"code_region":"PDL","departement":"49","nom_hopital":"CHU Angers - 49","suppressions":"2019 : soins longue durée fermé","menaces":"2021 : réanimation menacé","victoires":"2021 : réanimation victoire","ghi_nom":"","ght_nom":"GHT Maine et Loire","département":"Maine-et-Loire","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.573290919535957,47.475065896482185]},"properties":{"id":748,"code_region":"PDL","departement":"49","nom_hopital":"CHU PMS Saint-Nicolas Angers - 49","ghi_nom":"CHU","ght_nom":"GHT Maine et Loire","département":"Maine-et-Loire","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.563072549503685,47.42206880923888]},"properties":{"id":714,"code_region":"PDL","departement":"49","nom_hopital":"CSM Angevin Saint-Gemmes -49","ghi_nom":"","ght_nom":"GHT Maine et Loire","département":"Maine-et-Loire","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.503818290764972,47.487456388816895]},"properties":{"id":157,"code_region":"PDL","departement":"49","nom_hopital":"Saint Barthélémy d'Anjou - 49\nLa Claverie","menaces":"2017 : prise en charge obésité interrompu;soins de suite menacé","ghi_nom":"","ght_nom":"","département":"Maine-et-Loire","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.700317128114812,47.827067525389694]},"properties":{"id":681,"code_region":"PDL","departement":"53","nom_hopital":"CHHA Château-Gontier - 53","menaces":"2021 : urgences réduit (autre)","ghi_nom":"CHHA","ght_nom":"GHT Mayenne-Haut Anjou","département":"Mayenne","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.783982389305133,48.063673316194]},"properties":{"id":687,"code_region":"PDL","departement":"53","nom_hopital":"CH Laval - 53","menaces":"2022 : urgences interrompu;2021 : psychiatrie menacé;2021 : soins continus interrompu","ghi_nom":"","ght_nom":"GHT Mayenne et Haut-Anjou","département":"Mayenne","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.409285444545829,48.15760974484926]},"properties":{"id":717,"code_region":"PDL","departement":"53","nom_hopital":"CHL Évron - 53","menaces":"2021 : médecine réduit (lits fermés);2021 : soins de suite réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Mayenne et Haut-Anjou","département":"Mayenne","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.620766909995613,48.30627003194879]},"properties":{"id":206,"code_region":"PDL","departement":"53","nom_hopital":"CHNM Mayenne - 53","suppressions":"2021 : urgences de nuit fermé;2019 : SMUR fermé","menaces":"2022 : maternité menacé;2022 : maternité réduit (autre);2020 : chirurgie menacé;2018 : maternité interrompu;2018 : urgences interrompu","victoires":"2021 : chirurgie maintenu;2021 : unité de surveillance continue maintenu","ghi_nom":"CHNM Nord Mayenne","ght_nom":"GHT Mayenne-Haut Anjou","département":"Mayenne","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.957582363192989,47.848033083263594]},"properties":{"id":642,"code_region":"PDL","departement":"53","nom_hopital":"HLSOM Craon - 53","ghi_nom":"HLSOM","ght_nom":"GHT Mayenne-Haut Anjou","département":"Mayenne","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.065681566110726,47.794182058437386]},"properties":{"id":641,"code_region":"PDL","departement":"53","nom_hopital":"HLSOM Renazé - 53","ghi_nom":"HLSOM","ght_nom":"GHT Mayenne-Haut Anjou","département":"Mayenne","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.420212651274362,47.69101489609499]},"properties":{"id":559,"code_region":"PDL","departement":"72","nom_hopital":"CH Château-du-Loir 72","menaces":"2022 : urgences menacé;2021 : urgences interrompu","ghi_nom":"","ght_nom":"GHT de la Sarthe","département":"Sarthe","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.368493705838444,48.34875225830158]},"properties":{"id":421,"code_region":"PDL","departement":"72","nom_hopital":"CHICAM Mamers - 72","suppressions":"2013 : chambre mortuaire fermé;chirurgie fermé","ghi_nom":"CHIC Alençon-Mamers","ght_nom":"GHT Orne-Perche Saosnois","département":"Sarthe","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.161564344043462,47.76813364270659]},"properties":{"id":391,"code_region":"PDL","departement":"72","nom_hopital":"CHI PSSL Le Bailleul - 72","suppressions":"2021 : urgences fermé;2018 : centre IVG fermé","menaces":"2021 : bloc opératoire menacé;2021 : maternité menacé;2021 : urgences interrompu;2021 : urgences réduit (autre);2019 : urgences de nuit interrompu","ghi_nom":"CHI PSSL","ght_nom":"GHT de la Sarthe","département":"Sarthe","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.662569214499472,48.189373309082306]},"properties":{"id":682,"code_region":"PDL","departement":"72","nom_hopital":"CH Paul Chapron La Ferté-Bernard - 72","suppressions":"2021 : urgences fermé","ghi_nom":"","ght_nom":"GHT de la Sarthe","département":"Sarthe","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.742449671085828,47.91868614286668]},"properties":{"id":389,"code_region":"PDL","departement":"72","nom_hopital":"CH Saint Calais - 72","suppressions":"2010 : chirurgie fermé","ghi_nom":"","ght_nom":"GHT de la Sarthe","département":"Sarthe","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.162196736923657,47.95924981632419]},"properties":{"id":718,"code_region":"PDL","departement":"72","nom_hopital":"EPSM de la Sarthe Allones - 72","ghi_nom":"","ght_nom":"GHT de la Sarthe","département":"Sarthe","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.197347783576907,48.00752315943221]},"properties":{"id":364,"code_region":"PDL","departement":"72","nom_hopital":"Le Mans - 72","suppressions":"2020 : réanimation pédiatrique fermé","menaces":"2020 : réanimation néonatale menacé;2018 : soins palliatifs interrompu;2012 : centre IVG menacé","ghi_nom":"","ght_nom":"GHT de la Sarthe","département":"Sarthe","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.12029463907571,48.227842792762495]},"properties":{"id":719,"code_region":"PDL","departement":"72","nom_hopital":"PHG Beaumont-sur-Sarthe - 72","ghi_nom":"PHG Nord-Sarthe","ght_nom":"GHT de la Sarthe","département":"Sarthe","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.424282467875286,48.18472927527028]},"properties":{"id":720,"code_region":"PDL","departement":"72","nom_hopital":"PHG Bonnétable - 72","ghi_nom":"PHG Nord-Sarthe","ght_nom":"GHT de la Sarthe","département":"Sarthe","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.123030689123825,48.18594632465468]},"properties":{"id":721,"code_region":"PDL","departement":"72","nom_hopital":"PHG Sillé-le-Guillaume - 72","ghi_nom":"PHG Nord-Sarthe","ght_nom":"GHT de la Sarthe","département":"Sarthe","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.75090661721191,46.515151807069195]},"properties":{"id":188,"code_region":"PDL","departement":"85","nom_hopital":"CH Côte de Lumière - Les Sables-d'Olonne - 85","suppressions":"2006 : chirurgie fermé","menaces":"2021 : urgences interrompu","ghi_nom":"","ght_nom":"GHT Vendée","département":"Vendée","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.827665868049698,46.4655945610932]},"properties":{"id":189,"code_region":"PDL","departement":"85","nom_hopital":"CH Fontenay le Comte - 85","suppressions":"2015 : hospitalisation psychiatrique fermé;2004 : chirurgie fermé","menaces":"2020 : maternité menacé;2020 : pédiatrie menacé","ghi_nom":"","ght_nom":"","département":"Vendée","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.949801037285136,46.99124160228356]},"properties":{"id":665,"code_region":"PDL","departement":"85","nom_hopital":"CHL Mortagne-sur-Sèvre - 85","suppressions":"activité sanitaire fermé","ghi_nom":"","ght_nom":"","département":"Vendée","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.87284728674902,46.8466412155691]},"properties":{"id":722,"code_region":"PDL","departement":"85","nom_hopital":"CHLVO Challans - 85","menaces":"2022 : médecine polyvalente menacé;soins de suite et rééducation réduit (autre)","ghi_nom":"","ght_nom":"GHT Vendée","département":"Vendée","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.41322388831636,46.66823537712739]},"properties":{"id":590,"code_region":"PDL","departement":"85","nom_hopital":"GHD La Roche-sur-Yon - 85","suppressions":"2019 : ménage sous-traité","menaces":"2008 : standard réduit (autre)","ghi_nom":"GHD Vendée","ght_nom":"GHT Vendée","département":"Vendée","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.17240910775448,46.45049860208489]},"properties":{"id":301,"code_region":"PDL","departement":"85","nom_hopital":"GHD Luçon - 85","suppressions":"2021 : accueil de jour Alzheimer fermé;2019 : réadaptation fonctionnelle fermé;2019 : stérilisation transféré;2004 : laboratoire transféré;2004 : maison de retraite personnes valides fermé;2003 : cardiologie fermé;2003 : diabétologie semaine fermé;2001 : chirurgie 24/24 fermé;2001 : maternité fermé;nettoyage sous-traité","menaces":"2021 : SMUR menacé;2021 : urgences interrompu;2008 : standard réduit (autre);2003 : médecine spécialisée transformé","ghi_nom":"GHD Vendée","ght_nom":"GHT Vendée","département":"Vendée","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.30995751882551,46.969398511703496]},"properties":{"id":58,"code_region":"PDL","departement":"85","nom_hopital":"GHD Montaigu - 85","suppressions":"2000 : chirurgie fermé;1998 : maternité fermé","menaces":"2021 : urgences interrompu;2015 : SMUR de nuit menacé","ghi_nom":"GHD Vendée","ght_nom":"GHT Vendée","département":"Vendée","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-1.92312397901764,46.6958567260492]},"properties":{"id":187,"code_region":"PDL","departement":"85","nom_hopital":"Saint Gilles Croix de Vie - 85","ghi_nom":"","ght_nom":"","département":"Vendée","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1.87988091568135,46.17884030557498]},"properties":{"id":923,"departement":"23","nom_hopital":"Clinique de la Marche Guéret - 23","menaces":"chirurgie menacé","département":"Creuse","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.154947180212597,47.96362115652254]},"properties":{"id":921,"nom_hopital":"Centre Gériatrie Charles Drouet Allones - 72","département":"Sarthe","région":"Pays de la Loire"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.889791707643367,43.21790263577076]},"properties":{"id":920,"nom_hopital":"CH Mauléon-Licharre - 64","département":"Pyrénées-Atlantiques","région":"Nouvelle-Aquitaine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-2.202425957475905,48.18576173486684]},"properties":{"id":922,"nom_hopital":"CH Saint-Méen le Grand - 35","suppressions":"2022 : soins de suite et rééducation fermé","ght_nom":"GHT Haute Bretagne","département":"Ille-et-Vilaine","région":"Bretagne"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.896955495863186,48.84073089138387]},"properties":{"id":919,"nom_hopital":"Clinique Notre-Dame Vire - 14","département":"Calvados","région":"Normandie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.78116405600908,43.82424519432399]},"properties":{"id":917,"nom_hopital":"Clinique Toutes Aures Manosque - 04","département":"Alpes-de-Haute-Provence","région":"Provence-Alpes-Côte d'Azur"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.720171253387347,45.026167181185265]},"properties":{"id":918,"nom_hopital":"EHPAD Korian Vergt - 24","département":"Dordogne","région":"Nouvelle-Aquitaine"}}]},
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
      checkIfStoreNeedsUpdate: false,
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
    brChar: ";",
    popupData : {
      title: 'nom_hopital',
      //properties: ["LIEUX", "SUPPRESSIONS", "MENACES", "victoire"],
      hidden: ['id', 'nom_hopital', 'INSEE_COM', 'département', 'région', 'departement', 'code_region','selected'],
      label: [{
          value: 'suppressions'
        }, {
          value: 'menaces'
        }, {
          value: 'victoires'
        }, {
          value: 'ght_nom',
          label: 'nom du ght'
        }, {
          value: 'ghi_nom',
          label: 'nom ghi'
        }
      ],
    },
    tableData: {
      properties: [{
        name: 'nom_hopital',
        title:'hôpital',
        filter: 'selection'
      }, {
        name: 'département',
        filter: 'selection'
      }, {
        name: 'région',
        filter: 'selection'
      }, {
        name: 'suppressions',
        filter: 1,
        min_width: '250px'
      }, {
        name: 'menaces',
        filter: 0,
        min_width: '250px'
      }, {
        name: 'victoires',
        filter: 0,
        min_width: '250px'
      }, {
        name: 'ght_nom',
        title:'nom du ght',
        filter: 'selection'
      }, {
        name: 'ghi_nom',
        title:'nom du ghi',
        filter: 'selection'
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
        }, {
          value: '1: avec chirurgie',
          label: 'Avec chirurgie'
        }, {
          value: '1: avec psychiatrie',
          label: 'Avec psychiatrie'
        }, {
          value: '1: avec pédiatrie',
          label: 'Avec pédiatrie'
        }, {
          value: '1: avec réanimation',
          label: 'Avec réanimation'
        }, {
          value: '1: avec cardiologie',
          label: 'Avec cardiologie'
        }, {
          value: '1: avec radiothérapie',
          label: 'Avec radiothérapie'
        }, {
          value: '1: avec pneumologie',
          label: 'Avec pneumologie'
        }, {
          value: '1: avec ophtalmologie',
          label: 'Avec ophtalmologie'
        }, {
          value: '1: avec otorhinolaryngologie',
          label: 'Avec otorhinolaryngologie'
        }, {
          value: '1: avec stomatologie',
          label: 'Avec stomatologie'
        }, {
          value: '1: avec urologie',
          label: 'Avec urologie'
        }, {
          value: '1: avec endocrinologie',
          label: 'Avec endocrinologie'
        }, {
          value: '1: avec addictologie',
          label: 'Avec addictologie'
        }, {
          value: '1: avec gérontologie',
          label: 'Avec gérontologie'
        }, {
          value: '1: avec nettoyage',
          label: 'Avec nettoyage'
        }, {
          value: '1: avec entretien',
          label: 'Avec entretien'
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
            case '1: avec chirurgie':
              if (isOKString(columnVal) && columnVal.toUpperCase().indexOf('CHIRURGIE') > -1) {
                return true;
              }
              else return false;
              break;
            case '1: avec psychiatrie':
              if (isOKString(columnVal) && columnVal.toUpperCase().indexOf('PSYCHIATRIE') > -1) {
                return true;
              }
              else return false;
              break;
            case '1: avec pédiatrie':
              if (isOKString(columnVal) && columnVal.toUpperCase().indexOf('PÉDIATRIE') > -1) {
                return true;
              }
              else return false;
              break;
            case '1: avec réanimation':
              if (isOKString(columnVal) && columnVal.toUpperCase().indexOf('RÉANIMATION') > -1) {
                return true;
              }
              else return false;
              break;
            case '1: avec cardiologie':
              if (isOKString(columnVal) && columnVal.toUpperCase().indexOf('CARDIO') > -1) {
                return true;
              }
              else return false;
              break;
            case '1: avec radiothérapie':
              if (isOKString(columnVal) && columnVal.toUpperCase().indexOf('RADIOTH') > -1) {
                return true;
              }
              else return false;
              break;
            case '1: avec pneumologie':
              if (isOKString(columnVal) && columnVal.toUpperCase().indexOf('PNEUMO') > -1) {
                return true;
              }
              else return false;
              break;
            case '1: avec ophtalmologie':
              if (isOKString(columnVal) && columnVal.toUpperCase().indexOf('OPHTALMO') > -1) {
                return true;
              }
              else return false;
              break;
            case '1: avec otorhinolaryngologie':
              if (isOKString(columnVal) && (columnVal.toUpperCase().indexOf('OTORHINOLARYN') > -1 || columnVal.toUpperCase().indexOf('ORL') > -1)) {
                return true;
              }
              else return false;
              break;
            case '1: avec stomatologie':
              if (isOKString(columnVal) && columnVal.toUpperCase().indexOf('STOMATO') > -1) {
                return true;
              }
              else return false;
              break;
            case '1: avec urologie':
              if (isOKString(columnVal) && columnVal.toUpperCase().indexOf('UROLOGIE	') > -1) {
                return true;
              }
              else return false;
              break;
            case '1: avec endocrinologie':
              if (isOKString(columnVal) && columnVal.toUpperCase().indexOf('ENDOCRINO	') > -1) {
                return true;
              }
              else return false;
              break;
             case '1: avec nettoyage':
              if (isOKString(columnVal) && columnVal.toUpperCase().indexOf('NETTOYAGE') > -1) {
                return true;
              }
              else return false;
              break;
             case '1: avec addictologie':
              if (isOKString(columnVal) && columnVal.toUpperCase().indexOf('ADDICTO') > -1) {
                return true;
              }
              else return false;
              break;
             case '1: avec gérontologie':
              if (isOKString(columnVal) && columnVal.toUpperCase().indexOf('GÉRONTO') > -1) {
                return true;
              }
              else return false;
              break;
            case '1: avec entretien':
              if (isOKString(columnVal) && columnVal.toUpperCase().indexOf('ENTRETIEN') > -1) {
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
      if (jQuery.type(options['brChar']) !== 'undefined') var regForBR = new RegExp(options['brChar'], 'g')
      for (var i = 0; i < indexEvent.length; i++) {
        if (jQuery.type(options['brChar']) !== 'undefined') {
          for (var prop in indexEvent[i]) {
            var propVal = indexEvent[i][prop];
            if (typeof propVal === 'string') propVal = propVal.replace(regForBR, "<br>");
            indexEvent[i][prop] = propVal;
          }
        }
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
              //position: 'topright'
              position: 'bottomleft'
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
          if (tableFilterOn) $('.dt-button.reinitBT').css('visibility', 'visible');
          else $('.dt-button.reinitBT').css('visibility', 'hidden');
          $('.dt-button.helpBT').css('display', 'none');

          var properties = options.tableData.properties;
          for (var i = 0; i < properties.length; i++) {
            var min_width = properties[i]['min_width']
            if (jQuery.type(min_width) !== 'undefined' && jQuery.type(properties[i]['name']) === 'string') {
              if (jQuery.type(properties[i]['title']) === 'string') {
                var title = properties[i]['title'];
              }
              else {
                var title = properties[i]['name'];
              }
             $('#table th:contains('+ title + ')').css('min-width', min_width);
            }
          }
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
})(jQuery)
