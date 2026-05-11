import express from 'express';

const app = express();

app.post("/conversation",async(req,res)=>{
    //get the query from the user

    //make sure user has access/credits to hit the endpoint

    //check if we have web seach indexed for a similar query

    //web search to gather resources

    //do some context engineering on the prompt + web seach repsonses

    //hit the LLM and stream back the reponse
    
})