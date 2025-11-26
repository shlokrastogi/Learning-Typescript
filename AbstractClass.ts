abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string 
    ){}

    //abstract getSepia(): void
}

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void{     
        console.log("sepia")
    }
    getReelTime(): number{
        //some complex calculations
        //console.log("sepia")
        return 8
    }
}

// you cannot create a object from the abstracted class you can create after inheriting it
//const shlok = new TakePhoto("test", "test")

const sr = new Instagram("test", "test", 3)
sr.getReelTime()

export{}