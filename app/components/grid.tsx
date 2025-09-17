"use client";

import { Grid, useMediaQuery } from "@mui/material";
import { PropsWithChildren } from "react";

export const ResponsiveGrid = ({ children }: PropsWithChildren) => {
    const matches = useMediaQuery('(max-width:500px)');

    return (
        <Grid container spacing={2} size={12}>
            {children}
        </Grid>
    );
};