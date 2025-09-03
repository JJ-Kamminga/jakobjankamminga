import { Card } from "@mui/material";
import { Film } from "app/canon/film/filmData";
import Image from "next/image";

type MediaTimelineProps = {
    media: Film,
    isLeft: boolean,
    isLast: boolean,
};

export const MediaTimelineItem = ({ media, isLeft, isLast }: MediaTimelineProps) => {
    const MoviePoster = () => {
        return (
            <Image
                style={moviePosterStyle}
                src={media.image}
                alt={media.title + ' film poster'}
                width={200}
                height={300}
            />
        );
    };

    const moviePosterStyle = {
        boxShadow: '7px 1px 1px black',
    };

    const dotStyle = {
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        border: '4px solid var(--main-darkgrey)',
        borderColor: 'var(--main-darkgrey)',
        backgroundColor: 'var(--main-yellow)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
    };

    const connectorStyle = {
        width: '3px',
        backgroundColor: 'var(--main-darkgrey)',
        flex: 1,
        minHeight: '352px',
        display: isLast ? 'none' : 'flex',
    };

    const contentStyle = {
        flex: '1',
        height: '100%',
        overflow: 'auto',
        paddingTop: '12px',
        paddingLeft: isLeft ? '0' : '20px',
        paddingRight: isLeft ? '20px' : '0',
    };

    const cardStyle = {
        maxWidth: '100%',
        marginLeft: isLeft ? 'auto' : '0',
        marginRight: isLeft ? '0' : 'auto',
        borderRadius: '8px',
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(59, 59, 59, 1) 81%, rgba(74, 74, 74, 1) 100%)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        display: 'flex',
    };

    const cardContentStyle = {
        padding: '16px',
    };

    const titleStyle = {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: 'var(--main-white)',
        marginBottom: '8px',
        marginTop: '0',
    };

    const descriptionStyle = {
        fontSize: '0.875rem',
        color: 'var(--main-white)',
        lineHeight: '1.6',
        marginBottom: '16px',
    };

    const chipStyle = {
        fontSize: '0.75rem',
        padding: '4px 8px',
        borderRadius: '16px',
        backgroundColor: 'var(--main-white)',
        color: 'var(--main-darkgrey)',
    };

    return (
        <Card sx={{ display: 'flex', background: 'transparent', height: '400px', }}>
            <aside style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: 'var(--main-darkgrey)',
                margin: 'auto 0',
                textAlign: isLeft ? 'right' : 'left',
                paddingRight: isLeft ? '20px' : '0',
                paddingLeft: isLeft ? '0' : '20px',
                flex: '0 0 100px',
            }}>
                {media.year}
            </aside>
            <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '0 0 auto',
            }}>
                <div style={dotStyle} />
                <div style={connectorStyle}></div>
            </div>

            <div style={contentStyle}>
                <Card style={cardStyle}>
                    {isLeft && (
                        <MoviePoster />)}
                    <div style={cardContentStyle}>
                        <h2 style={titleStyle}>
                            {media.title}
                        </h2>
                        <p style={descriptionStyle}>
                            {media.description}
                        </p>
                        {media.metadata && (
                            <div style={{
                                display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px',
                            }}>
                                <span style={chipStyle}>
                                    Dir: {media.metadata.director}
                                </span>
                                {media.metadata.genre.map((genre, i) => (
                                    <span key={genre + i} style={chipStyle}>
                                        {genre}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                    {!isLeft && <MoviePoster />}
                </Card>
            </div>
        </Card>
    );
};