import './roulette.css'
import 'bootstrap/dist/css/bootstrap.css'
import PrintNumber from './placeholder.jsx'
var bingus;

export default function Roulette() {
    
    return(
        <div className="roul" id="roul">
            
        <h1>Roulette</h1>

        <h3>Choose a number:</h3>

        <div className="d-flex">

          <div className="container">
            <div onClick={() => {bingus = 9}} className="row"><div className="col-sm-12 zero">0</div></div>
            <div className="row">
              <div className="col-sm-2 odd" num="1">1</div>
              <div className="col-sm-2 even">2</div>
              <div className="col-sm-2 odd">3</div>
              <div className="col-sm-2 even">4</div>
              <div className="col-sm-2 odd">5</div>
              <div className="col-sm-2 even">6</div>
            </div>
            <div className="row">
              <div className="col-sm-2 odd">7</div>
              <div className="col-sm-2 even">8</div>
              <div className="col-sm-2 odd">9</div>
              <div className="col-sm-2 even">10</div>
              <div className="col-sm-2 odd">11</div>
              <div className="col-sm-2 even">12</div>
            </div>
            <div className="row">
              <div className="col-sm-2 odd">13</div>
              <div className="col-sm-2 even">14</div>
              <div className="col-sm-2 odd">15</div>
              <div className="col-sm-2 even">16</div>
              <div className="col-sm-2 odd">17</div>
              <div className="col-sm-2 even">18</div>
            </div>
            <div className="row">
              <div className="col-sm-2 odd">19</div>
              <div className="col-sm-2 even">20</div>
              <div className="col-sm-2 odd">21</div>
              <div className="col-sm-2 even">22</div>
              <div className="col-sm-2 odd">23</div>
              <div className="col-sm-2 even">24</div>
            </div>
            <div className="row">
              <div className="col-sm-2 odd">25</div>
              <div className="col-sm-2 even">26</div>
              <div className="col-sm-2 odd">27</div>
              <div className="col-sm-2 even">28</div>
              <div className="col-sm-2 odd">29</div>
              <div className="col-sm-2 even">30</div>
            </div>
            <div className="row">
              <div className="col-sm-2 odd">31</div>
              <div className="col-sm-2 even">32</div>
              <div className="col-sm-2 odd">33</div>
              <div className="col-sm-2 even">34</div>
              <div className="col-sm-2 odd">35</div>
              <div className="col-sm-2 even">36</div>
            </div>
          </div>

          <div id="dingus">
            <div className="pholder"><PrintNumber choseNumber={bingus} /></div>
            <input id="bet" type="number" placeholder="Bet Amount"></input>
          </div>

        </div>

        <button className="btn btn-success mt-4" >Roll</button>

      </div>
    )
}

