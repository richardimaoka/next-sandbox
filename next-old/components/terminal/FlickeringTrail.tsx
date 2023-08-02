import { css, keyframes } from "@emotion/react";

export const FlickeringTrail = () => {
  const flickering = keyframes`
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
  `;
  return (
    <span
      css={css`
        animation: ${flickering} 2s infinite;
      `}
    >
      |
    </span>
  );
};
