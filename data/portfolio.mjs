// Source of truth. Run `npm run build` after editing this file.
export const person = {
  name: 'Sanjoy Kumar Sarkar', shortName: 'Sanjoy Sarkar',
  title: 'IT & Digital Systems Professional',
  email: 'imsanjoy562@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sksarkar/',
  github: 'https://github.com/sanjoysarkar007',
  // Set your actual published URL (including any repository subpath) before release.
  siteUrl: '',
  description: 'IT and Digital Systems professional with around eight years of experience in IT infrastructure, Microsoft 365, MIS, digital health, PostgreSQL, Linux and technology operations across international development organizations.'
};

export const experience = [
  { org: 'IEDCR', fullName: 'Institute of Epidemiology, Disease Control and Research', role: 'IT Officer – Data & MIS', dates: 'Mar 2025 – Jun 2026', year: '2025', focus: 'Digital health & data systems',
    summary: 'Supported technology and data systems for climate-informed disease surveillance and early warning.',
    bullets: ['Contributed to EWARS development and operation, connecting climate and epidemiological information with dashboard and reporting workflows.', 'Worked with PostgreSQL, Python services and automated data integrations; supported Linux application environments using Docker, Nginx and systemd.', 'Troubleshot application and infrastructure issues, supported users and documented technical work to help maintain operational continuity.'],
    tags: ['Digital health', 'PostgreSQL', 'Linux', 'Python'], project: 'ewars' },
  { org: 'Winrock International', role: 'IT & Admin Officer', dates: 'Sep 2023 – Mar 2025', year: '2023', focus: 'MIS & digital transformation',
    summary: 'Managed IT operations while supporting information systems and wider programme operations.',
    bullets: ['Managed day-to-day IT services, Microsoft 365 support, office connectivity, accounts and devices.', 'Coordinated implementation and support of web-based MIS, dashboards and reporting automation, translating programme needs into practical systems.', 'Coordinated technology procurement and vendors; supported staff training, collaboration tools and adoption across operational teams.'],
    tags: ['Microsoft 365', 'MIS', 'Vendor coordination'], project: 'winrock-mis' },
  { org: 'Oxfam Bangladesh', role: 'Information Technology Officer', dates: 'Oct 2021 – Aug 2023', year: '2021', focus: 'IT operations & field infrastructure',
    summary: "Provided independent field IT support across Cox’s Bazar and Teknaf, coordinating with wider organizational IT teams.",
    bullets: ['Served as a primary IT resource for field operations, supporting networks, connectivity, endpoints and user systems.', 'Resolved hardware, software and account incidents and supported collaboration platforms in a demanding field environment.', 'Coordinated vendors and IT procurement, trained staff and supported reliable technology use for programme delivery.'],
    tags: ['Field operations', 'Networking', 'Enterprise support'], project: 'enterprise-it' },
  { org: 'Save the Children Bangladesh', role: 'Assistant Officer – ICT Infrastructure Administration', dates: 'Oct 2018 – Oct 2021', year: '2018', focus: 'Enterprise ICT infrastructure',
    summary: 'Built a foundation in enterprise infrastructure and technical support across headquarters and field environments.',
    bullets: ['Supported LAN/WAN connectivity, Microsoft-based environments, enterprise applications and end-user devices.', 'Troubleshot hardware, software and access issues; supported endpoint deployment and infrastructure maintenance.', 'Worked in environments serving approximately 200+ HQ users, 500+ field users and 100+ users in Cox’s Bazar. These are approximate environment sizes, not a combined personal support count.'],
    tags: ['ICT infrastructure', 'User support', 'LAN/WAN'], project: 'enterprise-it' }
];

