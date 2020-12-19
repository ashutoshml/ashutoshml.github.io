---
layout: post
author: Ashutosh Kumar
paperauthor: 'Juncen Li, Robin Jia, He He, Percy Liang (WeChat, Stanford)'
title: 'Delete, Retrieve, Generate: A Simple Approach to Sentiment and Style Transfer'
link: 'http://www.aclweb.org/anthology/N18-1169'
datel: 24 Sept, 2018
unique: AAAAAA
abstract: 'We consider the task of text attribute transfer: transforming a sentence to alter a specific attribute (e.g., sentiment) while preserving its attribute-independent content (e.g., changing screen is just the right size to *screen is too small*). Our training data includes only sentences labeled with their attribute (e.g., positive or negative), but not pairs of sentences that differ only in their attributes, so we must learn to disentangle attributes from attributeindependent content in an unsupervised way.  Previous work using adversarial methods has struggled to produce high-quality outputs. In this paper, we propose simpler methods motivated by the observation that text attributes are often marked by distinctive phrases (e.g., *too small*). Our strongest method extracts content words by deleting phrases associated with the sentence’s original attribute value, retrieves new phrases associated with the target attribute, and uses a neural model to fluently combine these into a final output. On human evaluation, our best method generates grammatical and appropriate responses on 22% more inputs than the best previous system, averaged over three attribute transfer datasets: altering sentiment of reviews on Yelp, altering sentiment of reviews on Amazon, and altering image captions to be more romantic or humorous.'
tags: NLP style-transfer sentiment-transfer non-parallel
---

The authors present a very simple way to approach the problem of attribute transfer. They show results on 2 setups and three datasets:
* Yelp - Positive, Negative sentiments
* Amazon Reviews - Positive, Negative sentiments
* Captions - Humorous, Romantic (Test: Factual)
