import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { IconButton } from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'


const QuoteGenerator = ({assignNewQuoteIndex, selectedQuote}) => (
    <Card>
        <CardContent>
        {
            <Typography id="text">
            {selectedQuote.quote} -<span id="author">{selectedQuote.author}</span>
            </Typography>
        }
        </CardContent>
        <CardActions> 
        <Button id="new-quote" size="small" onClick={assignNewQuoteIndex}> Next Quote </Button>
        <IconButton id="tweet-quote" target="_blank" 
        href= {encodeURI(`https://twitter.com/intent/tweet?text=${selectedQuote.quote}&hashtags=motivation`)}>
        <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon> 
        </IconButton>
        </CardActions>
    </Card>
    

);

export default QuoteGenerator;
