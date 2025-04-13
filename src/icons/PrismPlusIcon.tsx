import React from "react";

export const PrismPlusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65775)">
<path d="M12 9V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.02 21.655C12.7257 21.8757 12.3678 21.995 12 21.995C11.6322 21.995 11.2743 21.8757 10.98 21.655L5 17.17C4.68951 16.9371 4.4375 16.6352 4.26393 16.288C4.09036 15.9409 4 15.5581 4 15.17V4C4 3.73478 4.10536 3.48043 4.29289 3.29289C4.48043 3.10536 4.73478 3 5 3H19C19.2652 3 19.5196 3.10536 19.7071 3.29289C19.8946 3.48043 20 3.73478 20 4V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.30078 3.30078L10.9558 8.48678C11.2544 8.71951 11.6222 8.84589 12.0008 8.84589C12.3794 8.84589 12.7472 8.71951 13.0458 8.48678L19.7008 3.30078"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65775">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
