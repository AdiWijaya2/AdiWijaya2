
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Adi" && password == "123"){
alert ("Login successfully");
window.location.href = "Dashboard.html"; // Menuju halaman berikutnya
return false;
}
else if (username == '' && password == '' ){
    alert("Masukkan Username dan Password");
}
else if (username != username && password == password ){
    alert("Username anda salah, coba lagi");
}
else if (username == username && password != password ){
    alert("Password anda salah, coba lagi");
}
else{
    alert("Username dan password anda salah");
}
}
