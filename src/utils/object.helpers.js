export const updateObjectArray = (items, itemID, objPropName, newObjProps)=>{
   return items.map((user)=>{
        if(user[objPropName]===itemID){
            return{...user, ...newObjProps}
        }
        return user
    })
  }