import React from "react";

export const BubblePlusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80922)">
<path d="M12.3983 19.0009C11.8608 19.0029 11.3278 18.9018 10.8283 18.7029L6.99834 21.0009V17.8669C6.60699 17.7764 6.24112 17.5987 5.92802 17.3471C5.61493 17.0955 5.36269 16.7764 5.19013 16.4137C5.01756 16.0509 4.92912 15.6539 4.93141 15.2523C4.9337 14.8506 5.02666 14.4546 5.20334 14.0939C4.2486 13.5446 3.51179 12.6837 3.11655 11.6556C2.72131 10.6275 2.69168 9.49478 3.03263 8.44742C3.37358 7.40006 4.06437 6.50182 4.9891 5.90341C5.91383 5.305 7.01623 5.04283 8.11134 5.16089C8.67019 4.40593 9.41844 3.81189 10.2805 3.43883C11.1425 3.06577 12.0877 2.92692 13.0207 3.0363C13.9536 3.14568 14.841 3.49943 15.5934 4.06177C16.3457 4.62412 16.9363 5.37513 17.3053 6.23889C18.0826 6.33266 18.8297 6.59641 19.4935 7.0114C20.1574 7.4264 20.7217 7.98246 21.1464 8.64011C21.5712 9.29776 21.8459 10.0409 21.9512 10.8166C22.0564 11.5924 21.9895 12.3819 21.7553 13.1289"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80922">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
