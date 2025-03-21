import * as React from "react";
import type { SVGProps } from "react";
const SvgDatabaseExportIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#database-export-icon_svg__a)"
    >
      <path d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3" />
      <path d="M4 6v6c0 1.657 3.582 3 8 3 1.118 0 2.183-.086 3.15-.241M20 12V6" />
      <path d="M4 12v6c0 1.657 3.582 3 8 3q.235 0 .466-.005M16 19h6M19 16l3 3-3 3" />
    </g>
    <defs>
      <clipPath id="database-export-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDatabaseExportIcon;
