# Week 6

## Sources
* [Week 6 Lecture 1](https://res.cloudinary.com/dswl0hmsi/image/upload/q_auto/f_auto/v1775653891/Week6_Lecture-1_compressed_oryren.pdf) - Introduction to common assembly tools ABySS, SOAPdeneno, Flye, Supernova
* [Week 6 Lecture 2](https://res.cloudinary.com/dswl0hmsi/image/upload/q_auto/f_auto/v1775653624/Week6_Lecture-2_latxhs.pdf) - 10X genomic linked-read sequencing, proc10xG scripts
* [Week 6 Lecture 3](https://res.cloudinary.com/dswl0hmsi/image/upload/q_auto/f_auto/v1775656207/Week6_Lecture-3_compressed_azqac6.pdf) - Nanopore workflows: Guppy basecalling, Porechop, assemblers (wtdbg2, SMARTdenovo, Flye)

## Summary

Week 6 is centrally focused on exploring specific genome assembly algorithms and hands-on bioinformatics pipelines across different sequencing technologies. 

It introduces the primary paradigms of assembly: **De Bruijn Graph (dBg)** approaches (commonly used for short reads) versus **Overlap Layout Consensus (OLC)** approaches (commonly used for long reads). Specialized assemblers for short-reads are thoroughly analyzed, highlighting `ABySS` (which utilizes Bloom filters to heavily decrease RAM requirements while building unitigs) and `SOAPdenovo2` (specializing in human-size genomes and bridging repeats). 

The week subsequently investigates 10X Genomics linked-reads. Using `proc10xG` Python scripts (`process_10xReads.py`), it details how to demultiplex reads by stripping PCR adapter sequences to isolate molecular barcodes, which are then passed into the `Supernova` assembler to successfully construct complex, phase-resolved **diploid** assemblies (rather than collapsing alleles into single consensus sequences).

Lastly, the lectures address Oxford Nanopore (ONT) long-read processing. Since ONT machines generate raw electrical signal data (in `.fast5` formats), algorithms such as `Guppy` must be employed to properly "Basecall" these signals into standard ATCG FASTQ files via neural networks. Adapters are then clipped using `Porechop`. Finally, specific long-read/noisy-read assemblers such as `Flye` (repeat-graphing), `wtdbg2` (fuzzy Bruijn graphing), and `SMARTdenovo` are evaluated through assembly comparisons of various plant genomes.

## Entities
* **ABySS & SOAPdenovo2**: Gold standard software suites for executing high-efficiency short-read De Bruijn Graph genomic assemblies.
* **Supernova**: Specialized assembler designed to accept 10X Genomics linked reads to phase highly heterozygous/diploid chromosomes.
* **Guppy**: ONT's neural-network-backed basecalling engine to convert electrical signals into readable bases.

## Concepts
* **De Bruijn Graphs (dBg) vs Overlap Layout Consensus (OLC)**: Utilizing overlapping k-mers (nodes) and mapping connections (edges) for computational efficiency (dBg) vs explicitly plotting overlaps between reads into consensus paths (OLC).
* **Unitig vs Contig**: A 'Unitig' is a highly reliable sequence formed from non-branching connections in a graph. Contigs assemble Unitigs using paired-end read constraints.
* **Basecalling**: The critical process of translating raw physical sequencing emissions (like fluorescent tags in Illumina or ionic electrical current disruptions in Nanopore pores) into digital texts (FASTQ format).
* **Diploid Assembly**: Retaining the variations (maternal and paternal alleles) over sequences instead of merging them into an artificial averaged "consensus." Supernova is particularly built to handle this.
