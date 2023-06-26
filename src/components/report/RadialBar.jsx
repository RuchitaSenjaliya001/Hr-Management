import React from "react";
import { ResponsiveRadialBar } from "@nivo/radial-bar";
const data = [
    {
        "id": "Supermarket",
        "data": [
            {
                "x": "Vegetables",
                "y": 138
            },
            {
                "x": "Fruits",
                "y": 201
            },
            {
                "x": "Meat",
                "y": 23
            }
        ]
    },
    {
        "id": "Combini",
        "data": [
            {
                "x": "Vegetables",
                "y": 255
            },
            {
                "x": "Fruits",
                "y": 29
            },
            {
                "x": "Meat",
                "y": 226
            }
        ]
    },
    {
        "id": "Online",
        "data": [
            {
                "x": "Vegetables",
                "y": 100
            },
            {
                "x": "Fruits",
                "y": 126
            },
            {
                "x": "Meat",
                "y": 225
            }
        ]
    },
    {
        "id": "Marché",
        "data": [
            {
                "x": "Vegetables",
                "y": 143
            },
            {
                "x": "Fruits",
                "y": 68
            },
            {
                "x": "Meat",
                "y": 127
            }
        ]
    }
]


export default function RadialBar({ mode }) {
    return (
        <div className={`h-[45vh] max-w-5xl m-auto ${mode === 'dark' ? 'bg-[#1F2A40] text-white' : 'bg-[#E6EFFF] text-black'} rounded-lg`}>
            <ResponsiveRadialBar
                data={data}
                valueFormat=">-.2f"
                padding={0.4}
                cornerRadius={2}
                margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
                colors={{ scheme: 'pink_yellowGreen' }}
                radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
                circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
                legends={[
                    {
                        anchor: 'right',
                        direction: 'column',
                        justify: false,
                        translateX: 80,
                        translateY: 0,
                        itemsSpacing: 6,
                        itemDirection: 'left-to-right',
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        symbolSize: 18,
                        symbolShape: 'square',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#FACC15'
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    );
}
