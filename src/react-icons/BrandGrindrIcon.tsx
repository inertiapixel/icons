import React from "react";

export const BrandGrindrIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82139)">
<path d="M13 13.282C13 13.774 13.784 15 15.102 15C16.42 15 18 14.034 18 12.938C18 12.121 17.068 12 16.591 12C16.363 12 13 12.111 13 13.282Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 21C9.016 21 5.529 18.279 5.37 18.018C3.24 14.528 3 4.315 3 4.315L4.446 3C6.945 3.39 9.469 3.617 12 3.68C14.53 3.61662 17.0533 3.38948 19.554 3L21 4.315C21 4.315 20.76 14.528 18.63 18.019C18.47 18.279 14.984 21 12 21Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 13.282C11 13.774 10.216 15 8.898 15C7.58 15 6 14.034 6 12.938C6 12.121 6.932 12 7.409 12C7.637 12 11 12.111 11 13.282Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82139">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
