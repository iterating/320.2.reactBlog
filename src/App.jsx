import React from "react"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Article from "./components/Article"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <main>
        <Article
          date="11/12/20"
          title="On the Street in Brooklyn"
          imageUrl="/path/to/your/image1.jpg"
          content="ray ipsum, dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt
nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia
cupiditate eveniet velit officiis magni aliquid, laborum dolor? Quasi? Veniam
amet rerum ducimus est ea a1: neque alias.Temporibus perspiciatis at impedit
voluptas aut voluptates facere totam aliquid debitis rerum, ex consequuntur, nulla eius quae
corrupti optio atque ut. Repellendus molestiae doloribus recusandae, itaque voluptatibus
placeat repellat deserunt amet eaque dignissimos, iste sapiente magnam doloremque. Fugit,
cum, cupiditate aliquam. mollitia quisquam sed nulla eveniet doloribus neque optio odio qui!
Id architecto impedit consequatur rem quaerat voluptatibus pariatur quas. quod quisquam
quo ab molestiae"
        />
        <Article
          date="11/11/20"
          title="Vintage in Vogue"
          imageUrl="/path/to/your/image2.jpg"
          content="elfies sunt, dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt

nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia

cupiditate eveniet velit officiis magni aliquid, laborum dolor? Quasi?Veniam amet

rerum ducimus est ea. at neque alias.Temporibus perspiciatis at imped'rt voluptas
aut voluptates facere totam aliquid deb'rtis rerum, ex consequuntur. nulla eius quae corrupti
optio atque ut. Repellendus molestiae doloribus recusandae, itaque voluptatibus placeat
repellat deserunt amet eaque dignissimos. iste sapiente magnam doloremque. Fugit. cum,
cupiditate aliquam, mollitia quisquam sed nulla eveniet doloribus neque optio odio qui! ld
architecto impedit consequatur r"
        />
      </main>
      <Footer />
    </div>
  )
}

export default App
