import * as React from "react";
import type { SVGProps } from "react";
const SvgCylinderPlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#cylinder-plus-icon_svg__a)"
    >
      <path d="M5 6c0 .394.181.784.533 1.148s.867.695 1.517.973c.65.279 1.422.5 2.271.65.85.151 1.76.229 2.679.229.92 0 1.83-.078 2.679-.228.85-.151 1.62-.372 2.27-.65.65-.28 1.166-.61 1.518-.974S19 6.394 19 6s-.181-.784-.533-1.148-.867-.695-1.517-.973c-.65-.279-1.422-.5-2.271-.65C13.829 3.077 12.919 3 12 3c-.92 0-1.83.078-2.679.228-.85.151-1.62.372-2.27.65-.65.28-1.166.61-1.518.974S5 5.606 5 6" />
      <path d="M5 6v12c0 1.657 3.134 3 7 3q.26 0 .515-.008M19 12V6M16 19h6M19 16v6" />
    </g>
    <defs>
      <clipPath id="cylinder-plus-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCylinderPlusIcon;
