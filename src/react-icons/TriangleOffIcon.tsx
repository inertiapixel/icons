import React from "react";

export const TriangleOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60928)">
<path d="M7.8245 7.83019L2.2565 17.1252C2.08939 17.4146 2.00096 17.7427 2.00001 18.0768C1.99905 18.411 2.0856 18.7396 2.25104 19.0299C2.41649 19.3203 2.65506 19.5622 2.94304 19.7317C3.23101 19.9013 3.55835 19.9924 3.8925 19.9962H19.9995M21.9975 18.0062C21.985 17.6965 21.8975 17.3945 21.7425 17.1262L13.6365 3.59019C13.466 3.30869 13.2257 3.07593 12.9389 2.91439C12.6522 2.75284 12.3286 2.66797 11.9995 2.66797C11.6704 2.66797 11.3468 2.75284 11.06 2.91439C10.7733 3.07593 10.533 3.30869 10.3625 3.59019L9.3345 5.30819"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60928">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
