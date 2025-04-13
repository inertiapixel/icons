import React from "react";

export const CurrencyRiyalIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77182)">
<path d="M15 9V11C15 11.5304 14.7893 12.0391 14.4142 12.4142C14.0391 12.7893 13.5304 13 13 13C12.4696 13 11.9609 12.7893 11.5858 12.4142C11.2107 12.0391 11 11.5304 11 11M11 11V10M11 11C11 11.5304 10.7893 12.0391 10.4142 12.4142C10.0391 12.7893 9.53043 13 9 13C8.46957 13 7.96086 12.7893 7.58579 12.4142C7.21071 12.0391 7 11.5304 7 11V10V14C7 14.5304 6.78929 15.0391 6.41421 15.4142C6.03914 15.7893 5.53043 16 5 16C4.46957 16 3.96086 15.7893 3.58579 15.4142C3.21071 15.0391 3 14.5304 3 14V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 12.01V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 10V11C22 12.3261 21.4732 13.5979 20.5355 14.5355C19.5979 15.4732 18.3261 16 17 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77182">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
