import React from 'react'
import Main from "./Main"
import Header from "./Header"
import Footer from "./Footer"


function MainView() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-white via-pastel-green-100 to-pastel-green-200 pl-2 pr-2">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default MainView
