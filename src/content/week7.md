# Week 7

## Sources
* [Week 7 Lecture 1](https://res.cloudinary.com/dswl0hmsi/image/upload/q_auto/f_auto/v1775653625/Week7_Lecture-1_fflyzz.pdf) - Supernova assembly, using RNA-Seq and 10x reads for scaffolding (ARCS, LINKS, AGOUTI)
* [Week 7 Lecture 2](https://res.cloudinary.com/dswl0hmsi/image/upload/q_auto/f_auto/v1775653626/Week7_Lecture-2_x6whqd.pdf) - Hybrid assemblies, gap closing, polishing, quality metrics (N50, BUSCO, LAI, WebQUAST)
* [Week 7 Lecture 3](https://res.cloudinary.com/dswl0hmsi/image/upload/q_auto/f_auto/v1775654405/Week7_Lecture-3_compressed_tnp3fk.pdf) - Chromosome-level assemblies using Hi-C, T2T complete genomes, draft vs reference assemblies

## Summary

Week 7 marks the transition from fragmented draft assemblies to highly polished, chromosome-level reference genomes.

The week opens with an in-depth dive into scaffolding algorithms. It covers `ARCS` (which uses molecular barcodes from 10x Genomics to string contigs together), `LINKS` (which uses raw, uncorrected Nanopore long reads), and importantly, `AGOUTI`, which utilizes RNA-seq transcriptome data to find 'joining-pairs'. This transcriptomic mapping allows AGOUTI to connect adjacent contigs if they share exons from the same functional gene model.

Following scaffolding, the lectures cover how to "Finish" an assembly. This includes Gap-Closing algorithms (e.g., `TGS-GapCloser` using long-read Overlap-Layout-Consensus), and Assembly Polishing using tools like `Pilon` to correct local misassemblies and single-nucleotide errors. Post-assembly quality is mathematically evaluated using several robust metrics: the standard **N50** (sequence length at which 50% of the entire assembly is contained in contigs equal/larger), **BUSCO** (quantifying evolutionary completeness by searching for expected single-copy orthologs), and **LAI** (LTR Assembly Index, standard metric for representing intergenic/repetitive spaces in plant genomes).

Finally, the pinnacle of genome completion is discussed: creating gapless, Telomere-to-Telomere (T2T) assemblies. The course delves into **Hi-C**, a chromosome conformation capture technology that sequences the 3D-spatial contacts of chromatin inside an active nucleus. Tools like `LACHESIS` or `3D-DNA` map these interaction frequencies to physically anchor, order, and orient scaffolds into unbroken, physical Chromosomes. Real-world case studies (Turmeric, Ficus, Jamun) show how these high-quality, T2T-adjacent assemblies enable the discovery of evolutionary mechanisms behind properties like disease resistance, organ longevity, and critical secondary metabolism.

## Entities
* **AGOUTI**: A specialized scaffolding tool that maps RNA-Seq data across contigs to dramatically improve genomic scaffolding and gene annotations.
* **Pilon**: An assembly polishing engine that aligns reads against a draft genome to fix small insertions, deletions, and substitution errors.
* **WebQUAST**: A widely used graphical web-interface suite to compute and visualize assembly quality metrics (like N50) and alignment structural variations.

## Concepts
* **Hybrid Assembly Types**: Type-1 uses short-reads to correct long-reads pre-assembly. Type-2 uses short-reads to build unitigs and long-reads to scaffold them. Type-3 (like `Quickmerge`) takes two separate draft assemblies and physically merges overlapping regions.
* **Scaffolding**: The computational process of linking together a non-contiguous series of genome contigs—separated by gaps of estimated physical length—using pair-end mapping reads, RNA-seq, or long read overlaps.
* **Hi-C Technique**: A powerful method that captures the 3D proximity of DNA fragments natively in a cell's nucleus, essentially acting as an ultra-long-range scaffolding constraint to align massive chromosomal blocks.
* **N50 vs BUSCO vs LAI**: N50 measures physical *contiguity* length. BUSCO measures structural *completeness* based on evolutionarily expected coding genes. LAI scores evaluate how well *intergenic repeats* and heterochromatic regions are captured.
