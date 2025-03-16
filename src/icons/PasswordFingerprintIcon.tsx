import * as React from "react";
import type { SVGProps } from "react";
const SvgPasswordFingerprintIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#password-fingerprint-icon_svg__a)"
    >
      <path d="M17 8c.788 1 1 2 1 3v1M9 11c0-1.578 1.343-3 3-3s3 1.422 3 3v2M12 11v2" />
      <path d="M6 12v-1.397c-.006-1.999 1.136-3.849 2.993-4.85A6.39 6.39 0 0 1 15 5.748M12 17v4M10 20l4-2M10 18l4 2M5 17v4M3 20l4-2M3 18l4 2M19 17v4M17 20l4-2M17 18l4 2" />
    </g>
    <defs>
      <clipPath id="password-fingerprint-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPasswordFingerprintIcon;
