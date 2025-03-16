import * as React from "react";
import type { SVGProps } from "react";
const SvgDiscGolfIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#disc-golf-icon_svg__a)"
    >
      <path d="M5 5h14M6 5c.32 6.744 2.74 9.246 6 10M18 5c-.32 6.744-2.74 9.246-6 10M10 5c0 4.915.552 7.082 2 10M14 5c0 4.915-.552 7.082-2 10M12 15v6M12 3v2M7 16c.64.64 1.509 1 2.414 1h5.172c.905 0 1.774-.36 2.414-1M11 21h2" />
    </g>
    <defs>
      <clipPath id="disc-golf-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDiscGolfIcon;
