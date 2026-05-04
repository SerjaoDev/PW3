const STORAGE_KEY = 'pwiii-items';

export function saveItems(items) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (erro) {
        console.error('Fail on saving the items', erro)
    }
}

export function loadItems() {
    try {
        const infoBruta = localStorage.getItem(STORAGE_KEY);
        return infoBruta ? JSON.parse(infoBruta) : [];
    } catch (erro) {
        console.erro('Fail to retrieve the items', erro);
        return [];
    }
}

export function addItem(single_item) {
    const items = loadItems();
    const identifica = Date.now().toString();
    const newItem = { id: identifica, text: single_item};
    const updateItems = [...items, newItem];
    saveItems(updateItems);
}

export function removeItem(index) {
    const item = loadItems().filter(
        i => i !== index
    )
    saveItems(item);
}