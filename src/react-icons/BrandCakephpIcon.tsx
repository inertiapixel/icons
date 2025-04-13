import React from "react";

export const BrandCakephpIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82636)">
<path d="M12 11L20 13C21.361 12.455 22 11.752 22 11V7.2C22 5.435 17.521 4 11.998 4C6.476 4 2 5.435 2 7.2V10C2 11.766 6.478 14 12 14V11Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 14V17L20 19C21.362 18.453 22 17.754 22 17V14C22 14.754 21.362 15.453 20 16L12 14Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 17C2 18.766 6.476 20 11.998 20L12 17C6.478 17 2 15.266 2 13.5V17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 10V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 10V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82636">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
