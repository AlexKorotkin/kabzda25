
import './App.css'

function App() {

  return (
      <>
      <h1>This is App components</h1>
        <Rating/>
        <Accordion/>

      </>
  )
}

function Rating(){
  return (
      <>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
      </>
  )
}

function Accordion(){
  return (
      <>
      <h1>Menu</h1>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </>
  )
}

function Star(){
  return (
      <div>star</div>
  )
}


export default App
