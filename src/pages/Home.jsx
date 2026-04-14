import { useState } from 'react'
import Button from '../components/Button.jsx'
import InfoCard from '../components/InfoCard.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import SkillCard from '../components/SkillCard.jsx'
import Tag from '../components/Tag.jsx'
import ojCorporate from '../components/images/Oj Corporate.jpg'

const contactEmail = 'ojaydev2010@gmail.com'
const githubProfile = 'https://github.com/Ojay1963'
const linkedInProfile = 'https://www.linkedin.com/in/onos-eloho-7703a0aa'
const whatsappLink = 'https://wa.me/2347082206013'

const heroTags = ['React', 'Next.js', 'Node.js', 'MongoDB', 'REST APIs', 'Payments', 'SEO']

const valuePoints = [
  {
    title: 'Available for freelance and contract work',
    description: 'Open to startup builds, feature delivery, product refactors, and long-term remote roles.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L14.9 8.6L21 9.5L16.5 13.8L17.6 20L12 17L6.4 20L7.5 13.8L3 9.5L9.1 8.6L12 3Z" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Fast turnaround with product thinking',
    description: 'I focus on what moves the product forward, not just shipping tickets without context.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: 'Clean, maintainable production code',
    description: 'Built for reliability, scalability, and handoff clarity across frontend and backend systems.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
]

const featuredProject = {
  eyebrow: 'Featured product build',
  title: 'ToolsHub',
  summary: 'A search-first utility platform that turns scattered micro-tools into a structured product users can actually discover and use.',
  problem:
    'Users needed a faster way to find the right image, PDF, text, calculator, converter, or developer tool without digging through a messy directory experience.',
  approach: [
    'Designed a search-led discovery flow so users can reach the right tool by intent, keyword, or category in fewer steps.',
    'Structured pages for SEO visibility, giving each tool a stronger chance to attract targeted traffic from search.',
    'Built a scalable frontend architecture that keeps a large utility catalog easy to browse and simple to extend.',
  ],
  stack: ['Next.js', 'React', 'Tailwind CSS', 'Search UX', 'SEO'],
  impact: [
    'Makes a large content surface feel organized instead of overwhelming.',
    'Supports both direct search landings and category-based browsing.',
    'Shows how I build for usability, discoverability, and growth at the same time.',
  ],
  demo: 'https://toolbox-hub-amber.vercel.app/',
  github: 'https://github.com/Ojay1963/toolbox-hub.git',
}

const projects = [
  {
    title: 'Delxta',
    kicker: 'Reservations, ordering, and payments',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Payments'],
    role: 'Full Stack Developer',
    timeline: 'Restaurant product platform',
    description: 'A restaurant platform that combines table booking, delivery ordering, online payments, and advance meal scheduling in one customer journey.',
    problem: 'I built the full flow for reservations, orders, payments, and backend activity management so customers can book or buy without friction.',
    outcome: 'This matters because the product reduces operational gaps between dine-in planning and digital ordering, creating a more useful customer experience.',
    highlights: [
      'Table reservation flow for dine-in planning',
      'Ordering and payment experience for delivery and scheduled meals',
      'Backend support for bookings, food orders, payments, and customer activity',
    ],
    imageSrc: '/project-previews/delxta.png',
    imageAlt: 'Screenshot preview of the Delxta restaurant platform',
    demo: 'https://delxta.vercel.app',
    github: 'https://github.com/Ojay1963/Delxta.git',
  },
  {
    title: 'Pro-Find',
    kicker: 'Marketplace architecture for property discovery',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Role-based listings'],
    role: 'Full Stack Developer',
    timeline: 'Real estate marketplace',
    description: 'An open property marketplace where agents and owners can pay to list homes while buyers and renters browse with clarity.',
    problem: 'I built paid listing flows and a clean search experience to support both sides of the marketplace without making discovery harder for house hunters.',
    outcome: 'This matters because a two-sided marketplace only works when publishing, search, and listing quality feel equally trustworthy.',
    highlights: [
      'Paid listing flow for agents and property owners',
      'Property discovery experience for buyers and renters',
      'Backend structure for listing management, accounts, and property data',
    ],
    imageSrc: '/project-previews/pro-find.png',
    imageAlt: 'Screenshot preview of the Pro-Find real estate marketplace',
    demo: 'https://pro-find-nxw1.vercel.app',
    github: 'https://github.com/Ojay1963/Pro-find.git',
  },
  {
    title: 'Naija Tax Calculator',
    kicker: 'Tax estimation with paid service conversion',
    tags: ['React', 'Tax Tech', 'PAYE', 'Paystack', 'Authentication'],
    role: 'Full Stack Developer',
    timeline: 'Calculator and service workflow',
    description: 'A Nigerian tax platform that helps users calculate PAYE and company tax, then move into paid reports or consultations when needed.',
    problem: 'I combined calculation logic, educational guidance, payments, and account flows so users can go from estimate to professional support in one system.',
    outcome: 'This matters because the product turns a utility into a revenue path by connecting helpful free tooling with premium follow-up services.',
    highlights: [
      'PAYE and company tax estimate flows with guided breakdowns',
      'Paid reports and consultation workflows connected to Paystack',
      'Registration, email verification, password reset, and dashboard access',
    ],
    imageSrc: '/project-previews/naija-tax-calculator.png',
    imageAlt: 'Screenshot preview of the Naija Tax Calculator application',
    demo: 'https://nigeria-tax-calculator-client.vercel.app/calculator',
    github: 'https://github.com/Ojay1963/Nigeria-Tax-calculator.git',
  },
  {
    title: 'Ojay Motors',
    kicker: 'Premium vehicle discovery and enquiry experience',
    tags: ['React', 'Automotive', 'Inventory', 'Finance UI', 'Booking'],
    role: 'Frontend Developer',
    timeline: 'Automotive inventory platform',
    description: 'A luxury vehicle platform for browsing premium cars, comparing inventory, estimating finance options, and booking test-drive interest.',
    problem: 'I built a polished vehicle discovery experience with filtering, listing detail views, finance estimation, and appointment actions so users can move from browsing to intent with less friction.',
    outcome: 'This matters because automotive products need both premium presentation and practical decision-making tools to help buyers compare options and take the next step.',
    highlights: [
      'Inventory browsing with search, make and body-type filters, and price controls',
      'Vehicle detail pages with specs, gallery views, finance estimator, and compare actions',
      'Test-drive booking flow and dealership-style content for showroom and service journeys',
    ],
    imageSrc: '/project-previews/ojay-motors.png',
    imageAlt: 'Screenshot preview of the Ojay Motors luxury vehicle platform',
    demo: 'https://cars-azure-gamma.vercel.app/',
    github: 'https://github.com/Ojay1963/Cars.git',
  },
]

const services = [
  {
    title: 'Full Stack Web Development',
    description: 'I design and build complete web applications from frontend interface to backend logic, data models, and deployment.',
    outcome: 'Best for startups and businesses that need a dependable product partner from idea to launch.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M4 6H20V16H4V6Z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9 20H15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M12 16V20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Frontend Development',
    description: 'I create responsive, polished user interfaces that feel credible, fast, and easy to navigate across devices.',
    outcome: 'Ideal when you need a better product experience, stronger conversion paths, or a premium redesign.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M5 5L3 12L5 19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 5L21 12L19 19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 4L10 20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Backend and API Integration',
    description: 'I build APIs, authentication flows, dashboards, and third-party integrations that support real-world product workflows.',
    outcome: 'Useful when your app needs reliable business logic, payments, accounts, or data handling behind the scenes.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="6" rx="6" ry="2.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6 6V12C6 13.4 8.7 14.5 12 14.5C15.3 14.5 18 13.4 18 12V6" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6 12V18C6 19.4 8.7 20.5 12 20.5C15.3 20.5 18 19.4 18 18V12" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: 'Dashboards and Admin Panels',
    description: 'I build internal tools that help teams manage products, users, orders, listings, content, and operational workflows.',
    outcome: 'A strong fit when the public-facing app is only half the product and your team needs internal efficiency too.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="13" y="4" width="7" height="4" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="13" y="10" width="7" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: 'Landing Pages for Startups',
    description: 'I craft conversion-focused landing pages that clearly communicate value and move visitors toward booking, buying, or contacting.',
    outcome: 'Helpful for founders who need sharper positioning, stronger trust signals, and better first impressions.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M4 19L20 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M7 5H20V18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Bug Fixing and Performance Optimization',
    description: 'I improve sluggish interfaces, unstable flows, and messy code paths so your product feels faster and more dependable.',
    outcome: 'Best when an existing product needs cleanup, debugging, accessibility improvements, or frontend/backend performance work.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 3V7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M8 7H16V13C16 15.2 14.2 17 12 17C9.8 17 8 15.2 8 13V7Z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9 20H15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
]

const skills = [
  { title: 'Frontend', items: ['React', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { title: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'JWT Auth', 'OTP Flows', 'Business Logic'] },
  { title: 'Database', items: ['MongoDB', 'Mongoose', 'MySQL', 'Schema Design', 'Data Modeling'] },
  { title: 'Tools and Deployment', items: ['Vite', 'Vercel', 'Netlify', 'FormSubmit', 'Responsive QA'] },
  { title: 'Version Control', items: ['Git', 'GitHub', 'Branch workflows', 'Deployment-ready handoff'] },
]

const workflow = [
  {
    step: '01',
    title: 'Clarify the product goal',
    description: 'I start by understanding the business problem, user flow, and success metric so the build solves something real.',
  },
  {
    step: '02',
    title: 'Design the right system',
    description: 'I map the interface, data flow, and technical structure needed to keep the product usable and scalable.',
  },
  {
    step: '03',
    title: 'Build with production quality',
    description: 'I ship responsive frontend experiences, clean backend logic, and reusable components that are easier to maintain.',
  },
  {
    step: '04',
    title: 'Launch and improve',
    description: 'I test the details, refine performance, and keep the final result focused on reliability, trust, and conversion.',
  },
]

const trustStats = [
  { value: '6+', label: 'production-style product builds' },
  { value: '5', label: 'core solution types across commerce, tools, SaaS, and marketplaces' },
  { value: '100%', label: 'focus on responsive, maintainable delivery' },
]

const aboutHighlights = [
  'I build real products, not just disconnected UI demos.',
  'I care deeply about performance, usability, and long-term maintainability.',
  'I work well with startups, founders, businesses, and remote teams that need a reliable builder.',
]

const contactItems = [
  { label: 'Email', value: contactEmail, href: `mailto:${contactEmail}` },
  { label: 'LinkedIn', value: 'linkedin.com/in/onos-eloho-7703a0aa', href: linkedInProfile },
  { label: 'GitHub', value: 'github.com/Ojay1963', href: githubProfile },
  { label: 'WhatsApp', value: '+234 708 220 6013', href: whatsappLink },
]

function Home() {
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [statusMessage, setStatusMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const nextErrors = {}
    if (!formValues.name.trim()) nextErrors.name = 'Name is required.'
    if (!formValues.email.trim()) nextErrors.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      nextErrors.email = 'Enter a valid email.'
    }
    if (!formValues.message.trim()) nextErrors.message = 'Message is required.'
    return nextErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    setStatusMessage('')

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formValues.name,
          email: formValues.email,
          message: formValues.message,
          _subject: `Portfolio enquiry from ${formValues.name}`,
          _captcha: 'false',
          _template: 'table',
        }),
      })

      if (!response.ok) {
        throw new Error('Unable to send message.')
      }

      setStatusMessage('Message sent successfully.')
      setFormValues({ name: '', email: '', message: '' })
    } catch {
      setStatusMessage('Message could not be sent right now. Please email me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div id="top">
      <section className="hero-shell">
        <div className="container hero">
          <div className="hero-copy fade-in">
            <div className="availability-pill">
              <span className="availability-dot" />
              Available for freelance and contract work
            </div>
            <p className="hero-tagline">Full stack developer for startups, businesses, and product teams</p>
            <h1 className="hero-title">Full Stack Developer Building Fast, Scalable Web Products for Startups and Businesses</h1>
            <p className="hero-role">
              I design and build responsive, production-ready web applications with modern frontend and backend technologies.
            </p>
            <p className="hero-text">
              I help teams turn product ideas, redesigns, and complex workflows into credible web experiences that are easier to use, easier to maintain, and ready for real users.
            </p>
            <div className="tag-row">
              {heroTags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <div className="hero-actions">
              <Button href="#projects" variant="primary">
                View Projects
              </Button>
              <Button href={`mailto:${contactEmail}`} variant="ghost">
                Hire Me
              </Button>
              <Button href="#contact" variant="ghost">
                Contact Me
              </Button>
            </div>
            <div className="hero-proof">
              <span>Responsive communication</span>
              <span>Fast turnaround</span>
              <span>Clean, maintainable code</span>
            </div>
          </div>

          <div className="hero-visual fade-in">
            <article className="hero-card">
              <div className="hero-card-image">
                <img src={ojCorporate} alt="Portrait of Onos Jephtha Eloho" />
              </div>
              <div className="hero-card-panel">
                <p>Trusted to build</p>
                <h2>Full-stack products with clear user flows and serious delivery quality.</h2>
                <div className="hero-mini-stats">
                  {trustStats.map((stat) => (
                    <div key={stat.label}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="intro">
        <div className="container">
          <SectionTitle
            eyebrow="Why clients hire me"
            title="I build products that solve real user and business problems"
            description="Beyond writing code, I focus on creating clear workflows, dependable architecture, and polished experiences that help teams launch with confidence."
            align="center"
          />
          <div className="info-grid value-grid">
            {valuePoints.map((card) => (
              <InfoCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <SectionTitle
            eyebrow="Featured projects"
            title="Selected full-stack work with stronger storytelling"
            description="Each project is presented around the problem solved, what I built, and why the outcome matters."
          />

          <article className="featured-project surface fade-in">
            <div>
              <p className="featured-project-eyebrow">{featuredProject.eyebrow}</p>
              <h3 className="featured-project-title">{featuredProject.title}</h3>
              <p className="featured-project-summary">{featuredProject.summary}</p>
              <p className="featured-project-copy">{featuredProject.problem}</p>
              <div className="project-tags">
                {featuredProject.stack.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>

            <div className="featured-project-panel">
              <div>
                <h4>What I built</h4>
                <ul className="featured-project-list">
                  {featuredProject.approach.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Why it matters</h4>
                <ul className="featured-project-list">
                  {featuredProject.impact.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="project-actions">
                <Button href={featuredProject.demo} variant="primary">
                  Live Demo
                </Button>
                <Button href={featuredProject.github} variant="ghost">
                  GitHub
                </Button>
              </div>
            </div>
          </article>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <SectionTitle
            eyebrow="Services"
            title="What I can help you build"
            description="Practical development services focused on shipping better products, improving customer experience, and supporting business growth."
          />
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="container">
          <SectionTitle
            eyebrow="Tech stack"
            title="Skills grouped around real product delivery"
            description="A modern full-stack toolkit for frontend interfaces, backend logic, data handling, deployment, and collaboration."
          />
          <div className="skills-grid">
            {skills.map((skill) => (
              <SkillCard key={skill.title} {...skill} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="container">
          <SectionTitle
            eyebrow="Workflow"
            title="How I approach product work"
            description="A simple process that keeps projects grounded in user value, technical quality, and clear communication."
          />
          <div className="workflow-grid">
            {workflow.map((item) => (
              <article key={item.step} className="workflow-card surface fade-in">
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container about-layout">
          <div>
            <SectionTitle
              eyebrow="About"
              title="A full stack developer focused on business-ready digital products"
              description="I build web products that are meant to work in the real world, not just look good in a portfolio screenshot."
            />
            <div className="about-copy fade-in">
              <p>
                I&apos;m a full stack developer who works across interface design, frontend engineering, backend logic, and product structure to build experiences that feel clear, trustworthy, and ready for growth.
              </p>
              <p>
                My work spans marketplaces, restaurant platforms, tax tools, e-commerce storefronts, utility products, and dashboards. I enjoy turning complicated requirements into simpler flows that users can understand quickly.
              </p>
              <p>
                Whether I&apos;m working with a founder, startup team, or business owner, I care about building something useful: fast enough to ship, polished enough to inspire trust, and structured well enough to maintain over time.
              </p>
            </div>
            <div className="about-points">
              {aboutHighlights.map((item) => (
                <div key={item} className="about-point">
                  <span />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="about-side">
            <div className="surface trust-panel fade-in">
              <p className="section-eyebrow">Why work with me</p>
              <h3>Built for clarity, momentum, and dependable delivery.</h3>
              <ul className="trust-list">
                <li>Strong communication from kickoff to launch</li>
                <li>Thoughtful UX and conversion-aware frontend decisions</li>
                <li>Maintainable code that is easier to extend and support</li>
                <li>Comfortable building customer-facing and admin-side systems</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section" id="testimonials">
        <div className="container">
          <SectionTitle
            eyebrow="Trust signals"
            title="A portfolio positioned for paid work"
            description="Clear proof points that support credibility for freelance clients, remote teams, and product-focused businesses."
            align="center"
          />
          <div className="trust-grid">
            <div className="surface testimonial-card fade-in">
              <p className="testimonial-quote">
                "I bring product thinking into development work, with a focus on usability, strong execution, and clear communication from start to finish."
              </p>
              <div className="testimonial-meta">
                <strong>How I work</strong>
                <span>Strategic thinking, dependable delivery, and a strong bias toward useful outcomes.</span>
              </div>
            </div>
            <div className="surface stats-panel fade-in">
              {trustStats.map((stat) => (
                <div key={stat.label} className="stat-row">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <div className="contact-cta surface fade-in">
            <div className="contact-cta-copy">
              <p className="section-eyebrow">Contact</p>
              <h2>Need a full stack developer who can build, refine, or ship your next product?</h2>
              <p>
                I&apos;m open to freelance projects, contract roles, and remote opportunities. If you need a polished interface, a working full-stack product, or help improving an existing app, let&apos;s talk.
              </p>
              <div className="contact-list">
                {contactItems.map((item) => (
                  <a key={item.label} className="contact-card" href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                    <div>
                      <div className="contact-label">{item.label}</div>
                      <div className="contact-value">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <form className="form" onSubmit={handleSubmit} noValidate>
              <div className="form-header">
                <p className="form-eyebrow">Start a conversation</p>
                <h3>Tell me what you&apos;re building</h3>
                <p className="muted">Share a few details and I&apos;ll reply as soon as I can.</p>
              </div>

              <div className="form-field">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                />
                {errors.name && <div className="error">{errors.name}</div>}
              </div>

              <div className="form-field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>

              <div className="form-field">
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formValues.message}
                  onChange={handleChange}
                />
                {errors.message && <div className="error">{errors.message}</div>}
              </div>

              <Button type="submit" variant="primary" className="form-submit">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              {statusMessage && <div className="success">{statusMessage}</div>}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
