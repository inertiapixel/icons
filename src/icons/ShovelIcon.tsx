import React from "react";

export const ShovelIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63698)">
<path d="M17 4L20 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 5.5L10.5 13.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.27602 11.284L12.716 15.724C12.8059 15.8139 12.8772 15.9206 12.9259 16.0381C12.9745 16.1555 12.9996 16.2814 12.9996 16.4085C12.9996 16.5357 12.9745 16.6615 12.9259 16.779C12.8772 16.8964 12.8059 17.0032 12.716 17.093L10.012 19.797C9.2401 20.5603 8.19744 20.987 7.11188 20.9839C6.02632 20.9808 4.98612 20.5482 4.21858 19.7805C3.45104 19.0128 3.01856 17.9725 3.01564 16.887C3.01272 15.8014 3.43961 14.7588 4.20302 13.987L6.90702 11.284C6.99692 11.194 7.1037 11.1226 7.22124 11.0738C7.33878 11.0251 7.46478 11 7.59202 11C7.71926 11 7.84526 11.0251 7.9628 11.0738C8.08034 11.1226 8.18711 11.194 8.27702 11.284H8.27602Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63698">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
