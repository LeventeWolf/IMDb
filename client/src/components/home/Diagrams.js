import React, {useEffect} from 'react'
import Chart from "react-google-charts";


export default function Diagrams({diagrams, show, data}) {
    if (!show) return null;

    const barDataTicks = []
    for (let i = 1; i < data.barData.length; i++) {barDataTicks.push(data.barData[i][0])}

    return (
        <div id="diagrams-container" className={'d-flex'}>
            <Chart id={'piechart'}
                   width={450}
                   height={300}
                   chartType="PieChart"
                   loader={<div>Loading Chart</div>}
                   data={data.pieData}
                   options={
                       {
                           title: 'Genres Distribution',
                           titleTextStyle: {
                               color: '#19723C',
                               fontSize: 18
                           },
                           legendTextStyle: {
                               color: '#19723C',
                               fontSize: 14
                           },
                           backgroundColor: '',
                       }
                   }
                   legendToggle
            />

            <Chart
                width={'800px'}
                height={'300px'}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data={data.barData}
                options={
                    {
                        title: 'IMDb Score Distribution',
                        backgroundColor: '',

                        titleTextStyle: {
                            color: '#19723C',
                            fontSize: 16
                        },

                        legend: {
                            textStyle: {
                                color: '#19723C',
                                fontSize: 13
                            },

                            position: 'none'
                        },

                        hAxis: {
                            title: 'Score',
                            titleTextStyle: {
                                color: '#19723C',
                                fontSize: 14
                            },
                            textStyle: {
                                color: '#19723C',
                                fontSize: 13
                            },

                            ticks: barDataTicks
                        },

                        vAxis: {
                            title: 'Number of Movies',
                            titleTextStyle: {
                                color: '#19723C',
                                fontSize: 14
                            },

                            textStyle: {
                                color: '#19723C',
                                fontSize: 13,
                            }
                        },

                    }
                }
            />


        </div>
    );
};
