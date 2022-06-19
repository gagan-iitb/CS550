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

* Basic familiarity with probability and statistics: (Conditional probability, Bayes Rule, Random variable, Expectation, Variance, Concentration Inequalities, Distributions, Gaussian, Multi-variate)
* Linear Algebra: Matrix multiplication, Eigenvector

* Discrete mathematics: (Proofs, Induction, Logic, Combinatorics, Graphs)

* You must strictly adhere to these pre-requisites! Even if IIT Bhilai's registration system does not prevent you from registering for this course, it is still your responsibility to make sure you have all of these prerequisites before you register.

Books (Textbook)
----------------
* [HML] Hands on Machine Learning Aurélien Géron

Reference Books
---------------
* [ML] Machine Learning, Tom Mitchell.
* [CIML] A Course in Machine Learning, Hal Daumé III
* [MML] Mathematics for Machine Learning, Marc Peter Deisenroth, A. Aldo Faisal, and Cheng Soon Ong
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
|#| Week| Topics planned in this week | Text Book Reference |
| --- | ------------| ----------- | -------- |
|1| Jul 29 | The Machine Learning Landscape: Applications, Types, challenges; Linear Regression |HML Ch1, CIML Ch1 |
|1| Jul 29 | End to End Approach: Data collection and preparation | HML Ch 2 |
|2| Aug 1 | Limits of Learning| CIML Ch2|
|2| Aug 1 | Classification: Performance Measures, Multilabel, Multioutput | HML Ch3 |
|2| Aug 1 | Regression: Linear, Polynomial, Regularization, Logistic | HML Ch4|
|3| Aug 8 | Geometry and Nearest Neighbors | CIML Ch3|
|3| Aug 8|  SVM: Hard-margin, Soft-margin, Linear, Non-linear, SVM Regression |HML Ch5|
|3| Aug 8|  SVM: Kernelized SVM, Online SVM| HML Ch5|
|3| Aug 15| Decision Trees: Entropy, Regularlization | HML Ch6|
|4| Aug 15| Ensemble Learning: Bagging, Random Forests |HML Ch7|
|4| Aug 22| Ensemble Learning: Boosting, AdaBoost, Gradient Boosting |HML Ch7|
|5| Aug 22| Probabilistic Modeling |CIML Ch9|
|5| Aug 29| Dimensionality Reduction, EM, Factor Analysis ||
|6| Aug 29|  | PRML|
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
