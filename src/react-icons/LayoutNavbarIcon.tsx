import React from "react";

export const LayoutNavbarIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57814)">
<path d="M18 3C18.7652 2.99996 19.5015 3.29233 20.0583 3.81728C20.615 4.34224 20.9501 5.06011 20.995 5.824L21 6V18C21 18.7652 20.7077 19.5015 20.1827 20.0583C19.6578 20.615 18.9399 20.9501 18.176 20.995L18 21H6C5.23479 21 4.49849 20.7077 3.94174 20.1827C3.38499 19.6578 3.04989 18.9399 3.005 18.176L3 18V6C2.99996 5.23479 3.29233 4.49849 3.81728 3.94174C4.34224 3.38499 5.06011 3.04989 5.824 3.005L6 3H18ZM19 9H5V18C5.00003 18.2449 5.08996 18.4813 5.25272 18.6644C5.41547 18.8474 5.63975 18.9643 5.883 18.993L6 19H18C18.2449 19 18.4813 18.91 18.6644 18.7473C18.8474 18.5845 18.9643 18.3603 18.993 18.117L19 18V9Z" />
</g>
<defs>
<clipPath id="clip0_802_57814">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
