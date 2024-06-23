import React from 'react'
import Card from './card'
import Data from "./data.js"
import Cart from "./cart.js"

import {Pie,} from "react-chartjs-2";

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
  } from "chart.js";
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title
  );
const dashboard = () => {
  return (
    <>
       <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="https://example.com"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Generate Report
        </a>
      </div>
        <div className='row'>
        <Card
          title="Project Name"
          color={"border-left-primary"}
        />
        <Card title="Summary Dashbaord "  color={"border-left-info"} />
        <Card title="Progress Monitor" color={"border-left-info"}/>
        <Card title="Resource Monitor"  color={"border-left-success"} />
        <Card title="Procurement Monitor"  color={"border-left-success"} />
        <Card title="Issue Register"  color={"border-left-success"} />
        <Card title="EHS Monitor"  color={"border-left-success"} />
        </div>
       
        <div className='row'>
        <div className="col-lg-4">
        <h1>Project Activity</h1>
    <Pie
    
        data={{
          labels: ["violet","blue","yellow","red"],
          datasets: [
            {
              label: "My First Dataset",
              data: [90,26, 46,10],
              backgroundColor: [
                "rgb(106, 90, 205)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
                "rgb(255, 100, 87)"
              ],
              hoverOffset: 4,
            },
          ],
        }}
      />
      </div>
      <div className="col-lg-4">
      <h1>Work  Activity</h1>
    <Pie
    
        data={{
            
          labels: ["pink", "Blue", "Yellow","red"],
          datasets: [
            {
              label: "My First Dataset",
              data: [50,50,50,50],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
                "rgb(255, 100, 87)"
              ],
              hoverOffset: 4,
            },
          ],
        }}
      />
      </div>
      <div className="col-lg-4">
      <h1>Work  Complete</h1>
    <Pie
        data={{
          labels: ["pink", "Blue", "Yellow","Red"],
          datasets: [
            {
              label: "My First Dataset",
              data: [32,35,33,11],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
                "rgb(255, 100, 87)"
              ],
              hoverOffset: 4,
            },
          ],
        }}
      />
      </div>
    </div>
        <div className='row'>
            <div className='col-lg-6'>
            <Data/>
            </div>
            <div className='col-lg-6'>
          <Cart/>
            </div>
        </div>
    </>
  )
}

export default dashboard