import { useState } from "react"

function App() {
 const [color, setColor] = useState("skyblue")

  return (
    <div className="w-full h-screen duration-200 flex flex-col items-center justify-center" style={{ backgroundColor: color }}>
      <div className="text-center mb-8">
        <h1 className="text-6xl font-extrabold tracking-widest text-white drop-shadow-lg">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 shadow-3xl">AURORA</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500 shadow-3xl"> CHANGER</span>
        </h1>
      </div>

      {/* Color Buttons */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-4 shadow-xl bg-orange-200 px-12 py-4 rounded-2xl">
          <button className="outline-none px-4 py-2 rounded-2xl font-bold shadow-xl" style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>
            Red
          </button>

          <button className="outline-none px-4 py-2 rounded-2xl font-bold shadow-xl" style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}>
            Green
          </button>

          <button className="outline-none px-4 py-2 rounded-2xl font-bold shadow-xl" style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}>
            Blue
          </button>

          <button className="outline-none px-4 py-2 rounded-2xl font-bold shadow-xl" style={{ backgroundColor: "olive" }}
            onClick={() => setColor("olive")}>
            Olive
          </button>

          <button className="outline-none px-4 py-2 rounded-2xl font-bold shadow-xl" style={{ backgroundColor: "gray" }}
            onClick={() => setColor("gray")}>
            Gray
          </button>

          <button className="outline-none px-4 py-2 rounded-2xl font-bold shadow-xl" style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}>
            Yellow
          </button>

          <button className="outline-none px-4 py-2 rounded-2xl font-bold shadow-xl" style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}>
            Pink
          </button>

          <button className="outline-none px-4 py-2 rounded-2xl font-bold shadow-xl" style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}>
            Purple
          </button>

          <button className="outline-none px-4 py-2 rounded-2xl font-bold shadow-xl" style={{ backgroundColor: "lavender" }}
            onClick={() => setColor("lavender")}>
            Lavender
          </button>

          <button className="outline-none px-4 py-2 rounded-2xl font-bold shadow-xl" style={{ backgroundColor: "white" }}
            onClick={() => setColor("white")}>
            White
          </button>

          <button className="outline-none px-4 py-2 rounded-2xl font-bold shadow-xl text-white" style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}>
            Black
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
