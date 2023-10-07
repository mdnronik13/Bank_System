const loginbtn = document.getElementById("login");
loginbtn.addEventListener("click",function(){
  document.getElementById("login-area").style.display="none";
  
  document.getElementById("transaction").style.display="block";

})



document.getElementById("adddeposit").addEventListener('click',function(){
  const depostinumber= parseFloat(document.getElementById("depositammount").value);
  //console.log(depostinumber);

  const currentnumber= parseFloat(document.getElementById("currentdeposit").innerText);

  const totaldeposit= depostinumber+currentnumber;
  //console.log(totaldeposit);
  document.getElementById("currentdeposit").innerText=totaldeposit;
  document.getElementById("depositammount").value="";

  const balancenumber= parseFloat(document.getElementById("currentbalance").innerText);
  
  const totalbalance=balancenumber+depostinumber;

  document.getElementById("currentbalance").innerText=totalbalance;



})




document.getElementById("addwithdraw").addEventListener('click',function(){
  const withdrawnumber= parseFloat(document.getElementById("withdrawammount").value);
  //console.log(withdrawnumber);
  const balancenumber= parseFloat(document.getElementById("currentbalance").innerText);
    
  const totalbalance=balancenumber-withdrawnumber;
  
  document.getElementById("currentbalance").innerText=totalbalance;
  document.getElementById("currentwithdraw").innerText=withdrawnumber;
  document.getElementById("currentdeposit").innerText="00";
  

})
