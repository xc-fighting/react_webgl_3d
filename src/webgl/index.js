import React from "react"
import Init from "./init"
export default class WebGL extends React.Component {

	componentDidMount() {
        
		Init("webgl");

	}
	render() {
		return (
           <canvas id="webgl" width="400" height="400" style={{border: "1px solid black"}}>
           </canvas>
		)
	}
}