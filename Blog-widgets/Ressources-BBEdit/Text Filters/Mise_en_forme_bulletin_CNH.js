#!/usr/bin/env node

const fs = require('fs');

try {
    // Lecture de l'entrée standard (stdin) fournie par BBEdit
    const input = fs.readFileSync(0, 'utf-8');
    
    // Traitement du texte (exemple : convertir chaque ligne en majuscules)
    const output = input.toUpperCase();
    
    // Écriture du résultat sur la sortie standard (stdout)
    process.stdout.write(output);
} catch (err) {
    console.error('Erreur lors du traitement :', err);
    process.exit(1);
}