import React, { useRef, useState } from 'react'
import Header from '../components/Header'

export const Home = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const id = 0 
  

  


  const [data, setData] = useState([])
  const onSave = (e) => {    
    e.preventDefault()
    
    let newId = id + 1
    if (data.length > 0 ){
      newId = data[data.length - 1].id + 1
    }
      
    setData ([ ...data, {title, desc, id: newId}])
    setTitle("")
    setDesc("")
    console.log(data);
  }
  const onChangeTitle = (e) => {
    // console.log(e)
    setTitle(e.target.value)


  }
  const onChangeDesc = (e) => {
    setDesc(e.target.value)
  }

  
  
  
  return (
    <div>
      <Header title="Home"/>
      <form>
        <input value={title} onChange={onChangeTitle} style={{border: "1px solid red", color: "black"}} type="text" name='title'/>
        <textarea value={desc} onChange={onChangeDesc} style={{border: "1px solid red", color: "black"}} name="description" id="desc"></textarea>
        <button onClick={onSave}> Save</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>Desc</th>
          </tr>
        </thead>
        <tbody>
        {
          data.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.desc}</td>
                </tr>
          ))
       }
        </tbody>
      </table>


    </div>
  )
}
