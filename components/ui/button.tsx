import Link from 'next/link';

/** Shared primary CTA — landing + assessment flows */
export const primaryButtonClass =
  'inline-flex min-h-12 items-center justify-center rounded-control bg-coral px-8 py-3 text-center text-base font-semibold text-navy shadow-sm transition hover:bg-coral-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2';

/** Outline / secondary — quiet actions */
export const secondaryButtonClass =
  'inline-flex min-h-12 items-center justify-center rounded-control border border-line bg-white px-6 py-3 text-center text-base font-semibold text-navy transition hover:bg-mist/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2';

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

export function PrimaryButton({ className, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={[primaryButtonClass, className].filter(Boolean).join(' ')}
      {...props}
    />
  );
}

export function SecondaryButton({ className, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={[secondaryButtonClass, className].filter(Boolean).join(' ')}
      {...props}
    />
  );
}

type PrimaryLinkProps = React.ComponentPropsWithoutRef<typeof Link>;

export function PrimaryLink({ className, ...props }: PrimaryLinkProps) {
  return (
    <Link
      className={[primaryButtonClass, 'w-full sm:w-auto', className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  );
}
