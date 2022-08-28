let form= document.getElementById('form')



form.addEventListener('submit',function(){
    event.preventDefault()

    let email= document.getElementById('email').value;
    let password= document.getElementById('password').value;

    if(!email || !password){
        alert('fill all the inputs')
    }else{
        let obj={
            email,password
        }
    
        
        localStorage.setItem('signup_data',JSON.stringify(obj))
      document.getElementById('email').value=''
      document.getElementById('password').value=''
      document.getElementById('check').value=false
      alert('sign up successful')
      window.location.href='../code/login.html'
    }
   
})

