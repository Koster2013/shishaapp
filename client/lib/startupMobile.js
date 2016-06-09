if (Meteor.isCordova) {
    Meteor.startup(function () {
        Session.set("bonuscode", []);

        //Fix Back Button
        document.addEventListener("deviceready", onDeviceReady, false);


        //Fix Exit Button
        document.addEventListener("backbutton", function (e) {
            navigator.app.exitApp();
        });


    });
}

if (!Meteor.isCordova) {
    Meteor.startup(function () {
        Session.set("bonuscode", 0);
    });
}