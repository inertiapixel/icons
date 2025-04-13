import React from "react";

export const HexagonalPrismIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71884)">
<path d="M20.7929 6.99609L17.0179 9.63909C16.6815 9.87394 16.2812 9.99994 15.8709 10.0001H8.13094C7.72094 10.0001 7.32094 9.87409 6.98494 9.63809L3.21094 6.99709"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 10V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 10V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.853 18.274L7.22 20.637C7.55602 20.8729 7.95647 20.9996 8.367 21H15.632C16.042 21 16.443 20.874 16.779 20.637L20.146 18.274C20.682 17.899 21 17.284 21 16.631V7.369C21 6.714 20.682 6.101 20.147 5.726L16.78 3.363C16.444 3.12715 16.0435 3.00041 15.633 3H8.367C7.957 3 7.556 3.126 7.22 3.363L3.853 5.726C3.58917 5.91131 3.3739 6.15748 3.22541 6.44366C3.07692 6.72984 2.99961 7.04759 3 7.37V16.631C3 17.286 3.318 17.899 3.853 18.274Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71884">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
