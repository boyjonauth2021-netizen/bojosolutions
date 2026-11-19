export type Kind = 'game' | 'webapp' | 'website'

export type Project = {
  id: string
  name: string
  kind: Kind
  when: string
  sort: string
  summary: string
  live?: string
  source: string
  note?: string
}

export const projects: Project[] = [
  {
    id: 'ramayana',
    name: 'Ramayana: Path of Dharma',
    kind: 'game',
    when: 'November 2026',
    sort: '2026-11-19',
    summary:
      'A painted HTML5 action-story game. Eight levels, played in the browser, from the studio name on the title screen.',
    live: 'https://bojo2025.github.io/RamayanaGame/',
    source: 'https://github.com/Bojo2025/RamayanaGame',
  },
  {
    id: 'boxoffice',
    name: 'Indian Box Office',
    kind: 'website',
    when: 'November 2026',
    sort: '2026-11-19',
    summary:
      'Day-by-day consensus desk for Hindi, Tamil, Telugu, Malayalam and Kannada collections. India nett and worldwide gross, refreshed through the day.',
    live: 'https://bojo2025.github.io/indian-boxoffice/',
    source: 'https://github.com/Bojo2025/indian-boxoffice',
  },
  {
    id: 'pseudocode',
    name: 'CIE Pseudocode IDE',
    kind: 'webapp',
    when: 'November 2026',
    sort: '2026-11-18',
    summary:
      'Browser IDE for Cambridge Computer Science pseudocode — 2210 O Level and 9618 A Level. Write, run and debug without installing anything.',
    live: 'https://boyjonauth2021-netizen.github.io/pseudocodeIDE/',
    source: 'https://github.com/boyjonauth2021-netizen/pseudocodeIDE',
  },
  {
    id: 'paille',
    name: 'Paille-en-Queue',
    kind: 'game',
    when: 'November 2026',
    sort: '2026-11-14',
    summary:
      'A phone-first flyer. Guide a white-tailed tropicbird along the Mauritius coast from Pereybère to Île aux Fouquets.',
    live: 'https://bojo2025.github.io/paille-en-queue/',
    source: 'https://github.com/Bojo2025/paille-en-queue',
  },
  {
    id: 'zombi',
    name: "Zombi L'ile Runner",
    kind: 'game',
    when: 'November 2026',
    sort: '2026-11-13',
    summary:
      'A phone-first auto-runner set on the island. Jump, slide and sabre from Port Louis to Samara.',
    live: 'https://bojo2025.github.io/zombi-lile-runner/',
    source: 'https://github.com/Bojo2025/zombi-lile-runner',
  },
  {
    id: 'lotomoris',
    name: 'LotoMoris',
    kind: 'webapp',
    when: 'November 2026',
    sort: '2026-11-12',
    summary:
      'Every car for sale in Mauritius in one place. Photos, brand, colour and the seller’s phone, drawn from the island’s listing sites and kept to the last 90 days.',
    live: 'https://car-sales-mru.vercel.app/',
    source: 'https://github.com/Bojo2025/CarSalesMru',
  },
  {
    id: 'alevel',
    name: 'ALevelSolved',
    kind: 'webapp',
    when: 'November 2026',
    sort: '2026-11-09',
    summary:
      'Cambridge International A Level past papers by subject, year, May/October session and variant, with worked solutions written from the mark schemes.',
    live: 'https://bojo2025.github.io/ALevelSolved/',
    source: 'https://github.com/Bojo2025/ALevelSolved',
  },
  {
    id: 'replace',
    name: 'Teacher Replacement',
    kind: 'webapp',
    when: 'September 2026',
    sort: '2026-09-25',
    summary:
      'Replacement sheets for teachers at Shri Beekrumsing Ramlallah State Secondary School. A new sheet, filled on a phone, ready for the day.',
    live: 'https://bojo2025.github.io/replace/',
    source: 'https://github.com/Bojo2025/replace',
  },
  {
    id: 'marks',
    name: 'Mark Entry',
    kind: 'webapp',
    when: 'September 2026',
    sort: '2026-09-17',
    summary:
      'Online mark list for B. Ramlallah SSS. Enter marks on a phone and keep the class record in one place.',
    live: 'https://boyjonauth2021-netizen.github.io/mark-entry/',
    source: 'https://github.com/boyjonauth2021-netizen/mark-entry',
  },
  {
    id: 'bojoflix',
    name: 'BojoFlix',
    kind: 'website',
    when: 'September 2026',
    sort: '2026-09-01',
    summary:
      'Top-rated films and series across American, Indian and international cinema, with what is in theatres and what is on streaming.',
    live: 'https://bojo2025.github.io/bojoflix/',
    source: 'https://github.com/Bojo2025/bojoflix',
  },
  {
    id: 'rental',
    name: 'Moris Rental Manager',
    kind: 'webapp',
    when: 'August 2026',
    sort: '2026-08-16',
    summary:
      'Phone-first car rental desk for fleet owners in Mauritius. The car, the booking and the day, without a back office.',
    live: 'https://bojo2025.github.io/CarRental/',
    source: 'https://github.com/Bojo2025/CarRental',
  },
  {
    id: 'tuition',
    name: 'Tuition Manager',
    kind: 'webapp',
    when: 'August 2026',
    sort: '2026-08-10',
    summary:
      'Records and payments for tuition students in Mauritius. Who came, who paid, and what is still due.',
    live: 'https://boyjonauth2021-netizen.github.io/tuition-manager/',
    source: 'https://github.com/boyjonauth2021-netizen/tuition-manager',
  },
  {
    id: 'agri',
    name: 'AgriResolve',
    kind: 'webapp',
    when: 'May 2026',
    sort: '2026-05-20',
    summary:
      'Hydroponic crop advisor for growers in Mauritius. Nineteen vegetables and herbs, growing guides, growth charts, and a Green Assistant in English and Kreol.',
    source: 'https://github.com/boyjonauth2021-netizen/agriresolve',
    note: 'Finished app. The assistant needs an API key, so it is not on a public host yet.',
  },
  {
    id: 'brsss',
    name: 'BRSSS Mapou',
    kind: 'website',
    when: 'April 2026',
    sort: '2026-04-28',
    summary:
      'Site for Shri Beekrumsing Ramlallah State Secondary School, Mapou, Rivière du Rempart. Enlightenment Through Learning.',
    live: 'https://boyjonauth2021-netizen.github.io/brsss/',
    source: 'https://github.com/boyjonauth2021-netizen/brsss',
  },
]

export const kindLabel: Record<Kind, string> = {
  game: 'Game',
  webapp: 'Web app',
  website: 'Website',
}
