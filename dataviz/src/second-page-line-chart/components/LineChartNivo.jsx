
import {ResponsiveLine} from '@nivo/line'
// make sure parent container have a defined height when using
// eslint-disable-next-line react/prop-types
export default function LineChart({data}) {
    let schemeColors = getSchemeColor(data);
    return (
        <ResponsiveLine
            data={data}
            margin={{top: 50, right: 110, bottom: 50, left: 60}}
            xScale={{type: 'point'}}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legendOffset: 36
            }}
            axisLeft={{
                tickSize: 2,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Nombre d'intempéries",
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            colors={schemeColors}
            borderColor="#000000"
            enableGridY={false}
            pointSize={5}
            pointColor={{from: 'color', modifiers: []}}
            pointBorderWidth={2}
            pointBorderColor={{from: 'serieColor', modifiers: []}}
            pointLabel="xFormatted"
            pointLabelYOffset={-12}
            useMesh={true}

        />
    )
}


function getSchemeColor(data) {
    const intemperiesClimatiquesList = ["Intempéries - Brouillard",
        "Intempéries - Forte chaleur",
        "Intempéries - Givre / Verglas",
        "Intempéries - Fortes pluies",
        "Intempéries - Vent fort",
        "Végétation",
        "Intempéries - Orage / Grêle",
        "Intempéries - Neige / congères"];

    const colorsList = [
        "#BDBDBD",
        "#F00",
        // "#FF5C00",
        "#398CD0",
        "#0000FF",
        "#69717F",
        "#31AA35",
        "#FFB82B",
        "#A4D8EB",
    ]


    let color = colorsList[intemperiesClimatiquesList.indexOf(data)];

    return color;
}

