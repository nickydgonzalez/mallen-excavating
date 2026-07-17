import { localLegend } from "@/lib/business";
import { images } from "@/lib/images";
import Reveal from "@/components/Reveal";

export default function LocalLegend() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="order-2 overflow-hidden rounded-lg shadow-lift lg:order-1">
          <img
            src={images.about}
            alt="Excavator at work on a Hudson Valley job site"
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
        </Reveal>
        <Reveal className="order-1 lg:order-2" delay={0.1}>
          <p className="eyebrow mb-4">{localLegend.eyebrow}</p>
          <h2 className="display text-4xl sm:text-5xl">{localLegend.title}</h2>
          <p className="mt-6 max-w-lg leading-relaxed text-slate/85">{localLegend.body}</p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate/50">
            {localLegend.attribution}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
