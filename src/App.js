import React, { useState, useEffect } from 'react';
import QuoteGenerator from './components/QuoteGenerator';
import {random} from 'lodash';
import {Grid} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center'
  }
}

//class App extends Component {
 // constructor(props){
   // super(props);
  
  //this.state = {
   // quotes: [],
  //  selectedQuoteIndex: null //index where selected quote lives
 // }

  //this.selectQuoteIndex = this.generateNewQuoteIndex.bind(this);
  //this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
//}

function App({classes}){
 const [quotes, setquotes] = useState([]);
 const [selectedQuoteIndex, setSelectedQuoteIndex] = useState(null);

 useEffect(async()=>{
   const data = await fetch ("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
   const quotes = await data.json();
   setquotes(quotes);
   setSelectedQuoteIndex(random(0,quotes.length -1))
 }, []) //to prevent rerendering



//componentDidMount(){
//  fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
 // .then(data => data.json())
 // .then(quotes => this.setState({quotes} ,this.assignNewQuoteIndex))
// }  // because  index should be set only after getting quotes


 // nextQuoteclickHandler(){
   // console.log('hi');
  //}

/**
 * return an integer representing an index in state.quotes 
 * if states.quote is empty return undefuned
 */
function generateNewQuoteIndex() {
  //if no length in quotes array
  if(!quotes.length){
    return undefined;
  }
  return random (0, quotes.length - 1);
}

function assignNewQuoteIndex(){
  setSelectedQuoteIndex(generateNewQuoteIndex())};



function getSelectedQuote(){
  // if empty array or no integer
  if(quotes.length || !Number.isInteger(selectedQuoteIndex)){
    return undefined;
  }
  return quotes[selectedQuoteIndex]
}

 
    //console.log(this.state.selectedQuoteIndex);
  
    return (
      //as we are using get syntax therefore we can use selectedQuote as variable
      //if selectedQuote exists 
      <Grid className={classes.container}  id="quote-box" justify="center" container>
      <Grid xs={11} lg={8} item>
      {
        getSelectedQuote() ? 
        <QuoteGenerator selectedQuote={getSelectedQuote()} assignNewQuoteIndex={assignNewQuoteIndex} /> :
        null
      }
      </Grid>
      </Grid>
    );
  }


export default withStyles(styles)(App);
