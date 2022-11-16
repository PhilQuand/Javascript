(function($) {
$.fn.mapAllBlogs = function() {

  var isOKNumber = data => {
  if (jQuery.type(data) === 'number' && data != '') return true;
  else return false;
}

  var optionsPlugIn = {
    data: {
        base: {"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[632242.3678559816,5740172.164424667]},"properties":{"id":808,"code_region":"ARA","departement":"01","nom_hopital":"CH Belley Sud","ghi_nom":"","ght_nom":"GHT Savoie Belley","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[624253.7043380933,5804354.147175061]},"properties":{"id":154,"code_region":"ARA","departement":"01","nom_hopital":"CHHB Nantua - 01","menaces":"chirurgie réduit (autre)","ghi_nom":"CHHB","ght_nom":"GHT Bresse-Haut-Bugey","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[626758.0447131923,5822068.21852015]},"properties":{"id":779,"code_region":"ARA","departement":"01","nom_hopital":"CHHB Oyonnax - 01","menaces":"2015 : maternité réduit (autre)","ghi_nom":"CHHB","ght_nom":"GHT Bresse-Haut-Bugey","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[531153.3058012761,5770888.551841285]},"properties":{"id":810,"code_region":"ARA","departement":"01","nom_hopital":"CH Monpensier Trévoux - 01","suppressions":"1975 : maternité fermé","ghi_nom":"","ght_nom":"GHT Rhône Nord Beaujolais Dombes","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[624612.7154945305,5776401.068819964]},"properties":{"id":23,"code_region":"ARA","departement":"01","nom_hopital":"CHPH Hauteville-Lompnes - 01","ghi_nom":"CHPH","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[632842.5460350853,5742468.530296159]},"properties":{"id":155,"code_region":"ARA","departement":"01","nom_hopital":"CH-Récamier - Belley - 01","menaces":"2009 : chirurgie menacé;2009 : médecine menacé;2008 : soins continus interrompu","ghi_nom":"","ght_nom":"GHT Savoie Belley","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[578209.946990937,5765358.670416356]},"properties":{"id":778,"code_region":"ARA","departement":"01","nom_hopital":"CH Ruivet Meximieux - 01","ghi_nom":"","ght_nom":"GHT Bresse-Haut-Bugey","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[346700.1544197459,5844543.581600615]},"properties":{"id":784,"code_region":"ARA","departement":"03","nom_hopital":"CHCDB Tronget - 03","menaces":"2013 : addictologie réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Allier","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[382512.78599889495,5800117.217104153]},"properties":{"id":1,"code_region":"ARA","departement":"03","nom_hopital":"CH Jacques Lacarin Vichy - 03","menaces":"2021 : pédopsychiatrie interrompu;2019 : psychiatrie infanto-juvénile menacé","ghi_nom":"","ght_nom":"GHT Allier","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[290477.80980586057,5835312.312231202]},"properties":{"id":347,"code_region":"ARA","departement":"03","nom_hopital":"CH Montluçon - 03","suppressions":"2021 : centre de santé fermé;2010 : ophtalmologie privatisé;chirurgie ophtalmologique fermé","menaces":"2022 : pédiatrie menacé;2022 : urgences menacé;2021 : pôle mère-enfant menacé;2019 : SMUR menacé;2016 : psychiatrie menacé;2015 : médecine réduit (lits fermés);chirurgie menacé;maternité fusionné;psychiatrie réduit (autre)","ghi_nom":"","ght_nom":"GHT Allier","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[296287.6675421521,5826212.588404718]},"properties":{"id":781,"code_region":"ARA","departement":"03","nom_hopital":"CH Montluçon-Néris-les-Bains - 03","ghi_nom":"","ght_nom":"GHT Allier","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[370288.7108241203,5872335.199093107]},"properties":{"id":782,"code_region":"ARA","departement":"03","nom_hopital":"CHMY Yzeure - 03","ghi_nom":"CHMY","ght_nom":"GHT Allier","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[372693.41102969274,5873510.756168591]},"properties":{"id":783,"code_region":"ARA","departement":"03","nom_hopital":"CHS Yzeure - 03","menaces":"2016 : psychiatrie réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Allier","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[489518.1710813907,5560790.878210567]},"properties":{"id":141,"code_region":"ARA","departement":"07","nom_hopital":"CHAM Aubenas - 07","suppressions":"2021 : gastro-entérologie fermé;2018 : IVG fermé;1998 : ophtalmologie fermé","menaces":"2018 : pédiatrie interrompu;2016 : néonatalogie menacé;2010 : addictologie réduit (autre);2008 : réanimation transformé","victoires":"2012 : ophtalmologie réouvert;2008 : soins de suite maintenu;2006 : néonatalogie maintenu;2005 : urgences maintenu","ghi_nom":"CHAM – CH Ardèche Méridionale","ght_nom":"GHT Sud Drôme Ardèche","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[471903.3750884432,5539821.719654356]},"properties":{"id":415,"code_region":"ARA","departement":"07","nom_hopital":"CHCA Joyeuse - 07","menaces":"2020 : soins de suite et rééducation interrompu","victoires":"2021 : soins de suite et rééducation réouvert","ghi_nom":"CHCA","ght_nom":"GHT Sud Drôme Ardèche","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[460875.6944504976,5529672.435605128]},"properties":{"id":755,"code_region":"ARA","departement":"07","nom_hopital":"CHCA Léopold Ollier Chambonas - 07","ghi_nom":"CHCA","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[541681.8398955986,5631370.786837532]},"properties":{"id":600,"code_region":"ARA","departement":"07","nom_hopital":"CH Tournon-sur-Rhône - 07","suppressions":"2021 : IRM privatisé","ghi_nom":"","ght_nom":"GHT Rhône Vercors Vivarais","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[510230.9850323458,5579171.992646153]},"properties":{"id":140,"code_region":"ARA","departement":"07","nom_hopital":"CHVA Privas - 07","suppressions":"2022 : buanderie fermé;2019 : maternité fermé;2018 : addictologie fermé","victoires":"maternité maintenu","ghi_nom":"CH Vals d'Ardèche","ght_nom":"GHT Sud Drôme Ardèche","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[519800.5519201571,5662690.810149018]},"properties":{"id":806,"code_region":"ARA","departement":"07","nom_hopital":"Clinique des Cévennes Annonay - 07","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[488754.36493851256,5560593.845238132]},"properties":{"id":787,"code_region":"ARA","departement":"07","nom_hopital":"Clinique du Vivarais Aubenas - 07","suppressions":"1998 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[541330.532929841,5611406.767129382]},"properties":{"id":139,"code_region":"ARA","departement":"07","nom_hopital":"CMP P.C. Racamier Guilhérand-Granges - 07","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[517281.7117787824,5523728.209722158]},"properties":{"id":791,"code_region":"ARA","departement":"07","nom_hopital":"HLIBSAV Bourg-Saint-Andéol - 07","ghi_nom":"","ght_nom":"GHT Sud Drôme Ardèche","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[522000.32937138155,5540796.089057534]},"properties":{"id":790,"code_region":"ARA","departement":"07","nom_hopital":"HLIBSAV Viviers - 07","ghi_nom":"","ght_nom":"GHT Sud Drôme Ardèche","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[477713.92781563476,5549844.435757641]},"properties":{"id":788,"code_region":"ARA","departement":"07","nom_hopital":"HLIRL Largentière - 07","ghi_nom":"HLIRL","ght_nom":"GHT Sud Drôme Ardèche","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[476958.2669824548,5554934.010205956]},"properties":{"id":789,"code_region":"ARA","departement":"07","nom_hopital":"HLIRL Rocher - 07","ghi_nom":"HLIRL","ght_nom":"GHT Sud Drôme Ardèche","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[543520.3048305325,5611213.309320425]},"properties":{"id":906,"code_region":"ARA","departement":"07","nom_hopital":"HPDA Guilhérand-Granges - 07","menaces":"2022 : maternité privée interrompu;2022 : urgences interrompu","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[469892.1731559075,5570423.844874343]},"properties":{"id":898,"code_region":"ARA","departement":"07","nom_hopital":"La Condamine Thueyts - 07","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[489792.8920358408,5622774.7622788325]},"properties":{"id":138,"code_region":"ARA","departement":"07","nom_hopital":"Saint Agrève - 07","suppressions":"2008 : maternité fermé","menaces":"2013 : médecine menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[512996.3537693994,5645291.673129152]},"properties":{"id":137,"code_region":"ARA","departement":"07","nom_hopital":"Satillieu - 07","menaces":"2017 : EHPAD menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[271181.99683391675,5609938.893186495]},"properties":{"id":350,"code_region":"ARA","departement":"15","nom_hopital":"CH H. Mondor Aurillac - 15","menaces":"2019 : SMUR interrompu;2014 : réanimation réduit (autre);2013 : réanimation menacé","ghi_nom":"","ght_nom":"GHT du Cantal","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[259642.142910256,5655880.104243918]},"properties":{"id":380,"code_region":"ARA","departement":"15","nom_hopital":"CH Mauriac - 15","suppressions":"2017 : dialyse fermé;2009 : chirurgie fermé;2007 : maternité fermé","menaces":"2017 : urgences menacé","ghi_nom":"","ght_nom":"GHT du Cantal","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[343542.23569355905,5626839.352161514]},"properties":{"id":793,"code_region":"ARA","departement":"15","nom_hopital":"CH Saint-Flour - 15","menaces":"2017 : psychiatrie réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT du Cantal","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[270188.3154663477,5607187.1601686]},"properties":{"id":792,"code_region":"ARA","departement":"15","nom_hopital":"CMC Tronquières Aurillac - 15","suppressions":"2014 : réanimation fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[557400.5583184129,5578783.365861684]},"properties":{"id":149,"code_region":"ARA","departement":"26","nom_hopital":"CH Crest - 26","suppressions":"2013 : chirurgie fermé;1992 : maternité fermé","ghi_nom":"","ght_nom":"GHT Rhône Vercors Vivarais","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[558826.8197425051,5628096.337940552]},"properties":{"id":685,"code_region":"ARA","departement":"26","nom_hopital":"CHDN Romans - 26","ghi_nom":"","ght_nom":"GHT Rhône Vercors Vivarais","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[536806.2298942718,5648491.200434789]},"properties":{"id":146,"code_region":"ARA","departement":"26","nom_hopital":"CHDN Saint-Vallier - 26","menaces":"2021 : médecine physique et de réadaptation réduit (lits fermés);2018 : urgences interrompu;2017 : urgences de nuit réduit (autre);2014 : psychiatrie menacé","ghi_nom":"","ght_nom":"GHT Rhône Vercors Vivarais","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[549243.8287321888,5598473.646150361]},"properties":{"id":794,"code_region":"ARA","departement":"26","nom_hopital":"CHS Le Valmont Montéléger","ghi_nom":"","ght_nom":"GHT Rhône Vercors Vivarais","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[528681.2483725697,5551908.239872415]},"properties":{"id":795,"code_region":"ARA","departement":"26","nom_hopital":"CHS Le Valmont Montélimar - 26","ghi_nom":"","ght_nom":"GHT Rhône Vercors Vivarais","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[546020.840647293,5608000.427234304]},"properties":{"id":147,"code_region":"ARA","departement":"26","nom_hopital":"CH Valence - 26","menaces":"2019 : urgences menacé","ghi_nom":"","ght_nom":"GHT Rhône Vercors Vivarais","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[597962.8612856739,5583083.9269043505]},"properties":{"id":148,"code_region":"ARA","departement":"26","nom_hopital":"Die – 26","suppressions":"2017 : chirurgie fermé;2017 : maternité fermé;2008 : chirurgie de nuit fermé","menaces":"2018 : urgences de nuit menacé;2016 : chirurgie menacé;2016 : maternité menacé","victoires":"2020 : maternité victoire;2015 : chirurgie d'urgence maintenu;2015 : maternité maintenu;2009 : chirurgie de nuit réouvert","ghi_nom":"","ght_nom":"GHT Rhône Vercors Vivarais","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[563820.3774676436,5547352.178899564]},"properties":{"id":773,"code_region":"ARA","departement":"26","nom_hopital":"GHPP Dieulefit - 26","ghi_nom":"GHPP","ght_nom":"GHT Sud Drôme Ardèche","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[526739.8838797329,5552065.923540057]},"properties":{"id":772,"code_region":"ARA","departement":"26","nom_hopital":"GHPP Montélimar - 26","menaces":"2021 : bloc opératoire interrompu","ghi_nom":"GHPP","ght_nom":"GHT Sud Drôme Ardèche","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[586808.9369545077,5508456.514633006]},"properties":{"id":150,"code_region":"ARA","departement":"26","nom_hopital":"HL du Jonchier Buis-les-Baronnies - 26 ","suppressions":"2008 : EHPAD fermé;2008 : soins de suite et rééducation fermé","menaces":"2008 : soins de suite lourds menacé","ghi_nom":"","ght_nom":"GHT Sud Drôme Ardèche","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[645121.9599330785,5606534.367918752]},"properties":{"id":276,"code_region":"ARA","departement":"38","nom_hopital":"CH La Mure - 38","suppressions":"2004 : bloc opératoire fermé;2004 : chirurgie fermé;1995 : maternité fermé","menaces":"2019 : soins de suite et rééducation interrompu;2019 : urgences de nuit menacé","ghi_nom":"","ght_nom":"GHT Alpes-Dauphiné","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[543316.4394876771,5705921.829869993]},"properties":{"id":803,"code_region":"ARA","departement":"38","nom_hopital":"CH L. Hussel Vienne - 38","menaces":"2021 : chirurgie réduit (lits fermés);2021 : médecine réduit (lits fermés);2021 : pédiatrie réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Rhône Sud-Isère","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[611013.3898898062,5669323.592331196]},"properties":{"id":802,"code_region":"ARA","departement":"38","nom_hopital":"CH M. Perret Tullins - 38","suppressions":"1987 : chirurgie fermé","ghi_nom":"","ght_nom":"GHT Alpes-Dauphiné","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[639686.9913342816,5653048.4336861]},"properties":{"id":565,"code_region":"ARA","departement":"38","nom_hopital":"CHUGA Nord La Tronche Grenoble - 38","menaces":"2021 : réanimation réduit (lits fermés);2021 : soins critiques réduit (lits fermés);2020 : urgences réduit (lits fermés)","ghi_nom":"CHUGA Grenoble Alpes","ght_nom":"GHT Alpes-Dauphiné","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[638086.2140714084,5644897.949558695]},"properties":{"id":606,"code_region":"ARA","departement":"38","nom_hopital":"CHUGA Sud Échirolles Grenoble - 38","suppressions":"2003 : maternité fermé","menaces":"2021 : bloc opératoire menacé;2021 : hospitalisation filière orthopédie/traumatologie menacé;2021 : urgences menacé","victoires":"2021 : bloc opératoire maintenu","ghi_nom":"CHUGA Grenoble Alpes","ght_nom":"GHT Alpes-Dauphiné","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[622728.9833534075,5679782.12559193]},"properties":{"id":151,"code_region":"ARA","departement":"38","nom_hopital":"CHUGA Voiron - 38","suppressions":"2021 : SMUR de nuit fermé","menaces":"2021 : SMUR interrompu;2021 : urgences interrompu","ghi_nom":"CHU Grenoble Alpes","ght_nom":"GHT Alpes-Dauphiné","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[630554.5661977818,5706761.618935496]},"properties":{"id":313,"code_region":"ARA","departement":"38","nom_hopital":"CH Y. Touraine Pont-de-Beauvoisin - 38","suppressions":"2008 : chirurgie orthopédique fermé;2003 : maternité fermé;chirurgie viscérale fermé","menaces":"médecine menacé;radiologie menacé;réadaptation menacé;urgences menacé","ghi_nom":"","ght_nom":"GHT Nord-Dauphiné","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[641232.1123344824,5650914.633319109]},"properties":{"id":801,"code_region":"ARA","departement":"38","nom_hopital":"Clinique Belledonne Grenoble - 38","suppressions":"2014 : chirurgie cardiaque fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[606536.3417609889,5711770.09491457]},"properties":{"id":807,"code_region":"ARA","departement":"38","nom_hopital":"HL La-Tour-du-Pin - 38","menaces":"soins de suite et rééducation interrompu","ghi_nom":"","ght_nom":"GHT Nord-Dauphiné","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[502665.1427828369,5696745.778757629]},"properties":{"id":162,"code_region":"ARA","departement":"42","nom_hopital":"CH du Giers Saint Chamond - 42","menaces":"2021 : urgences interrompu;2021 : urgences réduit (autre);2018 : maternité menacé;2007 : réanimation menacé","ghi_nom":"","ght_nom":"GHT de la Loire","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[469941.5194182736,5739750.707810466]},"properties":{"id":160,"code_region":"ARA","departement":"42","nom_hopital":"CHF Feurs - 42","suppressions":"2018 : cardiologie fermé;2018 : unité de soins périnatal fermé;2017 : stérilisation sous-traité;2015 : bloc opératoire fermé;2015 : chimiothérapie fermé;2015 : chirurgie fermé;2009 : psychiatrie fermé;2007 : maternité fermé","menaces":"2022 : urgences interrompu;2021 : hospitalisation de courte durée menacé;2021 : ligne de garde menacé;2021 : urgences menacé;2018 : accueil nuit profonde menacé;2018 : SMUR menacé;2015 : biologie menacé;2015 : SMUR de nuit menacé","ghi_nom":"CHF Forez","ght_nom":"GHT de la Loire","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[450803.5240793746,5718608.400112297]},"properties":{"id":161,"code_region":"ARA","departement":"42","nom_hopital":"CHF Montbrison - 42","suppressions":"2008 : réanimation fermé","menaces":"2019 : EHPAD menacé;2019 : maternité menacé;2019 : pédiatrie menacé;2016 : chirurgie réduit (lits fermés)","ghi_nom":"CHF Forez","ght_nom":"GHT de la Loire","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[477606.04044874385,5682804.809414819]},"properties":{"id":163,"code_region":"ARA","departement":"42","nom_hopital":"CH Le Corbusier Firminy - 42","suppressions":"2015 : urgences de nuit fermé","ghi_nom":"","ght_nom":"GHT de la Loire","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[520090.69051478425,5687493.897858728]},"properties":{"id":745,"code_region":"ARA","departement":"42","nom_hopital":"CHPR Pélussin - 42","ghi_nom":"CHPR","ght_nom":"GHT Val Rhône Santé","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[528473.7013711408,5681704.832802673]},"properties":{"id":746,"code_region":"ARA","departement":"42","nom_hopital":"CHPR Saint-Pierre-de-Bœuf - 42","ghi_nom":"CHPR","ght_nom":"GHT Val Rhône Santé","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[454010.1091714543,5787203.271807446]},"properties":{"id":159,"code_region":"ARA","departement":"42","nom_hopital":"CH Roanne - 42","suppressions":"2019 : soins de suite et rééducation fermé","ghi_nom":"","ght_nom":"GHT de la Loire","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[485621.3092676065,5697653.24466074]},"properties":{"id":837,"code_region":"ARA","departement":"42","nom_hopital":"CHU Nord Saint-Étienne - 42","menaces":"2022 : cancérologie menacé","ghi_nom":"","ght_nom":"GHT de la Loire","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[173791.93529308823,5572583.67675895]},"properties":{"id":363,"code_region":"ARA","departement":"42","nom_hopital":"CM La Roseraie Montfaucon - 42","suppressions":"2020 : réadaptation cardiaque fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[471911.71065302874,5762893.468086548]},"properties":{"id":805,"code_region":"ARA","departement":"42","nom_hopital":"HL F. Merlin Saint-Just-la-Pendue – 42","menaces":"soins de suite et rééducation menacé","ghi_nom":"","ght_nom":"GHT de la Loire","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[376598.5928222294,5668379.91289539]},"properties":{"id":388,"code_region":"ARA","departement":"43","nom_hopital":"CH Brioude - 43","suppressions":"1998 : maternité fermé","menaces":"2013 : chirurgie menacé;2009 : soins longue durée réduit (autre)","ghi_nom":"","ght_nom":"GHT Haute Loire","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[416438.6962890533,5708951.054500017]},"properties":{"id":16,"code_region":"ARA","departement":"63","nom_hopital":"CH Ambert - 63","suppressions":"2013 : chirurgie fermé;2008 : chirurgie de nuit et week-end fermé;2008 : réanimation fermé;2006 : maternité fermé;1997 : psychiatrie fermé","menaces":"2021 : SMUR menacé;2021 : urgences réduit (autre);2011 : bloc opératoire réduit (autre)","victoires":"2021 : SMUR maintenu;2021 : urgences maintenu","ghi_nom":"","ght_nom":"GHT Allier","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[338823.07260552427,5765164.729294551]},"properties":{"id":785,"code_region":"ARA","departement":"63","nom_hopital":"CH É. Clémentel Enval - 63","ghi_nom":"","ght_nom":"GHT Allier","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[346444.8076692196,5762568.354904896]},"properties":{"id":72,"code_region":"ARA","departement":"63","nom_hopital":"CH Guy Thomas Riom - 63","menaces":"2019 : EHPAD menacé;2018 : soins longue durée transformé","ghi_nom":"","ght_nom":"GHT Allier","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[312604.0713080354,5712478.589788798]},"properties":{"id":786,"code_region":"ARA","departement":"63","nom_hopital":"CH Mont-Dore - 63","menaces":"2015 : urgences menacé","ghi_nom":"","ght_nom":"GHT Allier","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[346284.63172100484,5746100.393962903]},"properties":{"id":780,"code_region":"ARA","departement":"63","nom_hopital":"CHU Estaing Clermond-Ferrand - 63","ghi_nom":"","ght_nom":"GHT Allier","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[344086.5538193546,5741528.402879501]},"properties":{"id":71,"code_region":"ARA","departement":"63","nom_hopital":"CHU Montpied Clermont-Ferrand - 63","suppressions":"2015 : dermatologie transféré;2015 : oncologie pédiatrique transféré","menaces":"2018 : urgences menacé;2015 : neurologie réduit (autre)","ghi_nom":"","ght_nom":"GHT Allier","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[291897.92739317386,5710045.465250444]},"properties":{"id":414,"code_region":"ARA","departement":"63","nom_hopital":"Tauves - 63","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[391853.2912163016,5757423.937675701]},"properties":{"id":377,"code_region":"ARA","departement":"63","nom_hopital":"Thiers - 63","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[313711.3657532519,5801515.565541827]},"properties":{"id":382,"code_region":"ARA","departement":"63","nom_hopital":"Youx - 63","menaces":"2018 : centre médico-psycho pédagogique menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[530460.1467621992,5716528.617617461]},"properties":{"id":706,"code_region":"ARA","departement":"69","nom_hopital":"CH de Montgelas Givors - 69","menaces":"urgences de nuit interrompu","ghi_nom":"","ght_nom":"GHT Rhône Sud-Isère","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[538419.6900143806,5741739.217873786]},"properties":{"id":509,"code_region":"ARA","departement":"69","nom_hopital":"CH Hôtel-Dieu Lyon - 69","suppressions":"2009 : biologie et imagerie d'urgence fermé;2009 : centre IVG fermé;2009 : chirurgie fermé;2009 : maternité fermé;2009 : réanimation fermé","menaces":"2010 : centre d'orthogénie menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[545396.7499112376,5739071.411131098]},"properties":{"id":567,"code_region":"ARA","departement":"69","nom_hopital":"CH Le Vinatier Bron - 69 ","menaces":"2020 : unité mère-bébé réduit (lits fermés)","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[488638.0639988746,5722349.768805158]},"properties":{"id":744,"code_region":"ARA","departement":"69","nom_hopital":"CHML Chazelles-sur-Lyon - 69","ghi_nom":"CHML","ght_nom":"GHT de la Loire","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[497255.5516705361,5738863.227224264]},"properties":{"id":804,"code_region":"ARA","departement":"69","nom_hopital":"CHML Saint-Laurent-de-Chamousset - 69","ghi_nom":"CHML","ght_nom":"GHT de la Loire","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[496338.410145857,5721999.695428775]},"properties":{"id":743,"code_region":"ARA","departement":"69","nom_hopital":"CHML Saint-Symphorien sur Coise - 69","ghi_nom":"CHML ","ght_nom":"GHT de la Loire","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[498463.64615884057,5787254.8118862035]},"properties":{"id":751,"code_region":"ARA","departement":"69","nom_hopital":"CHNOTG Grandis - 69","ghi_nom":"","ght_nom":"GHT Rhône Nord Beaujolais Dombes","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[494097.27908687654,5762630.370632927]},"properties":{"id":170,"code_region":"ARA","departement":"69","nom_hopital":"CHNOTG Tarare - 69","suppressions":"2012 : chirurgie fermé;2005 : pédiatrie fermé;2002 : maternité fermé","ghi_nom":"CHNOTG","ght_nom":"GHT Rhône Nord Beaujolais Dombes","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[522716.36689727753,5781138.422474514]},"properties":{"id":809,"code_region":"ARA","departement":"69","nom_hopital":"CHNO Villefranche-sur-Saône - 69","menaces":"2021 : urgences menacé","ghi_nom":"","ght_nom":"GHT Rhône Nord Beaujolais Dombes","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[534300.6503425223,5738175.745254653]},"properties":{"id":172,"code_region":"ARA","departement":"69","nom_hopital":"CH Sainte-Foy-les-Lyon - 69","suppressions":"chirurgie fermé","ghi_nom":"","ght_nom":"GHT Rhône Centre","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[529642.8197290637,5740902.931543212]},"properties":{"id":813,"code_region":"ARA","departement":"69","nom_hopital":"HCL A. Charial Francheville - 69","suppressions":"2018 : gériatrie fermé;2016 : soins de suite et rééducation transféré","menaces":"2015 : gériatrie menacé","ghi_nom":"","ght_nom":"GHT Rhône Centre","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[537778.8345688838,5745435.630672758]},"properties":{"id":505,"code_region":"ARA","departement":"69","nom_hopital":"HCL Croix-Rousse Lyon - 69","menaces":"2012 : centre IVG menacé","ghi_nom":"HCL","ght_nom":"GHT Rhône Centre","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[535764.1640048805,5740489.788270274]},"properties":{"id":811,"code_region":"ARA","departement":"69","nom_hopital":"HCL Debrousse","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[543531.8862178553,5739333.228485741]},"properties":{"id":566,"code_region":"ARA","departement":"69","nom_hopital":"HCL Édouard Herriot Lyon - 69","menaces":"2021 : parking réduit (autre);2020 : chirurgie réduit (lits fermés);2020 : gériatrie réduit (lits fermés);2020 : médecine réduit (lits fermés);post-urgence réduit (lits fermés)","ghi_nom":"HCL","ght_nom":"GHT Rhône Centre","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[533316.1496282516,5730814.581408065]},"properties":{"id":507,"code_region":"ARA","departement":"69","nom_hopital":"HCL Henry Gabrielle Saint-Genis-Laval - 69","suppressions":"2017 : centre de rééducation fonctionnelle transféré","victoires":"2020 : centre de rééducation fonctionnelle maintenu","ghi_nom":"GHLS","ght_nom":"GHT Rhône Centre","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[537849.5045867198,5743700.319420055]},"properties":{"id":508,"code_region":"ARA","departement":"69","nom_hopital":"HCL Lyon - 69","ghi_nom":"HCL","ght_nom":"GHT Rhône Centre","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[535280.8022169624,5732785.982210312]},"properties":{"id":812,"code_region":"ARA","departement":"69","nom_hopital":"HCL Lyon-Sud Pierre-Bénite - 69","menaces":"2021 : bloc opératoire réduit (autre);2021 : hospitalisation réduit (lits fermés)","ghi_nom":"HCL","ght_nom":"GHT Rhône Centre","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[544431.7521017718,5738933.882136943]},"properties":{"id":431,"code_region":"ARA","departement":"69","nom_hopital":"HIA Desgenettes Lyon - 69","suppressions":"ravitaillement sanitaire des armées fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[513910.2147713182,5754929.774138926]},"properties":{"id":171,"code_region":"ARA","departement":"69","nom_hopital":"L'Arbresle - 69","suppressions":"2019 : centre périnatal fermé;1997 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[544040.6898598112,5751741.523921429]},"properties":{"id":900,"code_region":"ARA","departement":"69","nom_hopital":"Maternité Rillieux-le-Pape - 69","suppressions":"2022 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[709033.4213169274,5727555.602598442]},"properties":{"id":511,"code_region":"ARA","departement":"73","nom_hopital":"CHAM Albertville – 73\r\n","ghi_nom":"CHAM","ght_nom":"GHT Savoie-Belley","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[727420.5002096508,5698005.083693628]},"properties":{"id":165,"code_region":"ARA","departement":"73","nom_hopital":"CHAM Moûtiers – 73","suppressions":"2015 : urgences fermé;2014 : chirurgie fermé;2011 : service saisonnier chirurgie orthopédique fermé;2008 : stérilisation privatisé;2006 : chirurgie viscérale fermé;2001 : maternité fermé","menaces":"2018 : EHPAD menacé;2009 : chirurgie interrompu;chirurgie transformé;médecine menacé;soins intensifs réduit (autre)","ghi_nom":"CHAM","ght_nom":"GHT Savoie-Belley","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[752975.4503671123,5719060.918492216]},"properties":{"id":164,"code_region":"ARA","departement":"73","nom_hopital":"CH-Bourg St Maurice - 73","menaces":"2021 : chirurgie menacé;2015 : maternité menacé","ghi_nom":"CHBSM Haute Tarentaise","ght_nom":"GHT Savoie-Belley","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[657887.6690673269,5710906.5736600915]},"properties":{"id":168,"code_region":"ARA","departement":"73","nom_hopital":"CH Métropole Savoie Chambéry - 73","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[657272.2545533333,5731978.517882882]},"properties":{"id":167,"code_region":"ARA","departement":"73","nom_hopital":"CHMS Aix-les-Bains - 73","suppressions":"2010 : maternité fermé;chirurgie fermé","ghi_nom":"CHMS","ght_nom":"GHT Savoie-Belley","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[661247.0260730094,5712957.459399796]},"properties":{"id":169,"code_region":"ARA","departement":"73","nom_hopital":"CHS Bassens - 73","ghi_nom":"","ght_nom":"GHT Savoie-Belley","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[741916.9911435731,5653564.704670928]},"properties":{"id":742,"code_region":"ARA","departement":"73","nom_hopital":"CHVM Modane - 73","ghi_nom":"","ght_nom":"GHT Savoie Belley","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[705945.1732295975,5665431.1142150555]},"properties":{"id":741,"code_region":"ARA","departement":"73","nom_hopital":"CHVM Saint-Jean de Maurienne - 73","ghi_nom":"","ght_nom":"GHT Savoie Belley","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[658610.4228106285,5710606.582381979]},"properties":{"id":615,"code_region":"ARA","departement":"73","nom_hopital":"Clinique Générale de Savoie Chambéry - 73","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[659204.3567197695,5730127.465338855]},"properties":{"id":616,"code_region":"ARA","departement":"73","nom_hopital":"GCS Clin. Herbert Aix-les-Bains - 73","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[680983.2588924989,5769498.969935343]},"properties":{"id":798,"code_region":"ARA","departement":"74","nom_hopital":"CHAG Metz-Tessy Pringy - 74","suppressions":"2016 : hospitalisation de psychiatrie infanto-juvénile fermé","ghi_nom":"CHAG","ght_nom":"GHT Haute Savoie-Pays de Gex","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[676769.8514068276,5803935.469323971]},"properties":{"id":799,"code_region":"ARA","departement":"74","nom_hopital":"CHAG Saint-Julien-en-Genevois – 74","suppressions":"2016 : hospitalisation de psychiatrie infanto-juvénile fermé","ghi_nom":"CHAG","ght_nom":"GHT Haute Savoie-Pays de Gex","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[763928.299335849,5766627.870592995]},"properties":{"id":284,"code_region":"ARA","departement":"74","nom_hopital":"Chamonix - 74","suppressions":"chirurgie fermé","menaces":"2008 : urgences réduit (autre)","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[733688.6093209825,5844891.907619976]},"properties":{"id":13,"code_region":"ARA","departement":"74","nom_hopital":"CH Camille Blanc Évian - 74","suppressions":"2005 : chirurgie fermé;2005 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[660886.4827208333,5758662.52921475]},"properties":{"id":800,"code_region":"ARA","departement":"74","nom_hopital":"CH G. Deplante Rumilly - 74","suppressions":"1993 : chirurgie fermé;1993 : urgences fermé;1975 : maternité fermé","ghi_nom":"","ght_nom":"GHT Haute Savoie-Pays de Gex","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[692567.5753861662,5811795.732437472]},"properties":{"id":797,"code_region":"ARA","departement":"74","nom_hopital":"CHIAL Annemasse - 74","ghi_nom":"CHIAL","ght_nom":"GHT Léman Mont-Blanc","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[714004.7464825247,5792888.114237163]},"properties":{"id":796,"code_region":"ARA","departement":"74","nom_hopital":"CHIAL Bonneville-sur-Avre - 74","ghi_nom":"CHIAL","ght_nom":"GHT Léman Mont-Blanc","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[718339.307077251,5837747.1627589315]},"properties":{"id":81,"code_region":"ARA","departement":"74","nom_hopital":"CMC Thonon -74","suppressions":"2016 : psychiatrie transféré","menaces":"2022 : psychiatrie réduit (lits fermés)","victoires":"2016 : psychiatrie maintenu","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[599485.5339304173,5973502.193548293]},"properties":{"id":826,"code_region":"BFC","departement":"21","nom_hopital":"CH Auxonne - 21","menaces":"2015 : soins de suite et rééducation interrompu","ghi_nom":"","ght_nom":"GHT Côte d'Or - Haute Marne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[499332.79942525394,6030335.041255753]},"properties":{"id":399,"code_region":"BFC","departement":"21","nom_hopital":"CHHCO Alise Sainte Reine - 21","suppressions":"2018 : soins longue durée fermé","ghi_nom":"CHHCO","ght_nom":"GHT Côte d'Or - Haute Marne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[509145.80567445647,6083672.561312945]},"properties":{"id":402,"code_region":"BFC","departement":"21","nom_hopital":"CHHCO Châtillon sur Seine - 21","suppressions":"2018 : laboratoire d'analyses biologiques fermé;2009 : chirurgie fermé;2009 : soins continus fermé;2008 : maternité fermé","menaces":"chimiothérapie menacé;médecine menacé;urgences menacé","ghi_nom":"CHHCO","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[483177.6367520492,6044587.065072431]},"properties":{"id":400,"code_region":"BFC","departement":"21","nom_hopital":"CHHCO Montbard - 21","suppressions":"2018 : laboratoire fermé;2017 : maternité fermé;2017 : urgences fermé","ghi_nom":"","ght_nom":"GHT Côte d'Or - Haute Marne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[505241.1005609595,6007121.617774511]},"properties":{"id":401,"code_region":"BFC","departement":"21","nom_hopital":"CHHCO Vitteaux - 21","suppressions":"2018 : médecine fermé","ghi_nom":"CHHCO","ght_nom":"GHT Côte d'Or - Haute Marne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[564307.7819578055,5994543.833416843]},"properties":{"id":908,"code_region":"BFC","departement":"21","nom_hopital":"CHRU Mitterrand Dijon 21","ghi_nom":"","ght_nom":"GHT Côte D'Or-Haute Marne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[483776.05260962184,6023224.828709456]},"properties":{"id":379,"code_region":"BFC","departement":"21","nom_hopital":"CH Semur-en-Auxois - 21","suppressions":"2017 : pédiatrie gynécologique transféré","menaces":"2017 : pédiatrie menacé","ghi_nom":"","ght_nom":"GHT Côte d'Or - Haute Marne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[558501.1345027423,5994545.534394064]},"properties":{"id":825,"code_region":"BFC","departement":"21","nom_hopital":"CHS La Chartreuse Dijon - 21","menaces":"2018 : psychiatrie réduit (autre);2017 : psychiatrie réduit (lits fermés);2016 : psychiatrie transformé","ghi_nom":"","ght_nom":"GHT Côte d'Or - Haute Marne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[550912.1827593074,5964018.326141496]},"properties":{"id":833,"code_region":"BFC","departement":"21","nom_hopital":"HCB Nuits-Saint-Georges - 21","menaces":"2021 : gériatrie réduit (autre);2021 : médecine réduit (autre);2021 : soins de suite et rééducation réduit (autre)","ghi_nom":"HCB","ght_nom":"GHT Sud Côte d’Or","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[538080.3166377209,5947524.648634126]},"properties":{"id":832,"code_region":"BFC","departement":"21","nom_hopital":"HCB - Philippe le Bon Beaune - 21","menaces":"2021 : gériatrie réduit (autre);2021 : médecine réduit (autre);2021 : soins de suite et rééducation réduit (autre)","ghi_nom":"HCB","ght_nom":"GHT Sud Côte d’Or","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[572918.8809309751,5941381.02248656]},"properties":{"id":834,"code_region":"BFC","departement":"21","nom_hopital":"HCB Seurre - 21","menaces":"2021 : gériatrie réduit (autre);2021 : médecine réduit (autre);2021 : soins de suite et rééducation réduit (autre)","ghi_nom":"","ght_nom":"GHT Sud Côte d’Or","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[707942.3167660829,5925929.6480403375]},"properties":{"id":614,"code_region":"BFC","departement":"25","nom_hopital":"CHIHC Pontarlier - 25","menaces":"2019 : urgences psychiatriques menacé;2018 : chirurgie réduit (lits fermés);2016 : chirurgie réduit (autre)","ghi_nom":"CHIHC","ght_nom":"GHT Centre Franche Comté","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[735397.901996702,5951548.760245488]},"properties":{"id":824,"code_region":"BFC","departement":"25","nom_hopital":"Ch Nappez Morteau - 25","suppressions":"2022 : radiologie fermé","ghi_nom":"","ght_nom":"GHT Centre Franche Comté","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[663710.2050935108,5978883.853988152]},"properties":{"id":473,"code_region":"BFC","departement":"25","nom_hopital":"CHRU Jean Minjoz Besançon - 25","suppressions":"2022 : médecine interne fermé","menaces":"2022 : neurochirurgie réduit (lits fermés);2021 : chirurgie digestive réduit (lits fermés);2021 : psychiatrie menacé;2021 : soins de suite et rééducation gériatrie réduit (lits fermés);2020 : soins de suite et rééducation interrompu;2020 : soins de suite et rééducation réduit (autre)","ghi_nom":"","ght_nom":"GHT Centre Franche Comté","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[683861.5907384604,5959566.806711377]},"properties":{"id":822,"code_region":"BFC","departement":"25","nom_hopital":"CH Saint-Louis Ornans - 25","ghi_nom":"","ght_nom":"GHT Centre Franche Comté","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[682875.8009972819,5988855.159196906]},"properties":{"id":179,"code_region":"BFC","departement":"25","nom_hopital":"CHS Novillars - 25","suppressions":"2021 : unité de jour psychiatrique fermé","ghi_nom":"","ght_nom":"GHT Centre Franche Comté","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[757361.1175690773,6023614.700173549]},"properties":{"id":474,"code_region":"BFC","departement":"25","nom_hopital":"Clin. Portes du Jura Montbéliard - 25","suppressions":"2015 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[706869.2963743433,5926741.690136037]},"properties":{"id":613,"code_region":"BFC","departement":"25","nom_hopital":"Clin. St Paul Pontarlier - 25","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[665631.362956848,5981959.509446151]},"properties":{"id":612,"code_region":"BFC","departement":"25","nom_hopital":"Clin. St Vincent Besançon - 25","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[663675.5661032052,5980457.742603144]},"properties":{"id":416,"code_region":"BFC","departement":"25","nom_hopital":"CSSR Tilleroyes Besançon - 25","menaces":"2019 : gériatrie réduit (lits fermés);2019 : soins de suite et rééducation réduit (lits fermés);soins de suite et rééducation interrompu","ghi_nom":"","ght_nom":"GHT Centre Franche Comté","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[705405.0570772733,5929009.7076705955]},"properties":{"id":910,"code_region":"BFC","departement":"25","nom_hopital":"EHPAD du Larmont - Doubs - 25","ghi_nom":"CHIHC","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[761566.8248380199,6021035.2812817665]},"properties":{"id":915,"code_region":"BFC","departement":"25","nom_hopital":"Ex-Clinique Lucine Audincourt - 25","suppressions":"2014 : maternité fermé;2014 : périnatalité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[692187.60086526,5952811.988326818]},"properties":{"id":823,"code_region":"BFC","departement":"25","nom_hopital":"HL Saint-Louis Vuillafans - 25","ghi_nom":"","ght_nom":"GHT Centre Franche Comté","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[755518.9495803304,6028241.427711567]},"properties":{"id":178,"code_region":"BFC","departement":"25","nom_hopital":"HNFC Mittan Montbéliard - 25","suppressions":"2012 : chirurgie traumatique fermé;2007 : psychiatrie transféré;diabétologie fermé;ophtalmologie fermé;pédiatrie fermé","menaces":"2015 : urgences pédiatriques réduit (autre);2014 : urgences menacé","ghi_nom":"HNFC","ght_nom":"GHT Nord Franche Comté","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[609134.4294033945,5955214.995495297]},"properties":{"id":57,"code_region":"BFC","departement":"39","nom_hopital":"Centre Truchot - Dole - 39","menaces":"EHPAD fusionné","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[642950.5412635879,5925678.069016394]},"properties":{"id":769,"code_region":"BFC","departement":"39","nom_hopital":"CHIPR Arbois - 39","ghi_nom":"CHIPR","ght_nom":"GHT Jura","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[635444.7015075126,5914739.836178023]},"properties":{"id":776,"code_region":"BFC","departement":"39","nom_hopital":"CHIPR Poligny - 39","ghi_nom":"CHIPR","ght_nom":"GHT Jura","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[654200.2607981453,5932307.618007763]},"properties":{"id":768,"code_region":"BFC","departement":"39","nom_hopital":"CHIPR Salins-les-Bains - 39","suppressions":"1999 : urgences fermé","ghi_nom":"CHIPR","ght_nom":"GHT Jura","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[657682.1300142979,5900680.497187385]},"properties":{"id":152,"code_region":"BFC","departement":"39","nom_hopital":"CHJS Champagnole - 39","suppressions":"2022 : SMUR fermé;2022 : soins non programmés fermé;2021 : soins de suite et rééducation fermé;2009 : chirurgie transféré","menaces":"2019 : urgences de nuit interrompu;2018 : médecine réduit (lits fermés);2013 : SMUR menacé;2013 : urgences menacé","ghi_nom":"CHJS","ght_nom":"GHT Jura","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[617854.829183757,5889462.005833938]},"properties":{"id":418,"code_region":"BFC","departement":"39","nom_hopital":"CHJS Lons le Saulnier - 39","suppressions":"2021 : dialyse privatisé","menaces":"2019 : SMUR réduit (autre);urgences réduit (autre)","ghi_nom":"CHJS","ght_nom":"GHT Jura","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[624016.3100054832,5863254.218192405]},"properties":{"id":331,"code_region":"BFC","departement":"39","nom_hopital":"CHJS Orgelet - 39","menaces":"2014 : moyen séjour menacé","ghi_nom":"CHJS","ght_nom":"GHT Jura","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[669855.6961738506,5866101.999624082]},"properties":{"id":827,"code_region":"BFC","departement":"39","nom_hopital":"CH Léon Bérard Morez - 39","menaces":"médecine menacé","ghi_nom":"","ght_nom":"GHT Jura","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[653082.1915363957,5842337.269984609]},"properties":{"id":153,"code_region":"BFC","departement":"39","nom_hopital":"CH L. Jallion Saint-Claude - 39","suppressions":"2021 : SMUR fermé;2018 : chirurgie fermé;2018 : maternité fermé;2018 : pédiatrie fermé","menaces":"2021 : soins de suite et rééducation réduit (lits fermés);2019 : médecine menacé","victoires":"2022 : unité de surveillance de courte durée réouvert","ghi_nom":"","ght_nom":"GHT Jura","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[609248.5508358028,5955619.547262063]},"properties":{"id":495,"code_region":"BFC","departement":"39","nom_hopital":"CH Pasteur - Dole - 39","suppressions":"2022 : chirurgie fermé;2018 : cardiologie fermé;2017 : SMUR de nuit fermé;2014 : réanimation fermé","menaces":"2022 : urgences de nuit interrompu;2021 : chirurgie réduit (autre);2019 : chirurgie menacé;2018 : pneumologie réduit (lits fermés);2018 : pneumologie réduit (autre);2017 : soins intensifs en cardiologie interrompu","victoires":"2022 : urgences de nuit maintenu","ghi_nom":"","ght_nom":"GHT Centre Franche Comté","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[614520.6870504431,5977552.36461118]},"properties":{"id":588,"code_region":"BFC","departement":"39","nom_hopital":"CHS du Jura - Monmirey - 39","ghi_nom":"CHS du Jura - Centre Brantus","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[607620.855574064,5953524.9651685245]},"properties":{"id":496,"code_region":"BFC","departement":"39","nom_hopital":"CHS Saint-Ylie - Dole - 39","ghi_nom":"","ght_nom":"GHT Centre Franche Comté","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[351293.63534449786,5942043.6179794455]},"properties":{"id":54,"code_region":"BFC","departement":"58","nom_hopital":"Centre 15 de la Nièvre - 58","suppressions":"appel 115 transféré","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[347614.2477941883,5938729.187323719]},"properties":{"id":501,"code_region":"BFC","departement":"58","nom_hopital":"CHAN Pierre Bérégovoy Nevers - 58","menaces":"2022 : maternité interrompu","ghi_nom":"CHAN","ght_nom":"GHT Nièvre","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[438045.56931122206,5952051.309290088]},"properties":{"id":381,"code_region":"BFC","departement":"58","nom_hopital":"CH Château Chinon - 58","menaces":"2021 : médecine menacé;2021 : soins de suite et rééducation menacé;2021 : UAPS menacé;2021 : USSD menacé;2018 : médecine réduit (autre)","ghi_nom":"","ght_nom":"GHT Nièvre","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[390656.09562919027,6016437.550255931]},"properties":{"id":383,"code_region":"BFC","departement":"58","nom_hopital":"CH Clamecy - 58","suppressions":"2018 : urgences de nuit fermé;2009 : chirurgie fermé;2008 : maternité fermé","menaces":"2022 : urgences réduit (autre);2021 : accueil urgences réduit (autre);2021 : SMUR réduit (autre);2018 : urgences menacé","ghi_nom":"","ght_nom":"GHT Sud Yonne Haut-Nivernais","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[325830.4209024337,6010220.183306446]},"properties":{"id":285,"code_region":"BFC","departement":"58","nom_hopital":"CH Cosne - Cours sur Loire - 58","suppressions":"2018 : maternité fermé","ghi_nom":"","ght_nom":"GHT Nièvre","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[384407.79145707935,5913086.297757105]},"properties":{"id":387,"code_region":"BFC","departement":"58","nom_hopital":"CH Decize – 58","suppressions":"2017 : stérilisation transféré;2015 : laboratoire transféré;plateau technique fermé","menaces":"2018 : chirurgie conventionnelle réduit (lits fermés);2017 : urgences de nuit menacé;centre IVG menacé","victoires":"1998 : chirurgie maintenu","ghi_nom":"","ght_nom":"GHT Nièvre","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[335748.9322471023,5972200.076525112]},"properties":{"id":835,"code_region":"BFC","departement":"58","nom_hopital":"CH Henri Dunant La-Charité-sur-Loire - 58","suppressions":"2022 : médecine fermé","ghi_nom":"","ght_nom":"GHT de la Nièvre","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[325889.5926628187,6008287.626138232]},"properties":{"id":828,"code_region":"BFC","departement":"58","nom_hopital":"Clinique Cosne-Cours-sur-Loire – 58","suppressions":"2019 : chirurgie fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[346984.98173416406,5908323.575017637]},"properties":{"id":829,"code_region":"BFC","departement":"58","nom_hopital":"CLS Saint-Pierre-le-Moûtier - 58","ghi_nom":"","ght_nom":"GHT de la Nièvre","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[622532.3184415774,6015134.7238253625]},"properties":{"id":28,"code_region":"BFC","departement":"70","nom_hopital":"HD site de Gray 70","suppressions":"2002 : chirurgie fermé;2002 : maternité fermé","menaces":"2021 : unité de soins critiques interrompu;2021 : urgences réduit (autre);2017 : urgences menacé","ghi_nom":"HD 70","ght_nom":"GHT de la Haute-Saône","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[723833.4429815193,6054201.422858016]},"properties":{"id":277,"code_region":"BFC","departement":"70","nom_hopital":"HD site de Lure 70","suppressions":"2021 : radiologie privatisé;2013 : laboratoire fermé;2004 : chirurgie fermé;2003 : cardiologie fermé;2003 : urgences de nuit fermé;2001 : soins intensifs fermé;1996 : maternité fermé","menaces":"2022 : urgences réduit (autre);2021 : neurologie menacé;2020 : SMUR menacé;2020 : urgences consultations non programmées réduit (autre);2011 : urgences de soir menacé","victoires":"2013 : SMUR maintenu;2013 : urgences victoire;2006 : SMUR réouvert;2006 : urgences maintenu;1982 : maternité maintenu","ghi_nom":"HD 70","ght_nom":"GHT de la Haute-Saône","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[710226.4488045387,6077312.48191585]},"properties":{"id":558,"code_region":"BFC","departement":"70","nom_hopital":"HD site de Luxeuil 70","suppressions":"2020 : urgences consultations non programmées fermé;2019 : SMUR fermé;2013 : laboratoire fermé;2005 : chirurgie fermé;2004 : ORL fermé;2003 : maternité fermé;2003 : urgences de nuit fermé;1996 : cardiologie fermé","menaces":"2015 : médecine réduit (autre);2014 : SMUR interrompu;2011 : SMUR menacé;2011 : urgences de soir menacé","victoires":"2013 : SMUR maintenu;2006 : SMUR réouvert;2006 : urgences maintenu","ghi_nom":"","ght_nom":"GHT de la Haute-Saône","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[685087.662230327,6043817.176762672]},"properties":{"id":238,"code_region":"BFC","departement":"70","nom_hopital":"HD site de Vesoul 70","menaces":"2022 : cardiologie menacé;2020 : ligne SMUR interrompu;2017 : SMUR menacé;2013 : ligne SMUR menacé","ghi_nom":"GH70","ght_nom":"GHT de la Haute-Saône","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[478812.39584647055,5934322.834143739]},"properties":{"id":79,"code_region":"BFC","departement":"71","nom_hopital":"CH Autun - 71","suppressions":"bloc opératoire privatisé","menaces":"2021 : soins longue durée réduit (lits fermés);2020 : maternité menacé;2011 : chirurgie menacé;2011 : urgences de nuit menacé","victoires":"2022 : maternité maintenu","ghi_nom":"","ght_nom":"GHT Saône-et-Loire Bresse Morvan","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[482298.24039471877,5884975.650645374]},"properties":{"id":216,"code_region":"BFC","departement":"71","nom_hopital":"CH Bouveri-Galuzot Montceau les Mines - 71","suppressions":"2009 : chirurgie urologie et viscérale fermé;2009 : maternité fermé;2009 : urgences pédiatriques fermé;chirurgie fermé;pédiatrie fermé","menaces":"2022 : oncologie menacé;2021 : oncologie réduit (autre);2021 : SMUR menacé;2015 : urgences menacé;2007 : soins intensifs transformé;cardiologie menacé","ghi_nom":"","ght_nom":"GHT Saône-et-Loire Bresse Morvan","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[512270.0369183797,5829434.124209619]},"properties":{"id":757,"code_region":"BFC","departement":"71","nom_hopital":"CHC Corsin Tramayes - 71","ghi_nom":"CHC","ght_nom":"GHT Bourgogne Méridionale","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[528801.3752530107,5927458.939792152]},"properties":{"id":831,"code_region":"BFC","departement":"71","nom_hopital":"CH Chagny - 71","suppressions":"1975 : maternité fermé","ghi_nom":"","ght_nom":"GHT Saône-et-Loire Bresse Morvan","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[518751.31236262596,5849601.2523992285]},"properties":{"id":756,"code_region":"BFC","departement":"71","nom_hopital":"CHC Hôtel-Dieu Cluny - 71","suppressions":"1989 : maternité fermé;chirurgie fermé","ghi_nom":"CHC","ght_nom":"GHT Bourgogne Méridionale","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[419171.9169797003,5879938.714071664]},"properties":{"id":821,"code_region":"BFC","departement":"71","nom_hopital":"CHFA Bourbon-Lancy - 71","suppressions":"2021 : médecine fermé;2021 : soins de suite fermé;électro-radiologie fermé;maternité fermé","ghi_nom":"","ght_nom":"GHT Bourgogne Méridionale","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[495368.95438257937,5868071.175185844]},"properties":{"id":643,"code_region":"BFC","departement":"71","nom_hopital":"CH La Guiche","suppressions":"2021 : cuisine transféré","menaces":"2021 : soins de suite et rééducation réduit (autre)","ghi_nom":"","ght_nom":"GHT Saône-et-Loire Bresse Morvan","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[495188.3506465224,5910238.7775591565]},"properties":{"id":215,"code_region":"BFC","departement":"71","nom_hopital":"CH Le Creusot - 71","suppressions":"2014 : pôle mère-enfant fermé","menaces":"2022 : maternité menacé","ghi_nom":"","ght_nom":"GHT Saône-et-Loire Bresse Morvan","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[460580.81417922676,5891941.8955432335]},"properties":{"id":830,"code_region":"BFC","departement":"71","nom_hopital":"CH Les marronniers Toulon-sur-Arroux – 71","suppressions":"2021 : cuisine fermé","menaces":"2021 : soins de suite et rééducation menacé","ghi_nom":"","ght_nom":"GHT Saône-et-Loire Bresse Morvan","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[535868.2382412368,5831125.986215917]},"properties":{"id":819,"code_region":"BFC","departement":"71","nom_hopital":"CH Mâcon - 71","menaces":"2021 : psychiatrie réduit (autre)","ghi_nom":"","ght_nom":"GHT Bourgogne Méridionale","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[479293.2995548734,5826749.860607791]},"properties":{"id":750,"code_region":"BFC","departement":"71","nom_hopital":"CHPCB La Clayette - 71","ghi_nom":"CHPCB","ght_nom":"GHT Bourgogne Méridionale","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[457470.4716096148,5855071.6200767085]},"properties":{"id":749,"code_region":"BFC","departement":"71","nom_hopital":"CHPCB Paray-le-Monial - 71","suppressions":"2012 : chirurgie fermé","menaces":"bloc opératoire menacé","ghi_nom":"CHPCB","ght_nom":"GHT Bourgogne Méridionale","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[538070.473711722,5897454.60469741]},"properties":{"id":723,"code_region":"BFC","departement":"71","nom_hopital":"CHS Sevrey - 71","ghi_nom":"","ght_nom":"GHT Saône-et-Loire Bresse Morvan","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[544635.3315455951,5871778.584187978]},"properties":{"id":820,"code_region":"BFC","departement":"71","nom_hopital":"CHTR - Tournus 71","menaces":"2022 : médecine menacé","ghi_nom":"","ght_nom":"GHT Bourgogne Méridionale","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[538863.6142867354,5905757.786861746]},"properties":{"id":420,"code_region":"BFC","departement":"71","nom_hopital":"CHWM Chalon-sur-Saône - 71","menaces":"2021 : chirurgie menacé;2017 : centre d'angioplastie menacé;2017 : coronographie menacé","ghi_nom":"","ght_nom":"GHT Saône-et-Loire Bresse Morvan","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[457392.13819792785,5855155.329269091]},"properties":{"id":14,"code_region":"BFC","departement":"71","nom_hopital":"Clinique La Roseraie Paray-le-Monial - 71","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[539059.3130587712,5905431.701386442]},"properties":{"id":602,"code_region":"BFC","departement":"71","nom_hopital":"SSR Boucicaut Chalon - 71","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[395785.5350150039,6074363.192941916]},"properties":{"id":232,"code_region":"BFC","departement":"89","nom_hopital":"CH Auxerre - 89","menaces":"2020 : chirurgie réduit (lits fermés);2019 : chirurgie menacé;2016 : hospitalisation de courte durée interrompu","ghi_nom":"","ght_nom":"GHT Sud Yonne Haut-Nivernais","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[434633.0292694976,6022428.693168145]},"properties":{"id":392,"code_region":"BFC","departement":"89","nom_hopital":"CH Avallon - 89","suppressions":"2004 : maternité fermé;1999 : réanimation fermé;1996 : pédiatrie fermé;laboratoire fermé","menaces":"2011 : chirurgie menacé","ghi_nom":"","ght_nom":"GHT Sud Yonne Haut-Nivernais","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[442801.39753104624,6082999.83534127]},"properties":{"id":396,"code_region":"BFC","departement":"89","nom_hopital":"CH du Tonnerrois - Tonnerre - 89","suppressions":"2017 : urgences de nuit fermé;2014 : blanchisserie fermé;2006 : chirurgie fermé;1995 : ORL fermé;1992 : maternité fermé;1992 : parondotologie fermé","menaces":"2021 : urgences de nuit menacé","ghi_nom":"","ght_nom":"GHT Sud Yonne Haut-Nivernais","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[378031.4217114624,6103485.020309155]},"properties":{"id":393,"code_region":"BFC","departement":"89","nom_hopital":"CH Joigny - 89","suppressions":"1999 : chirurgie fermé;1999 : maternité fermé;1999 : réanimation fermé","ghi_nom":"","ght_nom":"GHT Nord Yonne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[392098.17851606966,6101058.654041567]},"properties":{"id":231,"code_region":"BFC","departement":"89","nom_hopital":"CH Migennes - 89","suppressions":"1994 : maternité fermé","ghi_nom":"","ght_nom":"GHT Nord Yonne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[366816.1668538824,6120242.980969056]},"properties":{"id":574,"code_region":"BFC","departement":"89","nom_hopital":"HL Villeneuve-sur-Yonne - 89","suppressions":"2021 : EHPAD fermé","menaces":"2021 : soins de suite et rééducation réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Nord Yonne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[763178.2855624405,6047637.562970315]},"properties":{"id":8,"code_region":"BFC","departement":"90","nom_hopital":"CHBM Site Belfort - 90","suppressions":"2019 : centre de prélèvements transféré;2015 : centre 15 fermé;2013 : urgences fermé;2011 : neurologie transféré;oncologie fermé","menaces":"2011 : traumatologie fusionné;2009 : blanchisserie réduit (autre);pharmacie menacé;restauration menacé","ghi_nom":"HNFC","ght_nom":"GHT Nord Franche Comté","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[761821.8739982806,6047457.523345925]},"properties":{"id":623,"code_region":"BFC","departement":"90","nom_hopital":"HNFC site Belfort - 90","ghi_nom":"HNFC","ght_nom":"GHT Nord Franche Comté","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[761554.4155527091,6042959.949277959]},"properties":{"id":622,"code_region":"BFC","departement":"90","nom_hopital":"HNFC Site Pierre Engel Bavilliers - 90","ghi_nom":"HNFC","ght_nom":"GHT Nord Franche Comté","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[765108.6900283509,6036705.965076888]},"properties":{"id":620,"code_region":"BFC","departement":"90","nom_hopital":"HNFC Trévenans - 90","menaces":"2021 : urgences menacé","ghi_nom":"CHNFC","ght_nom":"GHT Nord Franche Comté","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-306614.3021415129,6136721.346109286]},"properties":{"id":333,"code_region":"BRE","departement":"22","nom_hopital":"CHCB Loudéac - 22","suppressions":"2000 : maternité fermé;soins de suite et rééducation fermé","menaces":"cardiologie réduit (lits fermés);médecine réduit (lits fermés)","ghi_nom":"CHCB","ght_nom":"GHT Centre Bretagne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-350444.6994118808,6200733.786060427]},"properties":{"id":56,"code_region":"BRE","departement":"22","nom_hopital":"CH Guingamp - 22","suppressions":"2021 : maternité privatisé","menaces":"2022 : chirurgie menacé;2018 : maternité menacé","victoires":"2021 : chirurgie maintenu;2018 : maternité maintenu","ghi_nom":"","ght_nom":"GHT d'Armor","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-307694.90177902154,6192748.388247306]},"properties":{"id":299,"code_region":"BRE","departement":"22","nom_hopital":"CH Le Fol  Saint Brieuc - 22","menaces":"2021 : bloc opératoire menacé;2020 : urgences menacé","victoires":"médecine victoire","ghi_nom":"","ght_nom":"GHT d'Armor","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-385648.172989048,6227816.110101755]},"properties":{"id":298,"code_region":"BRE","departement":"22","nom_hopital":"CHLT Lannion - 22","menaces":"cardiologie réduit (lits fermés);diabétologie réduit (lits fermés);neurologie réduit (lits fermés)","ghi_nom":"CHILT","ght_nom":"GHT Armor","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-372891.0706522167,6244745.235339741]},"properties":{"id":736,"code_region":"BRE","departement":"22","nom_hopital":"CHLT Trestel - 22","ghi_nom":"CHILT","ght_nom":"GHT Armor","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-337739.2121629458,6236457.4826014]},"properties":{"id":366,"code_region":"BRE","departement":"22","nom_hopital":"CH Paimpol - 22","suppressions":"2014 : hospitalisation pédiatriques fermé;2011 : chirurgie fermé;2003 : maternité fermé","menaces":"2019 : périnatalité réduit (autre);2017 : SMUR menacé;2017 : urgences de nuit menacé","ghi_nom":"","ght_nom":"GHT d'Armor","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-280630.4048155621,6185328.143337902]},"properties":{"id":770,"code_region":"BRE","departement":"22","nom_hopital":"CHPP Lamballe - 22","ghi_nom":"CHPP","ght_nom":"GHT Armor","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-324488.1253839356,6174943.357893173]},"properties":{"id":771,"code_region":"BRE","departement":"22","nom_hopital":"CHPP Quintin - 22","ghi_nom":"CHPP","ght_nom":"GHT Armor","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-227927.54476851973,6180957.463874002]},"properties":{"id":300,"code_region":"BRE","departement":"22","nom_hopital":"CH René Pleven Dinan - 22","suppressions":"2020 : maternité fermé;2009 : pôle santé privatisé","menaces":"2019 : maternité interrompu","ghi_nom":"","ght_nom":"GHT Rance Émeraude","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-310368.1394321878,6198545.690252464]},"properties":{"id":653,"code_region":"BRE","departement":"22","nom_hopital":"Hôpital privé des Côtes d'Armor  Plérin - 22","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-361708.6492188483,6146693.155636399]},"properties":{"id":332,"code_region":"BRE","departement":"22","nom_hopital":"Plouguernével - 22","menaces":"2012 : maison médicale menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-227842.92201507045,6181253.387145957]},"properties":{"id":895,"code_region":"BRE","departement":"22","nom_hopital":"Polyclinique du Pays de Rance Dinan - 22","suppressions":"1997 : maternité transféré","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-383220.4796624143,6228216.753421052]},"properties":{"id":735,"code_region":"BRE","departement":"22","nom_hopital":"Polyclinique Trégor Lannion - 22","suppressions":"1997 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-471414.30723550153,6181684.551906934]},"properties":{"id":677,"code_region":"BRE","departement":"29","nom_hopital":"CH Ferdinand Grall Landernau - 29","suppressions":"2021 : urgences de nuit fermé","menaces":"2008 : urgences menacé","ghi_nom":"","ght_nom":"GHT Bretagne Occidentale","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-469904.135828856,6084149.427053329]},"properties":{"id":195,"code_region":"BRE","departement":"29","nom_hopital":"CH Hôtel-Dieu Pont L'Abbé - 29","suppressions":"2014 : chirurgie hors ambulatoire transféré;2010 : urgences fermé","menaces":"2001 : maternité transformé","ghi_nom":"","ght_nom":"GHT de l'Union Hospitalière de Cornouaille","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-434681.0219701831,6084475.6151926555]},"properties":{"id":196,"code_region":"BRE","departement":"29","nom_hopital":"CHIC Porzou - Concarneau - 29","suppressions":"1992 : chirurgie fermé;1992 : maternité fermé","menaces":"2020 : urgences interrompu;2019 : SMUR réduit (autre);2013 : radiologie interrompu;2010 : urgences menacé;2008 : urgences réduit (autre)","victoires":"2018 : IRM victoire;2008 : urgences maintenu","ghi_nom":"CHIC ","ght_nom":"GHT de l'Union Hospitalière de Cornouaille","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-455936.6620481243,6104513.789673646]},"properties":{"id":194,"code_region":"BRE","departement":"29","nom_hopital":"CHIC Théophlle Laënnec - Quimper - 29","menaces":"2021 : urgences menacé","ghi_nom":"CHIC","ght_nom":"GHT de l'Union Hospitalière de Cornouaille","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-480788.9154576212,6202348.6134431735]},"properties":{"id":882,"code_region":"BRE","departement":"29","nom_hopital":"CH Lesneven","ghi_nom":"","ght_nom":"GHT Bretagne Occidentale","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-480502.2722284425,6120850.7385918535]},"properties":{"id":193,"code_region":"BRE","departement":"29","nom_hopital":"CH M. Mazéas - Douarnenez - 29","suppressions":"2021 : EHPAD privatisé;2019 : SMUR de nuit fermé;2019 : soins de suite et rééducation privatisé;2015 : chirurgie ambulatoire fermé;2014 : chirurgie hors ambulatoire transféré;1999 : maternité fermé","ghi_nom":"","ght_nom":"GHT de l'Union Hospitalière de Cornouaille","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-426680.6176150282,6202377.281206617]},"properties":{"id":40,"code_region":"BRE","departement":"29","nom_hopital":"CH Morlaix - 29","suppressions":"2018 : cuisine sous-traité;2018 : soins intensifs en cardiologie fermé;2015 : accueil urgences fermé","menaces":"2021 : chirurgie menacé;2021 : psychiatrie réduit (autre);2017 : cardiologie menacé;2017 : psychiatrie menacé","victoires":"urgences maintenu","ghi_nom":"","ght_nom":"GHT de Bretagne Ouest","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-398473.20912284387,6152374.120213538]},"properties":{"id":568,"code_region":"BRE","departement":"29","nom_hopital":"CHRU Carhaix - Plouguer - 29","menaces":"2021 : chirurgie menacé;2021 : médecine gériatrique interrompu;2021 : SMUR interrompu;2016 : SMUR menacé;2016 : urgences menacé;2010 : maternité interrompu;2007 : maternité menacé","victoires":"2008 : chirurgie maintenu;2008 : maternité maintenu","ghi_nom":"CHRU Brest-Carhaix","ght_nom":"GHT de Bretagne Ouest","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-504087.21507320896,6173977.380782557]},"properties":{"id":475,"code_region":"BRE","departement":"29","nom_hopital":"CHRU Cavale Blanche Brest -  29","suppressions":"2008 : Allogreffes fermé","menaces":"2020 : chirurgie cardiaque interrompu;2020 : chirurgie cardiaque menacé","ghi_nom":"CHRU Brest-Carhaix","ght_nom":"GHT de Bretagne Ouest","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-459548.3141604811,6103638.594170054]},"properties":{"id":897,"code_region":"BRE","departement":"29","nom_hopital":"Clinique Saint-Michel-Sainte-Anne Quimper - 29","suppressions":"2014 : maternité transféré","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-514818.3990486526,6178906.90653603]},"properties":{"id":883,"code_region":"BRE","departement":"29","nom_hopital":"Clinique Saint-Ronan - 29","suppressions":"2005 : chirurgie transféré;2005 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-454678.0133780348,6106742.620338561]},"properties":{"id":617,"code_region":"BRE","departement":"29","nom_hopital":"EPSM É. Gourmelen Quimper - 29","suppressions":"2019 : résidence Tréouguy fermé;2019 : soins longue durée fermé;2015 : urgences psychiatriques fermé","menaces":"2022 : hôpital de jour interrompu","ghi_nom":"","ght_nom":"GHT de l'Union Hospitalière de Cornouaille","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-395866.4833768234,6085245.050204701]},"properties":{"id":762,"code_region":"BRE","departement":"29","nom_hopital":"GHBS Quimperlé - 29","suppressions":"2007 : chirurgie fermé;2007 : maternité fermé;1999 : pédiatrie fermé","menaces":"2021 : psychiatrie interrompu;2008 : urgences de nuit menacé","ghi_nom":"GHBS","ght_nom":"GHT Sud Bretagne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-500361.93662234745,6172414.996357752]},"properties":{"id":476,"code_region":"BRE","departement":"29","nom_hopital":"HIA Brest - 29","suppressions":"ravitaillement sanitaire des armées fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-223533.33931265384,6213636.069722539]},"properties":{"id":594,"code_region":"BRE","departement":"35","nom_hopital":"CH Broussais Saint-Malo - 35","suppressions":"2020 : psychiatrie fermé","ghi_nom":"","ght_nom":"GHT Rance Émeraude","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-207754.41319467174,6221322.266147321]},"properties":{"id":243,"code_region":"BRE","departement":"35","nom_hopital":"CH Cancale - 35","ghi_nom":"","ght_nom":"GHT Rance Émeraude","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-132914.23481852605,6166849.643425957]},"properties":{"id":679,"code_region":"BRE","departement":"35","nom_hopital":"CH Fougères - 35","menaces":"2021 : urgences réduit (autre);2019 : cardiologie réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Haute-Bretagne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-231535.7433218096,6049467.815997107]},"properties":{"id":678,"code_region":"BRE","departement":"35","nom_hopital":"CHIRC Redon - 35","menaces":"2021 : urgences de nuit réduit (autre)","ghi_nom":"CHIRC","ght_nom":"GHT Haute Bretagne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-138407.8405054547,6097613.3358162865]},"properties":{"id":889,"code_region":"BRE","departement":"35","nom_hopital":"CH La Guerche – 35","menaces":"2021 : chirurgie réduit (lits fermés);2021 : médecine réduit (lits fermés);2021 : soins de suite et rééducation réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Haute-Bretagne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-164574.20660959184,6183034.01489666]},"properties":{"id":891,"code_region":"BRE","departement":"35","nom_hopital":"CHMB Antrain – 35","menaces":"soins de suite et rééducation interrompu","ghi_nom":"","ght_nom":"GHT Haute-Bretagne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-151510.46617124233,6175105.137754358]},"properties":{"id":892,"code_region":"BRE","departement":"35","nom_hopital":"CHMB Saint-Brice-en-Coglès ","menaces":"2019 : soins de suite et rééducation interrompu","ghi_nom":"","ght_nom":"GHT Haute-Bretagne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-136561.02980982122,6127307.948342996]},"properties":{"id":680,"code_region":"BRE","departement":"35","nom_hopital":"CH Simone Veil Vitré - 35","suppressions":"2022 : urgences de nuit fermé","ghi_nom":"","ght_nom":"GHT Haute Bretagne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-183869.87949371748,6125629.322557279]},"properties":{"id":48,"code_region":"BRE","departement":"35","nom_hopital":"CHS Régnier  Rennes - 35","ghi_nom":"CHGR Centre Hospitalier Guillaume Régnier","ght_nom":"GHT Haute-Bretagne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-184850.35167987272,6129825.678761523]},"properties":{"id":894,"code_region":"BRE","departement":"35","nom_hopital":"CHU Polyclinique Rennes - 35","ghi_nom":"","ght_nom":"GHT Haute-Bretagne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-188672.54878131248,6126967.346512012]},"properties":{"id":893,"code_region":"BRE","departement":"35","nom_hopital":"CHU Ponchaillou Rennes - 35","menaces":"2022 : neurologie menacé","ghi_nom":"","ght_nom":"GHT Haute-Bretagne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-184012.0937532825,6120674.21448574]},"properties":{"id":494,"code_region":"BRE","departement":"35","nom_hopital":"CHU Sud Rennes - 35","menaces":"2021 : urgences menacé","ghi_nom":"","ght_nom":"GHT Haute-Bretagne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-132827.08490971476,6100244.973102128]},"properties":{"id":890,"code_region":"BRE","departement":"35","nom_hopital":"EHPAD Availles-sur-Seiche – 35","ghi_nom":"","ght_nom":"GHT Haute-Bretagne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-266576.8737100385,6096140.059971207]},"properties":{"id":318,"code_region":"BRE","departement":"56","nom_hopital":"CH Alphonse Guérin Ploërmel - 56","ghi_nom":"","ght_nom":"GHT Brocéliande Atlantique","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-332127.5788482105,6051545.334375408]},"properties":{"id":38,"code_region":"BRE","departement":"56","nom_hopital":"CHBA Auray - 56","suppressions":"2002 : chirurgie fermé;2000 : maternité fermé","menaces":"2018 : soins de suite et rééducation interrompu;2000 : urgences interrompu","ghi_nom":"","ght_nom":"GHT Brocéliande Atlantique","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-305609.3960185535,6051199.886100382]},"properties":{"id":884,"code_region":"BRE","departement":"56","nom_hopital":"CHBA Vannes - 56","ghi_nom":"","ght_nom":"GHT Brocéliande Atlantique","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-351891.0547407903,5998631.370696935]},"properties":{"id":886,"code_region":"BRE","departement":"56","nom_hopital":"CHBI Le Palais - 56","suppressions":"1997 : maternité fermé","ghi_nom":"","ght_nom":"GHT Brocéliande Atlantique","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-331400.09624194354,6118824.78588597]},"properties":{"id":888,"code_region":"BRE","departement":"56","nom_hopital":"CHCB J. de Kervénoaël Pontivy - 56","suppressions":"2021 : soins de suite et rééducation fermé","ghi_nom":"CHCB","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-324156.915510859,6121275.173194002]},"properties":{"id":317,"code_region":"BRE","departement":"56","nom_hopital":"CHCB Pontivy - 56","menaces":"2021 : anesthésie menacé;2021 : maternité menacé;2021 : pédiatrie menacé;2021 : soins de suite et rééducation menacé;2021 : soins palliatifs menacé;2021 : urgences menacé","ghi_nom":"CHCB","ght_nom":"GHT Centre Bretagne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-237472.32405393943,6076669.389509997]},"properties":{"id":767,"code_region":"BRE","departement":"56","nom_hopital":"CHIRC Carentoir - 56","ghi_nom":"CHIRC","ght_nom":"GHT Haute Bretagne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-324310.6312845126,6121033.501356199]},"properties":{"id":584,"code_region":"BRE","departement":"56","nom_hopital":"Clin. de Noyal-Pontivy - 56","ghi_nom":"","ght_nom":"GHT Centre Bretagne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-265443.0485859961,6075713.539018156]},"properties":{"id":887,"code_region":"BRE","departement":"56","nom_hopital":"Clinique des Augustines Malestroit - 56","suppressions":"2003 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-378302.08262189024,6063048.430135281]},"properties":{"id":320,"code_region":"BRE","departement":"56","nom_hopital":"Clinique. du Ter - Ploemeur - 56","suppressions":"2009 : maternité transféré","ghi_nom":"","ght_nom":"GHT de Bretagne Sud","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-378357.8581901343,6062865.41122843]},"properties":{"id":896,"code_region":"BRE","departement":"56","nom_hopital":"EHPAD Kerbenès Ploemeur - 56","menaces":"2021 : soins de suite et rééducation interrompu","ghi_nom":"","ght_nom":"GHT Sud Bretagne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-369310.9060210963,6078689.484508434]},"properties":{"id":322,"code_region":"BRE","departement":"56","nom_hopital":"EPSM Charcot - Caudan - 56","ghi_nom":"","ght_nom":"GHT de Bretagne Sud","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-306651.3209429011,6057006.145769067]},"properties":{"id":885,"code_region":"BRE","departement":"56","nom_hopital":"EPSM Saint-Avé - 56","suppressions":"2021 : gérontopsychiatrie fermé;2021 : hospitalisation addictologie fermé","menaces":"2021 : accueil de crise réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Brocéliande Atlantique","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-367766.6468962884,6073512.189402555]},"properties":{"id":319,"code_region":"BRE","departement":"56","nom_hopital":"GHBS CRG Hennebont - 56","suppressions":"2002 : chirurgie fermé;2002 : maternité fermé","menaces":"2021 : soins de suite et rééducation interrompu","ghi_nom":"GHBS","ght_nom":"GHT Sud Bretagne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-373608.1044545846,6065880.666296801]},"properties":{"id":321,"code_region":"BRE","departement":"56","nom_hopital":"GHBS du Scorff - Lorient – 56","menaces":"2009 : maternité menacé;2009 : pédiatrie menacé","ghi_nom":"GHBS","ght_nom":"GHT Sud Bretagne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-388331.1974417938,6111338.904523297]},"properties":{"id":764,"code_region":"BRE","departement":"56","nom_hopital":"GHBS Le Faouet - 56","ghi_nom":"GHBS","ght_nom":"GHT Sud Bretagne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-369441.6146870254,6060266.20865552]},"properties":{"id":763,"code_region":"BRE","departement":"56","nom_hopital":"GHBS Port-Louis Riantec - 56","suppressions":"2016 : soins de suite et rééducation fermé","ghi_nom":"GHBS","ght_nom":"GHT Sud Bretagne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-356019.9474252483,6118361.709662369]},"properties":{"id":316,"code_region":"BRE","departement":"56","nom_hopital":"HL Alfred Brard Guémené-sur-Scorff - 56","menaces":"2014 : administration menacé;2014 : cuisine menacé;2014 : médecine menacé;2008 : direction fusionné","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1019208.0270813648,5069642.632324671]},"properties":{"id":351,"code_region":"COR","departement":"2A","nom_hopital":"CH Bonifacio – 2A","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[972835.1333050327,5148906.493221233]},"properties":{"id":78,"code_region":"COR","departement":"2A","nom_hopital":"CH Castellucio - Ajaccio 2A","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[271467.90852946433,5955971.2418235745]},"properties":{"id":185,"code_region":"CVL","departement":"18","nom_hopital":"CH J. Coeur - Bourges - 18","menaces":"2021 : cardiologie réduit (lits fermés);2021 : gériatrie réduit (lits fermés);2021 : réanimation réduit (lits fermés);2021 : SMUR réduit (autre);2021 : urgences réduit (autre);2020 : urgences menacé","ghi_nom":"","ght_nom":"GHT du Cher","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[277909.0646498595,5897462.730681955]},"properties":{"id":186,"code_region":"CVL","departement":"18","nom_hopital":"CH Saint Amand-Montrond - 18","suppressions":"2003 : chirurgie fermé","menaces":"2013 : urgences menacé","ghi_nom":"","ght_nom":"GHT du Cher","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[228393.84327909537,5979206.796442169]},"properties":{"id":184,"code_region":"CVL","departement":"18","nom_hopital":"CH Vierzon - 18","menaces":"2018 : chirurgie menacé;2018 : pédiatrie menacé;2017 : maternité menacé","victoires":"2019 : chirurgie victoire;2018 : maternité victoire","ghi_nom":"","ght_nom":"GHT du Cher","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[278555.7994014025,5896663.494473402]},"properties":{"id":815,"code_region":"CVL","departement":"18","nom_hopital":"Clinique des Grainetières Saint-Amand-Montrond - 18","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[264394.8021636312,5954852.893187982]},"properties":{"id":814,"code_region":"CVL","departement":"18","nom_hopital":"EPSIC G. Sand Bourges - 18","menaces":"psychiatrie réduit (lits fermés)","ghi_nom":"EPSIC George Sand","ght_nom":"GHT du Cher","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[235498.86799670864,5913025.468799987]},"properties":{"id":314,"code_region":"CVL","departement":"18","nom_hopital":"EPSIC G. Sand Chezal-Benoit - 18","menaces":"2019 : psychiatrie réduit (lits fermés)","ghi_nom":"EPSIC George Sand","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[151161.38000011139,6119258.579334634]},"properties":{"id":181,"code_region":"CVL","departement":"28","nom_hopital":"CH Chateaudun - 28","suppressions":"2018 : maternité fermé;2017 : cardiologie fermé;2017 : chirurgie fermé","menaces":"2009 : chirurgie réduit (autre)","victoires":"dentisterie victoire;urgences victoire","ghi_nom":"","ght_nom":"GHT Eure-et-Loir","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[167642.54281581193,6177125.960729759]},"properties":{"id":816,"code_region":"CVL","departement":"28","nom_hopital":"CHDC L. Pasteur Le coudray - 28","ghi_nom":"CHDC","ght_nom":"GHT Eure-et-Loir","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[91469.04652109959,6160548.723017111]},"properties":{"id":180,"code_region":"CVL","departement":"28","nom_hopital":"CH Nogent le Rotrou - 28","suppressions":"2008 : chirurgie fermé;2002 : maternité fermé","ghi_nom":"","ght_nom":"GHT Eure-et-Loir","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[188721.9730589318,5909219.356367239]},"properties":{"id":63,"code_region":"CVL","departement":"36","nom_hopital":"CHCLB Châteauroux - 36","menaces":"2021 : chirurgie réduit (lits fermés)","ghi_nom":"CHCLB","ght_nom":"GHT de l'Indre","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[118035.64375725038,5882547.486521475]},"properties":{"id":64,"code_region":"CVL","departement":"36","nom_hopital":"CHCLB Le Blanc - 36","suppressions":"2018 : maternité fermé","menaces":"2021 : cancérologie menacé;2021 : cardiologie menacé;2021 : chirurgie menacé;2021 : gynécologie menacé;2021 : phlébologie menacé;2019 : chirurgie réduit (autre);2019 : ophtalmologie réduit (autre);2011 : maternité menacé","victoires":"2022 : chirurgie maintenu;2012 : maternité maintenu","ghi_nom":"CHCLB","ght_nom":"GHT de l'Indre","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[222099.46152856658,5935254.5482125515]},"properties":{"id":343,"code_region":"CVL","departement":"36","nom_hopital":"CH de la Tour Blanche Issoudun - 36","suppressions":"2014 : chirurgie fermé;1992 : maternité fermé","ghi_nom":"","ght_nom":"GHT de l'Indre","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[221115.01648751422,5874076.225623368]},"properties":{"id":385,"code_region":"CVL","departement":"36","nom_hopital":"CH La Châtre - 36","suppressions":"1990 : maternité fermé","menaces":"2019 : médecine réduit (lits fermés);2019 : permanence des soins menacé;2019 : soins de suite et rééducation réduit (lits fermés);2019 : soins palliatifs menacé","ghi_nom":"","ght_nom":"GHT de l'Indre","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[32677.000008646402,5972733.823035118]},"properties":{"id":349,"code_region":"CVL","departement":"37","nom_hopital":"CHC Chinon - 37","suppressions":"1997 : chirurgie fermé","menaces":"2022 : maternité interrompu;2022 : psychiatrie réduit (autre);2022 : SMUR interrompu;2022 : urgences interrompu","ghi_nom":"CHC","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[109273.93932874531,6008959.098373705]},"properties":{"id":7,"code_region":"CVL","departement":"37","nom_hopital":"CHIAC Amboise - 37","suppressions":"2021 : périnatalité fermé;2003 : maternité fermé","menaces":"2022 : urgences interrompu;2017 : périnatalité menacé;2014 : périnatalité réduit (autre)","ghi_nom":"CHIAC","ght_nom":"GHT Touraine-Val de Loire","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[102339.26506450931,6038585.341433195]},"properties":{"id":325,"code_region":"CVL","departement":"37","nom_hopital":"CHIAC Château-Renault - 37","ghi_nom":"","ght_nom":"GHT Touraine-Val de Loire","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[111534.36257513986,5963304.866173538]},"properties":{"id":817,"code_region":"CVL","departement":"37","nom_hopital":"CH Paul Martinais Loches - 37","suppressions":"1991 : maternité fermé","menaces":"2021 : urgences interrompu;2019 : SMUR réduit (autre);2016 : chirurgie réduit (autre)","ghi_nom":"","ght_nom":"GHT Touraine - Val de Loire","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-188008.84086213264,6130933.880565194]},"properties":{"id":696,"code_region":"CVL","departement":"37","nom_hopital":"CHP Saint-Grégoire - 37","menaces":"2021 : maternité menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[74507.63199674709,6005589.210501033]},"properties":{"id":562,"code_region":"CVL","departement":"37","nom_hopital":"CHRU Bretonneau - Tours 37","menaces":"2022 : psychiatrie menacé","ghi_nom":"CHRU","ght_nom":"GHT Touraine-Val de Loire","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[75759.2883347459,6005964.229671004]},"properties":{"id":563,"code_region":"CVL","departement":"37","nom_hopital":"CHRU Clocheville Tours - 37","menaces":"2022 : psychiatrie menacé","ghi_nom":"CHRU","ght_nom":"GHT Touraine-Val de Loire","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[79269.42345440757,5999414.768246756]},"properties":{"id":564,"code_region":"CVL","departement":"37","nom_hopital":"CHRU Trousseau Chambray - 37","menaces":"2022 : psychiatrie menacé;2017 : cardiologie réduit (autre);2017 : neurochirurgie réduit (autre);2017 : ORL réduit (autre);2017 : orthopédie réduit (autre)","ghi_nom":"CHRU","ght_nom":"GHT Touraine-Val de Loire","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[149552.1561979038,6041076.202213702]},"properties":{"id":182,"code_region":"CVL","departement":"41","nom_hopital":"CH Blois - 41 ","menaces":"2018 : maternité réduit (autre);2014 : centre de planification et d'éducation familiale (CPEF) menacé;2014 : centre IVG menacé","ghi_nom":"","ght_nom":"GHT de Loir et Cher","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[192744.35472260194,6001093.038560617]},"properties":{"id":183,"code_region":"CVL","departement":"41","nom_hopital":"CHRL Romorantin-Lanthenay - 41","suppressions":"2020 : soins à domicile transféré","menaces":"2005 : IVG menacé;2005 : maternité menacé","ghi_nom":"","ght_nom":"GHT Loir-et-Cher","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[172895.58645643646,5987109.454226155]},"properties":{"id":818,"code_region":"CVL","departement":"41","nom_hopital":"CH Selles-sur-Cher","menaces":"2019 : soins de suite et rééducation réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Loir-et-Cher","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[97547.36531948297,6066062.696820057]},"properties":{"id":765,"code_region":"CVL","departement":"41","nom_hopital":"CHVM Montoire-sur-le-Loir - 41","ghi_nom":"CHVM","ght_nom":"GHT Loir-et-Cher","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[118286.7881212118,6072631.194592842]},"properties":{"id":67,"code_region":"CVL","departement":"41","nom_hopital":"CHVM Vendôme - 41","suppressions":"1999 : chirurgie transféré;1973 : maternité fermé","ghi_nom":"CHVM","ght_nom":"GHT Loir-et-Cher","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[146764.44342806563,6029055.32917115]},"properties":{"id":904,"code_region":"CVL","departement":"41","nom_hopital":"Clinique Chesnaie Chailles - 41","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[148907.45643816114,6037672.724722326]},"properties":{"id":498,"code_region":"CVL","departement":"41","nom_hopital":"EHPAD Gaston d'Orléans Blois - 41","ghi_nom":"","ght_nom":"GHT de Loir et Cher","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[308649.7881795503,6106343.511937795]},"properties":{"id":143,"code_region":"CVL","departement":"45","nom_hopital":"CHAM Montargis - 45","ghi_nom":"","ght_nom":"GHT du Loiret","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[293289.6612117886,6055584.492770172]},"properties":{"id":145,"code_region":"CVL","departement":"45","nom_hopital":"CH P. Dezarnaulds Gien - 45","suppressions":"2017 : chirurgie transféré","ghi_nom":"","ght_nom":"GHT du Loiret","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[250446.34135234013,6135431.6286034435]},"properties":{"id":142,"code_region":"CVL","departement":"45","nom_hopital":"CH Pithiviers - 45","suppressions":"2016 : maternité fermé;1997 : chirurgie fermé","menaces":"2020 : urgences menacé;2019 : SMUR interrompu;2018 : urgences de nuit menacé","ghi_nom":"","ght_nom":"GHT du Loiret","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[213822.3486522474,6079738.912517509]},"properties":{"id":10,"code_region":"CVL","departement":"45","nom_hopital":"CHR Orléans - 45","menaces":"2022 : urgences réduit (autre);2017 : maternité menacé;IVG menacé","ghi_nom":"","ght_nom":"GHT du Loiret","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[216243.4895839892,6097799.823541424]},"properties":{"id":144,"code_region":"CVL","departement":"45","nom_hopital":"EPSM Fleury-les-Aubrais - 45","ghi_nom":"","ght_nom":"GHT du Loiret","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[525302.4160161691,6409891.756343108]},"properties":{"id":561,"code_region":"GRE","departement":"08","nom_hopital":"Centre hospitalier Belair - 08","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[525373.2841252199,6404835.726728932]},"properties":{"id":209,"code_region":"GRE","departement":"08","nom_hopital":"CHINA Charleville-Mézières - 08","suppressions":"2008 : hématologie fermé","menaces":"2022 : hospitalisation réduit (autre);2022 : rhumatologie réduit (autre);2021 : laboratoire menacé;2021 : pharmacie menacé;2020 : gastro-entérologie interrompu","ghi_nom":"CHINA","ght_nom":"Nord-Ardennes (GHT 1)","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[523887.3842315681,6445281.776474186]},"properties":{"id":360,"code_region":"GRE","departement":"08","nom_hopital":"CHINA Fumay - 08","menaces":"2021 : SMUR menacé;2021 : urgences menacé","ghi_nom":"CHINA","ght_nom":"Nord-Ardennes (GHT 1)","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[528505.0442734325,6414372.848268788]},"properties":{"id":747,"code_region":"GRE","departement":"08","nom_hopital":"CHINA Nouzonville - 08","ghi_nom":"CHINA","ght_nom":"GHT Nord-Ardennes","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[550288.4971823331,6395067.47195264]},"properties":{"id":417,"code_region":"GRE","departement":"08","nom_hopital":"CHINA Sedan - 08","suppressions":"2020 : cardiologie fermé;2018 : soins intensifs en cardiologie fermé","menaces":"2022 : chirurgie réduit (autre);2022 : médecine réduit (autre);2021 : maternité menacé;2021 : soins de suite et rééducation réduit (lits fermés);2020 : soins intensifs menacé;2016 : urgences de nuit menacé;2014 : urgences pédiatriques menacé;pôle mère-enfant menacé","victoires":"2018 : maternité maintenu;2018 : pédiatrie maintenu;2018 : urgences maintenu","ghi_nom":"CHINA","ght_nom":"Nord-Ardennes (GHT 1)","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[516222.579547074,6436261.635073394]},"properties":{"id":359,"code_region":"GRE","departement":"08","nom_hopital":"Clinique Revin - 08","suppressions":"2001 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[485952.8306532823,6361659.716982662]},"properties":{"id":210,"code_region":"GRE","departement":"08","nom_hopital":"GHSA Rethel - 08","suppressions":"2011 : maternité fermé","menaces":"2018 : chirurgie interrompu","ghi_nom":"GHSA Sud Ardennes","ght_nom":"Marne Sud-Ardennes (GHT 2)","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[523357.98872994963,6342147.000627051]},"properties":{"id":361,"code_region":"GRE","departement":"08","nom_hopital":"GHSA Vouziers - 08","suppressions":"2009 : endoscopie digestive fermé;2008 : chirurgie fermé;2004 : réanimation fermé;2004 : unité de surveillance continue fermé;1993 : maternité fermé","menaces":"2022 : EHPAD réduit (lits fermés);2022 : urgences réduit (autre);2021 : médecine réduit (autre);2019 : urgences menacé;bloc chirurgical menacé","ghi_nom":"GHSA Sud Ardennes","ght_nom":"Marne Sud-Ardennes (GHT 2)","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[537060.2826281389,6469935.804567622]},"properties":{"id":208,"code_region":"GRE","departement":"08","nom_hopital":"Givet - 08","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[528183.7406405997,6401771.381431179]},"properties":{"id":724,"code_region":"GRE","departement":"08","nom_hopital":"Villers-Semeuse - 08","suppressions":"2001 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[451185.230239492,6158003.371308066]},"properties":{"id":838,"code_region":"GRE","departement":"10","nom_hopital":"Clinique de Champagne Troyes - 10","suppressions":"2021 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[503584.48168254655,6172367.760133404]},"properties":{"id":842,"code_region":"GRE","departement":"10","nom_hopital":"EPSM Brienne-le-château - 10","menaces":"2018 : psychiatrie réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Aube et Sézannais","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[389849.64843678474,6189371.035754962]},"properties":{"id":841,"code_region":"GRE","departement":"10","nom_hopital":"GHAM Nogent-sur-Seine","ghi_nom":"GHAM","ght_nom":"GHT Aube et Sézannais","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[413732.80443792045,6193130.579423755]},"properties":{"id":840,"code_region":"GRE","departement":"10","nom_hopital":"GHAM Romilly-sur-Seine – 10","ghi_nom":"GHAM","ght_nom":"GHT Aube et Sézannais","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[524772.2552515791,6145401.221590218]},"properties":{"id":839,"code_region":"GRE","departement":"10","nom_hopital":"HL Saint-Nicolas Bar-sur-Aube - 10","suppressions":"2000 : maternité fermé","menaces":"1999 : maternité menacé","ghi_nom":"","ght_nom":"GHT Aube et Sézannais","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[439911.7883227545,6280141.111978183]},"properties":{"id":836,"code_region":"GRE","departement":"51","nom_hopital":"CAMSP Épernay - 51","victoires":"2022 : pédiatrie maintenu","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[546379.9861549066,6290621.957460695]},"properties":{"id":633,"code_region":"GRE","departement":"51","nom_hopital":"CHA Sainte-Ménéhould - 51","suppressions":"1990 : maternité fermé","menaces":"2018 : chirurgie interrompu","ghi_nom":"CHA","ght_nom":"GHT de Champagne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[440275.56250622537,6280288.49807807]},"properties":{"id":577,"code_region":"GRE","departement":"51","nom_hopital":"CH Auban-Moët Épernay - 51","menaces":"2010 : maternité menacé","victoires":"2011 : maternité maintenu","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[486503.1824853794,6269995.114102591]},"properties":{"id":280,"code_region":"GRE","departement":"51","nom_hopital":"CH Châlons-en-Champagne - 51","menaces":"gastrologie et dermatologie fusionné","ghi_nom":"","ght_nom":"GHT Marne Sud-Ardennes","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[447607.7028431818,6313756.852701932]},"properties":{"id":42,"code_region":"GRE","departement":"51","nom_hopital":"CHU Reims - 51","menaces":"2020 : bloc opératoire menacé;2018 : urgences menacé","ghi_nom":"","ght_nom":"GHT Marne Sud-Ardennes","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[510880.08429566346,6228292.181165235]},"properties":{"id":433,"code_region":"GRE","departement":"51","nom_hopital":"CH Vitry le François - 51","suppressions":"2017 : bloc opératoire fermé;2017 : chirurgie fermé;2015 : maternité fermé","ghi_nom":"","ght_nom":"GHT Marne Haute-Marne Meuse","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[486538.90275646374,6270334.332861592]},"properties":{"id":856,"code_region":"GRE","departement":"51","nom_hopital":"Clinique Prioulet - Châlons-en-Champagne - 51","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[414398.45802074263,6228174.075614097]},"properties":{"id":311,"code_region":"GRE","departement":"51","nom_hopital":"GHAM Sézanne - 51","suppressions":"1997 : chirurgie fermé;1976 : maternité fermé","ghi_nom":"GHAM","ght_nom":"GHT Aube et Sézannais","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[445524.11629476026,6312007.499117352]},"properties":{"id":855,"code_region":"GRE","departement":"51","nom_hopital":"Polyclinique Reims-Bezannes - 51","menaces":"2021 : urgences interrompu","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[638471.0382053925,6097891.488505365]},"properties":{"id":570,"code_region":"GRE","departement":"52","nom_hopital":"CH Bourbonne-les-Bains","ghi_nom":"","ght_nom":"GHT 21-52","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[572186.5203147267,6126970.515204125]},"properties":{"id":12,"code_region":"GRE","departement":"52","nom_hopital":"CH Chaumont - 52","suppressions":"2015 : réanimation fermé","menaces":"2014 : réanimation menacé","ghi_nom":"","ght_nom":"GHT Côte d'Or - Haute Marne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[552702.3028520087,6216549.188769194]},"properties":{"id":625,"code_region":"GRE","departement":"52","nom_hopital":"CH Genevieve De Gaulle Anthonioz - Saint-Dizier - 52","menaces":"2021 : urgences réduit (autre)","ghi_nom":"CHGDGA ","ght_nom":"GHT Marne Haute-Marne Meuse","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[551765.7781427207,6213101.128420312]},"properties":{"id":624,"code_region":"GRE","departement":"52","nom_hopital":"CHHM André Breton Saint-Dizier - 52","ghi_nom":"CHHM","ght_nom":"GHT Marne Haute-Marne Meuse","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[594093.0729234405,6084755.090002473]},"properties":{"id":569,"code_region":"GRE","departement":"52","nom_hopital":"CH Langres - 52","suppressions":"2019 : urgences de nuit fermé;2016 : maternité fermé","ghi_nom":"","ght_nom":"GHT Côte d'Or - Haute Marne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[335932.694657214,5970392.302170486]},"properties":{"id":628,"code_region":"GRE","departement":"52","nom_hopital":"CHS Pierre Lôo La Charité-sur-Loire - 52","ghi_nom":"","ght_nom":"GHT Nièvre","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[552771.1735234186,6216824.239442554]},"properties":{"id":854,"code_region":"GRE","departement":"52","nom_hopital":"Clin. François Ier Saint-Dizier - 52","suppressions":"2017 : chimiothérapie transféré;2017 : chirurgie transféré","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[571920.1788313091,6181072.553362645]},"properties":{"id":632,"code_region":"GRE","departement":"52","nom_hopital":"Hôpital de Joinville - 52","menaces":"2018 : médecine menacé","ghi_nom":"","ght_nom":"GHT Marne Haute-Marne Meuse","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[772960.348199144,6203999.630821856]},"properties":{"id":859,"code_region":"GRE","departement":"54","nom_hopital":"CH 3H Santé Cirey-sur-Vezouze - 54","menaces":"2022 : soins de suite et rééducation menacé","ghi_nom":"","ght_nom":"GHT Sud Lorraine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[722736.000860763,6205940.606934089]},"properties":{"id":261,"code_region":"GRE","departement":"54","nom_hopital":"CH Lunéville - 54","suppressions":"2020 : laboratoire fermé","ghi_nom":"","ght_nom":"GHT Sud Lorraine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[674031.61581724,6258442.033361566]},"properties":{"id":260,"code_region":"GRE","departement":"54","nom_hopital":"CH Pont à Mousson - 54","suppressions":"2021 : urgences fermé;2010 : chirurgie ambulatoire fermé;2009 : chirurgie hors ambulatoire fermé;2005 : maternité fermé","menaces":"2013 : urgences de nuit interrompu","ghi_nom":"","ght_nom":"GHT Sud Lorraine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[684613.8475822838,6215243.766641084]},"properties":{"id":608,"code_region":"GRE","departement":"54","nom_hopital":"CHRU Nancy Brabois - 54","menaces":"2022 : cardiologie menacé;2021 : anesthésie menacé","ghi_nom":"CHRU","ght_nom":"GHT Sud Lorraine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[689250.0624678772,6221502.936712567]},"properties":{"id":11,"code_region":"GRE","departement":"54","nom_hopital":"CHRU Nancy Central - 54","suppressions":"2021 : chirurgie digestive fermé","ghi_nom":"","ght_nom":"GHT Sud Lorraine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[655382.9937144336,6220099.8262685295]},"properties":{"id":601,"code_region":"GRE","departement":"54","nom_hopital":"CH St Charles Toul - 54","menaces":"2022 : bloc opératoire menacé;2022 : maternité réduit (autre);2022 : urgences de nuit interrompu;2021 : urgences menacé;2020 : maternité interrompu","ghi_nom":"","ght_nom":"GHT Sud Lorraine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[657940.5679765418,6218890.309196149]},"properties":{"id":858,"code_region":"GRE","departement":"54","nom_hopital":"CHU Dommartin-les-Toul - 54","suppressions":"2011 : chirurgie de la main fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[660904.2440219928,6317066.216147856]},"properties":{"id":41,"code_region":"GRE","departement":"54","nom_hopital":"CH Val de Briey - 54","menaces":"2021 : urgences menacé;2021 : urgences de nuit interrompu;2019 : maternité interrompu;2019 : soins de suite et rééducation interrompu","ghi_nom":"","ght_nom":"GHT Lorraine Nord","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[683093.7088439688,6220314.300781213]},"properties":{"id":860,"code_region":"GRE","departement":"54","nom_hopital":"CPN Laxou - 54","menaces":"2017 : soins libres réduit (lits fermés)","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[642155.1692365274,6362596.973915491]},"properties":{"id":259,"code_region":"GRE","departement":"54","nom_hopital":"Longwy - 54\nHôpital Mt St Martin","suppressions":"2019 : centre périnatal fermé;2016 : maternité fermé;2012 : pédiatrie fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[683921.1325920151,6224334.250648938]},"properties":{"id":610,"code_region":"GRE","departement":"54","nom_hopital":"Polyclinique Majorelle Nancy - 54","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[574678.1254671569,6236107.291816657]},"properties":{"id":281,"code_region":"GRE","departement":"55","nom_hopital":"CH Bar le Duc - 55","suppressions":"2019 : maternité fermé;2019 : pédiatrie fermé","menaces":"2021 : urgences menacé;2018 : maternité réduit (autre);2009 : chirurgie réduit (autre)","ghi_nom":"","ght_nom":"GHT Marne Haute-Marne Meuse","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[622074.4375621006,6234274.51603295]},"properties":{"id":861,"code_region":"GRE","departement":"55","nom_hopital":"CH Saint-Charles commercy - 55","suppressions":"1999 : SMUR fermé;1992 : chirurgie fermé;1992 : maternité fermé","ghi_nom":"","ght_nom":"GHT Sud Lorraine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[571052.9250844344,6239281.954716966]},"properties":{"id":853,"code_region":"GRE","departement":"55","nom_hopital":"CHS Fains-Veel - 55","menaces":"gériatrie menacé","ghi_nom":"","ght_nom":"GHT Marne Haute-Marne Meuse","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[616680.8130881456,6256173.5571561875]},"properties":{"id":631,"code_region":"GRE","departement":"55","nom_hopital":"CHVSM Sainte-Anne Saint-Mihiel - 55","menaces":"2021 : réanimation menacé;2019 : bloc opératoire réduit (autre);2019 : médecine réduit (lits fermés);2019 : pneumologie réduit (lits fermés)","ghi_nom":"CHVSM","ght_nom":"GHT Marne Haute-Marne Meuse","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[599237.450524204,6301238.6437495155]},"properties":{"id":630,"code_region":"GRE","departement":"55","nom_hopital":"CHVSM Saint-Nicolas Verdun - 55","menaces":"2021 : réanimation menacé","ghi_nom":"CHVSM","ght_nom":"GHT Marne Haute-Marne Meuse","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[767600.7105899472,6306555.770302465]},"properties":{"id":270,"code_region":"GRE","departement":"57","nom_hopital":"CHIFSA Forbach - 57","ghi_nom":"CHIFSA","ght_nom":"GHT Meuse-Est","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[746465.2487957361,6291489.192404135]},"properties":{"id":84,"code_region":"GRE","departement":"57","nom_hopital":"CHIFSA Saint-Avold  - 57","suppressions":"2011 : maternité fermé;2011 : pédiatrie fermé","ghi_nom":"CHIFSA","ght_nom":"GHT Meuse-Est","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[723516.5364538763,6306121.2399618365]},"properties":{"id":640,"code_region":"GRE","departement":"57","nom_hopital":"CH Le Secq de Crépy Boulay-Moselle 57","suppressions":"2015 : urgences consultations non programmées fermé;1987 : chirurgie fermé;1987 : maternité fermé","ghi_nom":"","ght_nom":"GHT Lorraine Nord","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[675597.1342167892,6330367.911624257]},"properties":{"id":358,"code_region":"GRE","departement":"57","nom_hopital":"CHRMT Hayange - 57","suppressions":"2018 : soins de suite et réadaptation polyvalente fermé;2016 : pneumologie fermé;2013 : urgences fermé;2012 : bloc opératoire fermé;2012 : chirurgie fermé","menaces":"2018 : médecine polyvalente réduit (lits fermés)","ghi_nom":"CHRMT","ght_nom":"GHT Lorraine Nord","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[787083.5486095777,6293497.017017596]},"properties":{"id":271,"code_region":"GRE","departement":"57","nom_hopital":"CH Sarreguemines - 57","menaces":"2018 : pédiatrie interrompu","ghi_nom":"","ght_nom":"GHT Moselle-Est","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[697989.104486141,6287927.332525273]},"properties":{"id":851,"code_region":"GRE","departement":"57","nom_hopital":"CHS Jury-les-Metz - 57","menaces":"2022 : psychiatrie menacé","ghi_nom":"","ght_nom":"GHT Lorraine Nord","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[779620.4561199397,6219651.172975817]},"properties":{"id":852,"code_region":"GRE","departement":"57","nom_hopital":"CHS Lorquin - 57","suppressions":"hôpital de jour fermé","menaces":"2015 : administration réduit (autre);2015 : admission réduit (autre)","ghi_nom":"","ght_nom":"GHT Lorraine Nord","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[687548.7921803189,6295177.852957353]},"properties":{"id":5,"code_region":"GRE","departement":"57","nom_hopital":"HIA Metz - 57","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[748365.2578944524,6293790.866211806]},"properties":{"id":857,"code_region":"GRE","departement":"57","nom_hopital":"Hôpital de Saint-Avold - 57","menaces":"2021 : chirurgie réduit (lits fermés)","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[785519.1063801739,6229850.704109486]},"properties":{"id":419,"code_region":"GRE","departement":"57","nom_hopital":"Sarrebourg - 57","menaces":"2019 : maternité menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[867464.6211935991,6244159.7887200685]},"properties":{"id":844,"code_region":"GRE","departement":"67","nom_hopital":"CH Haguenau - 67","menaces":"2013 : réanimation réduit (lits fermés);2013 : soins intensifs réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Grand Est 10","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[883025.3535155095,6281934.936746444]},"properties":{"id":843,"code_region":"GRE","departement":"67","nom_hopital":"CHI Lauter Wissemboug - 67","menaces":"2018 : maternité menacé","ghi_nom":"","ght_nom":"GHT Grand Est 10","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[859584.0635898261,6229217.664940498]},"properties":{"id":845,"code_region":"GRE","departement":"67","nom_hopital":"CH La Grafenbourg Brumath - 67","suppressions":"2006 : psychiatrie transféré","ghi_nom":"","ght_nom":"GHT Grand Est 10","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[818135.2363670953,6231898.042233563]},"properties":{"id":846,"code_region":"GRE","departement":"67","nom_hopital":"CH Sainte-Catherine Saverne - 67","suppressions":"2013 : soins intensifs fermé","ghi_nom":"","ght_nom":"GHT Grand Est 10","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[858216.2324643807,6226951.943947754]},"properties":{"id":848,"code_region":"GRE","departement":"67","nom_hopital":"EPSAN Brumath - 67","ghi_nom":"","ght_nom":"GHT Grand Est 10","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[832850.5571235694,6184101.407141741]},"properties":{"id":29,"code_region":"GRE","departement":"67","nom_hopital":"GHSO Obernai - 67","suppressions":"2008 : chirurgie fermé;2008 : maternité fermé","ghi_nom":"GHSO","ght_nom":"GHT Centre Alsace","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[829785.0780115236,6150085.530441835]},"properties":{"id":37,"code_region":"GRE","departement":"67","nom_hopital":"GHSO Sélestat - 67","menaces":"2016 : réanimation transformé","ghi_nom":"","ght_nom":"GHT Centre Alsace","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[833825.8186625652,6197581.771066338]},"properties":{"id":847,"code_region":"GRE","departement":"67","nom_hopital":"HL Molsheim - 67","suppressions":"1977 : maternité fermé","ghi_nom":"","ght_nom":"GHT Grand Est 10","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[862427.5300775506,6203105.826421415]},"properties":{"id":246,"code_region":"GRE","departement":"67","nom_hopital":"HUS Strasbourg - 67","suppressions":"2016 : nettoyage sous-traité","menaces":"2020 : réanimation réduit (lits fermés)","ghi_nom":"HUS","ght_nom":"GHT Grand Est 10","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[793820.9896155873,6172433.249719476]},"properties":{"id":386,"code_region":"GRE","departement":"67","nom_hopital":"Saulxures 67","menaces":"2011 : centre médical menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[803870.8887148807,6139784.56081323]},"properties":{"id":341,"code_region":"GRE","departement":"68","nom_hopital":"Aubure - 68","menaces":"2011 : centre médical menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[802692.636404688,6091774.459919129]},"properties":{"id":50,"code_region":"GRE","departement":"68","nom_hopital":"CH Guebwiller - 68","suppressions":"2003 : maternité fermé","menaces":"2021 : urgences de nuit interrompu","ghi_nom":"","ght_nom":"GHT Centre Alsace","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[812635.9721281007,6068242.244659537]},"properties":{"id":849,"code_region":"GRE","departement":"68","nom_hopital":"CH Pfastatt - 68","suppressions":"1993 : bloc opératoire fermé;1993 : chirurgie fermé","ghi_nom":"","ght_nom":"GHT Haute Alsace","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[811335.8651195093,6098672.879978535]},"properties":{"id":850,"code_region":"GRE","departement":"68","nom_hopital":"CH Rouffac - 68","ghi_nom":"","ght_nom":"GHT Haute Alsace","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[816146.7847757116,6065151.220998954]},"properties":{"id":652,"code_region":"GRE","departement":"68","nom_hopital":"Clin. Diaconat Fonderie Mulhouse - 68","menaces":"urgences interrompu","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[817432.9089910866,6061247.163573582]},"properties":{"id":245,"code_region":"GRE","departement":"68","nom_hopital":"GHRMSA Émile Muller Mulhouse - 68","suppressions":"2020 : chirurgie pédiatrique fermé","menaces":"2019 : urgences interrompu","ghi_nom":"GHRMSA ","ght_nom":"GHT Haute Alsace","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[790629.243955927,6075398.53214878]},"properties":{"id":9,"code_region":"GRE","departement":"68","nom_hopital":"GHRMSA Saint-Jacques Thann - 68","suppressions":"2019 : maternité fermé;2009 : soins intensifs fermé","menaces":"2016 : urgences interrompu","ghi_nom":"GHRMSA","ght_nom":"GHT Haute Alsace","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[807335.5524236222,6044555.591772683]},"properties":{"id":52,"code_region":"GRE","departement":"68","nom_hopital":"GHRMSA Saint-Morand Altkirch - 68 ","suppressions":"2019 : maternité fermé;2019 : soins continus fermé","menaces":"2021 : urgences interrompu;2020 : urgences menacé","ghi_nom":"GHRMSA","ght_nom":"GHT Haute Alsace","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[830316.8849661533,6049132.508284941]},"properties":{"id":774,"code_region":"GRE","departement":"68","nom_hopital":"GHRMSA Sierentz - 68","ghi_nom":"GHRMSA","ght_nom":"GHT Haute Alsace","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[790880.4927743825,6115871.445690882]},"properties":{"id":244,"code_region":"GRE","departement":"68","nom_hopital":"Stosswihr - 68","menaces":"2011 : centre médical menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[748010.039516147,6142066.034430757]},"properties":{"id":357,"code_region":"GRE","departement":"88","nom_hopital":"CH de l'Avison - Bruyères - 88","suppressions":"2018 : centre médico-psycho pédagogique fermé","ghi_nom":"","ght_nom":"GHT Vosges","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[765605.9194783639,6118939.818794098]},"properties":{"id":236,"code_region":"GRE","departement":"88","nom_hopital":"CH Gérardmer - 88","suppressions":"2005 : chirurgie fermé;2005 : endoscopie fermé;2004 : urgences de nuit fermé;2002 : buanderie fermé;1990 : maternité fermé","menaces":"2020 : SMUR interrompu;2020 : urgences interrompu;2019 : soins non programmés menacé;médecine menacé;soins palliatifs menacé","ghi_nom":"CHIHMV","ght_nom":"GHT Vosges","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[715947.5664492399,6139170.962030883]},"properties":{"id":70,"code_region":"GRE","departement":"88","nom_hopital":"CHI Durkheim Épinal - 88","menaces":"2018 : SMUR réduit (autre)","ghi_nom":"CHI Émile Durkheim","ght_nom":"GHT Vosges","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[780145.4404054396,6137622.074063778]},"properties":{"id":865,"code_region":"GRE","departement":"88","nom_hopital":"CHIHMV Fraize - 88","ghi_nom":"CHIHMV","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[762268.4833466593,6173995.998681874]},"properties":{"id":863,"code_region":"GRE","departement":"88","nom_hopital":"CHIHMV Raon-l'Étape - 88","ghi_nom":"CHICV","ght_nom":"GHT Vosges","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[775129.160167851,6155065.080272698]},"properties":{"id":235,"code_region":"GRE","departement":"88","nom_hopital":"CHIHMV Saint-Dié - 88","suppressions":"2019 : hépato-gastro-entérologie fermé","ghi_nom":"CHIHMV","ght_nom":"GHT Vosges","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[776576.888726391,6172998.080425264]},"properties":{"id":864,"code_region":"GRE","departement":"88","nom_hopital":"CHIHMV Senones - 88","ghi_nom":"CHICV","ght_nom":"GHT Vosges","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[635427.8890577263,6168460.843362159]},"properties":{"id":627,"code_region":"GRE","departement":"88","nom_hopital":"CHIOV Neufchâteau - 88","menaces":"2021 : cardiologie menacé;2021 : urgences menacé","ghi_nom":"CHIOV","ght_nom":"GHT Vosges","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[643591.2199677302,6118353.289611761]},"properties":{"id":355,"code_region":"GRE","departement":"88","nom_hopital":"CH Lamarche - 88","ghi_nom":"","ght_nom":"GHT Vosges","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[763469.1797124073,6088240.809818109]},"properties":{"id":672,"code_region":"GRE","departement":"88","nom_hopital":"CHL Bussang - 88","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[753491.0744137615,6086354.829904837]},"properties":{"id":671,"code_region":"GRE","departement":"88","nom_hopital":"CHL du Thillot - 88","suppressions":"2016 : médecine fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[662089.4943046723,6141308.483213768]},"properties":{"id":356,"code_region":"GRE","departement":"88","nom_hopital":"CHOV Vittel - 88","suppressions":"cardiologie fermé;chirurgie fermé;néphrologie fermé","menaces":"2021 : SMUR menacé;2021 : urgences menacé;2021 : urgences de nuit menacé","ghi_nom":"CHOV","ght_nom":"GHT Vosges","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[739299.4418471341,6162197.609102822]},"properties":{"id":758,"code_region":"GRE","departement":"88","nom_hopital":"CH Rambervillers - 88","suppressions":"2019 : médecine fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[682826.4001965391,6157250.3364703925]},"properties":{"id":75,"code_region":"GRE","departement":"88","nom_hopital":"CH Ravenel Mirecourt - 88","menaces":"2022 : pédopsychiatrie menacé","ghi_nom":"","ght_nom":"GHT Sud Lorraine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[733967.1221428436,6109060.254522361]},"properties":{"id":237,"code_region":"GRE","departement":"88","nom_hopital":"CH Remiremont - 88","suppressions":"2020 : urologie fermé;2019 : diabétologie fermé;2019 : pneumologie fermé;2018 : cardiologie fermé","menaces":"2021 : SMUR menacé;2021 : urgences menacé;2021 : urgences de nuit menacé;2016 : maternité menacé","victoires":"2018 : maternité maintenu","ghi_nom":"","ght_nom":"GHT Vosges","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[673518.4585140568,6121002.639510546]},"properties":{"id":571,"code_region":"GRE","departement":"88","nom_hopital":"Clin. Darney - 88","suppressions":"1976 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[719467.4307722487,6140155.595418568]},"properties":{"id":862,"code_region":"GRE","departement":"88","nom_hopital":"Clinique Ligne Bleue Épinal - 88","menaces":"2021 : maternité fusionné","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-6853210.639361241,1810052.2403205514]},"properties":{"id":673,"code_region":"GUA","departement":"971","nom_hopital":"CHL Capesterre Belle Eau - 97","suppressions":"2016 : hospitalisation à domicile fermé","menaces":"2016 : médecine transformé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-6824588.988292172,1791902.1986785925]},"properties":{"id":909,"code_region":"GUA","departement":"971","nom_hopital":"CH Sainte-Marie Marie-Galante - 97","suppressions":"2012 : chirurgie fermé;2012 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-6849893.1789698135,1832919.4190435836]},"properties":{"id":554,"code_region":"GUA","departement":"971","nom_hopital":"CHUG Pointe-à-Pitre - 97","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-5825908.839308793,550400.305255445]},"properties":{"id":464,"code_region":"GUY","departement":"973","nom_hopital":"Guyane - Cayenne - 97","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-5860155.573579851,574978.9567196206]},"properties":{"id":465,"code_region":"GUY","departement":"973","nom_hopital":"Kourou - 973","menaces":"2017 : centre médico chirurgical menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[454634.54350379447,6432461.393743603]},"properties":{"id":278,"code_region":"HDF","departement":"02","nom_hopital":"CH Brisset Hirson - 02","suppressions":"2006 : chirurgie fermé;2006 : maternité fermé","menaces":"2013 : cardiologie menacé;2013 : laboratoire menacé;2013 : urgences menacé","ghi_nom":"","ght_nom":"Aisne Nord-Haute Somme","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[360073.98848992586,6381577.510641335]},"properties":{"id":650,"code_region":"HDF","departement":"02","nom_hopital":"CH Chauny - 02","menaces":"2019 : chirurgie menacé","ghi_nom":"","ght_nom":"GHT Aisne Nord - Haute Somme","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[403558.76265024906,6428613.371971657]},"properties":{"id":85,"code_region":"HDF","departement":"02","nom_hopital":"CH Guise - 02","suppressions":"2020 : urgences fermé;2019 : chirurgie fermé;1994 : maternité fermé","victoires":"2020 : urgences réouvert","ghi_nom":"","ght_nom":"Aisne Nord-Haute Somme","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[378762.615102296,6282688.335153645]},"properties":{"id":279,"code_region":"HDF","departement":"02","nom_hopital":"CH Jeanne de Navarre Château-Thierry - 02","menaces":"2014 : maternité menacé;2014 : néonatalogie menacé;2014 : soins intensifs menacé;2012 : chirurgie menacé","victoires":"2012 : soins intensifs victoire","ghi_nom":"","ght_nom":"Aisne Sud - Saphir","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[403045.7581727212,6371288.059269454]},"properties":{"id":286,"code_region":"HDF","departement":"02","nom_hopital":"CH Laon - 02","ghi_nom":"","ght_nom":"Aisne Nord-Haute Somme","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[319234.27016428486,6565718.176135246]},"properties":{"id":644,"code_region":"HDF","departement":"59","nom_hopital":"CH Armentières","suppressions":"2019 : gastro-entérologie fermé","ghi_nom":"","ght_nom":"GHT Lille Métropole Flandre Intérieure","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[345517.4543404911,6504979.136560743]},"properties":{"id":654,"code_region":"HDF","departement":"59","nom_hopital":"CH Douai - 59","menaces":"2021 : urgences pédiatriques interrompu","victoires":"2022 : urgences pédiatriques réouvert","ghi_nom":"","ght_nom":"GHT du Douaisis","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[451963.13381804124,6447985.395591988]},"properties":{"id":560,"code_region":"HDF","departement":"59","nom_hopital":"CH Fourmies","menaces":"2021 : chirurgie menacé;2021 : maternité menacé;2021 : urgences menacé","ghi_nom":"","ght_nom":"GHT du Hainaut-Cambrésis","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[354194.83221145347,6576396.1688863]},"properties":{"id":263,"code_region":"HDF","departement":"59","nom_hopital":"CH Gustave Dron Tourcoing - 59","suppressions":"2019 : maternité transféré","ghi_nom":"","ght_nom":"GHT Lille Métropole Flandre Intérieure","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[444058.01620759815,6494927.541794993]},"properties":{"id":911,"code_region":"HDF","departement":"59","nom_hopital":"CHM Maubeuge - 59","ghi_nom":"","ght_nom":"GHT Hainaut-Cambrésis","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[353168.98035404435,6564812.707525378]},"properties":{"id":33,"code_region":"HDF","departement":"59","nom_hopital":"CH Roubaix - 59","menaces":"2019 : unité hivernale interrompu;2017 : maternité fusionné","ghi_nom":"","ght_nom":"GHT Lille Métropole Flandre Intérieure","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[338026.0069470778,6553322.273717113]},"properties":{"id":695,"code_region":"HDF","departement":"59","nom_hopital":"CHRU Lille - 59","ghi_nom":"","ght_nom":"GHT Lille Métropole Flandre Intérieure","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[365261.86145535886,6508714.183509206]},"properties":{"id":303,"code_region":"HDF","departement":"59","nom_hopital":"CH Somain - 59","suppressions":"2019 : urgences de nuit fermé","menaces":"2014 : soins non programmés interrompu;2008 : soins longue durée menacé","ghi_nom":"","ght_nom":"GHT du Douaisi","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[358687.8893559724,6568437.8847737005]},"properties":{"id":264,"code_region":"HDF","departement":"59","nom_hopital":"CH Wattrelos - 59","suppressions":"2018 : urgences fermé","menaces":"2013 : urgences menacé","victoires":"2014 : néonatalité maintenu;2014 : soins intensifs maintenu","ghi_nom":"","ght_nom":"GHT Lille Métropole Flandre Intérieure","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[305485.23232928663,6576494.137147201]},"properties":{"id":626,"code_region":"HDF","departement":"59","nom_hopital":"EPSM des Flandres Bailleul - 59","suppressions":"2012 : chirurgie transféré","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[322101.9981364237,6565264.690212326]},"properties":{"id":589,"code_region":"HDF","departement":"59","nom_hopital":"EPSM Lille Métropole Armentières - 59","victoires":"2011 : psychiatrie victoire","ghi_nom":"","ght_nom":"GHT Lille Métropole Flandre Intérieure","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[342301.34534630895,6555857.008682403]},"properties":{"id":265,"code_region":"HDF","departement":"59","nom_hopital":"IPL - Lille - 59","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[355992.71531177714,6565607.00357545]},"properties":{"id":645,"code_region":"HDF","departement":"59","nom_hopital":"Maternité Gellé Roubaix - 59","suppressions":"2017 : maternité transféré","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[274527.40847271285,6307538.743459695]},"properties":{"id":227,"code_region":"HDF","departement":"60","nom_hopital":"Chantilly - 60","suppressions":"2012 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[209526.98876274982,6319483.650903006]},"properties":{"id":289,"code_region":"HDF","departement":"60","nom_hopital":"Chaumont en Vexin - 60","suppressions":"2011 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[268511.2181726657,6339369.790131769]},"properties":{"id":223,"code_region":"HDF","departement":"60","nom_hopital":"CH Clermont de l'Oise - 60","suppressions":"2018 : maternité fermé","victoires":"2012 : maternité maintenu","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[321523.84419087693,6314669.534495669]},"properties":{"id":225,"code_region":"HDF","departement":"60","nom_hopital":"CH Crépy en Valois - 60","suppressions":"1990 : maternité fermé","ghi_nom":"","ght_nom":"GHT Oise Nord Est","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[310544.03598865867,6340574.217120145]},"properties":{"id":68,"code_region":"HDF","departement":"60","nom_hopital":"CHI Compiègne - 60","suppressions":"2014 : maternité fermé","ghi_nom":"CHI Compiègnes-Noyon","ght_nom":"GHT Oise Nord Est","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[333946.86501460895,6375202.635029548]},"properties":{"id":222,"code_region":"HDF","departement":"60","nom_hopital":"CHI Noyon - 60","suppressions":"2014 : maternité fermé;2012 : chirurgie fermé","menaces":"2012 : médecine chirurgie obstétrique menacé","victoires":"2013 : maternité victoire","ghi_nom":"CHI Compiègnes-Noyon","ght_nom":"GHT Oise Nord Est","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[237685.43382932968,6315030.717539917]},"properties":{"id":226,"code_region":"HDF","departement":"60","nom_hopital":"CHIPO Méru - 60","suppressions":"2002 : maternité fermé","ghi_nom":"GHCPO","ght_nom":"GHT Nord-Ouest Vexin Val-d’Oise","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[269163.32157013175,6338822.787648174]},"properties":{"id":573,"code_region":"HDF","departement":"60","nom_hopital":"CHPI Clermont - 60","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[273866.8687532996,6316971.438697384]},"properties":{"id":224,"code_region":"HDF","departement":"60","nom_hopital":"GHPSO Creil - 60","suppressions":"2021 : SMUR fermé;2018 : maternité transféré;diabétologie fermé","menaces":"2021 : urgences fusionné;2021 : urgences réduit (autre);2017 : maternité menacé","victoires":"2022 : maternité victoire","ghi_nom":"GHPSO","ght_nom":"GHT Oise Sud","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[286737.1314257086,6308379.945636545]},"properties":{"id":82,"code_region":"HDF","departement":"60","nom_hopital":"GHPSO Senlis - 60","suppressions":"2021 : urgences transféré","menaces":"2021 : urgences réduit (autre)","ghi_nom":"GHPSO","ght_nom":"GHT Oise Sud","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[317228.3654386453,6464307.358188168]},"properties":{"id":282,"code_region":"HDF","departement":"62","nom_hopital":"Bapaume – 62 ","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[181375.31235690048,6572355.059980899]},"properties":{"id":647,"code_region":"HDF","departement":"62","nom_hopital":"CH Boulogne-sur-Mer - 62","suppressions":"2021 : addictologie fermé","menaces":"2021 : urgences menacé;2021 : urgences de nuit en néonatalogie réduit (autre);2020 : SMUR interrompu","ghi_nom":"","ght_nom":"GHT Côte d'Opale","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[258517.78419747177,6512191.222241692]},"properties":{"id":660,"code_region":"HDF","departement":"62","nom_hopital":"CH du Ternois Gauchin-Verloingt - 62","ghi_nom":"","ght_nom":"GHT Arois-Ternois","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[226829.45627040416,6511151.812895548]},"properties":{"id":661,"code_region":"HDF","departement":"62","nom_hopital":"CHL Hesdin - 62","suppressions":"2014 : médecine fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[250887.99844749275,6568882.458173805]},"properties":{"id":648,"code_region":"HDF","departement":"62","nom_hopital":"CHR Saint-Omer - 62","menaces":"2019 : SMUR interrompu","ghi_nom":"","ght_nom":"GHT Dunkerquois et Audomarois","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[315222.4253173958,6520863.919244572]},"properties":{"id":241,"code_region":"HDF","departement":"62","nom_hopital":"CH Schaffner Lens - 62","suppressions":"2017 : pneumologie fermé","menaces":"2020 : SMUR interrompu;2019 : urgences menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[292766.2449187708,6540283.890083197]},"properties":{"id":905,"code_region":"HDF","departement":"62","nom_hopital":"Clinique Anne d'Artois Béthunes - 62","menaces":"2022 : maternité interrompu","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[182998.7520443499,6572659.028125181]},"properties":{"id":914,"code_region":"HDF","departement":"62","nom_hopital":"Clinique Côte d'Opale Saint-Martin-Boulogne - 62","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[173661.5588584394,6516011.581503149]},"properties":{"id":242,"code_region":"HDF","departement":"62","nom_hopital":"HM Berck - 62","suppressions":"2002 : service de rééducation polyvalente fermé;bloc chirurgical fermé;laboratoire fermé;pharmacie fermé;radiographie fermé","menaces":"2017 : soins intensifs réduit (autre)","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[309880.007665776,6518739.064910273]},"properties":{"id":646,"code_region":"HDF","departement":"62","nom_hopital":"Polyclinique de Riaumont Liévin - 62","suppressions":"2017 : maternité transféré;2015 : cardiologie fermé;2015 : neurologie fermé;2015 : pneumologie fermé;2012 : chirurgie transféré","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[328308.33555147797,6521896.395080754]},"properties":{"id":684,"code_region":"HDF","departement":"62","nom_hopital":"Polyclinique Hénin-Beaumont - 62","suppressions":"urgences de nuit fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[203922.19619034213,6463973.865955668]},"properties":{"id":583,"code_region":"HDF","departement":"80","nom_hopital":"Abbeville - 80","menaces":"2014 : néonatalité réduit (autre)","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[279865.6349265611,6431402.779037137]},"properties":{"id":323,"code_region":"HDF","departement":"80","nom_hopital":"CH Corbie - 80","suppressions":"2000 : maternité fermé;1994 : chirurgie fermé","menaces":"maternité interrompu","ghi_nom":"","ght_nom":"GHT Somme Littoral Sud","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[260620.73591203112,6473573.905184151]},"properties":{"id":390,"code_region":"HDF","departement":"80","nom_hopital":"CH Doullens -80","suppressions":"2011 : maternité fermé;2009 : chirurgie fermé","ghi_nom":"","ght_nom":"GHT Somme Littoral Sud","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[286515.5553112923,6385604.5631963555]},"properties":{"id":45,"code_region":"HDF","departement":"80","nom_hopital":"CHIMR Montdidier - 80","suppressions":"1998 : maternité fermé","menaces":"2015 : soins de suite polyvalents interrompu","ghi_nom":"CHI Montdidier-Roye","ght_nom":"GHT Somme Littoral Sud","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[310899.7597814538,6395263.004584467]},"properties":{"id":649,"code_region":"HDF","departement":"80","nom_hopital":"CHIMR Roye - 80","ghi_nom":"CHI Montdidier-Roye","ght_nom":"GHT Somme Littoral Sud","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[326106.50355120003,6434865.537312493]},"properties":{"id":683,"code_region":"HDF","departement":"80","nom_hopital":"CH Péronne - 80","suppressions":"2021 : SMUR fermé;2019 : urgences fermé","ghi_nom":"","ght_nom":"GHT Aisne Nord - Haute Somme","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[255274.06058677664,6430187.606459485]},"properties":{"id":513,"code_region":"HDF","departement":"80","nom_hopital":"CHU Amiens Picardie - 80","ghi_nom":"","ght_nom":"GHT Somme Littoral Sud","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[253282.4269523921,6423877.597098799]},"properties":{"id":324,"code_region":"HDF","departement":"80","nom_hopital":"EPSMS Philippe Pinel Amiens - 80","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[256242.82870549322,6426400.18791473]},"properties":{"id":512,"code_region":"HDF","departement":"80","nom_hopital":"Maternité Camille Desmoulins Amiens - 80","suppressions":"2014 : maternité transféré","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[264851.5831150509,6250929.17655722]},"properties":{"id":445,"code_region":"IDF","departement":"75","nom_hopital":"Centre Santé Chemin Vert 11","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[263569.36039667204,6245443.263647966]},"properties":{"id":901,"code_region":"IDF","departement":"75","nom_hopital":"Centre Santé Croix Rouge Ile-de-France","victoires":"2022 : centre de santé maintenu","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[262837.3312121207,6246959.6645974675]},"properties":{"id":442,"code_region":"IDF","departement":"75","nom_hopital":"Centre Santé du Moulinet 13","menaces":"2012 : centre de santé menacé;2012 : laboratoire d'analyses médicales menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[262853.02127625135,6246143.781262685]},"properties":{"id":522,"code_region":"IDF","departement":"75","nom_hopital":"Centre Santé rue Daviel Paris 13 ","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[261118.76512740453,6249162.497530484]},"properties":{"id":515,"code_region":"IDF","departement":"75","nom_hopital":"Centre Santé St-Victor Paris 5","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[254206.49503725005,6248218.072599346]},"properties":{"id":913,"code_region":"IDF","departement":"75","nom_hopital":"CH Boucicaut 15","ghi_nom":"AP-HP","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[257685.80670746556,6246246.847347899]},"properties":{"id":525,"code_region":"IDF","departement":"75","nom_hopital":"CH Broussais 14","suppressions":"2009 : centre IVG fermé;1999 : maternité fermé","ghi_nom":"GH EHGP-Broussais","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[261872.55480537194,6247443.358678428]},"properties":{"id":902,"code_region":"IDF","departement":"75","nom_hopital":"CH La Collégiale Paris 5","menaces":"2022 : gériatrie interrompu","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[258310.81015656225,6250695.603608826]},"properties":{"id":438,"code_region":"IDF","departement":"75","nom_hopital":"CH Laennec 7","suppressions":"2000 : maternité fermé","ghi_nom":"AP-HP","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[257183.80581257492,6245935.901219305]},"properties":{"id":527,"code_region":"IDF","departement":"75","nom_hopital":"CH Léopold Bellan Paris 14","menaces":"anesthésie menacé;bloc opératoire menacé;chirurgie menacé;proctologie menacé;soins de suite menacé;soins de suite et rééducation neurologique menacé;stérilisation menacé;urgences menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[263528.9208764622,6253451.034028841]},"properties":{"id":517,"code_region":"IDF","departement":"75","nom_hopital":"CH Saint Louis Paris - 10","suppressions":"service grands brûlés fermé","menaces":"2022 : hématologie menacé;2012 : chirurgie ambulatoire menacé;2012 : imprimerie menacé;2012 : reprographie menacé;2012 : stérilisation menacé;ORL fusionné","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[254538.37928629434,6248601.847717954]},"properties":{"id":532,"code_region":"IDF","departement":"75","nom_hopital":"CH Saint-Michel 15","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[258219.26888790002,6247156.871067463]},"properties":{"id":531,"code_region":"IDF","departement":"75","nom_hopital":"CH Saint-Vincent-de-Paul 14","suppressions":"2011 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[267377.20153041574,6252168.071074824]},"properties":{"id":448,"code_region":"IDF","departement":"75","nom_hopital":"CH Tenon Paris 20","suppressions":"maladies infectieuses transféré","menaces":"2022 : bloc opératoire réduit (autre);2021 : urgences menacé","victoires":"2013 : centre IVG maintenu","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[259634.21888203578,6257687.553891289]},"properties":{"id":533,"code_region":"IDF","departement":"75","nom_hopital":"CHU Bichat-Claude Bernard - Paris 75018","menaces":"2021 : cardiologie réduit (lits fermés)","ghi_nom":"GHUNUP","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[260379.9840285073,6247301.270615452]},"properties":{"id":526,"code_region":"IDF","departement":"75","nom_hopital":"CHU Cochin Paris 12","menaces":"chirurgie menacé;stomatologie menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[262657.7454743871,6254749.404287245]},"properties":{"id":444,"code_region":"IDF","departement":"75","nom_hopital":"CHU Fernand Widal Paris 10","ghi_nom":"GH Saint-Louis-Lariboisière-Fernand Widal","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[261968.61442947813,6255051.332978614]},"properties":{"id":516,"code_region":"IDF","departement":"75","nom_hopital":"CHU Lariboisière Paris 10","menaces":"2012 : économat fournisseurs menacé;ORL fusionné","ghi_nom":"GH Saint-Louis-Lariboisière-Fernand Widal","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[262855.8306093333,6247520.069179206]},"properties":{"id":523,"code_region":"IDF","departement":"75","nom_hopital":"CHU La Salpétrière Paris 13","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[265239.97476443596,6249453.444032686]},"properties":{"id":521,"code_region":"IDF","departement":"75","nom_hopital":"CHU Saint Antoine Paris 12","suppressions":"2012 : maternité fermé;Centre national de référence en hémobiologie périnatale (CNRHP) transféré;hémobiologie périnatale fermé","menaces":"2012 : pneumologie menacé;2012 : soins palliatifs menacé;2010 : IVG menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[265126.1592373338,6251109.612294724]},"properties":{"id":518,"code_region":"IDF","departement":"75","nom_hopital":"Clinique Mona Lisa 11","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[258799.8012607257,6246325.297668561]},"properties":{"id":530,"code_region":"IDF","departement":"75","nom_hopital":"ESPIC Saint-Joseph Paris 14","suppressions":"2008 : maladies infectieuses fermé;2008 : pédiatrie fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[257690.1431250237,6248645.94032047]},"properties":{"id":697,"code_region":"IDF","departement":"75","nom_hopital":"GHNEM - Necker - 75015","menaces":"2021 : pédiatrie réduit (autre)","ghi_nom":"GHNEM","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[264991.1644481982,6253542.159216642]},"properties":{"id":761,"code_region":"IDF","departement":"75","nom_hopital":"GHUPN Maison Blanche-Hauteville Paris - 10","ghi_nom":"GHUPN","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[260358.3069099898,6246003.517223913]},"properties":{"id":759,"code_region":"IDF","departement":"75","nom_hopital":"GHUPN Sainte-Anne Paris - 14","ghi_nom":"GHUPN","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[253071.05156731646,6247617.617171067]},"properties":{"id":441,"code_region":"IDF","departement":"75","nom_hopital":"HE Georges Pompidou 15","menaces":"immunologie menacé","ghi_nom":"HEGP","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[260801.59469243165,6247734.357381424]},"properties":{"id":514,"code_region":"IDF","departement":"75","nom_hopital":"HIA Val de Grâce Paris 5","suppressions":"chirurgie traumatologique fermé;neurologie fermé;ophtalmologie fermé;urgences fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[261479.8345220057,6250240.6909505585]},"properties":{"id":443,"code_region":"IDF","departement":"75","nom_hopital":"Hôtel-Dieu Paris - 75","suppressions":"2017 : urgences ophtalmiques transféré;2013 : urgences fermé;2000 : maternité fermé","menaces":"2012 : chirurgie de nuit menacé;2011 : chirurgie réduit (autre);2011 : radiologie réduit (autre);2011 : urgences menacé;chirurgie fusionné","victoires":"2014 : urgences maintenu","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[266510.79295457504,6248477.538965876]},"properties":{"id":447,"code_region":"IDF","departement":"75","nom_hopital":"Maternité Les Bluets Paris 12 ","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[259333.2634411607,6246027.186450075]},"properties":{"id":528,"code_region":"IDF","departement":"75","nom_hopital":"Maternité ND Bon-secours Paris 14","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[257921.1576694214,6246717.549271821]},"properties":{"id":439,"code_region":"IDF","departement":"75","nom_hopital":"Paris 14 Pédopsychiatrie\n","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[261882.39905532356,6250525.911528747]},"properties":{"id":21,"code_region":"IDF","departement":"75","nom_hopital":"Paris APHP\n37 hôpitaux et 676 services cliniques en 2009","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[267756.52357682586,6248225.4244968]},"properties":{"id":519,"code_region":"IDF","departement":"75","nom_hopital":"Paris Armand Trousseau\r\n","menaces":"2012 : maxillofacial menacé;2012 : ORL menacé;2011 : pédiatrie menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[265153.42533522507,6255024.4801014485]},"properties":{"id":446,"code_region":"IDF","departement":"75","nom_hopital":"Paris Centre dentaire Archereau\n19°","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[272909.1992398016,6240051.507338843]},"properties":{"id":127,"code_region":"IDF","departement":"75","nom_hopital":"Paris Henri Mondor\r\n","menaces":"2012 : neurochirurgie menacé;gériatrie menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[266620.6234034883,6248006.837041966]},"properties":{"id":520,"code_region":"IDF","departement":"75","nom_hopital":"Paris Pierre Rouquès\n","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[301183.07335417345,6254122.756159513]},"properties":{"id":80,"code_region":"IDF","departement":"77","nom_hopital":"CH Lagny - 77","suppressions":"2011 : radiothérapie fermé;2009 : médecine nucléaire fermé;radiologie privatisé;stérilisation privatisé","menaces":"urgences de nuit réduit (autre)","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[292788.6644439209,6255463.5931015955]},"properties":{"id":754,"code_region":"IDF","departement":"77","nom_hopital":"CH Marne Cantereine - 77","suppressions":"2011 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[281247.9163276997,6246585.559201349]},"properties":{"id":545,"code_region":"IDF","departement":"77","nom_hopital":"CH Saint-Camille Bry-sur-Marne - 77","menaces":"2011 : maternité fusionné","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[300288.035658485,6175460.524447774]},"properties":{"id":100,"code_region":"IDF","departement":"77","nom_hopital":"CHSSM Fontainebleau - 77","suppressions":"2016 : maternité fermé","menaces":"2021 : SMUR interrompu;2018 : ophtalmologie menacé;2018 : urologie menacé;2012 : urgences de nuit menacé","victoires":"2013 : chirurgie victoire","ghi_nom":"CHSSM","ght_nom":"GHT 77 - Sud","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[328690.65985163447,6170963.342688431]},"properties":{"id":101,"code_region":"IDF","departement":"77","nom_hopital":"CHSSM Montereau - 77","suppressions":"2019 : pédiatrie transféré;2012 : néonatalogie fermé","menaces":"2019 : maternité menacé;2015 : réanimation réduit (lits fermés);2012 : maternité réduit (autre)","ghi_nom":"CHSSM","ght_nom":"GHT 77 - Sud","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[300910.5230643507,6150764.89439453]},"properties":{"id":53,"code_region":"IDF","departement":"77","nom_hopital":"CHSSM Nemours - 77","suppressions":"2016 : EHPAD fermé;2000 : chirurgie fermé","menaces":"réanimation transformé","ghi_nom":"CHSSM","ght_nom":"GHT 77 - Sud","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[300739.75354357436,6175734.238104308]},"properties":{"id":871,"code_region":"IDF","departement":"77","nom_hopital":"Clinique de la Forêt Fontainebleau - 77","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[308591.35794419004,6249194.404464245]},"properties":{"id":753,"code_region":"IDF","departement":"77","nom_hopital":"GHEF Marne-La-Vallée - Jossigny 77","suppressions":"2020 : chirurgie orthopédique et traumatologique transféré","menaces":"2019 : pédiatrie menacé","ghi_nom":"GHEF","ght_nom":"GHT 77 - Nord","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[343289.8307009786,6243048.5454222625]},"properties":{"id":99,"code_region":"IDF","departement":"77","nom_hopital":"GHEF René Arbeltier Coulommier - 77","suppressions":"2020 : chirurgie viscérale et orthopédique transféré","menaces":"2013 : médecine réduit (lits fermés)","ghi_nom":"GHEF","ght_nom":"GHT 77 - Nord","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[320375.3615630704,6267811.681217638]},"properties":{"id":98,"code_region":"IDF","departement":"77","nom_hopital":"GHEF Saint-Faron Meaux - 77","menaces":"2019 : pédiatrie menacé;2018 : SMUR interrompu;2018 : urgences interrompu;2012 : urgences de nuit réduit (autre);2011 : chirurgie viscérale et orthopédique réduit (autre)","ghi_nom":"GHEF","ght_nom":"GHT 77 - Nord","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[348255.3380256002,6262708.548335041]},"properties":{"id":752,"code_region":"IDF","departement":"77","nom_hopital":"GHEP Jouarre - 77","ghi_nom":"GHEF","ght_nom":"GHT 77 - Nord","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[290025.2755774036,6222924.605203043]},"properties":{"id":775,"code_region":"IDF","departement":"77","nom_hopital":"GHSIF Brie-Comte-Robert - 77","ghi_nom":"GHSIF","ght_nom":"GHT 77 - Sud","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[294232.0560016331,6200199.92844699]},"properties":{"id":46,"code_region":"IDF","departement":"77","nom_hopital":"GHSIF Melun - 77","suppressions":"2015 : chirurgie privatisé;radiologie privatisé","menaces":"2011 : psychiatrie réduit (autre);2009 : bloc chirurgical réduit (autre)","ghi_nom":"","ght_nom":"GHT 77 - Sud","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[236638.0929326932,6246331.067240395]},"properties":{"id":879,"code_region":"IDF","departement":"78","nom_hopital":"CH de Versailles - Le Chesnay - 78","suppressions":"2019 : urgences fermé","menaces":"2022 : urgences menacé;2021 : pédiatrie menacé;2002 : médecine réduit (lits fermés);2002 : ORL réduit (autre)","ghi_nom":"","ght_nom":"GHT Yvelines Sud","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[215506.3415710777,6272483.166389284]},"properties":{"id":880,"code_region":"IDF","departement":"78","nom_hopital":"CHIMM Les Mureaux - 78","suppressions":"2021 : pédopsychiatrie fermé;2018 : réanimation fermé;2016 : oncologie transféré","menaces":"2020 : pédopsychiatrie menacé;2017 : réanimation menacé","ghi_nom":"CHIMM","ght_nom":"GHT Yvelines Nord","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[212808.19953517217,6275325.02528898]},"properties":{"id":130,"code_region":"IDF","departement":"78","nom_hopital":"CHIMM Meulan - 78","suppressions":"2022 : maternité fermé;2021 : pédopsychiatrie fermé;2018 : réanimation fermé;2016 : oncologie transféré","menaces":"2017 : réanimation menacé","ghi_nom":"CHIMM","ght_nom":"GHT Yvelines Nord","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[225149.71341644655,6261085.38355293]},"properties":{"id":135,"code_region":"IDF","departement":"78","nom_hopital":"CHIPSG Poissy - 78","menaces":"2022 : urgences réduit (autre);2014 : psychiatrie menacé;2013 : maternité menacé;centre IVG menacé","ghi_nom":"CHIPSG","ght_nom":"GHT Yvelines Nord","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[233081.29120647445,6257736.175400569]},"properties":{"id":31,"code_region":"IDF","departement":"78","nom_hopital":"CHIPSG Saint-Germain-en-Laye – 78","suppressions":"2018 : médecine interne fermé;2010 : réanimation fermé;2010 : urgences fermé;2006 : cardiologie transféré;2006 : pédiatrie transféré;2003 : maternité fermé","menaces":"2002 : urgences interrompu","ghi_nom":"CHIPSG","ght_nom":"GHT Yvelines Nord","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[216796.46942760822,6244963.22189381]},"properties":{"id":766,"code_region":"IDF","departement":"78","nom_hopital":"CH Plaisir - 78","ghi_nom":"","ght_nom":"GHT Yvelines Sud","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[234308.13951928917,6274186.468348994]},"properties":{"id":881,"code_region":"IDF","departement":"78","nom_hopital":"CH Privé Conflans Sainte-Honorine - 78","suppressions":"2001 : chirurgie fermé;2001 : maternité fermé;2001 : urgences fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[186347.1622243928,6274529.23092116]},"properties":{"id":131,"code_region":"IDF","departement":"78","nom_hopital":"CH Quesnais - Mantes-La-Jolie - 78","suppressions":"2012 : urgences viscérales et orthopédiques fermé","menaces":"2022 : chirurgie menacé;2022 : urgences menacé;2019 : pédiatrie menacé;2019 : SMUR réduit (autre);2019 : urgences pédiatriques menacé;2018 : soins intensifs interrompu;2015 : SMUR interrompu;2015 : soins de suite et rééducation menacé;2012 : urgences viscérales et orthopédiques réduit (autre);2010 : coronographie menacé;cardiologie interventionnelle menacé","ghi_nom":"","ght_nom":"GHT Yvelines Nord","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[203170.08441415412,6215908.61205417]},"properties":{"id":621,"code_region":"IDF","departement":"78","nom_hopital":"Ch Rambouillet - 78","menaces":"2022 : urgences réduit (autre);2019 : urgences interrompu;2011 : urgences de nuit menacé","ghi_nom":"","ght_nom":"GHT Yvelines Sud","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[238761.99693220094,6265722.107850524]},"properties":{"id":133,"code_region":"IDF","departement":"78","nom_hopital":"Maisons Laffitte - 78\nHôpital des Courses menacé 2013\nHôpital privé non lucratif","suppressions":"2013 : chirurgie fermé;chirurgie viscérale et urologique fermé","menaces":"chirurgie orthopédique et réparatrice réduit (lits fermés);soins continus réduit (lits fermés)","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[230109.688546564,6240923.103471195]},"properties":{"id":136,"code_region":"IDF","departement":"78","nom_hopital":"Saint Cyr l'École - 78","suppressions":"2013 : unité de maternologie fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[240260.90106476544,6264904.978469252]},"properties":{"id":134,"code_region":"IDF","departement":"78","nom_hopital":"Sartrouville - 78","suppressions":"centre de santé fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[219910.83512390507,6271315.006116647]},"properties":{"id":132,"code_region":"IDF","departement":"78","nom_hopital":"Verneuil sur Seine - 78","suppressions":"chirurgie fermé;maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[265963.71637382056,6225376.52079113]},"properties":{"id":108,"code_region":"IDF","departement":"91","nom_hopital":"Athis-Mons - 91","suppressions":"2017 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[249499.44625085604,6204593.451896789]},"properties":{"id":113,"code_region":"IDF","departement":"91","nom_hopital":"CH Arpajon - 91","suppressions":"2015 : réanimation fermé","menaces":"2013 : réanimation menacé","victoires":"2020 : réanimation maintenu","ghi_nom":"CHSF","ght_nom":"GHT Ile-de-France Sud","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[268625.4664089869,6219903.885998465]},"properties":{"id":19,"code_region":"IDF","departement":"91","nom_hopital":"CH Dupuytren Draveil - 91","ghi_nom":"","ght_nom":"GHU Henri Mondor","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[270781.09649060684,6193959.446542716]},"properties":{"id":292,"code_region":"IDF","departement":"91","nom_hopital":"CH G. Clémenceau Champcueil - 91","ghi_nom":"","ght_nom":"GHU Henri Mondor","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[268811.43612735346,6212797.283943885]},"properties":{"id":869,"code_region":"IDF","departement":"91","nom_hopital":"CH Louise Michel Évry - 91","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[222594.66430561608,6196135.724905633]},"properties":{"id":114,"code_region":"IDF","departement":"91","nom_hopital":"CHSE Dourdan - 91","suppressions":"2015 : maternité transféré","menaces":"2020 : pédiatrie menacé;2020 : soins continus menacé;2020 : urgences menacé","victoires":"2021 : pédiatrie victoire;2014 : maternité réouvert","ghi_nom":"CHSE CH Sud Essonne","ght_nom":"GHT Ile-de-France Sud","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[239980.01455564052,6180999.1011165995]},"properties":{"id":598,"code_region":"IDF","departement":"91","nom_hopital":"CHSE Étampes - 91","ghi_nom":"CHSE CH Sud Essonne","ght_nom":"GHT Ile-de-France Sud","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[273482.2294276204,6210649.53982176]},"properties":{"id":112,"code_region":"IDF","departement":"91","nom_hopital":"CHSF - Corbeil  91","suppressions":"2009 : radiothérapie fermé","menaces":"2021 : urgences pédiatriques de nuit interrompu","ghi_nom":"CHSF CH Sud Francilien","ght_nom":"GHT Ile-de-France Sud","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[240715.72095278284,6180636.0252322955]},"properties":{"id":422,"code_region":"IDF","departement":"91","nom_hopital":"EPS Étampes – 91","suppressions":"psychiatrie transféré","ghi_nom":"CHSE CH Sud Essonne","ght_nom":"GHT Ile-de-France Sud","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[264231.2070577736,6222684.9100719895]},"properties":{"id":110,"code_region":"IDF","departement":"91","nom_hopital":"GHNE de Juvisy - 91","suppressions":"2009 : chirurgie fermé;2009 : maternité fermé;2009 : soins intensifs fermé;2008 : ORL fermé;2008 : urologie fermé;centre IVG fermé","menaces":"2009 : médecine interrompu;2009 : soins de suite et rééducation réduit (lits fermés)","ghi_nom":"GHNE","ght_nom":"GHT Nord Essonne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[255083.67691369037,6222703.027659944]},"properties":{"id":111,"code_region":"IDF","departement":"91","nom_hopital":"GHNE Longjumeau - 91","suppressions":"2014 : soins de suite fermé","menaces":"2024 : chirurgie menacé;2024 : médecine menacé;2024 : obstétrique menacé;2021 : urgences pédiatriques interrompu;2014 : néonatalité réduit (lits fermés)","victoires":"2014 : néonatalité maintenu","ghi_nom":"GHNE","ght_nom":"GHT Nord Essonne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[243417.65004808083,6223955.551374838]},"properties":{"id":109,"code_region":"IDF","departement":"91","nom_hopital":"GHNE Orsay - 91","suppressions":"2020 : pédiatrie fermé","ghi_nom":"GHNE","ght_nom":"GHT Nord Essonne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[257178.71560511366,6217412.221753504]},"properties":{"id":760,"code_region":"IDF","departement":"91","nom_hopital":"GHUPN Perray-Vaucluse Épinay-sur-Orge - 91","ghi_nom":"GHUPN","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[255136.77831981727,6229333.1624390185]},"properties":{"id":874,"code_region":"IDF","departement":"91","nom_hopital":"Hôpital privé Jacques Cartier Massy - 91","suppressions":"2015 : maternité transféré","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[249053.98644052094,6249284.447184453]},"properties":{"id":424,"code_region":"IDF","departement":"92","nom_hopital":"Boulogne Billancourt - 92\r\nCH Ambroise Paré","suppressions":"2009 : chirurgie fermé;2009 : réanimation fermé;chirurgie digestive transféré","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[245702.23839105395,6256558.179220457]},"properties":{"id":91,"code_region":"IDF","departement":"92","nom_hopital":"CASH Nanterre - 92","suppressions":"2017 : cardiologie fermé;2016 : chirurgie fermé;2015 : pneumologie fermé;2015 : réanimation fermé","menaces":"2011 : chirurgie menacé;2011 : réanimation menacé","victoires":"2011 : maternité maintenu;2011 : urgences de nuit maintenu","ghi_nom":"","ght_nom":"GHT Sud Val d’Oise-Nord Hauts de Seine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[247030.37323412122,6248390.623080347]},"properties":{"id":92,"code_region":"IDF","departement":"92","nom_hopital":"CH4V Saint-Cloud - 92","menaces":"2008 : réanimation interrompu","ghi_nom":"CH4V","ght_nom":"GHT Hauts-de-Seine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[245224.45976329554,6244460.579821932]},"properties":{"id":868,"code_region":"IDF","departement":"92","nom_hopital":"CH4V Sèvres - 92","ghi_nom":"CH4V","ght_nom":"GHT Hauts-de-Seine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[254900.56898830042,6240932.969427837]},"properties":{"id":94,"code_region":"IDF","departement":"92","nom_hopital":"Châtillon - 92","menaces":"2013 : centre médico-psychologique (CMP) menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[243435.48538645732,6253932.042317853]},"properties":{"id":2,"code_region":"IDF","departement":"92","nom_hopital":"CHD Stell Rueil-Malmaison - 92","suppressions":"2016 : maternité fermé;2012 : urgences fermé","ghi_nom":"","ght_nom":"GHT Hauts-de-Seine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[248918.4633214255,6262041.273383693]},"properties":{"id":86,"code_region":"IDF","departement":"92","nom_hopital":"CH Louis Mourier Colombes - 92","suppressions":"2012 : médecine nucléaire fermé","menaces":"2022 : urgences menacé;centre IVG menacé;urgences de nuit menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[241551.3271769541,6247509.456031964]},"properties":{"id":544,"code_region":"IDF","departement":"92","nom_hopital":"CH Raymond Poincaré Garches - 92","suppressions":"2014 : oncologie pédiatrique fermé","menaces":"chirurgie menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[251549.67792772126,6257209.610073019]},"properties":{"id":88,"code_region":"IDF","departement":"92","nom_hopital":"CHRDS Courbevoie - 92","suppressions":"2000 : maternité fermé;psychiatrie transféré","ghi_nom":"CHRDS","ght_nom":"GHT Hauts-de-Seine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[251836.65900959124,6256274.518358388]},"properties":{"id":90,"code_region":"IDF","departement":"92","nom_hopital":"CHRDS Neuilly-sur-Seine – 92","suppressions":"2016 : chirurgie fermé;2016 : maternité fermé","menaces":"urgences menacé","ghi_nom":"CHRDS","ght_nom":"GHT Hauts-de-Seine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[257126.4752054846,6259277.4558682535]},"properties":{"id":543,"code_region":"IDF","departement":"92","nom_hopital":"CHU Beaujon Clichy - 92","suppressions":"urgences de nuit fermé","menaces":"2012 : neurochirurgie menacé;SMUR menacé;urgences 24h/24h menacé;urgences psychiatriques menacé","ghi_nom":"GHUNUP","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[257802.79196722768,6237433.440529161]},"properties":{"id":96,"code_region":"IDF","departement":"92","nom_hopital":"Clin. A. Paré Bourg-la-Reine - 92","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[254660.92651252562,6256687.059079711]},"properties":{"id":89,"code_region":"IDF","departement":"92","nom_hopital":"Hôpital franco-britannique Levallois-Perret - 92","menaces":"protection maternelle et infantile menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[250978.85483490294,6239041.331017609]},"properties":{"id":95,"code_region":"IDF","departement":"92","nom_hopital":"HUPS Antoine Béclère - Clamart - 92","suppressions":"2017 : centre IVG fermé;2012 : cardiologie transféré;2012 : pneumologie transféré","menaces":"2019 : urgences de nuit menacé;2012 : chirurgie menacé;2012 : urgences menacé","ghi_nom":"HUPS","ght_nom":"HUPS","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[265135.31285001006,6260379.304997253]},"properties":{"id":69,"code_region":"IDF","departement":"93","nom_hopital":"Aubervilliers - 93\nHôpital européen La Roseraie","suppressions":"2015 : radiothérapie fermé","menaces":"2018 : centre d'accueil et de crise réduit (autre)","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[264287.1449415872,6263925.025346965]},"properties":{"id":104,"code_region":"IDF","departement":"93","nom_hopital":"CH Delafontaine Saint Denis - 93","suppressions":"2020 : ligne SMUR fermé","menaces":"2022 : urgences pédiatriques interrompu;2021 : gynéco-obstétrique réduit (lits fermés);2018 : centre d'accueil et de crise menacé","ghi_nom":"","ght_nom":"GHT Plaine de France","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[273087.796285126,6254123.05183234]},"properties":{"id":107,"code_region":"IDF","departement":"93","nom_hopital":"CHIAG Montreuil - 93","suppressions":"urologie transféré","menaces":"2020 : centre de santé menacé;chirurgie 24/24 menacé;chirurgie d'urgence menacé;dialyse menacé;ophtalmologie menacé;réanimation néonatale menacé","ghi_nom":"CHIAG","ght_nom":"GHT 93 EST","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[281048.71854357835,6266902.744240605]},"properties":{"id":103,"code_region":"IDF","departement":"93","nom_hopital":"CHI Robert Ballanger Aulnay/Bois - 93","menaces":"2022 : urgences interrompu;2022 : urgences menacé;2019 : urgences pédiatriques menacé","ghi_nom":"","ght_nom":"GHT 93 EST","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[249566.5791680925,6254235.630611989]},"properties":{"id":638,"code_region":"IDF","departement":"93","nom_hopital":"CHRDS Puteaux - 93","ghi_nom":"CHRDS","ght_nom":"GHT Hauts-de-Seine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[257523.79207074706,6266637.038729304]},"properties":{"id":102,"code_region":"IDF","departement":"93","nom_hopital":"Épinay sur Seine - 93","menaces":"2009 : maternité menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[283670.3884721138,6251033.023384754]},"properties":{"id":637,"code_region":"IDF","departement":"93","nom_hopital":"EPSM Ville-Évrard Neuilly sur Marne - 93","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[279405.97569376987,6257809.79287239]},"properties":{"id":866,"code_region":"IDF","departement":"93","nom_hopital":"GHIRM Le Raincy- - 93","suppressions":"2000 : cardiologie fermé;2000 : urgences fermé","ghi_nom":"","ght_nom":"GHT 93 EST","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[286373.85620346986,6257502.647771279]},"properties":{"id":105,"code_region":"IDF","departement":"93","nom_hopital":"GHIRM Montfermeil - 93","suppressions":"2011 : cuisine sous-traité;2011 : lingerie sous-traité","menaces":"2012 : stérilisation menacé","ghi_nom":"GHIRM","ght_nom":"GHT 93 EST","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[269848.2705887784,6260397.531334275]},"properties":{"id":449,"code_region":"IDF","departement":"93","nom_hopital":"GHU Avicenne Bobigny - 93","menaces":"2021 : unité médico-judiciaire menacé;2021 : urgences menacé;IVG menacé;planning familial menacé","ghi_nom":"GHU 93","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[276938.3217618615,6259533.175217705]},"properties":{"id":106,"code_region":"IDF","departement":"93","nom_hopital":"GHU Jean Verdier Bondy - 93","suppressions":"2017 : maternité fermé","ghi_nom":"GHU 93-95","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[279206.52282312885,6263786.213020613]},"properties":{"id":619,"code_region":"IDF","departement":"93","nom_hopital":"GHU René-Muret Sevran - 93","ghi_nom":"GHU 93","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[268933.40740207164,6254415.783713866]},"properties":{"id":39,"code_region":"IDF","departement":"93","nom_hopital":"Maternité Les Lilas - 93","menaces":"2022 : maternité menacé","victoires":"2022 : maternité maintenu","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[261379.47249135992,6236251.166476193]},"properties":{"id":128,"code_region":"IDF","departement":"94","nom_hopital":"Chevilly-Larue - 94","menaces":"2015 : centre de lutte contre le cancer fusionné","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[272480.6185588675,6229294.652018627]},"properties":{"id":129,"code_region":"IDF","departement":"94","nom_hopital":"CHI Aubrac Villeneuve-Saint-Georges - 94","suppressions":"2021 : unité psychiatrique fermé;2019 : bionettoyage sous-traité","ghi_nom":"","ght_nom":"GHT Val de Marne Est","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[265717.0746411325,6243294.092990222]},"properties":{"id":549,"code_region":"IDF","departement":"94","nom_hopital":"CH Jean Rostand Ivry   - 94","suppressions":"2009 : centre IVG fermé;2009 : maternité transféré;2008 : médecine physique et de réadaptation fermé;2004 : cardiologie rythmologique transféré","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[287204.9995290605,6238869.394397999]},"properties":{"id":867,"code_region":"IDF","departement":"94","nom_hopital":"CH Les Murets La Queue-en-Brie – 94","ghi_nom":"","ght_nom":"GHT 94 Nord","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[262449.2374664547,6239311.863147064]},"properties":{"id":551,"code_region":"IDF","departement":"94","nom_hopital":"CH Paul Guiraud Villejuif - 94","suppressions":"2021 : unité d'hospitalisation spécialement aménagée-UHSA fermé;2012 : laboratoire fermé","menaces":"psychiatrie menacé","ghi_nom":"","ght_nom":"GHT PSY Sud Paris","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[261263.97681261972,6242759.319850094]},"properties":{"id":872,"code_region":"IDF","departement":"94","nom_hopital":"CHPEA Gentilly - 94","ghi_nom":"","ght_nom":"GHT PSY Sud Paris","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[273692.76941300917,6239061.004834581]},"properties":{"id":547,"code_region":"IDF","departement":"94","nom_hopital":"CHU A. Chenevier Créteil - 94","menaces":"2021 : psychiatrie réduit (lits fermés);2017 : chirurgie hépatique menacé","ghi_nom":"GHU Henri Mondor","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[266707.7278457468,6241684.334765655]},"properties":{"id":123,"code_region":"IDF","departement":"94","nom_hopital":"CHU Charles Foix Ivry - 94","menaces":"psychiatrie de la personne âgée réduit (lits fermés);rééducation neurologique menacé","ghi_nom":"","ght_nom":"GHU Sorbonne Université","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[273002.01442564506,6237852.216240139]},"properties":{"id":548,"code_region":"IDF","departement":"94","nom_hopital":"CHU Émile ROUX - Créteil 94","menaces":"2019 : gériatrie menacé","ghi_nom":"","ght_nom":"GHU Henri Mondor","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[272987.7733327635,6240304.233319458]},"properties":{"id":546,"code_region":"IDF","departement":"94","nom_hopital":"CHU Henri Mondor Créteil - 94","suppressions":"2022 : service intersectoriel de psychiatrie transféré;2022 : urgences psychiatriques fermé","menaces":"2022 : chirurgie cardiaque menacé;2021 : psychiatrie réduit (lits fermés);2021 : transplantation cardiaque menacé;2017 : chirurgie hépatique menacé","victoires":"2019 : SAMU victoire;2017 : chirurgie hépatique et cardiaque maintenu;2011 : chirurgie cardiaque maintenu","ghi_nom":"","ght_nom":"GHU Henri Mondor","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[262155.63037513196,6243680.282281394]},"properties":{"id":873,"code_region":"IDF","departement":"94","nom_hopital":"Clinique Gentily","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[269427.0609400404,6241894.387465796]},"properties":{"id":125,"code_region":"IDF","departement":"94","nom_hopital":"Clin. La Concorde Alfortville - 94","suppressions":"2009 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[278744.12758314237,6233272.073190017]},"properties":{"id":899,"code_region":"IDF","departement":"94","nom_hopital":"CMP Mozart Boissy-Saint-Léger - 94","suppressions":"unité de jour psychiatrie fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[270488.538780373,6244104.206323762]},"properties":{"id":595,"code_region":"IDF","departement":"94","nom_hopital":"HSM Esquirol Saint Maurice - 94","suppressions":"2016 : unité de personnes polyhandicapées fermé;hôpital de jour fermé","menaces":"2021 : psychiatrie réduit (autre)","ghi_nom":"HSM","ght_nom":"GHT 94 Nord","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[270336.85559051886,6244504.069957594]},"properties":{"id":122,"code_region":"IDF","departement":"94","nom_hopital":"HSM Saint Maurice - 94","suppressions":"2022 : unité d'entrants fermé;2014 : crèches fermé","menaces":"2021 : unité psychiatrique interrompu","victoires":"maternité maintenu","ghi_nom":"HSM","ght_nom":"GHT 94 Nord","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[262401.79540795425,6242684.628211452]},"properties":{"id":124,"code_region":"IDF","departement":"94","nom_hopital":"HUPS CHUR Bicêtre - 94","menaces":"2021 : hépatologie pédiatrique réduit (lits fermés);2021 : services neurologiques transformé;2012 : centre IVG menacé;unité psychiatrique de suicidologie réduit (lits fermés)","ghi_nom":"","ght_nom":"HUPS","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[263087.1500508673,6240139.091710969]},"properties":{"id":550,"code_region":"IDF","departement":"94","nom_hopital":"HUPS Paul Brousse - Villejuif - 94","menaces":"centre hépatobiliaire menacé;soins longue durée réduit (lits fermés);soins longue durée réduit (autre);thérapies aigües menacé;transferts court séjour menacé;unité spécialisée Alzheimer réduit (lits fermés)","ghi_nom":"HUPS","ght_nom":"HUPS","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[262810.3612388649,6239945.09943239]},"properties":{"id":126,"code_region":"IDF","departement":"94","nom_hopital":"IGR Groussy Villejuif  - 94","menaces":"2015 : cancérologie fusionné","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[276417.2659787201,6232587.655377765]},"properties":{"id":73,"code_region":"IDF","departement":"94","nom_hopital":"Limeil-Brévannes - Hôpital Émile Roux - 94","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[269297.6176171707,6248302.977007979]},"properties":{"id":120,"code_region":"IDF","departement":"94","nom_hopital":"Saint Mandé - 94\nHôpital d'instruction des armées Bégin","suppressions":"2015 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[233769.1446023472,6283514.064733687]},"properties":{"id":117,"code_region":"IDF","departement":"95","nom_hopital":"CALM Pontoise - 95","menaces":"2019 : maison de naissance menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[226667.43424258425,6283776.959792813]},"properties":{"id":207,"code_region":"IDF","departement":"95","nom_hopital":"Cergy - 95","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[272721.5423034626,6272546.593651159]},"properties":{"id":118,"code_region":"IDF","departement":"95","nom_hopital":"CH Gonesse - 95","suppressions":"2011 : cardiologie interventionnelle fermé","menaces":"2021 : réanimation menacé;2019 : médecine interne menacé;angioplastie coronarienne menacé","ghi_nom":"","ght_nom":"GHT Sud Val-d’Oise Nord Hauts de seine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[233408.1151493378,6285691.258157791]},"properties":{"id":552,"code_region":"IDF","departement":"95","nom_hopital":"CH René Dubos Pontoise - 95","suppressions":"chirurgie fermé;CTS privatisé;nettoyage sous-traité;OPHSTO fermé;réanimation fermé","menaces":"2020 : EHPAD réduit (lits fermés);2019 : soins palliatifs menacé;chirurgie viscérale réduit (autre);diabétologie réduit (autre);gynécologie réduit (lits fermés);orthopédie réduit (autre);pneumologie réduit (autre);rhumatologie réduit (autre)","ghi_nom":"","ght_nom":"CH René Dubos GHT Nord-Ouest Vexin Val-d’Oise","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[260171.11774082872,6283016.681823768]},"properties":{"id":326,"code_region":"IDF","departement":"95","nom_hopital":"CHS Prévot - Moisselles - 95","menaces":"2021 : psychiatrie menacé","victoires":"hôpital psychiatrique victoire","ghi_nom":"","ght_nom":"GHT Sud Val d’Oise-Nord Hauts de Seine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[248962.619727112,6265444.41943018]},"properties":{"id":119,"code_region":"IDF","departement":"95","nom_hopital":"CH Victor Dupouy Argenteuil - 95","suppressions":"2011 : cardiologie interventionnelle fermé;1999 : SMUR pédiatrique fermé","menaces":"2012 : radiothérapie menacé;2011 : rythmologie menacé;2009 : radiothérapie interrompu;2001 : gastro-entérologie interrompu;2001 : pneumologie interrompu;hématologie menacé","victoires":"2013 : radiothérapie maintenu;2011 : rythmologie maintenu","ghi_nom":"","ght_nom":"GHT Sud Val d’Oise-Nord Hauts de Seine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[249322.6414934583,6266276.434457902]},"properties":{"id":878,"code_region":"IDF","departement":"95","nom_hopital":"Clinique Héloïse Argenteuil - 95","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[254936.910781365,6299464.221413444]},"properties":{"id":115,"code_region":"IDF","departement":"95","nom_hopital":"GHCPO Beaumont sur Oise - 95","suppressions":"2019 : réanimation fermé;2019 : réanimation transféré;2019 : soins continus fermé;2019 : soins intensifs transféré","menaces":"2019 : néonatalogie réduit (autre);2018 : pédiatrie menacé;2018 : réanimation menacé;2018 : rééducation menacé","ghi_nom":"GHCPO Carnelle Portes de l'Oise","ght_nom":"GHT Nord-Ouest Vexin Val-d’Oise","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[260000.81637592436,6292630.126900533]},"properties":{"id":230,"code_region":"IDF","departement":"95","nom_hopital":"GHCPO Saint Martin du Tertre - 95","suppressions":"2021 : soins longue durée fermé;soins de suite et rééducation fermé","ghi_nom":"GHCPO Carnelle Portes de l'Oise","ght_nom":"GHT Nord-Ouest Vexin Val-d’Oise","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[258233.85877049345,6272600.95679266]},"properties":{"id":877,"code_region":"IDF","departement":"95","nom_hopital":"GHEM Montmorency - 95","suppressions":"2014 : maternité fermé","ghi_nom":"GHEM","ght_nom":"GHT Sud Val-d’Oise Nord Hauts de Seine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[252806.13838757557,6275109.633133105]},"properties":{"id":876,"code_region":"IDF","departement":"95","nom_hopital":"GHEM Simone Veil Eaubonne – 95","ghi_nom":"GHEM","ght_nom":"GHT Sud Val-d’Oise Nord Hauts de Seine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[198642.04451360554,6301219.356516191]},"properties":{"id":875,"code_region":"IDF","departement":"95","nom_hopital":"GHIV Magny-en-Vexin – 95","ghi_nom":"GHIV","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[220771.9909276107,6299522.806910154]},"properties":{"id":116,"code_region":"IDF","departement":"95","nom_hopital":"GHIV Marines - 95","suppressions":"2016 : restauration sous-traité","ghi_nom":"GHIV","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[265802.3722283644,6276154.173313247]},"properties":{"id":397,"code_region":"IDF","departement":"95","nom_hopital":"Villiers-le-Bel - 95\nHôpital Charles Richet\n","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[267452.90958546475,6275036.93140181]},"properties":{"id":553,"code_region":"IDF","departement":"95","nom_hopital":"Villiers-le-Bel - 95\r\nHôpital gériatrique Adélaïde-Hautval","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6168127.655640599,-2426090.107498547]},"properties":{"id":463,"code_region":"LAR","departement":"974","nom_hopital":"Saint-Louis de la Réunion","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-6798225.296590085,1643959.146487891]},"properties":{"id":461,"code_region":"MAR","departement":"972","nom_hopital":"Châteauboeuf - Fort-de-France - 97","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-6790880.308971169,1644919.2310125732]},"properties":{"id":462,"code_region":"MAR","departement":"972","nom_hopital":"CH Mangot Vulcin - Le Lamentin - 97","suppressions":"2012 : urgences de nuit fermé;2001 : pédiatrie fermé;maternité fermé","menaces":"2012 : maternité menacé","ghi_nom":"CHUM","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[13326.972602799488,5722090.029923466]},"properties":{"id":603,"code_region":"NAQ","departement":"16","nom_hopital":"CH Angoulême - 16","ghi_nom":"","ght_nom":"GHT de Charente","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[74551.73395141018,5781083.296294222]},"properties":{"id":437,"code_region":"NAQ","departement":"16","nom_hopital":"CH Confolens - 16","suppressions":"2008 : chirurgie fermé;1993 : maternité fermé","menaces":"2015 : urgences menacé","ghi_nom":"","ght_nom":"GHT de Charente","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[21758.25452192175,5784809.4832463525]},"properties":{"id":362,"code_region":"NAQ","departement":"16","nom_hopital":"CH Ruffec - 16","suppressions":"2022 : cuisine transféré;2021 : soins de suite et rééducation fermé;2018 : chirurgie ambulatoire fermé;2018 : IVG fermé;2018 : soins ambulatoires fermé;1994 : maternité fermé","menaces":"2021 : médecine interrompu;2020 : soins de suite et rééducation interrompu;2019 : SMUR menacé;2018 : SMUR réduit (autre);2017 : soins ambulatoires sous anesthésie générale interrompu;2015 : urgences interrompu","victoires":"2019 : mammographie victoire;2013 : scanner victoire;SMUR maintenu;urgences maintenu","ghi_nom":"","ght_nom":"GHT Charente","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-36091.93752446768,5732296.7497068755]},"properties":{"id":676,"code_region":"NAQ","departement":"16","nom_hopital":"CSAPA Agora Cognac - 16","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-6613.559485346058,5715999.171118214]},"properties":{"id":604,"code_region":"NAQ","departement":"16","nom_hopital":"HGC Châteauneuf-sur-Charente - 16","suppressions":"1975 : maternité fermé","ghi_nom":"","ght_nom":"GHT de Charente","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-33156.633980616956,5730019.346161261]},"properties":{"id":66,"code_region":"NAQ","departement":"16","nom_hopital":"HGC Cognac - 16","suppressions":"2002 : chirurgie transféré;maternité fermé","menaces":"2018 : oncologie menacé","victoires":"2010 : maternité maintenu","ghi_nom":"","ght_nom":"GHT de Charente","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-19128.225209910423,5729700.1902213255]},"properties":{"id":688,"code_region":"NAQ","departement":"16","nom_hopital":"HGC Jarnac - 16","ghi_nom":"CHIPC puis HHC","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-15616.988707995239,5696353.0821362175]},"properties":{"id":367,"code_region":"NAQ","departement":"16","nom_hopital":"HSC Barbezieux - 16","suppressions":"2010 : maternité fermé","ghi_nom":"","ght_nom":"GHT Charente","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-15588.734829224626,5696481.979879055]},"properties":{"id":690,"code_region":"NAQ","departement":"16","nom_hopital":"HSC FAM Le Trèfle - Barbézieux - 16","suppressions":"2000 : maternité fermé","ghi_nom":"","ght_nom":"GHT de Charente","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-23544.331987395886,5681550.213924438]},"properties":{"id":689,"code_region":"NAQ","departement":"16","nom_hopital":"HSC Touvérac - 16","ghi_nom":"","ght_nom":"GHT de Charente","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[22022.70054000697,5726549.880135193]},"properties":{"id":74,"code_region":"NAQ","departement":"16","nom_hopital":"Polyclinique L'Isle d'Espagnac - 16","suppressions":"maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-72806.78161052988,5739826.506300015]},"properties":{"id":693,"code_region":"NAQ","departement":"17","nom_hopital":"CH de Saintonge - Saintes - 17","menaces":"2021 : bloc opératoire interrompu","ghi_nom":"","ght_nom":"GHT de Saintonge","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-48398.81443785176,5690978.100236488]},"properties":{"id":457,"code_region":"NAQ","departement":"17","nom_hopital":"CH Jonzac - 17","suppressions":"2001 : maternité fermé","ghi_nom":"","ght_nom":"GHT de Saintonge","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-118073.70313256483,5721915.614964247]},"properties":{"id":214,"code_region":"NAQ","departement":"17","nom_hopital":"CHRA - Royan - 17","suppressions":"2007 : réanimation fermé;2005 : chirurgie fermé;1985 : maternité fermé","ghi_nom":"","ght_nom":"GHT de Saintonge","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-107305.4790628925,5775085.136483019]},"properties":{"id":692,"code_region":"NAQ","departement":"17","nom_hopital":"CH Rochefort - 17","ghi_nom":"","ght_nom":"GHT Atlantique 17","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-58913.129538348156,5771855.150831591]},"properties":{"id":334,"code_region":"NAQ","departement":"17","nom_hopital":"CH Saint-Jean d'Angély - 17","suppressions":"2017 : maternité fermé","menaces":"2020 : chirurgie interrompu;2014 : maternité menacé","ghi_nom":"","ght_nom":"GHT de Saintonge","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-129660.07253520189,5805355.090019113]},"properties":{"id":20,"code_region":"NAQ","departement":"17","nom_hopital":"Clinique du Mail La Rochelle - 17","suppressions":"2017 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-114055.9744640775,5724918.749874669]},"properties":{"id":694,"code_region":"NAQ","departement":"17","nom_hopital":"Clinique Pasteur Royan - 17","suppressions":"2015 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-127302.46794435775,5806033.468645044]},"properties":{"id":691,"code_region":"NAQ","departement":"17","nom_hopital":"GHLRRA La Rochelle","ghi_nom":"","ght_nom":"GHT Atlantique 17","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[170722.0726540461,5648188.426089919]},"properties":{"id":15,"code_region":"NAQ","departement":"19","nom_hopital":"CH Brive - 19","menaces":"2019 : gériatrie réduit (autre)","ghi_nom":"","ght_nom":"GHT du Limousin","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[197215.8573167419,5663449.736816303]},"properties":{"id":335,"code_region":"NAQ","departement":"19","nom_hopital":"CH Tulle - 19","menaces":"2021 : laboratoire menacé;2016 : chirurgie menacé;2016 : pédiatrie menacé","ghi_nom":"","ght_nom":"GHT du Limousin","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[242921.39284759367,5774001.486291631]},"properties":{"id":409,"code_region":"NAQ","departement":"23","nom_hopital":"CH Aubusson- 23","menaces":"2016 : chirurgie menacé","victoires":"2016 : chirurgie victoire","ghi_nom":"","ght_nom":"GHT du Limousin","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[194875.49583234542,5772986.910064572]},"properties":{"id":410,"code_region":"NAQ","departement":"23","nom_hopital":"CH Desplas Bourganeuf - 23","suppressions":"chirurgie fermé","ghi_nom":"","ght_nom":"GHT du Limousin","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[208050.58651791068,5806681.871419957]},"properties":{"id":22,"code_region":"NAQ","departement":"23","nom_hopital":"CH Guéret - 23","suppressions":"2010 : radiothérapie fermé","victoires":"2011 : radiothérapie réouvert","ghi_nom":"","ght_nom":"GHT du Limousin","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[55308.99062881624,5598031.808917954]},"properties":{"id":248,"code_region":"NAQ","departement":"24","nom_hopital":"CH Bergerac - 24","suppressions":"2014 : pneumologie fermé","menaces":"2022 : urgences réduit (autre)","victoires":"maternité maintenu","ghi_nom":"","ght_nom":"GHT Dordogne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[23519.016615059252,5653384.393795062]},"properties":{"id":664,"code_region":"NAQ","departement":"24","nom_hopital":"CHICRDD La Meynardie Saint-Privat-en-Périgord - 24","ghi_nom":"CHICRDD","ght_nom":"GHT Dordogne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[37849.06774079803,5660171.867951321]},"properties":{"id":663,"code_region":"NAQ","departement":"24","nom_hopital":"CHICRDD Ribérac - 24","ghi_nom":"CHICRDD","ght_nom":"GHT Dordogne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[13786.489613275933,5594650.135843578]},"properties":{"id":662,"code_region":"NAQ","departement":"24","nom_hopital":"CHICRDD Saint-Aulaye - 24","ghi_nom":"CHICRDD","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[136144.6714435895,5605711.249559496]},"properties":{"id":17,"code_region":"NAQ","departement":"24","nom_hopital":"CH Leclaire Sarlat - 24","suppressions":"2021 : urgences fermé;2019 : centre de dépistage du cancer du sein fermé;2017 : stérilisation fermé;2014 : chirurgie orthopédique fermé;2013 : chirurgie conventionnelle fermé;2013 : soins continus fermé;2012 : unité de surveillance fermé","menaces":"2022 : urgences réduit (autre);2021 : maternité réduit (autre);2012 : maternité menacé","victoires":"2021 : maternité maintenu;2020 : centre de dépistage du cancer du sein réouvert;2013 : chirurgie maintenu","ghi_nom":"","ght_nom":"GHT Dordogne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[81262.08568724991,5652177.483503002]},"properties":{"id":593,"code_region":"NAQ","departement":"24","nom_hopital":"CH Périgueux - 24","menaces":"2019 : urgences menacé","victoires":"2019 : urgences victoire","ghi_nom":"","ght_nom":"GHT Dordogne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[20562.51015248522,5626708.406805856]},"properties":{"id":698,"code_region":"NAQ","departement":"24","nom_hopital":"CHS Vauclaire Montpon-Ménestérol - 24","ghi_nom":"","ght_nom":"GHT Dordogne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[79874.27589263761,5650108.90642532]},"properties":{"id":247,"code_region":"NAQ","departement":"24","nom_hopital":"Clin. Francheville Périgueux - 24","suppressions":"maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-63827.50145265083,5589904.43679752]},"properties":{"id":253,"code_region":"NAQ","departement":"33","nom_hopital":"BAHIA - HIA R. Picqué - Villenave-d'Ornon  - 33","menaces":"1990 : approvisionnement des armées menacé;hélicoptère menacé;laboratoire d'analyses biologiques menacé;odontologie menacé;parking menacé;service vaccination-santé-voyages menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-58129.749303404715,5600202.5674536675]},"properties":{"id":491,"code_region":"NAQ","departement":"33","nom_hopital":"Bordeaux - 33 \nClinique des 4 Pavillons\n","menaces":"2003 : maternité fusionné","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-73437.20783891158,5642813.250103262]},"properties":{"id":907,"code_region":"NAQ","departement":"33","nom_hopital":"CHHG Blaye - 33","menaces":"2022 : urgences interrompu","ghi_nom":"CHHG","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-27313.605249173896,5550118.635294676]},"properties":{"id":701,"code_region":"NAQ","departement":"33","nom_hopital":"CHISG Langon - 33","suppressions":"2022 : bionettoyage sous-traité","ghi_nom":"CHISG","ght_nom":"GHT Alliance de Gironde","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-4262.36483123308,5556655.246401693]},"properties":{"id":346,"code_region":"NAQ","departement":"33","nom_hopital":"CHISG La Réole - 33","suppressions":"2022 : bionettoyage sous-traité;2020 : unité de premiers soins fermé;2018 : urgences transféré;2001 : maternité fermé","ghi_nom":"CHIC Sud Gironde","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-123971.89333323274,5560880.92093571]},"properties":{"id":436,"code_region":"NAQ","departement":"33","nom_hopital":"CH Jean Hameau Arcachon - 33","suppressions":"nettoyage sous-traité;ophtalmologie privatisé;ORL privatisé;radiologie privatisé;stomatologie privatisé","menaces":"cuisine menacé;laboratoire menacé;pharmacie menacé;réanimation transformé;stérilisation menacé","ghi_nom":"","ght_nom":"GHT Alliance de Gironde","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-25448.172354525803,5608767.795765904]},"properties":{"id":249,"code_region":"NAQ","departement":"33","nom_hopital":"CH Libourne - 33","menaces":"2022 : maladies infectieuses interrompu;maternité menacé","ghi_nom":"","ght_nom":"GHT Alliance de Gironde","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[8942.467279359664,5566803.564920134]},"properties":{"id":668,"code_region":"NAQ","departement":"33","nom_hopital":"CHL Monségur - 33","suppressions":"2016 : médecine fermé;2016 : soins de suite et rééducation fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-23169.375534985214,5532745.538249167]},"properties":{"id":870,"code_region":"NAQ","departement":"33","nom_hopital":"CH Saint-Antoine Bazas - 33","suppressions":"2022 : unité de soins médico psychologique fermé","ghi_nom":"","ght_nom":"GHT Alliance de Gironde","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[24809.54048412665,5596653.371193316]},"properties":{"id":493,"code_region":"NAQ","departement":"33","nom_hopital":"CH Sainte Foy La Grande - 33","suppressions":"1990 : maternité fermé;chirurgie fermé","menaces":"2022 : urgences de nuit réduit (autre);2019 : urgences de nuit interrompu","ghi_nom":"","ght_nom":"GHT Alliance de Gironde","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-35148.766667280346,5564231.069608676]},"properties":{"id":702,"code_region":"NAQ","departement":"33","nom_hopital":"CHS Cadillac - 33","menaces":"2019 : psychiatrie réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Alliance de Gironde","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-67040.67947087328,5593877.624086753]},"properties":{"id":490,"code_region":"NAQ","departement":"33","nom_hopital":"CHS Charles Perrens Bordeaux - 33","menaces":"2014 : psychiatrie menacé","ghi_nom":"","ght_nom":"GHT Alliance de Gironde","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-67221.9543524049,5594407.021717742]},"properties":{"id":699,"code_region":"NAQ","departement":"33","nom_hopital":"CHU GH Pellegrin Bordeaux - 33","menaces":"2022 : urgences pédiatriques menacé","ghi_nom":"","ght_nom":"GHT Alliance de Gironde","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-64474.96839872888,5595477.10757751]},"properties":{"id":492,"code_region":"NAQ","departement":"33","nom_hopital":"CHU GH St André Bordeaux - 33","menaces":"2014 : urgences menacé;cardiologie réduit (autre)","ghi_nom":"GH","ght_nom":"GHT Alliance de Gironde","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-73540.11319802701,5587823.363860566]},"properties":{"id":700,"code_region":"NAQ","departement":"33","nom_hopital":"CHU GH Sud Bordeaux - 33","ghi_nom":"","ght_nom":"GHT Alliance de Gironde","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-67516.56958776148,5596261.311383833]},"properties":{"id":488,"code_region":"NAQ","departement":"33","nom_hopital":"Clinique Bel Air Bordeaux - 33","menaces":"2003 : maternité fusionné","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-70053.35087194294,5588483.7472408675]},"properties":{"id":703,"code_region":"NAQ","departement":"33","nom_hopital":"Clinique Saint-Martin Pessac - 33","suppressions":"2016 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-104357.66446346493,5669458.906896422]},"properties":{"id":287,"code_region":"NAQ","departement":"33","nom_hopital":"Lesparre - 33","menaces":"maternité menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-115744.62894891927,5421030.49639592]},"properties":{"id":429,"code_region":"NAQ","departement":"40","nom_hopital":"CHDCA Dax - 40","ghi_nom":"","ght_nom":"GHT des Landes","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-54138.30640395696,5449000.547171548]},"properties":{"id":47,"code_region":"NAQ","departement":"40","nom_hopital":"CHIMMPS Mont de Marsan - 40","suppressions":"maternité fermé","menaces":"urgences menacé","ghi_nom":"GCS","ght_nom":"GHT des Landes","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-102247.36745166036,5471909.783666436]},"properties":{"id":704,"code_region":"NAQ","departement":"40","nom_hopital":"CHIMMPS Morcenx - 40","ghi_nom":"CHI","ght_nom":"GHT des Landes","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-63592.24236290158,5427961.051637634]},"properties":{"id":705,"code_region":"NAQ","departement":"40","nom_hopital":"CH Saint-Sever - 40","suppressions":"1998 : chirurgie fermé;1998 : maternité fermé","ghi_nom":"","ght_nom":"GHT des Landes","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-26995.39345962177,5421136.15805566]},"properties":{"id":76,"code_region":"NAQ","departement":"40","nom_hopital":"ClinAdour Aire-sur-Adour - 40","suppressions":"2014 : maternité fermé","menaces":"2021 : urgences réduit (autre)","ghi_nom":"GCSPDA","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-117818.14502660988,5419528.654800113]},"properties":{"id":497,"code_region":"NAQ","departement":"40","nom_hopital":"Clin. St Vincent de Paul Dax - 40","suppressions":"2016 : bloc opératoire fermé;2016 : chirurgie fermé;2016 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[431736.32176431303,5629574.475209409]},"properties":{"id":636,"code_region":"NAQ","departement":"47","nom_hopital":"CH Émile Roux Le Puy-en-Velay - 47","suppressions":"2021 : soins palliatifs fermé","menaces":"2021 : laboratoire menacé;2021 : urgences menacé;2013 : maternité menacé","ghi_nom":"","ght_nom":"GHT Haute Loire","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[70741.44874230637,5499149.627759459]},"properties":{"id":329,"code_region":"NAQ","departement":"47","nom_hopital":"CHIAN Agen - 47","menaces":"urgences interrompu","ghi_nom":"CHIAN","ght_nom":"GHT de Lot et Garonne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[37492.006190491134,5486569.28135743]},"properties":{"id":408,"code_region":"NAQ","departement":"47","nom_hopital":"CHIAN Nérac - 47","suppressions":"chirurgie fermé","menaces":"2021 : SMUR réduit (autre);2021 : urgences interrompu","ghi_nom":"CHIAN","ght_nom":"GHT de Lot et Garonne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[18421.4275349528,5543550.680696301]},"properties":{"id":629,"code_region":"NAQ","departement":"47","nom_hopital":"CHIC Marmande - 47","menaces":"2021 : cardiologie réduit (lits fermés);2021 : chirurgie réduit (lits fermés);2021 : urgences menacé;2021 : urgences réduit (autre)","ghi_nom":"CHIC Marmande-Tonneins","ght_nom":"GHT Moyenne Garonne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[33733.73159297376,5526405.331432857]},"properties":{"id":328,"code_region":"NAQ","departement":"47","nom_hopital":"CHIC Tonneins - 47","suppressions":"chirurgie fermé","menaces":"2022 : soins de suite et rééducation réduit (lits fermés);2021 : cardiologie réduit (lits fermés);2021 : chirurgie réduit (lits fermés)","ghi_nom":"CHIC Marmande-Tonneins","ght_nom":"GHT Moyenne Garonne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[107407.63644428551,5542789.5927821705]},"properties":{"id":666,"code_region":"NAQ","departement":"47","nom_hopital":"CHL Fumel - 47","menaces":"2015 : soins longue durée menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[91172.76185401529,5525715.183522808]},"properties":{"id":667,"code_region":"NAQ","departement":"47","nom_hopital":"CHL Penne d'Agenais - 47","suppressions":"2015 : soins de suite et rééducation fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[83078.71310963001,5528645.067066923]},"properties":{"id":327,"code_region":"NAQ","departement":"47","nom_hopital":"Clin. Villeneuve sur Lot - 47","suppressions":"maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-165218.23981466054,5386646.6870337995]},"properties":{"id":200,"code_region":"NAQ","departement":"64","nom_hopital":"Bayonne - 64\r\nLafargue","suppressions":"maternité fermé","menaces":"2019 : réanimation menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-171328.72077802758,5386196.800312628]},"properties":{"id":201,"code_region":"NAQ","departement":"64","nom_hopital":"Biarritz - 64 Polyclinique Aguilera","suppressions":"maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-164804.1519536972,5385699.938513082]},"properties":{"id":912,"code_region":"NAQ","departement":"64","nom_hopital":"CHCB Bayonne - 64","menaces":"2022 : gériatrie menacé","ghi_nom":"","ght_nom":"GHT Navarre-Côte Basque","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-68660.09705973792,5341899.653693375]},"properties":{"id":203,"code_region":"NAQ","departement":"64","nom_hopital":"CH Oloron Sainte Marie - 64","suppressions":"2017 : maternité fermé;2002 : maternité transféré","menaces":"2022 : bloc opératoire réduit (autre);2022 : unité de surveillance continue réduit (autre);2022 : urgences réduit (autre);2009 : maternité menacé","ghi_nom":"","ght_nom":"GHT Béarn-Soule","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-85903.0958238194,5386185.595015848]},"properties":{"id":202,"code_region":"NAQ","departement":"64","nom_hopital":"CH Orthez - 64","suppressions":"2014 : maternité fermé","menaces":"2022 : court séjour gériatrique interrompu;2021 : SMUR interrompu","ghi_nom":"","ght_nom":"GHT Béarn-Soule","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-38714.85014954911,5361911.103719791]},"properties":{"id":456,"code_region":"NAQ","departement":"64","nom_hopital":"CH Pau - 64","suppressions":"2017 : parking privatisé","menaces":"2022 : urgences réduit (autre)","victoires":"2017 : parking maintenu","ghi_nom":"","ght_nom":"GHT Béarn-Soule","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-185241.4214624803,5371137.457832515]},"properties":{"id":458,"code_region":"NAQ","departement":"64","nom_hopital":"Clin. Saint Jean de Luz - 64","suppressions":"maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-24540.381240848506,5885517.870848421]},"properties":{"id":354,"code_region":"NAQ","departement":"79","nom_hopital":"CHDSN Parthenay - 79","suppressions":"2018 : médecine fermé;1997 : chirurgie fermé;1997 : maternité fermé","menaces":"2018 : soins de suite et rééducation réduit (lits fermés);2009 : urgences menacé;chirurgie ambulatoire menacé;soins palliatifs menacé","ghi_nom":"CH Nord Deux-Sèvres ","ght_nom":"GHT des Deux-Sèvres","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-53378.99488788845,5915793.086719236]},"properties":{"id":353,"code_region":"NAQ","departement":"79","nom_hopital":"CHNDS Bressuire - 79","suppressions":"2018 : chirurgie fermé;2018 : chirurgie orthopédique et digestive fermé;2018 : maternité fermé;2018 : médecine fermé;2018 : soins intensifs fermé;2018 : urgences fermé","ghi_nom":"CH Nord Deux-Sèbres 1995","ght_nom":"GHT des Deux-Sèvres","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-42971.96144460137,5914630.103870284]},"properties":{"id":572,"code_region":"NAQ","departement":"79","nom_hopital":"CHNDS Faye-l'Abbesse - 79","suppressions":"2019 : cardiologie fermé","menaces":"2022 : soins de suite et rééducation réduit (lits fermés);2019 : gastro-entérologie menacé","ghi_nom":"CH Nord-Deux-Sèvres","ght_nom":"GHT des Deux-Sèvres","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-20262.64546420428,5937588.861606651]},"properties":{"id":352,"code_region":"NAQ","departement":"79","nom_hopital":"CHNDS Thouars - 79","suppressions":"2018 : cardiologie fermé;2018 : chirurgie digestive fermé;2018 : gastro-entérologie fermé;2018 : laboratoire fermé;2018 : médecine fermé;2018 : pharmacie fermé;2018 : soins intensifs fermé;1997 : chirurgie orthopédique fermé;1997 : maternité fermé","menaces":"2019 : urgences interrompu;radiologie scanner menacé;stérilisation menacé","ghi_nom":"CH Nord Deux-Sèvres 1995","ght_nom":"GHT des Deux-Sèvres","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-51493.84491823238,5831355.601289933]},"properties":{"id":611,"code_region":"NAQ","departement":"79","nom_hopital":"CH Niort - 79","menaces":"2021 : anesthésie menacé;2021 : psychiatrie interrompu;2021 : soins de court séjour réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT des Deux-Sèvres","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-50390.96977418661,5830987.612985052]},"properties":{"id":708,"code_region":"NAQ","departement":"79","nom_hopital":"Polyclinique Inkermann Niort - 79","suppressions":"2021 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[60858.08473912847,5912408.289233806]},"properties":{"id":262,"code_region":"NAQ","departement":"86","nom_hopital":"CHRU Châtellerault - 86","suppressions":"2021 : cardiologie fermé","menaces":"2021 : urgences menacé","ghi_nom":"GHRP","ght_nom":"GHT de la Vienne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[43671.9941077717,5869447.3571960535]},"properties":{"id":607,"code_region":"NAQ","departement":"86","nom_hopital":"CHRU Laborit Poitiers - 86","menaces":"2021 : gynécologie menacé;2021 : hospitalisation à domicile réduit (autre);2021 : rhumatologie réduit (autre)","ghi_nom":"GHRP","ght_nom":"GHT Vienne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[8615.068608074484,5943925.383567129]},"properties":{"id":365,"code_region":"NAQ","departement":"86","nom_hopital":"CHRU Loudun - 86","suppressions":"2017 : urgences fermé;2001 : maternité fermé","menaces":"2022 : urgences réduit (autre);2017 : SMUR menacé","ghi_nom":"GHNV","ght_nom":"GHT de la Vienne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[13666.217001126626,5850323.6892323615]},"properties":{"id":312,"code_region":"NAQ","departement":"86","nom_hopital":"CHRU Lusignan - 86","suppressions":"2019 : soins de suite fermé","menaces":"2017 : centre 15 menacé","ghi_nom":"","ght_nom":"GHT de la Vienne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[96483.73376153412,5849262.821118645]},"properties":{"id":740,"code_region":"NAQ","departement":"86","nom_hopital":"CHRU Montmorillon - 86","menaces":"2022 : urgences réduit (autre);2021 : urgences menacé","ghi_nom":"","ght_nom":"GHT Vienne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[133976.06895859848,5703024.693419341]},"properties":{"id":302,"code_region":"NAQ","departement":"87","nom_hopital":"CH Boutard Saint Yriex - 87","suppressions":"chirurgie fermé","ghi_nom":"","ght_nom":"GHT du Limousin","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[99931.31650453056,5762474.819644869]},"properties":{"id":156,"code_region":"NAQ","departement":"87","nom_hopital":"CH R. Mazoin Saint-Junien - 87","menaces":"2018 : cardiologie réduit (autre);2018 : oncologie réduit (autre);2018 : orthopédie réduit (autre)","ghi_nom":"","ght_nom":"GHT du Limousin","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[137745.24083363754,5750773.890708397]},"properties":{"id":65,"code_region":"NAQ","departement":"87","nom_hopital":"CHU Limoges - 87","suppressions":"2010 : blanchisserie fermé","menaces":"urgences menacé","ghi_nom":"","ght_nom":"GHT du Limousin","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[138116.1286585572,5750515.559435963]},"properties":{"id":540,"code_region":"NAQ","departement":"87","nom_hopital":"LIMOUSIN","suppressions":"2019 : centre autisme fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[26031.877226892902,6345708.2836738825]},"properties":{"id":597,"code_region":"NOR","departement":"14","nom_hopital":"Ancien Hôpital Honfleur - 14","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-39458.996700696676,6309465.010623391]},"properties":{"id":471,"code_region":"NOR","departement":"14","nom_hopital":"Caen CHU - 14","menaces":"2021 : hospitalisation conventionnelle menacé;2014 : chirurgie cardiaque et vasculaire réduit (autre)","ghi_nom":"","ght_nom":"GHT Normandie Centre","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-70470.05593013768,6277937.518287811]},"properties":{"id":406,"code_region":"NOR","departement":"14","nom_hopital":"CHAB Aunay sur Odon - 14","suppressions":"1997 : maternité fermé;chirurgie fermé;entretien des jardins sous-traité","menaces":"2015 : urgences menacé","ghi_nom":"CHAB - Aunay-Bayeux","ght_nom":"GHT Normandie Centre","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-78078.6064285114,6321625.200698169]},"properties":{"id":470,"code_region":"NOR","departement":"14","nom_hopital":"CHAB Bayeux - 14","suppressions":"2016 : médecine fermé","ghi_nom":"CHI Aunay-Bayeux","ght_nom":"GHT Normandie Centre","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[22593.41566872228,6340329.737117166]},"properties":{"id":459,"code_region":"NOR","departement":"14","nom_hopital":"CH Côte Fleurie - 14","ghi_nom":"CH Côte Fleurie","ght_nom":"GHT Normandie Centre","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[14375.987457870706,6340088.947004342]},"properties":{"id":472,"code_region":"NOR","departement":"14","nom_hopital":"CH Côte Fleurie - 14","suppressions":"2014 : maternité fermé","ghi_nom":"CH Côte Fleurie","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-22939.830344783823,6256308.610389251]},"properties":{"id":336,"code_region":"NOR","departement":"14","nom_hopital":"CH Falaise - 14","suppressions":"2019 : cuisine sous-traité;2015 : maternité fermé","menaces":"2021 : urgences interrompu;2019 : restauration menacé;2016 : institut de formation en soins infirmiers (IFSI) menacé","ghi_nom":"","ght_nom":"GHT Normandie Centre","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[25830.66493924741,6299527.311488299]},"properties":{"id":177,"code_region":"NOR","departement":"14","nom_hopital":"CH Lisieux - 14","suppressions":"2020 : médecine interne fermé;2014 : centre mucoviscidose fermé;unité long séjour fermé","menaces":"2015 : blanchisserie réduit (autre);chirurgie fusionné","ghi_nom":"","ght_nom":"GHT Normandie Centre","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-98891.42445852314,6247371.695000367]},"properties":{"id":4,"code_region":"NOR","departement":"14","nom_hopital":"CH Vire - 14","suppressions":"2017 : soins continus fermé;2015 : bloc opératoire fermé;2013 : maternité fermé","menaces":"2016 : chimiothérapie menacé;2016 : institut de formation en soins infirmiers (IFSI) menacé","victoires":"2017 : urgences victoire;2012 : maternité maintenu","ghi_nom":"","ght_nom":"GHT Collines de Normandie","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[8312.91941788305,6336039.798786917]},"properties":{"id":398,"code_region":"NOR","departement":"14","nom_hopital":"Deauville - 14","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-41759.89598599449,6305053.814212316]},"properties":{"id":175,"code_region":"NOR","departement":"14","nom_hopital":"EPSM Caen - 14","suppressions":"2017 : bionettoyage sous-traité","menaces":"2020 : restauration menacé;2013 : psychiatrie menacé","victoires":"2021 : restauration victoire","ghi_nom":"","ght_nom":"GHT Normandie Centre","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-35597.8742558479,6304936.755980072]},"properties":{"id":176,"code_region":"NOR","departement":"14","nom_hopital":"Mondeville -14","suppressions":"centre de santé des armées fermé;ravitaillement sanitaire des armées fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[9029.549835567726,6337155.087708294]},"properties":{"id":174,"code_region":"NOR","departement":"14","nom_hopital":"Trouville - 14","ghi_nom":"CH Côte Fleurie","ght_nom":"GHT Normandie Centre","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[65628.8392998427,6290171.97039752]},"properties":{"id":581,"code_region":"NOR","departement":"27","nom_hopital":"CH Bernay - 27","suppressions":"2019 : maternité fermé","ghi_nom":"","ght_nom":"GHT Eure Seine et Pays d’Ouche","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[130102.46865591788,6311285.98770854]},"properties":{"id":454,"code_region":"NOR","departement":"27","nom_hopital":"CHELVR Louviers - 27","menaces":"chirurgie menacé","ghi_nom":"CHI Elbeuf-Louviers-Val de Reuil","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[123936.13796718833,6278124.090464384]},"properties":{"id":582,"code_region":"NOR","departement":"27","nom_hopital":"CHES Évreux - 27","ghi_nom":"CHI Eure Seine","ght_nom":"GHT Eure-Seine – Pays d’Ouche","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[165359.79591394324,6290664.486485603]},"properties":{"id":453,"code_region":"NOR","departement":"27","nom_hopital":"CHES - Vernon 27","ghi_nom":"CHES","ght_nom":"GHT Eure-Seine – Pays d’Ouche","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[195860.83078105396,6322722.011045475]},"properties":{"id":579,"code_region":"NOR","departement":"27","nom_hopital":"CH Gisors - 27","ghi_nom":"","ght_nom":"GHT Eure-Seine – Pays d’Ouche","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[57264.733296137296,6334190.339969905]},"properties":{"id":455,"code_region":"NOR","departement":"27","nom_hopital":"CH La Risle - Pont Audemer - 27","suppressions":"2014 : chirurgie fermé;2003 : maternité fermé","menaces":"2013 : chirurgie ambulatoire menacé","ghi_nom":"","ght_nom":"GHT Estuaire de la Seine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[153355.63684686646,6277596.286343112]},"properties":{"id":670,"code_region":"NOR","departement":"27","nom_hopital":"CHL Pacy-sur-Eure - 27","suppressions":"2016 : médecine fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[129225.97870367393,6279701.531512458]},"properties":{"id":634,"code_region":"NOR","departement":"27","nom_hopital":"Clinique Pasteur Évreux - 27","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[123952.5151281585,6278129.208768371]},"properties":{"id":903,"code_region":"NOR","departement":"27","nom_hopital":"NHN Évreux - 27","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-150444.45597730545,6222994.8204854615]},"properties":{"id":199,"code_region":"NOR","departement":"50","nom_hopital":"CHAG Avranches – 50","suppressions":"2022 : urgences fermé;2018 : soins de suite et rééducation transféré","menaces":"2022 : chirurgie réduit (lits fermés);2021 : SMUR réduit (autre);2021 : urgences réduit (autre)","ghi_nom":"CHAG","ght_nom":"GHT Mont-Saint-Michel","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-174721.32586574586,6245709.188818986]},"properties":{"id":198,"code_region":"NOR","departement":"50","nom_hopital":"CHAG Granville - 50 ","suppressions":"2021 : pneumologie transféré;2018 : chirurgie ambulatoire transféré;2018 : gastro-entérologie transféré;2018 : ligne SMUR fermé;2014 : cardiologie fermé;2014 : hospitalisation à domicile fermé;2008 : chirurgie osseuse fermé;2007 : maternité fermé;1999 : chirurgie viscérale fermé","menaces":"2021 : urgences réduit (autre);2019 : radiologie réduit (autre);2018 : astreinte transport de nuit interrompu;2017 : SMUR menacé;2015 : chirurgie ambulatoire menacé","victoires":"2020 : ligne SMUR victoire;SMUR victoire","ghi_nom":"CHAG","ght_nom":"GHT Mont-Saint-Michel","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-179644.4301091286,6383674.434893986]},"properties":{"id":55,"code_region":"NOR","departement":"50","nom_hopital":"Cherbourg - 50","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-160714.53097452314,6281956.453017001]},"properties":{"id":432,"code_region":"NOR","departement":"50","nom_hopital":"Coutances - 50","suppressions":"2016 : maternité fermé;2016 : maternité privatisé;2015 : médecine à orientation cardiologie fermé;cuisine transféré","menaces":"2015 : urgences de nuit menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-122047.56266138706,6202044.800589862]},"properties":{"id":378,"code_region":"NOR","departement":"50","nom_hopital":"Saint Hilaire du  Harcouët - 50","menaces":"2022 : médecine réduit (lits fermés);2022 : soins de suite et rééducation réduit (lits fermés);2021 : urgences réduit (autre);2016 : urgences menacé","victoires":"2016 : urgences victoire","ghi_nom":"","ght_nom":"GHT Mont-Saint-Michel","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-123214.14844365486,6292779.889713151]},"properties":{"id":197,"code_region":"NOR","departement":"50","nom_hopital":"Saint Lô (50)","suppressions":"2015 : unité psychiatrique fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-162961.19463068078,6360486.402428566]},"properties":{"id":348,"code_region":"NOR","departement":"50","nom_hopital":"Valognes - 50","suppressions":"2020 : centre de soins non programmés fermé;2015 : urgences fermé;2000 : maternité fermé;chirurgie fermé","menaces":"2015 : urgences de nuit interrompu","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-64102.771642856234,6232562.294358489]},"properties":{"id":190,"code_region":"NOR","departement":"61","nom_hopital":"CH Flers - 61","ghi_nom":"","ght_nom":"GHT Collines de Normandie","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-73304.80488778278,6205758.795445253]},"properties":{"id":240,"code_region":"NOR","departement":"61","nom_hopital":"CHICA Domfront - 61","ghi_nom":"CHICA CHIC des Andaines","ght_nom":"GHT Collines de Normandie","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-38835.80492230132,6206884.70951797]},"properties":{"id":239,"code_region":"NOR","departement":"61","nom_hopital":"CHICA La Ferté Macé  - 61","suppressions":"2005 : maternité fermé","ghi_nom":"CHICA CHIC des Andaines","ght_nom":"GHT Collines de Normandie","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[9135.18625828507,6178714.421312134]},"properties":{"id":36,"code_region":"NOR","departement":"61","nom_hopital":"CHICAM - Alençon - 61","ghi_nom":"","ght_nom":"GHT Orne-Perche Saosnois","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[70004.81664406216,6235003.406891046]},"properties":{"id":191,"code_region":"NOR","departement":"61","nom_hopital":"L'Aigle - 61","menaces":"2015 : chirurgie ambulatoire interrompu","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[60739.06284363429,6193802.427001557]},"properties":{"id":283,"code_region":"NOR","departement":"61","nom_hopital":"Mortagne au Perche - 61","suppressions":"chirurgie fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[82829.10008287062,6380600.782431632]},"properties":{"id":618,"code_region":"NOR","departement":"76","nom_hopital":"CH Asselin-Hédlin Yvetot - 76","menaces":"2021 : EHPAD réduit (autre)","ghi_nom":"","ght_nom":"GHT Rouen-Cœur de Seine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[120410.39349488167,6353105.978798863]},"properties":{"id":268,"code_region":"NOR","departement":"76","nom_hopital":"CH Belvédère -Mont Saint Aignan - 76","menaces":"2018 : maternité menacé","ghi_nom":"","ght_nom":"GHT Rouen-Cœur de Seine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[116077.96812334232,6326822.153319273]},"properties":{"id":635,"code_region":"NOR","departement":"76","nom_hopital":"CHELVR Elbeuf - ","menaces":"chirurgie menacé","ghi_nom":"CHELVR - Elbeuf-Louviers-Val de Reuil","ght_nom":"GHT Val de Seine Plateaux de l’Eure","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[43003.58772031218,6402124.3014225215]},"properties":{"id":266,"code_region":"NOR","departement":"76","nom_hopital":"CH Fécamp - 76","suppressions":"chirurgie fermé","ghi_nom":"CHIPHF","ght_nom":"GHT Estuaire de la Seine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[12576.34942838917,6360038.337912419]},"properties":{"id":51,"code_region":"NOR","departement":"76","nom_hopital":"CH Flaubert - Le Havre - 76\r\n","suppressions":"2015 : direction des ressources humaines transféré;2015 : direction des ressources matérielles et logistique transféré;2010 : gynécologie obstétrique transféré;2010 : pédiatrie transféré;2010 : services administratifs transféré;2010 : urgences pédiatriques transféré","menaces":"centre mucoviscidose menacé","ghi_nom":"GHH","ght_nom":"GHT Estuaire de la Seine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[60556.980354141386,6363478.521647527]},"properties":{"id":267,"code_region":"NOR","departement":"76","nom_hopital":"CH Lillebonne - 76","suppressions":"chirurgie fermé","menaces":"2019 : SMUR menacé;2019 : urgences menacé","ghi_nom":"CHICVS","ght_nom":"GHT Estuaire de la Seine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[20585.010382272303,6364655.983693975]},"properties":{"id":585,"code_region":"NOR","departement":"76","nom_hopital":"CH Monod - Le Havre - 76","ghi_nom":"GHH","ght_nom":"GHT Estuaire de la Seine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[117669.32365118367,6346323.015051507]},"properties":{"id":639,"code_region":"NOR","departement":"76","nom_hopital":"CH Saint-Julien Rouen - 76","ghi_nom":"CHU Rouen-Normandie","ght_nom":"GHT Rouen-Cœur de Seine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[121895.08385948482,6342752.041798445]},"properties":{"id":586,"code_region":"NOR","departement":"76","nom_hopital":"CHS du Rouvray - 76","ghi_nom":"","ght_nom":"GHT Rouen-Cœur de Seine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[123220.98737649994,6349792.742471702]},"properties":{"id":269,"code_region":"NOR","departement":"76","nom_hopital":"Rouen -76","menaces":"2017 : SMUR menacé","ghi_nom":"CHU","ght_nom":"GHT Rouen-Cœur de Seine","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[125783.25317000193,5311912.823580754]},"properties":{"id":428,"code_region":"OCC","departement":"09","nom_hopital":"CHAC Saint Girons - 09","menaces":"2022 : court séjour gériatrique réduit (autre);2022 : maternité interrompu;2021 : rééducation neurologique réduit (autre);2021 : urgences interrompu;2018 : chirurgie menacé;2018 : maternité menacé","ghi_nom":"CHAC","ght_nom":"GHT Pyrénées ariègeoises","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[179018.77252415247,5329496.561007063]},"properties":{"id":578,"code_region":"OCC","departement":"09","nom_hopital":"CHIVA Ariège Couserants - Pamiers - 09","ghi_nom":"CHIVA","ght_nom":"GHT Pyrénées ariègeoises","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[180343.6147449352,5315908.640312023]},"properties":{"id":306,"code_region":"OCC","departement":"09","nom_hopital":"CHIVA Foix - Saint Jean de Verges - 09","suppressions":"2018 : diabétologie fermé;2018 : infectiologie fermé;2018 : neurologie fermé;2018 : ophtalmologie fermé","victoires":"2012 : réanimation victoire","ghi_nom":"CHIVA - Vallées d'Ariège","ght_nom":"GHT Pyrénées ariègeoises","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[207153.52902956255,5301134.391956206]},"properties":{"id":307,"code_region":"OCC","departement":"09","nom_hopital":"CHIVA Pays d'Olme - Lavelanet - 09","menaces":"2021 : urgences interrompu;2012 : urgences réduit (autre);2011 : chirurgie conventionnelle réduit (autre)","victoires":"2020 : urgences réouvert;2012 : chirurgie maintenu;2012 : urgences maintenu","ghi_nom":"CHIVA","ght_nom":"GHT Pyrénées ariègeoises","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[178674.21503871307,5288942.945353135]},"properties":{"id":308,"code_region":"OCC","departement":"09","nom_hopital":"CH J. Rousse -Tarascon sur Ariège - 09","ghi_nom":"","ght_nom":"GHT Pyrénées ariègeoises","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[204855.64779080878,5269386.028537317]},"properties":{"id":309,"code_region":"OCC","departement":"09","nom_hopital":"CH St Louis - Ax-Les-Thermes - 09","ghi_nom":"","ght_nom":"GHT Pyrénées ariègeoises","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[179107.15283809626,5329508.50429274]},"properties":{"id":305,"code_region":"OCC","departement":"09","nom_hopital":"EHPAD du Barriol - Pamiers - 09","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[204951.8411328231,5301606.2166245375]},"properties":{"id":655,"code_region":"OCC","departement":"09","nom_hopital":"Maternité Lavelanet - 09","suppressions":"1998 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[261923.62105170026,5344305.743746337]},"properties":{"id":30,"code_region":"OCC","departement":"11","nom_hopital":"CH Carcassonne - 11","menaces":"2019 : SMUR interrompu;2018 : urgences menacé;2017 : urgences interrompu","ghi_nom":"","ght_nom":"GHT Ouest Audois","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[217410.52869722163,5360375.858358574]},"properties":{"id":304,"code_region":"OCC","departement":"11","nom_hopital":"CH Jean Pierre Cassabel Castelnaudary - 11","suppressions":"2010 : chirurgie fermé;2003 : maternité fermé","menaces":"2019 : urgences interrompu;2017 : SMUR interrompu;2015 : urgences menacé","ghi_nom":"","ght_nom":"GHT Ouest Audois","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[307174.635134153,5341648.089461279]},"properties":{"id":423,"code_region":"OCC","departement":"11","nom_hopital":"CH Lézignan-Corbières - 11","suppressions":"2008 : urgences fermé;chirurgie fermé","menaces":"2020 : médecine menacé","ghi_nom":"","ght_nom":"GHT Aude-Pyrénées","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[247067.99319354456,5320383.621903201]},"properties":{"id":656,"code_region":"OCC","departement":"11","nom_hopital":"CHLQ Limoux - 11","menaces":"2017 : SMUR interrompu","ghi_nom":"CHLQ","ght_nom":"GHT Ouest Audois","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[243188.6670592034,5292988.261185368]},"properties":{"id":430,"code_region":"OCC","departement":"11","nom_hopital":"CHLQ Quillan  - 11","menaces":"2018 : urgences interrompu;2017 : SMUR interrompu;1999 : chirurgie menacé","ghi_nom":"CHLQ","ght_nom":"GHT Ouest Audois","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[333917.18483709916,5339561.428572214]},"properties":{"id":657,"code_region":"OCC","departement":"11","nom_hopital":"CH Narbonne","menaces":"2019 : oncologie interrompu","ghi_nom":"","ght_nom":"GHT Aude-Pyrénées","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[336769.24145459384,5339862.399371042]},"properties":{"id":658,"code_region":"OCC","departement":"11","nom_hopital":"Polyclinique du Languedoc Narbonne - 11","suppressions":"2019 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[259263.11107612806,5344458.863375958]},"properties":{"id":737,"code_region":"OCC","departement":"11","nom_hopital":"Polyclinique Montréal Carcassonne - 11","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[238727.6226789853,5550193.66728141]},"properties":{"id":411,"code_region":"OCC","departement":"12","nom_hopital":"Asprières - 12","menaces":"maison de retraite menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[339752.49963964464,5480038.08438539]},"properties":{"id":275,"code_region":"OCC","departement":"12","nom_hopital":"CH Millau - 12","suppressions":"2022 : soins de suite et rééducation fermé","menaces":"2021 : soins de suite et rééducation interrompu;2020 : chirurgie interrompu;2020 : soins de suite et rééducation menacé;2015 : maternité menacé","victoires":"2017 : maternité maintenu","ghi_nom":"","ght_nom":"GHT Est-Hérault et Sud-Aveyron","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[286761.4024928188,5519674.159714217]},"properties":{"id":273,"code_region":"OCC","departement":"12","nom_hopital":"CH Rodez - 12","menaces":"2017 : cardiologie menacé;2016 : radiothérapie menacé","ghi_nom":"","ght_nom":"GHT du Rouergue","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[320101.3527037764,5458994.804048198]},"properties":{"id":344,"code_region":"OCC","departement":"12","nom_hopital":"CH Saint Affrique - 12","suppressions":"2014 : bactériologie fermé;2014 : buanderie fermé","menaces":"2021 : bloc chirurgical réduit (autre);2021 : maternité interrompu;2021 : maternité réduit (autre);2021 : urgences réduit (autre)","victoires":"2017 : maternité maintenu;2011 : chirurgie maintenu","ghi_nom":"","ght_nom":"GHT Est-Hérault et Sud-Aveyron","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[226577.95245222957,5519720.640694475]},"properties":{"id":274,"code_region":"OCC","departement":"12","nom_hopital":"CH Villefranche-de-Rouergue - 12","menaces":"2019 : maternité menacé;2012 : urgences menacé","ghi_nom":"","ght_nom":"GHT du Rouergue","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[341821.93228192587,5480256.218231709]},"properties":{"id":587,"code_region":"OCC","departement":"12","nom_hopital":"Clin. Sainte Côme - 12","ghi_nom":"","ght_nom":"GHT Est-Hérault et Sud-Aveyron","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[250743.30865250513,5553924.94962293]},"properties":{"id":272,"code_region":"OCC","departement":"12","nom_hopital":"Decazeville - 12","suppressions":"2017 : maternité fermé;2011 : bloc opératoire fermé","menaces":"2019 : chirurgie menacé;2019 : réanimation menacé;2016 : maternité menacé;2012 : bloc opératoire menacé;2012 : urgences menacé;2008 : chirurgie réduit (lits fermés)","victoires":"2011 : maternité maintenu;chirurgie maintenu","ghi_nom":"","ght_nom":"GHT du Rouergue","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[456065.9950448214,5488175.872294276]},"properties":{"id":44,"code_region":"OCC","departement":"30","nom_hopital":"CH Alès-Cévennes - 30","menaces":"2020 : maternité réduit (lits fermés);soins longue durée transformé","ghi_nom":"","ght_nom":"GHT Cévennes-Gard-Camargue","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[490880.2562798189,5466295.717289419]},"properties":{"id":26,"code_region":"OCC","departement":"30","nom_hopital":"CH Mas Careiron Uzès - 30","victoires":"2016 : unité psychiatrique maintenu","ghi_nom":"","ght_nom":"GHT Cévennes-Gard-Camargue","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[437887.31226805196,5526996.176480459]},"properties":{"id":434,"code_region":"OCC","departement":"30","nom_hopital":"Ponteil ","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[159742.63437264785,5406472.097866131]},"properties":{"id":481,"code_region":"OCC","departement":"31","nom_hopital":"Centre post-cure Maignan Toulouse - 31","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[80550.95355943852,5328263.254046512]},"properties":{"id":291,"code_region":"OCC","departement":"31","nom_hopital":"CHCP Saint-Gaudens - 31","menaces":"2019 : urgences interrompu;2012 : réanimation menacé","ghi_nom":"","ght_nom":"GHT Haute-Garonne et Tarn Ouest","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[159139.66609745828,5403185.102990863]},"properties":{"id":478,"code_region":"OCC","departement":"31","nom_hopital":"CH Joseph Ducuing Toulouse - 31","suppressions":"2021 : médecine fermé;2019 : urgences fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[158091.0102776964,5397556.814436989]},"properties":{"id":596,"code_region":"OCC","departement":"31","nom_hopital":"CHP G. Marchant Toulouse - 31","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[155942.61617521974,5406282.988633666]},"properties":{"id":477,"code_region":"OCC","departement":"31","nom_hopital":"CHU Garonne Toulouse - 31","ghi_nom":"CHU Toulouse","ght_nom":"GHT Haute-Garonne et Tarn Ouest","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[159413.15002990497,5403800.194351153]},"properties":{"id":483,"code_region":"OCC","departement":"31","nom_hopital":"CHU La Grave Toulouse - 31","suppressions":"gériatrie transféré","ghi_nom":"CHU Toulouse","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[155953.00559713316,5405164.060662439]},"properties":{"id":480,"code_region":"OCC","departement":"31","nom_hopital":"CHU Pierre-Paul Riquet Toulouse - 31","menaces":"2016 : centre IVG menacé;2014 : bloc chirurgical menacé;2013 : chirurgie menacé;2013 : pédiatrie menacé;hospitalisation à domicile menacé","ghi_nom":"","ght_nom":"GHT Haute-Garonne et Tarn Ouest","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[155809.85728204242,5405779.173650912]},"properties":{"id":482,"code_region":"OCC","departement":"31","nom_hopital":"CHU Purpan Toulouse - 31","suppressions":"2009 : soins externes rééducation fermé","menaces":"2011 : urgences menacé","ghi_nom":"","ght_nom":"GHT Haute-Garonne et Tarn Ouest","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[8646.608143046516,5345237.598216721]},"properties":{"id":659,"code_region":"OCC","departement":"31","nom_hopital":"Clinique de l'Ormeau Tarbes - 31","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[160346.1160817277,5404827.5154030165]},"properties":{"id":479,"code_region":"OCC","departement":"31","nom_hopital":"Toulouse - 31  Centre de Soins St Sernin","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[160769.55152914952,5404454.892209295]},"properties":{"id":290,"code_region":"OCC","departement":"31","nom_hopital":"Toulouse La Case de Santé - 31","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[58815.109418480046,5410040.815024743]},"properties":{"id":486,"code_region":"OCC","departement":"32","nom_hopital":"Auch -32\nClinique d'Embats\n","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[64216.88338020072,5408514.672970923]},"properties":{"id":59,"code_region":"OCC","departement":"32","nom_hopital":"CH Auch - 32","suppressions":"2016 : chirurgie fermé;2015 : pneumologie fermé;pédiatrie fermé;rééducation fermé","menaces":"2021 : urgences menacé;2019 : scanner - IRM menacé;2015 : cardiologie menacé;2012 : gynécologie menacé;2009 : pneumologie réduit (autre);diabétologie réduit (autre);neurologie réduit (autre)","victoires":"2021 : scanner - IRM maintenu","ghi_nom":"","ght_nom":"GHT du Gers","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[42153.12616352735,5458628.989592606]},"properties":{"id":395,"code_region":"OCC","departement":"32","nom_hopital":"CH Condom - 32","menaces":"2019 : urgences menacé;2018 : SMUR réduit (autre);2017 : urgences de nuit interrompu;2015 : SMUR menacé","victoires":"2019 : SMUR réouvert;2018 : SMUR maintenu","ghi_nom":"","ght_nom":"GHT du Gers","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[97410.78132365532,5423711.598720671]},"properties":{"id":413,"code_region":"OCC","departement":"32","nom_hopital":"CH Mauvezin - 32","victoires":"médecine maintenu","ghi_nom":"","ght_nom":"GHT du Gers","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[44857.77728293214,5390104.64542539]},"properties":{"id":384,"code_region":"OCC","departement":"32","nom_hopital":"CH Saint-Jacques Mirande - 32","ghi_nom":"","ght_nom":"GHT du Gers","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[66080.13451732701,5410512.355123728]},"properties":{"id":609,"code_region":"OCC","departement":"32","nom_hopital":"CHS Auch - 32","menaces":"2021 : pédopsychiatrie interrompu;2021 : unité de projet et d’accompagnement à la sortie (UPAS) menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[64864.16753253832,5409124.727809335]},"properties":{"id":484,"code_region":"OCC","departement":"32","nom_hopital":"Cl. Barthélémy - Auch – 32 \r\n","suppressions":"2005 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[66701.90317914516,5410696.344511474]},"properties":{"id":487,"code_region":"OCC","departement":"32","nom_hopital":"Clin. de Gascogne - Auch - 32","suppressions":"maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[73408.04025990052,5443425.906646263]},"properties":{"id":18,"code_region":"OCC","departement":"32","nom_hopital":"Fleurance-Lectoure - 32","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[68591.09009609002,5455502.858098315]},"properties":{"id":61,"code_region":"OCC","departement":"32","nom_hopital":"Lectoure - 32","suppressions":"cuisine fermé;services techniques fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-3443.136059314991,5427968.417148746]},"properties":{"id":412,"code_region":"OCC","departement":"32","nom_hopital":"Nogaro - 32","menaces":"2011 : médecine réduit (lits fermés)","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[33105.941779964,5428354.049377659]},"properties":{"id":394,"code_region":"OCC","departement":"32","nom_hopital":"Vic-Fezensac - 32","suppressions":"unité spécialisée Alzheimer fermé","ghi_nom":"","ght_nom":"GHT du Gers","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[387738.74267298327,5357508.198626431]},"properties":{"id":739,"code_region":"OCC","departement":"34","nom_hopital":"CHBT Saint-Loup Agde - 34","suppressions":"2021 : accueil médicalisé de jour fermé;2021 : urgences de nuit fermé","menaces":"2021 : médecine réduit (lits fermés);2021 : réanimation réduit (lits fermés);2021 : soins de suite et rééducation réduit (lits fermés)","ghi_nom":"CHBT","ght_nom":"GHT Est-Hérault et Sud-Aveyron","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[408559.97899285355,5374206.929104936]},"properties":{"id":738,"code_region":"OCC","departement":"34","nom_hopital":"CHBT Sète - 34","ghi_nom":"CHBT","ght_nom":"GHT Est-Hérault et Sud-Aveyron","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[369097.6727881767,5423844.902355464]},"properties":{"id":43,"code_region":"OCC","departement":"34","nom_hopital":"CH Lodève - 34","suppressions":"2008 : chirurgie programmée fermé","menaces":"2022 : CAPS interrompu;2022 : urgences menacé","ghi_nom":"","ght_nom":"GHT Est-Hérault et Sud-Aveyron","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[382626.1781519167,5408242.497948109]},"properties":{"id":315,"code_region":"OCC","departement":"34","nom_hopital":"HL Clermont l'Hérault - 34","ghi_nom":"","ght_nom":"GHT Est-Hérault et Sud-Aveyron","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[412160.54453989444,5455031.13437504]},"properties":{"id":916,"code_region":"OCC","departement":"34","nom_hopital":"Polyclinique Saint-Louis Ganges - 34","menaces":"2022 : maternité menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[160127.17616328798,5535197.039128603]},"properties":{"id":499,"code_region":"OCC","departement":"46","nom_hopital":"Cahors Résidence d'Olt - 46","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[153840.4028563314,5580199.213789553]},"properties":{"id":310,"code_region":"OCC","departement":"46","nom_hopital":"CH Coulon Gourdon - 46","suppressions":"2004 : maternité fermé","menaces":"2021 : urgences menacé;2011 : chirurgie réduit (autre);2010 : chirurgie menacé;2003 : maternité menacé;2003 : pédiatrie menacé","ghi_nom":"","ght_nom":"GHT du Lot","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6253.344808116555,5345573.238320565]},"properties":{"id":233,"code_region":"OCC","departement":"46","nom_hopital":"CH de Bigorre Tarbes - 46","menaces":"2021 : SAMU menacé;2021 : urgences menacé","ghi_nom":"CH Tarbes-Lourdes","ght_nom":"GHT des Hautes-Pyrénées","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[225879.7730871854,5560283.31847648]},"properties":{"id":405,"code_region":"OCC","departement":"46","nom_hopital":"CH Figeac - 46","suppressions":"2009 : maternité fermé","menaces":"2010 : chirurgie menacé","ghi_nom":"","ght_nom":"GHT du Lot","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[160423.5809764837,5534849.822061713]},"properties":{"id":49,"code_region":"OCC","departement":"46","nom_hopital":"CH Jean Rougier Cahors - 46","ghi_nom":"","ght_nom":"GHT du Lot","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[191856.2509699446,5586837.357793662]},"properties":{"id":403,"code_region":"OCC","departement":"46","nom_hopital":"CH L. Conte Gramat - 46","menaces":"2018 : médecine menacé","ghi_nom":"","ght_nom":"GHT du Lot","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[210684.669375084,5599411.081740496]},"properties":{"id":404,"code_region":"OCC","departement":"46","nom_hopital":"CH Saint-Jacques de Saint-Céré - 46","suppressions":"1997 : maternité fermé","ghi_nom":"","ght_nom":"GHT du Lot","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[365033.9181248169,5591366.126224721]},"properties":{"id":669,"code_region":"OCC","departement":"48","nom_hopital":"CHL Fanny Ramadier Saint-Chély d'Apcher - 48","suppressions":"2015 : soins de suite et rééducation fermé;1991 : maternité fermé","menaces":"2011 : soins de suite et rééducation menacé","ghi_nom":"","ght_nom":"GHT Lozère","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[366220.00225029554,5550978.563957623]},"properties":{"id":338,"code_region":"OCC","departement":"48","nom_hopital":"CH Lozère - Marvéjols - 48","ghi_nom":"CHI Lozère","ght_nom":"GHT Lozère","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[388584.8694593832,5546657.665069368]},"properties":{"id":674,"code_region":"OCC","departement":"48","nom_hopital":"CH Lozère - Mende - 48","menaces":"réanimation menacé","ghi_nom":"CHI Lozère","ght_nom":"GHT Lozère","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[400486.7281148466,5515960.690030517]},"properties":{"id":675,"code_region":"OCC","departement":"48","nom_hopital":"CH Théophile Roussel Florac - 48","menaces":"2015 : médecine réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Lozère","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[16762.198200124534,5322339.559153961]},"properties":{"id":345,"code_region":"OCC","departement":"65","nom_hopital":"CH Bagnères de Bigorre - 65","suppressions":"2012 : buanderie fermé","menaces":"2022 : urgences de nuit interrompu;2021 : urgences de nuit menacé;2015 : urgences menacé","victoires":"2021 : urgences de nuit maintenu","ghi_nom":"","ght_nom":"GHT des Hautes-Pyrénées","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-5109.608228961395,5325936.872714981]},"properties":{"id":234,"code_region":"OCC","departement":"65","nom_hopital":"CH Lourdes - 65","suppressions":"2015 : maternité fermé;addictologie transféré;HIV transféré;maladies infectieuses fermé","menaces":"2014 : maternité menacé;2014 : réanimation menacé;2009 : cardiologie réduit (autre);2009 : endoscopie réduit (autre);2009 : gastrologie réduit (autre);2008 : chirurgie réduit (autre)","ghi_nom":"GH Tarbes Lourdes","ght_nom":"GHT des Hautes-Pyrénées","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[46018.81858463588,5329639.769625549]},"properties":{"id":339,"code_region":"OCC","departement":"65","nom_hopital":"Hôpitaux de Lannemezan - 65","suppressions":"2008 : maternité fermé","menaces":"2011 : bloc opératoire réduit (autre);2010 : chirurgie menacé","victoires":"2012 : chirurgie maintenu;2012 : psychiatrie maintenu;2011 : bloc opératoire réouvert;maternité victoire","ghi_nom":"Hôpitaux de Lannemezan","ght_nom":"GHT des Hautes-Pyrénées","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[321691.1820628457,5270296.174458373]},"properties":{"id":425,"code_region":"OCC","departement":"66","nom_hopital":"CH Perpignan - 66","menaces":"2019 : hélicoptère menacé","ghi_nom":"","ght_nom":"GHT Aude-Pyrénées","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[306817.43100700347,5256200.661136843]},"properties":{"id":340,"code_region":"OCC","departement":"66","nom_hopital":"CHS Gregory Thuir -  - 66","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[238461.15033635875,5453970.624127821]},"properties":{"id":83,"code_region":"OCC","departement":"81","nom_hopital":"CH Albi - 81","suppressions":"2012 : endocrinologie fermé;2012 : entretien sous-traité;2012 : nettoyage sous-traité;2008 : urologie fermé;2000 : ophtalmologie fermé;2000 : otorhinolaryngologie fermé;2000 : stomatologie fermé","menaces":"2012 : soins longue durée menacé;2009 : IRM menacé;2008 : endocrinologie réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Coeur d'Occitanie","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[251833.63031561254,5398546.086588129]},"properties":{"id":257,"code_region":"OCC","departement":"81","nom_hopital":"CH du Pays d'Autan Castres - 81","menaces":"2011 : cardiologie rythmologique menacé","victoires":"2012 : rythmologie interventionnelle maintenu","ghi_nom":"CHIC Castres-Mazamet","ght_nom":"GHT Coeur d'Occitanie","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[263898.74442108395,5387673.392188143]},"properties":{"id":258,"code_region":"OCC","departement":"81","nom_hopital":"CH du Pays d'Autan Mazamet - 81","suppressions":"1998 : maternité fermé;1998 : obstétrique transféré","ghi_nom":"CHIC Castres-Mazamet","ght_nom":"GHT Coeur d'Occitanie","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[211131.08686435566,5450255.045813622]},"properties":{"id":255,"code_region":"OCC","departement":"81","nom_hopital":"CH Gaillac - 81","ghi_nom":"","ght_nom":"GHT Coeur d'Occitanie","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[202395.173677798,5419316.379972542]},"properties":{"id":337,"code_region":"OCC","departement":"81","nom_hopital":"CH Lavaur - 81","suppressions":"2008 : chirurgie fermé;endocrinologie fermé","menaces":"2022 : urgences de nuit interrompu;2021 : psychiatrie adulte menacé","victoires":"2019 : psychiatrie victoire","ghi_nom":"","ght_nom":"GHT Haute-Garonne et Tarn Ouest","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[239938.7967674695,5473679.427409468]},"properties":{"id":605,"code_region":"OCC","departement":"81","nom_hopital":"CH Sainte-Barbe Carmaux - 81","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[239212.55544580516,5452685.537772197]},"properties":{"id":730,"code_region":"OCC","departement":"81","nom_hopital":"Clinique Bon Sauveur Albi - 81","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[241011.90085292252,5454638.659115585]},"properties":{"id":651,"code_region":"OCC","departement":"81","nom_hopital":"Clinique Claude Bernard Albi - 81","suppressions":"2020 : maternité fermé","menaces":"2021 : urgences réduit (autre)","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[242683.96084642824,5454471.453116235]},"properties":{"id":534,"code_region":"OCC","departement":"81","nom_hopital":"Clinique Toulouse Lautrec Albi - 81","menaces":"2012 : maternité menacé;2012 : urgences menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[240233.79938534644,5473678.469516942]},"properties":{"id":254,"code_region":"OCC","departement":"81","nom_hopital":"Polyclinique Carmaux - 81","suppressions":"service d'accueil de proximité et de soins non programmé fermé","menaces":"2017 : service d'accueil de proximité et de soins non programmé menacé;2010 : urgences transformé;chirurgie menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[237027.5433768646,5448578.355709103]},"properties":{"id":256,"code_region":"OCC","departement":"81","nom_hopital":"Saliès - 81","menaces":"2012 : diabétologie réduit (lits fermés)","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[123186.08446689931,5471979.277645207]},"properties":{"id":536,"code_region":"OCC","departement":"82","nom_hopital":"CHICM Castelsarrasin - 82","menaces":"2021 : urgences menacé;2015 : chirurgie réduit (autre);2011 : chirurgie viscérale réduit (autre)","ghi_nom":"","ght_nom":"GHT Tarn et Garonne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[120669.66210863601,5481527.89835277]},"properties":{"id":204,"code_region":"OCC","departement":"82","nom_hopital":"CHICM Moissac - 82","suppressions":"urgences de nuit fermé","menaces":"2022 : urgences menacé;2010 : chirurgie menacé","ghi_nom":"","ght_nom":"GHT Tarn et Garonne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[150377.33571803916,5469010.587548542]},"properties":{"id":77,"code_region":"OCC","departement":"82","nom_hopital":"CH Montauban - 82","menaces":"2022 : urgences menacé;2021 : SMUR réduit (autre);2021 : urgences réduit (autre);2015 : chirurgie orthopédique réduit (autre)","ghi_nom":"","ght_nom":"GHT Tarn et Garonne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[152042.23320201764,5467036.001699391]},"properties":{"id":592,"code_region":"OCC","departement":"82","nom_hopital":"Clin. Boyé Montauban - 82","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[153535.9960132273,5466405.92582726]},"properties":{"id":537,"code_region":"OCC","departement":"82","nom_hopital":"Clin. Pont de Chaume Montauban - 82","suppressions":"2021 : maternité fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[123244.92220738792,5471598.793590048]},"properties":{"id":205,"code_region":"OCC","departement":"82","nom_hopital":"Maison Retraite Castelsarrasin - 82","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[687265.8644964477,5476615.740265469]},"properties":{"id":217,"code_region":"PAC","departement":"04","nom_hopital":"CH Digne-Les-Bains- 04","suppressions":"2017 : médecine interne fermé;2013 : chirurgie viscérale transféré;2008 : centre de jour personnes âgées fermé;2008 : centre médico-psychologique (CMP) infento-juvénile fermé;2008 : laboratoire d'analyse des eaux transféré;2008 : pédiatrie fermé","menaces":"2021 : gérontopsychiatrie réduit (autre);2020 : maternité interrompu;2016 : maternité menacé;2013 : bloc opératoire menacé;2013 : neurologie réduit (autre);2013 : ophtalmologie réduit (autre);2013 : réanimation transformé;2013 : urologie réduit (autre);2012 : orthopédie fusionné;2012 : traumatologie fusionné;2008 : alcoologie transformé","ghi_nom":"","ght_nom":"GHT Alpes de Haute Provence","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[626835.5774137209,5472035.386440931]},"properties":{"id":371,"code_region":"PAC","departement":"04","nom_hopital":"CHIM D. Collomp Banon - 04","suppressions":"2019 : soins de suite et rééducation fermé","ghi_nom":"CHIM","ght_nom":"GHT Alpes de Haute Provence","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[646306.5055988255,5439005.695764608]},"properties":{"id":556,"code_region":"PAC","departement":"04","nom_hopital":"CHIM L. Raffalli Manosque - 04","suppressions":"2009 : réanimation fermé;2008 : centre de jour personnes âgées fermé","menaces":"2022 : urgences de nuit interrompu;réanimation menacé","ghi_nom":"CHIM","ght_nom":"GHT Alpes de Haute Provence","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[642951.4829653043,5459341.368911551]},"properties":{"id":372,"code_region":"PAC","departement":"04","nom_hopital":"CHIM Saint-Michel Forcalquier – 04","ghi_nom":"CHIM","ght_nom":"GHT Alpes de Haute Provence","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[677984.9501579328,5437472.130560728]},"properties":{"id":370,"code_region":"PAC","departement":"04","nom_hopital":"CH Lumière Riez - 04","menaces":"2012 : médecine menacé","ghi_nom":"","ght_nom":"GHT Alpes de Haute Provence","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[664539.0457017012,5470089.8653854355]},"properties":{"id":725,"code_region":"PAC","departement":"04","nom_hopital":"EHPAD Lou Cigalou Les Mées - 04","menaces":"2017 : médecine réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Alpes de Haute Provence","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[724483.8215741162,5441783.446446128]},"properties":{"id":373,"code_region":"PAC","departement":"04","nom_hopital":"HL Ducélia Castellane - 04","menaces":"2012 : médecine menacé","ghi_nom":"","ght_nom":"GHT Alpes de Haute Provence","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[740209.3379833968,5525646.159467091]},"properties":{"id":376,"code_region":"PAC","departement":"04","nom_hopital":"HL Pierre Groues Barcelonnette - 04","menaces":"2012 : médecine menacé","ghi_nom":"","ght_nom":"GHT Alpes de Haute Provence","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[682172.2730368492,5444287.442234909]},"properties":{"id":576,"code_region":"PAC","departement":"04","nom_hopital":"HL Puimoisson - 04","ghi_nom":"","ght_nom":"GHT Alpes de Haute Provence","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[666090.7326527196,5440300.892688003]},"properties":{"id":575,"code_region":"PAC","departement":"04","nom_hopital":"HL Saint-Jacques Valensole - 04","ghi_nom":"","ght_nom":"GHT Alpes de Haute Provence","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[707929.3085696327,5520232.501485977]},"properties":{"id":375,"code_region":"PAC","departement":"04","nom_hopital":"HL Vallée de la Blanche Seyne-les-Alpes - 04","menaces":"2012 : médecine menacé","ghi_nom":"","ght_nom":"GHT Alpes de Haute Provence","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[646833.3954518923,5515531.0907492135]},"properties":{"id":731,"code_region":"PAC","departement":"05","nom_hopital":"CH Buëch-Durance Laragne - 05","menaces":"2018 : médecine réduit (lits fermés);2018 : psychiatrie réduit (autre);2012 : médecine menacé","ghi_nom":"CHBD","ght_nom":"GHT Hautes Alpes","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[738400.3778767694,5606719.4890082935]},"properties":{"id":297,"code_region":"PAC","departement":"05","nom_hopital":"CH-Escartons - Briançon - 05","suppressions":"2014 : réanimation fermé","menaces":"2015 : service de surveillance continue menacé;2011 : réanimation menacé;2010 : actes chirurgicaux menacé;pédiatrie menacé","victoires":"2012 : réanimation victoire","ghi_nom":"","ght_nom":"GHT Hautes Alpes","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[676069.3831334435,5552103.799449886]},"properties":{"id":35,"code_region":"PAC","departement":"05","nom_hopital":"CHICAS Gap - 05","suppressions":"2017 : soins intensifs fermé;2009 : cuisine fermé;2009 : radiothérapie fermé;2008 : soins continus polyvalents fermé","menaces":"2010 : radiothérapie interrompu;2009 : chirurgie menacé;2008 : chirurgie réduit (autre);cardiologie réduit (autre);laboratoire réduit (autre);maison de retraite transformé;unité long séjour transformé","ghi_nom":"CHICAS Gap-Sisteron","ght_nom":"GHT Hautes Alpes","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[661647.1662626659,5495388.930073671]},"properties":{"id":374,"code_region":"PAC","departement":"05","nom_hopital":"CHICAS Sisteron - 05","suppressions":"2019 : urgences fermé;2017 : soins intensifs fermé;2009 : bloc opératoire fermé;2009 : chirurgie fermé;2009 : cuisine fermé;2009 : radiothérapie fermé;2008 : soins continus polyvalents fermé;1996 : maternité fermé","menaces":"2009 : laboratoire réduit (autre);2008 : chirurgie réduit (autre);cardiologie réduit (autre)","victoires":"2020 : urgences réouvert","ghi_nom":"CHICAS","ght_nom":"GHT Hautes Alpes","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[722819.9110591973,5552708.966407443]},"properties":{"id":369,"code_region":"PAC","departement":"05","nom_hopital":"HL Embrun - 05","suppressions":"1988 : chirurgie fermé;1986 : maternité fermé","menaces":"2019 : EHPAD réduit (lits fermés)","victoires":"2012 : maison d'enfant à caractère social maintenu","ghi_nom":"","ght_nom":"GHT Hautes Alpes","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[792448.086021956,5403950.914679377]},"properties":{"id":727,"code_region":"PAC","departement":"06","nom_hopital":"CH Antibes-Juan-les-Pins - 06","menaces":"2021 : psychiatrie réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Alpes-Maritimes","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[769887.6885828127,5411394.494359669]},"properties":{"id":426,"code_region":"PAC","departement":"06","nom_hopital":"CH Grasse - 06","menaces":"2016 : réanimation menacé","ghi_nom":"","ght_nom":"GHT Alpes-Maritimes","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[812966.6304521933,5467536.992175578]},"properties":{"id":729,"code_region":"PAC","departement":"06","nom_hopital":"CHI La Vésubie - Roquebillière 06","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[807955.070900693,5476595.545725307]},"properties":{"id":342,"code_region":"PAC","departement":"06","nom_hopital":"CHI La Vésubie Saint-Martin Vésubie - 06","menaces":"2017 : médecine réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Alpes-Maritimes","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[833060.8559769649,5429428.773733747]},"properties":{"id":728,"code_region":"PAC","departement":"06","nom_hopital":"CH Menton - 06","suppressions":"2003 : maternité fermé","ghi_nom":"","ght_nom":"GHT Alpes-Maritimes","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[809649.6477579729,5422373.850289411]},"properties":{"id":293,"code_region":"PAC","departement":"06","nom_hopital":"CHRU du Cimiez Nice - 06","suppressions":"2014 : pédiatrie privatisé","menaces":"2021 : urgences menacé;2012 : médecine menacé","ghi_nom":"","ght_nom":"GHT Alpes-Maritimes","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[779746.4259367544,5398237.135853349]},"properties":{"id":427,"code_region":"PAC","departement":"06","nom_hopital":"CH Simone Veil Cannes - 06","menaces":"2012 : médecine menacé","ghi_nom":"","ght_nom":"GHT Alpes-Maritimes","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[810178.2254361734,5425466.102055137]},"properties":{"id":726,"code_region":"PAC","departement":"06","nom_hopital":"HG Les Sources Nice - 06","suppressions":"2021 : réanimation transféré","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[600636.4378813843,5356274.727630092]},"properties":{"id":468,"code_region":"PAC","departement":"13","nom_hopital":"APHM Conception Marseille - 13","menaces":"2014 : centre IVG menacé","ghi_nom":"APHM","ght_nom":"GHT Bouches-du-Rhône","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[596607.6646056437,5369661.923048299]},"properties":{"id":469,"code_region":"PAC","departement":"13","nom_hopital":"APHM Hôpital Nord Marseille  - 13","suppressions":"laboratoire de microbiologie fermé","menaces":"2012 : cardiologie menacé;2012 : pédiatrie menacé","ghi_nom":"APHM","ght_nom":"GHT Bouches-du-Rhône","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[602227.9196850287,5351691.117343587]},"properties":{"id":466,"code_region":"PAC","departement":"13","nom_hopital":"APHM Ste-Marguerite Marseille - 13","menaces":"2022 : psychiatrie menacé","ghi_nom":"APHM","ght_nom":"GHT Bouches-du-Rhône","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[619367.6549553467,5356524.404406706]},"properties":{"id":229,"code_region":"PAC","departement":"13","nom_hopital":"CH Edmond Garcin Aubagne - 13","suppressions":"2022 : ophtalmologie fermé","menaces":"2020 : réanimation transformé;2019 : chirurgie réduit (lits fermés);2010 : réanimation menacé;2009 : anesthésie réduit (autre);2009 : chirurgie réduit (autre);2009 : pédiatrie réduit (autre)","victoires":"2012 : IRM victoire","ghi_nom":"","ght_nom":"GHT Bouches-du-Rhône","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[605942.4091723155,5393830.5544386925]},"properties":{"id":228,"code_region":"PAC","departement":"13","nom_hopital":"CHIAP Aix en Provence - 13","menaces":"2021 : chirurgie menacé;2021 : rhumatologie menacé;2021 : SMUR interrompu;2021 : urgences réduit (autre);2012 : médecine menacé","ghi_nom":"CHI Aix-Pertuis","ght_nom":"GHT Bouches du Rhône","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[515823.50198622467,5412588.025005357]},"properties":{"id":34,"code_region":"PAC","departement":"13","nom_hopital":"CH Joseph Imbert Arles - 13","menaces":"2021 : SMUR menacé;2019 : SMUR interrompu","ghi_nom":"","ght_nom":"GHT Bouches-du-Rhône","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[599177.1301260444,5350079.438043527]},"properties":{"id":467,"code_region":"PAC","departement":"13","nom_hopital":"Clin. Bonne Veine Marseille - 13","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[602802.559376698,5361812.849287661]},"properties":{"id":591,"code_region":"PAC","departement":"13","nom_hopital":"HIA Laveran Marseille - 13","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[659819.9474593403,5331305.426447987]},"properties":{"id":538,"code_region":"PAC","departement":"83","nom_hopital":"CH Chalucet Toulon – 83","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[669613.7770091183,5332156.577397189]},"properties":{"id":539,"code_region":"PAC","departement":"83","nom_hopital":"CH Clémenceau – 83","ghi_nom":"CHI Toulon-La Seyne","ght_nom":"GHT du Var","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[717476.6122559295,5396005.775656028]},"properties":{"id":435,"code_region":"PAC","departement":"83","nom_hopital":"CH Dracénie Draguignan - 83","suppressions":"2021 : urgences de nuit fermé","menaces":"2021 : psychiatrie menacé;2018 : réanimation menacé","ghi_nom":"","ght_nom":"GHT du Var","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[680454.7789544034,5330174.048985047]},"properties":{"id":3,"code_region":"PAC","departement":"83","nom_hopital":"CH Hyères - 83","suppressions":"2015 : bloc opératoire de nuit fermé;2015 : réanimation fermé;2009 : soins longue durée fermé;2008 : USIC fermé","menaces":"2018 : maternité menacé;2015 : chirurgie menacé;2013 : réanimation menacé;2009 : médecine polyvalente réduit (lits fermés);2008 : cardiologie réduit (autre);2007 : médecine polyvalente transformé","ghi_nom":"","ght_nom":"GHT du Var","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[751548.1700981557,5379039.396853083]},"properties":{"id":732,"code_region":"PAC","departement":"83","nom_hopital":"CHIFSR Bonnet - 83","ghi_nom":"","ght_nom":"GHT du Var","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[653579.3864656424,5328476.189612297]},"properties":{"id":296,"code_region":"PAC","departement":"83","nom_hopital":"CHITS La Seyne-sur-Mer - 83","suppressions":"2012 : maternité transféré;2010 : chirurgie fermé;2008 : pédiatrie fermé;laboratoire fermé","menaces":"2021 : médecine réduit (lits fermés);2021 : soins palliatifs interrompu;chirurgie menacé;hospitalisation menacé","victoires":"2011 : maternité maintenu","ghi_nom":"CHITS Toulon-La Seyne","ght_nom":"GHT du Var","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[665205.335694298,5330859.266361044]},"properties":{"id":60,"code_region":"PAC","departement":"83","nom_hopital":"CHITS Toulon - 83","menaces":"2021 : médecine réduit (autre)","ghi_nom":"CHI Toulon-La-Seyne","ght_nom":"GHT du Var","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[675328.3486039973,5373649.955962577]},"properties":{"id":294,"code_region":"PAC","departement":"83","nom_hopital":"CH Jean Marcel Brignoles - 83","menaces":"2021 : SMUR menacé;2015 : chirurgie menacé","ghi_nom":"","ght_nom":"GHT du Var","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[731503.4946827863,5349985.801285744]},"properties":{"id":295,"code_region":"PAC","departement":"83","nom_hopital":"CH-PS Saint-Tropez - 83","suppressions":"chirurgie fermé","menaces":"2018 : maternité menacé","ghi_nom":"","ght_nom":"GHT du Var","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[753669.6467823647,5376732.4944872735]},"properties":{"id":733,"code_region":"PAC","departement":"83","nom_hopital":"CH Saint-Raphaël - 83","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[660559.5686824099,5332311.6036748355]},"properties":{"id":580,"code_region":"PAC","departement":"83","nom_hopital":"HIA Sainte-Anne Toulon - 83","suppressions":"ravitaillement sanitaire des armées fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[559657.5882704428,5472744.969158484]},"properties":{"id":218,"code_region":"PAC","departement":"84","nom_hopital":"CH Carpentras - 84","suppressions":"1994 : chirurgie fermé","ghi_nom":"","ght_nom":"GHT du Vaucluse","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[534579.2534145666,5453024.590507575]},"properties":{"id":219,"code_region":"PAC","departement":"84","nom_hopital":"CH Henri Duffaut Avignon - 84","menaces":"2019 : urgences psychiatriques réduit (autre);2014 : urgences menacé","ghi_nom":"","ght_nom":"GHT du Vaucluse","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[612187.0364474168,5418221.988992467]},"properties":{"id":221,"code_region":"PAC","departement":"84","nom_hopital":"CHIAP Pertuis - 84","suppressions":"2007 : chirurgie fermé","menaces":"2021 : SMUR de nuit interrompu;2021 : urgences réduit (autre);2020 : urgences de nuit interrompu;unité long séjour réduit (lits fermés)","victoires":"2020 : urgences de nuit maintenu","ghi_nom":"CHI Aix-Pertuis","ght_nom":"GHT Bouches du Rhône","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[560763.1873655785,5440781.81893484]},"properties":{"id":27,"code_region":"PAC","departement":"84","nom_hopital":"CHICL Cavaillon - 84","suppressions":"chirurgie osseuse fermé","menaces":"2014 : chirurgie digestive menacé;gynécologie réduit (autre)","ghi_nom":"","ght_nom":"GHT du Vaucluse","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[590421.557119362,5428113.552670544]},"properties":{"id":734,"code_region":"PAC","departement":"84","nom_hopital":"CHICL Lauris - 84","ghi_nom":"CHICL","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[555634.5370209417,5524876.415156827]},"properties":{"id":451,"code_region":"PAC","departement":"84","nom_hopital":"CH Niel Valréas - 84","suppressions":"2009 : maternité fermé;2008 : chirurgie fermé;2008 : soins continus fermé","menaces":"2008 : chirurgie gynécologique réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT du Vaucluse","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[599125.8306823038,5446244.968715059]},"properties":{"id":220,"code_region":"PAC","departement":"84","nom_hopital":"CHPA Apt - 84","suppressions":"2016 : maternité fermé","menaces":"2019 : urgences réduit (autre);2016 : chirurgie menacé;2013 : maternité menacé;2012 : chirurgie réduit (autre)","victoires":"2015 : maternité maintenu","ghi_nom":"","ght_nom":"GHT du Vaucluse","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[564948.8099324863,5502614.166243142]},"properties":{"id":452,"code_region":"PAC","departement":"84","nom_hopital":"CH Vaison la romaine - 84","suppressions":"2001 : chirurgie fermé;1992 : maternité transféré","ghi_nom":"","ght_nom":"GHT du Vaucluse","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-158262.18426303906,5962593.926240339]},"properties":{"id":713,"code_region":"PDL","departement":"44","nom_hopital":"CH Château-Thébaud - 44","suppressions":"2009 : soins longue durée fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-130468.6444818857,6003338.986890126]},"properties":{"id":707,"code_region":"PDL","departement":"44","nom_hopital":"CHEL Ancenis - 44","suppressions":"2021 : SMUR fermé","menaces":"2021 : médecine interrompu","ghi_nom":"CH Erdre et Loire","ght_nom":"GHT Loire Atlantique","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-153760.38706029445,6061392.769023389]},"properties":{"id":211,"code_region":"PDL","departement":"44","nom_hopital":"CHICNP Châteaubriant - 44","suppressions":"chirurgie fermé","ghi_nom":"CHICNP","ght_nom":"GHT Loire Atlantique","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-180957.37491927692,6034228.016097043]},"properties":{"id":711,"code_region":"PDL","departement":"44","nom_hopital":"CHICNP Nozay - 44","suppressions":"soins de suite et rééducation fermé","ghi_nom":"CHICNP","ght_nom":"GHT Loire Atlantique","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-130770.66186526454,6063908.477969796]},"properties":{"id":712,"code_region":"PDL","departement":"44","nom_hopital":"CHICNP Pouancé - 44","suppressions":"soins de suite et rééducation fermé","ghi_nom":"","ght_nom":"GHT Loire Atlantique","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-269875.74113942945,5995176.635707991]},"properties":{"id":288,"code_region":"PDL","departement":"44","nom_hopital":"CHI Guérande - 44","ghi_nom":"CHI de la Presqu'île","ght_nom":"GHT Loire Atlantique","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-229848.08075102043,5960226.539907765]},"properties":{"id":710,"code_region":"PDL","departement":"44","nom_hopital":"CHIPR Pornic - 44","menaces":"soins de suite et rééducation réduit (lits fermés)","ghi_nom":"CHI du Pays de Retz","ght_nom":"GHT Loire Atlantique","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-251207.6525834879,5985843.131231919]},"properties":{"id":212,"code_region":"PDL","departement":"44","nom_hopital":"CH Saint Nazaire - 44","menaces":"2020 : urgences interrompu","ghi_nom":"","ght_nom":"GHT Loire Atlantique","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-202660.2285922041,6018513.632663908]},"properties":{"id":62,"code_region":"PDL","departement":"44","nom_hopital":"CHS Blain – 44","menaces":"2009 : psychiatrie réduit (autre)","ghi_nom":"","ght_nom":"GHT Loire Atlantique","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-182528.20515442212,5980722.458554923]},"properties":{"id":599,"code_region":"PDL","departement":"44","nom_hopital":"CHU Nord Laennec Saint-Herblain - 44","menaces":"2021 : cardiologie menacé;2021 : urgences menacé;2021 : urgences pédiatriques menacé","ghi_nom":"","ght_nom":"GHT Loire Atlantique","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-171063.1573282742,5974443.050493103]},"properties":{"id":213,"code_region":"PDL","departement":"44","nom_hopital":"CHU Sud Saint-Jacques Nantes - 44","menaces":"2022 : psychiatrie interrompu;2021 : pédiatrie réduit (autre);2018 : chirurgie interrompu;centre IVG menacé","ghi_nom":"","ght_nom":"GHT Loire Atlantique","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-174350.02783317826,5935308.790146759]},"properties":{"id":709,"code_region":"PDL","departement":"44","nom_hopital":"HL Bel Air Corcoué-sur-Logne - 44","ghi_nom":"","ght_nom":"GHT Loire Atlantique","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99805.89106010275,5949024.570536333]},"properties":{"id":686,"code_region":"PDL","departement":"49","nom_hopital":"CH Cholet - 49","suppressions":"2021 : urgences de nuit fermé","menaces":"2021 : psychiatrie réduit (lits fermés);service ouvert d’hospitalisation en psychiatrie menacé","ghi_nom":"","ght_nom":"GHT Maine et Loire","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-114948.88577409882,6034000.399273659]},"properties":{"id":777,"code_region":"PDL","departement":"49","nom_hopital":"CHEL Candé - 49","ghi_nom":"CHEL","ght_nom":"GHT Loire Atlantique","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-96438.55974292754,6053464.572428452]},"properties":{"id":716,"code_region":"PDL","departement":"49","nom_hopital":"CHHA Segré-en-Anjou - 49","suppressions":"1995 : maternité fermé","ghi_nom":"CHHA","ght_nom":"GHT Maine et Loire","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-30235.292458742842,5973639.432959171]},"properties":{"id":715,"code_region":"PDL","departement":"49","nom_hopital":"CHL Doué-la-Fontaine - 49","suppressions":"1987 : maternité fermé","ghi_nom":"","ght_nom":"GHT Maine et Loire","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-6797.494883647725,5982508.178679458]},"properties":{"id":6,"code_region":"PDL","departement":"49","nom_hopital":"CH Saumur - 49","suppressions":"chirurgie fermé","menaces":"2021 : maternité interrompu","ghi_nom":"","ght_nom":"GHT Maine et Loire","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-61905.83623741063,6021416.471037884]},"properties":{"id":158,"code_region":"PDL","departement":"49","nom_hopital":"CHU Angers - 49","suppressions":"2019 : soins longue durée fermé","menaces":"2021 : réanimation menacé","victoires":"2021 : réanimation victoire","ghi_nom":"","ght_nom":"GHT Maine et Loire","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-63818.453239150345,6019964.61031231]},"properties":{"id":748,"code_region":"PDL","departement":"49","nom_hopital":"CHU PMS Saint-Nicolas Angers - 49","ghi_nom":"CHU","ght_nom":"GHT Maine et Loire","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-62680.949490420535,6011240.626482093]},"properties":{"id":714,"code_region":"PDL","departement":"49","nom_hopital":"CSM Angevin Saint-Gemmes -49","ghi_nom":"","ght_nom":"GHT Maine et Loire","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-56084.79558029412,6022005.509133236]},"properties":{"id":157,"code_region":"PDL","departement":"49","nom_hopital":"Saint Barthélémy d'Anjou - 49\nLa Claverie","menaces":"2017 : prise en charge obésité interrompu;soins de suite menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-77958.9460955486,6078133.101534497]},"properties":{"id":681,"code_region":"PDL","departement":"53","nom_hopital":"CHHA Château-Gontier - 53","menaces":"2021 : urgences réduit (autre)","ghi_nom":"CHHA","ght_nom":"GHT Mayenne-Haut Anjou","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-87272.52036834136,6117454.350594653]},"properties":{"id":687,"code_region":"PDL","departement":"53","nom_hopital":"CH Laval - 53","menaces":"2022 : urgences interrompu;2021 : psychiatrie menacé;2021 : soins continus interrompu","ghi_nom":"","ght_nom":"GHT Mayenne et Haut-Anjou","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-45561.44727594033,6133115.648644104]},"properties":{"id":717,"code_region":"PDL","departement":"53","nom_hopital":"CHL Évron - 53","menaces":"2021 : médecine réduit (lits fermés);2021 : soins de suite réduit (lits fermés)","ghi_nom":"","ght_nom":"GHT Mayenne et Haut-Anjou","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-69103.45632202552,6157959.345470184]},"properties":{"id":206,"code_region":"PDL","departement":"53","nom_hopital":"CHNM Mayenne - 53","suppressions":"2021 : urgences de nuit fermé;2019 : SMUR fermé","menaces":"2022 : maternité menacé;2022 : maternité réduit (autre);2020 : chirurgie menacé;2018 : maternité interrompu;2018 : urgences interrompu","victoires":"2021 : chirurgie maintenu;2021 : unité de surveillance continue maintenu","ghi_nom":"CHNM Nord Mayenne","ght_nom":"GHT Mayenne-Haut Anjou","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-106597.58106326309,6081610.088704179]},"properties":{"id":642,"code_region":"PDL","departement":"53","nom_hopital":"HLSOM Craon - 53","ghi_nom":"HLSOM","ght_nom":"GHT Mayenne-Haut Anjou","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-118631.12928722428,6072682.11112508]},"properties":{"id":641,"code_region":"PDL","departement":"53","nom_hopital":"HLSOM Renazé - 53","ghi_nom":"HLSOM","ght_nom":"GHT Mayenne-Haut Anjou","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[46777.85836475342,6055603.801794085]},"properties":{"id":559,"code_region":"PDL","departement":"72","nom_hopital":"CH Château-du-Loir 72","menaces":"2022 : urgences menacé;2021 : urgences interrompu","ghi_nom":"","ght_nom":"GHT de la Sarthe","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[41020.531694461926,6165072.145840512]},"properties":{"id":421,"code_region":"PDL","departement":"72","nom_hopital":"CHICAM Mamers - 72","suppressions":"2013 : chambre mortuaire fermé;chirurgie fermé","ghi_nom":"CHIC Alençon-Mamers","ght_nom":"GHT Orne-Perche Saosnois","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-17985.260509267453,6068366.856561188]},"properties":{"id":391,"code_region":"PDL","departement":"72","nom_hopital":"CHI PSSL Le Bailleul - 72","suppressions":"2021 : urgences fermé;2018 : centre IVG fermé","menaces":"2021 : bloc opératoire menacé;2021 : maternité menacé;2021 : urgences interrompu;2021 : urgences réduit (autre);2019 : urgences de nuit interrompu","ghi_nom":"CHI PSSL","ght_nom":"GHT de la Sarthe","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[73756.86757338048,6138417.829344574]},"properties":{"id":682,"code_region":"PDL","departement":"72","nom_hopital":"CH Paul Chapron La Ferté-Bernard - 72","suppressions":"2021 : urgences fermé","ghi_nom":"","ght_nom":"GHT de la Sarthe","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[82649.11932490782,6093337.751703883]},"properties":{"id":389,"code_region":"PDL","departement":"72","nom_hopital":"CH Saint Calais - 72","suppressions":"2010 : chirurgie fermé","ghi_nom":"","ght_nom":"GHT de la Sarthe","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[18055.65816267205,6100078.131829575]},"properties":{"id":718,"code_region":"PDL","departement":"72","nom_hopital":"EPSM de la Sarthe Allones - 72","ghi_nom":"","ght_nom":"GHT de la Sarthe","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[21968.65477696244,6108106.511823824]},"properties":{"id":364,"code_region":"PDL","departement":"72","nom_hopital":"Le Mans - 72","suppressions":"2020 : réanimation pédiatrique fermé","menaces":"2020 : réanimation néonatale menacé;2018 : soins palliatifs interrompu;2012 : centre IVG menacé","ghi_nom":"","ght_nom":"GHT de la Sarthe","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[13391.137967068666,6144843.807915299]},"properties":{"id":719,"code_region":"PDL","departement":"72","nom_hopital":"PHG Beaumont-sur-Sarthe - 72","ghi_nom":"PHG Nord-Sarthe","ght_nom":"GHT de la Sarthe","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[47230.90827639029,6137642.411976475]},"properties":{"id":720,"code_region":"PDL","departement":"72","nom_hopital":"PHG Bonnétable - 72","ghi_nom":"PHG Nord-Sarthe","ght_nom":"GHT de la Sarthe","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-13695.71366520971,6137845.616715711]},"properties":{"id":721,"code_region":"PDL","departement":"72","nom_hopital":"PHG Sillé-le-Guillaume - 72","ghi_nom":"PHG Nord-Sarthe","ght_nom":"GHT de la Sarthe","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-194910.033054603,5863290.495035904]},"properties":{"id":188,"code_region":"PDL","departement":"85","nom_hopital":"CH Côte de Lumière - Les Sables-d'Olonne - 85","suppressions":"2006 : chirurgie fermé","menaces":"2021 : urgences interrompu","ghi_nom":"","ght_nom":"GHT Vendée","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-92135.34297826514,5855277.602226037]},"properties":{"id":189,"code_region":"PDL","departement":"85","nom_hopital":"CH Fontenay le Comte - 85","suppressions":"2015 : hospitalisation psychiatrique fermé;2004 : chirurgie fermé","menaces":"2020 : maternité menacé;2020 : pédiatrie menacé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-105731.36782550439,5940644.596157309]},"properties":{"id":665,"code_region":"PDL","departement":"85","nom_hopital":"CHL Mortagne-sur-Sèvre - 85","suppressions":"activité sanitaire fermé","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-208484.40629446492,5917077.8420919515]},"properties":{"id":722,"code_region":"PDL","departement":"85","nom_hopital":"CHLVO Challans - 85","menaces":"2022 : médecine polyvalente menacé;soins de suite et rééducation réduit (autre)","ghi_nom":"","ght_nom":"GHT Vendée","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-157319.3636242673,5888088.776566551]},"properties":{"id":590,"code_region":"PDL","departement":"85","nom_hopital":"GHD La Roche-sur-Yon - 85","suppressions":"2019 : ménage sous-traité","menaces":"2008 : standard réduit (autre)","ghi_nom":"GHD Vendée","ght_nom":"GHT Vendée","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-130511.98487662492,5852838.191880234]},"properties":{"id":301,"code_region":"PDL","departement":"85","nom_hopital":"GHD Luçon - 85","suppressions":"2021 : accueil de jour Alzheimer fermé;2019 : réadaptation fonctionnelle fermé;2019 : stérilisation transféré;2004 : laboratoire transféré;2004 : maison de retraite personnes valides fermé;2003 : cardiologie fermé;2003 : diabétologie semaine fermé;2001 : chirurgie 24/24 fermé;2001 : maternité fermé;nettoyage sous-traité","menaces":"2021 : SMUR menacé;2021 : urgences interrompu;2008 : standard réduit (autre);2003 : médecine spécialisée transformé","ghi_nom":"GHD Vendée","ght_nom":"GHT Vendée","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-145823.80395647584,5937080.560302414]},"properties":{"id":58,"code_region":"PDL","departement":"85","nom_hopital":"GHD Montaigu - 85","suppressions":"2000 : chirurgie fermé;1998 : maternité fermé","menaces":"2021 : urgences interrompu;2015 : SMUR de nuit menacé","ghi_nom":"GHD Vendée","ght_nom":"GHT Vendée","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-214081.1820765778,5892570.681470294]},"properties":{"id":187,"code_region":"PDL","departement":"85","nom_hopital":"Saint Gilles Croix de Vie - 85","ghi_nom":"","ght_nom":"","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[209267.38628564076,5809054.968413241]},"properties":{"id":923,"departement":"23","nom_hopital":"Clinique de la Marche Guéret - 23","menaces":"chirurgie menacé","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[17248.64120111987,6100804.824023411]},"properties":{"id":921,"nom_hopital":"Centre Gériatrie Charles Drouet Allones - 72","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99051.15980693698,5345197.882546192]},"properties":{"id":920,"nom_hopital":"CH Mauléon-Licharre - 64","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-245172.93609610572,6137814.796357902]},"properties":{"id":922,"nom_hopital":"CH Saint-Méen le Grand - 35","suppressions":"2022 : soins de suite et rééducation fermé","ght_nom":"GHT Haute Bretagne","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99848.62906371806,6247879.841178919]},"properties":{"id":919,"nom_hopital":"Clinique Notre-Dame Vire - 14","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[643556.2389073068,5438283.884818354]},"properties":{"id":917,"nom_hopital":"Clinique Toutes Aures Manosque - 04","département":"non défini","région":"non définie"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[80169.09721103312,5625641.914444466]},"properties":{"id":918,"nom_hopital":"EHPAD Korian Vergt - 24","département":"non défini","région":"non définie"}}]},
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