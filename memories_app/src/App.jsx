  import Header from "./Components/Header";
  import Addpost from "./Components/Addpost";
  import Post from "./Components/Post";

const App = () => {
  return (

    <div className="App">
        <div className="container">
            <Header/>
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '30px', columnGap: '40px'}}>
                <Post/>
                <Addpost/>
            </div>
               
        </div>
    </div>
  )
}

export default App