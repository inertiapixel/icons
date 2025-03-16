import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandAirtableIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-airtable-icon_svg__a)"
    >
      <path d="M3 10v8l7-3v-2.6zM3 6l9 3 9-3-9-3zM14 12.3V21l7-3v-8z" />
    </g>
    <defs>
      <clipPath id="brand-airtable-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandAirtableIcon;
