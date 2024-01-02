// import React, { useState, useEffect } from "react";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
// import { Bar } from "react-chartjs-2";
// // import axios from "axios";
// // import  * as faker from "@faker-js/faker";


// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);






// const BarChart = ({ data }) => {

//     const [chartOptions, setChartOptions] = useState({ datasets: [], });
//     const [chartData, setChartData] = useState({ datasets: [], });  

//     useEffect(() => {
        
//         setChartData({
//           labels: data.analytics.map((entry) => entry.item),
//           datasets: [
//             {
//               label: 'Reports',
//               data: data.analytics.map((entry) => entry.count),
//               backgroundColor: "rgba(60,80,224,1)",
//             }
//           ]
//         });


//         setChartOptions({
//             responsive: true,
//             plugins: {
//                 legend: {
//                     display: false,        // <-- set display to false to hide the legend
//                 },
//                 title: {
//                     display: false,
//                     text: "Analytics Bar Chart",
//                 },
//             },
//             scales: {
//                 x: {
//                     grid: {
//                         drawBorder: false, // <-- this removes y-axis line
//                         lineWidth: 0
//                     }
//                 },
//                 y: {
//                     grid: {
//                         drawBorder: false,
//                         lineWidth: 0 // <-- this removes vertical lines between bars
//                     }
//                 },
//             },
//         });

//     }, [data.analytics]);

//     return (
//         <>
//             <h6 className="fw-bold pt-1 mb-4">Visitor's Analytics</h6>
//             <Bar options={chartOptions} data={chartData} />
//         </>
//     );
// };


// export default BarChart;





















// //     // Example data for a bar chart
// //     const data = {
// //         labels: ['January', 'February', 'March', 'April', 'May'],
// //         datasets: [
// //             {
// //                 label: 'Example Chart',
// //                 backgroundColor: 'rgba(75,192,192,0.2)',
// //                 borderColor: 'rgba(75,192,192,1)',
// //                 borderWidth: 1,
// //                 hoverBackgroundColor: 'rgba(75,192,192,0.4)',
// //                 hoverBorderColor: 'rgba(75,192,192,1)',
// //                 data: [65, 59, 80, 81, 56],
// //             },
// //         ],
// //     };

// //     return (
// //         <div>
// //             <h6 className="fw-bold">Visitor's Analytics</h6>
// //             <Bar data={data} />
// //         </div>
// //     );
// // };




// // // Example data for a bar chart
// // const data = {
// //     labels: [
// //         1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
// //         11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// //         21, 22, 23, 24, 25, 26, 27, 28, 29, 30
// //     ],
// //     datasets: [
// //         {
// //             label: 'Dataset 1',
// //             // backgroundColor: 'rgba(75,192,192,0.2)',
// //             backgroundColor: 'rgba(60,80,224,1)',
// //             borderColor: 'rgba(75,192,192,1)',
// //             border: 0,
// //             borderWidth: 1,
// //             // hoverBackgroundColor: 'rgba(75,192,192,0.4)',
// //             hoverBackgroundColor: 'rgba(60,80,224,0.4)',
// //             hoverBorderColor: 'rgba(75,192,192,1)',
// //             data: [
// //                 280, 200, 305, 120, 210, 50, 160, 230, 120, 200,
// //                 290, 80, 150, 230, 180, 380, 290, 150, 230, 240, 
// //                 190, 120, 240, 160, 100, 260, 200, 60, 200, 150
// //             ],
// //         },
// //     ],
// // };