---
layout: default
title: SWIRE COCA-COLA Distribution Project
---

[← Back to Home](index.md)

### [SWIRE COCA-COLA Distribution Project](https://github.com/asdelis/asdelis.github.io/tree/main/data_analytics_projects/swire_distribution_project)

This is a capstone project hosted by the Coca-Cola Bottler Swire. They generously gave our class customer, transaction, and some cost data and asked us to come up with insight into how they should determine which customers' distribution should be outsourced. They value being the distributor to their clients due to the relationships they are able to build through the process, but it is much more expensive than the third parties they occasionally use.

The project includes:

- A business problem statment that I drafted with my team
- The ipynb file I used for EDA
- The rmd file I used for my portion of the modeling

For the modeling portion I created an ARIMA model that would forecast growth per customer category. However we were only given two years of data for this project, so the reliability of the model was suspect. This was offered to Swire as more of a tool they could use with their full data.

The final solution my group presented was a set of data-driven criteria consisting of eight rules they could use to determine which customer should be retained or outsourced. The criteria was determined by creating a modified RFM score, a K-Means clustering model, and two prediction models. One multinomial regression model and one simple decision tree. We estimated that the criteria would result in around ~770K in savings.
