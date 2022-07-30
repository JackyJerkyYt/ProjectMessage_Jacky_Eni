import logo from './logo.svg';
import './App.css';
import './style.css'
import Messages from './components/Message';
import Text from './components/Text';

function App() {
  return (
    <div className="App">
          <table className='content-table'>
                  <thead>
                      <tr>
                          <th>name</th>
                          <th>text</th>

                      </tr>
                  </thead>
                  <Messages />
      </table>
      <br></br>
      <Text />
    </div>
  );
}

export default App;
