import React from "react";

export const TieIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61687)">
<path d="M12 22L16 18L13.5 7L14.493 4.351C14.5497 4.19974 14.5689 4.03699 14.549 3.87669C14.5291 3.71638 14.4706 3.56329 14.3786 3.43051C14.2866 3.29772 14.1638 3.1892 14.0207 3.11423C13.8777 3.03925 13.7185 3.00006 13.557 3H10.443C10.2815 3.00006 10.1223 3.03925 9.97926 3.11423C9.83617 3.1892 9.71338 3.29772 9.62138 3.43051C9.52939 3.56329 9.47093 3.71638 9.45101 3.87669C9.43109 4.03699 9.4503 4.19974 9.507 4.351L10.5 7L8 18L12 22Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.5 7H13.5L18.5 12.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61687">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
