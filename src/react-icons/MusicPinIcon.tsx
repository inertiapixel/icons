import React from "react";

export const MusicPinIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67772)">
<path d="M3 17C3 17.7956 3.31607 18.5587 3.87868 19.1213C4.44129 19.6839 5.20435 20 6 20C6.79565 20 7.55871 19.6839 8.12132 19.1213C8.68393 18.5587 9 17.7956 9 17C9 16.2044 8.68393 15.4413 8.12132 14.8787C7.55871 14.3161 6.79565 14 6 14C5.20435 14 4.44129 14.3161 3.87868 14.8787C3.31607 15.4413 3 16.2044 3 17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 17V4H19V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 8H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.121 20.1216C21.5406 19.7021 21.8265 19.1676 21.9423 18.5856C22.0581 18.0036 21.9988 17.4004 21.7717 16.8522C21.5447 16.3039 21.1602 15.8353 20.6668 15.5057C20.1734 15.176 19.5934 15 19 15C18.4066 15 17.8266 15.176 17.3332 15.5057C16.8398 15.8353 16.4553 16.3039 16.2283 16.8522C16.0012 17.4004 15.9419 18.0036 16.0577 18.5856C16.1735 19.1676 16.4594 19.7021 16.879 20.1216C17.297 20.5406 18.004 21.1666 19 22.0006C20.051 21.1106 20.759 20.4846 21.121 20.1216Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 18V18.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67772">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
