
function addToFavourites (userId)  {
  if (window.localStorage.getItem('favourite_users') === null) {
    window.localStorage.setItem('favourite_users', JSON.stringify([userId]));
  } else {
    let favourites = JSON.parse(window.localStorage.getItem('favourite_users'));
    favourites.push(userId);
    window.localStorage.setItem('favourite_users', JSON.stringify(favourites));
  }

};

function removeFromFavourites(index) {
    const favourites = JSON.parse(window.localStorage.getItem('favourite_users'));
    const filteredArray = favourites.filter(function(item){
        return item != index})
    window.localStorage.setItem('favourite_users', JSON.stringify(filteredArray));
};

function getAllFavourites() {
    const favourites_dict = JSON.parse(window.localStorage.getItem('favourite_users'))
    if(!favourites_dict) return [];
    let favourites_list = [];
    for (const [key, value] of Object.entries(favourites_dict)) {
        favourites_list.push(value);
      }
    return favourites_list;
}


export {addToFavourites, removeFromFavourites, getAllFavourites }