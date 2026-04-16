# Week 2

## Sources
* [Week 2 Lecture 1](https://res.cloudinary.com/dswl0hmsi/image/upload/q_auto/f_auto/v1775653617/Week2_Lecture_1_uqo9cq.pdf) - First, second generation sequencing technologies including Sanger and Illumina and their data output
* [Week 2 Lecture 2 Part i](https://res.cloudinary.com/dswl0hmsi/image/upload/q_auto/f_auto/v1775653621/Week2_Lecture2-Part-i_ffqibo.pdf) - Long read sequencing and linked read sequencing (PacBio, ONT, 10X)
* [Week 2 Lecture 2 Part ii](https://res.cloudinary.com/dswl0hmsi/image/upload/q_auto/f_auto/v1775653627/Week2_Lecture_-2_Part-ii_ug065j.pdf) - Continuation on long read sequencing, metagenomic sequencing approaches (Whole-genome vs Amplicon)
* [Week 2 Lecture 3](https://res.cloudinary.com/dswl0hmsi/image/upload/q_auto/f_auto/v1775653621/Week2_Lecture_3_io2dnl.pdf) - Sequence formats (FASTA, GenBank, Fastq, etc.), NCBI SRA, and data retrieval

## Summary

Week 2 provides a deeper dive into Sequencing Technologies, breaking them down into first, second, and third generations. The lectures cover the technical principles behind the Sanger method (chain termination), Illumina (sequencing by synthesis), Ion Torrent (semiconductor), and third-generation long read platforms like PacBio (SMRT) and Oxford Nanopore. It also covers 10x Genomics for linked reads to preserve long-range information on short-read platforms.

The week transitions to how this sequential data is modeled and archived digitally. It provides definitions for critical sequencing concepts like reads, contigs, scaffolds, and depth of coverage. Furthermore, it extensively maps out sequence formats detailing FASTA, FASTQ, GenBank, and QSEQ, showing how quality scores are tracked and stored. It finishes with practical workflows on data submission and retrieval from NCBI's Sequence Read Archive (SRA) via FTP tools like FileZilla.

## Entities
* **Illumina**: A leading second-generation sequencer utilizing fluorescent sequencing by synthesis (SBS).
* **PacBio / Oxford Nanopore**: Leaders in third-generation (long-read) sequencing technologies (e.g., SMRT, MinION).
* **NCBI SRA**: The Sequence Read Archive; NIH's primary archive for high-throughput sequencing data.
* **10x Genomics**: Uses Chromium gel beads-in-emulsion (GEMs) to provide barcode-linked molecular information on standard short-read machines.

## Concepts
* **First-Gen vs Second-Gen vs Third-Gen Sequencing**:
  * **First-Gen** (Sanger): High accuracy, low throughput, expensive. Good for targeting specific sequences.
  * **Second-Gen** (Illumina, Ion Torrent): Massive parallelization, high throughput, low cost per base, but yielding very short read lengths (~150-300 bp).
  * **Third-Gen** (PacBio, Nanopore): Extraordinarily long reads (thousands to millions of bp) operating in real time with single-molecule resolution, though they exhibit higher initial error rates compared to short reads.
* **Draft vs Completely Sequenced Genomes**: Sequences grouped into connected stretches (contigs/scaffolds) that still lack continuous resolution (Draft) vs an unbroken chain (Completely Sequenced).
* **FASTQ**: A standard sequence format that elegantly embeds base sequences aligned directly above their ASCII-encoded quality scores.
* **Metagenomic Sequencing**: Highlights Amplicon (16S rRNA targeted) versus Whole Genome (Shotgun) methodologies to classify complex, uncultured microbial communities.
