import { gql } from '@apollo/client';

export const GET_ANILIST_PAGE = gql`
    {
        Page {
            media {
                id
                siteUrl
                title {
                    english
                    native
                }
                description
                bannerImage
                isFavourite
            }
        }
    }
`;
