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
    <section className="panel-dark pb-16 pt-36 md:pb-20 md:pt-44">
      <div className="container-site">
        <Reveal>
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h1 className="display max-w-3xl text-5xl text-white sm:text-6xl">
            {title} <span className="text-flame-hot">{accent}</span>
          </h1>
          {lede && <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">{lede}</p>}
        </Reveal>
      </div>
    </section>
  );
}
