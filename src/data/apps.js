import netflix from "../assets/apps/netflix.png";
import spotify from "../assets/apps/spotify.png";
import ig from "../assets/apps/ig.png";
import whatapp from "../assets/apps/whatapp.png";
import uber from "../assets/apps/uber.png";
import tiktok from "../assets/apps/tiktok.png";
import airbnb from "../assets/apps/airbnb.png";
import google from "../assets/apps/googole.png";
import meta from "../assets/apps/meta.png";
import amazon from "../assets/apps/amazon.png";
import x from "../assets/apps/x.png";
import discord from "../assets/apps/discord.png";
import stripe from "../assets/apps/stripe.png";
import shopify from "../assets/apps/shopify.png";
import github from "../assets/apps/github.png";
import figma from "../assets/apps/figma.png";
import slack from "../assets/apps/slack.png";
import linkedin from "../assets/apps/linkedin.png";
import snapcaht from "../assets/apps/snapchat.png";
import pintrest from "../assets/apps/pintrest.png";
import notion from "../assets/apps/notion.png";
import zoom from "../assets/apps/zoom.png";
import chatgpt from "../assets/apps/chatgpt.png";
import reddit from "../assets/apps/reddit.png";
import dropbox from "../assets/apps/dropbox.png";
import apple from "../assets/apps/apple.png";
import microsoft from "../assets/apps/microsoft.png";
import vercel from "../assets/apps/vercel.png";
import coinbase from "../assets/apps/coinbase.png";
import dd from "../assets/apps/dd.png";
import lyft from "../assets/apps/lyft.png";
import isc from "../assets/apps/isc.png";
import paypal from "../assets/apps/paypal.png";
import boa from "../assets/apps/boa.png";
import twitch from "../assets/apps/twich.png";
import canva from "../assets/apps/canva.png";
import oracle from "../assets/apps/oracle.png";
import spacex from "../assets/apps/spacex.png";
import ibm from "../assets/apps/ibm.png";
import tesla from "../assets/apps/tesla.png";
import nvida from "../assets/apps/nvida.png";

