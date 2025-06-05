

## Data Analytics Projects

- [SWIRE COCA-COLA Distribution Project](swire_project.md)

### [SWIRE COCA-COLA Distribution Project](https://github.com/asdelis/asdelis.github.io/tree/main/data_analytics_projects/swire_distribution_project)

This is a capstone project hosted by the Coca-Cola Bottler Swire. They generously gave our class customer, transaction, and some cost data and asked us to come up with insight into how they should determine which customers' distribution should be outsourced. They value being the distributor to their clients due to the relationships they are able to build through the process, but it is much more expensive than the third parties they occasionally use.

The project includes:

- A business problem statment that I drafted with my team
- The ipynb file I used for EDA
- The rmd file I used for my portion of the modeling

For the modeling portion I created an ARIMA model that would forecast growth per customer category. However we were only given two years of data for this project, so the reliability of the model was suspect. This was offered to Swire as more of a tool they could use with their full data.

The final solution my group presented was a set of data-driven criteria consisting of eight rules they could use to determine which customer should be retained or outsourced. The criteria was determined by creating a modified RFM score, a K-Means clustering model, and two prediction models. One multinomial regression model and one simple decision tree. We estimated that the criteria would result in around ~770K in savings.

---

### [TV Show Popularity Analysis](https://github.com/asdelis/asdelis.github.io/tree/main/data_analytics_projects/tv_popularity_analysis)

I conducted this project to identify which factors influenced TV show popularity in 2024. As someone outside the industry, I was curious about what types of television content resonate most with audiences, which could potentially help streaming services make better decisions about which shows to produce.

The project includes:

- An analysis document detailing my approach and findings
- Application of multiple statistical techniques to identify patterns in TV show popularity
- Clear recommendations based on the analysis

For the analysis portion, I employed various techniques including penalized regression (both lasso and ridge), clustering methods (partition and hierarchical), and principal component analysis. The regression models were particularly valuable in identifying confounding variables and isolating the most influential factors affecting a show's popularity.

The final results indicated that genre plays a crucial role in determining popularity, with soap operas from outside the US performing particularly well. Additionally, I found that family-friendly content tends to outperform adult-oriented shows. The clustering analysis revealed potential for even more refined segmentation, suggesting opportunities for further research.

My recommendations to streaming services include being strategic about genre selection, considering international soap operas as potential acquisitions, and prioritizing content suitable for general audiences. I estimated that following these recommendations could significantly increase the popularity scores of new content releases.

---

### [Home Credit Kaggle Competition Project](https://github.com/asdelis/asdelis.github.io/tree/main/data_analytics_projects/home_credit_kaggle_competition)

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

---

### [Six Marketing Focused Data Analytics Cases](https://github.com/asdelis/asdelis.github.io/tree/main/data_analytics_projects/marketing_analytics_cases)

These are cases from a marketing class I took that covered basic experimentation concepts.

Main Concepts Covered:
- Potential Outcomes
- Experimentation
- A/B Testing
- A/B/n Testing
- Group Sequential Designs
- Midterm
- Propensity Score Matching and Weighting
- Uplift modeling with Causal Machine Learning
- Heterogeneous Treatment Effects
- Fixed Effects
- Difference-in-Differences
- Synthetic Control 



