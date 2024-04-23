//const host_url = 'http://localhost:9666/';
const host_url = 'https://form-assist.jp/';
var mForm_CURRENT_DOMAIN = '';
var mForm_API_KEY = localStorage.getItem("mform_key");

chrome.storage.local.get("MFORM_MODAL_FLAG", function(data){
    
    if (typeof data.MFORM_MODAL_FLAG !== 'undefined') {
        document.getElementById('sub_input').checked = data.MFORM_MODAL_FLAG;
   }else{
       mForm_display = document.getElementById('sub_input').checked
       chrome.storage.local.set({
           "MFORM_MODAL_FLAG": mForm_display
       });
   }
});

var frame_flag = false;
var check_input = false;
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var currentUrl = tabs[0].url;
    mForm_CURRENT_DOMAIN = new URL(currentUrl).hostname;
    console.log(mForm_CURRENT_DOMAIN);
});
if(mForm_API_KEY == null) mForm_API_KEY='';
$(document).ready(function(){
    $("#api_key").val(mForm_API_KEY);
    $(document).on('click', '#key_save', function(){
        if($("#api_key").val() == '') return;     
        localStorage.setItem("mform_key", $("#api_key").val());
    });
    $(document).on('click', '#key_del', function(){
        localStorage.removeItem("mform_key");
        $("#api_key").val('');
    });
    $(document).on('click', '#notice', function(e){
        chrome.tabs.create({url: host_url+'api/mform/notice', active: false});
        return false;
    });
    $(document).on('click', '#setting', function(e){
        chrome.tabs.create({url: host_url+'api/mform/setting/'+mForm_API_KEY, active: false});
        return false;
    });
});

