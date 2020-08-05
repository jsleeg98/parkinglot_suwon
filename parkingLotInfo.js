var parkingLot = [];

var info = {
    name : "",
    branchAddress : "",
    fare : "",
    lat : 0,
    lng : 0
}

$.ajax({
    url : "parkingLot_Suwon.csv",
    dataType : "text",
    success : function(data){
        var park_data = data.split(/\r?\n|\r/);
        
        for(var count = 0 ; count < park_data.length ; count++){
            var cell_data = park_data[count].split(",");
            
            for(var cell_count = 0 ; cell_count< cell_data.length ; cell_count ++){
                if(cell_count ==0){
                    info.name = cell_data[cell_count];
                }
                else if(cell_count == 1){
                    info.branchAddress = cell_data[cell_count];
                }
                else if(cell_count == 2){
                    info.fare = cell_data[cell_count];
                }
                else if(cell_count == 3){
                    info.lat = cell_data[cell_count];
                }
                else if(cell_count == 4){
                    info.lng = cell_data[cell_count];
                }
                
            }
            parkingLot.push(info);
            
        }
    }
})

