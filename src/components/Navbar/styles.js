import styled from "styled-components";
import {Menu} from "semantic-ui-react";

export const StyledNavbarWrapper = styled(Menu)`
  &&& {
    background-color: #000000;
    height: 53px;
    box-shadow: none;
    border: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;