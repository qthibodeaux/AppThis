import { Grid } from 'grommet'
import React from 'react'
import { Grid } from 'grommet'

function ResponsiveGrid ({children, areas, ...props}){
    return (
        <Grid areas={areas[size]} {...props}>
            {children}
        </Grid>
    )
}

export default ResponsiveGrid