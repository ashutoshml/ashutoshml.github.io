---
layout: post
author: Ashutosh Kumar
title: 'Does String-Based Neural MT Learn Source Syntax?'
link: 'https://www.aclweb.org/anthology/D16-1159'
datel: 17, Sept, 2019
tags: NLP NMT Analysis Paper
---

## Goals
---
1. To investigate if neural machine translation systems learn any syntactic features about the source during training (as a by-product)?
2. To see what kind of syntactic information is being learnt, if any?

## Why is this important ?
---
Non-neural systems rely on a lot of information for machine translation. Apart from other information(wordvecs, wordtranslations), syntactic information may be provided by:
1. Adding source syntax [Tree-to-String]
2. Adding target syntax [String-to-Tree] 
3. Adding both syntax [String-to-Tree] 

Neural models(Here: Vanilla seq2seq model) don't require such artillery to provide competitive translation systems. 

**This paper is a step towards understanding what is going inside such models and how are the performing well.**
