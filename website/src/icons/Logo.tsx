import * as React from 'react'
import styled from 'styled-components'

export default (props: any) => (
  <Logo
    width="120"
    height="24"
    viewBox="0 0 120 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path d="M57.945,19.164H55.172l-5.4-8.834v8.834H47V5.738h2.773l5.408,8.852V5.738h2.764Z" />
      <path d="M64.794,19.348A4.93,4.93,0,0,1,61.208,18a4.789,4.789,0,0,1-1.378-3.587v-.258a5.992,5.992,0,0,1,.583-2.684,4.241,4.241,0,0,1,1.645-1.825A4.632,4.632,0,0,1,64.5,9a4.138,4.138,0,0,1,3.226,1.291,5.225,5.225,0,0,1,1.184,3.661v1.088H62.539a2.485,2.485,0,0,0,.776,1.568,2.385,2.385,0,0,0,1.655.59,2.885,2.885,0,0,0,2.412-1.116l1.313,1.466a4.039,4.039,0,0,1-1.627,1.328A5.386,5.386,0,0,1,64.794,19.348Zm-.3-8.188A1.688,1.688,0,0,0,63.2,11.7a2.776,2.776,0,0,0-.628,1.53h3.715v-.212a1.945,1.945,0,0,0-.48-1.364A1.72,1.72,0,0,0,64.489,11.16Z" />
      <path d="M74.241,12.165l1.683-2.979H78.78l-2.847,4.888,2.967,5.09H76.034L74.25,16.029l-1.774,3.135H69.6l2.967-5.09L69.73,9.186H72.6Z" />
      <path d="M86.055,18.15a3.356,3.356,0,0,1-2.737,1.2,3.176,3.176,0,0,1-2.458-.922,3.94,3.94,0,0,1-.86-2.7V9.186h2.671v6.446q0,1.559,1.424,1.559a1.931,1.931,0,0,0,1.867-.941V9.186h2.681v9.978H86.128Z" />
      <path d="M96.075,16.407a.85.85,0,0,0-.49-.766,5.366,5.366,0,0,0-1.553-.507q-3.568-.747-3.568-3.024a2.727,2.727,0,0,1,1.1-2.213A4.462,4.462,0,0,1,94.457,9,4.781,4.781,0,0,1,97.5,9.9a2.811,2.811,0,0,1,1.146,2.323H95.973a1.27,1.27,0,0,0-.37-.94,1.555,1.555,0,0,0-1.155-.378,1.6,1.6,0,0,0-1.045.3.962.962,0,0,0-.37.775.834.834,0,0,0,.416.719,4.558,4.558,0,0,0,1.424.47,11.268,11.268,0,0,1,1.682.443A2.759,2.759,0,0,1,98.672,16.3,2.611,2.611,0,0,1,97.5,18.509a5.09,5.09,0,0,1-3.032.839,5.381,5.381,0,0,1-2.237-.442A3.8,3.8,0,0,1,90.7,17.679a2.862,2.862,0,0,1-.555-1.687h2.533a1.39,1.39,0,0,0,.527,1.088,2.1,2.1,0,0,0,1.313.378,1.936,1.936,0,0,0,1.155-.286A.913.913,0,0,0,96.075,16.407Z" />
    </g>
    <path d="M30.788,4.186a1.689,1.689,0,1,0,1.689-1.674A1.677,1.677,0,0,0,30.788,4.186Zm-2.532,0a4.15,4.15,0,0,0,1.109,2.83L27.574,9.775l2.34,1.52,1.928-2.97a4.285,4.285,0,0,0,.635.047,4.186,4.186,0,1,0-4.221-4.186ZM7.334,17.052l5.8-8.846a4.224,4.224,0,0,0,1.8.119l4.331,8.645a4.155,4.155,0,0,0-1.122,2.844,4.221,4.221,0,0,0,8.442,0,4.146,4.146,0,0,0-.73-2.357l1.895-2.875-2.33-1.536-1.822,2.763a4.253,4.253,0,0,0-1.234-.181,4.314,4.314,0,0,0-.627.046l-4.34-8.663a4.186,4.186,0,1,0-6.531-.437l-5.97,9.113a4.182,4.182,0,1,0,2.442,1.365Z" />
  </Logo>
)

const Logo = styled.svg`
  height: 26px;
  fill: #ffffff;
`
