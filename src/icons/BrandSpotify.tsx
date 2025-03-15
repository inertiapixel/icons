import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandSpotify = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#brand-spotify_svg__a)">
      <path
        fill="currentColor"
        d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-2.168 11.605c-1.285-1.927-4.354-2.132-6.387-.777a1 1 0 1 0 1.11 1.664c1.195-.797 3.014-.675 3.613.223a1 1 0 1 0 1.664-1.11M16.1 11.7c-2.469-1.852-5.895-2.187-8.608-.59a1 1 0 0 0 1.016 1.725c1.986-1.171 4.544-.92 6.392.465a1 1 0 0 0 1.2-1.6m1.43-3.048C13.853 6.354 9.764 6.5 6.553 8.106a1 1 0 0 0 .894 1.788c2.635-1.317 5.997-1.437 9.023.454a1 1 0 1 0 1.06-1.696"
      />
    </g>
    <defs>
      <clipPath id="brand-spotify_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandSpotify;
