import React from "react";

export const BandageOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84338)">
<path d="M10 12V12.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 14V14.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.5136 6.48758L12.5006 4.50058C13.432 3.58776 14.6861 3.07941 15.9902 3.086C17.2944 3.09259 18.5432 3.61358 19.4654 4.53576C20.3876 5.45794 20.9086 6.70679 20.9152 8.01094C20.9217 9.31508 20.4134 10.5691 19.5006 11.5006L17.4826 13.5186M15.5006 15.5006L11.5006 19.5006C10.5691 20.4134 9.31508 20.9217 8.01094 20.9152C6.70679 20.9086 5.45794 20.3876 4.53576 19.4654C3.61358 18.5432 3.09259 17.2944 3.086 15.9902C3.07941 14.6861 3.58776 13.432 4.50058 12.5006L8.50058 8.50058"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84338">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
