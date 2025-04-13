import React from "react";

export const BrandCodecovIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82598)">
<path d="M9.695 12.985C8.71701 12.3407 7.57116 11.9981 6.4 12C5.143 12 3.964 12.339 3 13C3 11.8181 3.23279 10.6478 3.68508 9.55585C4.13738 8.46392 4.80031 7.47177 5.63604 6.63604C6.47177 5.80031 7.46392 5.13738 8.55585 4.68508C9.64778 4.23279 10.8181 4 12 4C13.1819 4 14.3522 4.23279 15.4442 4.68508C16.5361 5.13738 17.5282 5.80031 18.364 6.63604C19.1997 7.47177 19.8626 8.46392 20.3149 9.55585C20.7672 10.6478 21 11.8181 21 13C20.034 12.336 18.86 12 17.6 12C16.627 11.9998 15.6686 12.2362 14.8074 12.6889C13.9462 13.1416 13.2079 13.7969 12.6563 14.5984C12.1047 15.3998 11.7563 16.3234 11.6411 17.2895C11.5259 18.2556 11.6473 19.2353 11.995 20.144"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82598">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
