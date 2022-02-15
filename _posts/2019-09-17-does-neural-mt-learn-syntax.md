---
comments: true
author: Ashutosh Kumar
paperauthor: 'Xing Shi, Inkit Padhi, and Kevin Knight (ISI and USC)'
title: 'Does String-Based Neural MT Learn Source Syntax?'
last_modified_at: 17 Sept, 2019
categories: 
    - Notes
tags: 
    - NLP 
    - NMT 
    - Analysis-Paper
author_profile: true
toc: true
abstract: 'We investigate whether a neural, encoderdecoder translation system learns syntactic information on the source side as a by-product of training. We propose two methods to detect whether the encoder has learned local and global source syntax. A fine-grained analysis of the syntactic structure learned by the encoder reveals which kinds of syntax are learned and which are missing.'
---

## Goals 

1. To investigate if neural machine translation systems learn any syntactic features about the source during training (as a by-product)? 
2. To see what kind of syntactic information is being learnt, if any? 
3. Evaluate both global and local syntactic information that is being learnt 

## Why is this important ?

Non-neural systems rely on a lot of information for machine translation. Apart from other information(wordvecs, wordtranslations), syntactic information may be provided by:

1. Adding source syntax [Tree-to-String]
2. Adding target syntax [String-to-Tree]
3. Adding both syntax [String-to-Tree]

Neural models (Here: Vanilla seq2seq model) **don't** require such artillery to provide competitive translation systems. 

**This paper is a step towards understanding what is going inside such models and how are they performing well.**

## A nice example

### Setup

1. English-French NMT system trained on 110M tokens of bilingual data (English-side).
2. English-English autoencoder system.

### Steps

1. Take 10K separate english and label their voice (active/passive)
2. Use trained NMT/autoencoder to convert into 10k corresponding 1000-dimension encoding vectors (Seq to **vec** to seq)
3. Use 9k sentences for training a logistic regression model to predict voice
4. 1k for testing

## Observation

![image-center]({{ site.url }}{{ site.baseurl }}/assets/blog-images/does-neural-mt-learn-syntax/example.png){: .align-center}

Accuracy a: 92.7%  b: 82.6% 

Verdict: Syntactic information is learnt in NMT but <strong>not</strong> so in autoencoder.

## Experiments

![image-center]({{ site.url }}{{ site.baseurl }}/assets/blog-images/does-neural-mt-learn-syntax/experiment.png){: .align-center}

**Model:** Two layered LSTM based models

1. E2E (English-to-english) <font color='red'> [LOWER BOUND MODEL] </font>
2. PE2PE (PermutedEnglish-to-Permutedenglish) <font color='red'> [LOWER BOUND MODEL] </font>
3. E2P (English-to-ParseTree) <font color='green'> [UPPER BOUND MODEL] </font>
4. E2F (English-to-French)
5. E2G (English-to-German)


*An improvement of syntactic tree generation over the <font color='red'>lower bound models</font> indicates that the encoder learns syntactic information, whereas a decline from the <font color='green'>upper bound model</font> shows that the encoder loses certain syntactic information*

### Global Syntax

1. Voice : active or passive 
2. Tense : past or non-past
3. TSS : Top-level syntactic sequence of the constituent tree. (Only top 19. Rest are treated as others) 

### Local Syntax

1. POS : Tags for each word
2. SPC: Smallest phrase constituent above each word (HIGHER LEVEL POS TAGS)

## Results

![image-center]({{ site.url }}{{ site.baseurl }}/assets/blog-images/does-neural-mt-learn-syntax/layerwise.png){: .align-center}

<div class='card'>
    <div class='card-header'>
    <strong>TAKE AWAY</strong>
    </div>
    <div class='card-body'>
        <ol>
        <li> NMT encoder learns significant sentence-level syntactic-information. It can distinguish voice and tense of the source sentence and it knows the sentence's structure to some extent.</li>
        <li> Different syntactic information is captured in different layers as can be see from Figure 3. Local features are preserved in lower layers whereas global abstract information gets stored in upper layers. Model is two layered.</li>
        <li> Units = Hidden states. While predicting POS, the gap of neural parser (E2P) on the lower layer (C0) is much smaller. Small subset of units explicitly takes charge of POS tags in the neural parse, whereas for NMT the POS information is more distributed and implicit.</li> 
        <li> No large difference between E2F and E2G</li>
        </ol>
    </div>
</div>

### Extracting Syntactic Tree from Encoder

![image-center]({{ site.url }}{{ site.baseurl }}/assets/blog-images/does-neural-mt-learn-syntax/syntax-tree-expt.png){: .align-center}

**Evaluation Tools**

1. <a href="http://nlp.cs.nyu.edu/evalb" target="_blank">EVALB tool </a> to calculate labeled bracketing F1-score
2. <a href="https://github.com/timtadh/zhang-shasha" target="_blank">zxx package</a> for Tree edit distance
3. <a href="https://github.com/jkkummerfeld/berkeley-parser-analyser" target="_blank">Berkeley Parser Analyser</a> to analyse parsing error types.

![image-center]({{ site.url }}{{ site.baseurl }}/assets/blog-images/does-neural-mt-learn-syntax/modelvsscore.png){: .align-center}

![image-center]({{ site.url }}{{ site.baseurl }}/assets/blog-images/does-neural-mt-learn-syntax/bracket-error.png){: .align-center}

![image-center]({{ site.url }}{{ site.baseurl }}/assets/blog-images/does-neural-mt-learn-syntax/sense-confusion.png){: .align-center}