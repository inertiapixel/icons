import React from "react";

export const BrandKbinIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82057)">
<path d="M10.5854 9.506H8.15536C7.72136 8.574 7.45536 8 6.55936 8L4.15536 8.019C3.49336 8.019 2.80236 8.611 3.05236 9.506L5.26836 18.942C5.75436 20.685 6.07936 21 6.41336 21H7.05336"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.2751 3H19.9201C20.7601 3 21.1601 3.714 20.9401 4.287L16.2531 19.396C15.8331 20.529 15.0941 20.999 13.8991 20.999H6.41406C6.80406 20.999 7.17406 20.381 7.71006 18.938L12.1671 4.448C12.4931 3.618 12.9271 3 14.2751 3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82057">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
