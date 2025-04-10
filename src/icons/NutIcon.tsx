import React from "react";

export const NutIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_67291)">
<path d="M19 6.83869C19.3068 7.01662 19.561 7.27268 19.7366 7.58078C19.9123 7.88889 20.0032 8.23804 20 8.59269V15.1477C20 15.8757 19.606 16.5477 18.97 16.9007L12.97 20.7447C12.6733 20.9097 12.3395 20.9964 12 20.9964C11.6605 20.9964 11.3267 20.9097 11.03 20.7447L5.03 16.9007C4.71785 16.7268 4.45779 16.4728 4.27671 16.1648C4.09563 15.8568 4.0001 15.506 4 15.1487V8.59169C4 7.86369 4.394 7.19269 5.03 6.83869L11.03 3.25669C11.3356 3.08581 11.6799 2.99609 12.03 2.99609C12.3801 2.99609 12.7244 3.08581 13.03 3.25669L19.03 6.83869H19Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67291">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
