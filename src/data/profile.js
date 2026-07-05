export const profileData = {
  personalInfo: {
    name: "Dr. Siva Shanmugam C",
    title: "Professor of Corporate Finance & Management Studies",
    subtitle: "Research Chair & Dean (School of Management)",
    institution: "Sapthagiri NPS University",
    location: "Bengaluru, Karnataka, India",
    email: "siva.shanmugam@snpsu.edu.in",
    office: "Room 102, Block A, School of Management, Sapthagiri NPS University",
    phone: "+91 80 2672 1983",
    avatar: "/assets/siva-pic.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/dr-siva-shanmugam-21911211b/",
      scholar: "https://scholar.google.com/citations?user=placeholder",
      researchgate: "https://www.researchgate.net/profile/Siva-Shanmugam-C",
      orcid: "https://orcid.org/0000-0002-xxxx-xxxx"
    }
  },
  aboutMe: {
    bio: [
      "Dr. Siva Shanmugam C is a distinguished Professor of Management and Corporate Finance with over 18 years of academic and research experience. His work focus lies at the intersection of empirical corporate finance, working capital management, and computational financial analytics.",
      "As a Research Chair, he has supervised several doctoral theses, pioneered innovative curricula in Financial Analytics and Machine Learning for Business, and advised various public and private organizations on asset allocation and capital budgeting strategies.",
      "Dr. Shanmugam has published over 50 articles in top-tier international journals and serves on the editorial boards of several finance and management reviews. He is dedicated to mentoring the next generation of business leaders and researchers."
    ],
    researchInterests: [
      {
        title: "Working Capital & Profitability",
        description: "Exploring structural and operational determinants of working capital cycle optimization in manufacturing and retail sectors and their impact on corporate profitability."
      },
      {
        title: "SME Financial Resilience",
        description: "Investigating cash flow volatility patterns, credit access constraints, and liquidity hedging strategies in small and medium-sized enterprises in emerging economies."
      },
      {
        title: "Financial Analytics & ML",
        description: "Developing machine learning algorithms for corporate default predictions, market sentiment analysis, and quantitative portfolio optimization."
      },
      {
        title: "Corporate Governance",
        description: "Analysing board structure, compliance policies, and stakeholder rights dynamics in family-owned vs. publicly-traded corporations."
      }
    ],
    timeline: [
      {
        year: "2018 - Present",
        role: "Professor & Research Chair",
        institution: "Sapthagiri NPS University, Bengaluru",
        description: "Leading research groups in Empirical Finance, supervising PhD scholars, and teaching Corporate Finance and Business Analytics."
      },
      {
        year: "2013 - 2018",
        role: "Associate Professor (Finance)",
        institution: "Faculty of Management Studies",
        description: "Conducted extensive research on cash flow management in SMEs, developed advanced financial modeling coursework, and organized international conferences."
      },
      {
        year: "2007 - 2013",
        role: "Assistant Professor",
        institution: "Department of Management Studies",
        description: "Lectured on Management Accounting and Investment Banking. Initiated student consulting incubator programs."
      },
      {
        year: "2005 - 2007",
        role: "Senior Financial Consultant",
        institution: "Vanguard Wealth Partners",
        description: "Provided corporate structure advising, risk analysis, and capital restructuring strategies for growth-stage manufacturing companies."
      }
    ]
  },
  education: [
    {
      degree: "Ph.D. in Corporate Finance",
      institution: "Indian Institute of Science (IISc), Bengaluru",
      year: "2011",
      details: "Thesis: 'An Empirical Investigation into Working Capital Management Practices and Profitability of Indian Manufacturing Industries.'"
    },
    {
      degree: "Master of Business Administration (MBA - Finance)",
      institution: "Bharathiar University, Coimbatore",
      year: "2005",
      details: "Specialized in Financial Management and Investment Analysis. Academic Gold Medalist."
    },
    {
      degree: "Master of Commerce (M.Com - Finance & Accounting)",
      institution: "Loyola College, Chennai",
      year: "2003",
      details: "Specialized in Advanced Financial Accounting and Taxation Systems."
    }
  ],
  publications: [
    {
      id: "pub-1",
      title: "Working Capital Management and Corporate Profitability: Evidence from Indian Manufacturing Firms",
      authors: "Siva Shanmugam C, Ramakrishnan S",
      journal: "International Journal of Finance & Economics",
      year: 2023,
      volume: "28",
      issue: "3",
      pages: "312-329",
      doi: "10.1002/ijfe.2654",
      category: "Journal",
      abstract: "This paper investigates the relationship between working capital management and the profitability of manufacturing companies listed on the National Stock Exchange of India. Utilizing panel data regression models, we find that reducing the cash conversion cycle significantly improves operating profitability, particularly in capital-intensive sectors.",
      bibtex: `@article{siva2023working,
  title={Working Capital Management and Corporate Profitability: Evidence from Indian Manufacturing Firms},
  author={Siva Shanmugam, C. and Ramakrishnan, S.},
  journal={International Journal of Finance \\& Economics},
  volume={28},
  number={3},
  pages={312--329},
  year={2023},
  publisher={Wiley Online Library}
}`
    },
    {
      id: "pub-2",
      title: "Impact of Cash Flow Volatility on Small and Medium Enterprises Performance",
      authors: "Siva Shanmugam C",
      journal: "Journal of Small Business Management",
      year: 2021,
      volume: "59",
      issue: "2",
      pages: "189-207",
      doi: "10.1080/00472778.2021.1924536",
      category: "Journal",
      abstract: "SMEs face severe resource constraints that make cash flow volatility highly detrimental to operations. This study analyzes 400 Indian SMEs over a ten-year period to assess how short-term liquidity cushions mitigate the risk of bankruptcy during economic downturns.",
      bibtex: `@article{siva2021impact,
  title={Impact of Cash Flow Volatility on Small and Medium Enterprises Performance},
  author={Siva Shanmugam, C.},
  journal={Journal of Small Business Management},
  volume={59},
  number={2},
  pages={189--207},
  year={2021},
  publisher={Taylor \\& Francis}
}`
    },
    {
      id: "pub-3",
      title: "Predictive Analytics in Corporate Default Risk: A Machine Learning Approach",
      authors: "Siva Shanmugam C, Venkatesh G, Subramaniam P",
      journal: "Applied Economics Letters",
      year: 2020,
      volume: "27",
      issue: "14",
      pages: "1165-1172",
      doi: "10.1080/13504851.2020.1782294",
      category: "Journal",
      abstract: "Traditional default models rely heavily on linear ratios. This study proposes a Random Forest and Gradient Boosting classifier framework to identify distressed corporations, demonstrating a 9% improvement in predictive accuracy over Altman's Z-Score model.",
      bibtex: `@article{siva2020predictive,
  title={Predictive Analytics in Corporate Default Risk: A Machine Learning Approach},
  author={Siva Shanmugam, C. and Venkatesh, G. and Subramaniam, P.},
  journal={Applied Economics Letters},
  volume={27},
  number={14},
  pages={1165--1172},
  year={2020},
  publisher={Taylor \\& Francis}
}`
    },
    {
      id: "pub-4",
      title: "Empirical Analysis of Liquidity Management in Indian IT Sector",
      authors: "Siva Shanmugam C",
      journal: "Annual Conference on Financial Economics & Markets",
      year: 2022,
      pages: "45-56",
      doi: "10.1109/CFEM.2022.95",
      category: "Conference",
      abstract: "Software development and IT service companies operate under unique working capital structures characterized by low inventory and high receivable turnover. This research evaluates the impact of trade credit terms on cash reserve policies in IT services.",
      bibtex: `@inproceedings{siva2022empirical,
  title={Empirical Analysis of Liquidity Management in Indian IT Sector},
  author={Siva Shanmugam, C.},
  booktitle={Proceedings of the Annual Conference on Financial Economics \\& Markets},
  pages={45--56},
  year={2022}
}`
    },
    {
      id: "pub-5",
      title: "Venture Capital Funding Models for Agri-Tech Startups in South Asia",
      authors: "Siva Shanmugam C, Nair A",
      journal: "Global Management Summit, National University of Singapore",
      year: 2019,
      pages: "102-114",
      doi: "10.2139/ssrn.3499120",
      category: "Conference",
      abstract: "Agri-tech startups operate under long gestation periods and high weather-dependent risks. We construct a multi-criteria decision-making framework to evaluate alternative venture capital structures that balance yield-variability with growth metrics.",
      bibtex: `@inproceedings{siva2019venture,
  title={Venture Capital Funding Models for Agri-Tech Startups in South Asia},
  author={Siva Shanmugam, C. and Nair, A.},
  booktitle={Global Management Summit Proceedings, NUS},
  pages={102--114},
  year={2019}
}`
    }
  ],
  teaching: {
    courses: [
      {
        code: "MGMT-601",
        title: "Corporate Finance",
        level: "Postgraduate (MBA)",
        term: "Semester I, Fall",
        description: "Introduces students to fundamental decisions in corporate finance: investment, capital structure, dividend distribution, and working capital optimization.",
        outline: ["Time Value of Money & Valuation", "Capital Budgeting Techniques", "Cost of Capital & WACC", "Capital Structure Theories", "Dividend Policy Models"]
      },
      {
        code: "MGMT-742",
        title: "Financial Analytics & Modeling",
        level: "Postgraduate (MBA/MS)",
        term: "Semester III, Spring",
        description: "An applied laboratory-based course mapping financial theory to analytical programming. Students construct valuation models, portfolio optimizers, and risk engines in Python.",
        outline: ["Python Essentials for Finance", "Data Extraction (Pandas-datareader, APIs)", "Portfolio Risk-Return Frontiers (Markowitz)", "Monte Carlo Asset Simulations", "Machine Learning in Credit Scoring"]
      },
      {
        code: "MGMT-812",
        title: "Empirical Corporate Finance",
        level: "Doctoral (Ph.D.)",
        term: "Year-Round Research Seminar",
        description: "Advanced doctoral seminar reviewing classic and contemporary research papers on corporate governance, capital market efficiency, and empirical corporate finance methodologies.",
        outline: ["Endogeneity & Causality in Corporate Finance", "Difference-in-Differences (DiD) Estimation", "Instrumental Variable (IV) Methods", "Event Study Methodology", "Corporate Governance Literature Review"]
      }
    ],
    students: {
      active: [
        {
          name: "Aswathy Nair",
          degree: "Ph.D.",
          topic: "Sustainable Finance and ESG Disclosures in Emerging Markets",
          timeline: "2023 - Present"
        },
        {
          name: "Ramesh Kumar K",
          degree: "Ph.D.",
          topic: "AI-driven Credit Risk Assessment Models for Retail Banking",
          timeline: "2022 - Present"
        },
        {
          name: "Neha Sen",
          degree: "M.S. by Research",
          topic: "Crowdfunded Venture Survival Rates in India",
          timeline: "2024 - Present"
        }
      ],
      completed: [
        {
          name: "Dr. Preethi R",
          degree: "Ph.D.",
          topic: "Dynamics of Working Capital Optimization in Manufacturing Sector",
          timeline: "Graduated 2021 (Current Placement: Associate Professor, Saintgits)"
        },
        {
          name: "Dr. T. Vignesh",
          degree: "Ph.D.",
          topic: "Strategic IPO Underpricing Dynamics in South Asian Stock Markets",
          timeline: "Graduated 2018 (Current Placement: Quantitative Analyst, ICICI Securities)"
        }
      ]
    }
  },
  blogPosts: [
    {
      id: "blog-1",
      title: "The Evolving Landscape of Corporate Governance in Indian SMEs",
      date: "June 15, 2026",
      readTime: "6 min read",
      tags: ["Corporate Governance", "SMEs", "Regulations"],
      summary: "An analysis of how governance regulations are reshaping business operations, transparency, and financial resilience in the SME sector in India.",
      content: `### Introduction
Corporate governance is often perceived as a concern exclusive to large, publicly-listed corporations. However, small and medium enterprises (SMEs) constitute the backbone of emerging economies like India, contributing over 30% to the national GDP and 45% to manufacturing output. For these entities, corporate governance is not merely about legal compliance; it is a critical driver of financial sustainability and capital accessibility.

In this article, we examine the structural shifts in SME governance in India, highlight the core friction points, and outline a framework for building robust governance within resource-constrained enterprises.

---

### The Capital Access Conundrum
The single largest obstacle to SME growth in emerging markets is the **cost and availability of capital**. Traditional lenders (commercial banks) view SMEs as high-risk prospects due to:
*   Informal accounting records.
*   Lack of professional board oversight.
*   Concentrated owner-manager structures leading to agency conflicts.

By establishing fundamental governance mechanisms—such as appointing independent directors, implementing audited internal controls, and separating family ownership from executive management—SMEs can dramatically improve their transparency. 

> **Key Takeaway:** Governance acts as a signaling mechanism. Highly-governed SMEs enjoy an average reduction of 150–200 basis points in loan interest rates compared to poorly-governed counterparts.

---

### Implementing 'Right-Sized' Governance
For an SME, replicating the governance structure of a conglomerate like Tata or Reliance is neither feasible nor desirable. What they need is *right-sized governance*. 

We propose a three-tiered implementation road map:

1. **Phase 1: Financial Hygiene (Months 1–6)**
   Transition from cash-based tracking to standardized ERP software. Establish quarterly audits conducted by external chartered accountants.
2. **Phase 2: Board Professionalization (Months 6–12)**
   Induct at least two independent advisory board members with specific industry or financial domain expertise to challenge managerial biases.
3. **Phase 3: Succession Planning & Structuring (Months 12–24)**
   Draft clear bylaws distinguishing family wealth from business balance sheets, and establish formal succession paths to avoid operations paralysis.

---

### Conclusion
As the Indian capital markets mature, the appetite for SME IPOs (via platforms like NSE Emerge and BSE SME) has reached unprecedented levels. However, listing is only the beginning. Long-term value creation in the SME space belongs to those who view corporate governance not as a cost center, but as a strategic asset. `
    },
    {
      id: "blog-2",
      title: "Financial Analytics: Transitioning from Spreadsheet to Python",
      date: "May 10, 2026",
      readTime: "8 min read",
      tags: ["Data Analytics", "Python", "Finance Education", "Modeling"],
      summary: "Why modern finance professionals must look beyond traditional spreadsheet models and embrace programmatic analytical frameworks.",
      content: `### The Limits of the Grid
For decades, Microsoft Excel has been the undisputed king of finance. Its intuitive grid, cell formulas, and instant recalculations made it the default sandbox for investment banking, corporate planning, and risk modeling. 

Yet, as the volume, variety, and velocity of financial data have scaled exponentially, the limitations of spreadsheet-based financial modeling have become glaring:
1. **Version Control Nightmares:** The classic file names like \`Valuation_v3_final_revised_actual_FINAL.xlsx\` are a testament to the lack of auditable history.
2. **Computational Scale:** Excel struggles or crashes when handling datasets exceeding a few hundred thousand rows.
3. **Black Box Formulas:** Auditing complex nested formulas (\`IFERROR(VLOOKUP(...), INDEX(MATCH(...)))\`) is notoriously error-prone.

---

### The Rise of Python in Finance
Python has emerged as the programming language of choice for quantitative finance, risk management, and financial analytics. Its benefits are structural:

* **Reproducibility:** Python code outlines the analytical process step-by-step. Anyone running the code on the same source data will arrive at the exact same results.
* **Open Source Ecosystem:** Libraries like \`pandas\` (data manipulation), \`numpy\` (linear algebra), \`scikit-learn\` (machine learning), and \`matplotlib/seaborn\` (visualization) provide a powerful research suite out of the box.
* **Integrations:** Easily connect to live APIs, pull databases directly (SQL), or scrape web data to dynamically feed financial indicators.

Let's look at a simple comparison of how we analyze stock covariance between Excel and Python:

\`\`\`python
import pandas as pd
import yfinance as yf

# Fetch closing prices for a portfolio of stocks
tickers = ['RELIANCE.NS', 'TCS.NS', 'INFY.NS', 'HDFCBANK.NS']
data = yf.download(tickers, start='2025-01-01', end='2025-12-31')['Close']

# Calculate daily returns
returns = data.pct_change()

# Compute correlation matrix
correlation_matrix = returns.corr()
print(correlation_matrix)
\`\`\`

With just 8 lines of Python code, we can fetch market data directly from Yahoo Finance, compute daily percentage returns, and print a correlation matrix. In Excel, this would require downloading CSVs, matching date alignments, and configuring the Data Analysis toolpak.

---

### A Pragmatic Curriculum for Professionals
If you are a finance professional wanting to bridge the gap, here is how you should structure your learning journey:

1. **Master Pandas DataFrames:** This is the programmatic equivalent of a spreadsheet grid. Learn grouping, slicing, merging, and pivoting.
2. **Visualizations:** Learn to build interactive dashboards using \`Plotly\` or \`Streamlit\`, which make your models highly presentable.
3. **Time Series Analysis:** Study lag models, moving averages, volatility modeling, and index adjustments.

The spreadsheet is not dead—it will always have a place for quick calculations and reports. But for complex valuations, risk stress-testing, and forecasting, Python is the modern financial analyst's primary tool.`
    },
    {
      id: "blog-3",
      title: "Working Capital Optimization in the Post-Crisis Era",
      date: "March 22, 2026",
      readTime: "5 min read",
      tags: ["Working Capital", "Risk Management", "Business Strategy"],
      summary: "Key strategies for treasury managers to preserve liquidity and manage cash flow shocks in turbulent macroeconomic conditions.",
      content: `### Cash is King, Liquidity is Queen
During periods of economic stability, companies focus heavily on profitability, often running lean inventories and pushing receivables terms to boost sales. However, when macro shocks strike—be it supply chain bottlenecks, interest rate hikes, or geopolitical disruptions—the focus shifts overnight from *Return on Capital* to *Return of Capital*. 

Treasury managers are reminded of the age-old business adage: *Revenue is vanity, profit is sanity, but cash is reality.*

---

### The Triple Lever of Working Capital
Working capital management boils down to managing three key numbers:
1. **Days Inventory Outstanding (DIO):** How long does inventory sit in warehouses before being sold?
2. **Days Sales Outstanding (DSO):** How long does it take to collect cash from customers after a sale?
3. **Days Payable Outstanding (DPO):** How long does it take to pay suppliers?

Combined, these define the **Cash Conversion Cycle (CCC)**:
$$\\text{CCC} = \\text{DIO} + \\text{DSO} - \\text{DPO}$$

A lower CCC means a firm generates cash faster and requires less external funding to sustain its operations. 

---

### Post-Crisis Management Strategies

#### 1. Dynamic Inventory Segmentation
Instead of using a uniform safety stock metric, implement a dynamic ABC inventory analysis. Category A items (high-velocity, high-margin) should have tight tracking, whereas Category C items can have longer lead times and lower storage allocations to free up capital.

#### 2. Receivables Risk Profiling
Traditional DSO tracks averages. What matters in a crisis is *aging distribution*. Segment debtors by payment history and risk profile. Offer early-payment discounts (e.g., 2/10 net 30) to high-risk buyers to accelerate collections.

#### 3. Strategic Supplier Collaboration
While pushing payables (increasing DPO) preserves cash, over-stretching key suppliers can break your supply chain. Seek structural win-win agreements, such as supply-chain financing (reverse factoring), where banks pay suppliers early at low interest based on your credit rating, allowing you to pay the bank later.

---

### Conclusion
Working capital is the oil that keeps the corporate engine running. In a post-crisis economy, optimizing it is not a yearly housekeeping task; it is a weekly stress-testing routine that separates resilient corporations from the vulnerable.`
    }
  ],
  events: [
    {
      id: "ev-1",
      title: "Master Class: Career Opportunities in Capital Market",
      category: "Seminar",
      date: "June 25, 2026",
      time: "11:00 AM - 1:00 PM",
      venue: "B-Block Seminar Hall, Sapthagiri NPS University",
      speaker: "Mr. Sanjeev B (NISM)",
      image: "/assets/ev-1-1.jpg",
      images: [
        "/assets/ev-1-1.jpg",
        "/assets/ev-1-2.jpg",
        "/assets/ev-1-3.jpg",
        "/assets/ev-1-4.jpg",
        "/assets/ev-1-5.jpg"
      ],
      description: "The School of Management Studies at Sapthagiri NPS University hosted a Master Class Series seminar on 'Career Opportunities in Capital Market' in partnership with NISM (National Institute of Securities Markets), featuring speaker Mr. Sanjeev B."
    },
    {
      id: "ev-2",
      title: "HR Club Presents: Chain Sprint",
      category: "Activity",
      date: "June 25, 2026",
      time: "2:30 PM Onwards",
      venue: "Seminar Hall, B Block, Sapthagiri NPS University",
      coordinator: "Prof. K Deepika Rani",
      image: "/assets/poster-2.jpg",
      description: "HR Club organized a dynamic team-building game event to enhance communication, teamwork, and leadership skills among management scholars."
    },
    {
      id: "ev-3",
      title: "Master Class: Career Planning in Marketing & Supply Chain",
      category: "Seminar",
      date: "June 24, 2026",
      time: "10:00 AM - 11:00 PM",
      venue: "C-Block Seminar Hall, Sapthagiri NPS University",
      speaker: "Mr. Shinto Joseph (Director - Market Development, Tasking)",
      image: "/assets/poster-3.jpg",
      description: "Advanced masterclass on supply chain operations and product relaunch dynamics, offering strategic advice for career planning in commerce."
    },
    {
      id: "ev-4",
      title: "OPS-Innovate 2026: Production & Operations Model Expo",
      category: "Expo",
      date: "June 24, 2026",
      time: "11:45 AM - 1:00 PM",
      venue: "Room C 214, Sapthagiri NPS University",
      image: "/assets/poster-4.jpg",
      description: "A model exposition showcasing advanced production systems, operational models, and innovative logistics designs created by the School of Management students."
    },
    {
      id: "ev-5",
      title: "Once Upon a Decision: Business Analytics Quiz",
      category: "Competition",
      date: "June 22, 2026",
      time: "2:30 PM Onwards",
      venue: "B Block Seminar Hall, Sapthagiri NPS University",
      image: "/assets/poster-5.jpg",
      description: "The Business Analytics Club hosted a competitive quiz challenge exploring data-driven decisions and predictive analytics insights."
    },
    {
      id: "ev-6",
      title: "Product Relaunch Competition & Academic Felicitation",
      category: "Academic",
      date: "June 19-20, 2026",
      time: "10:00 AM - 4:00 PM",
      venue: "B-Block Seminar Hall, Sapthagiri NPS University",
      speaker: "Mr. Shinto Joseph (Director - Market Development, Tasking)",
      images: ["/assets/event-pic-1.jpg", "/assets/event-pic-2.jpg", "/assets/event-pic-3.jpg"],
      description: "The School of Management organized the Product Relaunch Competition 2026. Chief Guest Mr. Shinto Joseph and Dean Dr. Siva Shanmugam presented academic honors, certificates, and university felicitation tokens to participants."
    }
  ]
};
