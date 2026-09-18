/**
 * Shakil Anwar - Selected Projects Data
 * Source of truth: index.html (Framed as Case Studies per prompt section 6)
 */
export const projectsData = [
  {
    id: "dropmatix",
    title: "Dropmatix – Multi-Channel E-Commerce Engine",
    role: "Core Developer",
    featured: true,
    liveUrl: "https://www.dropmatix.com/",
    // GitHub repo is private enterprise software; documented as placeholder/private per prompt section 109
    githubUrl: null,
    visualType: "svg-diagram",
    visualSrc: "/projects/dropmatix-arch.svg",
    caseStudy: {
      problem:
        "High-volume dropshipping merchants experienced severe catalog bottlenecks and delays importing thousands of supplier SKUs into multiple selling channels.",
      solution:
        "Architected real-time supplier import pipelines and marketplace export engines utilizing PHP/Laravel, Node.js microservices, Redis caching, and resilient background job workers.",
      outcome:
        "Accelerated million-row database queries by up to 80%, automated 60% of manual data tasks, and ensured zero-lag stock availability across live storefronts."
    },
    technologies: [
      "Laravel",
      "Node.js",
      "MySQL",
      "Redis",
      "Amazon SP-API",
      "Shopify API",
      "Docker"
    ],
    highlights: [
      "Million-row database optimization",
      "Real-time supplier automation",
      "Multi-channel marketplace exports"
    ]
  },
  {
    id: "api-automation",
    title: "Multi-Channel Marketplace API Automation",
    role: "Lead Integration Engineer",
    featured: true,
    // Live integrations are private enterprise services
    liveUrl: "https://www.dropmatix.com/",
    githubUrl: null,
    visualType: "svg-diagram",
    visualSrc: "/projects/api-automation-arch.svg",
    caseStudy: {
      problem:
        "Inconsistent APIs, distinct authentication flows, and strict rate limits across fragmented e-commerce marketplaces created order errors and inventory discrepancies.",
      solution:
        "Engineered a resilient event-driven integration middleware handling Amazon SP-API, eBay, Etsy, Shopify, and WooCommerce with automated token rotation and error retry queues.",
      outcome:
        "Synchronized millions of product data points with 99.9% uptime, completely removing manual inventory spreadsheet updates and eliminating double-selling incidents."
    },
    technologies: [
      "Amazon SP-API",
      "eBay API",
      "Shopify API",
      "WooCommerce",
      "Etsy API",
      "Node.js",
      "Laravel Forge"
    ],
    highlights: [
      "Bi-directional stock synchronization",
      "Intelligent rate-limit queue management",
      "Automated webhook event dispatchers"
    ]
  }
];
