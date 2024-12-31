const loadPetData = () =>{
    // fetch the data
    fetch('https://openapi.programming-hero.com/api/peddy/pet/1')
        .then((res) => res.json())
        .then((data) => displayLoadData(data.petData))
        .catch((err) => console.log(err))
}


const displayLoadData = (petData) =>{
    const petDataContainer = document.getElementById('pet-data-container')
    const card = document.createElement('div');
        card.classList = "bg-gray-50 shadow pb-5 "
        card.innerHTML = `
       
            <img src="${petData.image}" class="rounded-xl h-full w-[1220px] mx-auto object-cover" />
        
        <div class=" items-center ml-1">
            <h2 class="font-bold text-5xl mt-7 mb-2">${petData.pet_name}</h2>
            <div class="flex gap-12">
                <div>
                    <p class="text-xl text-gray-600 font-bold mb-1">Breed : ${petData.breed}</p>
                    <p class="text-xl text-gray-600 font-bold mb-1">Gender : ${petData.gender}</p>
                    <p class="text-xl text-gray-600 font-bold mb-1">vaccinated status : ${petData.vaccinated_status}</p>
                </div>    
                <div>
                    <p class="text-xl text-gray-600 font-bold mb-1">Birth : ${petData.date_of_birth}</p>
                    <p class="text-xl text-gray-600 font-bold mb-1">Price : ${petData.price}</p>
                </div> 
            </div> 
                <h2>Details Information</h2>

                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                The point of using is that it has a more-or-less normal distribution of letters, as opposed to using.</p>   

                <button class="text-2xl  btn btn-block text-[#0e7a81] mr-[20px]">Cancel</button>
 
        </div>  
        `
          

    petDataContainer.append(card)
}

loadPetData()

// document.getElementById('pet-details').addEventListener('click',function(){
//     document.getElementById('pet-data-container').classList.remove('hidden')
// })
