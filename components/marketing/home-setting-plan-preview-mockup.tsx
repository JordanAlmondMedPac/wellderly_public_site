import { BrandLogo } from '@/components/layout/brand-logo';

type CategoryPreviewItem = {
  name: string;
  unlocked?: boolean;
};

const CATEGORY_PREVIEW_ITEMS: CategoryPreviewItem[] = [
  { name: 'Home Setting', unlocked: true },
  { name: 'Enriching Care' },
  { name: 'Life Easing Tools' },
  { name: 'Wellness & Social' },
  { name: 'Transportation' },
  { name: 'Legal & Financial' },
];

const FUNDING_SOURCES = [
  'Medicaid',
  'VA Benefits',
  'Long-Term Care Insurance',
  'Private Pay',
] as const;

function CategoryPreviewCard({ name, unlocked = false }: CategoryPreviewItem) {
  if (unlocked) {
    return (
      <article className="rounded-control border border-line/35 bg-white p-3">
        <p className="text-[0.75rem] font-semibold text-navy">{name}</p>
        <p className="mt-1 text-xs leading-[1.45] text-navy/78">
          Current category
        </p>
      </article>
    );
  }

  return (
    <article className="rounded-control border border-line/30 bg-canvas/70 p-3">
      <p className="inline-flex items-center gap-1.5 text-[0.75rem] font-semibold text-navy/72">
        <span aria-hidden="true">🔒</span>
        {name}
      </p>
      <p className="mt-1 text-xs leading-[1.45] text-navy/66">
        Available in full plan
      </p>
    </article>
  );
}

function NextCategoryNav({
  isFinalCategory = false,
}: {
  isFinalCategory?: boolean;
}) {
  const primaryLabel = isFinalCategory
    ? 'View Full Plan Summary →'
    : 'Continue to Enriching Care →';

  return (
    <section className="rounded-card border border-line/35 bg-white p-3.5 sm:p-4">
      <h3 className="text-[0.9375rem] font-semibold leading-snug text-navy sm:text-[1rem]">
        Continue your care plan
      </h3>
      {!isFinalCategory && (
        <p className="mt-1 text-[0.75rem] font-semibold text-navy/84">
          Next: Enriching Care
        </p>
      )}
      <p className="mt-2 text-xs leading-[1.5] text-navy/80">
        This section helps refine companionship, routines, care support, and
        daily assistance.
      </p>
      <div className="mt-3.5 flex flex-col items-start gap-2.5">
        <span
          className="inline-flex min-h-9 items-center rounded-control bg-coral px-3.5 py-2 text-xs font-semibold text-white"
          aria-label={primaryLabel}
        >
          {primaryLabel}
        </span>
        <span className="text-xs font-medium text-navy/72">
          Back to all categories
        </span>
      </div>
    </section>
  );
}

