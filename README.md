# Data Analytics And Visualization
Course Page for DS250 (Data Analytics and Visualization) being taught at [IIT Bhilai, India](https://www.iitbhilai.ac.in/index.php) in the Winter Semester of 2022.
<br> Course Instructor: [Dr. Gagan Raj Gupta ](https://www.iitbhilai.ac.in/index.php?pid=gagan)

The purpose of this course is to introduce students to various algorithms and techniques for data analysis and visualization. We will emphasize visualization and analysis of complex data sets such as large network data. 

# Data Scientist vs. Software Developer (Engineer)
Both data-scientists and software developers are good at designing and building complex systems with many interconnected parts using different tools and frameworks. In general, software developers design systems consisting of many well-defined components, whereas data scientists work with systems wherein at least one of the components isn’t well defined prior to being built. That component is usually closely involved with data processing or analysis. Data scientists specialize in creating systems that rely on probabilistic statements about data and results. Well known examples of these are Google search engine (“These are probably the most relevant pages”), product recommendations on Amazon.com (“We think you’ll probably like these things”).

# Skills for a data science
We will cover the skills necessary for cleaning, modeling and visualizing data by a data-scientist. We will also learn the skills needed for developers designing interactive dashboards and applications.

# D3 ([website](https://d3js.org/))
D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS. D3’s emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining powerful visualization components and a data-driven approach to DOM manipulation. 
Check these examples: [Sankey](https://observablehq.com/@d3/sankey), [Cholorpleth](https://observablehq.com/@d3/choropleth), [Hexbin](https://observablehq.com/@d3/hexbin-map),[Fisheye](https://bost.ocks.org/mike/fisheye/), 

# Labs and Projects
The project and lab component of this course will equip students with modern software toolkit to develop their own data analysis and interactive visualization applications (web/android) to better appreciate the data science process.

Motivation
----------
* Useful insights can be obtained from data that can help people: healthcare, industry, governments, science
* Getting data is becoming easier day by day, but is very complex and difficult for people to understand
* Data has _errors_ of various types (missing, incorrect etc.), is _incomplete_ and is _hard to clean_ (e.g. user reviews/ratings, distorted images) 
* Data usually has _complex correlations_ and i.i.d. assumptions don't always work very well (e.g. graph data, time-series data) 
* Data Visualization is critical to help us engage more diverse audience in the process of analytical thinking 

__We are often asked to answer difficult questions from this messy data__

__We may answer questions approximately__

__We have to make decisions (often in real-time)__. 

In this course, we want to learn how that is being done and solve real-life problems that we are interested in.

Course Objectives
-----------------
* Motivate and demonstrate the benefits and uses of data science  
* Impart the skills needed by a data scientist: acquire, clean, model, visualize data
* Teach fundamental algorithms for handling basic and complex datasets including __streaming algorithms__
* Study techniques for creating effective visualizations based on principles from graphic design, perceptual psychology, and cognitive science
* Teach basic techniques of machine learning which is important way to model relationships in data 
* Provide hands-on experience to students in analyzing datasets in diverse fields __(NLP, Image/Video, Graphs, Networks, Bio-informatics, Finance)__

Pre-requisites
--------------
* Basic knowledge of Python (most assignments will be based on Python)
* Knowledge of basic computer science principles and skills
* Math
  * Linear Algebra ( Matrix-factorization, Eigenvalues, Column and row spaces, Norms)
  * Probability theory (Conditional, Bayes Rule, Concentration Inequalities, Distributions, Gaussian, Multi-variate) 
  * Basic Data Structures, Algorithms and Asymptotic Analysis (graphs, heaps, lists, dynamic programming)
  * Calculus (Multi-variate)
  
If you don't meet one or more pre-requisites, be prepared to spend more time before or during the course in learning them.

Books
------
* IVB: Interactive visualization for the Web, Scott Murray
* PRML: Pattern Recognition and Machine Learning, Christopher Bishop
* TDS: Think like a data scientist, Brian Godsey
* DSC: Data Science from Scratch, Joel Grus
* GA: Graph Algorithms: Practical Examples in Apache Spark and Neo4J, Mark Needham, Amy Hodler

Detailed Schedule
-----------------
Legend:
 ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) Theory
 ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) Labs
|#| Week| Topics planned in this week | Text Book Reference |
| --- | ------------| ----------- | -------- |
|1| ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+)  Dec 27 | Introduction to Data Science, Facets of Data, Probability Distributions | |
|1|  ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) Dec 27 | Lab: Web Development, Intro to D3 | [Tutorials from UBC](https://github.com/UBC-InfoVis/2021-436V-tutorials/tree/master/0_Web_Tutorial) [2](https://github.com/UBC-InfoVis/2021-436V-tutorials/tree/master/1_D3_Tutorial)|
|2| ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) Jan 3 | Data Science Process, Data Models: Geometric view and Statistical view,  Data Cleaning, EDA: Value of Visualization, Gaussian Distribution, Conjugate Prior | PRML |
|2|  ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) Jan 3 | Lab: Intro to Numpy and Pandas, Matplotlib, Seaborn,  | |
|3| ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) Jan 10| Visualizing Data, Kernel Density, Describing Data, Correlation Metrics||
|3|  ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) Jan 10| Lab: Collect Data (Webscraping, API), Analyze and Make a chart in D3, Density Plots||
|3|  ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) Jan 10| Case Studies: Predicting malicious URLs, Risk in Bank Loans, Sentiment Analysis, Healthcare Dataset||
|4| ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) Jan 17| Distance Measures, ML intro, Learning by Prototypes ||
|4|  ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) Jan 17| Lab: D3 Data joins and basic interactivity||
|5| ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+)  Jan 24| Learning to classify data: various algorithms, Generative and Discriminative Models,  |PRML|
|5|  ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) Jan 24| Lab: Connect Python to D3 using Flask||
|6| ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) Jan 31| Mathematics of Support Vector Machines, Kernel Machines, Decision Trees | PRML|
|6| Jan 31| __Project: Complete a Basic Data Classification Interactive Application__ ||
|6| Feb 3| __Tierce 1 Exam__||
|7| ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) Feb 7|   Networks: Basic Algorithms: Path Finding||
|7|  ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) Feb 7| Lab: Visualization of Networks and Trees in D3||
|8| ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) Feb 14|  Networks Analysis: Random Walks, Counting Triangles||
|8|  ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) Feb 14| Lab: Intro to Neo4J||
|8|  ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) Feb 14| Case Studies: Knowledge Graphs, Product Recommendation, Graphical Models ||
|9| ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) Feb 21|  Centrality Algorithms, Community Detection Algorithms ||
|9|  ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) Feb 21| Lab: Data Analysis using Neo4J| |
|10|  ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) Feb 28| Text and Graph Embedding Algorithms||
|10|  ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) Feb 28| Lab: Word Cloud, Text Visualization, NLP libraries: NLTK    |    |
|11| ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) Mar 7|  Graph Machine Learning ||
|11| Mar 7| __Project: Complete a graph data analysis Application__| |
|12| Mar 12-20|__Mid Sem Break__||
|12| Mar 21| __Tierce 2 Exam__||
|13|  ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) Apr 4 | Time Series Data Analysis  ||
|13|  ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) Apr 4| Lab: Interactive Dashboards||
|14| ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) Apr 11|  Streaming Data Algorithms||
|14|  ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) Apr 11| Lab: Time Series Prediction and Clustering  ||
|14|  ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) Apr 11| Case Studies: Weather, Financial Data, Imports/Exports,  ||
|15| ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) Apr 18|  Algorithms for Clustering Data: K-Means, K-Means++, DTW, DBSCAN ||
|15|  ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) Apr 18 | Lab: Geographical Maps  ||
|15| ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) Apr 25|  Dimensionality Reduction Algorithms | |
|16|  ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) Apr 25| Lab: Visualization of High-Dimensional Data using T-SNE ||
|17 |Apr 25 |__Major Project: Complete a major data analysis course project__  ||
