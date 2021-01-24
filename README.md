# Sequence Alignment Wizard

## About
Simple app to align two sequences. Created with PostgreSQL, Node.js, Express, and React and using the Needleman-Wunsch algorithm for global alignment.

See it in action here:
https://sequence-aligner-wizard.herokuapp.com/

## Introduction
Sequence alignment has a number of applications, including phylogenetic analysis, genome assembly, and NLP.
Though this alignment tool can be used with any sequence drawn alphanumerically, in biology, we are interested in DNA or protein sequences. DNA sequences are represented by the letters A, C, T, and G for Adenine, Cytosine, Thymine, and Guanine while protein sequences contain representations of the 20 amino acids.

Since the sequences may not be identical, alignments may include indel mutations (insertions or deletions) or substitutions. For instance, given the sequences GCTAATCCCGG and CATCATGGA, possible alignments could be:

GCTAATCCCGG-
||||||||||||
---CATCATGGA

or

GCTAATCCCGG
|||||||||||
-CATCATGGA-

Because the first requires fewer mutations, that is the best possible alignment.

## Installation & Set-Up
To run this project locally:
```
createdb sequence_aligner
npm install

```

NPM scripts:
- Start the server: npm run start
- Start the server in dev mode: npm run start:dev

## Next Steps:
- Option for local alignment with Smith-Waterman algorithm
- Show all possible alignments and their % matches
- Multiple sequence alignment
