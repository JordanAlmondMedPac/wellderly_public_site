/**
 * Small raster on narrow viewports; full horizontal mark on md+ (crisp on retina).
 */
type BrandLogoProps = {
  alt?: string;
  /** Nav bar vs footer sizing */
  size?: 'header' | 'footer';
};

const LOGO_SM = '/assets/logo/wellderly-horizontal-small-web-v2.png';
const LOGO_LG = '/assets/logo/wellderly-horizontal.png';

export function BrandLogo({
  alt = 'Wellderly',
  size = 'header',
}: BrandLogoProps) {
  const className =
    size === 'header'
      ? 'h-9 w-auto max-w-[min(100%,220px)] sm:h-10 md:h-11'
      : 'h-8 w-auto max-w-[200px] opacity-95 sm:h-9 md:max-w-[240px]';

  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={LOGO_SM} />
      <img
        src={LOGO_LG}
        alt={alt}
        width={251}
        height={101}
        className={className}
      />
    </picture>
  );
}
