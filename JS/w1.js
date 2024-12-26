const phone_api=async ()=>{
    const phone_fetch=await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const phone_json =await phone_fetch.json();
    const phone_data=phone_json.data
    console.log(phone_data)
}
phone_api()