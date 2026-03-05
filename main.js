/* Il compleanno dello Chef

In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:
- Recuperare la ricetta da https://dummyjson.com/recipes/{id}
- Estrarre la proprietà userId dalla ricetta
- Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
- Restituire la data di nascita dello chef

*/


const getChefBirthday = async (id) => {
  let responseRecipe;
  
  try{
    responseRecipe = await fetch(`https://dummyjson.com/recipes/${id}`);
  } catch(error){
    throw new Error(`Non è stato possibile recuperare la ricetta con id ${id}`)
  }
  const recipe = await responseRecipe.json();
  const userId = recipe.userId;
  let responseChef;
  try{
    responseChef = await fetch(`https://dummyjson.com/users/${userId}`)
  } catch(error){
    throw new Error(`Non è stato possibile recuperare l'utente con id ${userId}`)
  }
  const chef = await responseChef.json();
  const birthDate = chef.birthDate;
  //console.log(birthDate)
  return birthDate;
}

(async() => {
  try{
    const birthDate = await getChefBirthday(2);
    console.log("Lo chef è natə il", birthDate);
  } catch(error){
    console.error(error);
  }
}) ();