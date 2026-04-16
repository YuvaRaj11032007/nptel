# Week 8

## Sources
* [Week 8 Lecture 1](https://res.cloudinary.com/dswl0hmsi/image/upload/q_auto/f_auto/v1775654408/Week8_Lecture-1_compressed_ovbllg.pdf) - Genomic Repeats, simple & complex repeats, RepeatMasker, Tandem Repeat Finder
* [Week 8 Lecture 2](https://res.cloudinary.com/dswl0hmsi/image/upload/q_auto/f_auto/v1775654408/Week8_Lecture-2_compressed_wmvwzl.pdf) - Transcriptome assembly using Trinity, MAKER pipeline for Coding Gene Prediction
* [Week 8 Lecture 3](https://res.cloudinary.com/dswl0hmsi/image/upload/q_auto/f_auto/v1775654409/Week8_Lecture-3_compressed_ojlasv.pdf) - Non-coding RNAs (tRNA, rRNA, miRNA), Functional/Pathway annotation using eggNOG-mapper and KEGG

## Summary

Week 8 focuses entirely on unlocking the biological meaning encoded within a finished genomic sequence by identifying its structural repeats, coding genes, and functional pathways.

The week starts by masking **Genomic Repeats**—the "dark matter" of genomes which can occupy up to 90% of eukaryotic DNA. Repeats are sorted into **Tandem Repeats** (satellites and microsatellites) and **Dispersed/Interspersed Repeats** (Transposons like active LINEs and SINEs). Masking these mathematically using tools like `RepeatMasker` (relying on homology libraries like Repbase or Dfam) or `Tandem Repeat Finder` (predicting repeats de novo) is a mandatory step before gene prediction.

Once masked, identifying active genes is primarily driven by **Transcriptomics (RNA-Seq)**. The week heavily details the `Trinity` software suite, an open-source standard for *de novo* transcriptome assembly via k-mer derived de Bruijn graphs. Assembled RNA transcripts act as physical evidence and are piped into the **MAKER pipeline**, an automated annotation wrapper. MAKER aligns RNA transcripts and homologous proteins to the naked genome, runs ab initio mathematical prediction algorithms (like Augustus or SNAP), and outputs highly-polished Coding Gene annotations scored optimally by minimizing the Annotation Edit Distance (AED). 

Finally, Lecture 3 outlines non-coding genes and functional annotation. Identifying crucial non-coding housekeeping elements requires specific algorithms: `tRNAscan-SE` (utilizing Infernal covariance models for tRNA), `Barrnap` (HMM-based searches for 16S/23S/28S rRNA), and querying databases like `miRBase` for microRNAs. The functional meaning of all predicted coding genes is resolved by assigning them to Orthologous Groups using `eggNOG-mapper` and linking them directly to chemical/metabolic pathways utilizing `KEGG` (Kyoto Encyclopedia for Genes and Genomes, via the KAAS server).

## Entities
* **RepeatMasker**: The gold-standard application for identifying, classifying, and masking interspersed repeats and low-complexity regions utilizing repeat sequence libraries.
* **Trinity**: The state-of-the-art *de novo* RNA-Seq assembler. It operates in 3 distinct phases: Inchworm (extracting abundant k-mers into contigs), Chrysalis (clustering into graphs), and Butterfly (traversing graphs to print complete gene isoforms). 
* **MAKER**: An expansive gene-annotation pipeline. It synthesizes inputs from RepeatMaskers, RNA evidence alignments, protein sequence alignments, and ab initio gene finders to produce the finalized protein coding tracks of a genome.
* **KEGG**: The Kyoto Encyclopedia of Genes and Genomes, an integral database system mapping genes/proteins directly to networks of chemical substances and biological pathways.

## Concepts
* **Transposons**: Dispersed repeats able to jump through the genome. Subdivided into **Retrotransposons** (e.g. SINEs/LINEs which "Copy-Paste" through an RNA intermediate) and **DNA Transposons** (which strictly "Cut-Paste").
* **Ab initio vs Homology-based Prediction**: Ab initio gene finding relies on mathematical models predicting hidden states (like Start Codons and Splice Sites) intrinsically from DNA. Homology-based prediction relies exclusively on mapping physically sequenced evidence (ESTs/cDNA/proteins). MAKER excels by hybridizing the two.
* **AED (Annotation Edit Distance)**: A statistical scalar metric used by MAKER to evaluate gene model quality. A score of 0 denotes perfect concordance between the predicted gene model and physical evidence, whereas 1 represents no supporting evidence.
