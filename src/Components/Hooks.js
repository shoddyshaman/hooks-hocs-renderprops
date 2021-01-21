import React, { useState, useEffect } from 'react'

const Hooks = () => {
    const [username,setUsername] = useState('')
    const [count, setCount] = useState(0)

    useEffect(() => {
        setUsername('Matt')
    },[])

    useEffect(() => {
        console.log('count changed')
    },[count])
    return (
        <main>
            <h1>Hello, {username}, your count is {count}</h1>
            <input value={username} onChange={e => setUsername(e.target.value)}/>
            <button onClick={() => setCount(count-1)}>Count Down</button>
            <button onClick={() => setCount(count+1)}>Count Up</button>
        </main>
    )
}
export default Hooks

// class Hooks extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             username: '',
//             count: 0
//         }
//     }

//     componentDidMount(){
//         this.setState({ username: 'Matt' })
//     }

//     componentDidUpdate(){
//         console.log('Count changed')
//     }

//     handleInput = (val) => {
//         this.setState({ username: val })
//     }

//     incrementCount = () => {
//         this.setState({ count: this.state.count + 1 })
//     }

//     decrementCount = () => {
//         this.setState({ count: this.state.count - 1 })
//     }

//     render(){
//         return (
//             <main>
//                 <h1>Hello, {this.state.username}, your count is {this.state.count}</h1>
//                 <input value={this.state.username} onChange={e => this.handleInput(e.target.value)}/>
//                 <button onClick={this.decrementCount}>Count Down</button>
//                 <button onClick={this.incrementCount}>Count Up</button>
//             </main>
//         )
//     }
// }

// export default Hooks;