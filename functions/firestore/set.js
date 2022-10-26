import {getFirestore} from "firebase-admin/firestore";


export async function setFixtures(fixtures) {
  const db = getFirestore();
  for(const fixture of fixtures) {
    await db.collection('fixtures').doc(fixture.fixture.id.toString()).set(fixture);
  }
}

export function setLineups(id) {
  const db = getFirestore();
  return async (lineups) => {
    await db.collection('lineups').doc(id.toString()).set({lineups});
  }
}

export async function setLeagues(leagues) {
  const db = getFirestore();
  for(const league of leagues) {

  await db.collection('leagues').doc(league.league.id.toString()).set(league);
  }

}

export function setPlayers(season) {
  const db = getFirestore();
  return async (data_array) => {
    for(const item of data_array) {
      await db.collection('players').doc(item.player.id.toString()).collection('seasons').doc(season).set(item);
    }
  }
}
export function setTopScorers(season, id) {
  const db = getFirestore();
  return async (data_array) => {
    await db.collection('topScorers').doc(id.toString()).collection('seasons').doc(season).set({
      topScorers:data_array
    });
  }
}
export function setTopAssists(season, id) {
  const db = getFirestore();
  return async (data_array) => {
    await db.collection('topAssists').doc(id.toString()).collection('seasons').doc(season).set({
      topAssists:data_array
    });
  }
}
export function setStandings(season, id) {
  const db = getFirestore();
  return async (data_array) => {
    await db.collection('standings').doc(id.toString()).collection('seasons').doc(season).set({
      standings:data_array.league.standings
    });
  }
}
export function setStatistics(teamID, id) {
  const db = getFirestore();
  return async (data_array) => {
    for( const team of data_array){
      await db.collection('statistics').doc(id.toString()).collection('teams').doc(teamID).set(team);
    }
  }
}
export function setTrophies(id) {
  const db = getFirestore();
  return async (trophies) => {
    await db.collection('trophies').doc(id.toString()).set({trophies});
  }
}
export function setTeam(id) {
  const db = getFirestore();
  return async (teams) => {
    for(const team of teams) {

      await db.collection('team').doc(id.toString()).set(team)
    }
  }
}
export function setSquad(id) {
  const db = getFirestore();
  return async (teams) => {
    for(const team of teams){
     await  db.collection('squad').doc(id.toString()).set(team)
    }
  }
}
export function setEvents(id) {
  const db = getFirestore();
  return async (events) => {
    await  db.collection('events').doc(id.toString()).set({events})

  }
}

export function setPredictions(id) {
  const db = getFirestore();
  return async (data_array) => {
    for(const item of data_array) {

      await db.collection('predictions').doc(id).set(item);
    }
  }
}
