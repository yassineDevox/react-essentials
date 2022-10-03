import React from 'react'
import { Input } from './../input/index'

export const SearchForm = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit} style={{width:"80%",margin:"0 auto"}}>
      <Input placeholder='Enter Here...' label='Context(s)' />
      <Input placeholder='Enter Here...' label='Questions' />
      <Input
        placeholder='Enter Domain Here...'
        label='Companies/Websites'
      />
    </form>
  )
}
