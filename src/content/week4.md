# Week 4

## Sources
* [Week 4 Lecture 1](https://res.cloudinary.com/dswl0hmsi/image/upload/q_auto/f_auto/v1775653625/Week4_Lecture-1_s7lhir.pdf) - EMBOSS, Galaxy, High-Performance Computing (HPC) workflows
* [Week 4 Lecture 2 Part I](https://res.cloudinary.com/dswl0hmsi/image/upload/q_auto/f_auto/v1775653620/Week4_Lecture_2_Part__1_fzik3t.pdf) - Overview of genomic/transcriptomic analysis, genome assembly challenges, hybrid approaches
* [Week 4 Lecture 2 Part II](https://res.cloudinary.com/dswl0hmsi/image/upload/q_auto/f_auto/v1775653623/Week4_Lecture-2_Part__II_ryucmn.pdf) - Case studies (Bengal Tiger, Indian cow breeds, Peafowl, Aloe vera) and evolutionary analysis
* [Week 4 Lecture 3](https://res.cloudinary.com/dswl0hmsi/image/upload/q_auto/f_auto/v1775653890/Week4_Lecture-3_compressed_qyocqz.pdf) - DNA/RNA extraction, quantification, and species identification via DNA barcoding

## Summary

Week 4 focuses heavily on practical genomic workflows, spanning right from sample collection at the bench to execution on High-Performance Computing (HPC) clusters.

The first lectures explore prominent software packages. EMBOSS (European Molecular Biology Open Software Suite) is detailed as a comprehensive toolkit for manipulating sequences (formatting, translating), predicting ORFs (`getorf`), and aligning sequences (`water/needle`). Similarly, Galaxy is introduced as a user-friendly, web-based platform for organizing reproducible pipelines without writing raw code. Given the massive memory/CPU requirements of these analyses, the necessity of HPC architectures with parallel nodes and high-speed data interconnects is strongly emphasized.

Subsequent lectures tackle the structural complexities of genomes, specifically focusing on plants with high ploidy, repeat structures, and heterozygosity. To overcome this, "Hybrid Assembly" approaches (combining highly accurate short Illumina reads with highly contiguous long Nanopore or Linked-reads) are discussed. Compelling case studies are reviewed to contextualize this, such as analyzing the adaptive evolution of neurons in the Blue Peafowl genome, finding sequence corrections in the Bengal Tiger, and tracking polyploidy in massive plant genomes like Aloe vera.

Finally, the week bridges the gap back to the wet lab. The basics of extracting high molecular weight DNA/RNA, checking purity indices via NanoDrop (260/280, 260/230 ratios) and Qubit, and clearing difficult plant contaminants (polyphenols, polysaccharides) are outlined. It introduces DNA Barcoding (using reference markers like matK, ITS for plants, and COI for animals) to robustly confirm sample species prior to expensive Next-Generation Sequencing.

## Entities
* **EMBOSS**: A powerful, command-line suite of tools for sequence analysis (e.g., `water`, `getorf`, `pepstats`).
* **Galaxy**: A web-based computational workbench used for reproducible genomic research.
* **10x Genomics, PacBio, ONT MinION**: Sequencing platforms strategically combined in hybrid assemblies to bridge repetitive DNA gaps.

## Concepts
* **DNA Barcoding**: Identifying an organism's species using a universally standardized, short DNA marker region (e.g., *matK* or *ITS* in plants).
* **Hybrid Genome Assembly**: Utilizing both 2nd-generation short reads (to provide low error rates) and 3rd-generation long reads (to bridge large repetitive elements and structural variations).
* **High-Performance Computing (HPC)**: Aggregating computing power across many networked machines (nodes) to solve problems requiring extensive RAM and CPU, which are characteristic of genome assembly processes.
* **Transcriptomics vs Microarray**: Transcriptomics via RNA-Seq captures the entire breadth of gene transcripts and novel splice variants dynamically, while Microarray is limited generally to pre-defined fluorescent probes.
* **Adaptive Evolution Analysis**: Utilizing sequenced assemblies to find orthologous gene sets and looking for evolutionary signatures (e.g., dN/dS > 1 indicating positive selection in genes like the NOTCH signaling pathway in tigers, or Axon Guidance in peafowl).
