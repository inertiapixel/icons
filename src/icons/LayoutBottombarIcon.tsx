import React from "react";

export const LayoutBottombarIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_57856)">
<path d="M18 3C18.7652 2.99996 19.5015 3.29233 20.0583 3.81728C20.615 4.34224 20.9501 5.06011 20.995 5.824L21 6V18C21 18.7652 20.7077 19.5015 20.1827 20.0583C19.6578 20.615 18.9399 20.9501 18.176 20.995L18 21H6C5.23479 21 4.49849 20.7077 3.94174 20.1827C3.38499 19.6578 3.04989 18.9399 3.005 18.176L3 18V6C2.99996 5.23479 3.29233 4.49849 3.81728 3.94174C4.34224 3.38499 5.06011 3.04989 5.824 3.005L6 3H18ZM18 5H6C5.75507 5.00003 5.51866 5.08996 5.33563 5.25272C5.15259 5.41547 5.03566 5.63975 5.007 5.883L5 6V15H19V6C19 5.75507 18.91 5.51866 18.7473 5.33563C18.5845 5.15259 18.3603 5.03566 18.117 5.007L18 5Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57856">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
