# Weekday Message Sender
## 概要
平日の決まった時間にメッセージをSlack POST リクエスト形式で送信する。

## 使い方
1. 用意したSlack Income WebhookUrl に書き換える。
    ```
    function getWebhookURL() {
        return "$Slack Income WebhookUrl";
    }
    ```

1. GAS トリガーをセット

    - 実行する関数: setStartActivities
    - デプロイ時に実行: Head
    - イベントのソースを選択: 時間主導型
    - 時間ベースのトリガーのタイプを選択: 日付ベースのタイマー
    - 時刻を選択: 午前0時-1時