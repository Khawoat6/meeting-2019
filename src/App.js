import MeetingHead from './components/MeetingHead'
import MeetingTable from './components/MeetingTable'
import MeetingDetails from './components/MeetingDetails'
import './assets/sass/_main.scss';

function App() {
  return (
    <div className="App">
      <MeetingHead/>
      <MeetingTable/>
      <MeetingDetails/>
    </div>
  );
}
export default App;
