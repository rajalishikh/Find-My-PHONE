// load the data 
const phone_api=async(input_text,show_all)=>{
    const phone_fetch=await fetch(`https://openapi.programming-hero.com/api/phones?search=${input_text}`)
    const phone_json =await phone_fetch.json();
    const phone_data=phone_json.data
    phone_api_details(phone_data,show_all)
}
// show the data 
const phone_api_details=(data_s,show_all)=>{
  // find the element 
    let find_item=document.getElementById('phone_container')
    find_item.innerHTML=''
    console.log(data_s.length)
    let find_button=document.getElementById('show_all')
    if(data_s.length >12 && !show_all){
      find_button.classList.remove('hidden')
    }else{
      find_button.classList.add('hidden')
    }
    console.log('show the button',show_all)
    // limitation
    if(!show_all){
      data_s=data_s.slice(0,10)
    }
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
                <button onclick='show_details("${data.slug}")' class="btn btn-primary">Show Details</button>
        `
        // append child 
        find_item.appendChild(crete_div)
    }
    loading(false)


}
// search phone section 
function search_phone(show_all){
  loading(true)
  
  // find the id 
  const find_phone=document.getElementById('input_text')
  // find the man
  let input_Value=find_phone.value;
  console.log("Search for fist input text",input_Value)
  // call function 
  phone_api(input_Value,show_all)

}

function loading(is_loading){
  const find_loading_bar=document.getElementById('spinear_section');
  if(is_loading === true){
    find_loading_bar.classList.remove('hidden')

  }else if(is_loading === false){
    find_loading_bar.classList.add('hidden')
  }
  

}
// show details main part bring the data 

const show_details = async(data_details)=>{
  const find_data=await fetch(`https://openapi.programming-hero.com/api/phone/${data_details}`)
  const translate_find_data=await find_data.json()
  show_phone_details(translate_find_data.data)

}

// show details work show the phone details  

function show_phone_details(find_data){
  console.log(find_data)
  
 const find_id=document.getElementById('phone_details_show')
 
 find_id.innerHTML=
 `<div>
  <figure class="px-10 pt-10">
    <img
      src="${find_data.image}"
      alt="Shoes"
      class="rounded-xl card bg-base-100  shadow-xl" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${find_data.name}</h2>
    <p>${find_data.mainFeatures?.storage}</p>
    
  </div>
</div>

 
 `
 
 my_modal_5.showModal()
 
}

function show_all(){
  search_phone(true)
  

}