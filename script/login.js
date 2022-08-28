 
  
  let data=JSON.parse(localStorage.getItem('signup_data'));
  let form = document.querySelector("form");

  form.addEventListener("submit",function(){
    event.preventDefault();

    let email = form.email.value;
    let password = form.password.value;
    if(!email || !password){
      alert('fill the inputs')
    }else{
      if(data.email == email && data.password == password){
        alert("Login Successful");
        window.location.href='../code/blog_homepage.html';
      } else {
        alert("Wrong Credentials");
      }
    }
    
  })

  

  