import * as React from "react"
import * as ReactDOM from "react-dom"

interface UserProps extends React.Props<any> {
  name: string
  age: number
}

class UserDisplay extends React.Component<UserProps, {}> {
  render() {
    return <div>
      <h1>{this.props.name}</h1>
      <span>{this.props.age.toString()} years old.</span>
      </div>
    }
}

let content = <UserDisplay name={"rido"} age={43} />
let target = document.getElementById("output")
ReactDOM.render(content, target)
