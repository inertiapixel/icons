import React from "react";

export const SolarPanelIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63411)">
<path d="M4.28122 14H19.7212C19.8732 14 20.0232 13.9653 20.1598 13.8987C20.2964 13.832 20.416 13.735 20.5096 13.6152C20.6031 13.4954 20.668 13.3558 20.6995 13.2071C20.731 13.0584 20.7282 12.9044 20.6912 12.757L19.1912 6.757C19.1371 6.54075 19.0122 6.34881 18.8364 6.21166C18.6607 6.0745 18.4442 6.00001 18.2212 6H5.78122C5.5583 6.00001 5.34176 6.0745 5.16602 6.21166C4.99027 6.34881 4.8654 6.54075 4.81122 6.757L3.31122 12.757C3.27429 12.9044 3.27145 13.0584 3.30293 13.2071C3.33441 13.3558 3.39937 13.4954 3.49289 13.6152C3.58641 13.735 3.70601 13.832 3.84261 13.8987C3.97921 13.9653 4.12922 14 4.28122 14Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 10H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 6L9 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 6L15 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 14V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 18H17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63411">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
