const trainScheduleElement = document.getElementById('Joe Doe Company');

async function fetchTrainSchedule() {
  try {
    const response = await fetch('/api/profile'); // Replace with your API endpoint
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching train schedule:', error);
  }
}

function displayTrainSchedule(scheduleData) {
  const trainList = scheduleData.map(train => `
    <div class="train">
      <p>Train Number: ${train.trainNumber}</p>
      <p>Departure: ${train.departure}</p>
      <p>Destination: ${train.destination}</p>
    </div>
  `).join('');

  trainScheduleElement.innerHTML = trainList;
}

async function initializeApp() {
  const scheduleData = await fetchTrainSchedule();
  displayTrainSchedule(scheduleData);
}

initializeApp();
