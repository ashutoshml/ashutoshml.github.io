---
layout: single
permalink: /
title: ""
author_profile: true
excerpt: "Ashutosh About page"
toc: true
---

<!--<span style="color:red;">I am actively seeking NLP research/applied-research roles in industry. If you feel I might be a good fit for your team (or company), kindly reach out to me via <span> [email](mailto:ashutoshk2401@gmail.com)-->


## Education

**PhD Candidate**, Machine and Language Learning Lab ([MALL Lab](http://malllabiisc.github.io/)), 2016 -- Present <br>
Dept. of Computer Science & Automation ([CSA](https://www.csa.iisc.ac.in/)), Indian Institute of Science, Bangalore

**Masters in Computer Science**, 2014 -- 2016 <br>
Chennai Mathematical Institute ([CMI](https://www.cmi.ac.in/)), Chennai

**B.Tech**, 2008 -- 2012 <br>
Dept. of Mechanical Engineering, Indian Institute of Technology ([IIT](http://www.iitkgp.ac.in)) , Kharagpur


## Work Experience

**Amazon Lex Team**, AWS AI, Seattle (Remote), July 2020 -- Oct 2020 <br>
Applied Scientist Intern


**Linear Algebra and its applications**, Indian Institute of Science, Bangalore, Aug 2017 -- Dec 2017 <br>
Teaching Assistant

**Amazon Core Machine Learning Team**, Amazon, Bangalore, June 2017 -- Aug 2017 <br>
Applied Science Intern

**Machine Learning Team**, Real Image Media Tech., Chennai, March 2016 -- June 2016 <br>
Intern

**Product Engineering**, eGain Communications Pvt. Ltd., Pune, 2012 -- 2014 <br>
Software Engineer

## Publications
1. **Striking a Balance: Alleviating Inconsistency in Pre-trained Models for Symmetric Classification Tasks**
    <br>
    <small>
    <u>Ashutosh Kumar</u>, Aditya Joshi <br>
    *Accepted as a Short Paper in the Findings of Association for Computational Linguistics (ACL) 2022* <br>
    </small>
    [abstract](#inconsistency){: .btn .btn--warning .btn--small .tglbtn}
    [paper]({{ site.url }}/assets/alleviating-inconsistency.pdf){: .btn .btn--info .btn--small}
    [code (coming soon)](https://github.com/ashutoshml/alleviating-inconsistency){: .btn .btn--success .btn--small}
    <div class="collapse-box notice" id="inconsistency">
        While fine-tuning pre-trained models for downstream classification is the conventional paradigm in NLP, often task-specific nuances may not get captured in the resultant models. Specifically, for tasks that take two inputs and require the output to be invariant of the order of the inputs, inconsistency is often observed in the predicted labels or confidence scores. We highlight this model shortcoming and apply a consistency loss function to alleviate inconsistency in symmetric classification. Our results show an improved consistency in predictions for three paraphrase detection datasets without a significant drop in the accuracy scores. We examine the classification performance of six datasets (both symmetric and non-symmetric) to showcase the strengths and limitations of our approach.
    </div>
    

2. **Syntax-guided Controlled Generation of Paraphrases** 
    <br>
    <small>
    <u>Ashutosh Kumar</u>, Kabir Ahuja, Raghuram Vadapalli, Partha Talukdar <br>
    *Transactions of the Association for Computational Linguistics (TACL) 2020* <br>
    *Presented at ACL 2020* <br>
    </small>
    [abstract](#sgcpabstract){: .btn .btn--warning .btn--small .tglbtn}
    [paper](https://arxiv.org/pdf/2005.08417.pdf){: .btn .btn--info .btn--small}
    [code](https://github.com/malllabiisc/SGCP){: .btn .btn--success .btn--small}
    [slides]({{ site.url }}/assets/SGCP-pdf.pdf){: .btn .btn--danger .btn--small}
    <div class="collapse-box notice" id="sgcpabstract">
        Given a sentence (e.g., "I like mangoes") and a constraint (e.g., sentiment flip), the goal of controlled text generation is to produce a sentence that adapts the input sentence to meet the requirements of the constraint (e.g., "I hate mangoes"). Going beyond such simple constraints, recent works have started exploring the incorporation of complex syntactic-guidance as constraints in the task of controlled paraphrase generation. In these methods, syntactic-guidance is sourced from a separate exemplar sentence. However, these prior works have only utilized limited syntactic information available in the parse tree of the exemplar sentence. We address this limitation in the paper and propose Syntax Guided Controlled Paraphraser (SGCP), an end-to-end framework for syntactic paraphrase generation. We find that SGCP can generate syntax conforming sentences while not compromising on relevance. We perform extensive automated and human evaluations over multiple real-world English language datasets to demonstrate the efficacy of SGCP over state-of-the-art baselines. To drive future research, we have made SGCP’s source code available.
    </div>

3. **Submodular Optimization-based Diverse Paraphrasing and its Effectiveness in Data Augmentation** 
    <br>
    <small>
    <u>Ashutosh Kumar</u>&#42;, Satwik Bhattamishra&#42;, Manik Bhandari, Partha Talukdar <br>
    *Oral Presentation : Long paper in NAACL 2019, Minneapolis, USA* <br>
    &#42;<small>Equal Contributions</small><br>
    </small>
    [abstract](#dipsabstract){: .btn .btn--warning .btn--small .tglbtn}
    [paper](https://www.aclweb.org/anthology/N19-1363){: .btn .btn--info .btn--small}
    [code](https://github.com/malllabiisc/DiPS){: .btn .btn--success .btn--small}
    [slides]({{ site.url }}/assets/DiPS_pdf.pdf){: .btn .btn--danger .btn--small}
    <div class="collapse-box notice" id="dipsabstract">
    Inducing diversity in the task of paraphrasing is an important problem in NLP with applications in data augmentation and conversational agents. Previous paraphrasing approaches have mainly focused on the issue of generating semantically similar paraphrases, while paying little attention towards diversity.  In fact, most of the methods rely solely on top-k beam search sequences to obtain a set of paraphrases. The resulting set, however, contains many structurally similar sentences. In this work, we focus on the task of obtaining highly diverse paraphrases while not compromising on paraphrasing quality. We provide a novel formulation of the problem in terms of monotone submodular function maximization, specifically targeted towards the task of paraphrasing. Additionally, we demonstrate the effectiveness of our method for data augmentation on multiple tasks such as intent classification and paraphrase recognition. In order to drive further research, we have made the source code available.
    </div>

4. **eCommerceGAN : A Generative Adversarial Network for E-commerce** 
    <br>
    <small>
    <u>Ashutosh Kumar</u>, Arijit Biswas, Subhajit Sanyal <br>
    *Accepted as a Workshop paper in ICLR 2018, Vancouver, Canada*<br>
    </small>
    [abstract](#ecganabstract){: .btn .btn--warning .btn--small .tglbtn}
    [paper](https://arxiv.org/pdf/1801.03244.pdf){: .btn .btn--info .btn--small}
    [media](https://www.technologyreview.com/f/610016/dueling-ais-dream-up-new-online-shopping-patterns-for-amazon/){: .btn .btn--danger .btn--small}
    <div class="collapse-box notice" id="ecganabstract">
        E-commerce companies such as Amazon, Alibaba and Flipkart process billions of orders every year. However, these orders represent only a small fraction of all plausible orders. Exploring the space of all plausible orders could help us better understand the relationships between the various entities in an e-commerce ecosystem, namely the customers and the products they purchase. In this paper, we propose a Generative Adversarial Network (GAN) for orders made in e-commerce websites. Once trained, the generator in the GAN could generate any number of plausible orders. Our contributions include: (a) creating a dense and low-dimensional representation of e-commerce orders, (b) train an ecommerceGAN (ecGAN) with real orders to show the feasibility of the proposed paradigm, and (c) train an ecommerce-conditional-GAN (ec2GAN) to generate the plausible orders involving a particular product. We propose several qualitative methods to evaluate ecGAN and demonstrate its effectiveness. The ec2GAN is used for various kinds of characterization of possible orders involving a product that has just been introduced into the e-commerce system. The proposed approach ec2GAN performs significantly better than the baseline in most of the scenarios.
    </div>

5. **NL-Augmenter: A Framework for Task-Sensitive Natural Language Augmentation** 
    <br>
    <small>
    Kaustubh D. Dhole et. al, (includes: <u> Ashutosh Kumar </u>)<br>
    *Arxiv pre-print 2021*<br>
    </small>
    [abstract](#nlaugmenter){: .btn .btn--warning .btn--small .tglbtn}
    [paper](https://arxiv.org/abs/2112.02721){: .btn .btn--info .btn--small}
    [code](https://github.com/GEM-benchmark/NL-Augmenter){: .btn .btn--success .btn--small}
     <div class="collapse-box notice" id="nlaugmenter">
        Data augmentation is an important component in the robustness evaluation of models in natural language processing (NLP) and in enhancing the diversity of the data they are trained on. In this paper, we present NL-Augmenter, a new participatory Python-based natural language augmentation framework which supports the creation of both transformations (modifications to the data) and filters (data splits according to specific features). We describe the framework and an initial set of 117 transformations and 23 filters for a variety of natural language tasks. We demonstrate the efficacy of NL-Augmenter by using several of its transformations to analyze the robustness of popular natural language models. The infrastructure, datacards and robustness analysis results are available publicly on the NL-Augmenter repository.
    </div>

## Service

### Reviewer
<p>2020: ICLR, ACL, <strong>EMNLP</strong> <a href='https://www.aclweb.org/anthology/2020.emnlp-main.0.pdf' style="color:red;" target="_blank">[Outstanding Reviewer]</a>
<br>2021: ICLR, EACL, NAACL, ACL-IJCNLP, EMNLP, NeurIPS
<br>2022: ICLR, ACL ARR</p>

### Judge
<p>Initiative for Research & Innovation in STEM (IRIS) National Fair 2020</p>


## Contact

<h3>Address</h3>
<p>303, MALL Lab, CDS Department, <br>
Indian Institute of Science, <br>
Bangalore - 560012 <p>

<h3>Email</h3>
<p>firstname[at]iisc[dot]ac[dot]in</p>