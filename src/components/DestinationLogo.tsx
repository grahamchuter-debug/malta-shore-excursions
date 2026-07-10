import {
  destinationIdentity,
  type LogoConcept,
  type LogoTone,
  type LogoVariant,
} from "@/data/destination-identity";

type DestinationLogoProps = {
  variant?: LogoVariant;
  /** Override active concept for local review — defaults to config. */
  concept?: LogoConcept;
  tone?: LogoTone;
  className?: string;
  /** When true, omit the outer accessible name (parent Link provides it). */
  decorative?: boolean;
};

function MarkSvg({
  concept,
  tone,
  size,
}: {
  concept: LogoConcept;
  tone: LogoTone;
  size: number;
}) {
  const onDark = tone === "on-dark";
  // Grand Harbour navy ink / fortress-red accent / limestone soft.
  const ink = onDark ? "#efe4d2" : "#0f2234";
  const accent = onDark ? "#d97a63" : "#a84b3d";
  const soft = onDark ? "rgba(239,228,210,0.32)" : "rgba(15,34,52,0.16)";

  if (concept === "harbour-m") {
    // Fallback mark: stylised M rising from a harbour waterline.
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <rect x="1" y="1" width="38" height="38" rx="8" stroke={soft} strokeWidth="1.25" />
        <path
          d="M10 28V12.5L17.2 24.2h1.1L25.5 12.5V28"
          stroke={ink}
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 31.5c3.4-1.7 6.9-2.6 11.5-2.6s8.1.9 11.5 2.6"
          stroke={accent}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Primary mark (harbour-fortress): a fortified harbour arch — restrained
  // battlements above a gateway, with a minimal eight-point star influence
  // (not a literal, oversized Maltese cross).
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="1" y="1" width="38" height="38" rx="8" stroke={soft} strokeWidth="1.25" />

      {/* Battlements / fortress skyline */}
      <path
        d="M9 15.5v-2.6h3v-2.4h2.6v2.4h2.8v-2.4h2.6v2.4h2.8v-2.4h2.6v2.4h3v2.6"
        stroke={ink}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Fortress piers */}
      <path d="M11 15.5V29" stroke={ink} strokeWidth="1.7" strokeLinecap="round" />
      <path d="M29 15.5V29" stroke={ink} strokeWidth="1.7" strokeLinecap="round" />

      {/* Harbour gate arch */}
      <path
        d="M15.5 29v-5.4c0-2.6 2-4.6 4.5-4.6s4.5 2 4.5 4.6V29"
        stroke={soft}
        strokeWidth="1.35"
        strokeLinecap="round"
      />

      {/* Waterline */}
      <path d="M7.5 29H32.5" stroke={ink} strokeWidth="1.7" strokeLinecap="round" />
      <path d="M9.5 32.2c2.2-1 4-1.5 6-1.5" stroke={accent} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M24.5 30.7c2 0 3.8.5 6 1.5" stroke={accent} strokeWidth="1.3" strokeLinecap="round" />

      {/* Restrained eight-point star influence — a small crossed mark, not a full cross */}
      <g stroke={accent} strokeWidth="1.15" strokeLinecap="round">
        <path d="M20 6.4v3.4" />
        <path d="M18.3 8.1l3.4 0" />
        <path d="M18.6 6.9l2.8 1.7" />
        <path d="M21.4 6.9l-2.8 1.7" />
      </g>
    </svg>
  );
}

/**
 * Reusable World 2.0 destination wordmark for Malta.
 * HTML text for accessibility + inline SVG mark (no raster assets).
 */
export function DestinationLogo({
  variant = "full",
  concept = destinationIdentity.logoConcept,
  tone = "default",
  className = "",
  decorative = false,
}: DestinationLogoProps) {
  const { destination, descriptor, strapline, accessibleName } = destinationIdentity;
  const onDark = tone === "on-dark";
  const markSize = variant === "mark" ? 32 : variant === "compact" ? 32 : 34;

  if (variant === "mark") {
    return (
      <span
        className={`inline-flex items-center justify-center ${className}`}
        {...(decorative
          ? { "aria-hidden": true }
          : { role: "img", "aria-label": accessibleName })}
      >
        <MarkSvg concept={concept} tone={tone} size={markSize} />
      </span>
    );
  }

  const titleClass = onDark ? "text-white" : "text-coastal-900";
  const descriptorClass = onDark ? "text-white/75" : "text-coastal-700";
  const straplineClass = onDark ? "text-maple-400/95" : "text-maple-600";

  return (
    <span
      className={`inline-flex items-center gap-1.5 min-w-0 sm:gap-2 ${className}`}
      {...(decorative ? { "aria-hidden": true } : {})}
    >
      <MarkSvg concept={concept} tone={tone} size={markSize} />
      <span className="min-w-0 leading-none">
        <span
          className={`block font-display text-[1.05rem] font-semibold tracking-[0.04em] uppercase sm:text-[1.125rem] ${titleClass}`}
        >
          {destination}
        </span>
        <span
          className={`mt-0.5 block text-[0.62rem] font-semibold uppercase tracking-[0.14em] sm:text-[0.68rem] ${descriptorClass}`}
        >
          {descriptor}
        </span>
        {variant === "full" && strapline ? (
          <span
            className={`mt-1 block text-[0.625rem] font-medium uppercase tracking-[0.12em] sm:text-[0.65rem] ${straplineClass}`}
            style={{ letterSpacing: "0.12em" }}
          >
            {strapline}
          </span>
        ) : null}
      </span>
    </span>
  );
}
