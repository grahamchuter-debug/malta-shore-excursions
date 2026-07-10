import { subjectImages } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";

export function SpiritOfMalta() {
  const image = subjectImages.valletta;

  return (
    <section className="section-padding bg-gradient-to-b from-coastal-50 via-white to-white border-b border-coastal-100">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-eyebrow">Fortress cities, revealed slowly</p>
            <h2 className="section-title mt-2 max-w-xl">Spirit of Malta</h2>
            <p className="mt-6 text-base leading-relaxed text-gray-700">
              Malta is a working fortress that never stopped being lived in. Golden limestone bastions
              rise straight from the sea, Grand Harbour still shelters ships as it has for centuries, and
              the streets behind the walls feel closer to the Knights than to any resort coastline.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              A cruise day here could mean standing on Valletta&apos;s ramparts above Grand Harbour,
              walking Mdina&apos;s silent, sunlit lanes, crossing to the quieter Three Cities, or slowing
              down entirely on Gozo.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Every route reveals another layer of the same island story — 7,000 years deep and built in
              stone.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Fortified capitals" },
                { label: "Grand Harbour maritime life" },
                { label: "Limestone island light" },
              ].map((item) => (
                <div key={item.label} className="card-feature text-center">
                  <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <ResponsiveImage image={image} role="card" imgClassName="h-full w-full object-cover" />
            <div
              className="absolute inset-0 bg-gradient-to-t from-coastal-900/30 to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
