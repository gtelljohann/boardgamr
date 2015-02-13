/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Game = require('../api/game/game.model');
var Mechanic = require('../api/mechanic/mechanic.model');
var Theme = require('../api/theme/theme.model');

var wordGame = new Theme({
  name: 'Word Game'
});
var fantasy = new Theme({
  name: 'Fantasy Game'
});
var warSimulation = new Theme({
  name: 'War Simulation Game'
});
var partyGame = new Theme({
  name: 'Party Game'
});
var euroGame = new Theme({
  name: 'German Style Board Game'
});
var horror = new Theme({
  name: 'Horror Game'
});
var zombies = new Theme({
  name: 'Zombie Game'
});
var casual = new Theme({
  name: 'Casual Game'
});
var cardGame = new Theme({
  name: 'Card Game'
});

Theme.find({}).remove(function() {
  wordGame.save();
  fantasy.save();
  warSimulation.save();
  partyGame.save();
  euroGame.save();
  horror.save();
  zombies.save();
  casual.save();
  cardGame.save();
});


var cardDrafting = new Mechanic({
  name: 'Card Drafting'
});
var deckBuilding = new Mechanic({
  name: 'Deck/Pool Building'
});
var handManagement = new Mechanic({
  name: 'Hand Management'
});
var tilePlacement = new Mechanic({
  name: 'Tile Placement'
});
var setCollection = new Mechanic({
  name: 'Set Collection'
});
var trading = new Mechanic({
  name: 'Trading'
});
var networkBuilding = new Mechanic({
  name: 'Route/Network Building'
});
var variablePlayerPowers = new Mechanic({
  name: 'Variable Player Powers'
});
var diceRolling = new Mechanic({
  name: 'Dice Rolling'
});
var modularBoard = new Mechanic({
  name: 'Modular Board'
});
var simultaneousAction = new Mechanic({
  name: 'Simultaneous Action Selection'
});
var rollAndMove = new Mechanic({
  name: 'Roll/Spin and Move'
});
var auctionBidding = new Mechanic({
  name: 'Auction/Bidding'
});
var playerElimination = new Mechanic({
  name: 'Player Elimination'
});
var stockHolding = new Mechanic({
  name: 'Stock Holding'
});
var areaEnclosure = new Mechanic({
  name: 'Area Enclosure'
});
var workerPlacement = new Mechanic({
  name: 'Worker Placement'
});
var partnerships = new Mechanic({
  name: 'Partnerships'
});
var cooperativePlay = new Mechanic({
  name: 'Co-operative Play'
});
var rolePlaying = new Mechanic({
  name: 'Role Playing'
});
var areaControl = new Mechanic({
  name: 'Area Control / Area Influence'
});
var gridMovement = new Mechanic({
  name: 'Grid Movement'
});
var memory = new Mechanic({
  name: 'Memory'
});
var paperAndPencil = new Mechanic({
  name: 'Paper-and-Pencil'
});
var voting = new Mechanic({
  name: 'Voting'
});
var actionPoints = new Mechanic({
  name: 'Action Point Allowance System'
});
var pointToPointMovement = new Mechanic({
  name: 'Point to Point Movement'
});
var variablePhaseOrder = new Mechanic({
  name: 'Variable Phase Order'
});
var areaMovement = new Mechanic({
  name: 'Area Movement'
});
var betting = new Mechanic({
  name: 'Betting/Wagering'
});
var speedBased = new Mechanic({
  name: 'Speed Based'
});
var bluffing = new Mechanic({
  name: 'Bluffing'
});
var pressYourLuck = new Mechanic({
  name: 'Press Your Luck'
});