export const projects = [
  { slug: 'ewars', number: '01', category: 'Digital health / IEDCR', title: 'Climate-informed early warning.', fullTitle: 'Climate-Informed Early Warning & Response System',
    summary: 'Connecting disease surveillance, climate information and operational technology to support public-health preparedness.',
    tags: ['PostgreSQL', 'Python', 'Linux', 'Digital health'], period: 'Mar 2025 – Jun 2026', context: 'IEDCR · Public-health surveillance',
    challenge: 'Climate-sensitive disease surveillance draws on information from multiple sources. Data collection, processing, application services and dashboards need to work together so that technical outputs can support public-health preparedness.',
    role: 'As IT Officer – Data & MIS, I contributed to the technical implementation and operation of the early-warning environment. My work covered data systems, backend components, application infrastructure, troubleshooting and support alongside the wider team.',
    approach: ['Worked with PostgreSQL-backed epidemiological and climate-related datasets and supported automated collection and processing workflows.', 'Worked with Python-based services and APIs, supporting the flow of information into dashboards and reporting.', 'Assisted with deployment and operation of Linux-hosted applications using Docker, Nginx and systemd.', 'Supported troubleshooting, technical documentation and users working with surveillance information.'],
    result: 'The work supported an operational chain from surveillance and climate data to dashboard and reporting workflows for public-health decision support. My contribution focused on keeping the underlying services and data updates usable and maintainable.',
    lesson: 'An early-warning system depends on the whole service: data freshness, application availability, clear documentation and people who can interpret and use the information.',
    technology: ['PostgreSQL', 'Python', 'FastAPI', 'REST APIs', 'Linux', 'Docker', 'Nginx', 'systemd', 'Git'],
    flow: ['Disease + climate sources', 'Collection + validation', 'PostgreSQL', 'Python services + API', 'Dashboards + decision support'] },
  { slug: 'data-automation', number: '02', category: 'Data systems / IEDCR', title: 'From scattered data to usable information.', fullTitle: 'Automated Disease & Climate Data Pipelines',
    summary: 'Supporting automated collection, integration and database workflows for surveillance and forecasting.',
    tags: ['Python', 'PostgreSQL', 'APIs'], period: 'Mar 2025 – Jun 2026', context: 'IEDCR · Surveillance and forecasting workflows',
    challenge: 'Disease and environmental information arrives through different sources and update cycles. Repetitive collection and preparation tasks make it harder to keep downstream surveillance workflows supplied with current data.',
    role: 'I supported data automation and integration workflows within the public-health systems environment, working with Python, PostgreSQL, external sources and scheduled processes.',
    approach: ['Supported collection from APIs and external data sources, including extraction workflows where needed.', 'Worked with automated processing, validation and database loading to prepare information for downstream use.', 'Supported scheduled updates and investigated problems across data flows, application services and the Linux environment.', 'Helped connect prepared datasets with dashboard and forecasting workflows.'],
    result: 'These workflows supported recurring updates of disease and climate information for surveillance, forecasting and dashboards. The emphasis was on practical automation and operational support.',
    lesson: 'Reliable automation requires attention to source changes, data quality and service dependencies as well as the extraction code itself.',
    technology: ['Python', 'PostgreSQL', 'SQL', 'REST APIs', 'Linux', 'Scheduled processes'],
    flow: ['External sources', 'Extract + validate', 'Scheduled processing', 'Database loading', 'Surveillance workflows'] },
  { slug: 'winrock-mis', number: '03', category: 'Information systems / Winrock', title: 'Better systems for programme delivery.', fullTitle: 'Web-Based MIS & Operational Reporting',
    summary: 'Translating programme requirements into practical information systems, reporting and staff adoption.',
    tags: ['MIS', 'Reporting', 'User adoption'], period: 'Sep 2023 – Mar 2025', context: 'Winrock International · Development programme',
    challenge: 'Programme and management teams need consistent information without unnecessary manual work. A useful MIS must reflect operational requirements and be supported by reporting processes and confident users.',
    role: 'As IT & Admin Officer, I coordinated implementation and support of web-based MIS and digital reporting while managing day-to-day technology operations.',
    approach: ['Worked with programme and operational teams to understand requirements and translate them into system needs.', 'Coordinated MIS implementation and support, including collaboration with technology service providers.', 'Supported dashboards, reporting automation and data management workflows.', 'Provided staff training and ongoing user support, alongside Microsoft 365 and office IT services.'],
    result: 'The work supported web-based programme information and digital reporting mechanisms, giving teams practical tools to manage information and supporting their adoption in daily operations.',
    lesson: 'A system is useful when it fits the work people actually do. Requirements, training and ongoing support are as important as implementation.',
    technology: ['Web-based MIS', 'Dashboards', 'Data management', 'Microsoft 365', 'Reporting automation'],
    flow: ['Programme requirements', 'System coordination', 'MIS + data quality', 'Reporting', 'Training + support'] },
  { slug: 'enterprise-it', number: '04', category: 'Infrastructure / International NGOs', title: 'Dependable IT, wherever the work happens.', fullTitle: 'Enterprise IT Operations & Infrastructure',
    summary: 'Supporting people, networks and enterprise services across headquarters and humanitarian field operations.',
    tags: ['Microsoft 365', 'Networking', 'IT operations'], period: 'Oct 2018 – Aug 2023', context: 'Save the Children Bangladesh · Oxfam Bangladesh',
    challenge: 'Headquarters and field programmes depend on connectivity, working devices and accessible enterprise services. Technical incidents can interrupt collaboration and programme operations, especially in demanding field environments.',
    role: 'At Save the Children, I supported enterprise ICT infrastructure and users across HQ and field environments. At Oxfam, I took on independent field IT responsibilities across Cox’s Bazar and Teknaf.',
    approach: ['Supported LAN/WAN, connectivity, endpoints, enterprise applications and account-related issues.', 'Troubleshot incidents and coordinated with wider organizational IT teams and service providers.', 'Supported equipment lifecycle activities, procurement and vendor coordination.', 'Trained staff and supported secure, reliable use of productivity and collaboration tools.'],
    result: 'This work supported the continuity of everyday technology services across headquarters and field operations. It established the infrastructure, troubleshooting and user-support foundation I later brought to MIS and digital health systems.',
    lesson: 'Good IT operations combine technical diagnosis with clear communication and follow-through. Understanding the field context helps determine what needs attention first.',
    technology: ['Microsoft environments', 'Microsoft 365', 'LAN/WAN', 'Endpoints', 'Account support', 'Vendor management'],
    flow: ['People + programme needs', 'Triage + diagnosis', 'Infrastructure + services', 'Resolution + coordination', 'Training + continuity'] }
];

