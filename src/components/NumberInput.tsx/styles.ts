import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Error = styled.div`
    color: red;
    font-size: 12px;
`;

export const InputControl = styled.div`
    display: flex;
    min-height: 32px;
    border: 1px solid silver;
    width: 100%;
    border-radius: 2px;

    input {
        width: 100%;
        border: none;
        outline: none;
        font-size: 16px;
        padding: 8px;
    }
    &.invalid {
        border-color: red;
    }
`;

export const InputActions = styled.div`
    display: flex;
    flex-direction: column;
    width: 25px;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    border-left: 1px solid silver;

    .up-arrow {
        position: absolute;
        top: -4px;
    }

    .down-arrow {
        position: absolute;
        bottom: -4px;
    }

    button {
        display: flex;
        align-items: center;
        height: 50%;
        width: 25px;
        border: none;
        padding: 0;

        &:first-child {
            border-bottom: 1px solid gray;
        }
        &:active,
        &:focus,
        &:hover {
            background: #d0d1cf;
        }
    }
`;
