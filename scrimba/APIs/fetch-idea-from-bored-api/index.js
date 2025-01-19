fetch("https://apis.scrimba.com/bored/api/activity") 
  .then(response => response.json())
  .then(data => {
    const ele = document.createElement('p');
    ele.innerText = data.activity;
    document.getElementById('container').appendChild(ele);
  })