Mechanic.find({}).remove(function() {
  cardDrafting.save();
  deckBuilding.save();
  handManagement.save();
  tilePlacement.save();
  setCollection.save();
  trading.save();
  networkBuilding.save();
  variablePlayerPowers.save();
  diceRolling.save();
  modularBoard.save();
  simultaneousAction.save();
  rollAndMove.save();
  auctionBidding.save();
  playerElimination.save();
  stockHolding.save();
  areaEnclosure.save();
  workerPlacement.save();
  partnerships.save();
  cooperativePlay.save();
  rolePlaying.save();
  areaControl.save();
  gridMovement.save();
  memory.save();
  paperAndPencil.save();
  voting.save();
  actionPoints.save();
  pointToPointMovement.save();
  variablePhaseOrder.save();
  areaMovement.save();
  betting.save();
  speedBased.save();
  bluffing.save();
  pressYourLuck.save();
})

Game.find({}).remove(function() {
  Game.create({
    name: 'Dominion',
    imageURL: 'http://cf.geekdo-images.com/images/pic394356.jpg',
    bggId: '36218',
    mechanics: [cardDrafting._id, deckBuilding._id, handManagement._id],
    themes: [euroGame._id, cardGame._id]
  }, {
    name: 'Settlers of Catan',
    imageURL: 'http://cf.geekdo-images.com/images/pic268839.jpg',
    bggId: '13',
    mechanics: [handManagement._id, networkBuilding._id, trading._id, diceRolling._id, modularBoard._id],
    themes: [euroGame._id]
  }, {
    name: '7 Wonders',
    imageURL: 'http://cf.geekdo-images.com/images/pic860217.jpg',
    bggId: '68448',
    mechanics: [cardDrafting._id, setCollection._id, variablePlayerPowers._id, simultaneousAction._id],
    themes: [euroGame._id, cardGame._id]
  }, {
    name: 'Bananagrams',
    imageURL: 'http://cf.geekdo-images.com/images/pic503901.jpg',
    bggId: '27225',
    mechanics: [tilePlacement._id, speedBased._id],
    themes: [wordGame._id, partyGame._id, casual._id]
  }, {
    name: 'Apples to Apples',
    imageURL: 'http://cf.geekdo-images.com/images/pic213515.jpg',
    bggId: '74',
    mechanics: [handManagement._id, simultaneousAction._id],
    themes: [partyGame._id, casual._id, cardGame._id]
  }, {
    name: 'Monopoly',
    imageURL: 'http://cf.geekdo-images.com/images/pic265476.jpg',
    bggId: '1406',
    mechanics: [setCollection._id, trading._id, auctionBidding._id, playerElimination._id, rollAndMove._id, stockHolding._id]
  }, {
    name: 'Scrabble',
    imageURL: 'http://cf.geekdo-images.com/images/pic404651.jpg',
    bggId: '320',
    mechanics: [handManagement._id, tilePlacement._id],
    themes: [wordGame._id]
  }, {
    name: 'Ticket to Ride',
    imageURL: 'http://cf.geekdo-images.com/images/pic38668.jpg',
    bggId: '9209',
    mechanics: [handManagement._id, networkBuilding._id, setCollection._id],
    themes: [euroGame._id]
  }, {
    name: 'Blokus',
    imageURL: 'http://cf.geekdo-images.com/images/pic153979.jpg',
    bggId: '2453',
    mechanics: [tilePlacement._id, areaEnclosure._id]
  }, {
    name: 'Agricola',
    imageURL: 'http://cf.geekdo-images.com/images/pic259085.jpg',
    bggId: '31260',
    mechanics: [handManagement._id, areaEnclosure._id, workerPlacement._id],
    themes: [euroGame._id]
  }, {
    name: 'Bang!',
    imageURL: 'http://cf.geekdo-images.com/images/pic1170986.jpg',
    bggId: '3955',
    mechanics: [handManagement._id, playerElimination._id, variablePlayerPowers._id, partnerships._id, bluffing._id],
    themes: [partyGame._id, cardGame._id]
  }, {
    name: 'Betrayal at House on the Hill',
    imageURL: 'http://cf.geekdo-images.com/images/pic828598.jpg',
    bggId: '10547',
    mechanics: [cooperativePlay._id, diceRolling._id, modularBoard._id, partnerships._id, playerElimination._id, rolePlaying._id, variablePlayerPowers._id],
    themes: [horror._id]
  }, {
    name: 'Carcassonne',
    imageURL: 'http://cf.geekdo-images.com/images/pic166867.jpg',
    bggId: '822',
    mechanics: [areaControl._id, tilePlacement._id, modularBoard._id],
    themes: [euroGame._id]
  }, {
    name: 'Clue',
    imageURL: 'http://cf.geekdo-images.com/images/pic884234.jpg',
    bggId: '1294',
    mechanics: [gridMovement._id, handManagement._id, memory._id, paperAndPencil._id, rollAndMove._id]
  }, {
    name: 'Fluxx',
    imageURL: 'http://cf.geekdo-images.com/images/pic414362.jpg',
    bggId: '258',
    mechanics: [handManagement._id, setCollection._id],
    themes: [partyGame._id, casual._id, cardGame._id]
  }, {
    name: 'Guillotine',
    imageURL: 'http://cf.geekdo-images.com/images/pic143139.jpg',
    bggId: '116',
    mechanics: [handManagement._id],
    themes: [partyGame._id, casual._id, cardGame._id]
  }, {
    name: 'In the Year of the Dragon',
    imageURL: 'http://cf.geekdo-images.com/images/pic285822.jpg',
    bggId: '31594',
    mechanics: [handManagement._id],
    themes: [euroGame._id]
  }, {
    name: 'Munchkin',
    imageURL: 'http://cf.geekdo-images.com/images/pic1871016.jpg',
    bggId: '1927',
    mechanics: [cardDrafting._id, diceRolling._id, handManagement._id, variablePlayerPowers._id],
    themes: [partyGame._id, casual._id, cardGame._id]
  }, {
    name: 'One Night Ultimate Werewolf',
    imageURL: 'http://cf.geekdo-images.com/images/pic1809823.jpg',
    bggId: '147949',
    mechanics: [rolePlaying._id, variablePlayerPowers._id, voting._id, bluffing._id],
    themes: [partyGame._id, casual._id, cardGame._id]
  }, {
    name: 'Pandemic',
    imageURL: 'http://cf.geekdo-images.com/images/pic1534148.jpg',
    bggId: '30549',
    mechanics: [actionPoints._id, cooperativePlay._id, handManagement._id, pointToPointMovement._id, setCollection._id, variablePlayerPowers._id],
    themes: [euroGame._id]
  }, {
    name: 'Power Grid',
    imageURL: 'http://cf.geekdo-images.com/images/pic173153.jpg',
    bggId: '2651',
    mechanics: [auctionBidding._id, networkBuilding._id],
    themes: [euroGame._id]
  }, {
    name: 'The Princes of Florence',
    imageURL: 'http://cf.geekdo-images.com/images/pic1306997.jpg',
    bggId: '555',
    mechanics: [auctionBidding._id, tilePlacement._id],
    themes: [euroGame._id]
  }, {
    name: 'Puerto Rico',
    imageURL: 'http://cf.geekdo-images.com/images/pic158548.jpg',
    bggId: '3076',
    mechanics: [variablePhaseOrder._id],
    themes: [euroGame._id]
  }, {
    name: 'The Resistance',
    imageURL: 'http://cf.geekdo-images.com/images/pic1392135.png',
    bggId: '41114',
    mechanics: [partnerships._id, simultaneousAction._id, voting._id, bluffing._id],
    themes: [partyGame._id, cardGame._id]
  }, {
    name: 'Risk',
    imageURL: 'http://cf.geekdo-images.com/images/pic62237.jpg',
    bggId: '181',
    mechanics: [areaControl._id, areaMovement._id, diceRolling._id, partnerships._id, playerElimination._id, setCollection._id],
    themes: [warSimulation._id]
  }, {
    name: 'Small World',
    imageURL: 'http://cf.geekdo-images.com/images/pic428828.jpg',
    bggId: '40692',
    mechanics: [areaControl._id, areaMovement._id, diceRolling._id, variablePlayerPowers._id],
    themes: [fantasy._id, warSimulation._id, euroGame._id]
  }, {
    name: 'Wits & Wagers',
    imageURL: 'http://cf.geekdo-images.com/images/pic521431.jpg',
    bggId: '20100',
    mechanics: [betting._id, paperAndPencil._id],
    themes: [partyGame._id, casual._id]
  }, {
    name: 'Say Anything',
    imageURL: 'http://cf.geekdo-images.com/images/pic312999.jpg',
    bggId: '33604',
    mechanics: [betting._id, paperAndPencil._id],
    themes: [partyGame._id, casual._id]
  }, {
    name: 'Forbidden Desert',
    imageURL: 'http://cf.geekdo-images.com/images/pic1528722.jpg',
    bggId: '136063',
    mechanics: [actionPoints._id, cooperativePlay._id, gridMovement._id, modularBoard._id, setCollection._id, variablePlayerPowers._id],
    themes: [fantasy._id]
  }, {
    name: 'Forbidden Island',
    imageURL: 'http://cf.geekdo-images.com/images/pic646458.jpg',
    bggId: '65244',
    mechanics: [actionPoints._id, cooperativePlay._id, gridMovement._id, handManagement._id, modularBoard._id, setCollection._id, variablePlayerPowers._id],
    themes: [fantasy._id]
  }, {
    name: 'Pictionary',
    imageURL: 'http://cf.geekdo-images.com/images/pic336863.jpg',
    bggId: '2281',
    mechanics: [paperAndPencil._id, partnerships._id, rollAndMove._id, speedBased._id],
    themes: [partyGame._id, casual._id]
  }, {
    name: 'Scattergories',
    imageURL: 'http://cf.geekdo-images.com/images/pic1934632.jpg',
    bggId: '2381',
    mechanics: [diceRolling._id, paperAndPencil._id, speedBased._id],
    themes: [partyGame._id, casual._id]
  }, {
    name: 'Tsuro',
    imageURL: 'http://cf.geekdo-images.com/images/pic262539.jpg',
    bggId: '16992',
    mechanics: [handManagement._id, playerElimination._id, networkBuilding._id, tilePlacement._id],
    themes: [partyGame._id, fantasy._id, casual._id]
  }, {
    name: 'Zombie Dice',
    imageURL: 'http://cf.geekdo-images.com/images/pic617922.jpg',
    bggId: '62871',
    mechanics: [diceRolling._id, pressYourLuck._id],
    themes: [partyGame._id, horror._id, zombies._id, casual._id]
  }, {
    name: 'Elder Sign',
    imageURL: 'http://cf.geekdo-images.com/images/pic1236119.jpg',
    bggId: '100423',
    mechanics: [cooperativePlay._id, diceRolling._id, modularBoard._id, variablePlayerPowers._id],
    themes: [horror._id, fantasy._id]
  }, {
    name: 'Last Night on Earth: The Zombie Game',
    imageURL: 'http://cf.geekdo-images.com/images/pic207777.jpg',
    bggId: '29368',
    mechanics: [diceRolling._id, handManagement._id, modularBoard._id, partnerships._id, rollAndMove._id, variablePlayerPowers._id],
    themes: [horror._id, zombies._id]
  }, {
    name: 'Get Bit!',
    imageURL: 'http://cf.geekdo-images.com/images/pic1700239.jpg',
    bggId: '30539',
    mechanics: [handManagement._id, playerElimination._id, simultaneousAction._id, bluffing._id],
    themes: [casual._id, partyGame._id, cardGame._id]
  }, {
    name: 'Pairs', 
    imageURL: 'http://cf.geekdo-images.com/images/pic2292416.jpg',
    bggId: '152237',
    mechanics: [pressYourLuck._id],
    themes: [casual._id, cardGame._id, partyGame._id]
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
    console.log('finished populating users');
  });
});