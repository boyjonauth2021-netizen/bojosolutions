import { counts } from '../catalog'

const capabilities = [
  'Web platforms',
  'EdTech',
  'Browser and mobile games',
  'School management systems',
]

export function About() {
  const tally = counts()

  return (
    <section id="about" className="about about-page">
      <div className="about-lead">
        <p className="kicker">Founder</p>
        <h1>Kevin Boyjonauth</h1>
        <p className="role">Founder & Lead Engineer, Bojo Solutions</p>
        <p>
          Bojo Solutions designs and ships web platforms, education technology
          and browser games from Mauritius.
        </p>
        <p>
          Twenty years in Cambridge Computer Science — IGCSE and O Level 2210,
          A Level 9618 — shapes the education products we ship. Leading Computer
          Science and the Computer Lab at a state secondary school is the domain
          behind that work.
        </p>
        <h3>What we build</h3>
        <ul className="capabilities">
          {capabilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <ul className="credibility">
        <li>
          <strong>20+</strong>
          <span>Years in Computer Science</span>
        </li>
        <li>
          <strong>{tally.all}</strong>
          <span>Shipped products</span>
        </li>
        <li>
          <strong>
            <a href="https://bojo2025.github.io/ALevelSolved/">
              ALevelSolved.com
            </a>
          </strong>
          <span>Flagship exam-solutions platform</span>
        </li>
        <li>
          <strong>In daily use</strong>
          <span>
            School systems for marks, timetabling, invigilation and replacements
          </span>
        </li>
      </ul>
    </section>
  )
}
