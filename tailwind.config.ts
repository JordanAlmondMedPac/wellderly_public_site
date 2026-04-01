import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sand: 'var(--color-sand)',
        canvas: 'var(--color-canvas)',
        navy: 'var(--color-navy)',
        ink: 'var(--color-ink)',
        coral: {
          DEFAULT: 'var(--color-coral)',
          hover: 'var(--color-coral-hover)',
        },
        mist: 'var(--color-mist)',
        line: 'var(--color-line)',
        /** PDF pink scale — warm surfaces */
        warm: {
          100: 'var(--wld-pink-100)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: 'var(--radius-card)',
        control: 'var(--radius-control)',
        shell: 'var(--radius-shell)',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        card: 'var(--shadow-card)',
      },
      maxWidth: {
        content: 'var(--max-content)',
        assess: 'var(--max-assess)',
      },
    },
  },
  plugins: [],
};

export default config;
