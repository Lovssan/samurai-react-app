import { useState } from 'react';
import './Users.css'



const Paginator = ({totalItemsCount,pageSize,portionSize=10,currentPage,onPageChanged})=>{
    let pagesCount = Math.ceil(totalItemsCount/pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)  
    }
    let key=0
    let portionCount = Math.ceil(pagesCount/portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber-1)*portionSize+1
    let rigthPortionPageNumber = (portionNumber)*portionSize
    return (<div className='pagin-pages'>
                {portionNumber>1&&<div>
                    <button onClick={()=>setPortionNumber(--portionNumber)}>prev</button>
                </div>}
                <div>
                    {pages
                        .filter(p=>p>=leftPortionPageNumber&&p<=rigthPortionPageNumber)
                        .map(p=><span key = {++key} 
                    className={`${currentPage===p&&'selected-page'} selected-pages`} 
                    onClick={()=>onPageChanged(p)}>{p} </span>)}
                </div>
                {portionNumber<portionCount&&<div>
                    <button onClick={()=>setPortionNumber(++portionNumber)}>next</button>
                </div>}
            </div>)
}

export default Paginator


