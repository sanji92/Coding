function sort(tab){
    for(var i = 0; i < tab.length; i++){
      
      var min = i; 
      for(var j = i+1; j < tab.length; j++){
        if(tab[j] < tab[min]){
         
         min = j; 
        }
      }
      var tmp = tab[i];
      tab[i] = tab[min];
      tab[min] = tmp;
    }
    return tab;
  };
  var tab = [5, 8, 11, 6, 1, 9, 3];
  sort(tab);
  console.log(tab);