// styles
import '../styles/App.scss';
// components
import Menu from './Menu';
import Notes from './Notes';
import Editor from './Editor';

const App: React.FC = (): JSX.Element => {
  return (
    <div className="app">
      <Menu />
      <Notes />
      <Editor />
    </div>
  );
};

export default App;
