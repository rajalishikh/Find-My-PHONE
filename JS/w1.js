// load the data 
const phone_api=async(input_text)=>{
    const phone_fetch=await fetch(`https://openapi.programming-hero.com/api/phones?search=${input_text}`)
    const phone_json =await phone_fetch.json();
    const phone_data=phone_json.data
    phone_api_details(phone_data)
}
// show the data 
const phone_api_details=(data_s)=>{
  // find the element 
    let find_item=document.getElementById('phone_container')
    find_item.innerHTML=''
    console.log(data_s.length)
    let find_button=document.getElementById('show_all')
    if(data_s.length >12){
      find_button.classList.remove('hidden')
    }else if(data_s.length<12){
      find_button.classList.add('hidden')
    }
    // limitation
    data_s=data_s.slice(0,10)
    // run loop 
    for(let data of data_s){
        console.log(data)
        // create dib
        let crete_div=document.createElement('div')
        crete_div.classList=`card bg-base-100 p-4 shadow-xl`
        // set inner html
        crete_div.innerHTML=`
        <figure class="px-10 pt-10">
              <img
                src=${data.image}
                alt="Shoes"
                class="rounded-xl"
              />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">${data.
                phone_name}</h2>
              <p>${data.
                slug
                }</p>
              <div class="card-actions">
                <button class="btn btn-primary">Show Details</button>
        `
        // append child 
        find_item.appendChild(crete_div)
    }
    loading(false)


}
// search phone section 
function search_phone(){
  loading(true)
  
  // find the id 
  const find_phone=document.getElementById('input_text')
  // find the man
  let input_Value=find_phone.value;
  console.log(input_Value)
  // call function 
  phone_api(input_Value)

}
// phone_api()
// search phone section 2 
function search_phone2(){
  loading(true)
  const find_search_phone2=document.getElementById('input_text2')
  const find_search_phone2_man=find_search_phone2.value;
  phone_api(find_search_phone2_man)

}
function loading(is_loading){
  const find_loading_bar=document.getElementById('spinear_section');
  if(is_loading === true){
    find_loading_bar.classList.remove('hidden')

  }else if(is_loading === false){
    find_loading_bar.classList.add('hidden')
  }
  

}