import React from "react";

export const WorldCodeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59727)">
<path d="M20.942 13.0205C21.1462 11.231 20.8088 9.42144 19.9734 7.82579C19.1381 6.23014 17.8432 4.92182 16.2563 4.07005C14.6693 3.21828 12.8633 2.86225 11.0718 3.048C9.28034 3.23374 7.58579 3.95273 6.20735 5.11196C4.82891 6.27119 3.82998 7.81734 3.33977 9.55043C2.84956 11.2835 2.89061 13.1238 3.45762 14.8333C4.02463 16.5429 5.09151 18.0429 6.52028 19.1395C7.94905 20.2361 9.67397 20.8788 11.472 20.9845"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.60156 9H20.4016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.60156 15H13.5016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.4997 3C9.81501 5.69961 8.92188 8.81787 8.92188 12C8.92188 15.1821 9.81501 18.3004 11.4997 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 3C14.5 6.206 15.337 9.913 15.008 13.537"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 21L22 19L20 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 17L15 19L17 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59727">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
