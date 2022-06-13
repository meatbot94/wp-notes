// styles
import '../styles/Blog.scss';

// components
import Notes from './Notes';

const Editor: React.FC = (): JSX.Element => {
  return (
    <section className="blog">
      <Notes />
    </section>
  );
};

export default Editor;
