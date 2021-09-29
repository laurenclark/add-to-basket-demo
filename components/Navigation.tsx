import React, { FC } from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
    background-color: #fff;
    box-shadow: 0 0.3px 0.3px rgb(0 0 0 / 2%), 0 0.9px 0.9px rgb(0 0 0 / 3%),
        0 1.8px 1.8px rgb(0 0 0 / 4%), 0 3.7px 3.7px rgb(0 0 0 / 5%),
        0 10px 10px rgb(0 0 0 / 7%);
`;

const Navigation: FC = () => {
    return (
        <NavContainer>
            {"Logo"}
            {"Cart"}
        </NavContainer>
    );
};

export default Navigation;
