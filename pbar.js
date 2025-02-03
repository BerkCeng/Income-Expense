//sayfadaki progress bar elemanını çekiyor
const pbar = document.getElementById("pbar")

//eklendiği sayfadaki progress barı hazırlıyor
setPBar()
function setPBar(){
    var saved = 0;
    const expenses = JSON.parse(fs.readFileSync("harcamalar.json"));
    const savings = JSON.parse(fs.readFileSync("saving.json")); 
    const wishes = JSON.parse(fs.readFileSync("list.json"));
    var totalWishPrice = 0;
    //tüm isteklerin toplam ücretini hesaplıyor
    for(var element of wishes.wishlist){
        totalWishPrice += element.price;
    }
    //gelirlerden giderleri çıkarıp eldeki parayı hesaplıyor
    saved = savings.TRY - (expenses.Bills + expenses.Food + expenses.Shopping + expenses.Electronics + expenses.Transport + expenses.Other);
    //yüzdeliği hesaplıyor
    var percent = totalWishPrice > 0 ? saved / totalWishPrice * 100 : 0;
    //barın içine sayıları ve yüzdeliği yadırıyor
    pbar.innerHTML = saved.toFixed(2) + "/" + totalWishPrice.toFixed(2) + "(%" + percent.toFixed(2) + ")"

    //giderler geliri geçer ise barı kırmızı yapıyor
    if(saved < 0){
        pbar.style.setProperty("width", "100%")
        pbar.setAttribute("aria-valuenow", 100)
        pbar.setAttribute("aria-valuemax", 100)
        pbar.style.backgroundColor = "#990000"
    }
    //yüzdelik değere göre (arttıkça) barın rengini kırmızıdan yeşile doğru ayarlıyor
    else{
        var green = percent > 50 ? 180 : 180 * percent / 50;
        var red = percent < 50 ? 180 : 180 * (100 - percent) / 50;
        pbar.style.setProperty("width", percent + "%")
        pbar.setAttribute("aria-valuenow", saved)
        pbar.setAttribute("aria-valuemax", totalWishPrice)
        //birikim toplam istek fiyatından fazlaysa barı sabit yeşil yapıyor
        if(saved >= totalWishPrice) pbar.style.backgroundColor = "rgb(0,180,0)"
        else pbar.style.backgroundColor = "rgb(" + red + "," + green + ", 0)"
    }
}