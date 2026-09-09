// Portfolio content. Edit here, then run npm run build.
export const person = {
  "name": "Sanjoy Kumar Sarkar",
  "shortName": "Sanjoy Sarkar",
  "title": "IT & Digital Systems Professional",
  "email": "imsanjoy562@gmail.com",
  "linkedin": "https://www.linkedin.com/in/sksarkar/",
  "github": "https://github.com/sanjoyksarkar",
  "siteUrl": "",
  "description": "IT and Digital Systems professional with 8 years of experience in IT infrastructure, Microsoft 365, MIS, digital health, PostgreSQL, Linux and technology operations across international development organizations."
};

export const experience = [
  {
    "org": "IEDCR",
    "fullName": "Institute of Epidemiology, Disease Control and Research",
    "role": "IT Officer – Data & MIS",
    "dates": "Mar 2025 – Jun 2026",
    "year": "2025",
    "focus": "Digital health & data systems",
    "summary": "Maintained operational technology and data workflows for climate-informed disease surveillance and early warning.",
    "bullets": [
      "Maintained PostgreSQL-backed dengue and malaria datasets, database upserts and ERA5-derived climate updates for surveillance and forecasting workflows.",
      "Operated Linux application services using Docker, Nginx and systemd; diagnosed an external dashboard-access issue and restored reachability after correcting access/network configuration.",
      "Contributed to EWARS development alongside the wider team, documented technical work and helped surveillance users resolve operational issues."
    ],
    "tags": [
      "Digital health",
      "PostgreSQL",
      "Linux",
      "Python"
    ],
    "project": "ewars"
  },
  {
    "org": "Winrock International",
    "role": "IT & Admin Officer",
    "dates": "Sep 2023 – Mar 2025",
    "year": "2023",
    "focus": "MIS & digital transformation",
    "summary": "Managed IT operations while supporting information systems and wider programme operations.",
    "bullets": [
      "Managed day-to-day IT services, Microsoft 365 support, office connectivity, accounts and devices.",
      "Coordinated implementation and support of web-based MIS, dashboards and reporting automation, translating programme needs into practical systems.",
      "Coordinated technology procurement and vendors; supported staff training, collaboration tools and adoption across operational teams."
    ],
    "tags": [
      "Microsoft 365",
      "MIS",
      "Vendor coordination"
    ],
    "project": "winrock-mis"
  },
  {
    "org": "Oxfam Bangladesh",
    "role": "Information Technology Officer",
    "dates": "Oct 2021 – Aug 2023",
    "year": "2021",
    "focus": "IT operations & field infrastructure",
    "summary": "Provided independent field IT support across Cox’s Bazar and Teknaf, coordinating with wider organizational IT teams.",
    "bullets": [
      "Served as a primary IT resource for field operations, supporting networks, connectivity, endpoints and user systems.",
      "Resolved hardware, software and account incidents and supported collaboration platforms in a demanding field environment.",
      "Coordinated vendors and IT procurement, trained staff and supported reliable technology use for programme delivery."
    ],
    "tags": [
      "Field operations",
      "Networking",
      "Enterprise support"
    ],
    "project": "enterprise-it"
  },
  {
    "org": "Save the Children Bangladesh",
    "role": "Assistant Officer – ICT Infrastructure Administration",
    "dates": "Oct 2018 – Oct 2021",
    "year": "2018",
    "focus": "Enterprise ICT infrastructure",
    "summary": "Built a foundation in enterprise infrastructure and technical support across headquarters and field environments.",
    "bullets": [
      "Supported LAN/WAN connectivity, Microsoft-based environments, enterprise applications and end-user devices.",
      "Troubleshot hardware, software and access issues; supported endpoint deployment and infrastructure maintenance.",
      "Supported ICT operations within an environment spanning approximately 200+ HQ, 500+ field and 100+ Cox’s Bazar users."
    ],
    "tags": [
      "ICT infrastructure",
      "User support",
      "LAN/WAN"
    ],
    "project": "enterprise-it"
  }
];

