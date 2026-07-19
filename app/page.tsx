import { Banknote, Clock, MapPin, Scissors, Sparkles, Truck } from "lucide-react";

const WA_NUMBER = "962788525267";
const WA_DISPLAY = "+962 7 8852 5267";

const wa = (text: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

const waGeneral = wa("السلام عليكم، أودّ الاستفسار عن منتجات حجابك.");

const waOrder = (p: Product) =>
  wa(`السلام عليكم، أودّ طلب: ${p.name} — ${p.price} د.أ`);

type Product = {
  name: string;
  cat: string;
  price: string;
  img: string;
  w: number;
  h: number;
  alt: string;
  hover?: string;
  badge?: string;
  desc: string;
};

const PRODUCTS: Product[] = [
  {
    name: "خمار بَسيلة",
    cat: "خُمُر",
    price: "22",
    img: "/products/p08b.jpg",
    w: 750,
    h: 1000,
    hover: "/products/p08.jpg",
    badge: "الأكثر طلباً",
    desc: "خمار مصري قطعة واحدة من قماش العباءات الفاخر، يُسدَل من أعلى الرأس إلى منتصف القامة بفتحة وجهٍ مريحة.",
    alt: "خمار بسيلة المصري بقماش أسود فاحم منسدل بانسيابية على قامة عارضة",
  },
  {
    name: "خمار بَنّة",
    cat: "خُمُر",
    price: "33",
    img: "/products/p09.jpg",
    w: 750,
    h: 1000,
    desc: "خمار يمني انسيابي من قماش الطُرَح الخفيف، بقصّة حرّة تناسب الجميع وسترٍ لا يكاد وزنه يُحَسّ.",
    alt: "خمار بنة اليمني الفاحم بقصة انسيابية كاملة",
  },
  {
    name: "طرحة ضافية",
    cat: "طُرَح",
    price: "9.5",
    img: "/products/p02b.jpg",
    w: 666,
    h: 1000,
    hover: "/products/p02.jpg",
    desc: "طرحة ربطٍ بطول مترين وعرض ٧٣ سم من الكريب الكوري، تلتفّ بثبات وتغطّي الصدر.",
    alt: "طرحة سوداء طويلة معقودة على رأس منيكان خياطة",
  },
  {
    name: "غطوة ناسكة",
    cat: "طُرَح",
    price: "7.5",
    img: "/products/p07.jpg",
    w: 749,
    h: 1000,
    hover: "/products/p07b.jpg",
    desc: "غطوة للعمرة والحجّ تجمع السترَ التامّ إلى تهويةٍ تريحكِ في الزحام وطول اليوم.",
    alt: "غطوة ناسكة سوداء للعمرة والحج",
  },
  {
    name: "نقاب بَهيم",
    cat: "نُقُب",
    price: "5",
    img: "/products/p03.jpg",
    w: 800,
    h: 1000,
    hover: "/products/p03b.jpg",
    desc: "نقاب من الكريب الكوري الفاحم، خفيفٌ على الوجه وثابتٌ لا يتزحزح مع الحركة.",
    alt: "نقاب بهيم أسود من الكريب الكوري",
  },
  {
    name: "نقاب ظَليل",
    cat: "نُقُب",
    price: "5.5",
    img: "/products/p06.png",
    w: 800,
    h: 1000,
    hover: "/products/p06b.png",
    badge: "طلب مسبق",
    desc: "النقاب الأفغاني بظُلّته الممتدة لسترةٍ أتمّ؛ يُجهَّز بطلبٍ مسبق خلال نحو ٢٠ يوماً.",
    alt: "نقاب ظليل أفغاني بظلة ممتدة",
  },
  {
    name: "نقاب طَعيم",
    cat: "نُقُب",
    price: "7.5",
    img: "/products/p01.jpg",
    w: 750,
    h: 1000,
    desc: "نقابٌ بفتحة سفلية عملية تُيسّر عليكِ تناوُل الطعام خارج البيت من غير كشف الوجه.",
    alt: "نقاب طعيم أسود بفتحة سفلية عملية",
  },
  {
    name: "عباية ماريا",
    cat: "عبايات",
    price: "32",
    img: "/products/p10.jpg",
    w: 666,
    h: 1000,
    hover: "/products/p10b.jpg",
    desc: "عباية كتف من قماشٍ راكز انسيابي، بقصّة واسعة تستر الجسد كلّه بلا التصاق.",
    alt: "عباية ماريا السوداء بقصة كتف واسعة",
  },
  {
    name: "عباية يوشي",
    cat: "عبايات",
    price: "52",
    img: "/products/p11.jpg",
    w: 666,
    h: 1000,
    hover: "/products/p11b.jpg",
    desc: "عباية كتف من خامةٍ فاخرة مقاومة للتجعّد، تبقى أنيقة من الصباح إلى المساء.",
    alt: "عباية يوشي السوداء المقاومة للتجعد",
  },
  {
    name: "عباية رَزينة",
    cat: "عبايات",
    price: "59",
    img: "/products/p14.jpg",
    w: 666,
    h: 1000,
    desc: "عباية رأس بصديريٍّ داخلي بأزرار يثبّتها فلا تنسدل — عمليّة ليومٍ طويل.",
    alt: "عباية رزينة بصديري داخلي مثبت بأزرار",
  },
  {
    name: "قفاز سِتر",
    cat: "إكسسوارات",
    price: "4",
    img: "/products/p04.jpg",
    w: 563,
    h: 750,
    hover: "/products/p04b.jpg",
    desc: "قفاز أسود خفيف بتهوية مريحة، ومنه نوعٌ يستجيب لشاشات اللمس.",
    alt: "قفاز ستر أسود خفيف",
  },
];

const FEATURED = PRODUCTS[0];

const TICKER = [
  "كريب كوري مطفأ اللمعة",
  "خياطة مشغل، لا جملة",
  "الدفع عند الاستلام",
  "توصيل ٢–٤ أيام لكل المحافظات",
  "تبديل مريح خلال ٣ أيام",
  "ألوان ثابتة لا تبهت",
];

const FEATURES = [
  {
    icon: Sparkles,
    title: "خامات مختارة يدوياً",
    desc: "نرفض القماش الذي لا نرضاه لأمهاتنا — يمرّ كل توبٍ بين أصابعنا قبل القَصّ.",
  },
  {
    icon: Scissors,
    title: "خياطة مشغلنا",
    desc: "درزات مدفونة وحواشٍ منظّفة، شغل مشغلٍ صغير لا مصنعٍ بالجملة.",
  },
  {
    icon: Banknote,
    title: "الدفع عند الاستلام",
    desc: "افحصي طلبك أولاً، وادفعي حين يطمئنّ قلبك.",
  },
  {
    icon: Truck,
    title: "توصيل لكل الأردن",
    desc: "من عمّان إلى العقبة خلال ٢–٤ أيام عمل.",
  },
];

const STEPS = [
  {
    num: "١",
    title: "اختاري قطعتك",
    desc: "تصفّحي التشكيلة وحدّدي الموديل واللون الذي يناسبك.",
  },
  {
    num: "٢",
    title: "أرسلي عبر واتساب",
    desc: "زرّ الطلب يجهّز رسالتك تلقائياً باسم القطعة وسعرها — أرسليها فقط.",
  },
  {
    num: "٣",
    title: "استلمي عند بابك",
    desc: "نؤكّد العنوان، ويصلك الطلب خلال ٢–٤ أيام عمل، والدفع عند الاستلام.",
  },
];

const FABRICS = [
  {
    name: "كريب كوري",
    desc: "مطفأ اللمعة، لا يشفّ تحت الشمس، ويحفظ لونه غسلةً بعد غسلة.",
  },
  {
    name: "جيرسيه قطني",
    desc: "يلتفّ بلا دبابيس ويثبت طوال اليوم، بلمسةٍ باردة مريحة.",
  },
  {
    name: "شيفون الطُرَح",
    desc: "خفيفٌ للمناسبات كأنه نسمة، بحاشيةٍ مخيطة لا تنسلّ.",
  },
];

const CONTAINER = "mx-auto w-full max-w-6xl px-5 sm:px-8";

/* shared WhatsApp pill; add size + focus ring color per context */
const BTN =
  "flex items-center rounded-full bg-olive font-medium text-ivory transition-colors hover:bg-olive-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-espresso/10 bg-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_oklch(0.25_0.02_55/0.35)]">
      <div className="relative mx-4 mt-4 aspect-[3/4] overflow-hidden rounded-t-[10rem] rounded-b-lg bg-white ring-1 ring-espresso/5">
        <img
          src={product.img}
          alt={product.alt}
          width={product.w}
          height={product.h}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {product.hover && (
          <img
            src={product.hover}
            alt=""
            aria-hidden
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center gap-2 text-[11px] font-medium">
          <span className="rounded-full bg-olive/10 px-2.5 py-1 text-olive-deep">
            {product.cat}
          </span>
          {product.badge && (
            <span className="rounded-full bg-brass/15 px-2.5 py-1 text-brass-ink">
              {product.badge}
            </span>
          )}
        </div>
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="flex-1 text-sm leading-7 text-muted-foreground">
          {product.desc}
        </p>
        <div className="mt-2 flex items-center justify-between gap-3">
          <p className="text-xl font-bold">
            {product.price}{" "}
            <span className="text-xs font-medium text-muted-foreground">د.أ</span>
          </p>
          <a
            href={waOrder(product)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`اطلبي ${product.name} عبر واتساب`}
            className={`${BTN} h-11 gap-2 px-5 text-sm focus-visible:ring-ring`}
          >
            <WhatsAppIcon className="size-4" />
            اطلبي
          </a>
        </div>
      </div>
    </article>
  );
}

function Eyebrow({
  children,
  onDark = false,
}: {
  children: React.ReactNode;
  onDark?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-3 text-sm font-medium ${onDark ? "text-brass" : "text-brass-ink"}`}
    >
      <span aria-hidden className={`h-px w-10 ${onDark ? "bg-brass/60" : "bg-brass"}`} />
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:right-2 focus:z-[100] focus:rounded-full focus:bg-night focus:px-5 focus:py-2.5 focus:text-ivory"
      >
        تخطّي إلى المحتوى
      </a>

      <header className="sticky top-0 z-50 border-b border-espresso/10 bg-muslin/85 backdrop-blur-md">
        <div className={`${CONTAINER} flex h-18 items-center justify-between gap-4`}>
          <a
            href="#main"
            className="rounded-sm font-display text-3xl font-bold leading-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            حجابك
          </a>
          <nav aria-label="أقسام الصفحة" className="hidden items-center gap-7 text-sm font-medium text-espresso/75 md:flex">
            <a href="#collection" className="rounded-sm py-1.5 transition-colors hover:text-olive-deep focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none">
              التشكيلة
            </a>
            <a href="#fabrics" className="rounded-sm py-1.5 transition-colors hover:text-olive-deep focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none">
              خاماتنا
            </a>
            <a href="#order" className="rounded-sm py-1.5 transition-colors hover:text-olive-deep focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none">
              طريقة الطلب
            </a>
            <a href="#contact" className="rounded-sm py-1.5 transition-colors hover:text-olive-deep focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none">
              تواصلي معنا
            </a>
          </nav>
          <a
            href={waGeneral}
            target="_blank"
            rel="noopener noreferrer"
            className={`${BTN} h-11 gap-2 px-5 text-sm focus-visible:ring-ring`}
          >
            <WhatsAppIcon className="size-4" />
            <span className="hidden sm:inline">اطلبي عبر واتساب</span>
            <span className="sm:hidden">اطلبي</span>
          </a>
        </div>
      </header>

      <main id="main">
        {/* ───────── hero: a lit niche in a dark wall ───────── */}
        <section className="relative overflow-hidden bg-night text-ivory">
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -end-10 select-none font-display text-[20rem] leading-none text-ivory/4"
          >
            حجابك
          </span>
          <div className={`${CONTAINER} relative grid items-center gap-14 py-20 lg:grid-cols-12 lg:py-28`}>
            <div className="flex flex-col items-start gap-7 lg:col-span-7">
              <div className="rise" style={{ "--d": "0s" } as React.CSSProperties}>
                <Eyebrow onDark>مشغل أردني للخُمُر والحجابات — عمّان</Eyebrow>
              </div>
              <h1
                className="rise font-display text-[clamp(2.9rem,7vw,5.25rem)] font-bold leading-[1.35] text-balance"
                style={{ "--d": ".08s" } as React.CSSProperties}
              >
                سِترٌ يليقُ <span className="text-brass">بكِ</span>
              </h1>
              <p
                className="rise max-w-xl text-lg leading-9 text-ivory/75 text-pretty"
                style={{ "--d": ".16s" } as React.CSSProperties}
              >
                خُمُرٌ وطُرَحٌ ونُقُبٌ من أجود الأقمشة الكورية والتركية، تُخاط في
                مشغلنا بعمّان وتصلكِ حتى بابكِ — والدفع عند الاستلام.
              </p>
              <div
                className="rise flex flex-wrap items-center gap-4"
                style={{ "--d": ".24s" } as React.CSSProperties}
              >
                <a
                  href={waGeneral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${BTN} h-13 gap-2.5 px-7 text-base focus-visible:ring-brass focus-visible:ring-offset-night`}
                >
                  <WhatsAppIcon className="size-5" />
                  اطلبي عبر واتساب
                </a>
                <a
                  href="#collection"
                  className="flex h-13 items-center rounded-full border border-ivory/25 px-7 text-base font-medium transition-colors hover:border-ivory/60 hover:bg-ivory/5 focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-night focus-visible:outline-none"
                >
                  تصفّحي التشكيلة
                </a>
              </div>
              <p
                className="rise flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ivory/55"
                style={{ "--d": ".32s" } as React.CSSProperties}
              >
                الدفع عند الاستلام
                <span aria-hidden className="text-brass">✦</span>
                توصيل ٢–٤ أيام
                <span aria-hidden className="text-brass">✦</span>
                تبديل خلال ٣ أيام
              </p>
            </div>

            <div
              className="rise mx-auto w-[min(100%,24rem)] lg:col-span-5"
              style={{ "--d": ".2s" } as React.CSSProperties}
            >
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-4 rounded-t-full rounded-b-3xl border border-brass/40"
                />
                <div className="relative aspect-[3/4] overflow-hidden rounded-t-full rounded-b-3xl bg-white shadow-2xl">
                  <img
                    src="/products/p08.jpg"
                    alt="خمار بسيلة المصري منسدل بانسيابية — من تشكيلة حجابك"
                    width={763}
                    height={1000}
                    loading="eager"
                    fetchPriority="high"
                    className="h-full w-full object-cover"
                  />
                </div>
                <a
                  href={waOrder(FEATURED)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-5 start-6 flex min-h-11 items-center gap-2 rounded-full bg-muslin px-5 py-2.5 text-sm font-medium text-espresso shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brass focus-visible:outline-none"
                >
                  <WhatsAppIcon className="size-4 text-olive" />
                  {FEATURED.name} — {FEATURED.price} د.أ
                </a>
              </div>
            </div>
          </div>

          <div className="relative border-t border-ivory/10">
            <input
              type="checkbox"
              id="ticker-pause"
              className="peer sr-only"
              aria-label="إيقاف حركة الشريط المتحرك"
            />
            <div className="marquee" aria-hidden>
              <div className="marquee-track py-4 text-sm text-ivory/60">
                {[0, 1].map((half) => (
                  <div key={half} className="flex shrink-0 items-center">
                    {TICKER.map((item) => (
                      <span key={item} className="flex items-center gap-8 pe-8">
                        {item}
                        <span className="text-brass">✦</span>
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <label
              htmlFor="ticker-pause"
              className="absolute inset-y-0 end-3 my-auto flex h-9 w-9 cursor-pointer items-center justify-center self-center rounded-full border border-ivory/15 bg-night text-[10px] text-ivory/60 transition-colors hover:text-ivory peer-focus-visible:ring-2 peer-focus-visible:ring-brass"
            >
              <span className="glyph-pause">❚❚</span>
              <span className="glyph-play">▶</span>
            </label>
          </div>
        </section>

        {/* ───────── collection ───────── */}
        <section id="collection" aria-labelledby="collection-title" className="scroll-mt-24">
          <div className={`${CONTAINER} py-20 lg:py-24`}>
            <div className="reveal flex flex-col gap-4">
              <Eyebrow>تشكيلتنا</Eyebrow>
              <h2 id="collection-title" className="font-display text-4xl font-bold leading-snug text-balance sm:text-5xl">
                قطعٌ خُيّطت لتُلبَس طويلاً
              </h2>
              <p className="max-w-2xl leading-8 text-muted-foreground text-pretty">
                كل قطعة تمرّ على يدٍ تفحص القماش والدرزة قبل أن تصلك. اضغطي زرّ
                الطلب وستجدين رسالة واتساب جاهزة باسم القطعة وسعرها.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.map((product) => (
                <div key={product.name} className="reveal">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              الأسعار بالدينار الأردني وتشمل التغليف. أجرة التوصيل تُحدَّد حسب
              المحافظة عند تأكيد الطلب.
            </p>
          </div>
        </section>

        {/* ───────── fabrics ───────── */}
        <section id="fabrics" aria-labelledby="fabrics-title" className="scroll-mt-24 bg-linen">
          <div className={`${CONTAINER} grid items-center gap-14 py-20 lg:grid-cols-2 lg:py-24`}>
            <div className="reveal flex flex-col gap-4">
              <Eyebrow>القماشُ أولاً</Eyebrow>
              <h2 id="fabrics-title" className="font-display text-4xl font-bold leading-snug text-balance sm:text-5xl">
                نُدقّق في الخامة خيطاً خيطاً
              </h2>
              <p className="max-w-xl leading-8 text-muted-foreground text-pretty">
                قبل أن نسأل «كيف تبدو القطعة؟» نسأل «كيف تُحِسّين فيها؟» — لذلك
                نبدأ من القماش.
              </p>
              <ul className="mt-4 flex flex-col gap-6">
                {FABRICS.map((fabric) => (
                  <li key={fabric.name} className="border-s-2 border-brass/60 ps-5">
                    <h3 className="text-lg font-bold">{fabric.name}</h3>
                    <p className="mt-1 text-sm leading-7 text-muted-foreground">
                      {fabric.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal relative mx-auto w-[min(100%,26rem)]">
              <div
                aria-hidden
                className="absolute -inset-3 translate-x-3 translate-y-3 rounded-3xl border border-brass/50"
              />
              <img
                src="/products/p02.jpg"
                alt="طرحة سوداء معقودة بعناية على رأس منيكان خياطة في المشغل"
                width={666}
                height={1000}
                loading="lazy"
                decoding="async"
                className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* ───────── why us ───────── */}
        <section aria-labelledby="why-title">
          <div className={`${CONTAINER} py-20 lg:py-24`}>
            <div className="reveal flex flex-col gap-4">
              <Eyebrow>وعدنا لكِ</Eyebrow>
              <h2 id="why-title" className="font-display text-4xl font-bold leading-snug text-balance sm:text-5xl">
                لماذا حجابك؟
              </h2>
            </div>
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="reveal flex flex-col gap-3">
                  <div className="flex h-16 w-14 items-center justify-center rounded-t-full rounded-b-lg bg-olive/10 text-olive-deep">
                    <feature.icon aria-hidden className="size-6" />
                  </div>
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── the poem card ───────── */}
        <section aria-labelledby="story-title" className="bg-night text-ivory">
          <div className={`${CONTAINER} grid items-center gap-14 py-20 lg:grid-cols-12 lg:py-24`}>
            <div className="reveal mx-auto w-[min(100%,22rem)] lg:col-span-5">
              <img
                src="/products/p12.jpg"
                alt="بطاقة قصيدة مطبوعة على آلة كاتبة عربية قديمة"
                width={1000}
                height={1000}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full -rotate-2 rounded-2xl object-cover shadow-2xl ring-1 ring-ivory/10"
              />
            </div>
            <div className="reveal flex flex-col gap-5 lg:col-span-7">
              <Eyebrow onDark>عادةُ المشغل</Eyebrow>
              <h2 id="story-title" className="font-display text-4xl font-bold leading-snug text-balance sm:text-5xl">
                مع كلِّ طلبية… قصيدة
              </h2>
              <p className="max-w-xl text-lg leading-9 text-ivory/75 text-pretty">
                منذ أول صندوقٍ غلّفناه، نطبع بطاقةَ بيتِ شعرٍ على آلةٍ كاتبةٍ
                قديمة ونضعها بين طيّات القماش — لأنّ الثوب يبلى، والكلمة الطيبة
                تبقى.
              </p>
            </div>
          </div>
        </section>

        {/* ───────── how to order ───────── */}
        <section id="order" aria-labelledby="order-title" className="scroll-mt-24">
          <div className={`${CONTAINER} py-20 lg:py-24`}>
            <div className="reveal flex flex-col items-center gap-4 text-center">
              <p className="flex items-center gap-3 text-sm font-medium text-brass-ink">
                <span aria-hidden className="h-px w-10 bg-brass" />
                خطوات بسيطة
                <span aria-hidden className="h-px w-10 bg-brass" />
              </p>
              <h2 id="order-title" className="font-display text-4xl font-bold leading-snug text-balance sm:text-5xl">
                اطلبي وأنتِ مطمئنّة
              </h2>
            </div>
            <div className="mt-14 grid gap-10 md:grid-cols-3">
              {STEPS.map((step) => (
                <div key={step.num} className="reveal flex flex-col items-center gap-4 text-center">
                  <div className="flex h-16 w-14 items-end justify-center rounded-t-full rounded-b-lg bg-night pb-2 font-display text-2xl text-ivory">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="max-w-xs text-sm leading-7 text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="reveal mx-auto mt-16 flex max-w-2xl flex-col items-center gap-5 rounded-3xl border border-espresso/10 bg-card p-8 text-center sm:p-10">
              <p className="text-lg leading-8">
                جاهزة؟ راسلينا الآن — نردّ يومياً من ٩ صباحاً حتى ٩ مساءً.
              </p>
              <a
                href={waGeneral}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN} h-13 gap-2.5 px-8 text-base focus-visible:ring-ring`}
              >
                <WhatsAppIcon className="size-5" />
                ابدئي المحادثة
              </a>
              <a
                href={`tel:+${WA_NUMBER}`}
                dir="ltr"
                className="flex min-h-11 items-center rounded-sm font-medium tracking-wide text-espresso/80 transition-colors hover:text-espresso focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                {WA_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ───────── footer ───────── */}
      <footer id="contact" className="scroll-mt-24 bg-night text-ivory">
        <div className={`${CONTAINER} grid gap-12 py-16 md:grid-cols-3`}>
          <div className="flex flex-col gap-3">
            <p className="font-display text-3xl font-bold">حجابك</p>
            <p className="max-w-xs text-sm leading-7 text-ivory/60 text-pretty">
              مشغل أردني للخُمُر والطُرَح والنُقُب والعبايات — سِترٌ يليق بكِ.
            </p>
          </div>
          <nav aria-label="روابط الصفحة" className="flex flex-col items-start gap-3">
            <h3 className="text-sm font-bold text-brass">روابط</h3>
            <a href="#collection" className="-my-1.5 rounded-sm py-1.5 text-sm text-ivory/70 transition-colors hover:text-ivory focus-visible:ring-2 focus-visible:ring-brass focus-visible:outline-none">
              التشكيلة
            </a>
            <a href="#fabrics" className="-my-1.5 rounded-sm py-1.5 text-sm text-ivory/70 transition-colors hover:text-ivory focus-visible:ring-2 focus-visible:ring-brass focus-visible:outline-none">
              خاماتنا
            </a>
            <a href="#order" className="-my-1.5 rounded-sm py-1.5 text-sm text-ivory/70 transition-colors hover:text-ivory focus-visible:ring-2 focus-visible:ring-brass focus-visible:outline-none">
              طريقة الطلب
            </a>
          </nav>
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-sm font-bold text-brass">تواصلي معنا</h3>
            <a
              href={waGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="-my-1.5 flex items-center gap-2.5 rounded-sm py-1.5 text-sm text-ivory/70 transition-colors hover:text-ivory focus-visible:ring-2 focus-visible:ring-brass focus-visible:outline-none"
            >
              <WhatsAppIcon className="size-4 text-brass" />
              <span dir="ltr">{WA_DISPLAY}</span>
            </a>
            <p className="flex items-center gap-2.5 text-sm text-ivory/70">
              <Clock aria-hidden className="size-4 text-brass" />
              الردّ يومياً من ٩ صباحاً حتى ٩ مساءً
            </p>
            <p className="flex items-center gap-2.5 text-sm text-ivory/70">
              <MapPin aria-hidden className="size-4 text-brass" />
              عمّان، الأردن — توصيل لكل المحافظات
            </p>
          </div>
        </div>
        <div className={`${CONTAINER} flex flex-wrap items-center justify-between gap-3 border-t border-ivory/10 py-6 text-xs text-ivory/50`}>
          <p>© ٢٠٢٦ حجابك — جميع الحقوق محفوظة.</p>
          <p>صُنع بحبٍّ في عمّان</p>
        </div>
      </footer>
    </>
  );
}
