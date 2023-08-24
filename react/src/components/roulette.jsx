import './roulette.css'
import 'bootstrap/dist/css/bootstrap.css'

import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const baseURL = "http://localhost:5000/roulette";


export default function Roulette() {
  const [num, setNum] = useState(null);
  const [calar, setCalar] = useState(null);
  const [post, setPost] = useState(null);

  function handleChange(n) {
    var zas = n.target.value;
    setNum(zas);
    if(zas == 0){
      setCalar("lightgreen");
      console.log({calar});
    }else if(zas % 2 === 0){
      setCalar("rgb(236, 53, 53)");
    }else if(zas % 2 !== 0){
      setCalar("rgb(44, 44, 44)");
    }else{
      setCalar("undefined");
    } 
  }

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
    });
  }, []);

  // if (!post) return null;

  return(
      <div className="roul" id="roul">
          
      <h1>Roulette</h1>

      <h3>Choose a number:</h3>

      <div className="d-flex">

        <div className="container">
          <div onClick={() => {setNum(0); setCalar("lightgreen")}} className="row"><div className="col-sm-12 zero">0</div></div>
          <div className="row">
            <div onClick={() => {setNum(1); setCalar("rgb(44, 44, 44)")}} className="col-sm-2 odd" num="1">1</div>
            <div onClick={() => {setNum(2); setCalar("rgb(236, 53, 53)")}} className="col-sm-2 even">2</div>
            <div onClick={() => {setNum(3); setCalar("rgb(44, 44, 44)")}} className="col-sm-2 odd">3</div>
            <div onClick={() => {setNum(4); setCalar("rgb(236, 53, 53)")}} className="col-sm-2 even">4</div>
            <div onClick={() => {setNum(5); setCalar("rgb(44, 44, 44)")}} className="col-sm-2 odd">5</div>
            <div onClick={() => {setNum(6); setCalar("rgb(236, 53, 53)")}} className="col-sm-2 even">6</div>
          </div>
          <div className="row">
            <div onClick={() => {setNum(7); setCalar("rgb(44, 44, 44)")}} className="col-sm-2 odd">7</div>
            <div onClick={() => {setNum(8); setCalar("rgb(236, 53, 53)")}} className="col-sm-2 even">8</div>
            <div onClick={() => {setNum(9); setCalar("rgb(44, 44, 44)")}} className="col-sm-2 odd">9</div>
            <div onClick={() => {setNum(10); setCalar("rgb(236, 53, 53)")}} className="col-sm-2 even">10</div>
            <div onClick={() => {setNum(11); setCalar("rgb(44, 44, 44)")}} className="col-sm-2 odd">11</div>
            <div onClick={() => {setNum(12); setCalar("rgb(236, 53, 53)")}} className="col-sm-2 even">12</div>
          </div>
          <div className="row">
            <div onClick={() => {setNum(13); setCalar("rgb(44, 44, 44)")}} className="col-sm-2 odd">13</div>
            <div onClick={() => {setNum(14); setCalar("rgb(236, 53, 53)")}} className="col-sm-2 even">14</div>
            <div onClick={() => {setNum(15); setCalar("rgb(44, 44, 44)")}} className="col-sm-2 odd">15</div>
            <div onClick={() => {setNum(16); setCalar("rgb(236, 53, 53)")}} className="col-sm-2 even">16</div>
            <div onClick={() => {setNum(17); setCalar("rgb(44, 44, 44)")}} className="col-sm-2 odd">17</div>
            <div onClick={() => {setNum(18); setCalar("rgb(236, 53, 53)")}} className="col-sm-2 even">18</div>
          </div>
          <div className="row">
            <div onClick={() => {setNum(19); setCalar("rgb(44, 44, 44)")}} className="col-sm-2 odd">19</div>
            <div onClick={() => {setNum(20); setCalar("rgb(236, 53, 53)")}} className="col-sm-2 even">20</div>
            <div onClick={() => {setNum(21); setCalar("rgb(44, 44, 44)")}} className="col-sm-2 odd">21</div>
            <div onClick={() => {setNum(22); setCalar("rgb(236, 53, 53)")}} className="col-sm-2 even">22</div>
            <div onClick={() => {setNum(23); setCalar("rgb(44, 44, 44)")}} className="col-sm-2 odd">23</div>
            <div onClick={() => {setNum(24); setCalar("rgb(236, 53, 53)")}} className="col-sm-2 even">24</div>
          </div>
          <div className="row">
            <div onClick={() => {setNum(25); setCalar("rgb(44, 44, 44)")}} className="col-sm-2 odd">25</div>
            <div onClick={() => {setNum(26); setCalar("rgb(236, 53, 53)")}} className="col-sm-2 even">26</div>
            <div onClick={() => {setNum(27); setCalar("rgb(44, 44, 44)")}} className="col-sm-2 odd">27</div>
            <div onClick={() => {setNum(28); setCalar("rgb(236, 53, 53)")}} className="col-sm-2 even">28</div>
            <div onClick={() => {setNum(29); setCalar("rgb(44, 44, 44)")}} className="col-sm-2 odd">29</div>
            <div onClick={() => {setNum(30); setCalar("rgb(236, 53, 53)")}} className="col-sm-2 even">30</div>
          </div>
          <div className="row">
            <div onClick={() => {setNum(31); setCalar("rgb(44, 44, 44)")}} className="col-sm-2 odd">31</div>
            <div onClick={() => {setNum(32); setCalar("rgb(236, 53, 53)")}} className="col-sm-2 even">32</div>
            <div onClick={() => {setNum(33); setCalar("rgb(44, 44, 44)")}} className="col-sm-2 odd">33</div>
            <div onClick={() => {setNum(34); setCalar("rgb(236, 53, 53)")}} className="col-sm-2 even">34</div>
            <div onClick={() => {setNum(35); setCalar("rgb(44, 44, 44)")}} className="col-sm-2 odd">35</div>
            <div onClick={() => {setNum(36); setCalar("rgb(236, 53, 53)")}} className="col-sm-2 even">36</div>
          </div>
        </div>

        <div id="dingus">
          <div className="pholder"><b style={{"color": calar}}>{num}</b></div>
          <input className="bet" type="number" value={num} onChange={handleChange} placeholder="Bet Number" min="0" max="36"></input>
          <input className="bet" type="number" /*value={bet}*/ placeholder="Bet Amount"></input>
        </div>

      </div>

      <button className="btn btn-success mt-4" >Roll</button>

    </div>
  )
}
