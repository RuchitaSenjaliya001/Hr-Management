import React from 'react'
import { ResponsiveLine } from '@nivo/line'

const data = [
    // {
    //     "id": "India",
    //     "color": "hsl(302, 70%, 50%)",
    //     "data": [
    //         {
    //             "x": "Jan",
    //             "y": 59
    //         },
    //         {
    //             "x": "Feb",
    //             "y": 176
    //         },
    //         {
    //             "x": "Mar",
    //             "y": 8
    //         },
    //         {
    //             "x": "Apr",
    //             "y": 32
    //         },
    //         {
    //             "x": "May",
    //             "y": 53
    //         },
    //         {
    //             "x": "Jun",
    //             "y": 76
    //         },
    //         {
    //             "x": "Jul",
    //             "y": 164
    //         },
    //         {
    //             "x": "Aug",
    //             "y": 108
    //         },
    //         {
    //             "x": "Sep",
    //             "y": 98
    //         },
    //         {
    //             "x": "Oct",
    //             "y": 183
    //         },
    //         {
    //             "x": "Nav",
    //             "y": 139
    //         },
    //         {
    //             "x": "Dec",
    //             "y": 197
    //         }
    //     ]
    // },
    // {
    //     "id": "france",
    //     "color": "hsl(349, 70%, 50%)",
    //     "data": [
    //         {
    //             "x": "Jan",
    //             "y": 38
    //         },
    //         {
    //             "x": "Feb",
    //             "y": 269
    //         },
    //         {
    //             "x": "Mar",
    //             "y": 47
    //         },
    //         {
    //             "x": "Apr",
    //             "y": 147
    //         },
    //         {
    //             "x": "May",
    //             "y": 37
    //         },
    //         {
    //             "x": "Jun",
    //             "y": 147
    //         },
    //         {
    //             "x": "Jul",
    //             "y": 47
    //         },
    //         {
    //             "x": "Aug",
    //             "y": 9
    //         },
    //         {
    //             "x": "Sep",
    //             "y": 40
    //         },
    //         {
    //             "x": "Oct",
    //             "y": 108
    //         },
    //         {
    //             "x": "Nav",
    //             "y": 238
    //         },
    //         {
    //             "x": "Dec",
    //             "y": 30
    //         }
    //     ]
    // },
    // {
    //     "id": "us",
    //     "color": "hsl(277, 70%, 50%)",
    //     "data": [
    //         {
    //             "x": "Jan",
    //             "y": 93
    //         },
    //         {
    //             "x": "Feb",
    //             "y": 223
    //         },
    //         {
    //             "x": "Mar",
    //             "y": 75
    //         },
    //         {
    //             "x": "Apr",
    //             "y": 146
    //         },
    //         {
    //             "x": "May",
    //             "y": 289
    //         },
    //         {
    //             "x": "Jun",
    //             "y": 18
    //         },
    //         {
    //             "x": "Jul",
    //             "y": 196
    //         },
    //         {
    //             "x": "Aug",
    //             "y": 249
    //         },
    //         {
    //             "x": "Sep",
    //             "y": 167
    //         },
    //         {
    //             "x": "Oct",
    //             "y": 11
    //         },
    //         {
    //             "x": "Nav",
    //             "y": 77
    //         },
    //         {
    //             "x": "Dec",
    //             "y": 165
    //         }
    //     ]
    // },
    {
        "id": "India",
        "color": "hsl(37, 70%, 50%)",
        "data": [
            {
                "x": "Jan",
                "y": 50
            },
            {
                "x": "Feb",
                "y": 100
            },
            {
                "x": "Mar",
                "y": 120
            },
            {
                "x": "Apr",
                "y": 150
            },
            {
                "x": "May",
                "y": 80
            },
            {
                "x": "Jun",
                "y": 140
            },
            {
                "x": "Jul",
                "y": 180
            },
            {
                "x": "Aug",
                "y": 140
            },
            {
                "x": "Sep",
                "y": 220
            },
            {
                "x": "Oct",
                "y": 250
            },
            {
                "x": "Nav",
                "y": 170
            },
            {
                "x": "Dec",
                "y": 200
            }
        ]
    },
    // {
    //     "id": "norway",
    //     "color": "hsl(108, 70%, 50%)",
    //     "data": [
    //         {
    //             "x": "Jan",
    //             "y": 71
    //         },
    //         {
    //             "x": "Feb",
    //             "y": 145
    //         },
    //         {
    //             "x": "Mar",
    //             "y": 187
    //         },
    //         {
    //             "x": "Apr",
    //             "y": 178
    //         },
    //         {
    //             "x": "May",
    //             "y": 280
    //         },
    //         {
    //             "x": "Jun",
    //             "y": 20
    //         },
    //         {
    //             "x": "Jul",
    //             "y": 163
    //         },
    //         {
    //             "x": "Aug",
    //             "y": 77
    //         },
    //         {
    //             "x": "Sep",
    //             "y": 123
    //         },
    //         {
    //             "x": "Oct",
    //             "y": 27
    //         },
    //         {
    //             "x": "Nav",
    //             "y": 61
    //         },
    //         {
    //             "x": "Dec",
    //             "y": 51
    //         }
    //     ]
    // }
]

