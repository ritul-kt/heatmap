

const activityData = {
    "2024-08-01": 5,
    "2024-08-02": 20,
    "2024-08-03": 15,
    "2024-08-04": 30,
    "2024-08-05": 25,
    "2024-08-06": 45,
    "2024-08-07": 10,
    "2024-08-08": 35,
    "2024-08-09": 50,
    "2024-08-10": 5,
    "2024-08-11": 10,
    "2024-08-12": 40,
    "2024-08-13": 30,
    "2024-08-14": 10,
    "2024-08-15": 25
};


const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getColor(activity) {
    if (activity >= 40 && activity <= 50) return '#1A6126';
    if (activity >= 30 && activity < 40) return '#219A3B';
    if (activity >= 21 && activity < 30) return '#7BC86F';
    if (activity >= 1 && activity <= 20) return '#C6E48B';
    return '#EBEEF0';
}

function createHeatmap() {
    const heatmap = document.getElementById('heatmap');
    
    const weekName = document.createElement('div');
    weekName.className = 'week';
    weeks.forEach((week) => {
        const weekLabel = document.createElement('p');
        weekLabel.textContent = week;
        weekName.appendChild(weekLabel);
    });
    heatmap.appendChild(weekName);

    months.forEach((month, monthIndex) => {
        const mon = document.createElement('div');
        mon.className = 'mon';

        const monthLabel = document.createElement('p');
        monthLabel.textContent = month;
        mon.appendChild(monthLabel);

        const ele = document.createElement('div');
        ele.className = 'element';

        for (let day = 1; day <= 31; day++) {
            const dateKey = `2024-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const activity = activityData[dateKey] || 0;

            const dayDiv = document.createElement('div');
            dayDiv.className = 'day';
            dayDiv.style.backgroundColor = getColor(activity);

            if (activity >= 0) {
                const tooltip = document.createElement('div');
                tooltip.className = 'tooltip';
                tooltip.textContent = `Activity: ${activity}`;
                dayDiv.appendChild(tooltip);
            }

            ele.appendChild(dayDiv);


            if (day === new Date(2024, monthIndex + 1, 0).getDate()) break;
        }

        mon.appendChild(ele);
        heatmap.appendChild(mon);
    });
}

window.onload = createHeatmap;
