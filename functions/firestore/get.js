import { getFirestore } from "firebase-admin/firestore";

export async function getFixtures(){
    const docRef=getFirestore().collection('fixtures');
    const snapshot = await docRef.get();
    if(snapshot.empty) return null;
    const fixtures=[];
    snapshot.forEach(doc=>{
      fixtures.push(doc.data());
    })
    return fixtures
}
export function getLineups(id){
    return async ()=>{
        const docRef=getFirestore().collection('lineups').doc(id);
        const snapshot = await docRef.get();
        if(!snapshot||!snapshot.exists) return null;
        return snapshot.data().lineups
    }

}
export async function getLeagues(){
    // const docRef=;
    const snapshot = await getFirestore().collection('leagues').get();
    if(snapshot.empty) return null;
    const leagues=[];
    snapshot.forEach(doc=>{
        leagues.push(doc.data());
    })
    return leagues
}
export function getMatch(id){
    return async ()=>{
        const docRef=getFirestore().collection('fixtures').doc(id);
        const snapshot = await docRef.get();
        if(!snapshot||!snapshot.exists) return null;
        return snapshot.data()
    }
}
export function getTrophies(id){
    return async ()=>{
        const docRef=getFirestore().collection('trophies').doc(id);
        const snapshot = await docRef.get();
        if(!snapshot||!snapshot.exists) return null;
        return snapshot.data().trophies
    }

}
export function getTeam(id){
    return async ()=>{
        const docRef=getFirestore().collection('team').doc(id);
        const snapshot = await docRef.get();
        if(!snapshot||!snapshot.exists) return null;
        return snapshot.data()
    }

}
export function getSquad(id){
    return async ()=>{
        const docRef=getFirestore().collection('squad').doc(id);
        const snapshot = await docRef.get();
        if(!snapshot||!snapshot.exists) return null;
        return snapshot.data()
    }
}
export function getEvents(id){
    return async ()=>{
        const docRef=getFirestore().collection('events').doc(id);
        const snapshot = await docRef.get();
        if(!snapshot||!snapshot.exists) return null;
        return snapshot.data().events
    }
}
export function getTopScorers(id,season){
    return async ()=>{
        const docRef=getFirestore().collection('topScorers').doc(id).collection('seasons').doc(season);
        const snapshot = await docRef.get();
        if(!snapshot||!snapshot.exists) return null;
        return snapshot.data().topScorers
    }

}
export function getTopAssists(id,season){
    return async ()=>{
        const docRef=getFirestore().collection('topAssists').doc(id).collection('seasons').doc(season);
        const snapshot = await docRef.get();
        if(!snapshot||!snapshot.exists) return null;
        return snapshot.data().topAssists
    }

}
export function getStandings(id,season){
    return async ()=>{
        const docRef=getFirestore().collection('standings').doc(id).collection('seasons').doc(season);
        const snapshot = await docRef.get();
        if(!snapshot||!snapshot.exists) return null;
        return snapshot.data().standings
    }

}
export function getStatistics(id,team){
    return async ()=>{
        const docRef=getFirestore().collection('statistics').doc(id).collection('teams').doc(team);
        const snapshot = await docRef.get();
        if(!snapshot||!snapshot.exists) return null;
        return snapshot.data()
    }

}
export function getPlayer(id,season){
    return async ()=>{
        const docRef=getFirestore().collection('players').doc(id).collection('seasons').doc(season);
        const snapshot = await docRef.get();
        if(!snapshot||!snapshot.exists) return null;
        return snapshot.data()
    }

}
export function getPredictions(id){
    return async ()=>{
        const docRef=getFirestore().collection('predictions').doc(id);
        const snapshot = await docRef.get();
        if(!snapshot||!snapshot.exists) return null;
        return snapshot.data()
    }

}
