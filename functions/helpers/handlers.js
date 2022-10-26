export async function handleDataFetch(databaseFetch, apiFetch, databaseSet){
    const db_data = await databaseFetch();
    if(db_data) return db_data;
    const api_data=await apiFetch();
    if(api_data) {
        await databaseSet(api_data)
        return await databaseFetch();
    } else return null;
}
