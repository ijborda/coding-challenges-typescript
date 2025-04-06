const fn = {
  init: function (elevators, floors) {
    const getNearestFloor = (currentFloor, targetFloors) => {
      const distances = targetFloors.map(floor => Math.abs(floor - currentFloor));
      const minDistance = Math.min(...distances);
      const minDistanceIndex = distances.findIndex(distance => distance === minDistance);
      const nearestFloor = targetFloors[minDistanceIndex];
      return nearestFloor;
    };

    const getOptimalElevator = (currentFloor, elevators) => {
      const freeElevators = elevators.filter(elevator => !isElevatorFull(elevator));
      const availableElevator = elevators.filter(elevator => elevator.destinationQueue.length === 0);
      if (availableElevator.length > 0) return availableElevator[0];
      // Choose nearest elevator
      return getNearestElevator(currentFloor, freeElevators);
    };

    const getNearestElevator = (currentFloor, elevators) => {
      const distances = elevators.map(elevator => {
        if (elevator.destinationQueue.length > 0) {
          return Math.abs(elevator.destinationQueue[elevator.destinationQueue.length - 1] - currentFloor);
        }
        return Math.abs(elevator.currentFloor() - currentFloor);
      });
      const minDistance = Math.min(...distances);
      const minDistanceIndex = distances.findIndex(distance => distance === minDistance);
      const nearestElevator = elevators[minDistanceIndex];
      return nearestElevator;
    };

    const isElevatorFull = (elevator) => {
      return elevator.loadFactor() > 0.9;
    };

    const isFloorEmpty = (floorNum) => {
      const floor = floors.find(floor => floor.level === floorNum);
      return floor.buttonStates.up === '' && floor.buttonStates.up === '';
    };

    const isThereToUnload = (targetFloorNum, elevator) => {
      return elevator.getPressedFloors().includes(targetFloorNum);
    };

    const queueFloor = (elevator, floorNum) => {
      elevator.goToFloor(floorNum);
    };

    // eslint-disable-next-line array-callback-return
    elevators.map((elevator, i) => {
      elevator.on('floor_button_pressed', function (floorNum) {
        queueFloor(elevator, floorNum);
      });

      elevator.on('stopped_at_floor', function () {
        if (elevator.destinationQueue.length > 0) {
          const nextFloorNumber = elevator.destinationQueue[0];
          if (isFloorEmpty(nextFloorNumber) && !isThereToUnload(nextFloorNumber, elevator)) {
            elevator.destinationQueue = elevator.destinationQueue.slice(1);
            elevator.checkDestinationQueue();
          }
        }
        if (isElevatorFull(elevator)) {
          const target = getNearestFloor(elevator.currentFloor(), elevator.getPressedFloors());
          elevator.destinationQueue = [target, ...elevator.destinationQueue];
          elevator.checkDestinationQueue();
        }
      });

      elevator.on('idle', function () {
        queueFloor(elevator, 0);
      });
    });

    // eslint-disable-next-line array-callback-return
    floors.map(floor => {
      floor.on('up_button_pressed', function () {
        const elevator = getOptimalElevator(floor.level, elevators);
        queueFloor(elevator, floor.level);
      });

      floor.on('down_button_pressed', function () {
        const elevator = getOptimalElevator(floor.level, elevators);
        queueFloor(elevator, floor.level);
      });
    });
  },

  update: function (dt, elevators, floors) {
    // We normally don't need to do anything here
  }
};
