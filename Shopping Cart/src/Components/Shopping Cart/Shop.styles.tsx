import { IconButton } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 30px;
`;

export const StyledButton = styled(IconButton)`
  width: 50px;
  height: 50px;
  color: black;
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 10px;
`;
