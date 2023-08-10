import { Divider } from "antd";
import { css, styled } from "styled-components";

const FlushDivider = styled(Divider)<{
  $heightBlock?: boolean;
  $widthBlock?: boolean;
}>`
  margin: 0;

  ${(props) =>
    props.$heightBlock
      ? css`
          height: 100%;
        `
      : undefined}

  ${(props) =>
    props.$widthBlock
      ? css`
          width: 100%;
        `
      : undefined}
`;

export { FlushDivider };

