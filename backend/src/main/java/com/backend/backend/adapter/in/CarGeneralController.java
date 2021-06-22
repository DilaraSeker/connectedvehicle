package com.backend.backend.adapter.in;
import com.backend.backend.domain.api.RestService;
import com.backend.backend.domain.models.*;
import com.backend.backend.port.in.CarGeneralControllerPort;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class CarGeneralController implements CarGeneralControllerPort {

    @Autowired
    RestService restService;

    @RequestMapping(value = "/aboutVehicle",method = RequestMethod.GET)
    public void aboutVehicle(@RequestHeader(value="authorization", required=false) String jwt){
        restService.doGetRequestWithJwt("https://api.mercedes-benz.com/experimental/connectedvehicle/v2/vehicles/A3B366F4D0E8D21EF8", VehicleDetail.class,"Bearer "+jwt);
    }
    @RequestMapping(value = "/distanceDriven",method = RequestMethod.GET)
    public void distanceDriven(@RequestHeader(value="authorization", required=false) String jwt){
        restService.doGetRequestWithJwt("https://api.mercedes-benz.com/experimental/connectedvehicle/v2/vehicles/A3B366F4D0E8D21EF8", DistanceDriven.class,"Bearer "+jwt);
    }
    @RequestMapping(value = "/distanceDrivenResponse",method = RequestMethod.GET)
    public void distanceDrivenResponse(@RequestHeader(value="authorization", required=false) String jwt){
        restService.doGetRequestWithJwt("https://api.mercedes-benz.com/experimental/connectedvehicle/v2/vehicles/A3B366F4D0E8D21EF8", DistanceDrivenResponse.class,"Bearer "+jwt);
    }
    @RequestMapping(value = "/doorLockChangedStatus",method = RequestMethod.GET)
    public void doorLockChangedStatus(@RequestHeader(value="authorization", required=false) String jwt){
        restService.doGetRequestWithJwt("https://api.mercedes-benz.com/experimental/connectedvehicle/v2/vehicles/A3B366F4D0E8D21EF8", DoorLockChangedStatus.class,"Bearer "+jwt);
    }
    @RequestMapping(value = "/doorLockStatus",method = RequestMethod.GET)
    public void doorLockStatus(@RequestHeader(value="authorization", required=false) String jwt){
        restService.doGetRequestWithJwt("https://api.mercedes-benz.com/experimental/connectedvehicle/v2/vehicles/A3B366F4D0E8D21EF8", DoorLockStatus.class,"Bearer "+jwt);
    }
    @RequestMapping(value = "/doorOpenStatus",method = RequestMethod.GET)
    public void doorOpenStatus(@RequestHeader(value="authorization", required=false) String jwt){
        restService.doGetRequestWithJwt("https://api.mercedes-benz.com/experimental/connectedvehicle/v2/vehicles/A3B366F4D0E8D21EF8", DoorOpenStatus.class,"Bearer "+jwt);
    }
    @RequestMapping(value = "/doors",method = RequestMethod.GET)
    public void doors(@RequestHeader(value="authorization", required=false) String jwt){
        restService.doGetRequestWithJwt("https://api.mercedes-benz.com/experimental/connectedvehicle/v2/vehicles/A3B366F4D0E8D21EF8", Doors.class,"Bearer "+jwt);
    }
    @RequestMapping(value = "/fuelLevel",method = RequestMethod.GET)
    public void fuelLevel(@RequestHeader(value="authorization", required=false) String jwt){
        restService.doGetRequestWithJwt("https://api.mercedes-benz.com/experimental/connectedvehicle/v2/vehicles/A3B366F4D0E8D21EF8", FuelLevel.class,"Bearer "+jwt);
    }
    @RequestMapping(value = "/location",method = RequestMethod.GET)
    public void location(@RequestHeader(value="authorization", required=false) String jwt){
        restService.doGetRequestWithJwt("https://api.mercedes-benz.com/experimental/connectedvehicle/v2/vehicles/A3B366F4D0E8D21EF8", Location.class,"Bearer "+jwt);
    }
    @RequestMapping(value = "/locationCoordinate",method = RequestMethod.GET)
    public void locationCoordinate(@RequestHeader(value="authorization", required=false) String jwt){
        restService.doGetRequestWithJwt("https://api.mercedes-benz.com/experimental/connectedvehicle/v2/vehicles/A3B366F4D0E8D21EF8", LocationCoordinate.class,"Bearer "+jwt);
    }
    @RequestMapping(value = "/stateOfCharge",method = RequestMethod.GET)
    public void stateOfCharge(@RequestHeader(value="authorization", required=false) String jwt){
        restService.doGetRequestWithJwt("https://api.mercedes-benz.com/experimental/connectedvehicle/v2/vehicles/A3B366F4D0E8D21EF8", StateOfCharge.class,"Bearer "+jwt);
    }
    @RequestMapping(value = "/tirePressureStatus",method = RequestMethod.GET)
    public void tirePressureStatus(@RequestHeader(value="authorization", required=false) String jwt){
        restService.doGetRequestWithJwt("https://api.mercedes-benz.com/experimental/connectedvehicle/v2/vehicles/A3B366F4D0E8D21EF8", TirePressureStatus.class,"Bearer "+jwt);
    }
    @RequestMapping(value = "/tires",method = RequestMethod.GET)
    public void tires(@RequestHeader(value="authorization", required=false) String jwt){
        restService.doGetRequestWithJwt("https://api.mercedes-benz.com/experimental/connectedvehicle/v2/vehicles/A3B366F4D0E8D21EF8", Tires.class,"Bearer "+jwt);
    }
    @RequestMapping(value = "/vehicle",method = RequestMethod.GET)
    public void vehicle(@RequestHeader(value="authorization", required=false) String jwt){
        restService.doGetRequestWithJwt("https://api.mercedes-benz.com/experimental/connectedvehicle/v2/vehicles/A3B366F4D0E8D21EF8", Vehicle.class,"Bearer "+jwt);
    }
}
