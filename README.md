# Mahmoud Hachem — Software Architecture & Enterprise Solutions Consultant Portfolio

> High-performance, elegant, and responsive personal website designed for **GitHub Pages (`https://mhashem.github.io/`)**.

This site positions **Mahmoud Hachem** as an elite **Software Architecture Consultant, Solutions Architect, and Engineering Leader** with 12+ years of enterprise experience across Fortune 15 healthcare and Swiss enterprise environments.

---

## 🌟 Key Highlights & Sections

1. **Executive Hero Section**:
   - High-impact value proposition & verified metrics bar (12+ Years, ~65% Kafka OpEx cut, 1,000s of US hospitals powered).
   - Direct download link to the updated executive CV PDF.
   - One-click copy email button with clipboard toast notification.
2. **Consulting & Advisory Offerings**:
   - Enterprise Architecture & System Modernization (Monolith-to-Microservices, C4 models, DDD).
   - Event-Driven Architecture & Real-Time Streaming (Kafka, Confluent Cloud, Flink).
   - BFF & API Gateway Topologies.
   - Cloud Infrastructure Rationalization & FinOps (~65% annual savings case).
   - Fractional Architecture Leadership & Governance (ADRs, RFCs, OTTT/SMART coaching).
   - Regulated & High-Assurance Systems (Healthcare HIPAA, European Customs PKI).
3. **Interactive Architectural Blueprints**:
   - Visual architectural canvas with interactive tabs for:
     - *Event-Driven Analytics Mesh* (Hospital telemetry &rarr; Kafka &rarr; Kafka Streams &rarr; Elasticsearch).
     - *BFF & Decoupled Gateway Topology* (Client apps &rarr; API Gateway &rarr; BFF &rarr; Domain services).
     - *Cloud Streaming Migration Pipeline* (Self-hosted &rarr; MirrorMaker 2 &rarr; Confluent Cloud).
4. **Featured Enterprise Case Studies**:
   - Next-Gen Event-Driven Healthcare Reporting Platform (Cardinal Health / US Hospitals).
   - Enterprise Kafka Modernization & ~65% Cost Savings (Confluent Cloud migration).
   - Swiss E-Commerce & Logistics Microservices Transition (Sword Group / LeShop.ch).
   - Security-Critical Digitally Signed Customs Transit Engine (Sword Group / SGS TransitNet).
5. **Career Milestones & Leadership Journey**:
   - Verified timeline across Cardinal Health (Team Lead & Staff Software Engineer), Sword Group (Senior Consultant), Voicelynx (Full Stack Developer), and Lebanese University (Master & Bachelor degrees).
6. **Technical Competencies Radar**:
   - Visual competency bars across Architecture & Systems, Streaming & Event Mesh, Backend & Languages (Java/Spring Boot), Data & Search (Elasticsearch), Cloud & DevOps, and Leadership & Delivery.
7. **Advisory Engagement Models**:
   - Diagnostic: Architecture Assessment & Audit (1-2 Weeks).
   - Transformation: Architecture Modernization Sprint (4-12 Weeks).
   - Strategic: Fractional Architecture Advisory (Monthly Retainer).
8. **Contact & Structured Inquiry Generator**:
   - Interactive inquiry form that automatically builds a pre-filled advisory email for your inbox.
   - Quick direct links to LinkedIn, GitHub, phone, and email.
9. **Dark / Light Theme Toggle**:
   - Polished executive dark theme (default) and crisp light theme with instant persistence.

---

## 📁 Project Structure

```text
mhashem/
├── assets/
│   ├── css/
│   │   └── styles.css             # Responsive styling & theme variables
│   ├── js/
│   │   └── main.js                # Blueprint tabs, theme toggle, copy email & inquiry generator
│   ├── img/
│   │   ├── avatar.jpg             # High-resolution portrait avatar
│   │   └── favicon.svg            # Crisp geometric monogram favicon
│   └── Mahmoud_Hachem_CV.pdf      # Downloadable executive CV
├── index.html                     # Semantic HTML5 with JSON-LD & OpenGraph meta tags
├── robots.txt                     # SEO crawling rules
├── sitemap.xml                    # Search engine sitemap
└── README.md                      # Documentation & deployment guide
```

---

## 🚀 Local Preview

To preview the website locally on your Mac, run:

```bash
# Using Python 3's built-in HTTP server:
python3 -m http.server 8000

# Or using npx serve:
npx serve .
```

Open [http://localhost:8000](http://localhost:8000) in your browser.

---

## 🌐 Deploying to GitHub Pages (`mhashem.github.io`)

Because this project is built with vanilla HTML5, CSS3, and JavaScript, **no build step is required**. It deploys instantly to GitHub Pages.

### Option A: Create `mhashem.github.io` directly via GitHub CLI (`gh`)

From within this directory (`/Users/mahmoud.hachem/sandbox/mhashem`):

```bash
# 1. Initialize git repository
git init -b main

# 2. Stage all files
git add .

# 3. Create initial commit
git commit -m "feat: initial release of Mahmoud Hachem consultant portfolio"

# 4. Create the public repository on GitHub and push
gh repo create mhashem.github.io --public --source=. --push

# 5. Enable GitHub Pages from the main branch
gh repo edit --enable-pages --pages-branch main
```

Your site will be live immediately at:
👉 **`https://mhashem.github.io/`**

---

### Option B: Using Custom Domain (e.g. `mahmoudhachem.dev`)

If you want to use your custom domain:
1. Add a `CNAME` file containing your domain:
   ```bash
   echo "mahmoudhachem.dev" > CNAME
   git add CNAME
   git commit -m "Add custom domain CNAME"
   git push
   ```
2. In your DNS provider (e.g. Cloudflare, Namecheap, Google Domains), point your DNS:
   - For apex domain (`mahmoudhachem.dev`): A records pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - For `www`: CNAME pointing to `mhashem.github.io`.
