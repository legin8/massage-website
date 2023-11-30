import Image from 'next/image'

export default function Home() {
  const headBlock = "py-10"
  const pageTitle = "text-4xl text-center";
  const missionStatement = "text-center";
  
  return (
    <main>
      <div className={headBlock}>
        <h1 className={pageTitle}>Massages</h1>
      </div>

      <div>
        <p className={missionStatement}>Donate to give those that need a massage.</p>
      </div>
    </main>
  )
}
