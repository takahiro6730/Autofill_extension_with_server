document.getElementById('autoInput').addEventListener('click',function(){
    $.ajax({
        type: "GET",
        url: host_url+'api/mform/getContent/'+mForm_API_KEY+'I?domain='+mForm_CURRENT_DOMAIN,
        success: async function(data) {
            if(typeof(data)!="object") alert(data);
            console.log(data.script_data);
            // Put the object into storage
            chrome.storage.local.set({"MFORM_MODAL_DATA": data.script_data});

            // Retrieve the object from storage
            chrome.storage.local.get('MFORM_MODAL_DATA',function(data){
                console.log(data.MFORM_MODAL_DATA);
            });
            


            frame_flag = true;
            //var res = jQuery.parseJSON(data);
            //console.log(res);
            //alert("success");
            if(data.company_data == ""){
                script_data = data.script_data;  
                chrome.tabs.executeScript(null,{code:"document.querySelectorAll('input[name*=\"content\"]')[0].innerHTML =\""+ script_data.text1.replace(/\n|<br\s*\/?>|。/gi, "") +"\";"});
                chrome.tabs.executeScript(null,{code:"document.querySelectorAll('input[name*=\"email\"]')[0].value = '"+ script_data.email +"';"});
                chrome.tabs.executeScript(null,{code:"document.querySelectorAll('input[name*=\"name\"]')[0].value = '"+ script_data.name +"';"});
                chrome.tabs.executeScript(null,{code:"document.querySelectorAll('input[name*=\"kana\"]')[0].value = '"+ script_data.name_huri +"';"});
                chrome.tabs.executeScript(null,{code:"document.querySelectorAll('input[name*=\"company\"]')[0].value = "+ script_data.company_name +"';"});
                chrome.tabs.executeScript(null,{code:"document.querySelectorAll('input[name*=\"phone\"]')[0].value = '"+ script_data.phone_number +"';"});
                chrome.tabs.executeScript(null,{code:"document.querySelectorAll('input[name*=\"tel\"]')[0].value = '"+ script_data.phone_number +"';"});  
            }
            else{
                script_data = data.script_data;
                company_data = data.company_data;
                console.log(company_data.email);
                if(!(company_data.text==null || company_data.text == "")) chrome.tabs.executeScript(null,{code:"document.getElementsByName(\""+ company_data.text +"\")[0].innerHTML =\""+ script_data.text1.replace(/\n|<br\s*\/?>|。/gi, "") +"\";"});
    
                if(!(company_data.email==null || company_data.email == "")) {console.log(company_data.email); chrome.tabs.executeScript(null,{code:"document.getElementsByName('"+ company_data.email +"')[0].value = '"+ script_data.email +"';"});}
                if(!(company_data.name==null || company_data.name == "")) chrome.tabs.executeScript(null,{code:"document.getElementsByName(\""+ company_data.name +"\")[0].value = '"+ script_data.name +"';"});
                if(!(company_data.name_huri==null || company_data.name_huri == "")) chrome.tabs.executeScript(null,{code:"document.getElementsByName(\""+ company_data.name_huri +"\")[0].value = '"+ script_data.name_huri +"';"});
                if(!(company_data.company_name==null || company_data.company_name == "")) chrome.tabs.executeScript(null,{code:"document.getElementsByName(\""+ company_data.company_name +"\")[0].value = "+ script_data.company_name +"';"});
                if(!(company_data.phone_number==null || company_data.phone_number == "")) chrome.tabs.executeScript(null,{code:"document.getElementsByName(\""+ company_data.phone_number +"\")[0].value = '"+ script_data.phone_number +"';"});
                if(!(company_data.branch==null || company_data.branch == "")) chrome.tabs.executeScript(null,{code:"document.getElementsByName(\""+ company_data.branch +"\")[0].value = '"+ script_data.branch +"';"});
                if(!(company_data.custom==null || company_data.custom == "")) chrome.tabs.executeScript(null,{code:"document.getElementsByName(\""+ company_data.custom +"\")[0].value = '"+ script_data.custom +"';"});
                if(!(company_data.department_name==null || company_data.department_name == "")) chrome.tabs.executeScript(null,{code:"document.getElementsByName(\""+ company_data.department_name +"\")[0].value = '"+ script_data.department_name +"';"});
                if(!(company_data.zip_code==null || company_data.zip_code == "")) chrome.tabs.executeScript(null,{code:"document.getElementsByName(\""+ company_data.zip_code +"\")[0].value = '"+ script_data.zip_code +"';"});
                if(!(company_data.address==null || company_data.address == "")) chrome.tabs.executeScript(null,{code:"document.getElementsByName(\""+ company_data.address +"\")[0].value = '"+ script_data.address1 +script_data.address2 +script_data.address3 +script_data.address4 +"';"});
                //chrome.tabs.executeScript(null,{code:"document.getElementsByName(\""+ company_data.branch +"\")[0].value = '"+ script_data.branch +"';"});
            }
        },
        error: function(e) {
            alert("error");
        }
    });
});
document.getElementById('sub_input').addEventListener('click',function(e){
    check_input = document.getElementById('sub_input').checked;
    console.log("--btn---", check_input);
    chrome.storage.local.set({"MFORM_MODAL_FLAG": check_input});
    chrome.storage.local.get("MFORM_MODAL_FLAG", function(data){
        console.log(data.MFORM_MODAL_FLAG)
    });  
});