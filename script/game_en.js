var CardList = React.createClass({
    render: function() {
        var currentcards = this.props.currentcards.map(function(card, index) {       
            return (
                    <img className="cardimg" src={card.img} id={index} key={index} data-key={index} alt="card" onClick={this.props.showInfo.bind(null, index)} />
                                                  
            );
        }.bind(this));
    
        return (
            <div id="cardlist">{currentcards}</div>
        )
    }  
});

var InfoList = React.createClass({  
    render: function() {
        return (
            <div id="info">
            <h3 className="cardname">{this.props.allstats.cardname}</h3>
            <p className="tooltip">"{this.props.allstats.tooltip}"</p>
            <p className="dmg"><b>{this.props.allstats.damagetext}:</b> {this.props.allstats.dmg}</p>
            <p className="range"><b>{this.props.allstats.rangetext}:</b> {this.props.allstats.range}</p>
            <p className="use"><b>{this.props.allstats.usetext}:</b> {this.props.allstats.use}</p>
            <p className="price"><b>{this.props.allstats.pricetext}:</b> {this.props.allstats.price}</p>
            <p className="desc">{this.props.allstats.desc}</p>
            <p className="util">{this.props.allstats.util}</p>
            </div>      
        )
    }  
});

var CardType = React.createClass({
    render: function() {
        return (
            <div id="cardtype">
            <h3>{this.props.cardtypename}</h3>
            <p>{this.props.cardtypetext}</p>
            </div>      
        )
    }  
});

var TopLeft = React.createClass({
    render: function() {
        return (
            <div id="topleftbox">
            <h1>{this.props.maintext}</h1>
            <p>{this.props.maintext2}</p>
            <a onClick={this.props.switchlangfi}>fin</a><a onClick={this.props.switchlangeng}>eng</a>
            </div>      
        )
    }  
});

