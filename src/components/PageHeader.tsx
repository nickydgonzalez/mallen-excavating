import Reveal from "@/components/Reveal";

export default function PageHeader({
  eyebrow,
  title,
  accent,
  lede,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  lede?: string;
}) {
  return (
    <section className="panel-dark relative overflow-hidden pb-20 pt-40 md:pb-24 md:pt-48">
      <div className="blueprint-grid absolute inset-0 opacity-40" aria-hidden />
      <div className="container-site relative">
        <Reveal>
          <p className="eyebrow on-dark mb-5">{eyebrow}</p>
          <h1 className="display max-w-3xl text-5xl text-white sm:text-6xl lg:text-7xl">
            {title} <span className="text-flame-hot text-glow">{accent}</span>
          </h1>
          {lede && <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">{lede}</p>}
        </Reveal>
      </div>
    </section>
  );
}
