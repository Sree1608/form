document.getElementById('form').addEventListener("submit",(event))
    event.preventDefault();
    var form={
        Firstname:document.getElementById(fn).value,
        Lastname:document.getElementById(ln).value,
        Mobile:document.getElementById(no).value,
        Email:document.getElementById(email).value,


    };
    console.log(form);