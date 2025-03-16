import * as React from "react";
import type { SVGProps } from "react";
const SvgFileDatabaseIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#file-database-icon_svg__a)"
    >
      <path d="M8 12.75c0 .464.421.91 1.172 1.237.75.329 1.767.513 2.828.513s2.078-.184 2.828-.513c.75-.328 1.172-.773 1.172-1.237s-.421-.91-1.172-1.237C14.078 11.184 13.061 11 12 11s-2.078.184-2.828.513C8.422 11.84 8 12.286 8 12.75" />
      <path d="M8 12.5v3.75C8 17.216 9.79 18 12 18s4-.784 4-1.75V12.5M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2" />
    </g>
    <defs>
      <clipPath id="file-database-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFileDatabaseIcon;
