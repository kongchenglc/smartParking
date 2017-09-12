function item_repair(theItem) {
    var item_id = theItem.parentNode.id;
    var modal_repair = document.getElementById("modal-repair");
    var confirm_btn = modal_repair.getElementsByClassName("btn-primary")[0];
    var data = JSON.stringify({"id": item_id, "repair": true});
    console.log(data);
    confirm_btn.onclick = function() {
        console.log("ajax");
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    location.reload(true);
                } else {
                    alert("操作失败，请检查网络！");
                }
            }
        }
        xhr.open("post","地址");
        xhr.send(data);
    }
}

function item_change(theItem) {
    var item_id = theItem.parentNode.parentNode.id;
    var modal_change = document.getElementById("modal-change");
    var confirm_btn = modal_change.getElementsByClassName("btn-primary")[0];
    confirm_btn.onclick = function() {
        var changeText = modal_change.getElementsByClassName("col-md-8")[0].value;
        var data = JSON.stringify({"id": item_id, "change": changeText});
        console.log(data);
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    location.reload(true);
                } else {
                    alert("操作失败，请检查网络！");
                }
            }
        }
        xhr.open("post","地址");
        xhr.send(data);
    }
}

function item_remove(theItem) {
    var item_id = theItem.parentNode.parentNode.id;
    var modal_remove = document.getElementById("modal-remove");
    var confirm_btn = modal_remove.getElementsByClassName("btn-primary")[0];
    var data = JSON.stringify({"id": item_id, "remove": true});
    console.log(data);
    confirm_btn.onclick = function() {
        console.log("ajax");
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    location.reload(true);
                } else {
                    alert("操作失败，请检查网络！");
                }
            }
        }
        xhr.open("post","地址");
        xhr.send(data);
    }
}