export const projects = [
  {
    "slug": "ewars",
    "number": "01",
    "category": "Digital health / IEDCR",
    "title": "Climate-informed early warning.",
    "fullTitle": "Climate-Informed Early Warning & Response System",
    "summary": "Connecting disease surveillance, climate information and operational technology to support public-health preparedness.",
    "tags": [
      "PostgreSQL",
      "Python",
      "Linux",
      "Digital health"
    ],
    "period": "Mar 2025 – Jun 2026",
    "context": "IEDCR · Public-health surveillance",
    "challenge": "Climate-sensitive disease surveillance draws on information from multiple sources. Data collection, processing, application services and dashboards need to work together so that technical outputs can support public-health preparedness.",
    "role": "As IT Officer – Data & MIS, I maintained data workflows and application services within the early-warning environment. My hands-on responsibilities covered PostgreSQL, recurring data updates, Python backend components, Linux services and troubleshooting. EWARS development was a team effort; my focus was its technical implementation and day-to-day operation.",
    "approach": [
      "Maintained PostgreSQL-backed epidemiological and climate datasets feeding surveillance and forecasting workflows.",
      "Implemented and maintained automated collection and processing workflows for recurring data updates.",
      "Operated Python-based backend components and Linux-hosted application services, working across Docker, Nginx and systemd.",
      "Investigated data-refresh, application and infrastructure problems, documented technical work and helped users work with surveillance outputs."
    ],
    "result": "Maintained the data updates and application services that connected surveillance and climate information with dashboard and forecasting workflows. This work made the technical chain usable in day-to-day operations, alongside the wider team’s surveillance and analytical contributions.",
    "lesson": "An early-warning system depends on the whole service: data freshness, application availability, clear documentation and people who can interpret and use the information.",
    "technology": [
      "PostgreSQL",
      "Python",
      "FastAPI",
      "REST APIs",
      "Linux",
      "Docker",
      "Nginx",
      "systemd",
      "Git"
    ],
    "flow": [
      "Disease + climate sources",
      "Collection + validation",
      "PostgreSQL",
      "Python services + API",
      "Dashboards + decision support"
    ],
    "detailTitle": "What I actually worked on",
    "detailIntro": "My responsibilities connected database operations, automated data updates and the services behind the dashboards.",
    "details": [
      {
        "title": "Database & data refreshes",
        "text": "PostgreSQL-backed epidemiological and climate datasets, SQL-based investigation, recurring ingestion and data-processing scripts.",
        "items": [
          "PostgreSQL operations and dengue upserts",
          "NMCP monthly malaria updates",
          "ERA5-derived climate-data coverage and alignment"
        ]
      },
      {
        "title": "Backend & integration",
        "text": "Python and FastAPI components connecting prepared data to APIs, dashboards and reporting workflows.",
        "items": [
          "Python-based processing",
          "FastAPI and REST APIs",
          "Dashboard/backend troubleshooting"
        ]
      },
      {
        "title": "Application operations",
        "text": "Linux-hosted services and their deployment dependencies, including containers and application routing.",
        "items": [
          "Docker services",
          "Nginx application routing",
          "systemd service management"
        ]
      },
      {
        "title": "Operational continuity",
        "text": "Investigating failures across the data-to-dashboard chain and keeping technical knowledge available to the team.",
        "items": [
          "Application and infrastructure diagnosis",
          "Deployment support",
          "Technical documentation and user support"
        ]
      }
    ]
  },
  {
    "slug": "data-automation",
    "number": "02",
    "category": "Data systems / IEDCR",
    "title": "From scattered data to usable information.",
    "fullTitle": "Automated Disease & Climate Data Pipelines",
    "summary": "Automating recurring data collection, processing and PostgreSQL loading for surveillance and forecasting.",
    "tags": [
      "Python",
      "PostgreSQL",
      "APIs"
    ],
    "period": "Mar 2025 – Jun 2026",
    "context": "IEDCR · Surveillance and forecasting workflows",
    "challenge": "Disease and environmental information arrives through different sources and update cycles. Repetitive collection and preparation tasks make it harder to keep downstream surveillance workflows supplied with current data.",
    "role": "I implemented and maintained recurring collection and processing workflows within the public-health systems environment. I worked across Python scripts, PostgreSQL, external sources and scheduled processes, and investigated failures affecting downstream data updates.",
    "approach": [
      "Maintained collection workflows using APIs and external data sources, including extraction scripts where needed.",
      "Prepared and validated incoming information before database loading and downstream use.",
      "Maintained scheduled refresh processes and investigated issues across scripts, data flows and Linux services.",
      "Connected prepared datasets with surveillance dashboards and forecasting workflows."
    ],
    "result": "Refreshed dengue, malaria and ERA5-derived records were available to the database, dashboards and downstream forecasting workflows. Validation covered epi-week completeness, monthly district-level values, duplicate or missing records, and alignment between epidemiological and climate data.",
    "lesson": "Reliable automation requires attention to source changes, data quality and service dependencies as well as the extraction code itself.",
    "technology": [
      "Python",
      "PostgreSQL",
      "SQL",
      "REST APIs",
      "Linux",
      "Scheduled processes"
    ],
    "flow": [
      "External sources",
      "Extract + validate",
      "Scheduled processing",
      "Database loading",
      "Surveillance workflows"
    ],
    "detailTitle": "Three data workflows I maintained",
    "detailIntro": "These examples come from my hands-on work within EWARS. They describe the data checks and updates I performed, without exposing source credentials, patient records or internal infrastructure.",
    "details": [
      {
        "title": "Dengue | Surveillance ingestion & upserts",
        "text": "Updated dengue surveillance data in PostgreSQL and checked that refreshed records were ready for weather integration and forecasting.",
        "items": [
          "Validated epidemiological-week coverage",
          "Performed database upserts",
          "Checked for missing and duplicate records",
          "Verified availability for downstream workflows"
        ]
      },
      {
        "title": "Malaria | NMCP monthly API updates",
        "text": "Maintained the NMCP API-based monthly data flow and refreshed the latest available information into the system.",
        "items": [
          "Validated monthly district-level values",
          "Checked that newly available months reached the database",
          "Verified new months in dashboard outputs"
        ]
      },
      {
        "title": "Climate | ERA5-derived weather data",
        "text": "Updated ERA5-derived climate records used alongside disease surveillance data for downstream forecasting.",
        "items": [
          "Checked climate-dataset coverage",
          "Updated weather and environmental records",
          "Validated alignment of climate and epidemiological datasets"
        ]
      }
    ]
  },
  {
    "slug": "winrock-mis",
    "number": "03",
    "category": "Information systems / Winrock",
    "title": "Better systems for programme delivery.",
    "fullTitle": "Web-Based MIS & Operational Reporting",
    "summary": "Translating programme requirements into practical information systems, reporting and staff adoption.",
    "tags": [
      "MIS",
      "Reporting",
      "User adoption"
    ],
    "period": "Sep 2023 – Mar 2025",
    "context": "Winrock International · Development programme",
    "challenge": "Programme and management teams need consistent information without unnecessary manual work. A useful MIS must reflect operational requirements and be supported by reporting processes and confident users.",
    "role": "As IT & Admin Officer, I coordinated implementation and rollout of a web-based MIS for programme monitoring and reporting. I worked between programme users, operational teams and technical service providers, while also managing everyday IT services.",
    "approach": [
      "Worked with programme and operational teams to understand requirements and translate them into system needs.",
      "Coordinated MIS implementation and support, including collaboration with technology service providers.",
      "Supported dashboards, reporting automation and data management workflows.",
      "Provided staff training and ongoing user support, alongside Microsoft 365 and office IT services."
    ],
    "result": "Coordinated the rollout and operational support of a web-based MIS for programme monitoring and reporting. Programme users gained digital information-management and reporting tools, with training and continuing technical support to help them use those tools in their work.",
    "lesson": "A system is useful when it fits the work people actually do. Requirements, training and ongoing support are as important as implementation.",
    "technology": [
      "Web-based MIS",
      "Dashboards",
      "Data management",
      "Microsoft 365",
      "Reporting automation"
    ],
    "flow": [
      "Programme requirements",
      "System coordination",
      "MIS + data quality",
      "Reporting",
      "Training + support"
    ],
    "detailTitle": "Delivery in practice",
    "detailIntro": "The concrete deliverable was a web-based programme information system, with reporting workflows and the user support needed to make it part of daily work.",
    "details": [
      {
        "title": "Who it served",
        "text": "Programme and operational teams working with monitoring and management information.",
        "items": [
          "Programme information users",
          "Operational and management reporting needs"
        ]
      },
      {
        "title": "What I coordinated",
        "text": "Translated user requirements into implementation needs and coordinated with the technical service provider through rollout and ongoing support.",
        "items": [
          "Requirements and implementation coordination",
          "Staff training and user support"
        ]
      },
      {
        "title": "What became usable",
        "text": "Web-based information management, dashboards and digital reporting mechanisms for programme and management information.",
        "items": [
          "MIS data-management workflows",
          "Dashboards and reporting automation"
        ]
      }
    ]
  },
  {
    "slug": "enterprise-it",
    "number": "04",
    "category": "Infrastructure / International NGOs",
    "title": "Dependable IT, wherever the work happens.",
    "fullTitle": "Enterprise IT Operations & Infrastructure",
    "summary": "Supporting people, networks and enterprise services across headquarters and humanitarian field operations.",
    "tags": [
      "Microsoft 365",
      "Networking",
      "IT operations"
    ],
    "period": "Oct 2018 – Mar 2025",
    "context": "Save the Children · Oxfam Bangladesh · Winrock International",
    "challenge": "Headquarters and field programmes depend on connectivity, working devices and accessible enterprise services. Technical incidents can interrupt collaboration and programme operations, especially in demanding field environments.",
    "role": "At Save the Children, I supported enterprise ICT infrastructure and users across headquarters and field environments. At Oxfam, I took on independent field IT responsibilities across Cox’s Bazar and Teknaf. At Winrock, that remit expanded into day-to-day IT management, vendor coordination and wider programme operations.",
    "approach": [
      "Supported LAN/WAN, connectivity, endpoints, enterprise applications and account-related issues.",
      "Troubleshot incidents and coordinated with wider organizational IT teams and service providers.",
      "Supported equipment lifecycle activities, procurement and vendor coordination.",
      "Trained staff and supported secure, reliable use of productivity and collaboration tools."
    ],
    "result": "This work supported the continuity of everyday technology services across headquarters and field operations. It established the infrastructure, troubleshooting and user-support foundation I later brought to MIS and digital health systems.",
    "lesson": "Good IT operations combine technical diagnosis with clear communication and follow-through. Understanding the field context helps determine what needs attention first.",
    "technology": [
      "Microsoft environments",
      "Microsoft 365",
      "LAN/WAN",
      "Endpoints",
      "Account support",
      "Vendor management"
    ],
    "flow": [
      "People + programme needs",
      "Triage + diagnosis",
      "Infrastructure + services",
      "Resolution + coordination",
      "Training + continuity"
    ],
    "detailTitle": "Scale and growing responsibility",
    "detailIntro": "Three roles show how enterprise support experience grew into independent field ownership and broader operational coordination.",
    "details": [
      {
        "title": "Save the Children | 2018–2021",
        "text": "ICT operations within an environment spanning approximately 200+ HQ, 500+ field and 100+ Cox’s Bazar users.",
        "items": [
          "Enterprise infrastructure and LAN/WAN",
          "Endpoints, applications and account support"
        ]
      },
      {
        "title": "Oxfam | 2021–2023",
        "text": "Primary field IT responsibility across Cox’s Bazar and Teknaf, coordinating with wider organizational IT teams.",
        "items": [
          "Independent incident troubleshooting",
          "Connectivity, devices and field continuity"
        ]
      },
      {
        "title": "Winrock International | 2023–2025",
        "text": "Managed day-to-day IT services alongside procurement, vendors, collaboration tools and broader organizational responsibilities.",
        "items": [
          "Microsoft 365 and office IT operations",
          "Vendor coordination and staff training"
        ]
      }
    ]
  },
  {
    "slug": "production-troubleshooting",
    "number": "05",
    "category": "Production operations / IEDCR",
    "title": "From an unreachable dashboard to restored access.",
    "fullTitle": "Production Systems & PostgreSQL Troubleshooting",
    "summary": "A real EWARS availability incident, plus the PostgreSQL data checks behind reliable surveillance updates.",
    "tags": [
      "Linux",
      "Nginx",
      "PostgreSQL",
      "Troubleshooting"
    ],
    "period": "Mar 2025 – Jun 2026",
    "context": "IEDCR · EWARS operational environment",
    "contribution": "Incident diagnosis, access restoration & data validation",
    "challenge": "The EWARS dashboard became externally inaccessible even though the application was running. The task was to determine whether the failure was in the backend, reverse proxy or external access path, and restore normal reachability.",
    "role": "I investigated the incident across application services, Nginx and external connectivity. I performed the checks, corrected the relevant access/network configuration and validated that the dashboard was reachable again. This was operational troubleshooting within the wider EWARS environment.",
    "approach": [
      "Checked the application service with systemctl and tested the application locally with curl.",
      "Verified Nginx configuration and service status, and inspected access logs.",
      "Checked DNS resolution, firewall/UFW rules, listening ports, Fail2ban status and SSH/network connectivity.",
      "Established that the backend application and Nginx were healthy locally, isolating the failure to external connectivity/access.",
      "Corrected the relevant access/network configuration, revalidated the services and checked external dashboard access."
    ],
    "detailTitle": "Evidence that narrowed the fault",
    "detailIntro": "The incident was resolved in the access/network layer. The PostgreSQL checks below describe my related data-operations work; they were not the cause of this outage.",
    "details": [
      {
        "title": "Local services were healthy",
        "text": "The application responded locally and Nginx was running correctly. Those observations narrowed the investigation away from an application failure.",
        "items": [
          "Application service: systemctl",
          "Local request: curl",
          "Nginx configuration, status and access logs"
        ]
      },
      {
        "title": "External access needed attention",
        "text": "I investigated the path between the running service and external users, then corrected the relevant access/network configuration.",
        "items": [
          "DNS and port checks",
          "Firewall/UFW rules and Fail2ban status",
          "SSH and network connectivity"
        ]
      },
      {
        "title": "PostgreSQL data troubleshooting",
        "text": "Separately, I validated database updates for disease and climate workflows to make sure refreshed information reached downstream systems.",
        "items": [
          "Dengue epi-week coverage, upserts, missing/duplicate records",
          "Malaria monthly district-level values and dashboard updates",
          "ERA5 and epidemiological dataset alignment"
        ]
      }
    ],
    "result": "External dashboard access was restored after the relevant access/network configuration was corrected and the services were revalidated. The diagnosis distinguished healthy local application services from a failure in external reachability.",
    "lesson": "A running process does not guarantee that users can reach a service. Comparing local responses with external access helps isolate the failing layer before making changes to otherwise healthy components.",
    "technology": [
      "Linux",
      "systemctl",
      "curl",
      "Nginx",
      "DNS",
      "UFW",
      "Fail2ban",
      "SSH",
      "PostgreSQL",
      "SQL"
    ],
    "flow": [
      "External access fails",
      "Local application responds",
      "Nginx healthy locally",
      "Access/network correction",
      "External access restored"
    ]
  }
];

