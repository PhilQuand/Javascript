#!/usr/bin/env bash

# Nettoyage du code HTML des bulletins d'information de la Coordination 

sed -E "/<p[^>]*><u><\/u>\ <u><\/u><\/p>/d; /<p[^>]*><b><u><\/u>\ <u><\/u><\/b><\/p>/d; /<p[^>]*><span[^>]*><u><\/u>\ <u><\/u><\/span><\/p>/d; /<p[^>]*><b><span[^>]*><u><\/u>\ <u><\/u><\/span><\/b><\/p>/d; s/[\ ]*font-size\:[^;]*;[\ ]*//g; s/<u><\/u>//g; s/[\ ]*line-height\:[^;]*;[\ ]*//g;";
