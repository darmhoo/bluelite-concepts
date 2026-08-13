export default function Steam() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-2 left-1/2 flex -translate-x-1/2 gap-3"
    >
      <span className="h-10 w-2.5 rounded-full bg-lite/70 blur-[3px] animate-steam1" />
      <span className="h-14 w-3 rounded-full bg-lite/60 blur-[3px] animate-steam2" />
      <span className="h-8 w-2 rounded-full bg-lite/70 blur-[3px] animate-steam3" />
    </div>
  );
}
