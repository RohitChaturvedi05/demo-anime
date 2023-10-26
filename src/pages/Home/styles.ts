import styled from 'styled-components';
import Card from '@mui/material/Card';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    padding: 16px;
`;

export const CardContainer = styled(Card)`
    .isFavourite {
        fill: red;
    }
    .description {
        max-height: 200px;
        overflow: auto;
    }
    img {
        transition: transform 0.2s;
    }
    img:hover {
        transform: scale(1.2);
    }
`;
