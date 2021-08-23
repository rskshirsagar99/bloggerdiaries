import React from 'react'
import TopBar from '../../components/topbar/TopBar'
import BarChart from '../chart/Chart'
import BarChartUser from '../chart_user/chart_user'
import './stats.css'
export default function Stats(){
    return(
        <>
        <TopBar/>
        <div className="stats-div">
            <BarChartUser/>
            <BarChart/>
        </div>
        </>
    )
}