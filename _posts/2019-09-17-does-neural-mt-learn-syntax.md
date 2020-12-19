---
layout: post
comments: true
author: Ashutosh Kumar
paperauthor: 'Xing Shi, Inkit Padhi, and Kevin Knight (ISI and USC)'
title: 'Does String-Based Neural MT Learn Source Syntax?'
link: 'https://www.aclweb.org/anthology/D16-1159'
datel: 17 Sept, 2019
tags: NLP NMT Analysis-Paper
unique: AAAAAB
abstract: 'We investigate whether a neural, encoderdecoder translation system learns syntactic information on the source side as a by-product of training. We propose two methods to detect whether the encoder has learned local and global source syntax. A fine-grained analysis of the syntactic structure learned by the encoder reveals which kinds of syntax are learned and which are missing.'
---
<h4> Goals </h4>
<p>
<ol>
<li> To investigate if neural machine translation systems learn any syntactic features about the source during training (as a by-product)? </li>
<li> To see what kind of syntactic information is being learnt, if any? </li>
<li> Evaluate both global and local syntactic information that is being learnt </li>
</ol>
<p>
<br />
<h4> Why is this important ?</h4>
<p>
Non-neural systems rely on a lot of information for machine translation. Apart from other information(wordvecs, wordtranslations), syntactic information may be provided by:
<ol>
<li> Adding source syntax [Tree-to-String] </li>
<li> Adding target syntax [String-to-Tree]  </li>
<li> Adding both syntax [String-to-Tree]  </li>
</ol>

Neural models (Here: Vanilla seq2seq model) <strong>don't</strong> require such artillery to provide competitive translation systems. 

<strong>This paper is a step towards understanding what is going inside such models and how are they performing well.</strong>
<p>
<br />
<h4> A nice example</h4>
<p>

<strong>Setup</strong>
<ol>
<li> English-French NMT system trained on 110M tokens of bilingual data (English-side).</li>
<li> English-English autoencoder system.</li>
</ol>

<strong>Steps</strong>
<ol>
<li> Take 10K separate english and label their voice (active/passive)</li>
<li> Use trained NMT/autoencoder to convert into 10k corresponding 1000-dimension encoding vectors (Seq to <strong>vec</strong> to seq)</li>
<li> Use 9k sentences for training a logistic regression model to predict voice</li>
<li> 1k for testing</li>
</ol>

**Observation:**
<p align="center">
  <img align="center" src="{{ site.url }}/assets/blog-images/does-neural-mt-learn-syntax/example.png" alt="Image" height="200" >
</p>
Accuracy a: 92.7%  b: 82.6% <br>
Verdict: Syntactic information is learnt in NMT but <strong>not</strong> so in autoencoder.
</p>

<br />
<h4> Experiments</h4>
  <img align="center" src="{{ site.url }}/assets/blog-images/does-neural-mt-learn-syntax/experiment.png" alt="Image" height="400" >
</p>

<strong>Model:</strong> Two layered LSTM based models
<ol>
<li> E2E (English-to-english) <font color='red'> [LOWER BOUND MODEL] </font></li>
<li> PE2PE (PermutedEnglish-to-Permutedenglish) <font color='red'> [LOWER BOUND MODEL] </font></li>
<li> E2P (English-to-ParseTree) <font color='green'> [UPPER BOUND MODEL] </font></li>
<li> E2F (English-to-French)</li>
<li> E2G (English-to-German)</li>
</ol>

<em>An improvement of syntactic tree generation over the <font color='red'>lower bound models</font> indicates that the encoder learns syntactic information, whereas a decline from the <font color='green'>upper bound model</font> shows that the encoder loses certain syntactic information</em>

<br />
<strong>Global Syntax:</strong>
<ol>
<li> Voice : active or passive </li>
<li> Tense : past or non-past </li>
<li> TSS : Top-level syntactic sequence of the constituent tree. (Only top 19. Rest are treated as others) </li>
</ol>

<strong>Local Syntax:</strong>
<ol>
<li> POS : Tags for each word</li>
<li> SPC: Smallest phrase constituent above each word (HIGHER LEVEL POS TAGS)</li>
</ol>

<br/>
<h4> Results</h4>
<p align="center">
  <img align="center" src="{{ site.url }}/assets/blog-images/does-neural-mt-learn-syntax/layerwise.png" alt="Image" height="500" >
</p>

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

<br/>
<h5>
<strong>Extracting Syntactic Tree from Encoder</strong>
</h5>

<p align="center">
  <img align="center" src="{{ site.url }}/assets/blog-images/does-neural-mt-learn-syntax/syntax-tree-expt.png" alt="Image" height="350" >
</p>

<strong>Evaluation Tools:</strong>
<ol>
<li> <a href="http://nlp.cs.nyu.edu/evalb" target="_blank">EVALB tool </a> to calculate labeled bracketing F1-score</li>
<li> <a href="https://github.com/timtadh/zhang-shasha" target="_blank">zxx package</a> for Tree edit distance </li>
<li> <a href="https://github.com/jkkummerfeld/berkeley-parser-analyser" target="_blank">Berkeley Parser Analyser</a> to analyse parsing error types.</li>
</ol>

<p align="center">
  <img align="center" src="{{ site.url }}/assets/blog-images/does-neural-mt-learn-syntax/modelvsscore.png" alt="Image" height="250" >
</p>

<p align="center">
  <img align="center" src="{{ site.url }}/assets/blog-images/does-neural-mt-learn-syntax/bracket-error.png" alt="Image" height="250" >
</p>

<p align="center">
  <img align="center" src="{{ site.url }}/assets/blog-images/does-neural-mt-learn-syntax/sense-confusion.png" alt="Image" height="350" >
</p>

<em> Description to be added soon </em>

