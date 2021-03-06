import styled from "styled-components";

export const brandPrimary = "#ffd326";

export const Loader = styled.div`
    height: 35vh;
    display: grid;
    place-items: center;
    h3 {
        color: ${brandPrimary};
        font-size: 40px;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 2fr));
    grid-gap: 1rem;
`;

export const ProductName = styled.p`
    display: block;
    margin-bottom: 1em;
    font-size: 20px;
    margin-top: 0;
    font-family: Hurme, SofiaPro, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
        Fira Sans, Droid Sans, "Helvetica Neue", sans-serif;
    font-weight: 900;
`;

export const ProductCard = styled.div`
    padding: 1.3em;
    background: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
`;

export const Button = styled.button`
    color: black;
    font-family: SofiaPro, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
        Fira Sans, Droid Sans, "Helvetica Neue", sans-serif;
    font-weight: 500;
    position: relative;
    height: 50px;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    min-width: 160px;
    cursor: pointer;
    transition: 0.2s all cubic-bezier(0.25, 0.46, 0.45, 0.94);
    display: inline-flex;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 18px;
    background-color: ${brandPrimary};
    border: none;
    &:hover {
        color: #333;
        box-shadow: 0 0.4px 0.4px rgb(0 0 0 / 2%), 0 1px 1px rgb(0 0 0 / 3%),
            0 2.1px 2.1px rgb(0 0 0 / 4%), 0 4.4px 4.4px rgb(0 0 0 / 5%),
            0 12px 12px rgb(0 0 0 / 7%);
    }
`;
