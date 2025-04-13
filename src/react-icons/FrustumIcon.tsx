import React from "react";

export const FrustumIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73082)">
<path d="M18.4033 5.50742L20.9413 15.6654C21.0532 16.1096 21.0085 16.5787 20.8146 16.9937C20.6208 17.4087 20.2897 17.7442 19.8773 17.9434L12.8413 21.3094C12.5788 21.4353 12.2914 21.5006 12.0003 21.5006C11.7092 21.5006 11.4218 21.4353 11.1593 21.3094L4.1243 17.9444C3.71188 17.7452 3.38082 17.4097 3.18698 16.9947C2.99314 16.5797 2.9484 16.1106 3.0603 15.6664L5.5993 5.50742C5.6717 5.21647 5.80923 4.94575 6.00151 4.71571C6.19379 4.48566 6.43581 4.30229 6.7093 4.17942L11.2053 2.16942C11.4555 2.05773 11.7263 2 12.0003 2C12.2743 2 12.5451 2.05773 12.7953 2.16942L17.2913 4.17942C17.8453 4.42542 18.2543 4.91542 18.4033 5.50742Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 4.82131L12.802 7.14531C12.55 7.25795 12.277 7.31617 12.001 7.31617C11.725 7.31617 11.452 7.25795 11.2 7.14531L6 4.82031"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7.32031V21.5003"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73082">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
