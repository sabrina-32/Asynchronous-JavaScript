

function  getRecipe(){

    setTimeout(()=>{

        const  recipeID =[332,443,54,666,856];
        console.log(recipeID);


        setTimeout((id)=>{

            const  recipe = {titel: 'pasta', publisher: 'Jonas'};
            console.log(`${id}: ${recipe.titel}`);
            

        },1000,  recipeID[2]);
        
    },1500);
}

getRecipe();