export function HomeSettingPlanPreviewMockup() {
  return (
    <section
      aria-labelledby="home-setting-plan-preview-title"
      className="w-full rounded-shell border border-line/45 bg-[#fdfaf5] p-3 shadow-[0_18px_36px_-30px_rgba(9,22,42,0.35)] sm:p-4"
    >
      <div className="overflow-hidden rounded-card border border-line/40 bg-white">
        <header className="flex items-center justify-between border-b border-line/35 px-4 py-3 sm:px-5">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-medium text-navy/82"
            aria-label="Back to Categories"
          >
            <span aria-hidden="true">&#8592;</span>
            Back to Categories
          </span>
          <BrandLogo alt="Wellderly" size="header" />
          <span className="text-xs font-medium text-navy/82" aria-label="Edit plan">
            Edit
          </span>
        </header>

        <main className="space-y-3 bg-[#fbf8f3] p-3 sm:space-y-3.5 sm:p-4">
          <section className="rounded-card border border-line/35 bg-white p-3.5 sm:p-4">
            <h2
              id="home-setting-plan-preview-title"
              className="text-[1rem] font-semibold leading-tight text-navy sm:text-[1.0625rem]"
            >
              Home Setting Plan for Jessie
            </h2>
            <div className="mt-2 space-y-0.5 text-[0.75rem] leading-[1.5] text-navy/82 sm:text-[0.8125rem]">
              <p>Primary Recommendation:</p>
              <p className="font-semibold text-navy">Aging in Place at Home with support services</p>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <article className="rounded-card border border-line/35 bg-white p-3.5 sm:p-4">
              <h3 className="text-[0.9375rem] font-semibold leading-snug text-navy sm:text-[1rem]">
                Top Recommendation
              </h3>
              <p className="mt-1 text-[0.8125rem] font-semibold text-navy">
                Home Instead - Columbiaville, OH
              </p>
              <ul className="mt-2 space-y-1 text-[0.75rem] leading-[1.45] text-navy/82">
                <li>
                  9.5 <abbr title="miles">mi</abbr> away
                </li>
                <li>4.7 stars (180+ reviews)</li>
                <li>Veteran-connected team with family-style environment</li>
                <li>May fit if she likes: BBQ, sports, and social community events</li>
              </ul>
              <p className="mt-3 inline-flex rounded-full bg-[#fde9de] px-2.5 py-1 text-[0.6875rem] font-semibold text-[#9a3a24]">
                $2,765/month
              </p>
              <span
                className="mt-4 inline-flex rounded-control bg-coral px-3 py-1.5 text-xs font-semibold text-white"
                aria-label="See reviews"
              >
                See reviews &#8594;
              </span>
            </article>

            <article className="rounded-card border border-line/35 bg-white p-3.5 sm:p-4">
              <h3 className="text-[0.9375rem] font-semibold leading-snug text-navy sm:text-[1rem]">
                Cost and Funding
              </h3>
              <div className="mt-2 grid gap-3 sm:grid-cols-2 sm:gap-4">
                <div>
                  <p className="text-[0.75rem] font-semibold text-navy/84">
                    Monthly range (Columbus, OH 2025)
                  </p>
                  <ul className="mt-1.5 space-y-1 text-xs leading-[1.45] text-navy/82">
                    <li>Home + support: $2,000 - $4,500</li>
                    <li>Independent living: $2,800 - $4,900</li>
                    <li>Assisted Living: $4,200 - $6,800</li>
                  </ul>
                </div>
                <div>
                  <p className="text-[0.75rem] font-semibold text-navy/84">
                    Your estimated out-of-pocket cost
                  </p>
                  <p className="mt-1.5 text-xs leading-[1.45] text-navy/82">
                    $2,450 - $2,750/mo
                  </p>
                  <p className="mt-1 text-xs leading-[1.45] text-navy/76">
                    After long-term care VA and state Medicaid support.
                  </p>
                </div>
              </div>
              <div className="mt-3.5">
                <p className="text-[0.75rem] font-semibold text-navy/84">
                  Possible Funding sources:
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {[
                    ...FUNDING_SOURCES,
                  ].map((source) => (
                    <span
                      key={source}
                      className="rounded-full border border-line/45 bg-canvas px-2 py-0.5 text-[0.6875rem] font-semibold text-navy/74"
                    >
                      {source}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </section>

          <section className="rounded-card border border-line/35 bg-white p-3.5 sm:p-4">
            <h3 className="text-[0.9375rem] font-semibold leading-snug text-navy sm:text-[1rem]">
              Your full plan includes 6 care areas
            </h3>
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {CATEGORY_PREVIEW_ITEMS.map((category) => (
                <CategoryPreviewCard
                  key={category.name}
                  name={category.name}
                  unlocked={category.unlocked}
                />
              ))}
            </div>
          </section>

          <section className="rounded-card border border-line/35 bg-white p-3.5 sm:p-4">
            <h3 className="text-[0.9375rem] font-semibold leading-snug text-navy sm:text-[1rem]">
              Unlock Full Home Setting Plan
            </h3>
            <p className="mt-1 text-xs leading-[1.5] text-navy/80">
              Get detailed local recommendations, funding pathways, and full
              guidance across all six care areas.
            </p>
            <div className="mt-3.5 flex flex-col items-start gap-2.5 sm:flex-row sm:items-center sm:justify-between">
              <p className="rounded-full bg-[#fde9de] px-2.5 py-1 text-[0.6875rem] font-semibold text-[#9a3a24]">
                Cost Estimate: $29 one-time
              </p>
              <span
                className="inline-flex min-h-9 items-center rounded-control bg-coral px-3.5 py-2 text-xs font-semibold text-white"
                aria-label="Unlock full home setting plan"
              >
                Unlock full plan →
              </span>
            </div>
          </section>

          <section className="rounded-card border border-line/35 bg-white p-3.5 sm:p-4">
            <h3 className="text-[0.9375rem] font-semibold leading-snug text-navy sm:text-[1rem]">
              Why it fits Jessie
            </h3>
            <p className="mt-1 text-[0.75rem] font-semibold text-navy/82">
              Tied to your answers:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-[0.75rem] leading-[1.45] text-navy/82">
              <li>Used to active + light structured routines</li>
              <li>Lives near family support</li>
              <li>Mild cognitive concerns</li>
              <li>Looking for safe social support as needs progress</li>
            </ul>
            <p className="mt-3 text-[0.75rem] leading-[1.45] text-navy/82">
              This option keeps Jessie in familiar environment while adding the
              right level of safety and support.
            </p>
            <span
              className="mt-3 inline-flex rounded-control border border-line/45 bg-canvas px-3 py-1.5 text-xs font-semibold text-navy/82"
              aria-label="See communication and routine alignment details"
            >
              See if getting care aligns for communication and routines &#8594;
            </span>
          </section>

          <section className="rounded-card border border-line/35 bg-white p-3.5 sm:p-4">
            <h3 className="text-[0.9375rem] font-semibold leading-snug text-navy sm:text-[1rem]">
              Compare your options
            </h3>
            <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
              <article className="rounded-control border border-line/30 bg-canvas/60 p-2.5">
                <p className="text-[0.75rem] font-semibold text-navy">Aging in Place</p>
                <p className="mt-1 text-xs leading-[1.4] text-navy/82">
                  Best fit if Jessie stays in familiar home with support.
                </p>
                <p className="mt-1.5 text-[0.6875rem] font-semibold text-[#a24a2d]">
                  Approx. cost: $2,765/mo
                </p>
              </article>
              <article className="rounded-control border border-line/30 bg-canvas/60 p-2.5">
                <p className="text-[0.75rem] font-semibold text-navy">Independent Living</p>
                <p className="mt-1 text-xs leading-[1.4] text-navy/82">
                  Best for social lifestyle with fewer care needs.
                </p>
                <p className="mt-1.5 text-[0.6875rem] font-semibold text-navy/72">
                  Cost: $2,950 - $4,500
                </p>
              </article>
              <article className="rounded-control border border-line/30 bg-canvas/60 p-2.5">
                <p className="text-[0.75rem] font-semibold text-navy">Assisted Living</p>
                <p className="mt-1 text-xs leading-[1.4] text-navy/82">
                  Best for consistent daily support if needs increase.
                </p>
                <p className="mt-1.5 text-[0.6875rem] font-semibold text-navy/72">
                  Typical: $4,200 - $6,800
                </p>
              </article>
            </div>
          </section>

          <NextCategoryNav />

          <footer className="flex flex-col items-start justify-between gap-3 px-1 pt-1 sm:flex-row sm:items-center">
            <p className="max-w-[30rem] text-xs leading-[1.45] text-navy/74">
              You can update your answers at any time. We&apos;ll adjust your
              plan based on any changes.
            </p>
            <span
              className="inline-flex rounded-control bg-coral px-3.5 py-1.5 text-xs font-semibold text-white"
              aria-label="Edit answers"
            >
              Edit answers
            </span>
          </footer>
        </main>
      </div>
    </section>
  );
}
