//WAP that will take any number of arrays of objects combine them ( if the keys doesn't exist in the previous object then just add that else if the key is existing then concate string values and add the number values ) then return a object of objects.
//example : 
const arr1 = [
    { name: "Joe Brown", goals: 0, assists: 0, points: 0 },
    { name: "Jim Bob", goals: 2, assists: 1, points: 3 },
    { name: "Harry Styles", goals: 1, assists: 1, points: 2 },
    { name: "Craig Mack", goals: 5, assists: 7, points: 12 },
    { name: "Dog", bones: 100 }
  ];
  const arr2 = [
    {
      name: "Craig Mack",
      goals: 3,
      assists: 3,
      points: 6,
      ppg: 0,
      ppa: 0,
      pims: 0
    },
    { name: "Jim Bob", goals: 1, assists: 4, points: 5, ppg: 0, ppa: 1, pims: 0 },
    {
      name: "Joe Brown",
      goals: 0,
      assists: 0,
      points: 0,
      ppg: 0,
      ppa: 0,
      pims: 0
    },
    {
      name: "Harry Styles",
      goals: 0,
      assists: 0,
      points: 0,
      ppg: 0,
      ppa: 0,
      pims: 0
    }
  ];

  function mergerA(){
    let newObj = {};
    for(let i=0;i<arr1.length;i++){
        let keys = Object.keys(arr1[i]);
        newObj[arr1[i].name]={}
        for(let j=0;j<keys.length;j++){
            if(keys[j]!='name'){
                console.log(keys,arr1[i][keys[j]])
                newObj[arr1[i].name][keys[j]]=arr1[i][keys[j]]
            }
        }
    }
    for(let i=0;i<arr2.length;i++){
        let keys = Object.keys(arr2[i]);
        if(arr2[i].name in newObj ){
            for(let j=0;j<keys.length;j++){
                if(keys[j]!='name'){
                    if(keys[j] in newObj[arr2[i].name]){
                        newObj[arr2[i].name][keys[j]]+=arr2[i][keys[j]]
                    }else{
                        newObj[arr2[i].name][keys[j]]=arr2[i][keys[j]]
                    }
                }
                
            }
        }else{
            newObj[arr2[i].name]={}
            for(let j=0;j<keys.length;j++){
                if(keys[j]!='name'){
                    newObj[arr2[i].name][keys[j]]=arr2[i][keys[j]]
                }
            }
        }
        
    }
    
    console.log(newObj)
    
    
  }
  mergerA()