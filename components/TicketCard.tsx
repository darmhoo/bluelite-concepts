import { ReactNode } from "react";

export default function TicketCard({
  number,
  title,
  description,
  meta,
  children,
}: {
  number: string;
  title: string;
  description?: string;
  meta?: string;
  children?: ReactNode;
}) {
  return (
    <div className="ticket ticket-perf flex flex-col gap-4 px-7 py-6">
      <div className="flex items-start justify-between gap-4">
        <span className="ticket-number text-xs text-steam-dark">
          №&nbsp;{number}
        </span>
        {meta && (
          <span className="ticket-number text-xs font-medium text-blue">
            {meta}
          </span>
        )}
      </div>
      <h3 className="font-display text-xl font-semibold text-ink">
        {title}
      </h3>
      {description && (
        <p className="text-sm leading-relaxed text-ink/60">{description}</p>
      )}
      {children}
    </div>
  );
}
