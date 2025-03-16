import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandSvelteIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-svelte-icon_svg__a)"
    >
      <path d="m15 8-5 3 .82-.495c1.86-1.15 4.412-.49 5.574 1.352a3.91 3.91 0 0 1-1.264 5.42l-5.053 3.126c-1.86 1.151-4.312.591-5.474-1.251a3.91 3.91 0 0 1 1.263-5.42l.26-.16" />
      <path d="m7.999 17 5-3-.822.495c-1.86 1.151-4.411.491-5.574-1.35a3.91 3.91 0 0 1 1.264-5.42l5.054-3.128c1.86-1.15 4.311-.59 5.474 1.252a3.91 3.91 0 0 1-1.264 5.42l-.26.16" />
    </g>
    <defs>
      <clipPath id="brand-svelte-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandSvelteIcon;
