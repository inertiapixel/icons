import React from "react";

export const ChessKnight1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_79496)">
<path d="M8 16L6.553 16.724C6.38692 16.807 6.24722 16.9346 6.14955 17.0925C6.05188 17.2504 6.0001 17.4323 6 17.618V20H18V17.618C17.9999 17.4323 17.9481 17.2504 17.8504 17.0925C17.7528 16.9346 17.6131 16.807 17.447 16.724L16 16H8Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.99871 3.00026L9.99871 6.00026L6.50771 8.14826C6.32212 8.26231 6.17884 8.43383 6.09966 8.63675C6.02048 8.83968 6.00972 9.06291 6.06902 9.27251C6.12833 9.48211 6.25445 9.66662 6.42821 9.79798C6.60198 9.92933 6.81388 10.0004 7.03171 10.0003H9.99871L7.92571 16.0003H15.8867L15.9987 11.0003C15.9987 8.00026 14.9087 5.01726 11.9987 4.00026C10.0587 3.32226 9.05871 2.98926 8.99871 3.00026Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79496">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
