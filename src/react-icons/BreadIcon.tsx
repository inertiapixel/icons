import React from "react";

export const BreadIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58740)">
<path d="M18.0004 3C18.7557 3.00012 19.4955 3.21407 20.1342 3.61712C20.773 4.02016 21.2846 4.59582 21.6099 5.27749C21.9351 5.95917 22.0607 6.719 21.9721 7.46908C21.8836 8.21916 21.5844 8.92883 21.1094 9.516L20.9994 9.642L21.0004 18C21.0004 18.7652 20.708 19.5015 20.1831 20.0583C19.6581 20.615 18.9403 20.9501 18.1764 20.995L18.0004 21H6.00036C5.20471 21 4.44165 20.6839 3.87904 20.1213C3.31643 19.5587 3.00036 18.7956 3.00036 18V9.644L2.88436 9.508C2.48174 9.00793 2.20539 8.4183 2.07868 7.78892C1.95197 7.15954 1.97861 6.50891 2.15636 5.892L2.22336 5.682C2.75536 4.157 4.15336 3.102 5.82436 3.005L17.9034 3.006L18.0004 3Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58740">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
