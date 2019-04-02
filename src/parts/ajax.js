function ajax() {
  let form = document.querySelectorAll("form");

  for (let i = 0; i < form.length; i++) {
    let message = {
      loading: 'Загрузка',
      success: 'Отправлено',
      failure: '...что-то погло не так :-('
    };
    form[i].addEventListener("submit", (event) => {
      statusMesaage = form[i].getElementsByClassName("statusMesaage")[0];
      if (statusMesaage == undefined) {
        statusMesaage = document.createElement("div");
        statusMesaage.classList.add("status");
        form[i].appendChild(statusMesaage);
      }

      function clean(element) {
        element = element.querySelectorAll("*");
        for (let j = 0; j < element.length; j++) {
          console.log(element[j]);
          if (element[j].classList.value != "status")
            element[j].style.display = "none";
        }
      }

      event.preventDefault();

      let formData = new FormData(form[i]);

      function postData(data) {
        return new Promise(function (resolve, reject) {
          let requesst = new XMLHttpRequest();
          requesst.open('POST', 'smart.php');
          requesst.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');


          requesst.addEventListener('readystatechange', () => {
            if (requesst.readyState < 4) {
              statusMesaage.innerHTML = message.loading;
            } else if (requesst.readyState == 4 && requesst.status == 200) {
              statusMesaage.innerHTML = message.success;
              statusMesaage.style.height = "80px";
              //    statusMesaage.style.background = `url(${message.success}) no-repeat center`;
              statusMesaage.style.marginTop = "10px";
              //  document.getElementById("modalPhone").value = "";
              clean(form[i]);

            } else {
              statusMesaage.innerHTML = message.failure;
              statusMesaage.style.height = "80px";
              //  statusMesaage.style.background = `url(${message.failure}) no-repeat center`;
              statusMesaage.style.marginTop = "10px";
              // document.getElementById("modalPhone").value = "";
              clean(form[i]);
            }
          });
          //    console.log(data);
          requesst.send(data);
        });
      }

      postData(formData)
        .then(() => {
          statusMesaage.innerHTML = message.loading;
        })
        .then(() => {
          statusMesaage.innerHTML = message.success;
          statusMesaage.style.height = "80px";
          // statusMesaage.style.background = `url(${message.success}) no-repeat center`;
          statusMesaage.style.marginTop = "10px";
          //  document.getElementById("modalPhone").value = "";
          clean(form[i]);
        })
        .catch(() => {
          statusMesaage.innerHTML = message.failure;
          statusMesaage.style.height = "80px";
          //  statusMesaage.style.background = `url(${message.failure}) no-repeat center`;
          statusMesaage.style.marginTop = "10px";
          clean(form[i]);
        })
        .then(() => {
          //   console.log("Hi");
          for (let i = 0; i < input.length; i++) {
            input[i].value = "";
          }
          clean(form[i]);
        })
    });
  }
  //валидация телефона
  let phone = document.querySelectorAll(".input-phone");


  for (let i = 0; i < phone.length; i++) {
    phone[i].addEventListener('click', function(){
      phone[i].value = "+";
    });
    
    let old = 0;
    
    phone[i].addEventListener('input', function() {
      let st = this.value;
      if (!Number.isInteger(+st[st.length - 1])) {
        this.value = st.substring(0, st.length - 1);
        return null;
      }
    });
    
    phone[i].addEventListener('keydown', function(){
      var curLen = phone[i].value.length;
        
      if (curLen < old){
        old--;
        return;
        }
      if (curLen == 2) 
      phone[i].value = phone[i].value + "(";
        
      if (curLen == 6)
      phone[i].value = phone[i].value + ")-";
        
       if (curLen == 11)
       phone[i].value = phone[i].value + "-"; 
        
       if (curLen == 14)
       phone[i].value = phone[i].value + "-";  
        
       if (curLen > 16)
       phone[i].value = phone[i].value.substring(0, phone[i].value.length - 1);
        
       old++;
    });
    
  }
////имя и комент на русском языке
let isValid = function(s) {
  const cyrillicPattern = /[\u0400-\u04FF]/;
//  const cyrillicPattern = /^\s*(\w+)\s*$/;
  return cyrillicPattern.test(s);
};




let ruInput = document.querySelectorAll(".ru");

for(let i = 0; i < ruInput.length; i++) {
  ruInput[i].addEventListener('input', function() {
    let st = this.value;
    if (!isValid(st[st.length - 1])) {
      this.value = st.substring(0, st.length - 1);
      return null;
    }
  });
}


};

module.exports = ajax;