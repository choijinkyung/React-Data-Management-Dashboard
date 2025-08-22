import React from 'react'
import {Paper , Typography} from '@mui/material'

const DashboardTable:React.FC = ({ name, type,status }: { name: string; type: string,status:string })=>{

    return(
        <>
            <Paper sx={{flex:1,p:3,minWidth:150}}>
                <Typography >{name}</Typography>
                <Typography>{type}</Typography>
                <Typography>{status}</Typography>
            </Paper>
        </>
    )
}

export default DashboardTable