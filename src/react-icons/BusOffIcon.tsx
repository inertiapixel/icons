import React from "react";

export const BusOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80641)">
<path d="M4 17C4 17.5304 4.21071 18.0391 4.58579 18.4142C4.96086 18.7893 5.46957 19 6 19C6.53043 19 7.03914 18.7893 7.41421 18.4142C7.78929 18.0391 8 17.5304 8 17C8 16.4696 7.78929 15.9609 7.41421 15.5858C7.03914 15.2107 6.53043 15 6 15C5.46957 15 4.96086 15.2107 4.58579 15.5858C4.21071 15.9609 4 16.4696 4 17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.18 16.1719C16.011 16.5429 15.9594 16.9567 16.0321 17.3578C16.1048 17.759 16.2983 18.1284 16.5869 18.4164C16.8754 18.7045 17.245 18.8975 17.6463 18.9696C18.0476 19.0417 18.4613 18.9895 18.832 18.8199"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 17H2V6C2 5.73478 2.10536 5.48043 2.29289 5.29289C2.48043 5.10536 2.73478 5 3 5H5M9 5H17C19.761 5 22 8.134 22 12V17H21M16 17H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 5L17.5 12H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 10H10M14 10H17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 7V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 5V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80641">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
