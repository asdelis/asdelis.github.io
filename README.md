# portfolio_projects repository

This repository contains two main project collections:
1. [Data Analytics Projects](https://github.com/asdelis/asdelis.github.io/tree/main/data_analytics_projects)
2. [Java Projects](https://github.com/asdelis/asdelis.github.io/tree/main/java_projects)

## [Data Analytics Projects](https://github.com/asdelis/asdelis.github.io/tree/main/data_analytics_projects)

A compilation of data analytics projects that showcase my growing data analytics skills that currently includes:
- A Kaggle competition project
- Six marketing focused data analytics cases

#### [Home Credit Kaggle Competition](https://github.com/asdelis/asdelis.github.io/tree/main/data_analytics_projects/home_credit_kaggle_competition)

Home Credit is a loan provider with a mission to “broaden financial inclusion for the unbanked population by providing a positive and safe borrowing experience.” Understanding the real indicators for a prospective client’s repayment ability is imperative to their financial and existential missions.

The goal of this Kaggle competition is to simply create a model that will more accurately predict their customer’s repayment abilities. In their own words, creating this model will “ensure that clients capable of repayment are not rejected and that loans are given with a principal, maturity, and repayment calendar that will empower their clients to be successful.”

I worked in a group of four for this project. We first cleaned the data. Then each member of our group decided to each take a model and see how it performed. I personally used a decision tree. I also used PCA to see if that improved the decision tree’s performance.

The decision tree did not perform terribly on its own (65% accuracy). However, it didn’t beat the majority class (91%) probably due to some overfitting.

PCA did not improve the model’s performance. The data set included many categorical variables, and one-hot-encoding these in order to do PCA made the dimensionality reduction capabilities of PCA much less potent.

The model that performed best was an MLP model. Surprisingly, it performed roughly the same depending on whether the data was cleaned (71% accuracy) or not (69% accuracy). However, due to it being a black box model, identifying an actionable business plan based on the analysis (outside of just handing the model over to Home Credit) was very difficult to come up with.

This was my first time working with a very large and imperfect data set. My big picture take-aways are:
- I understand the "most of my job is actually just cleaning the data" comments better now
- Model tuning can be the most time consuming part of a machine learning project
- Black box models are powerful, but aptly named

#### [Marketing Analytics Cases](https://github.com/asdelis/asdelis.github.io/tree/main/data_analytics_projects/marketing_analytics_cases)

A compilation of shorter data analytics projects focused on solving a marketing problem with a specific testing method or pre-processing technique.

Each marketing analytics case folder includes:
- Case description of the marketing problem
- Detailed RMarkdown analysis file

## [Java Projects](https://github.com/asdelis/asdelis.github.io/tree/main/java_projects)

A collection of Java programming projects created during my semester in the University of Utah's MSD program. These projects showcase the fundamental programming skills and concepts that I learned through the MSD coursework.