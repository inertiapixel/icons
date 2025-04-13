import React from "react";

export const WoodIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59761)">
<path d="M6 5.5C6 6.16304 6.63214 6.79893 7.75736 7.26777C8.88258 7.73661 10.4087 8 12 8C13.5913 8 15.1174 7.73661 16.2426 7.26777C17.3679 6.79893 18 6.16304 18 5.5C18 4.83696 17.3679 4.20107 16.2426 3.73223C15.1174 3.26339 13.5913 3 12 3C10.4087 3 8.88258 3.26339 7.75736 3.73223C6.63214 4.20107 6 4.83696 6 5.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.0008 5.5V10.126C18.2911 9.99453 18.6173 9.96489 18.9265 10.0419C19.2357 10.1189 19.5099 10.298 19.7047 10.5503C19.8994 10.8025 20.0033 11.1131 19.9995 11.4318C19.9957 11.7504 19.8845 12.0584 19.6838 12.306L19.5868 12.414L18.0008 14V18C18.0008 19.61 15.4608 20.925 12.2758 21H12.0008C8.68682 21 6.00082 19.657 6.00082 18V16L4.41482 14.414C4.18026 14.1798 4.03546 13.8705 4.00571 13.5404C3.97596 13.2102 4.06315 12.8801 4.25206 12.6077C4.44097 12.3353 4.71958 12.1379 5.03922 12.0501C5.35887 11.9622 5.69922 11.9894 6.00082 12.127V5.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 12.5V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 16V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59761">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
