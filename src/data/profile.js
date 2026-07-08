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
  blogPosts: [],
  events: []
};
