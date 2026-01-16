'use client';

import { Card, useMediaQuery, useTheme } from "@mui/material";
import { Film } from "app/canon/film/filmData";
import Image from "next/image";

type MediaTimelineProps = {
    media: Film,
    isLeft: boolean,
    isLast: boolean,
};

export const MediaTimelineItem = ({ media, isLeft, isLast }: MediaTimelineProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const moviePoster = (
        <Image
            style={{
                boxShadow: '7px 1px 1px black',
                margin: '7px',
                width: 'auto',
                height: 'auto'
            }}
            src={media.image}
            alt={media.title + ' film poster'}
            width={250}
            height={375}
        />
    );

    const dotStyle = {
        width: isMobile ? '32px' : '48px',
        height: isMobile ? '32px' : '48px',
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
        minHeight: isMobile ? '100px' : '352px',
        display: isLast ? 'none' : 'flex',
    };

    const contentStyle = {
        flex: '1',
        height: '100%',
        overflow: 'hidden',
        paddingTop: '12px',
        paddingLeft: isLeft ? '0' : '50px',
        paddingRight: isLeft ? '50px' : '0',
    };

    const cardStyle = {
        maxWidth: '100%',
        marginLeft: isLeft ? 'auto' : '0',
        marginRight: isLeft ? '0' : 'auto',
        borderRadius: '5px',
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(59, 59, 59, 1) 81%, rgba(74, 74, 74, 1) 100%)',
        boxShadow: '0px 1px 3px var(--main-darkgrey)',
        overflow: 'auto',
        display: 'flex',
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

    if (isMobile) {
        return (
            <Card sx={{
                display: 'flex',
                background: 'transparent',
                boxShadow: 'none',
                marginBottom: '20px',
                flexDirection: 'row'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginRight: '16px'
                }}>
                    <div style={dotStyle} />
                    <div style={connectorStyle}></div>
                </div>

                <div style={{ flex: 1 }}>
                    <div style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: 'var(--main-darkgrey)',
                        marginBottom: '8px',
                    }}>
                        {media.year}
                    </div>

                    <Card sx={{
                        borderRadius: '5px',
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(59, 59, 59, 1) 81%, rgba(74, 74, 74, 1) 100%)',
                        boxShadow: '0px 1px 3px var(--main-darkgrey)',
                        overflow: 'hidden',
                    }}>
                        <div style={{ width: '100%' }}>
                            {moviePoster}
                        </div>
                        <div style={{ padding: '16px' }}>
                            <h2 style={{
                                fontSize: '1.25rem',
                                fontWeight: 'bold',
                                color: 'var(--main-white)',
                                marginTop: '0',
                                marginBottom: '8px',
                            }}>
                                {media.title}
                            </h2>
                            <p style={{
                                fontSize: '0.875rem',
                                color: 'var(--main-white)',
                                lineHeight: '1.6',
                                marginBottom: '16px',
                            }}>
                                {media.description}
                            </p>
                            {media.metadata && (
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '8px',
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
                    </Card>
                </div>
            </Card>
        );
    }

    return (
        <Card sx={{ display: 'flex', background: 'transparent', boxShadow: 'none', height: '550px' }}>
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
                    {isLeft && moviePoster}
                    <div style={{ padding: '16px' }}>
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
                    {!isLeft && moviePoster}
                </Card>
            </div>
        </Card>
    );
};
