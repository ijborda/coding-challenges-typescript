const fn = {
  init: function (elevators, floors) {
    console.log(elevators);

    const getNearestFloor = (currentFloor, targetFloors) => {
      const distances = targetFloors.map(floor => Math.abs(floor - currentFloor));
      const minDistance = Math.min(...distances);
      const minDistanceIndex = distances.findIndex(distance => distance === minDistance);
      const nearestFloor = targetFloors[minDistanceIndex];
      return nearestFloor;
    };

    const getOptimalElevator = (currentFloor, elevators) => {
      const availableElevator = elevators.filter(elevator => elevator.destinationQueue.length === 0);
      if (availableElevator.length > 0) return availableElevator[0];
      // Choose nearest elevator
      return getNearestElevator(currentFloor, elevators);
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
      return elevator.loadFactor() > 0.7;
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
      rearrangeQueue(elevator);
    };

    const sortQueue = (arr) => {
      let array = [...arr.map(item => Number(item))];
      let batchNum = 0;
      const sorted = [];
      while (array.length !== 0) {
        const batch = Array.from(new Set(array)).sort((a, b) => a - b);
        if (batchNum % 2 === 0) {
          sorted.push(...batch);
        } else {
          sorted.push(...batch.reverse());
        }
        array = removeFirstMatchesInArray(array, batch);
        batchNum += 1;
      }
      return sorted;
    };

    const removeFirstMatchInArray = (array, item) => {
      const arrayCopy = [...array];
      const index = arrayCopy.indexOf(item);
      if (index > -1) { // only splice array when item is found
        arrayCopy.splice(index, 1); // 2nd parameter means remove one item only
      }
      return arrayCopy;
    };

    const removeFirstMatchesInArray = (array, items) => {
      let arrayCopy = [...array];
      items.forEach(item => {
        arrayCopy = removeFirstMatchInArray(arrayCopy, item);
      });
      return arrayCopy;
    };

    const rearrangeQueue = (elevator) => {
      elevator.destinationQueue = sortQueue(elevator.destinationQueue);
      elevator.checkDestinationQueue();
    };

    // eslint-disable-next-line array-callback-return
    elevators.map((elevator, i) => {
      elevator.on('floor_button_pressed', function (floorNum) {
        queueFloor(elevator, floorNum);
      });

      elevator.on('stopped_at_floor', function () {
        if (isElevatorFull(elevator)) {
          const target = getNearestFloor(elevator.currentFloor(), elevator.getPressedFloors());
          elevator.destinationQueue = [target, ...elevator.destinationQueue];
          elevator.checkDestinationQueue();
          console.log('>>> stopped', i, target, elevator.destinationQueue);
          return;
        }
        if (elevator.destinationQueue.length > 0) {
          const nextFloorNumber = elevator.destinationQueue[0];
          if (isFloorEmpty(nextFloorNumber) && !isThereToUnload(nextFloorNumber, elevator)) {
            console.log('>>> skipped floor', i, nextFloorNumber);
            elevator.destinationQueue = elevator.destinationQueue.slice(1);
            elevator.checkDestinationQueue();
          }
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
