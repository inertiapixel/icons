import React from "react";

export const BasketShareIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84084)">
<path d="M17 10L15 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 10L9 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.4992 20H7.24324C6.52664 20 5.83372 19.7434 5.28987 19.2768C4.74602 18.8102 4.38716 18.1643 4.27824 17.456L3.02324 10.304C2.97941 10.019 2.99773 9.72786 3.07694 9.45059C3.15616 9.17331 3.2944 8.91645 3.48218 8.6976C3.66997 8.47876 3.90286 8.30311 4.16488 8.1827C4.42691 8.06229 4.71187 7.99997 5.00024 8H18.9992C19.2876 7.99997 19.5726 8.06229 19.8346 8.1827C20.0966 8.30311 20.3295 8.47876 20.5173 8.6976C20.7051 8.91645 20.8433 9.17331 20.9225 9.45059C21.0017 9.72786 21.0201 10.019 20.9762 10.304L20.4982 13.027"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 14C14 13.6044 13.8827 13.2178 13.6629 12.8889C13.4432 12.56 13.1308 12.3036 12.7654 12.1522C12.3999 12.0009 11.9978 11.9613 11.6098 12.0384C11.2219 12.1156 10.8655 12.3061 10.5858 12.5858C10.3061 12.8655 10.1156 13.2219 10.0384 13.6098C9.96126 13.9978 10.0009 14.3999 10.1522 14.7654C10.3036 15.1308 10.56 15.4432 10.8889 15.6629C11.2178 15.8827 11.6044 16 12 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 22L21 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 21.5V17H16.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84084">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
