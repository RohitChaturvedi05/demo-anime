import * as React from 'react';
import { GET_ANILIST_PAGE } from '../../services/getAnilist';
import { useQuery } from '@apollo/client';
import { Container } from './styles';
import AnimeCard, { Media } from './AnimeCard';
import Loader from '../../components/Loader';

type Page = { media: Media[] };

export const Home = () => {
    const { data, loading } = useQuery<{ Page: Page }>(GET_ANILIST_PAGE);
    console.log(data);

    if (loading) return <Loader />;

    return (
        <Container>
            {data?.Page.media.map((media) => {
                return <AnimeCard key={media.id} {...media} />;
            })}
        </Container>
    );
};

export default Home;
