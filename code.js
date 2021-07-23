function getWebhookURL() {

    return "$Slack Income WebhookUrl";
}

const today = new Date();

function setStartActivities() {
    var day_of_today = today.getDay(); // Sunday - Saturday : 0 - 6

    if (day_of_today == 0 || day_of_today == 6) {

        return console.log("休日なので処理を終了します。");

    } else {

        return setTrigger("startActivities", today, 9, 50);
    }
}

function startActivities() {

    postToSlack("開始メッセージです。");
    setTrigger("endActivities", today, 10, 00);
}

function endActivities() {

    postToSlack("終了メッセージです。");
}

function postToSlack(message) {

    const webhookUrl = getWebhookURL();

    let body = {
        "message": message
    };

    let params = {
        method: 'post',
        contentType: 'application/json',
        payload: JSON.stringify(body)
    };

    return UrlFetchApp.fetch(webhookUrl, params);
}

function setTrigger(function_name, date, hour, minutes) {

    delTrigger(function_name);

    date.setHours(hour);
    date.setMinutes(minutes);

    return ScriptApp.newTrigger(function_name).timeBased().at(date).create();
}

function delTrigger(function_name) {

    const triggers = ScriptApp.getProjectTriggers();

    for (const trigger of triggers) {

        if (trigger.getHandlerFunction() == function_name) {

            ScriptApp.deleteTrigger(trigger);

        }
    }
}