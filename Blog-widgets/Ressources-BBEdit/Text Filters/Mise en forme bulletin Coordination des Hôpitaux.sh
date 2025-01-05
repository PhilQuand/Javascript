#!/usr/bin/env bash

# Nettoyage du code HTML des bulletins d'information de la Coordination 

#sed  -n "/<p[^>]*>\ <\/p>/d;"
#sed  -e "/<p[^>]*>\ <\/p>/d;" -e "/<p[^>]*><u><\/u>\ <u><\/u><\/p>/d; /<p[^>]*><b><u><\/u>\ <u><\/u><\/b><\/p>/d; /<p[^>]*><span[^>]*><u><\/u>\ <u><\/u><\/span><\/p>/d; /<p[^>]*><b><span[^>]*><u><\/u>\ <u><\/u><\/span><\/b><\/p>/d; s/[\ ]*font-size\:[^;]*;[\ ]*//g; s/<u><\/u>//g; s/[\ ]*line-height\:[^;]*;[\ ]*//g;";
Ech="L’écho des comités :";
Aut="Autres infos locales :";
Dos="Dossiers :";
Cul="Culture et santé :";
sed -e 's/<p><a/<p align=center><a/g' -e 's/<\/strong><strong>//g' -e 's/<br clear="left" \/>//g' -e 's/<img src/<img align=center class="skip-lazy" style="max-width: 400px;" src/' -e "s/\<br \/\>/\<\/p\>\\n\<p\>/g" -e "/<p[^>]*>\ <\/p>/d;" -e "/<p[^>]*><\/p>/d;" -e "/<p[^>]*><strong>\ <\/strong><\/p>/d;" -e "/<p[^>]*><strong><\/strong><\/p>/d;" -e "s/<p><strong>$Ech<\/strong><\/p>/<p class=\"rubrique écho_des_comités\">$Ech<\/p>/" -e "s/<p><strong>$Aut<\/strong><\/p>/\n<p class=\"rubrique\">$Aut<\/p>/" -e "s/<p><strong>$Dos<\/strong><\/p>/\n<p class=\"rubrique\">$Dos<\/p>\n/" -e "s/<p><strong>$Cul<\/strong><\/p>/\n<p class=\"rubrique\">$Cul<\/p>\n/"