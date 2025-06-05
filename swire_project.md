---
layout: default
title: SWIRE COCA-COLA Distribution Project
---

[← Back to Home](index.md)

# SWIRE COCA-COLA Distribution Project

This capstone project was hosted by the Coca-Cola bottler **Swire**. They generously provided our class with customer, transaction, and limited cost data, and asked us to develop insights into how they should determine which customer distributions could be outsourced.

Swire values being the primary distributor to their clients because of the strong relationships it enables. However, self-distribution is significantly more expensive than relying on third-party partners.

---

## 🔍 Business Problem

> How can Swire optimize their distribution network while preserving valuable customer relationships?

Our goal was to help them decide **which customers to retain in their self-distribution model and which to outsource**, using a data-driven approach.

---

## 📊 Project Components

- A business problem statement drafted by our team
- An exploratory data analysis notebook (`.ipynb`)
- A modeling document (`.rmd`) for my contribution

---

## 📈 My Modeling Contribution

I created an **ARIMA time series model** to forecast customer growth by category. However, due to having only two years of data, the reliability of the forecasts was limited. The model was positioned more as a prototype tool that Swire could later apply to richer internal datasets.

---

## 🧠 Final Team Solution

We developed **eight rules** that Swire could use to decide which customers should be retained or outsourced. These rules were informed by:

- A modified **RFM scoring system**
- **K-Means clustering**
- **Two predictive models**:
  - A **multinomial regression**
  - A **simple decision tree**

Together, these components formed a decision framework that estimated **~$770K in potential savings** if implemented.

---

## 🧵 Key Takeaways

- Blending unsupervised and supervised modeling led to more interpretable, actionable business rules.
- Customer-level forecasting, even with limited data, can provide directional value when combined with segmentation techniques.
- Group collaboration allowed for a multi-faceted analysis, resulting in a richer final solution.

---

[View Project on GitHub →](https://github.com/asdelis/asdelis.github.io/tree/main/data_analytics_projects/swire_distribution_project)
