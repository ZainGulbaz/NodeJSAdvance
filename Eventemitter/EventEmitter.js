class EventEmitter{

    constructor(){
        this.events=[];
    }

    on(name,func){
     
        this.events.push({
            name,
            func
        })
      
    }

    once(name,func){

        this.events.push({
            name,
            func,
            once:true
        })

    }

    emit(name){
        for(const evt of this.events){

            if(evt.name===name){
                evt.func();
                if(evt.once==true){
                    let newEvents=this.events.filter(_evt=>{
                           if(JSON.stringify(evt)!==JSON.stringify(_evt)) return _evt;
                    });
                }
                break;
            }
    }
}


}

module.exports=EventEmitter;
