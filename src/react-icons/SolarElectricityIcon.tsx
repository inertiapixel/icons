import React from "react";

export const SolarElectricityIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63431)">
<path d="M4 6.28122V17.7212C4 17.8732 4.03466 18.0232 4.10134 18.1598C4.16801 18.2964 4.26495 18.416 4.38479 18.5096C4.50462 18.6031 4.6442 18.668 4.79291 18.6995C4.94162 18.731 5.09555 18.7282 5.243 18.6912L11.243 17.1912C11.4592 17.1371 11.6512 17.0122 11.7883 16.8364C11.9255 16.6607 12 16.4442 12 16.2212V7.78122C12 7.5583 11.9255 7.34176 11.7883 7.16602C11.6512 6.99027 11.4592 6.8654 11.243 6.81122L5.243 5.31122C5.09555 5.27429 4.94162 5.27145 4.79291 5.30293C4.6442 5.33441 4.50462 5.39937 4.38479 5.49289C4.26495 5.58641 4.16801 5.70601 4.10134 5.84261C4.03466 5.97921 4 6.12922 4 6.28122Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 6V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12H4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 7L17 12H21L18 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63431">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
