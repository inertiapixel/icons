import React from "react";

export const BrandEnvatoIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82347)">
<path d="M4.71097 17.8769C4.17697 16.5379 3.36097 13.6989 4.83997 11.4069C6.25497 9.21391 8.60897 7.79891 9.93897 7.12891L4.71097 17.8769Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.7137 12.508C19.1737 15.917 17.6197 18.664 15.5587 19.856C11.4897 22.209 7.41472 20.306 6.26172 19.668C7.13872 18.232 10.6947 12.448 13.1437 9.077C15.8577 5.34 19.0077 3.099 19.7087 3C19.7087 3.201 19.7387 3.55 19.7797 4.03C19.9237 5.739 20.2227 9.294 19.7137 12.508Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82347">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
