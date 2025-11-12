import React, { useMemo, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Dumbbell, Phone, Mail, MapPin, Instagram, Facebook, Youtube, Clock, ChevronDown, Check, MessageCircle } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Transformations', href: '#transformations' },
  { label: 'Plans', href: '#plans' },
  { label: 'Timings', href: '#timings' },
  { label: 'Contact', href: '#contact' },
]

const sectionVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const OWNER = {
  phoneIntl: '+917668222021',
  email: 'krishpersonal6@gmail.com',
  displayPhone: '+91 76682 22021',
}

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-full bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2">
          <div className="flex items-center gap-2 text-white">
            <Dumbbell className="h-5 w-5 text-orange-500" />
            <span className="font-bold tracking-wide">IronPulse</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-200 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#plans" className="hidden sm:inline-flex rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-orange-600 transition-colors">
            Join Now
          </a>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/90 pointer-events-none" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Train Hard. <span className="text-orange-500">Stay Fit.</span> Live Strong.
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              A premium, results-driven gym with world-class trainers, top equipment, and an empowering community.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#plans" className="inline-flex items-center rounded-full bg-orange-500 px-6 py-3 text-white font-semibold shadow-lg hover:bg-orange-600 transition">
                Join Now
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-white font-semibold hover:bg:white/10 hover:bg-white/10 transition">
                Free Trial
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-4 left-6 text-white/70 text-xs sm:text-sm tracking-wide">
        gymsite prototype by <span className="text-white font-semibold">krish sharma</span>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hidden sm:flex flex-col items-center">
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="relative bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Stronger bodies. Sharper minds.</h2>
            <p className="mt-4 text-gray-300">
              Our vision is simple: create an inspiring space where anyone can unlock their peak performance. From strength and conditioning to functional training and HIIT, we designed an environment that motivates you to show up and go hard.
            </p>
            <ul className="mt-6 space-y-3 text-gray-200">
              <li className="flex items-start gap-3"><Check className="h-5 w-5 text-orange-500 mt-0.5" /> Elite-grade equipment and clean, spacious floors</li>
              <li className="flex items-start gap-3"><Check className="h-5 w-5 text-orange-500 mt-0.5" /> Certified coaches with personalized programs</li>
              <li className="flex items-start gap-3"><Check className="h-5 w-5 text-orange-500 mt-0.5" /> Recovery zone, showers, and smoothie bar</li>
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <img className="col-span-2 h-64 w-full rounded-xl object-cover" src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1200&auto=format&fit=crop" alt="Gym interior" />
            <img className="h-64 w-full rounded-xl object-cover" src="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1200&auto=format&fit=crop" alt="Equipment" />
            <img className="h-40 w-full rounded-xl object-cover" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop" alt="Workout" />
            <img className="col-span-2 h-40 w-full rounded-xl object-cover" src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=1200&auto=format&fit=crop" alt="Training" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Trainers() {
  const trainers = [
    { name: 'Alex Carter', role: 'Strength & Conditioning', img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1200&auto=format&fit=crop', bio: 'Powerlifting specialist, progressive overload, technique-first.' },
    { name: 'Mia Lopez', role: 'HIIT & Fat Loss', img: 'https://images.unsplash.com/photo-1554344728-77cf90d9ed26?q=80&w=1200&auto=format&fit=crop', bio: 'High-energy sessions designed to torch calories and build endurance.' },
    { name: 'Jordan Kim', role: 'Functional & Mobility', img: 'https://images.unsplash.com/photo-1534367610401-9f85d1140e41?q=80&w=1200&auto=format&fit=crop', bio: 'Movement quality, injury prevention, and athletic performance.' },
    { name: 'Sara Blake', role: 'Nutrition & Coaching', img: 'https://images.unsplash.com/photo-1544717305-996b815c338c?q=80&w=1200&auto=format&fit=crop', bio: 'Science-backed nutrition plans tailored for your goals.' },
  ]

  return (
    <section id="trainers" className="bg-neutral-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold text-white">
          Meet the Trainers
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t) => (
            <motion.div key={t.name} variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true }} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4 hover:from-white/10 transition">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <img src={t.img} alt={t.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-white">{t.name}</h3>
                <p className="text-orange-500 text-sm">{t.role}</p>
                <p className="mt-2 text-sm text-gray-300">{t.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Transformations() {
  const items = [
    { before: 'https://images.unsplash.com/photo-1596357395104-5b6b5d4ac143?q=80&w=1200&auto=format&fit=crop', after: 'https://images.unsplash.com/photo-1594385208974-c83f31f3d1bf?q=80&w=1200&auto=format&fit=crop', caption: '12 weeks. -18 lbs. +Confidence.' },
    { before: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=1200&auto=format&fit=crop', after: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop', caption: 'Stronger every day.' },
    { before: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=1200&auto=format&fit=crop', after: 'https://images.unsplash.com/photo-1518459031867-a89b944bffe0?q=80&w=1200&auto=format&fit=crop', caption: 'Lean. Athletic. Powerful.' },
  ]
  return (
    <section id="transformations" className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold text-white">
          Transformations
        </motion.h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((i, idx) => (
            <motion.div key={idx} variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true }} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="grid grid-cols-2">
                <img src={i.before} alt="Before" className="h-56 w-full object-cover" />
                <img src={i.after} alt="After" className="h-56 w-full object-cover" />
              </div>
              <div className="p-4 text-center text-gray-200">{i.caption}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Plans({ selectedPlan, onSelect }) {
  const plans = useMemo(() => ([
    {
      name: 'Basic', price: '$29/mo', features: ['Gym floor access', 'Locker room', 'Group classes (limited)'],
    },
    {
      name: 'Pro', price: '$59/mo', highlight: true, features: ['All classes included', 'Personalized plan', 'Sauna & recovery zone'],
    },
    {
      name: 'Premium', price: '$89/mo', features: ['1:1 coaching (monthly)', 'Body composition analysis', 'Priority support'],
    },
  ]), [])

  return (
    <section id="plans" className="bg-neutral-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold text-white text-center">
          Membership Plans
        </motion.h2>
        <div className="mt-4 text-center text-gray-400">Select a plan to proceed</div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p) => {
            const isActive = selectedPlan === p.name
            return (
              <motion.button
                type="button"
                key={p.name}
                onClick={() => onSelect(p.name)}
                variants={sectionVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={`text-left rounded-2xl border bg-gradient-to-b p-6 transition focus:outline-none ${isActive ? 'ring-2 ring-orange-500 border-orange-500/60 from-orange-500/10 to-transparent shadow-[0_0_0_1px_rgba(255,255,255,0.06)]' : (p.highlight ? 'border-orange-500/60 from-orange-500/10 to-transparent' : 'border-white/10 from-white/5 to-transparent')}`}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                  <span className="text-2xl font-extrabold text-orange-500">{p.price}</span>
                </div>
                <ul className="mt-6 space-y-3 text-gray-200">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2"><Check className="h-5 w-5 text-orange-500 mt-0.5" /> {f}</li>
                  ))}
                </ul>
                <div className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 font-semibold ${isActive ? 'bg-orange-500 text-white' : 'border border-white/20 text-white'}`}>
                  {isActive ? 'Selected' : 'Select'}
                </div>
              </motion.button>
            )
          })}
        </div>
        {selectedPlan && (
          <div className="mt-6 text-center">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-orange-500/90 hover:bg-orange-600 px-6 py-3 text-white font-semibold transition">
              Continue with {selectedPlan}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

function Timings() {
  return (
    <section id="timings" className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Timings</h2>
            <p className="mt-4 text-gray-300">We are open when you are.</p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-gray-200">
              <div className="rounded-xl border border-white/10 p-4">
                <div className="flex items-center gap-2 text-orange-500"><Clock className="h-5 w-5" /> Mon – Fri</div>
                <div className="mt-2 text-lg font-semibold">5:00 AM – 10:00 PM</div>
              </div>
              <div className="rounded-xl border border-white/10 p-4">
                <div className="flex items-center gap-2 text-orange-500"><Clock className="h-5 w-5" /> Saturday</div>
                <div className="mt-2 text-lg font-semibold">5:00 AM – 10:00 PM</div>
              </div>
              <div className="rounded-xl border border-white/10 p-4">
                <div className="flex items-center gap-2 text-orange-500"><Clock className="h-5 w-5" /> Sunday</div>
                <div className="mt-2 text-lg font-semibold">7:00 AM – 2:00 PM</div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 text-gray-300">
            <p className="font-medium text-white">Class Schedule (Sample)</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-black/60 p-3">Mon — Strength</div>
              <div className="rounded-lg bg-black/60 p-3">Tue — HIIT</div>
              <div className="rounded-lg bg-black/60 p-3">Wed — Mobility</div>
              <div className="rounded-lg bg-black/60 p-3">Thu — Conditioning</div>
              <div className="rounded-lg bg-black/60 p-3">Fri — Total Body</div>
              <div className="rounded-lg bg-black/60 p-3">Sat — Bootcamp</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Contact({ selectedPlan }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'https://ta-01k9wb0ykqt3ddsk5xkr8hxahr-8000.wo-eedaaghoc9um1uppwcwwfup8s.w.modal.host'

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const res = await fetch(`${backend}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, message, selected_plan: selectedPlan || null, source: 'web' }),
      })

      if (!res.ok) throw new Error('Failed to submit. Please try again.')

      const data = await res.json()
      // Do not open WhatsApp or email on the client; backend handles notifications
      const parts = []
      if (data?.email_sent) parts.push('email sent')
      if (data?.whatsapp_sent) parts.push('WhatsApp sent')
      const note = parts.length ? ` (${parts.join(' • ')})` : ''

      setStatus(`Thanks! Your details have been submitted.${note ? ' Notifications triggered' + note : ''}.`)
      setName(''); setPhone(''); setEmail(''); setMessage('')
    } catch (err) {
      setStatus(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-neutral-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Get in touch</h2>
            <div className="mt-6 space-y-4 text-gray-200">
              <p className="flex items-start gap-3"><MapPin className="h-5 w-5 text-orange-500 mt-0.5" /> 123 Iron Street, Fitness District, Your City</p>
              <p className="flex items-start gap-3"><Phone className="h-5 w-5 text-orange-500 mt-0.5" /> {OWNER.displayPhone}</p>
              <p className="flex items-start gap-3"><Mail className="h-5 w-5 text-orange-500 mt-0.5" /> {OWNER.email}</p>
              <div className="flex items-center gap-4 pt-2">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white"><Instagram /></a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white"><Facebook /></a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white"><Youtube /></a>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              {selectedPlan && (
                <div className="mb-4 text-sm text-gray-300">Selected plan: <span className="font-semibold text-white">{selectedPlan}</span></div>
              )}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col">
                  <label className="text-sm text-gray-300">Name</label>
                  <input required value={name} onChange={(e)=>setName(e.target.value)} className="mt-2 rounded-lg border border-white/10 bg-black/60 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Your name" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-300">Phone</label>
                  <input required value={phone} onChange={(e)=>setPhone(e.target.value)} className="mt-2 rounded-lg border border-white/10 bg-black/60 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Your phone" />
                </div>
              </div>
              <div className="mt-4 flex flex-col">
                <label className="text-sm text-gray-300">Email (optional)</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} className="mt-2 rounded-lg border border-white/10 bg-black/60 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="you@example.com" />
              </div>
              <div className="mt-4 flex flex-col">
                <label className="text-sm text-gray-300">Message</label>
                <textarea rows={4} value={message} onChange={(e)=>setMessage(e.target.value)} className="mt-2 rounded-lg border border-white/10 bg-black/60 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Tell us about your goals" />
              </div>
              <button disabled={loading} className="mt-6 w-full rounded-full bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600 transition disabled:opacity-60">
                {loading ? 'Sending...' : 'Send'}
              </button>
              {status && <div className="mt-3 text-sm text-gray-300">{status}</div>}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function MapSection() {
  return (
    <section className="h-[400px] w-full overflow-hidden">
      <iframe
        title="Gym location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509427!2d144.9537353159041!3d-37.81720997975178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAyLjAiUyAxNDTCsDU3JzE2LjQiRQ!5e0!3m2!1sen!2s!4v1611816293331!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  )
}

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState('Pro')

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Trainers />
      <Transformations />
      <Plans selectedPlan={selectedPlan} onSelect={setSelectedPlan} />
      <Timings />
      <Contact selectedPlan={selectedPlan} />
      <MapSection />

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${OWNER.phoneIntl.replace('+','')}`}
        target="_blank" rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg hover:scale-105 transition"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </a>

      {/* Footer */}
      <footer className="bg-black/90 border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-300"><Dumbbell className="h-5 w-5 text-orange-500" /> IronPulse © {new Date().getFullYear()}</div>
          <div className="text-sm text-gray-400">Train Hard. Stay Fit. Live Strong.</div>
        </div>
      </footer>
    </div>
  )
}
