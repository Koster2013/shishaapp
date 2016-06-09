Template.profile.helpers({
    bonusCodeCount: function () {
        return Session.get("bonuscode");
    }
});

Template.dashboard.onRendered = function () {
};


if (Meteor.isCordova) {
    Template.profile.events({
        'click #barcodeScanButton': function (e) {
            cordova.plugins.barcodeScanner.scan(
                function (result) {
                    var bonuscode = result.text;
                    if (bonuscode == "1111") {
                        var count = Session.get("bonuscode");
                        count = _.extend([], count);
                        count.push({test: "uefhrue"});
                        Session.set("bonuscode", count);
                    }
                }
            );
        }
    })
}

if (!Meteor.isCordova) {
    Template.profile.events({
        'click #barcodeScanButton': function (e) {
            var count = Session.get("bonuscode");
            count = _.extend([], count);
            count.push({test: "uefhrue"});
            Session.set("bonuscode", count);
        }
    })
}

