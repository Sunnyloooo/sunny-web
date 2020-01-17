import React, { useState } from 'react'

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

const Categories = props => {
  const [key, setKey] = useState('')
  const category = Object.keys(data)
  return (
    <>
      <div className="col-12 d-flex justify-content-between m-2 flex-wrap categoriesNav">
        {category.map((item, index) => (
          <h3 key={item + index} className={key===item?'active':''} onClick={() => setKey(item)}>
            {item}
          </h3>
        ))}
      </div>
      <div className="col-12 m-2">
        {key === '' ? (
          <></>
        ) : (
          <>
            <div className="d-flex flex-wrap  justify-content-center">
              {Object.keys(data[key]).map((item, index) => (
                <div key={item + index} className="col-6 col-sm-4 col-md-3">
                  <h4>{item}</h4>
                  {print(data[key][item])}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Categories
