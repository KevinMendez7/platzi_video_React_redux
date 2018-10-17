
export function openModal(mediaId){
  return{
    type: "OPEN_MODAL",
    payload: {
      mediaId
    }
  }
}

export function closeModal(){
  return{
    type: "CLOSE_MODAL"
  }

}

export function search(query){
  return{
    type: "SEARCH_VIDEO",
    payload:{
      query
    }
  }
}

export function searchAsyncVideo(query){
  return (dispatch) =>{
    setTimeout(()=>{
      dispatch(search(query))
    }, 2000 )
  }
}
