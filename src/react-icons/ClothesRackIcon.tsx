import React from "react";

export const ClothesRackIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78395)">
<path d="M10 5C10 5.53043 10.2107 6.03914 10.5858 6.41421C10.9609 6.78929 11.4696 7 12 7C12.5304 7 13.0391 6.78929 13.4142 6.41421C13.7893 6.03914 14 5.53043 14 5C14 4.46957 13.7893 3.96086 13.4142 3.58579C13.0391 3.21071 12.5304 3 12 3C11.4696 3 10.9609 3.21071 10.5858 3.58579C10.2107 3.96086 10 4.46957 10 5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 21H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.75781 9.24219C8.31498 9.79945 8.97646 10.2415 9.70448 10.5431C10.4325 10.8447 11.2128 10.9999 12.0008 10.9999C12.7888 10.9999 13.5691 10.8447 14.2971 10.5431C15.0252 10.2415 15.6866 9.79945 16.2438 9.24219"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78395">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
