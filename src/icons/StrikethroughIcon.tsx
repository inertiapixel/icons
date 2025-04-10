import React from "react";

export const StrikethroughIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_62361)">
<path d="M5 12H19" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 6.501C15.7732 6.06096 15.2536 5.67265 14.5265 5.4C13.7994 5.12735 12.9084 4.98663 12 5.001H11C10.0717 5.001 9.1815 5.36975 8.52513 6.02613C7.86875 6.6825 7.5 7.57274 7.5 8.501C7.5 9.42926 7.86875 10.3195 8.52513 10.9759C9.1815 11.6323 10.0717 12.001 11 12.001H13C13.9283 12.001 14.8185 12.3698 15.4749 13.0261C16.1313 13.6825 16.5 14.5727 16.5 15.501C16.5 16.4293 16.1313 17.3195 15.4749 17.9759C14.8185 18.6323 13.9283 19.001 13 19.001H11.5C10.5916 19.0154 9.70056 18.8746 8.9735 18.602C8.24644 18.3294 7.72675 17.941 7.5 17.501" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62361">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
