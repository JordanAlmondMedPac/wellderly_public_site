'use client';

import { useState } from 'react';
import { SiteHeader } from '@/components/layout/site-header';
import { AssessmentShell } from '@/components/assessment/assessment-shell';
import { AmyPrompt } from '@/components/assessment/amy-prompt';
import { ProgressHeader } from '@/components/assessment/progress-header';
import { AssessmentOptionButton } from '@/components/assessment/option-button';
import { Card } from '@/components/ui/card';

const OPTIONS = [
  'Child',
  'Spouse or partner',
  'Sibling',
  'Other family member',
  'Friend',
  'Professional caregiver',
  'Other',
] as const;

const TOTAL_STEPS = 8;

/**
 * Assessment — relationship to care recipient.
 * Shares header, radii, type scale, and tone with marketing.
 */
export default function RelationshipPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <SiteHeader variant="assessment" />
      <AssessmentShell>
        <div className="flex w-full flex-col items-stretch">
          <Card className="w-full space-y-7 p-6 shadow-card sm:space-y-8 sm:p-8">
            <ProgressHeader
              currentStep={1}
              totalSteps={TOTAL_STEPS}
              backHref="/"
            />

            <AmyPrompt message="I’ll tailor the next questions based on how you’re connected — there’s no wrong answer here." />

            <div className="space-y-3">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-navy/45">
                About you
              </p>
              <h1
                id="relationship-heading"
                className="text-[1.375rem] font-semibold leading-snug tracking-tight text-navy sm:text-[1.5rem] sm:leading-tight"
              >
                What is your relationship to them?
              </h1>
            </div>

            <div
              className="flex flex-col gap-3.5 sm:gap-4"
              role="group"
              aria-labelledby="relationship-heading"
            >
              {OPTIONS.map((label) => (
                <AssessmentOptionButton
                  key={label}
                  label={label}
                  selected={selected === label}
                  onSelect={() => setSelected(label)}
                />
              ))}
            </div>
          </Card>

          <p className="mx-auto mt-8 max-w-[22rem] text-center text-[0.8125rem] leading-relaxed text-navy/42">
            Your answers help us personalize guidance. You can change this later.
          </p>
        </div>
      </AssessmentShell>
    </>
  );
}
