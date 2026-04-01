type CardProps = React.ComponentPropsWithoutRef<'div'>;

/** Elevated surface — matches assessment card + marketing panels */
export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={[
        'rounded-shell border border-line/80 bg-white',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  );
}

/** Soft tinted panel (how it works, etc.) */
export function TintedPanel({ className, ...props }: CardProps) {
  return (
    <div
      className={[
        'rounded-shell border border-line/60 bg-mist/40 p-6 shadow-sm sm:p-10 lg:p-12',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  );
}
