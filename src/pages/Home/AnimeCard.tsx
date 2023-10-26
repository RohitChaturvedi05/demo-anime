import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardContainer } from './styles';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import HtmlParser from 'html-react-parser';

export interface Media {
    id: number;
    siteUrl: string;
    title: {
        english: string;
        native: string;
    };
    description: string;
    bannerImage: string;
    isFavourite: boolean;
}
interface Props extends Media {}

const AnimeCard: React.FC<Props> = ({
    id,
    bannerImage,
    title,
    description,
    isFavourite,
    siteUrl,
}) => {
    return (
        <CardContainer key={id} sx={{ maxWidth: 500 }}>
            <CardMedia
                component="img"
                alt={title.english}
                height="200"
                image={bannerImage}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title.english}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    component="div"
                    className="description"
                >
                    {HtmlParser(description)}
                </Typography>
            </CardContent>

            <CardActions>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon className={isFavourite ? 'favourite' : ''} />
                </IconButton>
                <IconButton
                    aria-label="share"
                    onClick={() => window.open(siteUrl, '_blank')}
                >
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </CardContainer>
    );
};
export default AnimeCard;
