import { useEffect, useState } from 'react'
import Button from '../components/Button.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Tag from '../components/Tag.jsx'
import InfoCard from '../components/InfoCard.jsx'
import SkillCard from '../components/SkillCard.jsx'
import ojCorporate from '../components/images/Oj Corporate.jpg'

const contactEmail = 'ojaydev2010@gmail.com'
const githubProfile = 'https://github.com/Ojay1963'
const linkedInProfile = 'https://www.linkedin.com/in/onoseloho/'

const heroTags = ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'CI']

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
}

const projects = [
  {
    title: 'Delxta',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Payments'],
    description:
      'A restaurant platform where customers can reserve tables, place delivery orders, pay online, and schedule meals in advance for dine-in.',
    problem:
      'The product needed to combine restaurant seating, online ordering, and payment in one flow, so customers can book ahead, pay, order for delivery, or prepare meals before arriving.',
    highlights: [
      'Table reservation flow for customers planning to dine in',
      'Ordering and payment flow for delivery and advance meal requests',
      'Backend structure for bookings, food orders, payments, and customer activity',
    ],
    imageSrc: 'https://image.thum.io/get/png/noanimate/width/1200/https://delxta.vercel.app',
    imageAlt: 'Screenshot preview of the Delxta restaurant website',
    demo: 'https://delxta.vercel.app',
  },
  {
    title: 'ProFind Real Estate Marketplace',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Payments'],
    description:
      'An open real estate marketplace where agents and property owners can pay to list properties for house hunters to discover.',
    problem:
      'The product needed to support two-sided marketplace activity: paid property listings from agents or owners, and a clean search experience for people looking for homes.',
    highlights: [
      'Listing flow for agents and property owners to publish properties',
      'Property discovery experience designed for house hunters',
      'Backend structure for paid listings, account flows, and property data management',
    ],
    imageSrc: 'https://image.thum.io/get/png/noanimate/width/1200/https://pro-find-nxw1.vercel.app',
    imageAlt: 'Screenshot preview of the ProFind real estate marketplace',
    demo: 'https://pro-find-nxw1.vercel.app',
  },
  {
    title: 'Admin Dashboard and API',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Charts'],
    description:
      'An operations dashboard for monitoring application data, managing records, and surfacing trends through API-backed visualizations.',
    problem: 'The goal was to turn raw CRUD data into a dashboard that is easier to monitor and manage day to day.',
    highlights: [
      'Role-protected admin screens and API endpoints',
      'Dashboard widgets backed by live REST data',
      'Cleaner decision-making through charts and summary blocks',
    ],
    image:
      'linear-gradient(135deg, rgba(24, 32, 52, 0.95), rgba(24, 32, 52, 0.5)), url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80)',
  },
]

const infoCards = [
  {
    title: 'Full Stack Development',
    description: 'Building scalable web apps with modern frameworks and robust APIs.',
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
    title: 'Database Integration',
    description: 'Secure data modeling with MongoDB, SQL, and cloud-ready pipelines.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5 6V12C5 13.7 8.1 15 12 15C15.9 15 19 13.7 19 12V6" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5 12V18C5 19.7 8.1 21 12 21C15.9 21 19 19.7 19 18V12" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: 'REST API Design',
    description: 'Designing maintainable APIs with authentication and documentation.',
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
    title: 'Authentication Systems',
    description: 'JWT, OAuth, and role-based access control for modern apps.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="10" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 10V7C8 4.8 9.8 3 12 3C14.2 3 16 4.8 16 7V10" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
]

const skills = [
  { title: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind'] },
  { title: 'Backend', items: ['Node.js', 'Express', 'JWT Authentication', 'REST APIs'] },
  { title: 'Database', items: ['MongoDB', 'Mongoose', 'SQL Basics'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Postman', 'Vercel', 'Netlify'] },
]

const contactItems = [
  { label: 'Email', value: contactEmail, href: `mailto:${contactEmail}` },
  { label: 'Phone', value: '0702220013', href: 'tel:0702220013' },
  { label: 'GitHub', value: 'github.com/Ojay1963', href: githubProfile },
  { label: 'LinkedIn', value: 'linkedin.com/in/onoseloho', href: linkedInProfile },
]

function Home({ scrollTo }) {
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [statusMessage, setStatusMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (!scrollTo) return
    const target = document.getElementById(scrollTo)
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [scrollTo])

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
          <p className="hero-role">Full Stack Developer</p>
          <p className="hero-text">
            I build scalable web applications with React, Node.js, authentication systems, and database
            integration. Passionate about crafting efficient and user-friendly solutions.
          </p>
          <div className="tag-row">
            {heroTags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <div className="hero-actions">
            <Button to="/projects" variant="primary">
              View Projects
            </Button>
            <Button href={githubProfile} variant="ghost">
              GitHub Profile
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
                <Button href={githubProfile} variant="primary">
                  View GitHub Profile
                </Button>
                <Button to="/contact" variant="ghost">
                  Request Walkthrough
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
                I&apos;m a passionate full stack developer with 1 year of experience building modern web
                applications. I specialize in React for frontend development and Node.js with Express for
                backend services.
              </p>
              <p className="muted">
                My expertise includes creating robust REST APIs, implementing secure authentication systems
                with JWT, and seamless database integration with MongoDB. I focus on delivering scalable,
                maintainable solutions that solve real-world problems.
              </p>
              <p className="muted">
                I have experience building and deploying full stack applications from concept to production.
                I&apos;m always eager to learn new technologies and best practices. Currently open to remote
                full stack developer positions.
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
                <li>Built full stack applications with authentication using JWT and bcrypt.</li>
                <li>Designed and implemented REST APIs connected to React frontend.</li>
                <li>Managed database operations including CRUD functionality with MongoDB.</li>
                <li>Deployed frontend applications on Vercel and Netlify, backend on various platforms.</li>
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
                I&apos;m currently open to remote full stack developer opportunities. Feel free to reach out
                if you&apos;d like to discuss a project or just connect.
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
              <div>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" value={formValues.name} onChange={handleChange} />
                {errors.name && <div className="error">{errors.name}</div>}
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" value={formValues.email} onChange={handleChange} />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formValues.message}
                  onChange={handleChange}
                />
                {errors.message && <div className="error">{errors.message}</div>}
              </div>
              <Button type="submit" variant="primary">
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
