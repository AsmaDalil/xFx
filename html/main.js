const RxHR = require('@akanass/rx-http-request').RxHR;
const Rx = require('rxjs');
const op = require('rxjs/op');
var observable$ = null;
var sub = null;

functionMain = function () {
    try {
        if (document.getElementById("button").value == "Start") {
            document.getElementById("button").value = "Stop";
            const n = document.getElementById("n").value * 1000;
            observable$ = RxHR.get('http://localhost:8080/access/capture');
            sub = Rx.interval(n).subscribe(
                () => {
                    observable$.pipe(
                        op.filter(
                            (d) => d.response.statusCode === 200
                        ),
                        op.catchError((err,caught) => {
                            alert("ERROR!");
                            return Rx.empty();
                        })
                        ).subscribe(
                            (d) => {
                                document.getElementById("Item").src = "d:image/png;base64," + d.body;
                            },
                            (err) => {
                                alert("ERROR!");
                                console.error(err);
                            } // Show error in console
                        )
                },
                (err) =>{
                    console.log(err);
                    alert("ERROR!");
                }
            );
        }
        else {
            document.getElementById("button").value = "Start";
            sub.unsubscribe();
        }
    } catch (error) {
        console.log("error")
        alert("ERROR!");
    }
};

