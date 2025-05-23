import React from "react";

export const BrandNotionIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81844)">
<path d="M11 17.5V11H11.5L15.5 17H16V10.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.077 20.0707L7.547 20.9577C7.37939 20.9705 7.21125 20.9408 7.05814 20.8714C6.90503 20.8021 6.77188 20.6952 6.671 20.5607L4.2 17.2667C4.07018 17.0936 4 16.8831 4 16.6667V5.92571C4.00001 5.67383 4.09507 5.43123 4.26618 5.2464C4.4373 5.06156 4.67187 4.94811 4.923 4.92871L16.312 4.05271C16.7577 4.01859 17.202 4.13477 17.574 4.38271L19.109 5.40571C19.383 5.5883 19.6077 5.83571 19.7631 6.12599C19.9186 6.41627 19.9999 6.74044 20 7.06971V19.0737C20 19.3256 19.9049 19.5682 19.7338 19.753C19.5627 19.9379 19.3281 20.0513 19.077 20.0707Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.5 5.5L7 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 7L7 8V20.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81844">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
