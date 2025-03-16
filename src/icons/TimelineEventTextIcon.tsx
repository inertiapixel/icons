import * as React from "react";
import type { SVGProps } from "react";
const SvgTimelineEventTextIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#timeline-event-text-icon_svg__a)"
    >
      <path d="M10 20a2 2 0 1 0 4 0 2 2 0 0 0-4 0M10 20H4M14 20h6M12 15l-2-2H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3zM9 6h6M9 9h3" />
    </g>
    <defs>
      <clipPath id="timeline-event-text-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTimelineEventTextIcon;
