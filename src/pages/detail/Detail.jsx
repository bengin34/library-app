import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { DetailContainer, DetailTitle, DetailImg ,Description, InfoPart} from './Detail.style';
import defaultImg  from "../../assets/book.jpg"

const Detail = () => {
  const {state} = useLocation();
  const {id} = useParams();
  return (
    <DetailContainer>
      <DetailTitle>{state.volumeInfo.title}</DetailTitle>
      <DetailImg > <img src={state.volumeInfo.imageLinks?.smallThumbnail || defaultImg} />  </DetailImg>
      <Description> {state.volumeInfo.description} </Description>
      <InfoPart>
        <p>{state.volumeInfo.authors?.map((author) => <span key={author}>{author}</span>)}</p>
        <p>{state.volumeInfo.publishedDate}  {state.volumeInfo.publisher && (<span>/ state.volumeInfo.publisher </span>)}</p>
      </InfoPart>
    </DetailContainer>
  )
}

export default Detail