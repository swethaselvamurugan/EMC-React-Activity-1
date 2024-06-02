import Search from "./components/search.js"
import Chat from "./components/chat.js"
import one from "./assets/images/profile-1.jpg"
import two from "./assets/images/profile-2.jpg"
import three from "./assets/images/profile-3.jpg"
import four from "./assets/images/profile-4.jpg"
import five from "./assets/images/profile-5.jpg"
import six from "./assets/images/profile-6.jpg"

var person = [
  {
    name: "Jessica Koel",
    msg: "Hey, Joel, I am here to help you out please...",
    time: 11.26,
    image: one
  },
  {
    name: "Komeial Bogler",
    msg: "I will send you all the documents as soon as...",
    time: 12.26,
    image: two
  },
  {
    name: "Tamaara Suiale",
    msg: "Are you going to business trip next week",
    time: 8.26,
    image: three
  },
  {
    name: "Sam Nielson",
    msg: "I suggest to start a new business soon",
    time: 7.26,
    image: four
  },
  {
    name: "Caroline Nexon",
    msg: "We need to start a new research center.",
    time: 9.26,
    image: five
  },
  {
    name: "Patrick Koeler",
    msg: "May be yes",
    time: 3.26,
    image: six
  }
]

function App() {
  return (
    <div>
      <Search></Search>
      {
      person.map(function(item){
        return(
        <Chat name={item.name} msg={item.msg} time={item.time} image={item.image}></Chat>
        )
      })
    }
    </div>
  )
}

export default App