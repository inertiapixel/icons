import React from "react";

export const MoonOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67979)">
<path d="M7.96241 3.94919C9.2151 3.31894 10.5981 2.99117 12.0004 2.99219V3.00019H12.3934C11.4228 3.90022 10.7085 5.04175 10.3234 6.30819M10.1824 10.1482C10.3684 10.9712 10.6964 11.7742 11.1714 12.5212C12.2168 14.1656 13.8618 15.3379 15.7574 15.7892M19.6504 15.6792C19.8734 15.6122 20.0944 15.5352 20.3134 15.4462C20.2293 15.6484 20.1379 15.8476 20.0394 16.0432M18.3444 18.3802C16.6538 20.0656 14.3629 21.0105 11.9756 21.0068C9.58837 21.0031 7.30036 20.0513 5.61491 18.3607C3.92946 16.6701 2.98463 14.3791 2.98829 11.9919C2.99195 9.60466 3.94378 7.31664 5.63441 5.63119"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67979">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
