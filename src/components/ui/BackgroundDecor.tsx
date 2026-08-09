/** Fondo decorativo fijo: grid de puntos + glows sutiles violeta/cian. No interactivo. */
export function BackgroundDecor() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-white dark:bg-slate-950"
    >
      <div className="bg-dot-grid absolute inset-0 opacity-[0.6] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)] dark:opacity-[0.35]" />
      <div className="glow-violet transform-gpu will-change-transform absolute -top-40 left-1/4 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full opacity-70 blur-2xl dark:opacity-100" />
      <div className="glow-cyan transform-gpu will-change-transform absolute top-1/3 right-0 h-[22rem] w-[22rem] translate-x-1/3 rounded-full opacity-70 blur-2xl dark:opacity-100" />
      <div className="glow-violet transform-gpu will-change-transform absolute bottom-0 left-0 h-[20rem] w-[20rem] -translate-x-1/3 rounded-full opacity-40 blur-2xl dark:opacity-60" />
    </div>
  );
}
