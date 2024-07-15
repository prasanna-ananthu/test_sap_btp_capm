module.exports = (srv) => {             //srv is parameter to take
 
    //implementation code
    // srv.on('greetings', (req,res)=>{
    //     return "good morning ! " + req.data.name ;
    // })
    
    srv.on('multiply',(req,res) =>{
        var c = req.data.a * req.data.b;
        return "Mulitplication is" + c;
    })
}