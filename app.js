function toggleDevice(deviceId) {
  const statusSpan = document.getElementById(`${deviceId}-status`);
  const toggleButton = document.getElementById(`${deviceId}-toggle`);
  
  let currentState = statusSpan.innerText;
  if (currentState === "OFF") {
    statusSpan.innerText = "ON";
    toggleButton.innerText = "Turn OFF";
  } else {
    statusSpan.innerText = "OFF";
    toggleButton.innerText = "Turn ON";
  }

  // Optional: Send request to backend API to update real device state
  // fetch('/api/device/update', { method: 'POST', body: JSON.stringify({ device: deviceId, state: newState }) })
}
