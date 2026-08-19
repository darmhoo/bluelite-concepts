import { ImageIcon } from "lucide-react";

export default function ImagePlaceholder({
  label,
  aspect = "aspect-[4/3]",
  className = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-sm border-2 border-dashed border-grey-dark bg-grey px-4 ${aspect} ${className}`}
    >
      <ImageIcon className="h-7 w-7 text-navy/25" strokeWidth={1.5} />
      <p className="max-w-[85%] text-center text-xs leading-snug text-navy/40">
        {label}
      </p>
    </div>
  );
}