export const capabilities = [
  {
    "title": "Infrastructure & IT operations",
    "level": "Strong / hands-on",
    "text": "Enterprise support, systems administration, LAN/WAN, endpoints, incident troubleshooting, IT assets and operational continuity.",
    "tools": "IT operations · Networking · Enterprise support"
  },
  {
    "title": "Microsoft & enterprise platforms",
    "level": "Hands-on + working experience",
    "text": "Microsoft 365 administration and user support, collaboration platforms, accounts and access. Working experience across the Azure / Entra ecosystem.",
    "tools": "Microsoft 365 · Teams · Entra / Azure AD"
  },
  {
    "title": "Systems, backend & data",
    "level": "Hands-on + working experience",
    "text": "Hands-on PostgreSQL, SQL and Linux; working experience with Python services, APIs, containers and application deployment support.",
    "tools": "PostgreSQL · Linux · Python · FastAPI · Docker"
  },
  {
    "title": "MIS & digital reporting",
    "level": "Strong / hands-on",
    "text": "Web-based information systems, data management, reporting automation, dashboard support and staff adoption. Working experience with Power BI.",
    "tools": "MIS · Dashboards · Data quality · Power BI"
  },
  {
    "title": "Digital health systems",
    "level": "Working experience",
    "text": "EWARS support, disease surveillance, climate and health data integration, public-health dashboards and DHIS2 integration concepts.",
    "tools": "EWARS · Surveillance · Climate & health"
  },
  {
    "title": "Service & solution delivery",
    "level": "Strong / hands-on",
    "text": "Requirements gathering, incident triage, technical documentation, training, vendor coordination and cross-functional implementation support.",
    "tools": "Stakeholders · Documentation · User training"
  }
];

