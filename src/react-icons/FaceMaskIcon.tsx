import React from "react";

export const FaceMaskIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_74480)">
<path d="M5 14.5H4.778C3.243 14.5 2 13.38 2 12C2 10.62 3.243 9.5 4.778 9.5H5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 14.5H19.222C20.756 14.5 22 13.38 22 12C22 10.62 20.756 9.5 19.222 9.5H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 10H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 14H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.55 18.8441L17.55 17.4151C17.9678 17.2956 18.3353 17.0433 18.5969 16.6964C18.8585 16.3494 19 15.9267 19 15.4921V8.51114C19 8.0766 18.8585 7.65388 18.5969 7.30692C18.3353 6.95996 17.9678 6.70764 17.55 6.58814L12.55 5.15914C12.1905 5.05633 11.8095 5.05633 11.45 5.15914L6.45 6.58814C6.03238 6.70759 5.665 6.95976 5.4034 7.30652C5.14179 7.65327 5.00019 8.07577 5 8.51014V15.4921C4.99998 15.9267 5.14148 16.3494 5.40309 16.6964C5.66471 17.0433 6.03221 17.2956 6.45 17.4151L11.45 18.8441C11.8095 18.947 12.1905 18.947 12.55 18.8441Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74480">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
