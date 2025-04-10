import React from "react";

export const UserOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_60657)">
<path d="M8.17969 8.19039C8.37212 8.80648 8.71043 9.36701 9.16587 9.82436C9.62131 10.2817 10.1804 10.6224 10.7957 10.8174M14.3027 10.2724C14.7799 9.93571 15.1777 9.49859 15.4679 8.99177C15.7582 8.48494 15.9339 7.9207 15.9828 7.3387C16.0317 6.75669 15.9525 6.17104 15.7509 5.6229C15.5492 5.07476 15.23 4.57743 14.8156 4.16585C14.4012 3.75427 13.9017 3.43844 13.3522 3.24053C12.8027 3.04263 12.2165 2.96747 11.6349 3.02032C11.0532 3.07317 10.4902 3.25276 9.98534 3.54646C9.4805 3.84017 9.04611 4.24086 8.71269 4.72039" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C14.412 15 14.81 15.062 15.183 15.178M17.816 17.796C17.936 18.176 18 18.581 18 19V21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60657">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
