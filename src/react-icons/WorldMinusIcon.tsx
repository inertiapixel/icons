import React from "react";

export const WorldMinusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59650)">
<path d="M20.4829 15.0067C21.1288 13.1845 21.1707 11.2028 20.6025 9.35496C20.0344 7.50711 18.8863 5.89131 17.3283 4.74677C15.7703 3.60223 13.8851 2.9898 11.9519 3.00013C10.0187 3.01046 8.14021 3.64301 6.5945 4.80413C5.0488 5.96525 3.91806 7.59322 3.36968 9.44705C2.8213 11.3009 2.88442 13.282 3.5497 15.0972C4.21498 16.9123 5.44706 18.465 7.06354 19.5254C8.68002 20.5858 10.595 21.0974 12.5249 20.9847"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.60156 9H20.4016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.60156 15H20.4016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.4997 3C9.81501 5.69961 8.92188 8.81787 8.92188 12C8.92188 15.1821 9.81501 18.3004 11.4997 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 3C14.7352 6.57367 15.5577 10.8523 14.807 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59650">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