var SearchTab = React.createClass({
    render: function() {
        return (
            <div id="searchtab">
                <input type="text" id="searchinput" placeholder="Search" onKeyUp={this.props.searchItem}/>
            </div>      
        )
    }  
});
var WeaponTab = React.createClass({
    render: function() {
        return (
            <div id="weapontab" onClick={this.props.switchcards} className="tabdark">
                <p id="tab"><b>Weapon cards</b></p>
            </div>      
        )
    }  
});
var TrinketTab = React.createClass({
    render: function() {
        return (
            <div id="trinkettab" onClick={this.props.switchcards} className="tablight">
                <p id="tab"><b>Trinket cards</b></p>
            </div>      
        )
    }  
});
var RedTab = React.createClass({
    render: function() {
        return (
            <div id="redtab" onClick={this.props.switchcards} className="tablight">
                <p id="tab"><b>Red cards</b></p>
            </div>      
        )
    }  
});
var App = React.createClass({

    getInitialState: function() {
        return {
            allstats: {
                "damagetext": "Damage",
                "rangetext": "Range",
                "usetext": "Uses",
                "pricetext": "Price",
                "cardname": "-",
                "tooltip": "-",
                "dmg": "-",
                "range": "-",
                "use": "-",
                "price": "-",
                "desc": "-",
                "util": "-"
            },
            cardtypetext: "Cards that can be used to hurt other players, or to increase your own odds of survival. Weapon cards can be acquired by stepping on a shop tile and purchasing using points. A player can hold up to a maximum of 3 weapon cards.",
            cardtypename: "Weapon cards",
            currentcards: cards,
            currentcardid: 0,
            damagetext: "Damage",
            rangetext: "Range",
            usetext: "Uses",
            pricetext: "Price",
            maintext: "card game thing.",
            maintext2: "work in progress. nothing may or may not be final.",
            lang: 0, //0 == english, 1 == finnish
            currenttab: 0,
            weapontab: document.getElementById("weapontab"),
            trinkettab: document.getElementById("trinkettab"),
            redtab: document.getElementById("redtab")
            
        }
    },
    
    showInfo: function(index) {
        this.state.currentcardid = index;
        $(".cardimg").css("box-shadow", "");
        $("#"+index).css("box-shadow", "0px 0px 0px 4px #f22828");
        this.state.allstats.cardname = this.state.currentcards[index].name;
        this.state.allstats.tooltip = this.state.currentcards[index].tooltip;
        this.state.allstats.dmg = this.state.currentcards[index].dmg;
        this.state.allstats.range = this.state.currentcards[index].range;
        this.state.allstats.use = this.state.currentcards[index].use;
        this.state.allstats.price = this.state.currentcards[index].price;
        this.state.allstats.desc = this.state.currentcards[index].desc;
        this.state.allstats.util = this.state.currentcards[index].util;
        this.setState(prevState => ({
            
            allstats: {
                ...prevState.allstats
            }
        }))
    },
    switchCards: function(num) {
        if (num == "w") {
            if (this.state.lang == 0) {
                this.state.cardtypename = "Weapon cards";
                this.state.cardtypetext = "Cards that can be used to hurt other players, or to increase your own odds of survival. Weapon cards can be acquired by stepping on a shop tile and purchasing using points. A player can hold up to a maximum of three weapon cards.";
                this.setState({currentcards: cards, currenttab: 0, cardtypename: this.state.cardtypetext, cardtypename: this.state.cardtypename}) }
            else if (this.state.lang == 1) {
                this.state.cardtypename = "Asekortit";
                this.state.cardtypetext = "Kortteja, joilla voit satuttaa pelaajia, tai yleisesti ottaen kohottaa omia selviytymiusmahdollisuuksiasi. Pelaaja voi hankkia kortteja astumalla kaupparuutuun, ostaminen tapahtuu pisteillä. Kädessä voi olla kerrallaan max. 3 korttia.";
                this.setState({currentcards: cardsfin, currenttab: 0, cardtypename: this.state.cardtypetext, cardtypename: this.state.cardtypename}) }
            weapontab.className = "tabdark";
            trinkettab.className = "tablight";
            redtab.className = "tablight";
        }
        else if (num == "t") {        
            if (this.state.lang == 0) {
                this.state.cardtypename = "Trinket cards";
                this.state.cardtypetext = "Cards that have a variety of passive effects on the player. At the start of a game, each player is randomly dealt one trinket card. The card can be randomly switched to another one a the player's home tile. The switch costs 100 pts.";
                this.setState({currentcards: cards2, currenttab: 1, cardtypename: this.state.cardtypetext, cardtypename: this.state.cardtypename}) }
            else if (this.state.lang == 1) {
                this.state.cardtypename = "Esinekortit";
                this.state.cardtypetext = "Kortteja, joilla on passivinen vaikutus pelaajaan. Pelin alussa kullekkin pelaajalle jaetaan yksi esinekortti, jonka pelaaja voi vaihtaa pelin aikana uuteen omassa kotiruudussaan. Vaihto maksaa 100pst.";
                this.setState({currentcards: cards2fin, currenttab: 1, cardtypename: this.state.cardtypetext, cardtypename: this.state.cardtypename}) }
            weapontab.className = "tablight";
            trinkettab.className = "tabdark";
            redtab.className = "tablight";
        }
        else if (num == "r") {
            if (this.state.lang == 0) {
                this.state.cardtypename = "Red cards";
                this.state.cardtypetext = "Single use cards that have varying effects either on the player or the targeted enemy. One red card can be used per turn by default. A player can hold up to a maximum of three red cards. The cards are kept hidden from other players.";
                this.setState({currentcards: cards3, currenttab: 2, cardtypename: this.state.cardtypetext, cardtypename: this.state.cardtypename}) }
            else if (this.state.lang == 1) {
                this.state.cardtypename = "Punaiset kortit";
                this.state.cardtypetext = "Kertakäyttöisiä kortteja, jotka voivat vaikuttavaa joko käyttäjään tai viholliseen. Pelaajalla voi olla max. 6 korttia kädessä. Kortit pidetään piilossa muilta pelaajilta.";
                this.setState({currentcards: cards3fin, currenttab: 2, cardtypename: this.state.cardtypetext, cardtypename: this.state.cardtypename}) }
            weapontab.className = "tablight";
            trinkettab.className = "tablight";
            redtab.className = "tabdark";
        }
    },
    
    searchItem: function(event) {
        var filter = event.target.value.toUpperCase();
        var cardlistitems = document.getElementById("cardlist");
        var filteritem = cardlistitems.getElementsByTagName("img");
        var currenttab = this.state.currenttab;
        var item;
            for (var i=0; i < filteritem.length; i++) {
                item = this.state.currentcards[i].name.toUpperCase();
                if (item.indexOf(filter) > -1) {
                    filteritem[i].style.display = ""
                }
                else {
                    filteritem[i].style.display = "none"
                }
            }
    },
    switchlangFi: function(index) {
        this.state.maintext = "lautapelijuttu."
        this.state.maintext2 = "homma työn alla. asiat eivät ole välttämättä valmiissa tilassa."
        this.state.allstats.damagetext = "Vahinko"
        this.state.allstats.rangetext = "Etäisyys"
        this.state.allstats.usetext = "Käyttökerrat"
        this.state.allstats.pricetext = "Hinta" 
        if (this.state.currenttab == 0) {
            this.state.cardtypename = "Asekortit";
            this.state.cardtypetext = "Kortteja, joilla voit satuttaa pelaajia, tai yleisesti ottaen kohottaa omia selviytymiusmahdollisuuksiasi. Pelaaja voi hankkia kortteja astumalla kaupparuutuun, ostaminen tapahtuu pisteillä. Kädessä voi olla kerrallaan max. 3 korttia.";
            this.state.currentcards = cardsfin; }
        else if (this.state.currenttab == 1) {
            this.state.cardtypename = "Esinekortit";
            this.state.cardtypetext = "Kortteja, joilla on passivinen vaikutus pelaajaan. Pelin alussa kullekkin pelaajalle jaetaan yksi esinekortti, jonka pelaaja voi vaihtaa pelin aikana uuteen omassa kotiruudussaan. Vaihto maksaa 100pst.";
            this.state.currentcards = cards2fin; }
        else if (this.state.currenttab == 2) {
            this.state.cardtypename = "Punaiset kortit";
            this.state.cardtypetext = "Kertakäyttöisiä kortteja, jotka voivat vaikuttavaa joko käyttäjään tai viholliseen. Pelaajalla voi olla max. 6 korttia kädessä. Kortit pidetään piilossa muilta pelaajilta.";
            this.state.currentcards = cards3fin; }
        this.showInfo(this.state.currentcardid);
        this.setState({lang: 1, maintext: this.state.maintext, currentcards: this.state.currentcards, allstats: this.state.allstats, cardtypename: this.state.cardtypetext, cardtypename: this.state.cardtypename})
    },
    switchlangEng: function(index) {
        this.state.maintext = "card game thing."
        this.state.maintext2 = "work in progress. nothing may or may not be final."
        this.state.allstats.damagetext = "Damage"
        this.state.allstats.rangetext = "Range"
        this.state.allstats.usetext = "Uses"
        this.state.allstats.pricetext = "Price"
        if (this.state.currenttab == 0) {
            this.state.cardtypename = "Weapon cards";
            this.state.cardtypetext = "Cards that can be used to hurt other players, or to increase your own odds of survival. Weapon cards can be acquired by stepping on a shop tile and purchasing using points. A player can hold up to a maximum of three weapon cards.";
            this.state.currentcards = cards; }
        else if (this.state.currenttab == 1) {
            this.state.cardtypename = "Trinket cards";
            this.state.cardtypetext = "Cards that have a variety of passive effects on the player. At the start of a game, each player is randomly dealt one trinket card. The card can be randomly switched to another one a the player's home tile. The switch costs 100 pts.";
            this.state.currentcards = cards2; }
        else if (this.state.currenttab == 2) {
            this.state.cardtypename = "Red cards";
            this.state.cardtypetext = "Single use cards that have varying effects either on the player or the targeted enemy. One red card can be used per turn by default. A player can hold up to a maximum of three red cards. The cards are kept hidden from other players.";
            this.state.currentcards = cards3; }
        this.showInfo(this.state.currentcardid);
        this.setState({lang: 0, maintext: this.state.maintext, currentcards: this.state.currentcards, allstats: this.state.allstats, cardtypename: this.state.cardtypetext, cardtypename: this.state.cardtypename})
    },
    
    render: function() {
        return (
            <div>
            <CardType cardtypetext={this.state.cardtypetext} cardtypename={this.state.cardtypename}/>
            <TopLeft maintext={this.state.maintext} maintext2={this.state.maintext2} allstats={this.state.allstats} showInfo={this.showInfo} currentcards={this.state.currentcards} switchlangfi={this.switchlangFi} switchlangeng={this.switchlangEng}/>
            <CardList allstats={this.state.allstats} currentcards={this.state.currentcards} currentcardid={this.state.currentcardid} showInfo={this.showInfo}/>
            <InfoList allstats={this.state.allstats}/>
            <WeaponTab switchcards={this.switchCards.bind(this, "w")}/>
            <TrinketTab switchcards={this.switchCards.bind(this, "t")}/>
            <RedTab switchcards={this.switchCards.bind(this, "r")}/>
            <SearchTab searchItem={this.searchItem}/>
            </div>
        )
    } 
});

ReactDOM.render(
    <App/>,
    document.getElementById('main')
);