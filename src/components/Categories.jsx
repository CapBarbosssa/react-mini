
import React from 'react'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import styled from 'styled-components'


const Container =styled.div`
display: flex;
padding: 10px;
justify-content: space-between;
    
`

function Categories() {
  return (  <Container>
       {categories.map(item=>(
           <CategoryItem item ={item} key={item.id}/>

       ))}

       </Container>
  )
}

export default Categories
