type SectionProps = React.ComponentPropsWithoutRef<'section'>;

/** Horizontal padding + max width for marketing sections */
export function SectionContainer({ className, ...props }: SectionProps) {
  return (
    <section
      className={[
        'mx-auto w-full max-w-content px-4 sm:px-6 lg:px-10',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  );
}
