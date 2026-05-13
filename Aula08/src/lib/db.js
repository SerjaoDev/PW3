const STORAGE_KEY = 'pwiii-items';

export function saveItems(items) {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(items)
        );
    } catch (error) {
        console.error("Erro ao salvar os itens no localStorage", error);
    }
}

export function loadItems() {
    try {
        const infoBruta = localStorage.getItem(STORAGE_KEY);
        return infoBruta ? JSON.parse(infoBruta) : [];
    } catch (error) {
        console.error("Erro ao carregar os itens do localStorage", error);
        return [];
    }
}

export function addItem(single_item) {
    const items = loadItems();
    const identifica = Date.now().toString();
    const newItem = { id: identifica, text: single_item };
    const updatedItems = [...items, newItem];

    saveItems(updatedItems);
}

export function updateItem(id, update){
    const items = loadItems().map(
        i => {
            if(i.id === id){
                return {...i, ...update}
            }
            return i;
        }
    );

    saveItems(items);
    return items;
}