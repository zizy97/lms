import styled from "styled-components";

const SpinningDiv = styled.div`
    border: 16px solid ${(props) => props.theme.primary.disabled};
    border-top: 16px solid ${(props) => props.theme.primary.main};
    border-radius: 50%;
    width: 5em;
    height: 5em;
    animation: spin 2s linear infinite;
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

const SpinnerContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: flex-start;
`;

const Spinner = () => {
return (
    <SpinnerContainer>
        <SpinningDiv />
    </SpinnerContainer>
);
};

export default Spinner;