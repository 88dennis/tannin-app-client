import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
// import Form from "../components/Form";
import Wine from "../components/Wine";
// import Footer from "../components/Footer";
// import Infowine from "../components/Infowine";
// import { Link } from "react-router-dom";
import API from "../utils/API";
import { Container } from "../components/Grid";
import { List } from "../components/List";

class Wines extends Component {
  state = {
   
  };

  // componentDidMount(){
  // console.log("???????????????");

  // console.log(this.props.user)

  // }
handleWineAdd = id => {
  // console.log(this.state);
  // console.log("REID: " + this.state.user.restaurantId);
  const wine = this.props.winesMaster.find(wine => wine._id === id);
  const wineData = {
    wineId: wine._id,
    restaurantId: this.props.user.restaurantId
    }
    console.log("ADDWINE INFOR");
    console.log(wineData);
    console.log("ADDWINE INFOR");
  API.addWine(wineData).then(res => {
    console.log("ADD WINE");
    if (res.data === undefined) {
      
      console.log("YOU HAVE THAT ON YOU ALREADY")
    } else {
      console.log(res.data);
  this.props.getSavedWine();

    }
    console.log("ADD WINE");
    this.setState({
      wineCollections: res.data.Wines
    });

  }).catch(err => {
    console.log(err)
  });;
}

  render() {

    return (
<Container>

<div className="allwrap">
<br></br>
<div className="texttanninwrap">
<div className="texttanninwrap2">
<div className="texttanninwrap3">
        <h1 className="texttannin">
            <p>Tannin</p>
      <button  onClick={()=>this.props.homeButton()}className="btnadminpage"><i className="fas fa-wine-glass-alt">   <span>Your Restaurant</span></i>
      </button>

          </h1>
          <div className="btnadminpagewrap">
          {/* <Link */}
            {/* className={window.location.pathname === "/admin/" + this.props.match.params.userId + "/userpage"}
            to={"/admin/"+this.props.match.params.userId+"/userpage"} */}

          {/* > */}
         
              {/* </Link> */}
        </div>
        </div>
          {/* <div className="textwinecolwrap"> */}
          {/* <h1 className="textwinecol">
            <strong>Wine Collections</strong>
          </h1> */}
          {/* <div className="textwinecolwrap">
          <h2 className="text-center">Add Wine to your Restaurant.</h2>
          </div> */}
{/* </div> */}
          </div>
          </div>
          
          <br></br>
        {/* <Card title="Wine Search">

              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card> */}
            <div className="cardwrapper0">
            <div className="winesheader">
            <h1 className="textcenter">
            <strong>Search for WINES</strong>
          </h1>
          </div>
          <div className="cardwrapper1a">
            <div className="cardwrapper1">
      <div className="cardwrapper2">
        <Card title="">
          {this.props.winesMaster.length ? (
            <List>
              {this.props.winesMaster.map(wine => (
                <Wine
                  key={wine._id}
                  id={wine._id}
                  name={wine.name}
                  // showMe={this.state.showMe}
                  hideShowWineMasterDetail={this.props.hideShowWineMasterDetail}
                  handleWineAdd={this.handleWineAdd}
                  wineName={wine.wineName}
                  wineId={wine.wineId}
                  wineacidity={wine.wineacidity}
                  wineAgeability={wine.wineAgeability}
                  wineAlcohol={wine.wineAlcohol}
                  wineBody={wine.wineBody}
                  wineDecant={wine.wineDecant}
                  wineGlassType={wine.wineGlassType}
                  winePairings={wine.winePairings}
                  winePrimaryFlavors={wine.winePrimaryFlavors}
                  winePronunciation={wine.winePronunciation}
                  wineRegion={wine.wineRegion}
                  wineSummary={wine.wineSummary}
                  wineSweetness={wine.wineSweetness}
                  wineTannin={wine.wineTannin}
                  wineTemp={wine.wineTemp}
                  wineVarietal={wine.wineVarietal}
                >
                </Wine>
              ))}
            </List>
          ) : (
              <h2 className="text-center">Not Available</h2>
            )}
        </Card>
        </div>
        </div>
        </div>
        </div>
        {/* -------------------- */}

        </div>
{/*         
        <Footer /> */}
      </Container>
    );
  }
}

export default Wines;
