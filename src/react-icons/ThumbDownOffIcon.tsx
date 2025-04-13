import React from "react";

export const ThumbDownOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61723)">
<path d="M7 13.001V7.00099M7 13.001H4C3.73478 13.001 3.48043 12.8956 3.29289 12.7081C3.10536 12.5206 3 12.2662 3 12.001V5.00099C3 4.73577 3.10536 4.48142 3.29289 4.29388C3.48043 4.10634 3.73478 4.00099 4 4.00099M7 13.001C8.06087 13.001 9.07828 13.4224 9.82843 14.1726C10.5786 14.9227 11 15.9401 11 17.001V18.001C11 18.5314 11.2107 19.0401 11.5858 19.4152C11.9609 19.7903 12.4696 20.001 13 20.001C13.5304 20.001 14.0391 19.7903 14.4142 19.4152C14.7893 19.0401 15 18.5314 15 18.001V15.001M17 13.001H18C18.5304 13.001 19.0391 12.7903 19.4142 12.4152C19.7893 12.0401 20 11.5314 20 11.001L19 6.00099C18.705 4.74099 17.89 3.92499 17 4.00099H10C9.43 4.00099 8.898 4.15999 8.444 4.43499"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61723">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
