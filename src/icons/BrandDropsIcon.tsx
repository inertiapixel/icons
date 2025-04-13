import React from "react";

export const BrandDropsIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82379)">
<path d="M17.6362 7.416C18.7596 8.52074 19.5273 9.93591 19.8409 11.48C20.1545 13.024 19.9996 14.6266 19.3962 16.082C18.7871 17.5409 17.7595 18.7867 16.443 19.662C15.1265 20.5373 13.5801 21.0029 11.9992 21C10.4184 21.0027 8.8723 20.537 7.55599 19.6617C6.23967 18.7864 5.21217 17.5408 4.60319 16.082C3.99963 14.6267 3.84461 13.0242 4.15802 11.4801C4.47143 9.93607 5.23897 8.52085 6.36219 7.416L11.9992 2L17.6362 7.416Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.4665 10.923C14.9596 11.4233 15.2953 12.0572 15.4322 12.7462C15.569 13.4352 15.501 14.1492 15.2365 14.8C14.9776 15.4473 14.5312 16.0025 13.9547 16.3945C13.3782 16.7864 12.6977 16.9973 12.0005 17C11.3034 16.9973 10.6229 16.7864 10.0464 16.3945C9.46982 16.0025 9.02347 15.4473 8.76453 14.8C8.50005 14.1492 8.43203 13.4352 8.56887 12.7462C8.70572 12.0572 9.04143 11.4233 9.53453 10.923L12.0005 8.5L14.4665 10.923Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82379">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
