import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Nav"></div>
          <div className="Home">
            <section className="section__thegame">
              <div className="content">
                <h1>The Game.</h1> <hr/>
                <h2><span>Join 10,000+ players!</span><br/><br/>Build a team of your favorite characters and score points as they slaughter their enemies, conquer territory, eat chickens, drink wine, commit unspeakable incest and more!</h2>
                <p>Download the app to compete against your friends, enemies, family and the world in for fame and fortune and glory!</p>
                <br/>
                <a className="appstorelink__ios" href="#">
                  iOS - App Store
                </a>
                <a className="appstorelink__android" href="#">
                  Android
                </a>
              </div>
            </section>
            <section className="section__therules">
              <div className="content">
                <h1>The Rules.</h1>  <hr/>
                <table>
                    <thead>
                      <tr className="table__header">
                        <th>Scoring Action</th>
                        <th>Multiplier</th>
                        <th>Points</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Acquire Loot</td>
                            <td>Dragon Glass</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Dragon</td>
                            <td>1000</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Mythical Artifact</td>
                            <td>200</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>New Armor</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Valyrian Steel</td>
                            <td>150</td>
                        </tr>
                        <tr>
                            <td>Betray</td>
                            <td>Epic</td>
                            <td>300</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Major</td>
                            <td>200</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Minor</td>
                            <td>150</td>
                        </tr>
                        <tr>
                            <td>Claim Seat of Power</td>
                            <td>Any Throne</td>
                            <td>400</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Iron Throne</td>
                            <td>1000</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Toilet</td>
                            <td>300</td>
                        </tr>
                        <tr>
                            <td>Conquer</td>
                            <td>City or Castle</td>
                            <td>250</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Dorne</td>
                            <td>2000</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Kingdom</td>
                            <td>500</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Kings Landing</td>
                            <td>700</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Town</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Consume</td>
                            <td>Chicken</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Wine</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Convert</td>
                            <td>New Religion</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>Costume Change</td>
                            <td>Looks Bad</td>
                            <td>-10</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Looks Good</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Death</td>
                            <td>Character</td>
                            <td>200</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Embarrassing death</td>
                            <td>-100</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Epic Death</td>
                            <td>400</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Honorable</td>
                            <td>300</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Resurrection</td>
                            <td>350</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Wedding Bonus</td>
                            <td>200</td>
                        </tr>
                        <tr>
                            <td>Deceive</td>
                            <td>Human</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Known Character</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Demoralized</td>
                            <td>Sustain Heavy Casualties</td>
                            <td>-200</td>
                        </tr>
                        <tr>
                            <td>Destroy</td>
                            <td>Sink a Fleet</td>
                            <td>1000</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Sink a Ship</td>
                            <td>200</td>
                        </tr>
                        <tr>
                            <td>Dialogue</td>
                            <td>Clever Line</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Comment About Winter</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Inspirational Line</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>Discovery</td>
                            <td>Discover Major Lore</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Discover Targaryan Blood Line</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>First Blood</td>
                            <td>Episode</td>
                            <td>70</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Season</td>
                            <td>150</td>
                        </tr>
                        <tr>
                            <td>Forge an Alliance</td>
                            <td>Create New Alliance</td>
                            <td>150</td>
                        </tr>
                        <tr>
                            <td>Gain Status</td>
                            <td>Major Promotion</td>
                            <td>200</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Minor Promotion</td>
                            <td>75</td>
                        </tr>
                        <tr>
                            <td>Get Married</td>
                            <td>Marriage</td>
                            <td>200</td>
                        </tr>
                        <tr>
                            <td>Infrastructure</td>
                            <td>Bring Down The Wall</td>
                            <td>1000</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Build a Wall</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>Insult</td>
                            <td>Major Sick Burn</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Minor Sick Burn</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Joke</td>
                            <td>Bad Joke</td>
                            <td>-10</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Make Dick Joke</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>Kill</td>
                            <td>Dragon</td>
                            <td>2000</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Family Member</td>
                            <td>550</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Headshot</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Hired Assassin</td>
                            <td>75</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Human</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>King or Queen</td>
                            <td>1000</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Known Character</td>
                            <td>400</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Save a Comrade</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Style Bonus</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>White Walker</td>
                            <td>800</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Wight</td>
                            <td>70</td>
                        </tr>
                        <tr>
                            <td>Lose Status</td>
                            <td>Get Captured</td>
                            <td>-100</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Major Demotion</td>
                            <td>-100</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Minor Demotion</td>
                            <td>-50</td>
                        </tr>
                        <tr>
                            <td>Loss</td>
                            <td>Battle</td>
                            <td>-100</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Epic Battle</td>
                            <td>-200</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Skirmish</td>
                            <td>-50</td>
                        </tr>
                        <tr>
                            <td>Multi Kill</td>
                            <td>Double Kill</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Rampage</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Triple Kill</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>Naked Body</td>
                            <td>Breasts</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Butt</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Flaccid Penis</td>
                            <td>60</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Full Nudity</td>
                            <td>140</td>
                        </tr>
                        <tr>
                            <td>Sex</td>
                            <td>Anyone</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Blood Kin</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Named Character</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Orgy</td>
                            <td>70</td>
                        </tr>
                        <tr>
                            <td>Speech</td>
                            <td>Inspirational</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Nobody Cares</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Battle</td>
                            <td>200</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Epic Battle</td>
                            <td>500</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Skirmish</td>
                            <td>100</td>
                        </tr>
                    </tbody>
                  </table>
                </div>
            </section>
            <section className="section__gettheapp">
              <div className="content">
                <h1>Download The Game!</h1> <hr/>
                <p>Throne Fantasy is best played with everyone you know. Start a league with your friends, family, co-workers, or anyone!</p>
                <p>We wish you well in the wars to come.</p>
                <a className="appstorelink__ios" href="#">
                  iOS - App Store
                </a>
                <a className="appstorelink__android" href="#">
                  Android
                </a>
              </div>
            </section>
            <section className="section__gotquestions">
            <div className="content">
              <h1>GoT Questions?</h1><hr/>
              <p>Inquiries, priase, complaints?
                <br/>
                Hit us up on <a href="https://www.facebook.com/thronefantasy/">facebook messenger.</a>
              </p>
              </div>
            </section>
            <section className="section__graveyard">
              <div className="content">
                <h1>This project is dedicated to those who gave their lives.<br/>Thank you.</h1>
                <p>
                  <span>Aggo</span> <span>Akho</span> <span>Jon Arryn</span> <span>Lysa Arryn</span> <span>Joffrey Baratheon</span> <span>Myrcella Baratheon</span> <span>Renly Baratheon</span> <span>Robert Baratheon</span> <span>Stannis Baratheon</span> <span>Tommen Baratheon</span> <span>Selyse Baratheon</span> <span>Shireen Baratheon</span> <span>Barra</span> <span>Billy</span> <span>Biter</span> <span>Baby Bolton</span> <span>Ramsay Bolton</span> <span>Roose Bolton</span> <span>Brother Ray</span> <span>Maester Caleotte</span> <span>Jory Cassel</span> <span>Rodrik Cassel</span> <span>Gregor Clegane</span> <span>The Copper King</span> <span>Cooper</span> <span>Lady Crane</span> <span>Craster</span> <span>Maester Cressen</span> <span>Emmon Cuy</span> <span>Xaro Xhoan Daxos</span> <span>Arthur  Dayne</span> <span>Beric* Dondarrion</span> <span>Dongo</span> <span>Doreah</span> <span>Drennan</span> <span>Khal Drogo</span> <span>Maester Eaton</span> <span>Vardis Egen</span> <span>The Flasher</span> <span>Syrio Forel</span> <span>Khal Forzho</span> <span>Joyeuse Frey</span> <span>Lothar Frey</span> <span>Walda Frey</span> <span>Walder Frey</span> <span>Gared</span> <span>Gatins</span> <span>Ghita</span> <span>Gordy</span> <span>Greizhen mo Ullhor</span> <span>Grenn</span> <span>Grey Wind</span> <span>Balon Greyjoy</span> <span>Guymon</span> <span>Donnel Hill</span> <span>Dontos Hollard</span> <span>Areo  Hotah</span> <span>Hizdahr zo Loraq</span> <span>The High Septon</span> <span>The High Sparrow</span> <span>Gerold Hightower</span> <span>Hodor</span> <span>Adrack Humble</span> <span>Iggo</span> <span>Irri</span> <span>Jack</span> <span>Karsi</span> <span>Harald Karstark</span> <span>Rickard Karstark</span> <span>Torrhen Karstark</span> <span>Kegs</span> <span>Ralf Kenning</span> <span>Kraznys mo Nakloz</span> <span>Kurleket</span> <span>Lady</span> <span>Alton Lannister</span> <span>Kevan Lannister</span> <span>Lancel Lannister</span> <span>Martyn Lannister</span> <span>Tywin Lannister</span> <span>Willem Lannister</span> <span>Leaf</span> <span>Lem</span> <span>Loboda</span> <span>Locke</span> <span>Lommy</span> <span>Amory Lorch</span> <span>Lord of Bones</span> <span>Lowell</span> <span>Maester Luwin</span> <span>Mag the Mighty</span> <span>Mago</span> <span>Wendel Manderly</span> <span>Bowen Marsh</span> <span>Doran Martell</span> <span>Oberyn Martell</span> <span>Trystane Martell</span> <span>Master Torturer</span> <span>Mirri Maz Duur</span> <span>Mero</span> <span>Septa Mordane</span> <span>Mandon Moore</span> <span>Morgan</span> <span>Jeor Mormont</span> <span>Maege Mormont</span> <span>Khal Moro</span> <span>Mossador</span> <span>Mully</span> <span>Myranda</span> <span>Mycah</span> <span>Olly</span> <span>Osha</span> <span>Oznak zo Pahl</span> <span>Belicho  Paenymion</span> <span>Polliver</span> <span>Vayon Poole</span> <span>Pyat Pree</span> <span>Prendahl na Ghezn</span> <span>Pycelle</span> <span>Pyp</span> <span>Qhorin Halfhand</span> <span>Khal Qorro</span> <span>Qotho</span> <span>Rakharo</span> <span>Rast</span> <span>Mance  Rayder</span> <span>Razdal mo Eraz</span> <span>Jojen Reed</span> <span>Rennick</span> <span>Rhaego</span> <span>Khal Rhalko</span> <span>Black Walder Rivers</span> <span>Riddell</span> <span>Ros</span> <span>Robar Royce</span> <span>Waymar Royce</span> <span>Rorge</span> <span>Sally</span> <span>Sally's Father</span> <span>Aron  Santagar</span> <span>Matthos Seaworth</span> <span>Barristan  Selmy</span> <span>Shae</span> <span>Shaggydog</span> <span>The Silk King</span> <span>Simpson</span> <span>Janos  Slynt</span> <span>Smitty</span> <span>Jon* Snow</span> <span>The Spice King</span> <span>Catelyn Stark</span> <span>Eddard Stark</span> <span>Lyanna Stark</span> <span>Rickon Stark</span> <span>Robb Stark</span> <span>Talisa Stark</span> <span>Steve</span> <span>Stiv</span> <span>Stonesnake</span> <span>Styr</span> <span>Summer</span> <span>Karl Tanner</span> <span>Tansy</span> <span>Aemon Targaryen</span> <span>Aeryes II Targaryen</span> <span>Viserys Targaryen</span> <span>Alliser Thorne</span> <span>The Three-Eyed Raven</span> <span>The Tickler</span> <span>Tom</span> <span>Axel Torrent</span> <span>Meryn  Trant</span> <span>Brynden  Tully</span> <span>Hoster Tully</span> <span>Loras Tyrell</span> <span>Mace Tyrell</span> <span>Margaery Tyrell</span> <span>Greatjon Umber</span> <span>Smalljon Umber</span> <span>Septa Unella</span> <span>Hugh of the Vale</span> <span>Varly</span> <span>The Waif</span> <span>Wallen</span> <span>Thenn Warg</span> <span>White Rat</span> <span>Will</span> <span>Willis  Wode</span> <span>Wun Weg Wun Dar Wun</span> <span>Othell Yarwyck</span> <span>Ygritte</span> <span>Yore</span> 

                </p>
              </div>
            </section>
            <section className="section__thanks">
              <h1>THANKS FOR PLAYING</h1>
            </section>
            <div className=""></div>
            <div className=""></div>
          </div>
      </div>
    );
  }
}

export default App;
