# Machine Learning
Course Page for CS550 (Machine Learning) to be taught at [IIT Bhilai, India](https://www.iitbhilai.ac.in/index.php) in the Monsoon Semester of 2022.
<br> Course Instructor: [Dr. Gagan Raj Gupta ](https://www.iitbhilai.ac.in/index.php?pid=gagan)

Motivation and Objectives
-------------------------
Machine Learning is concerned with computer programs that automatically improve their performance through experience (e.g., programs that learn to recognize human faces, recommend music and movies, and drive autonomous robots). This course covers the theory and practical algorithms for machine learning from a variety of perspectives. 

Topics include: supervised learning (generative/discriminative learning, parametric/non-parametric learning, neural networks, support vector machines); unsupervised learning (clustering, dimensionality reduction, kernel methods); learning theory (bias/variance tradeoffs, practical advice); reinforcement learning and adaptive control. The course covers theoretical concepts such as inductive bias, the PAC learning framework, Bayesian learning methods, margin-based learning, and Occam’s Razor. 

The course will also discuss recent applications of machine learning, such as to robotic control, data mining, autonomous navigation, bioinformatics, speech recognition, and text and web data processing.

Programming assignments include hands-on experiments with various learning algorithms. This course is designed to give a graduate-level student a thorough grounding in the methodologies, technologies, mathematics and algorithms currently needed by people who do research in machine learning.

**Learning Outcomes**
---------------------
* Implement and analyze existing learning algorithms, including well-studied methods for classification, regression, structured prediction, clustering, and representation learning
* Integrate multiple facets of practical machine learning in a single system: data preprocessing, learning, regularization and model selection
* Describe the the formal properties of models and algorithms for learning and explain the practical implications of those results
* Compare and contrast different paradigms for learning (supervised, unsupervised, etc.)
* Design experiments to evaluate and compare different machine learning techniques on real-world problems
* Employ probability, statistics, calculus, linear algebra, and optimization in order to develop new predictive models or learning methods
* Given a description of a ML technique, analyze it to identify 
     1. the expressive power of the formalism; 
     2. the inductive bias implicit in the algorithm; 
     3. the size and complexity of the search space; 
     4. the computational properties of the algorithm: 
     5. any guarantees (or lack thereof) regarding termination, convergence, correctness, accuracy or generalization power.

Pre-requisites
--------------
Students entering the class are expected to have a pre-existing working knowledge of probability, linear algebra, statistics and algorithms, though the class has been designed to allow students with a strong numerate background to catch up and fully participate. 

* Programming experience in a general programming language. Specifically, you need to have written from scratch programs consisting of few hundred lines of code. 
Note: For each programming assignment, you will be required to use Python. You will be expected to know, or be able to quickly pick up, that programming language.

* Basic familiarity with probability and statistics: (Conditional probability, Bayes Rule, Random variable, independence, conditional independence, Expectation, Variance, Concentration Inequalities, Distributions, Gaussian, Multi-variate)
  
* Linear Algebra: Vectors and matrices, inner product, projection, Basis, (complete, orthonormal), Orthogonality, linear (in)dependence
eigenvalues and eigenvectors; singular values and vectors; SVD

* Discrete mathematics: (Proofs, Induction, Logic, Combinatorics, Graphs)

* You must strictly adhere to these pre-requisites! Even if IIT Bhilai's registration system does not prevent you from registering for this course, it is still your responsibility to make sure you have all of these prerequisites before you register.

Books (Textbook)
----------------
* [HML] Hands on Machine Learning Aurélien Géron
* [CIML] A Course in Machine Learning, Hal Daumé III
* [MML] Mathematics for Machine Learning, Marc Peter Deisenroth, A. Aldo Faisal, and Cheng Soon Ong

Reference Books
---------------
* [ML] Machine Learning, Tom Mitchell.
* [PRML] Pattern recognition and machine learning, Chistopher Bishop
* [PML] Probabilistic Machine Learning, Kevin Murphy (2nd edition)

Class Materials
----------------
* Google Drive Link:
* Canvas Link:
* CheatSheet: https://stanford.edu/~shervine/teaching/cs-229/cheatsheet-supervised-learning
* Example Projects: https://cs229.stanford.edu/proj2021spr/

Similar Courses
----------------
* Stanford CS229: https://cs229.stanford.edu/syllabus-fall2021.html
* Harvard CS181: https://harvard-ml-courses.github.io/cs181-web/schedule
* MIT 6.036 : https://canvas.mit.edu/courses/7509
* IIT Delhi COL341: https://www.cse.iitd.ernet.in/~rahulgarg/Teaching/COL341.htm
* UW CSE446: https://courses.cs.washington.edu/courses/cse446/22wi/
* UCB CS189: https://people.eecs.berkeley.edu/~jrs/189/

Detailed Schedule
-----------------
Legend:
|#| Week| Topics planned in this week | Text Book Reference | Reading| Notebooks|
| --- | ------------| ----------- | -------- |-------------|--------------------|
|1| Jul 29 | Tutorial 1: Linear Algebra and Python Libraries| MML Ch2-4  | | [Linear Algebra](https://github.com/ageron/handson-ml/blob/master/math_linear_algebra.ipynb); [numpy](https://github.com/ageron/handson-ml/blob/master/tools_numpy.ipynb); [pandas](https://github.com/ageron/handson-ml/blob/master/tools_pandas.ipynb)|
|2| Aug 1 | The Machine Learning Landscape: Applications, Types, challenges |HML Ch1, CIML Ch1 | | |
|2| Aug 1 | End to End Approach: Data collection and preparation | HML Ch 2 | [Data Carpentry](https://mimno.infosci.cornell.edu/b/articles/carpentry)| |
|2| Aug 1 | Tutorial 2: Vector Calculus | MML Ch 5  | | [Calculus](https://github.com/ageron/handson-ml/blob/master/math_differential_calculus.ipynb)|
|3| Aug 8 | Limits of Learning| CIML Ch2|
|3| Aug 8 | Classification: Performance Measures, Multilabel, Multioutput | HML Ch3 |
|3| Aug 8 | Regression: Linear, Polynomial, Regularization, Logistic | HML Ch4|
|3| Aug 8 | Tutorial 3: Continuous Optimization | MML Ch 7|
|4| Aug 15| Geometry and Nearest Neighbors | CIML Ch3|
|4| Aug 15| Perceptron, Practical Issues in ML | CIML Ch4, Ch5|
|4| Aug 15| SVM: Hard-margin, Soft-margin, Linear, Non-linear, SVM Regression |HML Ch5|
|4| Aug 15| Tutorial 4: Probability and Distributions | MML Ch 6|[Probability](https://alliance.seas.upenn.edu/~cis520/dynamic/2021/wiki/index.php?n=Lectures.ProbabilityReview)| |
|5| Aug 22| SVM: Kernelized SVM, Online SVM| HML Ch5|
|5| Aug 22| Decision Trees: Entropy, Regularlization | HML Ch6|
|5| Aug 22| Tutorial 5: TensorFlow/PyTorch | | 
|6| Aug 29| Ensemble Learning: Bagging, Random Forests |HML Ch7|
|6| Aug 29| Ensemble Learning: Boosting, AdaBoost, Gradient Boosting |HML Ch7|
|7| Aug 29| Probabilistic Modeling |CIML Ch9|
|6| Sep 2| __Project:Build an ensemble of models__ ||
|6| Sep 7| __Tierce 1 Exam__||
|7| Sep 12| Neural Networks |GA Ch 4|
|7| Sep 12| |IVB Ch13|
|8| Sep 19| CNN |GA Ch 4 |
|8| Sep 19| |GA Ch3|
|8| Sep 26|RNN, Attention Models  ||
|9| Sep 26|   |GA Ch5|
|9| Oct 10 |Autoencoders, GAN | |
|10| Oct 10| Generative Models|GA Ch6,7|
|10| Oct 17| Learning Theory  |    |
|11| Oct 17|  |GA Ch6,7|
|11| | __Project: Applications/Paper with code__| |
|12| Oct 1 -Oct9|__Mid Sem Break__||
|12| Oct 21| __Tierce 2 Exam__||
|13| Oct 27 |Reinforcement Learning ||
|13| Oct 27| |IVB Ch10|
|14| Nov 4|Basic concepts in RL, value iteration, policy iteration. ||
|14| Nov 4|  ||
|14| Nov 11|Model-based RL, value function approximator.  ||
|15| Nov 18| Fairness, algorithmic bias, explainability, privacy ||
|15| Nov 18 |   |IVB Ch14|
|15| Nov 25| Fairness, algorithmic bias, explainability, privacy  | |
|16| Nov 25|  ||
|17 |Nov 25 |__Project: Reinforcement learning Application__  ||

--------------------------
Resources
----------------
[Linear Algebra Notes from Stanford](https://see.stanford.edu/materials/aimlcs229/cs229-linalg.pdf) - short
[3blue1brown](https://www.3blue1brown.com/topics/linear-algebra) -beautiful animated explanations
[Linear Algebra Notes](https://web.mit.edu/~jadbabai/www/ESE504/linalg.pdf)
[The Matrix Cookbook](https://www.math.uwaterloo.ca/~hwolkowi/matrixcookbook.pdf) - It won't teach you linear algebra, but this free desktop reference on matrices may come in handy.
[Probability Notes from Stanford](https://see.stanford.edu/materials/aimlcs229/cs229-prob.pdf) - short
[Review of probability](http://www.cs.princeton.edu/courses/archive/spring07/cos424/scribe_notes/0208.pdf) from a course by David Blei at Princeton
Andrew Moore's [Probability tutorial slides](http://www.autonlab.org/tutorials/prob.html) (somewhat incomplete)
Another probability [review]('http://www.ics.uci.edu/~smyth/courses/cs274/notes/notes1.pdf), from UCI

