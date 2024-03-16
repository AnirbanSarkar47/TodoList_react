import React, { useRef, useState } from 'react'
import './todo.css'

function TodoLIst() {
  const [activity, setActivity] = useState("");
  const [listdata,setListdata]= useState([]);
  

  // main logic to add data in list
  function addActivity(){
    // setList([...list,activity])
    // console.log(list);
    if(activity.length > 0){
      console.log(activity.length);
      setListdata((listdata)=>{
        const updatedList =[...listdata,activity]
        console.log(updatedList);
        setActivity('')
        return updatedList;
  
      })
    }

    if(activity.length == 0){
      alert("You have to enter data first !!");
      
    }
   

  }

  // to remove data from list
  function remove(i){
    const updatedListData = listdata.filter((e,id)=>{
        console.log(i!=id);
        console.log(listdata);

        return i!=id;
        
    })

    setListdata(updatedListData)

  }

  //  remove all data at once
  function removeall(){
    setListdata([])

  }


  return (
    <>
        <h1 className='text-[5vw]' >Todo List</h1>
        <div id='main'> 
          <input type="text" 
            placeholder='Add Activity' 
            id='Inputdata'
            value={activity} 
            onChange={(e)=>setActivity(e.target.value) 
            }
          />
          <button id='btn1' onClick={addActivity}>ADD</button>
          <p id='txt'>Here is your list</p>
          {listdata !=[] && listdata.map((data, i)=>{
            return(
              <>  
                <p key={i}>
                  <div id='output'>
                    <div id="list" >{data}</div><button id='btn2' onClick={()=>{remove(i)}}>Remove</button>
                  </div>                  
                </p>                
              </>
            )
          })}

          {listdata.length>=1 && <button id='btn3' onClick={removeall}>Remove All</button> }
         
        </div>
        
    </>
  )
}

export default TodoLIst