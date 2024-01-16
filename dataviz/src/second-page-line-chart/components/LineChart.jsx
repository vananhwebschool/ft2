// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import {ResponsiveLine} from '@nivo/line'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
// eslint-disable-next-line react/prop-types
export default function LineChart({data /* see data tab */}) {
    const schemeColors = [
        "#BDBDBD",
        "#F00",
        "#FF5C00",
        "#398CD0",
        "#0000FF",
        "#69717F",
        "#31AA35",
        "#FFB82B",
        "#A4D8EB",
        "#6E1E78"
    ]
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
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
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
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    )
}

/* Convert the original dataset to data format required by Nivo

Array<{
    id:   string | number
    data: Array<{
        x: number | string | Date
        y: number | string | Date
    }>
}>

id: intemperies
x: mois
y: nb d'incidents
 */
function convertDataForChart() {

}

