"use client";

import { CustomLink } from "./CustomLink";
import { paths } from "@/constants";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const Header = () => {
  return (
    <StyledHeader>
      <CustomLink href={paths.main}>
        <Typography fontSize={20}>Igniz</Typography>
      </CustomLink>
      <CustomLink href={paths.conactUs}>
        <Typography>Contact Us</Typography>
      </CustomLink>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 16px 24px;
  background-color: transparent;
  border-bottom: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
