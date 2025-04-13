import React from "react";

export const ClockExclamationIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78559)">
<path d="M20.9861 12.5007C21.0936 10.5712 20.5772 8.65831 19.5132 7.04506C18.4493 5.43182 16.8944 4.20387 15.0784 3.54286C13.2625 2.88186 11.2821 2.82291 9.43005 3.37473C7.57803 3.92655 5.9528 5.05983 4.7948 6.60694C3.6368 8.15404 3.00753 10.0328 3.00007 11.9653C2.99261 13.8977 3.60736 15.7813 4.75338 17.3373C5.8994 18.8933 7.51583 20.0391 9.36354 20.6052C11.2112 21.1713 13.1921 21.1276 15.0131 20.4807"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V12L15 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 22V22.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78559">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
