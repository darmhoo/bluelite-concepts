import { ReactNode } from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Image from "next/image";

export default function SpecTag({
  code,
  title,
  description,
  image,
  children,
}: {
  code: string;
  title: string;
  description?: string;
  image?: any;
  children?: ReactNode;
}) {
  return (
    <div className="spec-tag flex flex-col gap-3 px-6 py-6">
      {image && <Image alt={description ?? ""} src={image} className="aspect-[4/3]" />}
      <span className="batch-code text-xs text-navy/40">{code}</span>
      <h3 className="font-display text-lg font-semibold text-navy">
        {title}
      </h3>
      {description && (
        <p className="text-sm leading-relaxed text-navy/60">{description}</p>
      )}
      {children}
    </div>
  );
}
