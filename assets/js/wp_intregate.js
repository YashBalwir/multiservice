// var product_arr=[];
// sessionStorage.setItem("products",product_arr);

function send_data() {
    var form = new FormData(document.forms['ams'] )
    var msg = "Hi, I am "+form.get('name')+". I would like to contact you regarding my requirements about "+form.get('subject')+". Please mail me details at "+form.get('sender')+"."
    window.open(`https://wa.me/919011599027?text=${msg}`, '_blank');
    location.reload()
    }

    
function add_product(param1) {
        if (search(param1)==0){
       var i = sessionStorage.length
        sessionStorage.setItem("products"+i,param1);
        console.log(sessionStorage)
        alert('hi')
    }else{
        alert('This Product is already Added in Quotation List.')
    }

}
 
function search(param2) {
    var flag=0;
    for (let index = 0; index < sessionStorage.length; index++) {
        if(param2==sessionStorage.getItem('products'+index)){
            flag=flag+1
        }
    }
    return flag
    
}
    