//uygulama kapatıldığında otomatik save alıyor
function autoSave(){
    const data = JSON.parse(fs.readFileSync("savePoints.json", "utf8"))
    //o andaki verileri çekiyor
    const listData = JSON.parse(fs.readFileSync("list.json", "utf8"))
    const savingData = JSON.parse(fs.readFileSync("saving.json", "utf8"))
    const expenseData = JSON.parse(fs.readFileSync("harcamalar.json", "utf8"))
    //save'in adını oluşturuyor
    const saveName = "autosave" + data.autosaveIndex
    //sonraki autosave için indeksi arttırıyor
    data.autosaveIndex += 1
    //eklenecek save datasını oluşturuyor
    const newData = {
        "name": saveName,
        "wishlist": listData, 
        "saving": savingData, 
        "harcamalar": expenseData
    }
    //save'i ekliyor
    data.autosaves.push(newData)
    fs.writeFileSync('savePoints.json', JSON.stringify(data, null, 2));
}