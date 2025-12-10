"use client";

import { Link as MuiLink, LinkProps as MuiLinkProps, styled } from '@mui/material';
import NextLink from 'next/link';
import { ReactNode } from 'react';

interface LinkProps extends Omit<MuiLinkProps, 'href'> {
    href: string;
    children: ReactNode;
    Icon?: React.ComponentType<{ sx?: object }>;
    target?: string;
}

const StyledMuiLink = styled(MuiLink)`
    color: var(--main-teal);
    &:hover {
        color: var(--main-teal);
    }
    &:visited {
    color: var(--main-darkblue);
    }
    &:hover {
    color: var(--main-lavender);
    }
    &:active {
    color: var(--main-jasper);
    }
`;


export const Link: React.FC<LinkProps> = ({ href, children, Icon, ...muiLinkProps }) => {
    return (
        <StyledMuiLink component={NextLink} href={href} {...muiLinkProps}>
            {Icon && <Icon sx={{ verticalAlign: 'middle', marginRight: 0.5 }} />}
            {children}
        </StyledMuiLink>
    );
};
