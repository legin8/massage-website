import Link from "next/link";

export default function Home() {
  const page = "p-5"
  const linkButton = "text-2xl p-2 border-2 border-solid border-purple-call rounded-xl";
  const headBlock = "py-10"
  const pageTitle = "text-4xl text-center";
  const missionStatement = "text-center";

  return (
    <main className={page}>
      <div>
        <Link href="/massage-apply" className={linkButton}>Register</Link>
      </div>
      <div className={headBlock}>
        <h1 className={pageTitle}>Massage Matters</h1>
      </div>

      <div>
        <p className={missionStatement}>Donate to give those that need a massage.</p>
      </div>

      <div>
        <div className="text-center">
          <h2>What we do.</h2>
        </div>
      </div>
    </main>
  )
}
