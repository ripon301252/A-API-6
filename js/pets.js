// load all pets image & display.
const loadAllImages = async() =>{
    document.getElementById('spinner').style.display='block'
    setTimeout(function (){
        fetch('https://openapi.programming-hero.com/api/peddy/pets')
            .then((res) => res.json())
            .then((data) => displayAllImages(data.pets))
            .catch((err) => console.log(err))
    },2000)     
}

loadAllImages()

const displayAllImages = (pets) =>{
    document.getElementById('spinner').style.display='none';
    
    const divContainer = document.getElementById('div-container'); 
    const imageContainer = document.getElementById('pets-image'); 
    document.getElementById('div-container').innerHTML="";
    document.getElementById('pets-image').innerHTML = ""; 

pets.forEach(pets => {
    console.log(pets);
    const card = document.createElement('div');
    card.classList = "card card-compact border bg-gray-50 pb-5"
    card.innerHTML = `
    <figure class="px-5 pt-10 h-[200px] ">
        <img
        src="${pets.image}"
        class="rounded-xl h-full w-full object-cover" />
    </figure>
    <div class=" items-center  px-5">
        <h2 class="font-bold text-3xl mt-7 mb-2">${pets.pet_name}</h2>

        <p class=" flex items-center gap-3 text-base text-gray-600 font-bold mb-1"><img class="w-4" src="https://img.icons8.com/?size=24&id=m82dxEXRKBiI&format=png"> Breed : ${pets.breed}</p>

        <p class="flex items-center gap-3 text-base text-gray-600 font-bold mb-1"><img class="w-4" src="https://img.icons8.com/?size=80&id=udduMUcrHmZa&format=png"> Birth : ${pets.date_of_birth}</p>

        <p class="flex items-center gap-3 text-base text-gray-600 font-bold mb-1"><img class="w-4" src="https://img.icons8.com/?size=32&id=15241&format=png"> Gender : ${pets.gender}</p>

        <p class="flex items-center gap-3 text-base text-gray-600 font-bold mb-1"><img class="w-4" src="https://img.icons8.com/?size=24&id=85801&format=png"> Price : ${pets.price}</p>

        <div class="divider"></div>
        <div class="card-actions">
            <button class="btn  shadow-current"> <img class="w-7 text-white" src="img/like.png"></button>
            <button class="btn shadow-current text-sm text-[#3a7a82]">Adopt</button>
            <button onclick="petDetails()" id="pet-details" class="btn shadow-current text-sm text-[#3a7a82]">Details</button>
        </div>
    </div>
    `
    imageContainer.append(card);
});

    //-----------------------------------------

    const cards = document.createElement('div');     
    cards.classList = "w-[270px] h-[600px] lg:mx-0 mx-auto bg-gray-50 border rounded-xl mt-5 lg:mt-0";
    cards.innerHTML =`
    <figure class="px-5 pt-10 h-[200px] ">
        <img
        src="${pets.image}"
        class="rounded-xl h-full w-full object-cover" />
    </figure>
    <figure class="px-5 pt-10 h-[200px] ">
        <img
        src="${pets.image}"
        class="rounded-xl h-full w-full object-cover" />
    </figure>
    `
    divContainer.append(cards)

   

    
}

//--------------------------------------------

    // create Button by fetch
    const buttonFetch = async() =>{
        const res = await fetch(`https://openapi.programming-hero.com/api/peddy/categories`);
        const data = await res.json();
        const btnCategories = data.categories;
        displayCreateButton(btnCategories);
    }

    buttonFetch();

    //  display Button
    const displayCreateButton = (categories) =>{
        
        const buttonContainer = document.getElementById('button-container');
        categories.forEach((category) => {
            const createButton = document.createElement("button");
            createButton.classList = 'p-4 border bg-gray-100 hover:bg-gray-50  rounded-lg lg:px-5 px-2  py-3 flex items-center gap-2';
            createButton.setAttribute('id', 'btn' + category.id);
            createButton.innerHTML = `
            <img class="lg:w-8 w-6" src="${category.category_icon}" alt="" /> <span class="lg:text-xl text-sm text-black  font-bold">${category.category}</span>
            `
            buttonContainer.append(createButton);

            createButton.addEventListener('click', () =>{
                document.getElementById('spinner').style.display='block'
                setTimeout(function (){
                    displayImageCategory(category.category);
                    displayAllImages();
                },2000); 
            });
        }); 
    };

    const displayImageCategory = async(pet) =>{
        document.getElementById('spinner').style.display='none'
        
        const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${pet}`);
        const data = await res.json();
        const pets = (data.data);

       
        document.getElementById('category-image-container').innerHTML = ""
        const categoryImageContainer = document.getElementById('category-image-container');
            pets.forEach((pet) =>{
                
                const card = document.createElement('div');
                card.classList = "card card-compact border bg-gray-50 pb-5"
                card.innerHTML = `
                <figure class="px-5 pt-10 h-[200px] ">
                    <img
                    src="${pet.image}"
                    class="rounded-xl h-full w-full object-cover" />
                </figure>
                <div class=" items-center  px-5">
                    <h2 class="font-bold text-3xl mt-7 mb-2">${pet.pet_name}</h2>

                    <p class=" flex items-center gap-3 text-base text-gray-600 font-bold mb-1"><img class="w-4" src="https://img.icons8.com/?size=24&id=m82dxEXRKBiI&format=png"> Breed : ${pet.breed}</p>

                    <p class="flex items-center gap-3 text-base text-gray-600 font-bold mb-1"><img class="w-4" src="https://img.icons8.com/?size=80&id=udduMUcrHmZa&format=png"> Birth : ${pet.date_of_birth}</p>

                    <p class="flex items-center gap-3 text-base text-gray-600 font-bold mb-1"><img class="w-4" src="https://img.icons8.com/?size=32&id=15241&format=png"> Gender : ${pet.gender}</p>

                    <p class="flex items-center gap-3 text-base text-gray-600 font-bold mb-1"><img class="w-4" src="https://img.icons8.com/?size=24&id=85801&format=png"> Price : ${pet.price}</p>

                    <div class="divider"></div>
                    <div class="card-actions">
                        <button class="btn  shadow-current"> <img class="w-7 text-white" src="img/like.png"></button>
                        <button class="btn shadow-current text-sm text-[#3a7a82]">Adopt</button>
                        <button class="btn shadow-current text-sm text-[#3a7a82]">Details</button>
                    </div>
                </div>
                `
                categoryImageContainer.append(card);

            })  
    }

 



    // modal
const petDetails = async(slugs) => {
    const res = await fetch(` https://openapi.programming-hero.com/api/phone/${slugs}`);
    const data = await res.json();
    console.log(data.data);

    const {slug, image, brand, name} = data.data

    const modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML=`
     <dialog id="my_modal_1" class="modal">
        <div class="modal-box">
        <figure class="px-10 pt-10">
            <img
            src="${image}"
            class="rounded-xl mx-auto" />
        </figure>
            <h3 class="text-lg font-bold text-center mt-5">${brand}</h3>
            <h3 class="text-lg font-bold text-center my-5">${slug}</h3>
            <h3 class="text-lg font-bold text-center">${name}</h3>
        <div class="modal-action flex justify-center">
            <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn">Close</button>
            </form>
        </div>
    </dialog>
    `

    my_modal_1.showModal()
}

    
   
    
