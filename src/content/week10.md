# Week 10

## Sources
* [Week 10 Lecture 1](https://res.cloudinary.com/dswl0hmsi/image/upload/q_auto/f_auto/v1775653628/Week10_Lecture-1_fvvplu.pdf) - Epigenetics, Bisulfite Sequencing vs Native Long-read Methylation Detection
* [Week 10 Lecture 2](https://res.cloudinary.com/dswl0hmsi/image/upload/q_auto/f_auto/v1775654406/Week10_Lecture-2_compressed_cfbaej.pdf) - Single-cell Genomics, 10X Chromium Droplets, Spatial Transcriptomics, Unculturable Microbe Genomes
* [Week 10 Lecture 3](https://res.cloudinary.com/dswl0hmsi/image/upload/q_auto/f_auto/v1775654407/Week10_Lecture-3_compressed_q8iolf.pdf) - Multi-omics Applications, Human Microbiome (Prevotella), Metabolism, EWAS, and TCGA

## Summary

Week 10 expands genomic analysis beyond the static DNA sequence, exploring dynamic molecular layers: Epigenomics, Single-Cell Omics, and broader Multi-Omic integrations in health and disease.

Lecture 1 details **Epigenetics**—mitotically heritable changes that regulate gene expression without altering the DNA code itself. The primary focus is DNA Methylation (often on CpG islands, leading to transcriptional silencing) and Histone modifications. Traditional detection methods like Whole Genome Bisulfite Sequencing (WGBS) chemically convert unmethylated Cytosines to Thymines to track methylation maps. However, newer **Third-Generation Sequencing** (PacBio HiFi and Nanopore) allows for native, direct detection of epigenetic marks without harsh chemical treatments by simply tracking microscopic changes in polymerase kinetics or electrical signals as they navigate modified bases.

Lecture 2 introduces **Single-Cell Genomics**. Instead of averaging out gene markers in bulk tissues, single-cell techniques isolate individual cells (via Micromanipulators, FACS, or microfluidic droplets like 10X Chromium) to capture cellular heterogeneity. This allows the sequencing of unculturable bacteria—such as the elusive symbiotic microbes inside the termite gut—and enables granular mapping of diverse cell subtypes in cancerous tumors (intratumoral heterogeneity). The lecture also touches upon **Spatial Transcriptomics**, which captures mRNA on a barcoded slide to preserve the highly-important physical location of transcribed genes within an intact tissue slice.

Lecture 3 ties these "-omics" disciplines together to unearth biological mechanisms of complex diseases. It explores deep **Metagenomic** surveys of the Human Microbiome, emphasizing how non-western (Indian) gut microbiomes are heavily enriched with unique *Prevotella copri* strains genetically equipped to digest complex plant carbohydrates. Alternatively, specific oral variants of *Prevotella* mislocating to the gut are linked to Colorectal Cancer (CRC) and IBD. Furthermore, the integration of Transcriptomics, Metabolomics (via tracking small-molecules in HMDB), and Epigenome-Wide Association Studies (EWAS) is pivotal for global initiatives like The Cancer Genome Atlas (TCGA) in orchestrating precision medicine.

## Entities
* **10X Chromium**: A microfluidic platform that isolates single cells into partition droplets with unique DNA barcodes, enabling massive-scale single-cell tracking.
* **PacBio HiFi / Nanopore**: Third-generation sequencing instruments capable of detecting 5-methylcytosine directly on native DNA without utilizing severe bisulfite treatments.
* **TCGA**: The Cancer Genome Atlas, a massive collaborative project aggregating Multi-Omic (genomic, epigenomic, transcriptomic) data to categorize tumor biology.

## Concepts
* **Epigenetics**: The suite of chemical modifications (like DNA methylation and histone acetylation) layered "on top" of the genome that tightly regulates when and where genes are expressed.
* **Cellular Heterogeneity**: The reality that a single, seemingly uniform piece of tissue actually contains wildly different gene expression profiles across its individual cells (often the driving factor of resistant cancer populations).
* **Spatial Transcriptomics**: The cutting-edge hybridization of histology and RNA-seq that determines not just *what* genes are expressing, but exactly *where* they are expressing physically within the topology of a tissue matrix.
* **Metabolomics**: The comprehensive study of the complete inventory of small molecule metabolites in a biological system (profiled in databases like HMDB).
