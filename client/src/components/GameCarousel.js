import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import products from '../MOCK_DATA'

const GameCarousel = () => {
  return (
    <Carousel pause='hover' className='bg-dark'>
      {products.map((product, index) => {
        if (index < 5) {
          return (
            <Carousel.Item key={product.id}>
              <Link to={`/product/${product._id}`}>
                <Image src={product.image} alt={product.last_name} fluid />
                <Carousel.Caption className='carousel-caption'>
                  <h3>{product.last_name}</h3>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          )
        }
      })}
    </Carousel>
  )
}

export default GameCarousel
