document.querySelector("button").addEventListener("click", displayUserInfo)

async function displayUserInfo(){
  try{
    const res = await fetch("http://localhost:1356/api/userInfo")
    const data = await res.json()

    console.log(data);
  }catch(e){
    console.log(e);
  }
}
