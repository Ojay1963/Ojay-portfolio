import { useState } from 'react'
import Button from '../components/Button.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Tag from '../components/Tag.jsx'
import InfoCard from '../components/InfoCard.jsx'
import SkillCard from '../components/SkillCard.jsx'
import ojCorporate from '../components/images/Oj Corporate.jpg'

const contactEmail = 'ojaydev2010@gmail.com'
const githubProfile = 'https://github.com/Ojay1963'
const linkedInProfile = 'https://www.linkedin.com/in/onos-eloho-7703a0aa'

const heroTags = ['React', 'Next.js', 'Node.js', 'MongoDB', 'Payments', 'SEO', 'Product UX']

const featuredProject = {
  eyebrow: 'Featured Build',
  title: 'Delxta',
  summary:
    'A full stack restaurant platform that combines table reservations, food ordering, online payments, and scheduled dine-in requests in one customer flow.',
  problem:
    'The main challenge was combining restaurant booking and order management without making the experience feel fragmented. Customers needed to reserve a table, place delivery orders, pay online, or schedule meals before arriving, all from one product.',
  approach: [
    'Built a React frontend that supports reservations, menu browsing, ordering, and checkout in a single user journey.',
    'Structured an Express API to manage bookings, orders, customer actions, and payment-related flows cleanly.',
    'Modeled bookings, meals, and order activity in MongoDB so dine-in and delivery features share one backend system.',
  ],
  stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Payments', 'Tailwind'],
  demo: 'https://delxta.vercel.app',
  github: 'https://github.com/Ojay1963/Delxta.git',
}

