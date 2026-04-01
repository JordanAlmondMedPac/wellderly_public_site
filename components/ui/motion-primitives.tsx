'use client';

import { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type ChildrenOnly = { children: ReactNode; className?: string };

const easeOut = [0.16, 1, 0.3, 1] as const;

export function HeroReveal({
  children,
  className,
  delay = 0,
}: ChildrenOnly & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
}: ChildrenOnly & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.6, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HoverCard({ children, className }: ChildrenOnly) {
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)');
    const update = () => setDesktop(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return (
    <motion.div
      className={className}
      whileHover={
        desktop ? { y: -3, boxShadow: '0 10px 24px -18px rgba(9,22,42,0.22)' } : {}
      }
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