export const capabilities = [
  { title: 'Infrastructure & IT operations', level: 'Strong / hands-on', text: 'Enterprise support, systems administration, LAN/WAN, endpoints, incident troubleshooting, IT assets and operational continuity.', tools: 'IT operations · Networking · Enterprise support' },
  { title: 'Microsoft & enterprise platforms', level: 'Hands-on + working experience', text: 'Microsoft 365 administration and user support, collaboration platforms, accounts and access. Working experience across the Azure / Entra ecosystem.', tools: 'Microsoft 365 · Teams · Entra / Azure AD' },
  { title: 'Systems, backend & data', level: 'Hands-on + working experience', text: 'Hands-on PostgreSQL, SQL and Linux; working experience with Python services, APIs, containers and application deployment support.', tools: 'PostgreSQL · Linux · Python · FastAPI · Docker' },
  { title: 'MIS & digital reporting', level: 'Strong / hands-on', text: 'Web-based information systems, data management, reporting automation, dashboard support and staff adoption. Working experience with Power BI.', tools: 'MIS · Dashboards · Data quality · Power BI' },
  { title: 'Digital health systems', level: 'Working experience', text: 'EWARS support, disease surveillance, climate and health data integration, public-health dashboards and DHIS2 integration concepts.', tools: 'EWARS · Surveillance · Climate & health' },
  { title: 'Service & solution delivery', level: 'Strong / hands-on', text: 'Requirements gathering, incident triage, technical documentation, training, vendor coordination and cross-functional implementation support.', tools: 'Stakeholders · Documentation · User training' }
];
export const education = [
  { degree: 'Professional Master’s in Artificial Intelligence & Data Engineering', institution: 'University of Dhaka', period: 'Ongoing', description: 'Expanding my technical depth in AI, machine learning, statistics and data engineering.' },
  { degree: 'B.Sc. in Computer Science and Engineering', institution: 'Jawaharlal Nehru Technological University, India', period: '2014 – 2018', description: 'The academic foundation for my work across infrastructure, information systems and technology operations.' }
];
export const research = [
  { year: '2026', title: 'Operationalizing Climate-Informed Disease Forecasting: A Probabilistic Deep Learning Early Warning System at National Scale.', authors: 'Tabassum, A., Rahman, S. Md., Sharmin, M., Sarkar, S., et al.', venue: 'International Conference on Climate Extremes, Disasters, Anticipatory Action and Human Health (CEDAAH 2026), IWFM-BUET, Dhaka.', status: 'Conference abstract contribution · Abstract ID A2026032', note: 'Final presentation status to be confirmed.' },
  { year: '2025', title: 'Signals to Safety: EWARS for Health Emergencies—Present Realities and Future Directions.', authors: 'Sarker, M. F. R., Tabassum, A., Sarkar, S., Chowdhury, M. S. R., Mahmood, A. S., and Shirin, T.', venue: 'Annual Epidemiological Conference 2025, IEDCR, Dhaka.', status: 'Accepted for poster presentation', note: 'Conference was not held.' }
];
