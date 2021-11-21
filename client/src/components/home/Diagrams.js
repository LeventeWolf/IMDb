import React, {useEffect} from 'react'
import Chart from "react-google-charts";


export default function Diagrams({diagrams, show, data}) {
    if (!show) return null;

    console.log(data)

    return (
        <div id="diagrams-container" className={'d-flex'}>
            <Chart id={'piechart'}
                   width={420}
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
                               fontSize: 13
                           },
                           backgroundColor: '',
                       }
                   }
                   legendToggle
            />

            <Chart id={'piechart'}
                   width={400}
                   height={300}
                   chartType="PieChart"
                   loader={<div>Loading Chart</div>}
                   data={[
                       ['Genres', '%'],
                       ['Drama', 10],
                       ['Sci-Fi', 20],
                       ['Fantasy', 30],
                   ]}
                   options={
                       {
                           title: 'Genres Distribution',
                           titleTextStyle: {
                               color: '#19723C',
                               fontSize: 18
                           },
                           legendTextStyle: {
                               color: '#19723C',
                               fontSize: 13
                           },
                           backgroundColor: '',
                       }
                   }
                   legendToggle
            />

            <Chart id={'piechart'}
                   width={400}
                   height={300}
                   chartType="PieChart"
                   loader={<div>Loading Chart</div>}
                   data={[
                       ['Genres', '%'],
                       ['Drama', 10],
                       ['Sci-Fi', 20],
                       ['Fantasy', 30],
                   ]}
                   options={
                       {
                           title: 'Genres Distribution',
                           titleTextStyle: {
                               color: '#19723C',
                               fontSize: 18
                           },
                           legendTextStyle: {
                               color: '#19723C',
                               fontSize: 13
                           },
                           backgroundColor: '',
                       }
                   }
                   legendToggle
            />



        </div>
    );
};
