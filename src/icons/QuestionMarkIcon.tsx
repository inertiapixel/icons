import React from "react";

export const QuestionMarkIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_65607)">
<path d="M8 8C8 7.20435 8.36875 6.44129 9.02513 5.87868C9.6815 5.31607 10.5717 5 11.5 5H12.5C13.4283 5 14.3185 5.31607 14.9749 5.87868C15.6313 6.44129 16 7.20435 16 8C16.0368 8.64925 15.8617 9.2929 15.501 9.83398C15.1402 10.3751 14.6135 10.7843 14 11C13.3865 11.2876 12.8598 11.8333 12.499 12.5547C12.1383 13.2761 11.9632 14.1343 12 15" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 19V19.01" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65607">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
