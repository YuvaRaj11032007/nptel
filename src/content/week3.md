# Week 3

## Sources
* [Week 3 Lecture 1 Part i](https://res.cloudinary.com/dswl0hmsi/image/upload/q_auto/f_auto/v1775653617/Week3_Lecture-1_part-i_1_ukzelx.pdf) - Introduction to Linux and basic Linux commands for file handling
* [Week 3 Lecture 1 Part ii](https://res.cloudinary.com/dswl0hmsi/image/upload/q_auto/f_auto/v1775653617/Week3_Lecture-1_part-ii_1_wtfprh.pdf) - File permissions, system process information, connecting to remote servers, editors (Perl/Python)
* [Week 3 Lecture 2](https://res.cloudinary.com/dswl0hmsi/image/upload/q_auto/f_auto/v1775653621/Week3_Lecture-2_1_yiq34l.pdf) - Running jobs on Linux, processing, installation of genomic packages (ClustalW, SPAdes, BLAST+)
* [Week 3 Lecture 3](https://res.cloudinary.com/dswl0hmsi/image/upload/q_auto/f_auto/v1775653621/Week3_Lecture-3_1_c6vnqg.pdf) - Introduction to R, RStudio, commonly used packages (Tidyverse, ggtree), applications in genomic analysis (PCoA, Boruta)

## Summary

Week 3 shifts the focus to the computational environment critical for bioinformatics, spanning Linux, software package management, and the R statistical programming language. 

The first half begins with an introduction to UNIX/Linux, outlining its open-source philosophy, structure, and navigation interface. It lists essential file-system commands (`ls`, `cd`, `grep`, `awk`), explains the permission architecture (rwx), and covers system process management (`top`, `ps`, `kill`). As part of software deployment, it differentiates installing programs from source code (`./configure`, `make`) versus utilizing package managers (APT, YUM), using core bioinformatics tools like NCBI BLAST+, ClustalW, and SPAdes as examples.

The second half dives into R and RStudio, positioning it as an indispensable tool for data exploration and analysis. It touches upon the foundational `Tidyverse` ecosystem (e.g., `ggplot2`, `dplyr`) before exploring bioinformatics-specific applications. Detailed case studies include plotting phylogenetic trees (`ggtree`, `adephylo`), visualizing Beta diversity / Principle Coordinate Analysis (PCoA) using the `vegan` package on Bray-Curtis distances, and running statistical/machine learning workflows using Wilicoxon rank-sum tests and the `Boruta` feature selection package.

## Entities
* **Linux / UNIX**: Core open-source operating system providing the underlying robust, command-line environment for genomic analysis.
* **Tidyverse**: A highly popular collection of R packages (including ggplot2 and dplyr) designed for data science workflows.
* **ClustalW / SPAdes / BLAST+**: Standard bioinformatics stand-alone executables for sequence alignment (Clustal), genome assembly (SPAdes), and similarity searching (BLAST).

## Concepts
* **Linux Permissions & Navigation**: Managing system security using file modes (read/write/execute mapped to user/group/world 777 numbering).
* **Package Management vs Source Compilation**: Resolving dependency webs automatically vs manually compiling source configurations via `make`.
* **Phylogenetic Visualization via ggtree**: Using R specifically to generate programmatic, high-quality phylogenetic trees.
* **Dimensionality Reduction (PCoA)**: Principal Coordinate Analysis as applied in microbial ecology using distance metrics (e.g., Bray-Curtis) via the `vegan` package to understand community divergence.
* **Feature Selection**: Using Random Forest-based algorithms like `Boruta` to discern significant biological features from noisy 'omics datasets.
