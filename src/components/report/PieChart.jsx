import React from 'react'
import { ResponsivePie } from '@nivo/pie'
// const theme = {
//     "background": "#1F2A40",
//     "text": {
//         "fontSize": 11,
//         "fill": "#333333",
//         "outlineWidth": 0,
//         "outlineColor": "transparent"
//     },
//     "axis": {
//         "domain": {
//             "line": {
//                 "stroke": "#777777",
//                 "strokeWidth": 1
//             }
//         },
//         "legend": {
//             "text": {
//                 "fontSize": 12,
//                 "fill": "#ffffff",
//                 "outlineWidth": 0,
//                 "outlineColor": "transparent"
//             }
//         },
//         "ticks": {
//             "line": {
//                 "stroke": "#777777",
//                 "strokeWidth": 1
//             },
//             "text": {
//                 "fontSize": 11,
//                 "fill": "#ffffff",
//                 "outlineWidth": 0,
//                 "outlineColor": "transparent"
//             }
//         }
//     },
//     "grid": {
//         "line": {
//             "stroke": "#dddddd",
//             "strokeWidth": 1
//         }
//     },
//     "legends": {
//         "title": {
//             "text": {
//                 "fontSize": 11,
//                 "fill": "#ffffff",
//                 "outlineWidth": 0,
//                 "outlineColor": "transparent"
//             }
//         },
//         "text": {
//             "fontSize": 10,
//             "fill": "#ffffff",
//             "outlineWidth": 0,
//             "outlineColor": "transparent"
//         },
//         "ticks": {
//             "line": {},
//             "text": {
//                 "fontSize": 10,
//                 "fill": "#333333",
//                 "outlineWidth": 0,
//                 "outlineColor": "transparent"
//             }
//         }
//     },
//     "annotations": {
//         "text": {
//             "fontSize": 13,
//             "fill": "#ffffff",
//             "outlineWidth": 2,
//             "outlineColor": "#ffffff",
//             "outlineOpacity": 1
//         },
//         "link": {
//             "stroke": "#f4f1f1",
//             "strokeWidth": 1,
//             "outlineWidth": 2,
//             "outlineColor": "#ffffff",
//             "outlineOpacity": 1
//         },
//         "outline": {
//             "stroke": "#fefbfb",
//             "strokeWidth": 2,
//             "outlineWidth": 2,
//             "outlineColor": "#ffffff",
//             "outlineOpacity": 1
//         },
//         "symbol": {
//             "fill": "#f2f2f2",
//             "outlineWidth": 2,
//             "outlineColor": "#ffffff",
//             "outlineOpacity": 1
//         }
//     },
//     "tooltip": {
//         "container": {
//             "background": "#ffffff",
//             "fontSize": 12
//         },
//         "basic": {},
//         "chip": {},
//         "table": {},
//         "tableCell": {},
//         "tableCellValue": {}
//     }
// }

const dataPie = [
    {
        "id": "react",
        "label": "React",
        "value": 579,
        "color": "hsl(238, 70%, 50%)"
    },
    {
        "id": "html",
        "label": "HTML",
        "value": 431,
        "color": "hsl(177, 70%, 50%)"
    },
    {
        "id": "javascript",
        "label": "Javascript",
        "value": 527,
        "color": "hsl(184, 70%, 50%)"
    },
    {
        "id": "next",
        "label": "Next JS",
        "value": 478,
        "color": "hsl(304, 70%, 50%)"
    },
    {
        "id": "github",
        "label": "GitHub",
        "value": 236,
        "color": "hsl(359, 70%, 50%)"
    }
]

export default function PieChart() {
    return (
        <div className="h-[45vh] max-w-5xl m-auto bg-[#1F2A40] text-white rounded-lg pb-5">
            <h1 className='px-5 text-xl font-semibold pt-1'>Languages</h1>
            {/* <ResponsivePie
                data={dataPie}
                margin={{ top: 20, right: 80, bottom: 100, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.1
                        ]
                    ]
                }}
                enableArcLinkLabels={false}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                enableArcLabels={false}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            2
                        ]
                    ]
                }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'html'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'css'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'javaScript'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'react'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'nextjs'
                        },
                        id: 'lines'
                    },


                ]}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 45,
                        itemsSpacing: 0,
                        itemWidth: 80,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#F8D831'
                                }
                            }
                        ]
                    }
                ]}
            /> */}
            <ResponsivePie
                data={dataPie}
                // theme={theme}    
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.2
                        ]
                    ]
                }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'brighter',
                            10
                        ]
                    ]
                }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'html'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'next'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'react'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'javascript'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'github'
                        },
                        id: 'lines'
                    },

                ]}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 40,
                        itemsSpacing: 0,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#fff',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    )
}
