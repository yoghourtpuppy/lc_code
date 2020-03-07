var myAlerts = [];

for (let i = 0; i < 5; i++) {
    myAlerts.push(
        function inner() {
            console.log('Called here');
        }
    );
}

myAlerts[1](); // 5