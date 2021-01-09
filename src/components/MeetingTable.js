import React from "react";
import HeatMap from "react-heatmap-grid";
import Zoom from 'react-reveal/Zoom';
import Data from '../data/data.json'

const xLabels = new Array(32).fill(0, 1, 32).map((_, i) => `${i}`);
const yLabels = new Array(13).fill(0, 1, 13).map((_, i) => `${i}`);
const data = new Array(yLabels.length).fill(1).map(() => new Array(xLabels.length).fill(""));

Data.Meeting.forEach(element => {
   let tmp=element.roles[0]
   data[tmp.month][tmp.day]=tmp.id
});

class  MeetingTable extends React.Component {
  render() {
    return (
      <section className="meeting__table">
          <div className="meeting__table-label">
            <HeatMap
              xLabels={xLabels}
              yLabels={yLabels}
              xLabelsLocation={"bottom"}
              data={data}
              cellStyle={(data) => ({fontSize: "12px", color: "black" })}
              cellRender={(value) => value && 
                <Zoom cascade>
                  <span className="meeting__table-value">{value}</span>
                </Zoom>}
              squares
            />
        </div>
      </section>
    );
  }
}
export default MeetingTable
