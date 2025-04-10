import React from "react";

export const BasketCheckIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_84207)">
<path d="M17 10L15 4" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 10L9 4" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.9992 20H7.24324C6.52664 20 5.83372 19.7434 5.28987 19.2768C4.74602 18.8102 4.38716 18.1643 4.27824 17.456L3.02324 10.304C2.97941 10.019 2.99773 9.72786 3.07694 9.45059C3.15616 9.17331 3.2944 8.91645 3.48218 8.6976C3.66997 8.47876 3.90286 8.30311 4.16488 8.1827C4.42691 8.06229 4.71187 7.99997 5.00024 8H18.9992C19.2876 7.99997 19.5726 8.06229 19.8346 8.1827C20.0966 8.30311 20.3295 8.47876 20.5173 8.6976C20.7051 8.91645 20.8433 9.17331 20.9225 9.45059C21.0017 9.72786 21.0201 10.019 20.9762 10.304L20.4972 13.033" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 14C10 14.5304 10.2107 15.0391 10.5858 15.4142C10.9609 15.7893 11.4696 16 12 16C12.5304 16 13.0391 15.7893 13.4142 15.4142C13.7893 15.0391 14 14.5304 14 14C14 13.4696 13.7893 12.9609 13.4142 12.5858C13.0391 12.2107 12.5304 12 12 12C11.4696 12 10.9609 12.2107 10.5858 12.5858C10.2107 12.9609 10 13.4696 10 14Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 19L17 21L21 17" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84207">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
