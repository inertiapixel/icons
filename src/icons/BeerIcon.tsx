import React from "react";

export const BeerIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_58952)">
<path d="M17 2C17.5046 1.99984 17.9906 2.19041 18.3605 2.5335C18.7305 2.87659 18.9572 3.34684 18.995 3.85L19 4V8C19 9.335 18.771 10.386 18.226 11.692L18.069 12.055L17.759 12.756C17.3071 13.7799 17.0523 14.8797 17.008 15.998L17 16.375V20C17.0002 20.5046 16.8096 20.9906 16.4665 21.3605C16.1234 21.7305 15.6532 21.9572 15.15 21.995L15 22H9C8.49542 22.0002 8.00943 21.8096 7.63945 21.4665C7.26947 21.1234 7.04284 20.6532 7.005 20.15L7 20V16.375C7 15.243 6.79 14.125 6.383 13.095L6.241 12.755L5.931 12.056C5.327 10.698 5.048 9.646 5.006 8.358L5 8V4C4.99984 3.49542 5.19041 3.00943 5.5335 2.63945C5.87659 2.26947 6.34684 2.04284 6.85 2.005L7 2H17ZM17 4H7V7H17V4Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58952">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
