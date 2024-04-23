var mForm_data ={};
var mForm_display = false;

// add event listener to input elements
document.addEventListener('click', async function(e) {
    chrome.storage.local.get("MFORM_MODAL_DATA", function(data){

        if (typeof data.MFORM_MODAL_DATA !== 'undefined') {
           mForm_data = data.MFORM_MODAL_DATA;
       }else{
           mForm_data = false;
           chrome.storage.local.set({
               "MFORM_MODAL_DATA": mForm_data
           });
       }
   });
    chrome.storage.local.get("MFORM_MODAL_FLAG", function(data){
    
         if (typeof data.MFORM_MODAL_FLAG !== 'undefined') {
            mForm_display = data.MFORM_MODAL_FLAG;
        }else{
            mForm_display = false;
            chrome.storage.local.set({
                "MFORM_MODAL_FLAG": false
            });
        }
    });
    console.log(mForm_display);
    console.log(mForm_data);
    if(!mForm_display) return;
    console.log(e.target.nodeName);
    if ((e.target.nodeName === 'INPUT' && (e.target.type === 'text' || e.target.type === 'email')) || e.target.nodeName === 'TEXTAREA') {
        // create and display the modal dialog
        var mMFModal = document.createElement('div');
        mMFModal.className = "MFModal"
        var mForm_content = document.createElement("div");
        mForm_content.id = "mformMFDiv";
        mForm_content.className = "MFModal-content";
  
        //modal close btn
        var crossMFModal=document.createElement("span");
        crossMFModal.innerHTML = "&times";
        crossMFModal.className = "MFclose";
        crossMFModal.id = "mMFclose";
        crossMFModal.onclick = function(){
          mMFModal.style.display = "none";
        }
        mForm_content.append(crossMFModal);
  
        //addressDiv
        var addressMFDiv = document.createElement("div");
        addressMFDiv.className = "row-item-div";
          var addressMFDivLeft = document.createElement("div");
          addressMFDivLeft.className = "row-item-div-left";
          addressMFDivLeft.innerHTML = "住所";
  
          var addressMFDivRight = document.createElement("div");
          addressMFDivRight.className = "row-item-div-right";
        
        addressMFDiv.append(addressMFDivLeft);
        addressMFDiv.append(addressMFDivRight);
  
        //textDiv
        var textMFDiv = document.createElement("div");
        textMFDiv.className = "row-item-div";
          var textMFDivLeft = document.createElement("div");
          textMFDivLeft.className = "row-item-div-left";
          textMFDivLeft.innerHTML = "本文";
  
          var textMFDivRight = document.createElement("div");
          textMFDivRight.className = "row-item-div-right";
        
        textMFDiv.append(textMFDivLeft);
        textMFDiv.append(textMFDivRight);
  
        //nameDiv
        var nameMFDiv = document.createElement("div");
        nameMFDiv.className = "row-item-div";
          var nameMFDivLeft = document.createElement("div");
          nameMFDivLeft.className = "row-item-div-left";
          nameMFDivLeft.innerHTML = "氏名";
  
          var nameMFDivRight = document.createElement("div");
          nameMFDivRight.className = "row-item-div-right";
        
        nameMFDiv.append(nameMFDivLeft);
        nameMFDiv.append(nameMFDivRight);
  
        //numberDiv
        var numberMFDiv = document.createElement("div");
        numberMFDiv.className = "row-item-div";
          var numberMFDivLeft = document.createElement("div");
          numberMFDivLeft.className = "row-item-div-left";
          numberMFDivLeft.innerHTML = "番号";
  
          var numberMFDivRight = document.createElement("div");
          numberMFDivRight.className = "row-item-div-right";
        
        numberMFDiv.append(numberMFDivLeft);
        numberMFDiv.append(numberMFDivRight);
  
        //emailDiv
        var emailMFDiv = document.createElement("div");
        emailMFDiv.className = "row-item-div";
          var emailMFDivLeft = document.createElement("div");
          emailMFDivLeft.className = "row-item-div-left";
          emailMFDivLeft.innerHTML = "メール";
  
          var emailMFDivRight = document.createElement("div");
          emailMFDivRight.className = "row-item-div-right";
        
        emailMFDiv.append(emailMFDivLeft);
        emailMFDiv.append(emailMFDivRight);
  
        //branchDiv
        var branchMFDiv = document.createElement("div");
        branchMFDiv.className = "row-item-div";
          var branchMFDivLeft = document.createElement("div");
          branchMFDivLeft.className = "row-item-div-left";
          branchMFDivLeft.innerHTML = "件名";
  
          var branchMFDivRight = document.createElement("div");
          branchMFDivRight.className = "row-item-div-right";
        
        branchMFDiv.append(branchMFDivLeft);
        branchMFDiv.append(branchMFDivRight);
  
        //customDiv
        var customMFDiv = document.createElement("div");
        customMFDiv.className = "row-item-div";
          var customMFDivLeft = document.createElement("div");
          customMFDivLeft.className = "row-item-div-left";
          customMFDivLeft.innerHTML = "カスタムテ";
  
          var customMFDivRight = document.createElement("div");
          customMFDivRight.className = "row-item-div-right";
        
        customMFDiv.append(customMFDivLeft);
        customMFDiv.append(customMFDivRight);
  
        //companyDiv
        var companyMFDiv = document.createElement("div");
        companyMFDiv.className = "row-item-div";
          var companyMFDivLeft = document.createElement("div");
          companyMFDivLeft.className = "row-item-div-left";
          companyMFDivLeft.innerHTML = "会社";
  
          var companyMFDivRight = document.createElement("div");
          companyMFDivRight.className = "row-item-div-right";
        
        companyMFDiv.append(companyMFDivLeft);
        companyMFDiv.append(companyMFDivRight);
  
        //appendDivs
        mForm_content.appendChild(companyMFDiv);
        mForm_content.appendChild(nameMFDiv);
        mForm_content.appendChild(emailMFDiv);
        mForm_content.appendChild(numberMFDiv);
        mForm_content.appendChild(addressMFDiv);
        mForm_content.appendChild(textMFDiv);
        mForm_content.appendChild(branchMFDiv);
        mForm_content.appendChild(customMFDiv);
  
        //appendButons
        $.each(mForm_data,function(index, value){
            // console.log('My array has at position ' + index + ', this value: ' + value);
            var mForm_button = document.createElement("input");
            mForm_button.type = "button";
            mForm_button.className = "mformButton";
            mForm_button.value = value;
            if(index=="address1" || index=="address2" || index=="address3" || index=="address4") {
              addressMFDivRight.appendChild(mForm_button);
            }
            else if(index=="branch1" || index=="branch2") {
              branchMFDivRight.appendChild(mForm_button);
            }
            else if(index=="text1" || index=="text2" || index=="text3") {
              textMFDivRight.appendChild(mForm_button);
            }
            else if(index=="phone_number" || index=="zip_code") {
              numberMFDivRight.appendChild(mForm_button);
            }
            else if(index=="email") {
              emailMFDivRight.appendChild(mForm_button);
            }
            else if(index=="name" || index=="name_huri") {
              nameMFDivRight.appendChild(mForm_button);
            }
            else if(index=="custom1" || index=="custom2") {
              customMFDivRight.appendChild(mForm_button);
            }
            else if(index=="company_name" || index=="department_name") {
              companyMFDivRight.appendChild(mForm_button);
            }
            else{
  
            }
        });
  
  
        //append Modal & dispaly
        mMFModal.appendChild(mForm_content);
        document.body.appendChild(mMFModal);
        mMFModal.style.display = "none";
        mMFModal.style.display = "block";
  
        // input.focus();
        // input.select();
        // console.log(mMFModal);
        // console.log(mForm_data);
  
     
      //append css
      $("body").append("<style>#mformMFDiv{max-width: 1000px!important; text-align: center !important; margin: 100px auto!important;}</style>");
      $("body").append("<style>.mformButton{margin-left: 30px!important; max-width: 400px!important;background: #d1d1d1!important;padding: 5px!important;margin: 5px; word-break: break-all!important; white-space: normal; }</style>");
      $("body").append("<style>.MFModal { display: none; position: fixed;z-index: 9999; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4); -webkit-animation-name: animatetop; -webkit-animation-duration: 0.4s; }</style>");
      $("body").append("<style>.MFModal-content {background-color: #e5faef; margin: 15% auto; padding: 20px; border: 1px solid #888; width: 80%; -webkit-animation-name: animatetop; -webkit-animation-duration: 0.4s; }</style>");
      $("body").append("<style>.MFclose { color: #aaa; float: right; font-size: 28px; font-weight: bold;}</style>");
      $("body").append("<style>.MFclose:hover, .MFclose:focus {color: black; text-decoration: none; cursor: pointer;}</style>");
      $("body").append("<style>.row-item-div{display: flex; padding-bottom: 20px;}</style>");
      $("body").append("<style>.row-item-div-left{width: 80px;line-height: 30px!important;}</style>");
      $("body").append("<style>@-webkit-keyframes animatetop { from {top:-300px; opacity:0}  to {top:0; opacity:1}}</style>");
      $("body").append("<style>@keyframes animatetop { from {top:-300px; opacity:0} to {top:0; opacity:1}}</style>");
        $(document).ready(function(){
            $(".mformButton").click(function(){
                
                chrome.runtime.sendMessage({ selection: $(this).val() });
                e.target.value = $(this).val();    
                console.log($(this).val());
                mMFModal.parentNode.removeChild(mMFModal);
            });
        });

    }
  });