import Header from './components/Header/index'
import Box from './components/Box/index'
import './components/styles/global.css'
function App() {
  return (
    <div
    className='only-content'>
      <Header />
      <main>
      <Box background='claro'>
         <h1>Educação financeira é tudo de bom!</h1>
         <p>Clicke em saiba mais e comece a ficar rico!</p>
         </Box>
      <Box background='escuro'>
         <h2>Teste Child2</h2></Box>
      </main>
    </div>
  );
}

export default App;
