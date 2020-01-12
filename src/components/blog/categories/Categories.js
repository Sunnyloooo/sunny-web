import React from 'react'

//data
import data from './data'

//variable
const front = data.Front
const back = data.Back

//function
const print = data => {
  let result = []
  //物件
  if (typeof data == 'object' && !(data instanceof Array)) {
    for (let i in data) {
      result.push(<h5 key={Math.random()}>{i}</h5>)
      if (typeof data[i] == 'object' && !(data[i] instanceof Array)) {
        for (let j in data[i]) {
          result.push(<h6 key={data[i] + j}>*{j}</h6>)
          data[i][j].forEach((ele, ind) => {
            result.push(<p key={ele + ind}>{ele}</p>)
          })
        }
      } else {
        data[i].forEach((ele, ind) => {
          result.push(<p key={ele + ind}>{ele}</p>)
        })
      }
    }
  }
  //陣列
  if (data instanceof Array) {
    data.forEach((ele, ind) => {
      result.push(<h5 key={ele + ind}>{ele}</h5>)
    })
  }

  return result
}

const Categories = props => (
  <>
    <div className="col-12 m-2">
      <div className="text-center">
        <h3>Front</h3>
      </div>
      <div className="d-flex  justify-content-center">
        <div className="col-6">
          <h4>Javascript</h4>
          {print(front.Javascript)}
        </div>
        <div className="col-6">
          <h4>Css</h4>
          {print(front.Css)}
        </div>
      </div>
    </div>
    <div className="col-12 m-2">
      <div className="text-center">
        <h3>Back</h3>
      </div>
      <div className="d-flex  justify-content-center">
        <div className="col-2">
          <h4>Language</h4>
          {print(back.Language)}
        </div>
        <div className="col-3">
          <h4>Package manager</h4>
          {print(back.PackageManager)}
        </div>
        <div className="col-3">
          <h4>Framework</h4>
          {print(back.Framework)}
        </div>
        <div className="col-2">
          <h4>Testing</h4>
          {print(back.Testing)}
        </div>
        <div className="col-2">
          <h4>Database</h4>
          {print(back.Database)}
        </div>
      </div>
    </div>
    <div className="col-12 d-flex justify-content-between m-2 flex-wrap">
      <h3>ML </h3>
      <h3>Linux </h3>
      <h3>Algorithm </h3>
      <h3>Introduction To Computers </h3>
    </div>
  </>
)

export default Categories