const projects = [
  {
    title: 'Delxta',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Payments'],
    role: 'Lead Full Stack Build',
    timeline: 'End-to-end product build',
    description:
      'A restaurant platform where customers can reserve tables, place delivery orders, pay online, and schedule meals in advance for dine-in.',
    problem:
      'The product needed to combine restaurant seating, online ordering, and payment in one flow, so customers can book ahead, pay, order for delivery, or prepare meals before arriving.',
    outcome:
      'Shows a stronger product-thinking case study than a standard CRUD app because reservations, ordering, and payments work inside one customer journey.',
    highlights: [
      'Table reservation flow for customers planning to dine in',
      'Ordering and payment flow for delivery and advance meal requests',
      'Backend structure for bookings, food orders, payments, and customer activity',
    ],
    imageSrc: '/project-previews/delxta.png',
    imageAlt: 'Screenshot preview of the Delxta restaurant website',
    demo: 'https://delxta.vercel.app',
    github: 'https://github.com/Ojay1963/Delxta.git',
  },
  {
    title: 'Pro-Find',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Payments'],
    role: 'Marketplace Product Build',
    timeline: 'Multi-role listing workflow',
    description:
      'An open real estate marketplace where agents and property owners can pay to list properties for house hunters to discover.',
    problem:
      'The product needed to support two-sided marketplace activity: paid property listings from agents or owners, and a clean search experience for people looking for homes.',
    outcome:
      'Demonstrates marketplace architecture, paid listing flows, and a cleaner search experience for users browsing property inventory.',
    highlights: [
      'Listing flow for agents and property owners to publish properties',
      'Property discovery experience designed for house hunters',
      'Backend structure for paid listings, account flows, and property data management',
    ],
    imageSrc: '/project-previews/pro-find.png',
    imageAlt: 'Screenshot preview of the ProFind real estate marketplace',
    demo: 'https://pro-find-nxw1.vercel.app',
    github: 'https://github.com/Ojay1963/Pro-find.git',
  },
  {
    title: 'Toolbox Hub',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'SEO', 'Utilities'],
    role: 'Frontend Product Build',
    timeline: 'Multi-page tools platform',
    description:
      'A free online tools platform that helps users handle image, PDF, text, generator, calculator, converter, and developer workflows from one searchable directory.',
    problem:
      'The challenge was organizing a large collection of utility pages in a way that still feels simple to browse, fast to search, and clear for users landing on individual tool pages from search engines.',
    outcome:
      'Shows product structure beyond a single app screen by combining category browsing, internal search, SEO-friendly landing pages, and a wide tool catalog in one cohesive experience.',
    highlights: [
      'Search-driven directory for quickly finding the right tool by task or keyword',
      'Category-based browsing across images, PDFs, text, generators, calculators, converters, and developer tools',
      'SEO-focused tool architecture with individually discoverable utility pages',
    ],
    imageSrc: '/project-previews/toolbox-hub.png',
    imageAlt: 'Screenshot preview of the Toolbox Hub online tools platform',
    demo: 'https://toolbox-hub-amber.vercel.app/',
    github: 'https://github.com/Ojay1963/toolbox-hub.git',
  },
  {
    title: 'OJ Devices',
    tags: ['React', 'E-commerce', 'Payments', 'Authentication', 'Admin Dashboard'],
    role: 'Full Stack Commerce Build',
    timeline: 'Catalog and checkout workflow',
    description:
      'An online store for premium laptops and accessories with product discovery, cart and checkout flows, account management, and delivery-focused ordering.',
    problem:
      'The product needed to make laptop and accessory shopping feel organized from browsing to payment, while also supporting customer accounts, wishlists, order tracking, and store-side management in one system.',
    outcome:
      'Highlights practical commerce architecture by combining searchable product catalogs, checkout and payment callbacks, OTP-based account flows, and admin tools for products, orders, and store settings.',
    highlights: [
      'Product catalog with search, filters, wishlist, comparison, and category browsing for laptops and accessories',
      'Cart, checkout, payment verification, and account order-tracking flows for customers',
      'Admin dashboard for managing products, orders, users, uploads, and store settings',
    ],
    imageSrc: '/project-previews/oj-devices.png',
    imageAlt: 'Screenshot preview of the OJ Devices laptop and accessories store',
    demo: 'https://laptop-acessory-client.vercel.app/',
    github: 'https://github.com/Ojay1963/LaptopAcessory.git',
  },
  {
    title: 'Ojay Motors',
    tags: ['React', 'Automotive', 'Inventory', 'Finance UI', 'Booking'],
    role: 'Frontend Product Build',
    timeline: 'Vehicle discovery platform',
    description:
      'A luxury vehicle platform for browsing premium cars in Nigeria, exploring detailed listings, and moving from discovery into finance and test-drive interest.',
    problem:
      'The product needed to present premium inventory in a way that feels polished and informative, while also helping users compare vehicles, estimate financing, and request appointments without losing context.',
    outcome:
      'Shows stronger interface depth than a basic catalog by combining inventory filtering, detailed vehicle pages, finance estimation, saved and compare flows, and appointment booking in one experience.',
    highlights: [
      'Inventory browsing with search, make and body-type filters, and price-range controls',
      'Vehicle detail pages with specs, gallery views, finance estimator, and compare or save actions',
      'Test-drive booking flow and dealership-style content for showroom, services, and contact journeys',
    ],
    imageSrc: '/project-previews/ojay-motors.png',
    imageAlt: 'Screenshot preview of the Ojay Motors luxury vehicle website',
    demo: 'https://cars-azure-gamma.vercel.app/',
    github: 'https://github.com/Ojay1963/Cars.git',
  },
  {
    title: 'Naija Tax Calculator',
    tags: ['React', 'Tax Tech', 'PAYE', 'Paystack', 'Authentication'],
    role: 'Product Utility Build',
    timeline: 'Calculator and paid-service workflow',
    description:
      'A Nigerian tax platform that helps users estimate PAYE and company tax, then move into paid reports or consultations when they need reviewed output or human guidance.',
    problem:
      'The challenge was making tax estimation easier for users while still supporting more serious follow-up needs like printable reports, consultations, account management, and payment-backed service requests.',
    outcome:
      'Shows stronger product depth than a basic calculator by combining estimation flows, educational guidance, account features, and monetized tax services in one platform.',
    highlights: [
      'Calculator flows for Nigerian PAYE and company-tax estimates with practical result breakdowns',
      'Paid report and consultation workflows connected to Paystack for premium tax services',
      'Account system with registration, email verification, password reset, and dashboard access',
    ],
    imageSrc: '/project-previews/naija-tax-calculator.png',
    imageAlt: 'Screenshot preview of the Naija Tax Calculator application',
    demo: 'https://nigeria-tax-calculator-client.vercel.app/calculator',
    github: 'https://github.com/Ojay1963/Nigeria-Tax-calculator.git',
  },
]

