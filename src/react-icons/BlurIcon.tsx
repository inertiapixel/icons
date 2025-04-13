import React from "react";

export const BlurIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_83642)">
<path d="M11.9984 21C12.7816 21.0006 13.5615 20.8991 14.3184 20.698C16.0817 20.2289 17.6609 19.235 18.8464 17.8479C20.0319 16.4608 20.7678 14.7462 20.9565 12.9313C21.1453 11.1164 20.7779 9.28704 19.9031 7.68573C19.0283 6.08442 17.6875 4.78683 16.0584 3.965C14.8452 3.35283 13.5092 3.02332 12.1505 3.00119C10.7918 2.97907 9.44569 3.26489 8.21323 3.83723C6.98076 4.40957 5.8939 5.25357 5.03417 6.3059C4.17444 7.35824 3.56416 8.59159 3.24912 9.91345C2.93408 11.2353 2.92245 12.6113 3.21511 13.9383C3.50777 15.2653 4.09712 16.5088 4.93894 17.5755C5.78077 18.6422 6.85322 19.5045 8.07584 20.0975C9.29845 20.6906 10.6395 20.9992 11.9984 21Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 3V20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 9H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6H18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 18H18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_83642">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