export const education = [
  {
    "degree": "Professional Master’s in Artificial Intelligence & Data Engineering",
    "institution": "University of Dhaka",
    "period": "Ongoing",
    "description": "Expanding my technical depth in AI, machine learning, statistics and data engineering."
  },
  {
    "degree": "B.Sc. in Computer Science and Engineering",
    "institution": "Jawaharlal Nehru Technological University, India",
    "period": "2014 – 2018",
    "description": "The academic foundation for my work across infrastructure, information systems and technology operations."
  }
];

export const research = [
  {
    "year": "2026",
    "title": "Operationalizing Climate-Informed Disease Forecasting: A Probabilistic Deep Learning Early Warning System at National Scale.",
    "authors": "Tabassum, A., Rahman, S. Md., Sharmin, M., Sarkar, S., et al.",
    "venue": "International Conference on Climate Extremes, Disasters, Anticipatory Action and Human Health (CEDAAH 2026), IWFM-BUET, Dhaka.",
    "status": "Conference abstract contribution · Abstract ID A2026032",
    "note": ""
  },
  {
    "year": "2025",
    "title": "Signals to Safety: EWARS for Health Emergencies—Present Realities and Future Directions.",
    "authors": "Sarker, M. F. R., Tabassum, A., Sarkar, S., Chowdhury, M. S. R., Mahmood, A. S., and Shirin, T.",
    "venue": "Annual Epidemiological Conference 2025, IEDCR, Dhaka.",
    "status": "Accepted for poster presentation",
    "note": "Conference was not held."
  }
];

