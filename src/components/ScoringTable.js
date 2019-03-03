import React, { Component } from 'react';

class ScoringTable extends Component {
  render() {
    return (
    <div>
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
                <td>+50</td>
            </tr>
            <tr>
                <td></td>
                <td>Dragon</td>
                <td>+1000</td>
            </tr>
            <tr>
                <td></td>
                <td>Mythical Artifact</td>
                <td>+200</td>
            </tr>
            <tr>
                <td></td>
                <td>New Armor</td>
                <td>+20</td>
            </tr>
            <tr>
                <td></td>
                <td>Valyrian Steel</td>
                <td>+150</td>
            </tr>
            <tr>
                <td>Betray</td>
                <td>Epic</td>
                <td>+300</td>
            </tr>
            <tr>
                <td></td>
                <td>Major</td>
                <td>+200</td>
            </tr>
            <tr>
                <td></td>
                <td>Minor</td>
                <td>+150</td>
            </tr>
            <tr>
                <td>Claim Seat of Power</td>
                <td>Any Throne</td>
                <td>+400</td>
            </tr>
            <tr>
                <td></td>
                <td>Iron Throne</td>
                <td>+6500</td>
            </tr>
            <tr>
                <td></td>
                <td>Toilet</td>
                <td>+300</td>
            </tr>
            <tr>
                <td></td>
                <td>Wilfully Decline</td>
                <td>+450</td>
            </tr>
            <tr>
                <td>Conquer</td>
                <td>City or Castle</td>
                <td>+250</td>
            </tr>
            <tr>
                <td></td>
                <td>Dorne</td>
                <td>+2000</td>
            </tr>
            <tr>
                <td></td>
                <td>Kingdom</td>
                <td>+500</td>
            </tr>
            <tr>
                <td></td>
                <td>Kings Landing</td>
                <td>+700</td>
            </tr>
            <tr>
                <td></td>
                <td>Town</td>
                <td>+100</td>
            </tr>
            <tr>
                <td>Consume</td>
                <td>Chicken</td>
                <td>+50</td>
            </tr>
            <tr>
                <td></td>
                <td>Wine</td>
                <td>+5</td>
            </tr>
            <tr>
                <td></td>
                <td>Ale</td>
                <td>+5</td>
            </tr>
            <tr>
                <td>Convert</td>
                <td>New Religion</td>
                <td>+50</td>
            </tr>
            <tr>
                <td>Finance</td>
                <td>Repay a Debt</td>
                <td>+20</td>
            </tr>
            <tr>
                <td></td>
                <td>Avoid Repayment of a Debt</td>
                <td>+35</td>
            </tr>
            <tr>
                <td>Survival</td>
                <td>Survive The Game of Thrones</td>
                <td>+300</td>
            </tr>
            <tr>
                <td>Costume Change</td>
                <td>Looks Bad</td>
                <td>-10</td>
            </tr>
            <tr>
                <td></td>
                <td>Looks Good</td>
                <td>+10</td>
            </tr>
            <tr>
                <td>Death</td>
                <td>Character</td>
                <td>+200</td>
            </tr>
            <tr>
                <td></td>
                <td>Embarrassing Death</td>
                <td>-100</td>
            </tr>
            <tr>
                <td></td>
                <td>Epic Death</td>
                <td>+400</td>
            </tr>
            <tr>
                <td></td>
                <td>Honorable Death</td>
                <td>+300</td>
            </tr>
            <tr>
                <td></td>
                <td>Resurrection</td>
                <td>+350</td>
            </tr>
            <tr>
                <td></td>
                <td>Wedding Bonus</td>
                <td>+200</td>
            </tr>
            <tr>
                <td>Deceive</td>
                <td>Human</td>
                <td>+20</td>
            </tr>
            <tr>
                <td></td>
                <td>Known Character</td>
                <td>+30</td>
            </tr>
            <tr>
                <td>Demoralized</td>
                <td>Sustain Heavy Casualties</td>
                <td>-200</td>
            </tr>
            <tr>
                <td>Destroy</td>
                <td>Sink a Fleet</td>
                <td>+1000</td>
            </tr>
            <tr>
                <td></td>
                <td>Sink a Ship</td>
                <td>+200</td>
            </tr>
            <tr>
                <td>Dialogue</td>
                <td>Clever Line</td>
                <td>+10</td>
            </tr>
            <tr>
                <td></td>
                <td>Comment About Winter</td>
                <td>+5</td>
            </tr>
            <tr>
                <td></td>
                <td>Flirt</td>
                <td>+20</td>
            </tr>
            <tr>
                <td></td>
                <td>Inspirational Line</td>
                <td>+25</td>
            </tr>
            <tr>
                <td>Discovery</td>
                <td>Discover Major Lore</td>
                <td>+100</td>
            </tr>
            <tr>
                <td></td>
                <td>Discover Targaryan Blood Line</td>
                <td>+225</td>
            </tr>
            <tr>
                <td>First Blood</td>
                <td>Episode</td>
                <td>+70</td>
            </tr>
            <tr>
                <td></td>
                <td>Season</td>
                <td>+150</td>
            </tr>
            <tr>
                <td>Forge an Alliance</td>
                <td>Create New Alliance</td>
                <td>+150</td>
            </tr>
            <tr>
                <td>Gain Status</td>
                <td>Major Promotion</td>
                <td>+200</td>
            </tr>
            <tr>
                <td></td>
                <td>Minor Promotion</td>
                <td>+75</td>
            </tr>
            <tr>
                <td>Marriage</td>
                <td>Get Married</td>
                <td>+200</td>
            </tr>
            <tr>
                <td>Prophecy</td>
                <td>Azor Ahai Reborn</td>
                <td>+2000</td>
            </tr>
            <tr>
                <td></td>
                <td>Win Cleganebowl</td>
                <td>+1000</td>
            </tr>
            <tr>
                <td>Infrastructure</td>
                <td>Bring Down The Wall</td>
                <td>+1000</td>
            </tr>
            <tr>
                <td></td>
                <td>Build a Wall</td>
                <td>+50</td>
            </tr>
            <tr>
                <td>Insult</td>
                <td>Major Sick Burn</td>
                <td>+40</td>
            </tr>
            <tr>
                <td></td>
                <td>Minor Sick Burn</td>
                <td>+10</td>
            </tr>
            <tr>
                <td>Make Joke</td>
                <td>Bad Joke</td>
                <td>-10</td>
            </tr>
            <tr>
                <td></td>
                <td>Good Joke</td>
                <td>10</td>
            </tr>
            <tr>
                <td></td>
                <td>Dick Joke</td>
                <td>+15</td>
            </tr>
            <tr>
                <td>Kill</td>
                <td>Dragon</td>
                <td>+2000</td>
            </tr>
            <tr>
                <td></td>
                <td>Family Member</td>
                <td>+550</td>
            </tr>
            <tr>
                <td></td>
                <td>Headshot Bonus</td>
                <td>+30</td>
            </tr>
            <tr>
                <td></td>
                <td>Savior Bonus</td>
                <td>+80</td>
            </tr>
            <tr>
                <td></td>
                <td>Avenger Bonus</td>
                <td>+150</td>
            </tr>
            <tr>
                <td></td>
                <td>Style Bonus</td>
                <td>+1-999</td>
            </tr>
            <tr>
                <td></td>
                <td>Hired Assassin</td>
                <td>+75</td>
            </tr>
            <tr>
                <td></td>
                <td>Human</td>
                <td>+100</td>
            </tr>
            <tr>
                <td></td>
                <td>King or Queen</td>
                <td>+1000</td>
            </tr>
            <tr>
                <td></td>
                <td>Known Character</td>
                <td>+400</td>
            </tr>
            <tr>
                <td></td>
                <td>Innocent Child</td>
                <td>+250</td>
            </tr>
            <tr>
                <td></td>
                <td>White Walker</td>
                <td>+800</td>
            </tr>
            <tr>
                <td></td>
                <td>Wight</td>
                <td>+70</td>
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
                <td>+40</td>
            </tr>
            <tr>
                <td></td>
                <td>Rampage</td>
                <td>+100</td>
            </tr>
            <tr>
                <td></td>
                <td>Triple Kill</td>
                <td>+50</td>
            </tr>
            <tr>
                <td>Naked Body</td>
                <td>Breasts</td>
                <td>+40</td>
            </tr>
            <tr>
                <td></td>
                <td>Butt</td>
                <td>+20</td>
            </tr>
            <tr>
                <td></td>
                <td>Flaccid Penis</td>
                <td>+60</td>
            </tr>
            <tr>
                <td></td>
                <td>Full Nudity</td>
                <td>+140</td>
            </tr>
            <tr>
                <td>Sex</td>
                <td>Anyone</td>
                <td>+40</td>
            </tr>
            <tr>
                <td></td>
                <td>Blood Kin</td>
                <td>+100</td>
            </tr>
            <tr>
                <td></td>
                <td>Named Character</td>
                <td>+50</td>
            </tr>
            <tr>
                <td></td>
                <td>Get Pregnant</td>
                <td>+130</td>
            </tr>
            <tr>
                <td></td>
                <td>Sire a Child</td>
                <td>+130</td>
            </tr>
            <tr>
                <td></td>
                <td>Incest Bonus</td>
                <td>+70</td>
            </tr>
            <tr>
                <td></td>
                <td>Orgy</td>
                <td>+70</td>
            </tr>
            <tr>
                <td>Speech</td>
                <td>Inspirational</td>
                <td>+50</td>
            </tr>
            <tr>
                <td></td>
                <td>Nobody Cares</td>
                <td>+5</td>
            </tr>
            <tr>
                <td>Victory</td>
                <td>Battle</td>
                <td>+200</td>
            </tr>
            <tr>
                <td></td>
                <td>Epic Battle</td>
                <td>+500</td>
            </tr>
            <tr>
                <td></td>
                <td>Skirmish</td>
                <td>+100</td>
            </tr>
        </tbody>
      </table>
    </div>
    );
  }
}
export default ScoringTable;