export const apps = [
  {
    id: "netflix",
    name: "Netflix",
    tagline: "Stream without limits",
    description:
      "The world's leading streaming platform serving 260M+ subscribers with billions of hours of content monthly.",

    category: "Entertainment",

    color: "#E50914",

    logo: netflix,

    users: "260M+",

    founded: 1997,

    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "React", note: "UI components, used since 2015" },
          { name: "Node.js", note: "Server-side rendering" },
          { name: "RxJS", note: "Reactive state management" },
          { name: "Falcor", note: "Netflix's own data fetching layer" },
        ],
      },

      backend: {
        label: "Backend",
        items: [
          { name: "Java", note: "Primary microservices language" },
          { name: "Python", note: "Data science & ML pipelines" },
          { name: "Node.js", note: "API gateway services" },
          { name: "Go", note: "High-performance tooling" },
        ],
      },

      database: {
        label: "Database",
        items: [
          { name: "Cassandra", note: "User activity & viewing history" },
          { name: "MySQL (RDS)", note: "Billing & membership data" },
          { name: "EVCache", note: "Netflix's distributed cache (Memcached)" },
          { name: "Elasticsearch", note: "Search indexing" },
        ],
      },

      cloud: {
        label: "Cloud & Infra",
        items: [
          { name: "AWS", note: "Primary cloud (EC2, S3, RDS)" },
          { name: "Open Connect CDN", note: "Netflix's own global CDN" },
          { name: "Spinnaker", note: "Multi-cloud deployment (Netflix OSS)" },
          { name: "Kubernetes", note: "Container orchestration" },
        ],
      },

      ai: {
        label: "AI & Data",
        items: [
          { name: "Metaflow", note: "ML workflow management (Netflix OSS)" },
          { name: "TensorFlow", note: "Recommendation model training" },
          { name: "Apache Spark", note: "Large-scale data processing" },
          { name: "Jupyter", note: "Data science notebooks" },
        ],
      },

      scaling: {
        label: "Scaling",
        description:
          "Netflix pioneered chaos engineering with the Chaos Monkey tool. They use a microservices architecture with 700+ independent services. Open Connect delivers 15TB/s of video — they built their own CDN and place servers inside ISPs worldwide. Circuit breakers via Hystrix ensure resilience when services fail.",
      },
    },

    tags: ["React", "Java", "Cassandra", "AWS", "Microservices", "Kafka"],
  },
  {
    id: "spotify",
    name: "Spotify",
    tagline: "Music for everyone",
    description:
      "The world's most popular audio streaming platform with 600M+ users and 100M+ tracks available globally.",
    category: "Music",
    color: "#1DB954",
    logo: spotify,
    users: "600M+",
    founded: 2006,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "React", note: "Web player UI" },
          { name: "TypeScript", note: "Type-safe codebase" },
          {
            name: "Spotify Web Playback SDK",
            note: "Browser-based audio streaming",
          },
          { name: "Electron", note: "Desktop app wrapper" },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          { name: "Python", note: "Data pipelines & ML serving" },
          { name: "Java", note: "Core backend services" },
          { name: "Scala", note: "Data engineering & Spark jobs" },
          { name: "Go", note: "Infrastructure tooling" },
        ],
      },
      database: {
        label: "Database",
        items: [
          { name: "Cassandra", note: "User data, playlists, streams" },
          { name: "PostgreSQL", note: "Transactional data" },
          { name: "Google BigQuery", note: "Analytics data warehouse" },
          { name: "Redis", note: "Caching & session store" },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          {
            name: "Google Cloud Platform",
            note: "Primary cloud provider (migrated from AWS)",
          },
          { name: "Kubernetes", note: "Container orchestration (Helios)" },
          { name: "Backstage", note: "Developer portal (Spotify OSS)" },
          { name: "Apache Beam", note: "Unified data processing" },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          { name: "TensorFlow / PyTorch", note: "Recommendation models" },
          { name: "Apache Kafka", note: "Real-time event streaming" },
          { name: "Apache Flink", note: "Stream processing" },
          { name: "Vertex AI (GCP)", note: "ML training & serving" },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          "Spotify moved from monolith to microservices in 2012. Their recommendation engine processes petabytes of listening data daily. Wrapped uses BigQuery to aggregate a full year of plays in hours. Backstage, their open-sourced developer portal, is used by 2000+ engineers internally. They serve audio from edge nodes closest to the listener.",
      },
    },
    tags: ["React", "Python", "Cassandra", "GCP", "Kafka", "Kubernetes"],
  },
  {
    id: "instagram",
    name: "Instagram",
    tagline: "Capture and share the world",
    description:
      "Meta's photo and video sharing platform with 2B+ monthly active users and 100M+ photos shared daily.",
    category: "Social",
    color: "#E1306C",
    logo: ig,
    users: "2B+",
    founded: 2010,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "React Native", note: "iOS & Android apps" },
          { name: "React", note: "Web interface" },
          { name: "Relay", note: "GraphQL client (Facebook OSS)" },
          { name: "Flow", note: "Static type checking" },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          { name: "Python (Django)", note: "Primary web framework" },
          { name: "GraphQL", note: "API layer" },
          { name: "Hack (PHP)", note: "Some Meta-shared services" },
          { name: "C++", note: "Performance-critical modules" },
        ],
      },
      database: {
        label: "Database",
        items: [
          { name: "PostgreSQL", note: "Primary user data storage" },
          { name: "Cassandra", note: "Activity feeds & media metadata" },
          { name: "Memcached", note: "L1/L2 caching layer" },
          { name: "TAO (Facebook)", note: "Social graph storage" },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          { name: "Meta Data Centers", note: "Own global infrastructure" },
          { name: "AWS (partial)", note: "Overflow & ML training" },
          { name: "Presto", note: "Distributed SQL query engine" },
          { name: "Buck", note: "Build system" },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          { name: "PyTorch", note: "ML framework (Facebook origin)" },
          { name: "Faiss", note: "Vector similarity search for Reels" },
          { name: "Hive", note: "Data warehouse queries" },
          { name: "Prophet", note: "Time-series forecasting (Meta OSS)" },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          "Instagram runs one of the world's largest Django deployments. They shard PostgreSQL across hundreds of nodes. The Reels ranking model runs billions of inferences daily using PyTorch. Memcached handles millions of cache sets per second. Media is stored in a custom blob storage system (Haystack) optimized for small images at enormous scale.",
      },
    },
    tags: [
      "React Native",
      "Django",
      "PostgreSQL",
      "PyTorch",
      "GraphQL",
      "Memcached",
    ],
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    tagline: "Simple. Secure. Reliable.",
    description:
      "The world's most popular messaging app, serving 2B+ users and processing 100 billion messages per day.",
    category: "Messaging",
    color: "#25D366",
    logo: whatapp,
    users: "2B+",
    founded: 2009,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "Erlang", note: "Client-server message protocol" },
          { name: "React Native", note: "Cross-platform mobile apps" },
          { name: "React", note: "WhatsApp Web" },
          { name: "Electron", note: "Desktop client" },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          { name: "Erlang/OTP", note: "Core messaging server (XMPP-based)" },
          { name: "Ejabberd", note: "Modified XMPP server" },
          { name: "FreeBSD", note: "OS of choice for servers" },
          { name: "C++", note: "Performance-critical components" },
        ],
      },
      database: {
        label: "Database",
        items: [
          {
            name: "Mnesia (Erlang)",
            note: "Distributed in-memory DB for routing",
          },
          { name: "MySQL", note: "User account & contact data" },
          { name: "YAWS", note: "Yet Another Web Server (Erlang)" },
          { name: "Custom blob store", note: "Media storage (Meta infra)" },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          { name: "Meta Data Centers", note: "Own global infrastructure" },
          { name: "FreeBSD", note: "Preferred OS for message servers" },
          { name: "BEAM VM", note: "Erlang virtual machine for concurrency" },
          { name: "Signal Protocol", note: "End-to-end encryption layer" },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "Spam detection ML",
            note: "Account & message abuse prevention",
          },
          { name: "Scribe (Meta)", note: "Real-time log aggregation" },
          { name: "PyTorch", note: "ML model training" },
          { name: "Hive", note: "Analytics queries" },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          "WhatsApp is famous for achieving massive scale with minimal engineers. At acquisition (2014), 55 engineers handled 450M users. Erlang's lightweight processes handle millions of concurrent connections per server. The BEAM VM excels at fault-tolerant, distributed real-time systems. Messages are delivered with a store-and-forward model, with end-to-end encryption via the Signal Protocol.",
      },
    },
    tags: [
      "Erlang",
      "React Native",
      "MySQL",
      "FreeBSD",
      "Signal Protocol",
      "XMPP",
    ],
  },
  {
    id: "uber",
    name: "Uber",
    tagline: "Move the way you want",
    description:
      "The global ride-sharing and delivery platform matching millions of drivers and riders in real-time across 70+ countries.",
    category: "Transport",
    color: "#000000",
    logo: uber,
    users: "130M+",
    founded: 2009,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "React Native", note: "Driver & rider mobile apps" },
          { name: "React", note: "Web dashboards" },
          { name: "Fusion.js", note: "Uber's own React framework" },
          {
            name: "RIB (Router-Interactor-Builder)",
            note: "Mobile architecture pattern",
          },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          { name: "Go", note: "Dispatch & core services" },
          { name: "Python", note: "Data science & forecasting" },
          { name: "Java", note: "Business logic services" },
          { name: "Node.js", note: "API gateways" },
        ],
      },
      database: {
        label: "Database",
        items: [
          {
            name: "PostgreSQL → Schemaless",
            note: "Uber built their own NoSQL on top of MySQL",
          },
          { name: "Cassandra", note: "High-write activity data" },
          { name: "Redis", note: "Real-time location caching" },
          { name: "Pinot", note: "Real-time analytics (Apache)" },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          { name: "AWS + Own DCs", note: "Hybrid cloud infrastructure" },
          { name: "Peloton", note: "Resource scheduler (Uber OSS)" },
          { name: "Kafka", note: "Unified event streaming backbone" },
          {
            name: "M3 (Prometheus-compatible)",
            note: "Metrics platform (Uber OSS)",
          },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          { name: "Michelangelo", note: "Uber's internal ML platform" },
          {
            name: "H3 (Hexagonal Grid)",
            note: "Geospatial indexing system (Uber OSS)",
          },
          { name: "Ludwig", note: "Code-free ML toolbox (Uber OSS)" },
          { name: "Pyro", note: "Deep probabilistic programming (Uber OSS)" },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          "Uber's dispatch system processes millions of GPS pings per second. H3 divides the world into hexagonal cells for precise driver-rider matching. Surge pricing uses ML to forecast demand in real-time. Their ETA model runs 10M+ predictions per minute. Kafka processes hundreds of billions of messages daily across their infrastructure.",
      },
    },
    tags: ["Go", "React Native", "Kafka", "Cassandra", "Redis", "Kubernetes"],
  },
  {
    id: "tiktok",
    name: "TikTok",
    tagline: "Make every second count",
    description:
      "ByteDance's short-video platform with 1B+ MAU, powered by one of the most sophisticated recommendation engines ever built.",
    category: "Social",
    color: "#FF0050",
    logo: tiktok,
    users: "1B+",
    founded: 2016,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "React Native", note: "Cross-platform mobile apps" },
          { name: "Flutter (partial)", note: "Some internal tools" },
          {
            name: "ByteX",
            note: "ByteDance's custom Android plugin framework",
          },
          { name: "Lynx", note: "ByteDance's cross-platform UI framework" },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          { name: "Go", note: "Primary microservices language" },
          { name: "Python", note: "ML pipelines & data engineering" },
          { name: "Java", note: "Business services" },
          { name: "Rust", note: "High-performance modules" },
        ],
      },
      database: {
        label: "Database",
        items: [
          {
            name: "TiKV / TiDB",
            note: "Distributed transactional key-value store",
          },
          { name: "Cassandra", note: "Social graph & activity data" },
          { name: "Elasticsearch", note: "Search & content indexing" },
          { name: "Redis", note: "Feed caching & real-time data" },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          { name: "ByteDance data centers", note: "Proprietary global infra" },
          { name: "AWS + Azure", note: "US market traffic (TikTok US)" },
          {
            name: "ServiceMesh (Kitex)",
            note: "Go RPC framework (ByteDance OSS)",
          },
          { name: "Volcano Engine", note: "ByteDance's cloud platform" },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "Custom Recommendation Engine",
            note: "Heart of TikTok — predicts completion rate, likes, shares",
          },
          {
            name: "ByteDance Monolith",
            note: "Real-time recommendation system",
          },
          {
            name: "Computer Vision models",
            note: "Video content understanding",
          },
          { name: "Apache Flink", note: "Real-time feature computation" },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          "TikTok's recommendation engine is its crown jewel — it achieves near-instant personalization on a cold start. Videos are encoded in multiple resolutions and served from the nearest edge. The For You Page algorithm considers watch time, replays, shares, and content signals in real-time. They process millions of video uploads daily with automated transcoding pipelines.",
      },
    },
    tags: ["Go", "React Native", "TiDB", "Redis", "Flink", "Computer Vision"],
  },
  {
    id: "airbnb",
    name: "Airbnb",
    tagline: "Belong anywhere",
    description:
      "The world's largest home-sharing marketplace with 7M+ listings across 220+ countries and regions.",
    category: "Travel",
    color: "#FF5A5F",
    logo: airbnb,
    users: "150M+",
    founded: 2008,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "React", note: "Web application (early adopter, 2013)" },
          { name: "React Native", note: "iOS & Android apps" },
          { name: "TypeScript", note: "Full frontend codebase" },
          { name: "Lottie", note: "Animation library (Airbnb OSS)" },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          {
            name: "Ruby on Rails",
            note: "Original monolith, still used for some services",
          },
          { name: "Java / Kotlin", note: "Microservices (Javaservices)" },
          { name: "Node.js", note: "API gateway & BFF layer" },
          { name: "GraphQL (Apollo)", note: "Unified data layer" },
        ],
      },
      database: {
        label: "Database",
        items: [
          { name: "MySQL (Amazon RDS)", note: "Primary data store" },
          { name: "Elasticsearch", note: "Listing search & filtering" },
          { name: "Redis", note: "Caching & real-time features" },
          { name: "Amazon S3", note: "Photo & media storage" },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          { name: "AWS", note: "Primary cloud (all-in on AWS)" },
          { name: "Kubernetes (on AWS)", note: "Container orchestration" },
          {
            name: "Apache Airflow",
            note: "Workflow orchestration (Airbnb OSS)",
          },
          { name: "Chronos", note: "Distributed job scheduler (Airbnb OSS)" },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          { name: "Bighead", note: "Airbnb's internal ML platform" },
          { name: "Airflow", note: "ML pipeline orchestration (Airbnb OSS)" },
          {
            name: "Smart Pricing",
            note: "ML-powered dynamic pricing for hosts",
          },
          { name: "Aerosolve", note: "ML library for pricing (Airbnb OSS)" },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          "Airbnb moved from monolith to SOA (Service-Oriented Architecture) over several years. Their search uses Elasticsearch with custom ranking signals including price, reviews, and availability. Smart Pricing uses gradient boosted trees to suggest optimal nightly rates. Apache Airflow — now used industry-wide — was invented at Airbnb to schedule their data pipelines.",
      },
    },
    tags: [
      "React",
      "Ruby on Rails",
      "MySQL",
      "Elasticsearch",
      "AWS",
      "GraphQL",
    ],
  },
  {
    id: "google",
    name: "Google",
    tagline: "Organize the world's information",
    description:
      "The world's most visited website, handling 8.5 billion searches per day across 200+ countries.",
    category: "Search & Productivity",
    color: "#4285F4",
    logo: google,
    users: "4.3B+",
    founded: 1998,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          {
            name: "Angular",
            note: "Primary Google web UI framework (they built it)",
          },
          { name: "Lit / Polymer", note: "Web components for Google products" },
          { name: "TypeScript", note: "All frontend code at scale" },
          { name: "Closure Compiler", note: "Google's own JS optimizer" },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          {
            name: "C++",
            note: "Core search engine & performance-critical services",
          },
          { name: "Java", note: "Internal tooling & Google Workspace" },
          { name: "Python", note: "Data pipelines, AI, and scripting" },
          { name: "Go", note: "Google invented Go — used in cloud services" },
        ],
      },
      database: {
        label: "Database",
        items: [
          {
            name: "Bigtable",
            note: "Petabyte-scale NoSQL (Google invented it)",
          },
          { name: "Spanner", note: "Globally distributed relational DB" },
          { name: "Firestore", note: "Document DB for Firebase apps" },
          { name: "Memorystore", note: "Managed Redis caching layer" },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          { name: "GCP", note: "Google Cloud — their own infra product" },
          {
            name: "Borg / Kubernetes",
            note: "Borg is internal; K8s is the open-source fork",
          },
          { name: "gRPC", note: "Google's own RPC framework" },
          {
            name: "Colossus",
            note: "Successor to GFS — internal distributed file system",
          },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "TensorFlow",
            note: "Deep learning framework (Google invented it)",
          },
          { name: "JAX", note: "High-performance ML research framework" },
          { name: "Gemini", note: "Multimodal LLM powering Search AI" },
          {
            name: "Apache Beam",
            note: "Batch & streaming data pipeline model",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          'Google invented much of modern distributed systems: MapReduce, GFS, Bigtable, Dremel, and Spanner. They run over 20 data centers globally with private subsea cables. PageRank is still at the core of search. Google\'s internal platform "Borg" preceded Kubernetes by nearly a decade.',
      },
    },
    tags: [
      "C++",
      "Go",
      "Bigtable",
      "Spanner",
      "GCP",
      "TensorFlow",
      "Kubernetes",
    ],
  },
  {
    id: "meta",
    name: "Meta",
    tagline: "Connect the world",
    description:
      "Parent company of Facebook, Instagram, and WhatsApp — serving 3.2 billion daily active users across its family of apps.",
    category: "Social Media",
    color: "#0081FB",
    logo: meta,
    users: "3.2B+",
    founded: 2004,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          {
            name: "React",
            note: "Meta invented React — powers all their web UIs",
          },
          {
            name: "React Native",
            note: "Cross-platform mobile (also Meta-invented)",
          },
          { name: "Relay", note: "Meta's GraphQL client for React" },
          {
            name: "Hack (PHP)",
            note: "Meta's typed PHP superset for web rendering",
          },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          {
            name: "Hack / PHP",
            note: "Original backend, still powering Facebook core",
          },
          { name: "C++", note: "Performance-critical & real-time services" },
          { name: "Python", note: "AI/ML research and data pipelines" },
          { name: "Rust", note: "Systems tooling and new infrastructure" },
        ],
      },
      database: {
        label: "Database",
        items: [
          {
            name: "MySQL (TAO)",
            note: "Social graph stored in MySQL via TAO abstraction",
          },
          { name: "Cassandra", note: "Message inboxes and time-series data" },
          { name: "RocksDB", note: "Meta-built embedded key-value store" },
          {
            name: "Memcached",
            note: "Meta wrote many of the Memcached improvements used today",
          },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          {
            name: "Own Data Centers",
            note: "Meta owns massive data centers via Open Compute Project",
          },
          {
            name: "Tupperware",
            note: "Internal container orchestration (alternative to K8s)",
          },
          { name: "HHVM", note: "Meta's own virtual machine for Hack/PHP" },
          { name: "Thrift", note: "Meta's cross-language RPC framework" },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "PyTorch",
            note: "Meta invented PyTorch — dominant AI research framework",
          },
          { name: "Llama", note: "Open-source LLM family powering Meta AI" },
          { name: "Presto", note: "Meta-built distributed SQL query engine" },
          {
            name: "FBLearner Flow",
            note: "Internal ML platform for model training at scale",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          "Meta open-sourced some of the most influential tech in the industry: React, React Native, PyTorch, RocksDB, Cassandra (originally), and GraphQL. The TAO system manages billions of social graph edges with sub-millisecond reads. WhatsApp was famously run by just ~50 engineers serving 900M users, built on Erlang.",
      },
    },
    tags: [
      "React",
      "Hack",
      "PyTorch",
      "Cassandra",
      "GraphQL",
      "RocksDB",
      "Thrift",
    ],
  },
  {
    id: "amazon",
    name: "Amazon",
    tagline: "The everything store",
    description:
      "World's largest e-commerce and cloud company with $600B+ in annual revenue and 300M+ active customers.",
    category: "E-commerce & Cloud",
    color: "#FF9900",
    logo: amazon,
    users: "300M+",
    founded: 1994,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "React", note: "Storefront and Seller Central UIs" },
          { name: "AWS Amplify", note: "Frontend deployment and hosting" },
          {
            name: "A/B Testing Platform",
            note: "Massive internal experimentation on every UI element",
          },
          {
            name: "Alexa Web UI",
            note: "Custom voice interaction layers for Echo devices",
          },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          { name: "Java", note: "Core e-commerce microservices" },
          { name: "Python", note: "Automation, Alexa NLP, and data science" },
          { name: "Rust", note: "AWS infrastructure and performance services" },
          {
            name: "C++",
            note: "Robotics (Kiva warehouse robots) and embedded systems",
          },
        ],
      },
      database: {
        label: "Database",
        items: [
          {
            name: "DynamoDB",
            note: "Amazon-built; handles tens of millions of requests/sec",
          },
          {
            name: "Aurora (RDS)",
            note: "Relational DB for transactional data",
          },
          { name: "ElastiCache", note: "Managed Redis/Memcached caching" },
          { name: "Redshift", note: "Data warehouse for analytics" },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          {
            name: "AWS",
            note: "They built it for themselves first, then opened it up",
          },
          {
            name: "Amazon CloudFront",
            note: "Global CDN for media and assets",
          },
          {
            name: "EC2 / Lambda",
            note: "Virtual machines and serverless compute",
          },
          { name: "AWS Fargate / ECS", note: "Container orchestration" },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "SageMaker",
            note: "End-to-end ML model training and deployment",
          },
          {
            name: "Amazon Rekognition",
            note: "Computer vision for fraud, imagery",
          },
          { name: "Alexa AI", note: "NLP and voice recognition models" },
          {
            name: "Apache Kafka (MSK)",
            note: "Event streaming for order pipelines",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          'Amazon\'s 2002 "API Mandate" from Jeff Bezos forced all teams to expose services via APIs — which accidentally created AWS. Prime Day now peaks at 100,000+ orders per minute. DynamoDB was born out of a 2004 paper describing how Amazon survived holiday traffic on a single relational DB. AWS holds ~31% of global cloud market share.',
      },
    },
    tags: ["Java", "DynamoDB", "AWS", "Lambda", "Kafka", "Redshift", "Rust"],
  },
  {
    id: "x",
    name: "X (Twitter)",
    tagline: "The everything app",
    description:
      "Real-time social network serving 250M+ daily active users with 500M+ tweets posted per day.",
    category: "Social Media",
    color: "#000000",
    logo: x,
    users: "250M+ DAU",
    founded: 2006,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "React", note: "Web client (twitter.com)" },
          { name: "Swift / Kotlin", note: "Native iOS and Android clients" },
          {
            name: "GraphQL",
            note: "API query layer after Musk-era restructuring",
          },
          { name: "Next.js", note: "Server-side rendering for web" },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          { name: "Scala", note: "Core tweet serving and fanout services" },
          { name: "Java", note: "Search and timeline services" },
          { name: "Python", note: "ML, data processing, and automation" },
          {
            name: "Rust",
            note: "Post-acquisition infra overhaul by new engineering teams",
          },
        ],
      },
      database: {
        label: "Database",
        items: [
          {
            name: "MySQL (Manhattan)",
            note: "Twitter's distributed MySQL store for tweets",
          },
          {
            name: "Redis",
            note: "Timeline caching — tweets are pre-computed per user",
          },
          { name: "Hadoop / HDFS", note: "Cold tweet storage and analytics" },
          { name: "Elasticsearch", note: "Full-text tweet search" },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          {
            name: "GCP + Own DCs",
            note: "Musk moved significant infra from owned DCs to GCP",
          },
          {
            name: "Mesos / Kubernetes",
            note: "Container orchestration hybrid",
          },
          {
            name: "Finagle",
            note: "Twitter-built RPC library for JVM services",
          },
          {
            name: "Zipkin",
            note: "Twitter-built distributed tracing tool (now open source)",
          },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "Grok (xAI)",
            note: "Post-acquisition LLM from Elon's xAI company",
          },
          {
            name: "Apache Kafka",
            note: "Tweet event streaming and fanout pipeline",
          },
          {
            name: "TensorFlow",
            note: "Recommendation and content moderation models",
          },
          {
            name: "Scalding",
            note: "Twitter's Scala MapReduce framework on Hadoop",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          "Twitter's \"Fail Whale\" era led to one of the most studied scalability transformations in history — from Ruby on Rails monolith to Scala microservices. The timeline fanout problem (celebrities with millions of followers) required a hybrid push/pull model. After Musk's 2022 acquisition, headcount dropped from 7,500 to ~1,500 — yet the platform remained online.",
      },
    },
    tags: ["Scala", "Java", "Redis", "Kafka", "MySQL", "Finagle", "GCP"],
  },
  {
    id: "discord",
    name: "Discord",
    tagline: "Where communities live",
    description:
      "Real-time messaging and voice platform serving 500M+ registered users and 19M+ active daily servers.",
    category: "Communication",
    color: "#5865F2",
    logo: discord,
    users: "500M+",
    founded: 2015,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "React", note: "Web and desktop UI" },
          { name: "Electron", note: "Desktop app wrapping the React web app" },
          { name: "React Native", note: "Mobile apps on iOS and Android" },
          { name: "WebRTC", note: "Voice and video call protocol" },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          {
            name: "Rust",
            note: "High-performance message gateway — replaced Python",
          },
          { name: "Elixir", note: "Real-time presence and voice coordination" },
          {
            name: "Python",
            note: "Original services, still used for some APIs",
          },
          { name: "Java", note: "Media server and transcoding services" },
        ],
      },
      database: {
        label: "Database",
        items: [
          {
            name: "ScyllaDB",
            note: "Replaced Cassandra — 10x faster with same interface",
          },
          { name: "MongoDB", note: "User profiles and guild configurations" },
          { name: "Redis", note: "Pub/sub for real-time message delivery" },
          {
            name: "ClickHouse",
            note: "Analytics and metrics at petabyte scale",
          },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          { name: "GCP", note: "Primary cloud provider" },
          {
            name: "Kubernetes (GKE)",
            note: "Container orchestration for microservices",
          },
          { name: "CloudFlare", note: "DDoS protection and edge networking" },
          { name: "Pub/Sub (GCP)", note: "Message queue for async events" },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          { name: "AutoMod AI", note: "ML-powered content moderation" },
          { name: "Apache Spark", note: "Large-scale data analytics" },
          { name: "TensorFlow", note: "Recommendations and safety models" },
          {
            name: "Prometheus + Grafana",
            note: "Real-time metrics and alerting",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          "Discord's famous \"How Discord Stores Trillions of Messages\" blog post documented their Cassandra → ScyllaDB migration. Their Read States service tracks every user's last-read message in every channel — one of the hardest scaling problems on the platform. The push from Python to Rust in the message gateway cut latency from ~95ms to ~0.3ms.",
      },
    },
    tags: [
      "Rust",
      "Elixir",
      "ScyllaDB",
      "GCP",
      "WebRTC",
      "React",
      "ClickHouse",
    ],
  },
  {
    id: "stripe",
    name: "Stripe",
    tagline: "Infrastructure for the internet economy",
    description:
      "Global payments infrastructure processing hundreds of billions of dollars annually for millions of businesses.",
    category: "Fintech",
    color: "#635BFF",
    logo: stripe,
    users: "1M+ businesses",
    founded: 2010,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "React", note: "Dashboard and docs UI" },
          { name: "Stripe.js", note: "Stripe-built secure payment form SDK" },
          {
            name: "Markdoc",
            note: "Stripe-built docs markdown framework (open-sourced)",
          },
          { name: "TypeScript", note: "All frontend code fully typed" },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          { name: "Ruby", note: "Original and still primary API layer" },
          {
            name: "Java / Scala",
            note: "Payment processing and fraud services",
          },
          { name: "Go", note: "High-throughput internal services" },
          { name: "Sorbet", note: "Stripe-built type checker for Ruby" },
        ],
      },
      database: {
        label: "Database",
        items: [
          { name: "MySQL", note: "Primary data store — highly sharded" },
          { name: "Redis", note: "Idempotency keys and rate limiting" },
          { name: "MongoDB", note: "Event log and audit trail storage" },
          {
            name: "Amazon S3",
            note: "Document storage for receipts and reports",
          },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          { name: "AWS", note: "Primary cloud — multi-region for compliance" },
          { name: "Envoy", note: "Service mesh for internal RPC" },
          { name: "Kubernetes", note: "Container orchestration" },
          { name: "Veneur", note: "Stripe-built metrics aggregation tool" },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "Radar (ML)",
            note: "Stripe's real-time fraud detection ML system",
          },
          { name: "Apache Kafka", note: "Payment event streaming" },
          { name: "Spark", note: "Batch processing for financial analytics" },
          {
            name: "LLMs",
            note: "Stripe Docs AI assistant and support automation",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          "Stripe's API design became an industry standard — every payments company copied their developer experience. Radar processes every payment in real-time against billions of historical data points for fraud. They maintain strict PCI DSS Level 1 compliance across all infrastructure. Stripe operates in 195+ countries with multi-region active-active failover.",
      },
    },
    tags: ["Ruby", "Java", "MySQL", "Redis", "AWS", "Kafka", "Radar"],
  },
  {
    id: "shopify",
    name: "Shopify",
    tagline: "Commerce for everyone",
    description:
      "E-commerce platform powering 4.6M+ merchants across 175 countries, processing $235B+ in annual GMV.",
    category: "E-commerce Platform",
    color: "#96BF48",
    logo: shopify,
    users: "4.6M+ merchants",
    founded: 2006,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "React", note: "Admin dashboard and checkout UI" },
          { name: "Polaris", note: "Shopify's own open-source design system" },
          {
            name: "Liquid",
            note: "Shopify's own templating language for storefronts",
          },
          { name: "React Native", note: "Shopify mobile apps and POS" },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          {
            name: "Ruby on Rails",
            note: "Original and still core — massive Rails monolith",
          },
          {
            name: "Go",
            note: "High-throughput services like inventory and shipping",
          },
          {
            name: "Rust",
            note: "WebAssembly-based app sandboxing (Shopify Functions)",
          },
          {
            name: "GraphQL",
            note: "Primary API for partners and storefronts (Storefront API)",
          },
        ],
      },
      database: {
        label: "Database",
        items: [
          {
            name: "MySQL",
            note: "Core store — sharded across thousands of shards",
          },
          { name: "Redis", note: "Flash sale and checkout session handling" },
          { name: "Kafka", note: "Event streaming for orders and inventory" },
          { name: "Elasticsearch", note: "Product and merchant search" },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          { name: "GCP", note: "Primary cloud provider" },
          { name: "Kubernetes", note: "Container orchestration at scale" },
          { name: "Cloudflare", note: "Edge caching and DDoS mitigation" },
          {
            name: "Vitess",
            note: "MySQL sharding layer (adopted from YouTube)",
          },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "Shopify Sidekick",
            note: "AI commerce assistant built on LLMs",
          },
          {
            name: "Spark / BigQuery",
            note: "Merchant analytics and reporting",
          },
          {
            name: "TensorFlow",
            note: "Fraud detection and product recommendations",
          },
          {
            name: "Merlin",
            note: "Internal ML platform for merchant insights",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          'Shopify\'s Flash Sales problem is legendary — a single merchant dropping a product can create millions of requests per second. They solved it with a "pre-computed checkout" model. Their BFCM (Black Friday/Cyber Monday) dashboard is an annual engineering flex. Shopify introduced WebAssembly sandboxing (Shopify Functions) to let merchants run custom logic without spinning up servers.',
      },
    },
    tags: ["Rails", "Ruby", "Go", "MySQL", "Kafka", "GCP", "GraphQL", "Vitess"],
  },
  {
    id: "github",
    name: "GitHub",
    tagline: "Where the world builds software",
    description:
      "World's largest software development platform with 100M+ developers and 420M+ repositories.",
    category: "Developer Tools",
    color: "#24292F",
    logo: github,
    users: "100M+ devs",
    founded: 2008,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "React", note: "Primary UI framework after 2017 migration" },
          { name: "TypeScript", note: "Typed frontend codebase" },
          {
            name: "GitHub Primer",
            note: "GitHub's own open-source design system",
          },
          { name: "Turbo / Stimulus", note: "Hotwire stack for non-SPA pages" },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          {
            name: "Ruby on Rails",
            note: "Original monolith — still heavily in use",
          },
          {
            name: "Go",
            note: "Git operations, API services, and background jobs",
          },
          { name: "C", note: "libgit2 — core Git operations at low level" },
          { name: "GraphQL", note: "Public API (GitHub GraphQL API v4)" },
        ],
      },
      database: {
        label: "Database",
        items: [
          {
            name: "MySQL (Vitess)",
            note: "Primary DB — horizontally sharded via Vitess",
          },
          { name: "Redis", note: "Caching, sessions, and job queues (Resque)" },
          { name: "Elasticsearch", note: "Code search across 420M+ repos" },
          {
            name: "Kafka",
            note: "Event streaming for webhooks and CI triggers",
          },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          {
            name: "Azure",
            note: "Microsoft-owned; migrated to Azure post-acquisition",
          },
          {
            name: "Kubernetes (AKS)",
            note: "Container orchestration on Azure",
          },
          { name: "GitHub Actions Runners", note: "Distributed CI/CD compute" },
          { name: "Consul", note: "Service mesh and service discovery" },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "GitHub Copilot",
            note: "AI coding assistant built on OpenAI Codex / GPT-4",
          },
          {
            name: "CodeQL",
            note: "Semantic code analysis for security scanning",
          },
          { name: "Apache Spark", note: "Repository and activity analytics" },
          {
            name: "Dependabot AI",
            note: "ML-powered dependency vulnerability detection",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          'GitHub\'s MySQL cluster is one of the most famous horizontal scaling stories — documented in their "GitHub\'s Database in the Dark" series. Their "Resilience Engineering" blog documents how they survive DDoS attacks on Git protocol. Copilot is now the highest-revenue developer tool ever built, crossing $100M ARR in its first year.',
      },
    },
    tags: [
      "Rails",
      "Go",
      "MySQL",
      "Vitess",
      "Elasticsearch",
      "Azure",
      "Copilot",
    ],
  },
  {
    id: "figma",
    name: "Figma",
    tagline: "Design together, anywhere",
    description:
      "Browser-based collaborative design tool used by 4M+ organizations, pioneering real-time multi-user design.",
    category: "Design Tools",
    color: "#F24E1E",
    logo: figma,
    users: "4M+ orgs",
    founded: 2012,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "React", note: "UI panels and toolbars around the canvas" },
          {
            name: "WebAssembly (C++)",
            note: "The design canvas itself — compiled from C++ to Wasm",
          },
          { name: "WebGL", note: "GPU-accelerated canvas rendering" },
          { name: "TypeScript", note: "All frontend code" },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          { name: "Node.js", note: "API servers and multiplayer sync" },
          { name: "C++", note: "Canvas engine compiled to WebAssembly" },
          { name: "Rust", note: "High-performance sync and binary diffing" },
          {
            name: "Operational Transforms (OT)",
            note: "Real-time collaboration conflict resolution",
          },
        ],
      },
      database: {
        label: "Database",
        items: [
          { name: "PostgreSQL", note: "User, team, and file metadata" },
          {
            name: "Amazon S3",
            note: "Figma file storage — binary design documents",
          },
          { name: "Redis", note: "Real-time session and multiplayer state" },
          {
            name: "DynamoDB",
            note: "Version history and collaboration events",
          },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          { name: "AWS", note: "Primary cloud infrastructure" },
          { name: "Kubernetes", note: "Service orchestration" },
          { name: "CloudFront", note: "Asset delivery and font CDN" },
          {
            name: "Multiplayer Servers",
            note: "Dedicated WebSocket servers per active file",
          },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "Figma AI",
            note: "AI design generation and editing (launched 2024)",
          },
          {
            name: "Vector Search",
            note: "Semantic component and asset search",
          },
          {
            name: "TensorFlow",
            note: "Layout suggestion and design linting models",
          },
          {
            name: "Datadog",
            note: "Real-time observability for multiplayer sessions",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          "Figma's most impressive technical feat is building a real-time, multiplayer design canvas in the browser. They compiled their C++ rendering engine to WebAssembly — running native-speed graphics inside a browser tab. Their multiplayer sync uses a simplified form of Operational Transforms, similar to Google Docs, but adapted for vector design objects.",
      },
    },
    tags: ["WebAssembly", "C++", "WebGL", "React", "Rust", "AWS", "PostgreSQL"],
  },
  {
    id: "slack",
    name: "Slack",
    tagline: "Where work happens",
    description:
      "Business communication platform with 32M+ daily active users sending 1.5B+ messages daily.",
    category: "Productivity & Communication",
    color: "#4A154B",
    logo: slack,
    users: "32M+ DAU",
    founded: 2009,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "React", note: "Web app UI" },
          {
            name: "Electron",
            note: "Desktop app — same web app wrapped in Electron",
          },
          { name: "React Native", note: "iOS and Android mobile apps" },
          { name: "TypeScript", note: "Full typed codebase on the frontend" },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          {
            name: "PHP (Hacklang)",
            note: "Original monolith — still core message handling",
          },
          { name: "Java", note: "Messaging infra and search" },
          { name: "Go", note: "Real-time event processing and gateway" },
          { name: "Terraform", note: "Infrastructure provisioning" },
        ],
      },
      database: {
        label: "Database",
        items: [
          {
            name: "MySQL",
            note: "Primary datastore for messages and workspaces",
          },
          { name: "Redis", note: "Online presence, pub/sub, and job queues" },
          { name: "Solr", note: "Message search across workspace history" },
          {
            name: "Kafka",
            note: "Event streaming for notifications and integrations",
          },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          { name: "AWS", note: "Primary cloud since early days" },
          {
            name: "Kubernetes",
            note: "Container orchestration at Salesforce scale",
          },
          { name: "HAProxy", note: "Load balancing for WebSocket connections" },
          { name: "Consul", note: "Service discovery and health checking" },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "Slack AI",
            note: "Built on Salesforce Einstein + external LLMs",
          },
          { name: "Einstein GPT", note: "Summarization and channel recaps" },
          { name: "Presto", note: "Analytics querying across message data" },
          {
            name: "ML Moderation",
            note: "Workspace spam and phishing detection",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          'Slack\'s WebSocket infrastructure maintains persistent connections to tens of millions of simultaneous clients. Their "Flannel" edge cache system serves channel membership and message data with microsecond latency. They pioneered the concept of "workspace isolation" — each Slack workspace is a full database tenant, allowing independent scaling and compliance per organization.',
      },
    },
    tags: ["PHP", "Java", "MySQL", "Redis", "Kafka", "AWS", "WebSocket"],
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    tagline: "Connect to opportunity",
    description:
      "World's largest professional network with 1B+ members, facilitating 6 jobs filled per minute.",
    category: "Professional Networking",
    color: "#0A66C2",
    logo: linkedin,
    users: "1B+",
    founded: 2002,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          {
            name: "Ember.js",
            note: "Original SPA framework — LinkedIn pioneered Ember.js adoption",
          },
          { name: "React", note: "Migrating newer surfaces to React" },
          {
            name: "Pemberton",
            note: "LinkedIn's internal design language system",
          },
          {
            name: "Voltage",
            note: "LinkedIn's internal A/B testing and feature flag system",
          },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          {
            name: "Java",
            note: "Core services — LinkedIn runs thousands of Java microservices",
          },
          { name: "Scala", note: "Stream processing and Kafka internals" },
          { name: "Python", note: "ML pipelines and tooling" },
          {
            name: "Rest.li",
            note: "LinkedIn's own REST framework for Java microservices",
          },
        ],
      },
      database: {
        label: "Database",
        items: [
          {
            name: "Espresso",
            note: "LinkedIn's own distributed NoSQL document store",
          },
          {
            name: "Voldemort",
            note: "LinkedIn-built key-value store (inspired Amazon Dynamo)",
          },
          { name: "Venice", note: "LinkedIn's batch data serving system" },
          {
            name: "Pinot (Apache)",
            note: "LinkedIn-built real-time OLAP for analytics",
          },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          {
            name: "Azure + Own DCs",
            note: "Microsoft-owned; hybrid cloud approach",
          },
          {
            name: "Kubernetes (AKS)",
            note: "Container orchestration on Azure",
          },
          {
            name: "Apache Kafka",
            note: "LinkedIn INVENTED Kafka — open-sourced in 2011",
          },
          { name: "Azkaban", note: "LinkedIn-built batch workflow scheduler" },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "ProRank",
            note: "Feed ranking and job recommendation ML system",
          },
          {
            name: "Apache Kafka",
            note: "Real-time activity streams (LinkedIn built this)",
          },
          {
            name: "Apache Pinot",
            note: "LinkedIn-built real-time analytics (now open source)",
          },
          {
            name: "Feathr",
            note: "LinkedIn's feature store for ML pipelines (now open source)",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          "LinkedIn invented Apache Kafka — the most widely used event streaming platform in the world. They also created Apache Pinot (real-time OLAP), Voldemort (key-value store), and Azkaban (workflow scheduler). The LinkedIn economic graph — modeling 1B people, 60M companies, and millions of jobs — is one of the most complex graph databases in existence.",
      },
    },
    tags: ["Java", "Kafka", "Espresso", "Pinot", "Scala", "Azure", "Rest.li"],
  },
  {
    id: "snapchat",
    name: "Snapchat",
    tagline: "The fastest way to share a moment",
    description:
      "Visual messaging app with 400M+ daily active users and 5 billion+ snaps created each day.",
    category: "Social Media",
    color: "#FFFC00",
    logo: snapcaht,
    users: "400M+ DAU",
    founded: 2011,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "Swift (iOS)", note: "Camera and native iOS experience" },
          { name: "Kotlin (Android)", note: "Android native app" },
          { name: "React Native", note: "Some cross-platform surfaces" },
          { name: "Lens Studio", note: "Snap's own AR lens creation tool" },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          { name: "Python", note: "Original backend services" },
          { name: "Go", note: "High-performance services and media handling" },
          { name: "Java", note: "Core messaging and delivery services" },
          { name: "gRPC", note: "Internal service communication" },
        ],
      },
      database: {
        label: "Database",
        items: [
          {
            name: "Google Bigtable",
            note: "Snap metadata and message storage",
          },
          { name: "Google Cloud Storage", note: "Snap and Story media files" },
          {
            name: "Kafka",
            note: "Event streaming for snaps and notifications",
          },
          { name: "Redis", note: "Real-time session and ephemeral state" },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          { name: "GCP", note: "Snap committed $2B+ to Google Cloud" },
          {
            name: "Kubernetes (GKE)",
            note: "Container orchestration at scale",
          },
          { name: "Pub/Sub (GCP)", note: "Async messaging for snap delivery" },
          { name: "CDN (GCP + own)", note: "Media delivery network for snaps" },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          { name: "Snap ML", note: "On-device AR and lens detection models" },
          {
            name: "TensorFlow Lite",
            note: "Face filters and object detection on-device",
          },
          { name: "BigQuery", note: "Analytics and ad targeting queries" },
          {
            name: "My AI (ChatGPT-powered)",
            note: "Snapchat's built-in AI chatbot (via OpenAI)",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          "Snapchat's ephemeral model (snaps disappearing after viewing) created a unique backend challenge — message delivery must be guaranteed before deletion. Their AR Lens platform processes real-time face mesh, world tracking, and hand detection entirely on-device. Snap Maps serves live location data for hundreds of millions of users simultaneously.",
      },
    },
    tags: [
      "Go",
      "Python",
      "GCP",
      "Bigtable",
      "Kafka",
      "TensorFlow Lite",
      "gRPC",
    ],
  },
  {
    id: "pinterest",
    name: "Pinterest",
    tagline: "Discover ideas for your life",
    description:
      "Visual discovery platform with 450M+ monthly active users saving 1.5 billion pins per day.",
    category: "Social Media & Discovery",
    color: "#E60023",
    logo: pintrest,
    users: "450M+",
    founded: 2009,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "React", note: "Web app and mobile web" },
          { name: "React Native", note: "iOS and Android mobile apps" },
          {
            name: "Gestalt",
            note: "Pinterest's open-source React design system",
          },
          { name: "TypeScript", note: "Typed frontend development" },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          {
            name: "Python (Django)",
            note: "Original API layer — still heavily used",
          },
          {
            name: "Java",
            note: "High-throughput feed and recommendation services",
          },
          { name: "Go", note: "Infrastructure and performance services" },
          { name: "Elixir", note: "Real-time notifications and messaging" },
        ],
      },
      database: {
        label: "Database",
        items: [
          { name: "MySQL", note: "Core pin and user data, heavily sharded" },
          { name: "HBase", note: "User activity logs and engagement signals" },
          { name: "Solr / Elasticsearch", note: "Pin and board search" },
          { name: "Memcached", note: "Feed caching and hot pin serving" },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          { name: "AWS", note: "Primary cloud infrastructure" },
          {
            name: "Kubernetes",
            note: "Container orchestration for microservices",
          },
          { name: "Rockstor", note: "Internal HBase optimization layer" },
          { name: "Redshift", note: "Data warehousing for ad analytics" },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "PinSage",
            note: "Pinterest's GNN-based recommendation model (graph neural net)",
          },
          {
            name: "Visual Search (Lens)",
            note: "Computer vision for image-to-pin search",
          },
          { name: "Pixie", note: "Random-walk graph recommendation engine" },
          {
            name: "Apache Spark",
            note: "Large-scale data processing for ML training",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          'Pinterest\'s PinSage was one of the first production-scale graph neural networks, training on a graph with 3 billion nodes. Their "homefeed" algorithm balances freshness, interest signals, and diversity across billions of pins. Pinterest open-sourced their MySQL sharding methodology, which became widely adopted for horizontal database scaling.',
      },
    },
    tags: ["Python", "Django", "Java", "MySQL", "HBase", "AWS", "PinSage"],
  },
  {
    id: "notion",
    name: "Notion",
    tagline: "Write, plan, share",
    description:
      "All-in-one workspace used by 30M+ users for notes, docs, wikis, and project management.",
    category: "Productivity",
    color: "#000000",
    logo: notion,
    users: "30M+",
    founded: 2016,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "React", note: "The entire editor and UI built in React" },
          { name: "Electron", note: "Desktop apps for Windows and macOS" },
          { name: "MobX", note: "Reactive state management for the editor" },
          { name: "TypeScript", note: "Full typed codebase" },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          { name: "Node.js", note: "API layer and real-time sync server" },
          { name: "Kotlin / JVM", note: "Core data services post-scale-up" },
          { name: "gRPC", note: "Internal service communication" },
          {
            name: "Operational Transforms",
            note: "Real-time collaborative block editing",
          },
        ],
      },
      database: {
        label: "Database",
        items: [
          {
            name: "PostgreSQL",
            note: "Primary data store for pages and blocks",
          },
          { name: "Amazon S3", note: "File and image uploads" },
          {
            name: "Redis",
            note: "Caching, rate limiting, and session management",
          },
          { name: "Snowflake", note: "Data warehouse for product analytics" },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          { name: "AWS", note: "Primary cloud infrastructure" },
          { name: "Kubernetes", note: "Container orchestration" },
          { name: "Cloudflare", note: "Edge caching and security" },
          { name: "Terraform", note: "Infrastructure as code" },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "Notion AI",
            note: "Built on top of OpenAI GPT-4 and Anthropic Claude",
          },
          {
            name: "pgvector",
            note: "Vector embeddings stored in Postgres for semantic search",
          },
          {
            name: "OpenAI Embeddings",
            note: "Powering semantic search across workspace content",
          },
          {
            name: "Amplitude",
            note: "Product analytics and user behavior tracking",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          'Notion\'s "block" model — where every paragraph, heading, and table is a database row — creates a unique scaling challenge. Their PostgreSQL database grew to a size that required a major sharding effort in 2021. Real-time collaboration uses a simplified OT model similar to Google Docs. Notion AI became the fastest B2B AI product to reach mass adoption.',
      },
    },
    tags: [
      "React",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Kotlin",
      "Redis",
      "Notion AI",
    ],
  },
  {
    id: "zoom",
    name: "Zoom",
    tagline: "One platform to connect",
    description:
      "Video communications platform serving 300M+ daily meeting participants at peak usage.",
    category: "Communication",
    color: "#2D8CFF",
    logo: zoom,
    users: "300M+ peak DAP",
    founded: 2011,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "React", note: "Web client and Zoom web portal" },
          { name: "Electron", note: "Desktop app for Windows and macOS" },
          {
            name: "C++ (native SDK)",
            note: "Core video rendering and codec layer",
          },
          { name: "Swift / Kotlin", note: "Native iOS and Android apps" },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          { name: "Java", note: "Meeting management and signaling servers" },
          { name: "Go", note: "Real-time media routing and relay" },
          { name: "Python", note: "AI features and data pipelines" },
          { name: "C++", note: "Media encoding, decoding, and transmission" },
        ],
      },
      database: {
        label: "Database",
        items: [
          { name: "MySQL", note: "Meeting metadata and user accounts" },
          {
            name: "Apache Kafka",
            note: "Meeting event streaming and recording pipeline",
          },
          { name: "Redis", note: "Session state and presence signaling" },
          {
            name: "Amazon S3",
            note: "Cloud meeting recordings and transcripts",
          },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          {
            name: "AWS + Oracle Cloud",
            note: "Multi-cloud for redundancy and compliance",
          },
          {
            name: "Own Media Servers",
            note: "Zoom operates their own global media routing network",
          },
          { name: "Kubernetes", note: "Microservices orchestration" },
          {
            name: "WebRTC + Custom Protocol",
            note: "Media delivery optimized beyond standard WebRTC",
          },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "Zoom AI Companion",
            note: "Meeting summaries and action items via LLM",
          },
          { name: "Whisper / ASR", note: "Real-time meeting transcription" },
          {
            name: "Noise Suppression ML",
            note: "On-device background noise cancellation model",
          },
          {
            name: "Zoom IQ",
            note: "Conversation intelligence and sentiment analysis",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          "During COVID in April 2020, Zoom went from 10M to 300M daily participants in 3 months — one of the fastest scaling events in software history. They achieved this by leaning on AWS burst capacity and rapidly expanding their own media server network. Zoom's custom media protocol outperforms raw WebRTC by optimizing packet loss recovery for video.",
      },
    },
    tags: ["Java", "Go", "C++", "MySQL", "Kafka", "AWS", "WebRTC"],
  },
  {
    id: "openai",
    name: "OpenAI / ChatGPT",
    tagline: "AI for everyone",
    description:
      "The world's most widely used AI platform with 100M+ weekly ChatGPT users and the API powering thousands of products.",
    category: "Artificial Intelligence",
    color: "#10A37F",
    logo: chatgpt,
    users: "100M+ weekly",
    founded: 2015,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "React", note: "ChatGPT web UI" },
          { name: "Next.js", note: "Server-side rendering and routing" },
          { name: "TypeScript", note: "Typed frontend codebase" },
          {
            name: "React Native",
            note: "ChatGPT mobile apps on iOS and Android",
          },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          {
            name: "Python",
            note: "ML research, model training, and API services",
          },
          { name: "FastAPI", note: "High-performance async Python API layer" },
          { name: "Go", note: "Infrastructure and rate-limiting services" },
          {
            name: "Triton",
            note: "NVIDIA GPU kernel language for custom CUDA ops",
          },
        ],
      },
      database: {
        label: "Database",
        items: [
          {
            name: "PostgreSQL",
            note: "User accounts, conversations, and billing data",
          },
          {
            name: "Redis",
            note: "Rate limiting, session tokens, streaming state",
          },
          {
            name: "Azure Blob Storage",
            note: "Model weights, checkpoints, and file uploads",
          },
          {
            name: "Pinecone / pgvector",
            note: "Vector DB for embeddings and semantic search",
          },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          {
            name: "Microsoft Azure",
            note: "$13B+ partnership — all workloads run on Azure",
          },
          {
            name: "NVIDIA H100 / A100 Clusters",
            note: "Tens of thousands of GPUs for training",
          },
          {
            name: "Kubernetes",
            note: "Container orchestration for inference serving",
          },
          {
            name: "Ray",
            note: "Distributed computing for large-scale model training",
          },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "GPT-4o / o3",
            note: "Foundation models for reasoning and generation",
          },
          { name: "PyTorch", note: "Model training and research framework" },
          {
            name: "RLHF Pipeline",
            note: "Reinforcement learning from human feedback for alignment",
          },
          {
            name: "Whisper",
            note: "Open-source ASR model for audio transcription",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          "Training GPT-4 reportedly cost over $100M in compute. OpenAI's inference infrastructure serves real-time streaming responses to millions of simultaneous users via server-sent events (SSE). They built a custom RLHF pipeline to align model behavior. The ChatGPT launch (Nov 2022) was the fastest consumer product to reach 100M users — in just 2 months.",
      },
    },
    tags: [
      "Python",
      "PyTorch",
      "Azure",
      "FastAPI",
      "NVIDIA GPUs",
      "React",
      "RLHF",
    ],
  },
  {
    id: "reddit",
    name: "Reddit",
    tagline: "The front page of the internet",
    description:
      "Community discussion platform with 1.2B+ monthly visitors and 100,000+ active communities.",
    category: "Social Media & Community",
    color: "#FF4500",
    logo: reddit,
    users: "1.2B+ monthly",
    founded: 2005,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "React", note: "New Reddit UI (2018 redesign)" },
          { name: "TypeScript", note: "All new frontend development" },
          { name: "Redux", note: "State management for web app" },
          {
            name: "Reddit UI / Shreddit",
            note: "New Web Component-based frontend (2023)",
          },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          {
            name: "Python",
            note: "Original backend — started as a Lisp app, moved to Python",
          },
          {
            name: "Go",
            note: "High-performance services and new microservices",
          },
          {
            name: "Thrift (Baseplate)",
            note: "Reddit's internal Python microservice framework",
          },
          { name: "Rust", note: "New high-performance services in migration" },
        ],
      },
      database: {
        label: "Database",
        items: [
          {
            name: "PostgreSQL",
            note: "Primary relational store for posts, comments, votes",
          },
          {
            name: "Cassandra",
            note: "Vote data and time-series engagement metrics",
          },
          { name: "Redis", note: "Front page ranking cache and session data" },
          { name: "Elasticsearch", note: "Full-text post and comment search" },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          { name: "AWS", note: "Primary cloud after leaving own data centers" },
          {
            name: "Kubernetes",
            note: "Container orchestration for microservices",
          },
          { name: "Fastly CDN", note: "Static asset delivery" },
          {
            name: "Kafka",
            note: "Event streaming for vote and comment pipelines",
          },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "Snooron",
            note: "Reddit's internal ML model for feed ranking",
          },
          {
            name: "Spark / Presto",
            note: "Large-scale data analytics across posts",
          },
          {
            name: "Jigsaw (Google)",
            note: "Used for comment toxicity detection",
          },
          {
            name: "Vector Search",
            note: "Semantic subreddit and post recommendations",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          'Reddit famously started as a Lisp app before switching to Python. The "Reddit hug of death" — where a popular link crashes the target website — is testament to their traffic spikes. Their voting system uses an optimistic concurrency model to handle millions of simultaneous upvotes. The r/Place collaborative canvas event (2022) placed 72 million pixels via 6M+ users in 4 days.',
      },
    },
    tags: ["Python", "Go", "PostgreSQL", "Cassandra", "Redis", "AWS", "Kafka"],
  },
  {
    id: "dropbox",
    name: "Dropbox",
    tagline: "Store and share, simplified",
    description:
      "Cloud storage platform with 700M+ registered users storing over 600 billion pieces of content.",
    category: "Cloud Storage",
    color: "#0061FF",
    logo: dropbox,
    users: "700M+ registered",
    founded: 2007,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "React", note: "Web app and dropbox.com interface" },
          {
            name: "TypeScript",
            note: "Typed frontend — early TypeScript adopter",
          },
          { name: "Electron", note: "Desktop app for Windows and macOS" },
          {
            name: "CoffeeScript → TypeScript",
            note: "Migrated 700K lines of CoffeeScript to TypeScript",
          },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          {
            name: "Python",
            note: "Original backend — notably runs mypy (they created it)",
          },
          {
            name: "Rust",
            note: "Migrated performance-critical sync engine from Python",
          },
          { name: "Go", note: "Infrastructure services and internal tooling" },
          {
            name: "mypy",
            note: "Dropbox-invented static type checker for Python",
          },
        ],
      },
      database: {
        label: "Database",
        items: [
          {
            name: "MySQL (Edgestore)",
            note: "Dropbox's custom metadata store on MySQL",
          },
          {
            name: "Own Block Storage",
            note: "Migrated from S3 to own storage infrastructure (Magic Pocket)",
          },
          { name: "Memcached", note: "Metadata caching layer" },
          {
            name: "Zookeeper",
            note: "Distributed coordination and service discovery",
          },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          {
            name: "Own Data Centers",
            note: "Exabytes stored on own hardware (Magic Pocket)",
          },
          {
            name: "AWS (overflow)",
            note: "AWS used for burst capacity and non-core workloads",
          },
          {
            name: "Kubernetes",
            note: "Container orchestration for application services",
          },
          {
            name: "Apache Zookeeper",
            note: "Distributed locking for file sync consistency",
          },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "Dropbox AI",
            note: "Document summarization and Q&A via LLMs",
          },
          { name: "PyTorch", note: "ML models for content intelligence" },
          {
            name: "Optical Character Recognition (OCR)",
            note: "Full-text search inside PDFs and images",
          },
          {
            name: "Presto / Hive",
            note: "Internal analytics and engagement data queries",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          'Dropbox\'s most famous engineering story is "Magic Pocket" — they built their own exabyte-scale object storage system and migrated off Amazon S3, saving hundreds of millions of dollars annually. They invented mypy (now the standard Python type checker) and pioneered large-scale CoffeeScript → TypeScript migrations. Their sync algorithm handles concurrent file edits across millions of devices.',
      },
    },
    tags: [
      "Python",
      "Rust",
      "Go",
      "MySQL",
      "Magic Pocket",
      "mypy",
      "TypeScript",
    ],
  },
  {
    id: "apple",
    name: "Apple",
    tagline: "Think different",
    description:
      "The world's most valuable company, shipping iPhones, Macs, iPads, and services to 2B+ active devices globally.",
    category: "Consumer Technology",
    color: "#000000",
    logo: apple,
    users: "2B+ active devices",
    founded: 1976,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          {
            name: "Swift / SwiftUI",
            note: "Native iOS, macOS, watchOS, and tvOS apps",
          },
          {
            name: "Objective-C",
            note: "Legacy frameworks still deep in iOS internals",
          },
          { name: "React", note: "Apple.com and internal web tooling" },
          {
            name: "Metal",
            note: "Apple's own GPU rendering API (replaces OpenGL)",
          },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          {
            name: "Swift (server-side)",
            note: "Apple promotes Swift on server via SSWG",
          },
          { name: "Python", note: "ML pipelines and internal tooling" },
          {
            name: "C / C++",
            note: "OS kernels (XNU) and low-level system services",
          },
          { name: "Java", note: "Some iCloud and services backend components" },
        ],
      },
      database: {
        label: "Database",
        items: [
          {
            name: "FoundationDB",
            note: "Acquired in 2015 — powers iCloud core storage",
          },
          {
            name: "CloudKit",
            note: "Apple's own database service for iOS apps",
          },
          {
            name: "Core Data",
            note: "On-device ORM for iOS/macOS persistence",
          },
          { name: "SQLite", note: "Embedded in virtually every Apple device" },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          {
            name: "iCloud (own infra)",
            note: "Apple-run data centers + AWS/GCP/Azure hybrid",
          },
          {
            name: "AWS + GCP",
            note: "iCloud storage spread across multiple clouds",
          },
          { name: "Kubernetes", note: "Internal service orchestration" },
          {
            name: "Akamia CDN",
            note: "App Store and software update delivery",
          },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "Core ML",
            note: "On-device ML framework for iOS/macOS apps",
          },
          {
            name: "MLX",
            note: "Apple-built ML framework optimized for Apple Silicon",
          },
          {
            name: "Siri (LLM + NLU)",
            note: "Conversational AI across Apple devices",
          },
          {
            name: "Create ML",
            note: "No-code ML model training for Apple developers",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          "Apple's FoundationDB acquisition was one of the most strategic database moves ever — it now underpins all of iCloud. The App Store processes 650 million weekly visitors. Apple Silicon (M-series chips) are the first ARM chips to outperform x86 at scale — built entirely in-house. Their on-device ML strategy means AI runs on your iPhone without hitting a server.",
      },
    },
    tags: [
      "Swift",
      "SwiftUI",
      "FoundationDB",
      "Core ML",
      "MLX",
      "CloudKit",
      "Metal",
    ],
  },
  {
    id: "microsoft",
    name: "Microsoft",
    tagline: "Empower every person on the planet",
    description:
      "Dominant enterprise software and cloud company with $245B+ annual revenue, serving 1B+ Windows users and 275M+ Office 365 subscribers.",
    category: "Enterprise Software & Cloud",
    color: "#00A4EF",
    logo: microsoft,
    users: "1B+ Windows users",
    founded: 1975,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          {
            name: "React",
            note: "Azure portal, Teams web, and Office web apps",
          },
          {
            name: "TypeScript",
            note: "Microsoft invented TypeScript — used everywhere",
          },
          {
            name: "Blazor (.NET)",
            note: "WebAssembly-based SPA framework from Microsoft",
          },
          { name: "Fluent UI", note: "Microsoft's open-source design system" },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          { name: "C#", note: "Primary language for all .NET services" },
          { name: "C++", note: "Windows OS, Office desktop, and Xbox" },
          { name: "Python", note: "AI/ML research and tooling" },
          {
            name: ".NET / ASP.NET Core",
            note: "Web API and microservices framework",
          },
        ],
      },
      database: {
        label: "Database",
        items: [
          {
            name: "Azure SQL / SQL Server",
            note: "Microsoft's flagship relational DB",
          },
          {
            name: "Azure Cosmos DB",
            note: "Multi-model globally distributed NoSQL",
          },
          {
            name: "Azure Table Storage",
            note: "NoSQL key-value at cloud scale",
          },
          {
            name: "SQL Server Analysis Services",
            note: "OLAP for enterprise analytics",
          },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          {
            name: "Azure",
            note: "Second-largest cloud at ~24% global market share",
          },
          {
            name: "Azure Kubernetes Service (AKS)",
            note: "Managed Kubernetes",
          },
          {
            name: "Azure DevOps",
            note: "CI/CD and project management platform",
          },
          {
            name: "Service Fabric",
            note: "Microsoft's microservices orchestration runtime",
          },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "Copilot (GPT-4 powered)",
            note: "AI embedded across Windows, Office, GitHub",
          },
          {
            name: "Azure OpenAI Service",
            note: "$13B investment — exclusive Azure-hosted OpenAI models",
          },
          {
            name: "ONNX Runtime",
            note: "Cross-platform ML inference engine (Microsoft-built)",
          },
          {
            name: "Power BI",
            note: "Self-service BI and data visualization platform",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          "Microsoft invented TypeScript, which is now the dominant language for web development. Azure runs in 60+ regions globally. Microsoft Teams went from 20M to 270M+ users during COVID — one of the most extreme corporate scaling events ever. Their $13B OpenAI partnership reshaped the entire AI industry, embedding Copilot across every product.",
      },
    },
    tags: [
      "C#",
      "TypeScript",
      "Azure",
      "Cosmos DB",
      "Copilot",
      ".NET",
      "Azure SQL",
    ],
  },
  {
    id: "vercel",
    name: "Vercel",
    tagline: "Build. Deploy. Ship.",
    description:
      "Frontend cloud and deployment platform used by 1M+ developers, known for creating Next.js.",
    category: "Developer Infrastructure",
    color: "#000000",
    logo: vercel,
    users: "1M+ developers",
    founded: 2015,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          {
            name: "Next.js",
            note: "Vercel invented Next.js — the dominant React framework",
          },
          { name: "React", note: "All Vercel dashboard and UI surfaces" },
          { name: "TypeScript", note: "Fully typed across all codebases" },
          {
            name: "Turbopack",
            note: "Vercel-built Rust-based Webpack replacement",
          },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          { name: "Node.js", note: "Serverless function runtime (primary)" },
          { name: "Rust", note: "Edge runtime and Turbopack bundler" },
          {
            name: "Go",
            note: "Infrastructure and deployment pipeline services",
          },
          {
            name: "Edge Runtime (V8)",
            note: "V8-based ultra-fast edge function execution",
          },
        ],
      },
      database: {
        label: "Database",
        items: [
          {
            name: "Vercel Postgres (Neon)",
            note: "Serverless Postgres via Neon partnership",
          },
          {
            name: "Vercel KV (Upstash Redis)",
            note: "Serverless Redis at the edge",
          },
          { name: "Vercel Blob (AWS S3)", note: "Large file storage layer" },
          {
            name: "PlanetScale / Turso",
            note: "Partner DBs optimized for Vercel edge deploys",
          },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          {
            name: "AWS (primarily)",
            note: "Primary cloud with multi-region Lambda functions",
          },
          {
            name: "Cloudflare Network",
            note: "Edge network for global CDN and edge functions",
          },
          {
            name: "Vercel Edge Network",
            note: "Custom CDN with 100+ PoPs globally",
          },
          {
            name: "GitHub / GitLab / Bitbucket",
            note: "Git-push-to-deploy integrations",
          },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "Vercel AI SDK",
            note: "Open-source TypeScript toolkit for LLM-powered apps",
          },
          {
            name: "v0 by Vercel",
            note: "Generative UI tool that writes React components from prompts",
          },
          {
            name: "Edge Config",
            note: "Ultra-low latency config for feature flags at edge",
          },
          {
            name: "Speed Insights",
            note: "Real User Monitoring powered by Vercel's own infra",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          "Vercel invented Next.js, which is now the most popular React framework used by ~40% of React projects. Their edge network serves billions of requests per day. Turbopack (their Webpack replacement) is 700x faster for large codebases. The Vercel AI SDK became the standard way to integrate LLMs into web apps, driving adoption from ChatGPT to startup products.",
      },
    },
    tags: [
      "Next.js",
      "React",
      "Rust",
      "Turbopack",
      "Edge Runtime",
      "AI SDK",
      "V8",
    ],
  },
  {
    id: "coinbase",
    name: "Coinbase",
    tagline: "The easiest place to buy and sell crypto",
    description:
      "Largest US crypto exchange with $6B+ revenue, serving 110M+ verified users and $250B+ assets on platform.",
    category: "Crypto & Web3",
    color: "#0052FF",
    logo: coinbase,
    users: "110M+ verified",
    founded: 2012,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "React", note: "Web trading interface and dashboard" },
          { name: "React Native", note: "iOS and Android apps" },
          { name: "TypeScript", note: "Typed frontend codebase" },
          {
            name: "GraphQL (Apollo)",
            note: "API query layer for trading data",
          },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          {
            name: "Ruby on Rails",
            note: "Original backend — still heavily used",
          },
          {
            name: "Go",
            note: "High-performance trading engine and wallet services",
          },
          { name: "Python", note: "Risk, compliance, and ML pipelines" },
          {
            name: "Solidity",
            note: "Smart contracts for Base (Coinbase L2) and DeFi",
          },
        ],
      },
      database: {
        label: "Database",
        items: [
          {
            name: "PostgreSQL",
            note: "User accounts, wallets, and transaction records",
          },
          {
            name: "DynamoDB",
            note: "Order book and high-throughput trading data",
          },
          {
            name: "Redis",
            note: "Real-time price feeds and session management",
          },
          {
            name: "Kafka",
            note: "Blockchain event streaming and trade events",
          },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          { name: "AWS", note: "Primary cloud infrastructure" },
          { name: "Kubernetes", note: "Microservices orchestration" },
          {
            name: "Base (L2 Chain)",
            note: "Coinbase's own Ethereum Layer 2 on OP Stack",
          },
          {
            name: "HSMs",
            note: "Hardware Security Modules for private key custody",
          },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "Fraud Detection ML",
            note: "Real-time transaction fraud scoring",
          },
          {
            name: "Compliance AI",
            note: "AML/KYC automated document and transaction analysis",
          },
          {
            name: "Price Prediction Models",
            note: "Internal volatility and liquidity models",
          },
          {
            name: "Apache Spark",
            note: "Blockchain data analysis and on-chain analytics",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          "Coinbase handles billions of blockchain transactions and processes $500B+ in quarterly trading volume. Their MPC (Multi-Party Computation) wallet system allows secure key storage without any single point of compromise. Base — their Ethereum L2 — became the fastest-growing L2 network, processing millions of daily transactions at sub-cent fees.",
      },
    },
    tags: [
      "Ruby",
      "Go",
      "Python",
      "Solidity",
      "DynamoDB",
      "Kafka",
      "AWS",
      "Base L2",
    ],
  },
  {
    id: "doordash",
    name: "DoorDash",
    tagline: "Your favorite food, delivered fast",
    description:
      "Leading US food delivery marketplace with 67%+ US market share, processing 2B+ orders annually.",
    category: "Food Delivery",
    color: "#FF3008",
    logo: dd,
    users: "37M+ active consumers",
    founded: 2013,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "React", note: "Consumer web and merchant portal" },
          { name: "React Native", note: "Consumer and Dasher mobile apps" },
          { name: "TypeScript", note: "Typed frontend development" },
          {
            name: "Kotlin (Android)",
            note: "Native Android for Dasher app performance",
          },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          {
            name: "Kotlin / JVM",
            note: "Core microservices after Python migration",
          },
          { name: "Python", note: "Original backend and ML services" },
          { name: "Go", note: "Real-time dispatch and location services" },
          { name: "Scala", note: "Data pipeline and stream processing" },
        ],
      },
      database: {
        label: "Database",
        items: [
          {
            name: "PostgreSQL (Patroni)",
            note: "Primary DB with HA via Patroni",
          },
          {
            name: "Apache Cassandra",
            note: "Order event history and Dasher location data",
          },
          {
            name: "Redis",
            note: "Real-time availability and session management",
          },
          {
            name: "Snowflake",
            note: "Data warehouse for analytics and reporting",
          },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          { name: "AWS", note: "Primary cloud infrastructure" },
          {
            name: "Kubernetes (EKS)",
            note: "Container orchestration on AWS EKS",
          },
          {
            name: "Apache Kafka",
            note: "Order event streaming and real-time logistics",
          },
          {
            name: "Envoy",
            note: "Service mesh for microservices communication",
          },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "Dispatch Optimization ML",
            note: "ML model that assigns dashers to orders in real time",
          },
          {
            name: "ETA Prediction",
            note: "Deep learning model for food prep and delivery time",
          },
          {
            name: "Sibyl (internal ML)",
            note: "DoorDash's internal ML prediction platform",
          },
          {
            name: "Apache Flink",
            note: "Real-time stream processing for order state machines",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          'DoorDash\'s dispatch algorithm simultaneously solves a real-time combinatorial optimization problem — matching Dashers to orders while minimizing delivery time across entire metro areas. Peak lunch/dinner traffic creates millions of location updates per minute. Their "Sibyl" ML platform runs thousands of predictions per second to power ETAs, recommendations, and pricing.',
      },
    },
    tags: [
      "Kotlin",
      "Go",
      "Python",
      "PostgreSQL",
      "Kafka",
      "AWS",
      "Flink",
      "Sibyl",
    ],
  },
  {
    id: "lyft",
    name: "Lyft",
    tagline: "Rides, bikes, and scooters",
    description:
      "Second-largest US rideshare platform with 40M+ active riders completing 700M+ rides annually.",
    category: "Transportation",
    color: "#FF00BF",
    logo: lyft,
    users: "40M+ active riders",
    founded: 2012,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "React Native", note: "Rider and Driver mobile apps" },
          { name: "React", note: "Web dashboard and internal tools" },
          { name: "TypeScript", note: "Typed frontend code" },
          { name: "Storybook", note: "Component library for design system" },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          {
            name: "Python",
            note: "Original primary language — Django-based services",
          },
          {
            name: "Go",
            note: "Real-time dispatch and high-throughput services",
          },
          { name: "Java", note: "Core ride-matching and payment services" },
          {
            name: "Apache Thrift",
            note: "IDL for internal service communication",
          },
        ],
      },
      database: {
        label: "Database",
        items: [
          { name: "MySQL", note: "Core relational data for rides and users" },
          {
            name: "Cassandra",
            note: "Driver location and time-series ride data",
          },
          {
            name: "Redis",
            note: "Geospatial driver lookup and real-time surge",
          },
          {
            name: "Hive / Presto",
            note: "Analytics and data warehouse queries",
          },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          { name: "AWS", note: "Primary cloud platform" },
          { name: "Kubernetes", note: "Microservices orchestration" },
          { name: "Envoy", note: "Service mesh and traffic management" },
          { name: "Kafka", note: "Event streaming for ride state machine" },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "Matchmaking ML",
            note: "Real-time driver-rider matching optimization",
          },
          { name: "Pricing Engine", note: "Dynamic surge pricing ML model" },
          {
            name: "Flyte (open-sourced)",
            note: "Lyft-built ML workflow orchestration platform",
          },
          {
            name: "Amundsen (open-sourced)",
            note: "Lyft-built data discovery and catalog tool",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          'Lyft open-sourced Flyte (ML workflow orchestration now used by Spotify, Freenome, and others) and Amundsen (data discovery, now at LF AI & Data). Their geospatial indexing system tracks driver location with meter-level precision across entire cities. Redis GEORADIUS commands power the "find nearby drivers" feature that runs millions of times per hour.',
      },
    },
    tags: ["Python", "Go", "Java", "Cassandra", "Kafka", "Flyte", "Amundsen"],
  },
  {
    id: "paypal",
    name: "PayPal",
    tagline: "The world's digital wallet",
    description:
      "The pioneer of digital payments — 430M+ active accounts, processing $1.36 trillion in payment volume annually across 200+ markets and 100+ currencies.",
    category: "Fintech",
    color: "#003087",
    logo: paypal,
    users: "430M+",
    founded: 1998,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          {
            name: "React.js",
            note: "Primary UI — migrated from legacy JSP templates ~2015",
          },
          {
            name: "Node.js (Kraken.js)",
            note: "PayPal's own Node framework for server-side rendering",
          },
          {
            name: "Marko",
            note: "PayPal's open-source streaming template engine for fast TTFB",
          },
          { name: "TypeScript", note: "Typed across modern frontend services" },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          {
            name: "Java",
            note: "Core payment processing & transaction engine",
          },
          {
            name: "Node.js",
            note: "Replaced Java for many mid-tier API services post-2013",
          },
          { name: "C++", note: "Low-level financial transaction components" },
          { name: "Scala", note: "Real-time data processing pipelines" },
        ],
      },
      database: {
        label: "Database",
        items: [
          {
            name: "Oracle DB",
            note: "Legacy core financial ledger (decades of financial data)",
          },
          {
            name: "MySQL (via Percona)",
            note: "High-scale transactional workloads",
          },
          {
            name: "Cassandra",
            note: "Distributed activity feeds & event logs",
          },
          {
            name: "Elasticsearch",
            note: "Transaction search, fraud query engine",
          },
          {
            name: "HBase",
            note: "Hadoop-based storage for big data analytics",
          },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          {
            name: "Private data centres",
            note: "Core — PayPal runs majority of infra on-premise for compliance",
          },
          {
            name: "AWS + Azure",
            note: "Hybrid cloud for burst capacity & modern services",
          },
          {
            name: "Kubernetes",
            note: "Container orchestration across 1000s of microservices",
          },
          {
            name: "Apache Kafka",
            note: "Event streaming — billions of events per day",
          },
          {
            name: "Consul + Envoy",
            note: "Service mesh & discovery across global DCs",
          },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "Custom fraud ML (LLM-augmented)",
            note: "Saves $700M+ annually — scores every transaction in <100ms",
          },
          {
            name: "Apache Spark",
            note: "Batch ML training on petabytes of transaction history",
          },
          {
            name: "TensorFlow + PyTorch",
            note: "Deep learning models for risk & recommendations",
          },
          { name: "Hadoop", note: "Petabyte-scale data lake for analytics" },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          "PayPal processes 40M+ transactions per day and must guarantee sub-second response globally. They pioneered moving from Java monolith to Node.js for their API tier — Node handled 2x the requests per second with 35% fewer files and 33% fewer lines of code than the Java equivalent. Their fraud engine runs a custom gradient-boosted model on every single transaction in under 100ms. Running mostly on private data centres (not public cloud) gives them the regulatory control required for global financial compliance in 200+ markets.",
      },
    },
    tags: [
      "Java",
      "Node.js",
      "React",
      "Kafka",
      "Cassandra",
      "Oracle",
      "Kubernetes",
    ],
  },
  {
    id: "bankofamerica",
    name: "Bank of America",
    tagline: "What would you like the power to do?",
    description:
      "One of the world's largest financial institutions — $3.3 trillion in assets, 69M consumer & business clients, and a digital banking platform with 57M verified users making it a top-10 most-visited US website.",
    category: "Finance",
    color: "#E31837",
    logo: boa,
    users: "57M digital",
    founded: 1904,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          {
            name: "React.js",
            note: "Modern web banking portal & account dashboard",
          },
          {
            name: "React Native",
            note: "iOS & Android mobile banking app (600M+ sessions/month)",
          },
          {
            name: "Angular",
            note: "Legacy internal tools & older portal sections",
          },
          {
            name: "Erica (custom UI)",
            note: "Proprietary AI assistant interface layer",
          },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          {
            name: "Java (Spring)",
            note: "Primary enterprise services — accounts, loans, cards",
          },
          {
            name: "COBOL",
            note: "Core mainframe banking still processes billions daily (IBM z-series)",
          },
          {
            name: "Python",
            note: "Data science, risk modelling & ML pipelines",
          },
          {
            name: "C++",
            note: "High-frequency trading & low-latency financial systems",
          },
          { name: "Node.js", note: "API gateway & modern microservices layer" },
        ],
      },
      database: {
        label: "Database",
        items: [
          {
            name: "IBM Db2 (mainframe)",
            note: "Core ledger — decades of financial records, regulatory requirement",
          },
          {
            name: "Oracle DB",
            note: "Secondary relational systems across business units",
          },
          {
            name: "Teradata",
            note: "Enterprise data warehouse for analytics & reporting",
          },
          { name: "MongoDB", note: "Modern microservices & document storage" },
          {
            name: "Redis",
            note: "Session management & real-time caching layer",
          },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          {
            name: "Private data centres (8)",
            note: "Primary — owns massive on-premise infra globally",
          },
          {
            name: "AWS",
            note: "Strategic cloud partner for non-core workloads",
          },
          {
            name: "Microsoft Azure",
            note: "Enterprise SaaS & Teams integration",
          },
          {
            name: "IBM Z-series mainframes",
            note: "Core banking backbone — never going away",
          },
          { name: "Kubernetes", note: "Modern containerised microservices" },
          {
            name: "Zscaler",
            note: "Zero trust network access across 200K+ employees",
          },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "Erica (AI assistant)",
            note: "Proprietary NLP assistant — 2B+ client interactions, 37M users",
          },
          {
            name: "CashPro AI",
            note: "AI for corporate treasury clients — anomaly detection & forecasting",
          },
          {
            name: "Custom AML/fraud models",
            note: "Real-time transaction monitoring across $3T in assets",
          },
          {
            name: "Apache Spark",
            note: "Large-scale risk & analytics data processing",
          },
          {
            name: "Hadoop / HDFS",
            note: "Petabyte data lake across business units",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          "Bank of America is a perfect case study in the two-speed architecture — a decades-old COBOL mainframe core that still reliably processes the majority of US banking transactions, wrapped in a modern microservices layer that powers their award-winning digital products. Their Erica AI assistant reached 2 billion interactions faster than any bank virtual assistant in history. The real engineering challenge is regulatory: every architectural decision must satisfy OCC, Federal Reserve, and FDIC compliance simultaneously. They invest $11B+ in technology annually — more than most tech companies.",
      },
    },
    tags: [
      "COBOL",
      "Java",
      "React",
      "Mainframe",
      "AWS",
      "Erica AI",
      "Teradata",
    ],
  },
  {
    id: "instacart",
    name: "Instacart",
    tagline: "Groceries, delivered",
    description:
      "North America's leading grocery delivery platform with 1,400+ retail partners and 14M+ monthly active users.",
    category: "Grocery Delivery",
    color: "#43B02A",
    logo: isc,
    users: "14M+ monthly active",
    founded: 2012,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "React", note: "Consumer storefront and shopper web app" },
          { name: "React Native", note: "Consumer and Shopper mobile apps" },
          { name: "TypeScript", note: "Typed frontend codebase" },
          { name: "Next.js", note: "Storefront SSR for SEO performance" },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          {
            name: "Ruby on Rails",
            note: "Original and still-primary backend monolith",
          },
          { name: "Go", note: "High-performance routing and catalog services" },
          { name: "Python", note: "ML pipelines and data science" },
          { name: "GraphQL", note: "API layer for frontend communication" },
        ],
      },
      database: {
        label: "Database",
        items: [
          { name: "PostgreSQL", note: "Primary store for orders and catalog" },
          {
            name: "Redis",
            note: "Real-time inventory availability and sessions",
          },
          {
            name: "Elasticsearch",
            note: "Product search across millions of grocery items",
          },
          { name: "Snowflake", note: "Retailer analytics and reporting" },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          { name: "AWS", note: "Primary cloud infrastructure" },
          { name: "Kubernetes", note: "Microservices orchestration" },
          { name: "Kafka", note: "Order event streaming and batch assignment" },
          { name: "Terraform", note: "Infrastructure as code" },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "Batch Assignment ML",
            note: "Assigns shoppers to orders optimally across a store",
          },
          {
            name: "Product Matching AI",
            note: "Matches same product across 1,400+ retailer catalogs",
          },
          {
            name: "Substitution Engine",
            note: "ML model recommends replacements for out-of-stock items",
          },
          {
            name: "Presto / Spark",
            note: "Large-scale catalog and order analytics",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          "Instacart's hardest technical problem is catalog normalization — a \"can of Campbell's Chicken Noodle Soup\" has hundreds of different product IDs, images, and names across 1,400+ retailers. Their ML-based product matching links all versions to a single canonical item. The batch assignment algorithm (assigning shoppers to grocery runs in real time) is a complex multi-constraint optimization problem.",
      },
    },
    tags: [
      "Ruby",
      "Go",
      "Python",
      "PostgreSQL",
      "Elasticsearch",
      "Kafka",
      "AWS",
    ],
  },
  {
    id: "twitch",
    name: "Twitch",
    tagline: "You are what you watch",
    description:
      "Leading live streaming platform with 35M+ daily visitors and 8M+ active streamers per month.",
    category: "Live Streaming",
    color: "#9146FF",
    logo: twitch,
    users: "35M+ daily visitors",
    founded: 2011,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "React", note: "Twitch.tv web interface" },
          { name: "TypeScript", note: "Typed frontend codebase" },
          { name: "HLS.js", note: "HTTP Live Streaming player implementation" },
          { name: "Electron", note: "Twitch Desktop App" },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          {
            name: "Go",
            note: "Core streaming infrastructure and API services",
          },
          { name: "Python", note: "ML, moderation, and data science" },
          {
            name: "Java",
            note: "Chat infrastructure and business logic services",
          },
          {
            name: "C++",
            note: "Video encoding/transcoding and low-level media",
          },
        ],
      },
      database: {
        label: "Database",
        items: [
          { name: "MySQL", note: "User accounts, streams, and channel data" },
          { name: "Redis", note: "Live viewer counts and chat pub/sub" },
          {
            name: "Cassandra",
            note: "Chat message history and stream analytics",
          },
          { name: "Elasticsearch", note: "Game and streamer discovery search" },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          { name: "AWS", note: "Amazon-owned — deep AWS integration" },
          { name: "CloudFront CDN", note: "Video delivery to global viewers" },
          { name: "AWS MediaLive", note: "Managed video transcoding at scale" },
          { name: "Kubernetes", note: "Microservices orchestration" },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          { name: "AutoMod", note: "ML-powered real-time chat moderation" },
          {
            name: "Game Detection ML",
            note: "Computer vision to auto-tag what game is being played",
          },
          {
            name: "Clip Generation",
            note: 'ML-detected "hype moments" for auto-clipping',
          },
          {
            name: "Apache Kafka",
            note: "Real-time viewer and engagement event streaming",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          "Twitch's live chat is one of the most demanding real-time systems ever built — a single popular stream can have 500,000 viewers all receiving the same messages simultaneously. Their IRC-based chat architecture was designed for millions of concurrent connections. Video transcoding happens in real-time to serve multiple quality levels (1080p, 720p, 480p) to every viewer within seconds of the streamer broadcasting.",
      },
    },
    tags: ["Go", "C++", "Java", "AWS", "Redis", "Cassandra", "HLS", "Kafka"],
  },
  {
    id: "canva",
    name: "Canva",
    tagline: "Design anything, publish anywhere",
    description:
      "Visual design platform with 170M+ monthly active users across 190 countries and $2.3B+ annual revenue.",
    category: "Design Tools",
    color: "#00C4CC",
    logo: canva,
    users: "170M+ monthly",
    founded: 2013,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "React", note: "Web editor and app surfaces" },
          { name: "TypeScript", note: "Fully typed large-scale frontend" },
          {
            name: "WebGL",
            note: "GPU-accelerated canvas rendering for design elements",
          },
          {
            name: "WebAssembly",
            note: "High-performance image/filter processing in browser",
          },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          { name: "Java", note: "Core design services and export pipeline" },
          {
            name: "Rust",
            note: "Image processing and performance-critical rendering",
          },
          { name: "Python", note: "ML and data science pipelines" },
          {
            name: "Node.js",
            note: "Some API services and real-time collaboration",
          },
        ],
      },
      database: {
        label: "Database",
        items: [
          { name: "PostgreSQL", note: "User and design metadata" },
          {
            name: "Amazon S3",
            note: "Design file storage — billions of files",
          },
          { name: "Elasticsearch", note: "Template and element search" },
          { name: "Redis", note: "Session management and collaboration state" },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          { name: "AWS", note: "Primary cloud infrastructure" },
          { name: "Kubernetes", note: "Microservices orchestration" },
          {
            name: "CloudFront",
            note: "Global CDN for design assets and fonts",
          },
          { name: "Lambda", note: "Serverless image processing and export" },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "Magic Studio",
            note: "Suite of AI design tools (text to image, background remover)",
          },
          {
            name: "Stable Diffusion (tuned)",
            note: "Fine-tuned diffusion models for brand-consistent generation",
          },
          {
            name: "Smart Resize AI",
            note: "ML-powered Magic Resize across formats",
          },
          {
            name: "Text Effects AI",
            note: "Real-time ML-based text styling generation",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          "Canva renders design canvases in real-time using WebGL — each element (text, image, shape) is a GPU-composited layer. Their export pipeline converts Canva designs to PDF/PNG/MP4 at massive scale — billions of exports processed monthly. Magic Resize uses ML to intelligently reposition design elements when adapting a design from Instagram post to billboard format.",
      },
    },
    tags: [
      "React",
      "Java",
      "Rust",
      "WebGL",
      "WebAssembly",
      "AWS",
      "Magic Studio",
    ],
  },
  {
    id: "oracle",
    name: "Oracle",
    tagline: "Integrated cloud applications and services",
    description:
      "World's second-largest software company with $53B+ annual revenue and the world's most deployed enterprise database.",
    category: "Enterprise Database & Cloud",
    color: "#C74634",
    logo: oracle,
    users: "430K+ customers",
    founded: 1977,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          {
            name: "React",
            note: "Oracle Cloud UI and newer application surfaces",
          },
          {
            name: "Oracle JET",
            note: "Oracle's own JavaScript extension toolkit (jQuery + Knockout)",
          },
          {
            name: "TypeScript",
            note: "New Oracle Cloud application development",
          },
          {
            name: "Oracle APEX",
            note: "Low-code web app builder built on top of Oracle DB",
          },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          {
            name: "Java",
            note: "Oracle owns Java — all major products built on JVM",
          },
          {
            name: "C / C++",
            note: "Oracle Database kernel and performance-critical layers",
          },
          {
            name: "PL/SQL",
            note: "Oracle's own procedural SQL language for DB stored procedures",
          },
          { name: "Python", note: "Oracle AI and data science services" },
        ],
      },
      database: {
        label: "Database",
        items: [
          {
            name: "Oracle Database (RDBMS)",
            note: "The world's most deployed enterprise RDBMS since 1979",
          },
          {
            name: "Oracle Autonomous Database",
            note: "Self-driving cloud DB with AI-powered administration",
          },
          {
            name: "MySQL (owned)",
            note: "Oracle acquired MySQL in 2010 via Sun Microsystems",
          },
          {
            name: "Oracle NoSQL",
            note: "Distributed key-value store for cloud applications",
          },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          {
            name: "OCI (Oracle Cloud Infrastructure)",
            note: "Third-party cloud — fast growing in enterprise and AI",
          },
          { name: "Kubernetes (OKE)", note: "Managed Kubernetes on OCI" },
          {
            name: "Oracle Exadata",
            note: "Purpose-built hardware optimized for Oracle Database",
          },
          {
            name: "Terraform (Oracle provider)",
            note: "OCI infrastructure as code",
          },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "Oracle AI Services",
            note: "Vision, Language, Speech, Anomaly Detection APIs on OCI",
          },
          {
            name: "Select AI",
            note: "Natural language to SQL inside Oracle Autonomous Database",
          },
          {
            name: "Oracle Analytics Cloud",
            note: "ML-powered BI and predictive analytics platform",
          },
          {
            name: "NVIDIA partnership",
            note: "OCI has massive GPU clusters for AI training (NVIDIA H100)",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          "Oracle Database has run the world's financial infrastructure for 45+ years — every major bank, airline, and government runs Oracle. Their Real Application Clusters (RAC) technology allows multiple servers to access a single database simultaneously — critical for zero-downtime systems. OCI's GenAI cluster is one of the largest NVIDIA GPU deployments in the world, powering projects like xAI's Grok.",
      },
    },
    tags: ["Java", "C++", "PL/SQL", "Oracle DB", "OCI", "MySQL", "Exadata"],
  },
  {
    id: "ibm",
    name: "IBM",
    tagline: "Let's create",
    description:
      "Global technology and consulting company with $62B+ annual revenue, serving 175 countries with cloud, AI, and mainframe solutions.",
    category: "Enterprise Technology",
    color: "#054ADA",
    logo: ibm,
    users: "175 countries",
    founded: 1911,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "React", note: "IBM Cloud and Watsonx UIs" },
          {
            name: "Carbon Design System",
            note: "IBM's own open-source React design system (highly popular)",
          },
          { name: "TypeScript", note: "Typed frontend development" },
          { name: "Angular", note: "Legacy IBM enterprise application UIs" },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          {
            name: "Java",
            note: "Dominant IBM language across WebSphere and Cloud",
          },
          { name: "Python", note: "Watson AI and data science tools" },
          { name: "Go", note: "IBM Cloud and Kubernetes-based services" },
          {
            name: "COBOL",
            note: "Mainframe — IBM Z still runs 95% of ATM transactions",
          },
        ],
      },
      database: {
        label: "Database",
        items: [
          {
            name: "IBM Db2",
            note: "Enterprise relational DB — still in 95% of top banks",
          },
          {
            name: "IBM IMS",
            note: "1960s hierarchical database — still processing $1T+/day in banking",
          },
          {
            name: "IBM Cloudant",
            note: "CouchDB-based NoSQL document DB on cloud",
          },
          {
            name: "Redis Enterprise",
            note: "Caching layer in IBM Cloud services",
          },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          {
            name: "IBM Cloud",
            note: "Hybrid cloud platform (4th largest cloud provider)",
          },
          {
            name: "Red Hat OpenShift",
            note: "Enterprise Kubernetes — IBM acquired Red Hat for $34B",
          },
          {
            name: "IBM Z (Mainframe)",
            note: "zSeries mainframes processing trillions of transactions",
          },
          {
            name: "IBM Power",
            note: "RISC servers for AIX and enterprise workloads",
          },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "Watsonx",
            note: "IBM's enterprise AI and data platform (LLM + data lake)",
          },
          {
            name: "Watson NLP",
            note: "Enterprise-grade NLP models for business applications",
          },
          {
            name: "IBM Granite",
            note: "IBM-built open-source LLM family for enterprise",
          },
          {
            name: "OpenPages",
            note: "AI-powered GRC (governance, risk, compliance) platform",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          "IBM's COBOL systems on mainframes process more financial transactions per day than any other computing platform — $3 trillion daily. The IBM Z mainframe handles 87% of all US credit card transactions. Despite being founded in 1911, IBM's Carbon Design System and Granite LLMs are among the most modern open-source contributions in enterprise technology today.",
      },
    },
    tags: [
      "Java",
      "COBOL",
      "IBM Db2",
      "OpenShift",
      "Watsonx",
      "Granite",
      "IBM Z",
    ],
  },
  {
    id: "tesla",
    name: "Tesla",
    tagline: "Accelerating the world's transition to sustainable energy",
    description:
      "Electric vehicle and energy company shipping 1.8M+ vehicles annually, with a tech stack rivaling any software company.",
    category: "Automotive & Energy",
    color: "#E31937",
    logo: tesla,
    users: "5M+ vehicles on road",
    founded: 2003,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          {
            name: "React",
            note: "Tesla app, web dashboard, and in-car browser UI",
          },
          {
            name: "React Native",
            note: "Tesla mobile app for iOS and Android",
          },
          {
            name: "Qt / QML",
            note: "In-car touchscreen UI for the center console",
          },
          { name: "TypeScript", note: "Web app development" },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          { name: "Python", note: "Autopilot ML training and data pipeline" },
          {
            name: "C / C++",
            note: "Vehicle firmware, real-time OS, and FSD computer",
          },
          { name: "Java", note: "Fleet management and telematics services" },
          {
            name: "Rust",
            note: "Safety-critical vehicle systems (growing usage)",
          },
        ],
      },
      database: {
        label: "Database",
        items: [
          { name: "PostgreSQL", note: "Core fleet, order, and customer data" },
          {
            name: "Cassandra",
            note: "Vehicle telemetry and time-series sensor data",
          },
          {
            name: "Apache Kafka",
            note: "Real-time vehicle event streaming from 5M+ cars",
          },
          {
            name: "TimescaleDB",
            note: "Time-series data for battery and charging analytics",
          },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          {
            name: "AWS + Own Infra",
            note: "Mix of AWS and Tesla-owned Dojo supercomputer clusters",
          },
          {
            name: "Dojo (Tesla)",
            note: "Custom AI supercomputer built for Autopilot training",
          },
          {
            name: "Kubernetes",
            note: "Microservices orchestration for cloud services",
          },
          {
            name: "OTA Infrastructure",
            note: "Over-the-air update system delivering software to 5M+ cars",
          },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "FSD (Full Self-Driving)",
            note: "Custom neural net running on Tesla's own AI chip (HW4)",
          },
          {
            name: "Tesla Vision",
            note: "Camera-only (no LIDAR) computer vision for Autopilot",
          },
          {
            name: "Dojo Training",
            note: "Custom video training on 160+ billion+ labeled frames",
          },
          { name: "PyTorch", note: "FSD neural network training framework" },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          "Tesla's OTA (over-the-air) update system delivered software upgrades to 5M+ cars simultaneously — more devices than most software companies have users. Each Tesla generates 1GB+ of data per hour from cameras, sensors, and CAN bus. Dojo is a custom AI supercomputer purpose-built for video training — one of the most powerful AI training systems in the world. FSD runs entirely on a custom chip Tesla designed in-house.",
      },
    },
    tags: ["C++", "Python", "Rust", "Kafka", "PyTorch", "Dojo", "FSD", "OTA"],
  },
  {
    id: "spacex",
    name: "SpaceX",
    tagline: "Making humanity multiplanetary",
    description:
      "Aerospace manufacturer and launch provider — the world's most active rocket company, launching 90+ missions per year.",
    category: "Aerospace",
    color: "#005288",
    logo: spacex,
    users: "NASA, DoD, 5M+ Starlink users",
    founded: 2002,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          {
            name: "React",
            note: "Mission control and Starlink customer dashboards",
          },
          { name: "TypeScript", note: "Typed frontend code" },
          {
            name: "WebGL / Three.js",
            note: "Real-time 3D rocket trajectory visualization",
          },
          {
            name: "Custom HMI",
            note: "Dragon capsule touchscreen UI (reportedly Linux + Chromium)",
          },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          {
            name: "C++",
            note: "Flight software — Falcon 9 and Starship avionics",
          },
          { name: "Python", note: "Simulation, data analysis, and tooling" },
          {
            name: "LabVIEW",
            note: "Test and measurement automation in ground support systems",
          },
          {
            name: "Linux (custom RTOS)",
            note: "Flight computers run a hardened Linux environment",
          },
        ],
      },
      database: {
        label: "Database",
        items: [
          {
            name: "InfluxDB",
            note: "Time-series telemetry data from rockets and Starlink satellites",
          },
          {
            name: "PostgreSQL",
            note: "Engineering data management and production tracking",
          },
          {
            name: "Apache Kafka",
            note: "Real-time sensor data streaming during launch",
          },
          { name: "Cassandra", note: "Historical flight data archive" },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          {
            name: "Own Data Centers",
            note: "Mission-critical operations run on private infra",
          },
          {
            name: "AWS (non-critical)",
            note: "Some services use AWS for non-real-time workloads",
          },
          {
            name: "Starlink LEO Network",
            note: "SpaceX operates their own satellite internet constellation",
          },
          {
            name: "Redundant ground stations",
            note: "Global ground station network for Falcon and Starlink",
          },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "Flight Simulations (CFD)",
            note: "Computational fluid dynamics using ML to predict aerodynamics",
          },
          {
            name: "Autonomous Landing ML",
            note: "Rocket booster landing uses reinforcement learning",
          },
          {
            name: "Starlink Collision Avoidance",
            note: "ML-based maneuver planning for 6,000+ satellite constellation",
          },
          {
            name: "Anomaly Detection",
            note: "Real-time sensor anomaly detection during launch operations",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          "SpaceX flight software (Falcon 9) runs on C++ with triple-redundant processors — if two of three computers disagree, the flight is aborted. The Dragon spacecraft's touchscreen UI reportedly runs on Chromium and Linux — modern web tech in space. Starlink processes terabytes of telemetry daily from 6,000+ satellites. Each Falcon 9 generates hundreds of thousands of sensor readings per second during flight.",
      },
    },
    tags: [
      "C++",
      "Python",
      "Linux",
      "Kafka",
      "InfluxDB",
      "WebGL",
      "Reinforcement Learning",
    ],
  },
  {
    id: "nvidia",
    name: "NVIDIA",
    tagline: "The way it's meant to be played — and computed",
    description:
      "GPU and AI computing company with $130B+ annual revenue — the infrastructure layer for the entire AI industry.",
    category: "Semiconductors & AI Infrastructure",
    color: "#76B900",
    logo: nvidia,
    users: "Every AI company on earth",
    founded: 1993,
    stack: {
      frontend: {
        label: "Frontend",
        items: [
          { name: "React", note: "NVIDIA developer portals and NGC catalog" },
          { name: "TypeScript", note: "Developer-facing web applications" },
          {
            name: "NVIDIA Omniverse UI",
            note: "Custom 3D collaborative simulation UI built on USD",
          },
          { name: "Electron", note: "GeForce Experience desktop app" },
        ],
      },
      backend: {
        label: "Backend",
        items: [
          {
            name: "CUDA (C++)",
            note: "NVIDIA's parallel computing platform — the core IP",
          },
          {
            name: "C++",
            note: "Drivers, runtime libraries, and AI frameworks",
          },
          {
            name: "Python",
            note: "ML toolkits, RAPIDS (GPU pandas), and cuDF",
          },
          {
            name: "Rust",
            note: "New systems programming for some platform services",
          },
        ],
      },
      database: {
        label: "Database",
        items: [
          {
            name: "cuDF (RAPIDS)",
            note: "GPU-accelerated DataFrame library (Pandas on GPU)",
          },
          {
            name: "FAISS",
            note: "NVIDIA-contributed library for fast GPU vector search",
          },
          {
            name: "PostgreSQL",
            note: "Internal product and customer data management",
          },
          {
            name: "NeMo Retriever",
            note: "GPU-optimized RAG pipeline for enterprise AI",
          },
        ],
      },
      cloud: {
        label: "Cloud & Infra",
        items: [
          { name: "DGX Cloud", note: "NVIDIA's own AI supercomputing cloud" },
          {
            name: "CUDA-X Libraries",
            note: "cuDNN, cuBLAS, TensorRT — GPU optimization libraries",
          },
          {
            name: "NVLink / InfiniBand",
            note: "High-bandwidth GPU interconnect for distributed training",
          },
          {
            name: "NCCL",
            note: "Collective communications library for multi-GPU training",
          },
        ],
      },
      ai: {
        label: "AI & Data",
        items: [
          {
            name: "TensorRT",
            note: "NVIDIA's inference optimization engine (10x speedup)",
          },
          {
            name: "NeMo",
            note: "LLM training framework for large-scale models",
          },
          {
            name: "Triton Inference Server",
            note: "Production-grade model serving framework",
          },
          {
            name: "DALI",
            note: "GPU-accelerated data loading pipeline for DL training",
          },
        ],
      },
      scaling: {
        label: "Scaling",
        description:
          "NVIDIA's CUDA platform is the most important proprietary software moat in modern computing — 90% of AI training happens on NVIDIA GPUs because CUDA has a 15-year head start. The H100 GPU (80GB HBM3) achieves 3,958 TFLOPS and is currently impossible to buy at list price. NVIDIA went from $300B to $3T market cap in 2 years — the fastest wealth creation in corporate history.",
      },
    },
    tags: [
      "CUDA",
      "C++",
      "Python",
      "TensorRT",
      "NeMo",
      "Triton",
      "NCCL",
      "cuDNN",
    ],
  },
];

export const categories = [
  "All",
  "Entertainment",
  "Music",
  "Social",
  "Messaging",
  "Transport",
  "Travel",
];

export const allTags = [
  ...new Set(
    apps.flatMap((a) =>
      a.stack
        ? [
            ...a.stack.frontend.items.map((i) => i.name),
            ...a.stack.backend.items.map((i) => i.name),
          ]
        : [],
    ),
  ),
].slice(0, 20);
