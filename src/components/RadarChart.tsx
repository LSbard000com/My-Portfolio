import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    ChartOptions,
} from 'chart.js';

// Chart.jsにレーダーチャートの必要なコンポーネントを登録
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart: React.FC = () => {
    // チャートデータの設定
    const data = {
        labels: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
        datasets: [
            {
                label: 'My Skills',
                data: [2, 2, 2, 2, 2],
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 1)',
                borderWidth: 1,
            }
        ]
    };

    // チャートオプションの設定
    const options: ChartOptions<'radar'> = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    color: 'white',  // 凡例ラベルの色を設定
                    font: {
                        size: 20,  // フォントサイズを指定
                        weight: 'bold'  // 太字などスタイルも設定
                    },
                }
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            r: {
                angleLines: {
                    display: true,
                    color: 'rgba(255, 255, 255, 0.3)',
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.3)' // グリッド線の色を指定
                },
                suggestedMin: 0,
                suggestedMax: 5,
                ticks: {
                    stepSize: 1, // 数値の間隔を5に設定
                    color: 'black', // 目盛りのカラーも変更可能
                },
                pointLabels: {
                    color: 'white', // ラベルのフォントカラーを指定
                    font: {
                        size: 16, // フォントサイズも調整可能
                    },
                }
            },
        },
    };

    return <Radar data={data} options={options} />;
};

export default RadarChart;