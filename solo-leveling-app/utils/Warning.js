import * as Notifications from 'expo-notifications';

export async function scheduleDailyWarning() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Warning",
      body: "One hour left to complete your daily quest!",
      data: { type: 'warning' },
    },
    trigger: {
        hour: 23, // 11 PM
        minute: 0, // 0 minutes
        repeats: true, // Repeat daily
    },
  });
}