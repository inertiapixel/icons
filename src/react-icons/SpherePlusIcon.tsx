import React from "react";

export const SpherePlusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63241)">
<path d="M3 12C3 13.657 7.03 15 12 15C13.116 15 14.185 14.932 15.172 14.808M20.896 12.458C20.9632 12.3146 20.9987 12.1584 21 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.9834 12.5457C21.0942 10.7227 20.6477 8.90912 19.7032 7.3459C18.7587 5.78268 17.361 4.5438 15.6957 3.79382C14.0304 3.04384 12.1764 2.81825 10.3798 3.14704C8.5833 3.47582 6.92931 4.3434 5.63755 5.63454C4.3458 6.92568 3.47744 8.57927 3.1478 10.3757C2.81817 12.172 3.04288 14.0262 3.79207 15.6919C4.54126 17.3575 5.77947 18.7558 7.34225 19.701C8.90502 20.6462 10.7184 21.0936 12.5414 20.9837"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63241">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
