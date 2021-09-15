import React from 'react';

export default function BackIcon(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      width="11"
      height="20"
      viewBox="0 0 11 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.6201 0.989998C10.1301 0.499998 9.34006 0.499998 8.85006 0.989998L0.540059 9.3C0.150059 9.69 0.150059 10.32 0.540059 10.71L8.85006 19.02C9.34006 19.51 10.1301 19.51 10.6201 19.02C11.1101 18.53 11.1101 17.74 10.6201 17.25L3.38006 10L10.6301 2.75C11.1101 2.27 11.1101 1.47 10.6201 0.989998Z"
        fill="white"
      />
    </svg>
  );
}