const theme =
{
    "background": "#1F2A40",
    "text": {
        "fontSize": 11,
        "fill": "#ffffff",
        "outlineWidth": 0,
        "outlineColor": "transparent"
    },
    "axis": {
        "domain": {
            "line": {
                "stroke": "#777777",
                "strokeWidth": 1
            }
        },
        "legend": {
            "text": {
                "fontSize": 12,
                "fill": "#ffffff",
                "outlineWidth": 0,
                "outlineColor": "transparent"
            },
            "effects": [
                {
                    "on": 'hover',
                    "style": {
                        "itemTextColor": '#000000'
                    }
                }
            ]
        },
        "ticks": {
            "line": {
                "stroke": "#777777",
                "strokeWidth": 1
            },
            "text": {
                "fontSize": 11,
                "fill": "#ffffff",
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        }
    },
    "grid": {
        "line": {
            "stroke": "#dddddd",
            "strokeWidth": 1
        }
    },
    "legends": {
        "title": {
            "text": {
                "fontSize": 11,
                "fill": "#333333",
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        },
        "text": {
            "fontSize": 11,
            "fill": "#333333",
            "outlineWidth": 0,
            "outlineColor": "transparent"
        },
        "ticks": {
            "line": {},
            "text": {
                "fontSize": 10,
                "fill": "#333333",
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        }
    },
    "annotations": {
        "text": {
            "fontSize": 13,
            "fill": "#333333",
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "link": {
            "stroke": "#000000",
            "strokeWidth": 1,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "outline": {
            "stroke": "#000000",
            "strokeWidth": 2,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "symbol": {
            "fill": "#000000",
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        }
    },
    "tooltip": {
        "container": {
            "background": "#ffffff",
            "fontSize": 12
        },
        "basic": {},
        "chip": {},
        "table": {},
        "tableCell": {},
        "tableCellValue": {}
    }
}


export default function EmpPerformanceChart() {
    return (
        <div className="h-[45vh] w-full bg-[#1F2A40] text-white rounded-lg m-auto">
            <h1 className='px-5 text-xl text-white font-semibold pt-1'> Performance</h1>
            <ResponsiveLine
                data={data}
                theme={theme}
                margin={{ top: 15, right: 90, bottom: 80, left: 80 }}
                xScale={{ type: 'point' }}
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
                    color: "white",
                    legend: 'Months',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
            // legends={[
            //     {
            //         anchor: 'bottom-right',
            //         direction: 'column',
            //         justify: false,
            //         translateX: 100,
            //         translateY: 0,
            //         itemsSpacing: 0,
            //         itemDirection: 'left-to-right',
            //         itemWidth: 80,
            //         itemHeight: 20,
            //         itemOpacity: 0.75,
            //         symbolSize: 12,
            //         symbolShape: 'circle',
            //         symbolBorderColor: 'rgba(0, 0, 0, .5)',
            //         effects: [
            //             {
            //                 on: 'hover',
            //                 style: {
            //                     itemBackground: 'rgba(0, 0, 0, .03)',
            //                     itemOpacity: 1
            //                 }
            //             }
            //         ]
            //     }
            // ]}
            />
        </div>
    )
}
