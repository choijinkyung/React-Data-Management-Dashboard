import React from 'react'
import {Paper , Typography} from '@mui/material'

const DashboardChart:React.FC = ({ title, value }: { title: string; value: number })=>{

    return(
        <>
            <Paper sx={{flex:1,p:3,minWidth:150}}>
                <Typography >{title}</Typography>
                <Typography>{value}</Typography>
            </Paper>
        </>
    )
}

export default DashboardChart