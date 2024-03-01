 const fetchData = async () => {
            try {
                const username = 'inforno0230'; // Replace 'your_username' with your actual username
                const password = 'esp32_prod'; // Replace 'your_password' with your actual password
                const basicAuth = btoa(`${username}:${password}`);
                const response = await fetch('144.24.102.213', {
                    headers: {
                        'Authorization': `Basic ${basicAuth}`
                    }
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                document.getElementById('temperature').textContent = data.temperature;
                document.getElementById('humidity').textContent = data.humidity;
                document.getElementById('moisture').textContent = data.moisture;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();