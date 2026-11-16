// Portfolio content. Edit here, then run npm run build.
export const person = {
  "name": "Sanjoy Kumar Sarkar",
  "shortName": "Sanjoy Sarkar",
  "title": "IT & Digital Systems Professional",
  "email": "imsanjoy562@gmail.com",
  "whatsapp": "+8801724353766",
  "linkedin": "https://www.linkedin.com/in/sksarkar/",
  "github": "https://github.com/sanjoyksarkar",
  "siteUrl": "",
  "description": "IT and Digital Systems professional with 8 years of experience in IT infrastructure, Microsoft 365, MIS, digital health, PostgreSQL, Linux and technology operations across international development organizations."
};

export const experience = [
  {
    "org": "IEDCR",
    "fullName": "Institute of Epidemiology, Disease Control and Research",
    "role": "IT Officer",
    "dates": "Mar 2025 - Present",
    "year": "2025",
    "focus": "Digital health & data systems",
    "summary": "Maintained operational technology and data workflows for climate-informed disease surveillance and early warning.",
    "bullets": [
      "Maintained PostgreSQL-backed dengue and malaria datasets, database upserts and ERA5-derived climate updates for surveillance and forecasting workflows.",
      "Operated Linux application services using Docker, Nginx and systemd; diagnosed an external dashboard-access issue and restored reachability after correcting access/network configuration.",
      "Developed the EWARS dashboard for national climate-sensitive disease surveillance covering dengue, malaria and acute watery diarrhoea (AWD). Supported district-level workflows across Bangladesh's 64 districts; disease-specific data availability varied by district."
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
    "dates": "Sep 2023 - Mar 2025",
    "year": "2023",
    "focus": "IT administration & programme information systems",
    "summary": "Managed IT operations while supporting information systems and wider programme operations.",
    "bullets": [
      "Managed office IT and Microsoft 365 accounts; supported MFA, device management, Windows 11 migration and Cyber Essentials compliance.",
      "Coordinated web-based MIS activities with the MIS consultant and programme team, supporting data collection, data quality and reporting requirements. The project stopped after data gathering and dashboard preparations; the dashboard was not developed.",
      "Handled IT procurement, vendor coordination, maintenance, and IT asset and inventory records.",
      "Coordinated staff travel, ticketing and field transport, alongside office logistics, maintenance and administrative support.",
      "Provided technical support, training and capacity building to six partner NGOs."
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
    "dates": "Oct 2021 - Aug 2023",
    "year": "2021",
    "focus": "IT operations & field infrastructure",
    "summary": "Independently managed IT operations for two offices in Cox’s Bazar and Teknaf, supporting approximately 100 staff.",
    "bullets": [
      "Independently managed IT operations for two offices in Cox’s Bazar and Teknaf, supporting approximately 100 staff.",
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
    "dates": "Oct 2018 - Oct 2021",
    "year": "2018",
    "focus": "Enterprise ICT infrastructure",
    "summary": "Built a foundation in enterprise infrastructure and technical support across headquarters and field environments.",
    "bullets": [
      "Supported LAN/WAN connectivity, Microsoft-based environments, enterprise applications and end-user devices.",
      "Troubleshot hardware, software and access issues; supported endpoint deployment and infrastructure maintenance.",
      "Worked as part of an ICT team supporting 200+ headquarters users, 500+ field users and 100+ users in Cox’s Bazar."
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
    "period": "Mar 2025 - Present",
    "context": "IEDCR · Public-health surveillance",
    "contribution": "Dashboard development & systems operations",
    "challenge": "Climate-sensitive disease surveillance draws on information from multiple sources. Data collection, processing, application services and dashboards need to work together so that technical outputs can support public-health preparedness.",
    "role": "I developed the EWARS dashboard for national climate-sensitive disease surveillance covering dengue, malaria and acute watery diarrhoea (AWD). I maintained its PostgreSQL data workflows, Python components and Linux services, alongside the wider technical and scientific team’s forecasting work.",
    "approach": [
      "Maintained PostgreSQL-backed epidemiological and climate datasets feeding surveillance and forecasting workflows.",
      "Implemented and maintained automated collection and processing workflows for recurring data updates.",
      "Operated Python-based backend components and Linux-hosted application services, working across Docker, Nginx and systemd.",
      "Investigated data-refresh, application and infrastructure problems, documented technical work and helped users work with surveillance outputs.",
      "Supported district-level surveillance workflows with national geographic scope across Bangladesh’s 64 districts. This scope does not mean complete disease-specific data were available for every district."
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
    "period": "Mar 2025 - Present",
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
    "summary": "Coordinating programme MIS requirements, data quality and dashboard preparations alongside IT and administration.",
    "tags": [
      "MIS",
      "Reporting",
      "User adoption"
    ],
    "period": "Sep 2023 - Mar 2025",
    "context": "Winrock International · B-PEMS AugroJatra",
    "challenge": "Programme and management teams need consistent information without unnecessary manual work. A useful MIS must reflect operational requirements and be supported by reporting processes and confident users.",
    "role": "As IT & Admin Officer on B-PEMS AugroJatra, I coordinated web-based MIS activities with the MIS consultant and programme team. I supported data collection, data quality and reporting requirements alongside everyday IT and administrative responsibilities.",
    "approach": [
      "Worked with the MIS consultant and programme team to clarify information and reporting requirements.",
      "Supported data collection, data-quality checks and preparations for dashboard development.",
      "Provided technical support, training and capacity building to six partner NGOs.",
      "Managed Microsoft 365 support, MFA and device management, and supported Windows 11 migration and Cyber Essentials compliance.",
      "Handled IT procurement, vendor coordination, asset and inventory management, staff travel and ticketing, field transport, office logistics and maintenance."
    ],
    "result": "The required data had been gathered and preparations for dashboard development were completed when the project stopped. The dashboard itself was not developed.",
    "lesson": "A system is useful when it fits the work people actually do. Requirements, training and ongoing support are as important as implementation.",
    "technology": [
      "Web-based MIS",
      "Data quality",
      "Reporting requirements",
      "Microsoft 365",
      "Device management"
    ],
    "flow": [
      "Programme requirements",
      "MIS consultant coordination",
      "Data collection + quality",
      "Dashboard preparations",
      "Project stopped before development"
    ],
    "detailTitle": "Delivery in practice",
    "detailIntro": "My work connected programme information needs with data preparation, partner support and day-to-day office operations.",
    "details": [
      {
        "title": "Programme and partner support",
        "text": "Worked with programme colleagues and six partner NGOs on technical needs and the use of project systems.",
        "items": [
          "Technical support and training",
          "Capacity building for six partner NGOs"
        ]
      },
      {
        "title": "MIS coordination",
        "text": "Worked with the MIS consultant and programme team on data collection, data quality and reporting requirements.",
        "items": [
          "Required data gathered",
          "Dashboard preparations completed; dashboard not developed"
        ]
      },
      {
        "title": "IT and administration",
        "text": "Kept office technology and practical arrangements moving alongside the MIS work.",
        "items": [
          "Microsoft 365, MFA, devices and Windows 11 migration",
          "Cyber Essentials compliance support",
          "Procurement, vendors, assets and inventory",
          "Staff travel, ticketing, field transport and office logistics"
        ]
      }
    ],
    "contribution": "MIS coordination, data preparation & user support"
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
    "period": "Oct 2018 - Mar 2025",
    "context": "Save the Children · Oxfam Bangladesh · Winrock International",
    "challenge": "Headquarters and field programmes depend on connectivity, working devices and accessible enterprise services. Technical incidents can interrupt collaboration and programme operations, especially in demanding field environments.",
    "role": "At Save the Children, I worked as part of an ICT team supporting 200+ headquarters users, 500+ field users and 100+ users in Cox’s Bazar. At Oxfam, I independently managed IT operations for two offices in Cox’s Bazar and Teknaf, supporting approximately 100 staff. At Winrock, I combined office IT and administration with technical support and capacity building for six partner NGOs.",
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
        "title": "Save the Children | 2018-2021",
        "text": "Worked as part of an ICT team supporting 200+ headquarters users, 500+ field users and 100+ users in Cox’s Bazar.",
        "items": [
          "Enterprise infrastructure and LAN/WAN",
          "Endpoints, applications and account support"
        ]
      },
      {
        "title": "Oxfam | 2021-2023",
        "text": "Independently managed IT operations for two offices in Cox’s Bazar and Teknaf, supporting approximately 100 staff.",
        "items": [
          "Independent incident troubleshooting",
          "Connectivity, devices and field continuity"
        ]
      },
      {
        "title": "Winrock International | 2023-2025",
        "text": "Managed office IT, procurement, vendors, assets, inventory, travel and logistics, and provided technical support and capacity building to six partner NGOs.",
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
    "period": "Mar 2025 - Present",
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
    "text": "Web-based MIS coordination, data collection, data quality and reporting requirements. Developed the EWARS dashboard at IEDCR. Power BI remains a separate professional skill with working experience; the planned Winrock dashboard was not developed.",
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
    "degree": "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
    "institution": "Jawaharlal Nehru Technological University, India",
    "period": "2014 - 2018",
    "description": "The academic foundation for my work across infrastructure, information systems and technology operations."
  }
];

export const research = [
  {
    "year": "2026",
    "title": "Evaluating the Linkage Between Disease Forecasts, Alerts, and Public Health Action in Bangladesh’s Climate-Informed Early Warning System",
    "authors": "Tabassum, A., Rahman, M. S., Sarkar, S., et al.",
    "venue": "2nd Bangladesh FETP Conference 2026 · IEDCR, Bangladesh.",
    "status": "Selected for poster presentation · Abstract 66",
    "note": "Listed as Sanjay Sarkar in the conference abstract."
  },
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
    "title": "Signals to Safety: EWARS for Health Emergencies-Present Realities and Future Directions.",
    "authors": "Sarker, M. F. R., Tabassum, A., Sarkar, S., Chowdhury, M. S. R., Mahmood, A. S., and Shirin, T.",
    "venue": "Annual Epidemiological Conference 2025, IEDCR, Dhaka.",
    "status": "Accepted for poster presentation",
    "note": "Conference was not held."
  }
];
