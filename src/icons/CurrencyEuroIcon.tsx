import React from "react";

export const CurrencyEuroIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_77336)">
<path d="M17.1991 7C16.3552 6.03533 15.286 5.38281 14.1255 5.12426C12.965 4.8657 11.7649 5.01262 10.6756 5.5466C9.58643 6.08058 8.65658 6.97784 8.00269 8.12587C7.34881 9.27391 7 10.6216 7 12C7 13.3784 7.34881 14.7261 8.00269 15.8741C8.65658 17.0222 9.58643 17.9194 10.6756 18.4534C11.7649 18.9874 12.965 19.1343 14.1255 18.8758C15.286 18.6172 16.3552 17.9647 17.1991 17" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 10H5M5 14H13" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77336">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
