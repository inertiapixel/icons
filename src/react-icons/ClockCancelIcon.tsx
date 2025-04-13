import React from "react";

export const ClockCancelIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78604)">
<path d="M20.9965 12.2507C21.0467 10.4488 20.5547 8.67338 19.5842 7.15437C18.6137 5.63536 17.2094 4.44278 15.5532 3.73112C13.8971 3.01945 12.0654 2.8215 10.2955 3.16289C8.52551 3.50429 6.89885 4.36931 5.62621 5.64589C4.35357 6.92247 3.49359 8.5518 3.15767 10.3228C2.82174 12.0938 3.02536 13.9249 3.74215 15.5788C4.45893 17.2327 5.65585 18.6333 7.17785 19.5991C8.69985 20.5649 10.4768 21.0515 12.2785 20.9957"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19C16 19.7956 16.3161 20.5587 16.8787 21.1213C17.4413 21.6839 18.2044 22 19 22C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19C22 18.2044 21.6839 17.4413 21.1213 16.8787C20.5587 16.3161 19.7956 16 19 16C18.2044 16 17.4413 16.3161 16.8787 16.8787C16.3161 17.4413 16 18.2044 16 19Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 21L21 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V12L14 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78604">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
