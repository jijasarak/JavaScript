async function dogFetchAPI(){
  try{
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    if(!response.ok){
      throw new Error("Data did not fetch");
    }

    const data = await response.json();

    const ele = document.createElement('img')
    ele.src = data.message;
    document.querySelector('#image-container').appendChild(ele);
  }catch(err){
    console.error(err.message);
  }
    
}

dogFetchAPI();