var app = new Vue({
    el: '#app',
    data: {
        riders:[

        ],
        newRiderFirstName : '',
        newRiderLastName : '',
        newRiderNumber : '',
        startTime: null,
    },
    computed: {
      sortedRiders: function () {
        return this.riders.sort(function (a, b){
          return b.laps.length - a.laps.length
        })
      }
},
    methods: {
      addRider: function(){
        if (this.newRiderNumber.length > 0){
          if (this.newRiderFirstName.length > 0){
            if (this.newRiderLastName.length > 0){
              this.riders.push(
                {
                  firstname: this.newRiderFirstName,
                  lastname: this.newRiderLastName,
                  number: parseInt(this.newRiderNumber),
                  laps: [],
                }
              )
              this.newRiderNumber = ''
              this.newRiderFirstName = ''
              this.newRiderLastName = ''
            }
          }
        }
      },

      addLap: function(riderNumber){
        const riderIndex = this.riders.findIndex(
          function(el) {
            return el.number === riderNumber
          }
        )
        const rider = this.riders[riderIndex]
        const lapTime = Math.round((Date.now() - this.startTime) / 1000)
        if (rider.laps.length < 5){
          rider.laps.push(lapTime)
          this.riders.push(rider)
          this.riders.splice(riderIndex, 1)
        }
        else {

        }
      },

      startRace: function(){
        this.startTime = Date.now()
      }
    }
});
