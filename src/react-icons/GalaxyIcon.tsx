import React from "react";

export const GalaxyIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73066)">
<path d="M12 3C10.667 4 10 5.5 10 7.5C10 10.5 12 12 12 12C12 12 14 13.5 14 16.5C14 18.5 13.333 20 12 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.795 16.5C19.595 14.845 18.63 13.518 16.898 12.518C14.301 11.018 12.001 12 12.001 12C12.001 12 9.70203 12.982 7.10403 11.482C5.37203 10.482 4.40603 9.155 4.20703 7.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.795 7.50195C18.263 6.84695 16.63 7.01995 14.898 8.01995C12.301 9.51995 12.001 12.002 12.001 12.002C12.001 12.002 11.702 14.484 9.10403 15.984C7.37203 16.984 5.73903 17.157 4.20703 16.502"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73066">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
