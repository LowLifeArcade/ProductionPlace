import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import MainWindow from './MainWindow'
import Footer from './Footer'

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <MainWindow />
        <Footer />
      </div>
    )
  }
}

export default App;