import React from "react";

export const CloudIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58352)">
<path d="M10.04 4.30488C12.235 3.63788 14.655 4.08088 16.4 5.48088C17.786 6.58888 18.588 8.16689 18.652 9.82089L18.655 10.0329L18.746 10.0359C21.046 10.1429 22.889 11.9969 22.996 14.3059L23 14.5169C23 16.9239 21.115 18.8889 18.745 18.9989L18.535 19.0039H6.657L6.435 18.9959C3.495 18.8859 1.118 16.5969 1.005 13.7329L1 13.5169C1 10.7699 3.08 8.50689 5.784 8.09989L5.898 8.08388L5.968 7.90288C6.631 6.28288 8.024 4.99689 9.797 4.38489L10.041 4.30488H10.04Z" />
</g>
<defs>
<clipPath id="clip0_802_58352">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
