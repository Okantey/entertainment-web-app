import styled from "styled-components";

const globalColors: Record<string, string> = {
  primary: "#5A4AF4",
  secondary: "#1EA5FC",
  tertiary: "#B66DFF",
  success: "#05CE91",
  error: "#FF6161",
  warning: "#FFAD49",
  gray: "#e3e3e3",
  black: "#000",
  white: "#fff",
};

export const HeaderText = styled.h1`
  font-size: 2rem;
  color: ${globalColors.primary};
`;
