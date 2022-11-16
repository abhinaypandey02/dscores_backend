import {fetchRoute} from "../api_sports/get.js";
import {
    setEvents,
    setFixtures,
    setLeagues,
    setLineups,
    setPlayers,
    setPredictions, setSquad,
    setStandings, setStatistics, setTeam, setTopAssists, setTopScorers,
    setTrophies
} from "../firestore/set.js";

import express from 'express';
import {
    getEvents,
    getFixtures,
    getLeagues,
    getLineups,
    getMatch,
    getPlayer,
    getPredictions, getSquad, getStandings, getStatistics, getTeam, getTopAssists, getTopScorers,
    getTrophies
} from "../firestore/get.js";
import {handleDataFetch} from "../helpers/handlers.js";

const router = express.Router();

router.get('/fixtures', async (req, res) => {
    const status=req.query.status
    const data = await handleDataFetch(getFixtures, fetchRoute('https://v3.football.api-sports.io/fixtures'+(status?`?status=${status}&next=15`:'?live=all')), setFixtures);
    res.json({data})
})
router.get('/lineups', async (req, res) => {
    const matchID=req.query.match;
    if(!matchID){
        res.status(400)
        res.send("Please provide match id");
        return
    }
    const data = await handleDataFetch(getLineups(matchID), fetchRoute(`https://v3.football.api-sports.io/fixtures/lineups?fixture=${matchID}`), setLineups(matchID));
    res.json({data})
})
router.get('/leagues', async (req, res) => {
    const data = await handleDataFetch(getLeagues, fetchRoute('https://v3.football.api-sports.io/leagues'), setLeagues);
    res.json({data})
})
router.get('/match', async (req, res) => {
    const matchID=req.query.match;
    if(!matchID){
        res.status(400)
        res.send("Please provide match id");
        return
    }
    const data = await handleDataFetch(getMatch(matchID), fetchRoute(`https://v3.football.api-sports.io/fixtures?id=${matchID}`), setFixtures);
    res.json({data})
})
router.get('/player', async (req, res) => {
    const id=req.query.player;
    const season=req.query.season;
    if(!id||!season){
        res.status(400)
        res.send("Please provide player id and season id");
        return
    }
    const data = await handleDataFetch(getPlayer(id,season), fetchRoute(`https://v3.football.api-sports.io/players?id=${id}&season=${season}`), setPlayers(season));
    res.json({data})
})

router.get('/trophies', async (req, res) => {
    const id=req.query.player;
    if(!id){
        res.status(400)
        res.send("Please provide player id");
        return
    }
    const data = await handleDataFetch(getTrophies(id), fetchRoute(`https://v3.football.api-sports.io/trophies?player=${id}`), setTrophies(id));
    res.json({data})
})

router.get('/team', async (req, res) => {
    const id=req.query.team;
    if(!id){
        res.status(400)
        res.send("Please provide team id");
        return
    }
    const data = await handleDataFetch(getTeam(id), fetchRoute(`https://v3.football.api-sports.io/teams?id=${id}`), setTeam(id));
    res.json({data})
})
router.get('/squad', async (req, res) => {
    const id=req.query.team;
    if(!id){
        res.status(400)
        res.send("Please provide team id");
        return
    }
    const data = await handleDataFetch(getSquad(id), fetchRoute(`https://v3.football.api-sports.io/players/squads?team=${id}`), setSquad(id));
    res.json({data})
})
router.get('/events', async (req, res) => {
    const id=req.query.match;
    if(!id){
        res.status(400)
        res.send("Please provide match id");
        return
    }
    const data = await handleDataFetch(getEvents(id), fetchRoute(`https://v3.football.api-sports.io/fixtures/events?fixture=${id}`), setEvents(id));
    res.json({data})
})
router.get('/standings', async (req, res) => {
    const id=req.query.league;
    const season=req.query.season;
    if(!id||!season){
        res.status(400)
        res.send("Please provide league id and season id");
        return
    }
    const data = await handleDataFetch(getStandings(id,season), fetchRoute(`https://v3.football.api-sports.io/standings?league=${id}&season=${season}`), setStandings(season, id));
    res.json({data})
})
router.get('/statistics', async (req, res) => {
    const id=req.query.match;
    const team=req.query.team;
    if(!id||!team){
        res.status(400)
        res.send("Please provide match id");
        return
    }
    const data = await handleDataFetch(getStatistics(id,team), fetchRoute(`https://v3.football.api-sports.io/fixtures/statistics?fixture=${id}&team=${team}`), setStatistics(team, id));
    res.json({data})
})
router.get('/top-scorers', async (req, res) => {
    const id=req.query.league;
    const season=req.query.season;
    if(!id||!season){
        res.status(400)
        res.send("Please provide league id and season id");
        return
    }
    const data = await handleDataFetch(getTopScorers(id,season), fetchRoute(`https://v3.football.api-sports.io/players/topscorers?season=${season}&league=${id}`), setTopScorers(season, id));
    res.json({data})
})
router.get('/top-assists', async (req, res) => {
    const id=req.query.league;
    const season=req.query.season;
    if(!id||!season){
        res.status(400)
        res.send("Please provide league id and season id");
        return
    }
    const data = await handleDataFetch(getTopAssists(id,season), fetchRoute(`https://v3.football.api-sports.io/players/topassists?season=${season}&league=${id}`), setTopAssists(season, id));
    res.json({data})
})
router.get('/predictions', async (req, res) => {
    const id=req.query.match;
    if(!id){
        res.status(400)
        res.send("Please provide match id");
        return
    }
    const data = await handleDataFetch(getPredictions(id), fetchRoute(`https://v3.football.api-sports.io/predictions?fixture=${id}`), setPredictions(id));
    res.json({data})
})
export default router
