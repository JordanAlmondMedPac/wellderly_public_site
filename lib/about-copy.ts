import { readFile } from 'node:fs/promises';
import path from 'node:path';

function cleanCopyLine(line: string) {
  return line
    .replace(/\u00a0/g, ' ')
    .trim()
    .replace(/^\*\*(.*)\*\*$/, '$1')
    .replace(/^\[(.*)\]$/, '$1')
    .replace(/^\*(.*)\*$/, '$1')
    .replace(/\*\*/g, '');
}

function contentLines(block: string[]) {
  return block.map(cleanCopyLine).filter(Boolean);
}

export type AboutCopy = {
  hero: {
    title: string;
    subtitle: string;
    supporting: string[];
    cta: string;
  };
  story: string[];
  vision: string[];
  challenge: { heading: string; bullets: string[]; closing: string };
  approach: {
    heading: string;
    intro: string;
    categoriesHeading: string;
    categories: string[];
    closing: string;
  };
  how: {
    heading: string;
    intro: string;
    steps: string[];
    subBullets: string[];
    closing: string;
  };
  promise: {
    heading: string;
    values: string[];
    becauseLine: string;
  };
  finalCta: { heading: string; button: string; copyright: string };
};

/** Split founder promise lines into title + supporting text without changing wording. */
export function splitPromiseValue(line: string): { title: string; body: string } {
  const normalized = line.replace(/\u00a0/g, ' ').trim();
  const spacedEnDash = normalized.match(/^(.+?)\s+–\s+(.+)$/);
  if (spacedEnDash) {
    return { title: spacedEnDash[1].trim(), body: spacedEnDash[2].trim() };
  }
  const tightDash = normalized.match(/^(.+?)([–—])(.+)$/);
  if (tightDash) {
    return { title: tightDash[1].trim(), body: tightDash[3].trim() };
  }
  return { title: '', body: normalized };
}

export async function loadAboutCopy(): Promise<AboutCopy> {
  const filePath = path.join(
    process.cwd(),
    'public/assets/copy/aboutUsContent.json'
  );
  const source = await readFile(filePath, 'utf8');

  const blocks = source
    .split('\n')
    .reduce<string[][]>(
      (acc, rawLine) => {
        if (rawLine.trim() === '---') {
          acc.push([]);
          return acc;
        }
        acc[acc.length - 1].push(rawLine);
        return acc;
      },
      [[]]
    )
    .map(contentLines)
    .filter((block) => block.length > 0);

  const heroBlock = blocks[0] ?? [];
  const storyBlock = blocks[1] ?? [];
  const visionBlock = blocks[2] ?? [];
  const challengeBlock = blocks[3] ?? [];
  const approachBlock = blocks[4] ?? [];
  const howBlock = blocks[5] ?? [];
  const promiseBlock = blocks[6] ?? [];
  const ctaBlock = blocks[7] ?? [];
  const copyrightBlock = blocks[8] ?? [];

  const challengeBullets = challengeBlock.filter((line) =>
    line.startsWith('- ')
  );
  const approachCategories = approachBlock.filter((line) =>
    line.startsWith('- ')
  );
  const howSubBullets = howBlock.filter((line) =>
    line.replace(/\u00a0/g, ' ').trimStart().startsWith('- ')
  );

  const supporting = [heroBlock[4], heroBlock[5]]
    .map((s) => (s ?? '').trim())
    .filter(Boolean);

  return {
    hero: {
      title: heroBlock[2] ?? '',
      subtitle: heroBlock[3] ?? '',
      supporting,
      cta: (heroBlock[6] ?? '').replace(' Button', '').trim(),
    },
    story: storyBlock,
    vision: visionBlock,
    challenge: {
      heading: challengeBlock[0] ?? '',
      bullets: challengeBullets.map((line) => line.replace(/^- /, '').trim()),
      closing:
        challengeBlock.find(
          (line) => !line.startsWith('- ') && line !== challengeBlock[0]
        ) ?? '',
    },
    approach: {
      heading: approachBlock[0] ?? '',
      intro: approachBlock[1] ?? '',
      categoriesHeading: (approachBlock[2] ?? '').replace(/\*\*$/g, '').trim(),
      categories: approachCategories.map((line) =>
        line.replace(/^- /, '').trim()
      ),
      closing:
        approachBlock.find(
          (line) =>
            !line.startsWith('- ') &&
            line !== approachBlock[0] &&
            line !== approachBlock[1] &&
            line !== approachBlock[2]
        ) ?? '',
    },
    how: {
      heading: howBlock[0] ?? '',
      intro: howBlock[1] ?? '',
      steps: howBlock.filter((line) => /^\d+\./.test(line)),
      subBullets: howSubBullets.map((line) =>
        line.replace(/^\s*-\s*/, '').trim()
      ),
      closing: howBlock[howBlock.length - 1] ?? '',
    },
    promise: {
      heading: promiseBlock[0] ?? '',
      values: promiseBlock.slice(1, 4),
      becauseLine: promiseBlock[4] ?? '',
    },
    finalCta: {
      heading: ctaBlock[0] ?? '',
      button: ctaBlock[1] ?? 'Start Your Free Assessment',
      copyright: copyrightBlock[0] ?? '',
    },
  };
}
