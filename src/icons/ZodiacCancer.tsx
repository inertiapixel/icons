import * as React from "react";
import type { SVGProps } from "react";
const SvgZodiacCancer = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#zodiac-cancer_svg__a)"
    >
      <path d="M3 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0M15 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
      <path d="M3.001 11.998c-.148-1.124.158-2.254.885-3.278.728-1.025 1.854-1.908 3.266-2.564 1.413-.656 3.064-1.061 4.79-1.177 1.728-.115 3.47.064 5.06.52M21 12c.148 1.124-.157 2.254-.885 3.278s-1.854 1.908-3.266 2.564c-1.413.656-3.064 1.062-4.79 1.177A14.9 14.9 0 0 1 7 18.5" />
    </g>
    <defs>
      <clipPath id="zodiac-cancer_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgZodiacCancer;
