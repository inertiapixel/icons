import React from "react";

export const BrandStripeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_81464)">
<path d="M11.453 8.056C11.453 7.433 11.971 7.077 12.895 7.077C14.585 7.077 16.305 7.42 17.5 8L18 4C17.052 3.551 15.18 3 12.5 3C10.605 3 9.127 3.087 8 4C6.828 4.956 6 6.33 6 8C6 11.03 7.958 12.906 11 14C12.961 14.69 14 14.743 14 15.5C14 16.235 13.149 17 12 17C10.577 17 8.037 16.391 6.5 15.5L6 19.5C7.321 20.234 9.474 21 12 21C14 21 15.957 20.532 17.084 19.64C18.347 18.661 19 17.372 19 15.5C19 12.404 17.085 10.953 14 9.863C12.354 9.258 11.456 8.793 11.456 8.056H11.453Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81464">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
