const STORAGE_KEY = 'pwiii-items';

export function getItems(){
    try{
        const infoBruta = localStorage.getItems(STORAGE_KEY);
        return infoBruta ? JSON.parse(infoBruta) : [];
    } catch (erro) {
        console.error('Fail to retrieve the items', erro);
        return [];
    }
}

export function saveItems(items){
    try{
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (erro) {
        console.error('Fail on saving the items', erro)
    }
}

export function addItem(item){
    const items = getItems();
    items.unshift(item);
    saveItems(items);
}

export function removeItem(index){
    const item = getItems().filter(i => i !== index)
    saveItems(item);
}