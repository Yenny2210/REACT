import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

// componente
const Button = ({text}) => {
  return (
    <button>
      <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 3)"><path d="m11.6427217 13.7567397-3.14377399-1.2567396h-4v-7.00000002h2l2.80105246-5.5c.57989907 0 1.07487363.2050252 1.48492373.61507546.4100508.41005058.6150761.90502516.6150755 1.48492425l-.8999994 2.40000029 4.0310597 1.34368655c.9979872.33266243 1.5591794 1.37584131 1.3086286 2.37964122l-.0684258.21997226-1.5536355 4.14302809c-.3878403 1.0342407-1.5406646 1.5582517-2.5749053 1.1704115z" /><path d="m1.5 4.5h2c.55228475 0 1 .44771525 1 1v8c0 .5522847-.44771525 1-1 1h-2c-.55228475 0-1-.4477153-1-1v-8c0-.55228475.44771525-1 1-1z" /></g></svg>
      {text}
    </button>
  )
}
root.render(
  <React.Fragment>
    <Button text="Boton 1" />
    <Button text="Boton 2" />
    <Button text="Boton 3" />
  </React.Fragment>

)
