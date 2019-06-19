#!/usr/bin/env bash

# Application des bonnes règles typographiques pour la ponctuation française
# Dans les documents imprimés, et avec l’aide de logiciel de mise en pages professionnel, on peut insérer une espace fine sécable ou une espace fine insécable. Il en est de même pour la plupart des espaces qui existent dans leurs versions sécables ou insécables.
# Dans les documents HTML, l’exemple le plus connu d’espace insécable est l’entité : « &nbsp; », celle-ci a les mêmes propriétés que l’espace régulière, avec l’avantage de garder sur une même ligne les caractères étant de chaque côté. Pour l’espace fine, l’entité « &thinsp; » est supportée par la plupart des fureteurs récents. Mais l’entité « &thinsp; » est sécable, ce qui veut dire qu’en fin de ligne les caractères suivants seront poussés à la ligne suivante.
# S’il y a bien une espace difficile à reproduire sur Internet, c’est bien l’espace fine insécable. Celle-ci n’est tout simplement pas définie dans la norme Unicode. Alors que plusieurs opteront pour l’utilisation de l’espace insécable ordinaire « &nbsp; », ce n’est pas la bonne solution.
# Heureusement, Unicode définit le « NARROW NO-BREAK SPACE », utilisant l’entité numérique : « &#8239; ». Cette espace étroite est insécable et peut être utilisée à la perfection comme espace fine insécable dans tout document HTML.
# En typographie soignée, on prendra donc soin d’utiliser l’entité « &#8239; » comme espace fine insécable.
# voir https://www.typofute.com/l_espace_fine_insecable_dans_les_documents_html
#
# le script suivant permet d'insérer un espace fine insecable entre les caractères : ; ? ! » d'un texte et celui qui n'est pas un espace et qui le précède, ou le caractère « et celui qui n'est pas un espace et qui le suit, en dehors de ceux inclus entre la balise ouvrante < et fermante >, pour protéger les balises HTML.
# il peut être utiliser comme Text Filter de BBedit, dans ce cas, la modification porte sur le bloc de texte sélectionné et pour être utilisé en tant que tel, le script doit être placé dans le répertoire ~/Library/Application Support/BBEdit/Text Filters

  esp=" " ;     # espace
  nbsp=" " ;    # espace insécable
  fin=" " ;     # espace fin insécable
  del="¥"; # élément de décoration des bornes de traitement
  des1="ŷ"; # élément de décoration protégeant la borne > des scripts
  des2="Ħ";
  deso="Ɔ"; # élément de décoration protégeant la borne > des scripts
  desf="Ƈ";
  dec="Ƣ"; # élément de décoration des caractères : ; ? ! pour traitement
  go="«" ;      # guillemet gauche
  gf="»" ;      # guillemet droit
  gon="Ə" ;      # guillemet gauche
  gfn="ǟ" ;      # guillemet droit
  tib1="–" ; tib2="Ĵ" ;
  agr1="à" ; agr2="Õ" ;
  
#sed -e ":a" -e "s/\(>[^<]*\)$esp+*$esp/\1$esp/"  -e "ta"
#sed -e "s/'[^']*'/$del&$del/g" -e ":a" -e "s/\($del'[^$del]*\)--/\1X-X-X/" -e "ta" -e "s/$del//g";
#<script> -- 'this -- world --is'-- beautiful -- beautiful' --thanks-- we'-- are-- herep></script>
#<p>hell -- 'this -- world --is'-- beautiful -- beautiful' --thanks-- we'-- are-- here<p>
#<script> -- <> 'this -- world <> --is'-- <> beautiful -- beautiful' --thanks-- we'-- are-- herep></script>
#<phell -- 'this -- world --is'-- beautiful -- beautiful' --thanks-- we'-- are-- herep>
#<p>hell -- 'this -- world --is'< test -- test -- >-- beautiful -- beautiful' --thanks-- we'-- are-- here<p>
sed -e "s/$agr1/$agr2/g" -e "s/$tib1/$tib2/g" -e "s/\([$esp|$nbsp|$fin]*\)$gf/$fin$gf/g" -e "s/$go\([$esp|$nbsp|$fin]*\)/$go$fin/g" -e "s/$go/$gon/g" -e "s/$gf/$gfn/g" -e "s/<script/$des1/g"  -e "s/script>/$des2/g" -e "s/$des1[^$des2]*$des2/$del&$del/g" -e ":a" -e "s/\($del$des1[^$del]*\)>/\1$deso/" -e "ta" -e ":b" -e "s/\($del$des1[^$del]*\)</\1$desf/" -e "tb" -e "s/$del//g" -e "s/$des1/<script/g" -e "s/$des2/script>/g" | sed -e "s/>[^<]*</$del&$del/g" | sed -e "s/\([\?\!\:\;]\)/$dec\1$dec/g" -e ":a" -e "s/\($del>[^$del]*\)\([^\($esp$nbsp$fin\)]\)[$esp$nbsp$fin]*$dec\([\?\!\:\;]\)$dec[$esp$nbsp$fin]*/\1\2$fin\3$esp/" -e "ta" -e "s/$dec//g" | sed -e "s/\%[\%]*/$dec&$dec/g" -e ":a" -e "s/\($del>[^$del]*\)\([^\($esp$nbsp$fin\)]\)[$esp$nbsp$fin]*$dec\(\%[\%]*\)$dec[$esp$nbsp$fin]*/\1\2\%$esp/" -e "ta" -e "s/$dec//g" | sed -e "s/\.[\.]*/$dec&$dec/g" -e ":a" -e "s/\($del>[^$del]*\)\([^\($esp$nbsp$fin\)]\)[$esp$nbsp$fin]*$dec\(\.[\.]*\)$dec[$esp$nbsp$fin]*/\1\2\3$esp/" -e "ta" -e "s/$dec//g" | sed -e "s/\,[\,]*/$dec&$dec/g" -e ":a" -e "s/\($del>[^$del]*\)\([^\($esp$nbsp$fin\)]\)[$esp$nbsp$fin]*$dec\(\,[\,]*\)$dec[$esp$nbsp$fin]*/\1\2\,$esp/" -e "ta" -e "s/$dec//g" | sed -e "s/\…[\…]*/$dec&$dec/g" -e ":a" -e "s/\($del>[^$del]*\)\([^\($esp$nbsp$fin\)]\)[$esp$nbsp$fin]*$dec\(\…[\…]*\)$dec[$esp$nbsp$fin]*/\1\2\…$esp/" -e "ta" -e "s/$dec//g" | sed -e ":a" -e "s/\($del>[^$del]*\)[$esp]$esp/\1$esp/" -e "ta" | sed -e "s/$del//g" -e "s/$deso/>/g" -e "s/$desf/</g" -e "s/$gon/$go/g" -e "s/$gfn/$gf/g" -e "s/$tib2/$tib1/g" -e "s/$agr2/$agr1/g"















