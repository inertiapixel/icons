import React from "react";

export const PerspectiveOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_66729)">
<path d="M8.511 4.50391L18.141 5.87891C18.3794 5.91286 18.5975 6.03168 18.7553 6.21355C18.9131 6.39542 19 6.62812 19 6.86891V15.0019M18.141 18.1249L6.141 19.8389C5.9992 19.8591 5.85471 19.8486 5.71731 19.8081C5.57992 19.7676 5.45283 19.6981 5.34464 19.6042C5.23645 19.5103 5.14969 19.3943 5.09023 19.264C5.03077 19.1337 5 18.9921 5 18.8489V5.15491C5.00019 5.10906 5.00353 5.06329 5.01 5.01791" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66729">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
