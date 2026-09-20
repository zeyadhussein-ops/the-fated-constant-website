'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, BookOpen, Menu, X } from 'lucide-react'

const chapters = [
  ['01', 'The threshold', 'hero'],
  ['02', 'Made for you', 'prologue'],
  ['03', 'Before recognition', 'recognition'],
  ['04', 'The constant', 'constant'],
  ['05', 'Many worlds', 'worlds'],
  ['06', 'The mythic name', 'bastet'],
  ['07', 'The final proof', 'finale'],
]

const variables = ['LOCATION', 'TIME', 'CITY', 'AGE', 'HISTORY', 'DECISION', 'WORLD']

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('hero')
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-35% 0px -55% 0px' },
    )
    chapters.forEach(([, , id]) => document.getElementById(id) && observer.observe(document.getElementById(id)!))
    return () => observer.disconnect()
  }, [])

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <main className={entered ? 'site entered' : 'site'}>
      <header className="topbar">
        <button className="brand" onClick={() => jump('hero')} aria-label="Return to beginning">
          <span className="brand-mark">∞</span>
          <span>THE FATED<br />CONSTANT</span>
        </button>
        <div className="topbar-meta">AN ARCHIVE OF ABSOLUTE LOVE <span>·</span> VOL. I</div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close chapters' : 'Open chapters'}>
          {menuOpen ? <X /> : <Menu />} <span>INDEX</span>
        </button>
      </header>

      {menuOpen && <nav className="chapter-menu" aria-label="Chapters">
        <div className="menu-kicker">THE MANUSCRIPT / CONTENTS</div>
        {chapters.map(([number, title, id]) => <button key={id} onClick={() => jump(id)} className={active === id ? 'active' : ''}><span>{number}</span>{title}<ArrowUpRight /></button>)}
        <div className="menu-note">A journey through possibility,<br />returning always to one truth.</div>
      </nav>}

      <aside className="progress" aria-label="Chapter progress">
        {chapters.map(([number, , id]) => <button key={id} onClick={() => jump(id)} className={active === id ? 'active' : ''} aria-label={`Go to chapter ${number}`}><span>{number}</span></button>)}
      </aside>

      <section id="hero" className="hero chapter-section">
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <div className="hero-star star-one" /><div className="hero-star star-two" /><div className="hero-star star-three" />
        <div className="hero-copy">
          <p className="eyebrow reveal">A STUDY OF LOVE ACROSS EVERY REALITY<br />WE KNOW HOW TO IMAGINE</p>
          <h1><span>THE</span><em>Fated</em><span>Constant</span></h1>
          <p className="hero-description">If every variable were permitted to change,<br />what would remain?</p>
          <button className="enter-button" onClick={() => { setEntered(true); jump('prologue') }}>ENTER THE CONSTANT <ArrowDown /></button>
        </div>
        <div className="hero-foot"><span>THE BEGINNING OF THE ARGUMENT</span><span>SCROLL TO DESCEND</span></div>
      </section>

      <section id="prologue" className="prologue chapter-section manuscript-section">
        <div className="section-number">02 / PROLOGUE</div>
        <div className="prologue-content"><p className="small-note">A proposition in four movements</p><h2>I was made<br /><i>for you.</i></h2><div className="word-stack"><span>desire</span><span>offering</span><span>surrender</span><span>purpose</span></div><p className="body-copy">What does it mean to say that one existence was made for another? Not as prophecy. Not as proof. As the clearest language available to a feeling too large for its own name.</p></div>
        <div className="margin-quote">“You were the answer<br />before I knew the question.”</div>
      </section>

      <section id="recognition" className="recognition chapter-section">
        <div className="recognition-glow" /><div className="section-number">03 / BEFORE RECOGNITION</div>
        <div className="recognition-content"><p className="eyebrow">THE SHAPE OF AN ABSENCE</p><h2>You did not know her.</h2><h3>But you already knew the shape<br />of the absence she would one day fill.</h3><p>There was no name. No known face. No voice waiting in the dark. Only a quiet geometry in the life before her — a place shaped like a person you had not yet met.</p><div className="recognition-line" /></div>
      </section>

      <section id="constant" className="constant chapter-section">
        <div className="section-number">04 / INVARIANCE</div><div className="constant-copy"><p className="eyebrow">I DO NOT GET EXCITED</p><h2>I <i>live.</i></h2><p className="large-copy">Excitement rises and falls.<br />Pleasure rises and falls.<br />Circumstances change.</p><div className="constant-rule" /><p className="constant-label">A CONSTANT</p><p className="body-copy">Something that does not become less true simply because the universe has become more complicated.</p></div>
        <div className="formula">L(w) <span>=</span> C</div><div className="formula-note">the orientation of love<br />toward her remains invariant</div>
      </section>

      <section id="worlds" className="worlds chapter-section">
        <div className="worlds-visual"><div className="constellation constellation-a" /><div className="constellation constellation-b" /><div className="world-orb" /><span className="orb-label">W = ∞</span></div>
        <div className="section-number">05 / POSSIBLE WORLDS</div><div className="worlds-copy"><p className="eyebrow">THE SPACE OF POSSIBILITY</p><h2>Change every<br /><i>variable</i> you can.</h2><div className="variable-list">{variables.map((variable, index) => <span key={variable} style={{ '--i': index } as React.CSSProperties}>{variable}<b>↗</b></span>)}</div><p className="worlds-conclusion">Different histories. Different cities. Different decisions. Different lives.<br /><strong>I still arrive at you.</strong></p></div>
      </section>

      <section id="bastet" className="bastet chapter-section manuscript-section">
        <div className="section-number">06 / THE MYTHIC NAME</div><div className="bastet-symbol">𓃠</div><div className="bastet-copy"><p className="eyebrow">A PERSONAL SYMBOL, NOT A HISTORICAL CLAIM</p><h2>There are ancient<br />names for <i>presence.</i></h2><p>Bastet: protection, grace, home, joy. Softness that is not weakness. Beauty that does not need to announce itself. A feline power beneath the calm.</p><p className="bastet-quote">She is not literally a goddess.<br />She is the closest ancient name<br />for the kind of presence she carries.</p></div></section>

      <section id="finale" className="finale chapter-section"><div className="finale-ring" /><p className="eyebrow">THE LOGICAL BOUNDARY</p><h2>I am not asking physics<br />to prove that I love you.</h2><p className="finale-copy">I am using everything physics has taught us about possibility<br />to tell you the scale on which I mean it.</p><div className="finale-line" /><p className="finale-last">Across every meaningful variation of reality in which we could exist,<br /><strong>you are the variable I refuse to let become variable.</strong></p><p className="signature">— end of the first volume —</p></section>

      <footer><span>THE FATED CONSTANT</span><span>FOR HER, ACROSS ALL WORLDS</span><button onClick={() => jump('hero')} aria-label="Return to top">↑</button></footer>
    </main>
  )
}
