import React from "react";

export const ScissorsOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64531)">
<path d="M4.43038 4.44141C4.04489 4.67807 3.71791 4.99885 3.47391 5.37974C3.2299 5.76062 3.07519 6.19175 3.02133 6.64088C2.96748 7.09 3.01589 7.54549 3.16294 7.97326C3.30999 8.40104 3.55187 8.79002 3.87048 9.11111C4.18909 9.4322 4.57619 9.67708 5.00281 9.82744C5.42943 9.9778 5.88453 10.0297 6.33405 9.97937C6.78358 9.929 7.2159 9.77763 7.59867 9.53658C7.98143 9.29553 8.30473 8.97105 8.54438 8.58741"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 17C3 17.7956 3.31607 18.5587 3.87868 19.1213C4.44129 19.6839 5.20435 20 6 20C6.79565 20 7.55871 19.6839 8.12132 19.1213C8.68393 18.5587 9 17.7956 9 17C9 16.2044 8.68393 15.4413 8.12132 14.8787C7.55871 14.3161 6.79565 14 6 14C5.20435 14 4.44129 14.3161 3.87868 14.8787C3.31607 15.4413 3 16.2044 3 17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.60156 15.4L12.0016 12M14.0016 10L19.0016 5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64531">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
