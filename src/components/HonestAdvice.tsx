import Link from "next/link";

export function HonestAdvice() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide max-w-4xl">
        <p className="section-eyebrow">Honest advice</p>
        <h2 className="section-title mt-2">Do you need a shore excursion in Malta?</h2>
        <p className="section-subtitle">
          The honest answer: it depends which part of Malta you want. Valletta and Mdina reward
          independent exploring; Gozo and the Blue Grotto need more planning than most first-time
          passengers expect.
        </p>

        <div className="mt-10 space-y-8">
          <div className="card-feature">
            <h3 className="font-display text-xl font-bold text-gray-900">
              Valletta and Mdina — a strong case for going independently
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              For a first-time call, Valletta is compact and close to the port, and Mdina is a short,
              well-signposted trip away. Many passengers do both without a guide:
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-coastal-600">✓</span> Valletta&apos;s bastions and Upper Barrakka Gardens
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coastal-600">✓</span> St John&apos;s Co-Cathedral and Republic Street
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coastal-600">✓</span> Mdina&apos;s walled, largely car-free streets
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coastal-600">✓</span> A short bus or taxi transfer between the two
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Set a 60–90 minute return buffer and confirm your all-aboard time. The ship will not wait.
            </p>
          </div>

          <div className="card-accent">
            <h3 className="font-display text-xl font-bold text-gray-900">
              Gozo, the Blue Grotto and hop-on hop-off need more planning
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              A few of Malta&apos;s best-known experiences are easy to underestimate on a single port call.
              Give these extra thought before booking:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span>
                  <strong>Gozo</strong> — a ferry crossing plus island time genuinely needs a full,
                  well-timed day, not a quick add-on
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span>
                  <strong>Blue Grotto</strong> — a worthwhile optional boat trip, but sea conditions can
                  cancel sailings, so it should not anchor your whole day
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span>
                  <strong>Hop-on hop-off routes</strong> — flexible, but require you to plan your last
                  return stop carefully against all-aboard time
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span>
                  <strong>Heat and walking</strong> — Valletta and Mdina both involve slopes, steps and
                  uneven historic paving; pace warm-weather calls accordingly
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/compare" className="btn-secondary text-sm">
            Compare Malta options
          </Link>
          <Link href="/port-guide" className="btn-secondary text-sm">
            Malta Port Guide
          </Link>
          <Link href="/your-day-ashore" className="btn-secondary text-sm">
            Your Day Ashore
          </Link>
          <Link href="/methodology" className="btn-secondary text-sm">
            How we research this
          </Link>
        </div>
      </div>
    </section>
  );
}
