import React , { useState } from 'react'

 const Search = (props) => {
    const [text , setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value)
     };
    const onSubmit = (e) => {
         e.preventDefault();
         if(text === ''){
            props.setAlert('Please Enter Something' , 'light');
         } else {
            props.searchUsers(text);
            setText('');
         }
     }
    const onClear = (e) => {
        props.removeUsers();
     }
            if (props.users.length !== 0){
                return (
                    <div>
                        <form className='form' onSubmit = {onSubmit}>
                            <input type='text' name='text' placeholder='Search Users.....' value= {text} onChange ={onChange} />
                            <input type= 'submit' value= 'Search' className='btn btn-dark btn-block' />
                        </form>
                        <button className= 'btn btn-light btn-block' onClick={onClear}>Clear</button>
                    </div>
                );
            }

            else{
                return (
                    <div>
                        <form className='form' onSubmit = {onSubmit}>
                            <input type='text' name='text' placeholder='Search Users.....' value= {text} onChange ={onChange} />
                            <input type= 'submit' value= 'Search' className='btn btn-dark btn-block' />
                        </form>
                    </div>
                );
            }
        

}

export default Search
