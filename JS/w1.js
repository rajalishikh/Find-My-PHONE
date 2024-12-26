const phone_api=async ()=>{
    const phone_fetch=await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const phone_json =await phone_fetch.json();
    const phone_data=phone_json.data
    phone_api_details(phone_data)
}

const phone_api_details=(data_s)=>{
    let find_item=document.getElementById('phone_container')
    for(let data of data_s){
        console.log(data)
        let crete_div=document.createElement('div')
        crete_div.classList=`card bg-base-100 w-96 shadow-xl`
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
        find_item.appendChild(crete_div)
    }


}
phone_api()