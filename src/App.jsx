import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import tracking from "./assets/Icon.svg";
import description from "./assets/Icon (2).svg";
import amoCrm from "./assets/amoCrm.svg";
import telegram from "./assets/telegram.svg";
import trello from "./assets/trello.svg";
import bitrix from "./assets/bitrix.svg";
import iphone from "./assets/iphone.svg";
import user from "./assets/Icon (3).svg";
import Chart from './components/Chart'

import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';



import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const barData = [
    {
      name: "SMS yuborilganlar",
      uv: 34,
      pv: 100,
      amt: 2400,
    },
    {
      name: "Linkga kirganlar",
      uv: 3000,
      pv: 4500,
      amt: 2210,
    },
    {
      name: "Mahsulot sahifasiga kirganlar",
      uv: 2000,
      pv: 3000,
      amt: 2290,
    },
    {
      name: "Sotib olganlar",
      uv: 2780,
      pv: 5508,
      amt: 2000,
    },
    {
      name: "Izoh qoldirganlar",
      uv: 1890,
      pv: 4000,
      amt: 2181,
    },
  ];

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];


  return (

    <>
      <div className="back-color">
        <Header></Header>
        <div className="container">
          <div className="hero">
            <div className="hero-flex">
              <div className="left-side">
                <div className="projects">
                  <div className="card">
                    <img src={tracking} alt="" />
                    <div className="info">
                      <p className="title">Tracking loyihalari</p>
                      <h1 className="order">5 ta</h1>
                      <p className="subloyiha">(7 ta subloyiha)</p>
                    </div>
                  </div>
                  <div className="card">
                    <img src={description} alt="" />
                    <div className="info">
                      <p className="title">Sharh olish loyihalari</p>
                      <h1 className="order">15 ta</h1>
                      <p className="subloyiha">(7 ta subloyiha)</p>
                    </div>
                  </div>
                  <div className="card">
                    <img src={user} alt="" />
                    <div className="info">
                      <p className="title">Mijozlar</p>
                      <h1 className="order">12,345 ta</h1>
                      <p className="subloyiha">(563 ta saralanmagan)</p>
                    </div>
                  </div>
                </div>

                <div className="chart">
                  <h1 className="chart-title">Tracking loyihasi</h1>
                  <div className="barChart">
                    <BarChart
                      width={800}
                      height={400}
                      data={barData}
                      margin={{
                        top: 0,
                        right: 30,
                        left: 50,
                        bottom: 0,
                      }}
                      barSize={30}
                    >
                      <XAxis
                        dataKey="name"
                        scale="point"
                        padding={{ left: 90, right: 90 }}
                      />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Bar
                        dataKey="pv"
                        fill="#8884d8"
                        background={{ fill: "#eee" }}
                      />
                    </BarChart>
                  </div>
                </div>

                <div className="tags">
                  <div className="tag-title-info">
                    <h1 className="tag-title">#Tag lar</h1>
                    <div className="right-tag-info">
                      <h2 className="tag-order">120 ta</h2>
                      <p className="tag-desc">umumiy #tag lar soni</p>
                    </div>
                  </div>
                  <div>
                    <div className="tag-cards">
                      <div className="tag-cards-grid">
                        <div className="tag-card">
                          <div className="tag-card-title">
                            <p className="dot"></p>
                            <h1 className="tag-card-name">Bolalar uchun</h1>
                          </div>
                          <p className="tag-card-order">15.7k</p>
                        </div>
                        <div className="tag-card">
                          <div className="tag-card-title">
                            <p className="dot"></p>
                            <h1 className="tag-card-name">Bolalar uchun</h1>
                          </div>
                          <p className="tag-card-order">15.7k</p>
                        </div>
                        <div className="tag-card">
                          <div className="tag-card-title">
                            <p className="dot"></p>
                            <h1 className="tag-card-name">Bolalar uchun</h1>
                          </div>
                          <p className="tag-card-order">15.7k</p>
                        </div>
                        <div className="tag-card">
                          <div className="tag-card-title">
                            <p className="dot"></p>
                            <h1 className="tag-card-name">Bolalar uchun</h1>
                          </div>
                          <p className="tag-card-order">15.7k</p>
                        </div>
                        <div className="tag-card">
                          <div className="tag-card-title">
                            <p className="dot"></p>
                            <h1 className="tag-card-name">Bolalar uchun</h1>
                          </div>
                          <p className="tag-card-order">15.7k</p>
                        </div>
                        <div className="tag-card">
                          <div className="tag-card-title">
                            <p className="dot"></p>
                            <h1 className="tag-card-name">Bolalar uchun</h1>
                          </div>
                          <p className="tag-card-order">15.7k</p>
                        </div>
                      </div>

                      <div className="tag-cards-grid">
                        <div className="tag-card">
                          <div className="tag-card-title">
                            <p className="dot"></p>
                            <h1 className="tag-card-name">Bolalar uchun</h1>
                          </div>
                          <p className="tag-card-order">15.7k</p>
                        </div>
                        <div className="tag-card">
                          <div className="tag-card-title">
                            <p className="dot"></p>
                            <h1 className="tag-card-name">Bolalar uchun</h1>
                          </div>
                          <p className="tag-card-order">15.7k</p>
                        </div>
                        <div className="tag-card">
                          <div className="tag-card-title">
                            <p className="dot"></p>
                            <h1 className="tag-card-name">Bolalar uchun</h1>
                          </div>
                          <p className="tag-card-order">15.7k</p>
                        </div>
                        <div className="tag-card">
                          <div className="tag-card-title">
                            <p className="dot"></p>
                            <h1 className="tag-card-name">Bolalar uchun</h1>
                          </div>
                          <p className="tag-card-order">15.7k</p>
                        </div>
                        <div className="tag-card">
                          <div className="tag-card-title">
                            <p className="dot"></p>
                            <h1 className="tag-card-name">Bolalar uchun</h1>
                          </div>
                          <p className="tag-card-order">15.7k</p>
                        </div>
                        <div className="tag-card">
                          <div className="tag-card-title">
                            <p className="dot"></p>
                            <h1 className="tag-card-name">Bolalar uchun</h1>
                          </div>
                          <p className="tag-card-order">15.7k</p>
                        </div>
                      </div>

                      <div className="tag-cards-grid">
                        <div className="tag-card">
                          <div className="tag-card-title">
                            <p className="dot"></p>
                            <h1 className="tag-card-name">Bolalar uchun</h1>
                          </div>
                          <p className="tag-card-order">15.7k</p>
                        </div>
                        <div className="tag-card">
                          <div className="tag-card-title">
                            <p className="dot"></p>
                            <h1 className="tag-card-name">Bolalar uchun</h1>
                          </div>
                          <p className="tag-card-order">15.7k</p>
                        </div>
                        <div className="tag-card">
                          <div className="tag-card-title">
                            <p className="dot"></p>
                            <h1 className="tag-card-name">Bolalar uchun</h1>
                          </div>
                          <p className="tag-card-order">15.7k</p>
                        </div>
                        <div className="tag-card">
                          <div className="tag-card-title">
                            <p className="dot"></p>
                            <h1 className="tag-card-name">Bolalar uchun</h1>
                          </div>
                          <p className="tag-card-order">15.7k</p>
                        </div>
                        <div className="tag-card">
                          <div className="tag-card-title">
                            <p className="dot"></p>
                            <h1 className="tag-card-name">Bolalar uchun</h1>
                          </div>
                          <p className="tag-card-order">15.7k</p>
                        </div>
                        <div className="tag-card">
                          <div className="tag-card-title">
                            <p className="dot"></p>
                            <h1 className="tag-card-name">Bolalar uchun</h1>
                          </div>
                          <p className="tag-card-order">15.7k</p>
                        </div>
                      </div>

                      <div className="tag-cards-grid">
                        <div className="tag-card">
                          <div className="tag-card-title">
                            <p className="dot"></p>
                            <h1 className="tag-card-name">Bolalar uchun</h1>
                          </div>
                          <p className="tag-card-order">15.7k</p>
                        </div>
                        <div className="tag-card">
                          <div className="tag-card-title">
                            <p className="dot"></p>
                            <h1 className="tag-card-name">Bolalar uchun</h1>
                          </div>
                          <p className="tag-card-order">15.7k</p>
                        </div>
                        <div className="tag-card">
                          <div className="tag-card-title">
                            <p className="dot"></p>
                            <h1 className="tag-card-name">Bolalar uchun</h1>
                          </div>
                          <p className="tag-card-order">15.7k</p>
                        </div>
                        <div className="tag-card">
                          <div className="tag-card-title">
                            <p className="dot"></p>
                            <h1 className="tag-card-name">Bolalar uchun</h1>
                          </div>
                          <p className="tag-card-order">15.7k</p>
                        </div>
                        <div className="tag-card">
                          <div className="tag-card-title">
                            <p className="dot"></p>
                            <h1 className="tag-card-name">Bolalar uchun</h1>
                          </div>
                          <p className="tag-card-order">15.7k</p>
                        </div>
                        <div className="tag-card">
                          <div className="tag-card-title">
                            <p className="dot"></p>
                            <h1 className="tag-card-name">Bolalar uchun</h1>
                          </div>
                          <p className="tag-card-order">15.7k</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="right-side">
                <div className="circule-chart">
                  <h1 className="trafic">1 oylik SMS lar</h1>
                  <div className="total">
                    <p className="total-title">Umumiy</p>
                    <h1 className="total-order">1000 ta</h1>
                  </div>
                  <div className="total-circule-chart">
                    <div className="circle-chart-correct oval-CHart">
                      <div className="circle-chart-go">
                        <Chart />
                      </div>
                      <div className="circle-chart-info">
                        <h1 className="circle-chart-order">740 ta</h1>
                        <p className="circle-chart-title">Yetib borgan</p>
                      </div>
                    </div>
                    <div className="circle-chart-false oval-CHart">
                      <div className="circle-chart-error">
                        <Chart />
                      </div>
                      <div className="circle-chart-info">
                        <h1 className="circle-chart-order">260 ta</h1>
                        <p className="circle-chart-title">Xatolik bo'lgan</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="line-chart">
                  <div>
                    <LineChart width={280} height={50} data={data}>
                      <Line type="monotone" dataKey="pv" stroke="#000" strokeWidth={2} />
                    </LineChart>
                  </div>
                  <div className="line-chart-info">
                    <div className="feedbacks">
                      <h1 className="line-chart-order">234 ta</h1>
                      <p className="line-chart-subtitle">bu oygi feedbacklar</p>
                    </div>
                    <div className="pracent">
                      <p className="pracent-title">1.5%</p>
                      <span className="arrow">
                        <ArrowDownwardRoundedIcon></ArrowDownwardRoundedIcon>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="interation">
                  <h1 className="interation-title">Integratsiyalar</h1>
                  <div className="cards">
                    <div className="interation-card">
                      <div className="circle-card-info">
                        <span>
                          <img src={amoCrm} alt="" width={45} height={45} />
                        </span>
                        <div className="card-title">
                          <h1 className="card-title-name">AmoCrm</h1>
                          <p className="card-title-bot">CRM</p>
                        </div>
                      </div>
                      <span className="edit">
                        <BorderColorOutlinedIcon></BorderColorOutlinedIcon>
                      </span>
                    </div>

                    <div className="interation-card">
                      <div className="circle-card-info">
                        <span>
                          <img src={telegram} alt="" width={45} height={45} />
                        </span>
                        <div className="card-title">
                          <h1 className="card-title-name">TelegramBot</h1>
                          <p className="card-title-bot">Habar yuboruvchi</p>
                        </div>
                      </div>
                      <span className="edit">
                        <BorderColorOutlinedIcon></BorderColorOutlinedIcon>
                      </span>
                    </div>

                    <div className="interation-card">
                      <div className="circle-card-info">
                        <span>
                          <img src={trello} alt="" width={45} height={45} />
                        </span>
                        <div className="card-title">
                          <h1 className="card-title-name">Trello</h1>
                          <p className="card-title-bot">Task Management</p>
                        </div>
                      </div>
                      <span className="edit">
                        <BorderColorOutlinedIcon></BorderColorOutlinedIcon>
                      </span>
                    </div>

                    <div className="interation-card">
                      <div className="circle-card-info">
                        <span>
                          <img src={bitrix} alt="" width={45} height={45} />
                        </span>
                        <div className="card-title">
                          <h1 className="card-title-name">Bitrix</h1>
                          <p className="card-title-bot">CRM</p>
                        </div>
                      </div>
                      <span className="edit">
                        <BorderColorOutlinedIcon></BorderColorOutlinedIcon>
                      </span>
                    </div>

                    <div className="interation-card">
                      <div className="circle-card-info">
                        <span>
                          <img src={iphone} alt="" width={45} height={45} />
                        </span>
                        <div className="card-title">
                          <h1 className="card-title-name">IP Phone</h1>
                          <p className="card-title-bot">Phone</p>
                        </div>
                      </div>
                      <span className="edit">
                        <BorderColorOutlinedIcon></BorderColorOutlinedIcon>
                      </span>
                    </div>
                  </div>
                  <p className="more-info">
                    <a href="#">Barcha integratsiyalar</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
