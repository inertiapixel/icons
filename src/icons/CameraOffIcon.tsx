import React from "react";

export const CameraOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80238)">
<path d="M8.297 4.289C8.48398 4.10362 8.7367 3.99973 9 4H15C15.2652 4 15.5196 4.10536 15.7071 4.29289C15.8946 4.48043 16 4.73478 16 5C16 5.53043 16.2107 6.03914 16.5858 6.41421C16.9609 6.78929 17.4696 7 18 7H19C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V17M19.813 19.828C19.564 19.938 19.289 20 19 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V9C3 8.46957 3.21071 7.96086 3.58579 7.58579C3.96086 7.21071 4.46957 7 5 7H6C6.298 7 6.58 6.935 6.834 6.819"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.4237 10.4492C10.0379 10.6883 9.7114 11.0118 9.46872 11.3953C9.22605 11.7789 9.07357 12.2125 9.02276 12.6635C8.97196 13.1145 9.02415 13.5712 9.17541 13.9991C9.32666 14.427 9.57305 14.8151 9.896 15.134C10.219 15.4529 10.6101 15.6944 11.0399 15.8402C11.4697 15.9861 11.927 16.0325 12.3773 15.976C12.8276 15.9195 13.2593 15.7616 13.6398 15.5141C14.0202 15.2666 14.3396 14.936 14.5737 14.5472"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80238">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
