import express from 'express';

const app = express();

app.use(express.json());

app.post("/conversation",async(req,res)=>{
    //get the query from the user
    const query = req.body.query;
    //make sure user has access/credits to hit the endpoint
    
    //check if we have web seach indexed for a similar query

    //web search to gather resources

    //do some context engineering on the prompt + web seach repsonses

    //hit the LLM and stream back the reponse

    //also strema back sources and follow up questions (which we get from another parallel LLM call)

})

app.listen(3000,()=>{
    console.log("Server is running on PORT : 3000")
})