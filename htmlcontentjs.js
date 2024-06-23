var list=document.getElementById('list');
var input=document.getElementById('input');
var addbtn=document.getElementById('addbtn');
var updatebtn=document.getElementById('updatebtn');
var removebtn=document.getElementById('removebtn');

// console.log(input);
var itemtext='';
function addItem(text){
    if(text==""){
        alert('please Enter Text');
        return;
    }
    var li=document.createElement('li')
    var text=document.createTextNode(text);
    li.appendChild(text);
    li.class="item";
    li.id="item"+list.childElementCount+1;
    list.appendChild(li);
    itemtext='';
}
function updateItem(text){
    if(text==""){
        alert('please Enter Text');
        return;
    }
    var first=list.firstElementChild;
    var li=document.createElement('li')
    var textNode=document.createTextNode(text);
    li.appendChild(textNode);
    // li.class="item";
    // li.id="item"+list.childElementCount+1;
    list.replaceChild(li,first);
    itemtext='';
}
removebtn.onclick=function(){
    if(list.childElementCount==0){
        alert('No Elements are there to remove');
        return;
    }
    var first=list.firstElementChild;
    list.removeChild(first);
}
addbtn.addEventListener('click',function(){
    // console.log(list);
    itemtext=input.value;
    addItem(itemtext);
})
updatebtn.addEventListener('click',function(){
    itemtext=input.value;
    updateItem(itemtext);
})


input.addEventListener('keyup',function(e){
    if(e.keyCode==13){
        itemtext=input.value;
        addItem(itemtext);
    }
})
function gethttprequest(){
    var http=new XMLHttpRequest;
    http.onreadystatechange=function(){
            if(this.readyState==4){
                if(this.status==200){
                    var response=JSON.parse(this.responseText);
                    for(var i=0;i<response.length;i++){
                        createElement(response[i].id,response[i].title);
                    }
                }
            }
    }
    http.open('GET','https://jsonplaceholder.typicode.com/posts',true);
    http.send();
}
// gethttprequest();
function createElement(id,title){
    var item=document.createElement('li');
    var texts=document.createTextNode(title);
    item.appendChild(texts);
    item.id=id;
    item.class="item";
    list.appendChild(item);
}

function sendhttprequest(){
    var https=document.XMLHttpRequest;
    https.open('POST','https://jsonplaceholder.typicode.com/posts',true);
    https.onreadystatechange=function(){
            if(this.readyState==4){
                if(this.status==201){
                    console.log("success");
                }
            }
    }
    var obj=JSON.stringify({
        "userId": 1,
    "title": "input.value",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    });
    https.send(obj);
}
sendhttprequest();