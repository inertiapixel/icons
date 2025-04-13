import React from "react";

export const WorldBoltIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59753)">
<path d="M20.985 12.52C21.0927 10.6582 20.6194 8.80884 19.6305 7.22768C18.6416 5.64652 17.186 4.4116 15.4648 3.69365C13.7436 2.9757 11.8418 2.81017 10.0225 3.21995C8.20311 3.62972 6.55598 4.59456 5.30877 5.98109C4.06156 7.36762 3.27587 9.10735 3.06032 10.9598C2.84478 12.8122 3.21001 14.6859 4.10554 16.3217C5.00107 17.9576 6.38266 19.2748 8.05932 20.0914C9.73599 20.908 11.6249 21.1835 13.465 20.88"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.60156 9H20.4016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.60156 15H14.5016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.4997 3C9.81501 5.69961 8.92188 8.81787 8.92188 12C8.92188 15.1821 9.81501 18.3004 11.4997 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 3C14.813 6.706 15.57 10.856 14.77 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16L17 19H21L19 22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59753">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
