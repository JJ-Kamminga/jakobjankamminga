import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';
import NextLink from 'next/link';
import { ReactNode } from 'react';

interface LinkProps extends Omit<MuiLinkProps, 'href'> {
    href: string;
    children: ReactNode;
    Icon?: React.ComponentType<{ sx?: object }>;
    target?: string;
}

export const Link: React.FC<LinkProps> = ({ href, children, Icon, ...muiLinkProps }) => {
    return (
        <MuiLink component={NextLink} href={href} {...muiLinkProps}>
            {Icon && <Icon sx={{ verticalAlign: 'middle', marginRight: 0.5 }} />}
            {children}
        </MuiLink>
    );
};
