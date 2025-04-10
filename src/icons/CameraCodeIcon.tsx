import React from "react";

export const CameraCodeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_80282)">
<path d="M11 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V9C3 8.46957 3.21071 7.96086 3.58579 7.58579C3.96086 7.21071 4.46957 7 5 7H6C6.53043 7 7.03914 6.78929 7.41421 6.41421C7.78929 6.03914 8 5.53043 8 5C8 4.73478 8.10536 4.48043 8.29289 4.29289C8.48043 4.10536 8.73478 4 9 4H15C15.2652 4 15.5196 4.10536 15.7071 4.29289C15.8946 4.48043 16 4.73478 16 5C16 5.53043 16.2107 6.03914 16.5858 6.41421C16.9609 6.78929 17.4696 7 18 7H19C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V13" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.9476 13.5584C15.0654 12.9364 14.9835 12.2932 14.7135 11.7206C14.4436 11.148 13.9994 10.6755 13.4446 10.3707C12.8898 10.0659 12.2528 9.94439 11.6248 10.0236C10.9968 10.1027 10.4098 10.3785 9.94807 10.8115C9.48628 11.2445 9.17329 11.8124 9.05387 12.4341C8.93445 13.0557 9.01473 13.6992 9.28322 14.2724C9.55171 14.8457 9.99465 15.3193 10.5487 15.6256C11.1027 15.9318 11.7393 16.055 12.3676 15.9774" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 21L22 19L20 17" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 17L15 19L17 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80282">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
