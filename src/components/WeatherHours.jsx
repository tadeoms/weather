const WeatherHours = () => {
  const hours = [
    { hour: '06:00 AM', temperature: 12, description: 'sun' },
    { hour: '07:00 AM', temperature: 14, description: 'sun' },
    { hour: '08:00 AM', temperature: 16, description: 'sun' },
    { hour: '09:00 AM', temperature: 18, description: 'sun' },
    { hour: '10:00 AM', temperature: 20, description: 'sun' },
    { hour: '11:00 AM', temperature: 22, description: 'sun' },
    { hour: '12:00 PM', temperature: 24, description: 'sun' },
    { hour: '01:00 PM', temperature: 26, description: 'sun' },
    { hour: '02:00 PM', temperature: 28, description: 'sun' },
    { hour: '03:00 PM', temperature: 30, description: 'sun' },
    { hour: '04:00 PM', temperature: 32, description: 'snowy' },
    { hour: '05:00 PM', temperature: 34, description: 'stormy' },
    { hour: '06:00 PM', temperature: 36, description: 'sun' },
    { hour: '07:00 PM', temperature: 38, description: 'sun' },
    { hour: '08:00 PM', temperature: 40, description: 'sun' },
    { hour: '09:00 PM', temperature: 42, description: 'sun' },
    { hour: '10:00 PM', temperature: 44, description: 'sun' },
  ];

  return (
    <div className="bg-blue-100 p-2 rounded-lg mb-5">
      <h6 className="p-2">TODAY’S FORECAST</h6>
      <div className="flex gap-2 overflow-x-scroll  scrollbar-hide">
        {hours.map((h, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-32 m-2 p-2 flex flex-col items-center rounded-xl min-w-min-content"
          >
            <h6 className="whitespace-nowrap">
              {h.hour}
            </h6>

            <p>{h.temperature}°</p>
          </div>
        ))}
      </div>


    </div>
  );
};

export default WeatherHours;
