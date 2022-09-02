import React, { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

export const DetailsPage = () => {

  const [todoDetailed, settodoDetailed] = useState(undefined)
  const store = useSelector(s => s.todo)
  const { id } = useParams()

  useEffect(() => {
    settodoDetailed(store.list.find(t => t.id == Number(id)))
  }, [])

  return (
    <div>
      <h1> DetailsPage of the fucking current todo : {id} </h1>
      <ul>
        {
          todoDetailed && Object.keys(todoDetailed)
            .map(k => <li> {k} : {todoDetailed[k]} </li>)
        }
      </ul>
    </div>
  )
}
