import './App.css';
import avatar from './assets/images/avatar-jessica.jpeg'

const links = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];

export default function App() {
  return (
    <main className="app">
      <img src={avatar} />
      <div className='info'>
        <h1>Jessica Randall</h1>
        <h3>London, United Kingdom</h3>
        <p>"Front-end developer and avid reader."</p>
      </div>
      <div className='links'>
        {
          links.map(link => <Button key={link} title={link} />)
        }
      </div>
    </main>
  );
}

function Button({ title }: { title: String }) {
  return <button>{title}</button>;
}