const infoCards = [
  {
    title: 'Product Builds',
    description: 'Shipping marketplaces, booking systems, e-commerce flows, and utility platforms people can actually use.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 5H20V19H4V5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path d="M8 9H16M8 13H14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Commerce & Payments',
    description: 'Designing product catalogs, checkout experiences, payment flows, and customer account journeys.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5 6V12C5 13.7 8.1 15 12 15C15.9 15 19 13.7 19 12V6" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5 12V18C5 19.7 8.1 21 12 21C15.9 21 19 19.7 19 18V12" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: 'Search & Discovery',
    description: 'Improving how users browse listings, discover tools, filter content, and move through product workflows.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="8" cy="7" r="1" fill="currentColor" />
        <circle cx="8" cy="12" r="1" fill="currentColor" />
        <circle cx="8" cy="17" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Auth & Admin Systems',
    description: 'Building secure account flows, OTP verification, dashboards, and admin controls for modern apps.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="10" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 10V7C8 4.8 9.8 3 12 3C14.2 3 16 4.8 16 7V10" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
]

const skills = [
  { title: 'Frontend', items: ['React', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind'] },
  { title: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'JWT Authentication', 'OTP Flows'] },
  { title: 'Database & Infra', items: ['MongoDB', 'Mongoose', 'MySQL', 'Vercel', 'Netlify'] },
  { title: 'Product Systems', items: ['Payments', 'SEO', 'Marketplaces', 'Booking Flows', 'Admin Dashboards'] },
]

const contactItems = [
  { label: 'Email', value: contactEmail, href: `mailto:${contactEmail}` },
  { label: 'Phone', value: '0702220013', href: 'tel:0702220013' },
  { label: 'GitHub', value: 'github.com/Ojay1963', href: githubProfile },
  { label: 'LinkedIn', value: 'linkedin.com/in/onos-eloho-7703a0aa', href: linkedInProfile },
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
      <section className="container hero fade-in">
        <div>
          <p className="hero-tagline">Hello, I&apos;m</p>
          <h1 className="hero-title">
            Onos Jephtha <br />
            Eloho
          </h1>
          <p className="hero-role">I build full stack products that people can actually use.</p>
          <p className="hero-text">
            I&apos;m Onos Eloho, a full stack JavaScript developer focused on building product-driven web
            apps with React, Next.js, Node.js, and MongoDB. I design and ship marketplaces, booking flows,
            e-commerce systems, admin dashboards, and SEO-friendly utility platforms with clean frontend UX
            and reliable backend structure.
          </p>
          <div className="tag-row">
            {heroTags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <div className="hero-actions">
            <Button href="#projects" variant="primary">
              See My Work
            </Button>
            <Button href="#contact" variant="ghost">
              Let&apos;s Work Together
            </Button>
          </div>
          <div className="social-row">
            <a className="icon-btn" href={githubProfile} target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 19C4 20.5 4 16.5 2 16M22 16V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V4C2 2.9 2.9 2 4 2H14L22 10V16Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              className="icon-btn"
              href={linkedInProfile}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M16 8C18.2 8 20 9.8 20 12V19H16V12C16 10.9 15.1 10 14 10C12.9 10 12 10.9 12 12V19H8V12C8 9.8 9.8 8 12 8H16Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M4 9H4.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M4 13V19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </a>
            <a className="icon-btn" href={`mailto:${contactEmail}`} aria-label="Email">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6H20V18H4V6Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <path d="M4 7L12 13L20 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>
        <div className="hero-card">
          <img src={ojCorporate} alt="Onos Jephtha Eloho" />
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <SectionTitle>Full Stack Projects</SectionTitle>
          <article className="featured-project glass fade-in">
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
              <h4>What I built</h4>
              <ul className="featured-project-list">
                {featuredProject.approach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="project-actions">
                <Button href={featuredProject.demo} variant="primary">
                  Live Demo
                </Button>
                <Button href={featuredProject.github} variant="ghost">
                  View Code
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

      <section className="section" id="about">
        <div className="container">
          <SectionTitle>About Me</SectionTitle>
          <div className="about-grid">
            <div className="fade-in">
              <p className="muted">
                I&apos;m a full-stack JavaScript developer focused on building modern web products from idea
                to deployment. My work covers restaurant booking platforms, real estate marketplaces,
                e-commerce storefronts, automotive inventory experiences, tax tools, and SEO-driven utility
                products.
              </p>
              <p className="muted">
                I enjoy solving product problems that sit between frontend experience and backend logic:
                helping users browse inventory, make payments, manage accounts, request services, or find
                the right tool quickly. I care about clarity, structure, and making complex workflows feel
                simple.
              </p>
              <p className="muted">
                My stack is strongest around React, Next.js, Node.js, Express, MongoDB, authentication, and
                payment-backed product flows. I&apos;m currently open to remote full stack roles where I can
                keep building useful, scalable customer-facing products.
              </p>
            </div>
            <div className="info-grid">
              {infoCards.map((card) => (
                <InfoCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="container">
          <SectionTitle>Skills</SectionTitle>
          <div className="skills-grid">
            {skills.map((skill) => (
              <SkillCard key={skill.title} {...skill} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="container">
          <SectionTitle>Experience</SectionTitle>
          <div className="experience">
            <div className="experience-card glass fade-in">
              <h4>Full Stack Developer</h4>
              <small>Personal Projects</small>
              <div className="muted">1 year</div>
              <ul className="experience-list">
                <li>Built and deployed product-focused apps including booking systems, marketplaces, online stores, and service platforms.</li>
                <li>Implemented authentication, OTP verification, dashboards, and payment-backed user journeys across multiple projects.</li>
                <li>Designed APIs and data structures for reservations, listings, tax calculations, orders, and customer accounts.</li>
                <li>Shipped frontend applications on Vercel and Netlify with real project demos and production-style portfolio presentation.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <SectionTitle>Contact</SectionTitle>
          <div className="contact-grid">
            <div className="fade-in">
              <p className="muted">
                I&apos;m currently open to remote full stack developer opportunities and product-focused
                freelance work. Feel free to reach out if you&apos;d like to discuss a marketplace,
                dashboard, booking platform, e-commerce build, or utility product.
              </p>
              <div className="contact-list">
                {contactItems.map((item) => (
                  <a key={item.label} className="contact-card glass" href={item.href}>
                    <div className="icon-btn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M4 6H20V18H4V6Z"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinejoin="round"
                        />
                        <path d="M4 7L12 13L20 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <div>{item.label}</div>
                      <div className="muted">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <form className="form glass fade-in" onSubmit={handleSubmit} noValidate>
              <div className="form-header">
                <p className="form-eyebrow">Send a Message</p>
                <h3>Let&apos;s talk about your project</h3>
                <p className="muted">
                  Share a few details and I&apos;ll get back to you as soon as I can.
                </p>
              </div>
              <div className="form-field">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  placeholder="Your full name"
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
                  placeholder="you@example.com"
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
                  placeholder="Tell me about the product, feature, or role you have in mind."
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
