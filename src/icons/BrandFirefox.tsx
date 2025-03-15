import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandFirefox = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-firefox_svg__a)"
    >
      <path d="M4.03 7.818a9 9 0 1 0 12.823-3.4c-1.637-1.02-3.065-1.02-4.852-1.02h-1.646" />
      <path d="M4.914 9.484c-1.756-1.569-.805-5.38.109-6.17.086.896.585 1.208 1.11 1.685.88-.275 1.314-.282 1.868 0 .82-.91 1.694-2.354 2.628-2.093-1.082 1.741-.07 3.733 1.37 4.173-.17.975-1.484 1.913-2.76 2.686-1.295.938-.721 1.85 0 2.234.95.506 3.611-1 4.545.354-1.698.102-1.536 3.107-3.982 2.727 2.523.957 4.345.462 5.458-.34 1.965-1.52 2.879-3.542 2.879-5.557-.014-1.398.194-2.695-1.26-4.75" />
    </g>
    <defs>
      <clipPath id="brand-firefox_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandFirefox;
