// styles
import '../styles/App.scss';
// components
import Menu from './Menu';
import Notes from './Notes';
import Editor from './Editor';

function App(): JSX.Element {
  return (
    <div className="app">
      <Menu />
      <Notes />
      <Editor />
    </div>
  );
}

export default App;
