import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function PhotosSection() {
  const photos = DATA.photos;
  const col1 = photos.filter((_, i) => i % 2 === 0);
  const col2 = photos.filter((_, i) => i % 2 === 1);

  return (
    <section id="photos">
      <div className="flex min-h-0 flex-col gap-y-4">
        <div className="flex items-center w-full">
          <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
          <div className="border bg-primary z-10 rounded-xl px-4 py-1">
            <span className="text-background text-sm font-medium">Reading</span>
          </div>
          <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
        </div>
        <div className="flex flex-col gap-y-3 items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{DATA.sections.photos.heading}</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 items-start max-w-xl mx-auto">
          {[col1, col2].map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-4 sm:gap-6">
              {col.map((photo, idx) => (
                <BlurFade key={photo.src} delay={BLUR_FADE_DELAY * 14 + (colIdx * col.length + idx) * 0.05}>
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-auto mx-auto rounded-xl shadow-sm border"
                  />
                </BlurFade>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
