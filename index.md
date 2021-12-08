---
layout: default
---

## Education
<hr/>
**PhD Candidate**, Machine and Language Learning Lab ([MALL Lab](http://malllabiisc.github.io/)), 2016 -- Present <br>
Dept. of Computer Science & Automation ([CSA](https://www.csa.iisc.ac.in/)), Indian Institute of Science, Bangalore

**Masters in Computer Science**, 2014 -- 2016 <br>
Chennai Mathematical Institute ([CMI](https://www.cmi.ac.in/)), Chennai

**B.Tech**, 2008 -- 2012 <br>
Dept. of Mechanical Engineering, Indian Institute of Technology ([IIT](http://www.iitkgp.ac.in)) , Kharagpur


<br>
## Work Experience
<hr/>
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



<br>
## Publications
<hr/>
1. **Syntax-guided Controlled Generation of Paraphrases** 
    <br>
    <u>Ashutosh Kumar</u>, Kabir Ahuja, Raghuram Vadapalli, Partha Talukdar <br>
    *Transactions of the Association for Computational Linguistics (TACL) 2020* <br>
    *Presented at ACL 2020* <br>
    <a class="btn-sm btn-secondary" data-toggle="collapse" href="#sgcpabstract" role="button" aria-expanded="false" aria-controls="collapseExample">abstract</a> <a role='button' class='btn-info btn-sm disabled' href='https://arxiv.org/pdf/2005.08417.pdf' target='_blank'>paper</a> <a role="button" class='btn-primary btn-sm' href='https://github.com/malllabiisc/SGCP' target='_blank'>code</a> <a role='button' class='btn-danger btn-sm' href='{{ site.url }}/assets/SGCP-pdf.pdf' target='_blank'>slides</a> <br>
    <br>
    <div class="collapse" id="sgcpabstract">
        <div class="card card-body">
        Given a sentence (e.g., "I like mangoes") and a constraint (e.g., sentiment flip), the goal of controlled text generation is to produce a sentence that adapts the input sentence to meet the requirements of the constraint (e.g., "I hate mangoes"). Going beyond such simple constraints, recent works have started exploring the incorporation of complex syntactic-guidance as constraints in the task of controlled paraphrase generation. In these methods, syntactic-guidance is sourced from a separate exemplar sentence. However, these prior works have only utilized limited syntactic information available in the parse tree of the exemplar sentence. We address this limitation in the paper and propose Syntax Guided Controlled Paraphraser (SGCP), an end-to-end framework for syntactic paraphrase generation. We find that SGCP can generate syntax conforming sentences while not compromising on relevance. We perform extensive automated and human evaluations over multiple real-world English language datasets to demonstrate the efficacy of SGCP over state-of-the-art baselines. To drive future research, we have made SGCP’s source code available.
        </div>
    </div>
2. **Submodular Optimization-based Diverse Paraphrasing and its Effectiveness in Data Augmentation** 
    <br>
    <u>Ashutosh Kumar</u>&#42;, Satwik Bhattamishra&#42;, Manik Bhandari, Partha Talukdar <br>
    *Oral Presentation : Long paper in NAACL 2019, Minneapolis, USA* <br>
    &#42;<small>Equal Contributions</small><br>
    <a class="btn-sm btn-secondary" data-toggle="collapse" href="#dipsabstract" role="button" aria-expanded="false" aria-controls="collapseExample">abstract</a> <a role='button' class='btn-info btn-sm' href='https://www.aclweb.org/anthology/N19-1363' target='_blank'>paper</a> <a role="button" class='btn-primary btn-sm' href='https://github.com/malllabiisc/DiPS' target='_blank'>code</a> <a role='button' class='btn-danger btn-sm' href='{{ site.url }}/assets/DiPS_pdf.pdf' target='_blank'>slides</a> <br>
    <br>
    <div class="collapse" id="dipsabstract">
        <div class="card card-body">
        Inducing diversity in the task of paraphrasing is an important problem in NLP with applications in data augmentation and conversational agents. Previous paraphrasing approaches have mainly focused on the issue of generating semantically similar paraphrases, while paying little attention towards diversity.  In fact, most of the methods rely solely on top-k beam search sequences to obtain a set of paraphrases. The resulting set, however, contains many structurally similar sentences. In this work, we focus on the task of obtaining highly diverse paraphrases while not compromising on paraphrasing quality. We provide a novel formulation of the problem in terms of monotone submodular function maximization, specifically targeted towards the task of paraphrasing. Additionally, we demonstrate the effectiveness of our method for data augmentation on multiple tasks such as intent classification and paraphrase recognition. In order to drive further research, we have made the source code available
        </div>
    </div>
3. **eCommerceGAN : A Generative Adversarial Network for E-commerce** <br>
<u>Ashutosh Kumar</u>, Arijit Biswas, Subhajit Sanyal <br>
*Accepted as a Workshop paper in ICLR 2018, Vancouver, Canada*<br>
<a class="btn-sm btn-secondary" data-toggle="collapse" href="#ecommerceabstract" role="button" aria-expanded="false" aria-controls="collapseExample">abstract</a> <a href='https://arxiv.org/pdf/1801.03244.pdf' role='button' class='btn-info btn-sm' target='_blank'>paper</a> <a role='button' class='btn-warning btn-sm' href='https://www.technologyreview.com/f/610016/dueling-ais-dream-up-new-online-shopping-patterns-for-amazon/' target='_blank'>media</a> <br> <br>
    <div class="collapse" id="ecommerceabstract">
        <div class="card card-body">
        E-commerce companies such as Amazon, Alibaba and Flipkart process billions of orders every year. However, these orders represent only a small fraction of all plausible orders. Exploring the space of all plausible orders could help us better understand the relationships between the various entities in an e-commerce ecosystem, namely the customers and the products they purchase. In this paper, we propose a Generative Adversarial Network (GAN) for orders made in e-commerce websites. Once trained, the generator in the GAN could generate any number of plausible orders. Our contributions include: (a) creating a dense and low-dimensional representation of e-commerce orders, (b) train an ecommerceGAN (ecGAN) with real orders to show the feasibility of the proposed paradigm, and (c) train an ecommerce-conditional-GAN (ec2GAN) to generate the plausible orders involving a particular product. We propose several qualitative methods to evaluate ecGAN and demonstrate its effectiveness. The ec2GAN is used for various kinds of characterization of possible orders involving a product that has just been introduced into the e-commerce system. The proposed approach ec2GAN performs significantly better than the baseline in most of the scenarios.
        </div>
    </div>
4. **NL-Augmenter: A Framework for Task-Sensitive Natural Language Augmentation** <br>
Kaustubh D. Dhole et. al, (includes: <u> Ashutosh Kumar </u>)<br>
*Arvix pre-print 2021*<br>
<a class="btn-sm btn-secondary" data-toggle="collapse" href="#nlaugmenter" role="button" aria-expanded="false" aria-controls="collapseExample">abstract</a> <a role='button' class='btn-info btn-sm' href='https://arxiv.org/abs/2112.02721' target='_blank'>paper</a> <a role="button" class='btn-primary btn-sm' href='https://github.com/GEM-benchmark/NL-Augmenter' target='_blank'>code</a> <br> <br>
    <div class="collapse" id="nlaugmenter">
        <div class="card card-body">
        Data augmentation is an important component in the robustness evaluation of models in natural language processing (NLP) and in enhancing the diversity of the data they are trained on. In this paper, we present NL-Augmenter, a new participatory Python-based natural language augmentation framework which supports the creation of both transformations (modifications to the data) and filters (data splits according to specific features). We describe the framework and an initial set of 117 transformations and 23 filters for a variety of natural language tasks. We demonstrate the efficacy of NL-Augmenter by using several of its transformations to analyze the robustness of popular natural language models. The infrastructure, datacards and robustness analysis results are available publicly on the NL-Augmenter repository.
        </div>
    </div>
<br>

## Service
<hr/>
##### Reviewer:
<p>2020: ICLR, ACL, <strong>EMNLP</strong> <a href='https://www.aclweb.org/anthology/2020.emnlp-main.0.pdf' style="color:red;" target="_blank">[Outstanding Reviewer]</a>
<br>2021: ICLR, EACL, NAACL, ACL-IJCNLP, EMNLP, NeurIPS
<br>2022: ICLR, ACL ARR</p>
##### Judge:
<p>Initiative for Research & Innovation in STEM (IRIS) National Fair 2020</p>
<br>

## Contact
<hr>
<h3>Address</h3>
<p>303, MALL Lab, CDS Department, <br>
Indian Institute of Science, <br>
Bangalore - 560012 <p>

<h3>Email</h3>
<p>firstname[at]iisc[dot]ac[dot]in</p>
