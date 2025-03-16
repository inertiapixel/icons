import * as React from "react";
import type { SVGProps } from "react";
const SvgFileSettingsIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#file-settings-icon_svg__a)"
    >
      <path d="M10 14a2 2 0 1 0 4 0 2 2 0 0 0-4 0M12 10.5V12M12 16v1.5M15.03 12.25l-1.3.75M10.269 15l-1.3.75M15 15.804l-1.285-.773M10.285 12.968 9 12.195M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2" />
    </g>
    <defs>
      <clipPath id="file-settings-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFileSettingsIcon;
