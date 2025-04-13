import React from "react";

export const MushroomOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67876)">
<path d="M5.87402 5.89C4.65887 7.35383 3.9957 9.19753 4.00002 11.1C4.00002 11.3387 4.09484 11.5676 4.26362 11.7364C4.43241 11.9052 4.66133 12 4.90002 12H12M16 12H19.1C19.3387 12 19.5676 11.9052 19.7364 11.7364C19.9052 11.5676 20 11.3387 20 11.1C20 6.626 16.418 3 12 3C10.57 3 9.22602 3.38 8.06402 4.047"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 12V19C10 19.5304 10.2107 20.0391 10.5858 20.4142C10.9609 20.7893 11.4696 21 12 21C12.5304 21 13.0391 20.7893 13.4142 20.4142C13.7893 20.0391 14 19.5304 14 19V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67876">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
