import React from 'react'
import Navbar from '../components/Navbar'
import {Box,Typography,Chip} from '@mui/material'
import StatCard from '../components/StatCard'
import DashboardChart from '../components/DashboardChart'
import DashboardTable from '../components/DashboardTable'
import {statsData,tableData,chartData} from '../utils/mockData'
import {DataGrid} from '@mui/x-data-grid'
import type {GridColDef} from '@mui/x-data-grid'
const Dashboard:React.FC = ()=>{
    const columns:GridColDef[]=[
        { field: 'id', headerName: 'ID',flex:1 },
        {field:'name',headerName:'Name',flex:2},
        {field:'type',headerName:'Type',flex:1},
        {field:'status',headerName:'Status',flex:1,renderCell:(params)=>{
            const value = params.value;
            let color:'default' | 'success' | 'error' | 'warning' = 'default'

            if(value ==='Active') color='success'
            else if(value==='Inactive') color='error'
            else color='warning'
            return <Chip label={value} color={color} size="small" />
        }}
    ]
    const tableRows = tableData;
    return(
        <>
            <Navbar/>
            <Box sx={{ 
                position:'fixed',// 화면 전체 기준
                 mt: '64px',
                    left: 0,
                    width: '100vw',
                    minHeight: 'calc(100vh - 64px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    // p: 2,
                    // backgroundColor: '#f5f5f5', 
                }}>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
                    {/* 카드 컴포넌트 삽입 예정 */}
                    {statsData.map((stat)=>(<StatCard key={stat.id} title={stat.title} value={stat.value}/>))}                   
                </Box>

                {/* 월간 데이터 사용량 차트 */}
                <Box sx={{ mb: 4 }}>
                    {/* Chart.js 컴포넌트 삽입 예정 */}
                </Box>

                {/* 데이터 테이블 */}
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 , width:"1200px" }}>
                    {/* Table 컴포넌트 삽입 예정 */}
                   <DataGrid rows={tableRows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} authHeight   checkboxSelection={false} />
                </Box>
            </Box>
        </>
    )
}

export default Dashboard