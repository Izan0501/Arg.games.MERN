export const getProductsFetch = async () => {
    try {
        const url = 'http://localhost:3977/api/v1/productsPs4';
        const res = await fetch(url);
        const data = await res.json();

        if (res.status !== 200) throw res;
        return data;
    } catch (error) {
        throw error
    }
}

