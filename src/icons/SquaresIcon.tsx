import React from "react";

export const SquaresIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57160)">
<path d="M19 7C19.7956 7 20.5587 7.31607 21.1213 7.87868C21.6839 8.44129 22 9.20435 22 10V19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22H10C9.20435 22 8.44129 21.6839 7.87868 21.1213C7.31607 20.5587 7 19.7956 7 19V10C7 9.20435 7.31607 8.44129 7.87868 7.87868C8.44129 7.31607 9.20435 7 10 7H19Z" fill="black"/>
<path d="M14 2C14.7955 2 15.5584 2.31593 16.121 2.87833C16.6835 3.44072 16.9997 4.20352 17 4.999L10 5C8.67392 5 7.40215 5.52678 6.46447 6.46447C5.52678 7.40215 5 8.67392 5 10L4.999 17L4.824 16.995C4.06011 16.9501 3.34224 16.615 2.81728 16.0583C2.29233 15.5015 1.99996 14.7652 2 14V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H14Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57160">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
