importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);
firebase.initializeApp({
    apiKey: "AIzaSyAPaAL9BPLWk2-q6EBTedq_GOFVs2dTOTI",
    authDomain: "payout-app-c1459.firebaseapp.com",
    projectId: "payout-app-c1459",
    storageBucket: "payout-app-c1459.appspot.com",
    messagingSenderId: "183830516875",
    appId: "1:183830516875:web:f91e010fe62276b91d308e",
    measurementId: "G-B7QQ4MM8X4",
});
// const firebaseConfig = {
//     apiKey: "AIzaSyAPaAL9BPLWk2-q6EBTedq_GOFVs2dTOTI",
//     authDomain: "payout-app-c1459.firebaseapp.com",
//     projectId: "payout-app-c1459",
//     storageBucket: "payout-app-c1459.appspot.com",
//     messagingSenderId: "183830516875",
//     appId: "1:183830516875:web:f91e010fe62276b91d308e",
//     measurementId: "G-B7QQ4MM8X4"
//   };

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    const notifyMsg = payload["data"];
    if (notifyMsg) {
        const notificationTitle = notifyMsg.title ? notifyMsg.title : "";
        return self.registration.showNotification(notificationTitle, notifyMsg);
    } else {
        const trackingNotify = payload["notification"];
        const notificationTitle = trackingNotify.title
            ? trackingNotify.title
            : "";
        return self.registration.showNotification(
            notificationTitle,
            trackingNotify
        );
    }
});

self.addEventListener("notificationclick", async function (event) {
    event.notification.close();

    const data = JSON.parse(event.notification.data);
    let params = new URLSearchParams(data).toString();

    if (data?.portal == "admin") {
        switch (data?.page) {
            // Admin
            case "account_update":
                {
                    this.route.navigate([`merchant-onboard/view/${data?.id}`], {
                        queryParams: { type: 0 },
                    });
                }
                break;
            case "low_balance":
                {
                    this.route.navigate([`/wallet-maintenance`]);
                }
                break;
            case "new_commission":
                {
                    window.scrollTo({
                        left: 0,
                        top: 50,
                        behavior: "smooth",
                    });
                    this.route.navigate([`merchant-onboard/view/${data?.id}`], {
                        queryParams: { type: 0 },
                    });
                }
                break;
            case "cashback":
                {
                    this.route.navigate([
                        `/cash-back-management/view/${data?.id}`,
                    ]);
                }
                break;
            case "cash_request":
                {
                    this.route.navigate([`/cash-request/view/${data?.id}`]);
                }
                break;
            default:
                {
                    this.route.navigate([`/notification-details`]);
                }
                break;
        }
    } else if (data?.portal == "merchant") {
        switch (data?.page) {
            //Merchant
            case "account_approved":
                {
                    this.route.navigate([`/merchant/my-account`]);
                }
                break;
            case "balance_reminder":
                {
                    this.route.navigate([`/merchant/wallet-maintenance`]);
                }
                break;
            case "cash_req_verified":
                {
                    this.route.navigate([`/merchant/cash-request`]);
                }
                break;

            default:
                {
                    this.route.navigate([`/notification-details`]);
                }
                break;
        }
    }
    // Do something as the result of the notification click
});

self.addEventListener("notificationclose", function (event) {
    // Do something as the result of the notification close
});

function checkNull(data) {
    return data != null && data != "" && data != undefined;
}

// Changes
// ------------------------------------
// 1) Notifications folder in school , routing in app routing
// 2) add firebase & manifest in angular.json
// 3) add some package
// 4) add manifest & firebase file and add manifest in index.html
// 5) add core/mess.service
// 6) changes in app module.ts
// 7) add firebase in evironments
// 8) shared / components -> header-top & Notifications
