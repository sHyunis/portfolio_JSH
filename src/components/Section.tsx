// Section.tsx
import React, { forwardRef } from "react";

interface SectionProps {
  id: string;
  children: React.ReactNode;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, children }, ref) => {
    return (
      <section id={id} ref={ref} className="min-h-screen p-8">
        {children}
      </section>
    );
  },
);

export default Section;
